webpackJsonp([1], {

    /***/ 137:
    /***/ (function (module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
        var content = __webpack_require__(186);
        if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
        var transform;

        var options = {};
        options.transform = transform;
// add the styles to the DOM
        var update = __webpack_require__(187)(content, options);
        if (content.locals) module.exports = content.locals;
// Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../css-loader/index.js!./bootstrap-datetimepicker.css", function () {
                    var newContent = require("!!../../../css-loader/index.js!./bootstrap-datetimepicker.css");
                    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function () {
                update();
            });
        }

        /***/
    }),

    /***/ 138:
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(139);


        /***/
    }),

    /***/ 139:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(21);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__(161);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_App__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__components_InvoiceDetails__ = __webpack_require__(175);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__components_InvoiceDetails___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_InvoiceDetails__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__components_Create__ = __webpack_require__(180);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__components_Create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Create__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__components_Edit__ = __webpack_require__(190);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__components_Edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Edit__);
        __webpack_require__(140);


        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

        var routes = [{
            path: '/',
            component: __WEBPACK_IMPORTED_MODULE_2__components_App___default.a
        }, {
            path: '/invoice/:id',
            component: __WEBPACK_IMPORTED_MODULE_3__components_InvoiceDetails___default.a
        }, {
            path: '/invoices/create',
            component: __WEBPACK_IMPORTED_MODULE_4__components_Create___default.a
        }, {path: '/invoice/edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_Edit___default.a}];

        var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
            routes: routes
        });

        var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
            el: '#app',
            router: router,
            components: {App: __WEBPACK_IMPORTED_MODULE_2__components_App___default.a}
        });

        /***/
    }),

    /***/ 140:
    /***/ (function (module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function (__webpack_provided_window_dot_jQuery, __webpack_provided_window_dot_$) {
            window._ = __webpack_require__(10);

            /**
             * We'll load jQuery and the Bootstrap jQuery plugin which provides support
             * for JavaScript based Bootstrap features such as modals and tabs. This
             * code may be modified to fit the specific needs of your application.
             */

            try {
                __webpack_provided_window_dot_$ = __webpack_provided_window_dot_jQuery = __webpack_require__(2);

                __webpack_require__(12);
            } catch (e) {
            }

            /**
             * We'll load the axios HTTP library which allows us to easily issue requests
             * to our Laravel back-end. This library automatically handles sending the
             * CSRF token as a header based on the value of the "XSRF" token cookie.
             */

            window.axios = __webpack_require__(14);

            window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

            /**
             * Next we will register the CSRF Token as a common header with Axios so that
             * all outgoing HTTP requests automatically have it attached. This is just
             * a simple convenience so we don't have to attach every token manually.
             */

            var token = document.head.querySelector('meta[name="csrf-token"]');

            if (token) {
                window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            } else {
                console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
            }

            /**
             * Echo exposes an expressive API for subscribing to channels and listening
             * for events that are broadcast by Laravel. Echo and event broadcasting
             * allows your team to easily build robust real-time web applications.
             */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key',
//     cluster: 'mt1',
//     encrypted: true
// });
            /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(2), __webpack_require__(2)))

        /***/
    }),

    /***/ 161:
    /***/ (function (module, exports, __webpack_require__) {

        var disposed = false;
        var normalizeComponent = __webpack_require__(3);
        /* script */
        var __vue_script__ = __webpack_require__(162);
        /* template */
        var __vue_template__ = __webpack_require__(174);
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = null;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(
            __vue_script__,
            __vue_template__,
            __vue_template_functional__,
            __vue_styles__,
            __vue_scopeId__,
            __vue_module_identifier__
        );
        Component.options.__file = "resources\\assets\\js\\components\\App.vue";

        /* hot reload */
        if (false) {
            (function () {
                var hotAPI = require("vue-hot-reload-api");
                hotAPI.install(require("vue"), false);
                if (!hotAPI.compatible) return;
                module.hot.accept();
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-117390fa", Component.options)
                } else {
                    hotAPI.reload("data-v-117390fa", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports


        /***/
    }),

    /***/ 162:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Alert__ = __webpack_require__(163);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Alert__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Pagination_vue__ = __webpack_require__(169);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Pagination_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


        /* harmony default export */
        __webpack_exports__["default"] = ({
            components: {
                alert: __WEBPACK_IMPORTED_MODULE_0__Alert___default.a,
                pagination: __WEBPACK_IMPORTED_MODULE_1__Pagination_vue___default.a
            },
            data: function data() {
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
                };
            },
            created: function created() {
                if (this.$route.query.alert) {
                    this.alert = this.$route.query.alert;
                }
                this.fetchInvoices(this.url + '1');
            },

            methods: {
                fetchInvoices: function fetchInvoices(url) {
                    var vm = this;
                    axios.get(url).then(function (response) {
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
                                vm.showPagination = true;
                            }
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                },
                getNextPage: function getNextPage(url) {
                    this.fetchInvoices(url);
                },
                filterBy: function filterBy(list, value) {
                    value = value.charAt(0).toUpperCase();
                    return list.filter(function (invoice) {
                        return invoice.number.indexOf(value) > -1;
                    });
                }
            }
        });

        /***/
    }),

    /***/ 163:
    /***/ (function (module, exports, __webpack_require__) {

        var disposed = false;

        function injectStyle(ssrContext) {
            if (disposed) return;
            __webpack_require__(164)
        }

        var normalizeComponent = __webpack_require__(3);
        /* script */
        var __vue_script__ = __webpack_require__(167);
        /* template */
        var __vue_template__ = __webpack_require__(168);
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-11375e75";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(
            __vue_script__,
            __vue_template__,
            __vue_template_functional__,
            __vue_styles__,
            __vue_scopeId__,
            __vue_module_identifier__
        );
        Component.options.__file = "resources\\assets\\js\\components\\Alert.vue";

        /* hot reload */
        if (false) {
            (function () {
                var hotAPI = require("vue-hot-reload-api");
                hotAPI.install(require("vue"), false);
                if (!hotAPI.compatible) return;
                module.hot.accept();
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-11375e75", Component.options)
                } else {
                    hotAPI.reload("data-v-11375e75", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports


        /***/
    }),

    /***/ 164:
    /***/ (function (module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
        var content = __webpack_require__(165);
        if (typeof content === 'string') content = [[module.i, content, '']];
        if (content.locals) module.exports = content.locals;
// add the styles to the DOM
        var update = __webpack_require__(6)("63096c04", content, false, {});
// Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11375e75\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function () {
                    var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11375e75\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
                    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function () {
                update();
            });
        }

        /***/
    }),

    /***/ 165:
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(4)(false);
// imports


// module
        exports.push([module.i, "\ndiv#alertBox[data-v-11375e75] {\n    margin-right: 70px;\n}\n", ""]);

// exports


        /***/
    }),

    /***/ 166:
    /***/ (function (module, exports) {

        /**
         * Translates the list format produced by css-loader into something
         * easier to manipulate.
         */
        module.exports = function listToStyles(parentId, list) {
            var styles = [];
            var newStyles = {};
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = {
                    id: parentId + ':' + i,
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                if (!newStyles[id]) {
                    styles.push(newStyles[id] = {id: id, parts: [part]})
                } else {
                    newStyles[id].parts.push(part)
                }
            }
            return styles
        }


        /***/
    }),

    /***/ 167:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
//
//
//
//
//
//
//
//
//
//
//

        /* harmony default export */
        __webpack_exports__["default"] = ({
            name: 'alert',
            props: {
                'message': {default: ''}
            }
        });

        /***/
    }),

    /***/ 168:
    /***/ (function (module, exports, __webpack_require__) {

        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c(
                "div",
                {staticClass: "container container-fluid", attrs: {id: "alert"}},
                [
                    _c(
                        "div",
                        {
                            staticClass: "alert alert-success alert-dismissible",
                            attrs: {id: "alertBox", role: "alert"}
                        },
                        [_vm._m(0), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.message))])]
                    )
                ]
            )
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c(
                    "button",
                    {
                        staticClass: "close",
                        attrs: {
                            type: "button",
                            "data-dismiss": "alert",
                            "aria-label": "Close"
                        }
                    },
                    [_c("span", {attrs: {"aria-hidden": "true"}}, [_vm._v("×")])]
                )
            }
        ];
        render._withStripped = true;
        module.exports = {render: render, staticRenderFns: staticRenderFns};
        if (false) {
            module.hot.accept();
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-11375e75", module.exports)
            }
        }

        /***/
    }),

    /***/ 169:
    /***/ (function (module, exports, __webpack_require__) {

        var disposed = false;

        function injectStyle(ssrContext) {
            if (disposed) return;
            __webpack_require__(170)
        }

        var normalizeComponent = __webpack_require__(3);
        /* script */
        var __vue_script__ = __webpack_require__(172);
        /* template */
        var __vue_template__ = __webpack_require__(173);
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-96baf55e";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(
            __vue_script__,
            __vue_template__,
            __vue_template_functional__,
            __vue_styles__,
            __vue_scopeId__,
            __vue_module_identifier__
        );
        Component.options.__file = "resources\\assets\\js\\components\\Pagination.vue";

        /* hot reload */
        if (false) {
            (function () {
                var hotAPI = require("vue-hot-reload-api");
                hotAPI.install(require("vue"), false);
                if (!hotAPI.compatible) return;
                module.hot.accept();
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-96baf55e", Component.options)
                } else {
                    hotAPI.reload("data-v-96baf55e", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports


        /***/
    }),

    /***/ 170:
    /***/ (function (module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
        var content = __webpack_require__(171);
        if (typeof content === 'string') content = [[module.i, content, '']];
        if (content.locals) module.exports = content.locals;
// add the styles to the DOM
        var update = __webpack_require__(6)("31f65685", content, false, {});
// Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-96baf55e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function () {
                    var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-96baf55e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
                    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function () {
                update();
            });
        }

        /***/
    }),

    /***/ 171:
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(4)(false);
// imports


// module
        exports.push([module.i, "\nnav[data-v-96baf55e] {\n    padding-top: inherit;\n}\n\n", ""]);

// exports


        /***/
    }),

    /***/ 172:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


        /* harmony default export */
        __webpack_exports__["default"] = ({
            props: ['url', 'current', 'total_pages', 'first', 'last', 'prev', 'next'],
            methods: {
                getNextPage: function getNextPage(url) {
                    console.log(this.last);
                    this.$emit('nextPage', url);
                }
            }
        });

        /***/
    }),

    /***/ 173:
    /***/ (function (module, exports, __webpack_require__) {

        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("nav", {attrs: {"aria-label": "Page navigation"}}, [
                _c("ul", {staticClass: "pagination justify-content-end"}, [
                    _c(
                        "li",
                        {staticClass: "page-item", class: {disabled: _vm.current == 1}},
                        [
                            _c(
                                "a",
                                {
                                    staticClass: "page-link",
                                    attrs: {
                                        alt: "First",
                                        href: _vm.first ? _vm.first : "#",
                                        tabindex: _vm.first ? "" : "-1"
                                    },
                                    on: {
                                        click: function ($event) {
                                            $event.preventDefault();
                                            _vm.getNextPage(_vm.first)
                                        }
                                    }
                                },
                                [
                                    _c("span", {attrs: {"aria-hidden": "true"}}, [_vm._v("«")]),
                                    _vm._v(" "),
                                    _c("span", {staticClass: "sr-only"}, [_vm._v("First")])
                                ]
                            )
                        ]
                    ),
                    _vm._v(" "),
                    _c(
                        "li",
                        {staticClass: "page-item", class: {disabled: _vm.prev == ""}},
                        [
                            _c(
                                "a",
                                {
                                    staticClass: "page-link",
                                    attrs: {
                                        alt: "Previous",
                                        href: _vm.prev ? _vm.prev : "#",
                                        tabindex: _vm.prev ? "" : "-1"
                                    },
                                    on: {
                                        click: function ($event) {
                                            $event.preventDefault();
                                            _vm.getNextPage(_vm.prev)
                                        }
                                    }
                                },
                                [
                                    _c("span", {attrs: {"aria-hidden": "true"}}, [_vm._v("<")]),
                                    _vm._v(" "),
                                    _c("span", {staticClass: "sr-only"}, [_vm._v("Previous")])
                                ]
                            )
                        ]
                    ),
                    _vm._v(" "),
                    _c("li", {staticClass: "page-item active"}, [
                        _c(
                            "a",
                            {
                                staticClass: "page-link",
                                attrs: {alt: "current", href: _vm.url + _vm.current},
                                on: {
                                    click: function ($event) {
                                        $event.preventDefault()
                                    }
                                }
                            },
                            [
                                _vm._v(
                                    "\n                " + _vm._s(_vm.current) + "\n                "
                                ),
                                _c("span", {staticClass: "sr-only"}, [_vm._v("(current)")])
                            ]
                        )
                    ]),
                    _vm._v(" "),
                    _c(
                        "li",
                        {staticClass: "page-item", class: {disabled: _vm.next == ""}},
                        [
                            _c(
                                "a",
                                {
                                    staticClass: "page-link",
                                    attrs: {
                                        alt: "Next",
                                        href: _vm.next ? _vm.next : "#",
                                        tabindex: _vm.next ? "" : "-1"
                                    },
                                    on: {
                                        click: function ($event) {
                                            $event.preventDefault();
                                            _vm.getNextPage(_vm.next)
                                        }
                                    }
                                },
                                [
                                    _c("span", {attrs: {"aria-hidden": "true"}}, [_vm._v(">")]),
                                    _vm._v(" "),
                                    _c("span", {staticClass: "sr-only"}, [_vm._v("Next")])
                                ]
                            )
                        ]
                    ),
                    _vm._v(" "),
                    _c(
                        "li",
                        {
                            staticClass: "page-item",
                            class: {disabled: _vm.current == _vm.total_pages}
                        },
                        [
                            _c(
                                "a",
                                {
                                    staticClass: "page-link",
                                    attrs: {
                                        alt: "Last",
                                        href: _vm.last ? _vm.last : "#",
                                        tabindex: _vm.last ? "" : "-1"
                                    },
                                    on: {
                                        click: function ($event) {
                                            $event.preventDefault();
                                            _vm.getNextPage(_vm.last)
                                        }
                                    }
                                },
                                [
                                    _c("span", {attrs: {"aria-hidden": "true"}}, [_vm._v("»")]),
                                    _vm._v(" "),
                                    _c("span", {staticClass: "sr-only"}, [_vm._v("Last")])
                                ]
                            )
                        ]
                    )
                ])
            ])
        };
        var staticRenderFns = [];
        render._withStripped = true;
        module.exports = {render: render, staticRenderFns: staticRenderFns};
        if (false) {
            module.hot.accept();
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-96baf55e", module.exports)
            }
        }

        /***/
    }),

    /***/ 174:
    /***/ (function (module, exports, __webpack_require__) {

        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {staticClass: "panel panel-default"}, [
                _c(
                    "div",
                    {staticClass: "panel-heading"},
                    [
                        _c("strong", [_vm._v("Dashboard")]),
                        _vm._v(" "),
                        _c(
                            "router-link",
                            {
                                staticClass: "btn btn-primary btn-sm pull-right",
                                attrs: {to: "/invoices/create"}
                            },
                            [_vm._v("\n            + Add New Invoice\n        ")]
                        )
                    ],
                    1
                ),
                _vm._v(" "),
                _c(
                    "div",
                    {staticClass: "panel-body"},
                    [
                        _c("alert", {
                            directives: [
                                {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.alert,
                                    expression: "alert"
                                }
                            ],
                            attrs: {message: _vm.alert}
                        }),
                        _vm._v(" "),
                        _vm.showInvoices
                            ? _c("div", [
                                _c("input", {
                                    directives: [
                                        {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.filterInput,
                                            expression: "filterInput"
                                        }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                        type: "text",
                                        placeholder: "Search by Invoice Number"
                                    },
                                    domProps: {value: _vm.filterInput},
                                    on: {
                                        input: function ($event) {
                                            if ($event.target.composing) {
                                                return
                                            }
                                            _vm.filterInput = $event.target.value
                                        }
                                    }
                                }),
                                _vm._v(" "),
                                _c(
                                    "div",
                                    {staticClass: "table-responsive well well-lg"},
                                    [
                                        _c(
                                            "table",
                                            {
                                                staticClass:
                                                    "table table-responsive table-striped table-hover"
                                            },
                                            [
                                                _vm._m(0),
                                                _vm._v(" "),
                                                _c(
                                                    "tbody",
                                                    _vm._l(
                                                        _vm.filterBy(_vm.invoices, _vm.filterInput),
                                                        function (invoice) {
                                                            return _c("tr", [
                                                                _c("td", [_vm._v(_vm._s(invoice.number))]),
                                                                _vm._v(" "),
                                                                _c("td", [_vm._v(_vm._s(invoice.client))]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                    _vm._v(_vm._s(invoice.client_address))
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [_vm._v(_vm._s(invoice.amount))]),
                                                                _vm._v(" "),
                                                                _c("td", [_vm._v(_vm._s(invoice.invoice_date))]),
                                                                _vm._v(" "),
                                                                _c("td", [_vm._v(_vm._s(invoice.due_date))]),
                                                                _vm._v(" "),
                                                                _c(
                                                                    "td",
                                                                    [
                                                                        _c(
                                                                            "router-link",
                                                                            {
                                                                                staticClass: "btn btn-primary btn-sm",
                                                                                attrs: {to: "/invoice/" + invoice.id}
                                                                            },
                                                                            [
                                                                                _vm._v(
                                                                                    "View\n                            "
                                                                                )
                                                                            ]
                                                                        )
                                                                    ],
                                                                    1
                                                                )
                                                            ])
                                                        }
                                                    )
                                                )
                                            ]
                                        ),
                                        _vm._v(" "),
                                        _c("pagination", {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: _vm.showPagination,
                                                    expression: "showPagination"
                                                }
                                            ],
                                            attrs: {
                                                url: _vm.url,
                                                current: _vm.current,
                                                first: _vm.first,
                                                last: _vm.last,
                                                prev: _vm.prev,
                                                next: _vm.next,
                                                total_pages: _vm.total_pages
                                            },
                                            on: {nextPage: _vm.getNextPage}
                                        })
                                    ],
                                    1
                                )
                            ])
                            : _c("div", [_c("span", [_vm._v("No Invoices to show!")])])
                    ],
                    1
                )
            ])
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("thead", [
                    _c("tr", [
                        _c("th", [_vm._v("Invoice#")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Client")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Client Address")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Amount")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Invoice Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Due Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Action")])
                    ])
                ])
            }
        ];
        render._withStripped = true;
        module.exports = {render: render, staticRenderFns: staticRenderFns};
        if (false) {
            module.hot.accept();
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-117390fa", module.exports)
            }
        }

        /***/
    }),

    /***/ 175:
    /***/ (function (module, exports, __webpack_require__) {

        var disposed = false;

        function injectStyle(ssrContext) {
            if (disposed) return;
            __webpack_require__(176)
        }

        var normalizeComponent = __webpack_require__(3);
        /* script */
        var __vue_script__ = __webpack_require__(178);
        /* template */
        var __vue_template__ = __webpack_require__(179);
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-53431b0c";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(
            __vue_script__,
            __vue_template__,
            __vue_template_functional__,
            __vue_styles__,
            __vue_scopeId__,
            __vue_module_identifier__
        );
        Component.options.__file = "resources\\assets\\js\\components\\InvoiceDetails.vue";

        /* hot reload */
        if (false) {
            (function () {
                var hotAPI = require("vue-hot-reload-api");
                hotAPI.install(require("vue"), false);
                if (!hotAPI.compatible) return;
                module.hot.accept();
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-53431b0c", Component.options)
                } else {
                    hotAPI.reload("data-v-53431b0c", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports


        /***/
    }),

    /***/ 176:
    /***/ (function (module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
        var content = __webpack_require__(177);
        if (typeof content === 'string') content = [[module.i, content, '']];
        if (content.locals) module.exports = content.locals;
// add the styles to the DOM
        var update = __webpack_require__(6)("59f88ad6", content, false, {});
// Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53431b0c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InvoiceDetails.vue", function () {
                    var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53431b0c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InvoiceDetails.vue");
                    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function () {
                update();
            });
        }

        /***/
    }),

    /***/ 177:
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(4)(false);
// imports


// module
        exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


        /***/
    }),

    /***/ 178:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

        /* harmony default export */
        __webpack_exports__["default"] = ({
            data: function data() {
                return {
                    invoice: {},
                    line_items: [],
                    showItems: false
                };
            },

            created: function created() {
                this.fetchInvoice(this.$route.params.id);
            },
            methods: {
                fetchInvoice: function fetchInvoice(id) {
                    var vm = this;
                    axios.get('/api/invoice/' + id).then(function (response) {
                        vm.invoice = response.data.data;
                        vm.line_items = vm.invoice.line_items;
                        vm.showItems = true;
                    }).catch(function (error) {
                        alert(error);
                    });
                },
                deleteInvoice: function deleteInvoice(id) {
                    var vm = this;
                    axios.delete('/api/invoice/' + id).then(function (response) {
                        vm.$router.push({
                            path: '/',
                            query: {alert: 'Invoice with id=' + id + ' deleted successfully!'}
                        });
                    }).catch(function (error) {
                        alert('An error occured: ' + error);
                    });
                }
            }
        });

        /***/
    }),

    /***/ 179:
    /***/ (function (module, exports, __webpack_require__) {

        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c(
                "div",
                {
                    directives: [
                        {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.invoice,
                            expression: "invoice"
                        }
                    ],
                    staticClass: "container",
                    attrs: {id: "invoice-details"}
                },
                [
                    _c(
                        "router-link",
                        {staticClass: "btn btn-info btn-sm", attrs: {to: "/"}},
                        [_vm._v("Back")]
                    ),
                    _vm._v(" "),
                    _c("h1", {staticClass: "page-header text-center"}, [
                        _vm._v(
                            "\n            " + _vm._s(_vm.invoice.number) + "\n            "
                        ),
                        _c(
                            "span",
                            {staticClass: "pull-right"},
                            [
                                _c(
                                    "router-link",
                                    {
                                        staticClass: "btn btn-success btn-sm",
                                        attrs: {to: "/invoice/edit/" + _vm.invoice.id}
                                    },
                                    [_vm._v("Update")]
                                ),
                                _vm._v(" "),
                                _c(
                                    "button",
                                    {
                                        staticClass: "btn btn-danger btn-sm",
                                        on: {
                                            click: function ($event) {
                                                _vm.deleteInvoice(_vm.invoice.id)
                                            }
                                        }
                                    },
                                    [_vm._v("Delete")]
                                )
                            ],
                            1
                        )
                    ]),
                    _vm._v(" "),
                    _c("div", {staticClass: "container"}, [
                        _c("div", {staticClass: "row"}, [
                            _c("div", {staticClass: "col-md-6"}, [
                                _c("ul", {staticClass: "list-group"}, [
                                    _c("li", {staticClass: "list-group-item"}, [
                                        _c("span", [
                                            _vm._v("Client: "),
                                            _c("strong", [_vm._v(" " + _vm._s(_vm.invoice.client))])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("li", {staticClass: "list-group-item"}, [
                                        _c("span", [
                                            _vm._v("Client Address: "),
                                            _c("strong", [
                                                _vm._v(" " + _vm._s(_vm.invoice.client_address))
                                            ])
                                        ])
                                    ])
                                ])
                            ]),
                            _vm._v(" "),
                            _c("div", {staticClass: "col-md-6"}, [
                                _c("ul", {staticClass: "list-group"}, [
                                    _c("li", {staticClass: "list-group-item"}, [
                                        _c("span", [
                                            _vm._v("Invoice Amount: "),
                                            _c("strong", [_vm._v(" " + _vm._s(_vm.invoice.amount))])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("li", {staticClass: "list-group-item"}, [
                                        _c("span", [
                                            _vm._v("Invoice Date: "),
                                            _c("strong", [_vm._v(" " + _vm._s(_vm.invoice.invoice_date))])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("li", {staticClass: "list-group-item"}, [
                                        _c("span", [
                                            _vm._v("Due Date: "),
                                            _c("strong", [_vm._v(" " + _vm._s(_vm.invoice.due_date))])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                        _vm._v(" "),
                        _c("div", {staticClass: "row"}, [
                            _vm._m(0),
                            _vm._v(" "),
                            _c("div", {staticClass: "table-responsive well well-lg"}, [
                                _c(
                                    "table",
                                    {
                                        staticClass:
                                            "table table-responsive table-striped table-hover table-condensed"
                                    },
                                    [
                                        _vm._m(1),
                                        _vm._v(" "),
                                        _c(
                                            "tbody",
                                            _vm._l(_vm.line_items, function (line_item) {
                                                return _c("tr", [
                                                    _c("td", [_vm._v(_vm._s(line_item.name))]),
                                                    _vm._v(" "),
                                                    _c("td", [_vm._v(_vm._s(line_item.quantity))]),
                                                    _vm._v(" "),
                                                    _c("td", [_vm._v(_vm._s(line_item.price))]),
                                                    _vm._v(" "),
                                                    _c("td", [_vm._v(_vm._s(line_item.total))])
                                                ])
                                            })
                                        )
                                    ]
                                )
                            ])
                        ])
                    ])
                ],
                1
            )
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("h4", {staticClass: "page-header text-center"}, [
                    _c("strong", [_vm._v("Line Items")])
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("thead", [
                    _c("tr", [
                        _c("th", [_vm._v("Item Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Quantity")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Total")])
                    ])
                ])
            }
        ];
        render._withStripped = true;
        module.exports = {render: render, staticRenderFns: staticRenderFns};
        if (false) {
            module.hot.accept();
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-53431b0c", module.exports)
            }
        }

        /***/
    }),

    /***/ 180:
    /***/ (function (module, exports, __webpack_require__) {

        var disposed = false;

        function injectStyle(ssrContext) {
            if (disposed) return;
            __webpack_require__(181)
        }

        var normalizeComponent = __webpack_require__(3);
        /* script */
        var __vue_script__ = __webpack_require__(183);
        /* template */
        var __vue_template__ = __webpack_require__(189);
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(
            __vue_script__,
            __vue_template__,
            __vue_template_functional__,
            __vue_styles__,
            __vue_scopeId__,
            __vue_module_identifier__
        );
        Component.options.__file = "resources\\assets\\js\\components\\Create.vue";

        /* hot reload */
        if (false) {
            (function () {
                var hotAPI = require("vue-hot-reload-api");
                hotAPI.install(require("vue"), false);
                if (!hotAPI.compatible) return;
                module.hot.accept();
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-1103559a", Component.options)
                } else {
                    hotAPI.reload("data-v-1103559a", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports


        /***/
    }),

    /***/ 181:
    /***/ (function (module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
        var content = __webpack_require__(182);
        if (typeof content === 'string') content = [[module.i, content, '']];
        if (content.locals) module.exports = content.locals;
// add the styles to the DOM
        var update = __webpack_require__(6)("71f07ab0", content, false, {});
// Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1103559a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function () {
                    var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1103559a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
                    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function () {
                update();
            });
        }

        /***/
    }),

    /***/ 182:
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(4)(false);
// imports


// module
        exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


        /***/
    }),

    /***/ 183:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_datetimepicker__ = __webpack_require__(9);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_datetimepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_datetimepicker__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css__ = __webpack_require__(137);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// Import this component

// Import date picker css


        /* harmony default export */
        __webpack_exports__["default"] = ({
            data: function data() {
                // Define the data to be manipulated and submitted subsequently
                return {
                    invoice: {
                        invoice_number: '',
                        client_name: '',
                        client_address: '',
                        invoice_date: '',
                        due_date: ''
                    },
                    rows: [],
                    final_total: 0,
                    config: {
                        format: 'YYYY-MM-DD',
                        useCurrent: false
                    }
                };
            },

            components: { // Components used inside the current component
                datePicker: __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_datetimepicker___default.a
            },
            mounted: function mounted() {
                // Set the initial defaults when the current component is mounted onto the DOM
                var today = this.today();
                this.invoice.invoice_date = this.invoice.due_date = today;
                this.addRow();
            },
            updated: function updated() {
                // Re-calculate the item totals when the updated hook is called
                this.calcItemTotal();
            },

            methods: {
                submitData: function submitData(e) {
                    // Create a new invoice variable, set the properties and submit the same for data insertion
                    var newInvoice = {
                        invoice_number: this.invoice.invoice_number,
                        client_name: this.invoice.client_name,
                        client_address: this.invoice.client_address,
                        invoice_date: this.invoice.invoice_date,
                        due_date: this.invoice.due_date,
                        amount: this.final_total,
                        line_items: this.rows
                    };
                    this.addInvoice(newInvoice);
                },
                addInvoice: function addInvoice(invoice) {
                    // Submit to Data to the remove server for data insertion
                    var vm = this;
                    axios.post('api/invoices', invoice).then(function (response) {
                        vm.$router.push({path: '/', query: {alert: 'Invoice created successfully!'}});
                    }).catch(function (error) {
                        alert(error);
                    });
                },
                addRow: function addRow() {
                    // Add a row of line_items to the DOM
                    this.rows.push({
                        name: '',
                        quantity: '',
                        price: '',
                        total: ''
                    });
                },
                removeRow: function removeRow(index) {
                    // Remove a row of line_items from the DOM
                    this.rows.splice(index, 1);
                },
                calcItemTotal: function calcItemTotal() {
                    //Calculate items and final totals
                    var finalTotalTemp = 0;
                    this.rows.forEach(function (row) {
                        row.total = row.quantity * row.price;
                        finalTotalTemp += row.total;
                    });
                    this.final_total = finalTotalTemp;
                },
                today: function today() {
                    // get today's date to display as a default in the date fields
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; // January is 0!
                    var yyyy = today.getFullYear();

                    if (dd < 10) {
                        dd = '0' + dd;
                    }

                    if (mm < 10) {
                        mm = '0' + mm;
                    }

                    today = yyyy + '-' + mm + '-' + dd;

                    return today;
                }
            }
        });

        /***/
    }),

    /***/ 186:
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(4)(false);
// imports


// module
        exports.push([module.i, "/*!\n * Datetimepicker for Bootstrap 3\n * version : 4.17.47\n * https://github.com/Eonasdan/bootstrap-datetimepicker/\n */\n.bootstrap-datetimepicker-widget {\n  list-style: none;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu {\n  display: block;\n  margin: 2px 0;\n  padding: 4px;\n  width: 19em;\n}\n@media (min-width: 768px) {\n  .bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs {\n    width: 38em;\n  }\n}\n@media (min-width: 992px) {\n  .bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs {\n    width: 38em;\n  }\n}\n@media (min-width: 1200px) {\n  .bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs {\n    width: 38em;\n  }\n}\n.bootstrap-datetimepicker-widget.dropdown-menu:before,\n.bootstrap-datetimepicker-widget.dropdown-menu:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before {\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  top: -7px;\n  left: 7px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.bottom:after {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  top: -6px;\n  left: 8px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.top:before {\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 7px solid #ccc;\n  border-top-color: rgba(0, 0, 0, 0.2);\n  bottom: -7px;\n  left: 6px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.top:after {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid white;\n  bottom: -6px;\n  left: 7px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:before {\n  left: auto;\n  right: 6px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:after {\n  left: auto;\n  right: 7px;\n}\n.bootstrap-datetimepicker-widget .list-unstyled {\n  margin: 0;\n}\n.bootstrap-datetimepicker-widget a[data-action] {\n  padding: 6px 0;\n}\n.bootstrap-datetimepicker-widget a[data-action]:active {\n  box-shadow: none;\n}\n.bootstrap-datetimepicker-widget .timepicker-hour,\n.bootstrap-datetimepicker-widget .timepicker-minute,\n.bootstrap-datetimepicker-widget .timepicker-second {\n  width: 54px;\n  font-weight: bold;\n  font-size: 1.2em;\n  margin: 0;\n}\n.bootstrap-datetimepicker-widget button[data-action] {\n  padding: 6px;\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"incrementHours\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Increment Hours\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"incrementMinutes\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Increment Minutes\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"decrementHours\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Decrement Hours\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"decrementMinutes\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Decrement Minutes\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"showHours\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Show Hours\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"showMinutes\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Show Minutes\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"togglePeriod\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Toggle AM/PM\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"clear\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Clear the picker\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"today\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Set the date to today\";\n}\n.bootstrap-datetimepicker-widget .picker-switch {\n  text-align: center;\n}\n.bootstrap-datetimepicker-widget .picker-switch::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Toggle Date and Time Screens\";\n}\n.bootstrap-datetimepicker-widget .picker-switch td {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  line-height: inherit;\n}\n.bootstrap-datetimepicker-widget .picker-switch td span {\n  line-height: 2.5;\n  height: 2.5em;\n  width: 100%;\n}\n.bootstrap-datetimepicker-widget table {\n  width: 100%;\n  margin: 0;\n}\n.bootstrap-datetimepicker-widget table td,\n.bootstrap-datetimepicker-widget table th {\n  text-align: center;\n  border-radius: 4px;\n}\n.bootstrap-datetimepicker-widget table th {\n  height: 20px;\n  line-height: 20px;\n  width: 20px;\n}\n.bootstrap-datetimepicker-widget table th.picker-switch {\n  width: 145px;\n}\n.bootstrap-datetimepicker-widget table th.disabled,\n.bootstrap-datetimepicker-widget table th.disabled:hover {\n  background: none;\n  color: #777777;\n  cursor: not-allowed;\n}\n.bootstrap-datetimepicker-widget table th.prev::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Previous Month\";\n}\n.bootstrap-datetimepicker-widget table th.next::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Next Month\";\n}\n.bootstrap-datetimepicker-widget table thead tr:first-child th {\n  cursor: pointer;\n}\n.bootstrap-datetimepicker-widget table thead tr:first-child th:hover {\n  background: #eeeeee;\n}\n.bootstrap-datetimepicker-widget table td {\n  height: 54px;\n  line-height: 54px;\n  width: 54px;\n}\n.bootstrap-datetimepicker-widget table td.cw {\n  font-size: .8em;\n  height: 20px;\n  line-height: 20px;\n  color: #777777;\n}\n.bootstrap-datetimepicker-widget table td.day {\n  height: 20px;\n  line-height: 20px;\n  width: 20px;\n}\n.bootstrap-datetimepicker-widget table td.day:hover,\n.bootstrap-datetimepicker-widget table td.hour:hover,\n.bootstrap-datetimepicker-widget table td.minute:hover,\n.bootstrap-datetimepicker-widget table td.second:hover {\n  background: #eeeeee;\n  cursor: pointer;\n}\n.bootstrap-datetimepicker-widget table td.old,\n.bootstrap-datetimepicker-widget table td.new {\n  color: #777777;\n}\n.bootstrap-datetimepicker-widget table td.today {\n  position: relative;\n}\n.bootstrap-datetimepicker-widget table td.today:before {\n  content: '';\n  display: inline-block;\n  border: solid transparent;\n  border-width: 0 0 7px 7px;\n  border-bottom-color: #337ab7;\n  border-top-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n}\n.bootstrap-datetimepicker-widget table td.active,\n.bootstrap-datetimepicker-widget table td.active:hover {\n  background-color: #337ab7;\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n.bootstrap-datetimepicker-widget table td.active.today:before {\n  border-bottom-color: #fff;\n}\n.bootstrap-datetimepicker-widget table td.disabled,\n.bootstrap-datetimepicker-widget table td.disabled:hover {\n  background: none;\n  color: #777777;\n  cursor: not-allowed;\n}\n.bootstrap-datetimepicker-widget table td span {\n  display: inline-block;\n  width: 54px;\n  height: 54px;\n  line-height: 54px;\n  margin: 2px 1.5px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n.bootstrap-datetimepicker-widget table td span:hover {\n  background: #eeeeee;\n}\n.bootstrap-datetimepicker-widget table td span.active {\n  background-color: #337ab7;\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n.bootstrap-datetimepicker-widget table td span.old {\n  color: #777777;\n}\n.bootstrap-datetimepicker-widget table td span.disabled,\n.bootstrap-datetimepicker-widget table td span.disabled:hover {\n  background: none;\n  color: #777777;\n  cursor: not-allowed;\n}\n.bootstrap-datetimepicker-widget.usetwentyfour td.hour {\n  height: 27px;\n  line-height: 27px;\n}\n.bootstrap-datetimepicker-widget.wider {\n  width: 21em;\n}\n.bootstrap-datetimepicker-widget .datepicker-decades .decade {\n  line-height: 1.8em !important;\n}\n.input-group.date .input-group-addon {\n  cursor: pointer;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n", ""]);

// exports


        /***/
    }),

    /***/ 187:
    /***/ (function (module, exports, __webpack_require__) {

        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

        var stylesInDom = {};

        var memoize = function (fn) {
            var memo;

            return function () {
                if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                return memo;
            };
        };

        var isOldIE = memoize(function () {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            return window && document && document.all && !window.atob;
        });

        var getElement = (function (fn) {
            var memo = {};

            return function (selector) {
                if (typeof memo[selector] === "undefined") {
                    memo[selector] = fn.call(this, selector);
                }

                return memo[selector]
            };
        })(function (target) {
            return document.querySelector(target)
        });

        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];

        var fixUrls = __webpack_require__(188);

        module.exports = function (list, options) {
            if (typeof DEBUG !== "undefined" && DEBUG) {
                if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
            }

            options = options || {};

            options.attrs = typeof options.attrs === "object" ? options.attrs : {};

            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            if (!options.singleton) options.singleton = isOldIE();

            // By default, add <style> tags to the <head> element
            if (!options.insertInto) options.insertInto = "head";

            // By default, add <style> tags to the bottom of the target
            if (!options.insertAt) options.insertAt = "bottom";

            var styles = listToStyles(list, options);

            addStylesToDom(styles, options);

            return function update(newList) {
                var mayRemove = [];

                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];

                    domStyle.refs--;
                    mayRemove.push(domStyle);
                }

                if (newList) {
                    var newStyles = listToStyles(newList, options);
                    addStylesToDom(newStyles, options);
                }

                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];

                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };

        function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];

                if (domStyle) {
                    domStyle.refs++;

                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j]);
                    }

                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j], options));
                    }
                } else {
                    var parts = [];

                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j], options));
                    }

                    stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
                }
            }
        }

        function listToStyles(list, options) {
            var styles = [];
            var newStyles = {};

            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = options.base ? item[0] + options.base : item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = {css: css, media: media, sourceMap: sourceMap};

                if (!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
                else newStyles[id].parts.push(part);
            }

            return styles;
        }

        function insertStyleElement(options, style) {
            var target = getElement(options.insertInto);

            if (!target) {
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            }

            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

            if (options.insertAt === "top") {
                if (!lastStyleElementInsertedAtTop) {
                    target.insertBefore(style, target.firstChild);
                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                    target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                } else {
                    target.appendChild(style);
                }
                stylesInsertedAtTop.push(style);
            } else if (options.insertAt === "bottom") {
                target.appendChild(style);
            } else {
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            }
        }

        function removeStyleElement(style) {
            if (style.parentNode === null) return false;
            style.parentNode.removeChild(style);

            var idx = stylesInsertedAtTop.indexOf(style);
            if (idx >= 0) {
                stylesInsertedAtTop.splice(idx, 1);
            }
        }

        function createStyleElement(options) {
            var style = document.createElement("style");

            options.attrs.type = "text/css";

            addAttrs(style, options.attrs);
            insertStyleElement(options, style);

            return style;
        }

        function createLinkElement(options) {
            var link = document.createElement("link");

            options.attrs.type = "text/css";
            options.attrs.rel = "stylesheet";

            addAttrs(link, options.attrs);
            insertStyleElement(options, link);

            return link;
        }

        function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function (key) {
                el.setAttribute(key, attrs[key]);
            });
        }

        function addStyle(obj, options) {
            var style, update, remove, result;

            // If a transform function was defined, run it on the css
            if (options.transform && obj.css) {
                result = options.transform(obj.css);

                if (result) {
                    // If transform returns a value, use that instead of the original css.
                    // This allows running runtime transformations on the css.
                    obj.css = result;
                } else {
                    // If the transform function returns a falsy value, don't add this css.
                    // This allows conditional loading of css
                    return function () {
                        // noop
                    };
                }
            }

            if (options.singleton) {
                var styleIndex = singletonCounter++;

                style = singleton || (singleton = createStyleElement(options));

                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);

            } else if (
                obj.sourceMap &&
                typeof URL === "function" &&
                typeof URL.createObjectURL === "function" &&
                typeof URL.revokeObjectURL === "function" &&
                typeof Blob === "function" &&
                typeof btoa === "function"
            ) {
                style = createLinkElement(options);
                update = updateLink.bind(null, style, options);
                remove = function () {
                    removeStyleElement(style);

                    if (style.href) URL.revokeObjectURL(style.href);
                };
            } else {
                style = createStyleElement(options);
                update = applyToTag.bind(null, style);
                remove = function () {
                    removeStyleElement(style);
                };
            }

            update(obj);

            return function updateStyle(newObj) {
                if (newObj) {
                    if (
                        newObj.css === obj.css &&
                        newObj.media === obj.media &&
                        newObj.sourceMap === obj.sourceMap
                    ) {
                        return;
                    }

                    update(obj = newObj);
                } else {
                    remove();
                }
            };
        }

        var replaceText = (function () {
            var textStore = [];

            return function (index, replacement) {
                textStore[index] = replacement;

                return textStore.filter(Boolean).join('\n');
            };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.css;

            if (style.styleSheet) {
                style.styleSheet.cssText = replaceText(index, css);
            } else {
                var cssNode = document.createTextNode(css);
                var childNodes = style.childNodes;

                if (childNodes[index]) style.removeChild(childNodes[index]);

                if (childNodes.length) {
                    style.insertBefore(cssNode, childNodes[index]);
                } else {
                    style.appendChild(cssNode);
                }
            }
        }

        function applyToTag(style, obj) {
            var css = obj.css;
            var media = obj.media;

            if (media) {
                style.setAttribute("media", media)
            }

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                while (style.firstChild) {
                    style.removeChild(style.firstChild);
                }

                style.appendChild(document.createTextNode(css));
            }
        }

        function updateLink(link, options, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;

            /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
            var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

            if (options.convertToAbsoluteUrls || autoFixUrls) {
                css = fixUrls(css);
            }

            if (sourceMap) {
                // http://stackoverflow.com/a/26603875
                css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
            }

            var blob = new Blob([css], {type: "text/css"});

            var oldSrc = link.href;

            link.href = URL.createObjectURL(blob);

            if (oldSrc) URL.revokeObjectURL(oldSrc);
        }


        /***/
    }),

    /***/ 188:
    /***/ (function (module, exports) {


        /**
         * When source maps are enabled, `style-loader` uses a link element with a data-uri to
         * embed the css on the page. This breaks all relative urls because now they are relative to a
         * bundle instead of the current page.
         *
         * One solution is to only use full urls, but that may be impossible.
         *
         * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
         *
         * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
         *
         */

        module.exports = function (css) {
            // get current location
            var location = typeof window !== "undefined" && window.location;

            if (!location) {
                throw new Error("fixUrls requires window.location");
            }

            // blank or null?
            if (!css || typeof css !== "string") {
                return css;
            }

            var baseUrl = location.protocol + "//" + location.host;
            var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

            // convert each url(...)
            /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
            var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
                // strip quotes (if they exist)
                var unquotedOrigUrl = origUrl
                    .trim()
                    .replace(/^"(.*)"$/, function (o, $1) {
                        return $1;
                    })
                    .replace(/^'(.*)'$/, function (o, $1) {
                        return $1;
                    });

                // already a full url? no change
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
                    return fullMatch;
                }

                // convert the url to a full url
                var newUrl;

                if (unquotedOrigUrl.indexOf("//") === 0) {
                    //TODO: should we add protocol?
                    newUrl = unquotedOrigUrl;
                } else if (unquotedOrigUrl.indexOf("/") === 0) {
                    // path should be relative to the base url
                    newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                } else {
                    // path should be relative to current directory
                    newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
                }

                // send back the fixed url(...)
                return "url(" + JSON.stringify(newUrl) + ")";
            });

            // send back the fixed css
            return fixedCss;
        };


        /***/
    }),

    /***/ 189:
    /***/ (function (module, exports, __webpack_require__) {

        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c(
                "div",
                {staticClass: "container", attrs: {id: "edit"}},
                [
                    _c(
                        "router-link",
                        {staticClass: "btn btn-info btn-sm", attrs: {to: "/"}},
                        [_vm._v("Back")]
                    ),
                    _vm._v(" "),
                    _c(
                        "form",
                        {
                            attrs: {method: "post"},
                            on: {
                                submit: function ($event) {
                                    $event.preventDefault();
                                    _vm.submitData($event)
                                }
                            }
                        },
                        [
                            _c("div", {staticClass: "table-responsive"}, [
                                _c("table", {staticClass: "table table-binvoiceed"}, [
                                    _vm._m(0),
                                    _vm._v(" "),
                                    _c("tr", [
                                        _c("td", {attrs: {colspan: "2"}}, [
                                            _c("div", {staticClass: "row"}, [
                                                _c("div", {staticClass: "col-md-8"}, [
                                                    _c("b", [_vm._v("Client Details")]),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: _vm.invoice.client_name,
                                                                expression: "invoice.client_name"
                                                            }
                                                        ],
                                                        staticClass: "form-control input-sm",
                                                        attrs: {
                                                            type: "text",
                                                            id: "client_name",
                                                            placeholder: "Client Name"
                                                        },
                                                        domProps: {value: _vm.invoice.client_name},
                                                        on: {
                                                            input: function ($event) {
                                                                if ($event.target.composing) {
                                                                    return
                                                                }
                                                                _vm.$set(
                                                                    _vm.invoice,
                                                                    "client_name",
                                                                    $event.target.value
                                                                )
                                                            }
                                                        }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("textarea", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: _vm.invoice.client_address,
                                                                expression: "invoice.client_address"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            id: "client_address",
                                                            placeholder: "Billing Address"
                                                        },
                                                        domProps: {value: _vm.invoice.client_address},
                                                        on: {
                                                            input: function ($event) {
                                                                if ($event.target.composing) {
                                                                    return
                                                                }
                                                                _vm.$set(
                                                                    _vm.invoice,
                                                                    "client_address",
                                                                    $event.target.value
                                                                )
                                                            }
                                                        }
                                                    })
                                                ]),
                                                _vm._v(" "),
                                                _c("div", {staticClass: "col-md-4"}, [
                                                    _c("strong", [_vm._v("Invoice Details")]),
                                                    _vm._v(" "),
                                                    _c("div", {staticClass: "row"}, [
                                                        _vm._m(1),
                                                        _vm._v(" "),
                                                        _c("div", {staticClass: "col-md-6"}, [
                                                            _c("input", {
                                                                directives: [
                                                                    {
                                                                        name: "model",
                                                                        rawName: "v-model",
                                                                        value: _vm.invoice.invoice_number,
                                                                        expression: "invoice.invoice_number"
                                                                    }
                                                                ],
                                                                staticClass: "form-control",
                                                                attrs: {
                                                                    type: "text",
                                                                    id: "invoice_number",
                                                                    placeholder: "Invoice Number"
                                                                },
                                                                domProps: {value: _vm.invoice.invoice_number},
                                                                on: {
                                                                    input: function ($event) {
                                                                        if ($event.target.composing) {
                                                                            return
                                                                        }
                                                                        _vm.$set(
                                                                            _vm.invoice,
                                                                            "invoice_number",
                                                                            $event.target.value
                                                                        )
                                                                    }
                                                                }
                                                            })
                                                        ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("div", {staticClass: "row"}, [
                                                        _vm._m(2),
                                                        _vm._v(" "),
                                                        _c(
                                                            "div",
                                                            {staticClass: "col-md-6"},
                                                            [
                                                                _c("date-picker", {
                                                                    attrs: {config: _vm.config},
                                                                    model: {
                                                                        value: _vm.invoice.invoice_date,
                                                                        callback: function ($$v) {
                                                                            _vm.$set(_vm.invoice, "invoice_date", $$v)
                                                                        },
                                                                        expression: "invoice.invoice_date"
                                                                    }
                                                                })
                                                            ],
                                                            1
                                                        )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("div", {staticClass: "row"}, [
                                                        _vm._m(3),
                                                        _vm._v(" "),
                                                        _c(
                                                            "div",
                                                            {staticClass: "col-md-6"},
                                                            [
                                                                _c("date-picker", {
                                                                    attrs: {config: _vm.config},
                                                                    model: {
                                                                        value: _vm.invoice.due_date,
                                                                        callback: function ($$v) {
                                                                            _vm.$set(_vm.invoice, "due_date", $$v)
                                                                        },
                                                                        expression: "invoice.due_date"
                                                                    }
                                                                })
                                                            ],
                                                            1
                                                        )
                                                    ])
                                                ])
                                            ]),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c(
                                                "table",
                                                {
                                                    staticClass: "table table-binvoiceed",
                                                    attrs: {id: "invoice-item-table", cellspacing: "3"}
                                                },
                                                [
                                                    _vm._m(4),
                                                    _vm._v(" "),
                                                    _vm._l(_vm.rows, function (item, index) {
                                                        return _c("tr", [
                                                            _c("td", [
                                                                _c("span", {attrs: {id: "sr_no"}}, [
                                                                    _c("strong", [_vm._v(_vm._s(index + 1))])
                                                                ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model",
                                                                            value: item.name,
                                                                            expression: "item.name"
                                                                        }
                                                                    ],
                                                                    staticClass: "form-control input-sm",
                                                                    attrs: {
                                                                        type: "text",
                                                                        name: "item_name[]",
                                                                        id: "item_name" + index,
                                                                        required: "required"
                                                                    },
                                                                    domProps: {value: item.name},
                                                                    on: {
                                                                        input: function ($event) {
                                                                            if ($event.target.composing) {
                                                                                return
                                                                            }
                                                                            _vm.$set(item, "name", $event.target.value)
                                                                        }
                                                                    }
                                                                })
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model.number",
                                                                            value: item.quantity,
                                                                            expression: "item.quantity",
                                                                            modifiers: {number: true}
                                                                        }
                                                                    ],
                                                                    staticClass: "form-control input-sm",
                                                                    attrs: {
                                                                        type: "number",
                                                                        name: "item_quantity[]",
                                                                        id: "item_quantity" + index,
                                                                        "data-srno": index,
                                                                        required: "required"
                                                                    },
                                                                    domProps: {value: item.quantity},
                                                                    on: {
                                                                        input: function ($event) {
                                                                            if ($event.target.composing) {
                                                                                return
                                                                            }
                                                                            _vm.$set(
                                                                                item,
                                                                                "quantity",
                                                                                _vm._n($event.target.value)
                                                                            )
                                                                        },
                                                                        blur: function ($event) {
                                                                            _vm.$forceUpdate()
                                                                        }
                                                                    }
                                                                })
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model.number",
                                                                            value: item.price,
                                                                            expression: "item.price",
                                                                            modifiers: {number: true}
                                                                        }
                                                                    ],
                                                                    staticClass: "form-control input-sm number_only",
                                                                    attrs: {
                                                                        type: "number",
                                                                        name: "item_price[]",
                                                                        id: "item_price" + index,
                                                                        "data-srno": index,
                                                                        required: "required"
                                                                    },
                                                                    domProps: {value: item.price},
                                                                    on: {
                                                                        input: function ($event) {
                                                                            if ($event.target.composing) {
                                                                                return
                                                                            }
                                                                            _vm.$set(
                                                                                item,
                                                                                "price",
                                                                                _vm._n($event.target.value)
                                                                            )
                                                                        },
                                                                        blur: function ($event) {
                                                                            _vm.$forceUpdate()
                                                                        }
                                                                    }
                                                                })
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model.number",
                                                                            value: item.total,
                                                                            expression: "item.total",
                                                                            modifiers: {number: true}
                                                                        }
                                                                    ],
                                                                    staticClass: "form-control",
                                                                    attrs: {
                                                                        type: "number",
                                                                        name: "item_total[]",
                                                                        id: "item_total" + index,
                                                                        "data-srno": index,
                                                                        readonly: "",
                                                                        required: "required"
                                                                    },
                                                                    domProps: {value: item.total},
                                                                    on: {
                                                                        input: function ($event) {
                                                                            if ($event.target.composing) {
                                                                                return
                                                                            }
                                                                            _vm.$set(
                                                                                item,
                                                                                "total",
                                                                                _vm._n($event.target.value)
                                                                            )
                                                                        },
                                                                        blur: function ($event) {
                                                                            _vm.$forceUpdate()
                                                                        }
                                                                    }
                                                                })
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [_vm._v("  ")]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c(
                                                                    "button",
                                                                    {
                                                                        staticClass: "btn btn-success btn-sm",
                                                                        attrs: {type: "button"},
                                                                        on: {
                                                                            click: function ($event) {
                                                                                _vm.removeRow(index)
                                                                            }
                                                                        }
                                                                    },
                                                                    [
                                                                        _vm._v(
                                                                            "\n                                        X\n                                    "
                                                                        )
                                                                    ]
                                                                )
                                                            ])
                                                        ])
                                                    })
                                                ],
                                                2
                                            ),
                                            _vm._v(" "),
                                            _c("div", {attrs: {align: "right"}}, [
                                                _c(
                                                    "button",
                                                    {
                                                        staticClass: "btn btn-success btn-sm",
                                                        attrs: {type: "button"},
                                                        on: {
                                                            click: function ($event) {
                                                                $event.preventDefault();
                                                                _vm.addRow($event)
                                                            }
                                                        }
                                                    },
                                                    [_c("b", [_vm._v("Add")])]
                                                )
                                            ])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                        _vm._m(5),
                                        _vm._v(" "),
                                        _c("td", {attrs: {align: "right"}}, [
                                            _c("strong", [_vm._v(_vm._s(_vm.final_total))])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(6),
                                    _vm._v(" "),
                                    _vm._m(7)
                                ])
                            ])
                        ]
                    )
                ],
                1
            )
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("tr", [
                    _c("td", {attrs: {colspan: "2", align: "center"}}, [
                        _c("h2", {staticStyle: {"margin-top": "10.5px"}}, [
                            _vm._v("Create Invoice")
                        ])
                    ])
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {staticClass: "col-md-4"}, [
                    _c(
                        "label",
                        {staticClass: "col-form-label-sm", attrs: {for: "invoice_number"}},
                        [_vm._v("Invoice Number")]
                    )
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {staticClass: "col-md-4"}, [
                    _c(
                        "label",
                        {staticClass: "col-form-label-sm", attrs: {for: "Invoice Date"}},
                        [_vm._v("Invoice Date")]
                    )
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {staticClass: "col-md-4"}, [
                    _c(
                        "label",
                        {staticClass: "col-form-label-sm", attrs: {for: "Due Date"}},
                        [_vm._v("Due Date")]
                    )
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("tr", [
                    _c("th", [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Item Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Quantity")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Price")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Total")])
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("td", {attrs: {align: "right"}}, [
                    _c("strong", [_vm._v("Final Total")])
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("tr", [_c("td", {attrs: {colspan: "2"}})])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("tr", [
                    _c("td", {attrs: {colspan: "2", align: "center"}}, [
                        _c("input", {
                            staticClass: "btn btn-primary",
                            attrs: {
                                type: "submit",
                                name: "create_invoice",
                                id: "create_invoice",
                                value: "Create"
                            }
                        })
                    ])
                ])
            }
        ];
        render._withStripped = true;
        module.exports = {render: render, staticRenderFns: staticRenderFns};
        if (false) {
            module.hot.accept();
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-1103559a", module.exports)
            }
        }

        /***/
    }),

    /***/ 190:
    /***/ (function (module, exports, __webpack_require__) {

        var disposed = false;

        function injectStyle(ssrContext) {
            if (disposed) return;
            __webpack_require__(191)
        }

        var normalizeComponent = __webpack_require__(3);
        /* script */
        var __vue_script__ = __webpack_require__(193);
        /* template */
        var __vue_template__ = __webpack_require__(194);
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(
            __vue_script__,
            __vue_template__,
            __vue_template_functional__,
            __vue_styles__,
            __vue_scopeId__,
            __vue_module_identifier__
        );
        Component.options.__file = "resources\\assets\\js\\components\\Edit.vue";

        /* hot reload */
        if (false) {
            (function () {
                var hotAPI = require("vue-hot-reload-api");
                hotAPI.install(require("vue"), false);
                if (!hotAPI.compatible) return;
                module.hot.accept();
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-39804701", Component.options)
                } else {
                    hotAPI.reload("data-v-39804701", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports


        /***/
    }),

    /***/ 191:
    /***/ (function (module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
        var content = __webpack_require__(192);
        if (typeof content === 'string') content = [[module.i, content, '']];
        if (content.locals) module.exports = content.locals;
// add the styles to the DOM
        var update = __webpack_require__(6)("72234a63", content, false, {});
// Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39804701\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function () {
                    var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39804701\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
                    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function () {
                update();
            });
        }

        /***/
    }),

    /***/ 192:
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(4)(false);
// imports


// module
        exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


        /***/
    }),

    /***/ 193:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_datetimepicker__ = __webpack_require__(9);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_datetimepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_datetimepicker__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css__ = __webpack_require__(137);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// Import this component

// Import date picker css


        /* harmony default export */
        __webpack_exports__["default"] = ({
            data: function data() {
                // Define the data to be manipulated and submitted subsequently
                return {
                    invoice: {},
                    rows: [],
                    showItems: false,
                    final_total: 0,
                    config: {
                        format: 'YYYY-MM-DD',
                        useCurrent: false
                    }
                };
            },

            components: { // Components used inside the current component
                datePicker: __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_datetimepicker___default.a
            },
            created: function created() {
                // Set the initial defaults when the current component is created
                this.fetchInvoice(this.$route.params.id);
            },
            updated: function updated() {
                // Re-calculate the item totals when the updated hook is called
                this.calcItemTotal();
            },

            methods: {
                fetchInvoice: function fetchInvoice(id) {
                    var vm = this;
                    axios.get('/api/invoice/' + id).then(function (response) {
                        vm.invoice = response.data.data;
                        vm.rows = vm.invoice.line_items;
                        vm.showItems = true;
                    }).catch(function (error) {
                        alert(error);
                    });
                },
                submitData: function submitData() {
                    // Create a new invoice variable, set the properties and submit the same for data insertion
                    var newInvoice = {
                        invoice_number: this.invoice.number,
                        client_name: this.invoice.client,
                        client_address: this.invoice.client_address,
                        invoice_date: this.invoice.invoice_date,
                        due_date: this.invoice.due_date,
                        amount: this.final_total,
                        line_items: this.rows
                    };
                    this.updateInvoice(newInvoice);
                },
                updateInvoice: function updateInvoice(invoice) {
                    // Submit to Data to the remove server for data insertion
                    var vm = this;
                    var id = vm.$route.params.id;
                    axios.put('api/invoice/' + id, invoice).then(function (response) {
                        vm.$router.push({
                            path: '/',
                            query: {alert: 'Invoice with id=' + id + ' updated successfully!'}
                        });
                    }).catch(function (error) {
                        alert(error);
                    });
                },
                addRow: function addRow() {
                    // Add a row of line_items to the DOM
                    this.rows.push({
                        name: '',
                        quantity: '',
                        price: '',
                        total: ''
                    });
                },
                removeRow: function removeRow(index) {
                    // Remove a row of line_items from the DOM
                    this.rows.splice(index, 1);
                },
                calcItemTotal: function calcItemTotal() {
                    //Calculate items and final totals
                    var finalTotalTemp = 0;
                    this.rows.forEach(function (row) {
                        row.total = row.quantity * row.price;
                        finalTotalTemp += row.total;
                    });
                    this.final_total = finalTotalTemp;
                },
                today: function today() {
                    // get today's date to display as a default in the date fields
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; // January is 0!
                    var yyyy = today.getFullYear();

                    if (dd < 10) {
                        dd = '0' + dd;
                    }

                    if (mm < 10) {
                        mm = '0' + mm;
                    }

                    today = yyyy + '-' + mm + '-' + dd;

                    return today;
                }
            }
        });

        /***/
    }),

    /***/ 194:
    /***/ (function (module, exports, __webpack_require__) {

        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c(
                "div",
                {staticClass: "container", attrs: {id: "edit"}},
                [
                    _c(
                        "router-link",
                        {staticClass: "btn btn-info btn-sm", attrs: {to: "/"}},
                        [_vm._v("Back")]
                    ),
                    _vm._v(" "),
                    _c(
                        "form",
                        {
                            attrs: {method: "post"},
                            on: {
                                submit: function ($event) {
                                    $event.preventDefault();
                                    _vm.submitData($event)
                                }
                            }
                        },
                        [
                            _c("div", {staticClass: "table-responsive"}, [
                                _c("table", {staticClass: "table table-binvoiceed"}, [
                                    _c("tr", [
                                        _c("td", {attrs: {colspan: "2", align: "center"}}, [
                                            _c("h2", {staticStyle: {"margin-top": "10.5px"}}, [
                                                _vm._v("Update Invoice: " + _vm._s(_vm.invoice.number))
                                            ])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                        _c("td", {attrs: {colspan: "2"}}, [
                                            _c("div", {staticClass: "row"}, [
                                                _c("div", {staticClass: "col-md-8"}, [
                                                    _c("b", [_vm._v("Client Details")]),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: _vm.invoice.client,
                                                                expression: "invoice.client"
                                                            }
                                                        ],
                                                        staticClass: "form-control input-sm",
                                                        attrs: {
                                                            type: "text",
                                                            id: "client_name",
                                                            placeholder: "Client Name"
                                                        },
                                                        domProps: {value: _vm.invoice.client},
                                                        on: {
                                                            input: function ($event) {
                                                                if ($event.target.composing) {
                                                                    return
                                                                }
                                                                _vm.$set(_vm.invoice, "client", $event.target.value)
                                                            }
                                                        }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("textarea", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: _vm.invoice.client_address,
                                                                expression: "invoice.client_address"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            id: "client_address",
                                                            placeholder: "Billing Address"
                                                        },
                                                        domProps: {value: _vm.invoice.client_address},
                                                        on: {
                                                            input: function ($event) {
                                                                if ($event.target.composing) {
                                                                    return
                                                                }
                                                                _vm.$set(
                                                                    _vm.invoice,
                                                                    "client_address",
                                                                    $event.target.value
                                                                )
                                                            }
                                                        }
                                                    })
                                                ]),
                                                _vm._v(" "),
                                                _c("div", {staticClass: "col-md-4"}, [
                                                    _c("strong", [_vm._v("Invoice Details")]),
                                                    _vm._v(" "),
                                                    _c("div", {staticClass: "row"}, [
                                                        _vm._m(0),
                                                        _vm._v(" "),
                                                        _c("div", {staticClass: "col-md-6"}, [
                                                            _c("input", {
                                                                directives: [
                                                                    {
                                                                        name: "model",
                                                                        rawName: "v-model",
                                                                        value: _vm.invoice.number,
                                                                        expression: "invoice.number"
                                                                    }
                                                                ],
                                                                staticClass: "form-control",
                                                                attrs: {
                                                                    type: "text",
                                                                    id: "invoice_number",
                                                                    placeholder: "Invoice Number"
                                                                },
                                                                domProps: {value: _vm.invoice.number},
                                                                on: {
                                                                    input: function ($event) {
                                                                        if ($event.target.composing) {
                                                                            return
                                                                        }
                                                                        _vm.$set(
                                                                            _vm.invoice,
                                                                            "number",
                                                                            $event.target.value
                                                                        )
                                                                    }
                                                                }
                                                            })
                                                        ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("div", {staticClass: "row"}, [
                                                        _vm._m(1),
                                                        _vm._v(" "),
                                                        _c(
                                                            "div",
                                                            {staticClass: "col-md-6"},
                                                            [
                                                                _c("date-picker", {
                                                                    attrs: {config: _vm.config},
                                                                    model: {
                                                                        value: _vm.invoice.invoice_date,
                                                                        callback: function ($$v) {
                                                                            _vm.$set(_vm.invoice, "invoice_date", $$v)
                                                                        },
                                                                        expression: "invoice.invoice_date"
                                                                    }
                                                                })
                                                            ],
                                                            1
                                                        )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("div", {staticClass: "row"}, [
                                                        _vm._m(2),
                                                        _vm._v(" "),
                                                        _c(
                                                            "div",
                                                            {staticClass: "col-md-6"},
                                                            [
                                                                _c("date-picker", {
                                                                    attrs: {config: _vm.config},
                                                                    model: {
                                                                        value: _vm.invoice.due_date,
                                                                        callback: function ($$v) {
                                                                            _vm.$set(_vm.invoice, "due_date", $$v)
                                                                        },
                                                                        expression: "invoice.due_date"
                                                                    }
                                                                })
                                                            ],
                                                            1
                                                        )
                                                    ])
                                                ])
                                            ]),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c(
                                                "table",
                                                {
                                                    staticClass: "table table-binvoiceed",
                                                    attrs: {id: "invoice-item-table", cellspacing: "3"}
                                                },
                                                [
                                                    _vm._m(3),
                                                    _vm._v(" "),
                                                    _vm._l(_vm.rows, function (item, index) {
                                                        return _c("tr", [
                                                            _c("td", [
                                                                _c("span", {attrs: {id: "sr_no"}}, [
                                                                    _c("strong", [_vm._v(_vm._s(index + 1))])
                                                                ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model",
                                                                            value: item.name,
                                                                            expression: "item.name"
                                                                        }
                                                                    ],
                                                                    staticClass: "form-control input-sm",
                                                                    attrs: {
                                                                        type: "text",
                                                                        name: "item_name[]",
                                                                        id: "item_name" + index,
                                                                        required: "required"
                                                                    },
                                                                    domProps: {value: item.name},
                                                                    on: {
                                                                        input: function ($event) {
                                                                            if ($event.target.composing) {
                                                                                return
                                                                            }
                                                                            _vm.$set(item, "name", $event.target.value)
                                                                        }
                                                                    }
                                                                })
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model.number",
                                                                            value: item.quantity,
                                                                            expression: "item.quantity",
                                                                            modifiers: {number: true}
                                                                        }
                                                                    ],
                                                                    staticClass: "form-control input-sm",
                                                                    attrs: {
                                                                        type: "number",
                                                                        name: "item_quantity[]",
                                                                        id: "item_quantity" + index,
                                                                        "data-srno": index,
                                                                        required: "required"
                                                                    },
                                                                    domProps: {value: item.quantity},
                                                                    on: {
                                                                        input: function ($event) {
                                                                            if ($event.target.composing) {
                                                                                return
                                                                            }
                                                                            _vm.$set(
                                                                                item,
                                                                                "quantity",
                                                                                _vm._n($event.target.value)
                                                                            )
                                                                        },
                                                                        blur: function ($event) {
                                                                            _vm.$forceUpdate()
                                                                        }
                                                                    }
                                                                })
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model.number",
                                                                            value: item.price,
                                                                            expression: "item.price",
                                                                            modifiers: {number: true}
                                                                        }
                                                                    ],
                                                                    staticClass: "form-control input-sm number_only",
                                                                    attrs: {
                                                                        type: "number",
                                                                        name: "item_price[]",
                                                                        id: "item_price" + index,
                                                                        "data-srno": index,
                                                                        required: "required"
                                                                    },
                                                                    domProps: {value: item.price},
                                                                    on: {
                                                                        input: function ($event) {
                                                                            if ($event.target.composing) {
                                                                                return
                                                                            }
                                                                            _vm.$set(
                                                                                item,
                                                                                "price",
                                                                                _vm._n($event.target.value)
                                                                            )
                                                                        },
                                                                        blur: function ($event) {
                                                                            _vm.$forceUpdate()
                                                                        }
                                                                    }
                                                                })
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model.number",
                                                                            value: item.total,
                                                                            expression: "item.total",
                                                                            modifiers: {number: true}
                                                                        }
                                                                    ],
                                                                    staticClass: "form-control",
                                                                    attrs: {
                                                                        type: "number",
                                                                        name: "item_total[]",
                                                                        id: "item_total" + index,
                                                                        "data-srno": index,
                                                                        readonly: "",
                                                                        required: "required"
                                                                    },
                                                                    domProps: {value: item.total},
                                                                    on: {
                                                                        input: function ($event) {
                                                                            if ($event.target.composing) {
                                                                                return
                                                                            }
                                                                            _vm.$set(
                                                                                item,
                                                                                "total",
                                                                                _vm._n($event.target.value)
                                                                            )
                                                                        },
                                                                        blur: function ($event) {
                                                                            _vm.$forceUpdate()
                                                                        }
                                                                    }
                                                                })
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [_vm._v("  ")]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                                _c(
                                                                    "button",
                                                                    {
                                                                        staticClass: "btn btn-success btn-sm",
                                                                        attrs: {type: "button"},
                                                                        on: {
                                                                            click: function ($event) {
                                                                                _vm.removeRow(index)
                                                                            }
                                                                        }
                                                                    },
                                                                    [
                                                                        _vm._v(
                                                                            "\n                                        X\n                                    "
                                                                        )
                                                                    ]
                                                                )
                                                            ])
                                                        ])
                                                    })
                                                ],
                                                2
                                            ),
                                            _vm._v(" "),
                                            _c("div", {attrs: {align: "right"}}, [
                                                _c(
                                                    "button",
                                                    {
                                                        staticClass: "btn btn-success btn-sm",
                                                        attrs: {type: "button"},
                                                        on: {
                                                            click: function ($event) {
                                                                $event.preventDefault();
                                                                _vm.addRow($event)
                                                            }
                                                        }
                                                    },
                                                    [_c("b", [_vm._v("Add")])]
                                                )
                                            ])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                        _vm._m(4),
                                        _vm._v(" "),
                                        _c("td", {attrs: {align: "right"}}, [
                                            _c("strong", [_vm._v(_vm._s(_vm.final_total))])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(5),
                                    _vm._v(" "),
                                    _vm._m(6)
                                ])
                            ])
                        ]
                    )
                ],
                1
            )
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {staticClass: "col-md-4"}, [
                    _c(
                        "label",
                        {staticClass: "col-form-label-sm", attrs: {for: "invoice_number"}},
                        [_vm._v("Invoice Number")]
                    )
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {staticClass: "col-md-4"}, [
                    _c("label", {staticClass: "col-form-label-sm"}, [
                        _vm._v("Invoice Date")
                    ])
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {staticClass: "col-md-4"}, [
                    _c("label", {staticClass: "col-form-label-sm"}, [_vm._v("Due Date")])
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("tr", [
                    _c("th", [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Item Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Quantity")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Price")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Total")])
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("td", {attrs: {align: "right"}}, [
                    _c("strong", [_vm._v("Final Total")])
                ])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("tr", [_c("td", {attrs: {colspan: "2"}})])
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("tr", [
                    _c("td", {attrs: {colspan: "2", align: "center"}}, [
                        _c("input", {
                            staticClass: "btn btn-primary",
                            attrs: {
                                type: "submit",
                                name: "create_invoice",
                                id: "create_invoice",
                                value: "Update"
                            }
                        })
                    ])
                ])
            }
        ];
        render._withStripped = true;
        module.exports = {render: render, staticRenderFns: staticRenderFns};
        if (false) {
            module.hot.accept();
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-39804701", module.exports)
            }
        }

        /***/
    }),

    /***/ 3:
    /***/ (function (module, exports) {

        /* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

        module.exports = function normalizeComponent(rawScriptExports,
                                                     compiledTemplate,
                                                     functionalTemplate,
                                                     injectStyles,
                                                     scopeId,
                                                     moduleIdentifier /* server only */) {
            var esModule;
            var scriptExports = rawScriptExports = rawScriptExports || {};

            // ES6 modules interop
            var type = typeof rawScriptExports.default;
            if (type === 'object' || type === 'function') {
                esModule = rawScriptExports;
                scriptExports = rawScriptExports.default
            }

            // Vue.extend constructor export interop
            var options = typeof scriptExports === 'function'
                ? scriptExports.options
                : scriptExports;

            // render functions
            if (compiledTemplate) {
                options.render = compiledTemplate.render;
                options.staticRenderFns = compiledTemplate.staticRenderFns;
                options._compiled = true
            }

            // functional template
            if (functionalTemplate) {
                options.functional = true
            }

            // scopedId
            if (scopeId) {
                options._scopeId = scopeId
            }

            var hook;
            if (moduleIdentifier) { // server build
                hook = function (context) {
                    // 2.3 injection
                    context =
                        context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                    // 2.2 with runInNewContext: true
                    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                        context = __VUE_SSR_CONTEXT__
                    }
                    // inject component styles
                    if (injectStyles) {
                        injectStyles.call(this, context)
                    }
                    // register component module identifier for async chunk inferrence
                    if (context && context._registeredComponents) {
                        context._registeredComponents.add(moduleIdentifier)
                    }
                };
                // used by ssr in case component is cached and beforeCreate
                // never gets called
                options._ssrRegister = hook
            } else if (injectStyles) {
                hook = injectStyles
            }

            if (hook) {
                var functional = options.functional;
                var existing = functional
                    ? options.render
                    : options.beforeCreate;

                if (!functional) {
                    // inject component registration as beforeCreate hook
                    options.beforeCreate = existing
                        ? [].concat(existing, hook)
                        : [hook]
                } else {
                    // for template-only hot-reload because in that case the render fn doesn't
                    // go through the normalizer
                    options._injectStyles = hook;
                    // register for functioal component in vue file
                    options.render = function renderWithStyleInjection(h, context) {
                        hook.call(context);
                        return existing(h, context)
                    }
                }
            }

            return {
                esModule: esModule,
                exports: scriptExports,
                options: options
            }
        }


        /***/
    }),

    /***/ 4:
    /***/ (function (module, exports) {

        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
        module.exports = function (useSourceMap) {
            var list = [];

            // return the list of modules as css string
            list.toString = function toString() {
                return this.map(function (item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    if (item[2]) {
                        return "@media " + item[2] + "{" + content + "}";
                    } else {
                        return content;
                    }
                }).join("");
            };

            // import a list of modules into the list
            list.i = function (modules, mediaQuery) {
                if (typeof modules === "string")
                    modules = [[null, modules, ""]];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (typeof id === "number")
                        alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        } else if (mediaQuery) {
                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || '';
            var cssMapping = item[3];
            if (!cssMapping) {
                return content;
            }

            if (useSourceMap && typeof btoa === 'function') {
                var sourceMapping = toComment(cssMapping);
                var sourceURLs = cssMapping.sources.map(function (source) {
                    return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
                });

                return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
            }

            return [content].join('\n');
        }

// Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            // eslint-disable-next-line no-undef
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

            return '/*# ' + data + ' */';
        }


        /***/
    }),

    /***/ 6:
    /***/ (function (module, exports, __webpack_require__) {

        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

        var hasDocument = typeof document !== 'undefined';

        if (typeof DEBUG !== 'undefined' && DEBUG) {
            if (!hasDocument) {
                throw new Error(
                    'vue-style-loader cannot be used in a non-browser environment. ' +
                    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
                )
            }
        }

        var listToStyles = __webpack_require__(166);

        /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

        var stylesInDom = {
            /*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/
        };

        var head = hasDocument && (document.head || document.getElementsByTagName('head')[0]);
        var singletonElement = null;
        var singletonCounter = 0;
        var isProduction = false;
        var noop = function () {
        };
        var options = null;
        var ssrIdKey = 'data-vue-ssr-id';

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
        var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

        module.exports = function (parentId, list, _isProduction, _options) {
            isProduction = _isProduction;

            options = _options || {};

            var styles = listToStyles(parentId, list);
            addStylesToDom(styles);

            return function update(newList) {
                var mayRemove = [];
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    domStyle.refs--;
                    mayRemove.push(domStyle)
                }
                if (newList) {
                    styles = listToStyles(parentId, newList);
                    addStylesToDom(styles)
                } else {
                    styles = []
                }
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j]()
                        }
                        delete stylesInDom[domStyle.id]
                    }
                }
            }
        };

        function addStylesToDom(styles /* Array<StyleObject> */) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j])
                    }
                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j]))
                    }
                    if (domStyle.parts.length > item.parts.length) {
                        domStyle.parts.length = item.parts.length
                    }
                } else {
                    var parts = [];
                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j]))
                    }
                    stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts}
                }
            }
        }

        function createStyleElement() {
            var styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            head.appendChild(styleElement);
            return styleElement
        }

        function addStyle(obj /* StyleObjectPart */) {
            var update, remove;
            var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]');

            if (styleElement) {
                if (isProduction) {
                    // has SSR styles and in production mode.
                    // simply do nothing.
                    return noop
                } else {
                    // has SSR styles but in dev mode.
                    // for some reason Chrome can't handle source map in server-rendered
                    // style tags - source maps in <style> only works if the style tag is
                    // created and inserted dynamically. So we remove the server rendered
                    // styles and inject new ones.
                    styleElement.parentNode.removeChild(styleElement)
                }
            }

            if (isOldIE) {
                // use singleton mode for IE9.
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement());
                update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
            } else {
                // use multi-style-tag mode in all other cases
                styleElement = createStyleElement();
                update = applyToTag.bind(null, styleElement);
                remove = function () {
                    styleElement.parentNode.removeChild(styleElement)
                }
            }

            update(obj);

            return function updateStyle(newObj /* StyleObjectPart */) {
                if (newObj) {
                    if (newObj.css === obj.css &&
                        newObj.media === obj.media &&
                        newObj.sourceMap === obj.sourceMap) {
                        return
                    }
                    update(obj = newObj)
                } else {
                    remove()
                }
            }
        }

        var replaceText = (function () {
            var textStore = [];

            return function (index, replacement) {
                textStore[index] = replacement;
                return textStore.filter(Boolean).join('\n')
            }
        })();

        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? '' : obj.css;

            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = replaceText(index, css)
            } else {
                var cssNode = document.createTextNode(css);
                var childNodes = styleElement.childNodes;
                if (childNodes[index]) styleElement.removeChild(childNodes[index]);
                if (childNodes.length) {
                    styleElement.insertBefore(cssNode, childNodes[index])
                } else {
                    styleElement.appendChild(cssNode)
                }
            }
        }

        function applyToTag(styleElement, obj) {
            var css = obj.css;
            var media = obj.media;
            var sourceMap = obj.sourceMap;

            if (media) {
                styleElement.setAttribute('media', media)
            }
            if (options.ssrId) {
                styleElement.setAttribute(ssridKey, obj.id)
            }

            if (sourceMap) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
                // http://stackoverflow.com/a/26603875
                css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
            }

            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = css
            } else {
                while (styleElement.firstChild) {
                    styleElement.removeChild(styleElement.firstChild)
                }
                styleElement.appendChild(document.createTextNode(css))
            }
        }


        /***/
    })

}, [138]);