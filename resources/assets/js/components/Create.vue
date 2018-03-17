<template>
    <div id="edit" class="container">
        <router-link class="btn btn-info btn-sm" to="/">Back</router-link>
        <form method="post" @submit.prevent="submitData"><!-- Form for entering the Invoicing details -->
            <div class="table-responsive">
                <table class="table table-binvoiceed">
                    <tr>
                        <td colspan="2" align="center"><h2 style="margin-top:10.5px">Create Invoice</h2></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="row">
                                <div class="col-md-8">
                                    <b>Client Details</b><br/>
                                    <input type="text" v-model="invoice.client_name" id="client_name"
                                           class="form-control input-sm" placeholder="Client Name"/>
                                    <textarea v-model="invoice.client_address" id="client_address" class="form-control"
                                              placeholder="Billing Address"></textarea>
                                </div>
                                <div class="col-md-4">
                                    <strong>Invoice Details</strong>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label class="col-form-label-sm" for="invoice_number">Invoice Number</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" v-model="invoice.invoice_number" id="invoice_number"
                                                   class="form-control" placeholder="Invoice Number"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label class="col-form-label-sm" for="Invoice Date">Invoice Date</label>
                                        </div>
                                        <div class="col-md-6">
                                            <date-picker v-model="invoice.invoice_date" :config="config"></date-picker>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label class="col-form-label-sm" for="Due Date">Due Date</label>
                                        </div>
                                        <div class="col-md-6">
                                            <date-picker v-model="invoice.due_date" :config="config"></date-picker>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <table id="invoice-item-table" class="table table-binvoiceed" cellspacing="3">
                                <tr>
                                    <th>#</th>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                                <tr v-for="(item, index) in rows">
                                    <td><span id="sr_no"><strong>{{ index + 1}}</strong></span></td>
                                    <td><input type="text" v-model="item.name" name="item_name[]"
                                               :id="'item_name' + index" class="form-control input-sm"
                                               required="required"/></td>
                                    <td><input type="number" v-model.number="item.quantity" name="item_quantity[]"
                                               :id="'item_quantity' + index" :data-srno="index"
                                               class="form-control input-sm" required="required"/></td>
                                    <td><input type="number" v-model.number="item.price" name="item_price[]"
                                               :id="'item_price' + index" :data-srno="index"
                                               class="form-control input-sm number_only" required="required"/></td>
                                    <td><input type="number" v-model.number="item.total" name="item_total[]"
                                               :id="'item_total' + index" :data-srno="index" class="form-control"
                                               readonly required="required"/></td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>
                                        <button type="button" class="btn btn-success btn-sm" @click="removeRow(index)">
                                            X
                                        </button>
                                    </td>
                                </tr>
                            </table>
                            <div align="right">
                                <button type="button" class="btn btn-success btn-sm" @click.prevent="addRow"><b>Add</b>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><strong>Final Total</strong></td>
                        <td align="right"><strong>{{ final_total }}</strong></td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <input type="submit" name="create_invoice" id="create_invoice" class="btn btn-primary"
                                   value="Create"/>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
    </div>
</template>

<script>

    // Import this component
    import datePicker from 'vue-bootstrap-datetimepicker';
    // Import date picker css
    import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        data() { // Define the data to be manipulated and submitted subsequently
            return {
                invoice: {
                    invoice_number: '',
                    client_name: '',
                    client_address: '',
                    invoice_date: '',
                    due_date: '',
                },
                rows: [],
                final_total: 0,
                config: {
                    format: 'YYYY-MM-DD',
                    useCurrent: false,
                }
            }
        },
        components: { // Components used inside the current component
            datePicker
        },
        mounted() { // Set the initial defaults when the current component is mounted onto the DOM
            var today = this.today();
            this.invoice.invoice_date = this.invoice.due_date = today;
            this.addRow()
        },
        updated() { // Re-calculate the item totals when the updated hook is called
            this.calcItemTotal()
        },
        methods: {
            submitData(e) { // Create a new invoice variable, set the properties and submit the same for data insertion
                let newInvoice = {
                    invoice_number: this.invoice.invoice_number,
                    client_name: this.invoice.client_name,
                    client_address: this.invoice.client_address,
                    invoice_date: this.invoice.invoice_date,
                    due_date: this.invoice.due_date,
                    amount: this.final_total,
                    line_items: this.rows
                };
                this.addInvoice(newInvoice)
            },
            addInvoice(invoice) { // Submit to Data to the remove server for data insertion
                var vm = this;
                axios.post('api/invoices', invoice)
                    .then(function (response) {
                        vm.$router.push({path: '/', query: {alert: 'Invoice Added Successfully!'}})
                    })
                    .catch(function (error) {
                        alert(error)
                    });
            },
            addRow() { // Add a row of line_items to the DOM
                this.rows.push({
                    name: '',
                    quantity: '',
                    price: '',
                    total: ''
                })
            },
            removeRow(index) { // Remove a row of line_items from the DOM
                this.rows.splice(index, 1)
            },
            calcItemTotal() { //Calculate items and final totals
                var finalTotalTemp = 0;
                this.rows.forEach(row => {
                    row.total = row.quantity * row.price;
                    finalTotalTemp += row.total
                });
                this.final_total = finalTotalTemp
            },
            today() { // get today's date to display as a default in the date fields
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; // January is 0!
                var yyyy = today.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd
                }

                if (mm < 10) {
                    mm = '0' + mm
                }

                today = yyyy + '-' + mm + '-' + dd;

                return today;
            }
        }
    }
</script>

<style>

</style>
