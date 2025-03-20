"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [915], {
        56294: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return r
                }
            });

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(null, arguments)
            }
        },
        51983: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n(56294),
                o = n(67482),
                l = n(84882),
                i = n(23056),
                a = n(11555),
                u = (0, i.forwardRef)(function(e, t) {
                    let {
                        defaultLocale: n,
                        href: u,
                        locale: c,
                        localeCookie: f,
                        onClick: s,
                        prefetch: d,
                        unprefixed: h,
                        ...p
                    } = e, v = (0, a.Z)(), g = null != c && c !== v, y = c || v, m = function() {
                        let [e, t] = (0, i.useState)();
                        return (0, i.useEffect)(() => {
                            t(window.location.host)
                        }, []), e
                    }(), b = m && h && (h.domains[m] === y || !Object.keys(h.domains).includes(m) && v === n && !c) ? h.pathname : u, w = (0, l.usePathname)();
                    return g && (d && console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"), d = !1), i.createElement(o.default, (0, r.g)({
                        ref: t,
                        href: b,
                        hrefLang: g ? c : void 0,
                        onClick: function(e) {
                            (function(e, t, n, r) {
                                if (!e || !(r !== n && null != r) || !t) return;
                                let o = function(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
                                        return "/" === e ? t : t.replace(e, "")
                                    }(t),
                                    {
                                        name: l,
                                        ...i
                                    } = e;
                                i.path || (i.path = "" !== o ? o : "/");
                                let a = "".concat(l, "=").concat(r, ";");
                                for (let [e, t] of Object.entries(i)) a += "".concat("maxAge" === e ? "max-age" : e), "boolean" != typeof t && (a += "=" + t), a += ";";
                                document.cookie = a
                            })(f, w, v, c), s && s(e)
                        },
                        prefetch: d
                    }, p))
                })
        },
        98387: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n(56294),
                o = n(84882),
                l = n(23056),
                i = n(11555);

            function a(e) {
                return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && ! function(e) {
                    let t = "object" == typeof e ? e.pathname : e;
                    return null != t && !t.startsWith("/")
                }(e)
            }

            function u(e, t) {
                let n;
                return "string" == typeof e ? n = c(t, e) : (n = { ...e
                }, e.pathname && (n.pathname = c(t, e.pathname))), n
            }

            function c(e, t) {
                let n = e;
                return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), n += t
            }
            n(50180);
            var f = n(51983);
            let s = (0, l.forwardRef)(function(e, t) {
                let {
                    href: n,
                    locale: c,
                    localeCookie: s,
                    localePrefixMode: d,
                    prefix: h,
                    ...p
                } = e, v = (0, o.usePathname)(), g = (0, i.Z)(), y = c !== g, [m, b] = (0, l.useState)(() => a(n) && ("never" !== d || y) ? u(n, h) : n);
                return (0, l.useEffect)(() => {
                    v && b(function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            o = arguments.length > 4 ? arguments[4] : void 0;
                        if (!a(e)) return e;
                        let l = r === o || r.startsWith("".concat(o, "/"));
                        return (t !== n || l) && null != o ? u(e, o) : e
                    }(n, c, g, v, h))
                }, [g, n, c, v, h]), l.createElement(f.default, (0, r.g)({
                    ref: t,
                    href: m,
                    locale: c,
                    localeCookie: s
                }, p))
            });
            s.displayName = "ClientLink"
        },
        11555: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(84882),
                o = n(8915);
            let l = "locale",
                i = !1;

            function a() {
                let e;
                let t = (0, r.useParams)();
                try {
                    e = (0, o.useLocale)()
                } catch (n) {
                    if ("string" != typeof(null == t ? void 0 : t[l])) throw n;
                    i || (console.warn("Deprecation warning: `useLocale` has returned a default from `useParams().locale` since no `NextIntlClientProvider` ancestor was found for the calling component. This behavior will be removed in the next major version. Please ensure all Client Components that use `next-intl` are wrapped in a `NextIntlClientProvider`."), i = !0), e = t[l]
                }
                return e
            }
        },
        69588: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n(56294),
                o = n(23056),
                l = n(52541);

            function i(e) {
                let {
                    locale: t,
                    ...n
                } = e;
                if (!t) throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");
                return o.createElement(l.IntlProvider, (0, r.g)({
                    locale: t
                }, n))
            }
        },
        17707: function(e, t, n) {
            n.d(t, {
                default: function() {
                    return o.a
                }
            });
            var r = n(55068),
                o = n.n(r)
        },
        55068: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = n(34121);
            n(53858), n(23056);
            let o = r._(n(90439));

            function l(e, t) {
                let n = {
                    loading: e => {
                        let {
                            error: t,
                            isLoading: n,
                            pastDelay: r
                        } = e;
                        return null
                    }
                };
                return "function" == typeof e && (n.loader = e), (0, o.default)({ ...n,
                    ...t
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        95702: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(1522);

            function o(e) {
                let {
                    reason: t,
                    children: n
                } = e;
                if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
                return n
            }
        },
        90439: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(53858),
                o = n(23056),
                l = n(95702);

            function i(e) {
                var t;
                return {
                    default: null != (t = null == e ? void 0 : e.default) ? t : e
                }
            }
            let a = {
                    loader: () => Promise.resolve(i(() => null)),
                    loading: null,
                    ssr: !0
                },
                u = function(e) {
                    let t = { ...a,
                            ...e
                        },
                        n = (0, o.lazy)(() => t.loader().then(i)),
                        u = t.loading;

                    function c(e) {
                        let i = u ? (0, r.jsx)(u, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            a = t.ssr ? (0, r.jsx)(n, { ...e
                            }) : (0, r.jsx)(l.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, r.jsx)(n, { ...e
                                })
                            });
                        return (0, r.jsx)(o.Suspense, {
                            fallback: i,
                            children: a
                        })
                    }
                    return c.displayName = "LoadableComponent", c
                }
        },
        45972: function(e, t, n) {
            n.d(t, {
                YD: function() {
                    return c
                }
            });
            var r = n(23056),
                o = Object.defineProperty,
                l = new Map,
                i = new WeakMap,
                a = 0,
                u = void 0;

            function c() {
                var e;
                let {
                    threshold: t,
                    delay: n,
                    trackVisibility: o,
                    rootMargin: c,
                    root: f,
                    triggerOnce: s,
                    skip: d,
                    initialInView: h,
                    fallbackInView: p,
                    onChange: v
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [g, y] = r.useState(null), m = r.useRef(v), [b, w] = r.useState({
                    inView: !!h,
                    entry: void 0
                });
                m.current = v, r.useEffect(() => {
                    let e;
                    if (!d && g) return e = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u;
                        if (void 0 === window.IntersectionObserver && void 0 !== r) {
                            let o = e.getBoundingClientRect();
                            return t(r, {
                                isIntersecting: r,
                                target: e,
                                intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                                time: 0,
                                boundingClientRect: o,
                                intersectionRect: o,
                                rootBounds: o
                            }), () => {}
                        }
                        let {
                            id: o,
                            observer: c,
                            elements: f
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var n;
                                    return "".concat(t, "_").concat("root" === t ? (n = e.root) ? (i.has(n) || (a += 1, i.set(n, a.toString())), i.get(n)) : "0" : e[t])
                                }).toString(),
                                n = l.get(t);
                            if (!n) {
                                let r;
                                let o = new Map,
                                    i = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var n;
                                            let l = t.isIntersecting && r.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = l), null == (n = o.get(t.target)) || n.forEach(e => {
                                                e(l, t)
                                            })
                                        })
                                    }, e);
                                r = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                    id: t,
                                    observer: i,
                                    elements: o
                                }, l.set(t, n)
                            }
                            return n
                        }(n), s = f.get(e) || [];
                        return f.has(e) || f.set(e, s), s.push(t), c.observe(e),
                            function() {
                                s.splice(s.indexOf(t), 1), 0 === s.length && (f.delete(e), c.unobserve(e)), 0 === f.size && (c.disconnect(), l.delete(o))
                            }
                    }(g, (t, n) => {
                        w({
                            inView: t,
                            entry: n
                        }), m.current && m.current(t, n), n.isIntersecting && s && e && (e(), e = void 0)
                    }, {
                        root: f,
                        rootMargin: c,
                        threshold: t,
                        trackVisibility: o,
                        delay: n
                    }, p), () => {
                        e && e()
                    }
                }, [Array.isArray(t) ? t.toString() : t, g, f, c, s, d, o, p, n]);
                let j = null == (e = b.entry) ? void 0 : e.target,
                    x = r.useRef(void 0);
                g || !j || s || d || x.current === j || (x.current = j, w({
                    inView: !!h,
                    entry: void 0
                }));
                let C = [y, b.inView, b.entry];
                return C.ref = C[0], C.inView = C[1], C.entry = C[2], C
            }
            r.Component
        }
    }
]);