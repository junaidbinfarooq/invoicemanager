<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
use App\Invoice;
use App\InvoiceDetail;
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
     * @return InvoiceResource
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

            InvoiceDetail::insert($lineItems);

            return new InvoiceResource($invoice);

        }

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

            return $lineItems;

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
                'message' => 'Invoice Updated Successfully'
            ]);

            return JsonResponse::create($data);

        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Invoice $invoice
     * @return InvoiceResource
     * @throws \Exception
     */
    public function destroy(Invoice $invoice)
    {

        if ($invoice->delete()) {

            return new InvoiceResource($invoice);

        }

    }

}
