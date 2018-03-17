<template>
    <div v-show="invoice" id="invoice-details" class="container">
        <router-link class="btn btn-info btn-sm" to="/">Back</router-link>
        <h1 class="page-header text-center">
            {{ invoice.number }}
            <span class="pull-right">
				<router-link class="btn btn-success btn-sm" :to="'/invoice/edit/' + invoice.id">Update</router-link>
				<button class="btn btn-danger btn-sm" @click="deleteInvoice(invoice.id)">Delete</button>
			</span>
        </h1>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item"><span>Client: <strong> {{ invoice.client }}</strong></span></li>
                        <li class="list-group-item"><span>Client Address: <strong> {{ invoice.client_address }}</strong></span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item"><span>Invoice Amount: <strong> {{ invoice.amount }}</strong></span>
                        </li>
                        <li class="list-group-item">
                            <span>Invoice Date: <strong> {{ invoice.invoice_date }}</strong></span></li>
                        <li class="list-group-item"><span>Due Date: <strong> {{ invoice.due_date }}</strong></span></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <h4 class="page-header text-center">
                    <strong>Line Items</strong>
                </h4>
                <div class="table-responsive well well-lg">
                    <table class="table table-responsive table-striped table-hover table-condensed">
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="line_item in line_items">
                            <td>{{ line_item.name }}</td>
                            <td>{{ line_item.quantity }}</td>
                            <td>{{ line_item.price }}</td>
                            <td>{{ line_item.total }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                invoice: {},
                line_items: [],
                showItems: false
            }
        },
        created: function () {
            this.fetchInvoice(this.$route.params.id)
        },
        methods: {
            fetchInvoice(id) {
                let vm = this;
                axios.get('/api/invoice/' + id)
                    .then(function (response) {
                        vm.invoice = response.data.data;
                        vm.line_items = vm.invoice.line_items;
                        vm.showItems = true
                    })
                    .catch(function (error) {
                        alert(error)
                    });
            },
            deleteInvoice(id) {
                var vm = this;
                axios.delete('/api/invoice/' + id)
                    .then(function (response) {
                        vm.$router.push({path: '/', query: {alert: 'Invoice with id=' + id + ' deleted successfully!'}})
                    })
                    .catch(function (error) {
                        alert('An error occured: ' + error)
                    });
            }
        }
    }
</script>

<style scoped>

</style>
