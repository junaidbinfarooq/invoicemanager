require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import InvoiceDetails from './components/InvoiceDetails'
import Create from './components/Create'
import Edit from './components/Edit'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: App},
    {path: '/invoice/:id', component: InvoiceDetails},
    {path: '/invoices/create', component: Create},
    {path: '/invoice/edit/:id', component: Edit}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router,
    components: {App}
});

