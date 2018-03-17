<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


/**
 * @property mixed $invoice_line_items
 * @property \Carbon\Carbon $created_at
 * @property int $id
 * @property \Carbon\Carbon $updated_at
 */
class Invoice extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'invoice_number', 'client_name', 'client_address', 'amount', 'invoice_date', 'due_date'
    ];

    public static function boot()
    {
        parent::boot();

        self::deleting(function (Invoice $invoice) {

            /**
             * @var $lineItem InvoiceDetail
             */
            foreach ($invoice->invoiceLineItems as $lineItem) {
                $lineItem->delete();
            }
        });
    }

    //observe this model being deleted and delete the child events

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function invoiceLineItems()
    {
        return $this->hasMany(InvoiceDetail::class);
    }

}
