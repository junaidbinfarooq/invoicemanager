<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class InvoiceResource extends Resource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        return [

            'id' => $this->id,

            'number' => $this->invoice_number,

            'client' => $this->client_name,

            'client_address' => $this->client_address,

            'amount' => $this->amount,

            'invoice_date' => $this->invoice_date,

            'due_date' => $this->due_date,

            'line_items' => InvoiceLineResource::collection($this->whenLoaded('invoiceLineItems'))

        ];

    }

    public function with($request)
    {

        return [

            'version' => '1.0.0',

            'author' => 'Junaid Farooq'

        ];

    }

}

