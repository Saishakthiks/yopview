/*! Build 66adaa1f113dc197a3eb3ed30eff581965d72b43:1741260707417 */ ! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "https://cdn.getrewardful.com/packs/", r(r.s = 133)
}({
    133: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(29),
            o = r.n(n);

        function a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(r), !0).forEach((function(t) {
                    u(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function u(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var l = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "set",
                value: function(e, t, r) {
                    var n = "https:" === window.location.protocol ? {
                        sameSite: "None",
                        secure: !0
                    } : {
                        sameSite: "Lax"
                    };
                    return r ? (t.cookie = i({}, r), r.expires && (r.expires = new Date(r.expires), delete t.cookie.expires), o.a.set(e, JSON.stringify(t), i(i({}, n), r))) : o.a.set(e, JSON.stringify(t), n), this.get(e)
                }
            }, {
                key: "get",
                value: function(e) {
                    try {
                        return JSON.parse(o.a.get(e) || null)
                    } catch (t) {
                        return console.warn("[Rewardful] Cookie '".concat(e, "' is not valid JSON.")), o.a.remove(e), null
                    }
                }
            }, {
                key: "delete",
                value: function(e) {
                    var t = this.get(e);
                    return t && t.cookie ? o.a.remove(e, t.cookie) : o.a.remove(e)
                }
            }], (r = null) && c(t.prototype, r), n && c(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();

        function f(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function s(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(r), !0).forEach((function(t) {
                    p(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function p(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var y = function() {
                return l.get(w.storeKey)
            },
            h = function() {
                return l.delete(w.storeKey)
            };

        function v(e, t, r) {
            var n = d(d({}, L.metadata), r),
                o = new XMLHttpRequest;
            return o.open(e, t), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Accept", "application/json"), o.responseType = "json", o.onload = function() {
                var r;
                200 !== o.status ? (console.error("[Rewardful] Request failed: ".concat(e, " ").concat(t)), console.error("=> (".concat(o.status, "): ").concat((r = o).response && r.response.error ? r.response.error : r.statusText ? r.statusText : "Unknown server error.")), h()) : (o.response.installed ? console.log("Rewardful is installed!") : o.response.referral && o.response.cookie && l.set(w.storeKey, o.response.referral, o.response.cookie), L._trackComplete = !0, window.dispatchEvent(new CustomEvent("Rewardful.tracked"))), L.initialized()
            }, o.onerror = function() {
                console.error("[Rewardful] Request failed: ".concat(e, " ").concat(t))
            }, o.send(JSON.stringify(n))
        }
        var w = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, n = [{
                    key: "id",
                    get: function() {
                        return (this.get() || {
                            id: ""
                        }).id
                    }
                }, {
                    key: "get",
                    value: function() {
                        return y()
                    }
                }, {
                    key: "storeKey",
                    get: function() {
                        return "rewardful.referral"
                    }
                }, {
                    key: "affiliate",
                    get: function() {
                        return this.get() && this.get().affiliate || !1
                    }
                }, {
                    key: "campaign",
                    get: function() {
                        return this.get() && this.get().campaign || !1
                    }
                }, {
                    key: "coupon",
                    get: function() {
                        return this.get() && this.get().coupon || !1
                    }
                }, {
                    key: "domain",
                    get: function() {
                        var e = this.get();
                        return e && e.cookie && e.cookie.domain || !1
                    }
                }, {
                    key: "exists",
                    value: function() {
                        var e = this.get();
                        return Boolean(e && e.id)
                    }
                }, {
                    key: "create",
                    value: function(e) {
                        return this.track({
                            link_token: e,
                            deprecated_method: "create"
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = e.get().id;
                        return t ? this.load(t) : (console.error("Referral.update() called but there is no stored referral."), h(), !1)
                    }
                }, {
                    key: "convert",
                    value: function(t) {
                        var r = e.get().id;
                        return v("POST", L.config.API_HOST + "/referrals/".concat(r, "/convert"), t)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        return this.track({
                            referral_id: e,
                            deprecated_method: "load"
                        })
                    }
                }, {
                    key: "track",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = L.config.API_HOST + "/referrals/track";
                        return v("POST", t, e)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        var e = y();
                        return h(), e
                    }
                }], (r = null) && f(t.prototype, r), n && f(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }(),
            b = function(e, t) {
                var r = new URLSearchParams(e.search.substring(1));
                Object.keys(t).forEach((function(e) {
                    return r.set(e, t[e])
                })), e.search = r.toString()
            },
            m = function(e) {
                try {
                    return e.toLowerCase().replace(/\s/g, "").split(",").filter((function(e) {
                        return e
                    }))
                } catch (t) {
                    return []
                }
            },
            k = function(e) {
                return document.querySelectorAll('a[href*="'.concat(e, '"]:not([data-referral])'))
            },
            g = {
                addSearchParamsToLink: b,
                parseDomains: m,
                linksToDomain: k,
                attach: function(e) {
                    var t = Rewardful.referral,
                        r = Rewardful.domain;
                    t && m(e.domains).filter((function(t) {
                        return t !== r && t !== e.location.hostname
                    })).forEach((function(e) {
                        k(e).forEach((function(e) {
                            b(e, {
                                referral: t
                            }), e.dataset.referral = !0
                        }))
                    }))
                }
            };

        function O(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function _(e, t) {
            if (e && e.match) {
                var r = (e = e.toLowerCase()).match(t);
                if (r && r[1]) return r[1]
            }
            return !1
        }
        var j = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._location = t
            }
            var t, r, n;
            return t = e, (r = [{
                key: "referral",
                get: function() {
                    return !(!this._location || !this._location.search) && _(this._location.search, /referral=([0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12})/i)
                }
            }, {
                key: "searchToken",
                get: function() {
                    var e = this;
                    if (this._location && this._location.search) {
                        var t = L.paramNames.map((function(t) {
                            return _(e._location.search, new RegExp("".concat(t, "=([a-z0-9-]+)"), "i"))
                        })).filter((function(e) {
                            return !1 !== e
                        }));
                        return t.length > 0 && t[0]
                    }
                    return !1
                }
            }, {
                key: "hashToken",
                get: function() {
                    var e = this;
                    if (this._location && this._location.hash) {
                        var t = L.paramNames.map((function(t) {
                            return _(e._location.hash, new RegExp("".concat(t, "[-=]([a-z0-9-]+)"), "i"))
                        })).filter((function(e) {
                            return !1 !== e
                        }));
                        return t.length > 0 && t[0]
                    }
                    return !1
                }
            }, {
                key: "token",
                get: function() {
                    return this.searchToken || this.hashToken || !1
                }
            }]) && O(t.prototype, r), n && O(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();

        function P(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var R = function(e, t, r) {
                var n = e.elements[t];
                return n || ((n = document.createElement("input")).name = t, e.appendChild(n)), n.type = "hidden", n.value = r, n
            },
            E = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, n = [{
                    key: "all",
                    value: function() {
                        return document.querySelectorAll("form[data-rewardful]")
                    }
                }, {
                    key: "attach",
                    value: function() {
                        this.all().forEach(this.add)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        var t = {
                            referral: R(e, e.dataset.rewardfulParamName || "referral", L.referral)
                        };
                        return L.coupon && L.coupon.id && (t.coupon = R(e, "coupon", L.coupon.id)), t
                    }
                }], (r = null) && P(t.prototype, r), n && P(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();

        function S(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var C = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "all",
                value: function() {
                    return document.querySelectorAll("stripe-buy-button[data-rewardful]")
                }
            }, {
                key: "attach",
                value: function() {
                    this.all().forEach(this.add)
                }
            }, {
                key: "add",
                value: function(e) {
                    w.id && e.setAttribute("client-reference-id", w.id)
                }
            }], (r = null) && S(t.prototype, r), n && S(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();

        function x(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var T = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "all",
                value: function() {
                    return document.querySelectorAll("a[data-rewardful]")
                }
            }, {
                key: "attach",
                value: function() {
                    this.all().forEach(this.add)
                }
            }, {
                key: "add",
                value: function(e) {
                    if (w.id) {
                        var t = w.id;
                        g.addSearchParamsToLink(e, {
                            client_reference_id: t
                        })
                    }
                }
            }], (r = null) && x(t.prototype, r), n && x(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();

        function A(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var N = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, n = [{
                    key: "all",
                    value: function() {
                        return document.querySelectorAll("stripe-pricing-table[data-rewardful]")
                    }
                }, {
                    key: "attach",
                    value: function() {
                        this.all().forEach(this.add)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        w.id && e.setAttribute("client-reference-id", w.id)
                    }
                }], (r = null) && A(t.prototype, r), n && A(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }(),
            q = function() {
                if ("function" === typeof window.CustomEvent) return !1;

                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var r = document.createEvent("CustomEvent");
                    return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e
            };

        function K(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var D = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "reset",
                value: function() {
                    this._apiKey = null, this._paramNames = null, this._location = !1, this._tracked = !1, this._trackComplete = !1, this._link = null, this._setup = !1, this._initialized = !1
                }
            }, {
                key: "setup",
                value: function(e) {
                    return this._setup ? (console.warn("Rewardful is already setup."), !1) : e ? e.apiKey ? e.window ? (q(), this._apiKey = e.apiKey.replace(/[^A-Za-z0-9-_]/g, ""), this._paramNames = e.paramNames, this._link = new j(e.window.location), this._setup = !0, this._metadata = {
                        api_key: this.apiKey,
                        location: e.window.location.toString(),
                        referrer: e.window.document && e.window.document.referrer || "",
                        title: e.window.document && e.window.document.title || ""
                    }, !0) : (console.error("Rewardful.setup requires a `window` parameter."), !1) : (console.error("Rewardful.setup requires an `apiKey` parameter."), !1) : (console.error("Rewardful.setup requires an `apiKey` and `window` parameter."), !1)
                }
            }, {
                key: "ready",
                value: function(e) {
                    "function" === typeof e ? e() : console.error('`Rewardful.ready` expects a function but received type "'.concat(typeof e, '"'))
                }
            }, {
                key: "tracked",
                get: function() {
                    return this._trackComplete
                }
            }, {
                key: "metadata",
                get: function() {
                    return this._metadata
                }
            }, {
                key: "link",
                get: function() {
                    return this._link
                }
            }, {
                key: "track",
                value: function() {
                    if (!this._setup) return console.error("Rewardful.setup() must be called before Rewardful.track()."), !1;
                    if (this._tracked) return console.warn("Rewardful.track() can only be called once."), !1;
                    var t = {};
                    return this.link.token && (t.link_token = this.link.token), w.exists() && e.referral ? t.referral_id = e.referral : this.link.referral && (delete t.link_token, t.id = this.link.referral), Object.keys(t).length > 0 ? w.track(t) : this.initialized(), this._tracked = !0, !0
                }
            }, {
                key: "initialized",
                value: function() {
                    this._initialized || (this._initialized = !0, window.dispatchEvent(new CustomEvent("Rewardful.initialized")))
                }
            }, {
                key: "convert",
                value: function(e) {
                    w.exists() && w.convert(e)
                }
            }, {
                key: "source",
                value: function(e) {
                    (e = e && e.toString && e.toString().toLowerCase().replace(/\s+/g, "")) ? w.exists() && w.affiliate.token === e || w.track({
                        link_token: e
                    }): console.error("[Rewardful] source() received an invalid token.")
                }
            }, {
                key: "clearReferral",
                value: function() {
                    return w.clear()
                }
            }, {
                key: "referral",
                get: function() {
                    return w.id
                }
            }, {
                key: "affiliate",
                get: function() {
                    return w.affiliate
                }
            }, {
                key: "campaign",
                get: function() {
                    return w.campaign
                }
            }, {
                key: "coupon",
                get: function() {
                    return w.coupon
                }
            }, {
                key: "apiKey",
                get: function() {
                    return this._apiKey ? this._apiKey : (console.error("Rewardful API key is not set."), !1)
                }
            }, {
                key: "paramNames",
                get: function() {
                    if (this._paramNames) {
                        var e = this._paramNames.split(/\s*,\s*/);
                        return e.unshift("via"), e.filter((function(t, r) {
                            return e.indexOf(t) === r
                        }))
                    }
                    return ["via"]
                }
            }, {
                key: "domain",
                get: function() {
                    return w.domain
                }
            }, {
                key: "config",
                get: function() {
                    return {
                        API_HOST: "https://api.getrewardful.com"
                    }
                }
            }, {
                key: "version",
                get: function() {
                    return {
                        timestamp: 1741260707417,
                        sha: "66adaa1f113dc197a3eb3ed30eff581965d72b43"
                    }
                }
            }, {
                key: "_cookie",
                get: function() {
                    return console.warn("IMPORTANT: `Rewardful._cookie` is for debugging purposes only.\nThis data structure is for internal use only and may change formats at any time without warning."), w.get()
                }
            }], (r = null) && K(t.prototype, r), n && K(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();
        D.Forms = E, D.Links = g, D.BuyButtons = C, D.PaymentLinks = T, D.PricingTables = N, D.reset();
        var L = D;

        function z(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var I = function() {
                function e(t, r, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.window = t, this.queueName = r, this.receiver = n
                }
                var t, r, n;
                return t = e, r = [{
                    key: "flush",
                    value: function() {
                        for (var e = this.getQueue(); e.length;) this._execute(e.shift());
                        var t = this;
                        this.window[this.queueName] = function() {
                            t._execute(arguments)
                        }
                    }
                }, {
                    key: "getQueue",
                    value: function() {
                        return this.window[this.queueName] && this.window[this.queueName].q || []
                    }
                }, {
                    key: "_execute",
                    value: function(e) {
                        var t = (e = Array.prototype.slice.call(e)).shift(),
                            r = e,
                            n = this.receiver[t];
                        if ("undefined" === typeof n) return console.error("".concat(this.queueName, " does not implement `").concat(t, "`"));
                        try {
                            n.apply(this.receiver, r)
                        } catch (o) {
                            console.error("Error executing `".concat(this.queueName, ".").concat(t, "`: ").concat(o)), console.error("Arguments: ", r)
                        }
                    }
                }], r && z(t.prototype, r), n && z(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }(),
            B = I;
        ! function() {
            if (window && window._rewardful_loaded) console.warn("Rewardful is already loaded.");
            else {
                window._rewardful_loaded = !0;
                try {
                    var e = document.querySelector("script[data-rewardful]");
                    if (e) {
                        window.Rewardful = L, L.setup({
                            apiKey: e.getAttribute("data-rewardful"),
                            paramNames: e.getAttribute("data-rewardful-params"),
                            window: window
                        });
                        var t = function() {
                                L.Forms.attach(), L.BuyButtons.attach(), L.PaymentLinks.attach(), L.PricingTables.attach(), L.Links.attach({
                                    domains: e.getAttribute("data-domains"),
                                    location: window.location
                                })
                            },
                            r = new B(window, window._rwq || "rewardful", L);
                        window.addEventListener("Rewardful.initialized", (function() {
                            r.flush()
                        })), window.addEventListener("Rewardful.tracked", (function() {
                            t(), document.addEventListener("readystatechange", t)
                        })), L.track()
                    } else console.error("Could not load Rewardful: make sure the <script> tag includes data-rewardful='<API-KEY>'")
                } catch (n) {
                    console.error("Rewardful failed to initialize: ".concat(n))
                }
            }
        }()
    },
    29: function(e, t, r) {
        var n, o, a;

        function i(e) {
            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, i(e)
        }
        a = function() {
            "use strict";

            function e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) e[n] = r[n]
                }
                return e
            }
            var t = function t(r, n) {
                function o(t, o, a) {
                    if ("undefined" !== typeof document) {
                        "number" === typeof(a = e({}, n, a)).expires && (a.expires = new Date(Date.now() + 864e5 * a.expires)), a.expires && (a.expires = a.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var i = "";
                        for (var u in a) a[u] && (i += "; " + u, !0 !== a[u] && (i += "=" + a[u].split(";")[0]));
                        return document.cookie = t + "=" + r.write(o, t) + i
                    }
                }
                return Object.create({
                    set: o,
                    get: function(e) {
                        if ("undefined" !== typeof document && (!arguments.length || e)) {
                            for (var t = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < t.length; o++) {
                                var a = t[o].split("="),
                                    i = a.slice(1).join("=");
                                try {
                                    var u = decodeURIComponent(a[0]);
                                    if (n[u] = r.read(i, u), e === u) break
                                } catch (c) {}
                            }
                            return e ? n[e] : n
                        }
                    },
                    remove: function(t, r) {
                        o(t, "", e({}, r, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(r) {
                        return t(this.converter, e({}, this.attributes, r))
                    },
                    withConverter: function(r) {
                        return t(e({}, this.converter, r), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(n)
                    },
                    converter: {
                        value: Object.freeze(r)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            });
            return t
        }, "object" === i(t) && "undefined" !== typeof e ? e.exports = a() : void 0 === (o = "function" === typeof(n = a) ? n.call(t, r, t, e) : n) || (e.exports = o)
    }
});