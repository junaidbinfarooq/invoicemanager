<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
use App\Invoice;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {

        // Get paginated invoices
        $invoices = Invoice::paginate();

        // Return the invoices as collection
        return InvoiceResource::collection($invoices);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {

        $invoice = new Invoice(

            request(['invoice_number', 'client_name', 'client_address', 'amount', 'invoice_date', 'due_date'])

        );

        if ($invoice->save()) {
            $now = Carbon::now();
            $lineItems = [];

            foreach ($request->line_items as $lineItem) {
                $lineItems[] = [
                    'invoice_id' => $invoice->id,
                    'name' => $lineItem['name'],
                    'quantity' => $lineItem['quantity'],
                    'price' => $lineItem['price'],
                    'total' => $lineItem['total'],
                    'created_at' => $now,
                    'updated_at' => $now
                ];
            }

            $data = array([
                'message' => 'New invoice created successfully'
            ]);

        } else {
            $data = array([
                'message' => 'Invoice could not be created'
            ]);
        }

        return JsonResponse::create($data);

    }

    /**
     * Display the specified resource.
     *
     * @param  Invoice $invoice
     * @return InvoiceResource
     */
    public function show(Invoice $invoice)
    {

        // Load the Line Items

        $invoice->load('invoiceLineItems');

        // Return the requested Invoice as a resource

        return new InvoiceResource($invoice);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Invoice $invoice
     * @return JsonResponse
     */
    public function update(Invoice $invoice)
    {

        if ($invoice->update(request(['invoice_number', 'client_name', 'client_address', 'amount', 'invoice_date', 'due_date']))) {
            $lines = request(['line_items']);
            $lineItems = $lines['line_items'];

            try {
                foreach ($lineItems as $lineItem) {
                    $invoice->invoiceLineItems()->update($lineItem);
                }
            } catch (\Exception $exception) {
                $data = array([
                    'exception' => $exception->getMessage()
                ]);

                return JsonResponse::create($data);
            }

            $data = array([
                'message' => 'Invoice updated successfully'
            ]);

        } else {
            $data = array([
                'message' => 'Invoice could not be updated'
            ]);
        }

        return JsonResponse::create($data);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Invoice $invoice
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(Invoice $invoice)
    {

        if ($invoice->delete()) {
            $data = array([
                'message' => 'Invoice deleted successfully'
            ]);
        } else {
            $data = array([
                'message' => 'Invoice could not be deleted'
            ]);
        }

        return JsonResponse::create($data);

    }

}
