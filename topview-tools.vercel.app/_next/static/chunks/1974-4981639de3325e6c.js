(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1974], {
        87650: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(53858),
                i = r(23056);
            t.default = function(e) {
                let {
                    html: t,
                    height: r = null,
                    width: s = null,
                    children: o,
                    dataNtpc: a = ""
                } = e;
                return (0, i.useEffect)(() => {
                    a && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(a)
                        }
                    })
                }, [a]), (0, n.jsxs)(n.Fragment, {
                    children: [o, t ? (0, n.jsx)("div", {
                        style: {
                            height: null != r ? "".concat(r, "px") : "auto",
                            width: null != s ? "".concat(s, "px") : "auto"
                        },
                        "data-ntpc": a,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            }
        },
        96522: function(e, t, r) {
            "use strict";
            var n;
            let i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = void 0;
            let s = r(53858),
                o = r(23056),
                a = (n = r(98882)) && n.__esModule ? n : {
                    default: n
                };
            t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    dataLayerName: r = "dataLayer"
                } = e;
                return void 0 === i && (i = r), (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(r, "'] = window['").concat(r, "'] || [];\n          function gtag(){window['").concat(r, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "');")
                        }
                    }), (0, s.jsx)(a.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                if (void 0 === i) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[i] ? window[i].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(i, " does not exist"))
            }
        },
        98442: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let i = r(53858),
                s = r(23056),
                o = (n = r(98882)) && n.__esModule ? n : {
                    default: n
                },
                a = "dataLayer";
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: r = "dataLayer",
                    auth: n,
                    preview: u,
                    dataLayer: l
                } = e;
                a = r;
                let c = "dataLayer" !== r ? "&l=".concat(r) : "";
                return (0, s.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(l ? "w[l].push(".concat(JSON.stringify(l), ")") : "", "\n      })(window,'").concat(r, "');")
                        }
                    }), (0, i.jsx)(o.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(n ? "&gtm_auth=".concat(n) : "").concat(u ? "&gtm_preview=".concat(u, "&gtm_cookies_win=x") : "")
                    })]
                })
            }, t.sendGTMEvent = (e, t) => {
                let r = t || a;
                window[r] = window[r] || [], window[r].push(e)
            }
        },
        56294: function(e, t, r) {
            "use strict";

            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            r.d(t, {
                g: function() {
                    return n
                }
            })
        },
        51983: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r(56294),
                i = r(67482),
                s = r(84882),
                o = r(23056),
                a = r(11555),
                u = (0, o.forwardRef)(function(e, t) {
                    let {
                        defaultLocale: r,
                        href: u,
                        locale: l,
                        localeCookie: c,
                        onClick: h,
                        prefetch: f,
                        unprefixed: d,
                        ...p
                    } = e, y = (0, a.Z)(), m = null != l && l !== y, v = l || y, g = function() {
                        let [e, t] = (0, o.useState)();
                        return (0, o.useEffect)(() => {
                            t(window.location.host)
                        }, []), e
                    }(), b = g && d && (d.domains[g] === v || !Object.keys(d.domains).includes(g) && y === r && !l) ? d.pathname : u, w = (0, s.usePathname)();
                    return m && (f && console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"), f = !1), o.createElement(i.default, (0, n.g)({
                        ref: t,
                        href: b,
                        hrefLang: m ? l : void 0,
                        onClick: function(e) {
                            (function(e, t, r, n) {
                                if (!e || !(n !== r && null != n) || !t) return;
                                let i = function(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
                                        return "/" === e ? t : t.replace(e, "")
                                    }(t),
                                    {
                                        name: s,
                                        ...o
                                    } = e;
                                o.path || (o.path = "" !== i ? i : "/");
                                let a = "".concat(s, "=").concat(n, ";");
                                for (let [e, t] of Object.entries(o)) a += "".concat("maxAge" === e ? "max-age" : e), "boolean" != typeof t && (a += "=" + t), a += ";";
                                document.cookie = a
                            })(c, w, y, l), h && h(e)
                        },
                        prefetch: f
                    }, p))
                })
        },
        98387: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            });
            var n = r(56294),
                i = r(84882),
                s = r(23056),
                o = r(11555);

            function a(e) {
                return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && ! function(e) {
                    let t = "object" == typeof e ? e.pathname : e;
                    return null != t && !t.startsWith("/")
                }(e)
            }

            function u(e, t) {
                let r;
                return "string" == typeof e ? r = l(t, e) : (r = { ...e
                }, e.pathname && (r.pathname = l(t, e.pathname))), r
            }

            function l(e, t) {
                let r = e;
                return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), r += t
            }
            r(50180);
            var c = r(51983);
            let h = (0, s.forwardRef)(function(e, t) {
                let {
                    href: r,
                    locale: l,
                    localeCookie: h,
                    localePrefixMode: f,
                    prefix: d,
                    ...p
                } = e, y = (0, i.usePathname)(), m = (0, o.Z)(), v = l !== m, [g, b] = (0, s.useState)(() => a(r) && ("never" !== f || v) ? u(r, d) : r);
                return (0, s.useEffect)(() => {
                    y && b(function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                            n = arguments.length > 3 ? arguments[3] : void 0,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        if (!a(e)) return e;
                        let s = n === i || n.startsWith("".concat(i, "/"));
                        return (t !== r || s) && null != i ? u(e, i) : e
                    }(r, l, m, y, d))
                }, [m, r, l, y, d]), s.createElement(c.default, (0, n.g)({
                    ref: t,
                    href: g,
                    locale: l,
                    localeCookie: h
                }, p))
            });
            h.displayName = "ClientLink"
        },
        11555: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(84882),
                i = r(8915);
            let s = "locale",
                o = !1;

            function a() {
                let e;
                let t = (0, n.useParams)();
                try {
                    e = (0, i.useLocale)()
                } catch (r) {
                    if ("string" != typeof(null == t ? void 0 : t[s])) throw r;
                    o || (console.warn("Deprecation warning: `useLocale` has returned a default from `useParams().locale` since no `NextIntlClientProvider` ancestor was found for the calling component. This behavior will be removed in the next major version. Please ensure all Client Components that use `next-intl` are wrapped in a `NextIntlClientProvider`."), o = !0), e = t[s]
                }
                return e
            }
        },
        69588: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r(56294),
                i = r(23056),
                s = r(52541);

            function o(e) {
                let {
                    locale: t,
                    ...r
                } = e;
                if (!t) throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");
                return i.createElement(s.IntlProvider, (0, n.g)({
                    locale: t
                }, r))
            }
        },
        98882: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i.a
                }
            });
            var n = r(88788),
                i = r.n(n),
                s = {};
            for (var o in n) "default" !== o && (s[o] = (function(e) {
                return n[e]
            }).bind(0, o));
            r.d(t, s)
        },
        91633: function(e, t) {
            "use strict";
            let r;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return n
                    },
                    isEqualNode: function() {
                        return s
                    },
                    default: function() {
                        return o
                    }
                });
            let n = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function i(e) {
                let {
                    type: t,
                    props: r
                } = e, i = document.createElement(t);
                for (let e in r) {
                    if (!r.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === r[e]) continue;
                    let s = n[e] || e.toLowerCase();
                    "script" === t && ("async" === s || "defer" === s || "noModule" === s) ? i[s] = !!r[e] : i.setAttribute(s, r[e])
                }
                let {
                    children: s,
                    dangerouslySetInnerHTML: o
                } = r;
                return o ? i.innerHTML = o.__html || "" : s && (i.textContent = "string" == typeof s ? s : Array.isArray(s) ? s.join("") : ""), i
            }

            function s(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let r = t.getAttribute("nonce");
                    if (r && !e.getAttribute("nonce")) {
                        let n = t.cloneNode(!0);
                        return n.setAttribute("nonce", ""), n.nonce = r, r === e.nonce && e.isEqualNode(n)
                    }
                }
                return e.isEqualNode(t)
            }

            function o() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let r = t[e.type] || [];
                            r.push(e), t[e.type] = r
                        });
                        let n = t.title ? t.title[0] : null,
                            i = "";
                        if (n) {
                            let {
                                children: e
                            } = n.props;
                            i = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        i !== document.title && (document.title = i), ["meta", "base", "link", "style", "script"].forEach(e => {
                            r(e, t[e] || [])
                        })
                    }
                }
            }
            r = (e, t) => {
                let r = document.getElementsByTagName("head")[0],
                    n = r.querySelector("meta[name=next-head-count]"),
                    o = Number(n.content),
                    a = [];
                for (let t = 0, r = n.previousElementSibling; t < o; t++, r = (null == r ? void 0 : r.previousElementSibling) || null) {
                    var u;
                    (null == r ? void 0 : null == (u = r.tagName) ? void 0 : u.toLowerCase()) === e && a.push(r)
                }
                let l = t.map(i).filter(e => {
                    for (let t = 0, r = a.length; t < r; t++)
                        if (s(a[t], e)) return a.splice(t, 1), !1;
                    return !0
                });
                a.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), l.forEach(e => r.insertBefore(e, n)), n.content = (o - a.length + l.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        88788: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    handleClientScriptLoad: function() {
                        return m
                    },
                    initScriptLoader: function() {
                        return v
                    },
                    default: function() {
                        return b
                    }
                });
            let n = r(34121),
                i = r(35413),
                s = r(53858),
                o = n._(r(56929)),
                a = i._(r(23056)),
                u = r(44728),
                l = r(91633),
                c = r(77054),
                h = new Map,
                f = new Set,
                d = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                p = e => {
                    if (o.default.preinit) {
                        e.forEach(e => {
                            o.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let r = document.createElement("link");
                            r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                        })
                    }
                },
                y = e => {
                    let {
                        src: t,
                        id: r,
                        onLoad: n = () => {},
                        onReady: i = null,
                        dangerouslySetInnerHTML: s,
                        children: o = "",
                        strategy: a = "afterInteractive",
                        onError: u,
                        stylesheets: c
                    } = e, y = r || t;
                    if (y && f.has(y)) return;
                    if (h.has(t)) {
                        f.add(y), h.get(t).then(n, u);
                        return
                    }
                    let m = () => {
                            i && i(), f.add(y)
                        },
                        v = document.createElement("script"),
                        g = new Promise((e, t) => {
                            v.addEventListener("load", function(t) {
                                e(), n && n.call(this, t), m()
                            }), v.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            u && u(e)
                        });
                    for (let [r, n] of (s ? (v.innerHTML = s.__html || "", m()) : o ? (v.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", m()) : t && (v.src = t, h.set(t, g)), Object.entries(e))) {
                        if (void 0 === n || d.includes(r)) continue;
                        let e = l.DOMAttributeNames[r] || r.toLowerCase();
                        v.setAttribute(e, n)
                    }
                    "worker" === a && v.setAttribute("type", "text/partytown"), v.setAttribute("data-nscript", a), c && p(c), document.body.appendChild(v)
                };

            function m(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, c.requestIdleCallback)(() => y(e))
                }) : y(e)
            }

            function v(e) {
                e.forEach(m), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function g(e) {
                let {
                    id: t,
                    src: r = "",
                    onLoad: n = () => {},
                    onReady: i = null,
                    strategy: l = "afterInteractive",
                    onError: h,
                    stylesheets: d,
                    ...p
                } = e, {
                    updateScripts: m,
                    scripts: v,
                    getIsSsr: g,
                    appDir: b,
                    nonce: w
                } = (0, a.useContext)(u.HeadManagerContext), O = (0, a.useRef)(!1);
                (0, a.useEffect)(() => {
                    let e = t || r;
                    O.current || (i && e && f.has(e) && i(), O.current = !0)
                }, [i, t, r]);
                let E = (0, a.useRef)(!1);
                if ((0, a.useEffect)(() => {
                        !E.current && ("afterInteractive" === l ? y(e) : "lazyOnload" === l && ("complete" === document.readyState ? (0, c.requestIdleCallback)(() => y(e)) : window.addEventListener("load", () => {
                            (0, c.requestIdleCallback)(() => y(e))
                        })), E.current = !0)
                    }, [e, l]), ("beforeInteractive" === l || "worker" === l) && (m ? (v[l] = (v[l] || []).concat([{
                        id: t,
                        src: r,
                        onLoad: n,
                        onReady: i,
                        onError: h,
                        ...p
                    }]), m(v)) : g && g() ? f.add(t || r) : g && !g() && y(e)), b) {
                    if (d && d.forEach(e => {
                            o.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === l) return r ? (o.default.preload(r, p.integrity ? {
                        as: "script",
                        integrity: p.integrity
                    } : {
                        as: "script"
                    }), (0, s.jsx)("script", {
                        nonce: w,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r, { ...p,
                                id: t
                            }]) + ")"
                        }
                    })) : (p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, s.jsx)("script", {
                        nonce: w,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...p,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === l && r && o.default.preload(r, p.integrity ? {
                        as: "script",
                        integrity: p.integrity
                    } : {
                        as: "script"
                    })
                }
                return null
            }
            Object.defineProperty(g, "__nextScript", {
                value: !0
            });
            let b = g;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        61901: function(e, t) {
            "use strict";

            function r() {
                r = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    i = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    s = "function" == typeof Symbol ? Symbol : {},
                    o = s.iterator || "@@iterator",
                    a = s.asyncIterator || "@@asyncIterator",
                    u = s.toStringTag || "@@toStringTag";

                function l(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var s, o, a = Object.create((t && t.prototype instanceof d ? t : d).prototype);
                    return i(a, "_invoke", {
                        value: (s = new C(n || []), o = "suspendedStart", function(t, n) {
                            if ("executing" === o) throw Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === t) throw n;
                                return R()
                            }
                            for (s.method = t, s.arg = n;;) {
                                var i = s.delegate;
                                if (i) {
                                    var a = function e(t, r) {
                                        var n = t.iterator[r.method];
                                        if (void 0 === n) {
                                            if (r.delegate = null, "throw" === r.method) {
                                                if (t.iterator.return && (r.method = "return", r.arg = void 0, e(t, r), "throw" === r.method)) return f;
                                                r.method = "throw", r.arg = TypeError("The iterator does not provide a 'throw' method")
                                            }
                                            return f
                                        }
                                        var i = h(n, t.iterator, r.arg);
                                        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, f;
                                        var s = i.arg;
                                        return s ? s.done ? (r[t.resultName] = s.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, f) : s : (r.method = "throw", r.arg = TypeError("iterator result is not an object"), r.delegate = null, f)
                                    }(i, s);
                                    if (a) {
                                        if (a === f) continue;
                                        return a
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === o) throw o = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                o = "executing";
                                var u = h(e, r, s);
                                if ("normal" === u.type) {
                                    if (o = s.done ? "completed" : "suspendedYield", u.arg === f) continue;
                                    return {
                                        value: u.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === u.type && (o = "completed", s.method = "throw", s.arg = u.arg)
                            }
                        })
                    }), a
                }

                function h(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var f = {};

                function d() {}

                function p() {}

                function y() {}
                var m = {};
                l(m, o, function() {
                    return this
                });
                var v = Object.getPrototypeOf,
                    g = v && v(v(S([])));
                g && g !== t && n.call(g, o) && (m = g);
                var b = y.prototype = d.prototype = Object.create(m);

                function w(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        l(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function O(e, t) {
                    var r;
                    i(this, "_invoke", {
                        value: function(i, s) {
                            function o() {
                                return new t(function(r, o) {
                                    ! function r(i, s, o, a) {
                                        var u = h(e[i], e, s);
                                        if ("throw" !== u.type) {
                                            var l = u.arg,
                                                c = l.value;
                                            return c && "object" == typeof c && n.call(c, "__await") ? t.resolve(c.__await).then(function(e) {
                                                r("next", e, o, a)
                                            }, function(e) {
                                                r("throw", e, o, a)
                                            }) : t.resolve(c).then(function(e) {
                                                l.value = e, o(l)
                                            }, function(e) {
                                                return r("throw", e, o, a)
                                            })
                                        }
                                        a(u.arg)
                                    }(i, s, r, o)
                                })
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(E, this), this.reset(!0)
                }

                function S(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: R
                    }
                }

                function R() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = y, i(b, "constructor", {
                    value: y,
                    configurable: !0
                }), i(y, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = l(y, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, u, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(O.prototype), l(O.prototype, a, function() {
                    return this
                }), e.AsyncIterator = O, e.async = function(t, r, n, i, s) {
                    void 0 === s && (s = Promise);
                    var o = new O(c(t, r, n, i), s);
                    return e.isGeneratorFunction(r) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next()
                    })
                }, w(b), l(b, u, "Generator"), l(b, o, function() {
                    return this
                }), l(b, "toString", function() {
                    return "[object Generator]"
                }), e.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = S, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function r(r, n) {
                            return o.type = "throw", o.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var s = this.tryEntries[i],
                                o = s.completion;
                            if ("root" === s.tryLoc) return r("end");
                            if (s.tryLoc <= this.prev) {
                                var a = n.call(s, "catchLoc"),
                                    u = n.call(s, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                } else if (a) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var s = i;
                                break
                            }
                        }
                        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                        var o = s ? s.completion : {};
                        return o.type = e, o.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, f) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), f
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    x(r)
                                }
                                return i
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, e
            }

            function n(e, t, r, n, i, s, o) {
                try {
                    var a = e[s](o),
                        u = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(n, i)
            }
            var i = !1,
                s = !1,
                o = function() {
                    var e;
                    if (i) {
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        (e = console).info.apply(e, ["[tiktok-pixel]"].concat(r))
                    }
                },
                a = function() {
                    var e;
                    if (i) {
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        (e = console).info.apply(e, ["[tiktok-pixel]"].concat(r))
                    }
                },
                u = function(e, t, r, n, a) {
                    e.TiktokAnalyticsObject = t;
                    var u = e[t] = e[t] || [];
                    u.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], u.setAndDefer = function(e, t) {
                        e[t] = function() {
                            e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    };
                    for (var l = 0; l < u.methods.length; l++) u.setAndDefer(u, u.methods[l]);
                    u.instance = function(e) {
                        for (var t = u._i[e] || [], r = 0; r < u.methods.length; r++) u.setAndDefer(t, u.methods[r]);
                        return t
                    }, u.load = function(e, r) {
                        var n, i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                        u._i = u._i || {}, u._i[e] = [], u._i[e]._u = i, u._t = u._t || {}, u._t[e] = +new Date, u._o = u._o || {}, u._o[e] = r || {};
                        var s = document.createElement("script");
                        s.type = "text/javascript", s.async = !0, s.src = i + "?sdkid=" + e + "&lib=" + t;
                        var o = document.getElementsByTagName("script")[0];
                        null == o || null == (n = o.parentNode) || n.insertBefore(s, o)
                    }, r ? (u.load(r), u.identify(n), u.page(), s = !0, i = a.debug) : o("Please insert pixel id for initializing")
                },
                l = {
                    debug: !1
                },
                c = function() {
                    return window.ttq
                };
            t.Z = {
                init: function(e, t, i) {
                    var o;
                    return (o = r().mark(function n() {
                        return r().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    void 0 === t && (t = {}), void 0 === i && (i = l), (s = "undefined" != typeof window && !!window.ttq) || u(window, "ttq", e, t, i);
                                case 4:
                                case "end":
                                    return r.stop()
                            }
                        }, n)
                    }), function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(r, i) {
                            var s = o.apply(e, t);

                            function a(e) {
                                n(s, r, i, a, u, "next", e)
                            }

                            function u(e) {
                                n(s, r, i, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                },
                pageView: function() {
                    c().page()
                },
                track: function(e, t, r) {
                    void 0 === r && (r = {}), s || o("Pixel not initialized before using call tiktokPixel.init with required params"), s && (e || a("please specificy an event name"), c().track(e, t, r), i && (a("called ttq.track('" + e + "')", t, r), t && a("with data", t, r)))
                }
            }
        },
        32125: function(e, t, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(23056),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = n.useState,
                o = n.useEffect,
                a = n.useLayoutEffect,
                u = n.useDebugValue;

            function l(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !i(e, r)
                } catch (e) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = s({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    i = n[0].inst,
                    c = n[1];
                return a(function() {
                    i.value = r, i.getSnapshot = t, l(i) && c({
                        inst: i
                    })
                }, [e, r, t]), o(function() {
                    return l(i) && c({
                        inst: i
                    }), e(function() {
                        l(i) && c({
                            inst: i
                        })
                    })
                }, [e]), u(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        64424: function(e, t, r) {
            "use strict";
            e.exports = r(32125)
        },
        92808: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Inter_4e0e93', '__Inter_Fallback_4e0e93'",
                    fontStyle: "normal"
                },
                className: "__className_4e0e93",
                variable: "__variable_4e0e93"
            }
        },
        27660: function(e, t, r) {
            "use strict";

            function n(e) {
                return null != e && "object" == typeof e && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE
            }

            function i() {
                return !!globalThis ? .document
            }

            function s(e) {
                let t = e.getAttribute("contenteditable");
                return "false" !== t && null != t
            }

            function o(e) {
                return !0 == !!e.getAttribute("disabled") || !0 == !!e.getAttribute("aria-disabled")
            }
            r.d(t, {
                Re: function() {
                    return n
                },
                iU: function() {
                    return s
                },
                jU: function() {
                    return i
                },
                nV: function() {
                    return o
                },
                oI: function() {
                    return function e(t) {
                        return !!(t.parentElement && e(t.parentElement)) || t.hidden
                    }
                }
            })
        },
        15049: function(e, t, r) {
            "use strict";

            function n(e, t) {
                let r = {};
                for (let n of t) n in e && (r[n] = e[n]);
                return r
            }
            r.d(t, {
                e: function() {
                    return n
                }
            })
        },
        75221: function(e, t, r) {
            "use strict";
            r.d(t, {
                j: function() {
                    return o
                }
            });
            var n = r(78123),
                i = r(75438);
            class s extends n.l {
                constructor() {
                    super(), this.setup = e => {
                        if (!i.sk && window.addEventListener) {
                            let t = () => e();
                            return window.addEventListener("visibilitychange", t, !1), window.addEventListener("focus", t, !1), () => {
                                window.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                        "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                    })
                }
                setFocused(e) {
                    this.focused !== e && (this.focused = e, this.onFocus())
                }
                onFocus() {
                    this.listeners.forEach(({
                        listener: e
                    }) => {
                        e()
                    })
                }
                isFocused() {
                    return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                }
            }
            let o = new s
        },
        85111: function(e, t, r) {
            "use strict";

            function n() {
                return {
                    onFetch: e => {
                        e.fetchFn = () => {
                            var t, r, n, o, a, u;
                            let l;
                            let c = null == (t = e.fetchOptions) ? void 0 : null == (r = t.meta) ? void 0 : r.refetchPage,
                                h = null == (n = e.fetchOptions) ? void 0 : null == (o = n.meta) ? void 0 : o.fetchMore,
                                f = null == h ? void 0 : h.pageParam,
                                d = (null == h ? void 0 : h.direction) === "forward",
                                p = (null == h ? void 0 : h.direction) === "backward",
                                y = (null == (a = e.state.data) ? void 0 : a.pages) || [],
                                m = (null == (u = e.state.data) ? void 0 : u.pageParams) || [],
                                v = m,
                                g = !1,
                                b = t => {
                                    Object.defineProperty(t, "signal", {
                                        enumerable: !0,
                                        get: () => {
                                            var t, r;
                                            return null != (t = e.signal) && t.aborted ? g = !0 : null == (r = e.signal) || r.addEventListener("abort", () => {
                                                g = !0
                                            }), e.signal
                                        }
                                    })
                                },
                                w = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
                                O = (e, t, r, n) => (v = n ? [t, ...v] : [...v, t], n ? [r, ...e] : [...e, r]),
                                E = (t, r, n, i) => {
                                    if (g) return Promise.reject("Cancelled");
                                    if (void 0 === n && !r && t.length) return Promise.resolve(t);
                                    let s = {
                                        queryKey: e.queryKey,
                                        pageParam: n,
                                        meta: e.options.meta
                                    };
                                    return b(s), Promise.resolve(w(s)).then(e => O(t, n, e, i))
                                };
                            if (y.length) {
                                if (d) {
                                    let t = void 0 !== f,
                                        r = t ? f : i(e.options, y);
                                    l = E(y, t, r)
                                } else if (p) {
                                    let t = void 0 !== f,
                                        r = t ? f : s(e.options, y);
                                    l = E(y, t, r, !0)
                                } else {
                                    v = [];
                                    let t = void 0 === e.options.getNextPageParam;
                                    l = !c || !y[0] || c(y[0], 0, y) ? E([], t, m[0]) : Promise.resolve(O([], m[0], y[0]));
                                    for (let r = 1; r < y.length; r++) l = l.then(n => {
                                        if (!c || !y[r] || c(y[r], r, y)) {
                                            let s = t ? m[r] : i(e.options, n);
                                            return E(n, t, s)
                                        }
                                        return Promise.resolve(O(n, m[r], y[r]))
                                    })
                                }
                            } else l = E([]);
                            return l.then(e => ({
                                pages: e,
                                pageParams: v
                            }))
                        }
                    }
                }
            }

            function i(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }

            function s(e, t) {
                return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
            }

            function o(e, t) {
                if (e.getNextPageParam && Array.isArray(t)) {
                    let r = i(e, t);
                    return null != r && !1 !== r
                }
            }

            function a(e, t) {
                if (e.getPreviousPageParam && Array.isArray(t)) {
                    let r = s(e, t);
                    return null != r && !1 !== r
                }
            }
            r.d(t, {
                Gm: function() {
                    return n
                },
                Qy: function() {
                    return o
                },
                ZF: function() {
                    return a
                }
            })
        },
        43510: function(e, t, r) {
            "use strict";
            r.d(t, {
                _: function() {
                    return n
                }
            });
            let n = console
        },
        26304: function(e, t, r) {
            "use strict";
            r.d(t, {
                R: function() {
                    return u
                },
                m: function() {
                    return a
                }
            });
            var n = r(43510),
                i = r(3347),
                s = r(485),
                o = r(57944);
            class a extends s.F {
                constructor(e) {
                    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || n._, this.observers = [], this.state = e.state || u(), this.setOptions(e.options), this.scheduleGc()
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                get meta() {
                    return this.options.meta
                }
                setState(e) {
                    this.dispatch({
                        type: "setState",
                        state: e
                    })
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers = this.observers.filter(t => t !== e), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: e
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    var e, t;
                    return null != (e = null == (t = this.retryer) ? void 0 : t.continue()) ? e : this.execute()
                }
                async execute() {
                    var e, t, r, n, i, s, a, u, l, c, h, f, d, p, y, m, v, g, b, w;
                    let O = "loading" === this.state.status;
                    try {
                        if (!O) {
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (l = (c = this.mutationCache.config).onMutate) ? void 0 : l.call(c, this.state.variables, this));
                            let e = await (null == (h = (f = this.options).onMutate) ? void 0 : h.call(f, this.state.variables));
                            e !== this.state.context && this.dispatch({
                                type: "loading",
                                context: e,
                                variables: this.state.variables
                            })
                        }
                        let d = await (() => {
                            var e;
                            return this.retryer = (0, o.Mz)({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                                onFail: (e, t) => {
                                    this.dispatch({
                                        type: "failed",
                                        failureCount: e,
                                        error: t
                                    })
                                },
                                onPause: () => {
                                    this.dispatch({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.dispatch({
                                        type: "continue"
                                    })
                                },
                                retry: null != (e = this.options.retry) ? e : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        })();
                        return await (null == (e = (t = this.mutationCache.config).onSuccess) ? void 0 : e.call(t, d, this.state.variables, this.state.context, this)), await (null == (r = (n = this.options).onSuccess) ? void 0 : r.call(n, d, this.state.variables, this.state.context)), await (null == (i = (s = this.mutationCache.config).onSettled) ? void 0 : i.call(s, d, null, this.state.variables, this.state.context, this)), await (null == (a = (u = this.options).onSettled) ? void 0 : a.call(u, d, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: d
                        }), d
                    } catch (e) {
                        try {
                            throw await (null == (d = (p = this.mutationCache.config).onError) ? void 0 : d.call(p, e, this.state.variables, this.state.context, this)), await (null == (y = (m = this.options).onError) ? void 0 : y.call(m, e, this.state.variables, this.state.context)), await (null == (v = (g = this.mutationCache.config).onSettled) ? void 0 : v.call(g, void 0, e, this.state.variables, this.state.context, this)), await (null == (b = (w = this.options).onSettled) ? void 0 : b.call(w, void 0, e, this.state.variables, this.state.context)), e
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: e
                            })
                        }
                    }
                }
                dispatch(e) {
                    this.state = (t => {
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    failureCount: e.failureCount,
                                    failureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...t,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...t,
                                    context: e.context,
                                    data: void 0,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    isPaused: !(0, o.Kw)(this.options.networkMode),
                                    status: "loading",
                                    variables: e.variables
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...t,
                                    data: void 0,
                                    error: e.error,
                                    failureCount: t.failureCount + 1,
                                    failureReason: e.error,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), i.V.batch(() => {
                        this.observers.forEach(t => {
                            t.onMutationUpdate(e)
                        }), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            }

            function u() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
        },
        3347: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return i
                }
            });
            var n = r(75438);
            let i = function() {
                let e = [],
                    t = 0,
                    r = e => {
                        e()
                    },
                    i = e => {
                        e()
                    },
                    s = i => {
                        t ? e.push(i) : (0, n.A4)(() => {
                            r(i)
                        })
                    },
                    o = () => {
                        let t = e;
                        e = [], t.length && (0, n.A4)(() => {
                            i(() => {
                                t.forEach(e => {
                                    r(e)
                                })
                            })
                        })
                    };
                return {
                    batch: e => {
                        let r;
                        t++;
                        try {
                            r = e()
                        } finally {
                            --t || o()
                        }
                        return r
                    },
                    batchCalls: e => (...t) => {
                        s(() => {
                            e(...t)
                        })
                    },
                    schedule: s,
                    setNotifyFunction: e => {
                        r = e
                    },
                    setBatchNotifyFunction: e => {
                        i = e
                    }
                }
            }()
        },
        81182: function(e, t, r) {
            "use strict";
            r.d(t, {
                N: function() {
                    return a
                }
            });
            var n = r(78123),
                i = r(75438);
            let s = ["online", "offline"];
            class o extends n.l {
                constructor() {
                    super(), this.setup = e => {
                        if (!i.sk && window.addEventListener) {
                            let t = () => e();
                            return s.forEach(e => {
                                window.addEventListener(e, t, !1)
                            }), () => {
                                s.forEach(e => {
                                    window.removeEventListener(e, t)
                                })
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                        "boolean" == typeof e ? this.setOnline(e) : this.onOnline()
                    })
                }
                setOnline(e) {
                    this.online !== e && (this.online = e, this.onOnline())
                }
                onOnline() {
                    this.listeners.forEach(({
                        listener: e
                    }) => {
                        e()
                    })
                }
                isOnline() {
                    return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                }
            }
            let a = new o
        },
        51003: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return m
                }
            });
            var n = r(75438),
                i = r(43510),
                s = r(3347),
                o = r(57944),
                a = r(485);
            class u extends a.F {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || i._, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || function(e) {
                        let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                            r = void 0 !== t,
                            n = r ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: r ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    let r = (0, n.oE)(this.state.data, e, this.options);
                    return this.dispatch({
                        data: r,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        manual: null == t ? void 0 : t.manual
                    }), r
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    let r = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), r ? r.then(n.ZT).catch(n.ZT) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some(e => !1 !== e.options.enabled)
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e => e.getCurrentResult().isStale)
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, n.Kp)(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnWindowFocus());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnReconnect());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var r, i, s, a;
                    if ("idle" !== this.state.fetchStatus) {
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) return null == (s = this.retryer) || s.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        let e = this.observers.find(e => e.options.queryFn);
                        e && this.setOptions(e.options)
                    }
                    let u = (0, n.G9)(),
                        l = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        c = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (u) return this.abortSignalConsumed = !0, u.signal
                                }
                            })
                        };
                    c(l);
                    let h = {
                        fetchOptions: t,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(l)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    c(h), null == (r = this.options.behavior) || r.onFetch(h), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (i = h.fetchOptions) ? void 0 : i.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (a = h.fetchOptions) ? void 0 : a.meta
                    });
                    let f = e => {
                        if ((0, o.DV)(e) && e.silent || this.dispatch({
                                type: "error",
                                error: e
                            }), !(0, o.DV)(e)) {
                            var t, r, n, i;
                            null == (t = (r = this.cache.config).onError) || t.call(r, e, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, this.state.data, e, this)
                        }
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, o.Mz)({
                        fn: h.fetchFn,
                        abort: null == u ? void 0 : u.abort.bind(u),
                        onSuccess: e => {
                            var t, r, n, i;
                            if (void 0 === e) {
                                f(Error(this.queryHash + " data is undefined"));
                                return
                            }
                            this.setData(e), null == (t = (r = this.cache.config).onSuccess) || t.call(r, e, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        },
                        onError: f,
                        onFail: (e, t) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: e,
                                error: t
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: h.options.retry,
                        retryDelay: h.options.retryDelay,
                        networkMode: h.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    this.state = (t => {
                        var r, n;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: e.failureCount,
                                    fetchFailureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (r = e.meta) ? r : null,
                                    fetchStatus: (0, o.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!e.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                let i = e.error;
                                if ((0, o.DV)(i) && i.revert && this.revertState) return { ...this.revertState,
                                    fetchStatus: "idle"
                                };
                                return { ...t,
                                    error: i,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchFailureReason: i,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), s.V.batch(() => {
                        this.observers.forEach(t => {
                            t.onQueryUpdate(e)
                        }), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            }
            var l = r(78123);
            class c extends l.l {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, r) {
                    var i;
                    let s = t.queryKey,
                        o = null != (i = t.queryHash) ? i : (0, n.Rm)(s, t),
                        a = this.get(o);
                    return a || (a = new u({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: s,
                        queryHash: o,
                        options: e.defaultQueryOptions(t),
                        state: r,
                        defaultOptions: e.getQueryDefaults(s)
                    }), this.add(a)), a
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    let t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter(t => t !== e), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    s.V.batch(() => {
                        this.queries.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    let [r] = (0, n.I6)(e, t);
                    return void 0 === r.exact && (r.exact = !0), this.queries.find(e => (0, n._x)(r, e))
                }
                findAll(e, t) {
                    let [r] = (0, n.I6)(e, t);
                    return Object.keys(r).length > 0 ? this.queries.filter(e => (0, n._x)(r, e)) : this.queries
                }
                notify(e) {
                    s.V.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                onFocus() {
                    s.V.batch(() => {
                        this.queries.forEach(e => {
                            e.onFocus()
                        })
                    })
                }
                onOnline() {
                    s.V.batch(() => {
                        this.queries.forEach(e => {
                            e.onOnline()
                        })
                    })
                }
            }
            var h = r(26304);
            class f extends l.l {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, r) {
                    let n = new h.m({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: r,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
                    });
                    return this.add(n), n
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter(t => t !== e), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    s.V.batch(() => {
                        this.mutations.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return void 0 === e.exact && (e.exact = !0), this.mutations.find(t => (0, n.X7)(e, t))
                }
                findAll(e) {
                    return this.mutations.filter(t => (0, n.X7)(e, t))
                }
                notify(e) {
                    s.V.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                resumePausedMutations() {
                    var e;
                    return this.resuming = (null != (e = this.resuming) ? e : Promise.resolve()).then(() => {
                        let e = this.mutations.filter(e => e.state.isPaused);
                        return s.V.batch(() => e.reduce((e, t) => e.then(() => t.continue().catch(n.ZT)), Promise.resolve()))
                    }).then(() => {
                        this.resuming = void 0
                    }), this.resuming
                }
            }
            var d = r(75221),
                p = r(81182),
                y = r(85111);
            class m {
                constructor(e = {}) {
                    this.queryCache = e.queryCache || new c, this.mutationCache = e.mutationCache || new f, this.logger = e.logger || i._, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = d.j.subscribe(() => {
                        d.j.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    }), this.unsubscribeOnline = p.N.subscribe(() => {
                        p.N.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var e, t;
                    this.mountCount--, 0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), this.unsubscribeFocus = void 0, null == (t = this.unsubscribeOnline) || t.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(e, t) {
                    let [r] = (0, n.I6)(e, t);
                    return r.fetchStatus = "fetching", this.queryCache.findAll(r).length
                }
                isMutating(e) {
                    return this.mutationCache.findAll({ ...e,
                        fetching: !0
                    }).length
                }
                getQueryData(e, t) {
                    var r;
                    return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state.data
                }
                ensureQueryData(e, t, r) {
                    let i = (0, n._v)(e, t, r),
                        s = this.getQueryData(i.queryKey);
                    return s ? Promise.resolve(s) : this.fetchQuery(i)
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map(({
                        queryKey: e,
                        state: t
                    }) => [e, t.data])
                }
                setQueryData(e, t, r) {
                    let i = this.queryCache.find(e),
                        s = null == i ? void 0 : i.state.data,
                        o = (0, n.SE)(t, s);
                    if (void 0 === o) return;
                    let a = (0, n._v)(e),
                        u = this.defaultQueryOptions(a);
                    return this.queryCache.build(this, u).setData(o, { ...r,
                        manual: !0
                    })
                }
                setQueriesData(e, t, r) {
                    return s.V.batch(() => this.getQueryCache().findAll(e).map(({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, r)]))
                }
                getQueryState(e, t) {
                    var r;
                    return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state
                }
                removeQueries(e, t) {
                    let [r] = (0, n.I6)(e, t), i = this.queryCache;
                    s.V.batch(() => {
                        i.findAll(r).forEach(e => {
                            i.remove(e)
                        })
                    })
                }
                resetQueries(e, t, r) {
                    let [i, o] = (0, n.I6)(e, t, r), a = this.queryCache, u = {
                        type: "active",
                        ...i
                    };
                    return s.V.batch(() => (a.findAll(i).forEach(e => {
                        e.reset()
                    }), this.refetchQueries(u, o)))
                }
                cancelQueries(e, t, r) {
                    let [i, o = {}] = (0, n.I6)(e, t, r);
                    return void 0 === o.revert && (o.revert = !0), Promise.all(s.V.batch(() => this.queryCache.findAll(i).map(e => e.cancel(o)))).then(n.ZT).catch(n.ZT)
                }
                invalidateQueries(e, t, r) {
                    let [i, o] = (0, n.I6)(e, t, r);
                    return s.V.batch(() => {
                        var e, t;
                        if (this.queryCache.findAll(i).forEach(e => {
                                e.invalidate()
                            }), "none" === i.refetchType) return Promise.resolve();
                        let r = { ...i,
                            type: null != (e = null != (t = i.refetchType) ? t : i.type) ? e : "active"
                        };
                        return this.refetchQueries(r, o)
                    })
                }
                refetchQueries(e, t, r) {
                    let [i, o] = (0, n.I6)(e, t, r), a = Promise.all(s.V.batch(() => this.queryCache.findAll(i).filter(e => !e.isDisabled()).map(e => {
                        var t;
                        return e.fetch(void 0, { ...o,
                            cancelRefetch: null == (t = null == o ? void 0 : o.cancelRefetch) || t,
                            meta: {
                                refetchPage: i.refetchPage
                            }
                        })
                    }))).then(n.ZT);
                    return null != o && o.throwOnError || (a = a.catch(n.ZT)), a
                }
                fetchQuery(e, t, r) {
                    let i = (0, n._v)(e, t, r),
                        s = this.defaultQueryOptions(i);
                    void 0 === s.retry && (s.retry = !1);
                    let o = this.queryCache.build(this, s);
                    return o.isStaleByTime(s.staleTime) ? o.fetch(s) : Promise.resolve(o.state.data)
                }
                prefetchQuery(e, t, r) {
                    return this.fetchQuery(e, t, r).then(n.ZT).catch(n.ZT)
                }
                fetchInfiniteQuery(e, t, r) {
                    let i = (0, n._v)(e, t, r);
                    return i.behavior = (0, y.Gm)(), this.fetchQuery(i)
                }
                prefetchInfiniteQuery(e, t, r) {
                    return this.fetchInfiniteQuery(e, t, r).then(n.ZT).catch(n.ZT)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(e) {
                    this.defaultOptions = e
                }
                setQueryDefaults(e, t) {
                    let r = this.queryDefaults.find(t => (0, n.yF)(e) === (0, n.yF)(t.queryKey));
                    r ? r.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    if (!e) return;
                    let t = this.queryDefaults.find(t => (0, n.to)(e, t.queryKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                setMutationDefaults(e, t) {
                    let r = this.mutationDefaults.find(t => (0, n.yF)(e) === (0, n.yF)(t.mutationKey));
                    r ? r.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    if (!e) return;
                    let t = this.mutationDefaults.find(t => (0, n.to)(e, t.mutationKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                defaultQueryOptions(e) {
                    if (null != e && e._defaulted) return e;
                    let t = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return !t.queryHash && t.queryKey && (t.queryHash = (0, n.Rm)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                }
                defaultMutationOptions(e) {
                    return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }
        },
        485: function(e, t, r) {
            "use strict";
            r.d(t, {
                F: function() {
                    return i
                }
            });
            var n = r(75438);
            class i {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), (0, n.PN)(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove()
                    }, this.cacheTime))
                }
                updateCacheTime(e) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != e ? e : n.sk ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            }
        },
        57944: function(e, t, r) {
            "use strict";
            r.d(t, {
                DV: function() {
                    return l
                },
                Kw: function() {
                    return a
                },
                Mz: function() {
                    return c
                }
            });
            var n = r(75221),
                i = r(81182),
                s = r(75438);

            function o(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function a(e) {
                return (null != e ? e : "online") !== "online" || i.N.isOnline()
            }
            class u {
                constructor(e) {
                    this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
                }
            }

            function l(e) {
                return e instanceof u
            }

            function c(e) {
                let t, r, l, c = !1,
                    h = 0,
                    f = !1,
                    d = new Promise((e, t) => {
                        r = e, l = t
                    }),
                    p = () => !n.j.isFocused() || "always" !== e.networkMode && !i.N.isOnline(),
                    y = n => {
                        f || (f = !0, null == e.onSuccess || e.onSuccess(n), null == t || t(), r(n))
                    },
                    m = r => {
                        f || (f = !0, null == e.onError || e.onError(r), null == t || t(), l(r))
                    },
                    v = () => new Promise(r => {
                        t = e => {
                            let t = f || !p();
                            return t && r(e), t
                        }, null == e.onPause || e.onPause()
                    }).then(() => {
                        t = void 0, f || null == e.onContinue || e.onContinue()
                    }),
                    g = () => {
                        let t;
                        if (!f) {
                            try {
                                t = e.fn()
                            } catch (e) {
                                t = Promise.reject(e)
                            }
                            Promise.resolve(t).then(y).catch(t => {
                                var r, n;
                                if (f) return;
                                let i = null != (r = e.retry) ? r : 3,
                                    a = null != (n = e.retryDelay) ? n : o,
                                    u = "function" == typeof a ? a(h, t) : a,
                                    l = !0 === i || "number" == typeof i && h < i || "function" == typeof i && i(h, t);
                                if (c || !l) {
                                    m(t);
                                    return
                                }
                                h++, null == e.onFail || e.onFail(h, t), (0, s.Gh)(u).then(() => {
                                    if (p()) return v()
                                }).then(() => {
                                    c ? m(t) : g()
                                })
                            })
                        }
                    };
                return a(e.networkMode) ? g() : v().then(g), {
                    promise: d,
                    cancel: t => {
                        f || (m(new u(t)), null == e.abort || e.abort())
                    },
                    continue: () => (null == t ? void 0 : t()) ? d : Promise.resolve(),
                    cancelRetry: () => {
                        c = !0
                    },
                    continueRetry: () => {
                        c = !1
                    }
                }
            }
        },
        78123: function(e, t, r) {
            "use strict";
            r.d(t, {
                l: function() {
                    return n
                }
            });
            class n {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    let t = {
                        listener: e
                    };
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        75438: function(e, t, r) {
            "use strict";
            r.d(t, {
                A4: function() {
                    return S
                },
                G9: function() {
                    return R
                },
                Gh: function() {
                    return C
                },
                I6: function() {
                    return f
                },
                Kp: function() {
                    return l
                },
                PN: function() {
                    return o
                },
                Rc: function() {
                    return u
                },
                Rm: function() {
                    return y
                },
                SE: function() {
                    return s
                },
                VS: function() {
                    return b
                },
                X7: function() {
                    return p
                },
                ZT: function() {
                    return i
                },
                _v: function() {
                    return c
                },
                _x: function() {
                    return d
                },
                e5: function() {
                    return a
                },
                lV: function() {
                    return h
                },
                oE: function() {
                    return P
                },
                sk: function() {
                    return n
                },
                to: function() {
                    return v
                },
                yF: function() {
                    return m
                }
            });
            let n = "undefined" == typeof window || "Deno" in window;

            function i() {}

            function s(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function o(e) {
                return "number" == typeof e && e >= 0 && e !== 1 / 0
            }

            function a(e, t) {
                return e.filter(e => !t.includes(e))
            }

            function u(e, t, r) {
                let n = e.slice(0);
                return n[t] = r, n
            }

            function l(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function c(e, t, r) {
                return x(e) ? "function" == typeof t ? { ...r,
                    queryKey: e,
                    queryFn: t
                } : { ...t,
                    queryKey: e
                } : e
            }

            function h(e, t, r) {
                return x(e) ? "function" == typeof t ? { ...r,
                    mutationKey: e,
                    mutationFn: t
                } : { ...t,
                    mutationKey: e
                } : "function" == typeof e ? { ...t,
                    mutationFn: e
                } : { ...e
                }
            }

            function f(e, t, r) {
                return x(e) ? [{ ...t,
                    queryKey: e
                }, r] : [e || {}, t]
            }

            function d(e, t) {
                let {
                    type: r = "all",
                    exact: n,
                    fetchStatus: i,
                    predicate: s,
                    queryKey: o,
                    stale: a
                } = e;
                if (x(o)) {
                    if (n) {
                        if (t.queryHash !== y(o, t.options)) return !1
                    } else {
                        if (!g(t.queryKey, o)) return !1
                    }
                }
                if ("all" !== r) {
                    let e = t.isActive();
                    if ("active" === r && !e || "inactive" === r && e) return !1
                }
                return ("boolean" != typeof a || t.isStale() === a) && (void 0 === i || i === t.state.fetchStatus) && (!s || !!s(t))
            }

            function p(e, t) {
                let {
                    exact: r,
                    fetching: n,
                    predicate: i,
                    mutationKey: s
                } = e;
                if (x(s)) {
                    if (!t.options.mutationKey) return !1;
                    if (r) {
                        if (m(t.options.mutationKey) !== m(s)) return !1
                    } else {
                        if (!g(t.options.mutationKey, s)) return !1
                    }
                }
                return ("boolean" != typeof n || "loading" === t.state.status === n) && (!i || !!i(t))
            }

            function y(e, t) {
                return ((null == t ? void 0 : t.queryKeyHashFn) || m)(e)
            }

            function m(e) {
                return JSON.stringify(e, (e, t) => O(t) ? Object.keys(t).sort().reduce((e, r) => (e[r] = t[r], e), {}) : t)
            }

            function v(e, t) {
                return g(e, t)
            }

            function g(e, t) {
                return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && !Object.keys(t).some(r => !g(e[r], t[r]))
            }

            function b(e, t) {
                if (e && !t || t && !e) return !1;
                for (let r in e)
                    if (e[r] !== t[r]) return !1;
                return !0
            }

            function w(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function O(e) {
                if (!E(e)) return !1;
                let t = e.constructor;
                if (void 0 === t) return !0;
                let r = t.prototype;
                return !!(E(r) && r.hasOwnProperty("isPrototypeOf"))
            }

            function E(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function x(e) {
                return Array.isArray(e)
            }

            function C(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }

            function S(e) {
                C(0).then(e)
            }

            function R() {
                if ("function" == typeof AbortController) return new AbortController
            }

            function P(e, t, r) {
                return null != r.isDataEqual && r.isDataEqual(e, t) ? e : "function" == typeof r.structuralSharing ? r.structuralSharing(e, t) : !1 !== r.structuralSharing ? function e(t, r) {
                    if (t === r) return t;
                    let n = w(t) && w(r);
                    if (n || O(t) && O(r)) {
                        let i = n ? t.length : Object.keys(t).length,
                            s = n ? r : Object.keys(r),
                            o = s.length,
                            a = n ? [] : {},
                            u = 0;
                        for (let i = 0; i < o; i++) {
                            let o = n ? i : s[i];
                            a[o] = e(t[o], r[o]), a[o] === t[o] && u++
                        }
                        return i === o && u === i ? t : a
                    }
                    return r
                }(e, t) : t
            }
        },
        16716: function(e, t, r) {
            "use strict";
            r.d(t, {
                NL: function() {
                    return a
                },
                aH: function() {
                    return u
                }
            });
            var n = r(23056);
            let i = n.createContext(void 0),
                s = n.createContext(!1);

            function o(e, t) {
                return e || (t && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = i), window.ReactQueryClientContext) : i)
            }
            let a = function() {
                    let {
                        context: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = n.useContext(o(e, n.useContext(s)));
                    if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                u = e => {
                    let {
                        client: t,
                        children: r,
                        context: i,
                        contextSharing: a = !1
                    } = e;
                    n.useEffect(() => (t.mount(), () => {
                        t.unmount()
                    }), [t]);
                    let u = o(i, a);
                    return n.createElement(s.Provider, {
                        value: !i && a
                    }, n.createElement(u.Provider, {
                        value: t
                    }, r))
                }
        },
        18628: function(e, t, r) {
            "use strict";
            r.d(t, {
                BJ: function() {
                    return P
                },
                Bm: function() {
                    return I
                },
                gb: function() {
                    return S
                },
                Pq: function() {
                    return M
                }
            });
            class n extends Error {
                constructor(e) {
                    super(e), this.name = "ObservableAbortError", Object.setPrototypeOf(this, n.prototype)
                }
            }

            function i(e) {
                let t = {
                    subscribe(t) {
                        let r = null,
                            n = !1,
                            i = !1,
                            s = !1;

                        function o() {
                            if (null === r) {
                                s = !0;
                                return
                            }!i && (i = !0, "function" == typeof r ? r() : r && r.unsubscribe())
                        }
                        return r = e({
                            next(e) {
                                n || t.next ? .(e)
                            },
                            error(e) {
                                n || (n = !0, t.error ? .(e), o())
                            },
                            complete() {
                                n || (n = !0, t.complete ? .(), o())
                            }
                        }), s && o(), {
                            unsubscribe: o
                        }
                    },
                    pipe: (...e) => (0 === e.length ? function(e) {
                        return e
                    } : 1 === e.length ? e[0] : function(t) {
                        return e.reduce((e, t) => t(e), t)
                    })(t)
                };
                return t
            }
            var s = r(60214);

            function o(e) {
                return !!e && !Array.isArray(e) && "object" == typeof e
            }
            class a extends Error {
                constructor() {
                    super("Unable to transform response from server")
                }
            }

            function u(e, t) {
                let r;
                try {
                    r = function(e, t) {
                        if ("error" in e) {
                            let r = t.transformer.deserialize(e.error);
                            return {
                                ok: !1,
                                error: { ...e,
                                    error: r
                                }
                            }
                        }
                        return {
                            ok: !0,
                            result: { ...e.result,
                                ...(!e.result.type || "data" === e.result.type) && {
                                    type: "data",
                                    data: t.transformer.deserialize(e.result.data)
                                }
                            }
                        }
                    }(e, t)
                } catch (e) {
                    throw new a
                }
                if (!r.ok && (!o(r.error.error) || "number" != typeof r.error.error.code) || r.ok && !o(r.result)) throw new a;
                return r
            }
            class l extends Error {
                static from(e, t = {}) {
                    return e instanceof l || e instanceof Error && "TRPCClientError" === e.name ? (t.meta && (e.meta = { ...e.meta,
                        ...t.meta
                    }), e) : o(e) && o(e.error) && "number" == typeof e.error.code && "string" == typeof e.error.message ? new l(e.error.message, { ...t,
                        result: e
                    }) : e instanceof Error ? new l(e.message, { ...t,
                        cause: (0, s.sZ)(e)
                    }) : new l("Unknown error", { ...t,
                        cause: e
                    })
                }
                constructor(e, t) {
                    let r = t ? .cause;
                    super(e, {
                        cause: r
                    }), this.meta = t ? .meta, this.cause = r, this.shape = t ? .result ? .error, this.data = t ? .result ? .error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, l.prototype)
                }
            }
            let c = e => "function" == typeof e;

            function h(e) {
                var t;
                return {
                    url: e.url.toString().replace(/\/$/, ""),
                    fetch: e.fetch,
                    AbortController: (t = e.AbortController) ? t : "undefined" != typeof window && window.AbortController ? window.AbortController : "undefined" != typeof globalThis && globalThis.AbortController ? globalThis.AbortController : null
                }
            }
            let f = {
                query: "GET",
                mutation: "POST"
            };

            function d(e) {
                return "input" in e ? e.runtime.transformer.serialize(e.input) : function(e) {
                    let t = {};
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t[r] = n
                    }
                    return t
                }(e.inputs.map(t => e.runtime.transformer.serialize(t)))
            }
            let p = e => {
                    let t = e.url + "/" + e.path,
                        r = [];
                    if ("inputs" in e && r.push("batch=1"), "query" === e.type) {
                        let t = d(e);
                        void 0 !== t && r.push(`input=${encodeURIComponent(JSON.stringify(t))}`)
                    }
                    return r.length && (t += "?" + r.join("&")), t
                },
                y = e => {
                    if ("query" === e.type) return;
                    let t = d(e);
                    return void 0 !== t ? JSON.stringify(t) : void 0
                },
                m = e => g({ ...e,
                    contentTypeHeader: "application/json",
                    getUrl: p,
                    getBody: y
                });
            async function v(e, t) {
                let r = e.getUrl(e),
                    n = e.getBody(e),
                    {
                        type: i
                    } = e,
                    s = await e.headers(); /* istanbul ignore if -- @preserve */
                if ("subscription" === i) throw Error("Subscriptions should use wsLink");
                let o = { ...e.contentTypeHeader ? {
                        "content-type": e.contentTypeHeader
                    } : {},
                    ...e.batchModeHeader ? {
                        "trpc-batch-mode": e.batchModeHeader
                    } : {},
                    ...s
                };
                return (function(e) {
                    if (e) return e;
                    if ("undefined" != typeof window && c(window.fetch)) return window.fetch;
                    if ("undefined" != typeof globalThis && c(globalThis.fetch)) return globalThis.fetch;
                    throw Error("No fetch implementation found")
                })(e.fetch)(r, {
                    method: f[i],
                    signal: t ? .signal,
                    body: n,
                    headers: o
                })
            }

            function g(e) {
                let t = e.AbortController ? new e.AbortController : null,
                    r = {},
                    n = !1;
                return {
                    promise: new Promise((i, s) => {
                        v(e, t).then(e => (r.response = e, n = !0, e.json())).then(e => {
                            r.responseJSON = e, i({
                                json: e,
                                meta: r
                            })
                        }).catch(e => {
                            n = !0, s(l.from(e, {
                                meta: r
                            }))
                        })
                    }),
                    cancel: () => {
                        n || t ? .abort()
                    }
                }
            }
            let b = () => {
                throw Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")
            };

            function w(e) {
                let t = null,
                    r = null,
                    n = () => {
                        clearTimeout(r), r = null, t = null
                    };

                function i() {
                    let r = function(t) {
                        let r = [
                                []
                            ],
                            n = 0;
                        for (;;) {
                            let i = t[n];
                            if (!i) break;
                            let s = r[r.length - 1];
                            if (i.aborted) {
                                i.reject ? .(Error("Aborted")), n++;
                                continue
                            }
                            if (e.validate(s.concat(i).map(e => e.key))) {
                                s.push(i), n++;
                                continue
                            }
                            if (0 === s.length) {
                                i.reject ? .(Error("Input is too big for a single dispatch")), n++;
                                continue
                            }
                            r.push([])
                        }
                        return r
                    }(t);
                    for (let t of (n(), r)) {
                        if (!t.length) continue;
                        let r = {
                            items: t,
                            cancel: b
                        };
                        for (let e of t) e.batch = r;
                        let n = (e, t) => {
                                let n = r.items[e];
                                n.resolve ? .(t), n.batch = null, n.reject = null, n.resolve = null
                            },
                            {
                                promise: i,
                                cancel: s
                            } = e.fetch(r.items.map(e => e.key), n);
                        r.cancel = s, i.then(e => {
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t];
                                n(t, r)
                            }
                            for (let e of r.items) e.reject ? .(Error("Missing result")), e.batch = null
                        }).catch(e => {
                            for (let t of r.items) t.reject ? .(e), t.batch = null
                        })
                    }
                }
                return {
                    load: function(e) {
                        let n = {
                                aborted: !1,
                                key: e,
                                batch: null,
                                resolve: b,
                                reject: b
                            },
                            s = new Promise((e, r) => {
                                n.reject = r, n.resolve = e, t || (t = []), t.push(n)
                            });
                        return r || (r = setTimeout(i)), {
                            promise: s,
                            cancel: () => {
                                n.aborted = !0, n.batch ? .items.every(e => e.aborted) && (n.batch.cancel(), n.batch = null)
                            }
                        }
                    }
                }
            }

            function O(e) {
                return function(t) {
                    let r = h(t),
                        n = t.maxURLLength ? ? 1 / 0;
                    return s => {
                        let o = i => ({
                                validate: e => {
                                    if (n === 1 / 0) return !0;
                                    let t = e.map(e => e.path).join(","),
                                        o = e.map(e => e.input);
                                    return p({ ...r,
                                        runtime: s,
                                        type: i,
                                        path: t,
                                        inputs: o
                                    }).length <= n
                                },
                                fetch: e({ ...r,
                                    runtime: s,
                                    type: i,
                                    opts: t
                                })
                            }),
                            a = w(o("query")),
                            c = w(o("mutation")),
                            h = {
                                query: a,
                                subscription: w(o("subscription")),
                                mutation: c
                            };
                        return ({
                            op: e
                        }) => i(t => {
                            let r;
                            let {
                                promise: n,
                                cancel: i
                            } = h[e.type].load(e);
                            return n.then(e => {
                                r = e;
                                let n = u(e.json, s);
                                if (!n.ok) {
                                    t.error(l.from(n.error, {
                                        meta: e.meta
                                    }));
                                    return
                                }
                                t.next({
                                    context: e.meta,
                                    result: n.result
                                }), t.complete()
                            }).catch(e => {
                                t.error(l.from(e, {
                                    meta: r ? .meta
                                }))
                            }), () => {
                                i()
                            }
                        })
                    }
                }
            }

            function E(e) {
                return t => {
                    let r = h(t);
                    return n => ({
                        op: s
                    }) => i(i => {
                        let o;
                        let {
                            path: a,
                            input: c,
                            type: h
                        } = s, {
                            promise: f,
                            cancel: d
                        } = e.requester({ ...r,
                            runtime: n,
                            type: h,
                            path: a,
                            input: c,
                            headers: () => t.headers ? "function" == typeof t.headers ? t.headers({
                                op: s
                            }) : t.headers : {}
                        });
                        return f.then(e => {
                            o = e.meta;
                            let t = u(e.json, n);
                            if (!t.ok) {
                                i.error(l.from(t.error, {
                                    meta: o
                                }));
                                return
                            }
                            i.next({
                                context: e.meta,
                                result: t.result
                            }), i.complete()
                        }).catch(e => {
                            i.error(l.from(e, {
                                meta: o
                            }))
                        }), () => {
                            d()
                        }
                    })
                }
            }
            O(e => t => {
                let r = t.map(e => e.path).join(","),
                    n = t.map(e => e.input),
                    {
                        promise: i,
                        cancel: s
                    } = m({ ...e,
                        path: r,
                        inputs: n,
                        headers: () => e.opts.headers ? "function" == typeof e.opts.headers ? e.opts.headers({
                            opList: t
                        }) : e.opts.headers : {}
                    });
                return {
                    promise: i.then(e => (Array.isArray(e.json) ? e.json : t.map(() => e.json)).map(t => ({
                        meta: e.meta,
                        json: t
                    }))),
                    cancel: s
                }
            }), E({
                requester: m
            });
            let x = {
                    css: {
                        query: ["72e3ff", "3fb0d8"],
                        mutation: ["c5a3fc", "904dfc"],
                        subscription: ["ff49e1", "d83fbe"]
                    },
                    ansi: {
                        regular: {
                            query: ["\x1b[30;46m", "\x1b[97;46m"],
                            mutation: ["\x1b[30;45m", "\x1b[97;45m"],
                            subscription: ["\x1b[30;42m", "\x1b[97;42m"]
                        },
                        bold: {
                            query: ["\x1b[1;30;46m", "\x1b[1;97;46m"],
                            mutation: ["\x1b[1;30;45m", "\x1b[1;97;45m"],
                            subscription: ["\x1b[1;30;42m", "\x1b[1;97;42m"]
                        }
                    }
                },
                C = ({
                    c: e = console,
                    colorMode: t = "css"
                }) => r => {
                    let n = r.input,
                        i = "undefined" != typeof FormData && n instanceof FormData ? Object.fromEntries(n) : n,
                        {
                            parts: s,
                            args: o
                        } = function(e) {
                            let {
                                direction: t,
                                type: r,
                                path: n,
                                id: i,
                                input: s
                            } = e, o = [], a = [];
                            if ("ansi" === e.colorMode) {
                                let [s, u] = x.ansi.regular[r], [l, c] = x.ansi.bold[r];
                                return o.push("up" === t ? s : u, "up" === t ? ">>" : "<<", r, "up" === t ? l : c, `#${i}`, n, "\x1b[0m"), "up" === t ? a.push({
                                    input: e.input
                                }) : a.push({
                                    input: e.input,
                                    result: "result" in e.result ? e.result.result : e.result,
                                    elapsedMs: e.elapsedMs
                                }), {
                                    parts: o,
                                    args: a
                                }
                            }
                            let [u, l] = x.css[r], c = `
    background-color: #${"up"===t?u:l}; 
    color: ${"up"===t?"black":"white"};
    padding: 2px;
  `;
                            return o.push("%c", "up" === t ? ">>" : "<<", r, `#${i}`, `%c${n}%c`, "%O"), a.push(c, `${c}; font-weight: bold;`, `${c}; font-weight: normal;`), "up" === t ? a.push({
                                input: s,
                                context: e.context
                            }) : a.push({
                                input: s,
                                result: e.result,
                                elapsedMs: e.elapsedMs,
                                context: e.context
                            }), {
                                parts: o,
                                args: a
                            }
                        }({ ...r,
                            colorMode: t,
                            input: i
                        });
                    e["down" === r.direction && r.result && (r.result instanceof Error || "error" in r.result.result) ? "error" : "log"].apply(null, [s.join(" ")].concat(o))
                };

            function S(e = {}) {
                let {
                    enabled: t = () => !0
                } = e, r = e.colorMode ? ? ("undefined" == typeof window ? "ansi" : "css"), {
                    logger: n = C({
                        c: e.console,
                        colorMode: r
                    })
                } = e;
                return () => ({
                    op: e,
                    next: r
                }) => i(i => {
                    var s;
                    t({ ...e,
                        direction: "up"
                    }) && n({ ...e,
                        direction: "up"
                    });
                    let o = Date.now();

                    function a(r) {
                        let i = Date.now() - o;
                        t({ ...e,
                            direction: "down",
                            result: r
                        }) && n({ ...e,
                            direction: "down",
                            elapsedMs: i,
                            result: r
                        })
                    }
                    return r(e).pipe((s = {
                        next(e) {
                            a(e)
                        },
                        error(e) {
                            a(e)
                        }
                    }, e => ({
                        subscribe: t => e.subscribe({
                            next(e) {
                                s.next ? .(e), t.next ? .(e)
                            },
                            error(e) {
                                s.error ? .(e), t.error ? .(e)
                            },
                            complete() {
                                s.complete ? .(), t.complete ? .()
                            }
                        })
                    }))).subscribe(i)
                })
            }
            class R {
                $request({
                    type: e,
                    input: t,
                    path: r,
                    context: n = {}
                }) {
                    var s;
                    return (s = {
                        links: this.links,
                        op: {
                            id: ++this.requestId,
                            type: e,
                            path: r,
                            input: t,
                            context: n
                        }
                    }, i(e => (function e(t = 0, r = s.op) {
                        let n = s.links[t];
                        if (!n) throw Error("No more links to execute - did you forget to add an ending link?");
                        return n({
                            op: r,
                            next: r => e(t + 1, r)
                        })
                    })().subscribe(e))).pipe(e => {
                        let t = 0,
                            r = null,
                            n = [];
                        return {
                            subscribe: i => (t++, n.push(i), r || (r = e.subscribe({
                                next(e) {
                                    for (let t of n) t.next ? .(e)
                                },
                                error(e) {
                                    for (let t of n) t.error ? .(e)
                                },
                                complete() {
                                    for (let e of n) e.complete ? .()
                                }
                            })), {
                                unsubscribe() {
                                    t--,
                                    function() {
                                        if (0 === t && r) {
                                            let e = r;
                                            r = null, e.unsubscribe()
                                        }
                                    }();
                                    let e = n.findIndex(e => e === i);
                                    e > -1 && n.splice(e, 1)
                                }
                            })
                        }
                    })
                }
                requestAsPromise(e) {
                    var t;
                    let r;
                    let {
                        promise: i,
                        abort: s
                    } = (t = this.$request(e), {
                        promise: new Promise((e, i) => {
                            let s = !1;

                            function o() {
                                s || (s = !0, i(new n("This operation was aborted.")), a.unsubscribe())
                            }
                            let a = t.subscribe({
                                next(t) {
                                    s = !0, e(t), o()
                                },
                                error(e) {
                                    s = !0, i(e), o()
                                },
                                complete() {
                                    s = !0, o()
                                }
                            });
                            r = o
                        }),
                        abort: r
                    });
                    return new Promise((t, r) => {
                        e.signal ? .addEventListener("abort", s), i.then(e => {
                            t(e.result.data)
                        }).catch(e => {
                            r(l.from(e))
                        })
                    })
                }
                query(e, t, r) {
                    return this.requestAsPromise({
                        type: "query",
                        path: e,
                        input: t,
                        context: r ? .context,
                        signal: r ? .signal
                    })
                }
                mutation(e, t, r) {
                    return this.requestAsPromise({
                        type: "mutation",
                        path: e,
                        input: t,
                        context: r ? .context,
                        signal: r ? .signal
                    })
                }
                subscription(e, t, r) {
                    return this.$request({
                        type: "subscription",
                        path: e,
                        input: t,
                        context: r ? .context
                    }).subscribe({
                        next(e) {
                            "started" === e.result.type ? r.onStarted ? .() : "stopped" === e.result.type ? r.onStopped ? .() : r.onData ? .(e.result.data)
                        },
                        error(e) {
                            r.onError ? .(e)
                        },
                        complete() {
                            r.onComplete ? .()
                        }
                    })
                }
                constructor(e) {
                    this.requestId = 0;
                    let t = (() => {
                        let t = e.transformer;
                        return t ? "input" in t ? e.transformer : {
                            input: t,
                            output: t
                        } : {
                            input: {
                                serialize: e => e,
                                deserialize: e => e
                            },
                            output: {
                                serialize: e => e,
                                deserialize: e => e
                            }
                        }
                    })();
                    this.runtime = {
                        transformer: {
                            serialize: e => t.input.serialize(e),
                            deserialize: e => t.output.deserialize(e)
                        },
                        combinedTransformer: t
                    }, this.links = e.links.map(e => e(this.runtime))
                }
            }

            function P(e) {
                return new R(e)
            }
            let q = {
                    query: "query",
                    mutate: "mutation",
                    subscribe: "subscription"
                },
                _ = e => q[e];

            function I(e) {
                return (0, s.yh)(t => e.hasOwnProperty(t) ? e[t] : "__untypedClient" === t ? e : (0, s.IX)(({
                    path: r,
                    args: n
                }) => {
                    let i = [t, ...r],
                        s = _(i.pop()),
                        o = i.join(".");
                    return e[s](o, ...n)
                }))
            }
            async function T(e) {
                let t = e.parse ? ? JSON.parse;
                await k(e.readableStream, r => {
                    if (e.signal ? .aborted || !r || "}" === r) return;
                    let n = r.indexOf(":"),
                        i = r.substring(2, n - 1),
                        s = r.substring(n + 1);
                    e.onSingle(Number(i), t(s))
                }, e.textDecoder)
            }
            async function k(e, t, r) {
                let n = "",
                    i = e => {
                        let i = r.decode(e).split("\n");
                        if (1 === i.length) n += i[0];
                        else if (i.length > 1) {
                            t(n + i[0]);
                            for (let e = 1; e < i.length - 1; e++) t(i[e]);
                            n = i[i.length - 1]
                        }
                    };
                "getReader" in e ? await A(e, i) : await new Promise(t => {
                    e.on("data", i), e.on("end", t)
                }), t(n)
            }
            async function A(e, t) {
                let r = e.getReader(),
                    n = await r.read();
                for (; !n.done;) t(n.value), n = await r.read()
            }
            let Q = (e, t) => {
                    let r = e.AbortController ? new e.AbortController : null;
                    return {
                        cancel: () => r ? .abort(),
                        promise: v({ ...e,
                            contentTypeHeader: "application/json",
                            batchModeHeader: "stream",
                            getUrl: p,
                            getBody: y
                        }, r).then(async n => {
                            if (!n.body) throw Error("Received response without body");
                            let i = {
                                response: n
                            };
                            return T({
                                readableStream: n.body,
                                onSingle: t,
                                parse: e => ({
                                    json: JSON.parse(e),
                                    meta: i
                                }),
                                signal: r ? .signal,
                                textDecoder: e.textDecoder
                            })
                        })
                    }
                },
                M = O(e => {
                    let t = function(e) {
                        if (e) return e;
                        if ("undefined" != typeof window && window.TextDecoder) return new window.TextDecoder;
                        if ("undefined" != typeof globalThis && globalThis.TextDecoder) return new globalThis.TextDecoder;
                        throw Error("No TextDecoder implementation found")
                    }(e.opts.textDecoder);
                    return (r, n) => {
                        let i = r.map(e => e.path).join(","),
                            s = r.map(e => e.input),
                            {
                                cancel: o,
                                promise: a
                            } = Q({ ...e,
                                textDecoder: t,
                                path: i,
                                inputs: s,
                                headers: () => e.opts.headers ? "function" == typeof e.opts.headers ? e.opts.headers({
                                    opList: r
                                }) : e.opts.headers : {}
                            }, (e, t) => {
                                n(e, t)
                            });
                        return {
                            promise: a.then(() => []),
                            cancel: o
                        }
                    }
                }),
                j = e => {
                    if ("input" in e) {
                        if (!(e.input instanceof FormData)) throw Error("Input is not FormData");
                        return e.input
                    }
                };
            E({
                requester: e => {
                    if ("mutation" !== e.type) throw Error("We only handle mutations with formdata");
                    return g({ ...e,
                        getUrl: () => `${e.url}/${e.path}`,
                        getBody: j
                    })
                }
            })
        },
        23575: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                ec: function() {
                    return H
                }
            });
            var i = r(18628),
                s = r(60214);

            function o(e, t) {
                let [r, n] = Array.isArray(e) ? e : [e], i = "string" != typeof r || "" === r ? [] : r.split(".");
                return n || t && "any" !== t ? [i, { ...void 0 !== n && {
                        input: n
                    },
                    ...t && "any" !== t && {
                        type: t
                    }
                }] : i.length ? [i] : []
            }
            var a = r(75438),
                u = r(3347),
                l = r(75221),
                c = r(78123),
                h = r(57944);
            class f extends c.l {
                constructor(e, t) {
                    super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.currentQuery.addObserver(this), d(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return p(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return p(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(e, t) {
                    let r = this.options,
                        n = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(e), (0, a.VS)(r, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
                    let i = this.hasListeners();
                    i && y(this.currentQuery, n, this.options, r) && this.executeFetch(), this.updateResult(t), i && (this.currentQuery !== n || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
                    let s = this.computeRefetchInterval();
                    i && (this.currentQuery !== n || this.options.enabled !== r.enabled || s !== this.currentRefetchInterval) && this.updateRefetchInterval(s)
                }
                getOptimisticResult(e) {
                    let t = this.client.getQueryCache().build(this.client, e),
                        r = this.createResult(t, e);
                    return e.keepPreviousData || (void 0 !== e.placeholderData ? !r.isPlaceholderData : (0, a.VS)(this.getCurrentResult(), r)) || (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(e) {
                    let t = {};
                    return Object.keys(e).forEach(r => {
                        Object.defineProperty(t, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(r), e[r])
                        })
                    }), t
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            refetchPage: e
                        }
                    })
                }
                fetchOptimistic(e) {
                    let t = this.client.defaultQueryOptions(e),
                        r = this.client.getQueryCache().build(this.client, t);
                    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, t))
                }
                fetch(e) {
                    var t;
                    return this.executeFetch({ ...e,
                        cancelRefetch: null == (t = e.cancelRefetch) || t
                    }).then(() => (this.updateResult(), this.currentResult))
                }
                executeFetch(e) {
                    this.updateQuery();
                    let t = this.currentQuery.fetch(this.options, e);
                    return null != e && e.throwOnError || (t = t.catch(a.ZT)), t
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), a.sk || this.currentResult.isStale || !(0, a.PN)(this.options.staleTime)) return;
                    let e = (0, a.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    this.staleTimeoutId = setTimeout(() => {
                        this.currentResult.isStale || this.updateResult()
                    }, e + 1)
                }
                computeRefetchInterval() {
                    var e;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
                }
                updateRefetchInterval(e) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = e, !a.sk && !1 !== this.options.enabled && (0, a.PN)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground || l.j.isFocused()) && this.executeFetch()
                    }, this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(e, t) {
                    let r;
                    let n = this.currentQuery,
                        i = this.options,
                        s = this.currentResult,
                        o = this.currentResultState,
                        u = this.currentResultOptions,
                        l = e !== n,
                        c = l ? e.state : this.currentQueryInitialState,
                        f = l ? this.currentResult : this.previousQueryResult,
                        {
                            state: p
                        } = e,
                        {
                            dataUpdatedAt: v,
                            error: g,
                            errorUpdatedAt: b,
                            fetchStatus: w,
                            status: O
                        } = p,
                        E = !1,
                        x = !1;
                    if (t._optimisticResults) {
                        let r = this.hasListeners(),
                            s = !r && d(e, t),
                            o = r && y(e, n, t, i);
                        (s || o) && (w = (0, h.Kw)(e.options.networkMode) ? "fetching" : "paused", v || (O = "loading")), "isRestoring" === t._optimisticResults && (w = "idle")
                    }
                    if (t.keepPreviousData && !p.dataUpdatedAt && null != f && f.isSuccess && "error" !== O) r = f.data, v = f.dataUpdatedAt, O = f.status, E = !0;
                    else if (t.select && void 0 !== p.data) {
                        if (s && p.data === (null == o ? void 0 : o.data) && t.select === this.selectFn) r = this.selectResult;
                        else try {
                            this.selectFn = t.select, r = t.select(p.data), r = (0, a.oE)(null == s ? void 0 : s.data, r, t), this.selectResult = r, this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                    } else r = p.data;
                    if (void 0 !== t.placeholderData && void 0 === r && "loading" === O) {
                        let e;
                        if (null != s && s.isPlaceholderData && t.placeholderData === (null == u ? void 0 : u.placeholderData)) e = s.data;
                        else if (e = "function" == typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && void 0 !== e) try {
                            e = t.select(e), this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                        void 0 !== e && (O = "success", r = (0, a.oE)(null == s ? void 0 : s.data, e, t), x = !0)
                    }
                    this.selectError && (g = this.selectError, r = this.selectResult, b = Date.now(), O = "error");
                    let C = "fetching" === w,
                        S = "loading" === O,
                        R = "error" === O;
                    return {
                        status: O,
                        fetchStatus: w,
                        isLoading: S,
                        isSuccess: "success" === O,
                        isError: R,
                        isInitialLoading: S && C,
                        data: r,
                        dataUpdatedAt: v,
                        error: g,
                        errorUpdatedAt: b,
                        failureCount: p.fetchFailureCount,
                        failureReason: p.fetchFailureReason,
                        errorUpdateCount: p.errorUpdateCount,
                        isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
                        isFetchedAfterMount: p.dataUpdateCount > c.dataUpdateCount || p.errorUpdateCount > c.errorUpdateCount,
                        isFetching: C,
                        isRefetching: C && !S,
                        isLoadingError: R && 0 === p.dataUpdatedAt,
                        isPaused: "paused" === w,
                        isPlaceholderData: x,
                        isPreviousData: E,
                        isRefetchError: R && 0 !== p.dataUpdatedAt,
                        isStale: m(e, t),
                        refetch: this.refetch,
                        remove: this.remove
                    }
                }
                updateResult(e) {
                    let t = this.currentResult,
                        r = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, a.VS)(r, t)) return;
                    this.currentResult = r;
                    let n = {
                        cache: !0
                    };
                    (null == e ? void 0 : e.listeners) !== !1 && (() => {
                        if (!t) return !0;
                        let {
                            notifyOnChangeProps: e
                        } = this.options, r = "function" == typeof e ? e() : e;
                        if ("all" === r || !r && !this.trackedProps.size) return !0;
                        let n = new Set(null != r ? r : this.trackedProps);
                        return this.options.useErrorBoundary && n.add("error"), Object.keys(this.currentResult).some(e => this.currentResult[e] !== t[e] && n.has(e))
                    })() && (n.listeners = !0), this.notify({ ...n,
                        ...e
                    })
                }
                updateQuery() {
                    let e = this.client.getQueryCache().build(this.client, this.options);
                    if (e === this.currentQuery) return;
                    let t = this.currentQuery;
                    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
                }
                onQueryUpdate(e) {
                    let t = {};
                    "success" === e.type ? t.onSuccess = !e.manual : "error" !== e.type || (0, h.DV)(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
                }
                notify(e) {
                    u.V.batch(() => {
                        var t, r, n, i, s, o, a, u;
                        e.onSuccess ? (null == (t = (r = this.options).onSuccess) || t.call(r, this.currentResult.data), null == (n = (i = this.options).onSettled) || n.call(i, this.currentResult.data, null)) : e.onError && (null == (s = (o = this.options).onError) || s.call(o, this.currentResult.error), null == (a = (u = this.options).onSettled) || a.call(u, void 0, this.currentResult.error)), e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        }), e.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            }

            function d(e, t) {
                return !1 !== t.enabled && !e.state.dataUpdatedAt && !("error" === e.state.status && !1 === t.retryOnMount) || e.state.dataUpdatedAt > 0 && p(e, t, t.refetchOnMount)
            }

            function p(e, t, r) {
                if (!1 !== t.enabled) {
                    let n = "function" == typeof r ? r(e) : r;
                    return "always" === n || !1 !== n && m(e, t)
                }
                return !1
            }

            function y(e, t, r, n) {
                return !1 !== r.enabled && (e !== t || !1 === n.enabled) && (!r.suspense || "error" !== e.state.status) && m(e, r)
            }

            function m(e, t) {
                return e.isStaleByTime(t.staleTime)
            }
            var v = r(23056);
            let g = r(64424).useSyncExternalStore,
                b = v.createContext((n = !1, {
                    clearReset: () => {
                        n = !1
                    },
                    reset: () => {
                        n = !0
                    },
                    isReset: () => n
                })),
                w = () => v.useContext(b);
            var O = r(16716);
            let E = v.createContext(!1),
                x = () => v.useContext(E);

            function C(e, t) {
                return "function" == typeof e ? e(...t) : !!e
            }
            E.Provider;
            let S = (e, t) => {
                    (e.suspense || e.useErrorBoundary) && !t.isReset() && (e.retryOnMount = !1)
                },
                R = e => {
                    v.useEffect(() => {
                        e.clearReset()
                    }, [e])
                },
                P = e => {
                    let {
                        result: t,
                        errorResetBoundary: r,
                        useErrorBoundary: n,
                        query: i
                    } = e;
                    return t.isError && !r.isReset() && !t.isFetching && C(n, [t.error, i])
                },
                q = e => {
                    e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3)
                },
                _ = (e, t) => e.isLoading && e.isFetching && !t,
                I = (e, t, r) => (null == e ? void 0 : e.suspense) && _(t, r),
                T = (e, t, r) => t.fetchOptimistic(e).then(({
                    data: t
                }) => {
                    null == e.onSuccess || e.onSuccess(t), null == e.onSettled || e.onSettled(t, null)
                }).catch(t => {
                    r.clearReset(), null == e.onError || e.onError(t), null == e.onSettled || e.onSettled(void 0, t)
                });

            function k(e, t) {
                let r = (0, O.NL)({
                        context: e.context
                    }),
                    n = x(),
                    i = w(),
                    s = r.defaultQueryOptions(e);
                s._optimisticResults = n ? "isRestoring" : "optimistic", s.onError && (s.onError = u.V.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = u.V.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = u.V.batchCalls(s.onSettled)), q(s), S(s, i), R(i);
                let [o] = v.useState(() => new t(r, s)), a = o.getOptimisticResult(s);
                if (g(v.useCallback(e => {
                        let t = n ? () => void 0 : o.subscribe(u.V.batchCalls(e));
                        return o.updateResult(), t
                    }, [o, n]), () => o.getCurrentResult(), () => o.getCurrentResult()), v.useEffect(() => {
                        o.setOptions(s, {
                            listeners: !1
                        })
                    }, [s, o]), I(s, a, n)) throw T(s, o, i);
                if (P({
                        result: a,
                        errorResetBoundary: i,
                        useErrorBoundary: s.useErrorBoundary,
                        query: o.getCurrentQuery()
                    })) throw a.error;
                return s.notifyOnChangeProps ? a : o.trackResult(a)
            }
            var A = r(26304);
            class Q extends c.l {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    var t;
                    let r = this.options;
                    this.options = this.client.defaultMutationOptions(e), (0, a.VS)(r, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    }), null == (t = this.currentMutation) || t.setOptions(this.options)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.currentMutation) || e.removeObserver(this)
                    }
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    let t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: void 0 !== e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    let e = this.currentMutation ? this.currentMutation.state : (0, A.R)(),
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    u.V.batch(() => {
                        if (this.mutateOptions && this.hasListeners()) {
                            var t, r, n, i, s, o, a, u;
                            e.onSuccess ? (null == (t = (r = this.mutateOptions).onSuccess) || t.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (n = (i = this.mutateOptions).onSettled) || n.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (s = (o = this.mutateOptions).onError) || s.call(o, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (a = (u = this.mutateOptions).onSettled) || a.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        })
                    })
                }
            }

            function M() {}
            var j = r(85111);
            class D extends f {
                constructor(e, t) {
                    super(e, t)
                }
                bindMethods() {
                    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                }
                setOptions(e, t) {
                    super.setOptions({ ...e,
                        behavior: (0, j.Gm)()
                    }, t)
                }
                getOptimisticResult(e) {
                    return e.behavior = (0, j.Gm)(), super.getOptimisticResult(e)
                }
                fetchNextPage({
                    pageParam: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            fetchMore: {
                                direction: "forward",
                                pageParam: e
                            }
                        }
                    })
                }
                fetchPreviousPage({
                    pageParam: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            fetchMore: {
                                direction: "backward",
                                pageParam: e
                            }
                        }
                    })
                }
                createResult(e, t) {
                    var r, n, i, s, o, a;
                    let {
                        state: u
                    } = e, l = super.createResult(e, t), {
                        isFetching: c,
                        isRefetching: h
                    } = l, f = c && (null == (r = u.fetchMeta) ? void 0 : null == (n = r.fetchMore) ? void 0 : n.direction) === "forward", d = c && (null == (i = u.fetchMeta) ? void 0 : null == (s = i.fetchMore) ? void 0 : s.direction) === "backward";
                    return { ...l,
                        fetchNextPage: this.fetchNextPage,
                        fetchPreviousPage: this.fetchPreviousPage,
                        hasNextPage: (0, j.Qy)(t, null == (o = u.data) ? void 0 : o.pages),
                        hasPreviousPage: (0, j.ZF)(t, null == (a = u.data) ? void 0 : a.pages),
                        isFetchingNextPage: f,
                        isFetchingPreviousPage: d,
                        isRefetching: h && !f && !d
                    }
                }
            }
            class F extends c.l {
                constructor(e, t) {
                    super(), this.client = e, this.queries = [], this.result = [], this.observers = [], this.observersMap = {}, t && this.setQueries(t)
                }
                onSubscribe() {
                    1 === this.listeners.size && this.observers.forEach(e => {
                        e.subscribe(t => {
                            this.onUpdate(e, t)
                        })
                    })
                }
                onUnsubscribe() {
                    this.listeners.size || this.destroy()
                }
                destroy() {
                    this.listeners = new Set, this.observers.forEach(e => {
                        e.destroy()
                    })
                }
                setQueries(e, t) {
                    this.queries = e, u.V.batch(() => {
                        let e = this.observers,
                            r = this.findMatchingObservers(this.queries);
                        r.forEach(e => e.observer.setOptions(e.defaultedQueryOptions, t));
                        let n = r.map(e => e.observer),
                            i = Object.fromEntries(n.map(e => [e.options.queryHash, e])),
                            s = n.map(e => e.getCurrentResult()),
                            o = n.some((t, r) => t !== e[r]);
                        (e.length !== n.length || o) && (this.observers = n, this.observersMap = i, this.result = s, this.hasListeners() && ((0, a.e5)(e, n).forEach(e => {
                            e.destroy()
                        }), (0, a.e5)(n, e).forEach(e => {
                            e.subscribe(t => {
                                this.onUpdate(e, t)
                            })
                        }), this.notify()))
                    })
                }
                getCurrentResult() {
                    return this.result
                }
                getQueries() {
                    return this.observers.map(e => e.getCurrentQuery())
                }
                getObservers() {
                    return this.observers
                }
                getOptimisticResult(e) {
                    return this.findMatchingObservers(e).map(e => e.observer.getOptimisticResult(e.defaultedQueryOptions))
                }
                findMatchingObservers(e) {
                    let t = this.observers,
                        r = new Map(t.map(e => [e.options.queryHash, e])),
                        n = e.map(e => this.client.defaultQueryOptions(e)),
                        i = n.flatMap(e => {
                            let t = r.get(e.queryHash);
                            return null != t ? [{
                                defaultedQueryOptions: e,
                                observer: t
                            }] : []
                        }),
                        s = new Set(i.map(e => e.defaultedQueryOptions.queryHash)),
                        o = n.filter(e => !s.has(e.queryHash)),
                        a = new Set(i.map(e => e.observer)),
                        u = t.filter(e => !a.has(e)),
                        l = e => {
                            let t = this.client.defaultQueryOptions(e),
                                r = this.observersMap[t.queryHash];
                            return null != r ? r : new f(this.client, t)
                        },
                        c = o.map((e, t) => {
                            if (e.keepPreviousData) {
                                let r = u[t];
                                if (void 0 !== r) return {
                                    defaultedQueryOptions: e,
                                    observer: r
                                }
                            }
                            return {
                                defaultedQueryOptions: e,
                                observer: l(e)
                            }
                        });
                    return i.concat(c).sort((e, t) => n.indexOf(e.defaultedQueryOptions) - n.indexOf(t.defaultedQueryOptions))
                }
                onUpdate(e, t) {
                    let r = this.observers.indexOf(e); - 1 !== r && (this.result = (0, a.Rc)(this.result, r, t), this.notify())
                }
                notify() {
                    u.V.batch(() => {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.result)
                        })
                    })
                }
            }

            function L(e, t) {
                return e.length ? void 0 === t ? [e] : [e, t] : []
            }
            let N = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
                U = (0, v.createContext)(null);

            function K(e, t) {
                let [r, n] = e;
                return [r, n, t ? .trpc]
            }

            function V(e) {
                let {
                    path: t
                } = e;
                return (0, v.useMemo)(() => ({
                    path: t
                }), [t])
            }

            function H(e) {
                var t;
                return t = function(e) {
                    let t = (e ? .overrides ? ? e ? .unstable_overrides) ? .useMutation ? .onSuccess ? ? (e => e.originalFn()),
                        r = e ? .context ? ? U,
                        n = e ? .reactQueryContext;

                    function l() {
                        return v.useContext(r)
                    }

                    function c(e, t, r) {
                        let {
                            queryClient: n,
                            ssrState: i
                        } = l();
                        return i && "mounted" !== i && n.getQueryCache().find(o(e, t)) ? .state.status === "error" ? {
                            retryOnMount: !1,
                            ...r
                        } : r
                    }
                    return {
                        Provider: e => {
                            let {
                                abortOnUnmount: t = !1,
                                client: n,
                                queryClient: i,
                                ssrContext: s
                            } = e, [a, u] = (0, v.useState)(e.ssrState ? ? !1);
                            return (0, v.useEffect)(() => {
                                u(e => !!e && "mounted")
                            }, []), v.createElement(r.Provider, {
                                value: {
                                    abortOnUnmount: t,
                                    queryClient: i,
                                    client: n,
                                    ssrContext: s ? ? null,
                                    ssrState: a,
                                    fetchQuery: (0, v.useCallback)((e, t) => i.fetchQuery({ ...t,
                                        queryKey: o(e, "query"),
                                        queryFn: () => n.query(...K(e, t))
                                    }), [n, i]),
                                    fetchInfiniteQuery: (0, v.useCallback)((e, t) => i.fetchInfiniteQuery({ ...t,
                                        queryKey: o(e, "infinite"),
                                        queryFn: ({
                                            pageParam: r
                                        }) => {
                                            let [i, s] = e, o = { ...s,
                                                cursor: r
                                            };
                                            return n.query(...K([i, o], t))
                                        }
                                    }), [n, i]),
                                    prefetchQuery: (0, v.useCallback)((e, t) => i.prefetchQuery({ ...t,
                                        queryKey: o(e, "query"),
                                        queryFn: () => n.query(...K(e, t))
                                    }), [n, i]),
                                    prefetchInfiniteQuery: (0, v.useCallback)((e, t) => i.prefetchInfiniteQuery({ ...t,
                                        queryKey: o(e, "infinite"),
                                        queryFn: ({
                                            pageParam: r
                                        }) => {
                                            let [i, s] = e, o = { ...s,
                                                cursor: r
                                            };
                                            return n.query(...K([i, o], t))
                                        }
                                    }), [n, i]),
                                    ensureQueryData: (0, v.useCallback)((e, t) => i.ensureQueryData({ ...t,
                                        queryKey: o(e, "query"),
                                        queryFn: () => n.query(...K(e, t))
                                    }), [n, i]),
                                    invalidateQueries: (0, v.useCallback)((e, t, r) => i.invalidateQueries({ ...t,
                                        queryKey: o(e, "any")
                                    }, r), [i]),
                                    resetQueries: (0, v.useCallback)((...e) => {
                                        let [t, r, n] = e;
                                        return i.resetQueries({ ...r,
                                            queryKey: o(t, "any")
                                        }, n)
                                    }, [i]),
                                    refetchQueries: (0, v.useCallback)((...e) => {
                                        let [t, r, n] = e;
                                        return i.refetchQueries({ ...r,
                                            queryKey: o(t, "any")
                                        }, n)
                                    }, [i]),
                                    cancelQuery: (0, v.useCallback)(e => i.cancelQueries({
                                        queryKey: o(e, "any")
                                    }), [i]),
                                    setQueryData: (0, v.useCallback)((...e) => {
                                        let [t, ...r] = e;
                                        return i.setQueryData(o(t, "query"), ...r)
                                    }, [i]),
                                    getQueryData: (0, v.useCallback)((...e) => {
                                        let [t, ...r] = e;
                                        return i.getQueryData(o(t, "query"), ...r)
                                    }, [i]),
                                    setInfiniteQueryData: (0, v.useCallback)((...e) => {
                                        let [t, ...r] = e;
                                        return i.setQueryData(o(t, "infinite"), ...r)
                                    }, [i]),
                                    getInfiniteQueryData: (0, v.useCallback)((...e) => {
                                        let [t, ...r] = e;
                                        return i.getQueryData(o(t, "infinite"), ...r)
                                    }, [i])
                                }
                            }, e.children)
                        },
                        createClient: e => (0, i.BJ)(e),
                        useContext: l,
                        useUtils: l,
                        useQuery: function(t, r) {
                            var i;
                            let s = l();
                            if (!s) throw Error("Unable to retrieve application context. Did you forget to wrap your App inside `withTRPC` HoC?");
                            let {
                                abortOnUnmount: u,
                                client: h,
                                ssrState: d,
                                queryClient: p,
                                prefetchQuery: y
                            } = s, m = p.getQueryDefaults(o(t, "query"));
                            "undefined" != typeof window || "prepass" !== d || r ? .trpc ? .ssr === !1 || (r ? .enabled ? ? m ? .enabled) === !1 || p.getQueryCache().find(o(t, "query")) || y(t, r);
                            let v = c(t, "query", { ...m,
                                    ...r
                                }),
                                g = r ? .trpc ? .abortOnUnmount ? ? e ? .abortOnUnmount ? ? u,
                                b = (i = { ...v,
                                    queryKey: o(t, "query"),
                                    queryFn: e => {
                                        let r = { ...v,
                                            trpc: { ...v ? .trpc,
                                                ...g ? {
                                                    signal: e.signal
                                                } : {}
                                            }
                                        };
                                        return h.query(...K(t, r))
                                    },
                                    context: n
                                }, k((0, a._v)(i, void 0, void 0), f));
                            return b.trpc = V({
                                path: t[0]
                            }), b
                        },
                        useQueries: (e, t) => {
                            let {
                                ssrState: r,
                                queryClient: n,
                                prefetchQuery: i,
                                client: a
                            } = l(), c = e((0, s.IX)(e => {
                                let t = e.path.join("."),
                                    [r, n] = e.args;
                                return {
                                    queryKey: L(t, r),
                                    queryFn: () => a.query(t, r, n ? .trpc),
                                    ...n
                                }
                            }));
                            if ("undefined" == typeof window && "prepass" === r)
                                for (let e of c) e.trpc ? .ssr === !1 || n.getQueryCache().find(o(e.queryKey, "query")) || i(e.queryKey, e);
                            return function(e) {
                                let {
                                    queries: t,
                                    context: r
                                } = e, n = (0, O.NL)({
                                    context: r
                                }), i = x(), s = w(), o = v.useMemo(() => t.map(e => {
                                    let t = n.defaultQueryOptions(e);
                                    return t._optimisticResults = i ? "isRestoring" : "optimistic", t
                                }), [t, n, i]);
                                o.forEach(e => {
                                    q(e), S(e, s)
                                }), R(s);
                                let [a] = v.useState(() => new F(n, o)), l = a.getOptimisticResult(o);
                                g(v.useCallback(e => i ? () => void 0 : a.subscribe(u.V.batchCalls(e)), [a, i]), () => a.getCurrentResult(), () => a.getCurrentResult()), v.useEffect(() => {
                                    a.setQueries(o, {
                                        listeners: !1
                                    })
                                }, [o, a]);
                                let c = l.some((e, t) => I(o[t], e, i)) ? l.flatMap((e, t) => {
                                    let r = o[t],
                                        n = a.getObservers()[t];
                                    if (r && n) {
                                        if (I(r, e, i)) return T(r, n, s);
                                        _(e, i) && T(r, n, s)
                                    }
                                    return []
                                }) : [];
                                if (c.length > 0) throw Promise.all(c);
                                let h = a.getQueries(),
                                    f = l.find((e, t) => {
                                        var r, n;
                                        return P({
                                            result: e,
                                            errorResetBoundary: s,
                                            useErrorBoundary: null != (r = null == (n = o[t]) ? void 0 : n.useErrorBoundary) && r,
                                            query: h[t]
                                        })
                                    });
                                if (null != f && f.error) throw f.error;
                                return l
                            }({
                                queries: c.map(e => ({ ...e,
                                    queryKey: o(e.queryKey, "query")
                                })),
                                context: t
                            })
                        },
                        useMutation: function(e, r) {
                            let {
                                client: i
                            } = l(), s = (0, O.NL)({
                                context: n
                            }), o = Array.isArray(e) ? e[0] : e, c = s.getMutationDefaults([o.split(".")]), h = function(e, t, r) {
                                let n = (0, a.lV)(e, void 0, void 0),
                                    i = (0, O.NL)({
                                        context: n.context
                                    }),
                                    [s] = v.useState(() => new Q(i, n));
                                v.useEffect(() => {
                                    s.setOptions(n)
                                }, [s, n]);
                                let o = g(v.useCallback(e => s.subscribe(u.V.batchCalls(e)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult()),
                                    l = v.useCallback((e, t) => {
                                        s.mutate(e, t).catch(M)
                                    }, [s]);
                                if (o.error && C(s.options.useErrorBoundary, [o.error])) throw o.error;
                                return { ...o,
                                    mutate: l,
                                    mutateAsync: o.mutate
                                }
                            }({ ...r,
                                mutationKey: [o.split(".")],
                                mutationFn: e => i.mutation(...K([o, e], r)),
                                context: n,
                                onSuccess: (...e) => t({
                                    originalFn: () => r ? .onSuccess ? .(...e) ? ? c ? .onSuccess ? .(...e),
                                    queryClient: s,
                                    meta: r ? .meta ? ? c ? .meta ? ? {}
                                })
                            });
                            return h.trpc = V({
                                path: o
                            }), h
                        },
                        useSubscription: /* istanbul ignore next -- @preserve */ function(e, t) {
                            let r = t ? .enabled ? ? !0,
                                n = (0, a.yF)(e),
                                {
                                    client: i
                                } = l(),
                                s = (0, v.useRef)(t);
                            s.current = t, (0, v.useEffect)(() => {
                                if (!r) return;
                                let [t, n] = e, o = !1, a = i.subscription(t, n ? ? void 0, {
                                    onStarted: () => {
                                        o || s.current.onStarted ? .()
                                    },
                                    onData: e => {
                                        o || s.current.onData(e)
                                    },
                                    onError: e => {
                                        o || s.current.onError ? .(e)
                                    }
                                });
                                return () => {
                                    o = !0, a.unsubscribe()
                                }
                            }, [n, r])
                        },
                        useDehydratedState: (e, t) => (0, v.useMemo)(() => t ? e.runtime.transformer.deserialize(t) : t, [t, e]),
                        useInfiniteQuery: function(e, t) {
                            var r;
                            let [i, s] = e, {
                                client: u,
                                ssrState: h,
                                prefetchInfiniteQuery: f,
                                queryClient: d,
                                abortOnUnmount: p
                            } = l(), y = d.getQueryDefaults(o(e, "infinite"));
                            "undefined" != typeof window || "prepass" !== h || t ? .trpc ? .ssr === !1 || (t ? .enabled ? ? y ? .enabled) === !1 || d.getQueryCache().find(o(e, "infinite")) || f(e, { ...y,
                                ...t
                            });
                            let m = c(e, "infinite", { ...y,
                                    ...t
                                }),
                                v = t ? .trpc ? .abortOnUnmount ? ? p,
                                g = (r = { ...m,
                                    queryKey: o(e, "infinite"),
                                    queryFn: e => {
                                        let r = { ...m,
                                                trpc: { ...m ? .trpc,
                                                    ...v ? {
                                                        signal: e.signal
                                                    } : {}
                                                }
                                            },
                                            n = { ...s ? ? {},
                                                cursor : e.pageParam ? ? t ? .initialCursor
                                            };
                                        return u.query(...K([i, n], r))
                                    },
                                    context: n
                                }, k((0, a._v)(r, void 0, void 0), D));
                            return g.trpc = V({
                                path: i
                            }), g
                        }
                    }
                }(e), (0, s.yh)(e => "useContext" === e || "useUtils" === e ? () => {
                    let e = t.useUtils();
                    return (0, v.useMemo)(() => (0, s.yh)(t => "client" === t ? (0, i.Bm)(e.client) : N.includes(t) ? e[t] : (0, s.IX)(({
                        path: r,
                        args: n
                    }) => {
                        let i = [t, ...r],
                            s = i.pop(),
                            o = i.join("."),
                            {
                                queryKey: a,
                                rest: u,
                                updater: l
                            } = (e => {
                                if (["setData", "setInfiniteData"].includes(e)) {
                                    let [e, t, ...r] = n;
                                    return {
                                        queryKey: L(o, e),
                                        updater: t,
                                        rest: r
                                    }
                                }
                                let [t, ...r] = n;
                                return {
                                    queryKey: L(o, t),
                                    rest: r
                                }
                            })(s);
                        return ({
                            fetch: () => e.fetchQuery(a, ...u),
                            fetchInfinite: () => e.fetchInfiniteQuery(a, ...u),
                            prefetch: () => e.prefetchQuery(a, ...u),
                            prefetchInfinite: () => e.prefetchInfiniteQuery(a, ...u),
                            ensureData: () => e.ensureQueryData(a, ...u),
                            invalidate: () => e.invalidateQueries(a, ...u),
                            reset: () => e.resetQueries(a, ...u),
                            refetch: () => e.refetchQueries(a, ...u),
                            cancel: () => e.cancelQuery(a, ...u),
                            setData: () => {
                                e.setQueryData(a, l, ...u)
                            },
                            setInfiniteData: () => {
                                e.setInfiniteQueryData(a, l, ...u)
                            },
                            getData: () => e.getQueryData(a),
                            getInfiniteData: () => e.getInfiniteQueryData(a)
                        })[s]()
                    })), [e])
                } : t.hasOwnProperty(e) ? t[e] : (0, s.IX)(r => {
                    let n = r.args,
                        i = [e, ...r.path],
                        s = i.pop(),
                        a = i.join(".");
                    if ("useMutation" === s) return t[s](a, ...n);
                    let [u, ...l] = n, c = L(a, u);
                    if ("getQueryKey" === s) return o(c, l[0] ? ? "any");
                    if ("_def" === s) return {
                        path: i
                    };
                    if (s.startsWith("useSuspense")) {
                        let e = l[0] || {},
                            r = t["useSuspenseQuery" === s ? "useQuery" : "useInfiniteQuery"](c, { ...e,
                                suspense: !0,
                                enabled: !0
                            });
                        return [r.data, r]
                    }
                    return t[s](c, ...l)
                }))
            }
        },
        60214: function(e, t, r) {
            "use strict";

            function n(e) {
                let t = Object.create(null);
                for (let r in e) t[e[r]] = r;
                return t
            }
            r.d(t, {
                yh: function() {
                    return a
                },
                IX: function() {
                    return o
                },
                sZ: function() {
                    return l
                }
            });
            let i = {
                PARSE_ERROR: -32700,
                BAD_REQUEST: -32600,
                INTERNAL_SERVER_ERROR: -32603,
                NOT_IMPLEMENTED: -32603,
                UNAUTHORIZED: -32001,
                FORBIDDEN: -32003,
                NOT_FOUND: -32004,
                METHOD_NOT_SUPPORTED: -32005,
                TIMEOUT: -32008,
                CONFLICT: -32009,
                PRECONDITION_FAILED: -32012,
                PAYLOAD_TOO_LARGE: -32013,
                UNPROCESSABLE_CONTENT: -32022,
                TOO_MANY_REQUESTS: -32029,
                CLIENT_CLOSED_REQUEST: -32099
            };
            n(i), n(i);
            let s = () => {},
                o = e => (function e(t, r) {
                    return new Proxy(s, {
                        get(n, i) {
                            if ("string" == typeof i && "then" !== i) return e(t, [...r, i])
                        },
                        apply(e, n, i) {
                            let s = "apply" === r[r.length - 1];
                            return t({
                                args: s ? i.length >= 2 ? i[1] : [] : i,
                                path: s ? r.slice(0, -1) : r
                            })
                        }
                    })
                })(e, []),
                a = e => new Proxy(s, {
                    get(t, r) {
                        if ("string" == typeof r && "then" !== r) return e(r)
                    }
                });
            class u extends Error {}

            function l(e) {
                if (e instanceof Error) return e;
                let t = typeof e;
                if ("undefined" !== t && "function" !== t && null !== e) {
                    if ("object" !== t) return Error(String(e));
                    if (e && !Array.isArray(e) && "object" == typeof e) {
                        let t = new u;
                        for (let r in e) t[r] = e[r];
                        return t
                    }
                }
            }
        },
        7109: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZP: function() {
                    return $
                }
            });
            class n {
                constructor() {
                    this.keyToValue = new Map, this.valueToKey = new Map
                }
                set(e, t) {
                    this.keyToValue.set(e, t), this.valueToKey.set(t, e)
                }
                getByKey(e) {
                    return this.keyToValue.get(e)
                }
                getByValue(e) {
                    return this.valueToKey.get(e)
                }
                clear() {
                    this.keyToValue.clear(), this.valueToKey.clear()
                }
            }
            class i {
                constructor(e) {
                    this.generateIdentifier = e, this.kv = new n
                }
                register(e, t) {
                    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e))
                }
                clear() {
                    this.kv.clear()
                }
                getIdentifier(e) {
                    return this.kv.getByValue(e)
                }
                getValue(e) {
                    return this.kv.getByKey(e)
                }
            }
            class s extends i {
                constructor() {
                    super(e => e.name), this.classToAllowedProps = new Map
                }
                register(e, t) {
                    "object" == typeof t ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t)
                }
                getAllowedProps(e) {
                    return this.classToAllowedProps.get(e)
                }
            }

            function o(e, t) {
                Object.entries(e).forEach(([e, r]) => t(r, e))
            }

            function a(e, t) {
                return -1 !== e.indexOf(t)
            }

            function u(e, t) {
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (t(n)) return n
                }
            }
            class l {
                constructor() {
                    this.transfomers = {}
                }
                register(e) {
                    this.transfomers[e.name] = e
                }
                findApplicable(e) {
                    return function(e, t) {
                        let r = function(e) {
                            if ("values" in Object) return Object.values(e);
                            let t = [];
                            for (let r in e) e.hasOwnProperty(r) && t.push(e[r]);
                            return t
                        }(e);
                        if ("find" in r) return r.find(t);
                        for (let e = 0; e < r.length; e++) {
                            let n = r[e];
                            if (t(n)) return n
                        }
                    }(this.transfomers, t => t.isApplicable(e))
                }
                findByName(e) {
                    return this.transfomers[e]
                }
            }
            let c = e => Object.prototype.toString.call(e).slice(8, -1),
                h = e => void 0 === e,
                f = e => null === e,
                d = e => "object" == typeof e && null !== e && e !== Object.prototype && (null === Object.getPrototypeOf(e) || Object.getPrototypeOf(e) === Object.prototype),
                p = e => d(e) && 0 === Object.keys(e).length,
                y = e => Array.isArray(e),
                m = e => "string" == typeof e,
                v = e => "number" == typeof e && !isNaN(e),
                g = e => "boolean" == typeof e,
                b = e => e instanceof Map,
                w = e => e instanceof Set,
                O = e => "Symbol" === c(e),
                E = e => "number" == typeof e && isNaN(e),
                x = e => g(e) || f(e) || h(e) || v(e) || m(e) || O(e),
                C = e => e === 1 / 0 || e === -1 / 0,
                S = e => e.replace(/\./g, "\\."),
                R = e => e.map(String).map(S).join("."),
                P = e => {
                    let t = [],
                        r = "";
                    for (let n = 0; n < e.length; n++) {
                        let i = e.charAt(n);
                        if ("\\" === i && "." === e.charAt(n + 1)) {
                            r += ".", n++;
                            continue
                        }
                        if ("." === i) {
                            t.push(r), r = "";
                            continue
                        }
                        r += i
                    }
                    let n = r;
                    return t.push(n), t
                };

            function q(e, t, r, n) {
                return {
                    isApplicable: e,
                    annotation: t,
                    transform: r,
                    untransform: n
                }
            }
            let _ = [q(h, "undefined", () => null, () => void 0), q(e => "bigint" == typeof e, "bigint", e => e.toString(), e => "undefined" != typeof BigInt ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)), q(e => e instanceof Date && !isNaN(e.valueOf()), "Date", e => e.toISOString(), e => new Date(e)), q(e => e instanceof Error, "Error", (e, t) => {
                let r = {
                    name: e.name,
                    message: e.message
                };
                return t.allowedErrorProps.forEach(t => {
                    r[t] = e[t]
                }), r
            }, (e, t) => {
                let r = Error(e.message);
                return r.name = e.name, r.stack = e.stack, t.allowedErrorProps.forEach(t => {
                    r[t] = e[t]
                }), r
            }), q(e => e instanceof RegExp, "regexp", e => "" + e, e => new RegExp(e.slice(1, e.lastIndexOf("/")), e.slice(e.lastIndexOf("/") + 1))), q(w, "set", e => [...e.values()], e => new Set(e)), q(b, "map", e => [...e.entries()], e => new Map(e)), q(e => E(e) || C(e), "number", e => E(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number), q(e => 0 === e && 1 / e == -1 / 0, "number", () => "-0", Number), q(e => e instanceof URL, "URL", e => e.toString(), e => new URL(e))];

            function I(e, t, r, n) {
                return {
                    isApplicable: e,
                    annotation: t,
                    transform: r,
                    untransform: n
                }
            }
            let T = I((e, t) => !!O(e) && !!t.symbolRegistry.getIdentifier(e), (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], e => e.description, (e, t, r) => {
                    let n = r.symbolRegistry.getValue(t[1]);
                    if (!n) throw Error("Trying to deserialize unknown symbol");
                    return n
                }),
                k = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce((e, t) => (e[t.name] = t, e), {}),
                A = I(e => ArrayBuffer.isView(e) && !(e instanceof DataView), e => ["typed-array", e.constructor.name], e => [...e], (e, t) => {
                    let r = k[t[1]];
                    if (!r) throw Error("Trying to deserialize unknown typed array");
                    return new r(e)
                });

            function Q(e, t) {
                return !!e ? .constructor && !!t.classRegistry.getIdentifier(e.constructor)
            }
            let M = I(Q, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
                    let r = t.classRegistry.getAllowedProps(e.constructor);
                    if (!r) return { ...e
                    };
                    let n = {};
                    return r.forEach(t => {
                        n[t] = e[t]
                    }), n
                }, (e, t, r) => {
                    let n = r.classRegistry.getValue(t[1]);
                    if (!n) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
                    return Object.assign(Object.create(n.prototype), e)
                }),
                j = I((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, r) => {
                    let n = r.customTransformerRegistry.findByName(t[1]);
                    if (!n) throw Error("Trying to deserialize unknown custom value");
                    return n.deserialize(e)
                }),
                D = [M, T, j, A],
                F = (e, t) => {
                    let r = u(D, r => r.isApplicable(e, t));
                    if (r) return {
                        value: r.transform(e, t),
                        type: r.annotation(e, t)
                    };
                    let n = u(_, r => r.isApplicable(e, t));
                    if (n) return {
                        value: n.transform(e, t),
                        type: n.annotation
                    }
                },
                L = {};
            _.forEach(e => {
                L[e.annotation] = e
            });
            let N = (e, t, r) => {
                    if (y(t)) switch (t[0]) {
                        case "symbol":
                            return T.untransform(e, t, r);
                        case "class":
                            return M.untransform(e, t, r);
                        case "custom":
                            return j.untransform(e, t, r);
                        case "typed-array":
                            return A.untransform(e, t, r);
                        default:
                            throw Error("Unknown transformation: " + t)
                    } else {
                        let n = L[t];
                        if (!n) throw Error("Unknown transformation: " + t);
                        return n.untransform(e, r)
                    }
                },
                U = (e, t) => {
                    if (t > e.size) throw Error("index out of bounds");
                    let r = e.keys();
                    for (; t > 0;) r.next(), t--;
                    return r.next().value
                };

            function K(e) {
                if (a(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
                if (a(e, "prototype")) throw Error("prototype is not allowed as a property");
                if (a(e, "constructor")) throw Error("constructor is not allowed as a property")
            }
            let V = (e, t) => {
                    K(t);
                    for (let r = 0; r < t.length; r++) {
                        let n = t[r];
                        if (w(e)) e = U(e, +n);
                        else if (b(e)) {
                            let i = +n,
                                s = 0 == +t[++r] ? "key" : "value",
                                o = U(e, i);
                            switch (s) {
                                case "key":
                                    e = o;
                                    break;
                                case "value":
                                    e = e.get(o)
                            }
                        } else e = e[n]
                    }
                    return e
                },
                H = (e, t, r) => {
                    if (K(t), 0 === t.length) return r(e);
                    let n = e;
                    for (let e = 0; e < t.length - 1; e++) {
                        let r = t[e];
                        if (y(n)) n = n[+r];
                        else if (d(n)) n = n[r];
                        else if (w(n)) n = U(n, +r);
                        else if (b(n)) {
                            if (e === t.length - 2) break;
                            let i = +r,
                                s = 0 == +t[++e] ? "key" : "value",
                                o = U(n, i);
                            switch (s) {
                                case "key":
                                    n = o;
                                    break;
                                case "value":
                                    n = n.get(o)
                            }
                        }
                    }
                    let i = t[t.length - 1];
                    if (y(n) ? n[+i] = r(n[+i]) : d(n) && (n[i] = r(n[i])), w(n)) {
                        let e = U(n, +i),
                            t = r(e);
                        e !== t && (n.delete(e), n.add(t))
                    }
                    if (b(n)) {
                        let e = U(n, +t[t.length - 2]);
                        switch (0 == +i ? "key" : "value") {
                            case "key":
                                {
                                    let t = r(e);n.set(t, n.get(e)),
                                    t !== e && n.delete(e);
                                    break
                                }
                            case "value":
                                n.set(e, r(n.get(e)))
                        }
                    }
                    return e
                },
                z = (e, t) => d(e) || y(e) || b(e) || w(e) || Q(e, t),
                G = (e, t, r, n, i = [], s = [], u = new Map) => {
                    let l = x(e);
                    if (!l) {
                        ! function(e, t, r) {
                            let n = r.get(e);
                            n ? n.push(t) : r.set(e, [t])
                        }(e, i, t);
                        let r = u.get(e);
                        if (r) return n ? {
                            transformedValue: null
                        } : r
                    }
                    if (!z(e, r)) {
                        let t = F(e, r),
                            n = t ? {
                                transformedValue: t.value,
                                annotations: [t.type]
                            } : {
                                transformedValue: e
                            };
                        return l || u.set(e, n), n
                    }
                    if (a(s, e)) return {
                        transformedValue: null
                    };
                    let c = F(e, r),
                        h = c ? .value ? ? e,
                        f = y(h) ? [] : {},
                        m = {};
                    o(h, (a, l) => {
                        if ("__proto__" === l || "constructor" === l || "prototype" === l) throw Error(`Detected property ${l}. This is a prototype pollution risk, please remove it from your object.`);
                        let c = G(a, t, r, n, [...i, l], [...s, e], u);
                        f[l] = c.transformedValue, y(c.annotations) ? m[l] = c.annotations : d(c.annotations) && o(c.annotations, (e, t) => {
                            m[S(l) + "." + t] = e
                        })
                    });
                    let v = p(m) ? {
                        transformedValue: f,
                        annotations: c ? [c.type] : void 0
                    } : {
                        transformedValue: f,
                        annotations: c ? [c.type, m] : m
                    };
                    return l || u.set(e, v), v
                };

            function B(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }

            function Z(e) {
                return "Array" === B(e)
            }
            class $ {
                constructor({
                    dedupe: e = !1
                } = {}) {
                    this.classRegistry = new s, this.symbolRegistry = new i(e => e.description ? ? ""), this.customTransformerRegistry = new l, this.allowedErrorProps = [], this.dedupe = e
                }
                serialize(e) {
                    let t = new Map,
                        r = G(e, t, this, this.dedupe),
                        n = {
                            json: r.transformedValue
                        };
                    r.annotations && (n.meta = { ...n.meta,
                        values: r.annotations
                    });
                    let i = function(e, t) {
                        let r;
                        let n = {};
                        return (e.forEach(e => {
                            if (e.length <= 1) return;
                            t || (e = e.map(e => e.map(String)).sort((e, t) => e.length - t.length));
                            let [i, ...s] = e;
                            0 === i.length ? r = s.map(R) : n[R(i)] = s.map(R)
                        }), r) ? p(n) ? [r] : [r, n] : p(n) ? void 0 : n
                    }(t, this.dedupe);
                    return i && (n.meta = { ...n.meta,
                        referentialEqualities: i
                    }), n
                }
                deserialize(e) {
                    let {
                        json: t,
                        meta: r
                    } = e, n = function e(t, r = {}) {
                        return Z(t) ? t.map(t => e(t, r)) : ! function(e) {
                            if ("Object" !== B(e)) return !1;
                            let t = Object.getPrototypeOf(e);
                            return !!t && t.constructor === Object && t === Object.prototype
                        }(t) ? t : [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)].reduce((n, i) => {
                            if (Z(r.props) && !r.props.includes(i)) return n;
                            let s = e(t[i], r);
                            return ! function(e, t, r, n, i) {
                                let s = ({}).propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable";
                                "enumerable" === s && (e[t] = r), i && "nonenumerable" === s && Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                })
                            }(n, i, s, t, r.nonenumerable), n
                        }, {})
                    }(t);
                    if (r ? .values) {
                        var i, s, a;
                        i = n, s = r.values, a = this,
                            function e(t, r, n = []) {
                                if (!t) return;
                                if (!y(t)) {
                                    o(t, (t, i) => e(t, r, [...n, ...P(i)]));
                                    return
                                }
                                let [i, s] = t;
                                s && o(s, (t, i) => {
                                    e(t, r, [...n, ...P(i)])
                                }), r(i, n)
                            }(s, (e, t) => {
                                i = H(i, t, t => N(t, e, a))
                            }), n = i
                    }
                    return r ? .referentialEqualities && (n = function(e, t) {
                        function r(t, r) {
                            let n = V(e, P(r));
                            t.map(P).forEach(t => {
                                e = H(e, t, () => n)
                            })
                        }
                        if (y(t)) {
                            let [n, i] = t;
                            n.forEach(t => {
                                e = H(e, P(t), () => e)
                            }), i && o(i, r)
                        } else o(t, r);
                        return e
                    }(n, r.referentialEqualities)), n
                }
                stringify(e) {
                    return JSON.stringify(this.serialize(e))
                }
                parse(e) {
                    return this.deserialize(JSON.parse(e))
                }
                registerClass(e, t) {
                    this.classRegistry.register(e, t)
                }
                registerSymbol(e, t) {
                    this.symbolRegistry.register(e, t)
                }
                registerCustom(e, t) {
                    this.customTransformerRegistry.register({
                        name: t,
                        ...e
                    })
                }
                allowErrorProps(...e) {
                    this.allowedErrorProps.push(...e)
                }
            }
            $.defaultInstance = new $, $.serialize = $.defaultInstance.serialize.bind($.defaultInstance), $.deserialize = $.defaultInstance.deserialize.bind($.defaultInstance), $.stringify = $.defaultInstance.stringify.bind($.defaultInstance), $.parse = $.defaultInstance.parse.bind($.defaultInstance), $.registerClass = $.defaultInstance.registerClass.bind($.defaultInstance), $.registerSymbol = $.defaultInstance.registerSymbol.bind($.defaultInstance), $.registerCustom = $.defaultInstance.registerCustom.bind($.defaultInstance), $.allowErrorProps = $.defaultInstance.allowErrorProps.bind($.defaultInstance), $.serialize, $.deserialize, $.stringify, $.parse, $.registerClass, $.registerCustom, $.registerSymbol, $.allowErrorProps
        }
    }
]);