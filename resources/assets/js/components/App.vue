<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <strong>Dashboard</strong>
            <router-link to="/invoices/create" class="btn btn-primary btn-sm pull-right">
                + Add New Invoice
            </router-link>
        </div>

        <div class="panel-body">
            <alert :message="alert" v-show="alert"></alert>
            <div v-if="showInvoices">
                <input type="text" class="form-control" placeholder="Search by Invoice Number" v-model="filterInput">

                <div class="table-responsive well well-lg">
                    <table class="table table-responsive table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Invoice#</th>
                            <th>Client</th>
                            <th>Client Address</th>
                            <th>Amount</th>
                            <th>Invoice Date</th>
                            <th>Due Date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="invoice in filterBy(invoices, filterInput)">
                            <td>{{ invoice.number }}</td>
                            <td>{{ invoice.client }}</td>
                            <td>{{ invoice.client_address }}</td>
                            <td>{{ invoice.amount }}</td>
                            <td>{{ invoice.invoice_date }}</td>
                            <td>{{ invoice.due_date }}</td>
                            <td>
                                <router-link :to="'/invoice/'+invoice.id" class="btn btn-primary btn-sm">View
                                </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <pagination v-show="showPagination" :url="url" :current="current" :first="first" :last="last"
                                :prev="prev" :next="next" :total_pages="total_pages" @nextPage="getNextPage">
                    </pagination>
                </div>
            </div>
            <div v-else>
                <span>No Invoices to show!</span>
            </div>
        </div>
    </div>
</template>

<script>

    import alert from './Alert'

    import pagination from './Pagination.vue';

    export default {
        components: {
            alert, pagination
        },
        data() {
            return {
                invoices: [],
                url: '/api/invoices?page=',
                alert: '',
                filterInput: '',
                showInvoices: false,
                showPagination: false,
                total_pages: 0,
                current: '1',
                first: null,
                last: null,
                prev: null,
                next: null
            }
        },
        created() {
            if (this.$route.query.alert) {
                this.alert = this.$route.query.alert
            }
            this.fetchInvoices(this.url + '1')
        },
        methods: {
            fetchInvoices(url) {
                var vm = this;
                axios.get(url)
                    .then(function (response) {
                        vm.invoices = response.data.data;
                        vm.first = response.data.links.first ? response.data.links.first : '';
                        vm.last = response.data.links.last ? response.data.links.last : '';
                        vm.prev = response.data.links.prev ? response.data.links.prev : '';
                        vm.next = response.data.links.next ? response.data.links.next : '';
                        vm.current = response.data.meta.current_page;
                        vm.total_pages = response.data.meta.last_page;
                        if (vm.invoices.length > 0) {
                            vm.showInvoices = true;
                            if (vm.invoices.length > 15) {
                                vm.showPagination = true
                            }
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            },
            getNextPage(url) {
                this.fetchInvoices(url)
            },
            filterBy(list, value) {
                value = value.charAt(0).toUpperCase();
                return list.filter(function (invoice) {
                    return invoice.number.indexOf(value) > -1
                })
            }
        }
    }

</script>
