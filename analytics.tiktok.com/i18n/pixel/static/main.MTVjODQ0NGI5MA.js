! function() {
    "use strict";

    function t() {
        t = function() {
            return e
        };
        var e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function u(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            u({}, "")
        } catch (t) {
            u = function(t, e, r) {
                return t[e] = r
            }
        }

        function l(t, e, r, n) {
            var o = e && e.prototype instanceof p ? e : p,
                i = Object.create(o.prototype),
                a = new E(n || []);
            return i._invoke = function(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o) throw i;
                        return N()
                    }
                    for (r.method = o, r.arg = i;;) {
                        var a = r.delegate;
                        if (a) {
                            var c = g(a, r);
                            if (c) {
                                if (c === s) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n) throw n = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = f(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                    }
                }
            }(t, r, a), i
        }

        function f(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        e.wrap = l;
        var s = {};

        function p() {}

        function h() {}

        function y() {}
        var d = {};
        u(d, i, (function() {
            return this
        }));
        var _ = Object.getPrototypeOf,
            v = _ && _(_(S([])));
        v && v !== r && n.call(v, i) && (d = v);
        var m = y.prototype = p.prototype = Object.create(d);

        function b(t) {
            ["next", "throw", "return"].forEach((function(e) {
                u(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function w(t, e) {
            function r(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == typeof s && n.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                        r("next", t, a, c)
                    }), (function(t) {
                        r("throw", t, a, c)
                    })) : e.resolve(s).then((function(t) {
                        l.value = t, a(l)
                    }), (function(t) {
                        return r("throw", t, a, c)
                    }))
                }
                c(u.arg)
            }
            var o;
            this._invoke = function(t, n) {
                function i() {
                    return new e((function(e, o) {
                        r(t, n, e, o)
                    }))
                }
                return o = o ? o.then(i, i) : i()
            }
        }

        function g(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return s;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return s
            }
            var n = f(r, t.iterator, e.arg);
            if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
            var o = n.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
        }

        function O(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function I(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function E(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(O, this), this.reset(!0)
        }

        function S(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                        o = function e() {
                            for (; ++r < t.length;)
                                if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return o.next = o
                }
            }
            return {
                next: N
            }
        }

        function N() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = y, u(m, "constructor", y), u(y, "constructor", h), h.displayName = u(y, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }, e.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(m), t
        }, e.awrap = function(t) {
            return {
                __await: t
            }
        }, b(w.prototype), u(w.prototype, a, (function() {
            return this
        })), e.AsyncIterator = w, e.async = function(t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(l(t, r, n, o), i);
            return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, b(m), u(m, c, "Generator"), u(m, i, (function() {
            return this
        })), u(m, "toString", (function() {
            return "[object Generator]"
        })), e.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(),
                function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, e.values = S, E.prototype = {
            constructor: E,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !t)
                    for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function r(r, n) {
                    return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return r("end");
                    if (i.tryLoc <= this.prev) {
                        var c = n.call(i, "catchLoc"),
                            u = n.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), I(r), s
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            I(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: S(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), s
            }
        }, e
    }

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(t)
    }

    function r(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function n(t, e) {
        return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        }, n(t, e)
    }

    function o() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (t) {
            return !1
        }
    }

    function i(t, e, r) {
        return i = o() ? Reflect.construct.bind() : function(t, e, r) {
            var o = [null];
            o.push.apply(o, e);
            var i = new(Function.bind.apply(t, o));
            return r && n(i, r.prototype), i
        }, i.apply(null, arguments)
    }

    function a(t) {
        return function(t) {
            if (Array.isArray(t)) return c(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return c(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var u, l, f, s, p, h;
    ! function(t) {
        t.WINDOWS_PHONE = "Windows Phone", t.ANDROID = "android", t.IOS = "ios", t.PC = "pc"
    }(s || (s = {})),
    function(t) {
        t.MUSICAL_LY = "musical_ly", t.MUSICALLY_GO = "musically_go", t.TRILL = "trill", t.ULTRALITE = "ultralite", t.LEMON8 = "lemon8"
    }(p || (p = {})), r(f = {}, p.LEMON8, {}), r(f, p.MUSICAL_LY, (r(u = {}, s.IOS, "33.4.0"), r(u, s.ANDROID, "23.1.0"), u)), r(f, p.TRILL, (r(l = {}, s.IOS, "33.4.0"), r(l, s.ANDROID, "23.1.0"), l)),
        function(t) {
            t.LOAD_START = "load_start", t.LOAD_END = "load_end", t.BEFORE_INIT = "before_init", t.INIT_START = "init_start", t.INIT_END = "init_end", t.JSB_INIT_START = "jsb_init_start", t.JSB_INIT_END = "jsb_init_end", t.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", t.AD_INFO_INIT_START = "ad_info_init_start", t.AD_INFO_INIT_END = "ad_info_init_end", t.IDENTIFY_INIT_START = "identify_init_start", t.IDENTIFY_INIT_END = "identify_init_end", t.PLUGIN_INIT_START = "_init_start", t.PLUGIN_INIT_END = "_init_end", t.PIXEL_SEND = "pixel_send", t.PIXEL_SEND_PCM = "pixel_send_PCM", t.JSB_SEND = "jsb_send", t.HTTP_SEND = "http_send", t.HANDLE_CACHE = "handle_cache", t.INIT_ERROR = "init_error", t.PIXEL_EMPTY = "pixel_empty", t.JSB_ERROR = "jsb_error", t.API_ERROR = "api_error", t.PLUGIN_ERROR = "plugin_error", t.CUSTOM_INFO = "custom_info", t.CUSTOM_ERROR = "custom_error", t.CUSTOM_TIMER = "custom_timer"
        }(h || (h = {}));
    var y = function() {
            return "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : new Function("return this")()
        },
        d = function() {
            return y().TiktokAnalyticsObject || "ttq"
        },
        _ = function() {
            return y()[d()]
        },
        v = function(t) {
            try {
                var e = _()._plugins || {};
                return null == e[t] || !!e[t]
            } catch (t) {
                return !0
            }
        },
        m = {
            info: [],
            error: []
        };
    try {
        ! function() {
            if (/function bind\(\) \{[\s\S]*\[native code\][\s\S]*\}/.test(Function.prototype.bind.toString())) return !0;

            function t() {}
            return new(t.bind.apply(t, [void 0, 1])) instanceof t
        }() || Function.prototype._ttq_bind ? Function.prototype._ttq_bind || Object.defineProperty(Function.prototype, "_ttq_bind", {
                value: function(t) {
                    if ("function" != typeof this) throw new TypeError("What is being called by bind is not a function.");
                    var e = t || window,
                        r = Array.prototype.slice.call(arguments).slice(1),
                        n = Symbol("key");
                    return e[n] = this,
                        function t() {
                            return this instanceof t ? i(e[n], a(r).concat(Array.prototype.slice.call(arguments))) : e[n].apply(e, a(r).concat(Array.prototype.slice.call(arguments)))
                        }
                },
                enumerable: !1,
                writable: !1,
                configurable: !1
            }) : Object.defineProperty(Function.prototype, "_ttq_bind", {
                value: Function.prototype.bind,
                enumerable: !1,
                writable: !1,
                configurable: !1
            }), Object._ttq_keys || (Object._ttq_keys = function(t) {
                try {
                    return Array.isArray(t) ? Object.keys(t).filter((function(t) {
                        return -1 === ["each", "eachSlice", "all", "any", "collect", "detect", "findAll", "grep", "include", "inGroupsOf", "inject", "invoke", "max", "min", "partition", "pluck", "reject", "sortBy", "toArray", "zip", "size", "inspect", "select", "member", "_reverse", "_each", "clear", "first", "last", "compact", "flatten", "without", "uniq", "intersect", "clone", "toJSON", "remove", "swap", "putAll"].indexOf(t)
                    })) : Object.keys(t)
                } catch (e) {
                    return Object.keys(t)
                }
            }),
            function() {
                var e = d();

                function r(t) {
                    return null === t ? "NULL" : void 0 === t ? "UNDEFINED" : "[object Object]" === Object.prototype.toString.call(t) || "[object Array]" === Object.prototype.toString.call(t) ? JSON.stringify(t) : t.toString()
                }
                /function Map\(\) \{[\s\S]*\[native code\][\s\S]*\}/.test(Map.toString()) ? window[e]._ttq_map = Map : window[e]._ttq_map || (window[e]._ttq_map = function() {
                    this.items = {}, this.size = 0
                }, window[e]._ttq_map.prototype.set = function(t, e) {
                    return this.has(t) || (this.items[r(t)] = e, this.size++), this
                }, window[e]._ttq_map.prototype.get = function(t) {
                    return this.items[r(t)]
                }, window[e]._ttq_map.prototype.has = function(t) {
                    return void 0 !== this.items[r(t)]
                }, window[e]._ttq_map.prototype.delete = function(t) {
                    return this.has(t) && (delete this.items[r(t)], this.size--), this
                }, window[e]._ttq_map.prototype.clear = function() {
                    this.items = {}, this.size = 0
                }, window[e]._ttq_map.prototype.keys = function() {
                    var e = t().mark(o),
                        r = [];
                    for (var n in this.items) this.has(n) && r.push(n);

                    function o() {
                        return t().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.delegateYield(r, "t0", 1);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), e)
                    }
                    return o()
                }, window[e]._ttq_map.prototype.values = function() {
                    var e = t().mark(o),
                        r = [];
                    for (var n in this.items) this.has(n) && r.push(this.items[n]);

                    function o() {
                        return t().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.delegateYield(r, "t0", 1);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), e)
                    }
                    return o()
                })
            }(), /function create\(\) \{[\s\S]*\[native code\][\s\S]*\}/.test(Map.toString()) ? Object._ttq_create = Object.create : Object._ttq_create = function() {
                function t() {}
                var r = Object.prototype.hasOwnProperty;
                return function(n, o) {
                    if ("object" !== e(n) && "function" != typeof n) throw new TypeError("Object prototype may only be an Object or null");
                    t.prototype = n;
                    var i = new t;
                    return t.prototype = null, null != o && Object.keys(o).forEach((function(t) {
                        var n = o[t];
                        if ("object" !== e(n) || null === n) throw new TypeError("Property description must be an object: " + n);
                        r.call(n, "value") ? i[t] = n.value : "function" != typeof n.get && "function" != typeof n.set || Object.defineProperty(i, t, n)
                    })), i
                }
            }()
    } catch (t) {
        ! function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            try {
                var o = _(),
                    i = o.getPlugin && o.getPlugin("Monitor") || null;
                i && i.error && "function" == typeof i.error ? i.error.call(i, t, e, r, n) : v("Monitor") && m.error.push({
                    event: t,
                    err: e,
                    detail: r,
                    withoutJSB: n
                })
            } catch (t) {}
        }(h.INIT_ERROR, t)
    }
}();
! function() {
    "use strict";

    function e() {
        e = function() {
            return t
        };
        var t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            c = i.toStringTag || "@@toStringTag";

        function u(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            u({}, "")
        } catch (e) {
            u = function(e, t, n) {
                return e[t] = n
            }
        }

        function s(e, t, n, r) {
            var i = t && t.prototype instanceof d ? t : d,
                o = Object._ttq_create(i.prototype),
                a = new T(r || []);
            return o._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return S()
                    }
                    for (n.method = i, n.arg = o;;) {
                        var a = n.delegate;
                        if (a) {
                            var c = b(a, n);
                            if (c) {
                                if (c === f) continue;
                                return c
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = l(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                    }
                }
            }(e, n, a), o
        }

        function l(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        t.wrap = s;
        var f = {};

        function d() {}

        function p() {}

        function h() {}
        var _ = {};
        u(_, o, (function() {
            return this
        }));
        var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
        g && g !== n && r.call(g, o) && (_ = g);
        var y = h.prototype = d.prototype = Object._ttq_create(_);

        function m(e) {
            ["next", "throw", "return"].forEach((function(t) {
                u(e, t, (function(e) {
                    return this._invoke(t, e)
                }))
            }))
        }

        function E(e, t) {
            function n(i, o, a, c) {
                var u = l(e[i], e, o);
                if ("throw" !== u.type) {
                    var s = u.arg,
                        f = s.value;
                    return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                        n("next", e, a, c)
                    }), (function(e) {
                        n("throw", e, a, c)
                    })) : t.resolve(f).then((function(e) {
                        s.value = e, a(s)
                    }), (function(e) {
                        return n("throw", e, a, c)
                    }))
                }
                c(u.arg)
            }
            var i;
            this._invoke = function(e, r) {
                function o() {
                    return new t((function(t, i) {
                        n(e, r, t, i)
                    }))
                }
                return i = i ? i.then(o, o) : o()
            }
        }

        function b(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return f;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var r = l(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, f;
            var i = r.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
        }

        function w(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function I(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function T(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(w, this), this.reset(!0)
        }

        function O(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        i = function t() {
                            for (; ++n < e.length;)
                                if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                    return i.next = i
                }
            }
            return {
                next: S
            }
        }

        function S() {
            return {
                value: void 0,
                done: !0
            }
        }
        return p.prototype = h, u(y, "constructor", h), u(h, "constructor", p), p.displayName = u(h, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
        }, t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, u(e, c, "GeneratorFunction")), e.prototype = Object._ttq_create(y), e
        }, t.awrap = function(e) {
            return {
                __await: e
            }
        }, m(E.prototype), u(E.prototype, a, (function() {
            return this
        })), t.AsyncIterator = E, t.async = function(e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new E(s(e, n, r, i), o);
            return t.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                return e.done ? e.value : a.next()
            }))
        }, m(y), u(y, c, "Generator"), u(y, o, (function() {
            return this
        })), u(y, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = O, T.prototype = {
            constructor: T,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
                    for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;

                function n(n, r) {
                    return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var o = this.tryEntries[i],
                        a = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                        var c = r.call(o, "catchLoc"),
                            u = r.call(o, "finallyLoc");
                        if (c && u) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                        } else if (c) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), f
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            I(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: O(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), f
            }
        }, t
    }

    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t(e)
    }

    function n(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, i)
    }

    function r(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise((function(i, o) {
                var a = e.apply(t, r);

                function c(e) {
                    n(a, i, o, c, u, "next", e)
                }

                function u(e) {
                    n(a, i, o, c, u, "throw", e)
                }
                c(void 0)
            }))
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object._ttq_create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && l(e, t)
    }

    function s(e) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, s(e)
    }

    function l(e, t) {
        return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        }, l(e, t)
    }

    function f(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return f(e)
    }

    function p(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = s(e);
            if (t) {
                var i = s(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return d(this, n)
        }
    }

    function h(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)););
        return e
    }

    function _() {
        return _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
            var r = h(e, t);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
            }
        }, _.apply(this, arguments)
    }

    function v(e, t) {
        return m(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [],
                a = !0,
                c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || b(e, t) || I()
    }

    function g(e) {
        return m(e) || E(e) || b(e) || I()
    }

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return w(e)
        }(e) || E(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e) {
        if (Array.isArray(e)) return e
    }

    function E(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function b(e, t) {
        if (e) {
            if ("string" == typeof e) return w(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
        }
    }

    function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function T(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = b(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            c = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                c = !0, o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }
    var O, S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    ! function(e) {
        ! function(t) {
            var n = "object" == typeof S ? S : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
                r = i(e);

            function i(e, t) {
                return function(n, r) {
                    "function" != typeof e[n] && Object.defineProperty(e, n, {
                        configurable: !0,
                        writable: !0,
                        value: r
                    }), t && t(n, r)
                }
            }
            void 0 === n.Reflect ? n.Reflect = e : r = i(n.Reflect, r),
                function(e) {
                    var t = Object.prototype.hasOwnProperty,
                        n = "function" == typeof Symbol,
                        r = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                        i = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                        o = "function" == typeof Object.create,
                        a = {
                            __proto__: []
                        }
                    instanceof Array, c = !o && !a, u = {
                        create: o ? function() {
                            return re(Object._ttq_create(null))
                        } : a ? function() {
                            return re({
                                __proto__: null
                            })
                        } : function() {
                            return re({})
                        },
                        has: c ? function(e, n) {
                            return t.call(e, n)
                        } : function(e, t) {
                            return t in e
                        },
                        get: c ? function(e, n) {
                            return t.call(e, n) ? e[n] : void 0
                        } : function(e, t) {
                            return e[t]
                        }
                    }, s = Object.getPrototypeOf(Function), l = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL, f = l || "function" != typeof Map || "function" != typeof Map.prototype.entries ? ee() : Map, d = l || "function" != typeof Set || "function" != typeof Set.prototype.entries ? te() : Set, p = new(l || "function" != typeof WeakMap ? ne() : WeakMap);

                    function h(e, t, n, r) {
                        if (L(n)) {
                            if (!H(e)) throw new TypeError;
                            if (!W(t)) throw new TypeError;
                            return T(e, t)
                        }
                        if (!H(e)) throw new TypeError;
                        if (!U(t)) throw new TypeError;
                        if (!U(r) && !L(r) && !x(r)) throw new TypeError;
                        return x(r) && (r = void 0), O(e, t, n = V(n), r)
                    }

                    function _(e, t) {
                        function n(n, r) {
                            if (!U(n)) throw new TypeError;
                            if (!L(r) && !K(r)) throw new TypeError;
                            C(e, t, n, r)
                        }
                        return n
                    }

                    function v(e, t, n, r) {
                        if (!U(n)) throw new TypeError;
                        return L(r) || (r = V(r)), C(e, t, n, r)
                    }

                    function g(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        return L(n) || (n = V(n)), N(e, t, n)
                    }

                    function y(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        return L(n) || (n = V(n)), R(e, t, n)
                    }

                    function m(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        return L(n) || (n = V(n)), A(e, t, n)
                    }

                    function E(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        return L(n) || (n = V(n)), P(e, t, n)
                    }

                    function b(e, t) {
                        if (!U(e)) throw new TypeError;
                        return L(t) || (t = V(t)), k(e, t)
                    }

                    function w(e, t) {
                        if (!U(e)) throw new TypeError;
                        return L(t) || (t = V(t)), M(e, t)
                    }

                    function I(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        L(n) || (n = V(n));
                        var r = S(t, n, !1);
                        if (L(r)) return !1;
                        if (!r.delete(e)) return !1;
                        if (r.size > 0) return !0;
                        var i = p.get(t);
                        return i.delete(n), i.size > 0 || p.delete(t), !0
                    }

                    function T(e, t) {
                        for (var n = e.length - 1; n >= 0; --n) {
                            var r = (0, e[n])(t);
                            if (!L(r) && !x(r)) {
                                if (!W(r)) throw new TypeError;
                                t = r
                            }
                        }
                        return t
                    }

                    function O(e, t, n, r) {
                        for (var i = e.length - 1; i >= 0; --i) {
                            var o = (0, e[i])(t, n, r);
                            if (!L(o) && !x(o)) {
                                if (!U(o)) throw new TypeError;
                                r = o
                            }
                        }
                        return r
                    }

                    function S(e, t, n) {
                        var r = p.get(e);
                        if (L(r)) {
                            if (!n) return;
                            r = new f, p.set(e, r)
                        }
                        var i = r.get(t);
                        if (L(i)) {
                            if (!n) return;
                            i = new f, r.set(t, i)
                        }
                        return i
                    }

                    function N(e, t, n) {
                        if (R(e, t, n)) return !0;
                        var r = $(t);
                        return !x(r) && N(e, r, n)
                    }

                    function R(e, t, n) {
                        var r = S(t, n, !1);
                        return !L(r) && q(r.has(e))
                    }

                    function A(e, t, n) {
                        if (R(e, t, n)) return P(e, t, n);
                        var r = $(t);
                        return x(r) ? void 0 : A(e, r, n)
                    }

                    function P(e, t, n) {
                        var r = S(t, n, !1);
                        if (!L(r)) return r.get(e)
                    }

                    function C(e, t, n, r) {
                        S(n, r, !0).set(e, t)
                    }

                    function k(e, t) {
                        var n = M(e, t),
                            r = $(e);
                        if (null === r) return n;
                        var i = k(r, t);
                        if (i.length <= 0) return n;
                        if (n.length <= 0) return i;
                        for (var o = new d, a = [], c = 0, u = n; c < u.length; c++) {
                            var s = u[c];
                            o.has(s) || (o.add(s), a.push(s))
                        }
                        for (var l = 0, f = i; l < f.length; l++) {
                            s = f[l];
                            o.has(s) || (o.add(s), a.push(s))
                        }
                        return a
                    }

                    function M(e, t) {
                        var n = [],
                            r = S(e, t, !1);
                        if (L(r)) return n;
                        for (var i = X(r.keys()), o = 0;;) {
                            var a = z(i);
                            if (!a) return n.length = o, n;
                            var c = Q(a);
                            try {
                                n[o] = c
                            } catch (e) {
                                try {
                                    Z(i)
                                } finally {
                                    throw e
                                }
                            }
                            o++
                        }
                    }

                    function D(e) {
                        if (null === e) return 1;
                        switch (typeof e) {
                            case "undefined":
                                return 0;
                            case "boolean":
                                return 2;
                            case "string":
                                return 3;
                            case "symbol":
                                return 4;
                            case "number":
                                return 5;
                            case "object":
                                return null === e ? 1 : 6;
                            default:
                                return 6
                        }
                    }

                    function L(e) {
                        return void 0 === e
                    }

                    function x(e) {
                        return null === e
                    }

                    function j(e) {
                        return "symbol" == typeof e
                    }

                    function U(e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    }

                    function F(e, t) {
                        switch (D(e)) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                return e
                        }
                        var n = 3 === t ? "string" : 5 === t ? "number" : "default",
                            i = Y(e, r);
                        if (void 0 !== i) {
                            var o = i.call(e, n);
                            if (U(o)) throw new TypeError;
                            return o
                        }
                        return B(e, "default" === n ? "number" : n)
                    }

                    function B(e, t) {
                        if ("string" === t) {
                            var n = e.toString;
                            if (J(n))
                                if (!U(i = n.call(e))) return i;
                            if (J(r = e.valueOf))
                                if (!U(i = r.call(e))) return i
                        } else {
                            var r;
                            if (J(r = e.valueOf))
                                if (!U(i = r.call(e))) return i;
                            var i, o = e.toString;
                            if (J(o))
                                if (!U(i = o.call(e))) return i
                        }
                        throw new TypeError
                    }

                    function q(e) {
                        return !!e
                    }

                    function G(e) {
                        return "" + e
                    }

                    function V(e) {
                        var t = F(e, 3);
                        return j(t) ? t : G(t)
                    }

                    function H(e) {
                        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e)
                    }

                    function J(e) {
                        return "function" == typeof e
                    }

                    function W(e) {
                        return "function" == typeof e
                    }

                    function K(e) {
                        switch (D(e)) {
                            case 3:
                            case 4:
                                return !0;
                            default:
                                return !1
                        }
                    }

                    function Y(e, t) {
                        var n = e[t];
                        if (null != n) {
                            if (!J(n)) throw new TypeError;
                            return n
                        }
                    }

                    function X(e) {
                        var t = Y(e, i);
                        if (!J(t)) throw new TypeError;
                        var n = t.call(e);
                        if (!U(n)) throw new TypeError;
                        return n
                    }

                    function Q(e) {
                        return e.value
                    }

                    function z(e) {
                        var t = e.next();
                        return !t.done && t
                    }

                    function Z(e) {
                        var t = e.return;
                        t && t.call(e)
                    }

                    function $(e) {
                        var t = Object.getPrototypeOf(e);
                        if ("function" != typeof e || e === s) return t;
                        if (t !== s) return t;
                        var n = e.prototype,
                            r = n && Object.getPrototypeOf(n);
                        if (null == r || r === Object.prototype) return t;
                        var i = r.constructor;
                        return "function" != typeof i || i === e ? t : i
                    }

                    function ee() {
                        var e = {},
                            t = [],
                            n = function() {
                                function e(e, t, n) {
                                    this._index = 0, this._keys = e, this._values = t, this._selector = n
                                }
                                return e.prototype["@@iterator"] = function() {
                                    return this
                                }, e.prototype[i] = function() {
                                    return this
                                }, e.prototype.next = function() {
                                    var e = this._index;
                                    if (e >= 0 && e < this._keys.length) {
                                        var n = this._selector(this._keys[e], this._values[e]);
                                        return e + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, {
                                            value: n,
                                            done: !1
                                        }
                                    }
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }, e.prototype.throw = function(e) {
                                    throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), e
                                }, e.prototype.return = function(e) {
                                    return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), {
                                        value: e,
                                        done: !0
                                    }
                                }, e
                            }();
                        return function() {
                            function t() {
                                this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2
                            }
                            return Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this._keys.length
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.has = function(e) {
                                return this._find(e, !1) >= 0
                            }, t.prototype.get = function(e) {
                                var t = this._find(e, !1);
                                return t >= 0 ? this._values[t] : void 0
                            }, t.prototype.set = function(e, t) {
                                var n = this._find(e, !0);
                                return this._values[n] = t, this
                            }, t.prototype.delete = function(t) {
                                var n = this._find(t, !1);
                                if (n >= 0) {
                                    for (var r = this._keys.length, i = n + 1; i < r; i++) this._keys[i - 1] = this._keys[i], this._values[i - 1] = this._values[i];
                                    return this._keys.length--, this._values.length--, t === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0
                                }
                                return !1
                            }, t.prototype.clear = function() {
                                this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2
                            }, t.prototype.keys = function() {
                                return new n(this._keys, this._values, r)
                            }, t.prototype.values = function() {
                                return new n(this._keys, this._values, o)
                            }, t.prototype.entries = function() {
                                return new n(this._keys, this._values, a)
                            }, t.prototype["@@iterator"] = function() {
                                return this.entries()
                            }, t.prototype[i] = function() {
                                return this.entries()
                            }, t.prototype._find = function(e, t) {
                                return this._cacheKey !== e && (this._cacheIndex = this._keys.indexOf(this._cacheKey = e)), this._cacheIndex < 0 && t && (this._cacheIndex = this._keys.length, this._keys.push(e), this._values.push(void 0)), this._cacheIndex
                            }, t
                        }();

                        function r(e, t) {
                            return e
                        }

                        function o(e, t) {
                            return t
                        }

                        function a(e, t) {
                            return [e, t]
                        }
                    }

                    function te() {
                        return function() {
                            function e() {
                                this._map = new f
                            }
                            return Object.defineProperty(e.prototype, "size", {
                                get: function() {
                                    return this._map.size
                                },
                                enumerable: !0,
                                configurable: !0
                            }), e.prototype.has = function(e) {
                                return this._map.has(e)
                            }, e.prototype.add = function(e) {
                                return this._map.set(e, e), this
                            }, e.prototype.delete = function(e) {
                                return this._map.delete(e)
                            }, e.prototype.clear = function() {
                                this._map.clear()
                            }, e.prototype.keys = function() {
                                return this._map.keys()
                            }, e.prototype.values = function() {
                                return this._map.values()
                            }, e.prototype.entries = function() {
                                return this._map.entries()
                            }, e.prototype["@@iterator"] = function() {
                                return this.keys()
                            }, e.prototype[i] = function() {
                                return this.keys()
                            }, e
                        }()
                    }

                    function ne() {
                        var e = 16,
                            n = u.create(),
                            r = i();
                        return function() {
                            function e() {
                                this._key = i()
                            }
                            return e.prototype.has = function(e) {
                                var t = o(e, !1);
                                return void 0 !== t && u.has(t, this._key)
                            }, e.prototype.get = function(e) {
                                var t = o(e, !1);
                                return void 0 !== t ? u.get(t, this._key) : void 0
                            }, e.prototype.set = function(e, t) {
                                return o(e, !0)[this._key] = t, this
                            }, e.prototype.delete = function(e) {
                                var t = o(e, !1);
                                return void 0 !== t && delete t[this._key]
                            }, e.prototype.clear = function() {
                                this._key = i()
                            }, e
                        }();

                        function i() {
                            var e;
                            do {
                                e = "@@WeakMap@@" + s()
                            } while (u.has(n, e));
                            return n[e] = !0, e
                        }

                        function o(e, n) {
                            if (!t.call(e, r)) {
                                if (!n) return;
                                Object.defineProperty(e, r, {
                                    value: u.create()
                                })
                            }
                            return e[r]
                        }

                        function a(e, t) {
                            for (var n = 0; n < t; ++n) e[n] = 255 * Math.random() | 0;
                            return e
                        }

                        function c(e) {
                            return "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(e)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(e)) : a(new Uint8Array(e), e) : a(new Array(e), e)
                        }

                        function s() {
                            var t = c(e);
                            t[6] = 79 & t[6] | 64, t[8] = 191 & t[8] | 128;
                            for (var n = "", r = 0; r < e; ++r) {
                                var i = t[r];
                                4 !== r && 6 !== r && 8 !== r || (n += "-"), i < 16 && (n += "0"), n += i.toString(16).toLowerCase()
                            }
                            return n
                        }
                    }

                    function re(e) {
                        return e.__ = void 0, delete e.__, e
                    }
                    e("decorate", h), e("metadata", _), e("ttq_defineMetadata", v), e("ttq_hasMetadata", g), e("ttq_hasOwnMetadata", y), e("ttq_getMetadata", m), e("getOwnMetadata", E), e("getMetadataKeys", b), e("getOwnMetadataKeys", w), e("deleteMetadata", I)
                }(r)
        }()
    }(O || (O = {}));
    var N, R = {},
        A = {};
    N = A, Object.defineProperty(N, "__esModule", {
        value: !0
    }), N.NON_CUSTOM_TAG_KEYS = N.POST_CONSTRUCT = N.DESIGN_PARAM_TYPES = N.PARAM_TYPES = N.TAGGED_PROP = N.TAGGED = N.MULTI_INJECT_TAG = N.INJECT_TAG = N.OPTIONAL_TAG = N.UNMANAGED_TAG = N.NAME_TAG = N.NAMED_TAG = void 0, N.NAMED_TAG = "named", N.NAME_TAG = "name", N.UNMANAGED_TAG = "unmanaged", N.OPTIONAL_TAG = "optional", N.INJECT_TAG = "inject", N.MULTI_INJECT_TAG = "multi_inject", N.TAGGED = "inversify:tagged", N.TAGGED_PROP = "inversify:tagged_props", N.PARAM_TYPES = "inversify:paramtypes", N.DESIGN_PARAM_TYPES = "design:paramtypes", N.POST_CONSTRUCT = "post_construct", N.NON_CUSTOM_TAG_KEYS = [N.INJECT_TAG, N.MULTI_INJECT_TAG, N.NAME_TAG, N.UNMANAGED_TAG, N.NAMED_TAG, N.OPTIONAL_TAG];
    var P = {},
        C = {},
        k = {};
    Object.defineProperty(k, "__esModule", {
        value: !0
    }), k.TargetTypeEnum = k.BindingTypeEnum = k.BindingScopeEnum = void 0;
    k.BindingScopeEnum = {
        Request: "Request",
        Singleton: "Singleton",
        Transient: "Transient"
    };
    k.BindingTypeEnum = {
        ConstantValue: "ConstantValue",
        Constructor: "Constructor",
        DynamicValue: "DynamicValue",
        Factory: "Factory",
        Function: "Function",
        Instance: "Instance",
        Invalid: "Invalid",
        Provider: "Provider"
    };
    k.TargetTypeEnum = {
        ClassProperty: "ClassProperty",
        ConstructorArgument: "ConstructorArgument",
        Variable: "Variable"
    };
    var M = {};
    Object.defineProperty(M, "__esModule", {
        value: !0
    }), M.id = void 0;
    var D = 0;
    M.id = function() {
        return D++
    }, Object.defineProperty(C, "__esModule", {
        value: !0
    }), C.Binding = void 0;
    var L = k,
        x = M,
        j = function() {
            function e(e, t) {
                this.id = x.id(), this.activated = !1, this.serviceIdentifier = e, this.scope = t, this.type = L.BindingTypeEnum.Invalid, this.constraint = function(e) {
                    return !0
                }, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, this.onActivation = null, this.dynamicValue = null
            }
            return e.prototype.clone = function() {
                var t = new e(this.serviceIdentifier, this.scope);
                return t.activated = t.scope === L.BindingScopeEnum.Singleton && this.activated, t.implementationType = this.implementationType, t.dynamicValue = this.dynamicValue, t.scope = this.scope, t.type = this.type, t.factory = this.factory, t.provider = this.provider, t.constraint = this.constraint, t.onActivation = this.onActivation, t.cache = this.cache, t
            }, e
        }();
    C.Binding = j;
    var U = {};
    Object.defineProperty(U, "__esModule", {
        value: !0
    }), U.STACK_OVERFLOW = U.CIRCULAR_DEPENDENCY_IN_FACTORY = U.POST_CONSTRUCT_ERROR = U.MULTIPLE_POST_CONSTRUCT_METHODS = U.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = U.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = U.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = U.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = U.ARGUMENTS_LENGTH_MISMATCH = U.INVALID_DECORATOR_OPERATION = U.INVALID_TO_SELF_VALUE = U.INVALID_FUNCTION_BINDING = U.INVALID_MIDDLEWARE_RETURN = U.NO_MORE_SNAPSHOTS_AVAILABLE = U.INVALID_BINDING_TYPE = U.NOT_IMPLEMENTED = U.CIRCULAR_DEPENDENCY = U.UNDEFINED_INJECT_ANNOTATION = U.MISSING_INJECT_ANNOTATION = U.MISSING_INJECTABLE_ANNOTATION = U.NOT_REGISTERED = U.CANNOT_UNBIND = U.AMBIGUOUS_MATCH = U.KEY_NOT_FOUND = U.NULL_ARGUMENT = U.DUPLICATED_METADATA = U.DUPLICATED_INJECTABLE_DECORATOR = void 0, U.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.", U.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:", U.NULL_ARGUMENT = "NULL argument", U.KEY_NOT_FOUND = "Key Not Found", U.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:", U.CANNOT_UNBIND = "Could not unbind serviceIdentifier:", U.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:", U.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:", U.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
    U.UNDEFINED_INJECT_ANNOTATION = function(e) {
        return "@inject called with undefined this could mean that the class " + e + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."
    }, U.CIRCULAR_DEPENDENCY = "Circular dependency found:", U.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.", U.INVALID_BINDING_TYPE = "Invalid binding type:", U.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.", U.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!", U.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!", U.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier", U.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
    U.ARGUMENTS_LENGTH_MISMATCH = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "The number of constructor arguments in the derived class " + e[0] + " must be >= than the number of constructor arguments of its base class."
    }, U.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.", U.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').", U.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean", U.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean", U.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
    U.POST_CONSTRUCT_ERROR = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "@postConstruct error in class " + e[0] + ": " + e[1]
    };
    U.CIRCULAR_DEPENDENCY_IN_FACTORY = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "It looks like there is a circular dependency in one of the '" + e[0] + "' bindings. Please investigate bindings withservice identifier '" + e[1] + "'."
    }, U.STACK_OVERFLOW = "Maximum call stack size exceeded";
    var F = {};
    Object.defineProperty(F, "__esModule", {
        value: !0
    }), F.MetadataReader = void 0;
    var B = A,
        q = function() {
            function e() {}
            return e.prototype.getConstructorMetadata = function(e) {
                return {
                    compilerGeneratedMetadata: Reflect.ttq_getMetadata(B.PARAM_TYPES, e),
                    userGeneratedMetadata: Reflect.ttq_getMetadata(B.TAGGED, e) || {}
                }
            }, e.prototype.getPropertiesMetadata = function(e) {
                return Reflect.ttq_getMetadata(B.TAGGED_PROP, e) || []
            }, e
        }();
    F.MetadataReader = q;
    var G = {},
        V = {};
    Object.defineProperty(V, "__esModule", {
        value: !0
    }), V.BindingCount = void 0;
    V.BindingCount = {
        MultipleBindingsAvailable: 2,
        NoBindingsAvailable: 0,
        OnlyOneBindingAvailable: 1
    };
    var H = {};
    Object.defineProperty(H, "__esModule", {
        value: !0
    }), H.isStackOverflowExeption = void 0;
    var J = U;
    H.isStackOverflowExeption = function(e) {
        return e instanceof RangeError || e.message === J.STACK_OVERFLOW
    };
    var W = {};
    Object.defineProperty(W, "__esModule", {
        value: !0
    }), W.circularDependencyToException = W.listMetadataForTarget = W.listRegisteredBindingsForServiceIdentifier = W.getServiceIdentifierAsString = W.getFunctionName = void 0;
    var K = U;

    function Y(e) {
        return "function" == typeof e ? e.name : "symbol" == typeof e ? e.toString() : e
    }

    function X(e, t) {
        return null !== e.parentRequest && (e.parentRequest.serviceIdentifier === t || X(e.parentRequest, t))
    }

    function Q(e) {
        if (e.name) return e.name;
        var t = e.toString(),
            n = t.match(/^function\s*([^\s(]+)/);
        return n ? n[1] : "Anonymous function: " + t
    }
    W.getServiceIdentifierAsString = Y, W.listRegisteredBindingsForServiceIdentifier = function(e, t, n) {
        var r = "",
            i = n(e, t);
        return 0 !== i.length && (r = "\nRegistered bindings:", i.forEach((function(e) {
            var t = "Object";
            null !== e.implementationType && (t = Q(e.implementationType)), r = r + "\n " + t, e.constraint.metaData && (r = r + " - " + e.constraint.metaData)
        }))), r
    }, W.circularDependencyToException = function e(t) {
        t.childRequests.forEach((function(t) {
            if (X(t, t.serviceIdentifier)) {
                var n = function(e) {
                    return function e(t, n) {
                        void 0 === n && (n = []);
                        var r = Y(t.serviceIdentifier);
                        return n.push(r), null !== t.parentRequest ? e(t.parentRequest, n) : n
                    }(e).reverse().join(" --\x3e ")
                }(t);
                throw new Error(K.CIRCULAR_DEPENDENCY + " " + n)
            }
            e(t)
        }))
    }, W.listMetadataForTarget = function(e, t) {
        if (t.isTagged() || t.isNamed()) {
            var n = "",
                r = t.getNamedTag(),
                i = t.getCustomTags();
            return null !== r && (n += r.toString() + "\n"), null !== i && i.forEach((function(e) {
                n += e.toString() + "\n"
            })), " " + e + "\n " + e + " - " + n
        }
        return " " + e
    }, W.getFunctionName = Q;
    var z = {};
    Object.defineProperty(z, "__esModule", {
        value: !0
    }), z.Context = void 0;
    var Z = M,
        $ = function() {
            function e(e) {
                this.id = Z.id(), this.container = e
            }
            return e.prototype.addPlan = function(e) {
                this.plan = e
            }, e.prototype.setCurrentRequest = function(e) {
                this.currentRequest = e
            }, e
        }();
    z.Context = $;
    var ee = {};
    Object.defineProperty(ee, "__esModule", {
        value: !0
    }), ee.Metadata = void 0;
    var te = A,
        ne = function() {
            function e(e, t) {
                this.key = e, this.value = t
            }
            return e.prototype.toString = function() {
                return this.key === te.NAMED_TAG ? "named: " + this.value.toString() + " " : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }"
            }, e
        }();
    ee.Metadata = ne;
    var re = {};
    Object.defineProperty(re, "__esModule", {
        value: !0
    }), re.Plan = void 0;
    var ie = function(e, t) {
        this.parentContext = e, this.rootRequest = t
    };
    re.Plan = ie;
    var oe = {},
        ae = {},
        ce = {};
    Object.defineProperty(ce, "__esModule", {
        value: !0
    }), ce.tagProperty = ce.tagParameter = ce.decorate = void 0;
    var ue = U,
        se = A;

    function le(e, t, n, r, i) {
        var o = {},
            a = "number" == typeof i,
            c = void 0 !== i && a ? i.toString() : n;
        if (a && void 0 !== n) throw new Error(ue.INVALID_DECORATOR_OPERATION);
        Reflect.ttq_hasOwnMetadata(e, t) && (o = Reflect.ttq_getMetadata(e, t));
        var u = o[c];
        if (Array.isArray(u))
            for (var s = 0, l = u; s < l.length; s++) {
                var f = l[s];
                if (f.key === r.key) throw new Error(ue.DUPLICATED_METADATA + " " + f.key.toString())
            } else u = [];
        u.push(r), o[c] = u, Reflect.ttq_defineMetadata(e, o, t)
    }

    function fe(e, t) {
        Reflect.decorate(e, t)
    }

    function de(e, t) {
        return function(n, r) {
            t(n, r, e)
        }
    }
    ce.tagParameter = function(e, t, n, r) {
        le(se.TAGGED, e, t, r, n)
    }, ce.tagProperty = function(e, t, n) {
        le(se.TAGGED_PROP, e.constructor, t, n)
    }, ce.decorate = function(e, t, n) {
        "number" == typeof n ? fe([de(n, e)], t) : "string" == typeof n ? Reflect.decorate([e], t, n) : fe([e], t)
    }, Object.defineProperty(ae, "__esModule", {
        value: !0
    }), ae.inject = ae.LazyServiceIdentifer = void 0;
    var pe = U,
        he = A,
        _e = ee,
        ve = ce,
        ge = function() {
            function e(e) {
                this._cb = e
            }
            return e.prototype.unwrap = function() {
                return this._cb()
            }, e
        }();
    ae.LazyServiceIdentifer = ge, ae.inject = function(e) {
        return function(t, n, r) {
            if (void 0 === e) throw new Error(pe.UNDEFINED_INJECT_ANNOTATION(t.name));
            var i = new _e.Metadata(he.INJECT_TAG, e);
            "number" == typeof r ? ve.tagParameter(t, n, r, i) : ve.tagProperty(t, n, i)
        }
    };
    var ye = {},
        me = {};
    Object.defineProperty(me, "__esModule", {
        value: !0
    }), me.QueryableString = void 0;
    var Ee = function() {
        function e(e) {
            this.str = e
        }
        return e.prototype.startsWith = function(e) {
            return 0 === this.str.indexOf(e)
        }, e.prototype.endsWith = function(e) {
            var t, n = e.split("").reverse().join("");
            return t = this.str.split("").reverse().join(""), this.startsWith.call({
                str: t
            }, n)
        }, e.prototype.contains = function(e) {
            return -1 !== this.str.indexOf(e)
        }, e.prototype.equals = function(e) {
            return this.str === e
        }, e.prototype.value = function() {
            return this.str
        }, e
    }();
    me.QueryableString = Ee, Object.defineProperty(ye, "__esModule", {
        value: !0
    }), ye.Target = void 0;
    var be = A,
        we = M,
        Ie = ee,
        Te = me,
        Oe = function() {
            function e(e, t, n, r) {
                this.id = we.id(), this.type = e, this.serviceIdentifier = n, this.name = new Te.QueryableString(t || ""), this.metadata = new Array;
                var i = null;
                "string" == typeof r ? i = new Ie.Metadata(be.NAMED_TAG, r) : r instanceof Ie.Metadata && (i = r), null !== i && this.metadata.push(i)
            }
            return e.prototype.hasTag = function(e) {
                for (var t = 0, n = this.metadata; t < n.length; t++) {
                    if (n[t].key === e) return !0
                }
                return !1
            }, e.prototype.isArray = function() {
                return this.hasTag(be.MULTI_INJECT_TAG)
            }, e.prototype.matchesArray = function(e) {
                return this.matchesTag(be.MULTI_INJECT_TAG)(e)
            }, e.prototype.isNamed = function() {
                return this.hasTag(be.NAMED_TAG)
            }, e.prototype.isTagged = function() {
                return this.metadata.some((function(e) {
                    return be.NON_CUSTOM_TAG_KEYS.every((function(t) {
                        return e.key !== t
                    }))
                }))
            }, e.prototype.isOptional = function() {
                return this.matchesTag(be.OPTIONAL_TAG)(!0)
            }, e.prototype.getNamedTag = function() {
                return this.isNamed() ? this.metadata.filter((function(e) {
                    return e.key === be.NAMED_TAG
                }))[0] : null
            }, e.prototype.getCustomTags = function() {
                return this.isTagged() ? this.metadata.filter((function(e) {
                    return be.NON_CUSTOM_TAG_KEYS.every((function(t) {
                        return e.key !== t
                    }))
                })) : null
            }, e.prototype.matchesNamedTag = function(e) {
                return this.matchesTag(be.NAMED_TAG)(e)
            }, e.prototype.matchesTag = function(e) {
                var t = this;
                return function(n) {
                    for (var r = 0, i = t.metadata; r < i.length; r++) {
                        var o = i[r];
                        if (o.key === e && o.value === n) return !0
                    }
                    return !1
                }
            }, e
        }();
    ye.Target = Oe,
        function(e) {
            var t = S && S.__spreadArray || function(e, t) {
                for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
                return e
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getFunctionName = e.getBaseClassDependencyCount = e.getDependencies = void 0;
            var n = ae,
                r = U,
                i = k,
                o = A,
                a = W;
            Object.defineProperty(e, "getFunctionName", {
                enumerable: !0,
                get: function() {
                    return a.getFunctionName
                }
            });
            var c = ye;

            function u(e, n, i, o) {
                var a = e.getConstructorMetadata(i),
                    c = a.compilerGeneratedMetadata;
                if (void 0 === c) {
                    var u = r.MISSING_INJECTABLE_ANNOTATION + " " + n + ".";
                    throw new Error(u)
                }
                var f = a.userGeneratedMetadata,
                    d = Object.keys(f),
                    p = 0 === i.length && d.length > 0,
                    h = d.length > i.length,
                    _ = function(e, t, n, r, i) {
                        for (var o = [], a = 0; a < i; a++) {
                            var c = s(a, e, t, n, r);
                            null !== c && o.push(c)
                        }
                        return o
                    }(o, n, c, f, p || h ? d.length : i.length),
                    v = l(e, i);
                return t(t([], _), v)
            }

            function s(e, t, o, a, u) {
                var s = u[e.toString()] || [],
                    l = f(s),
                    d = !0 !== l.unmanaged,
                    p = a[e],
                    h = l.inject || l.multiInject;
                if ((p = h || p) instanceof n.LazyServiceIdentifer && (p = p.unwrap()), d) {
                    if (!t && (p === Object || p === Function || void 0 === p)) {
                        var _ = r.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + o + ".";
                        throw new Error(_)
                    }
                    var v = new c.Target(i.TargetTypeEnum.ConstructorArgument, l.targetName, p);
                    return v.metadata = s, v
                }
                return null
            }

            function l(e, n) {
                for (var r = e.getPropertiesMetadata(n), o = [], a = 0, u = Object._ttq_keys(r); a < u.length; a++) {
                    var s = u[a],
                        d = r[s],
                        p = f(r[s]),
                        h = p.targetName || s,
                        _ = p.inject || p.multiInject,
                        v = new c.Target(i.TargetTypeEnum.ClassProperty, h, _);
                    v.metadata = d, o.push(v)
                }
                var g = Object.getPrototypeOf(n.prototype).constructor;
                if (g !== Object) {
                    var y = l(e, g);
                    o = t(t([], o), y)
                }
                return o
            }

            function f(e) {
                var t = {};
                return e.forEach((function(e) {
                    t[e.key.toString()] = e.value
                })), {
                    inject: t[o.INJECT_TAG],
                    multiInject: t[o.MULTI_INJECT_TAG],
                    targetName: t[o.NAME_TAG],
                    unmanaged: t[o.UNMANAGED_TAG]
                }
            }
            e.getDependencies = function(e, t) {
                return u(e, a.getFunctionName(t), t, !1)
            }, e.getBaseClassDependencyCount = function e(t, n) {
                var r = Object.getPrototypeOf(n.prototype).constructor;
                if (r !== Object) {
                    var i = u(t, a.getFunctionName(r), r, !0),
                        c = i.map((function(e) {
                            return e.metadata.filter((function(e) {
                                return e.key === o.UNMANAGED_TAG
                            }))
                        })),
                        s = [].concat.apply([], c).length,
                        l = i.length - s;
                    return l > 0 ? l : e(t, r)
                }
                return 0
            }
        }(oe);
    var Se = {};
    Object.defineProperty(Se, "__esModule", {
        value: !0
    }), Se.Request = void 0;
    var Ne = M,
        Re = function() {
            function e(e, t, n, r, i) {
                this.id = Ne.id(), this.serviceIdentifier = e, this.parentContext = t, this.parentRequest = n, this.target = i, this.childRequests = [], this.bindings = Array.isArray(r) ? r : [r], this.requestScope = null === n ? new window[window.TiktokAnalyticsObject || "ttq"]._ttq_map : null
            }
            return e.prototype.addChildRequest = function(t, n, r) {
                var i = new e(t, this.parentContext, this, n, r);
                return this.childRequests.push(i), i
            }, e
        }();
    Se.Request = Re, Object.defineProperty(G, "__esModule", {
        value: !0
    }), G.getBindingDictionary = G.createMockRequest = G.plan = void 0;
    var Ae = V,
        Pe = U,
        Ce = k,
        ke = A,
        Me = H,
        De = W,
        Le = z,
        xe = ee,
        je = re,
        Ue = oe,
        Fe = Se,
        Be = ye;

    function qe(e) {
        return e._bindingDictionary
    }

    function Ge(e, t, n, r, i) {
        var o = He(n.container, i.serviceIdentifier),
            a = [];
        return o.length === Ae.BindingCount.NoBindingsAvailable && n.container.options.autoBindInjectable && "function" == typeof i.serviceIdentifier && e.getConstructorMetadata(i.serviceIdentifier).compilerGeneratedMetadata && (n.container.bind(i.serviceIdentifier).toSelf(), o = He(n.container, i.serviceIdentifier)), a = t ? o : o.filter((function(e) {
                var t = new Fe.Request(e.serviceIdentifier, n, r, e, i);
                return e.constraint(t)
            })),
            function(e, t, n, r) {
                switch (t.length) {
                    case Ae.BindingCount.NoBindingsAvailable:
                        if (n.isOptional()) return t;
                        var i = De.getServiceIdentifierAsString(e),
                            o = Pe.NOT_REGISTERED;
                        throw o += De.listMetadataForTarget(i, n), o += De.listRegisteredBindingsForServiceIdentifier(r, i, He), new Error(o);
                    case Ae.BindingCount.OnlyOneBindingAvailable:
                        if (!n.isArray()) return t;
                    case Ae.BindingCount.MultipleBindingsAvailable:
                    default:
                        if (n.isArray()) return t;
                        i = De.getServiceIdentifierAsString(e), o = Pe.AMBIGUOUS_MATCH + " " + i;
                        throw o += De.listRegisteredBindingsForServiceIdentifier(r, i, He), new Error(o)
                }
            }(i.serviceIdentifier, a, i, n.container), a
    }

    function Ve(e, t, n, r, i, o) {
        var a, c;
        if (null === i) {
            a = Ge(e, t, r, null, o), c = new Fe.Request(n, r, null, a, o);
            var u = new je.Plan(r, c);
            r.addPlan(u)
        } else a = Ge(e, t, r, i, o), c = i.addChildRequest(o.serviceIdentifier, a, o);
        a.forEach((function(t) {
            var n = null;
            if (o.isArray()) n = c.addChildRequest(t.serviceIdentifier, t, o);
            else {
                if (t.cache) return;
                n = c
            }
            if (t.type === Ce.BindingTypeEnum.Instance && null !== t.implementationType) {
                var i = Ue.getDependencies(e, t.implementationType);
                if (!r.container.options.skipBaseClassChecks) {
                    var a = Ue.getBaseClassDependencyCount(e, t.implementationType);
                    if (i.length < a) {
                        var u = Pe.ARGUMENTS_LENGTH_MISMATCH(Ue.getFunctionName(t.implementationType));
                        throw new Error(u)
                    }
                }
                i.forEach((function(t) {
                    Ve(e, !1, t.serviceIdentifier, r, n, t)
                }))
            }
        }))
    }

    function He(e, t) {
        var n = [],
            r = qe(e);
        return r.hasKey(t) ? n = r.get(t) : null !== e.parent && (n = He(e.parent, t)), n
    }
    G.getBindingDictionary = qe, G.plan = function(e, t, n, r, i, o, a, c) {
        void 0 === c && (c = !1);
        var u = new Le.Context(t),
            s = function(e, t, n, r, i, o) {
                var a = e ? ke.MULTI_INJECT_TAG : ke.INJECT_TAG,
                    c = new xe.Metadata(a, n),
                    u = new Be.Target(t, r, n, c);
                if (void 0 !== i) {
                    var s = new xe.Metadata(i, o);
                    u.metadata.push(s)
                }
                return u
            }(n, r, i, "", o, a);
        try {
            return Ve(e, c, i, u, null, s), u
        } catch (e) {
            throw Me.isStackOverflowExeption(e) && u.plan && De.circularDependencyToException(u.plan.rootRequest), e
        }
    }, G.createMockRequest = function(e, t, n, r) {
        var i = new Be.Target(Ce.TargetTypeEnum.Variable, "", t, new xe.Metadata(n, r)),
            o = new Le.Context(e);
        return new Fe.Request(t, o, null, [], i)
    };
    var Je = {},
        We = {},
        Ke = S && S.__spreadArray || function(e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
            return e
        };
    Object.defineProperty(We, "__esModule", {
        value: !0
    }), We.resolveInstance = void 0;
    var Ye = U,
        Xe = k,
        Qe = A;
    We.resolveInstance = function(e, t, n) {
        var r, i, o = null;
        if (t.length > 0) {
            var a = t.filter((function(e) {
                return null !== e.target && e.target.type === Xe.TargetTypeEnum.ConstructorArgument
            })).map(n);
            i = a, o = function(e, t, n) {
                var r = t.filter((function(e) {
                        return null !== e.target && e.target.type === Xe.TargetTypeEnum.ClassProperty
                    })),
                    i = r.map(n);
                return r.forEach((function(t, n) {
                    var r;
                    r = t.target.name.value();
                    var o = i[n];
                    e[r] = o
                })), e
            }(o = new((r = e)._ttq_bind.apply(r, Ke([void 0], i))), t, n)
        } else o = new e;
        return function(e, t) {
            if (Reflect.ttq_hasMetadata(Qe.POST_CONSTRUCT, e)) {
                var n = Reflect.ttq_getMetadata(Qe.POST_CONSTRUCT, e);
                try {
                    t[n.value]()
                } catch (t) {
                    throw new Error(Ye.POST_CONSTRUCT_ERROR(e.name, t.message))
                }
            }
        }(e, o), o
    }, Object.defineProperty(Je, "__esModule", {
        value: !0
    }), Je.resolve = void 0;
    var ze = U,
        Ze = k,
        $e = H,
        et = W,
        tt = We,
        nt = function(e, t, n) {
            try {
                return n()
            } catch (n) {
                throw $e.isStackOverflowExeption(n) ? new Error(ze.CIRCULAR_DEPENDENCY_IN_FACTORY(e, t.toString())) : n
            }
        },
        rt = function(e) {
            return function(t) {
                t.parentContext.setCurrentRequest(t);
                var n = t.bindings,
                    r = t.childRequests,
                    i = t.target && t.target.isArray(),
                    o = !(t.parentRequest && t.parentRequest.target && t.target && t.parentRequest.target.matchesArray(t.target.serviceIdentifier));
                if (i && o) return r.map((function(t) {
                    return rt(e)(t)
                }));
                var a = null;
                if (!t.target.isOptional() || 0 !== n.length) {
                    var c = n[0],
                        u = c.scope === Ze.BindingScopeEnum.Singleton,
                        s = c.scope === Ze.BindingScopeEnum.Request;
                    if (u && c.activated) return c.cache;
                    if (s && null !== e && e.has(c.id)) return e.get(c.id);
                    if (c.type === Ze.BindingTypeEnum.ConstantValue) a = c.cache, c.activated = !0;
                    else if (c.type === Ze.BindingTypeEnum.Function) a = c.cache, c.activated = !0;
                    else if (c.type === Ze.BindingTypeEnum.Constructor) a = c.implementationType;
                    else if (c.type === Ze.BindingTypeEnum.DynamicValue && null !== c.dynamicValue) a = nt("toDynamicValue", c.serviceIdentifier, (function() {
                        return c.dynamicValue(t.parentContext)
                    }));
                    else if (c.type === Ze.BindingTypeEnum.Factory && null !== c.factory) a = nt("toFactory", c.serviceIdentifier, (function() {
                        return c.factory(t.parentContext)
                    }));
                    else if (c.type === Ze.BindingTypeEnum.Provider && null !== c.provider) a = nt("toProvider", c.serviceIdentifier, (function() {
                        return c.provider(t.parentContext)
                    }));
                    else {
                        if (c.type !== Ze.BindingTypeEnum.Instance || null === c.implementationType) {
                            var l = et.getServiceIdentifierAsString(t.serviceIdentifier);
                            throw new Error(ze.INVALID_BINDING_TYPE + " " + l)
                        }
                        a = tt.resolveInstance(c.implementationType, r, rt(e))
                    }
                    return "function" == typeof c.onActivation && (a = c.onActivation(t.parentContext, a)), u && (c.cache = a, c.activated = !0), s && null !== e && !e.has(c.id) && e.set(c.id, a), a
                }
            }
        };
    Je.resolve = function(e) {
        return rt(e.plan.rootRequest.requestScope)(e.plan.rootRequest)
    };
    var it = {},
        ot = {},
        at = {},
        ct = {},
        ut = {},
        st = {},
        lt = {};
    Object.defineProperty(lt, "__esModule", {
        value: !0
    }), lt.typeConstraint = lt.namedConstraint = lt.taggedConstraint = lt.traverseAncerstors = void 0;
    var ft = A,
        dt = ee,
        pt = function(e, t) {
            var n = e.parentRequest;
            return null !== n && (!!t(n) || pt(n, t))
        };
    lt.traverseAncerstors = pt;
    var ht = function(e) {
        return function(t) {
            var n = function(n) {
                return null !== n && null !== n.target && n.target.matchesTag(e)(t)
            };
            return n.metaData = new dt.Metadata(e, t), n
        }
    };
    lt.taggedConstraint = ht;
    var _t = ht(ft.NAMED_TAG);
    lt.namedConstraint = _t;
    lt.typeConstraint = function(e) {
        return function(t) {
            var n = null;
            if (null !== t) {
                if (n = t.bindings[0], "string" == typeof e) return n.serviceIdentifier === e;
                var r = t.bindings[0].implementationType;
                return e === r
            }
            return !1
        }
    }, Object.defineProperty(st, "__esModule", {
        value: !0
    }), st.BindingWhenSyntax = void 0;
    var vt = ut,
        gt = lt,
        yt = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.when = function(e) {
                return this._binding.constraint = e, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._binding.constraint = gt.namedConstraint(e), new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._binding.constraint = function(e) {
                    return null !== e.target && !e.target.isNamed() && !e.target.isTagged()
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._binding.constraint = gt.taggedConstraint(e)(t), new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.typeConstraint(e)(t.parentRequest)
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenParentNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.namedConstraint(e)(t.parentRequest)
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return gt.taggedConstraint(e)(t)(n.parentRequest)
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.traverseAncerstors(t, gt.typeConstraint(e))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._binding.constraint = function(t) {
                    return !gt.traverseAncerstors(t, gt.typeConstraint(e))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.traverseAncerstors(t, gt.namedConstraint(e))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return !gt.traverseAncerstors(t, gt.namedConstraint(e))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return gt.traverseAncerstors(n, gt.taggedConstraint(e)(t))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return !gt.traverseAncerstors(n, gt.taggedConstraint(e)(t))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.traverseAncerstors(t, e)
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._binding.constraint = function(t) {
                    return !gt.traverseAncerstors(t, e)
                }, new vt.BindingOnSyntax(this._binding)
            }, e
        }();
    st.BindingWhenSyntax = yt, Object.defineProperty(ut, "__esModule", {
        value: !0
    }), ut.BindingOnSyntax = void 0;
    var mt = st,
        Et = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.onActivation = function(e) {
                return this._binding.onActivation = e, new mt.BindingWhenSyntax(this._binding)
            }, e
        }();
    ut.BindingOnSyntax = Et, Object.defineProperty(ct, "__esModule", {
        value: !0
    }), ct.BindingWhenOnSyntax = void 0;
    var bt = ut,
        wt = st,
        It = function() {
            function e(e) {
                this._binding = e, this._bindingWhenSyntax = new wt.BindingWhenSyntax(this._binding), this._bindingOnSyntax = new bt.BindingOnSyntax(this._binding)
            }
            return e.prototype.when = function(e) {
                return this._bindingWhenSyntax.when(e)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._bindingWhenSyntax.whenTargetNamed(e)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._bindingWhenSyntax.whenTargetIsDefault()
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._bindingWhenSyntax.whenTargetTagged(e, t)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._bindingWhenSyntax.whenInjectedInto(e)
            }, e.prototype.whenParentNamed = function(e) {
                return this._bindingWhenSyntax.whenParentNamed(e)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._bindingWhenSyntax.whenParentTagged(e, t)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(e)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorIs(e)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(e)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(e)
            }, e.prototype.onActivation = function(e) {
                return this._bindingOnSyntax.onActivation(e)
            }, e
        }();
    ct.BindingWhenOnSyntax = It, Object.defineProperty(at, "__esModule", {
        value: !0
    }), at.BindingInSyntax = void 0;
    var Tt = k,
        Ot = ct,
        St = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.inRequestScope = function() {
                return this._binding.scope = Tt.BindingScopeEnum.Request, new Ot.BindingWhenOnSyntax(this._binding)
            }, e.prototype.inSingletonScope = function() {
                return this._binding.scope = Tt.BindingScopeEnum.Singleton, new Ot.BindingWhenOnSyntax(this._binding)
            }, e.prototype.inTransientScope = function() {
                return this._binding.scope = Tt.BindingScopeEnum.Transient, new Ot.BindingWhenOnSyntax(this._binding)
            }, e
        }();
    at.BindingInSyntax = St, Object.defineProperty(ot, "__esModule", {
        value: !0
    }), ot.BindingInWhenOnSyntax = void 0;
    var Nt = at,
        Rt = ut,
        At = st,
        Pt = function() {
            function e(e) {
                this._binding = e, this._bindingWhenSyntax = new At.BindingWhenSyntax(this._binding), this._bindingOnSyntax = new Rt.BindingOnSyntax(this._binding), this._bindingInSyntax = new Nt.BindingInSyntax(e)
            }
            return e.prototype.inRequestScope = function() {
                return this._bindingInSyntax.inRequestScope()
            }, e.prototype.inSingletonScope = function() {
                return this._bindingInSyntax.inSingletonScope()
            }, e.prototype.inTransientScope = function() {
                return this._bindingInSyntax.inTransientScope()
            }, e.prototype.when = function(e) {
                return this._bindingWhenSyntax.when(e)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._bindingWhenSyntax.whenTargetNamed(e)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._bindingWhenSyntax.whenTargetIsDefault()
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._bindingWhenSyntax.whenTargetTagged(e, t)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._bindingWhenSyntax.whenInjectedInto(e)
            }, e.prototype.whenParentNamed = function(e) {
                return this._bindingWhenSyntax.whenParentNamed(e)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._bindingWhenSyntax.whenParentTagged(e, t)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(e)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorIs(e)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(e)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(e)
            }, e.prototype.onActivation = function(e) {
                return this._bindingOnSyntax.onActivation(e)
            }, e
        }();
    ot.BindingInWhenOnSyntax = Pt, Object.defineProperty(it, "__esModule", {
        value: !0
    }), it.BindingToSyntax = void 0;
    var Ct = U,
        kt = k,
        Mt = ot,
        Dt = ct,
        Lt = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.to = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Instance, this._binding.implementationType = e, new Mt.BindingInWhenOnSyntax(this._binding)
            }, e.prototype.toSelf = function() {
                if ("function" != typeof this._binding.serviceIdentifier) throw new Error("" + Ct.INVALID_TO_SELF_VALUE);
                var e = this._binding.serviceIdentifier;
                return this.to(e)
            }, e.prototype.toConstantValue = function(e) {
                return this._binding.type = kt.BindingTypeEnum.ConstantValue, this._binding.cache = e, this._binding.dynamicValue = null, this._binding.implementationType = null, this._binding.scope = kt.BindingScopeEnum.Singleton, new Dt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toDynamicValue = function(e) {
                return this._binding.type = kt.BindingTypeEnum.DynamicValue, this._binding.cache = null, this._binding.dynamicValue = e, this._binding.implementationType = null, new Mt.BindingInWhenOnSyntax(this._binding)
            }, e.prototype.toConstructor = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Constructor, this._binding.implementationType = e, this._binding.scope = kt.BindingScopeEnum.Singleton, new Dt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toFactory = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Factory, this._binding.factory = e, this._binding.scope = kt.BindingScopeEnum.Singleton, new Dt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toFunction = function(e) {
                if ("function" != typeof e) throw new Error(Ct.INVALID_FUNCTION_BINDING);
                var t = this.toConstantValue(e);
                return this._binding.type = kt.BindingTypeEnum.Function, this._binding.scope = kt.BindingScopeEnum.Singleton, t
            }, e.prototype.toAutoFactory = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Factory, this._binding.factory = function(t) {
                    return function() {
                        return t.container.get(e)
                    }
                }, this._binding.scope = kt.BindingScopeEnum.Singleton, new Dt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toProvider = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Provider, this._binding.provider = e, this._binding.scope = kt.BindingScopeEnum.Singleton, new Dt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toService = function(e) {
                this.toDynamicValue((function(t) {
                    return t.container.get(e)
                }))
            }, e
        }();
    it.BindingToSyntax = Lt;
    var xt = {};
    Object.defineProperty(xt, "__esModule", {
        value: !0
    }), xt.ContainerSnapshot = void 0;
    var jt = function() {
        function e() {}
        return e.of = function(t, n) {
            var r = new e;
            return r.bindings = t, r.middleware = n, r
        }, e
    }();
    xt.ContainerSnapshot = jt;
    var Ut = {};
    Object.defineProperty(Ut, "__esModule", {
        value: !0
    }), Ut.Lookup = void 0;
    var Ft = U,
        Bt = function() {
            function e() {
                this._map = new window[window.TiktokAnalyticsObject || "ttq"]._ttq_map
            }
            return e.prototype.getMap = function() {
                return this._map
            }, e.prototype.add = function(e, t) {
                if (null == e) throw new Error(Ft.NULL_ARGUMENT);
                if (null == t) throw new Error(Ft.NULL_ARGUMENT);
                var n = this._map.get(e);
                void 0 !== n ? (n.push(t), this._map.set(e, n)) : this._map.set(e, [t])
            }, e.prototype.get = function(e) {
                if (null == e) throw new Error(Ft.NULL_ARGUMENT);
                var t = this._map.get(e);
                if (void 0 !== t) return t;
                throw new Error(Ft.KEY_NOT_FOUND)
            }, e.prototype.remove = function(e) {
                if (null == e) throw new Error(Ft.NULL_ARGUMENT);
                if (!this._map.delete(e)) throw new Error(Ft.KEY_NOT_FOUND)
            }, e.prototype.removeByCondition = function(e) {
                var t = this;
                this._map.forEach((function(n, r) {
                    var i = n.filter((function(t) {
                        return !e(t)
                    }));
                    i.length > 0 ? t._map.set(r, i) : t._map.delete(r)
                }))
            }, e.prototype.hasKey = function(e) {
                if (null == e) throw new Error(Ft.NULL_ARGUMENT);
                return this._map.has(e)
            }, e.prototype.clone = function() {
                var t = new e;
                return this._map.forEach((function(e, n) {
                    e.forEach((function(e) {
                        return t.add(n, e.clone())
                    }))
                })), t
            }, e.prototype.traverse = function(e) {
                this._map.forEach((function(t, n) {
                    e(n, t)
                }))
            }, e
        }();
    Ut.Lookup = Bt;
    var qt = S && S.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, c)
                }
                u((r = r.apply(e, t || [])).next())
            }))
        },
        Gt = S && S.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function c(o) {
                return function(c) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, c])
                }
            }
        },
        Vt = S && S.__spreadArray || function(e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
            return e
        };
    Object.defineProperty(P, "__esModule", {
        value: !0
    }), P.Container = void 0;
    var Ht = C,
        Jt = U,
        Wt = k,
        Kt = A,
        Yt = F,
        Xt = G,
        Qt = Je,
        zt = it,
        Zt = M,
        $t = W,
        en = xt,
        tn = Ut,
        nn = function() {
            function e(e) {
                this._appliedMiddleware = [];
                var t = e || {};
                if ("object" != typeof t) throw new Error("" + Jt.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
                if (void 0 === t.defaultScope) t.defaultScope = Wt.BindingScopeEnum.Transient;
                else if (t.defaultScope !== Wt.BindingScopeEnum.Singleton && t.defaultScope !== Wt.BindingScopeEnum.Transient && t.defaultScope !== Wt.BindingScopeEnum.Request) throw new Error("" + Jt.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
                if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1;
                else if ("boolean" != typeof t.autoBindInjectable) throw new Error("" + Jt.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
                if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1;
                else if ("boolean" != typeof t.skipBaseClassChecks) throw new Error("" + Jt.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
                this.options = {
                    autoBindInjectable: t.autoBindInjectable,
                    defaultScope: t.defaultScope,
                    skipBaseClassChecks: t.skipBaseClassChecks
                }, this.id = Zt.id(), this._bindingDictionary = new tn.Lookup, this._snapshots = [], this._middleware = null, this.parent = null, this._metadataReader = new Yt.MetadataReader
            }
            return e.merge = function(t, n) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                var o = new e,
                    a = Vt([t, n], r).map((function(e) {
                        return Xt.getBindingDictionary(e)
                    })),
                    c = Xt.getBindingDictionary(o);

                function u(e, t) {
                    e.traverse((function(e, n) {
                        n.forEach((function(e) {
                            t.add(e.serviceIdentifier, e.clone())
                        }))
                    }))
                }
                return a.forEach((function(e) {
                    u(e, c)
                })), o
            }, e.prototype.load = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = this._getContainerModuleHelpersFactory(), r = 0, i = e; r < i.length; r++) {
                    var o = i[r],
                        a = n(o.id);
                    o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction)
                }
            }, e.prototype.loadAsync = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return qt(this, void 0, void 0, (function() {
                    var t, n, r, i, o;
                    return Gt(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = this._getContainerModuleHelpersFactory(), n = 0, r = e, a.label = 1;
                            case 1:
                                return n < r.length ? (i = r[n], o = t(i.id), [4, i.registry(o.bindFunction, o.unbindFunction, o.isboundFunction, o.rebindFunction)]) : [3, 4];
                            case 2:
                                a.sent(), a.label = 3;
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.unload = function() {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = function(e) {
                    return function(t) {
                        return t.moduleId === e
                    }
                };
                t.forEach((function(t) {
                    var n = r(t.id);
                    e._bindingDictionary.removeByCondition(n)
                }))
            }, e.prototype.bind = function(e) {
                var t = this.options.defaultScope || Wt.BindingScopeEnum.Transient,
                    n = new Ht.Binding(e, t);
                return this._bindingDictionary.add(e, n), new zt.BindingToSyntax(n)
            }, e.prototype.rebind = function(e) {
                return this.unbind(e), this.bind(e)
            }, e.prototype.unbind = function(e) {
                try {
                    this._bindingDictionary.remove(e)
                } catch (t) {
                    throw new Error(Jt.CANNOT_UNBIND + " " + $t.getServiceIdentifierAsString(e))
                }
            }, e.prototype.unbindAll = function() {
                this._bindingDictionary = new tn.Lookup
            }, e.prototype.isBound = function(e) {
                var t = this._bindingDictionary.hasKey(e);
                return !t && this.parent && (t = this.parent.isBound(e)), t
            }, e.prototype.isBoundNamed = function(e, t) {
                return this.isBoundTagged(e, Kt.NAMED_TAG, t)
            }, e.prototype.isBoundTagged = function(e, t, n) {
                var r = !1;
                if (this._bindingDictionary.hasKey(e)) {
                    var i = this._bindingDictionary.get(e),
                        o = Xt.createMockRequest(this, e, t, n);
                    r = i.some((function(e) {
                        return e.constraint(o)
                    }))
                }
                return !r && this.parent && (r = this.parent.isBoundTagged(e, t, n)), r
            }, e.prototype.snapshot = function() {
                this._snapshots.push(en.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware))
            }, e.prototype.restore = function() {
                var e = this._snapshots.pop();
                if (void 0 === e) throw new Error(Jt.NO_MORE_SNAPSHOTS_AVAILABLE);
                this._bindingDictionary = e.bindings, this._middleware = e.middleware
            }, e.prototype.createChild = function(t) {
                var n = new e(t || this.options);
                return n.parent = this, n
            }, e.prototype.applyMiddleware = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._appliedMiddleware = this._appliedMiddleware.concat(e);
                var n = this._middleware ? this._middleware : this._planAndResolve();
                this._middleware = e.reduce((function(e, t) {
                    return t(e)
                }), n)
            }, e.prototype.applyCustomMetadataReader = function(e) {
                this._metadataReader = e
            }, e.prototype.get = function(e) {
                return this._get(!1, !1, Wt.TargetTypeEnum.Variable, e)
            }, e.prototype.getTagged = function(e, t, n) {
                return this._get(!1, !1, Wt.TargetTypeEnum.Variable, e, t, n)
            }, e.prototype.getNamed = function(e, t) {
                return this.getTagged(e, Kt.NAMED_TAG, t)
            }, e.prototype.getAll = function(e) {
                return this._get(!0, !0, Wt.TargetTypeEnum.Variable, e)
            }, e.prototype.getAllTagged = function(e, t, n) {
                return this._get(!1, !0, Wt.TargetTypeEnum.Variable, e, t, n)
            }, e.prototype.getAllNamed = function(e, t) {
                return this.getAllTagged(e, Kt.NAMED_TAG, t)
            }, e.prototype.resolve = function(e) {
                var t = this.createChild();
                return t.bind(e).toSelf(), this._appliedMiddleware.forEach((function(e) {
                    t.applyMiddleware(e)
                })), t.get(e)
            }, e.prototype._getContainerModuleHelpersFactory = function() {
                var e = this,
                    t = function(e, t) {
                        e._binding.moduleId = t
                    },
                    n = function(n) {
                        return function(r) {
                            var i = e.rebind.bind(e)(r);
                            return t(i, n), i
                        }
                    };
                return function(r) {
                    return {
                        bindFunction: (i = r, function(n) {
                            var r = e.bind.bind(e)(n);
                            return t(r, i), r
                        }),
                        isboundFunction: function(t) {
                            return e.isBound.bind(e)(t)
                        },
                        rebindFunction: n(r),
                        unbindFunction: function(t) {
                            e.unbind.bind(e)(t)
                        }
                    };
                    var i
                }
            }, e.prototype._get = function(e, t, n, r, i, o) {
                var a = null,
                    c = {
                        avoidConstraints: e,
                        contextInterceptor: function(e) {
                            return e
                        },
                        isMultiInject: t,
                        key: i,
                        serviceIdentifier: r,
                        targetType: n,
                        value: o
                    };
                if (this._middleware) {
                    if (null == (a = this._middleware(c))) throw new Error(Jt.INVALID_MIDDLEWARE_RETURN)
                } else a = this._planAndResolve()(c);
                return a
            }, e.prototype._planAndResolve = function() {
                var e = this;
                return function(t) {
                    var n = Xt.plan(e._metadataReader, e, t.isMultiInject, t.targetType, t.serviceIdentifier, t.key, t.value, t.avoidConstraints);
                    return n = t.contextInterceptor(n), Qt.resolve(n)
                }
            }, e
        }();
    P.Container = nn;
    var rn = {};
    Object.defineProperty(rn, "__esModule", {
        value: !0
    }), rn.AsyncContainerModule = rn.ContainerModule = void 0;
    var on = M,
        an = function(e) {
            this.id = on.id(), this.registry = e
        };
    rn.ContainerModule = an;
    var cn = function(e) {
        this.id = on.id(), this.registry = e
    };
    rn.AsyncContainerModule = cn;
    var un = {};
    Object.defineProperty(un, "__esModule", {
        value: !0
    }), un.injectable = void 0;
    var sn = U,
        ln = A;
    un.injectable = function() {
        return function(e) {
            if (Reflect.ttq_hasOwnMetadata(ln.PARAM_TYPES, e)) throw new Error(sn.DUPLICATED_INJECTABLE_DECORATOR);
            var t = Reflect.ttq_getMetadata(ln.DESIGN_PARAM_TYPES, e) || [];
            return Reflect.ttq_defineMetadata(ln.PARAM_TYPES, t, e), e
        }
    };
    var fn = {};
    Object.defineProperty(fn, "__esModule", {
        value: !0
    }), fn.tagged = void 0;
    var dn = ee,
        pn = ce;
    fn.tagged = function(e, t) {
        return function(n, r, i) {
            var o = new dn.Metadata(e, t);
            "number" == typeof i ? pn.tagParameter(n, r, i, o) : pn.tagProperty(n, r, o)
        }
    };
    var hn = {};
    Object.defineProperty(hn, "__esModule", {
        value: !0
    }), hn.named = void 0;
    var _n = A,
        vn = ee,
        gn = ce;
    hn.named = function(e) {
        return function(t, n, r) {
            var i = new vn.Metadata(_n.NAMED_TAG, e);
            "number" == typeof r ? gn.tagParameter(t, n, r, i) : gn.tagProperty(t, n, i)
        }
    };
    var yn = {};
    Object.defineProperty(yn, "__esModule", {
        value: !0
    }), yn.optional = void 0;
    var mn = A,
        En = ee,
        bn = ce;
    yn.optional = function() {
        return function(e, t, n) {
            var r = new En.Metadata(mn.OPTIONAL_TAG, !0);
            "number" == typeof n ? bn.tagParameter(e, t, n, r) : bn.tagProperty(e, t, r)
        }
    };
    var wn = {};
    Object.defineProperty(wn, "__esModule", {
        value: !0
    }), wn.unmanaged = void 0;
    var In = A,
        Tn = ee,
        On = ce;
    wn.unmanaged = function() {
        return function(e, t, n) {
            var r = new Tn.Metadata(In.UNMANAGED_TAG, !0);
            On.tagParameter(e, t, n, r)
        }
    };
    var Sn = {};
    Object.defineProperty(Sn, "__esModule", {
        value: !0
    }), Sn.multiInject = void 0;
    var Nn = A,
        Rn = ee,
        An = ce;
    Sn.multiInject = function(e) {
        return function(t, n, r) {
            var i = new Rn.Metadata(Nn.MULTI_INJECT_TAG, e);
            "number" == typeof r ? An.tagParameter(t, n, r, i) : An.tagProperty(t, n, i)
        }
    };
    var Pn = {};
    Object.defineProperty(Pn, "__esModule", {
        value: !0
    }), Pn.targetName = void 0;
    var Cn = A,
        kn = ee,
        Mn = ce;
    Pn.targetName = function(e) {
        return function(t, n, r) {
            var i = new kn.Metadata(Cn.NAME_TAG, e);
            Mn.tagParameter(t, n, r, i)
        }
    };
    var Dn = {};
    Object.defineProperty(Dn, "__esModule", {
        value: !0
    }), Dn.postConstruct = void 0;
    var Ln = U,
        xn = A,
        jn = ee;
    Dn.postConstruct = function() {
        return function(e, t, n) {
            var r = new jn.Metadata(xn.POST_CONSTRUCT, t);
            if (Reflect.ttq_hasOwnMetadata(xn.POST_CONSTRUCT, e.constructor)) throw new Error(Ln.MULTIPLE_POST_CONSTRUCT_METHODS);
            Reflect.ttq_defineMetadata(xn.POST_CONSTRUCT, r, e.constructor)
        }
    };
    var Un = {};
    Object.defineProperty(Un, "__esModule", {
        value: !0
    }), Un.multiBindToService = void 0;
    Un.multiBindToService = function(e) {
            return function(t) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return n.forEach((function(n) {
                        return e.bind(n).toService(t)
                    }))
                }
            }
        },
        function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.multiBindToService = e.getServiceIdentifierAsString = e.typeConstraint = e.namedConstraint = e.taggedConstraint = e.traverseAncerstors = e.decorate = e.id = e.MetadataReader = e.postConstruct = e.targetName = e.multiInject = e.unmanaged = e.optional = e.LazyServiceIdentifer = e.inject = e.named = e.tagged = e.injectable = e.ContainerModule = e.AsyncContainerModule = e.TargetTypeEnum = e.BindingTypeEnum = e.BindingScopeEnum = e.Container = e.METADATA_KEY = void 0;
            var t = A;
            e.METADATA_KEY = t;
            var n = P;
            Object.defineProperty(e, "Container", {
                enumerable: !0,
                get: function() {
                    return n.Container
                }
            });
            var r = k;
            Object.defineProperty(e, "BindingScopeEnum", {
                enumerable: !0,
                get: function() {
                    return r.BindingScopeEnum
                }
            }), Object.defineProperty(e, "BindingTypeEnum", {
                enumerable: !0,
                get: function() {
                    return r.BindingTypeEnum
                }
            }), Object.defineProperty(e, "TargetTypeEnum", {
                enumerable: !0,
                get: function() {
                    return r.TargetTypeEnum
                }
            });
            var i = rn;
            Object.defineProperty(e, "AsyncContainerModule", {
                enumerable: !0,
                get: function() {
                    return i.AsyncContainerModule
                }
            }), Object.defineProperty(e, "ContainerModule", {
                enumerable: !0,
                get: function() {
                    return i.ContainerModule
                }
            });
            var o = un;
            Object.defineProperty(e, "injectable", {
                enumerable: !0,
                get: function() {
                    return o.injectable
                }
            });
            var a = fn;
            Object.defineProperty(e, "tagged", {
                enumerable: !0,
                get: function() {
                    return a.tagged
                }
            });
            var c = hn;
            Object.defineProperty(e, "named", {
                enumerable: !0,
                get: function() {
                    return c.named
                }
            });
            var u = ae;
            Object.defineProperty(e, "inject", {
                enumerable: !0,
                get: function() {
                    return u.inject
                }
            }), Object.defineProperty(e, "LazyServiceIdentifer", {
                enumerable: !0,
                get: function() {
                    return u.LazyServiceIdentifer
                }
            });
            var s = yn;
            Object.defineProperty(e, "optional", {
                enumerable: !0,
                get: function() {
                    return s.optional
                }
            });
            var l = wn;
            Object.defineProperty(e, "unmanaged", {
                enumerable: !0,
                get: function() {
                    return l.unmanaged
                }
            });
            var f = Sn;
            Object.defineProperty(e, "multiInject", {
                enumerable: !0,
                get: function() {
                    return f.multiInject
                }
            });
            var d = Pn;
            Object.defineProperty(e, "targetName", {
                enumerable: !0,
                get: function() {
                    return d.targetName
                }
            });
            var p = Dn;
            Object.defineProperty(e, "postConstruct", {
                enumerable: !0,
                get: function() {
                    return p.postConstruct
                }
            });
            var h = F;
            Object.defineProperty(e, "MetadataReader", {
                enumerable: !0,
                get: function() {
                    return h.MetadataReader
                }
            });
            var _ = M;
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return _.id
                }
            });
            var v = ce;
            Object.defineProperty(e, "decorate", {
                enumerable: !0,
                get: function() {
                    return v.decorate
                }
            });
            var g = lt;
            Object.defineProperty(e, "traverseAncerstors", {
                enumerable: !0,
                get: function() {
                    return g.traverseAncerstors
                }
            }), Object.defineProperty(e, "taggedConstraint", {
                enumerable: !0,
                get: function() {
                    return g.taggedConstraint
                }
            }), Object.defineProperty(e, "namedConstraint", {
                enumerable: !0,
                get: function() {
                    return g.namedConstraint
                }
            }), Object.defineProperty(e, "typeConstraint", {
                enumerable: !0,
                get: function() {
                    return g.typeConstraint
                }
            });
            var y = W;
            Object.defineProperty(e, "getServiceIdentifierAsString", {
                enumerable: !0,
                get: function() {
                    return y.getServiceIdentifierAsString
                }
            });
            var m = Un;
            Object.defineProperty(e, "multiBindToService", {
                enumerable: !0,
                get: function() {
                    return m.multiBindToService
                }
            })
        }(R);
    var Fn, Bn, qn, Gn, Vn, Hn, Jn, Wn, Kn, Yn, Xn = ["ttuts", "ad_info_from"];
    ! function(e) {
        e.LDU = "limited_data_use", e.EVENTID = "eventID", e.EVENT_ID = "event_id"
    }(Fn || (Fn = {})),
    function(e) {
        e[e.defaultReport = 0] = "defaultReport", e[e.httpReport = 1] = "httpReport", e[e.htmlHttpReport = 2] = "htmlHttpReport"
    }(Bn || (Bn = {})),
    function(e) {
        e.NORMAL = "1", e.NOT_CROSS_DOMAIN_IFRAME = "2", e.CROSS_DOMAIN_IFRAME = "3", e.WEB_WORKER = "4", e.SANDBOX_IFRAME = "5", e.GTM_IFRAME = "6", e.URL_IN_QUERY_IFRAME = "7", e.UNKNOWN_IFRAME = "8"
    }(qn || (qn = {})),
    function(e) {
        e.EMPTY_VALUE = "empty_value", e.WRONG_FORMAT = "wrong_format", e.CORRECT_FORMAT = "correct_format", e.HASHED = "hashed", e.HASHED_ERR = "hashed_err", e.HASHED_CORRECT = "hashed_correct", e.PLAINTEXT_EMAIL = "plaintext_email", e.PLAINTEXT_PHONE = "plaintext_phone"
    }(Gn || (Gn = {})),
    function(e) {
        e.EMPTY_VALUE = "empty_value", e.PLAIN_EMAIL = "plain_email", e.PLAIN_PHONE = "plain_phone", e.HASHED = "hashed", e.FILTER_EVENTS = "filter_events", e.UNKNOWN_INVALID = "unknown_invalid", e.BASE64_STRING_HASHED = "base64_string_hashed", e.BASE64_HEX_HASHED = "base64_hex_hashed", e.PLAIN_MDN_EMAIL = "plain_mdn_email", e.ZIP_CODE_IS_NOT_HASHED = "zip_code_is_not_hashed", e.ZIP_CODE_IS_NOT_US = "zip_code_is_not_us", e.ZIP_CODE_IS_HASHED = "zip_code_is_hashed", e.ZIP_CODE_IS_US = "zip_code_is_us"
    }(Vn || (Vn = {})),
    function(e) {
        e.Manual = "manual", e.ManualV2 = "manual_v2", e.Auto = "auto"
    }(Hn || (Hn = {})),
    function(e) {
        e.empty = "empty", e.whitespace = "whitespace", e.hardcode = "hardcode", e.encode = "encode"
    }(Jn || (Jn = {})),
    function(e) {
        e.letterCase = "letter_case", e.isNotValidEmail = "is_not_valid_email", e.isNotPossibleEmail = "is_not_possible_email", e.domainTypo = "domain_typo", e.addressFormat = "address_format"
    }(Wn || (Wn = {})),
    function(e) {
        e.invalidCountry = "invalid_country", e.notANumber = "not_a_number", e.tooShort = "too_short", e.tooLong = "too_long", e.invalidLength = "invalid_length", e.emptyCountryCodeThroughIP = "empty_country_code_through_ip", e.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", e.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", e.tooShortAfterInjectPlus = "too_short_after_inject_plus", e.tooLongAfterInjectPlus = "too_long_after_inject_plus", e.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", e.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", e.notANumberAfterInjectCountry = "not_a_number_after_inject_country", e.tooShortAfterInjectCountry = "too_short_after_inject_country", e.tooLongAfterInjectCountry = "too_long_after_inject_country", e.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country"
    }(Kn || (Kn = {})),
    function(e) {
        e.missing = "missing", e.valid = "valid", e.invalid = "invalid"
    }(Yn || (Yn = {}));
    var Qn, zn, Zn, $n = {
        raw_email: {
            label: Yn.missing
        },
        raw_auto_email: {
            label: Yn.missing
        },
        raw_phone: {
            label: Yn.missing
        },
        raw_auto_phone: {
            label: Yn.missing
        },
        hashed_email: {
            label: Yn.missing
        },
        hashed_phone: {
            label: Yn.missing
        }
    };
    ! function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.HOLD = 1] = "HOLD", e[e.REVOKE = 2] = "REVOKE", e[e.GRANT = 3] = "GRANT"
    }(Qn || (Qn = {})),
    function(e) {
        e[e.NOT_SURE = 0] = "NOT_SURE", e[e.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", e[e.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", e[e.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED"
    }(zn || (zn = {})),
    function(e) {
        e.PIXEL_CODE = "pixelCode", e.EVENT_SOURCE_ID = "eventSourceId", e.SHOP_ID = "shopId"
    }(Zn || (Zn = {}));
    var er, tr, nr, rr = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        },
        ir = function(e) {
            return "{}" === JSON.stringify(e)
        },
        or = function(e) {
            return "".concat(e, "-").concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        },
        ar = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "-";
            return "".concat(e).concat(n).concat(t)
        },
        cr = function() {
            return new Date(Date.now() + 864e5).toUTCString()
        };

    function ur(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            n = -1;
        return function() {
            var r = Array.prototype.slice.apply(arguments),
                i = Date.now();
            i - n >= t && (e.apply(void 0, y(r)), n = Date.now())
        }
    }
    var sr, lr, fr = "tt_adInfo",
        dr = "tt_appInfo",
        pr = "_tt_enable_cookie",
        hr = "messageId",
        _r = "_ttp",
        vr = "tt_sessionId",
        gr = "tt_pixel_session_index",
        yr = "default_eventId",
        mr = "::";
    ! function(e) {
        e.WINDOWS_PHONE = "Windows Phone", e.ANDROID = "android", e.IOS = "ios", e.PC = "pc"
    }(sr || (sr = {})),
    function(e) {
        e.MUSICAL_LY = "musical_ly", e.MUSICALLY_GO = "musically_go", e.TRILL = "trill", e.ULTRALITE = "ultralite", e.LEMON8 = "lemon8"
    }(lr || (lr = {}));
    var Er, br, wr, Ir, Tr, Or = (c(nr = {}, lr.LEMON8, {}), c(nr, lr.MUSICAL_LY, (c(er = {}, sr.IOS, "33.4.0"), c(er, sr.ANDROID, "23.1.0"), er)), c(nr, lr.TRILL, (c(tr = {}, sr.IOS, "33.4.0"), c(tr, sr.ANDROID, "23.1.0"), tr)), nr),
        Sr = {
            expires: 390
        };
    ! function(e) {
        e[e.OFFSITE = 0] = "OFFSITE", e[e.ONSITE = 1] = "ONSITE"
    }(Er || (Er = {})),
    function(e) {
        e.INIT_START = "initStart", e.INIT_END = "initEnd", e.CONTEXT_INIT_START = "contextInitStart", e.CONTEXT_INIT_END = "contextInitEnd", e.PAGE_URL_WILL_CHANGE = "pageUrlWillChange", e.PAGE_URL_DID_CHANGE = "pageUrlDidChange", e.PAGE_DID_LOAD = "pageDidLoad", e.PAGE_WILL_LEAVE = "pageWillLeave", e.AD_INFO_INIT_START = "adInfoInitStart", e.AD_INFO_INIT_END = "adInfoInitEnd", e.BEFORE_AD_INFO_INIT_START = "beforeAdInfoInitStart", e.PIXEL_SEND = "pixelSend", e.PIXEL_DID_MOUNT = "pixelDidMount"
    }(br || (br = {})),
    function(e) {
        e.UNKNOWN = "-1", e.LOADING = "0", e.INTERACTIVE = "1", e.COMPLETE = "2"
    }(wr || (wr = {})),
    function(e) {
        e.HISTORY_CHANGE = "hc", e.URL_CHANGE = "uc"
    }(Ir || (Ir = {})),
    function(e) {
        e.EXTERNAL = "external", e.APP = "app", e.TIKTOK = "tiktok"
    }(Tr || (Tr = {}));
    var Nr, Rr = {
            ID: Symbol.for("ID"),
            Type: Symbol.for("type"),
            Partner: Symbol.for("partner"),
            Options: Symbol.for("Options"),
            Plugins: Symbol.for("Plugins"),
            Rules: Symbol.for("Rules"),
            Info: Symbol.for("Info"),
            ExtraParams: Symbol.for("extraParams"),
            WebLibraryInfo: Symbol.for("WebLibraryInfo"),
            SignalType: Symbol.for("SignalType"),
            IsOnsitePage: Symbol.for("IsOnsitePage")
        },
        Ar = "Pageview",
        Pr = [],
        Cr = "EnrichAM",
        kr = {
            TTQ: Symbol.for("TTQ"),
            GLOBAL_TTQ: Symbol.for("GLOBAL_TTQ"),
            SHOPIFY_TTQ: Symbol.for("SHOPIFY_TTQ"),
            ENV: Symbol.for("ENV"),
            CONTEXT: Symbol.for("CONTEXT"),
            REPORTER: Symbol.for("REPORTER"),
            REPORTERS: Symbol.for("REPORTERS"),
            PLUGIN: Symbol.for("PLUGIN"),
            PLUGINS: Symbol.for("PLUGINS"),
            TTQ_GLOBAL_OPTIONS: Symbol.for("TTQ_GLOBAL_OPTIONS"),
            PERFORMANCE_PLUGIN: Symbol.for("PERFORMANCE_PLUGIN"),
            INTERACTION_PLUGIN: Symbol.for("INTERACTION_PLUGIN"),
            INTERACTION_PLUGIN_MONITOR: Symbol.for("INTERACTION_PLUGIN_MONITOR"),
            PERFORMANCE_PLUGIN_MONITOR: Symbol.for("PERFORMANCE_PLUGIN_MONITOR"),
            ADVANCED_MATCHING_PLUGIN: Symbol.for("ADVANCED_MATCHING_PLUGIN"),
            AUTO_ADVANCED_MATCHING_PLUGIN: Symbol.for("AUTO_ADVANCED_MATCHING_PLUGIN"),
            CALLBACK_PLUGIN: Symbol.for("CALLBACK_PLUGIN"),
            IDENTIFY_PLUGIN: Symbol.for("IDENTIFY_PLUGIN"),
            MONITOR_PLUGIN: Symbol.for("MONITOR_PLUGIN"),
            WEB_FL_PLUGIN: Symbol.for("WEB_FL_PLUGIN"),
            SHOPIFY_PLUGIN: Symbol.for("SHOPIFY_PLUGIN"),
            AUTO_CONFIG_PLUGIN: Symbol.for("AUTO_CONFIG_PLUGIN"),
            DIAGNOSTICS_CONSOLE_PLUGIN: Symbol.for("DIAGNOSTICS_CONSOLE_PLUGIN"),
            COMPETITOR_INSIGHT_PLUGIN: Symbol.for("COMPETITOR_INSIGHT_PLUGIN"),
            PANGLE_COOKIE_MATCHING_PLUGIN: Symbol.for("PANGLE_COOKIE_MATCHING_PLUGIN"),
            EVENT_BUILDER_PLUGIN: Symbol.for("EVENT_BUILDER_PLUGIN"),
            ENRICH_IPV6_PLUGIN: Symbol.for("ENRICH_IPV6_PLUGIN"),
            RUNTIME_MEASUREMENT_PLUGIN: Symbol.for("RUNTIME_MEASUREMENT_PLUGIN"),
            PAGE_PERFORMANCE_MONITOR: Symbol.for("PAGE_PERFORMANCE_MONITOR"),
            PAGE_INTERACTION_MONITOR: Symbol.for("PAGE_INTERACTION_MONITOR"),
            PAGEDATA_PLUGIN: Symbol.for("PAGEDATA_PLUGIN"),
            HISTORY_OBSERVER: Symbol.for("HISTORY_OBSERVER"),
            BATCH_SERVICE: Symbol.for("BATCH_SERVICE"),
            REPORT_SERVICE: Symbol.for("REPORT_SERVICE"),
            AD_SERVICE: Symbol.for("AD_SERVICE"),
            APP_SERVICE: Symbol.for("APP_SERVICE"),
            BRIDGE_SERVICE: Symbol.for("BRIDGE"),
            HTTP_SERVICE: Symbol.for("HTTP_SERVICE"),
            COOKIE_SERVICE: Symbol.for("COOKIE_SERVICE"),
            CONSENT_SERVICE: Symbol.for("CONSENT_SERVICE"),
            JS_BRIDGE: Symbol.for("JS_BRIDGE"),
            TTQ_REPORTERS: Symbol.for("TTQ_REPORTERS"),
            INTERACTION_MONITOR: Symbol.for("INTERACTION_MONITOR"),
            PERFORMANCE_MONITOR: Symbol.for("PERFORMANCE_MONITOR"),
            SANDBOX_PIXEL_API: Symbol("SANDBOX_PIXEL_API")
        };
    ! function(e) {
        e.TRACK = "track", e.PERFORMANCE = "performance", e.INTERACTION = "interaction", e.PCM = "PCM", e.PERFORMANCE_INTERACTION = "performance_interaction", e.SELFHOST = "selfhost", e.AUTO_CONFIG = "auto_config", e.PAGE = "Pf", e.PAGE_PERFORMANCE = "page_performance", e.PAGE_INTERACTION = "page_interaction"
    }(Nr || (Nr = {}));
    var Mr, Dr, Lr = ["EnrichAM"],
        xr = "https://analytics.tiktok.com/api/v2",
        jr = "".concat(xr, "/pixel"),
        Ur = "".concat(xr, "/performance"),
        Fr = "".concat(xr, "/interaction"),
        Br = "".concat(xr, "/performance_interaction"),
        qr = "".concat(xr, "/pixel/perf"),
        Gr = "".concat(xr, "/pixel/inter"),
        Vr = "".concat(xr, "/pixel/act"),
        Hr = "https://analytics-ipv6.tiktokw.us/ipv6/enrich_ipv6",
        Jr = "ttclid",
        Wr = "_toutiao_params",
        Kr = ["phone_number", "email", "external_id"],
        Yr = "email_is_hashed",
        Xr = "phone_is_hashed",
        Qr = "sha256_email",
        zr = "sha256_phone",
        Zr = "auto_trigger_type";
    ! function(e) {
        e.LOAD_START = "load_start", e.LOAD_END = "load_end", e.BEFORE_INIT = "before_init", e.INIT_START = "init_start", e.INIT_END = "init_end", e.JSB_INIT_START = "jsb_init_start", e.JSB_INIT_END = "jsb_init_end", e.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", e.AD_INFO_INIT_START = "ad_info_init_start", e.AD_INFO_INIT_END = "ad_info_init_end", e.IDENTIFY_INIT_START = "identify_init_start", e.IDENTIFY_INIT_END = "identify_init_end", e.PLUGIN_INIT_START = "_init_start", e.PLUGIN_INIT_END = "_init_end", e.PIXEL_SEND = "pixel_send", e.PIXEL_SEND_PCM = "pixel_send_PCM", e.JSB_SEND = "jsb_send", e.HTTP_SEND = "http_send", e.HANDLE_CACHE = "handle_cache", e.INIT_ERROR = "init_error", e.PIXEL_EMPTY = "pixel_empty", e.JSB_ERROR = "jsb_error", e.API_ERROR = "api_error", e.PLUGIN_ERROR = "plugin_error", e.CUSTOM_INFO = "custom_info", e.CUSTOM_ERROR = "custom_error", e.CUSTOM_TIMER = "custom_timer"
    }(Mr || (Mr = {})),
    function(e) {
        e.EMPTY_EVENT_TYPE_NAME = "EMPTY_EVENT_TYPE_NAME", e.MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT = "MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT", e.LONG_EVENT_TYPE_NAME = "LONG_EVENT_TYPE_NAME", e.MISSING_VALUE_PARAMETER = "MISSING_VALUE_PARAMETER", e.MISSING_CURRENCY_PARAMETER = "MISSING_CURRENCY_PARAMETER", e.MISSING_CONTENT_ID = "MISSING_CONTENT_ID", e.MISSING_EMAIL_AND_PHONE = "MISSING_EMAIL_AND_PHONE", e.INVALID_EVENT_PARAMETER_VALUE = "INVALID_EVENT_PARAMETER_VALUE", e.INVALID_CURRENCY_CODE = "INVALID_CURRENCY_CODE", e.INVALID_CONTENT_ID = "INVALID_CONTENT_ID", e.INVALID_CONTENT_TYPE = "INVALID_CONTENT_TYPE", e.INVALID_EMAIL_FORMAT = "INVALID_EMAIL_FORMAT", e.INVALID_PHONE_NUMBER_FORMAT = "INVALID_PHONE_NUMBER_FORMAT", e.INVALID_EMAIL_INFORMATION = "INVALID_EMAIL_INFORMATION", e.INVALID_PHONE_NUMBER_INFORMATION = "INVALID_PHONE_NUMBER_INFORMATION", e.DUPLICATE_PIXEL_CODE = "DUPLICATE_PIXEL_CODE", e.MISSING_PIXEL_CODE = "MISSING_PIXEL_CODE", e.INVALID_PIXEL_CODE = "INVALID_PIXEL_CODE"
    }(Dr || (Dr = {}));
    var $r = null,
        ei = function() {
            return "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : new Function("return this")()
        },
        ti = function() {
            return ei().TiktokAnalyticsObject || "ttq"
        },
        ni = function() {
            var e = ei();
            return $r || e[ti()]
        },
        ri = function() {
            return !!ni()._is_onsite
        },
        ii = function() {
            var e = ei();
            return ("object" === ("undefined" == typeof navigator ? "undefined" : t(navigator)) && navigator.userAgent ? navigator.userAgent : "") || e._userAgent
        },
        oi = function(e) {
            try {
                var t = ni();
                return t && t._self_host_config && t._self_host_config[e] || ""
            } catch (e) {
                return ""
            }
        },
        ai = function(e) {
            var t = ni(),
                n = t._i || {},
                r = e && n[e];
            return e && r && r._partner ? r._partner : t._partner ? t._partner : ""
        },
        ci = function(e) {
            var t = ni(),
                n = t._i || {};
            return Object.keys(n).filter((function(t) {
                return n[t]._partner === e
            })).length > 0 || t._partner === e
        },
        ui = function(e) {
            try {
                var t = ni()._plugins || {};
                return null == t[e] || !!t[e]
            } catch (e) {
                return !0
            }
        },
        si = function() {
            var e;
            try {
                var t = ni()._ppf;
                return null === (e = t.printAndClear) || void 0 === e ? void 0 : e.call(t)
            } catch (e) {}
        };

    function li(e) {
        var t = new Error(e);
        return t.source = "ulid", t
    }
    var fi = "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
        di = fi.length,
        pi = Math.pow(2, 48) - 1;

    function hi(e) {
        var t = Math.floor(e() * di);
        return t === di && (t = di - 1), fi.charAt(t)
    }
    var _i, vi = (_i || (_i = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments[1];
            t || (t = "undefined" != typeof window ? window : null);
            var n = t && (t.crypto || t.msCrypto);
            if (n) return function() {
                var e = new Uint8Array(1);
                return n.getRandomValues(e), e[0] / 255
            };
            try {
                var r = require("crypto");
                return function() {
                    return r.randomBytes(1).readUInt8() / 255
                }
            } catch (e) {}
            if (e) return function() {
                return Math.random()
            };
            throw li("secure crypto unusable, insecure Math.random not allowed")
        }()), function(e) {
            return isNaN(e) && (e = Date.now()),
                function(e, t) {
                    if (isNaN(e)) throw new Error(e + " must be a number");
                    if (e > pi) throw li("cannot encode time greater than " + pi);
                    if (e < 0) throw li("time must be positive");
                    if (!1 === Number.isInteger(e)) throw li("time must be an integer");
                    for (var n = void 0, r = ""; t > 0; t--) r = fi.charAt(n = e % di) + r, e = (e - n) / di;
                    return r
                }(e, 10) + function(e, t) {
                    for (var n = ""; e > 0; e--) n = hi(t) + n;
                    return n
                }(16, _i)
        }),
        gi = function(e) {
            return Boolean(e)
        },
        yi = function(e) {
            return void 0 !== e.metric_name
        },
        mi = function(e) {
            return yi(e) ? "insight_log_monitor" : "insight_log"
        },
        Ei = function(e) {
            var t;
            return Object.keys((null === (t = null == e ? void 0 : e.context) || void 0 === t ? void 0 : t.user) || {}).some((function(e) {
                return -1 !== Kr.indexOf(e)
            }))
        };

    function bi(e, t) {
        var n, r = e;
        return function() {
            if (r) {
                for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                n = e.apply(t, o), r = null
            }
            return n
        }
    }
    var wi = function(e) {
        return ((e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce(((e, t) => e + ((t &= 63) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_")), ""))(e)
    };

    function Ii(e, t) {
        var n = Object.assign({}, e);
        return t.forEach((function(e) {
            null !== n[e] && void 0 !== n[e] && delete n[e]
        })), n
    }
    var Ti = function(e, t) {
        if (!e) return {};
        var n = {};
        return Object.keys(e).forEach((function(r) {
            t[r] && (n[r] = e[r])
        })), n
    };

    function Oi(e, t, n) {
        var r;
        return function() {
            for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
            clearTimeout(r), r = setTimeout((function() {
                e.apply(n, o)
            }), t)
        }
    }

    function Si() {
        return Ni.apply(this, arguments)
    }

    function Ni() {
        return Ni = r(e().mark((function t() {
            var n, r = arguments;
            return e().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return n = r.length > 0 && void 0 !== r[0] ? r[0] : 500, e.abrupt("return", new Promise((function(e) {
                            setTimeout((function() {
                                e(!0)
                            }), n)
                        })));
                    case 2:
                    case "end":
                        return e.stop()
                }
            }), t)
        }))), Ni.apply(this, arguments)
    }
    var Ri = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
        Ai = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
        Pi = function(e) {
            var t = Ri.some((function(t) {
                    return e.matches(t)
                })),
                n = Ai.some((function(t) {
                    return e.matches(t)
                }));
            return t && !n
        };

    function Ci(e, n) {
        var r = {};
        for (var i in e)
            if (e.hasOwnProperty(i) && !n.hasOwnProperty(i)) r[i] = e[i];
            else if (e.hasOwnProperty(i) && n.hasOwnProperty(i) && e[i] !== n[i])
            if ("object" === t(e[i]) && "object" === t(n[i])) {
                var o = Ci(e[i], n[i]);
                Object.keys(o).length > 0 && (r[i] = o)
            } else r[i] = e[i];
        for (var a in n) n.hasOwnProperty(a) && !e.hasOwnProperty(a) && (r[a] = n[a]);
        return r
    }

    function ki(e, t) {
        return Object.keys(Ci(e, t)).length > 0
    }

    function Mi(e, t) {
        var n = {};
        return e && (function(e) {
            return "string" == typeof e
        }(e) || function(e) {
            return "number" == typeof e
        }(e) ? n.external_id = e.toString() : rr(e) && (n = e)), t && rr(t) && Object.assign(n, t), n
    }
    var Di = function(e) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                    taskName: window.ttq._pf_tn,
                    functionName: "getPixelInstalledPosition",
                    start: performance.now()
                }
            } catch (e) {}
            var n = "unknown";
            try {
                var r = e && function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "getPixelScriptByPixelCode",
                            start: performance.now()
                        }
                    } catch (e) {}
                    for (var n, r = Array.prototype.slice.call(document.getElementsByTagName("script")), i = 0; i < r.length; i++) {
                        var o = r[i];
                        if (o.innerHTML && o.innerHTML.indexOf(e) > -1) {
                            n = o;
                            break
                        }
                    }
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                    return n
                }(e);
                r && (Li(r) && (n = "isInHead"), xi(r) && (n = "isInBodyTop10"))
            } catch (e) {}
            try {
                window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
            } catch (e) {}
            return n
        },
        Li = function e(t) {
            var n = t.parentElement;
            return !!n && ("HEAD" === n.tagName || e(n))
        },
        xi = function(e) {
            return function(e, n) {
                for (var r, i = [document.body], o = 0; o <= e && i.length;) {
                    var a = i.pop();
                    if (a === n) return !0;
                    if (!("script" === (null == a ? void 0 : a.tagName.toLowerCase()) && (null === (r = a.src) || void 0 === r ? void 0 : r.indexOf("analytics.tiktok.com")) > -1) && (o++, "object" === t(a) && a.children))
                        for (var c = a.children.length - 1; c >= 0; c--) i.push(a.children[c])
                }
                return !1
            }(10, e)
        };

    function ji(e, t) {
        try {
            var n = new URL(e).searchParams.getAll(t);
            return n[n.length - 1] || ""
        } catch (e) {
            return ""
        }
    }
    var Ui = function(e, t, n) {
            try {
                var r = ji(t, e);
                return r || ji(n || "", e)
            } catch (e) {}
            return ""
        },
        Fi = function() {
            var e, t;
            if (!Yi()) return {
                url: window.location.href,
                referrer: document.referrer
            };
            if (!Zi()) return {
                url: (null === (e = null === window || void 0 === window ? void 0 : window.top) || void 0 === e ? void 0 : e.location.href) || "",
                referrer: (null === (t = null === window || void 0 === window ? void 0 : window.top) || void 0 === t ? void 0 : t.document.referrer) || ""
            };
            var n = window.location.href,
                r = document.referrer;
            if (/doubleclick\.net/.test(window.location.hostname)) {
                var i = window.location.pathname,
                    o = {};
                return i.split(";").forEach((function(e) {
                    var t = v(e.split("="), 2),
                        n = t[0],
                        r = t[1];
                    o[n] = decodeURIComponent(r)
                })), {
                    url: o["~oref"] || n,
                    referrer: document.referrer
                }
            }
            return {
                url: n,
                referrer: r
            }
        },
        Bi = function() {
            var e, t;
            return (null === (t = null === (e = ni()) || void 0 === e ? void 0 : e._env) || void 0 === t ? void 0 : t.env) || Tr.EXTERNAL
        },
        qi = function() {
            var e, t;
            return null !== (t = null === (e = ni()) || void 0 === e ? void 0 : e._is_onsite) && void 0 !== t ? t : Er.OFFSITE
        },
        Gi = function(e) {
            return (e || Bi()) !== Tr.EXTERNAL
        },
        Vi = function(e) {
            return (e || Bi()) === Tr.TIKTOK
        },
        Hi = function() {
            var e = ii();
            return /windows phone/i.test(e) ? sr.WINDOWS_PHONE : /android/i.test(e) ? sr.ANDROID : /iPad|iPhone|iPod/.test(e) ? sr.IOS : sr.PC
        },
        Ji = function() {
            try {
                return navigator.userAgentData.getHighEntropyValues(["model", "platformVersion"])
            } catch (e) {
                return Promise.resolve({})
            }
        },
        Wi = function() {
            return "android" === Hi()
        },
        Ki = function() {
            return "ios" === Hi()
        },
        Yi = function() {
            return window.top !== window
        },
        Xi = bi((function() {
            return /open_news/i.test(ii())
        })),
        Qi = bi((function() {
            return /ultralite/i.test(ii())
        }));

    function zi() {
        var e;
        return [zn.INVOKE_METHOD_ENABLED, zn.INVOKE_METHOD_NOT_ENABLED, zn.TOUTIAO_BRIDGE_NOT_ENABLED][
            [!!(null === (e = null === window || void 0 === window ? void 0 : window.ToutiaoJSBridge) || void 0 === e ? void 0 : e.invokeMethod), !!(null === window || void 0 === window ? void 0 : window.ToutiaoJSBridge), !0].findIndex((function(e) {
                return e
            }))
        ]
    }
    var Zi = function() {
            try {
                return window && window.top && window.top.location.href, !1
            } catch (e) {
                return !0
            }
        },
        $i = function() {
            try {
                return Zi() ? function() {
                    try {
                        var e = new URL(decodeURIComponent(window.location.href)),
                            t = /https?:\/\/[^\s/$.?#].[^\s]*/i;
                        return t.test(e.search) || t.test(e.pathname)
                    } catch (e) {
                        return !1
                    }
                }() ? qn.URL_IN_QUERY_IFRAME : window.google_tag_manager ? qn.GTM_IFRAME : window.name && "web-pixel-sandbox" === window.name ? qn.SANDBOX_IFRAME : qn.CROSS_DOMAIN_IFRAME : qn.NOT_CROSS_DOMAIN_IFRAME
            } catch (e) {
                return qn.UNKNOWN_IFRAME
            }
        },
        eo = function() {
            return (void 0 !== (e = ei()).DedicatedWorkerGlobalScope ? e instanceof e.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === e.constructor.name) ? qn.WEB_WORKER : Yi() ? $i() : qn.NORMAL;
            var e
        },
        to = function() {
            var e = ii();
            if (e)
                for (var t = 0, n = Object.values(lr); t < n.length; t++) {
                    var r = n[t];
                    if (e.includes(r)) return r
                }
        },
        no = function() {
            var e = to(),
                t = Hi(),
                n = Ki() ? function() {
                    var e = ii();
                    if (e)
                        for (var t = 0, n = Object.keys(lr); t < n.length; t++) {
                            var r = n[t],
                                i = new RegExp("\\b".concat(lr[r], "_(\\S*)")),
                                o = e.match(i),
                                a = o && o[1] ? o[1].match(/^\d+\.\d+\.\d+$/) : void 0;
                            if (a) return a[0]
                        }
                }() : Wi() ? function() {
                    var e = ii();
                    if (e) {
                        var t = e.match(/\bapp_version\/(\S*)/),
                            n = t && t[1] ? t[1].match(/^\d+\.\d+\.\d+$/) : void 0;
                        return n ? n[0] : void 0
                    }
                }() : null;
            if (n && e && Or[e]) {
                var r = Or[e];
                return !r[t] || ro(r[t], n)
            }
            return !1
        },
        ro = function(e, t) {
            for (var n = e.split("."), r = t.split("."), i = 0; i < Math.max(n.length, r.length); i++) {
                var o = parseInt(n[i]) || Number.MAX_VALUE,
                    a = parseInt(r[i]) || -1;
                if (o < a) return !0;
                if (o > a) return !1
            }
            return !0
        },
        io = function() {
            return function(e) {
                var t = to();
                return void 0 !== t && e.has(t)
            }(new Set([lr.MUSICAL_LY, lr.TRILL, lr.ULTRALITE]))
        },
        oo = {
            info: [],
            error: []
        };

    function ao(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
            var r = ni(),
                i = r.getPlugin && r.getPlugin("Monitor") || null;
            i && i.info && "function" == typeof i.info ? i.info.call(i, e, t, n) : ui("Monitor") && oo.info.push({
                event: e,
                detail: t,
                withoutJSB: n
            })
        } catch (e) {}
    }

    function co(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        try {
            var i = ni(),
                o = i.getPlugin && i.getPlugin("Monitor") || null;
            o && o.error && "function" == typeof o.error ? o.error.call(o, e, t, n, r) : ui("Monitor") && oo.error.push({
                event: e,
                err: t,
                detail: n,
                withoutJSB: r
            })
        } catch (e) {}
    }

    function uo(e, t) {
        try {
            var n = ni(),
                r = n.getPlugin && n.getPlugin("DiagnosticsConsole") || null;
            r && r.warn.apply(r, [e, t])
        } catch (e) {}
    }

    function so() {
        try {
            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var e = {
                taskName: window.ttq._pf_tn,
                functionName: "getPixelDetail",
                start: performance.now()
            }
        } catch (e) {}
        var t = {
            lib: "ttq",
            pixelCode: "MOCK_SHOP_ID"
        };
        try {
            var n = document && document.currentScript;
            t = {
                pixelCode: n && n.getAttribute("data-id") || "",
                lib: ti() || "ttq"
            }
        } catch (e) {
            t = {
                lib: "ttq",
                pixelCode: ""
            }
        }
        try {
            window.ttq && window.ttq._ppf && (e.end = performance.now(), window.ttq._ppf.push(e))
        } catch (e) {}
        return t
    }
    var lo, fo = function(e, t) {
            if ("selfhost" === e && t && oi(t)) return "https://".concat(oi(t), "/api/v2/pixel");
            var n = {
                track: jr,
                performance: Ur,
                interaction: Fr,
                performance_interaction: Br,
                auto_config: Vr,
                page_performance: qr,
                page_interaction: Gr
            }[e];
            return n || null
        },
        po = function(e) {
            try {
                var t = window.sessionStorage.getItem(e);
                return t ? JSON.parse(t) : null
            } catch (e) {
                return null
            }
        },
        ho = function(e, t) {
            try {
                var n = JSON.stringify(t);
                window.sessionStorage.setItem(e, n)
            } catch (e) {}
        },
        _o = 0,
        vo = 0,
        go = function(e) {
            if (0 === document.cookie.length) return "";
            var t, n, r = (t = e, n = {}, document.cookie.split(";").forEach((function(e) {
                var t = e.split("="),
                    r = t[0].trim();
                n[r] = t.slice(1).join("=")
            })), n[t] || "");
            return r ? unescape(r) : ""
        },
        yo = function(e, t, n) {
            try {
                if (n) {
                    var r = window.location.hostname.split(".");
                    if (vo = r.length, (_o = wo()) && _o < vo) return n.domain = ".".concat(r.slice(vo - _o - 1).join(".")), void Io(e, t, n);
                    for (var i = "", o = 0; o < vo && (i = ".".concat(r[vo - o - 1]).concat(i), n.domain = i, _o = o, !Io(e, t, n)); o++);
                } else document.cookie = "".concat(e, "=").concat(t).concat(Oo(n))
            } catch (e) {
                co(Mr.API_ERROR, e, {
                    extJSON: {
                        position: "setCookieToHighestDomain"
                    }
                })
            }
        },
        mo = function(e) {
            var t = e.index,
                n = e.main;
            sessionStorage.setItem(gr, JSON.stringify({
                index: t,
                main: n
            }))
        },
        Eo = function(e) {
            return e ? "".concat(e.split(".")[0], ".tt.").concat(function() {
                var e = ei();
                try {
                    return !!(e.Shopify && e.Shopify.shop && e.Shopify.shop.indexOf(".myshopify.com") > 0 || e.name && e.name.startsWith("web-pixel-sandbox-CUSTOM-shopify"))
                } catch (e) {}
                return !1
            }() ? 0 : wo()) : ""
        },
        bo = function(e) {
            var t = e.split(".");
            return t.length >= 3 && t.includes("tt") && !isNaN(Number(t[2])) && Number(t[2]) > 0
        },
        wo = function() {
            if (_o) return _o;
            var e = go(_r);
            return e && bo(e) ? Number(e.split(".")[2]) : 0
        },
        Io = function(e, t, n) {
            return e !== _r || bo(t) || (t = Eo(t)), document.cookie = "".concat(e, "=").concat(t).concat(Oo(n)), t === go(e)
        },
        To = function() {
            function e() {
                i(this, e)
            }
            return a(e, null, [{
                key: "interceptCookies",
                value: function() {
                    var e = Object.getOwnPropertyDescriptor(Document.prototype, "cookie");
                    if (!e || e.configurable) {
                        var t = this;
                        Object.defineProperty(document, "cookie", Object.assign(Object.assign({}, e), {
                            set: function(n) {
                                if (e && "function" == typeof e.set) try {
                                    var r = go(_r),
                                        i = e.set.call(this, n);
                                    if (t.ttpCookieRegex.test(n)) {
                                        var o = go(_r);
                                        ao(Mr.CUSTOM_INFO, {
                                            custom_name: "cookie_set",
                                            extJSON: {
                                                message: "".concat(r, "||").concat(o),
                                                stack: (new Error).stack || ""
                                            }
                                        })
                                    }
                                    return i
                                } catch (e) {
                                    co(Mr.CUSTOM_ERROR, e, {
                                        custom_name: "cookie_set_error"
                                    })
                                }
                            }
                        }))
                    }
                }
            }, {
                key: "interceptSessionStorage",
                value: function() {
                    var e = sessionStorage.setItem.bind(sessionStorage),
                        t = sessionStorage.clear.bind(sessionStorage),
                        n = sessionStorage.removeItem.bind(sessionStorage);
                    sessionStorage.clear = function() {
                        try {
                            var e = t();
                            return ao(Mr.CUSTOM_INFO, {
                                custom_name: "sessionStorage_clear",
                                extJSON: {
                                    stack: (new Error).stack || ""
                                }
                            }), e
                        } catch (e) {
                            co(Mr.CUSTOM_ERROR, e, {
                                custom_name: "sessionStorage_clear_error"
                            })
                        }
                    }, sessionStorage.setItem = function(t, n) {
                        try {
                            var r = sessionStorage.getItem(t),
                                i = e(t, n);
                            return t === vr && ao(Mr.CUSTOM_INFO, {
                                custom_name: "sessionStorage_set",
                                extJSON: {
                                    message: "".concat(r, "||").concat(n),
                                    stack: (new Error).stack || ""
                                }
                            }), i
                        } catch (e) {
                            co(Mr.CUSTOM_ERROR, e, {
                                custom_name: "sessionStorage_set_error"
                            })
                        }
                    }, sessionStorage.removeItem = function(e) {
                        try {
                            var t = n(e);
                            return e === vr && ao(Mr.CUSTOM_INFO, {
                                custom_name: "sessionStorage_remove",
                                extJSON: {
                                    stack: (new Error).stack || ""
                                }
                            }), t
                        } catch (e) {
                            co(Mr.CUSTOM_ERROR, e, {
                                custom_name: "sessionStorage_remove_error"
                            })
                        }
                    }
                }
            }, {
                key: "listenPageLeave",
                value: function() {
                    window.addEventListener("beforeunload", (function() {
                        try {
                            var e = go(_r);
                            ao(Mr.CUSTOM_INFO, {
                                custom_name: "track_beforeunload",
                                extJSON: {
                                    message: "".concat(e)
                                }
                            })
                        } catch (e) {}
                    }))
                }
            }]), e
        }();
    lo = To, To.ttpCookieRegex = /_ttp=/, To.init = bi((function() {
        try {
            lo.interceptCookies(), lo.interceptSessionStorage(), lo.listenPageLeave()
        } catch (e) {
            co(Mr.API_ERROR, e, {
                custom_name: "StorageObserver_init_error"
            })
        }
    }));
    var Oo = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.assign({}, {
                    path: "/"
                }, e);
            "number" == typeof t.expires && (t.expires = new Date(Date.now() + 864e5 * t.expires)), t.expires instanceof Date && (t.expires = t.expires.toUTCString());
            var n = "";
            for (var r in t) t[r] && (n += "; ".concat(r), !0 !== t[r] && (n += "=".concat(t[r].split(";")[0])));
            return n
        },
        So = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cr(),
                i = {
                    path: n,
                    expires: r
                };
            yo(e, t, i)
        };

    function No() {
        try {
            var e = document.readyState;
            return "loading" == e ? wr.LOADING : "interactive" == e ? wr.INTERACTIVE : "complete" == e ? wr.COMPLETE : wr.UNKNOWN
        } catch (e) {
            return wr.UNKNOWN
        }
    }

    function Ro(e) {
        return new Promise((function(t, n) {
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0, r.src = e;
            var i = document.getElementsByTagName("script")[0];
            i && i.parentNode ? i.parentNode.insertBefore(r, i) : n("none element"), r.onload = function() {
                t(!0)
            }, r.onerror = n
        }))
    }
    var Ao = function() {
            var t = r(e().mark((function t(n) {
                var r, i = arguments;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!((r = i.length > 1 && void 0 !== i[1] ? i[1] : 1) >= 0)) {
                                e.next = 13;
                                break
                            }
                            return e.prev = 2, e.next = 5, Ro(n);
                        case 5:
                            return e.abrupt("return", Promise.resolve(!0));
                        case 8:
                            return e.prev = 8, e.t0 = e.catch(2), e.abrupt("return", Ao.call(null, n, r - 1));
                        case 11:
                            e.next = 14;
                            break;
                        case 13:
                            throw Error;
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [2, 8]
                ])
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        Po = function(e) {
            return "function" == typeof Promise.allSettled ? Promise.allSettled(e) : function(e) {
                var t = new Array(e.length),
                    n = 0;
                return new Promise((function(r, i) {
                    for (var o = function(i) {
                            var o = e[i];
                            o && "function" == typeof o.then ? o.then((function(o) {
                                t[i] = {
                                    status: "fulfilled",
                                    value: o
                                }, ++n === e.length && r(t)
                            })).catch((function(o) {
                                t[i] = {
                                    status: "rejected",
                                    reason: o
                                }, ++n === e.length && r(t)
                            })) : (t[i] = {
                                status: "fulfilled",
                                value: o
                            }, ++n === e.length && r(t))
                        }, a = 0; a < e.length; a++) o(a)
                }))
            }(e)
        },
        Co = ["COP", "USD", "DZD", "TWD", "QAR", "VES", "NGN", "EGP", "IDR", "HNL", "ISK", "CRC", "PEN", "AED", "GBP", "BOB", "DKK", "CAD", "PKR", "MXN", "HUF", "VND", "KWD", "RON", "BIF", "MYR", "ZAR", "SAR", "NOK", "SGD", "HKD", "AUD", "CHF", "KRW", "CNY", "TRY", "BDT", "NZD", "CLP", "THB", "EUR", "ARS", "NIO", "KZT", "GTQ", "RUB", "SEK", "MOP", "PYG", "INR", "JPY", "CZK", "BRL", "MAD", "PLN", "PHP", "KES", "ILS"];

    function ko(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = t || Co;
        return n.includes(e)
    }

    function Mo(e) {
        return !isNaN(e) && e >= 0
    }
    var Do = String.fromCharCode.bind(String),
        Lo = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
        xo = function(e) {
            if (e.length < 2) {
                var t = e.charCodeAt(0);
                return t < 128 ? e : t < 2048 ? Do(192 | t >>> 6) + Do(128 | 63 & t) : Do(224 | t >>> 12 & 15) + Do(128 | t >>> 6 & 63) + Do(128 | 63 & t)
            }
            var n = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
            return Do(240 | n >>> 18 & 7) + Do(128 | n >>> 12 & 63) + Do(128 | n >>> 6 & 63) + Do(128 | 63 & n)
        },
        jo = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        Uo = function(e) {
            return function(e) {
                return e.replace(/=/g, "").replace(/[+\/]/g, (function(e) {
                    return "+" === e ? "-" : "_"
                }))
            }(function(e) {
                for (var t, n, r, i, o = "", a = e.length % 3, c = 0; c < e.length;) {
                    if ((n = e.charCodeAt(c++)) > 255 || (r = e.charCodeAt(c++)) > 255 || (i = e.charCodeAt(c++)) > 255) throw new TypeError("invalid character found");
                    o += Lo[(t = n << 16 | r << 8 | i) >> 18 & 63] + Lo[t >> 12 & 63] + Lo[t >> 6 & 63] + Lo[63 & t]
                }
                return a ? o.slice(0, a - 3) + "===".substring(a) : o
            }(function(e) {
                return e.replace(jo, xo)
            }(e)))
        },
        Fo = function(e) {
            return t = JSON.stringify(e), Uo(t);
            var t
        },
        Bo = function() {
            var e = ni();
            return "object" === t(e) && e._i ? e._i : {}
        },
        qo = function(e, t) {
            var n = Bo() || {};
            Object.keys(n).forEach((function(r) {
                var i = n[r];
                i._init || i.push([e].concat(t))
            }))
        },
        Go = function(e, t, n) {
            var r = (Bo() || {})[e];
            if (r) {
                if (r._init) return;
                r.push([t].concat(n))
            }
        },
        Vo = function(e, t) {
            try {
                var n = Ui(Jr, e, t) || void 0,
                    r = Ui("ext_params", e, t) || void 0,
                    i = Ui(Wr, e, t) || void 0,
                    o = parseInt(Ui("ttuts", e, t), 10) || void 0,
                    a = i ? JSON.parse(i) : {},
                    c = a.log_extra,
                    u = void 0 === c ? void 0 : c,
                    s = a.idc,
                    l = void 0 === s ? void 0 : s,
                    f = a.cid,
                    d = void 0 === f ? void 0 : f;
                return {
                    callback: n,
                    ext_params: r,
                    log_extra: u,
                    creative_id: d,
                    idc: l,
                    ttuts: o,
                    ad_info_from: (u || l || d) && "url"
                }
            } catch (e) {
                return {}
            }
        },
        Ho = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Jo = function() {
            function e(t) {
                i(this, e), this.userFormatInfo = {}, this.userFormatInfoV2 = {}, this.enableAdTracking = !0, this.offsiteAdInfo = {}, this.tt_test_id = "", this.signalDiagnosticLabels = Object.assign({}, $n), this.init(t)
            }
            return a(e, [{
                key: "init",
                value: function(e) {
                    this.userInfo = {}, this.adInfo = {}, this.appInfo = {}, this.pageInfo = {
                        url: "",
                        referrer: ""
                    }, this.pageSign = {
                        sessionId: "",
                        pageId: ""
                    }, this.libraryInfo = e
                }
            }, {
                key: "getAllData",
                value: function() {
                    return {
                        userInfo: this.userInfo,
                        adInfo: this.adInfo,
                        appInfo: this.appInfo,
                        libraryInfo: this.libraryInfo,
                        pageInfo: this.pageInfo,
                        pageSign: this.pageSign,
                        signalType: this.signalType,
                        userFormatInfo: this.userFormatInfo,
                        userFormatInfoV2: this.userFormatInfoV2,
                        enableAdTracking: this.enableAdTracking,
                        offsiteAdInfo: this.offsiteAdInfo,
                        tt_test_id: this.tt_test_id
                    }
                }
            }, {
                key: "getLibraryInfo",
                value: function() {
                    return this.libraryInfo
                }
            }, {
                key: "setSignalType",
                value: function(e) {
                    this.signalType = e
                }
            }, {
                key: "getSignalType",
                value: function() {
                    return this.signalType
                }
            }, {
                key: "setTestID",
                value: function(e) {
                    this.tt_test_id = e
                }
            }, {
                key: "getTestID",
                value: function() {
                    return this.tt_test_id
                }
            }, {
                key: "setEnableAdTracking",
                value: function(e) {
                    this.enableAdTracking = e
                }
            }, {
                key: "getEnableAdTracking",
                value: function() {
                    return this.enableAdTracking
                }
            }, {
                key: "setOffsiteAdInfo",
                value: function(e) {
                    this.offsiteAdInfo = Object.assign({}, this.offsiteAdInfo, e)
                }
            }, {
                key: "getOffsiteAdInfo",
                value: function() {
                    return this.offsiteAdInfo
                }
            }, {
                key: "getUserFormatInfo",
                value: function() {
                    return this.userFormatInfo
                }
            }, {
                key: "setUserFormatInfo",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.assign(this.userFormatInfo, e)
                }
            }, {
                key: "getUserFormatInfoV2",
                value: function() {
                    return this.userFormatInfoV2
                }
            }, {
                key: "setUserFormatInfoV2",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.assign(this.userFormatInfoV2, e)
                }
            }, {
                key: "setUserInfo",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.assign(this.userInfo, e)
                }
            }, {
                key: "setUserInfoWithoutIdentifyPlugin",
                value: function(e) {
                    e && Object.assign(this.userInfo, e)
                }
            }, {
                key: "getUserInfo",
                value: function() {
                    return this.userInfo
                }
            }, {
                key: "getAdInfo",
                value: function() {
                    return this.adInfo
                }
            }, {
                key: "setAdInfo",
                value: function(e) {
                    e && (this.adInfo ? this.adInfo = Object.assign({}, this.adInfo, e) : this.adInfo = e)
                }
            }, {
                key: "getAppInfo",
                value: function() {
                    return this.appInfo
                }
            }, {
                key: "setAppInfo",
                value: function(e) {
                    e && (this.appInfo = Object.assign({}, this.appInfo, e))
                }
            }, {
                key: "getPageInfo",
                value: function() {
                    return this.pageInfo
                }
            }, {
                key: "getPageSign",
                value: function() {
                    return this.pageSign
                }
            }, {
                key: "setPageInfo",
                value: function(e, t) {
                    var n = Object.assign({}, this.pageInfo),
                        r = Object.assign({}, this.pageSign);
                    if (n.url !== e) {
                        var i = n.url;
                        if (void 0 !== n.url && (n.referrer = n.url), void 0 !== t && (n.referrer = t), void 0 !== r.pageIndex) {
                            var o = r.pageIndex,
                                a = o.index,
                                c = o.sub,
                                u = o.main;
                            r.pageIndex = {
                                index: ++a,
                                sub: ++c,
                                main: u
                            }
                        }
                        return n.url = e, this.pageInfo = n, this.pageSign = r, {
                            from: i,
                            pageIndex: r.pageIndex
                        }
                    }
                }
            }, {
                key: "setPageInfoData",
                value: function(e) {
                    this.pageInfo = Object.assign({}, this.pageInfo, e)
                }
            }, {
                key: "getSessionIdFromCache",
                value: function() {
                    return null
                }
            }, {
                key: "setSessionIdToCache",
                value: function(e) {}
            }, {
                key: "setSignalDiagnosticLabels",
                value: function(e) {
                    Object.assign(this.signalDiagnosticLabels, e)
                }
            }, {
                key: "getSignalDiagnosticLabels",
                value: function() {
                    return this.signalDiagnosticLabels
                }
            }, {
                key: "getPageId",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "".concat(Date.now());
                    return "".concat(e, "-").concat(wi(5))
                }
            }, {
                key: "getPageViewId",
                value: function() {
                    var e = this.pageSign,
                        t = e.pageId,
                        n = e.pageIndex;
                    return "".concat(t).concat(n ? ".".concat(n.main, ".").concat(n.sub) : "")
                }
            }, {
                key: "getVariationId",
                value: function() {
                    return ""
                }
            }, {
                key: "isLegacyPixel",
                value: function(e) {
                    return !1
                }
            }, {
                key: "initPageSign",
                value: function() {
                    var e = this.getSessionIdFromCache();
                    null === e && (e = or("sessionId"), this.setSessionIdToCache(e));
                    var t = {
                        sessionId: e,
                        pageId: or("pageId")
                    };
                    this.pageSign = t
                }
            }]), e
        }();
    Jo = Ho([R.injectable()], Jo);
    var Wo = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ko = function() {
            function e() {
                i(this, e), this.events = {}
            }
            return a(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this.events[e] || [];
                    n.push(t), this.events[e] = n
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = this.events[e] || [];
                    i.forEach((function(e) {
                        return e.apply(void 0, n)
                    }))
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = this.events[e] || [];
                    this.events[e] = n.filter((function(e) {
                        return e !== t
                    }))
                }
            }]), e
        }();
    Ko = Wo([R.injectable()], Ko);
    var Yo = function() {
        function e(t) {
            i(this, e), this.pixelCode = "", this.loaded = !1, this.status = 1, this.name = "", this.advertiserID = "", this.setupMode = 0, this.partner = "", this.reporterInfo = {}, this.plugins = {}, this.options = {}, this.rules = [], this.pixelCode = t
        }
        return a(e, [{
            key: "getParameterInfo",
            value: function() {
                return Promise.resolve({
                    pixelCode: this.pixelCode,
                    name: this.name,
                    status: this.status,
                    setupMode: this.setupMode,
                    advertiserID: this.advertiserID,
                    partner: this.partner,
                    is_onsite: !1,
                    advancedMatchingAvailableProperties: {}
                })
            }
        }, {
            key: "getReporterId",
            value: function() {
                return ""
            }
        }, {
            key: "getReporterUniqueLoadId",
            value: function() {
                return ""
            }
        }, {
            key: "getReporterPartner",
            value: function() {}
        }, {
            key: "getReporterInfo",
            value: function() {
                return {
                    reporter: {}
                }
            }
        }, {
            key: "getReportResultSet",
            value: function() {
                return []
            }
        }, {
            key: "isOnsite",
            value: function() {
                return !1
            }
        }, {
            key: "isPartnerReporter",
            value: function() {
                return !1
            }
        }, {
            key: "setAdvancedMatchingAvailableProperties",
            value: function(e) {}
        }, {
            key: "clearHistory",
            value: function() {}
        }, {
            key: "page",
            value: function(e) {}
        }, {
            key: "track",
            value: function(e, t, n) {
                return Promise.resolve(null)
            }
        }, {
            key: "getUserInfo",
            value: function(e) {
                return {}
            }
        }, {
            key: "getReporterMatchedUserFormatInfo",
            value: function() {
                return {}
            }
        }, {
            key: "getReporterMatchedUserFormatInfoV2",
            value: function() {
                return {}
            }
        }, {
            key: "assemblyData",
            value: function() {
                return {
                    event: "",
                    message_id: "",
                    event_id: "",
                    is_onsite: !1,
                    properties: {},
                    context: {
                        ad: {},
                        device: {},
                        library: {
                            name: "",
                            version: ""
                        },
                        page: {
                            url: ""
                        },
                        pageview_id: "",
                        session_id: "",
                        variation_id: "",
                        user: {}
                    },
                    partner: "",
                    timestamp: ""
                }
            }
        }, {
            key: "assemblySelfHostData",
            value: function() {
                return this.assemblyData()
            }
        }, {
            key: "trackSync",
            value: function() {}
        }, {
            key: "getReportEventHistoryKey",
            value: function(e) {
                return "tiktok"
            }
        }, {
            key: "hasReportEventHistory",
            value: function(e, t) {
                return !1
            }
        }]), e
    }();
    new Yo("empty");
    var Xo = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Qo = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this)).reporterInfo = {}, o.options = {}, o.plugins = {}, o.rules = [], o.reportEventHistory = {}, o.reportResultSet = [], o.selfHostConfig = {}, o.currentHref = "", o.advancedMatchingAvailableProperties = {
                    external_id: !0,
                    partner_id: !0
                }, o.reportService = r, o.context = e, o
            }
            return a(n, [{
                key: "getParameterInfo",
                value: function() {
                    var e = this;
                    return this.getInstance().then((function() {
                        var t = e.reporterInfo,
                            n = t.name,
                            r = void 0 === n ? "" : n,
                            i = t.status,
                            o = void 0 === i ? 1 : i,
                            a = t.setupMode,
                            c = void 0 === a ? 0 : a,
                            u = t.advertiserID,
                            s = void 0 === u ? "" : u,
                            l = t.is_onsite,
                            f = void 0 !== l && l;
                        return {
                            pixelCode: e.getReporterId(),
                            name: r,
                            status: o,
                            setupMode: c,
                            advertiserID: s.toString(),
                            partner: e.getReporterPartner() || "",
                            is_onsite: f,
                            advancedMatchingAvailableProperties: e.advancedMatchingAvailableProperties,
                            rules: e.rules
                        }
                    }))
                }
            }, {
                key: "getInstance",
                value: function() {
                    return this.pixelPromise = Promise.resolve(this)
                }
            }, {
                key: "getReporterId",
                value: function() {
                    return ""
                }
            }, {
                key: "getReporterUniqueLoadId",
                value: function() {
                    return "".concat(this.getReporterId())
                }
            }, {
                key: "getReporterPartner",
                value: function() {}
            }, {
                key: "getReporterInfo",
                value: function() {
                    return {
                        pixel: {
                            code: this.getReporterId()
                        }
                    }
                }
            }, {
                key: "setAdvancedMatchingAvailableProperties",
                value: function(e) {
                    this.advancedMatchingAvailableProperties = Object.assign({}, this.advancedMatchingAvailableProperties, e)
                }
            }, {
                key: "isOnsite",
                value: function() {
                    return !1
                }
            }, {
                key: "isPartnerReporter",
                value: function() {
                    return !1
                }
            }, {
                key: "getReportResultSet",
                value: function() {
                    return this.reportResultSet
                }
            }, {
                key: "getUserInfo",
                value: function(e) {
                    return {}
                }
            }, {
                key: "getReporterMatchedUserFormatInfo",
                value: function() {
                    return {}
                }
            }, {
                key: "getReporterMatchedUserFormatInfoV2",
                value: function() {
                    return {}
                }
            }, {
                key: "getReportEventHistoryKey",
                value: function(e) {
                    return "tiktok"
                }
            }, {
                key: "clearHistory",
                value: function() {
                    this.reportEventHistory = {}
                }
            }, {
                key: "pushReport",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tiktok";
                    this.reportEventHistory[t] || (this.reportEventHistory[t] = []), this.reportEventHistory[t].push(e)
                }
            }, {
                key: "hasReportEventHistory",
                value: function(e, t) {
                    var n = this.getReportEventHistoryKey(t);
                    return this.reportEventHistory[n] ? !(!Pr.includes(e) || !this.reportEventHistory[n].includes(e)) : (this.reportEventHistory[n] = [], !1)
                }
            }, {
                key: "page",
                value: function() {}
            }, {
                key: "track",
                value: function(e, t, n, r, i) {
                    var o = this,
                        a = r || Nr.TRACK,
                        c = i || Bn.defaultReport;
                    return !this.reportService || this.hasReportEventHistory(e, c) ? Promise.resolve(null) : (this.pushReport(e, this.getReportEventHistoryKey(c)), Po(this.reportService.reportPreposition || []).then((function() {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                var r = {
                                    taskName: window.ttq._pf_tn || "track_after_report_preposition",
                                    functionName: window.ttq._pf_tn && "track_after_report_preposition",
                                    start: performance.now()
                                };
                                window.ttq._pf_tn || (window.ttq._pf_tn = "track_after_report_preposition")
                            }
                        } catch (e) {}
                        var i = o.getReporterId(),
                            u = o.trackSync(i, e, t, n, a, c);
                        o.trackPostTask({
                            reporterId: i,
                            eventType: e,
                            properties: t,
                            eventConfig: n,
                            type: a,
                            reportType: c,
                            reportData: u
                        });
                        var s = {
                            reporterId: i,
                            eventType: e,
                            properties: t,
                            eventConfig: n,
                            type: a,
                            reportType: c,
                            reportData: u
                        };
                        try {
                            window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r), "track_after_report_preposition" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                        return Promise.resolve(s)
                    })))
                }
            }, {
                key: "getEventType",
                value: function(e) {
                    return e
                }
            }, {
                key: "trackPostTask",
                value: function(e) {}
            }, {
                key: "trackSync",
                value: function(e, t, n, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nr.TRACK,
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Bn.defaultReport,
                        a = arguments.length > 6 ? arguments[6] : void 0,
                        c = i !== Nr.SELFHOST ? this.assemblyData(e, t, n, r, i) : this.assemblySelfHostData(e, t, n, r, i),
                        u = a || fo(i, e);
                    if (null !== u && this.reportService) return this.emit("beforeReport", e, t, c, r, i), this.reportResultSet.push(this.reportService.report(u, c, o)), c
                }
            }, {
                key: "handlePropertiesToOptions",
                value: function(e, t) {
                    var n = {};
                    return t.forEach((function(t) {
                        n[t] = e[t], delete e[t]
                    })), n
                }
            }, {
                key: "assemblyData",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    arguments.length > 4 && void 0 !== arguments[4] || Nr.TRACK;
                    var i = this.context.getAllData(),
                        o = i.adInfo,
                        a = i.userInfo,
                        c = i.appInfo,
                        u = i.pageSign,
                        s = i.libraryInfo,
                        l = i.pageInfo,
                        f = i.signalType,
                        d = u.sessionId,
                        p = u.variationId,
                        h = Object.assign({}, n),
                        _ = h && h.pixelMethod || "";
                    h && h.pixelMethod && delete h.pixelMethod;
                    var v = Object.assign({}, s, {
                            version: this.context.isLegacyPixel(e) ? "legacy-".concat(s.version) : s.version
                        }),
                        g = Ii(o, Xn),
                        y = Object.assign({}, g, {
                            device_id: c.device_id,
                            uid: c.user_id
                        }),
                        m = this.handlePropertiesToOptions(h, [Fn.LDU, Fn.EVENTID, Fn.EVENT_ID]),
                        E = this.options.limited_data_use,
                        b = null !== m.limited_data_use && void 0 !== m.limited_data_use ? m.limited_data_use : E;
                    null == b ? delete m.limited_data_use : m.limited_data_use = !!b;
                    var w = r && (r.event_id || r.eventID) || "";
                    m.event_id = w || m.event_id || m.eventID || "", delete m.eventID;
                    var I = this.getReporterInfo();
                    I.pixel && (I.pixel.runtime = eo(), _ && (I.pixel.mode = _));
                    var T = this.getUserInfo(Hn.Manual) || {},
                        O = this.getUserInfo(Hn.ManualV2) || {},
                        S = this.getReporterMatchedUserFormatInfoV2() || {},
                        N = this.getUserInfo(Hn.Auto) || {};
                    N.auto_trigger_type && (Object.assign(h, {
                        auto_trigger_type: N.auto_trigger_type
                    }), delete N.auto_trigger_type), Wi() && Object.assign(h, {
                        android_version: c.android_version,
                        device_model: c.device_model
                    });
                    var R = {};
                    a.anonymous_id && (R.anonymous_id = a.anonymous_id);
                    var A = this.getEventType(t),
                        P = {
                            event: A,
                            event_id: w,
                            message_id: ar(or(hr), e),
                            is_onsite: !!f,
                            timestamp: (new Date).toJSON(),
                            context: Object.assign(Object.assign({
                                ad: y,
                                device: {
                                    platform: c.platform
                                },
                                user: Object.assign({}, R, T, O, N)
                            }, I), {
                                page: Object.assign({}, l),
                                library: Object.assign({}, v),
                                session_id: ar(d, e),
                                pageview_id: ar(this.context.getPageViewId(), this.getReporterUniqueLoadId(), mr),
                                variation_id: p || ""
                            }),
                            _inspection: S,
                            properties: h
                        };
                    return Object.assign(P, m)
                }
            }, {
                key: "assemblySelfHostData",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    return this.assemblyData(e, t, n, r, i)
                }
            }]), n
        }(Ko);
    Qo = Xo([R.injectable()], Qo);
    var zo = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Zo = function() {
            function e(t) {
                var n = t.name,
                    r = t.context,
                    o = t.reporters;
                i(this, e), this.reporters = [], this.context = r, this.reporters = o, this.name = n
            }
            return a(e, [{
                key: "initStart",
                value: function() {}
            }, {
                key: "initEnd",
                value: function() {}
            }, {
                key: "adInfoInitStart",
                value: function() {}
            }, {
                key: "adInfoInitEnd",
                value: function() {}
            }, {
                key: "contextInitStart",
                value: function() {}
            }, {
                key: "contextInitEnd",
                value: function() {}
            }, {
                key: "pageUrlWillChange",
                value: function(e, t) {}
            }, {
                key: "pageUrlDidChange",
                value: function(e, t) {}
            }, {
                key: "pageDidLoad",
                value: function() {}
            }, {
                key: "pageWillLeave",
                value: function(e) {}
            }, {
                key: "pixelSend",
                value: function(e, t, n, r, i) {}
            }, {
                key: "pixelDidMount",
                value: function(e) {}
            }]), e
        }(),
        $o = function(e) {
            u(n, e);
            var t = p(n);

            function n() {
                return i(this, n), t.apply(this, arguments)
            }
            return a(n)
        }(Zo = zo([R.injectable()], Zo)),
        ea = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        ta = function() {
            function e(t, n) {
                i(this, e), this.initialize = !1, this.plugins = [], this.observers = [], this.reporters = [], this.context = t, this.reportService = n
            }
            return a(e, [{
                key: "init",
                value: function(e, t) {
                    this.initContextInfo(e, t), this.initialize = !0
                }
            }, {
                key: "initContextInfo",
                value: function(e, t) {
                    var n = this;
                    this.dispatch(br.CONTEXT_INIT_START), this.initAdInfo(e, t), this.initAppInfo(e, t), this.reportService.pushPreposition(Promise.resolve().then((function() {
                        return n.initUserInfo()
                    }))), this.initTestId(e, t), this.dispatch(br.CONTEXT_INIT_END)
                }
            }, {
                key: "setPageIndex",
                value: function(e) {}
            }, {
                key: "setPageInfo",
                value: function(e, t) {
                    var n = this.context.getPageInfo().url;
                    if (n !== e) {
                        this.dispatch(br.PAGE_URL_WILL_CHANGE, t || n, e);
                        var r = this.context.setPageInfo(e, t || n);
                        (null == r ? void 0 : r.pageIndex) && this.setPageIndex(r.pageIndex), this.dispatch(br.PAGE_URL_DID_CHANGE, e, n)
                    }
                }
            }, {
                key: "initAdInfo",
                value: function(e, t) {}
            }, {
                key: "initOffsiteAdInfo",
                value: function(e) {}
            }, {
                key: "initAppInfo",
                value: function(e, t) {}
            }, {
                key: "initUserInfo",
                value: function() {}
            }, {
                key: "initTestId",
                value: function(e, t) {}
            }, {
                key: "usePlugin",
                value: function(e) {
                    try {
                        if (!this.plugins.find((function(t) {
                                return t.name === e.name
                            }))) {
                            this.plugins.push(e);
                            var t = e.name;
                            if (t) this["".concat(t[0].toLowerCase() + t.slice(1), "Plugin")] = e
                        }
                    } catch (e) {}
                }
            }, {
                key: "useObserver",
                value: function(e) {
                    try {
                        if (!this.observers.find((function(t) {
                                return t.name === e.name
                            }))) {
                            this.observers.push(e);
                            var t = e.name;
                            if (t) this["".concat(t[0].toLowerCase() + t.slice(1))] = e
                        }
                    } catch (e) {}
                }
            }, {
                key: "getPlugin",
                value: function(e) {
                    return this.plugins.find((function(t) {
                        return t.name === e
                    })) || null
                }
            }, {
                key: "getReporter",
                value: function(e) {
                    return this.reporters.find((function(t) {
                        return t.getReporterId() === e
                    }))
                }
            }, {
                key: "instance",
                value: function(e) {
                    var t = this.getReporter(e);
                    return t || (co(Mr.PIXEL_EMPTY, new Error(""), {
                        pixelCode: e
                    }), new Yo(e))
                }
            }, {
                key: "instances",
                value: function() {
                    return this.reporters
                }
            }, {
                key: "identify",
                value: function(e, t) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var n = {
                                taskName: window.ttq._pf_tn || "identify_api_handler",
                                functionName: window.ttq._pf_tn && "identify_api_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "identify_api_handler")
                        }
                    } catch (e) {}
                    var r = Mi(e, t);
                    this.context.setUserInfo(r);
                    try {
                        window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n), "identify_api_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "page",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var t = {
                                taskName: window.ttq._pf_tn || "page_api_handler",
                                functionName: window.ttq._pf_tn && "page_api_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "page_api_handler")
                        }
                    } catch (e) {}
                    e.url !== this.context.getPageInfo().url && (this.setPageInfo(e.url, e.referrer), this.reporters.forEach((function(e) {
                        e.clearHistory()
                    })));
                    var n = Object.assign({}, e);
                    delete n.url, delete n.referrer, this.reporters.forEach((function(e) {
                        e.page(n)
                    }));
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t), "page_api_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "isOnsitePage",
                value: function() {
                    return this.context.getSignalType() === Er.ONSITE || this.reporters.every((function(e) {
                        return e.isOnsite()
                    }))
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var r = {
                                taskName: window.ttq._pf_tn || "track_api_handler",
                                functionName: window.ttq._pf_tn && "track_api_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "track_api_handler")
                        }
                    } catch (e) {}
                    this.instances().forEach((function(r, i) {
                        r.track(e, t, Object.assign({
                            _i: i
                        }, n))
                    }));
                    try {
                        window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r), "track_api_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = this.plugins.concat(this.observers);
                    i.forEach((function(t) {
                        if ("function" == typeof t[e]) try {
                            t[e].apply(t, n)
                        } catch (r) {
                            co(Mr.PLUGIN_ERROR, r, {
                                extJSON: {
                                    plugin_name: t.name,
                                    cycle_name: e,
                                    data: n
                                }
                            })
                        }
                    }))
                }
            }, {
                key: "getAllReportResultSet",
                value: function() {
                    return this.instances().reduce((function(e, t) {
                        return e.concat(t.getReportResultSet())
                    }), [])
                }
            }, {
                key: "resetCookieExpires",
                value: function() {}
            }, {
                key: "enableCookie",
                value: function() {}
            }, {
                key: "disableCookie",
                value: function() {}
            }, {
                key: "enableFirstPartyCookie",
                value: function(e) {}
            }, {
                key: "holdConsent",
                value: function() {}
            }, {
                key: "revokeConsent",
                value: function() {}
            }, {
                key: "grantConsent",
                value: function() {}
            }]), e
        }();
    ta = ea([R.injectable()], ta);
    var na = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        ra = function() {
            function t(e, n) {
                i(this, t), this.reportPreposition = [], this.httpService = e, this.bridgeService = n
            }
            var n;
            return a(t, [{
                key: "pushPreposition",
                value: function(e) {
                    this.reportPreposition.push(e)
                }
            }, {
                key: "report",
                value: (n = r(e().mark((function t(n, r, i) {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Promise.resolve());
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), t)
                }))), function(e, t, r) {
                    return n.apply(this, arguments)
                })
            }]), t
        }();
    ra = na([R.injectable()], ra);
    var ia, oa = function(e) {
        u(n, e);
        var t = p(n);

        function n(e) {
            var r;
            return i(this, n), (r = t.call(this, e)).observers = new Set([]), r
        }
        return a(n, [{
            key: "addObserver",
            value: function(e) {
                this.observers.has(e) || this.observers.add(e)
            }
        }, {
            key: "removeObserver",
            value: function(e) {
                this.observers.delete(e)
            }
        }, {
            key: "notifyObservers",
            value: function(e, t) {
                this.observers.forEach((function(n) {
                    return n.call(t, e)
                }))
            }
        }]), n
    }(Zo);
    ! function(e) {
        e[e.Live = 0] = "Live", e[e.NoRecord = 1] = "NoRecord"
    }(ia || (ia = {}));
    var aa, ca = function(e, t, n) {
            e.isBound(t) ? e.rebind(t).toConstantValue(n) : e.bind(t).toConstantValue(n)
        },
        ua = function(e, t) {
            var n = t.id,
                r = t.type,
                i = void 0 === r ? Zn.PIXEL_CODE : r,
                o = t.info,
                a = t.options,
                u = void 0 === a ? {} : a,
                s = t.plugins,
                l = void 0 === s ? {} : s,
                f = t.rules,
                d = void 0 === f ? [] : f;
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var p = {
                    taskName: window.ttq._pf_tn,
                    functionName: "webReporterFactory",
                    start: performance.now()
                }
            } catch (e) {}
            var h = e.get(kr.TTQ),
                _ = e.get(kr.TTQ_REPORTERS);
            if (!_.some((function(e) {
                    return e.getReporterId() === n
                }))) {
                ca(e, Rr.ID, n), ca(e, Rr.Type, i), ca(e, Rr.Info, o || c({}, i, n)), ca(e, Rr.Options, u), ca(e, Rr.Plugins, l), ca(e, Rr.Rules, d), h.enableFirstPartyCookie((null == o ? void 0 : o.firstPartyCookieEnabled) || !1);
                var v = e.get(kr.REPORTER);
                if (l) {
                    var g = l.AdvancedMatching,
                        y = l.AutoAdvancedMatching,
                        m = {};
                    g && Object.assign(m, g), y && Object.assign(m, y), v.setAdvancedMatchingAvailableProperties(m)
                }
                v.on("beforeReport", (function(e, t, n, r, i) {
                    h.dispatch(br.PIXEL_SEND, e, t, n, r, i)
                })), _.push(v), e.rebind(kr.TTQ_REPORTERS).toConstantValue(_), h.dispatch(br.PIXEL_DID_MOUNT, v);
                try {
                    window.ttq && window.ttq._ppf && (p.end = performance.now(), window.ttq._ppf.push(p))
                } catch (e) {}
                return v
            }
        },
        sa = function(e, t) {
            var n = e.get(kr.TTQ_GLOBAL_OPTIONS) || {};
            ! function(e, t) {
                var n = e || {},
                    r = n._partner,
                    i = n._ttp,
                    o = n._self_host_config,
                    a = n._usd_exchange_rate,
                    c = n._legacy,
                    u = n._cc,
                    s = n._variation_id,
                    l = n._server_unique_id,
                    f = n._currency_list,
                    d = n._plugins,
                    p = n._aam,
                    h = n._auto_config,
                    _ = n._cde;
                Object.assign(t, {
                    partner: r,
                    ttp: i,
                    cc: u,
                    self_host_config: o,
                    usd_exchange_rate: a,
                    legacy: c,
                    variation_id: s,
                    server_unqiue_id: l,
                    currency_list: f,
                    plugins: d,
                    aam: p,
                    auto_config: h,
                    cde: _
                })
            }(t, n), e.isBound(kr.TTQ_GLOBAL_OPTIONS) ? e.rebind(kr.TTQ_GLOBAL_OPTIONS).toConstantValue(n) : e.bind(kr.TTQ_GLOBAL_OPTIONS).toConstantValue(n)
        },
        la = function(e) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                    taskName: window.ttq._pf_tn,
                    functionName: "freezeAPI",
                    start: performance.now()
                }
            } catch (e) {}
            var n = ei(),
                r = ti(),
                i = ni(),
                o = so().pixelCode,
                a = void 0 === o ? "" : o,
                c = ["holdConsent", "revokeConsent", "grantConsent"];
            ["instance", "instances", "loadPixel", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"].forEach((function(t) {
                    Object.defineProperty(i, t, {
                        get: function() {
                            return function() {
                                try {
                                    var n = Array.prototype.slice.call(arguments);
                                    return c.indexOf(t) > -1 && setTimeout((function() {
                                        ao(Mr.CUSTOM_INFO, {
                                            pixelCode: a,
                                            custom_name: t,
                                            custom_enum: JSON.stringify(n)
                                        })
                                    })), e[t].apply(e, n)
                                } catch (e) {
                                    return co(Mr.API_ERROR, e, {
                                        extJSON: {
                                            api: t
                                        }
                                    }), {}
                                }
                            }
                        },
                        set: function() {}
                    })
                })), ["page", "track", "identify"].forEach((function(t) {
                    Object.defineProperty(i, t, {
                        get: function() {
                            return function() {
                                try {
                                    var n = 1 === arguments.length && void 0 === arguments[0] ? [] : Array.prototype.slice.call(arguments);
                                    return c.indexOf(t) > -1 && setTimeout((function() {
                                        var e = JSON.stringify(n.map((function(e) {
                                            return rr(e) ? Object.keys(e) : e
                                        })));
                                        ao(Mr.CUSTOM_INFO, {
                                            pixelCode: a,
                                            custom_name: t,
                                            custom_enum: e
                                        })
                                    })), qo(t, n), e[t].apply(e, n)
                                } catch (e) {
                                    return co(Mr.API_ERROR, e, {
                                        extJSON: {
                                            api: t
                                        }
                                    }), {}
                                }
                            }
                        },
                        set: function() {}
                    })
                })), n[r]._mounted = !0, n[r].initialize = !0,
                function(e) {
                    $r = e
                }(n[r]);
            try {
                window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
            } catch (e) {}
        },
        fa = function(e, t, n) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var r = {
                    taskName: window.ttq._pf_tn,
                    functionName: "handleCache",
                    start: performance.now()
                }
            } catch (e) {}
            var i = function() {
                var e = ni();
                return e && e._i || {}
            }();
            Object.entries(i).forEach((function(r) {
                var i = v(r, 2),
                    o = i[0],
                    a = i[1];
                if (!a._init && ("Tealium" === ai(o) || ri() || a.info)) {
                    if (t.getReporter(o)) uo(Dr.DUPLICATE_PIXEL_CODE);
                    else(n || ua)(e, {
                        id: o,
                        type: Zn.PIXEL_CODE,
                        info: a.info,
                        options: a.options,
                        rules: a.rules,
                        plugins: a.plugins
                    });
                    if (a._init = !0, a.length > 0)
                        for (; a.length;) {
                            var c = a.shift();
                            if (c) {
                                var u = g(c),
                                    s = u[0],
                                    l = u.slice(1),
                                    f = t.instance(o);
                                if (f) switch (s) {
                                    case "identify":
                                        t.identify(l[0], l[1]);
                                        break;
                                    case "page":
                                        t.page(l[0]);
                                        break;
                                    case "track":
                                        f.track(l[0], l[1], l[2] || {});
                                        break;
                                    default:
                                        f[s] ? f[s](l[0], l[1], l[2] || {}) : co(Mr.CUSTOM_ERROR, new Error("action not find: ".concat(f[s])))
                                }
                            }
                        }
                }
            })), da(t);
            try {
                window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r))
            } catch (e) {}
        },
        da = function(e) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                    taskName: window.ttq._pf_tn,
                    functionName: "handleGlobalCache",
                    start: performance.now()
                }
            } catch (e) {}
            var n = ni();
            if (n.length > 0)
                for (; n.length;) {
                    var r = n.shift();
                    if (r) {
                        var i = g(r),
                            o = i[0],
                            a = i.slice(1);
                        switch (ci("Tealium") || qo(o, a), o) {
                            case "identify":
                                e.identify(a[0], a[1]);
                                break;
                            case "page":
                                e.page(a[0]);
                                break;
                            case "track":
                                e.track(a[0], a[1], a[2] || {});
                                break;
                            case "enableCookie":
                                e.enableCookie();
                                break;
                            case "disableCookie":
                                e.disableCookie();
                                break;
                            case "holdConsent":
                                e.holdConsent();
                                break;
                            case "revokeConsent":
                                e.revokeConsent();
                                break;
                            case "grantConsent":
                                e.grantConsent()
                        }
                    }
                }
            try {
                window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
            } catch (e) {}
        },
        pa = {
            ViewForm: "ViewContent",
            ViewConsultationPage: "ViewContent",
            ViewDownloadPage: "ViewContent",
            Checkout: "PlaceAnOrder",
            Purchase: "CompletePayment",
            Registration: "CompleteRegistration",
            AddBilling: "AddPaymentInfo",
            StartCheckout: "InitiateCheckout",
            ClickInDownloadPage: "ClickButton",
            ClickInConsultationPage: "ClickButton",
            ClickForm: "ClickButton",
            ClickToDownload: "Download",
            Consult: "Contact",
            ConsultByPhone: "Contact"
        },
        ha = ["event_experiment", "dynamic_parameter_config", "eb_version", "tf"],
        _a = function(e) {
            var t;
            return e.context.ad = {}, Object.keys((null === (t = null == e ? void 0 : e.context) || void 0 === t ? void 0 : t.user) || {}).forEach((function(t) {
                e.context.user[t] = ""
            })), e
        },
        va = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return e.forEach((function(e) {
                t.hasOwnProperty(e) && (n[e] = t[e], delete t[e])
            })), n
        },
        ga = function(e) {
            u(r, e);
            var n = p(r);

            function r(e) {
                var t;
                i(this, r);
                var o = e.id,
                    a = e.type,
                    u = e.isOnsitePage,
                    s = e.context,
                    l = e.reporterInfo,
                    f = e.ttqOptions,
                    d = e.reportService,
                    p = e.plugins,
                    h = void 0 === p ? {} : p,
                    _ = e.rules,
                    v = void 0 === _ ? [] : _,
                    g = e.options,
                    y = void 0 === g ? {} : g;
                return (t = n.call(this, s, d)).ttp = "", t.loaded = !1, t.id = o, t.pixelCode = o, t.type = a, t.isOnsitePage = u, t.options = y || {}, t.plugins = h || {}, t.rules = v || [], t.reporterInfo = Object.assign(l || {}, c({}, a, o)), t.ttp = f.ttp || "", t.currency_list = f.currency_list || null, t.ttqPartner = f.partner || "", t.selfHostConfig = f.self_host_config || {}, t.pixelPromise = t.getInstance(), t
            }
            return a(r, [{
                key: "identify",
                value: function(e, t) {
                    var n = Mi(e, t);
                    this.context.setUserInfo(n)
                }
            }, {
                key: "getReporterId",
                value: function() {
                    return this.id || ""
                }
            }, {
                key: "getReporterUniqueLoadId",
                value: function() {
                    return "".concat(this.reporterInfo.loadId, "-").concat(this.getReporterId())
                }
            }, {
                key: "getReporterPartner",
                value: function() {
                    var e;
                    return (null === (e = this.reporterInfo) || void 0 === e ? void 0 : e.partner) || ""
                }
            }, {
                key: "setPixelInfo",
                value: function(e, t, n) {
                    var r = this.type;
                    this.reporterInfo = Object.assign(this.reporterInfo, Object.assign({}, e), c({}, r, this.getReporterId())), t && (this.rules = t), n && (this.plugins = n)
                }
            }, {
                key: "getInstance",
                value: function() {
                    return Promise.resolve(this)
                }
            }, {
                key: "getReporterInfo",
                value: function() {
                    return this.reporterInfo.pixelCode ? _(s(r.prototype), "getReporterInfo", this).call(this) : {
                        shop_id: this.reporterInfo.shopId,
                        eventSourceId: this.reporterInfo.eventSourceId
                    }
                }
            }, {
                key: "getUserInfo",
                value: function(e) {
                    var t = this.context.getUserInfo(),
                        n = Ti(t, Object.assign({}, this.advancedMatchingAvailableProperties));
                    switch (e) {
                        case Hn.Manual:
                            return Ti(this.isPartnerReporter() ? n : t, {
                                external_id: !0,
                                email: !0,
                                phone_number: !0
                            });
                        case Hn.ManualV2:
                            return Ti(this.isPartnerReporter() ? n : t, {
                                first_name: !0,
                                last_name: !0,
                                city: !0,
                                state: !0,
                                country: !0,
                                zip_code: !0,
                                partner_id: !0
                            });
                        case Hn.Auto:
                            var r = Ti(n, {
                                external_id: !0,
                                auto_email: !0,
                                auto_phone_number: !0
                            });
                            return Object.assign(r, (r.auto_email || r.auto_phone_number) && t.auto_trigger_type ? {
                                auto_trigger_type: t.auto_trigger_type
                            } : {});
                        default:
                            return n
                    }
                }
            }, {
                key: "getReporterMatchedUserFormatInfo",
                value: function() {
                    var e = this.context.getUserFormatInfo(),
                        t = function(e, t) {
                            var n = {
                                identity_params: {}
                            };
                            return 0 === Object.keys(e).length ? {} : (Object.entries(t).forEach((function(t) {
                                var r = v(t, 2),
                                    i = r[0];
                                if (r[1])
                                    if (e[i] && e[i].length) {
                                        var o = e[i] || [Gn.EMPTY_VALUE];
                                        n.identity_params[i] = y(o)
                                    } else n.identity_params[i] = [Gn.EMPTY_VALUE]
                            })), n)
                        }(e, this.isPartnerReporter() ? this.advancedMatchingAvailableProperties : {
                            external_id: !0,
                            email: !0,
                            phone_number: !0
                        }),
                        n = Ti(e, {
                            auto_email: !0,
                            auto_phone_number: !0
                        });
                    return Object.keys(n).length > 0 && (t.identity_params || (t.identity_params = {}), Object.assign(t.identity_params, n)), t
                }
            }, {
                key: "getReporterMatchedUserFormatInfoV2",
                value: function() {
                    return function(e, t) {
                        if (0 === Object.keys(e).length) return {};
                        var n = {
                                identity_params: {}
                            },
                            r = {
                                email: ["email_is_hashed", "sha256_email"],
                                phone_number: ["phone_is_hashed", "sha256_phone"],
                                zip_code: ["zip_code"]
                            };
                        return Object.entries(t).forEach((function(t) {
                            var i = v(t, 2),
                                o = i[0];
                            i[1] && r[o] && r[o].forEach((function(t) {
                                if (n.identity_params[t] = [Gn.EMPTY_VALUE], e[t]) {
                                    var r = e[t] || [Gn.EMPTY_VALUE];
                                    n.identity_params && (n.identity_params[t] = y(r))
                                }
                            }))
                        })), n
                    }(this.context.getUserFormatInfoV2(), this.isPartnerReporter() ? this.advancedMatchingAvailableProperties : {
                        external_id: !0,
                        email: !0,
                        phone_number: !0,
                        first_name: !0,
                        last_name: !0,
                        city: !0,
                        state: !0,
                        country: !0,
                        zip_code: !0,
                        partner_id: !0
                    })
                }
            }, {
                key: "isOnsite",
                value: function() {
                    var e;
                    return !!(null === (e = this.reporterInfo) || void 0 === e ? void 0 : e.is_onsite)
                }
            }, {
                key: "isPartnerReporter",
                value: function() {
                    var e = this.getReporterPartner();
                    return !(!e || "None" === e)
                }
            }, {
                key: "getSignalDiagnosticLabels",
                value: function() {
                    var e = this.context.getSignalDiagnosticLabels();
                    if (!e) return Object.assign({}, $n);
                    var t = this.advancedMatchingAvailableProperties,
                        n = t.email,
                        r = t.phone_number,
                        i = t.auto_email,
                        o = t.auto_phone_number;
                    n = !this.isPartnerReporter() || n, r = !this.isPartnerReporter() || r;
                    var a = Ti(e, {
                        raw_email: n,
                        raw_phone: r,
                        hashed_email: n,
                        hashed_phone: r,
                        raw_auto_email: i,
                        raw_auto_phone: o
                    });
                    return Object.assign({}, $n, a)
                }
            }, {
                key: "assemblyData",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nr.TRACK,
                        a = _(s(r.prototype), "assemblyData", this).call(this, e, t, n, i, o);
                    a.is_onsite = this.isOnsitePage.value;
                    var c = ai(e) || this.ttqPartner;
                    c && (a.partner = c), a.signal_diagnostic_labels = this.getSignalDiagnosticLabels();
                    var u = ii();
                    u && (a.context.userAgent = u);
                    var l = No();
                    return l && (a.context.page.load_progress = l), a._inspection = va(ha, a.properties, a._inspection), o !== Nr.PAGE && (a._inspection.ppf = si()), a.context.ad.sdk_env = Bi(), a.context.ad.jsb_status = zi(), o !== Nr.INTERACTION && o !== Nr.PERFORMANCE && o !== Nr.PERFORMANCE_INTERACTION || !1 !== this.context.getEnableAdTracking() || this.isOnsitePage.value || (a.context.user = {}, a.context.ad = this.context.getOffsiteAdInfo(), a.context.ad = Ii(a.context.ad, Xn)), a
                }
            }, {
                key: "page",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = Fi(),
                        n = t.url;
                    n !== this.currentHref && (this.currentHref = n, this.track(Ar, e, {}))
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nr.TRACK,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Bn.defaultReport;
                    return i && i.pixel_code && this.getReporterId() !== i.pixel_code ? Promise.resolve(null) : this.getInstance().then((function() {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                var c = {
                                    taskName: window.ttq._pf_tn || "track_after_reporter_init",
                                    functionName: window.ttq._pf_tn && "track_after_reporter_init",
                                    start: performance.now()
                                };
                                window.ttq._pf_tn || (window.ttq._pf_tn = "track_after_reporter_init")
                            }
                        } catch (e) {}
                        var u = t.getReporterId();
                        if (Lr.includes(e)) return _(s(r.prototype), "track", t).call(t, e, n, i, o, a);
                        var l = Object.assign({}, i);
                        t.selfHostConfig[u] && !i.eventID && (l = Object.assign({}, l, {
                            eventID: ar(or(yr), u)
                        }));
                        try {
                            window.ttq && window.ttq._ppf && (c.end = performance.now(), window.ttq._ppf.push(c), "track_after_reporter_init" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                        return _(s(r.prototype), "track", t).call(t, e, n, l, o, a)
                    }))
                }
            }, {
                key: "getEventType",
                value: function(e) {
                    return pa[e] || e
                }
            }, {
                key: "trackSync",
                value: function(e, n) {
                    var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nr.TRACK,
                        u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Bn.defaultReport,
                        l = arguments.length > 6 ? arguments[6] : void 0;
                    if ("track" === c && ao(Mr.PIXEL_SEND, {
                            pixelCode: e,
                            extJSON: {
                                event: n
                            }
                        }), c === Nr.TRACK) {
                        o && "string" == typeof o.currency && (o.currency = o.currency.toUpperCase());
                        var f = this.context.getTestID();
                        if (f) {
                            var d = this.assemblyData(e, n, o, a);
                            d.tt_test_id = f;
                            var p = _a(d);
                            return null === (i = null == this ? void 0 : this.reportService) || void 0 === i || i.report(l || jr, p, Bn.htmlHttpReport), p
                        }
                        if (o && "object" === t(o)) {
                            var h = o.value,
                                v = o.currency;
                            void 0 === h || Mo(h) || ao(Mr.CUSTOM_ERROR, {
                                pixelCode: e,
                                custom_name: "invalid_value",
                                extJSON: {
                                    event: n,
                                    value: h,
                                    currency: v
                                }
                            }), void 0 === v || ko(v, this.currency_list) || ao(Mr.CUSTOM_ERROR, {
                                pixelCode: e,
                                custom_name: "invalid_currency",
                                extJSON: {
                                    event: n,
                                    value: h,
                                    currency: v
                                }
                            })
                        }
                        return _(s(r.prototype), "trackSync", this).call(this, e, n, o, a, c, u, l)
                    }
                    _(s(r.prototype), "trackSync", this).call(this, e, n, o, a, c, u, l)
                }
            }, {
                key: "trackPostTask",
                value: function(e) {
                    var t = e.reporterId,
                        n = e.eventType,
                        r = e.properties,
                        i = e.eventConfig;
                    Lr.includes(n) || this.selfHostConfig[t] && !this.hasReportEventHistory(n, Bn.htmlHttpReport) && (this.pushReport(n, this.getReportEventHistoryKey(Bn.htmlHttpReport)), this.trackSync(t, n, r, i, Nr.SELFHOST, Bn.htmlHttpReport))
                }
            }, {
                key: "getReportEventHistoryKey",
                value: function(e) {
                    return e === Bn.htmlHttpReport ? this.selfHostConfig[this.getReporterId()] : "tiktok"
                }
            }, {
                key: "assemblySelfHostData",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = arguments.length > 4 ? arguments[4] : void 0,
                        o = this.assemblyData(e, t, n, r, i),
                        a = this.ttp;
                    return a && (o.context.user.ttp = a), o
                }
            }]), r
        }(Qo),
        ya = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        ma = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ea = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a, c, u, s, l, f, d) {
                return i(this, n), t.call(this, {
                    id: e,
                    type: r,
                    isOnsitePage: o,
                    context: a,
                    reporterInfo: c,
                    ttqOptions: u,
                    reportService: s,
                    plugins: l,
                    rules: f,
                    options: d
                })
            }
            return a(n, [{
                key: "getInstance",
                value: function() {
                    var e = this;
                    if (this.pixelPromise) return this.pixelPromise;
                    var t = function(e) {
                        return Bo()[e] || {}
                    }(this.id);
                    return ri() || t && t.info ? (this.loaded = !0, this.pixelPromise = Promise.resolve(this)) : (this.pixelPromise = new Promise((function(t, n) {
                        var r, i, o = function(e) {
                            var t = Fi().url;
                            try {
                                return new URL(e || t)
                            } catch (e) {}
                            return null
                        }();
                        Ao((r = e.id, i = (null == o ? void 0 : o.hostname) || "", "".concat("https://analytics.tiktok.com/i18n/pixel/config.js", "?sdkid=").concat(r, "&hostname=").concat(i))).then((function() {
                            e.loaded = !0, t(e)
                        })).catch((function(t) {
                            e.pixelPromise = null, n(t)
                        }))
                    })), this.pixelPromise)
                }
            }]), n
        }(ga),
        ba = function(e) {
            u(n, e);
            var t = p(n);

            function n() {
                return i(this, n), t.apply(this, arguments)
            }
            return a(n, [{
                key: "getInstance",
                value: function() {
                    return this.pixelPromise = Promise.resolve(this), this.pixelPromise
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return Go(this.getReporterId(), "track", [e, t, n]), Promise.resolve(null)
                }
            }]), n
        }(Ea = ya([R.injectable(), ma(0, R.inject(Rr.ID)), ma(1, R.inject(Rr.Type)), ma(2, R.inject(Rr.IsOnsitePage)), ma(3, R.inject(kr.CONTEXT)), ma(4, R.inject(Rr.Info)), ma(5, R.inject(kr.TTQ_GLOBAL_OPTIONS)), ma(6, R.inject(kr.REPORT_SERVICE)), ma(6, R.optional()), ma(7, R.inject(Rr.Plugins)), ma(7, R.optional()), ma(8, R.inject(Rr.Rules)), ma(8, R.optional()), ma(9, R.inject(Rr.Options)), ma(9, R.optional())], Ea)),
        wa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ia = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ta = function(t) {
            u(c, t);
            var n, o = p(c);

            function c(e, t, n, r, a, u, s, l, f, d, p, h, _, v, g, y, m, E, b, w, I, T, O) {
                var S;
                i(this, c), (S = o.call(this, e, a)).env = l, S.reporters = t, S.cookieService = u, S.consentService = s, S.adService = n, S.appService = r, S.historyObserver = T, S.autoAdvancedMatchingPlugin = d, S.callbackPlugin = p, S.identifyPlugin = h, S.monitorPlugin = f, S.webFLPlugin = _, S.shopifyPlugin = v, S.autoConfigPlugin = g, S.diagnosticsConsolePlugin = y, S.competitorInsightPlugin = m, S.pangleCookieMatchingPlugin = E, S.eventBuilderPlugin = b, S.pagedataPlugin = I, S.enrichIpv6Plugin = w, S.runtimeMeasurementPlugin = O, S.historyObserver && S.useObserver(S.historyObserver), S.autoAdvancedMatchingPlugin && S.usePlugin(S.autoAdvancedMatchingPlugin), S.callbackPlugin && S.usePlugin(S.callbackPlugin), S.identifyPlugin && S.usePlugin(S.identifyPlugin), S.monitorPlugin && S.usePlugin(S.monitorPlugin), S.webFLPlugin && S.usePlugin(S.webFLPlugin), S.shopifyPlugin && S.usePlugin(S.shopifyPlugin), S.autoConfigPlugin && S.usePlugin(S.autoConfigPlugin), S.diagnosticsConsolePlugin && S.usePlugin(S.diagnosticsConsolePlugin), S.competitorInsightPlugin && S.usePlugin(S.competitorInsightPlugin), S.pangleCookieMatchingPlugin && S.usePlugin(S.pangleCookieMatchingPlugin), S.eventBuilderPlugin && S.usePlugin(S.eventBuilderPlugin), S.enrichIpv6Plugin && S.usePlugin(S.enrichIpv6Plugin), S.runtimeMeasurementPlugin && S.usePlugin(S.runtimeMeasurementPlugin), S.monitorPlugin && (oo.info.forEach((function(e) {
                    var t;
                    null === (t = S.monitorPlugin) || void 0 === t || t.info(e.event, e.detail, e.withoutJSB)
                })), oo.error.forEach((function(e) {
                    var t;
                    null === (t = S.monitorPlugin) || void 0 === t || t.error(e.event, e.err, e.detail, e.withoutJSB)
                })), oo.info = [], oo.error = []), S.dispatch(br.INIT_START), S.pagedataPlugin && S.usePlugin(S.pagedataPlugin), S.onPageLoaded(), S.onPageLeave();
                var N = Fi(),
                    R = N.url,
                    A = N.referrer;
                return S.init(R, A), S.setPageInfo(R, A), S.dispatch(br.INIT_END), S
            }
            return a(c, [{
                key: "initAdInfo",
                value: function(e, t) {
                    this.dispatch(br.BEFORE_AD_INFO_INIT_START);
                    var n = po(fr);
                    if (n) this.initAdCache(n);
                    else if (no()) {
                        var r = Vo(e, t);
                        r && (r.creative_id && r.log_extra || r.callback) && (this.dispatch(br.AD_INFO_INIT_START), ho(fr, r), this.setAdInfo(r), this.initOffsiteAdInfo(r))
                    } else this.initBaseAdInfo(e, t)
                }
            }, {
                key: "initAdCache",
                value: function(e) {
                    this.dispatch(br.AD_INFO_INIT_START), e.ad_info_from = "cache", e.ad_info_status = "fulfilled(cache)", this.setAdInfo(e), this.initOffsiteAdInfo(e)
                }
            }, {
                key: "initBaseAdInfo",
                value: function(t, n) {
                    var i = this;
                    this.adService.webBridgeService.jsbridge && this.dispatch(br.AD_INFO_INIT_START), this.reportService.pushPreposition(r(e().mark((function r() {
                        var o;
                        return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, i.adService.getAdInfo(t, n);
                                case 3:
                                    o = e.sent, i.context.setAdInfo(o), i.initOffsiteAdInfo(o), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), co(Mr.INIT_ERROR, e.t0, {
                                        extJSON: {
                                            position: "initAdInfo"
                                        }
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), r, null, [
                            [0, 8]
                        ])
                    })))())
                }
            }, {
                key: "initOffsiteAdInfo",
                value: function(e) {
                    var t = function(e, t) {
                        var n = {};
                        try {
                            var r = e.creative_id,
                                i = (e.callback, e.idc),
                                o = e.convert_id,
                                a = e.ad_info_from,
                                c = e.ad_info_status,
                                u = e.log_extra,
                                s = e.ext_params,
                                l = e.ATTStatus;
                            if (r && (n.creative_id = r), i && (n.idc = i), o && (n.convert_id = o), a && (n.ad_info_from = a), c && (n.ad_info_status = c), s && (n.ext_params = s), l && (n.ATTStatus = l), u) {
                                var f = JSON.parse(u),
                                    d = f.ad_user_agent,
                                    p = f.ad_id,
                                    h = f.rit,
                                    _ = f.ocbs,
                                    v = f.vid,
                                    g = f.idc,
                                    y = f.country_id;
                                p && (n.ad_id = p), h && (n.rit = h), d && (n.ad_user_agent = d), _ && (n.ocbs = _), v && (n.vid = v), g && (n.idc = g), y && (n.country_id = y)
                            }
                            return n
                        } catch (e) {
                            return t && t(e), n
                        }
                    }(e, (function(e) {
                        co(Mr.INIT_ERROR, e, {
                            extJSON: {
                                position: "handleAdInfoOfficial"
                            }
                        })
                    }));
                    this.context.setOffsiteAdInfo(t);
                    var n = function(e, t) {
                        try {
                            var n = e.log_extra,
                                r = e.ttuts;
                            return !Ki() || (Vi(t) ? n ? 1 !== JSON.parse(n).user_tracking_status : null === e.ATTStatus || void 0 === e.ATTStatus || 3 === e.ATTStatus : null == r || 1 !== r)
                        } catch (e) {
                            return !1
                        }
                    }(e, this.env);
                    this.context.setEnableAdTracking(n), this.dispatch(br.AD_INFO_INIT_END, {
                        extJSON: {
                            enabledAdTracking: n
                        }
                    })
                }
            }, {
                key: "initAppInfo",
                value: function(t, n) {
                    var i = this,
                        o = po(dr);
                    o ? this.context.setAppInfo(o) : this.reportService.pushPreposition(r(e().mark((function r() {
                        var o;
                        return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.initBaseAppInfo(t, n);
                                case 2:
                                    return o = e.sent, e.abrupt("return", o);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), r)
                    })))())
                }
            }, {
                key: "initBaseAppInfo",
                value: (n = r(e().mark((function t(n, r) {
                    var i;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.appService.getAppInfo(n, r);
                            case 2:
                                return i = e.sent, this.context.setAppInfo(i), e.abrupt("return", i);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "initTestId",
                value: function(e, t) {
                    if (!this.context.getTestID()) {
                        var n = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            try {
                                var r = Ui("tt_test_id", e, n);
                                return r && r !== t && So("tt_test_id", r, void 0, "session"), r || t
                            } catch (e) {
                                return ""
                            }
                        }(e, go("tt_test_id"), t);
                        this.context.setTestID(n)
                    }
                }
            }, {
                key: "initUserInfo",
                value: function() {
                    this.setCookieInfo()
                }
            }, {
                key: "setPageIndex",
                value: function(e) {
                    e && mo(e)
                }
            }, {
                key: "instance",
                value: function(e) {
                    var t = this.getReporter(e);
                    return t || new ba(e, Zn.PIXEL_CODE, {
                        value: !1
                    }, this.context, {
                        pixelCode: e
                    }, {})
                }
            }, {
                key: "instances",
                value: function() {
                    return this.reporters
                }
            }, {
                key: "page",
                value: function(e) {
                    this.beforeAPIExecution();
                    var t = Fi(),
                        n = t.url,
                        r = t.referrer;
                    _(s(c.prototype), "page", this).call(this, Object.assign({
                        url: (null == e ? void 0 : e.page) || n,
                        referrer: (null == e ? void 0 : e.referrer) || r
                    }, e))
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var r = {
                            taskName: window.ttq._pf_tn,
                            functionName: "web_track_handler",
                            start: performance.now()
                        }
                    } catch (e) {}
                    this.beforeAPIExecution();
                    var i = n.pixel_code;
                    if (void 0 === i && _(s(c.prototype), "track", this).call(this, e, t, n), void 0 !== i) {
                        var o = this.instance(i);
                        o instanceof ba || o.track(e, t, n)
                    }
                    try {
                        window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r))
                    } catch (e) {}
                }
            }, {
                key: "identify",
                value: function(e, t) {
                    this.beforeAPIExecution(), _(s(c.prototype), "identify", this).call(this, e, t)
                }
            }, {
                key: "setAdInfo",
                value: function(e) {
                    this.context.setAdInfo(e)
                }
            }, {
                key: "enableFirstPartyCookie",
                value: function(e) {
                    this.cookieService.enableFirstPartyCookie(e), e && this.setCookieInfo()
                }
            }, {
                key: "enableCookie",
                value: function() {
                    this.cookieService.enableFirstPartyCookie(!0), this.setCookieInfo(), this.cookieService.enableCookie()
                }
            }, {
                key: "disableCookie",
                value: function() {
                    this.cookieService.disableCookie(), this.context.setUserInfoWithoutIdentifyPlugin({
                        anonymous_id: void 0
                    }), this.disablePangleCookie()
                }
            }, {
                key: "holdConsent",
                value: function() {
                    this.consentService.setConsentMode(Qn.HOLD)
                }
            }, {
                key: "revokeConsent",
                value: function() {
                    this.consentService.setConsentMode(Qn.REVOKE)
                }
            }, {
                key: "grantConsent",
                value: function() {
                    this.consentService.setConsentMode(Qn.GRANT)
                }
            }, {
                key: "disablePangleCookie",
                value: function() {
                    this.pangleCookieMatchingPlugin && this.pangleCookieMatchingPlugin.disablePangleCookie()
                }
            }, {
                key: "setAnonymousId",
                value: function(e) {
                    this.cookieService.setAnonymousId(e), this.initUserInfo()
                }
            }, {
                key: "resetCookieExpires",
                value: function() {
                    this.cookieService.resetExpires()
                }
            }, {
                key: "setCookieInfo",
                value: function() {
                    if (this.cookieService.canUseCookie()) {
                        var e = this.cookieService.getAnonymousId();
                        if (e) {
                            var t = {
                                anonymous_id: e
                            };
                            this.context.setUserInfoWithoutIdentifyPlugin(t)
                        }
                    }
                }
            }, {
                key: "onPageLoaded",
                value: function() {
                    var e = this;
                    window.addEventListener("load", (function() {
                        e.dispatch(br.PAGE_DID_LOAD)
                    }), {
                        once: !0
                    })
                }
            }, {
                key: "onPageLeave",
                value: function() {
                    var e = this,
                        t = function() {
                            var t = Date.now();
                            e.dispatch(br.PAGE_WILL_LEAVE, t), e.consentService.updateCache()
                        };
                    window.addEventListener("beforeunload", t, {
                        once: !0
                    }), Ki() && window.addEventListener("onpagehide" in window ? "pagehide" : "unload", t)
                }
            }, {
                key: "beforeAPIExecution",
                value: function() {
                    try {
                        (function(e) {
                            return Fi().url === e.getPageInfo().url
                        })(this.context) || function(e, t) {
                            var n = Fi().url;
                            e.setPageInfo(n, document.referrer), t.forEach((function(e) {
                                e.clearHistory()
                            }))
                        }(this.context, this.reporters),
                        function(e) {
                            return go(_r) === e.getUserInfo().anonymous_id
                        }(this.context) || function(e) {
                            var t = e.getUserInfo().anonymous_id,
                                n = go(_r);
                            t !== n && (e.setUserInfoWithoutIdentifyPlugin({
                                anonymous_id: n
                            }), ao(Mr.CUSTOM_INFO, {
                                custom_name: "undetected_cookie_set",
                                extJSON: {
                                    message: "".concat(t, "||").concat(n)
                                }
                            }))
                        }(this.context)
                    } catch (e) {
                        co(Mr.API_ERROR, e, {
                            extJSON: {
                                position: "beforeAPIExecution"
                            }
                        })
                    }
                }
            }, {
                key: "loadPixel",
                value: function(e, t) {
                    e && (this.reporters.find((function(t) {
                        return t.getReporterId() === e
                    })) ? uo(Dr.DUPLICATE_PIXEL_CODE) : ni().load(e, t || {}))
                }
            }]), c
        }(ta),
        Oa = Ta = wa([R.injectable(), Ia(0, R.inject(kr.CONTEXT)), Ia(1, R.inject(kr.TTQ_REPORTERS)), Ia(2, R.inject(kr.AD_SERVICE)), Ia(3, R.inject(kr.APP_SERVICE)), Ia(4, R.inject(kr.REPORT_SERVICE)), Ia(5, R.inject(kr.COOKIE_SERVICE)), Ia(6, R.inject(kr.CONSENT_SERVICE)), Ia(7, R.inject(kr.ENV)), Ia(8, R.inject(kr.MONITOR_PLUGIN)), Ia(8, R.optional()), Ia(9, R.inject(kr.AUTO_ADVANCED_MATCHING_PLUGIN)), Ia(9, R.optional()), Ia(10, R.inject(kr.CALLBACK_PLUGIN)), Ia(10, R.optional()), Ia(11, R.inject(kr.IDENTIFY_PLUGIN)), Ia(11, R.optional()), Ia(12, R.inject(kr.WEB_FL_PLUGIN)), Ia(12, R.optional()), Ia(13, R.inject(kr.SHOPIFY_PLUGIN)), Ia(13, R.optional()), Ia(14, R.inject(kr.AUTO_CONFIG_PLUGIN)), Ia(14, R.optional()), Ia(15, R.inject(kr.DIAGNOSTICS_CONSOLE_PLUGIN)), Ia(15, R.optional()), Ia(16, R.inject(kr.COMPETITOR_INSIGHT_PLUGIN)), Ia(16, R.optional()), Ia(17, R.inject(kr.PANGLE_COOKIE_MATCHING_PLUGIN)), Ia(17, R.optional()), Ia(18, R.inject(kr.EVENT_BUILDER_PLUGIN)), Ia(18, R.optional()), Ia(19, R.inject(kr.ENRICH_IPV6_PLUGIN)), Ia(19, R.optional()), Ia(20, R.inject(kr.PAGEDATA_PLUGIN)), Ia(20, R.optional()), Ia(21, R.inject(kr.HISTORY_OBSERVER)), Ia(21, R.optional()), Ia(22, R.inject(kr.RUNTIME_MEASUREMENT_PLUGIN)), Ia(22, R.optional())], Ta);
    ! function(e) {
        e.BIND = "bind", e.REBIND = "rebind"
    }(aa || (aa = {}));
    var Sa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Na = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ra = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a, c) {
                var u;
                return i(this, n), (u = t.call(this, e)).setSignalType(c || Er.OFFSITE), u.pageSign = {
                    sessionId: "",
                    pageId: "",
                    variationId: "",
                    pageIndex: {
                        main: -1,
                        sub: -1,
                        index: -1
                    }
                }, u.legacy = o.legacy || [], u.variationId = o.variation_id || "", u.serverUniqueId = o.server_unqiue_id || "", u.reportService = r, u.initPageSign(), Vi(a) && Ki() && (u.enableAdTracking = !1), u.data = f(u), u
            }
            return a(n, [{
                key: "getSessionIdFromCache",
                value: function() {
                    var e = null;
                    try {
                        e = JSON.parse(sessionStorage.getItem(vr) || "")
                    } catch (e) {}
                    return e
                }
            }, {
                key: "setSessionIdToCache",
                value: function(e) {
                    ho(vr, e)
                }
            }, {
                key: "getVariationId",
                value: function() {
                    return this.variationId
                }
            }, {
                key: "isLegacyPixel",
                value: function(e) {
                    return function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        try {
                            return t.includes(e)
                        } catch (e) {
                            return !1
                        }
                    }(e, this.legacy)
                }
            }, {
                key: "assignPageInfo",
                value: function(e) {
                    Object.assign(this.pageInfo, e)
                }
            }, {
                key: "getSessionIndex",
                value: function() {
                    var e = {
                        main: -1,
                        sub: -1,
                        index: -1
                    };
                    try {
                        var t = JSON.parse(sessionStorage.getItem(gr) || "{}");
                        if (t) return Object.assign({}, e, t)
                    } catch (e) {}
                    return e
                }
            }, {
                key: "setUserInfo",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (0 !== Object.keys(t).length) {
                        var n = {};
                        Object.entries(t).forEach((function(t) {
                            var r = v(t, 2),
                                i = r[0],
                                o = r[1];
                            o && (i !== Zr ? n[i] = String(o).trim() : e.setUserInfoWithoutIdentifyPlugin(c({}, Zr, o)))
                        }));
                        var r = ni(),
                            i = null == r ? void 0 : r.getPlugin("Identify");
                        i && this.reportService.pushPreposition(i.handleUserProperties(n, t).then((function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            try {
                                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                    var r = {
                                        taskName: window.ttq._pf_tn || "identify_after_encryption",
                                        functionName: window.ttq._pf_tn && "identify_after_encryption",
                                        start: performance.now()
                                    };
                                    window.ttq._pf_tn || (window.ttq._pf_tn = "identify_after_encryption")
                                }
                            } catch (e) {}
                            var o = t.userProperties,
                                a = t.userDataFormat,
                                c = t.userDataFormatV2;
                            if (o) {
                                Object.assign(e.userInfo, o);
                                var u = e.getUserFormatInfo() || {},
                                    s = e.getUserFormatInfoV2() || {},
                                    l = e.getSignalDiagnosticLabels() || {};
                                if (e.setUserFormatInfo(Object.assign({}, u, a)), e.setUserFormatInfoV2(Object.assign({}, s, c)), e.setSignalDiagnosticLabels(Object.assign({}, l, t.identifierLabel || {})), 0 === Object.keys(e.userInfo).length || 1 === Object.keys(n).length && Object.keys(n).includes("external_id")) return;
                                var f = i.reporters[0] || null,
                                    d = f ? Object.keys(Object.assign({}, f.getUserInfo(Hn.Manual), f.getUserInfo(Hn.Auto))) : [];
                                f && d.length && f.track("EnrichAM", {}, {}, Nr.TRACK)
                            }
                            try {
                                window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r), "identify_after_encryption" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                            } catch (e) {}
                        })).catch((function(e) {
                            co(Mr.API_ERROR, e, {
                                extJSON: {
                                    api: "identify"
                                }
                            })
                        })))
                    }
                }
            }, {
                key: "initPageSign",
                value: function() {
                    var e, t = this.getSessionIdFromCache();
                    null === t && (t = (e = this.serverUniqueId) ? "".concat(e).concat(mr).concat(wi(20)) : or("sessionId"), this.setSessionIdToCache(t));
                    var n, r = this.getPageId((n = t) ? n.split(mr)[0] : ""),
                        i = this.getVariationId(),
                        o = this.getSessionIndex();
                    o.main++, this.pageSign = {
                        sessionId: t,
                        pageId: r,
                        variationId: i,
                        pageIndex: o
                    }
                }
            }]), n
        }(Jo);
    Ra = Sa([R.injectable(), Na(0, R.inject(Rr.WebLibraryInfo)), Na(1, R.inject(kr.REPORT_SERVICE)), Na(2, R.inject(kr.TTQ_GLOBAL_OPTIONS)), Na(3, R.inject(kr.ENV)), Na(3, R.optional()), Na(4, R.inject(Rr.SignalType)), Na(4, R.optional())], Ra);
    var Aa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Pa = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ca = function() {
            function t(e) {
                i(this, t), this.webBridgeService = e
            }
            var n;
            return a(t, [{
                key: "getAdInfo",
                value: (n = r(e().mark((function t(n, r) {
                    var i, o, a;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = this.getAdInfoFromURL(n, r), !this.webBridgeService.jsbridge) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 4, this.webBridgeService.getAdInfo();
                            case 4:
                                e.t0 = e.sent, e.next = 8;
                                break;
                            case 7:
                                e.t0 = {};
                            case 8:
                                return o = e.t0, (a = Object.assign({}, i, o)) && (a.creative_id && a.log_extra || a.callback) && ho(fr, a), e.abrupt("return", a);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "getAdInfoFromURL",
                value: function(e, t) {
                    return Vo(e, t)
                }
            }]), t
        }();
    Ca = Aa([R.injectable(), Pa(0, R.inject(kr.BRIDGE_SERVICE))], Ca);
    var ka = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ma = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Da = function() {
            function t(e) {
                i(this, t), this.webBridgeService = e
            }
            var n;
            return a(t, [{
                key: "getAppInfo",
                value: (n = r(e().mark((function t(n, r) {
                    var i, o, a, c;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((i = this.getAppInfoFromURL(n, r)).platform = Hi(), !Wi()) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 5, Ji();
                            case 5:
                                o = e.sent, a = o.model, c = o.platformVersion, i.device_model = a, i.android_version = c;
                            case 10:
                                return ir(i) || ho(dr, i), e.abrupt("return", i);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "getAppInfoFromURL",
                value: function(e, t) {
                    try {
                        var n = Ui(Wr, e, t),
                            r = n && JSON.parse(n);
                        return {
                            device_id: r.device_id,
                            user_id: r.uid
                        }
                    } catch (e) {
                        return {}
                    }
                }
            }]), t
        }();
    Da = ka([R.injectable(), Ma(0, R.inject(kr.BRIDGE_SERVICE))], Da);
    var La = "ad_analytics_msg",
        xa = function(e) {
            return !!(e.code && e.data && e.ret)
        };

    function ja(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = {};
        try {
            if ("string" == typeof e) n.data = JSON.parse(e);
            else if (xa(e))(n = e).__data && (n.data = n.__data);
            else if (void 0 !== e.code) {
                var r = Object.assign({}, e),
                    i = r.code;
                n.code = i, delete r.code, r.data ? n.data = r.data : n.data = r
            } else n.data = e
        } catch (e) {
            t && co(Mr.JSB_ERROR, e, {
                extJSON: {
                    position: "getCallPromise bridge.call"
                }
            })
        }
        return n
    }
    var Ua, Fa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ba = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        qa = function() {
            function t(e, n) {
                i(this, t), this.env = e, Gi(this.env) && (this.jsbridge = n), this.bridgeTimeout = 400
            }
            var n, o, c, u, s, l, f;
            return a(t, [{
                key: "getAdInfo",
                value: (f = r(e().mark((function t() {
                    var n = this;
                    return e().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.jsbridge) {
                                    t.next = 3;
                                    break
                                }
                                return co(Mr.JSB_ERROR, new Error("tt bridge error when getting ad info"), {
                                    extJSON: {
                                        position: "getAdInfo"
                                    }
                                }), t.abrupt("return", Promise.resolve({}));
                            case 3:
                                return t.abrupt("return", new Promise(function() {
                                    var t = r(e().mark((function t(r) {
                                        var i;
                                        return e().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, n.callAdInfo();
                                                case 3:
                                                    (i = e.sent).ad_info_from = "jsb", i.ad_info_status = i.ad_info_status || "fulfilled", r(i), e.next = 13;
                                                    break;
                                                case 9:
                                                    e.prev = 9, e.t0 = e.catch(0), r({}), co(Mr.JSB_ERROR, e.t0, {
                                                        extJSON: {
                                                            position: "getAdInfo"
                                                        }
                                                    });
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), t, null, [
                                            [0, 9]
                                        ])
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }()));
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function() {
                    return f.apply(this, arguments)
                })
            }, {
                key: "callAdInfo",
                value: (l = r(e().mark((function t() {
                    var n, r;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, this.call("adInfo", {}, Yi() ? 3500 : 5e3);
                            case 3:
                                if ((n = e.sent).data) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", Promise.reject("adInfo no data"));
                            case 6:
                                return r = {
                                    creative_id: n.data.cid,
                                    log_extra: n.data.log_extra
                                }, e.abrupt("return", r);
                            case 10:
                                if (e.prev = 10, e.t0 = e.catch(0), "JSBRIDGE TIMEOUT" !== e.t0) {
                                    e.next = 17;
                                    break
                                }
                                return ao(Mr.CUSTOM_INFO, {
                                    custom_name: "ad_info_init_timeout"
                                }), e.abrupt("return", {
                                    ad_info_status: "timeout"
                                });
                            case 17:
                                return co(Mr.JSB_ERROR, e.t0, {
                                    extJSON: {
                                        position: "getAdInfo"
                                    }
                                }), e.abrupt("return", {});
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [0, 10]
                    ])
                }))), function() {
                    return l.apply(this, arguments)
                })
            }, {
                key: "getAppInfo",
                value: (s = r(e().mark((function t() {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Promise.resolve({}));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), t)
                }))), function() {
                    return s.apply(this, arguments)
                })
            }, {
                key: "send",
                value: (u = r(e().mark((function t(n, r) {
                    var i, o, a, c, u, s, l, f, d, p, h, _;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.jsbridge) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve());
                            case 2:
                                return a = (null === (o = null === (i = null == n ? void 0 : n.context) || void 0 === i ? void 0 : i.ad) || void 0 === o ? void 0 : o.creative_id) || "0", c = Fo(n), u = mi(n), s = {
                                    analytics_message: c,
                                    trackLogData: JSON.stringify(n),
                                    category: "ad_analytics_msg",
                                    tag: La,
                                    label: u
                                }, d = {
                                    eventName: La,
                                    labelName: u,
                                    value: a,
                                    extValue: "0",
                                    extJson: s
                                }, "insight_log_monitor" === u && io() ? (f = "x.reportAppLog", p = {
                                    eventName: "insight_log_monitor",
                                    params: s
                                }, l = this.call("x.reportAppLog", p, this.bridgeTimeout)) : no() || yi(n) ? (f = "sendLog", l = this.call("sendLog", d, this.bridgeTimeout)) : Vi(this.env) ? Ki() && r ? (h = {
                                    eventName: u,
                                    params: s
                                }, f = "sendLogWithAdInfo", l = this.call("sendLogWithAdInfo", h, this.bridgeTimeout)) : (f = "sendLog", l = this.call("sendLog", d, this.bridgeTimeout)) : (_ = {
                                    event_name: u,
                                    version: 2,
                                    properties: s
                                }, f = "track_event", l = this.call("track_event", _, 400)), ao(Mr.CUSTOM_INFO, {
                                    custom_name: "send_report_data",
                                    extJSON: {
                                        api_name: f
                                    }
                                }), e.abrupt("return", l);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return u.apply(this, arguments)
                })
            }, {
                key: "call",
                value: (c = r(e().mark((function t(n) {
                    var r, i, o, a = this,
                        c = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = c.length > 1 && void 0 !== c[1] ? c[1] : {}, i = c.length > 2 && void 0 !== c[2] ? c[2] : 400, o = !(c.length > 3 && void 0 !== c[3]) || c[3], e.abrupt("return", new Promise((function(e, t) {
                                    if (!a.jsbridge) return t("JSBRIDGE ERROR"), void(o && co(Mr.JSB_ERROR, new Error("JSBRIDGE ERROR"), {
                                        extJSON: {
                                            position: "getCallPromise"
                                        }
                                    }));
                                    var c;
                                    i > 0 && (c = window.setTimeout((function() {
                                        t("JSBRIDGE TIMEOUT"), o && co(Mr.JSB_ERROR, new Error("JSBRIDGE TIMEOUT"), {
                                            extJSON: {
                                                position: "getCallPromise",
                                                method: n
                                            }
                                        })
                                    }), i)), a.jsbridge && a.jsbridge.call && a.jsbridge.call(n, r, (function(t) {
                                        var n = ja(t, o);
                                        e(n), window.clearTimeout(c)
                                    }))
                                })));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), t)
                }))), function(e) {
                    return c.apply(this, arguments)
                })
            }, {
                key: "sendAnalyticsEvent",
                value: (o = r(e().mark((function t(n) {
                    var r, i, o, a, c;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.method, i = n.path, o = n.params, a = n.data, e.next = 3, this.call("sendAnalyticsEvent", {
                                    method: r,
                                    path: i,
                                    params: o,
                                    data: a,
                                    header: {
                                        "Content-Type": "application/json"
                                    }
                                }, 0, !1);
                            case 3:
                                return c = e.sent, e.abrupt("return", null == c ? void 0 : c.code);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "updateWebFlData",
                value: (n = r(e().mark((function t(n) {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!Vi(this.env) || !Ki()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", this.call("updateFLLocalConv", n, this.bridgeTimeout));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e) {
                    return n.apply(this, arguments)
                })
            }]), t
        }();
    qa = Fa([R.injectable(), Ba(0, R.inject(kr.ENV)), Ba(0, R.optional()), Ba(1, R.inject(kr.JS_BRIDGE)), Ba(1, R.optional())], qa),
        function(e) {
            e[e.P0 = 4] = "P0", e[e.P1 = 3] = "P1", e[e.P2 = 2] = "P2", e[e.P3 = 1] = "P3"
        }(Ua || (Ua = {}));
    var Ga = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Va = "tt_hold_events",
        Ha = function(e) {
            u(n, e);
            var t = p(n);

            function n() {
                var e;
                return i(this, n), (e = t.apply(this, arguments)).consentMode = Qn.UNKNOWN, e.queue = [], e.debounceUpdateCache = Oi((function() {
                    e.updateCache()
                }), 200, f(e)), e.handleHistoryQueue = bi((function() {
                    var t = po(Va);
                    Array.isArray(t) && (e.queue = e.queue.concat(t), e.changeQueueWithConsent())
                })), e
            }
            return a(n, [{
                key: "on",
                value: function(e, t) {
                    _(s(n.prototype), "on", this).call(this, e, t), this.handleHistoryQueue()
                }
            }, {
                key: "setConsentMode",
                value: function(e) {
                    this.consentMode = e, this.changeQueueWithConsent()
                }
            }, {
                key: "changeQueueWithConsent",
                value: function() {
                    switch (this.consentMode) {
                        case Qn.REVOKE:
                            this.cleanQueue();
                            break;
                        case Qn.GRANT:
                            this.releaseQueue(), this.cleanQueue();
                        case Qn.HOLD:
                        case Qn.UNKNOWN:
                    }
                }
            }, {
                key: "getConsentMode",
                value: function() {
                    return this.consentMode
                }
            }, {
                key: "cacheReportTask",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bn.defaultReport;
                    this.queue.push({
                        url: e,
                        data: t,
                        type: n
                    }), this.debounceUpdateCache()
                }
            }, {
                key: "cleanQueue",
                value: function() {
                    this.queue = [],
                        function(e) {
                            try {
                                window.sessionStorage.removeItem(e)
                            } catch (e) {}
                        }(Va)
                }
            }, {
                key: "updateCache",
                value: function() {
                    this.queue && this.queue.length > 0 && ho(Va, this.queue)
                }
            }, {
                key: "releaseQueue",
                value: function() {
                    var e = this;
                    this.queue.sort((function(t, n) {
                        return e.getEventPriority(n.data) - e.getEventPriority(t.data)
                    })), this.emit("queue", this.queue)
                }
            }, {
                key: "getEventPriority",
                value: function(e) {
                    return e.event && e.event.length > 0 ? Ua.P0 : e.action && e.action.length > 0 ? Ua.P1 : "" === e.event ? Ua.P2 : Ua.P3
                }
            }]), n
        }(Ko);
    Ha = Ga([R.injectable()], Ha);
    var Ja = function(e) {
            return Boolean(e)
        },
        Wa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ka = function() {
            function t() {
                i(this, t)
            }
            var n;
            return a(t, [{
                key: "send",
                value: (n = r(e().mark((function t(n, r) {
                    var i, o, a = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = a.length > 2 && void 0 !== a[2] ? a[2] : 0, e.prev = 1, navigator && navigator.sendBeacon) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 4:
                                if ((o = navigator.sendBeacon(n, JSON.stringify(r))) || "number" != typeof i || !(i > 0)) {
                                    e.next = 10;
                                    break
                                }
                                return i--, e.next = 9, Si(200);
                            case 9:
                                return e.abrupt("return", this.send(n, r, i));
                            case 10:
                                return e.abrupt("return", o);
                            case 13:
                                return e.prev = 13, e.t0 = e.catch(1), e.abrupt("return", !1);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [1, 13]
                    ])
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "sendByImage",
                value: function(e, t) {
                    (new Image).src = function(e, t) {
                        var n = new URL(e);
                        return Object.keys(t).forEach((function(e) {
                            var r = t[e].toJSON ? t[e].toJSON() : String(t[e]);
                            n.searchParams.set(e, r)
                        })), n.toString()
                    }(e, t)
                }
            }]), t
        }();
    Ka = Wa([R.injectable()], Ka);
    var Ya = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Xa = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Qa = function(t) {
            u(f, t);
            var n, o, c, s, l = p(f);

            function f(e, t, n, r) {
                var o;
                return i(this, f), (o = l.call(this, e, t)).supportSendAnalyticsEvent = !0, o.consentService = n, o.consentService.on("queue", (function(e) {
                    e.forEach((function(e) {
                        var t = e.url,
                            n = e.data,
                            r = e.type;
                        o.report(t, n, r)
                    }))
                })), o.env = r, o
            }
            return a(f, [{
                key: "send",
                value: (s = r(e().mark((function t(n, r, i) {
                    var o, a, c, u, s, l, f;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.bridgeService.jsbridge) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return l = !!(s = r).context && "timeout" === (null === (a = null === (o = s.context) || void 0 === o ? void 0 : o.ad) || void 0 === a ? void 0 : a.ad_info_status), f = {}, e.prev = 5, e.next = 8, this.bridgeService.send(s, l);
                            case 8:
                                if ((f = e.sent) && 1 === f.code) {
                                    e.next = 11;
                                    break
                                }
                                throw new Error("[fetch bridge] sendLog error: code ".concat(f && f.code, ", data: ").concat(f && JSON.stringify(f)));
                            case 11:
                                return gi(s.event) && ao(Mr.JSB_SEND, {
                                    pixelCode: null === (c = s.context.pixel) || void 0 === c ? void 0 : c.code,
                                    app_name: Qi() ? "ultralite" : "",
                                    extJSON: {
                                        event: s.event,
                                        event_id: s.event_id,
                                        need_inject_ad_info: l
                                    }
                                }), e.abrupt("return", f);
                            case 15:
                                e.prev = 15, e.t0 = e.catch(5), gi(s.event) && co(Mr.JSB_ERROR, e.t0, {
                                    pixelCode: null === (u = s.context.pixel) || void 0 === u ? void 0 : u.code,
                                    custom_name: "sendReportData",
                                    custom_enum: f && f.code ? "".concat(f.code) : "non",
                                    app_name: to() || "",
                                    extJSON: {
                                        position: "sendReportData"
                                    }
                                }), Qi() && Wi() && this.sendHttpReport(n, s, i);
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [5, 15]
                    ])
                }))), function(e, t, n) {
                    return s.apply(this, arguments)
                })
            }, {
                key: "sendHttpReport",
                value: (c = r(e().mark((function t(n, r, i) {
                    var o, a, c, u = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = !(u.length > 3 && void 0 !== u[3]) || u[3], a = u.length > 4 ? u[4] : void 0, e.next = 4, this.httpService.send(n, r, a);
                            case 4:
                                e.sent || this.httpService.sendByImage(n, {
                                    analytics_message: i
                                }), o && ao(Mr.HTTP_SEND, {
                                    pixelCode: null === (c = r.context.pixel) || void 0 === c ? void 0 : c.code,
                                    extJSON: {
                                        event: r.event,
                                        event_id: r.event_id
                                    }
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t, n) {
                    return c.apply(this, arguments)
                })
            }, {
                key: "beforeReport",
                value: (o = r(e().mark((function t(n, r) {
                    var i, o, a = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = a.length > 2 && void 0 !== a[2] ? a[2] : Bn.defaultReport, (o = this.consentService.getConsentMode()) !== Qn.REVOKE) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 4:
                                if (o !== Qn.HOLD) {
                                    e.next = 7;
                                    break
                                }
                                return this.consentService.cacheReportTask(n, r, i), e.abrupt("return", !1);
                            case 7:
                                return e.abrupt("return", !0);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "report",
                value: (n = r(e().mark((function t(n, r) {
                    var i, o, a, c, u, s = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = s.length > 2 && void 0 !== s[2] ? s[2] : Bn.defaultReport, e.next = 3, this.beforeReport(n, r, i);
                            case 3:
                                if (e.sent) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                if (o = Fo(r), i !== Bn.defaultReport || !this.bridgeService.jsbridge) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 10, this.send(n, r, o);
                            case 10:
                                return e.abrupt("return", e.sent);
                            case 11:
                                if (i !== Bn.httpReport || !this.bridgeService.jsbridge || !Vi(this.env) || Xi() || !this.supportSendAnalyticsEvent) {
                                    e.next = 30;
                                    break
                                }
                                return a = n, e.prev = 13, a = new URL(n).pathname, e.next = 17, this.bridgeService.sendAnalyticsEvent({
                                    path: a,
                                    method: "POST",
                                    data: r
                                });
                            case 17:
                                if (c = e.sent, u = new Error("sendAnalyticsEvent not support: code ".concat(c, ", path: ").concat(a, ", data: ").concat(JSON.stringify(r))), null != c && -2 !== c) {
                                    e.next = 22;
                                    break
                                }
                                throw this.supportSendAnalyticsEvent = !1, u;
                            case 22:
                                if (1 !== c) {
                                    e.next = 24;
                                    break
                                }
                                return e.abrupt("return");
                            case 24:
                                throw u;
                            case 27:
                                e.prev = 27, e.t0 = e.catch(13), co(Mr.CUSTOM_ERROR, e.t0, {
                                    custom_name: "sendAnalyticsEvent",
                                    custom_enum: String(c)
                                }, !0);
                            case 30:
                                this.sendHttpReport(n, r, o, !(!gi(r.event) || !Ei(r)), Ja(r.action) ? 3 : void 0);
                            case 31:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [13, 27]
                    ])
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "reportFL",
                value: function(e) {
                    this.bridgeService.jsbridge && this.bridgeService.updateWebFlData(e)
                }
            }]), f
        }(ra);
    Qa = Ya([R.injectable(), Xa(0, R.inject(kr.HTTP_SERVICE)), Xa(1, R.inject(kr.BRIDGE_SERVICE)), Xa(2, R.inject(kr.CONSENT_SERVICE)), Xa(3, R.inject(kr.ENV)), Xa(3, R.optional())], Qa);
    var za = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Za = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        $a = function() {
            function t(e) {
                i(this, t), this.cookieExpireOption = function(e) {
                    if (e && e.cde) {
                        var t = e.cde;
                        return Object.assign({}, Sr, {
                            expires: t
                        })
                    }
                    return Sr
                }(e)
            }
            var n;
            return a(t, [{
                key: "genCookieID",
                value: function() {
                    return function() {
                        for (var e = vi(Date.now()); 27 !== e.length;) e.length > 27 ? e = e.slice(0, 27) : e += "_";
                        return e
                    }()
                }
            }, {
                key: "enableCookie",
                value: (n = r(e().mark((function t() {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return yo(pr, "1", this.cookieExpireOption), e.abrupt("return", Ao("https://analytics.tiktok.com/i18n/pixel/enable_cookie"));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "enableFirstPartyCookie",
                value: function(e) {
                    if (e) {
                        yo(pr, "1", this.cookieExpireOption);
                        var t = this.getAnonymousId();
                        this.setAnonymousId(t || this.genCookieID())
                    }
                }
            }, {
                key: "disableCookie",
                value: function() {
                    yo(pr, "0", this.cookieExpireOption), yo(_r, "", Object.assign(this.cookieExpireOption, {
                        expires: -1
                    })), Ao("https://analytics.tiktok.com/i18n/pixel/disable_cookie")
                }
            }, {
                key: "setAnonymousId",
                value: function(e) {
                    var t = this.getAnonymousId() || e;
                    if (t) {
                        var n = t.split(".")[0];
                        yo(_r, n, this.cookieExpireOption)
                    }
                }
            }, {
                key: "getAnonymousId",
                value: function() {
                    return go(_r) || ""
                }
            }, {
                key: "canUseCookie",
                value: function() {
                    try {
                        return "0" !== go(pr)
                    } catch (e) {}
                    return !1
                }
            }, {
                key: "resetExpires",
                value: function() {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var e = {
                            taskName: window.ttq._pf_tn,
                            functionName: "resetExpires",
                            start: performance.now()
                        }
                    } catch (e) {}
                    var t = go(pr);
                    t && yo(pr, t, this.cookieExpireOption);
                    var n = this.getAnonymousId();
                    n && this.setAnonymousId(n);
                    try {
                        window.ttq && window.ttq._ppf && (e.end = performance.now(), window.ttq._ppf.push(e))
                    } catch (e) {}
                }
            }]), t
        }();
    $a = za([R.injectable(), Za(0, R.inject(kr.TTQ_GLOBAL_OPTIONS))], $a);
    var ec = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        tc = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        nc = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this, {
                    name: "Callback",
                    reporters: r,
                    context: e
                })).ttclidCookieValue = "undefined" != typeof document ? go(Jr) : "", o
            }
            return a(n, [{
                key: "pixelDidMount",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "callback_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    var n = Fi(),
                        r = n.url,
                        i = n.referrer,
                        o = Ui(Jr, r, i);
                    o && this.ttclidCookieValue !== o && So(Jr, o);
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }]), n
        }($o);
    nc = ec([R.injectable(), tc(0, R.inject(kr.CONTEXT)), tc(1, R.inject(kr.TTQ_REPORTERS))], nc);
    var rc = {
            isHash: function(e) {
                return !1
            },
            genIdentifierLabelByUserProperties: function(e) {
                return {}
            }
        },
        ic = {
            validatePhoneNumberLength: function(e) {},
            parsePhoneNumberFromString: function(e) {}
        },
        oc = {
            tryDecodeHashedBase64String: function(e) {
                return null
            },
            tryDecodeHashedBase64Hex: function(e) {
                return null
            }
        },
        ac = function(e) {
            var t, n = e.parsePhoneNumberFromString,
                r = e.validatePhoneNumberLength,
                i = e.isHash,
                o = e.genIdentifierLabelByUserProperties,
                a = e.tryDecodeHashedBase64String,
                c = e.tryDecodeHashedBase64Hex,
                u = e.checkEmailFormat,
                s = e.checkMDNEmailFormat;
            e.sha256, t = {
                    checkEmailFormat: u,
                    checkMDNEmailFormat: s
                }, t.checkMDNEmailFormat,
                function(e) {
                    var t = e.tryDecodeHashedBase64String,
                        n = e.tryDecodeHashedBase64Hex;
                    oc.tryDecodeHashedBase64String = t, oc.tryDecodeHashedBase64Hex = n
                }({
                    tryDecodeHashedBase64String: a,
                    tryDecodeHashedBase64Hex: c
                }),
                function(e) {
                    var t = e.isHash,
                        n = e.genIdentifierLabelByUserProperties;
                    rc.isHash = t, rc.genIdentifierLabelByUserProperties = n
                }({
                    isHash: i,
                    genIdentifierLabelByUserProperties: o
                }),
                function(e) {
                    var t = e.parsePhoneNumberFromString,
                        n = e.validatePhoneNumberLength;
                    ic.parsePhoneNumberFromString = t, ic.validatePhoneNumberLength = n
                }({
                    parsePhoneNumberFromString: n,
                    validatePhoneNumberLength: r
                })
        },
        cc = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ic.parsePhoneNumberFromString,
                r = e,
                i = t ? n(e, t) : n(e);
            return i ? r = "86" === i.countryCallingCode ? i.nationalNumber : i.number : e.replace(/[^0-9]/g, "").length > 0 && (r = e.replace(/[^0-9]/g, "")), r
        },
        uc = ["(null)", "", "''\"", void 0, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "eb045d78d273107348b0300c01d29b7552d622abbc6faf81b3ec55359aa9950c", "not set", null, "6181738008c985a1b5f106b796c98e719efcc3c0ff68ddcd14a049825f4900a8", "2a539d6520266b56c3b0c525b9e6128858baeccb5ee9b694a2906e123c8d6dd3", "c6e52c372287175a895926604fa738a0ad279538a67371cd56909c7917e69ea1", "None", "74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b", "f24f02d3c35894296522abac8c4b2439b1c1b650e1fb4c97c0f3c50b580b0a3c", "no", "a683c5c5349f6f7fb903ba8a9e7e55d0ba1b8f03579f95be83f4954c33e81098", "f18a2548c063c5a2b1560c6f2b9ec44bf9ed9017884404016d74f330119aaefe", "449f06574cd639e1826848ff5d70ba95904574be84f34e61baa526d517dfb493", "fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa", "NA", "bc857c49633bbc75644c51f36b16b2f768cc0ee13f65402ec7c32c96308272dd", "42cbf37902c6911d7b4e371fe8f8708a0ceda6946249d4a3e23de8d5e60ae8b7"],
        sc = function(e) {
            u(n, e);
            var t = p(n);

            function n(e) {
                var r = e.name,
                    o = e.context,
                    a = e.reporters;
                return i(this, n), t.call(this, {
                    name: r,
                    reporters: a,
                    context: o
                })
            }
            return a(n, [{
                key: "setIdentifyUtils",
                value: function(e) {
                    var t = e.isHash,
                        n = e.sha256,
                        r = e.genIdentifierLabelByUserProperties,
                        i = e.tryDecodeHashedBase64String,
                        o = e.tryDecodeHashedBase64Hex,
                        a = e.validatePhoneNumberLength,
                        c = e.parsePhoneNumberFromString,
                        u = e.checkEmailFormat,
                        s = e.checkMDNEmailFormat,
                        l = e.getCookieDeprecationLabel,
                        f = void 0 === l ? function() {} : l,
                        d = e.getAllTopics,
                        p = void 0 === d ? function() {} : d;
                    ac({
                        isHash: t,
                        sha256: n,
                        genIdentifierLabelByUserProperties: r,
                        tryDecodeHashedBase64String: i,
                        tryDecodeHashedBase64Hex: o,
                        validatePhoneNumberLength: a,
                        parsePhoneNumberFromString: c,
                        checkEmailFormat: u,
                        checkMDNEmailFormat: s
                    }), this.parsePhoneNumberFromString = c, this.checkMDNEmailFormat = s, this.checkEmailFormat = u, this.sha256 = n, this.getCookieDeprecationLabel = f, this.getAllTopics = p
                }
            }, {
                key: "baseHandleUserProperties",
                value: function(e, t) {
                    var n = this;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var r = {
                                taskName: window.ttq._pf_tn || "identify_encryption",
                                functionName: window.ttq._pf_tn && "identify_encryption",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "identify_encryption")
                        }
                    } catch (e) {}
                    if (e) {
                        var i = this.identifyParamsFormattedInfo(e),
                            o = this.identifyParamsFormattedInfoV2(e),
                            a = rc.genIdentifierLabelByUserProperties(t);
                        this.handlePIIDiagnostics(o), Object.entries(e).forEach((function(t) {
                            var r = v(t, 2),
                                i = r[0],
                                a = r[1],
                                c = void 0 === a ? "" : a;
                            if (c) {
                                var u = String(c);
                                if (["email", "phone_number", "sha256_email", "sha256_phone_number"].includes(i)) {
                                    var s = n.getUserDataFormatInfoV2KeyName(i),
                                        l = oc.tryDecodeHashedBase64Hex(u);
                                    if (null !== l) e[i] = l, null !== s && (o = n.updateUserDataFormatV2Label(s, Vn.BASE64_HEX_HASHED, o));
                                    else {
                                        var f = oc.tryDecodeHashedBase64String(u);
                                        f && (e[i] = f, null !== s && (o = n.updateUserDataFormatV2Label(s, Vn.BASE64_STRING_HASHED, o)))
                                    }
                                }
                                switch ("zip_code" === i && u && (rc.isHash(u) ? o = n.updateUserDataFormatV2Label("zip_code", Vn.ZIP_CODE_IS_HASHED, o) : (o = n.updateUserDataFormatV2Label("zip_code", Vn.ZIP_CODE_IS_NOT_HASHED, o), n.isZipFromUs(e) ? (e.zip_code = n.sha256(n.truncateString(u, 5)), o = n.updateUserDataFormatV2Label("zip_code", Vn.ZIP_CODE_IS_US, o)) : (e.zip_code = n.sha256(u), o = n.updateUserDataFormatV2Label("zip_code", Vn.ZIP_CODE_IS_NOT_US, o)))), i) {
                                    case "email":
                                        e.email = rc.isHash(u) && !n.checkEmailFormat(u) ? u : n.sha256(n.handleEmail(u));
                                        break;
                                    case "phone_number":
                                        e.phone_number = rc.isHash(u) ? u : n.sha256(n.handlePhoneNumber(u));
                                        break;
                                    case "auto_email":
                                        e.auto_email = n.sha256(n.handleEmail(u));
                                        break;
                                    case "auto_phone_number":
                                        e.auto_phone_number = n.sha256(n.handlePhoneNumber(u));
                                        break;
                                    case "first_name":
                                        e.first_name = rc.isHash(u) ? u : n.sha256(u);
                                        break;
                                    case "last_name":
                                        e.last_name = rc.isHash(u) ? u : n.sha256(u);
                                        break;
                                    case "city":
                                        e.city = n.truncateString(u, 80);
                                        break;
                                    case "state":
                                        e.state = n.truncateString(u, 80);
                                        break;
                                    case "country":
                                        e.country = n.truncateString(u, 80);
                                        break;
                                    default:
                                        return
                                }
                            }
                        })), e.sha256_email && (e.email = this.handleCheckHashedEmailValue(String(e.sha256_email), i)), e.sha256_phone_number && (e.phone_number = this.handleCheckHashedPhoneValue(String(e.sha256_phone_number), i));
                        try {
                            window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r), "identify_encryption" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                        return {
                            userProperties: e,
                            userDataFormat: i,
                            userDataFormatV2: o,
                            identifierLabel: a
                        }
                    }
                }
            }, {
                key: "identifyParamsFormattedInfo",
                value: function(e) {
                    var t = this,
                        n = {},
                        r = /^sha256_(.*)$/;
                    return Object.entries(e).forEach((function(e) {
                        var i = v(e, 2),
                            o = i[0],
                            a = i[1],
                            c = String(void 0 === a ? "" : a),
                            u = o.match(r);
                        switch (o) {
                            case "email":
                                t.handleEmailFormat(c, "email", n);
                                break;
                            case "phone_number":
                                t.handlePhoneNumberFormat(c, "phone_number", n);
                                break;
                            case "auto_email":
                                t.handleEmailFormat(c, "auto_email", n);
                                break;
                            case "auto_phone_number":
                                t.handlePhoneNumberFormat(c, "auto_phone_number", n);
                                break;
                            case (u || {}).input:
                                var s = null == u ? void 0 : u.pop();
                                s && Kr.includes(s) && (n[s] = [Gn.HASHED]);
                                break;
                            case "first_name":
                            case "last_name":
                            case "city":
                            case "state":
                            case "country":
                            case "zip_code":
                            case "partner_id":
                                t.handleNewPiisFormat(c, o, n);
                                break;
                            default:
                                n[o] = [Gn.CORRECT_FORMAT]
                        }
                    })), n
                }
            }, {
                key: "identifyParamsFormattedInfoV2",
                value: function(e) {
                    var t = this,
                        n = {};
                    return Object.entries(e).forEach((function(e) {
                        var r = v(e, 2),
                            i = r[0],
                            o = r[1],
                            a = String(void 0 === o ? "" : o);
                        switch (i) {
                            case "email":
                                t.handlePixelValidation(a, Yr, n);
                                break;
                            case "phone_number":
                                t.handlePixelValidation(a, Xr, n);
                                break;
                            case "sha256_email":
                                t.handlePixelValidation(a, Qr, n);
                                break;
                            case "sha256_phone_number":
                                t.handlePixelValidation(a, zr, n);
                                break;
                            case "first_name":
                            case "last_name":
                            case "city":
                            case "state":
                            case "country":
                            case "zip_code":
                            case "partner_id":
                                break;
                            default:
                                n[i] = [Vn.UNKNOWN_INVALID]
                        }
                    })), n
                }
            }, {
                key: "updateUserDataFormatV2Label",
                value: function(e, t, n) {
                    var r, i;
                    return (null === n[e] || void 0 === n[e] || (null === (r = n[e]) || void 0 === r ? void 0 : r.includes(Vn.UNKNOWN_INVALID))) && (n[e] = []), null === (i = n[e]) || void 0 === i || i.push(t), n
                }
            }, {
                key: "getUserDataFormatInfoV2KeyName",
                value: function(e) {
                    return {
                        email: "email_is_hashed",
                        phone_number: "phone_is_hashed",
                        sha256_email: "sha256_email",
                        sha256_phone_number: "sha256_phone",
                        zip_code: "zip_code"
                    }[e] || null
                }
            }, {
                key: "handlePIIDiagnostics",
                value: function(e) {}
            }, {
                key: "handleEmail",
                value: function(e) {
                    return e.toLowerCase()
                }
            }, {
                key: "handlePhoneNumber",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.parsePhoneNumberFromString;
                    return cc(e, "", t)
                }
            }, {
                key: "handleCheckHashedEmailValue",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.checkEmailFormat;
                    return t.email = t.email || [], rc.isHash(e) ? (null == t || t.email.push(Gn.HASHED_CORRECT), e) : n(e) ? (null == t || t.email.push(Gn.PLAINTEXT_EMAIL), this.sha256(this.handleEmail(String(e)))) : (null == t || t.email.push(Gn.HASHED_ERR), this.sha256(e))
                }
            }, {
                key: "handleCheckHashedPhoneValue",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.parsePhoneNumberFromString;
                    return t.phone_number = t.phone_number || [], rc.isHash(e) ? (null == t || t.phone_number.push(Gn.HASHED_CORRECT), e) : n(e) ? (t.phone_number.push(Gn.PLAINTEXT_PHONE), this.sha256(this.handlePhoneNumber(String(e), n))) : (null == t || t.phone_number.push(Gn.HASHED_ERR), this.sha256(e))
                }
            }, {
                key: "handlePixelValidation",
                value: function(e, t, n) {
                    n[t] = [], uc.includes(e) && n[t].push(Vn.FILTER_EVENTS), e && rc.isHash(e) && n[t].push(Vn.HASHED), e && this.checkEmailFormat(e) && n[t].push(Vn.PLAIN_EMAIL), e && this.checkMDNEmailFormat(e) && n[t].push(Vn.PLAIN_MDN_EMAIL), e && this.parsePhoneNumberFromString(e) && n[t].push(Vn.PLAIN_PHONE), e && 0 === n[t].length && n[t].push(Vn.UNKNOWN_INVALID)
                }
            }, {
                key: "isZipFromUs",
                value: function(e) {
                    var t;
                    return "us" === (null === (t = e.country) || void 0 === t ? void 0 : t.toLowerCase()) || !1
                }
            }, {
                key: "truncateString",
                value: function(e, t) {
                    var n = Array.from(e);
                    return n.length <= t ? e : n.slice(0, t).join("")
                }
            }, {
                key: "handlePhoneNumberFormat",
                value: function(e, t, n) {
                    var r = this.handleCheckPhoneNumber(String(e), this.parsePhoneNumberFromString);
                    n[t] = r
                }
            }, {
                key: "handleCheckPhoneNumber",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.parsePhoneNumberFromString,
                        n = [];
                    if (!e) return n.push(Gn.EMPTY_VALUE), n;
                    if (rc.isHash(e)) return n.push(Gn.HASHED), n;
                    var r = t(e);
                    return r ? (n.push(Gn.CORRECT_FORMAT), n) : (n.push(Gn.WRONG_FORMAT), n)
                }
            }, {
                key: "handleCheckEmail",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.checkEmailFormat,
                        n = [];
                    return e ? rc.isHash(e) ? (n.push(Gn.HASHED), n) : t(e) ? (n.push(Gn.CORRECT_FORMAT), n) : (n.push(Gn.WRONG_FORMAT), n) : (n.push(Gn.EMPTY_VALUE), n)
                }
            }, {
                key: "handleEmailFormat",
                value: function(e, t, n) {
                    var r = this.handleCheckEmail(String(e), this.checkEmailFormat);
                    n && n[t] && (n[t] || []).includes(Gn.HASHED) || (n[t] = r)
                }
            }, {
                key: "handleNewPiisFormat",
                value: function(e, t, n) {
                    e && (n[t] = [Gn.CORRECT_FORMAT])
                }
            }]), n
        }($o),
        lc = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        fc = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        dc = function(t) {
            u(s, t);
            var n, o, c = p(s);

            function s(e, t) {
                var n;
                return i(this, s), (n = c.call(this, {
                    name: "Identify",
                    reporters: t,
                    context: e
                })).init(), n
            }
            return a(s, [{
                key: "init",
                value: function() {
                    var e = this;
                    return this.pluginPromise || (ao(Mr.IDENTIFY_INIT_START), this.pluginPromise = Ao("https://analytics.tiktok.com/i18n/pixel/static/identify_935b0d03.js").then((function() {
                        e.detectTopics(), ao(Mr.IDENTIFY_INIT_END)
                    })).catch((function() {
                        var e = new Error("Loading chunk identify failed.\n(error: ".concat(window.location.host, "/static/identify.js)"));
                        return e.name = "ChunkLoadError", Promise.reject(e)
                    }))), this.pluginPromise
                }
            }, {
                key: "handleUserProperties",
                value: (o = r(e().mark((function t(n, r) {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", void 0);
                            case 2:
                                return e.next = 4, this.init();
                            case 4:
                                return e.abrupt("return", this.baseHandleUserProperties(n, r));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "handlePIIDiagnostics",
                value: function(e) {
                    try {
                        var t = e.email_is_hashed,
                            n = void 0 === t ? [] : t,
                            r = e.sha256_email,
                            i = void 0 === r ? [] : r,
                            o = e.phone_is_hashed,
                            a = void 0 === o ? [] : o,
                            c = e.sha256_phone,
                            u = void 0 === c ? [] : c;
                        if (n.includes(Vn.UNKNOWN_INVALID) || i.includes(Vn.UNKNOWN_INVALID)) return void uo(Dr.INVALID_EMAIL_FORMAT);
                        if (a.includes(Vn.UNKNOWN_INVALID) || u.includes(Vn.UNKNOWN_INVALID)) return void uo(Dr.INVALID_PHONE_NUMBER_FORMAT);
                        if (n.includes(Vn.FILTER_EVENTS) || i.includes(Vn.FILTER_EVENTS)) return void uo(Dr.INVALID_EMAIL_INFORMATION);
                        if (a.includes(Vn.FILTER_EVENTS) || u.includes(Vn.FILTER_EVENTS)) return void uo(Dr.INVALID_PHONE_NUMBER_INFORMATION)
                    } catch (e) {}
                }
            }, {
                key: "detectTopics",
                value: (n = r(e().mark((function t() {
                    var n, r;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, this.getCookieDeprecationLabel();
                            case 3:
                                return n = e.sent, e.next = 6, this.getAllTopics();
                            case 6:
                                (r = e.sent) && ao(Mr.CUSTOM_INFO, {
                                    custom_name: "topics",
                                    extJSON: {
                                        cookie_label: String(n),
                                        stack: r.toString()
                                    }
                                }), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [0, 10]
                    ])
                }))), function() {
                    return n.apply(this, arguments)
                })
            }]), s
        }(sc);
    dc = lc([R.injectable(), fc(0, R.inject(kr.CONTEXT)), fc(1, R.inject(kr.TTQ_REPORTERS))], dc);
    var pc, hc = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        _c = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        vc = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: "WebFL",
                    reporters: r,
                    context: e
                })).reportService = o, c.ttqOptions = a, c.useExchangeRate = a.usd_exchange_rate, c
            }
            return a(n, [{
                key: "pixelSend",
                value: function(e, t, n) {
                    var r, i;
                    Boolean(null === (i = null === (r = this.ttqOptions) || void 0 === r ? void 0 : r.plugins) || void 0 === i ? void 0 : i.WebFL) && n && this.reportFlConv(n)
                }
            }, {
                key: "reportFlConv",
                value: function(e) {
                    var t;
                    if (e && "Pageview" !== e.event) {
                        var n, r = e.context,
                            i = e.properties,
                            o = void 0 === i ? {} : i,
                            a = void 0 !== r.ad.log_extra ? r.ad.log_extra : "{}";
                        try {
                            n = JSON.parse(a)
                        } catch (e) {
                            n = {}
                        }
                        var c = {
                                req_id: n.req_id || "",
                                cid: r.ad.creative_id || "",
                                value: o.value || "",
                                currency: o.currency || "",
                                raw: Object.assign({}, o)
                            },
                            u = o.value,
                            s = o.currency,
                            l = function(e, t, n) {
                                return isNaN(e) || e < 0 || null === n || !n[t] ? "" : (e / n[t] * 1e5).toFixed(0)
                            }(u, s, this.useExchangeRate || null),
                            f = r.pixel ? r.pixel.code : "";
                        l && (c.usd_value = l, ao(Mr.CUSTOM_INFO, {
                            pixelCode: f,
                            custom_name: "odfl_rate_exchange",
                            extJSON: {
                                message_id: e.message_id,
                                cid: c.cid,
                                event: e.event,
                                value: u,
                                currency: s,
                                usdValue: l
                            }
                        }));
                        var d = {
                            business: "devicefl_join_label",
                            entrance: "app_to_web_conversion",
                            inputParams: {
                                message_id: e.message_id,
                                event: e.event,
                                event_props: c,
                                event_source_id: null === (t = r.pixel) || void 0 === t ? void 0 : t.code,
                                event_source_type: "web"
                            }
                        };
                        this.reportService && this.reportService.reportFL && (this.reportService.reportFL(d), ao(Mr.CUSTOM_INFO, {
                            pixelCode: f,
                            custom_name: "fl_jsb_report",
                            extJSON: {
                                message_id: e.message_id,
                                cid: c.cid,
                                event: e.event
                            }
                        }))
                    }
                }
            }]), n
        }($o);
    vc = hc([R.injectable(), _c(0, R.inject(kr.CONTEXT)), _c(1, R.inject(kr.TTQ_REPORTERS)), _c(2, R.inject(kr.REPORT_SERVICE)), _c(3, R.inject(kr.TTQ_GLOBAL_OPTIONS))], vc),
        function(e) {
            e.ERROR_FORMAT = "error_format", e.OVER_LENGTH = "over_length_3e4", e.FILTER_SENSITIVE_FIELDS = "filter_sensitive_fields"
        }(pc || (pc = {}));
    var gc, yc, mc, Ec, bc, wc = "form_detail_error";
    ! function(e) {
        e.GET_ELEMENTS_ERROR = "get_elements_error", e.INIT_ERROR = "init_error", e.ASSEMBLE_FORM_DETAIL_ERROR = "assemble_form_detail_error", e.DETECT_FORM_ELEMENT_ERROR = "detect_form_element_error", e.GET_OVERALL_FORM_DETAIL_ERROR = "get_overall_form_detail_error", e.FORM_OBSERVER_ERROR = "form_observer_error", e.OVER_LENGTH = "over_length_3e4"
    }(gc || (gc = {})),
    function(e) {
        e.METADATA = "Metadata", e.CLICK = "Click"
    }(yc || (yc = {})),
    function(e) {
        e.AUTO_COLLECTION = "AUTO_COLLECTION", e.AUTO_FORM = "AUTO_FORM", e.AUTO_CLICK = "AUTO_CLICK", e.AUTO_VC = "AUTO_VC", e.AUTO_VC_REVERSE = "AUTO_VC_REVERSE"
    }(mc || (mc = {})),
    function(e) {
        e.AUTO_FORM = "form_rules", e.AUTO_VC = "vc_rules", e.AUTO_VC_REVERSE = "vc_rules_reverse"
    }(Ec || (Ec = {})),
    function(e) {
        e.PAGE_LEAVE = "PageLeave", e.PAGE_VIEW = "PageView", e.DOM_CHANGE = "DomChange", e.URL_CHANGE = "UrlChange", e.CLICK = "Click", e.SCROLL = "Scroll"
    }(bc || (bc = {}));
    var Ic = ["AnatomicalStructure", "AnatomicalSystem", "ApprovedIndication", "ArriveAction", "Artery", "BioChemEntity", "BloodTest", "Bone", "BorrowAction", "BrainStructure", "BrokerageAccount", "CDCPMDRecord", "ChemicalSubstance", "CovidTestingFacility", "DDxElement", "DepartAction", "DepositAccount", "DiagnosticLab", "DiagnosticProcedure", "Diet", "DietarySupplement", "DoseSchedule", "ElementarySchool", "HighSchool", "ExercisePlan", "Gene", "GovernmentBenefitsType", "GovernmentService", "HealthAspectEnumeration", "HealthInsurancePlan", "HealthPlanCostSharingSpecification", "HealthTopicContent", "Hospital", "ImagingTest", "InfectiousAgentClass", "InvestmentFund", "InvestmentOrDeposit", "Invoice", "Joint", "LendAction", "LifestyleModification", "Ligament", "LoanOrCredit", "LymphaticVessel", "MaximumDoseSchedule", "MedicalAudience", "MedicalAudienceType", "MedicalCause", "MedicalCode", "MedicalCondition", "MedicalConditionStage", "MedicalContraindication", "MedicalDevice", "MedicalEntity", "MedicalEvidenceLevel", "MedicalGuidelineContraindication", "MedicalIndication", "MedicalIntangible", "MedicalObservationalStudy", "MedicalOrganization", "MedicalProcedure", "MedicalProcedureType", "MedicalRiskCalculator", "MedicalRiskFactor", "MedicalRiskScore", "MedicalSign", "MedicalSignOrSymptom", "MedicalStudy", "MedicalSymptom", "MedicalTest", "MedicalTestPanel", "MedicalTherapy", "MedicalTrial", "MiddleSchool", "MoneyTransfer", "Muscle", "Nerve", "OccupationalTherapy", "Order", "PalliativeProcedure", "ParentAudience", "PathologyTest", "Patient", "PeopleAudience", "Person", "Pharmacy", "PhysicalActivity", "PhysicalTherapy", "Physician", "PoliticalParty", "Preschool", "PreventionIndication", "Protein", "PsychologicalTreatment", "RadiationTherapy", "RecommendedDoseSchedule", "ReportedDoseSchedule", "School", "Substance", "SuperficialAnatomy", "SurgicalProcedure", "Text", "TherapeuticProcedure", "TreatmentIndication", "URL", "Vein", "Vessel", "VitalSign", "WorkersUnion"],
        Tc = 2e3;

    function Oc(e) {
        return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi.test(e) || /(\+?0?86-?)?1[3-9]\d{9}/g.test(e) || /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g.test(e) || /^[\-!$><-==&_\/\?\.,0-9:; \]\[%~\"\{\}\)\(\+\@\^\`]/g.test(e) || Ic.some((function(t) {
            return e.toLowerCase().indexOf(t.toLowerCase()) > -1
        }))
    }
    var Sc = function e(t) {
        if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
        if (t === document.documentElement) return "/HTML";
        for (var n = 1, r = t.previousSibling; r;) r.nodeType === Node.ELEMENT_NODE && r.tagName === t.tagName && n++, r = r.previousSibling;
        var i = t.tagName.toLowerCase(),
            o = e(t.parentNode);
        return "".concat(o, "/").concat(i, "[").concat(n, "]")
    };

    function Nc(e) {
        return Sc(e)
    }

    function Rc(e, t) {
        return function() {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            window.requestIdleCallback && window.requestIdleCallback(e.bind.apply(e, [t].concat(r))), e.apply(t, r)
        }
    }

    function Ac(e) {
        var t = e.options,
            n = e.plugins;
        return t && !1 !== t.autoConfig && n && n[Ru]
    }

    function Pc(e, t) {
        if (!Ec[t]) return !0;
        var n = e.plugins;
        return t === mc.AUTO_VC_REVERSE ? Ac(e) && n[Ru] && !n[Ru][Ec.AUTO_VC] : Ac(e) && n[Ru] && n[Ru][Ec[t]]
    }
    var Cc = function e(t) {
            for (var n = 0, r = t.children, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = !1;
                try {
                    a = Pi(o)
                } catch (e) {
                    co(Mr.CUSTOM_ERROR, e, {
                        custom_name: "button_check_error",
                        custom_enum: "auto_click",
                        extJSON: {
                            element: o
                        }
                    }), a = !1
                }
                a && n++, n += e(o)
            }
            return n
        },
        kc = function(e) {
            var t, n, r, i, o = "";
            if ("A" === e.tagName.toUpperCase()) o = null !== (t = e.getAttribute("href")) && void 0 !== t ? t : "";
            else if ("BUTTON" === e.tagName.toUpperCase()) {
                var a = null !== (n = e.getAttribute("onclick")) && void 0 !== n ? n : "",
                    c = null !== (r = e.getAttribute("formaction")) && void 0 !== r ? r : "",
                    u = a.match(/^.*=(['"])(.*)\1.*$/);
                c ? o = c : u && (o = u[2])
            } else "FORM" === e.tagName.toUpperCase() && (o = null !== (i = e.getAttribute("action")) && void 0 !== i ? i : "");
            return o
        };
    var Mc = {
        getMicroData: !0,
        getJSONLD: !0,
        getOpenGraph: !0,
        getMetaData: !0
    };

    function Dc(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        return "string" != typeof e ? "" : (e = e.trim()).length < t ? e : e.slice(0, 500)
    }

    function Lc(e) {
        return null != ["og:image"].filter((function(t) {
            return t === e
        }))[0]
    }

    function xc(e, t) {
        return null != [{
            property: "image",
            type: "Product"
        }].filter((function(n) {
            return (e === "https://schema.org/" + n.type || e === "http://schema.org/" + n.type) && n.property === t
        }))[0]
    }

    function jc() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return {
            items: e,
            has: function(e) {
                return this.items.some((function(t) {
                    return t === e
                }))
            },
            add: function(e) {
                this.has(e) || this.items.push(e)
            }
        }
    }

    function Uc(e) {
        var t;
        switch (e.tagName.toLowerCase()) {
            case "meta":
                t = e.getAttribute("content");
                break;
            case "audio":
            case "embed":
            case "iframe":
            case "img":
            case "source":
            case "track":
            case "video":
                t = e.getAttribute("src");
                break;
            case "a":
            case "area":
            case "link":
                t = e.getAttribute("href");
                break;
            case "object":
                t = e.getAttribute("data");
                break;
            case "data":
            case "meter":
                t = e.getAttribute("value");
                break;
            case "time":
                t = e.getAttribute("datetime");
                break;
            default:
                t = function(e) {
                    if (e) {
                        if (e.innerText && e.innerText.length > 0) return e.innerText;
                        if (e.textContent && e.textContent.length > 0) return e.textContent
                    }
                    return ""
                }(e) || ""
        }
        return "string" == typeof t ? Dc(t) : ""
    }

    function Fc(e, n) {
        if ("object" === t(e)) {
            if (Array.isArray(e)) return e.map((function(e) {
                return Fc(e, n)
            }));
            var r = {};
            for (var i in e) Bc(i, n) || (r[i] = Fc(e[i], n));
            return r
        }
        return e
    }

    function Bc(e, t) {
        return !!(t && t.length > 0) && t.some((function(t) {
            return e.toLowerCase() === t.toLowerCase()
        }))
    }

    function qc(e) {
        if ("object" === t(e)) {
            if (Array.isArray(e)) return e.map((function(e) {
                return qc(e)
            }));
            var n = Object.assign({}, e),
                r = n["@type"];
            for (var i in n) "@type" !== i && "@context" !== i && ("object" === t(n[i]) ? n[i] = qc(n[i]) : r && Gc(r) && delete n[i]);
            return n
        }
        return e
    }

    function Gc(e) {
        return Array.isArray(e) ? e.some((function(e) {
            return Gc(e)
        })) : "string" == typeof e && (e = e.toLowerCase().replace(/https?:\/\/schema\.org\//, ""), Ic.some((function(t) {
            return e === t.toLowerCase()
        })))
    }

    function Vc(e) {
        var t = {
            open_graph: "{}",
            microdata: "[]",
            json_ld: "[]",
            meta: "{}"
        };
        try {
            t.microdata = function() {
                for (var e = document.querySelectorAll("[itemscope]"), t = [], n = jc(), r = 0; r < e.length; r++) n.add(e[r]);
                for (var i = e.length - 1; i >= 0; i--) {
                    var o = e[i],
                        a = o.getAttribute("itemtype");
                    if ("string" == typeof a && "" !== a) {
                        for (var c = {}, u = o.querySelectorAll("[itemprop]"), s = 0; s < u.length; s++) {
                            var l = u[s];
                            if (!n.has(l)) {
                                n.add(l);
                                var f = l.getAttribute("itemprop");
                                if ("string" == typeof f && "" !== f) {
                                    var d = Uc(l);
                                    if (null != d) {
                                        var p = c[f];
                                        null != p && xc(a, f) ? Array.isArray(p) ? c[f].push(d) : c[f] = [p, d] : c[f] = d
                                    }
                                }
                            }
                        }
                        t.unshift({
                            schema: {
                                dimensions: {
                                    h: o.clientHeight,
                                    w: o.clientWidth
                                },
                                properties: Gc(a) ? {} : c,
                                subscopes: [],
                                type: a
                            },
                            scope: o
                        })
                    }
                }
                for (var h = [], _ = [], v = 0; v < t.length; v++) {
                    for (var g = t[v], y = g.scope, m = g.schema, E = h.length - 1; E >= 0; E--) {
                        if (h[E].scope.contains(y)) {
                            h[E].schema.subscopes.push(m);
                            break
                        }
                        h.pop()
                    }
                    0 === h.length && _.push(m), h.push({
                        schema: m,
                        scope: y
                    })
                }
                var b = JSON.stringify(_);
                return b.length > 3e4 && (b = "[]", Mc.getMicroData = !1), b
            }()
        } catch (e) {
            co(Mr.CUSTOM_ERROR, e, {
                custom_name: "assemble_auto_config_failed",
                custom_enum: "microdata"
            })
        }
        try {
            var n = function() {
                    if (!Mc.getJSONLD) return {
                        data: "[]",
                        errors: []
                    };
                    for (var e = [], t = [], n = document.querySelectorAll('script[type="application/ld+json"]'), r = 0, i = 0; i < n.length; i++) {
                        var o = n[i].innerText;
                        if (null != o && "" !== o) {
                            if ((r += o.length) > 3e4) return Mc.getJSONLD = !1, {
                                data: JSON.stringify([]),
                                errors: [{
                                    name: pc.OVER_LENGTH,
                                    message: "".concat(String(r))
                                }]
                            };
                            var a = void 0;
                            try {
                                a = JSON.parse(o.replace(/[\n\r\t]+/g, " "))
                            } catch (e) {
                                t.push({
                                    name: pc.ERROR_FORMAT,
                                    message: e.message
                                })
                            }
                            try {
                                a = qc(a)
                            } catch (e) {
                                return {
                                    data: JSON.stringify([]),
                                    errors: [{
                                        name: pc.FILTER_SENSITIVE_FIELDS,
                                        message: e.message
                                    }]
                                }
                            }
                            a && e.push(a)
                        }
                    }
                    return {
                        data: JSON.stringify(e),
                        errors: t
                    }
                }(),
                r = n.data,
                i = n.errors;
            t.json_ld = r, i && i.forEach((function(e) {
                var t = e.name,
                    n = e.message;
                co(Mr.CUSTOM_ERROR, {
                    message: n
                }, {
                    custom_name: "parse_json_ld_failed",
                    custom_enum: t
                })
            }))
        } catch (e) {
            co(Mr.CUSTOM_ERROR, e, {
                custom_name: "assemble_auto_config_failed",
                custom_enum: "json_ld"
            })
        }
        try {
            t.open_graph = function(e) {
                for (var t = jc(["og", "product", "music", "video", "article", "book", "profile", "website", "twitter"]), n = {}, r = document.querySelectorAll("meta[property],meta[name]"), i = 0; i < r.length; i++) {
                    var o = r[i],
                        a = o.getAttribute("property") || o.getAttribute("name"),
                        c = Dc(o.getAttribute("content"));
                    if ("string" == typeof a && -1 !== a.indexOf(":") && "string" == typeof c && t.has(a.split(":")[0])) {
                        var u = n[a];
                        null != u && Lc(a) ? Array.isArray(u) ? n[a].push(c) : n[a] = [u, c] : n[a] = c
                    }
                }
                return JSON.stringify(Fc(n, e))
            }(e.open_graph)
        } catch (e) {
            co(Mr.CUSTOM_ERROR, e, {
                custom_name: "assemble_auto_config_failed",
                custom_enum: "open_graph"
            })
        }
        try {
            t.meta = function(e) {
                var t = {},
                    n = jc(["description", "keywords", "keyword"]),
                    r = document.querySelector("title");
                r && (t.title = Dc(r.innerText));
                for (var i = document.querySelectorAll("meta[property],meta[name]"), o = 0; o < i.length; o++) {
                    var a = i[o],
                        c = a.getAttribute("name") || a.getAttribute("property"),
                        u = Dc(a.getAttribute("content"));
                    "string" == typeof c && "string" == typeof u && n.has(c) && (t[c] = u)
                }
                return JSON.stringify(Fc({
                    title: t.title,
                    "meta:description": t.description,
                    "meta:keywords": t.keywords || t.keyword
                }, e))
            }(e.meta)
        } catch (e) {
            co(Mr.CUSTOM_ERROR, e, {
                custom_name: "assemble_auto_config_failed",
                custom_enum: "meta"
            })
        }
        return t
    }
    var Hc, Jc = ["form", "[id*=form], [class*=form]"],
        Wc = ["label"],
        Kc = ["input,select,textarea"],
        Yc = ["radio", "checkbox"],
        Xc = ["hidden", "reset", "submit", "password"];

    function Qc(e, t) {
        try {
            for (var n = 0; n < e.length; n++) {
                var r = t.querySelectorAll(e[n]);
                if (r && r.length > 0) return Array.from(r)
            }
            return []
        } catch (e) {
            return co(Mr.CUSTOM_ERROR, e, {
                custom_name: wc,
                custom_enum: gc.GET_ELEMENTS_ERROR
            }), []
        }
    }

    function zc(e) {
        var t = "";
        return function e(n) {
            for (; n;) n.nodeType === Node.TEXT_NODE ? t += n.textContent : "SELECT" !== n.nodeName && n.firstChild && e(n.firstChild), n = n.nextSibling
        }(e.firstChild), t.replace(/[\t\n]/g, "").trim()
    }

    function Zc(e) {
        if (!e) return !1;
        var t = window.getComputedStyle(e);
        return "none" !== t.display && ("visible" === t.visibility && (!$c(e) && (0 !== e.offsetWidth || 0 !== e.offsetHeight)))
    }

    function $c(e) {
        return !(!e || e.isSameNode(document.body) || e.isSameNode(document)) && ("0" == window.getComputedStyle(e).opacity || $c(e.parentElement))
    }

    function eu(e) {
        var t = e.getAttribute("type");
        return !!t && Xc.indexOf(t) > -1
    }

    function tu(e) {
        return e && Oc(e) ? "__Text__" : e
    }! function(e) {
        e[e.CONTAIN = 0] = "CONTAIN", e[e.ID = 1] = "ID", e[e.SELECTOR = 2] = "SELECTOR"
    }(Hc || (Hc = {}));
    var nu = function() {
            function e(t) {
                i(this, e), this.formUpdateHandlers = [], this.answerMap = {}, this.rules = this.getRules(t), this.init()
            }
            return a(e, [{
                key: "getRules",
                value: function(e) {
                    var t = e.plugins && e.plugins.AutoConfig;
                    return t && t[Ec.AUTO_FORM]
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "initAutoForm_init",
                            start: performance.now()
                        }
                    } catch (e) {}
                    try {
                        this.forms = this.detectFormElement(), this.forms && this.forms.forEach((function(t) {
                            t.formDetail = e.assembleFormDetail(t), e.startFormObserver(t, e.formUpdateHandlers)
                        }))
                    } catch (e) {
                        co(Mr.CUSTOM_ERROR, e, {
                            custom_name: wc,
                            custom_enum: gc.INIT_ERROR
                        })
                    }
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }, {
                key: "getOverallFormDetail",
                value: function() {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var e = {
                            taskName: window.ttq._pf_tn,
                            functionName: "initAutoForm_getOverallFormDetail",
                            start: performance.now()
                        }
                    } catch (e) {}
                    var t = "[]";
                    try {
                        if (this.forms && this.forms.length > 0) this.forms.some((function(e) {
                            var t = e.el;
                            return !document.body.contains(t)
                        })) && this.init(), t = JSON.stringify(this.forms.map((function(e) {
                            return e.formDetail
                        })).filter((function(e) {
                            return e
                        })))
                    } catch (e) {
                        co(Mr.CUSTOM_ERROR, e, {
                            custom_name: wc,
                            custom_enum: gc.GET_OVERALL_FORM_DETAIL_ERROR
                        })
                    }
                    try {
                        window.ttq && window.ttq._ppf && (e.end = performance.now(), window.ttq._ppf.push(e))
                    } catch (e) {}
                    return t
                }
            }, {
                key: "addFormUpdateHandler",
                value: function(e) {
                    this.formUpdateHandlers.push(e)
                }
            }, {
                key: "startFormObserver",
                value: function(e, t) {
                    var n = this;
                    try {
                        var r = Oi((function() {
                            var r = n.assembleFormDetail(e);
                            (!e.formDetail || r && ki(r, e.formDetail)) && (e.formDetail = r, t.forEach((function(t) {
                                return t.call(n, e.formDetail)
                            })))
                        }), Tc, this);
                        if (e.el.parentNode) {
                            var i = e.el.parentNode;
                            this.observer && this.observer.disconnect(), this.observer = new MutationObserver(r), this.observer.observe(i, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            }), i.addEventListener("click", r, {
                                capture: !0
                            })
                        }
                    } catch (e) {
                        co(Mr.CUSTOM_ERROR, e, {
                            custom_name: wc,
                            custom_enum: gc.FORM_OBSERVER_ERROR
                        })
                    }
                }
            }, {
                key: "detectFormElement",
                value: function() {
                    try {
                        var e = [0, 0, 0],
                            t = function(e) {
                                return (t = Qc(e || Jc, document)).filter((function(e) {
                                    return !t.some((function(t) {
                                        return t.contains(e) && t !== e
                                    }))
                                }));
                                var t
                            }(this.rules);
                        if (!t) return [];
                        var n = t.map((function(e) {
                            return {
                                el: e,
                                questions: []
                            }
                        }));
                        return n.forEach((function(t) {
                            var n, r = function(e) {
                                    return Qc(Wc, e)
                                }(t.el),
                                i = new Set([]);
                            r.forEach((function(n) {
                                var r = function(e, t) {
                                    var n = Qc(Kc, e);
                                    if (n && n.length) return {
                                        els: n,
                                        from: Hc.CONTAIN
                                    };
                                    var r = e.getAttribute("for");
                                    return !(!r || (n = function(e, t) {
                                        return Qc(["input[id='".concat(e, "'],select[id='").concat(e, "'],textarea[id='").concat(e, "']")], t)
                                    }(r, t), !n)) && {
                                        els: n,
                                        from: Hc.ID
                                    }
                                }(n, t.el);
                                if (r) {
                                    var o = r.els,
                                        a = r.from,
                                        c = o.filter((function(e) {
                                            return !eu(e)
                                        })).map((function(e) {
                                            return i.add(e), {
                                                el: e,
                                                from: a
                                            }
                                        }));
                                    c && c.length && (e[a] = 1, t.questions.push({
                                        el: n,
                                        answers: c
                                    }))
                                }
                            })), (n = t.el, Qc(Kc, n)).filter((function(e) {
                                return !eu(e)
                            })).forEach((function(n) {
                                if (!i.has(n)) {
                                    e[Hc.SELECTOR] = 1;
                                    var r = function(e, t) {
                                        return function e(n) {
                                            return null == n || n.isSameNode(t) ? t : zc(n).length > 0 ? n : e(n.parentNode)
                                        }(e.parentNode)
                                    }(n, t.el);
                                    t.questions.push({
                                        el: r,
                                        answers: [{
                                            el: n,
                                            from: Hc.SELECTOR
                                        }]
                                    })
                                }
                            }))
                        })), ao(Mr.CUSTOM_INFO, {
                            custom_name: "form_detail_answer_from",
                            custom_enum: e.join("")
                        }), n
                    } catch (e) {
                        return co(Mr.CUSTOM_ERROR, e, {
                            custom_name: wc,
                            custom_enum: gc.DETECT_FORM_ELEMENT_ERROR
                        }), []
                    }
                }
            }, {
                key: "calculateQuestionFilledTime",
                value: function(e) {
                    var t = e.el,
                        n = e.answers,
                        r = Nc(t),
                        i = n.reduce((function(e, t) {
                            var n = t.el,
                                r = n.getAttribute("type");
                            return r && Yc.indexOf(r.toLowerCase()) > -1 ? "".concat(e, ",").concat(n.checked) : "".concat(e, ",").concat(n.value)
                        }), "");
                    this.answerMap[r] || (this.answerMap[r] = {
                        defaultValue: i,
                        value: i
                    });
                    var o = this.answerMap[r],
                        a = o.defaultValue,
                        c = o.filledTime;
                    if (this.answerMap[r].value = i, a !== i) return c || (this.answerMap[r].filledTime = +new Date);
                    delete this.answerMap[r].filledTime
                }
            }, {
                key: "assembleFormDetail",
                value: function(e) {
                    var t = this,
                        n = e.el,
                        r = e.questions;
                    try {
                        var i = {
                            xpath: Nc(n),
                            id: n.id,
                            name: tu(n.getAttribute("name")),
                            tag: n.tagName.toLowerCase(),
                            class_name: n.className,
                            questions: [],
                            width: n.offsetWidth,
                            height: n.offsetHeight,
                            is_visible: Zc(n)
                        };
                        return i.questions = r.map((function(e) {
                            var n = e.el,
                                r = e.answers,
                                i = {
                                    xpath: Nc(n),
                                    id: n.id,
                                    name: tu(zc(n)),
                                    tag: n.tagName.toLowerCase(),
                                    class_name: n.className,
                                    filled_time: t.calculateQuestionFilledTime(e),
                                    answers: [],
                                    width: n.offsetWidth,
                                    height: n.offsetHeight,
                                    is_visible: Zc(n)
                                };
                            return r.forEach((function(e) {
                                var t = e.el,
                                    n = e.from;
                                t && "SELECT" === t.tagName.toUpperCase() ? i.answers = i.answers.concat(Array.from(t.querySelectorAll("option")).map((function(e) {
                                    return {
                                        xpath: Nc(e),
                                        id: e.id,
                                        name: tu(e.value || e.innerText),
                                        tag: e.tagName.toLowerCase(),
                                        class_name: e.className,
                                        from: n,
                                        width: e.offsetWidth,
                                        height: e.offsetHeight,
                                        is_visible: Zc(t)
                                    }
                                }))) : i.answers.push({
                                    xpath: Nc(t),
                                    id: t.id,
                                    name: tu(t.getAttribute("name")),
                                    tag: t.tagName.toLowerCase(),
                                    class_name: t.className,
                                    input_type: t.getAttribute("type"),
                                    placeholder: tu(t.getAttribute("placeholder")),
                                    from: n,
                                    width: t.offsetWidth,
                                    height: t.offsetHeight,
                                    is_visible: Zc(t)
                                })
                            })), i
                        })), i
                    } catch (e) {
                        return void co(Mr.CUSTOM_ERROR, e, {
                            custom_name: wc,
                            custom_enum: gc.ASSEMBLE_FORM_DETAIL_ERROR
                        })
                    }
                }
            }]), e
        }(),
        ru = ["United States", "US", "Canada", "CA", "Australia", "AU", "Mexico", "MX", "Argentina", "AR", "Chile", "CL", "Colombia", "CO", "Fiji", "FJ", "Liberia", "LR", "Namibia", "NA", "New Zealand", "NZ", "Singapore", "SG", "Solomon Islands", "SB", "Suriname", "SR", "South Africa", "ZA", "Barbados", "BB", "Belize", "BZ", "Cuba", "CU", "Dominican Republic", "DO", "Guyana", "GY", "Jamaica", "JM", "Cayman Islands", "KY", "Trinidad and Tobago", "TT", "Tuvalu", "TV", "Zimbabwe", "ZW", "United Kingdom", "GB", "Egypt", "EG", "Falkland Islands", "FK", "Gibraltar", "GI", "Guernsey", "GG", "Isle of Man", "IM", "Jersey", "JE", "Lebanon", "LB", "Saint Helena", "SH", "Syria", "SY", "Sudan", "SD", "Japan", "JP", "China", "CN", "Japan", "JP", "CN", "South Korea", "KR", "Philippines", "PH", "Cuba", "CU", "Sweden", "SE", "Norway", "NO", "Denmark", "DK", "Iceland", "IS", "Costa Rica", "CR", "El Salvador", "SV", "Bolivia", "BO", "Venezuela", "VE", "Bahamas", "BS", "Brunei", "BN", "Ethiopia", "ET", "Eritrea", "ER", "Iran", "IR", "Oman", "OM", "Qatar", "QA", "Saudi Arabia", "SA", "Yemen", "YE", "Bulgaria", "BG", "Kyrgyzstan", "KG", "Central African CFA franc zone", "XAF", "West African CFA franc zone", "XOF"].map((function(e) {
            return e.toUpperCase()
        })),
        iu = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNH", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EEK", "EGP", "ERN", "ETB", "ETH", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHC", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTC", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RMB", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRL", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYI", "UYU", "UYW", "UZS", "VEF", "VES", "VND", "VUV", "WST", "XAF", "XBT", "XCD", "XOF", "XPF", "XSU", "XUA", "YER", "ZAR", "ZMW", "ZWD", "ZWL"],
        ou = ["firstidxpath", "absolutexpath", "threeleveltagclassxpath"],
        au = ["modelxpath"],
        cu = function(e, t) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var n = {
                    taskName: window.ttq._pf_tn,
                    functionName: "updateParameterInferenceData",
                    start: performance.now()
                }
            } catch (e) {}
            try {
                var r = e.getPageInfo(),
                    i = du(r.url, t);
                r.url.includes("checkout") && i && gu(i, r.url, t), i && fu(i)
            } catch (e) {
                co(Mr.CUSTOM_ERROR, e, {
                    custom_name: "updateParameterInferenceData"
                })
            }
            try {
                window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n))
            } catch (e) {}
        },
        uu = function(e) {
            try {
                var t = e.plugins && e.plugins.AutoConfig;
                return t && t.vc_rules
            } catch (e) {
                return
            }
        },
        su = function(e) {
            var t;
            try {
                if (!e) return null;
                var n = null,
                    r = document.evaluate(e, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (r) {
                    var i = (null === (t = r.textContent) || void 0 === t ? void 0 : t.trim()) || null;
                    i && (n = i)
                }
                return n
            } catch (e) {
                return co(Mr.CUSTOM_ERROR, e, {
                    custom_name: "updateParameterInferenceData",
                    custom_enum: "getEnhancementRuleDataByXPath"
                }), null
            }
        },
        lu = function(e, t) {
            if (!e) return null;
            var n, r = null,
                i = T(t);
            try {
                for (i.s(); !(n = i.n()).done;) {
                    var o = n.value;
                    if (r = su(e[o])) break
                }
            } catch (e) {
                i.e(e)
            } finally {
                i.f()
            }
            if (!r) return null;
            var a = r,
                c = (null == e ? void 0 : e.format_method) && function(e) {
                    if (!e) return null;
                    var t = e.split("|||").filter((function(e) {
                        return "" !== e
                    }));
                    if (t.length < 2) return null;
                    var n = v(t, 3),
                        r = n[0],
                        i = n[1],
                        o = n[2];
                    return {
                        pattern: r,
                        replacement: i,
                        flags: void 0 === o ? "" : o
                    }
                }(e.format_method);
            if (c) try {
                var u = c.pattern,
                    s = c.replacement,
                    l = c.flags,
                    f = new RegExp(u, l);
                a = r.replace(f, s)
            } catch (e) {
                co(Mr.CUSTOM_ERROR, e, {
                    custom_name: "updateParameterInferenceData",
                    custom_enum: "parseFormatMethod"
                })
            }
            var d = Object.assign({}, e, {
                parameterOriValue: r,
                parameterValue: a
            });
            return ou.forEach((function(e) {
                delete d[e]
            })), au.forEach((function(e) {
                delete d[e]
            })), d
        },
        fu = function(e) {
            try {
                var t = function(e) {
                    try {
                        if (!e) return null;
                        var t, n = T(e);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                if (r.parameter_enhancement) return r.parameter_enhancement
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    } catch (e) {
                        e(Mr.CUSTOM_ERROR, e, {
                            custom_name: "updateParameterInferenceData",
                            custom_enum: "getEnhancementRules"
                        })
                    }
                    return null
                }(e);
                if (!t) return null;
                var n = {};
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var i = t[r];
                        if (i) {
                            var o = void 0;
                            (o = (o = lu(i.helper_rule, ou)) && o.parameterValue ? o : lu(i.model_rule, au)) && (n[r] = Object.assign({}, o), ao(Mr.CUSTOM_INFO, {
                                custom_name: "updateParameterInferenceData",
                                custom_enum: "enhancement_rule_result",
                                extJSON: {
                                    message: "".concat(JSON.stringify(i), "||").concat(JSON.stringify(o))
                                }
                            }))
                        }
                    }
                return yu(bu, n), ao(Mr.CUSTOM_INFO, {
                    custom_name: "updateParameterInferenceData",
                    custom_enum: "enhancement_properties",
                    extJSON: {
                        message: "".concat(JSON.stringify(n))
                    }
                }), Object.keys(n).length > 0 ? n : null
            } catch (e) {
                return co(Mr.CUSTOM_ERROR, e, {
                    custom_name: "updateParameterInferenceData",
                    custom_enum: "enhancement_parameter_inference"
                }), null
            }
        },
        du = function(e, t) {
            for (var n in t)
                if (e.includes(n)) return t[n];
            return null
        },
        pu = function(e, t) {
            var n = function(e, t) {
                    try {
                        for (var n, r = document.evaluate(e, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null), i = null; n = r.iterateNext();) /\d/.test(n.innerText) && (i = n);
                        if (!i && t)
                            for (var o = document.getElementsByClassName(t), a = 0; a < o.length; a++) {
                                var c = o[a];
                                c instanceof HTMLElement && /\d/.test(c.innerText) && (i = c)
                            }
                        return i
                    } catch (e) {
                        return co(Mr.CUSTOM_ERROR, e, {
                            custom_name: "updateParameterInferenceData",
                            custom_enum: "getLastElementWithNumber"
                        }), null
                    }
                }(e, t),
                r = null == n ? void 0 : n.textContent;
            return {
                priceNumberString: r ? function(e) {
                    var t = /(?:\d[\d\s,.]*\d|\d)/g,
                        n = e.match(t);
                    if (n) {
                        var r, i = n[0],
                            o = T(n);
                        try {
                            for (o.s(); !(r = o.n()).done;) {
                                if (r.value !== i) return null
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return function(e) {
                            var t = e.replace(/[\s,\.]/g, ""),
                                n = Math.max(e.lastIndexOf("."), e.lastIndexOf(",")),
                                r = !1; - 1 !== n && n >= e.length - 3 && (r = !0);
                            r && (t = t.slice(0, n - (e.length - 1)) + "." + t.slice(n - (e.length - 1)));
                            return t
                        }(i)
                    }
                    return null
                }(r) : null,
                textContent: r
            }
        },
        hu = function(e) {
            var t;
            if (!e) return {
                currencyCode: null,
                currencyCodeFromeXpath: null
            };
            var n = null === (t = document.evaluate(e, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) || void 0 === t ? void 0 : t.textContent,
                r = ((null == n ? void 0 : n.trim()) ? iu.includes(n.toUpperCase().trim()) : null) ? null == n ? void 0 : n.toUpperCase().trim() : null;
            return {
                currencyCode: n,
                currencyCodeFromeXpath: r
            }
        },
        _u = function(e) {
            var t;
            if (!e) return {
                countryCode: null,
                countryCodeFromXpath: null
            };
            var n = null === (t = document.evaluate(e, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) || void 0 === t ? void 0 : t.textContent,
                r = ((null == n ? void 0 : n.trim()) ? ru.includes(n.toUpperCase().trim()) : null) ? null == n ? void 0 : n.toUpperCase().trim() : null;
            return {
                countryCode: n,
                countryCodeFromXpath: r
            }
        },
        vu = function(e) {
            try {
                var t = new URL(e).hostname.split(".");
                for (var n in t)
                    if (ru.includes(t[n].toUpperCase())) return t[n].toUpperCase()
            } catch (e) {}
            return null
        },
        gu = function(e, t, n) {
            try {
                if (e) {
                    var r, i = T(e);
                    try {
                        for (i.s(); !(r = i.n()).done;) {
                            var o = r.value;
                            if (o.valueXpath && o.currency && o.currency.val) {
                                var a = o.currency.val,
                                    c = pu(o.valueXpath, o.currency.val),
                                    u = c.textContent,
                                    s = c.priceNumberString;
                                if (s && u) {
                                    var l = hu(o.currency.xpath),
                                        f = l.currencyCode,
                                        d = l.currencyCodeFromeXpath;
                                    f && ao(Mr.CUSTOM_INFO, {
                                        custom_name: "auto_value_currency_currency_code_form_xpath",
                                        extJSON: {
                                            url: t,
                                            currencyCode: f,
                                            vcConfig: n
                                        }
                                    });
                                    var p = _u(o.countryCodeXpath),
                                        h = p.countryCode,
                                        _ = p.countryCodeFromXpath;
                                    h && ao(Mr.CUSTOM_INFO, {
                                        custom_name: "auto_value_currency_country_form_xpath",
                                        extJSON: {
                                            url: t,
                                            country: h,
                                            vcConfig: n
                                        }
                                    });
                                    var v = {
                                        value: s,
                                        currency: d || a,
                                        ori_value: u,
                                        rule_key: o.rule_key,
                                        country_code: _
                                    };
                                    if (!_) {
                                        var g = vu(t);
                                        v.country_code = g
                                    }
                                    return ao(Mr.CUSTOM_INFO, {
                                        custom_name: "auto_value_currency_update_info",
                                        extJSON: {
                                            url: t,
                                            autoProperties: v,
                                            vcConfig: n
                                        }
                                    }), yu(Eu, v), v
                                }
                            }
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
                return null
            } catch (e) {
                return co(Mr.CUSTOM_ERROR, e, {
                    custom_name: "updateParameterInferenceData",
                    custom_enum: "updateAutoVCData"
                }), null
            }
        };
    var yu = function(e, t) {
            try {
                sessionStorage.setItem(e, JSON.stringify(t))
            } catch (e) {}
        },
        mu = function(e) {
            try {
                var t = sessionStorage.getItem(e);
                return t ? JSON.parse(t) : null
            } catch (e) {
                return null
            }
        },
        Eu = "value_currency_rule",
        bu = "parameter_inference_rule",
        wu = [bc.CLICK, bc.SCROLL],
        Iu = function() {
            function e(t) {
                var n = this;
                i(this, e), this.handlerArray = t, wu.forEach((function(e) {
                    window.addEventListener(e.toLowerCase(), Oi((function() {
                        n.interactionHandler(e)
                    }), Tc, n), {
                        capture: !0,
                        passive: !0
                    })
                }))
            }
            return a(e, [{
                key: "iterateHandlerArray",
                value: function(e) {
                    this.handlerArray.forEach((function(t) {
                        return t(e)
                    }))
                }
            }, {
                key: "interactionHandler",
                value: function(e) {
                    var t = this;
                    this.timeoutId && clearTimeout(this.timeoutId), this.iterateHandlerArray(e), this.timeoutId = setTimeout((function() {
                        t.iterateHandlerArray(e)
                    }), Tc)
                }
            }]), e
        }(),
        Tu = function() {
            function e() {
                i(this, e), this.history = {}
            }
            return a(e, [{
                key: "hasReport",
                value: function(e, t, n) {
                    var r = this.genHistoryKey(e, t);
                    return this.history[r] && this.history[r].indexOf(n) > -1
                }
            }, {
                key: "addHistory",
                value: function(e, t, n) {
                    var r = this.genHistoryKey(e, t);
                    this.history[r] || (this.history[r] = []), this.history[r].push(n)
                }
            }, {
                key: "clearHistory",
                value: function() {
                    this.history = {}
                }
            }, {
                key: "genHistoryKey",
                value: function(e, t) {
                    return "".concat(e, ":").concat(t)
                }
            }]), e
        }(),
        Ou = function() {
            function e(t, n, r) {
                i(this, e), this.context = t, this.reportHistory = new Tu, this.reporters = n, this.reportService = r
            }
            return a(e, [{
                key: "report",
                value: function(e, t, n) {
                    var r = this,
                        i = fo(Nr.AUTO_CONFIG),
                        o = this.getReportPixelList(t, n),
                        a = this.assemblyReportData(e, n, o);
                    a && i && Po(this.reportService.reportPreposition || []).then((function() {
                        r.reportService.report(i, a, Bn.defaultReport)
                    }))
                }
            }, {
                key: "clearHistory",
                value: function() {
                    this.reportHistory.clearHistory()
                }
            }, {
                key: "getReportPixelList",
                value: function(e, t) {
                    var n = this,
                        r = JSON.stringify(Object.assign({}, t, {
                            page_trigger: void 0
                        }));
                    return this.reporters.filter((function(t) {
                        return !!Ac(t) && Pc(t, e)
                    })).filter((function(t) {
                        var i = t.getReporterId();
                        return !([mc.AUTO_COLLECTION, mc.AUTO_FORM].indexOf(e) > -1 && n.reportHistory.hasReport(e, i, r)) && (n.reportHistory.addHistory(e, i, r), t)
                    }))
                }
            }, {
                key: "assemblyReportData",
                value: function(e, t, n) {
                    var r;
                    if (0 !== n.length) {
                        var i = n.map((function(e) {
                                return e.getReporterId()
                            })),
                            o = this.context.getPageSign(),
                            a = n[0],
                            c = a.assemblyData(a.getReporterId(), "", {}, {}, Nr.AUTO_CONFIG);
                        return delete c.event, c.action = e, c.auto_collected_properties = t, c.context.pixel || (c.context.pixel = {}), c.context.pixel.code = i[0], c.context.pixel.codes = i.join("|"), c.context.index = null === (r = o.pageIndex) || void 0 === r ? void 0 : r.index, c.context.session_id = o.sessionId, c.context.pageview_id = ar(this.context.getPageViewId(), a.reporterInfo.loadId, mr), c.message_id = c.message_id.replace(/-[^-]*$/, ""), c
                    }
                }
            }]), e
        }(),
        Su = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Nu = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ru = "AutoConfig",
        Au = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: Ru,
                    reporters: r,
                    context: e
                })).autoCollectedMetadata = {}, c.initialize = !1, c.autoFormUpdateHandler = Oi((function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var t = {
                                taskName: window.ttq._pf_tn || "auto_config_form_handler",
                                functionName: window.ttq._pf_tn && "auto_config_form_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "auto_config_form_handler")
                        }
                    } catch (e) {}
                    if (c.autoForm) {
                        if (c.autoCollectedFormDetail = c.autoForm.getOverallFormDetail(), c.autoCollectedFormDetail.length > 3e4) return void co(Mr.CUSTOM_ERROR, {
                            message: "".concat(String(c.autoCollectedFormDetail.length))
                        }, {
                            custom_name: wc,
                            custom_enum: gc.OVER_LENGTH
                        });
                        c.actTracker.report(yc.METADATA, mc.AUTO_FORM, {
                            page_trigger: e,
                            form_details: c.autoCollectedFormDetail
                        })
                    }
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t), "auto_config_form_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }), 200, f(c)), c.autoCollectionUpdateHandler = Oi((function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var t = {
                                taskName: window.ttq._pf_tn || "auto_config_metadata_handler",
                                functionName: window.ttq._pf_tn && "auto_config_metadata_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "auto_config_metadata_handler")
                        }
                    } catch (e) {}
                    c.autoCollectedMetadata = Vc(c.filter), c.actTracker.report(yc.METADATA, mc.AUTO_COLLECTION, {
                        page_trigger: e,
                        content_data: c.autoCollectedMetadata
                    });
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t), "auto_config_metadata_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }), 200, f(c)), c.autoClickCallback = function(e) {
                    try {
                        c.signal_insights_config && cu(c.context, c.signal_insights_config);
                        var t = function(e) {
                            var t = e,
                                n = e.parentNode,
                                r = 0,
                                i = !1;
                            try {
                                i = Pi(t)
                            } catch (e) {
                                co(Mr.CUSTOM_ERROR, e, {
                                    custom_name: "button_check_error",
                                    custom_enum: "auto_click",
                                    extJSON: {
                                        element: t
                                    }
                                }), i = !1
                            }
                            if (i) return t;
                            for (; r < 5 && n && n !== document;) {
                                var o = !1;
                                try {
                                    o = Pi(n)
                                } catch (e) {
                                    co(Mr.CUSTOM_ERROR, e, {
                                        custom_name: "button_check_error",
                                        custom_enum: "auto_click",
                                        extJSON: {
                                            element: t
                                        }
                                    }), o = !1
                                }
                                if (o) return n;
                                n = n.parentNode, r++
                            }
                            return e
                        }(e.target);
                        if (t) {
                            var n = function(e) {
                                var t = e.tag,
                                    n = e.class,
                                    r = e.destination,
                                    i = e.id,
                                    o = e.name,
                                    a = e.type,
                                    c = e.value,
                                    u = e.rect,
                                    s = e.xpath,
                                    l = e.inner_text,
                                    f = e.image_url,
                                    d = {
                                        tag: t,
                                        attributes: {},
                                        inner_text: l,
                                        xpath: s,
                                        num_child_buttons: e.num_child_buttons,
                                        timestamp: (new Date).toISOString(),
                                        position: u ? {
                                            x: u.x,
                                            y: u.y
                                        } : {
                                            x: "",
                                            y: ""
                                        }
                                    };
                                return n && (d.attributes.class = n), r && (d.attributes.destination = r), i && (d.attributes.id = i), o && (d.attributes.name = o), a && (d.attributes.type = a), c && (d.attributes.value = c), f && (d.image_url = f), d
                            }(function(e) {
                                for (var t, n, r, i, o, a, c, u = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], s = e.attributes, l = {
                                        type: "",
                                        value: "",
                                        name: "",
                                        class: "",
                                        dataset: "",
                                        id: "",
                                        tag: "",
                                        destination: "",
                                        xpath: "",
                                        inner_text: "",
                                        image_url: "",
                                        num_child_buttons: 0
                                    }, f = 0; f < s.length; f++) {
                                    var d = s[f];
                                    l[d.name] = d.value
                                }
                                var p = e.dataset;
                                l.dataset = JSON.stringify(p), l.id = null !== (t = e.id) && void 0 !== t ? t : "", l.class = null !== (n = e.className) && void 0 !== n ? n : "", l.tag = e.tagName, l.destination = kc(e), l.name = null !== (r = e.getAttribute("name")) && void 0 !== r ? r : "", l.value = null !== (i = e.getAttribute("value")) && void 0 !== i ? i : "", l.type = null !== (o = e.getAttribute("type")) && void 0 !== o ? o : "";
                                var h = e.getBoundingClientRect();
                                l.rect = h;
                                try {
                                    l.xpath = Sc(e)
                                } catch (t) {
                                    l.xpath = "", co(Mr.CUSTOM_ERROR, t, {
                                        custom_name: "button_check_error",
                                        custom_enum: "auto_click",
                                        extJSON: {
                                            element: e
                                        }
                                    })
                                }
                                return l.inner_text = null !== (a = e.innerText) && void 0 !== a ? a : "", l.image_url = null !== (c = e.getAttribute("src")) && void 0 !== c ? c : "", l.num_child_buttons = u ? Cc(e) : 0, l
                            }(t));
                            if (function(e) {
                                    var t, n, r = (null === (t = e.inner_text) || void 0 === t ? void 0 : t.toString().toLowerCase()) || "",
                                        i = (null === (n = e.image_url) || void 0 === n ? void 0 : n.toString().toLowerCase()) || "",
                                        o = [];
                                    if (e.attributes) {
                                        var a = e.attributes;
                                        o = [a.class, a.id, a.name, a.type, a.value, a.destination].map((function(e) {
                                            return (null == e ? void 0 : e.toString().toLowerCase()) || ""
                                        }))
                                    }
                                    return [r, i].concat(y(o)).some(Oc)
                                }(n)) return void ao(Mr.CUSTOM_INFO, {
                                custom_name: "sensitive_button",
                                extJSON: {
                                    attributes: {
                                        id: n.attributes.id,
                                        tag: n.tag,
                                        class: n.attributes.class
                                    }
                                }
                            });
                            c.reportButtonClick(n)
                        }
                    } catch (e) {
                        co(Mr.CUSTOM_ERROR, e, {
                            custom_name: "auto_click_callback_error",
                            custom_enum: "auto_click"
                        })
                    }
                }, c.filter = o.auto_config || {
                    open_graph: [],
                    microdata: [],
                    json_ld: [],
                    meta: []
                }, c.actTracker = new Ou(e, r, a), c
            }
            return a(n, [{
                key: "initBaseFeature",
                value: function(e) {
                    !this.initialize && Ac(e) && (this.initAutoClick(), this.initAutoCollection(), this.initInteractionListener(e), this.initialize = !0)
                }
            }, {
                key: "initExtraFeature",
                value: function(e) {
                    !this.autoForm && this.initialize && Pc(e, mc.AUTO_FORM) && this.initAutoForm(e), this.initAutoVC(e)
                }
            }, {
                key: "initInteractionListener",
                value: function(e) {
                    var t = this,
                        n = e.options;
                    !this.initialize && n && !1 !== n.autoConfigListener && new Iu([function(e) {
                        Rc(t.autoCollectionUpdateHandler, t)(e)
                    }, function(e) {
                        Rc(t.autoFormUpdateHandler, t)(e)
                    }])
                }
            }, {
                key: "initAutoClick",
                value: function() {
                    var e, t;
                    e = this.autoClickCallback, t = ur((function(t) {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                var n = {
                                    taskName: window.ttq._pf_tn || "auto_config_click_handler",
                                    functionName: window.ttq._pf_tn && "auto_config_click_handler",
                                    start: performance.now()
                                };
                                window.ttq._pf_tn || (window.ttq._pf_tn = "auto_config_click_handler")
                            }
                        } catch (e) {}
                        e(t);
                        try {
                            window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n), "auto_config_click_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                    }), 1e3), document.querySelectorAll(Ri.join(", ")).forEach((function(e) {
                        Ai.some((function(t) {
                            return e.matches(t)
                        })) || e.addEventListener("click", t, {
                            capture: !0
                        })
                    }))
                }
            }, {
                key: "initAutoVC",
                value: function(e) {
                    var t = uu(e);
                    t && (this.signal_insights_config = t)
                }
            }, {
                key: "initAutoCollection",
                value: function() {}
            }, {
                key: "initAutoForm",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "initAutoForm",
                            start: performance.now()
                        }
                    } catch (e) {}
                    this.autoForm = new nu(e), this.autoForm.addFormUpdateHandler(this.autoFormUpdateHandler.bind(this)), this.autoCollectedFormDetail = this.autoForm.getOverallFormDetail();
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }, {
                key: "pixelDidMount",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "auto_config_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    this.initBaseFeature(e), this.initExtraFeature(e);
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }, {
                key: "pixelSend",
                value: function(e, t, n) {
                    var r = this.reporters.find((function(t) {
                        return t.getReporterId() === e
                    }));
                    if (this.signal_insights_config && cu(this.context, this.signal_insights_config), r && uu(r) && (mu(Eu) || mu(bu))) {
                        var i;
                        "CompletePayment" !== t && "Pageview" !== t && "InitiateCheckout" !== t && "PlaceAnOrder" !== t || (i = mu(Eu));
                        var o = mu(bu),
                            a = {
                                vc_properties: Object.assign(Object.assign({}, i && {
                                    value: i.value,
                                    currency: i.currency,
                                    ori_value: i.ori_value,
                                    rule_key: i.rule_key
                                }), o && {
                                    parameter_inference: o
                                })
                            };
                        n.auto_collected_properties = a
                    }
                    "CompletePayment" === t && setTimeout((function() {
                        ! function(e) {
                            try {
                                sessionStorage.removeItem(e)
                            } catch (e) {}
                        }(Eu)
                    }), 500), "Pageview" === t && (r && !Ac(r) || (Rc(this.autoCollectionUpdateHandler, this)(bc.PAGE_VIEW), Rc(this.autoFormUpdateHandler, this)(bc.PAGE_VIEW)))
                }
            }, {
                key: "pageUrlDidChange",
                value: function(e, t) {
                    null != t && "" != t && (this.autoCollectionUpdateHandler(bc.URL_CHANGE), this.autoFormUpdateHandler(bc.URL_CHANGE))
                }
            }, {
                key: "pageWillLeave",
                value: function() {
                    this.autoCollectionUpdateHandler(bc.PAGE_LEAVE), this.autoFormUpdateHandler(bc.PAGE_LEAVE)
                }
            }, {
                key: "reportButtonClick",
                value: function(e) {
                    this.actTracker.report(yc.CLICK, mc.AUTO_VC, {
                        page_trigger: bc.CLICK,
                        trigger_element: e,
                        vc_properties: mu(Eu) ? mu(Eu) : void 0
                    }), this.actTracker.report(yc.CLICK, mc.AUTO_VC_REVERSE, {
                        page_trigger: bc.CLICK,
                        trigger_element: e
                    })
                }
            }]), n
        }($o);
    Au = Su([R.injectable(), Nu(0, R.inject(kr.CONTEXT)), Nu(1, R.inject(kr.TTQ_REPORTERS)), Nu(2, R.inject(kr.TTQ_GLOBAL_OPTIONS)), Nu(3, R.inject(kr.REPORT_SERVICE))], Au);
    var Pu = {
        exports: {}
    };
    ! function(e, t) {
        var n = "__lodash_hash_undefined__",
            r = 9007199254740991,
            i = "[object Arguments]",
            o = "[object Boolean]",
            a = "[object Date]",
            c = "[object Function]",
            u = "[object GeneratorFunction]",
            s = "[object Map]",
            l = "[object Number]",
            f = "[object Object]",
            d = "[object Promise]",
            p = "[object RegExp]",
            h = "[object Set]",
            _ = "[object String]",
            v = "[object Symbol]",
            g = "[object WeakMap]",
            y = "[object ArrayBuffer]",
            m = "[object DataView]",
            E = "[object Float32Array]",
            b = "[object Float64Array]",
            w = "[object Int8Array]",
            I = "[object Int16Array]",
            T = "[object Int32Array]",
            O = "[object Uint8Array]",
            N = "[object Uint8ClampedArray]",
            R = "[object Uint16Array]",
            A = "[object Uint32Array]",
            P = /\w*$/,
            C = /^\[object .+?Constructor\]$/,
            k = /^(?:0|[1-9]\d*)$/,
            M = {};
        M[i] = M["[object Array]"] = M[y] = M[m] = M[o] = M[a] = M[E] = M[b] = M[w] = M[I] = M[T] = M[s] = M[l] = M[f] = M[p] = M[h] = M[_] = M[v] = M[O] = M[N] = M[R] = M[A] = !0, M["[object Error]"] = M[c] = M[g] = !1;
        var D = "object" == typeof S && S && S.Object === Object && S,
            L = "object" == typeof self && self && self.Object === Object && self,
            x = D || L || Function("return this")(),
            j = t && !t.nodeType && t,
            U = j && e && !e.nodeType && e,
            F = U && U.exports === j;

        function B(e, t) {
            return e.set(t[0], t[1]), e
        }

        function q(e, t) {
            return e.add(t), e
        }

        function G(e, t, n, r) {
            var i = -1,
                o = e ? e.length : 0;
            for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
            return n
        }

        function V(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }

        function H(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e, r) {
                n[++t] = [r, e]
            })), n
        }

        function J(e, t) {
            return function(n) {
                return e(t(n))
            }
        }

        function W(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            })), n
        }
        var K = Array.prototype,
            Y = Function.prototype,
            X = Object.prototype,
            Q = x["__core-js_shared__"],
            z = function() {
                var e = /[^.]+$/.exec(Q && Q.keys && Q.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }(),
            Z = Y.toString,
            $ = X.hasOwnProperty,
            ee = X.toString,
            te = RegExp("^" + Z.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            ne = F ? x.Buffer : void 0,
            re = x.Symbol,
            ie = x.Uint8Array,
            oe = J(Object.getPrototypeOf, Object),
            ae = Object.create,
            ce = X.propertyIsEnumerable,
            ue = K.splice,
            se = Object.getOwnPropertySymbols,
            le = ne ? ne.isBuffer : void 0,
            fe = J(Object.keys, Object),
            de = je(x, "DataView"),
            pe = je(x, "Map"),
            he = je(x, "Promise"),
            _e = je(x, "Set"),
            ve = je(x, "WeakMap"),
            ge = je(Object, "create"),
            ye = Ge(de),
            me = Ge(pe),
            Ee = Ge(he),
            be = Ge(_e),
            we = Ge(ve),
            Ie = re ? re.prototype : void 0,
            Te = Ie ? Ie.valueOf : void 0;

        function Oe(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function Se(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function Ne(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function Re(e) {
            this.__data__ = new Se(e)
        }

        function Ae(e, t) {
            var n = He(e) || function(e) {
                    return function(e) {
                        return function(e) {
                            return !!e && "object" == typeof e
                        }(e) && Je(e)
                    }(e) && $.call(e, "callee") && (!ce.call(e, "callee") || ee.call(e) == i)
                }(e) ? function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                    return r
                }(e.length, String) : [],
                r = n.length,
                o = !!r;
            for (var a in e) !t && !$.call(e, a) || o && ("length" == a || Be(a, r)) || n.push(a);
            return n
        }

        function Pe(e, t, n) {
            var r = e[t];
            $.call(e, t) && Ve(r, n) && (void 0 !== n || t in e) || (e[t] = n)
        }

        function Ce(e, t) {
            for (var n = e.length; n--;)
                if (Ve(e[n][0], t)) return n;
            return -1
        }

        function ke(e, t, n, r, d, g, S) {
            var C;
            if (r && (C = g ? r(e, d, g, S) : r(e)), void 0 !== C) return C;
            if (!Ye(e)) return e;
            var k = He(e);
            if (k) {
                if (C = function(e) {
                        var t = e.length,
                            n = e.constructor(t);
                        t && "string" == typeof e[0] && $.call(e, "index") && (n.index = e.index, n.input = e.input);
                        return n
                    }(e), !t) return function(e, t) {
                    var n = -1,
                        r = e.length;
                    t || (t = Array(r));
                    for (; ++n < r;) t[n] = e[n];
                    return t
                }(e, C)
            } else {
                var D = Fe(e),
                    L = D == c || D == u;
                if (We(e)) return function(e, t) {
                    if (t) return e.slice();
                    var n = new e.constructor(e.length);
                    return e.copy(n), n
                }(e, t);
                if (D == f || D == i || L && !g) {
                    if (V(e)) return g ? e : {};
                    if (C = function(e) {
                            return "function" != typeof e.constructor || qe(e) ? {} : (t = oe(e), Ye(t) ? ae(t) : {});
                            var t
                        }(L ? {} : e), !t) return function(e, t) {
                        return Le(e, Ue(e), t)
                    }(e, function(e, t) {
                        return e && Le(t, Xe(t), e)
                    }(C, e))
                } else {
                    if (!M[D]) return g ? e : {};
                    C = function(e, t, n, r) {
                        var i = e.constructor;
                        switch (t) {
                            case y:
                                return De(e);
                            case o:
                            case a:
                                return new i(+e);
                            case m:
                                return function(e, t) {
                                    var n = t ? De(e.buffer) : e.buffer;
                                    return new e.constructor(n, e.byteOffset, e.byteLength)
                                }(e, r);
                            case E:
                            case b:
                            case w:
                            case I:
                            case T:
                            case O:
                            case N:
                            case R:
                            case A:
                                return function(e, t) {
                                    var n = t ? De(e.buffer) : e.buffer;
                                    return new e.constructor(n, e.byteOffset, e.length)
                                }(e, r);
                            case s:
                                return function(e, t, n) {
                                    return G(t ? n(H(e), !0) : H(e), B, new e.constructor)
                                }(e, r, n);
                            case l:
                            case _:
                                return new i(e);
                            case p:
                                return function(e) {
                                    var t = new e.constructor(e.source, P.exec(e));
                                    return t.lastIndex = e.lastIndex, t
                                }(e);
                            case h:
                                return function(e, t, n) {
                                    return G(t ? n(W(e), !0) : W(e), q, new e.constructor)
                                }(e, r, n);
                            case v:
                                return c = e, Te ? Object(Te.call(c)) : {}
                        }
                        var c
                    }(e, D, ke, t)
                }
            }
            S || (S = new Re);
            var x = S.get(e);
            if (x) return x;
            if (S.set(e, C), !k) var j = n ? function(e) {
                return function(e, t, n) {
                    var r = t(e);
                    return He(e) ? r : function(e, t) {
                        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                        return e
                    }(r, n(e))
                }(e, Xe, Ue)
            }(e) : Xe(e);
            return function(e, t) {
                for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e););
            }(j || e, (function(i, o) {
                j && (i = e[o = i]), Pe(C, o, ke(i, t, n, r, o, e, S))
            })), C
        }

        function Me(e) {
            return !(!Ye(e) || (t = e, z && z in t)) && (Ke(e) || V(e) ? te : C).test(Ge(e));
            var t
        }

        function De(e) {
            var t = new e.constructor(e.byteLength);
            return new ie(t).set(new ie(e)), t
        }

        function Le(e, t, n, r) {
            n || (n = {});
            for (var i = -1, o = t.length; ++i < o;) {
                var a = t[i],
                    c = r ? r(n[a], e[a], a, n, e) : void 0;
                Pe(n, a, void 0 === c ? e[a] : c)
            }
            return n
        }

        function xe(e, t) {
            var n, r, i = e.__data__;
            return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
        }

        function je(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return Me(n) ? n : void 0
        }
        Oe.prototype.clear = function() {
            this.__data__ = ge ? ge(null) : {}
        }, Oe.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e]
        }, Oe.prototype.get = function(e) {
            var t = this.__data__;
            if (ge) {
                var r = t[e];
                return r === n ? void 0 : r
            }
            return $.call(t, e) ? t[e] : void 0
        }, Oe.prototype.has = function(e) {
            var t = this.__data__;
            return ge ? void 0 !== t[e] : $.call(t, e)
        }, Oe.prototype.set = function(e, t) {
            return this.__data__[e] = ge && void 0 === t ? n : t, this
        }, Se.prototype.clear = function() {
            this.__data__ = []
        }, Se.prototype.delete = function(e) {
            var t = this.__data__,
                n = Ce(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : ue.call(t, n, 1), !0)
        }, Se.prototype.get = function(e) {
            var t = this.__data__,
                n = Ce(t, e);
            return n < 0 ? void 0 : t[n][1]
        }, Se.prototype.has = function(e) {
            return Ce(this.__data__, e) > -1
        }, Se.prototype.set = function(e, t) {
            var n = this.__data__,
                r = Ce(n, e);
            return r < 0 ? n.push([e, t]) : n[r][1] = t, this
        }, Ne.prototype.clear = function() {
            this.__data__ = {
                hash: new Oe,
                map: new(pe || Se),
                string: new Oe
            }
        }, Ne.prototype.delete = function(e) {
            return xe(this, e).delete(e)
        }, Ne.prototype.get = function(e) {
            return xe(this, e).get(e)
        }, Ne.prototype.has = function(e) {
            return xe(this, e).has(e)
        }, Ne.prototype.set = function(e, t) {
            return xe(this, e).set(e, t), this
        }, Re.prototype.clear = function() {
            this.__data__ = new Se
        }, Re.prototype.delete = function(e) {
            return this.__data__.delete(e)
        }, Re.prototype.get = function(e) {
            return this.__data__.get(e)
        }, Re.prototype.has = function(e) {
            return this.__data__.has(e)
        }, Re.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof Se) {
                var r = n.__data__;
                if (!pe || r.length < 199) return r.push([e, t]), this;
                n = this.__data__ = new Ne(r)
            }
            return n.set(e, t), this
        };
        var Ue = se ? J(se, Object) : function() {
                return []
            },
            Fe = function(e) {
                return ee.call(e)
            };

        function Be(e, t) {
            return !!(t = null == t ? r : t) && ("number" == typeof e || k.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function qe(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || X)
        }

        function Ge(e) {
            if (null != e) {
                try {
                    return Z.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function Ve(e, t) {
            return e === t || e != e && t != t
        }(de && Fe(new de(new ArrayBuffer(1))) != m || pe && Fe(new pe) != s || he && Fe(he.resolve()) != d || _e && Fe(new _e) != h || ve && Fe(new ve) != g) && (Fe = function(e) {
            var t = ee.call(e),
                n = t == f ? e.constructor : void 0,
                r = n ? Ge(n) : void 0;
            if (r) switch (r) {
                case ye:
                    return m;
                case me:
                    return s;
                case Ee:
                    return d;
                case be:
                    return h;
                case we:
                    return g
            }
            return t
        });
        var He = Array.isArray;

        function Je(e) {
            return null != e && function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
            }(e.length) && !Ke(e)
        }
        var We = le || function() {
            return !1
        };

        function Ke(e) {
            var t = Ye(e) ? ee.call(e) : "";
            return t == c || t == u
        }

        function Ye(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function Xe(e) {
            return Je(e) ? Ae(e) : function(e) {
                if (!qe(e)) return fe(e);
                var t = [];
                for (var n in Object(e)) $.call(e, n) && "constructor" != n && t.push(n);
                return t
            }(e)
        }
        e.exports = function(e) {
            return ke(e, !0, !0)
        }
    }(Pu, Pu.exports);
    var Cu = Pu.exports,
        ku = {
            EMPTY_EVENT_TYPE_NAME: {
                title: "Missing Event Name",
                desc: "The event name for one or more of your events is empty. This can affect the accuracy of reporting for your conversions.",
                suggestion: "Go to your source code and add a name that follows our format requirements and TikTok policies.",
                link: "https://ads.tiktok.com/marketing_api/docs?rid=5ipocbxyw8v&id=1701890973258754"
            },
            INVALID_CONTENT_ID: {
                title: "Missing value for content ID",
                desc: "Include a value for your 'content_id' parameter. This is required for Video Shopping Ads (VSA).",
                suggestion: "If you are or plan to run Video Shopping Ads (VSA), go to your source code and include a value for the 'content_id' parameter.",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            INVALID_CONTENT_TYPE: {
                title: "Invalid content type",
                desc: 'The content type for one or more of your events is not valid. Content type must be either "product", "product_group", "destination", "hotel", "flight" or "vehicle".',
                suggestion: "Go to your source code and update the content type.",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            INVALID_CURRENCY_CODE: {
                title: "Invalid currency code",
                desc: "The currency code for one or more of your events isn't supported. This can affect the accuracy of reporting for your ROAS.",
                suggestion: "Go to your source code and update the 'currency' parameters with a supported currency code.",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            INVALID_EMAIL_FORMAT: {
                title: "Incorrect email format",
                desc: "The email format for your events does not match the format supported. This can impact Advanced Matching and your ad performance.",
                suggestion: "Go to your source code and update the format of your shared emails. It should follow 'xxx@xxx.com' format.",
                link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
            },
            INVALID_EMAIL_INFORMATION: {
                title: "Invalid email information",
                desc: "The emails shared with your events were invalid.",
                suggestion: 'Go to your source code to double check shared emails. Leave your string empty when customer information isn\'t available. Avoid spaces, "undefined", or other hardcoded values.',
                link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
            },
            INVALID_EVENT_PARAMETER_VALUE: {
                title: "Invalid value parameter",
                desc: "The 'value' parameter for one or more of your events is invalid. This is used calculate ROAS for people and the bid for your highest value customers. Parameters must be an integer or in the decimal format (e.g. 9.99). Also, they can't contain currency symbols, special characters, letters, or commas.",
                suggestion: "Go to your source code and update the 'value' parameter. It can only include numbers greater than or equal to zero (e.g. 9.99). Do not include currency symbols, special characters, letters, or commas.",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            INVALID_PHONE_NUMBER_FORMAT: {
                title: "Incorrect phone number format",
                desc: "The phone number format for your events doesn't follow the E.164 format. This can affect Advanced Matching and your ad performance.",
                suggestion: "Go to your source code and update your shared phone numbers. It should follow the E.164 format.",
                link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
            },
            INVALID_PHONE_NUMBER_INFORMATION: {
                title: "Invalid phone number information",
                desc: "The phone numbers shared with your events were invalid.",
                suggestion: 'Go to your source code to double check shared phone numbers. Leave your string empty when customer information isn\'t available. Avoid spaces, "undefined", or other hardcoded values.',
                link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
            },
            LONG_EVENT_TYPE_NAME: {
                title: "Event Name Too Long",
                desc: "1 event type exceeds the 50 character limit.",
                suggestion: "Go to your source code and make these event names 50 characters or less.",
                link: "https://ads.tiktok.com/help/article/custom-events?lang=en"
            },
            MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT: {
                title: "Invalid Event Name Format",
                desc: "1 event name was rejected for not following TikTok format requirements.",
                suggestion: "Go to your source code and update these event types according to TikTok format requirements.",
                link: "https://ads.tiktok.com/help/article/custom-events?lang=en"
            },
            MISSING_CONTENT_ID: {
                title: "Missing 'content_id' paramter",
                desc: "The 'content_id' parameter isn't being received. This is required for Video Shopping Ads (VSA).",
                suggestion: "Include the 'content_id' parameter in your source code. This is required for Video Shopping Ads (VSA).",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            MISSING_CURRENCY_PARAMETER: {
                title: 'Missing "currency" parameter',
                desc: "Events shared are missing a 'currency' parameter. This impacts our ability to receive the value amount correctly, which can affect the accuracy of reporting for your return on ad spend.",
                suggestion: 'Go to your source code and include the "currency" parameter. You can check supported currency codes. {{learn_more}}',
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            MISSING_EMAIL_AND_PHONE: {
                title: "Missing email and phone number",
                desc: "Email and phone number info isn't being received. This information is required for Complete Payment events.",
                suggestion: "Improve your email and phone coverage. This allows you to attribute more conversions and reach more people with your ads.",
                link: "https://ads.tiktok.com/marketing_api/docs?rid=5ipocbxyw8v&id=1701890972946433"
            },
            MISSING_VALUE_PARAMETER: {
                title: 'Missing "value" parameter',
                desc: "Events shared are missing a 'value' parameter'. This is used calculate ROAS for people and the bid for your highest value customers. ",
                suggestion: 'Go to your source code and include the "value" parameter.',
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            DUPLICATE_PIXEL_CODE: {
                title: "Duplicate Pixel ID",
                desc: "The pixel ID is duplicate. This could impact the pixel data accuracy.",
                suggestion: "Please double check and delete any unnecessary pixel code.",
                link: ""
            },
            MISSING_PIXEL_CODE: {
                title: "Missing pixel ID",
                desc: "Some of the events sent to your TikTok account are missing a pixel ID.",
                suggestion: "Go to your source code and double check that the 20-character pixel ID has been added to the ttq.load() function. Don't send null values or spaces. If you edited the base code, ensure the event.js has the 'sdkid' in the Chrome network panel.",
                link: ""
            },
            INVALID_PIXEL_CODE: {
                title: "Invalid pixel ID",
                desc: "The pixel ID is invalid. This could prevent your pixel from receiving data.",
                suggestion: "Please go to Events Manager and find the correct pixel ID.",
                link: ""
            }
        },
        Mu = /^[a-zA-Z\d]([a-zA-Z_\-\d ]{0,}[a-zA-Z_\-\d])?$/,
        Du = ["product", "product_group", "destination", "hotel", "flight", "vehicle"],
        Lu = ["email_is_hashed", "phone_is_hashed", "sha256_email", "sha256_phone"],
        xu = ["AED", "ARS", "AUD", "BDT", "BHD", "BIF", "BOB", "BRL", "CAD", "CHF", "CLP", "CNY", "COP", "CRC", "CZK", "DKK", "DZD", "EGP", "EUR", "GBP", "GTQ", "HKD", "HNL", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KES", "KHR", "KRW", "KWD", "KZT", "MAD", "MOP", "MXN", "MYR", "NGN", "NIO", "NOK", "NZD", "OMR", "PEN", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VES", "VND", "ZAR"],
        ju = ["CompletePayment", "InitiateCheckout", "AddToCart", "PlaceAnOrder", "ViewContent", "AddToWishlist"],
        Uu = function(e) {
            return void 0 === e
        },
        Fu = "CompletePayment",
        Bu = function(e) {
            var t = e.event,
                n = void 0 === t ? "" : t;
            return !!["null", "undefined"].includes(n) || (!!/^\s*$/.test(n) || !n)
        },
        qu = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Gu = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Vu = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o) {
                var a, c;
                return i(this, n), (a = t.call(this, {
                    name: "DiagnosticsConsole",
                    reporters: r,
                    context: e
                })).isEnableDiagnosticsConsole = !1, a.isEnableDiagnosticsConsole = Boolean(null === (c = null == o ? void 0 : o.plugins) || void 0 === c ? void 0 : c.DiagnosticsConsole), a
            }
            return a(n, [{
                key: "isDisableDiagnosticsConsole",
                value: function() {
                    try {
                        return !this.isEnableDiagnosticsConsole || Boolean(Object.values(this.reporters).some((function(e) {
                            var t, n;
                            return void 0 !== (null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.diagnostics) && !(null === (n = null == e ? void 0 : e.options) || void 0 === n ? void 0 : n.diagnostics)
                        })))
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "warn",
                value: function(e, t) {
                    try {
                        if (this.isDisableDiagnosticsConsole()) return;
                        ! function(e, t) {
                            if (Dr[e]) {
                                var n = ei(),
                                    r = ku[e],
                                    i = "".concat("[TikTok Pixel]", " - ").concat(r.title);
                                r.desc && (i += "\nIssue: ".concat(r.desc)), r.suggestion && (i += "\nSuggestion: ".concat(r.suggestion)), t && Object.keys(t).forEach((function(e) {
                                    i = i.split("{{".concat(e, "}}")).join(t[e])
                                })), i = i.trim(), r.link && (i += " See ".concat(r.link, " for more information.")), n && n.console && n.console.warn && n.console.warn(i)
                            }
                        }(e, t)
                    } catch (t) {
                        co(Mr.CUSTOM_ERROR, t, {
                            custom_name: "diagnostics_console",
                            custom_enum: e
                        })
                    }
                }
            }, {
                key: "pixelDidMount",
                value: function(e) {
                    var t = this;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var n = {
                            taskName: window.ttq._pf_tn,
                            functionName: "console_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    e.getParameterInfo().then((function(e) {
                        t.handlePixelInfoValidate(e)
                    })).catch((function(e) {
                        co(Mr.CUSTOM_ERROR, e, {
                            custom_name: "diagnostics_console",
                            custom_enum: "pixel"
                        })
                    }));
                    try {
                        window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n))
                    } catch (e) {}
                }
            }, {
                key: "pixelSend",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    try {
                        r && r._i || i !== Nr.TRACK || t === Ar || this.handleEventPayloadValidate(Cu(n || {}))
                    } catch (e) {
                        co(Mr.CUSTOM_ERROR, e, {
                            custom_name: "diagnostics_console",
                            custom_enum: "track"
                        })
                    }
                }
            }, {
                key: "handlePixelInfoValidate",
                value: function(e) {
                    if (e.status === ia.Live);
                    else this.warn(Dr.INVALID_PIXEL_CODE)
                }
            }, {
                key: "handleEventPayloadValidate",
                value: function(e) {
                    e.properties || (e.properties = {}), Bu(e) && this.warn(Dr.EMPTY_EVENT_TYPE_NAME),
                        function(e) {
                            var t = e.event,
                                n = void 0 === t ? "" : t;
                            return !!Bu(e) || Mu.test(n)
                        }(e) || this.warn(Dr.MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT),
                        function(e) {
                            var t = e.event;
                            return (void 0 === t ? "" : t).length <= 50
                        }(e) || this.warn(Dr.LONG_EVENT_TYPE_NAME),
                        function(e) {
                            var t = e.event,
                                n = e._inspection;
                            if (t === Fu) {
                                var r = (void 0 === n ? {} : n).identity_params,
                                    i = void 0 === r ? {} : r;
                                return 0 === Object.keys(i).length || Lu.every((function(e) {
                                    return (i[e] || []).includes(Vn.EMPTY_VALUE)
                                }))
                            }
                            return !1
                        }(e) && this.warn(Dr.MISSING_EMAIL_AND_PHONE),
                        function(e) {
                            var t = e._inspection,
                                n = void 0 === t ? {} : t;
                            return !(!n || !n.identity_params) && ((n.identity_params.email_is_hashed || []).includes(Vn.FILTER_EVENTS) || (n.identity_params.sha256_email || []).includes(Vn.FILTER_EVENTS))
                        }(e) && this.warn(Dr.INVALID_EMAIL_INFORMATION),
                        function(e) {
                            var t = e._inspection,
                                n = void 0 === t ? {} : t;
                            return !(!n || !n.identity_params) && ((n.identity_params.email_is_hashed || []).includes(Vn.UNKNOWN_INVALID) || (n.identity_params.sha256_email || []).includes(Vn.UNKNOWN_INVALID))
                        }(e) && this.warn(Dr.INVALID_EMAIL_FORMAT),
                        function(e) {
                            var t = e._inspection,
                                n = void 0 === t ? {} : t;
                            return !(!n || !n.identity_params) && ((n.identity_params.phone_is_hashed || []).includes(Vn.FILTER_EVENTS) || (n.identity_params.sha256_phone || []).includes(Vn.FILTER_EVENTS))
                        }(e) && this.warn(Dr.INVALID_PHONE_NUMBER_INFORMATION),
                        function(e) {
                            var t = e._inspection,
                                n = void 0 === t ? {} : t;
                            return !(!n || !n.identity_params) && ((n.identity_params.phone_is_hashed || []).includes(Vn.UNKNOWN_INVALID) || (n.identity_params.sha256_phone || []).includes(Vn.UNKNOWN_INVALID))
                        }(e) && this.warn(Dr.INVALID_PHONE_NUMBER_FORMAT),
                        function(e) {
                            var t = e.event,
                                n = void 0 === t ? "" : t,
                                r = e.properties,
                                i = void 0 === r ? {} : r;
                            if (ju.includes(n)) {
                                if (Uu(i.contents) && Uu(i.content_id)) return !0;
                                if (!Uu(i.contents)) return !Array.isArray(i.contents) || i.contents.length < 1 || !i.contents.every((function(e) {
                                    return e && !Uu(e.content_id)
                                }))
                            }
                            return !1
                        }(e) && this.warn(Dr.MISSING_CONTENT_ID),
                        function(e) {
                            var t = e.properties,
                                n = void 0 === t ? {} : t,
                                r = n.content_id,
                                i = n.contents;
                            return !(!Uu(r) && /^\s*$/.test(r)) && (!(!Uu(i) && Array.isArray(i)) || i.every((function(e) {
                                return e && !Uu(e.content_id) && !/^\s*$/.test(e.content_id)
                            })))
                        }(e) || this.warn(Dr.INVALID_CONTENT_ID),
                        function(e) {
                            var t = e.properties.content_type;
                            return !t || Du.includes(t)
                        }(e) || this.warn(Dr.INVALID_CONTENT_TYPE),
                        function(e) {
                            var t = e.properties.value;
                            return !t || "number" == typeof t || !("string" != typeof t || !/^\d+(\.\d+)?$/.test(t) && !/^\d+$/.test(t))
                        }(e) || this.warn(Dr.INVALID_EVENT_PARAMETER_VALUE),
                        function(e) {
                            var t = e.event,
                                n = void 0 === t ? "" : t,
                                r = e.properties,
                                i = void 0 === r ? {} : r;
                            return !(n !== Fu || !Uu(i.value)) || !(Uu(i.currency) || !Uu(i.value))
                        }(e) && this.warn(Dr.MISSING_VALUE_PARAMETER),
                        function(e) {
                            var t = e.properties.currency;
                            return !t || xu.includes(t)
                        }(e) || this.warn(Dr.INVALID_CURRENCY_CODE),
                        function(e) {
                            var t = e.event,
                                n = void 0 === t ? "" : t,
                                r = e.properties,
                                i = void 0 === r ? {} : r;
                            return !(n !== Fu || !Uu(i.currency)) || !(Uu(i.value) || !Uu(i.currency))
                        }(e) && this.warn(Dr.MISSING_CURRENCY_PARAMETER, {
                            learn_more: ""
                        })
                }
            }]), n
        }($o);
    Vu = qu([R.injectable(), Gu(0, R.inject(kr.CONTEXT)), Gu(1, R.inject(kr.TTQ_REPORTERS)), Gu(2, R.inject(kr.TTQ_GLOBAL_OPTIONS))], Vu);
    var Hu = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ju = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Wu = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: "PangleCookieMatching",
                    reporters: r,
                    context: e
                })).hasReport = !1, c.reportService = o, c.env = a, c
            }
            return a(n, [{
                key: "isPixelPangleCookieMatching",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = this.reporters;
                    if (e) {
                        var n = t.find((function(t) {
                            return t.getReporterId() === e
                        }));
                        if (n && n.plugins.PangleCookieMatching) return !0
                    } else if (t.some((function(e) {
                            return Boolean(e.plugins.PangleCookieMatching)
                        }))) return !0;
                    return !1
                }
            }, {
                key: "disablePangleCookie",
                value: function() {
                    this.isPixelPangleCookieMatching() && Ao("https://analytics.pangle-ads.com/api/v2/pangle_disable_cookie")
                }
            }, {
                key: "pixelSend",
                value: function(e, t, n) {
                    var r;
                    try {
                        if (0 === (null === (r = this.context.getPageSign().pageIndex) || void 0 === r ? void 0 : r.index) && !Gi(this.env) && n && n.message_id && this.isPixelPangleCookieMatching(e) && !this.hasReport) {
                            var i = {
                                event: n.event,
                                message_id: n.message_id,
                                context: {
                                    library: n.context.library
                                },
                                timestamp: (new Date).toJSON()
                            };
                            this.hasReport = !0, this.reportService.report("https://analytics.pangle-ads.com/api/v2/pangle_pixel", i, Bn.httpReport)
                        }
                    } catch (e) {
                        co(Mr.CUSTOM_ERROR, e, {
                            custom_name: "pangle_report"
                        })
                    }
                }
            }]), n
        }($o);
    Wu = Hu([R.injectable(), Ju(0, R.inject(kr.CONTEXT)), Ju(1, R.inject(kr.TTQ_REPORTERS)), Ju(2, R.inject(kr.REPORT_SERVICE)), Ju(3, R.inject(kr.ENV))], Wu);
    var Ku, Yu = "https://analytics.tiktok.com/i18n/pixel/eb.js",
        Xu = "_tt_event_builder";
    ! function(e) {
        e.EVENT_BUILD_BOOTSTRAP_ACK = "event_builder_bootstrap_ack", e.EVENT_BUILD_WRONG_CODE = "event_builder_wrong_code", e.EVENT_BUILD_BOOTSTRAP = "event_builder_bootstrap"
    }(Ku || (Ku = {}));
    var Qu = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        zu = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Zu = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this, {
                    name: "EventBuilder",
                    reporters: r,
                    context: e
                })).pluginMounted = !1, o
            }
            return a(n, [{
                key: "pixelDidMount",
                value: function(e) {
                    var t = this;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var n = {
                            taskName: window.ttq._pf_tn,
                            functionName: "event_builder_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    if (!this.pluginMounted) {
                        this.pluginMounted = !0;
                        var r = ni(),
                            i = function(e) {
                                e.data.type !== Ku.EVENT_BUILD_BOOTSTRAP || r._event_builder_pickup_sdk_loaded || (t.reporters.find((function(t) {
                                    return t.getReporterId() === e.data.pixelCode
                                })) ? (r._event_builder_pickup_sdk_loaded = !0, ho(Xu, e.data), Ao(Yu).then((function() {
                                    window.opener.window.postMessage({
                                        type: Ku.EVENT_BUILD_BOOTSTRAP_ACK
                                    }, "*")
                                })).catch((function(e) {
                                    co(Mr.CUSTOM_ERROR, e, {
                                        custom_name: "event_builder_load_error",
                                        custom_enum: "load_ebjs"
                                    })
                                }))) : r._event_builder_pickup_sdk_verify_flag || (setTimeout((function() {
                                    t.reporters.find((function(t) {
                                        return t.getReporterId() === e.data.pixelCode
                                    })) || window.opener.window.postMessage({
                                        type: Ku.EVENT_BUILD_WRONG_CODE
                                    }, "*")
                                }), 5e3), r._event_builder_pickup_sdk_verify_flag = !0))
                            };
                        r._event_builder_pickup_sdk_loaded || (po(Xu) ? Ao(Yu).then((function() {
                            r._event_builder_pickup_sdk_loaded = !0
                        })) : window.opener && (window.addEventListener("message", i), setTimeout((function() {
                            window.removeEventListener("message", i)
                        }), 8e3)));
                        try {
                            window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n))
                        } catch (e) {}
                    }
                }
            }]), n
        }($o);
    Zu = Qu([R.injectable(), zu(0, R.inject(kr.CONTEXT)), zu(1, R.inject(kr.TTQ_REPORTERS))], Zu);
    var $u = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        es = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        ts = "tt_pixel_is_enrich_ipv6_triggered_by_enrich_am",
        ns = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: "EnrichIpv6",
                    reporters: r,
                    context: e
                })).hasReported = !1, c.shouldReportAfterEnrichAM = !1, c.reportService = o, c.env = a, c
            }
            return a(n, [{
                key: "isPixelEnrichIpv6",
                value: function() {
                    var e = this.reporters;
                    return !(!e || 0 === e.length) && e.every((function(e) {
                        return e && e.plugins && !0 === e.plugins.EnrichIpv6
                    }))
                }
            }, {
                key: "isEnrichIpv6V2SwitchOn",
                value: function() {
                    var e = "EnrichIpv6V2";
                    try {
                        var t = ni()._plugins || {};
                        return null != t[e] && !!t[e]
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "buildEnrichIpv6Data",
                value: function(e) {
                    var t = this.isEnrichIpv6V2SwitchOn() ? "#source=2" : "#source=1";
                    return Object.assign(Object.assign({}, e), {
                        event: "EnrichIpv6",
                        trigger_event: e.event,
                        message_id: e.message_id + t
                    })
                }
            }, {
                key: "pixelSend",
                value: function(e, t, n) {
                    var r, i = arguments.length > 4 ? arguments[4] : void 0;
                    try {
                        if (i !== Nr.TRACK) return;
                        if ("Shopify" !== ai(e) && !this.isEnrichIpv6V2SwitchOn()) return;
                        if (Gi(this.env) || !n || !n.message_id) return;
                        var o = this.context.getPageSign();
                        0 === (null === (r = o.pageIndex) || void 0 === r ? void 0 : r.index) && !this.hasReported && this.isPixelEnrichIpv6() && (this.hasReported = !0, this.reportService.report(Hr, this.buildEnrichIpv6Data(n), Bn.htmlHttpReport));
                        var a = "true" === sessionStorage.getItem(ts);
                        if (a) return;
                        t === Cr && (this.shouldReportAfterEnrichAM = !0), this.shouldReportAfterEnrichAM && this.isPixelEnrichIpv6() && (this.shouldReportAfterEnrichAM = !1, sessionStorage.setItem(ts, "true"), this.reportService.report(Hr, this.buildEnrichIpv6Data(n), Bn.htmlHttpReport))
                    } catch (e) {
                        co(Mr.CUSTOM_ERROR, e, {
                            custom_name: "enrich_ipv6_report"
                        })
                    }
                }
            }]), n
        }($o);

    function rs(e, t) {
        return function() {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            window.requestIdleCallback ? window.requestIdleCallback(e.bind.apply(e, [t].concat(r))) : e.apply(t, r)
        }
    }

    function is(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        try {
            return Number.isInteger(e) ? e : parseFloat(e.toFixed(t))
        } catch (e) {
            return -1
        }
    }
    ns = $u([R.injectable(), es(0, R.inject(kr.CONTEXT)), es(1, R.inject(kr.TTQ_REPORTERS)), es(2, R.inject(kr.REPORT_SERVICE)), es(3, R.inject(kr.ENV))], ns);
    var os;
    ! function(e) {
        e.FIRST_CONTENTFUL_PAINT = "fcp", e.LARGEST_CONTENTFUL_PAINT = "lcp", e.FIRST_INPUT_DELAY = "fid", e.TIME_TO_FIRST_BYTE = "ttfb", e.PAGE_LEAVE = "pl", e.LOAD_FINISH = "lf", e.TIME_WINDOW_TRACKER = "twt", e.TIME_TO_INTERACTIVE = "tti"
    }(os || (os = {}));
    var as, cs, us, ss, ls = function() {
            function e(t, n, r, o) {
                i(this, e), o ? (this.reportService = r, this.context = t, this.reporters = n, this.reportUrl = o) : co(Mr.CUSTOM_ERROR, new Error("empty reportUrl"), {
                    custom_name: "empty_reportUrl",
                    custom_enum: "page_perf_monitor"
                })
            }
            return a(e, [{
                key: "getResult",
                value: function(e) {
                    return {
                        action_event: e
                    }
                }
            }, {
                key: "report",
                value: function(e) {
                    var t = this;
                    if (void 0 !== e) {
                        var n = this.getReportPixelList(),
                            r = this.assemblyReportData(Nr.PAGE, e, n);
                        r && Po(this.reportService.reportPreposition || []).then((function() {
                            t.reportService.report(t.reportUrl, r, Bn.defaultReport)
                        })), this.resetAfterReport()
                    }
                }
            }, {
                key: "getReportPixelList",
                value: function() {
                    return this.reporters
                }
            }, {
                key: "assemblyReportData",
                value: function(e, t, n) {
                    var r;
                    if (0 !== n.length) {
                        var i = n.map((function(e) {
                                return e.getReporterId()
                            })),
                            o = this.context.getPageSign(),
                            a = n[0],
                            c = a.assemblyData(a.getReporterId(), "", {}, {}, Nr.PAGE);
                        return delete c.event, c.action = e, c.auto_collected_properties = t, c.context.pixel || (c.context.pixel = {}), c.context.pixel.code = i[0], c.context.pixel.codes = i.join("|"), c.context.index = null === (r = o.pageIndex) || void 0 === r ? void 0 : r.index, c.context.session_id = o.sessionId, c.context.pageview_id = ar(this.context.getPageViewId(), a.reporterInfo.loadId, mr), c.message_id = c.message_id.replace(/-[^-]*$/, ""), c
                    }
                }
            }]), e
        }(),
        fs = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, e, r, o, a)).clickTimes = 0, c.scrollTimes = 0, c.init(), c
            }
            return a(n, [{
                key: "init",
                value: function() {
                    var e, t, n = this;
                    e = rs(this.updateClickTimes, this), t = ur((function(t) {
                            e()
                        }), 100), window.addEventListener("click", t, {
                            capture: !0
                        }),
                        function(e) {
                            var t = ur((function() {
                                e()
                            }), 500);
                            window.addEventListener("scroll", t, {
                                passive: !0
                            })
                        }(rs(this.updateScrollTimes, this)), setInterval((function() {
                            n.reportInteraction()
                        }), 1e4)
                }
            }, {
                key: "reportInteraction",
                value: function() {
                    this.isUpdated() && (this.report(this.getResult(os.TIME_WINDOW_TRACKER)), this.resetAfterReport())
                }
            }, {
                key: "getResult",
                value: function(e) {
                    return {
                        action_event: e,
                        inter: {
                            ct: this.clickTimes,
                            st: this.scrollTimes
                        },
                        page_inter: {
                            metrics_type: "ct|st",
                            ct: this.clickTimes,
                            st: this.scrollTimes
                        }
                    }
                }
            }, {
                key: "updateClickTimes",
                value: function() {
                    this.clickTimes += 1
                }
            }, {
                key: "updateScrollTimes",
                value: function() {
                    this.scrollTimes += 1
                }
            }, {
                key: "isUpdated",
                value: function() {
                    return 0 != this.clickTimes || 0 != this.scrollTimes
                }
            }, {
                key: "resetAfterReport",
                value: function() {
                    this.clickTimes = 0, this.scrollTimes = 0
                }
            }]), n
        }(ls),
        ds = function(e) {
            var t = function() {
                new Promise((function(e, t) {
                    setTimeout((function() {
                        var n = performance.getEntriesByType("navigation");
                        if (n.length > 0) {
                            var r = n[0];
                            e(r.loadEventEnd - r.startTime)
                        } else window.performance.timing ? e(window.performance.timing.loadEventEnd - window.performance.timing.navigationStart || -1) : t("Performance timing not supported")
                    }), 0)
                })).then((function(t) {
                    e(os.LOAD_FINISH, t)
                })).catch((function(t) {
                    e(os.LOAD_FINISH, -1)
                }))
            };
            "complete" === window.document.readyState ? t() : window.addEventListener("load", t)
        },
        ps = -1,
        hs = function(e) {
            addEventListener("pageshow", (function(t) {
                t.persisted && (ps = t.timeStamp, e(t))
            }), !0)
        },
        _s = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        vs = function() {
            var e = _s();
            return e && e.activationStart || 0
        },
        gs = function(e, t) {
            var n = _s(),
                r = "navigate";
            return ps >= 0 ? r = "back-forward-cache" : n && (document.prerendering || vs() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: r
            }
        },
        ys = function(e, t, n) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var r = new PerformanceObserver((function(e) {
                        Promise.resolve().then((function() {
                            t(e.getEntries())
                        }))
                    }));
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, n || {})), r
                }
            } catch (e) {}
        },
        ms = function(e, t, n, r) {
            var i, o;
            return function(a) {
                t.value >= 0 && (a || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = o, t.rating = function(e, t) {
                    return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                }(t.value, n), e(t))
            }
        },
        Es = function(e) {
            requestAnimationFrame((function() {
                return requestAnimationFrame((function() {
                    return e()
                }))
            }))
        },
        bs = function(e) {
            var t = function(t) {
                "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
            };
            addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
        },
        ws = function(e) {
            var t = !1;
            return function(n) {
                t || (e(n), t = !0)
            }
        },
        Is = -1,
        Ts = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        Os = function(e) {
            "hidden" === document.visibilityState && Is > -1 && (Is = "visibilitychange" === e.type ? e.timeStamp : 0, Ns())
        },
        Ss = function() {
            addEventListener("visibilitychange", Os, !0), addEventListener("prerenderingchange", Os, !0)
        },
        Ns = function() {
            removeEventListener("visibilitychange", Os, !0), removeEventListener("prerenderingchange", Os, !0)
        },
        Rs = function() {
            return Is < 0 && (Is = Ts(), Ss(), hs((function() {
                setTimeout((function() {
                    Is = Ts(), Ss()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return Is
                }
            }
        },
        As = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", (function() {
                return e()
            }), !0) : e()
        },
        Ps = [1800, 3e3],
        Cs = function(e, t) {
            t = t || {}, As((function() {
                var n, r = Rs(),
                    i = gs("FCP"),
                    o = ys("paint", (function(e) {
                        e.forEach((function(e) {
                            "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - vs(), 0), i.entries.push(e), n(!0)))
                        }))
                    }));
                o && (n = ms(e, i, Ps, t.reportAllChanges), hs((function(r) {
                    i = gs("FCP"), n = ms(e, i, Ps, t.reportAllChanges), Es((function() {
                        i.value = performance.now() - r.timeStamp, n(!0)
                    }))
                })))
            }))
        },
        ks = [.1, .25],
        Ms = {
            passive: !0,
            capture: !0
        },
        Ds = new Date,
        Ls = function(e, t) {
            as || (as = t, cs = e, us = new Date, Us(removeEventListener), xs())
        },
        xs = function() {
            if (cs >= 0 && cs < us - Ds) {
                var e = {
                    entryType: "first-input",
                    name: as.type,
                    target: as.target,
                    cancelable: as.cancelable,
                    startTime: as.timeStamp,
                    processingStart: as.timeStamp + cs
                };
                ss.forEach((function(t) {
                    t(e)
                })), ss = []
            }
        },
        js = function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, t) {
                    var n = function() {
                            Ls(e, t), i()
                        },
                        r = function() {
                            i()
                        },
                        i = function() {
                            removeEventListener("pointerup", n, Ms), removeEventListener("pointercancel", r, Ms)
                        };
                    addEventListener("pointerup", n, Ms), addEventListener("pointercancel", r, Ms)
                }(t, e) : Ls(t, e)
            }
        },
        Us = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                return e(t, js, Ms)
            }))
        },
        Fs = [100, 300],
        Bs = [2500, 4e3],
        qs = {},
        Gs = [800, 1800],
        Vs = function e(t) {
            document.prerendering ? As((function() {
                return e(t)
            })) : "complete" !== document.readyState ? addEventListener("load", (function() {
                return e(t)
            }), !0) : setTimeout(t, 0)
        },
        Hs = function(e, t) {
            t = t || {};
            var n = gs("TTFB"),
                r = ms(e, n, Gs, t.reportAllChanges);
            Vs((function() {
                var i = _s();
                if (i) {
                    var o = i.responseStart;
                    if (o <= 0 || o > performance.now()) return;
                    n.value = Math.max(o - vs(), 0), n.entries = [i], r(!0), hs((function() {
                        n = gs("TTFB", 0), (r = ms(e, n, Gs, t.reportAllChanges))(!0)
                    }))
                }
            }))
        },
        Js = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ws = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ks = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, e, r, o, a)).cls = -1, c.init(), c
            }
            return a(n, [{
                key: "init",
                value: function() {
                    var e;
                    ! function(e, t) {
                        t = t || {}, Cs(ws((function() {
                            var n, r = gs("CLS", 0),
                                i = 0,
                                o = [],
                                a = function(e) {
                                    e.forEach((function(e) {
                                        if (!e.hadRecentInput) {
                                            var t = o[0],
                                                n = o[o.length - 1];
                                            i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e])
                                        }
                                    })), i > r.value && (r.value = i, r.entries = o, n())
                                },
                                c = ys("layout-shift", a);
                            c && (n = ms(e, r, ks, t.reportAllChanges), bs((function() {
                                a(c.takeRecords()), n(!0)
                            })), hs((function() {
                                i = 0, r = gs("CLS", 0), n = ms(e, r, ks, t.reportAllChanges), Es((function() {
                                    return n()
                                }))
                            })), setTimeout(n, 0))
                        })))
                    }(this.clsHandler.bind(this), {
                        reportAllChanges: !0
                    }), Hs(this.webVitalHandler.bind(this)), Cs(this.webVitalHandler.bind(this)),
                        function(e, t) {
                            t = t || {}, As((function() {
                                var n, r = Rs(),
                                    i = gs("LCP"),
                                    o = function(e) {
                                        var t = e[e.length - 1];
                                        t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - vs(), 0), i.entries = [t], n())
                                    },
                                    a = ys("largest-contentful-paint", o);
                                if (a) {
                                    n = ms(e, i, Bs, t.reportAllChanges);
                                    var c = ws((function() {
                                        qs[i.id] || (o(a.takeRecords()), a.disconnect(), qs[i.id] = !0, n(!0))
                                    }));
                                    ["keydown", "click"].forEach((function(e) {
                                        addEventListener(e, (function() {
                                            return setTimeout(c, 0)
                                        }), !0)
                                    })), bs(c), hs((function(r) {
                                        i = gs("LCP"), n = ms(e, i, Bs, t.reportAllChanges), Es((function() {
                                            i.value = performance.now() - r.timeStamp, qs[i.id] = !0, n(!0)
                                        }))
                                    }))
                                }
                            }))
                        }(this.webVitalHandler.bind(this), {
                            reportAllChanges: !0
                        }),
                        function(e, t) {
                            t = t || {}, As((function() {
                                var n, r = Rs(),
                                    i = gs("FID"),
                                    o = function(e) {
                                        e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
                                    },
                                    a = function(e) {
                                        e.forEach(o)
                                    },
                                    c = ys("first-input", a);
                                n = ms(e, i, Fs, t.reportAllChanges), c && bs(ws((function() {
                                    a(c.takeRecords()), c.disconnect()
                                }))), c && hs((function() {
                                    var r;
                                    i = gs("FID"), n = ms(e, i, Fs, t.reportAllChanges), ss = [], cs = -1, as = null, Us(addEventListener), r = o, ss.push(r), xs()
                                }))
                            }))
                        }(this.webVitalHandler.bind(this)), e = this.baseHandler.bind(this), setTimeout((function() {
                            e(os.TIME_TO_INTERACTIVE, -1)
                        }), 0), ds(this.baseHandler.bind(this))
                }
            }, {
                key: "getResult",
                value: function(e) {
                    var t, n = Math.floor(performance && performance.timing ? t ? Date.now() - t : Date.now() - performance.timing.navigationStart : -1),
                        r = {
                            ttns: n,
                            cls: is(this.cls),
                            idx: this.getSessionIndex(),
                            pep: is(this.getPep())
                        },
                        i = ["cls", "idx", "pep"];
                    i.unshift(e);
                    var o = {
                        metrics_type: i.join("|"),
                        cls: r.cls,
                        idx: r.idx,
                        pep: r.pep
                    };
                    return o[e] = n, {
                        action_event: e,
                        perf: r,
                        page_perf: o
                    }
                }
            }, {
                key: "resetAfterReport",
                value: function() {}
            }, {
                key: "clsHandler",
                value: function(e) {
                    this.cls = e.value || -1
                }
            }, {
                key: "webVitalHandler",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var t = {
                                taskName: window.ttq._pf_tn || "page_data_web_vital_handler",
                                functionName: window.ttq._pf_tn && "page_data_web_vital_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "page_data_web_vital_handler")
                        }
                    } catch (e) {}
                    var n, r = this.getResult(e.name.toLocaleLowerCase());
                    r.perf && (r.perf.ttns = (null == e ? void 0 : e.value) ? Math.floor(e.value) : -1), r.page_perf && (r.page_perf[e.name.toLocaleLowerCase()] = null === (n = null == r ? void 0 : r.perf) || void 0 === n ? void 0 : n.ttns), this.report(r), this.resetAfterReport();
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t), "page_data_web_vital_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "baseHandler",
                value: function(e, t) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var n = {
                                taskName: window.ttq._pf_tn || "page_data_base_handler",
                                functionName: window.ttq._pf_tn && "page_data_base_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "page_data_base_handler")
                        }
                    } catch (e) {}
                    var r, i = this.getResult(e);
                    i.perf && (i.perf.ttns = t ? Math.floor(t) : -1), i.page_perf && (i.page_perf[e] = null === (r = i.perf) || void 0 === r ? void 0 : r.ttns), this.report(i), this.resetAfterReport();
                    try {
                        window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n), "page_data_base_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "getSessionIndex",
                value: function() {
                    var e, t = null === (e = this.context.getPageSign().pageIndex) || void 0 === e ? void 0 : e.main;
                    return null == t ? -1 : t
                }
            }, {
                key: "getCurrScrollPosition",
                value: function() {
                    return document.documentElement.scrollTop || document.body.scrollTop
                }
            }, {
                key: "getViewportHeight",
                value: function() {
                    return window.innerHeight || document.documentElement.clientHeight
                }
            }, {
                key: "getMaxHeight",
                value: function() {
                    var e = document.body,
                        t = document.documentElement;
                    return Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)
                }
            }, {
                key: "getPep",
                value: function() {
                    return (this.getCurrScrollPosition() + this.getViewportHeight()) / this.getMaxHeight()
                }
            }]), n
        }(ls);
    Ks = Js([Ws(0, R.inject(kr.CONTEXT)), Ws(1, R.inject(kr.TTQ_REPORTERS)), Ws(2, R.inject(kr.REPORT_SERVICE))], Ks);
    var Ys = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Xs = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Qs = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: "PageData",
                    reporters: r,
                    context: e
                })).monitors = [], c.ttqOptions = {}, c.reportService = o, c.context = e, c.reporters = r, c.ttqOptions = a, c.isPluginInit = !1, c
            }
            return a(n, [{
                key: "init",
                value: function() {
                    if (this.isPageDataEnabled()) {
                        var e = this.isHitNewVersion();
                        this.interactionMonitor = new fs(this.context, this.reporters, this.reportService, fo(e ? Nr.PAGE_INTERACTION : Nr.AUTO_CONFIG)), this.performanceMonitor = new Ks(this.context, this.reporters, this.reportService, fo(e ? Nr.PAGE_PERFORMANCE : Nr.AUTO_CONFIG)), this.monitors.push(this.performanceMonitor), this.monitors.push(this.interactionMonitor)
                    }
                }
            }, {
                key: "isPageDataEnabled",
                value: function() {
                    var e, t;
                    return null === (t = null === (e = this.ttqOptions) || void 0 === e ? void 0 : e.plugins) || void 0 === t ? void 0 : t.PageData
                }
            }, {
                key: "isHitNewVersion",
                value: function() {
                    var e, t;
                    return null === (t = null === (e = this.ttqOptions) || void 0 === e ? void 0 : e.plugins) || void 0 === t ? void 0 : t.HitReservoir
                }
            }, {
                key: "report",
                value: function(e) {
                    var t = this.performanceMonitor,
                        n = this.interactionMonitor,
                        r = this.performanceMonitor.getResult(e),
                        i = this.interactionMonitor.getResult(e),
                        o = this.mergeReportData(e, i, r);
                    t.report(o), n.report(o), this.interactionMonitor.resetAfterReport(), this.performanceMonitor.resetAfterReport()
                }
            }, {
                key: "mergeReportData",
                value: function(e, t, n) {
                    var r = {
                        action_event: e
                    };
                    return r.perf = n.perf, r.inter = t.inter, r.page_perf = n.page_perf, r.page_inter = t.page_inter, r
                }
            }, {
                key: "pageWillLeave",
                value: function(e) {
                    this.report(os.PAGE_LEAVE)
                }
            }, {
                key: "pixelDidMount",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "page_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    this.isPluginInit || (this.init(), this.isPluginInit = !0);
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }]), n
        }($o);
    Qs = Ys([R.injectable(), Xs(0, R.inject(kr.CONTEXT)), Xs(1, R.inject(kr.TTQ_REPORTERS)), Xs(2, R.inject(kr.REPORT_SERVICE)), Xs(3, R.inject(kr.TTQ_GLOBAL_OPTIONS))], Qs);
    var zs = {
            initAllModule: 1,
            webTtqFactory: 2,
            handleCache: 3,
            webReporterFactory: 4,
            initAutoForm: 5,
            auto_config_plugin_pixelDidMount: 6,
            callback_plugin_pixelDidMount: 7,
            console_plugin_pixelDidMount: 8,
            event_builder_plugin_pixelDidMount: 9,
            shopify_plugin_pixelDidMount: 10,
            page_plugin_pixelDidMount: 11,
            competitor_insight_plugin_init: 12,
            getPixelInstalledPosition: 13,
            getPixelScriptByPixelCode: 14,
            resetExpires: 15,
            freezeAPI: 16,
            handlePixelRules: 17,
            mergeWebGlobalTtq: 18,
            handleGlobalCache: 22,
            getPixelDetail: 19,
            basettq_init_context_info: 20,
            initAutoForm_getOverallFormDetail: 21,
            web_track_handler: 23,
            identify_api_handler: 24,
            updateParameterInferenceData: 25
        },
        Zs = {
            identify_api_handler: {
                id: 1,
                fn: []
            },
            identify_encryption: {
                id: 2,
                fn: []
            },
            identify_after_encryption: {
                id: 3,
                fn: []
            },
            track_api_handler: {
                id: 4,
                fn: []
            },
            track_after_reporter_init: {
                id: 5,
                fn: []
            },
            track_after_report_preposition: {
                id: 6,
                fn: []
            },
            init: {
                id: 7,
                fn: [zs.initAllModule, zs.webTtqFactory, zs.handleCache, zs.webReporterFactory, zs.initAutoForm, zs.freezeAPI, zs.handlePixelRules, zs.resetExpires, zs.mergeWebGlobalTtq, zs.auto_config_plugin_pixelDidMount, zs.callback_plugin_pixelDidMount, zs.console_plugin_pixelDidMount, zs.event_builder_plugin_pixelDidMount, zs.shopify_plugin_pixelDidMount, zs.page_plugin_pixelDidMount, zs.competitor_insight_plugin_init, zs.getPixelInstalledPosition, zs.getPixelScriptByPixelCode, zs.handleGlobalCache, zs.basettq_init_context_info, zs.initAutoForm_getOverallFormDetail, zs.web_track_handler, zs.identify_api_handler, zs.updateParameterInferenceData]
            },
            page_api_handler: {
                id: 8,
                fn: []
            },
            auto_advanced_matching_handler: {
                id: 9,
                fn: []
            },
            auto_config_metadata_handler: {
                id: 10,
                fn: []
            },
            auto_config_click_handler: {
                id: 11,
                fn: []
            },
            auto_config_form_handler: {
                id: 12,
                fn: []
            },
            event_builder_dispatcher: {
                id: 13,
                fn: []
            },
            page_data_web_vital_handler: {
                id: 14,
                fn: []
            },
            page_data_base_handler: {
                id: 15,
                fn: []
            }
        },
        $s = function() {
            function e() {
                i(this, e), this.queue = [], this.currentTaskMap = {}
            }
            return a(e, [{
                key: "handleCache",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.push(e)
                    }))
                }
            }, {
                key: "push",
                value: function(e) {
                    var t = e.taskName,
                        n = e.functionName,
                        r = e.start,
                        i = e.end,
                        o = Math.round(1e3 * (i - r)),
                        a = t && this.getTaskIdFromName(t);
                    if (a) {
                        var c = this.currentTaskMap[a];
                        if (c || (this.currentTaskMap[a] = c = {
                                id: a,
                                d: -1
                            }), n) {
                            var u = this.getFunctionIdFromName(n);
                            u && (c.f = [].concat(y(c.f || []), [{
                                id: u,
                                d: o
                            }]))
                        } else c.d = o, this.queue.push(c), delete this.currentTaskMap[a]
                    }
                }
            }, {
                key: "print",
                value: function() {
                    return this.queue
                }
            }, {
                key: "printAndClear",
                value: function() {
                    var e = this.print();
                    return this.clear(), e
                }
            }, {
                key: "clear",
                value: function() {
                    this.queue = []
                }
            }, {
                key: "getTaskIdFromName",
                value: function(e) {
                    var t;
                    return null === (t = Zs[e]) || void 0 === t ? void 0 : t.id
                }
            }, {
                key: "getFunctionIdFromName",
                value: function(e) {
                    return zs[e]
                }
            }]), e
        }(),
        el = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        tl = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        nl = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this, {
                    name: "RuntimeMeasurement",
                    reporters: r,
                    context: e
                })).initialize = !1, o.init(), o
            }
            return a(n, [{
                key: "init",
                value: function() {
                    if (!this.initialize) {
                        this.performanceDataQueue = new $s;
                        var e = ni();
                        e && e._ppf && (this.performanceDataQueue.handleCache(e._ppf), e._ppf = this.performanceDataQueue), this.initialize = !0
                    }
                }
            }]), n
        }($o);
    nl = el([R.injectable(), tl(0, R.inject(kr.CONTEXT)), tl(1, R.inject(kr.TTQ_REPORTERS))], nl);
    var rl = [{
            identifier: kr.CALLBACK_PLUGIN,
            to: nc,
            name: "Callback"
        }, {
            identifier: kr.IDENTIFY_PLUGIN,
            to: dc,
            name: "Identify",
            required: !0
        }, {
            identifier: kr.WEB_FL_PLUGIN,
            to: vc,
            name: "WebFL"
        }, {
            identifier: kr.AUTO_CONFIG_PLUGIN,
            to: Au,
            name: "AutoConfig"
        }, {
            identifier: kr.DIAGNOSTICS_CONSOLE_PLUGIN,
            to: Vu,
            name: "DiagnosticsConsole"
        }, {
            identifier: kr.PANGLE_COOKIE_MATCHING_PLUGIN,
            to: Wu,
            name: "PangleCookieMatching"
        }, {
            identifier: kr.EVENT_BUILDER_PLUGIN,
            to: Zu,
            name: "EventBuilder"
        }, {
            identifier: kr.ENRICH_IPV6_PLUGIN,
            to: ns,
            name: "EnrichIpv6"
        }, {
            identifier: kr.PAGEDATA_PLUGIN,
            to: Qs,
            name: "PageData"
        }, {
            identifier: kr.RUNTIME_MEASUREMENT_PLUGIN,
            to: nl,
            name: "RuntimeMeasurement"
        }],
        il = function(e, t) {
            return il = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }, il(e, t)
        };

    function ol(e, t) {
        function n() {
            this.constructor = e
        }
        il(e, t), e.prototype = null === t ? Object._ttq_create(t) : (n.prototype = t.prototype, new n)
    }
    var al, cl = function() {
        return cl = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }, cl.apply(this, arguments)
    };
    ! function(e) {
        e[e.Failure = 0] = "Failure", e[e.Success = 1] = "Success", e[e.Unauthorized = -1] = "Unauthorized", e[e.NotExist = -2] = "NotExist"
    }(al || (al = {}));
    var ul = function() {
            function e(e) {
                this.version = e.version || "2.0.2", this.nativeMethodInvoker = e.nativeMethodInvoker, this.nativeEventListener = e.nativeEventListener, this.scheme = e.scheme || "nativeapp://", this.dispatchMessagePath = e.dispatchMessagePath || "dispatch_message/", this.setResultPath = e.setResultPath || "private/setresult/SCENE_FETCHQUEUE", this.dispatchMessageIFrameId = e.dispatchMessageIFrameId || "__JSBridgeIframe__", this.setResultIFrameId = e.setResultIFrameId || "__JSBridgeIframe_SetResult__", this.listenNativeEvent = !0 === e.listenNativeEvent, this.callbackId = 1023, this.callbackMap = {}, this.eventMap = {}, this.javascriptMessageQueue = [], this.callbackProcessor = e.callbackProcessor
            }
            return e.prototype.call = function(e, t, n, r) {
                void 0 === r && (r = this.version);
                var i, o = this.version;
                if (e && "string" == typeof e) {
                    "object" != typeof t && (t = {}), "string" == typeof r ? o = r || this.version : "object" == typeof r && (i = r.namespace, o = r.sdkVersion || this.version);
                    var a = {
                        func: e,
                        params: t,
                        JSSDK: o,
                        __msg_type: "call",
                        namespace: i
                    };
                    if ("function" == typeof n || void 0 === n) {
                        var c = this.registerCallback(e, n);
                        a.__callback_id = c
                    }
                    "undefined" == typeof __PIA_WORKER__ && window.parent !== window && (a.__iframe_url = window.location.href), this.sendMessageToNative(a)
                }
            }, e.prototype.on = function(e, t, n) {
                if (void 0 === n && (n = !1), e && "string" == typeof e && "function" == typeof t) {
                    var r = this.registerCallback(e, t);
                    return this.eventMap[e] = this.eventMap[e] || {}, this.eventMap[e][r] = {
                        once: n
                    }, this.listenNativeEvent && (this.nativeEventListener ? this.nativeEventListener(e) : this.call("addEventListener", {
                        name: e
                    }, null, {
                        sdkVersion: 1
                    })), r
                }
            }, e.prototype.once = function(e, t) {
                return this.on(e, t, !0)
            }, e.prototype.off = function(e, t) {
                if (!e || "string" != typeof e) return !0;
                var n = this.eventMap[e];
                return !n || "object" != typeof n || !n.hasOwnProperty(t) || (this.deregisterCallback(t), delete n[t], !0)
            }, e.prototype.trigger = function(e, t) {
                return this.handleMessageFromNative({
                    __msg_type: "event",
                    __params: t,
                    __event_id: e
                })
            }, e.prototype.handleMessageFromNative = function(e) {
                var t = this,
                    n = e,
                    r = String(n.__callback_id);
                if (this.callbackProcessor && "function" == typeof this.callbackProcessor) {
                    var i = (this.callbackMap && this.callbackMap[r] || {}).method;
                    this.callbackProcessor(n, i)
                }
                var o = n.__params,
                    a = String(n.__event_id || ""),
                    c = n.__msg_type;
                this.callbackMap[r] ? c = "callback" : this.eventMap[r] && (c = "event", a = a || r);
                var u = {
                    __err_code: "cb404"
                };
                switch (c) {
                    case "callback":
                        var s = (this.callbackMap && this.callbackMap[r] || {}).callback;
                        "function" == typeof s && (u = s(o)), this.deregisterCallback(r);
                        break;
                    case "event":
                        var l = this.eventMap[a];
                        l && "object" == typeof l && Object.keys(l).forEach((function(e) {
                            var n = (t.callbackMap && t.callbackMap[e] || {}).callback,
                                r = l[e];
                            "function" == typeof n && (u = n(o)), r && r.once && (t.deregisterCallback(e), delete l[e])
                        }))
                }
                return u
            }, e.prototype.fetchJavaScriptMessageQueue = function() {
                var e = JSON.stringify(this.javascriptMessageQueue),
                    t = btoa(unescape(encodeURIComponent(e)));
                return this.setResultIFrame && this.javascriptMessageQueue.length > 0 && (this.setResultIFrame.src = "" + this.scheme + this.setResultPath + "&" + t), this.javascriptMessageQueue.splice(0, this.javascriptMessageQueue.length), e
            }, e.prototype.sendMessageToNative = function(e) {
                if ("1" !== String(e.JSSDK) && this.nativeMethodInvoker) {
                    var t = this.nativeMethodInvoker(e);
                    if (t) {
                        var n = JSON.parse(t);
                        this.handleMessageFromNative(n)
                    }
                } else this.javascriptMessageQueue.push(e), this.dispatchMessageIFrame || this.tryCreateIFrames(), this.dispatchMessageIFrame.src = "" + this.scheme + this.dispatchMessagePath
            }, e.prototype.registerCallback = function(e, t) {
                var n = String(this.callbackId++);
                return this.callbackMap[n] = {
                    method: e,
                    callback: t
                }, n
            }, e.prototype.deregisterCallback = function(e) {
                delete this.callbackMap[e]
            }, e.prototype.tryCreateIFrames = function() {
                this.dispatchMessageIFrame = this.createIFrame(this.dispatchMessageIFrameId), this.setResultIFrame = this.createIFrame(this.setResultIFrameId)
            }, e.prototype.createIFrame = function(e) {
                var t = document.getElementById(e);
                return t && "IFRAME" === t.tagName || ((t = document.createElement("iframe")).style.display = "none", t.id = e, document.documentElement.appendChild(t)), t
            }, e
        }(),
        sl = "2.2.15",
        ll = "undefined" != typeof __PIA_WORKER__ ? new Function("return this")() : "undefined" != typeof window ? window : {},
        fl = void 0 !== ll && ll.navigator ? ll.navigator.userAgent : "",
        dl = (!!fl.match(/(newsarticle|videoarticle|lv|faceu|ulike|beauty_me_|faceu-os|ulike-os|beauty_me_oversea_|retouch)\/([\d.]+)/i) || /super|automobile/gi.test(fl)) && !/webcast/gi.test(fl) && !/luckycatversion/gi.test(fl),
        pl = !!fl.match(/(faceu)\/([\d.]+)/i) || /gsdk/gi.test(fl) || /PIANativeWorker/gi.test(fl),
        hl = !!fl.match(/ttad\/0/i),
        _l = !!fl.match(/aweme|trill|musical_ly|phoenix_\d+|TikTokNow_\d+/i),
        vl = !!fl.match(/live_stream/i),
        gl = !!fl.match(/Webcast/i),
        yl = !!fl.match(/super/i),
        ml = !!fl.match(/life_service_merchant/i),
        El = /super/gi.test(fl);

    function bl() {
        var e;
        if (dl) return ll.JSBridge && ll.JSBridge.on ? e = ll.JSBridge.on : ll.JS2NativeBridge && ll.JS2NativeBridge.on ? e = function(e) {
            var t = {
                JSSDK: sl,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            ll.JS2NativeBridge.on(e, JSON.stringify(t))
        } : ll.webkit && ll.webkit.messageHandlers && ll.webkit.messageHandlers.onMethodParams ? e = function(e) {
            var t = {
                JSSDK: sl,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            ll.webkit.messageHandlers.onMethodParams.postMessage(t)
        } : ll.onMethodParams && (e = function(e) {
            var t = {
                JSSDK: sl,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            return ll.onMethodParams(e, t)
        }), e
    }

    function wl(e, t) {
        if (("string" != typeof t || !0 !== /^(x|tc)\./.test(t)) && (_l || vl || gl || ml)) {
            var n = e.__params;
            ll.JS2NativeBridge && ll.JS2NativeBridge._invokeMethod && (e.__params = cl({
                code: n.code
            }, n.data))
        }
    }
    var Il = function(e) {
            function t() {
                var t = e.call(this, {
                    version: sl,
                    scheme: "bytedance://",
                    listenNativeEvent: !0,
                    dispatchMessageIFrameId: "__JSBridgeIframe_1.0__",
                    setResultIFrameId: "__JSBridgeIframe_SetResult_1.0__",
                    nativeEventListener: bl(),
                    callbackProcessor: wl
                }) || this;
                return t.publicApi = {
                    call: t.call.bind(t),
                    on: t.on.bind(t),
                    once: t.once.bind(t),
                    off: t.off.bind(t),
                    trigger: t.trigger.bind(t),
                    _fetchQueue: t.fetchJavaScriptMessageQueue.bind(t),
                    _handleMessageFromToutiao: t.handleMessageFromNative.bind(t)
                }, t
            }
            return ol(t, e), t.prototype.exposePublicApiToGlobal = function() {
                ll.ToutiaoJSBridge = Object.assign(ll.ToutiaoJSBridge || {}, this.publicApi)
            }, t
        }(ul),
        Tl = function(e) {
            function t(t) {
                var n, r = e.call(this, {
                    version: sl,
                    nativeMethodInvoker: (ll.JS2NativeBridge && ll.JS2NativeBridge._invokeMethod ? n = function(e) {
                        return ll.JS2NativeBridge._invokeMethod(JSON.stringify(e))
                    } : ll.ToutiaoJSBridge && ll.ToutiaoJSBridge.invokeMethod ? n = function(e) {
                        return ll.ToutiaoJSBridge.invokeMethod(JSON.stringify(e))
                    } : ll.JS2NativeBridge && ll.JS2NativeBridge.call ? n = function(e) {
                        return ll.JS2NativeBridge.call(e.func, JSON.stringify(e))
                    } : ll.webkit && ll.webkit.messageHandlers && ll.webkit.messageHandlers.callMethodParams ? n = function(e) {
                        ll.webkit.messageHandlers.callMethodParams.postMessage(e)
                    } : ll.callMethodParams && (n = function(e) {
                        return ll.callMethodParams(e.func, e)
                    }), n),
                    nativeEventListener: bl(),
                    scheme: yl ? "bds://" : El ? "bytedance://" : dl || ll.JSBridge && ll.JSBridge._invokeMethod ? "nativeapp://" : "bytedance://",
                    listenNativeEvent: dl,
                    callbackProcessor: wl
                }) || this;
                return r.toutiaoLegacyJSB = t, r.publicApi = {
                    call: r.call.bind(r),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    trigger: r.trigger.bind(r),
                    _fetchQueue: r.fetchJavaScriptMessageQueue.bind(r),
                    _handleMessageFromApp: r.handleMessageFromNative.bind(r),
                    _handleMessageFromToutiao: r.handleMessageFromNative.bind(r)
                }, r
            }
            return ol(t, e), t.prototype.call = function(t, n, r, i) {
                void 0 === i && (i = sl), this.isLegacyCall(t) ? this.toutiaoLegacyJSB.call(t, n, r, i) : e.prototype.call.call(this, t, n, r, i)
            }, t.prototype.on = function(t, n, r, i) {
                return void 0 === r && (r = !1), (i || {}).useLegacy || this.isLegacyCall(t) ? this.toutiaoLegacyJSB.on(t, n, r) : e.prototype.on.call(this, t, n, r)
            }, t.prototype.once = function(t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.once(t, n) : e.prototype.once.call(this, t, n)
            }, t.prototype.off = function(t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.off(t, n) : e.prototype.off.call(this, t, n)
            }, t.prototype.trigger = function(t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.trigger(t, n) : e.prototype.trigger.call(this, t, n)
            }, t.prototype.exposePublicApiToGlobal = function() {
                var e = this;
                ll.JSBridge = Object.assign(ll.JSBridge || {}, this.publicApi), ll.__DISABLE_JSB_PROTOCAL2__ || (ll.Native2JSBridge = Object.assign(ll.Native2JSBridge || {}, this.publicApi)), El ? ll.ToutiaoJSBridge = Object.assign(ll.ToutiaoJSBridge || {}, this.publicApi) : (dl || hl) && this.toutiaoLegacyJSB ? this.toutiaoLegacyJSB.exposePublicApiToGlobal() : ll.ToutiaoJSBridge = Object.assign(ll.ToutiaoJSBridge || {}, this.publicApi), ll.parent !== ll && ll.addEventListener && ll.addEventListener("message", (function(t) {
                    t && t.data && t.data.__callback_id && e.handleMessageFromNative(t.data)
                }), !1), Object.defineProperties(ll, {
                    JSBridge: {
                        writable: !1
                    },
                    Native2JSBridge: {
                        writable: !1
                    },
                    ToutiaoJSBridge: {
                        writable: !1
                    }
                }), Object.freeze(ll.JSBridge), Object.freeze(ll.Native2JSBridge), Object.freeze(ll.ToutiaoJSBridge)
            }, t.prototype.isLegacyCall = function(e) {
                return !(!e || "string" != typeof e || !this.toutiaoLegacyJSB) && (!!hl || !pl && !El && (dl && e.indexOf(".") < 0))
            }, t
        }(ul);

    function Ol(e, t) {
        if (null == e) throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            if (null != i)
                for (var o = Object.keys(Object(i)), a = 0, c = o.length; a < c; a++) {
                    var u = o[a],
                        s = Object.getOwnPropertyDescriptor(i, u);
                    void 0 !== s && s.enumerable && (n[u] = i[u])
                }
        }
        return n
    }({
        assign: Ol,
        polyfill: function() {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Ol
            })
        }
    }).polyfill();
    var Sl = new Tl(new Il);
    try {
        Sl.exposePublicApiToGlobal()
    } catch (co) {}
    var Nl = Sl.publicApi;
    globalThis.window && (window.CustomEvent || function() {
        var e = function(e, t) {
            var n;
            return t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        };
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }());
    var Rl, Al = function(e) {
            var n, r, i;
            return r = function(e) {
                var t = document.createElement("iframe");
                t.style.display = "none", t.src = e, document.body.appendChild(t), setTimeout((function() {
                    document.body.removeChild(t)
                }), 100)
            }, n = window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.pacific ? function(e, t) {
                i = {
                    action: e,
                    parameters: (t = t || {}).params,
                    print: !!t.print
                }, "string" == typeof t.callback ? i.callback = {
                    type: 0,
                    name: t.callback,
                    parameters: ["key"]
                } : i.callback = t.callback, window.webkit.messageHandlers.pacific.postMessage(i)
            } : function(n, i) {
                var o, a, c, u = [];
                if (o = ((i = i || {}).protocol || "sslocal") + "://" + n, i.callback && (i.params = i.params || {}, i.params.callback = i.callback), i.params) {
                    for (a in c = i.params)
                        if (c.hasOwnProperty(a)) {
                            var s = c[a];
                            "object" == t(s) && (s = JSON.stringify(s)), u.push(encodeURIComponent(a) + "=" + encodeURIComponent(s))
                        }
                    u.push("r=" + (Math.random() + "").slice(2)), o += "?" + u.join("&")
                }
                e ? (i.debugCall && i.debugCall(n, i.params), (console.dir || console.log)(o)) : r(o)
            }, {
                call: function(t, r, i) {
                    var o = r = r || {};
                    if (i && "function" == typeof i) {
                        var a = t + "DidFinish" + (e ? "" : "_" + Math.random().toString(36).slice(2));
                        document.addEventListener(a, (function e(t) {
                            "success" === t.detail.message && i(t.detail.data), document.removeEventListener(a, e)
                        }))
                    }
                    n(t, {
                        callback: a,
                        params: o
                    })
                }
            }
        }(!!window.globalConfig && window.globalConfig.isDebug),
        Pl = Al,
        Cl = "HistoryObserver";
    ! function(e) {
        e.DYNAMIC_WEB_PAGEVIEW = "dynamic_web_pageview"
    }(Rl || (Rl = {}));
    var kl = ["GoogleTagManagerClient", "GoogleTagManagerServer"];

    function Ml(e, t) {
        var n = history[e];
        return function() {
            var e = Array.prototype.slice.call(arguments);
            n.apply(history, e), t()
        }
    }

    function Dl(e) {
        var t = e.options,
            n = e.plugins;
        return t && !1 !== t.historyObserver && n && n[Cl]
    }

    function Ll(e, t) {
        var n = Fi().url,
            r = e.context.getPageInfo().url;
        if (n !== r) {
            var i, o = e.context.setPageInfo(n, r);
            o && o.pageIndex && mo(o.pageIndex), e.reporters.filter((i = Rl.DYNAMIC_WEB_PAGEVIEW, function(e) {
                var t = e.plugins;
                return !!(Dl(e) && t[Cl] && t[Cl][i])
            })).forEach((function(e) {
                setTimeout((function() {
                    e.page(t)
                }))
            }))
        }
    }
    var xl = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        jl = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ul = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this, {
                    name: Cl,
                    reporters: r,
                    context: e
                })).enableListenSPAHistoryChange = !1, o.listenSPAHistoryChange = bi((function() {
                    var e, t = function() {
                            o.enableListenSPAHistoryChange && o.notifyObservers({
                                tf: Ir.HISTORY_CHANGE
                            })
                        },
                        n = (e = t, function() {
                            setTimeout(e)
                        });
                    window.addEventListener("popstate", n), history.pushState = Ml("pushState", t), history.replaceState = Ml("replaceState", t)
                })), o.dynamicWebPageviewHandler = Ll.bind(null, f(o)), o
            }
            return a(n, [{
                key: "initListener",
                value: function(e) {
                    this.enableListenSPAHistoryChange = function(e) {
                        if (!e) return !1;
                        var t = ai(),
                            n = e.getReporterPartner();
                        return !(t && !kl.includes(t) || n && e.isPartnerReporter() && !kl.includes(n))
                    }(e), this.enableListenSPAHistoryChange && this.listenSPAHistoryChange()
                }
            }, {
                key: "pixelSend",
                value: function(e, t) {
                    var n = this.reporters.find((function(t) {
                        return t.getReporterId() === e
                    }));
                    n && Dl(n) && (t && "pageview" === t.toLowerCase() && this.addObserver(this.dynamicWebPageviewHandler), this.initListener(n))
                }
            }, {
                key: "pageUrlWillChange",
                value: function() {
                    this.enableListenSPAHistoryChange ? this.notifyObservers({
                        tf: Ir.HISTORY_CHANGE
                    }) : this.notifyObservers({
                        tf: Ir.URL_CHANGE,
                        event_experiment: "pageview"
                    })
                }
            }]), n
        }(oa);
    Ul = xl([R.injectable(), jl(0, R.inject(kr.CONTEXT)), jl(1, R.inject(kr.TTQ_REPORTERS))], Ul);
    var Fl = [{
            identifier: kr.HISTORY_OBSERVER,
            to: Ul,
            name: "HistoryObserver"
        }],
        Bl = ni(),
        ql = (null == Bl ? void 0 : Bl._container) || new R.Container,
        Gl = (null == Bl ? void 0 : Bl._container) ? aa.REBIND : aa.BIND;
    Bi();
    var Vl = ql[Gl](kr.ENV),
        Hl = ql[Gl](Rr.SignalType);
    ql[Gl](Rr.ID), ql[Gl](Rr.Type), ql[Gl](Rr.Options), ql[Gl](Rr.Plugins), ql[Gl](Rr.Rules), ql[Gl](Rr.Info);
    var Jl = ql[Gl](Rr.WebLibraryInfo),
        Wl = ql[Gl](kr.TTQ_GLOBAL_OPTIONS);
    try {
        if (!ql.get(kr.TTQ_GLOBAL_OPTIONS)) throw new Error("")
    } catch (lo) {
        Wl.toConstantValue({})
    }
    var Kl = function(e, t) {
            var n = function(e) {
                    return {
                        name: "pixel.js",
                        version: "2.2.0",
                        options: e
                    }
                }(),
                r = qi();
            Jl.toConstantValue(n), Vl.toConstantValue(t), Hl.toConstantValue(r), !e || e._mounted || ql.isBound(kr.JS_BRIDGE) || Gi(t) && (Vi(t) ? ql.bind(kr.JS_BRIDGE).toConstantValue(function() {
                if (window && window.ToutiaoJSBridge && window.ToutiaoJSBridge.call) return window.ToutiaoJSBridge
            }() || Nl) : ql.bind(kr.JS_BRIDGE).toConstantValue(Pl))
        },
        Yl = function(e) {
            (null == e ? void 0 : e._container) || (ql.bind(kr.TTQ).to(Oa).inSingletonScope(), ql.bind(kr.CONTEXT).to(Ra).inSingletonScope(), ql.bind(kr.REPORTER).to(Ea), ql.bind(kr.TTQ_REPORTERS).toConstantValue([]), ql.bind(kr.REPORT_SERVICE).to(Qa).inSingletonScope(), ql.bind(kr.AD_SERVICE).to(Ca).inSingletonScope(), ql.bind(kr.APP_SERVICE).to(Da).inSingletonScope(), ql.bind(kr.BRIDGE_SERVICE).to(qa).inSingletonScope(), ql.bind(kr.HTTP_SERVICE).to(Ka).inSingletonScope(), ql.bind(Rr.IsOnsitePage).toConstantValue({
                value: !1
            }), ql.bind(kr.COOKIE_SERVICE).to($a).inSingletonScope(), ql.bind(kr.CONSENT_SERVICE).to(Ha).inSingletonScope()), e && !e._container && (e._container = ql)
        },
        Xl = function() {
            rl.forEach((function(e) {
                var t = e.to,
                    n = e.name,
                    r = void 0 === n ? "" : n,
                    i = e.required,
                    o = void 0 !== i && i,
                    a = e.identifier;
                !o && !ui(r) || ql.isBound(a) || ql.bind(a).to(t).inSingletonScope()
            }))
        },
        Ql = function() {
            Fl.forEach((function(e) {
                var t = e.to,
                    n = e.name,
                    r = void 0 === n ? "" : n,
                    i = e.identifier;
                ui(r) && !ql.isBound(i) && ql.bind(i).to(t).inSingletonScope()
            }))
        },
        zl = function(e) {
            return e && e.Math == Math && e
        },
        Zl = zl("object" == typeof globalThis && globalThis) || zl("object" == typeof window && window) || zl("object" == typeof self && self) || zl("object" == typeof S && S) || Function("return this")(),
        $l = {},
        ef = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        tf = !ef((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        nf = {},
        rf = {}.propertyIsEnumerable,
        of = Object.getOwnPropertyDescriptor,
        af = of && !rf.call({
            1: 2
        }, 1);
    nf.f = af ? function(e) {
        var t = of (this, e);
        return !!t && t.enumerable
    } : rf;
    var cf = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        uf = {}.toString,
        sf = function(e) {
            return uf.call(e).slice(8, -1)
        },
        lf = sf,
        ff = "".split,
        df = ef((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == lf(e) ? ff.call(e, "") : Object(e)
        } : Object,
        pf = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        hf = df,
        _f = pf,
        vf = function(e) {
            return hf(_f(e))
        },
        gf = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        yf = gf,
        mf = function(e, t) {
            if (!yf(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !yf(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !yf(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !yf(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        Ef = {}.hasOwnProperty,
        bf = function(e, t) {
            return Ef.call(e, t)
        },
        wf = gf,
        If = Zl.document,
        Tf = wf(If) && wf(If.createElement),
        Of = function(e) {
            return Tf ? If.createElement(e) : {}
        },
        Sf = Of,
        Nf = !tf && !ef((function() {
            return 7 != Object.defineProperty(Sf("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        Rf = tf,
        Af = nf,
        Pf = cf,
        Cf = vf,
        kf = mf,
        Mf = bf,
        Df = Nf,
        Lf = Object.getOwnPropertyDescriptor;
    $l.f = Rf ? Lf : function(e, t) {
        if (e = Cf(e), t = kf(t, !0), Df) try {
            return Lf(e, t)
        } catch (e) {}
        if (Mf(e, t)) return Pf(!Af.f.call(e, t), e[t])
    };
    var xf = {},
        jf = gf,
        Uf = function(e) {
            if (!jf(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        Ff = tf,
        Bf = Nf,
        qf = Uf,
        Gf = mf,
        Vf = Object.defineProperty;
    xf.f = Ff ? Vf : function(e, t, n) {
        if (qf(e), t = Gf(t, !0), qf(n), Bf) try {
            return Vf(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    };
    var Hf = xf,
        Jf = cf,
        Wf = tf ? function(e, t, n) {
            return Hf.f(e, t, Jf(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        Kf = {
            exports: {}
        },
        Yf = Zl,
        Xf = Wf,
        Qf = function(e, t) {
            try {
                Xf(Yf, e, t)
            } catch (n) {
                Yf[e] = t
            }
            return t
        },
        zf = Qf,
        Zf = "__core-js_shared__",
        $f = Zl[Zf] || zf(Zf, {}),
        ed = $f,
        td = Function.toString;
    "function" != typeof ed.inspectSource && (ed.inspectSource = function(e) {
        return td.call(e)
    });
    var nd = ed.inspectSource,
        rd = nd,
        id = Zl.WeakMap,
        od = "function" == typeof id && /native code/.test(rd(id)),
        ad = {
            exports: {}
        },
        cd = $f;
    (ad.exports = function(e, t) {
        return cd[e] || (cd[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.6.4",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
    var ud, sd, ld, fd = 0,
        dd = Math.random(),
        pd = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++fd + dd).toString(36)
        },
        hd = ad.exports,
        _d = pd,
        vd = hd("keys"),
        gd = function(e) {
            return vd[e] || (vd[e] = _d(e))
        },
        yd = {},
        md = od,
        Ed = gf,
        bd = Wf,
        wd = bf,
        Id = gd,
        Td = yd,
        Od = Zl.WeakMap;
    if (md) {
        var Sd = new Od,
            Nd = Sd.get,
            Rd = Sd.has,
            Ad = Sd.set;
        ud = function(e, t) {
            return Ad.call(Sd, e, t), t
        }, sd = function(e) {
            return Nd.call(Sd, e) || {}
        }, ld = function(e) {
            return Rd.call(Sd, e)
        }
    } else {
        var Pd = Id("state");
        Td[Pd] = !0, ud = function(e, t) {
            return bd(e, Pd, t), t
        }, sd = function(e) {
            return wd(e, Pd) ? e[Pd] : {}
        }, ld = function(e) {
            return wd(e, Pd)
        }
    }
    var Cd = {
            set: ud,
            get: sd,
            has: ld,
            enforce: function(e) {
                return ld(e) ? sd(e) : ud(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!Ed(t) || (n = sd(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        kd = Zl,
        Md = Wf,
        Dd = bf,
        Ld = Qf,
        xd = nd,
        jd = Cd.get,
        Ud = Cd.enforce,
        Fd = String(String).split("String");
    (Kf.exports = function(e, t, n, r) {
        var i = !!r && !!r.unsafe,
            o = !!r && !!r.enumerable,
            a = !!r && !!r.noTargetGet;
        "function" == typeof n && ("string" != typeof t || Dd(n, "name") || Md(n, "name", t), Ud(n).source = Fd.join("string" == typeof t ? t : "")), e !== kd ? (i ? !a && e[t] && (o = !0) : delete e[t], o ? e[t] = n : Md(e, t, n)) : o ? e[t] = n : Ld(t, n)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && jd(this).source || xd(this)
    }));
    var Bd = Zl,
        qd = Bd,
        Gd = Zl,
        Vd = function(e) {
            return "function" == typeof e ? e : void 0
        },
        Hd = function(e, t) {
            return arguments.length < 2 ? Vd(qd[e]) || Vd(Gd[e]) : qd[e] && qd[e][t] || Gd[e] && Gd[e][t]
        },
        Jd = {},
        Wd = Math.ceil,
        Kd = Math.floor,
        Yd = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? Kd : Wd)(e)
        },
        Xd = Yd,
        Qd = Math.min,
        zd = function(e) {
            return e > 0 ? Qd(Xd(e), 9007199254740991) : 0
        },
        Zd = Yd,
        $d = Math.max,
        ep = Math.min,
        tp = vf,
        np = zd,
        rp = function(e, t) {
            var n = Zd(e);
            return n < 0 ? $d(n + t, 0) : ep(n, t)
        },
        ip = function(e) {
            return function(t, n, r) {
                var i, o = tp(t),
                    a = np(o.length),
                    c = rp(r, a);
                if (e && n != n) {
                    for (; a > c;)
                        if ((i = o[c++]) != i) return !0
                } else
                    for (; a > c; c++)
                        if ((e || c in o) && o[c] === n) return e || c || 0;
                return !e && -1
            }
        },
        op = {
            includes: ip(!0),
            indexOf: ip(!1)
        },
        ap = bf,
        cp = vf,
        up = op.indexOf,
        sp = yd,
        lp = function(e, t) {
            var n, r = cp(e),
                i = 0,
                o = [];
            for (n in r) !ap(sp, n) && ap(r, n) && o.push(n);
            for (; t.length > i;) ap(r, n = t[i++]) && (~up(o, n) || o.push(n));
            return o
        },
        fp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        dp = lp,
        pp = fp.concat("length", "prototype");
    Jd.f = Object.getOwnPropertyNames || function(e) {
        return dp(e, pp)
    };
    var hp = {};
    hp.f = Object.getOwnPropertySymbols;
    var _p, vp = Jd,
        gp = hp,
        yp = Uf,
        mp = Hd("Reflect", "ownKeys") || function(e) {
            var t = vp.f(yp(e)),
                n = gp.f;
            return n ? t.concat(n(e)) : t
        },
        Ep = bf,
        bp = mp,
        wp = $l,
        Ip = xf,
        Tp = ef,
        Op = /#|\.prototype\./,
        Sp = function(e, t) {
            var n = Rp[Np(e)];
            return n == Pp || n != Ap && ("function" == typeof t ? Tp(t) : !!t)
        },
        Np = Sp.normalize = function(e) {
            return String(e).replace(Op, ".").toLowerCase()
        },
        Rp = Sp.data = {},
        Ap = Sp.NATIVE = "N",
        Pp = Sp.POLYFILL = "P",
        Cp = Sp,
        kp = Zl,
        Mp = $l.f,
        Dp = Wf,
        Lp = Kf.exports,
        xp = Qf,
        jp = function(e, t) {
            for (var n = bp(t), r = Ip.f, i = wp.f, o = 0; o < n.length; o++) {
                var a = n[o];
                Ep(e, a) || r(e, a, i(t, a))
            }
        },
        Up = Cp,
        Fp = function(e, t) {
            var n, r, i, o, a, c = e.target,
                u = e.global,
                s = e.stat;
            if (n = u ? kp : s ? kp[c] || xp(c, {}) : (kp[c] || {}).prototype)
                for (r in t) {
                    if (o = t[r], i = e.noTargetGet ? (a = Mp(n, r)) && a.value : n[r], !Up(u ? r : c + (s ? "." : "#") + r, e.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        jp(o, i)
                    }(e.sham || i && i.sham) && Dp(o, "sham", !0), Lp(n, r, o, e)
                }
        },
        Bp = ef,
        qp = !!Object.getOwnPropertySymbols && !Bp((function() {
            return !String(Symbol())
        })),
        Gp = qp && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Vp = sf,
        Hp = Array.isArray || function(e) {
            return "Array" == Vp(e)
        },
        Jp = pf,
        Wp = function(e) {
            return Object(Jp(e))
        },
        Kp = lp,
        Yp = fp,
        Xp = Object.keys || function(e) {
            return Kp(e, Yp)
        },
        Qp = xf,
        zp = Uf,
        Zp = Xp,
        $p = tf ? Object.defineProperties : function(e, t) {
            zp(e);
            for (var n, r = Zp(t), i = r.length, o = 0; i > o;) Qp.f(e, n = r[o++], t[n]);
            return e
        },
        eh = Hd("document", "documentElement"),
        th = Uf,
        nh = $p,
        rh = fp,
        ih = yd,
        oh = eh,
        ah = Of,
        ch = gd("IE_PROTO"),
        uh = function() {},
        sh = function(e) {
            return "<script>" + e + "</" + "script>"
        },
        lh = function() {
            try {
                _p = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            lh = _p ? function(e) {
                e.write(sh("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(_p) : ((t = ah("iframe")).style.display = "none", oh.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(sh("document.F=Object")), e.close(), e.F);
            for (var n = rh.length; n--;) delete lh.prototype[rh[n]];
            return lh()
        };
    ih[ch] = !0;
    var fh = Object.create || function(e, t) {
            var n;
            return null !== e ? (uh.prototype = th(e), n = new uh, uh.prototype = null, n[ch] = e) : n = lh(), void 0 === t ? n : nh(n, t)
        },
        dh = {},
        ph = vf,
        hh = Jd.f,
        _h = {}.toString,
        vh = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    dh.f = function(e) {
        return vh && "[object Window]" == _h.call(e) ? function(e) {
            try {
                return hh(e)
            } catch (e) {
                return vh.slice()
            }
        }(e) : hh(ph(e))
    };
    var gh = Zl,
        yh = ad.exports,
        mh = bf,
        Eh = pd,
        bh = qp,
        wh = Gp,
        Ih = yh("wks"),
        Th = gh.Symbol,
        Oh = wh ? Th : Th && Th.withoutSetter || Eh,
        Sh = function(e) {
            return mh(Ih, e) || (bh && mh(Th, e) ? Ih[e] = Th[e] : Ih[e] = Oh("Symbol." + e)), Ih[e]
        },
        Nh = {},
        Rh = Sh;
    Nh.f = Rh;
    var Ah = Bd,
        Ph = bf,
        Ch = Nh,
        kh = xf.f,
        Mh = xf.f,
        Dh = bf,
        Lh = Sh("toStringTag"),
        xh = function(e, t, n) {
            e && !Dh(e = n ? e : e.prototype, Lh) && Mh(e, Lh, {
                configurable: !0,
                value: t
            })
        },
        jh = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        Uh = jh,
        Fh = function(e, t, n) {
            if (Uh(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        Bh = gf,
        qh = Hp,
        Gh = Sh("species"),
        Vh = Fh,
        Hh = df,
        Jh = Wp,
        Wh = zd,
        Kh = function(e, t) {
            var n;
            return qh(e) && ("function" != typeof(n = e.constructor) || n !== Array && !qh(n.prototype) ? Bh(n) && null === (n = n[Gh]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        Yh = [].push,
        Xh = function(e) {
            var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                i = 4 == e,
                o = 6 == e,
                a = 5 == e || o;
            return function(c, u, s, l) {
                for (var f, d, p = Jh(c), h = Hh(p), _ = Vh(u, s, 3), v = Wh(h.length), g = 0, y = l || Kh, m = t ? y(c, v) : n ? y(c, 0) : void 0; v > g; g++)
                    if ((a || g in h) && (d = _(f = h[g], g, p), e))
                        if (t) m[g] = d;
                        else if (d) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return g;
                    case 2:
                        Yh.call(m, f)
                } else if (i) return !1;
                return o ? -1 : r || i ? i : m
            }
        },
        Qh = {
            forEach: Xh(0),
            map: Xh(1),
            filter: Xh(2),
            some: Xh(3),
            every: Xh(4),
            find: Xh(5),
            findIndex: Xh(6)
        },
        zh = Fp,
        Zh = Zl,
        $h = Hd,
        e_ = tf,
        t_ = qp,
        n_ = Gp,
        r_ = ef,
        i_ = bf,
        o_ = Hp,
        a_ = gf,
        c_ = Uf,
        u_ = Wp,
        s_ = vf,
        l_ = mf,
        f_ = cf,
        d_ = fh,
        p_ = Xp,
        h_ = Jd,
        __ = dh,
        v_ = hp,
        g_ = $l,
        y_ = xf,
        m_ = nf,
        E_ = Wf,
        b_ = Kf.exports,
        w_ = ad.exports,
        I_ = yd,
        T_ = pd,
        O_ = Sh,
        S_ = Nh,
        N_ = function(e) {
            var t = Ah.Symbol || (Ah.Symbol = {});
            Ph(t, e) || kh(t, e, {
                value: Ch.f(e)
            })
        },
        R_ = xh,
        A_ = Cd,
        P_ = Qh.forEach,
        C_ = gd("hidden"),
        k_ = "Symbol",
        M_ = O_("toPrimitive"),
        D_ = A_.set,
        L_ = A_.getterFor(k_),
        x_ = Object.prototype,
        j_ = Zh.Symbol,
        U_ = $h("JSON", "stringify"),
        F_ = g_.f,
        B_ = y_.f,
        q_ = __.f,
        G_ = m_.f,
        V_ = w_("symbols"),
        H_ = w_("op-symbols"),
        J_ = w_("string-to-symbol-registry"),
        W_ = w_("symbol-to-string-registry"),
        K_ = w_("wks"),
        Y_ = Zh.QObject,
        X_ = !Y_ || !Y_.prototype || !Y_.prototype.findChild,
        Q_ = e_ && r_((function() {
            return 7 != d_(B_({}, "a", {
                get: function() {
                    return B_(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(e, t, n) {
            var r = F_(x_, t);
            r && delete x_[t], B_(e, t, n), r && e !== x_ && B_(x_, t, r)
        } : B_,
        z_ = function(e, t) {
            var n = V_[e] = d_(j_.prototype);
            return D_(n, {
                type: k_,
                tag: e,
                description: t
            }), e_ || (n.description = t), n
        },
        Z_ = n_ ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof j_
        },
        $_ = function(e, t, n) {
            e === x_ && $_(H_, t, n), c_(e);
            var r = l_(t, !0);
            return c_(n), i_(V_, r) ? (n.enumerable ? (i_(e, C_) && e[C_][r] && (e[C_][r] = !1), n = d_(n, {
                enumerable: f_(0, !1)
            })) : (i_(e, C_) || B_(e, C_, f_(1, {})), e[C_][r] = !0), Q_(e, r, n)) : B_(e, r, n)
        },
        ev = function(e, t) {
            c_(e);
            var n = s_(t),
                r = p_(n).concat(iv(n));
            return P_(r, (function(t) {
                e_ && !tv.call(n, t) || $_(e, t, n[t])
            })), e
        },
        tv = function(e) {
            var t = l_(e, !0),
                n = G_.call(this, t);
            return !(this === x_ && i_(V_, t) && !i_(H_, t)) && (!(n || !i_(this, t) || !i_(V_, t) || i_(this, C_) && this[C_][t]) || n)
        },
        nv = function(e, t) {
            var n = s_(e),
                r = l_(t, !0);
            if (n !== x_ || !i_(V_, r) || i_(H_, r)) {
                var i = F_(n, r);
                return !i || !i_(V_, r) || i_(n, C_) && n[C_][r] || (i.enumerable = !0), i
            }
        },
        rv = function(e) {
            var t = q_(s_(e)),
                n = [];
            return P_(t, (function(e) {
                i_(V_, e) || i_(I_, e) || n.push(e)
            })), n
        },
        iv = function(e) {
            var t = e === x_,
                n = q_(t ? H_ : s_(e)),
                r = [];
            return P_(n, (function(e) {
                !i_(V_, e) || t && !i_(x_, e) || r.push(V_[e])
            })), r
        };
    (t_ || (j_ = function() {
        if (this instanceof j_) throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = T_(e),
            n = function(e) {
                this === x_ && n.call(H_, e), i_(this, C_) && i_(this[C_], t) && (this[C_][t] = !1), Q_(this, t, f_(1, e))
            };
        return e_ && X_ && Q_(x_, t, {
            configurable: !0,
            set: n
        }), z_(t, e)
    }, b_(j_.prototype, "toString", (function() {
        return L_(this).tag
    })), b_(j_, "withoutSetter", (function(e) {
        return z_(T_(e), e)
    })), m_.f = tv, y_.f = $_, g_.f = nv, h_.f = __.f = rv, v_.f = iv, S_.f = function(e) {
        return z_(O_(e), e)
    }, e_ && (B_(j_.prototype, "description", {
        configurable: !0,
        get: function() {
            return L_(this).description
        }
    }), b_(x_, "propertyIsEnumerable", tv, {
        unsafe: !0
    }))), zh({
        global: !0,
        wrap: !0,
        forced: !t_,
        sham: !t_
    }, {
        Symbol: j_
    }), P_(p_(K_), (function(e) {
        N_(e)
    })), zh({
        target: k_,
        stat: !0,
        forced: !t_
    }, {
        for: function(e) {
            var t = String(e);
            if (i_(J_, t)) return J_[t];
            var n = j_(t);
            return J_[t] = n, W_[n] = t, n
        },
        keyFor: function(e) {
            if (!Z_(e)) throw TypeError(e + " is not a symbol");
            if (i_(W_, e)) return W_[e]
        },
        useSetter: function() {
            X_ = !0
        },
        useSimple: function() {
            X_ = !1
        }
    }), zh({
        target: "Object",
        stat: !0,
        forced: !t_,
        sham: !e_
    }, {
        create: function(e, t) {
            return void 0 === t ? d_(e) : ev(d_(e), t)
        },
        defineProperty: $_,
        defineProperties: ev,
        getOwnPropertyDescriptor: nv
    }), zh({
        target: "Object",
        stat: !0,
        forced: !t_
    }, {
        getOwnPropertyNames: rv,
        getOwnPropertySymbols: iv
    }), zh({
        target: "Object",
        stat: !0,
        forced: r_((function() {
            v_.f(1)
        }))
    }, {
        getOwnPropertySymbols: function(e) {
            return v_.f(u_(e))
        }
    }), U_) && zh({
        target: "JSON",
        stat: !0,
        forced: !t_ || r_((function() {
            var e = j_();
            return "[null]" != U_([e]) || "{}" != U_({
                a: e
            }) || "{}" != U_(Object(e))
        }))
    }, {
        stringify: function(e, t, n) {
            for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
            if (r = t, (a_(t) || void 0 !== e) && !Z_(e)) return o_(t) || (t = function(e, t) {
                if ("function" == typeof r && (t = r.call(this, e, t)), !Z_(t)) return t
            }), i[1] = t, U_.apply(null, i)
        }
    });
    j_.prototype[M_] || E_(j_.prototype, M_, j_.prototype.valueOf), R_(j_, k_), I_[C_] = !0;
    var ov = tf,
        av = ef,
        cv = Xp,
        uv = hp,
        sv = nf,
        lv = Wp,
        fv = df,
        dv = Object.assign,
        pv = Object.defineProperty,
        hv = !dv || av((function() {
            if (ov && 1 !== dv({
                    b: 1
                }, dv(pv({}, "a", {
                    enumerable: !0,
                    get: function() {
                        pv(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach((function(e) {
                t[e] = e
            })), 7 != dv({}, e)[n] || cv(dv({}, t)).join("") != r
        })) ? function(e, t) {
            for (var n = lv(e), r = arguments.length, i = 1, o = uv.f, a = sv.f; r > i;)
                for (var c, u = fv(arguments[i++]), s = o ? cv(u).concat(o(u)) : cv(u), l = s.length, f = 0; l > f;) c = s[f++], ov && !a.call(u, c) || (n[c] = u[c]);
            return n
        } : dv,
        _v = hv;
    Fp({
        target: "Object",
        stat: !0,
        forced: Object.assign !== _v
    }, {
        assign: _v
    }), Fp({
        target: "Object",
        stat: !0,
        sham: !tf
    }, {
        create: fh
    });
    Fp({
        target: "Object",
        stat: !0,
        forced: !tf,
        sham: !tf
    }, {
        defineProperty: xf.f
    });
    Fp({
        target: "Object",
        stat: !0,
        forced: !tf,
        sham: !tf
    }, {
        defineProperties: $p
    });
    var vv = tf,
        gv = Xp,
        yv = vf,
        mv = nf.f,
        Ev = function(e) {
            return function(t) {
                for (var n, r = yv(t), i = gv(r), o = i.length, a = 0, c = []; o > a;) n = i[a++], vv && !mv.call(r, n) || c.push(e ? [n, r[n]] : r[n]);
                return c
            }
        },
        bv = {
            entries: Ev(!0),
            values: Ev(!1)
        },
        wv = bv.entries;
    Fp({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return wv(e)
        }
    });
    var Iv = !ef((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        Tv = {
            exports: {}
        },
        Ov = yd,
        Sv = gf,
        Nv = bf,
        Rv = xf.f,
        Av = Iv,
        Pv = pd("meta"),
        Cv = 0,
        kv = Object.isExtensible || function() {
            return !0
        },
        Mv = function(e) {
            Rv(e, Pv, {
                value: {
                    objectID: "O" + ++Cv,
                    weakData: {}
                }
            })
        },
        Dv = Tv.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!Sv(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!Nv(e, Pv)) {
                    if (!kv(e)) return "F";
                    if (!t) return "E";
                    Mv(e)
                }
                return e[Pv].objectID
            },
            getWeakData: function(e, t) {
                if (!Nv(e, Pv)) {
                    if (!kv(e)) return !0;
                    if (!t) return !1;
                    Mv(e)
                }
                return e[Pv].weakData
            },
            onFreeze: function(e) {
                return Av && Dv.REQUIRED && kv(e) && !Nv(e, Pv) && Mv(e), e
            }
        };
    Ov[Pv] = !0;
    var Lv = Fp,
        xv = Iv,
        jv = ef,
        Uv = gf,
        Fv = Tv.exports.onFreeze,
        Bv = Object.freeze;
    Lv({
        target: "Object",
        stat: !0,
        forced: jv((function() {
            Bv(1)
        })),
        sham: !xv
    }, {
        freeze: function(e) {
            return Bv && Uv(e) ? Bv(Fv(e)) : e
        }
    });
    var qv = {
            exports: {}
        },
        Gv = {},
        Vv = Gv,
        Hv = Sh("iterator"),
        Jv = Array.prototype,
        Wv = {};
    Wv[Sh("toStringTag")] = "z";
    var Kv = "[object z]" === String(Wv),
        Yv = Kv,
        Xv = sf,
        Qv = Sh("toStringTag"),
        zv = "Arguments" == Xv(function() {
            return arguments
        }()),
        Zv = Yv ? Xv : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), Qv)) ? n : zv ? Xv(t) : "Object" == (r = Xv(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        $v = Zv,
        eg = Gv,
        tg = Sh("iterator"),
        ng = Uf,
        rg = Uf,
        ig = function(e) {
            return void 0 !== e && (Vv.Array === e || Jv[Hv] === e)
        },
        og = zd,
        ag = Fh,
        cg = function(e) {
            if (null != e) return e[tg] || e["@@iterator"] || eg[$v(e)]
        },
        ug = function(e, t, n, r) {
            try {
                return r ? t(ng(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && ng(i.call(e)), t
            }
        },
        sg = function(e, t) {
            this.stopped = e, this.result = t
        };
    (qv.exports = function(e, t, n, r, i) {
        var o, a, c, u, s, l, f, d = ag(t, n, r ? 2 : 1);
        if (i) o = e;
        else {
            if ("function" != typeof(a = cg(e))) throw TypeError("Target is not iterable");
            if (ig(a)) {
                for (c = 0, u = og(e.length); u > c; c++)
                    if ((s = r ? d(rg(f = e[c])[0], f[1]) : d(e[c])) && s instanceof sg) return s;
                return new sg(!1)
            }
            o = a.call(e)
        }
        for (l = o.next; !(f = l.call(o)).done;)
            if ("object" == typeof(s = ug(o, d, f.value, r)) && s && s instanceof sg) return s;
        return new sg(!1)
    }).stop = function(e) {
        return new sg(!0, e)
    };
    var lg = mf,
        fg = xf,
        dg = cf,
        pg = function(e, t, n) {
            var r = lg(t);
            r in e ? fg.f(e, r, dg(0, n)) : e[r] = n
        },
        hg = Fp,
        _g = qv.exports,
        vg = pg;
    hg({
        target: "Object",
        stat: !0
    }, {
        fromEntries: function(e) {
            var t = {};
            return _g(e, (function(e, n) {
                vg(t, e, n)
            }), void 0, !0), t
        }
    });
    var gg = Fp,
        yg = ef,
        mg = vf,
        Eg = $l.f,
        bg = tf,
        wg = yg((function() {
            Eg(1)
        }));
    gg({
        target: "Object",
        stat: !0,
        forced: !bg || wg,
        sham: !bg
    }, {
        getOwnPropertyDescriptor: function(e, t) {
            return Eg(mg(e), t)
        }
    });
    var Ig = mp,
        Tg = vf,
        Og = $l,
        Sg = pg;
    Fp({
        target: "Object",
        stat: !0,
        sham: !tf
    }, {
        getOwnPropertyDescriptors: function(e) {
            for (var t, n, r = Tg(e), i = Og.f, o = Ig(r), a = {}, c = 0; o.length > c;) void 0 !== (n = i(r, t = o[c++])) && Sg(a, t, n);
            return a
        }
    });
    var Ng = Fp,
        Rg = ef,
        Ag = dh.f;
    Ng({
        target: "Object",
        stat: !0,
        forced: Rg((function() {
            return !Object.getOwnPropertyNames(1)
        }))
    }, {
        getOwnPropertyNames: Ag
    });
    var Pg = !ef((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        Cg = bf,
        kg = Wp,
        Mg = Pg,
        Dg = gd("IE_PROTO"),
        Lg = Object.prototype,
        xg = Mg ? Object.getPrototypeOf : function(e) {
            return e = kg(e), Cg(e, Dg) ? e[Dg] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Lg : null
        },
        jg = Wp,
        Ug = xg,
        Fg = Pg;
    Fp({
        target: "Object",
        stat: !0,
        forced: ef((function() {
            Ug(1)
        })),
        sham: !Fg
    }, {
        getPrototypeOf: function(e) {
            return Ug(jg(e))
        }
    });
    var Bg = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    Fp({
        target: "Object",
        stat: !0
    }, {
        is: Bg
    });
    var qg = Fp,
        Gg = ef,
        Vg = gf,
        Hg = Object.isExtensible;
    qg({
        target: "Object",
        stat: !0,
        forced: Gg((function() {
            Hg(1)
        }))
    }, {
        isExtensible: function(e) {
            return !!Vg(e) && (!Hg || Hg(e))
        }
    });
    var Jg = Fp,
        Wg = ef,
        Kg = gf,
        Yg = Object.isFrozen;
    Jg({
        target: "Object",
        stat: !0,
        forced: Wg((function() {
            Yg(1)
        }))
    }, {
        isFrozen: function(e) {
            return !Kg(e) || !!Yg && Yg(e)
        }
    });
    var Xg = Fp,
        Qg = ef,
        zg = gf,
        Zg = Object.isSealed;
    Xg({
        target: "Object",
        stat: !0,
        forced: Qg((function() {
            Zg(1)
        }))
    }, {
        isSealed: function(e) {
            return !zg(e) || !!Zg && Zg(e)
        }
    });
    var $g = Wp,
        ey = Xp;
    Fp({
        target: "Object",
        stat: !0,
        forced: ef((function() {
            ey(1)
        }))
    }, {
        keys: function(e) {
            return ey($g(e))
        }
    });
    var ty = Fp,
        ny = gf,
        ry = Tv.exports.onFreeze,
        iy = Iv,
        oy = ef,
        ay = Object.preventExtensions;
    ty({
        target: "Object",
        stat: !0,
        forced: oy((function() {
            ay(1)
        })),
        sham: !iy
    }, {
        preventExtensions: function(e) {
            return ay && ny(e) ? ay(ry(e)) : e
        }
    });
    var cy = Fp,
        uy = gf,
        sy = Tv.exports.onFreeze,
        ly = Iv,
        fy = ef,
        dy = Object.seal;
    cy({
        target: "Object",
        stat: !0,
        forced: fy((function() {
            dy(1)
        })),
        sham: !ly
    }, {
        seal: function(e) {
            return dy && uy(e) ? dy(sy(e)) : e
        }
    });
    var py = gf,
        hy = Uf,
        _y = function(e) {
            if (!py(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        },
        vy = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function(n, r) {
                return hy(n), _y(r), t ? e.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0);
    Fp({
        target: "Object",
        stat: !0
    }, {
        setPrototypeOf: vy
    });
    var gy = bv.values;
    Fp({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return gy(e)
        }
    });
    var yy = Zv,
        my = Kv ? {}.toString : function() {
            return "[object " + yy(this) + "]"
        },
        Ey = Kv,
        by = Kf.exports,
        wy = my;
    Ey || by(Object.prototype, "toString", wy, {
        unsafe: !0
    });
    var Iy = Zl,
        Ty = !ef((function() {
            var e = Math.random();
            __defineSetter__.call(null, e, (function() {})), delete Iy[e]
        })),
        Oy = Wp,
        Sy = jh,
        Ny = xf;
    tf && Fp({
        target: "Object",
        proto: !0,
        forced: Ty
    }, {
        __defineGetter__: function(e, t) {
            Ny.f(Oy(this), e, {
                get: Sy(t),
                enumerable: !0,
                configurable: !0
            })
        }
    });
    var Ry = Wp,
        Ay = jh,
        Py = xf;
    tf && Fp({
        target: "Object",
        proto: !0,
        forced: Ty
    }, {
        __defineSetter__: function(e, t) {
            Py.f(Ry(this), e, {
                set: Ay(t),
                enumerable: !0,
                configurable: !0
            })
        }
    });
    var Cy = Fp,
        ky = tf,
        My = Ty,
        Dy = Wp,
        Ly = mf,
        xy = xg,
        jy = $l.f;
    ky && Cy({
        target: "Object",
        proto: !0,
        forced: My
    }, {
        __lookupGetter__: function(e) {
            var t, n = Dy(this),
                r = Ly(e, !0);
            do {
                if (t = jy(n, r)) return t.get
            } while (n = xy(n))
        }
    });
    var Uy = Fp,
        Fy = tf,
        By = Ty,
        qy = Wp,
        Gy = mf,
        Vy = xg,
        Hy = $l.f;

    function Jy(e) {
        var t = this.constructor;
        return this.then((function(n) {
            return t.resolve(e()).then((function() {
                return n
            }))
        }), (function(n) {
            return t.resolve(e()).then((function() {
                return t.reject(n)
            }))
        }))
    }

    function Wy(e) {
        return new this((function(t, n) {
            if (!e || void 0 === e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var i = r.length;

            function o(e, n) {
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var a = n.then;
                    if ("function" == typeof a) return void a.call(n, (function(t) {
                        o(e, t)
                    }), (function(n) {
                        r[e] = {
                            status: "rejected",
                            reason: n
                        }, 0 == --i && t(r)
                    }))
                }
                r[e] = {
                    status: "fulfilled",
                    value: n
                }, 0 == --i && t(r)
            }
            for (var a = 0; a < r.length; a++) o(a, r[a])
        }))
    }

    function Ky(e, t) {
        this.name = "AggregateError", this.errors = e, this.message = t || ""
    }

    function Yy(e) {
        var t = this;
        return new t((function(n, r) {
            if (!e || void 0 === e.length) return r(new TypeError("Promise.any accepts an array"));
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return r();
            for (var o = [], a = 0; a < i.length; a++) try {
                t.resolve(i[a]).then(n).catch((function(e) {
                    o.push(e), o.length === i.length && r(new Ky(o, "All promises were rejected"))
                }))
            } catch (e) {
                r(e)
            }
        }))
    }
    Fy && Uy({
        target: "Object",
        proto: !0,
        forced: By
    }, {
        __lookupSetter__: function(e) {
            var t, n = qy(this),
                r = Gy(e, !0);
            do {
                if (t = Hy(n, r)) return t.set
            } while (n = Vy(n))
        }
    }), xh(Math, "Math", !0), xh(Zl.JSON, "JSON", !0), Bd.Object, Ky.prototype = Error.prototype;
    var Xy = setTimeout;

    function Qy(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function zy() {}

    function Zy(e) {
        if (!(this instanceof Zy)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], im(e, this)
    }

    function $y(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, Zy._immediateFn((function() {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(e._value)
                } catch (e) {
                    return void tm(t.promise, e)
                }
                em(t.promise, r)
            } else(1 === e._state ? em : tm)(t.promise, e._value)
        }))) : e._deferreds.push(t)
    }

    function em(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof Zy) return e._state = 3, e._value = t, void nm(e);
                if ("function" == typeof n) return void im((r = n, i = t, function() {
                    r.apply(i, arguments)
                }), e)
            }
            e._state = 1, e._value = t, nm(e)
        } catch (t) {
            tm(e, t)
        }
        var r, i
    }

    function tm(e, t) {
        e._state = 2, e._value = t, nm(e)
    }

    function nm(e) {
        2 === e._state && 0 === e._deferreds.length && Zy._immediateFn((function() {
            e._handled || Zy._unhandledRejectionFn(e._value)
        }));
        for (var t = 0, n = e._deferreds.length; t < n; t++) $y(e, e._deferreds[t]);
        e._deferreds = null
    }

    function rm(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function im(e, t) {
        var n = !1;
        try {
            e((function(e) {
                n || (n = !0, em(t, e))
            }), (function(e) {
                n || (n = !0, tm(t, e))
            }))
        } catch (e) {
            if (n) return;
            n = !0, tm(t, e)
        }
    }
    Zy.prototype.catch = function(e) {
        return this.then(null, e)
    }, Zy.prototype.then = function(e, t) {
        var n = new this.constructor(zy);
        return $y(this, new rm(e, t, n)), n
    }, Zy.prototype.finally = Jy, Zy.all = function(e) {
        return new Zy((function(t, n) {
            if (!Qy(e)) return n(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var i = r.length;

            function o(e, a) {
                try {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var c = a.then;
                        if ("function" == typeof c) return void c.call(a, (function(t) {
                            o(e, t)
                        }), n)
                    }
                    r[e] = a, 0 == --i && t(r)
                } catch (e) {
                    n(e)
                }
            }
            for (var a = 0; a < r.length; a++) o(a, r[a])
        }))
    }, Zy.any = Yy, Zy.allSettled = Wy, Zy.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === Zy ? e : new Zy((function(t) {
            t(e)
        }))
    }, Zy.reject = function(e) {
        return new Zy((function(t, n) {
            n(e)
        }))
    }, Zy.race = function(e) {
        return new Zy((function(t, n) {
            if (!Qy(e)) return n(new TypeError("Promise.race accepts an array"));
            for (var r = 0, i = e.length; r < i; r++) Zy.resolve(e[r]).then(t, n)
        }))
    }, Zy._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    } || function(e) {
        Xy(e, 0)
    }, Zy._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console
    };
    var om = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    }();
    "function" != typeof om.Promise ? om.Promise = Zy : (om.Promise.prototype.finally || (om.Promise.prototype.finally = Jy), om.Promise.allSettled || (om.Promise.allSettled = Wy), om.Promise.any || (om.Promise.any = Yy)),
        function() {
            if ("undefined" != typeof window) try {
                var e = new window.CustomEvent("test", {
                    cancelable: !0
                });
                if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default")
            } catch (e) {
                var t = function(e, t) {
                    var n, r;
                    return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r = n.preventDefault, n.preventDefault = function() {
                        r.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }, n
                };
                t.prototype = window.Event.prototype, window.CustomEvent = t
            }
        }(),
        function() {
            if ("object" == typeof window)
                if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
                else {
                    var e = window.document;
                    n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.USE_MUTATION_OBSERVER = !0, n.prototype.observe = function(e) {
                        if (!this._observationTargets.some((function(t) {
                                return t.element == e
                            }))) {
                            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: e,
                                entry: null
                            }), this._monitorIntersections(), this._checkForIntersections()
                        }
                    }, n.prototype.unobserve = function(e) {
                        this._observationTargets = this._observationTargets.filter((function(t) {
                            return t.element != e
                        })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                    }, n.prototype.disconnect = function() {
                        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                    }, n.prototype.takeRecords = function() {
                        var e = this._queuedEntries.slice();
                        return this._queuedEntries = [], e
                    }, n.prototype._initThresholds = function(e) {
                        var t = e || [0];
                        return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
                            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return e !== n[t - 1]
                        }))
                    }, n.prototype._parseRootMargin = function(e) {
                        var t = (e || "0px").split(/\s+/).map((function(e) {
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(t[1]),
                                unit: t[2]
                            }
                        }));
                        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                    }, n.prototype._monitorIntersections = function() {
                        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(window, "resize", this._checkForIntersections, !0), r(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))))
                    }, n.prototype._unmonitorIntersections = function() {
                        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(window, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                    }, n.prototype._checkForIntersections = function() {
                        var e = this._rootIsInDom(),
                            n = e ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                        this._observationTargets.forEach((function(r) {
                            var i = r.element,
                                a = o(i),
                                c = this._rootContainsTarget(i),
                                u = r.entry,
                                s = e && c && this._computeTargetAndRootIntersection(i, n),
                                l = r.entry = new t({
                                    time: window.performance && performance.now && performance.now(),
                                    target: i,
                                    boundingClientRect: a,
                                    rootBounds: n,
                                    intersectionRect: s
                                });
                            u ? e && c ? this._hasCrossedThreshold(u, l) && this._queuedEntries.push(l) : u && u.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                        }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }, n.prototype._computeTargetAndRootIntersection = function(t, n) {
                        if ("none" != window.getComputedStyle(t).display) {
                            for (var r, i, a, u, s, l, f, d, p = o(t), h = c(t), _ = !1; !_;) {
                                var v = null,
                                    g = 1 == h.nodeType ? window.getComputedStyle(h) : {};
                                if ("none" == g.display) return;
                                if (h == this.root || h == e ? (_ = !0, v = n) : h != e.body && h != e.documentElement && "visible" != g.overflow && (v = o(h)), v && (r = v, i = p, a = void 0, u = void 0, s = void 0, l = void 0, f = void 0, d = void 0, a = Math.max(r.top, i.top), u = Math.min(r.bottom, i.bottom), s = Math.max(r.left, i.left), l = Math.min(r.right, i.right), d = u - a, !(p = (f = l - s) >= 0 && d >= 0 && {
                                        top: a,
                                        bottom: u,
                                        left: s,
                                        right: l,
                                        width: f,
                                        height: d
                                    }))) break;
                                h = c(h)
                            }
                            return p
                        }
                    }, n.prototype._getRootRect = function() {
                        var t;
                        if (this.root) t = o(this.root);
                        else {
                            var n = e.documentElement,
                                r = e.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || r.clientWidth,
                                width: n.clientWidth || r.clientWidth,
                                bottom: n.clientHeight || r.clientHeight,
                                height: n.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    }, n.prototype._expandRectByRootMargin = function(e) {
                        var t = this._rootMarginValues.map((function(t, n) {
                                return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                            })),
                            n = {
                                top: e.top - t[0],
                                right: e.right + t[1],
                                bottom: e.bottom + t[2],
                                left: e.left - t[3]
                            };
                        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                    }, n.prototype._hasCrossedThreshold = function(e, t) {
                        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                            r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                        if (n !== r)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var o = this.thresholds[i];
                                if (o == n || o == r || o < n != o < r) return !0
                            }
                    }, n.prototype._rootIsInDom = function() {
                        return !this.root || a(e, this.root)
                    }, n.prototype._rootContainsTarget = function(t) {
                        return a(this.root || e, t)
                    }, n.prototype._registerInstance = function() {}, n.prototype._unregisterInstance = function() {}, window.IntersectionObserver = n, window.IntersectionObserverEntry = t
                }
            function t(e) {
                this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }, this.isIntersecting = !!e.intersectionRect;
                var t = this.boundingClientRect,
                    n = t.width * t.height,
                    r = this.intersectionRect,
                    i = r.width * r.height;
                this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
            }

            function n(e, t) {
                var n, r, i, o = t || {};
                if ("function" != typeof e) throw new Error("callback must be a function");
                if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
                    i || (i = setTimeout((function() {
                        n(), i = null
                    }), r))
                }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                    return e.value + e.unit
                })).join(" ")
            }

            function r(e, t, n, r) {
                "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
            }

            function i(e, t, n, r) {
                "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
            }

            function o(e) {
                var t;
                try {
                    t = e.getBoundingClientRect()
                } catch (e) {}
                return t ? (t.width && t.height || (t = {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }), t) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function a(e, t) {
                for (var n = t; n;) {
                    if (n == e) return !0;
                    n = c(n)
                }
                return !1
            }

            function c(e) {
                var t = e.parentNode;
                return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
            }
        }();
    var am, cm = ["", "webkit", "Moz", "MS", "ms", "o"],
        um = window,
        sm = void 0 !== function(e, t) {
            var n, r, i = t[0].toUpperCase() + t.slice(1),
                o = 0;
            for (; o < cm.length;) {
                if ((r = (n = cm[o]) ? n + i : t) in e) return e[r];
                o++
            }
            return
        }(um, "PointerEvent"),
        lm = "ontouchstart" in um;
    ! function(e) {
        e[e.Default = 0] = "Default", e[e.Start = 1] = "Start", e[e.Move = 2] = "Move", e[e.End = 4] = "End", e[e.Cancle = 8] = "Cancle"
    }(am || (am = {}));
    var fm = {
        pointer: {
            events: ["pointerdown", "pointermove", "pointerup", "pointercancel"],
            handler: function(e) {
                var t = e.type,
                    n = {
                        status: am.Default,
                        timestamp: Date.now(),
                        position: [e.clientX, e.clientY]
                    };
                return t !== this.events[0] || 0 !== e.button && "touch" !== e.pointerType ? t === this.events[1] ? n.status = am.Move : t === this.events[2] ? n.status = am.End : t === this.events[3] && (n.status = am.Cancle) : n.status = am.Start, n
            }
        },
        touch: {
            events: ["touchstart", "touchmove", "touchend", "touchcancel"],
            handler: function(e) {
                var t = e.type;
                if (1 !== e.changedTouches.length) return null;
                var n = {
                    status: am.Default,
                    timestamp: Date.now(),
                    position: [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
                };
                return t === this.events[0] ? n.status = am.Start : t === this.events[1] ? n.status = am.Move : t === this.events[2] ? n.status = am.End : t === this.events[3] && (n.status = am.Cancle), n.status === am.Default ? null : n
            }
        },
        mouse: {
            events: ["mousedown", "mousemove", "mouseup"],
            handler: function(e) {
                var t = e.type,
                    n = {
                        status: am.Default,
                        timestamp: Date.now(),
                        position: [e.clientX, e.clientY]
                    };
                return t === this.events[0] && 0 === e.button ? n.status = am.Start : t === this.events[1] ? n.status = am.Move : t === this.events[2] && (n.status = am.End), n.status & am.Move && 1 !== e.which && (n.status = am.End), n.status === am.Default ? null : n
            }
        }
    };
    "MSPointerEvent" in um && !("PointerEvent" in um) && (fm.pointer.events = ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"]);
    var dm = 250,
        pm = 9;

    function hm(e, t, n) {
        for (var r = 0; r < e.length; r++) document.addEventListener(e[r], t, n)
    }
    var _m, vm, gm = function(e, t) {
        var n = function(t) {
            var n, r, i;
            return function(o) {
                var a = fm[t].handler(o);
                if (null !== a) {
                    if (a.status & am.Start) return n = am.Start, r = a.timestamp, void(i = a.position);
                    if (a.status & am.End) n & am.Start && a.timestamp - r < dm && Math.sqrt(Math.pow(a.position[0] - i[0], 2) + Math.pow(a.position[1] - i[1], 2)) < pm && e(o);
                    else if (a.status & am.Move && n & am.Start) return
                }
                n = 0, r = 0, i = [0, 0]
            }
        };
        sm ? hm(fm.pointer.events, n("pointer"), t) : lm ? hm(fm.touch.events, n("touch"), t) : hm(fm.mouse.events, n("mouse"), t)
    };
    ! function(e) {
        e.V1 = "v1", e.V2 = "v2"
    }(_m || (_m = {})),
    function(e) {
        e.ELEMENT_V2 = "ELEMENT_V2", e.IMG_SRC = "IMG_SRC", e.TOKENIZE_TEXT = "TOKENIZE_TEXT", e.PAGE_URL_V2 = "PAGE_URL_V2"
    }(vm || (vm = {}));
    var ym = function(e, t, n) {
            var r = document.querySelectorAll(t);
            for (var i in r)
                if (n) {
                    if (Object.is(i, e)) return !0
                } else if (!Object.is(i, e)) return !0;
            return !1
        },
        mm = function(e) {
            var t = document.createRange(),
                n = document.body ? document.body : document.head;
            t.selectNode(n);
            var r = t.createContextualFragment(e);
            n.appendChild(r)
        },
        Em = function(e, t, n) {
            var r = function() {
                    var e = {},
                        t = new Promise((function(t, n) {
                            e.resolve = t, e.reject = n
                        }));
                    return e.promise = t, e
                }(),
                i = new IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        if (e.isIntersecting) {
                            var i = {
                                result: e.isIntersecting,
                                curValue: t,
                                condition: n
                            };
                            r.resolve(i)
                        }
                    }))
                }), {
                    root: null,
                    rootMargin: "0px",
                    threshold: .5
                });
            return i.observe(e), r.promise
        };

    function bm(e, t) {
        var n = history[e],
            r = "".concat(e, "-").concat(t);
        return function() {
            n.apply(history, arguments);
            var e = new CustomEvent(r, {
                detail: arguments
            });
            window.dispatchEvent(e)
        }
    }
    var wm = function(e) {
            history.pushState = bm("pushState", e), history.replaceState = bm("replaceState", e)
        },
        Im = function(e, t) {
            var n = e.getComputedStyle(t);
            return "none" !== n.display && ("visible" === n.visibility && !(Number(n.opacity) < .1))
        },
        Tm = function(e) {
            var t = e;
            if ("string" == typeof e) try {
                t = decodeURI(e)
            } catch (n) {
                t = e
            }
            return t
        },
        Om = function(e, t) {
            try {
                var n = new URL(e);
                return n.searchParams.delete(t), n.toString()
            } catch (t) {
                return e
            }
        },
        Sm = '"pixelMethod":"standard"',
        Nm = function(e, t) {
            try {
                var n = e.split(Sm),
                    r = "";
                return t && (r += ',"is_button":"true"'), r ? n[0] + Sm + r + n[1] : e
            } catch (t) {
                return e
            }
        },
        Rm = function(e) {
            try {
                var t = e.split(Sm);
                return t[0] + Sm + ',"is_standard_mode":"1"' + t[1]
            } catch (t) {
                return e
            }
        },
        Am = function(e, t) {
            try {
                var n = e.split(Sm),
                    r = ',"eb_version":"' + t + '"';
                return n[0] + Sm + r + n[1]
            } catch (t) {
                return e
            }
        },
        Pm = /[\-!$><-==&_\/\?\.,0-9:; \]\[%~\"\{\}\)\(\+\@\^\`]/g,
        Cm = /((([a-z])(?=[A-Z]))|(([A-Z])(?=[A-Z][a-z])))/g,
        km = /\s+/g,
        Mm = {
            TOKENIZE_TEXT: "rule_compute_tokenize_text_error",
            IMG_SRC: "rule_compute_img_src_error",
            ELEMENT_V2: "rule_compute_element_v2_xpath_error"
        },
        Dm = function(e) {
            var t;
            return null === e ? null : (null === (t = e.innerText) || void 0 === t ? void 0 : t.length) > 0 ? function(e) {
                return e.replace(Pm, " ").replace(Cm, (function(e) {
                    return "".concat(e, " ")
                })).replace(km, " ").toLowerCase().trim()
            }(e.innerText) : null
        },
        Lm = function(e, t) {
            var n;
            return (null === (n = Dm(e)) || void 0 === n ? void 0 : n.toLowerCase()) === t
        },
        xm = function(e, t) {
            return function(e) {
                var t, n;
                if ("IMG" === e.tagName) return e.getAttribute("src") || "";
                if (window.getComputedStyle) {
                    var r = window.getComputedStyle(e).getPropertyValue("background-image");
                    if (null !== r && "none" !== r && r.length > 0) return r
                }
                return "INPUT" === e.tagName && e.getAttribute("src") || (null === (n = null === (t = e.getElementsByTagName("img")) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.getAttribute("src")) || null
            }(e) === t
        },
        jm = function(e, t) {
            var n;
            return !!(null === (n = null == e ? void 0 : e.matches) || void 0 === n ? void 0 : n.call(e, t))
        },
        Um = function(e, t, n, r) {
            var i = !1,
                o = null,
                a = null;
            switch (t) {
                case "TOKENIZE_TEXT":
                    a = Lm;
                    break;
                case "IMG_SRC":
                    a = xm;
                    break;
                case "ELEMENT_V2":
                    a = jm
            }
            for (var c = 0; c < 5 && !["HTML", "BODY"].includes(null == e ? void 0 : e.tagName); c++) {
                if ((null == e ? void 0 : e.matches("input[type='button'], input[type='image'], input[type='submit'], button, [class*=btn], [class*=Btn], [class*=button], [class*=Button], [role*=button], [href^='tel: '], [href^='callto: '], [href^='mailto: '], [href^='sms: '], [href^='skype: '], [href^='whatsapp: '], [id*=btn], [id*=Btn], [id*=button], [id*=Button], a")) && (null == a ? void 0 : a(e, n))) {
                    i = !0, o = e;
                    break
                }
                e = e.parentElement
            }
            return r ? o : i
        };
    String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
        value: function(e, t) {
            return t = !t || t < 0 ? 0 : +t, this.substring(t, t + e.length) === e
        }
    }), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
        return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
    });
    var Fm = function(e, t, n, r) {
            switch (t) {
                case "EQUALS":
                    if ([vm.TOKENIZE_TEXT, vm.IMG_SRC, vm.ELEMENT_V2].includes(r)) try {
                        return Um(e, r, n, !1)
                    } catch (e) {
                        return co(Mr.CUSTOM_ERROR, e, {
                            custom_name: "eb_jelly_error",
                            custom_enum: Mm[r]
                        }), !1
                    } else if ("ELEMENT" == r) try {
                        for (var i = document.querySelectorAll(n), o = Array.prototype.slice.call(i), a = 0; a < o.length; a++)
                            if (o[a].contains(e)) return !0
                    } catch (e) {
                        return co(Mr.CUSTOM_ERROR, e, {
                            custom_name: "eb_jelly_error",
                            custom_enum: "rule_compute_element_xpath_error"
                        }), !1
                    }
                    if (n.split(";").filter((function(t) {
                            return e == t
                        })).length > 0) return !0;
                    break;
                case "LT":
                    if (e < n) return !0;
                    break;
                case "GT":
                    if (e > n) return !0;
                    break;
                case "LT_OR_EQUAL":
                    if (e <= n) return !0;
                    break;
                case "GT_OR_EQUAL":
                    if (e >= n) return !0;
                    break;
                case "CONTAINS":
                    if (n.split(";").filter((function(t) {
                            return (null == t ? void 0 : t.length) > 0 && e.indexOf(t) > -1
                        })).length > 0) return !0;
                    break;
                case "DOES_NOT_EQUAL":
                    if (0 == n.split(";").filter((function(t) {
                            return e == t
                        })).length) return !0;
                    break;
                case "DOES_NOT_CONTAIN":
                    if (-1 == e.indexOf(n)) return !0;
                    break;
                case "STARTS_WITH":
                    if (e.startsWith(n)) return !0;
                    break;
                case "ENDS_WITH":
                    if (e.endsWith(n)) return !0;
                    break;
                case "MATCHES_REGEX":
                    if (n.test(e)) return !0;
                    break;
                case "MATCHES_REGEX_IGNORE_CASE":
                    if (!n.test(e)) return !0;
                    break;
                case "MATCHES_CSS_SELECTOR":
                    if (ym(e, n, !0)) return !0;
                    break;
                case "DOSE_NOT_MATCHES_CSS_SELECTOR":
                    if (ym(e, n, !1)) return !0
            }
            return !1
        },
        Bm = {
            click: ["ELEMENT", "TOKENIZE_TEXT", "IMG_SRC", "ELEMENT_V2", "ELEMENT_CLASSES", "ELEMENT_ID", "ELEMENT_TARGET", "ElEMENT_URL", "ELEMENT_TEXT"],
            pageview: ["PAGE_URL", "PAGE_URL_V2", "PAGE_HOSTNAME", "PAGE_PATH", "REFERRER"],
            visibility: ["ELEMENT", "ELEMENT_CLASSES", "ELEMENT_ID"],
            history_change: ["NEW_HISTORY_FRAGMENT", "OLD_HISTORY_FRAGMENT", "NEW_HISTORY_STATE", "OLD_HISTORY_STATE", "HISTORY_SOURCE"]
        },
        qm = "ttclid",
        Gm = function() {
            function e() {
                i(this, e)
            }
            return a(e, [{
                key: "dispatcher",
                value: function(e, t, n, r) {
                    var i, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : document,
                        a = t.variable_type,
                        c = T("visibility" == e ? ["pageview", "history_change", "visibility"] : ["pageview", "history_change", "click"]);
                    try {
                        for (c.s(); !(i = c.n()).done;) {
                            var u = i.value;
                            if (Bm[u].indexOf(a) > -1) {
                                var s = void 0;
                                switch (u) {
                                    case "click":
                                        s = this.click(a, n);
                                        break;
                                    case "pageview":
                                        s = this.pageview(a);
                                        break;
                                    case "history_change":
                                        s = this.history_change(a, n, r);
                                        break;
                                    case "visibility":
                                        s = this.visibility(a, t.value, o)
                                }
                                return s
                            }
                        }
                    } catch (e) {
                        c.e(e)
                    } finally {
                        c.f()
                    }
                }
            }, {
                key: "click",
                value: function(e, t) {
                    var n;
                    if (!t) return !1;
                    switch (e) {
                        case "ELEMENT":
                        case "ELEMENT_V2":
                        case "TOKENIZE_TEXT":
                        case "IMG_SRC":
                        case "ELEMENT_TARGET":
                            n = t.target;
                            break;
                        case "ELEMENT_CLASSES":
                            n = t.target.className;
                            break;
                        case "ELEMENT_ID":
                            n = t.target.id;
                            break;
                        case "ElEMENT_URL":
                            n = t.target.href || t.target.src || "";
                            break;
                        case "ELEMENT_TEXT":
                            n = t.target.text || "";
                            break;
                        default:
                            n = null
                    }
                    return n
                }
            }, {
                key: "pageview",
                value: function(e) {
                    var t;
                    switch (e) {
                        case "PAGE_URL":
                        case "PAGE_URL_V2":
                            t = Om(location.href, qm);
                            break;
                        case "PAGE_HOSTNAME":
                            t = location.hostname;
                            break;
                        case "PAGE_PATH":
                            t = location.pathname;
                            break;
                        case "REFERRER":
                            t = Om(document.referrer, qm);
                            break;
                        default:
                            t = null
                    }
                    return t
                }
            }, {
                key: "history_change",
                value: function(e, t, n) {
                    var r;
                    switch (e) {
                        case "NEW_HISTORY_FRAGMENT":
                            r = location.hash;
                            break;
                        case "OLD_HISTORY_FRAGMENT":
                            r = n.old_hash;
                            break;
                        case "NEW_HISTORY_STATE":
                            r = history.state;
                            break;
                        case "OLD_HISTORY_STATE":
                            r = n.old_state;
                            break;
                        case "HISTORY_SOURCE":
                            r = t.type;
                            break;
                        default:
                            r = null
                    }
                    return r
                }
            }, {
                key: "visibility",
                value: function(e, t) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
                    switch (e) {
                        case "ELEMENT_ID":
                            n = "#" + t;
                            break;
                        case "ELEMENT_CLASS":
                            n = "." + t;
                            break;
                        case "ELEMENT":
                            n = t;
                            break;
                        default:
                            n = null
                    }
                    return r.querySelector(n)
                }
            }]), e
        }(),
        Vm = {
            exports: {}
        };
    ! function(e) {
        function t(e) {
            if (e) return function(e) {
                for (var n in t.prototype) e[n] = t.prototype[n];
                return e
            }(e)
        }
        e.exports = t, t.prototype.on = t.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
        }, t.prototype.once = function(e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments)
            }
            return n.fn = t, this.on(e, n), this
        }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n, r = this._callbacks["$" + e];
            if (!r) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var i = 0; i < r.length; i++)
                if ((n = r[i]) === t || n.fn === t) {
                    r.splice(i, 1);
                    break
                }
            return 0 === r.length && delete this._callbacks["$" + e], this
        }, t.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            if (n) {
                r = 0;
                for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t)
            }
            return this
        }, t.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
        }, t.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length
        }
    }(Vm);
    var Hm, Jm, Wm = Vm.exports,
        Km = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this)).BaseConf = e, o.SDK_ID = r, o.BaseConf.forEach((function(e) {
                    e.id = e.code_id, e.conditions = e.conditions || [], e.conditions.forEach((function(e) {
                        e.result = !1
                    }))
                })), o
            }
            return a(n, [{
                key: "sendDebugEvent",
                value: function(e, t, n) {
                    var r = this.BaseConf,
                        i = [];
                    r.forEach((function(e) {
                        e.code_id == t && (e.conditions = n), i.push(e)
                    }));
                    var o = {
                        sdk_id: this.SDK_ID,
                        event_name: e,
                        data: i
                    };
                    this.emit("jelly_message", o)
                }
            }]), n
        }(Wm);
    ! function(e) {
        e[e.WRONG = -1] = "WRONG", e[e.KEEP = 0] = "KEEP", e[e.ARRAY = -2] = "ARRAY", e[e.TURNINTOINTEGER = 1] = "TURNINTOINTEGER", e[e.TURNINTODECIMAL = 2] = "TURNINTODECIMAL"
    }(Hm || (Hm = {})),
    function(e) {
        e[e.CLICK_EVENT = 0] = "CLICK_EVENT", e[e.DESTINATION_URL = 1] = "DESTINATION_URL"
    }(Jm || (Jm = {}));
    var Ym, Xm = function(e) {
            var t, n = {};
            try {
                if (e.currency && (n.currency = e.currency), e.value) {
                    document.querySelectorAll(e.value).length;
                    var r = document.querySelector(e.value);
                    (null == r ? void 0 : r.innerHTML) && (n.ori_value = r.innerHTML, n.value = Qm(null === (t = r.innerHTML) || void 0 === t ? void 0 : t.trim(), e.value_index, e.value_parsing_method))
                }
                if (e.contents && void 0 !== e.contents[0].content_type && (1 === e.contents[0].content_type && (n.content_type = "product"), 2 === e.contents[0].content_type && (n.content_type = "product_group")), e.contents && e.contents[0].content_name) {
                    var i = document.querySelector(e.contents[0].content_name);
                    n.content_name = null == i ? void 0 : i.innerHTML
                }
                if (e.contents && e.contents[0].content_id)
                    if (e.contents[0].content_from === Jm.CLICK_EVENT) {
                        var o = document.querySelector(e.contents[0].content_id);
                        n.content_id = null == o ? void 0 : o.innerHTML
                    } else if (e.contents[0].content_from === Jm.DESTINATION_URL) {
                    var a = new URL(location.href);
                    if (e.contents[0].content_id.startsWith("path")) {
                        var c = a.pathname.split("/"),
                            u = e.contents[0].content_id.split("|")[1];
                        n.content_id = c[u]
                    }
                    if (e.contents[0].content_id.startsWith("search")) {
                        var s = new URLSearchParams(a.search),
                            l = e.contents[0].content_id.split("|")[1];
                        n.content_id = s.get(l)
                    }
                }
                return n
            } catch (e) {
                return co(Mr.CUSTOM_ERROR, e, {
                    custom_name: "eb_jelly_error",
                    custom_enum: "dynamicParameter_v1_error"
                }), n
            }
        },
        Qm = function(e, t, n) {
            var r = "";
            if (-1 === t || void 0 === t) {
                var i = Zm(e)[0];
                r = void 0 !== i ? zm(i, n) : ""
            } else {
                var o = Zm(e)[t];
                r = void 0 !== o ? zm(o, n) : ""
            }
            return r
        },
        zm = function(e, t) {
            var n = "";
            if (t !== Hm.KEEP && t !== Hm.WRONG || (n = e), t === Hm.TURNINTOINTEGER && (n = e.replace(/[,\.]/g, "")), t === Hm.TURNINTODECIMAL) {
                var r = e.split(/[,\.]/g),
                    i = "";
                r.forEach((function(e, t) {
                    t < r.length - 1 ? i += e : i += "." + e
                })), n = i
            }
            return n
        },
        Zm = function(e) {
            for (var t, n = /[\d|\.|,]+/gm, r = []; null !== (t = n.exec(e));) t.index === n.lastIndex && n.lastIndex++, t.forEach((function(e) {
                r.push(e)
            }));
            return r
        },
        $m = function(e, t, n) {
            try {
                var r = e.split(Sm),
                    i = "";
                return Object.keys(t).forEach((function(e) {
                    null === t[e] && void 0 === t[e] || (i += ',"' + e + '":"' + ("value" !== e ? encodeURIComponent(t[e]) : t[e]) + '"')
                })), n && (i += ',"dynamic_parameter_config":' + JSON.stringify(n)), i ? r[0] + Sm + i + r[1] : e
            } catch (t) {
                return co(Mr.CUSTOM_ERROR, t, {
                    custom_name: "eb_jelly_error",
                    custom_enum: "dynamicParameter_v1_transform_code_error"
                }), e
            }
        },
        eE = function(e, t) {
            var n, r;
            if (!e || "" === e) return null;
            var i, o = null === (n = e.match(/closest\$([^$]+)\$/)) || void 0 === n ? void 0 : n[1],
                a = null === (r = e.match(/children\$([^$]+)\$/)) || void 0 === r ? void 0 : r[1];
            if (t && o && a) {
                Element.prototype.closest || (Element.prototype.closest = function(e) {
                    var t = this;
                    if (!document.contains(t)) return null;
                    do {
                        if (t.matches(e)) return t;
                        t = t.parentElement || t.parentNode
                    } while (null !== t && 1 === t.nodeType);
                    return null
                });
                var c = t.closest(o);
                i = null == c ? void 0 : c.querySelector(a)
            } else i = t && a ? t.querySelector(a) : document.querySelector(e);
            return i
        },
        tE = function(e, t) {
            var n, r = {};
            try {
                if (e.currency && (r.currency = e.currency), e.value) {
                    var i = eE(e.value, t);
                    (null == i ? void 0 : i.innerHTML) && (r.ori_value = i.innerHTML, r.value = Qm(null === (n = i.innerHTML) || void 0 === n ? void 0 : n.trim(), e.value_index, e.value_parsing_method)), r.value || ao(Mr.CUSTOM_INFO, {
                        custom_name: "eb_jelly_info",
                        custom_enum: "dynamic_parameter_v2_value_empty",
                        extJSON: {
                            selector: e.value
                        }
                    })
                }
                return e.contents && e.contents.length > 0 && (r.contents = [], function(e, t, n) {
                    e.map((function(e) {
                        var r = e.content_type,
                            i = e.content_id,
                            o = e.content_from,
                            a = {};
                        if (r && (1 === r ? a.content_type = "product" : 2 === r && (a.content_type = "product_group")), i) {
                            if (o === Jm.CLICK_EVENT) {
                                var c = eE(i, n);
                                (null == c ? void 0 : c.innerText) && (a.content_id = null == c ? void 0 : c.innerText)
                            } else if (o === Jm.DESTINATION_URL) {
                                var u = new URL(location.href);
                                if (i.startsWith("path")) {
                                    var s = u.pathname.split("/"),
                                        l = i.split("|")[1];
                                    a.content_id = s[l]
                                }
                                if (i.startsWith("search")) {
                                    var f = new URLSearchParams(u.search),
                                        d = i.split("|")[1];
                                    a.content_id = f.get(d) || void 0
                                }
                            }
                            a.content_id || ao(Mr.CUSTOM_INFO, {
                                custom_name: "eb_jelly_info",
                                custom_enum: "dynamic_parameter_v2_content_id_empty",
                                extJSON: {
                                    selector: i
                                }
                            })
                        }
                        o && (a.content_from = o), t.push(a)
                    }))
                }(e.contents, r.contents, t)), r
            } catch (e) {
                return co(Mr.CUSTOM_ERROR, e, {
                    custom_name: "eb_jelly_error",
                    custom_enum: "dynamicParameter_v2_error"
                }), r
            }
        },
        nE = function(e, t, n) {
            try {
                var r = e.split(Sm),
                    i = "";
                return Object.keys(t).forEach((function(e) {
                    if (null !== t[e] || void 0 !== t[e])
                        if ("contents" === e) {
                            var n = t[e];
                            i += ',"' + e + '":[', null == n || n.map((function(e, t) {
                                i += "{";
                                var r = Object.keys(e);
                                r.forEach((function(t, n) {
                                    "content_id" === t && e[t] && (e[t] = encodeURIComponent(e[t])), i += '"' + t + '":"' + e[t] + '"' + (n === (null == r ? void 0 : r.length) - 1 ? "" : ",")
                                })), i += "}" + (t === (null == n ? void 0 : n.length) - 1 ? "" : ",")
                            })), i += "]"
                        } else i += ',"' + e + '":"' + ("value" !== e ? encodeURIComponent(t[e]) : t[e]) + '"'
                })), n && (i += ',"dynamic_parameter_config":' + JSON.stringify(n)), i ? r[0] + Sm + i + r[1] : e
            } catch (t) {
                return co(Mr.CUSTOM_ERROR, t, {
                    custom_name: "eb_jelly_error",
                    custom_enum: "dynamicParameter_v2_transform_error"
                }), e
            }
        },
        rE = new Gm,
        iE = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this)).on("jelly_message", a), c.SendEvent = new Km(r, o), c.SendEvent.on("jelly_message", (function(e) {
                    c.emit("jelly_message", e)
                })), c.CLICK = e.CLICK || [], c.PAGEVIEW = e.PAGEVIEW || [], c.VISIBILITY = e.VISIBILITY || [], c.HISTORY_CHANGE = e.HISTORY_CHANGE || [], c.SDK_ID = o || "", c.click(), c.pageview(), c.visibility(), c
            }
            return a(n, [{
                key: "dispatcher",
                value: function(e, t, n, r) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var i = {
                                taskName: window.ttq._pf_tn || "event_builder_dispatcher",
                                functionName: window.ttq._pf_tn && "event_builder_dispatcher",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "event_builder_dispatcher")
                        }
                    } catch (e) {}
                    if (t) {
                        var o, a, c = T(t);
                        try {
                            for (c.s(); !(o = c.n()).done;) {
                                var u, s = o.value,
                                    l = [],
                                    f = T(s.conditions);
                                try {
                                    for (f.s(); !(u = f.n()).done;) {
                                        var d = u.value,
                                            p = rE.dispatcher(e, d, n, r),
                                            h = Fm(p, d.operator, d.value, d.variable_type);
                                        if ("history_change" !== e && "pageview" !== e || (h = h || Fm(Tm(p), d.operator, d.value, d.variable_type)), h) {
                                            var _ = !1,
                                                v = (a = d.variable_type, Object.values(vm).includes(a) ? _m.V2 : _m.V1);
                                            try {
                                                _ = ["ELEMENT", vm.TOKENIZE_TEXT, vm.IMG_SRC, vm.ELEMENT_V2].includes(d.variable_type) && Pi(p)
                                            } catch (e) {
                                                _ = !1, co(Mr.CUSTOM_ERROR, e, {
                                                    custom_name: "button_check_jelly_error",
                                                    custom_enum: "auto_click",
                                                    extJSON: {
                                                        element: p
                                                    }
                                                })
                                            }
                                            var g = Nm(s.code, _);
                                            if (g = Rm(g), g = Am(g, v), d.dynamic_parameter) try {
                                                var y = void 0,
                                                    m = void 0;
                                                switch (d.variable_type) {
                                                    case vm.PAGE_URL_V2:
                                                        y = tE(d.dynamic_parameter, null), m = nE(g, y, d.dynamic_parameter);
                                                        break;
                                                    case vm.ELEMENT_V2:
                                                    case vm.TOKENIZE_TEXT:
                                                    case vm.IMG_SRC:
                                                        var E = Um(p, d.variable_type, d.value, !0);
                                                        y = tE(d.dynamic_parameter, E), m = nE(g, y, d.dynamic_parameter);
                                                        break;
                                                    default:
                                                        y = Xm(d.dynamic_parameter), m = $m(g, y, d.dynamic_parameter)
                                                }
                                                mm(m)
                                            } catch (e) {
                                                e(Mr.CUSTOM_ERROR, e, {
                                                    custom_name: "eb_jelly_error",
                                                    custom_enum: "dynamic_parameter_code_concat"
                                                }), mm(g)
                                            } else mm(g);
                                            this.SendEvent.sendDebugEvent("jelly." + e, s.code_id, l)
                                        }
                                        l.push(Object.assign(d, {
                                            cur_value: p,
                                            result: h
                                        }))
                                    }
                                } catch (e) {
                                    f.e(e)
                                } finally {
                                    f.f()
                                }
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        try {
                            window.ttq && window.ttq._ppf && (i.end = performance.now(), window.ttq._ppf.push(i), "event_builder_dispatcher" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                    }
                }
            }, {
                key: "click",
                value: function() {
                    var e = this;
                    gm((function(t) {
                        e.dispatcher("click", e.CLICK, t)
                    }), !0)
                }
            }, {
                key: "pageview",
                value: function() {
                    this.dispatcher("pageview", this.PAGEVIEW), this.history_change(this.PAGEVIEW)
                }
            }, {
                key: "history_change",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.HISTORY_CHANGE,
                        t = this,
                        n = history.state,
                        r = location.hash,
                        i = location.href;
                    wm(this.SDK_ID), window.addEventListener("pushState-".concat(this.SDK_ID), (function(r) {
                        if (location.href != i) {
                            var o = {
                                old_state: n
                            };
                            t.dispatcher("history_change", e, r, o), n = history.state, i = location.href
                        }
                    })), window.addEventListener("replaceState-".concat(this.SDK_ID), (function() {
                        if (location.href != i) {
                            var r = {
                                old_state: n
                            };
                            t.dispatcher("history_change", e, r), n = history.state, i = location.href
                        }
                    })), window.addEventListener("popstate", (function(n) {
                        if (location.href != i) {
                            var o = {
                                old_hash: r
                            };
                            t.dispatcher("history_change", e, n, o), r = location.hash, i = location.href
                        }
                    }))
                }
            }, {
                key: "visibility",
                value: function() {
                    if (!(this.VISIBILITY.length < 1)) {
                        var e = this.VISIBILITY,
                            t = this.SendEvent.sendDebugEvent.bind(this.SendEvent);
                        new MutationObserver(oE(e, t, window)).observe(document, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0,
                            attributes: !0
                        });
                        for (var n = document.getElementsByTagName("iframe"), r = 0; r < n.length; r++) try {
                            var i = n[r].contentWindow;
                            if (null != i) new MutationObserver(oE(e, t, i)).observe(i.document, {
                                childList: !0,
                                characterData: !0,
                                subtree: !0,
                                attributes: !0
                            })
                        } catch (e) {}
                    }
                }
            }]), n
        }(Wm),
        oE = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = {};
            return function() {
                e.forEach((function(e) {
                    var i = !0,
                        o = [],
                        a = [];
                    e.conditions.forEach((function(e) {
                        if (Bm.visibility.indexOf(e.variable_type) > -1) {
                            var t = rE.dispatcher("visibility", e, null, null, n.document),
                                c = "_" + e.value;
                            t && Im(n, t) && !r[c] && (o.push(Em(t, "", e)), r[c] = !0)
                        } else {
                            var u = rE.dispatcher("visibility", e),
                                s = Fm(u, e.operator, e.value, e.variable_type);
                            s || (i = !1), a.push(Object.assign(e, {
                                cur_value: u,
                                result: s
                            }))
                        }
                    })), o.length > 0 && Promise.all(o).then((function(n) {
                        var r, o = !0,
                            c = T(n);
                        try {
                            for (c.s(); !(r = c.n()).done;) {
                                var u = r.value;
                                a.push(Object.assign(u.condition, {
                                    cur_value: u.curValue,
                                    result: u.result
                                })), u.result && i || (o = !1)
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        o && mm(e.code), t("jelly.visibility", e.code_id, a)
                    }), (function() {}))
                }))
            }
        },
        aE = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                if (i(this, n), (o = t.call(this)).BaseConf = r, o.SDK_ID = e, window.jelly_tool_events && window.jelly_tool_events.length && window.jelly_tool_events.forEach((function(e) {
                        o.on(e.name, e.callback)
                    })), o.emit("jelly_event", {
                        SDK_ID: e,
                        BaseConf: r || []
                    }), o.BaseConf instanceof Array) {
                    if (self._jelly_sdks = self._jelly_sdks || {}, self._jelly_sdks[e]) return d(o);
                    self._jelly_sdks[e] = !0;
                    var a = o.dispatch();
                    o.trigger = new iE(a, r, e, (function(e) {
                        o.emit("jelly_message", e)
                    }))
                }
                return o
            }
            return a(n, [{
                key: "dispatch",
                value: function() {
                    var e = {
                        CLICK: [],
                        PAGEVIEW: [],
                        VISIBILITY: [],
                        HISTORY_CHANGE: []
                    };
                    return this.BaseConf.forEach((function(t) {
                        var n = {
                            code_id: t.code_id,
                            code: t.code,
                            conditions: t.conditions || []
                        };
                        void 0 !== t.trigger_type && e[t.trigger_type] && e[t.trigger_type].push(n)
                    })), e
                }
            }]), n
        }(Wm);
    window.TiktokJelly = aE;
    var cE = ti();
    try {
        ! function() {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                    var e = {
                        taskName: window.ttq._pf_tn || "init",
                        functionName: window.ttq._pf_tn && "init",
                        start: performance.now()
                    };
                    window.ttq._pf_tn || (window.ttq._pf_tn = "init")
                }
            } catch (e) {}
            var t = so().pixelCode,
                n = ni(),
                r = Bi(),
                i = qi();
            if (function(e, t, n) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var r = {
                            taskName: window.ttq._pf_tn,
                            functionName: "initAllModule",
                            start: performance.now()
                        }
                    } catch (e) {}
                    Kl(e, n), sa(t, e), Ql(), Yl(e), Xl();
                    try {
                        window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r))
                    } catch (e) {}
                }(n, ql, r), ui("Monitor")) {
                var o = function() {
                    try {
                        return ql.get(kr.MONITOR_PLUGIN) || null
                    } catch (e) {
                        return null
                    }
                }();
                null == o || o.info(Mr.BEFORE_INIT, {
                    pixelCode: t,
                    extJSON: {
                        stack: Di(t)
                    }
                }), To.init()
            }
            if (n) {
                n._mounted ? (ao(Mr.HANDLE_CACHE, {
                    pixelCode: t
                }), fa(ql, n)) : (Ym = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Er.OFFSITE;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var r = {
                            taskName: window.ttq._pf_tn,
                            functionName: "webTtqFactory",
                            start: performance.now()
                        }
                    } catch (e) {}
                    ca(e, kr.ENV, t), ca(e, Rr.SignalType, n);
                    var i = e.get(kr.TTQ);
                    try {
                        window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r))
                    } catch (e) {}
                    return i
                }(ql, r, i), window[cE] = function(e, t) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var n = {
                            taskName: window.ttq._pf_tn,
                            functionName: "mergeWebGlobalTtq",
                            start: performance.now()
                        }
                    } catch (e) {}["getReporter", "usePlugin", "getPlugin", "resetCookieExpires"].forEach((function(n) {
                        e[n] = function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            return t[n].apply(t, r)
                        }
                    })), e.context = t.context, e.reporters = t.reporters;
                    try {
                        window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n))
                    } catch (e) {}
                    return e
                }(n, Ym), n.resetCookieExpires && n.resetCookieExpires(), fa(ql, Ym), la(Ym));
                var a = ql.get(Rr.IsOnsitePage);
                a.value = i === Er.ONSITE || n.reporters.every((function(e) {
                        return e.isOnsite()
                    })), ql.rebind(Rr.IsOnsitePage).toConstantValue(a),
                    function(e) {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                                taskName: window.ttq._pf_tn,
                                functionName: "handlePixelRules",
                                start: performance.now()
                            }
                        } catch (e) {}
                        e.reporters.forEach((function(e) {
                            e.rules && new aE(e.getReporterId(), e.rules)
                        }));
                        try {
                            window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                        } catch (e) {}
                    }(n);
                try {
                    window.ttq && window.ttq._ppf && (e.end = performance.now(), window.ttq._ppf.push(e), "init" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                } catch (e) {}
            }
        }()
    } catch (as) {
        co(Mr.INIT_ERROR, as)
    }
}();