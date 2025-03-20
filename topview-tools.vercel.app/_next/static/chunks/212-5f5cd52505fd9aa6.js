(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [212], {
        56377: function(t, e, i) {
            "use strict";
            i.d(e, {
                F4: function() {
                    return p
                },
                xB: function() {
                    return c
                }
            });
            var n, r, s = i(80333),
                o = i(23056),
                a = i(41249),
                l = i(55208),
                u = i(46392);
            i(29541), i(74633);
            var h = function(t, e) {
                var i = arguments;
                if (null == e || !s.h.call(e, "css")) return o.createElement.apply(void 0, i);
                var n = i.length,
                    r = Array(n);
                r[0] = s.E, r[1] = (0, s.c)(t, e);
                for (var a = 2; a < n; a++) r[a] = i[a];
                return o.createElement.apply(null, r)
            };
            n = h || (h = {}), r || (r = n.JSX || (n.JSX = {}));
            var c = (0, s.w)(function(t, e) {
                var i = t.styles,
                    n = (0, u.O)([i], void 0, o.useContext(s.T)),
                    r = o.useRef();
                return (0, l.j)(function() {
                    var t = e.key + "-global",
                        i = new e.sheet.constructor({
                            key: t,
                            nonce: e.sheet.nonce,
                            container: e.sheet.container,
                            speedy: e.sheet.isSpeedy
                        }),
                        s = !1,
                        o = document.querySelector('style[data-emotion="' + t + " " + n.name + '"]');
                    return e.sheet.tags.length && (i.before = e.sheet.tags[0]), null !== o && (s = !0, o.setAttribute("data-emotion", t), i.hydrate([o])), r.current = [i, s],
                        function() {
                            i.flush()
                        }
                }, [e]), (0, l.j)(function() {
                    var t = r.current,
                        i = t[0];
                    if (t[1]) {
                        t[1] = !1;
                        return
                    }
                    if (void 0 !== n.next && (0, a.My)(e, n.next, !0), i.tags.length) {
                        var s = i.tags[i.tags.length - 1].nextElementSibling;
                        i.before = s, i.flush()
                    }
                    e.insert("", n, i, !1)
                }, [e, n.name]), null
            });

            function d() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return (0, u.O)(e)
            }

            function p() {
                var t = d.apply(void 0, arguments),
                    e = "animation-" + t.name;
                return {
                    name: e,
                    styles: "@keyframes " + e + "{" + t.styles + "}",
                    anim: 1,
                    toString: function() {
                        return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                    }
                }
            }
        },
        74633: function(t, e, i) {
            "use strict";
            var n = i(73268),
                r = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                o = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {};

            function l(t) {
                return n.isMemo(t) ? o : a[t.$$typeof] || r
            }
            a[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, a[n.Memo] = o;
            var u = Object.defineProperty,
                h = Object.getOwnPropertyNames,
                c = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                p = Object.getPrototypeOf,
                f = Object.prototype;
            t.exports = function t(e, i, n) {
                if ("string" != typeof i) {
                    if (f) {
                        var r = p(i);
                        r && r !== f && t(e, r, n)
                    }
                    var o = h(i);
                    c && (o = o.concat(c(i)));
                    for (var a = l(e), m = l(i), v = 0; v < o.length; ++v) {
                        var y = o[v];
                        if (!s[y] && !(n && n[y]) && !(m && m[y]) && !(a && a[y])) {
                            var g = d(i, y);
                            try {
                                u(e, y, g)
                            } catch (t) {}
                        }
                    }
                }
                return e
            }
        },
        25577: function(t) {
            var e = "undefined" != typeof Element,
                i = "function" == typeof Map,
                n = "function" == typeof Set,
                r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            t.exports = function(t, s) {
                try {
                    return function t(s, o) {
                        if (s === o) return !0;
                        if (s && o && "object" == typeof s && "object" == typeof o) {
                            var a, l, u, h;
                            if (s.constructor !== o.constructor) return !1;
                            if (Array.isArray(s)) {
                                if ((a = s.length) != o.length) return !1;
                                for (l = a; 0 != l--;)
                                    if (!t(s[l], o[l])) return !1;
                                return !0
                            }
                            if (i && s instanceof Map && o instanceof Map) {
                                if (s.size !== o.size) return !1;
                                for (h = s.entries(); !(l = h.next()).done;)
                                    if (!o.has(l.value[0])) return !1;
                                for (h = s.entries(); !(l = h.next()).done;)
                                    if (!t(l.value[1], o.get(l.value[0]))) return !1;
                                return !0
                            }
                            if (n && s instanceof Set && o instanceof Set) {
                                if (s.size !== o.size) return !1;
                                for (h = s.entries(); !(l = h.next()).done;)
                                    if (!o.has(l.value[0])) return !1;
                                return !0
                            }
                            if (r && ArrayBuffer.isView(s) && ArrayBuffer.isView(o)) {
                                if ((a = s.length) != o.length) return !1;
                                for (l = a; 0 != l--;)
                                    if (s[l] !== o[l]) return !1;
                                return !0
                            }
                            if (s.constructor === RegExp) return s.source === o.source && s.flags === o.flags;
                            if (s.valueOf !== Object.prototype.valueOf && "function" == typeof s.valueOf && "function" == typeof o.valueOf) return s.valueOf() === o.valueOf();
                            if (s.toString !== Object.prototype.toString && "function" == typeof s.toString && "function" == typeof o.toString) return s.toString() === o.toString();
                            if ((a = (u = Object.keys(s)).length) !== Object.keys(o).length) return !1;
                            for (l = a; 0 != l--;)
                                if (!Object.prototype.hasOwnProperty.call(o, u[l])) return !1;
                            if (e && s instanceof Element) return !1;
                            for (l = a; 0 != l--;)
                                if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !s.$$typeof) && !t(s[u[l]], o[u[l]])) return !1;
                            return !0
                        }
                        return s != s && o != o
                    }(t, s)
                } catch (t) {
                    if ((t.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw t
                }
            }
        },
        95381: function(t, e) {
            "use strict";
            /** @license React v16.13.1
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var i = "function" == typeof Symbol && Symbol.for,
                n = i ? Symbol.for("react.element") : 60103,
                r = i ? Symbol.for("react.portal") : 60106,
                s = i ? Symbol.for("react.fragment") : 60107,
                o = i ? Symbol.for("react.strict_mode") : 60108,
                a = i ? Symbol.for("react.profiler") : 60114,
                l = i ? Symbol.for("react.provider") : 60109,
                u = i ? Symbol.for("react.context") : 60110,
                h = i ? Symbol.for("react.async_mode") : 60111,
                c = i ? Symbol.for("react.concurrent_mode") : 60111,
                d = i ? Symbol.for("react.forward_ref") : 60112,
                p = i ? Symbol.for("react.suspense") : 60113,
                f = i ? Symbol.for("react.suspense_list") : 60120,
                m = i ? Symbol.for("react.memo") : 60115,
                v = i ? Symbol.for("react.lazy") : 60116,
                y = i ? Symbol.for("react.block") : 60121,
                g = i ? Symbol.for("react.fundamental") : 60117,
                x = i ? Symbol.for("react.responder") : 60118,
                w = i ? Symbol.for("react.scope") : 60119;

            function b(t) {
                if ("object" == typeof t && null !== t) {
                    var e = t.$$typeof;
                    switch (e) {
                        case n:
                            switch (t = t.type) {
                                case h:
                                case c:
                                case s:
                                case a:
                                case o:
                                case p:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case u:
                                        case d:
                                        case v:
                                        case m:
                                        case l:
                                            return t;
                                        default:
                                            return e
                                    }
                            }
                        case r:
                            return e
                    }
                }
            }

            function P(t) {
                return b(t) === c
            }
            e.AsyncMode = h, e.ConcurrentMode = c, e.ContextConsumer = u, e.ContextProvider = l, e.Element = n, e.ForwardRef = d, e.Fragment = s, e.Lazy = v, e.Memo = m, e.Portal = r, e.Profiler = a, e.StrictMode = o, e.Suspense = p, e.isAsyncMode = function(t) {
                return P(t) || b(t) === h
            }, e.isConcurrentMode = P, e.isContextConsumer = function(t) {
                return b(t) === u
            }, e.isContextProvider = function(t) {
                return b(t) === l
            }, e.isElement = function(t) {
                return "object" == typeof t && null !== t && t.$$typeof === n
            }, e.isForwardRef = function(t) {
                return b(t) === d
            }, e.isFragment = function(t) {
                return b(t) === s
            }, e.isLazy = function(t) {
                return b(t) === v
            }, e.isMemo = function(t) {
                return b(t) === m
            }, e.isPortal = function(t) {
                return b(t) === r
            }, e.isProfiler = function(t) {
                return b(t) === a
            }, e.isStrictMode = function(t) {
                return b(t) === o
            }, e.isSuspense = function(t) {
                return b(t) === p
            }, e.isValidElementType = function(t) {
                return "string" == typeof t || "function" == typeof t || t === s || t === c || t === a || t === o || t === p || t === f || "object" == typeof t && null !== t && (t.$$typeof === v || t.$$typeof === m || t.$$typeof === l || t.$$typeof === u || t.$$typeof === d || t.$$typeof === g || t.$$typeof === x || t.$$typeof === w || t.$$typeof === y)
            }, e.typeOf = b
        },
        73268: function(t, e, i) {
            "use strict";
            t.exports = i(95381)
        },
        84721: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useCallbackRef: function() {
                    return r
                }
            });
            var n = i(23056);

            function r(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = (0, n.useRef)(t);
                return (0, n.useEffect)(() => {
                    i.current = t
                }), (0, n.useCallback)(function() {
                    for (var t, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null === (t = i.current) || void 0 === t ? void 0 : t.call(i, ...n)
                }, e)
            }
        },
        1909: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useSafeLayoutEffect: function() {
                    return s
                }
            });
            var n, r = i(23056);
            let s = (null === (n = globalThis) || void 0 === n ? void 0 : n.document) ? r.useLayoutEffect : r.useEffect
        },
        56457: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useUpdateEffect: function() {
                    return r
                }
            });
            var n = i(23056);
            let r = (t, e) => {
                let i = (0, n.useRef)(!1),
                    r = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    if (i.current && r.current) return t();
                    r.current = !0
                }, e), (0, n.useEffect)(() => (i.current = !0, () => {
                    i.current = !1
                }), [])
            }
        },
        80062: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                Icon: function() {
                    return u
                }
            });
            var n = i(53858),
                r = i(37286),
                s = i(5669),
                o = i(34731),
                a = i(37016);
            let l = {
                    path: (0, n.jsxs)("g", {
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        children: [(0, n.jsx)("path", {
                            strokeLinecap: "round",
                            fill: "none",
                            d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
                        }), (0, n.jsx)("path", {
                            fill: "currentColor",
                            strokeLinecap: "round",
                            d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
                        }), (0, n.jsx)("circle", {
                            fill: "none",
                            strokeMiterlimit: "10",
                            cx: "12",
                            cy: "12",
                            r: "11.25"
                        })]
                    }),
                    viewBox: "0 0 24 24"
                },
                u = (0, s.forwardRef)((t, e) => {
                    let {
                        as: i,
                        viewBox: s,
                        color: u = "currentColor",
                        focusable: h = !1,
                        children: c,
                        className: d,
                        __css: p,
                        ...f
                    } = t, m = (0, r.cx)("chakra-icon", d), v = (0, o.useStyleConfig)("Icon", t), y = {
                        ref: e,
                        focusable: h,
                        className: m,
                        __css: {
                            w: "1em",
                            h: "1em",
                            display: "inline-block",
                            lineHeight: "1em",
                            flexShrink: 0,
                            color: u,
                            ...p,
                            ...v
                        }
                    }, g = null != s ? s : l.viewBox;
                    if (i && "string" != typeof i) return (0, n.jsx)(a.chakra.svg, {
                        as: i,
                        ...y,
                        ...f
                    });
                    let x = null != c ? c : l.path;
                    return (0, n.jsx)(a.chakra.svg, {
                        verticalAlign: "middle",
                        viewBox: g,
                        ...y,
                        ...f,
                        children: x
                    })
                });
            u.displayName = "Icon"
        },
        22224: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                PortalManager: function() {
                    return o
                },
                usePortalManager: function() {
                    return s
                }
            });
            var n = i(53858);
            let [r, s] = (0, i(10303).createContext)({
                strict: !1,
                name: "PortalManagerContext"
            });

            function o(t) {
                let {
                    children: e,
                    zIndex: i
                } = t;
                return (0, n.jsx)(r, {
                    value: {
                        zIndex: i
                    },
                    children: e
                })
            }
            o.displayName = "PortalManager"
        },
        12125: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                Portal: function() {
                    return m
                }
            });
            var n = i(53858),
                r = i(1909),
                s = i(10303),
                o = i(23056),
                a = i(56929),
                l = i(22224);
            let [u, h] = (0, s.createContext)({
                strict: !1,
                name: "PortalContext"
            }), c = "chakra-portal", d = t => (0, n.jsx)("div", {
                className: "chakra-portal-zIndex",
                style: {
                    position: "absolute",
                    zIndex: t.zIndex,
                    top: 0,
                    left: 0,
                    right: 0
                },
                children: t.children
            }), p = t => {
                let {
                    appendToParentPortal: e,
                    children: i
                } = t, [s, p] = (0, o.useState)(null), f = (0, o.useRef)(null), [, m] = (0, o.useState)({});
                (0, o.useEffect)(() => m({}), []);
                let v = h(),
                    y = (0, l.usePortalManager)();
                (0, r.useSafeLayoutEffect)(() => {
                    if (!s) return;
                    let t = s.ownerDocument,
                        i = e && null != v ? v : t.body;
                    if (!i) return;
                    f.current = t.createElement("div"), f.current.className = c, i.appendChild(f.current), m({});
                    let n = f.current;
                    return () => {
                        i.contains(n) && i.removeChild(n)
                    }
                }, [s]);
                let g = (null == y ? void 0 : y.zIndex) ? (0, n.jsx)(d, {
                    zIndex: null == y ? void 0 : y.zIndex,
                    children: i
                }) : i;
                return f.current ? (0, a.createPortal)((0, n.jsx)(u, {
                    value: f.current,
                    children: g
                }), f.current) : (0, n.jsx)("span", {
                    ref: t => {
                        t && p(t)
                    }
                })
            }, f = t => {
                let {
                    children: e,
                    containerRef: i,
                    appendToParentPortal: s
                } = t, l = i.current, h = null != l ? l : "undefined" != typeof window ? document.body : void 0, d = (0, o.useMemo)(() => {
                    let t = null == l ? void 0 : l.ownerDocument.createElement("div");
                    return t && (t.className = c), t
                }, [l]), [, p] = (0, o.useState)({});
                return ((0, r.useSafeLayoutEffect)(() => p({}), []), (0, r.useSafeLayoutEffect)(() => {
                    if (d && h) return h.appendChild(d), () => {
                        h.removeChild(d)
                    }
                }, [d, h]), h && d) ? (0, a.createPortal)((0, n.jsx)(u, {
                    value: s ? d : null,
                    children: e
                }), d) : null
            };

            function m(t) {
                let {
                    containerRef: e,
                    ...i
                } = {
                    appendToParentPortal: !0,
                    ...t
                };
                return e ? (0, n.jsx)(f, {
                    containerRef: e,
                    ...i
                }) : (0, n.jsx)(p, { ...i
                })
            }
            m.className = c, m.selector = ".chakra-portal", m.displayName = "Portal"
        },
        12323: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                Spinner: function() {
                    return c
                }
            });
            var n = i(53858),
                r = i(7932),
                s = i(37286),
                o = i(56377),
                a = i(5669),
                l = i(34731),
                u = i(37016);
            let h = (0, o.F4)({
                    "0%": {
                        transform: "rotate(0deg)"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                }),
                c = (0, a.forwardRef)((t, e) => {
                    let i = (0, l.useStyleConfig)("Spinner", t),
                        {
                            label: o = "Loading...",
                            thickness: a = "2px",
                            speed: c = "0.45s",
                            emptyColor: d = "transparent",
                            className: p,
                            ...f
                        } = (0, r.L)(t),
                        m = (0, s.cx)("chakra-spinner", p),
                        v = {
                            display: "inline-block",
                            borderColor: "currentColor",
                            borderStyle: "solid",
                            borderRadius: "99999px",
                            borderWidth: a,
                            borderBottomColor: d,
                            borderLeftColor: d,
                            animation: "".concat(h, " ").concat(c, " linear infinite"),
                            ...i
                        };
                    return (0, n.jsx)(u.chakra.div, {
                        ref: e,
                        __css: v,
                        className: m,
                        ...f,
                        children: o && (0, n.jsx)(u.chakra.span, {
                            srOnly: !0,
                            children: o
                        })
                    })
                });
            c.displayName = "Spinner"
        },
        5669: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                forwardRef: function() {
                    return r
                }
            });
            var n = i(23056);

            function r(t) {
                return (0, n.forwardRef)(t)
            }
        },
        83662: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                getToken: function() {
                    return a
                },
                useChakra: function() {
                    return s
                },
                useToken: function() {
                    return o
                }
            });
            var n = i(12757),
                r = i(29190);

            function s() {
                let t = (0, r.useColorMode)(),
                    e = (0, n.useTheme)();
                return { ...t,
                    theme: e
                }
            }

            function o(t, e, i) {
                let r = (0, n.useTheme)();
                return a(t, e, i)(r)
            }

            function a(t, e, i) {
                let n = Array.isArray(e) ? e : [e],
                    r = Array.isArray(i) ? i : [i];
                return i => {
                    let s = r.filter(Boolean),
                        o = n.map((e, n) => {
                            var r, o;
                            return "breakpoints" === t ? function(t, e, i) {
                                var n, r;
                                if (null == e) return e;
                                let s = e => {
                                    var i, n;
                                    return null === (n = t.__breakpoints) || void 0 === n ? void 0 : null === (i = n.asArray) || void 0 === i ? void 0 : i[e]
                                };
                                return null !== (r = null !== (n = s(e)) && void 0 !== n ? n : s(i)) && void 0 !== r ? r : i
                            }(i, e, null !== (r = s[n]) && void 0 !== r ? r : e) : function(t, e, i) {
                                var n, r;
                                if (null == e) return e;
                                let s = e => {
                                    var i, n;
                                    return null === (n = t.__cssMap) || void 0 === n ? void 0 : null === (i = n[e]) || void 0 === i ? void 0 : i.value
                                };
                                return null !== (r = null !== (n = s(e)) && void 0 !== n ? n : s(i)) && void 0 !== r ? r : i
                            }(i, "".concat(t, ".").concat(e), null !== (o = s[n]) && void 0 !== o ? o : e)
                        });
                    return Array.isArray(e) ? o : o[0]
                }
            }
        },
        34731: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useMultiStyleConfig: function() {
                    return m
                },
                useStyleConfig: function() {
                    return f
                }
            });
            var n = i(18631),
                r = i(13227),
                s = i(57980),
                o = i(18598),
                a = i(34065),
                l = i(67612),
                u = i(55643),
                h = i(23056),
                c = i(25577),
                d = i(83662);

            function p(t) {
                var e;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        styleConfig: p,
                        ...f
                    } = i,
                    {
                        theme: m,
                        colorMode: v
                    } = (0, d.useChakra)(),
                    y = t ? (0, a.W)(m, "components.".concat(t)) : void 0,
                    g = p || y,
                    x = o({
                        theme: m,
                        colorMode: v
                    }, null !== (e = null == g ? void 0 : g.defaultProps) && void 0 !== e ? e : {}, (0, l.o)((0, u.C)(f, ["children"])), (t, e) => t ? void 0 : e),
                    w = (0, h.useRef)({});
                if (g) {
                    let t = (t => {
                        let {
                            variant: e,
                            size: i,
                            theme: a
                        } = t, l = function(t) {
                            let e = t.__breakpoints;
                            return function(t, i, a, l) {
                                var u;
                                if (!e) return;
                                let h = {},
                                    c = (u = e.toArrayValue, Array.isArray(a) ? a : (0, n.Kn)(a) ? u(a) : null != a ? [a] : void 0);
                                if (!c) return h;
                                let d = c.length,
                                    p = 1 === d,
                                    f = !!t.parts;
                                for (let n = 0; n < d; n++) {
                                    let a = e.details[n],
                                        u = e.details[function(t, e) {
                                            for (let i = e + 1; i < t.length; i++)
                                                if (null != t[i]) return i;
                                            return -1
                                        }(c, n)],
                                        d = (0, r.Y)(a.minW, u ? ._minW),
                                        m = (0, s.P)(t[i] ? .[c[n]], l);
                                    if (m) {
                                        if (f) {
                                            t.parts ? .forEach(t => {
                                                o(h, {
                                                    [t]: p ? m[t] : {
                                                        [d]: m[t]
                                                    }
                                                })
                                            });
                                            continue
                                        }
                                        if (!f) {
                                            p ? o(h, m) : h[d] = m;
                                            continue
                                        }
                                        h[d] = m
                                    }
                                }
                                return h
                            }
                        }(a);
                        return o({}, (0, s.P)(g.baseStyle ? ? {}, t), l(g, "sizes", i, t), l(g, "variants", e, t))
                    })(x);
                    c(w.current, t) || (w.current = t)
                }
                return w.current
            }

            function f(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return p(t, e)
            }

            function m(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return p(t, e)
            }
        },
        12757: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useTheme: function() {
                    return s
                }
            });
            var n = i(80333),
                r = i(23056);

            function s() {
                let t = (0, r.useContext)(n.T);
                if (!t) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
                return t
            }
        },
        90554: function(t, e, i) {
            "use strict";

            function n(t) {
                return t
            }

            function r(t) {
                return t
            }

            function s(t) {
                return {
                    definePartsStyle: t => t,
                    defineMultiStyleConfig: e => ({
                        parts: t,
                        ...e
                    })
                }
            }
            i.d(e, {
                D: function() {
                    return s
                },
                fj: function() {
                    return r
                },
                k0: function() {
                    return n
                }
            })
        },
        7932: function(t, e, i) {
            "use strict";
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(55643);

            function r(t) {
                return (0, n.C)(t, ["styleConfig", "size", "variant", "colorScheme"])
            }
        },
        13227: function(t, e, i) {
            "use strict";
            i.d(e, {
                Y: function() {
                    return u
                },
                y: function() {
                    return h
                }
            });
            var n = i(18631);

            function r(t) {
                if (null == t) return t;
                let {
                    unitless: e
                } = function(t) {
                    let e = parseFloat(t.toString()),
                        i = t.toString().replace(String(e), "");
                    return {
                        unitless: !i,
                        value: e,
                        unit: i
                    }
                }(t);
                return e || "number" == typeof t ? `${t}px` : t
            }
            let s = (t, e) => parseInt(t[1], 10) > parseInt(e[1], 10) ? 1 : -1,
                o = t => Object.fromEntries(Object.entries(t).sort(s));

            function a(t) {
                let e = o(t);
                return Object.assign(Object.values(e), e)
            }

            function l(t) {
                return t ? "number" == typeof(t = r(t) ? ? t) ? `${t+-.02}` : t.replace(/(\d+\.?\d*)/u, t => `${parseFloat(t)+-.02}`) : t
            }

            function u(t, e) {
                let i = ["@media screen"];
                return t && i.push("and", `(min-width: ${r(t)})`), e && i.push("and", `(max-width: ${r(e)})`), i.join(" ")
            }

            function h(t) {
                if (!t) return null;
                t.base = t.base ? ? "0px";
                let e = a(t),
                    i = Object.entries(t).sort(s).map(([t, e], i, n) => {
                        let [, r] = n[i + 1] ? ? [];
                        return r = parseFloat(r) > 0 ? l(r) : void 0, {
                            _minW: l(e),
                            breakpoint: t,
                            minW: e,
                            maxW: r,
                            maxWQuery: u(null, r),
                            minWQuery: u(e),
                            minMaxQuery: u(e, r)
                        }
                    }),
                    r = function(t) {
                        let e = Object.keys(o(t));
                        return new Set(e)
                    }(t),
                    h = Array.from(r.values());
                return {
                    keys: r,
                    normalized: e,
                    isResponsive(t) {
                        let e = Object.keys(t);
                        return e.length > 0 && e.every(t => r.has(t))
                    },
                    asObject: o(t),
                    asArray: a(t),
                    details: i,
                    get: t => i.find(e => e.breakpoint === t),
                    media: [null, ...e.map(t => u(t)).slice(1)],
                    toArrayValue(t) {
                        if (!(0, n.Kn)(t)) throw Error("toArrayValue: value must be an object");
                        let e = h.map(e => t[e] ? ? null);
                        for (; null === function(t) {
                                let e = null == t ? 0 : t.length;
                                return e ? t[e - 1] : void 0
                            }(e);) e.pop();
                        return e
                    },
                    toObjectValue(t) {
                        if (!Array.isArray(t)) throw Error("toObjectValue: value must be an array");
                        return t.reduce((t, e, i) => {
                            let n = h[i];
                            return null != n && null != e && (t[n] = e), t
                        }, {})
                    }
                }
            }
        },
        10303: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                createContext: function() {
                    return r
                }
            });
            var n = i(23056);

            function r() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        name: e,
                        strict: i = !0,
                        hookName: r = "useContext",
                        providerName: s = "Provider",
                        errorMessage: o,
                        defaultValue: a
                    } = t,
                    l = (0, n.createContext)(a);
                return l.displayName = e, [l.Provider, function t() {
                    let e = (0, n.useContext)(l);
                    if (!e && i) {
                        var a, u;
                        let e = Error(null != o ? o : "".concat(r, " returned `undefined`. Seems you forgot to wrap component within ").concat(s));
                        throw e.name = "ContextError", null === (a = (u = Error).captureStackTrace) || void 0 === a || a.call(u, e, t), e
                    }
                    return e
                }, l]
            }
        },
        37286: function(t, e, i) {
            "use strict";
            i.d(e, {
                cx: function() {
                    return n
                }
            });
            let n = (...t) => t.filter(Boolean).join(" ")
        },
        34065: function(t, e, i) {
            "use strict";
            i.d(e, {
                W: function() {
                    return n
                }
            });
            let n = (t => {
                let e = new WeakMap;
                return (i, n, r, s) => {
                    if (void 0 === i) return t(i, n, r);
                    e.has(i) || e.set(i, new Map);
                    let o = e.get(i);
                    if (o.has(n)) return o.get(n);
                    let a = t(i, n, r, s);
                    return o.set(n, a), a
                }
            })(function(t, e, i, n) {
                let r = "string" == typeof e ? e.split(".") : [e];
                for (n = 0; n < r.length && t; n += 1) t = t[r[n]];
                return void 0 === t ? i : t
            })
        },
        55643: function(t, e, i) {
            "use strict";

            function n(t, e = []) {
                let i = Object.assign({}, t);
                for (let t of e) t in i && delete i[t];
                return i
            }
            i.d(e, {
                C: function() {
                    return n
                }
            })
        },
        21766: function(t, e, i) {
            "use strict";
            i.d(e, {
                M: function() {
                    return y
                }
            });
            var n = i(53858),
                r = i(23056),
                s = i(3883),
                o = i(80858),
                a = i(66529);
            class l extends r.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = this.props.sizeRef.current;
                        t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function u(t) {
                let {
                    children: e,
                    isPresent: i
                } = t, s = (0, r.useId)(), o = (0, r.useRef)(null), u = (0, r.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0
                }), {
                    nonce: h
                } = (0, r.useContext)(a._);
                return (0, r.useInsertionEffect)(() => {
                    let {
                        width: t,
                        height: e,
                        top: n,
                        left: r
                    } = u.current;
                    if (i || !o.current || !t || !e) return;
                    o.current.dataset.motionPopId = s;
                    let a = document.createElement("style");
                    return h && (a.nonce = h), document.head.appendChild(a), a.sheet && a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            top: ").concat(n, "px !important;\n            left: ").concat(r, "px !important;\n          }\n        ")), () => {
                        document.head.removeChild(a)
                    }
                }, [i]), (0, n.jsx)(l, {
                    isPresent: i,
                    childRef: o,
                    sizeRef: u,
                    children: r.cloneElement(e, {
                        ref: o
                    })
                })
            }
            let h = t => {
                let {
                    children: e,
                    initial: i,
                    isPresent: a,
                    onExitComplete: l,
                    custom: h,
                    presenceAffectsLayout: d,
                    mode: p
                } = t, f = (0, o.h)(c), m = (0, r.useId)(), v = (0, r.useCallback)(t => {
                    for (let e of (f.set(t, !0), f.values()))
                        if (!e) return;
                    l && l()
                }, [f, l]), y = (0, r.useMemo)(() => ({
                    id: m,
                    initial: i,
                    isPresent: a,
                    custom: h,
                    onExitComplete: v,
                    register: t => (f.set(t, !1), () => f.delete(t))
                }), d ? [Math.random(), v] : [a, v]);
                return (0, r.useMemo)(() => {
                    f.forEach((t, e) => f.set(e, !1))
                }, [a]), r.useEffect(() => {
                    a || f.size || !l || l()
                }, [a]), "popLayout" === p && (e = (0, n.jsx)(u, {
                    isPresent: a,
                    children: e
                })), (0, n.jsx)(s.O.Provider, {
                    value: y,
                    children: e
                })
            };

            function c() {
                return new Map
            }
            var d = i(71608),
                p = i(43939);
            let f = t => t.key || "";

            function m(t) {
                let e = [];
                return r.Children.forEach(t, t => {
                    (0, r.isValidElement)(t) && e.push(t)
                }), e
            }
            var v = i(56339);
            let y = t => {
                let {
                    children: e,
                    exitBeforeEnter: i,
                    custom: s,
                    initial: a = !0,
                    onExitComplete: l,
                    presenceAffectsLayout: u = !0,
                    mode: c = "sync"
                } = t;
                (0, p.k)(!i, "Replace exitBeforeEnter with mode='wait'");
                let y = (0, r.useMemo)(() => m(e), [e]),
                    g = y.map(f),
                    x = (0, r.useRef)(!0),
                    w = (0, r.useRef)(y),
                    b = (0, o.h)(() => new Map),
                    [P, S] = (0, r.useState)(y),
                    [T, A] = (0, r.useState)(y);
                (0, v.L)(() => {
                    x.current = !1, w.current = y;
                    for (let t = 0; t < T.length; t++) {
                        let e = f(T[t]);
                        g.includes(e) ? b.delete(e) : !0 !== b.get(e) && b.set(e, !1)
                    }
                }, [T, g.length, g.join("-")]);
                let E = [];
                if (y !== P) {
                    let t = [...y];
                    for (let e = 0; e < T.length; e++) {
                        let i = T[e],
                            n = f(i);
                        g.includes(n) || (t.splice(e, 0, i), E.push(i))
                    }
                    "wait" === c && E.length && (t = E), A(m(t)), S(y);
                    return
                }
                let {
                    forceRender: C
                } = (0, r.useContext)(d.p);
                return (0, n.jsx)(n.Fragment, {
                    children: T.map(t => {
                        let e = f(t),
                            i = y === T || g.includes(e);
                        return (0, n.jsx)(h, {
                            isPresent: i,
                            initial: (!x.current || !!a) && void 0,
                            custom: i ? void 0 : s,
                            presenceAffectsLayout: u,
                            mode: c,
                            onExitComplete: i ? void 0 : () => {
                                if (!b.has(e)) return;
                                b.set(e, !0);
                                let t = !0;
                                b.forEach(e => {
                                    e || (t = !1)
                                }), t && (null == C || C(), A(w.current), l && l())
                            },
                            children: t
                        }, e)
                    })
                })
            }
        },
        15792: function(t, e, i) {
            "use strict";
            i.d(e, {
                hO: function() {
                    return o
                },
                oO: function() {
                    return s
                }
            });
            var n = i(23056),
                r = i(3883);

            function s() {
                let t = (0, n.useContext)(r.O);
                if (null === t) return [!0, null];
                let {
                    isPresent: e,
                    onExitComplete: i,
                    register: s
                } = t, o = (0, n.useId)();
                (0, n.useEffect)(() => s(o), []);
                let a = (0, n.useCallback)(() => i && i(o), [o, i]);
                return !e && i ? [!1, a] : [!0]
            }

            function o() {
                var t;
                return null === (t = (0, n.useContext)(r.O)) || t.isPresent
            }
        },
        71608: function(t, e, i) {
            "use strict";
            i.d(e, {
                p: function() {
                    return n
                }
            });
            let n = (0, i(23056).createContext)({})
        },
        66529: function(t, e, i) {
            "use strict";
            i.d(e, {
                _: function() {
                    return n
                }
            });
            let n = (0, i(23056).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        3883: function(t, e, i) {
            "use strict";
            i.d(e, {
                O: function() {
                    return n
                }
            });
            let n = (0, i(23056).createContext)(null)
        },
        94201: function(t, e, i) {
            "use strict";
            let n;

            function r(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            i.d(e, {
                E: function() {
                    return sm
                }
            });
            let s = t => Array.isArray(t);

            function o(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function a(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function l(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, i) => {
                    e[0][i] = t.get(), e[1][i] = t.getVelocity()
                }), e
            }

            function u(t, e, i, n) {
                if ("function" == typeof e) {
                    let [r, s] = l(n);
                    e = e(void 0 !== i ? i : t.custom, r, s)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [r, s] = l(n);
                    e = e(void 0 !== i ? i : t.custom, r, s)
                }
                return e
            }

            function h(t, e, i) {
                let n = t.getProps();
                return u(n, e, void 0 !== i ? i : n.custom, t)
            }
            let c = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                d = ["initial", ...c],
                p = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                f = new Set(p),
                m = t => 1e3 * t,
                v = t => t / 1e3,
                y = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                g = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                x = {
                    type: "keyframes",
                    duration: .8
                },
                w = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                b = (t, {
                    keyframes: e
                }) => e.length > 2 ? x : f.has(t) ? t.startsWith("scale") ? g(e[1]) : y : w;

            function P(t, e) {
                return t ? t[e] || t.default || t : void 0
            }
            let S = {
                    skipAnimations: !1,
                    useManualTiming: !1
                },
                T = {
                    current: !1
                },
                A = t => null !== t;

            function E(t, {
                repeat: e,
                repeatType: i = "loop"
            }, n) {
                let r = t.filter(A),
                    s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return s && void 0 !== n ? n : r[s]
            }
            var C, M, V, k = i(81550);
            let D = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function j(t, e) {
                let i = !1,
                    n = !0,
                    r = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    s = () => i = !0,
                    o = D.reduce((t, e) => (t[e] = function(t) {
                        let e = new Set,
                            i = new Set,
                            n = !1,
                            r = !1,
                            s = new WeakSet,
                            o = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function a(e) {
                            s.has(e) && (l.schedule(e), t()), e(o)
                        }
                        let l = {
                            schedule: (t, r = !1, o = !1) => {
                                let a = o && n ? e : i;
                                return r && s.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), s.delete(t)
                            },
                            process: t => {
                                if (o = t, n) {
                                    r = !0;
                                    return
                                }
                                n = !0, [e, i] = [i, e], e.forEach(a), e.clear(), n = !1, r && (r = !1, l.process(t))
                            }
                        };
                        return l
                    }(s), t), {}),
                    {
                        read: a,
                        resolveKeyframes: l,
                        update: u,
                        preRender: h,
                        render: c,
                        postRender: d
                    } = o,
                    p = () => {
                        let s = S.useManualTiming ? r.timestamp : performance.now();
                        i = !1, r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1), r.timestamp = s, r.isProcessing = !0, a.process(r), l.process(r), u.process(r), h.process(r), c.process(r), d.process(r), r.isProcessing = !1, i && e && (n = !1, t(p))
                    },
                    f = () => {
                        i = !0, n = !0, r.isProcessing || t(p)
                    };
                return {
                    schedule: D.reduce((t, e) => {
                        let n = o[e];
                        return t[e] = (t, e = !1, r = !1) => (i || f(), n.schedule(t, e, r)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < D.length; e++) o[D[e]].cancel(t)
                    },
                    state: r,
                    steps: o
                }
            }
            let {
                schedule: R,
                cancel: L,
                state: F,
                steps: O
            } = j("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : k.Z, !0), B = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function $(t, e, i, n) {
                if (t === e && i === n) return k.Z;
                let r = e => (function(t, e, i, n, r) {
                    let s, o;
                    let a = 0;
                    do(s = B(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : B(r(t), e, n)
            }
            let I = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                U = t => e => 1 - t(1 - e),
                N = $(.33, 1.53, .69, .99),
                W = U(N),
                z = I(W),
                _ = t => (t *= 2) < 1 ? .5 * W(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
                Y = t => 1 - Math.sin(Math.acos(t)),
                K = U(Y),
                H = I(Y),
                X = t => /^0[^.\s]+$/u.test(t);
            var Z = i(43939);
            let q = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                G = t => e => "string" == typeof e && e.startsWith(t),
                J = G("--"),
                Q = G("var(--"),
                tt = t => !!Q(t) && te.test(t.split("/*")[0].trim()),
                te = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                ti = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                tn = (t, e, i) => i > e ? e : i < t ? t : i,
                tr = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                ts = { ...tr,
                    transform: t => tn(0, 1, t)
                },
                to = { ...tr,
                    default: 1
                },
                ta = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                tl = ta("deg"),
                tu = ta("%"),
                th = ta("px"),
                tc = ta("vh"),
                td = ta("vw"),
                tp = { ...tu,
                    parse: t => tu.parse(t) / 100,
                    transform: t => tu.transform(100 * t)
                },
                tf = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                tm = t => t === tr || t === th,
                tv = (t, e) => parseFloat(t.split(", ")[e]),
                ty = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/u);
                    if (r) return tv(r[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/u);
                        return e ? tv(e[1], t) : 0
                    }
                },
                tg = new Set(["x", "y", "z"]),
                tx = p.filter(t => !tg.has(t)),
                tw = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: ty(4, 13),
                    y: ty(5, 14)
                };
            tw.translateX = tw.x, tw.translateY = tw.y;
            let tb = t => e => e.test(t),
                tP = [tr, th, tu, tl, td, tc, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                tS = t => tP.find(tb(t)),
                tT = new Set,
                tA = !1,
                tE = !1;

            function tC() {
                if (tE) {
                    let t = Array.from(tT).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return tx.forEach(i => {
                                let n = t.getValue(i);
                                void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                            }), e
                        }(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            var n;
                            null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                tE = !1, tA = !1, tT.forEach(t => t.complete()), tT.clear()
            }

            function tM() {
                tT.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (tE = !0)
                })
            }
            class tV {
                constructor(t, e, i, n, r, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = r, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (tT.add(this), tA || (tA = !0, R.read(tM), R.resolveKeyframes(tC))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: n
                    } = this;
                    for (let r = 0; r < t.length; r++)
                        if (null === t[r]) {
                            if (0 === r) {
                                let r = null == n ? void 0 : n.get(),
                                    s = t[t.length - 1];
                                if (void 0 !== r) t[0] = r;
                                else if (i && e) {
                                    let n = i.readValue(e, s);
                                    null != n && (t[0] = n)
                                }
                                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0])
                            } else t[r] = t[r - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), tT.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, tT.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
            let tk = t => Math.round(1e5 * t) / 1e5,
                tD = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                tj = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                tR = (t, e) => i => !!("string" == typeof i && tj.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
                tL = (t, e, i) => n => {
                    if ("string" != typeof n) return n;
                    let [r, s, o, a] = n.match(tD);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(s),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                tF = t => tn(0, 255, t),
                tO = { ...tr,
                    transform: t => Math.round(tF(t))
                },
                tB = {
                    test: tR("rgb", "red"),
                    parse: tL("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: n = 1
                    }) => "rgba(" + tO.transform(t) + ", " + tO.transform(e) + ", " + tO.transform(i) + ", " + tk(ts.transform(n)) + ")"
                },
                t$ = {
                    test: tR("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            n = "",
                            r = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(n, 16),
                            alpha: r ? parseInt(r, 16) / 255 : 1
                        }
                    },
                    transform: tB.transform
                },
                tI = {
                    test: tR("hsl", "hue"),
                    parse: tL("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + tu.transform(tk(e)) + ", " + tu.transform(tk(i)) + ", " + tk(ts.transform(n)) + ")"
                },
                tU = {
                    test: t => tB.test(t) || t$.test(t) || tI.test(t),
                    parse: t => tB.test(t) ? tB.parse(t) : tI.test(t) ? tI.parse(t) : t$.parse(t),
                    transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tB.transform(t) : tI.transform(t)
                },
                tN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tW = "number",
                tz = "color",
                t_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function tY(t) {
                let e = t.toString(),
                    i = [],
                    n = {
                        color: [],
                        number: [],
                        var: []
                    },
                    r = [],
                    s = 0,
                    o = e.replace(t_, t => (tU.test(t) ? (n.color.push(s), r.push(tz), i.push(tU.parse(t))) : t.startsWith("var(") ? (n.var.push(s), r.push("var"), i.push(t)) : (n.number.push(s), r.push(tW), i.push(parseFloat(t))), ++s, "${}")).split("${}");
                return {
                    values: i,
                    split: o,
                    indexes: n,
                    types: r
                }
            }

            function tK(t) {
                return tY(t).values
            }

            function tH(t) {
                let {
                    split: e,
                    types: i
                } = tY(t), n = e.length;
                return t => {
                    let r = "";
                    for (let s = 0; s < n; s++)
                        if (r += e[s], void 0 !== t[s]) {
                            let e = i[s];
                            e === tW ? r += tk(t[s]) : e === tz ? r += tU.transform(t[s]) : r += t[s]
                        }
                    return r
                }
            }
            let tX = t => "number" == typeof t ? 0 : t,
                tZ = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tD)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tN)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: tK,
                    createTransformer: tH,
                    getAnimatableNone: function(t) {
                        let e = tK(t);
                        return tH(t)(e.map(tX))
                    }
                },
                tq = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function tG(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(tD) || [];
                if (!n) return t;
                let r = i.replace(n, ""),
                    s = tq.has(e) ? 1 : 0;
                return n !== i && (s *= 100), e + "(" + s + r + ")"
            }
            let tJ = /\b([a-z-]*)\(.*?\)/gu,
                tQ = { ...tZ,
                    getAnimatableNone: t => {
                        let e = t.match(tJ);
                        return e ? e.map(tG).join(" ") : t
                    }
                },
                t0 = { ...tr,
                    transform: Math.round
                },
                t1 = {
                    borderWidth: th,
                    borderTopWidth: th,
                    borderRightWidth: th,
                    borderBottomWidth: th,
                    borderLeftWidth: th,
                    borderRadius: th,
                    radius: th,
                    borderTopLeftRadius: th,
                    borderTopRightRadius: th,
                    borderBottomRightRadius: th,
                    borderBottomLeftRadius: th,
                    width: th,
                    maxWidth: th,
                    height: th,
                    maxHeight: th,
                    top: th,
                    right: th,
                    bottom: th,
                    left: th,
                    padding: th,
                    paddingTop: th,
                    paddingRight: th,
                    paddingBottom: th,
                    paddingLeft: th,
                    margin: th,
                    marginTop: th,
                    marginRight: th,
                    marginBottom: th,
                    marginLeft: th,
                    backgroundPositionX: th,
                    backgroundPositionY: th,
                    rotate: tl,
                    rotateX: tl,
                    rotateY: tl,
                    rotateZ: tl,
                    scale: to,
                    scaleX: to,
                    scaleY: to,
                    scaleZ: to,
                    skew: tl,
                    skewX: tl,
                    skewY: tl,
                    distance: th,
                    translateX: th,
                    translateY: th,
                    translateZ: th,
                    x: th,
                    y: th,
                    z: th,
                    perspective: th,
                    transformPerspective: th,
                    opacity: ts,
                    originX: tp,
                    originY: tp,
                    originZ: th,
                    zIndex: t0,
                    size: th,
                    fillOpacity: ts,
                    strokeOpacity: ts,
                    numOctaves: t0
                },
                t5 = { ...t1,
                    color: tU,
                    backgroundColor: tU,
                    outlineColor: tU,
                    fill: tU,
                    stroke: tU,
                    borderColor: tU,
                    borderTopColor: tU,
                    borderRightColor: tU,
                    borderBottomColor: tU,
                    borderLeftColor: tU,
                    filter: tQ,
                    WebkitFilter: tQ
                },
                t3 = t => t5[t];

            function t2(t, e) {
                let i = t3(t);
                return i !== tQ && (i = tZ), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let t6 = new Set(["auto", "none", "0"]);
            class t9 extends tV {
                constructor(t, e, i, n, r) {
                    super(t, e, i, n, r, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        if ("string" == typeof n && tt(n = n.trim())) {
                            let r = function t(e, i, n = 1) {
                                (0, Z.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [r, s] = function(t) {
                                    let e = ti.exec(t);
                                    if (!e) return [, ];
                                    let [, i, n, r] = e;
                                    return [`--${null!=i?i:n}`, r]
                                }(e);
                                if (!r) return;
                                let o = window.getComputedStyle(i).getPropertyValue(r);
                                if (o) {
                                    let t = o.trim();
                                    return q(t) ? parseFloat(t) : t
                                }
                                return tt(s) ? t(s, i, n + 1) : s
                            }(n, e.current);
                            void 0 !== r && (t[i] = r), i === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !tf.has(i) || 2 !== t.length) return;
                    let [n, r] = t, s = tS(n), o = tS(r);
                    if (s !== o) {
                        if (tm(s) && tm(o))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var n;
                        ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || X(n)) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let n, r = 0;
                        for (; r < t.length && !n;) {
                            let e = t[r];
                            "string" == typeof e && !t6.has(e) && tY(e).values.length && (n = t[r]), r++
                        }
                        if (n && i)
                            for (let r of e) t[r] = t2(i, n)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tw[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(i, n).jump(n, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: i,
                        unresolvedKeyframes: n
                    } = this;
                    if (!e || !e.current) return;
                    let r = e.getValue(i);
                    r && r.jump(this.measuredOrigin, !1);
                    let s = n.length - 1,
                        o = n[s];
                    n[s] = tw[i](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, i]) => {
                        e.getValue(t).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }

            function t8(t) {
                return "function" == typeof t
            }

            function t7() {
                n = void 0
            }
            let t4 = {
                    now: () => (void 0 === n && t4.set(F.isProcessing || S.useManualTiming ? F.timestamp : performance.now()), n),
                    set: t => {
                        n = t, queueMicrotask(t7)
                    }
                },
                et = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tZ.test(t) || "0" === t) && !t.startsWith("url("));
            class ee {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: n = 0,
                    repeatDelay: r = 0,
                    repeatType: s = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = t4.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: n,
                        repeatDelay: r,
                        repeatType: s,
                        ...o
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (tM(), tC()), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = t4.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: i,
                        type: n,
                        velocity: r,
                        delay: s,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(t, e, i, n) {
                            let r = t[0];
                            if (null === r) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let s = t[t.length - 1],
                                o = et(r, e),
                                a = et(s, e);
                            return (0, Z.K)(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`), !!o && !!a && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let i = 0; i < t.length; i++)
                                    if (t[i] !== e) return !0
                            }(t) || ("spring" === i || t8(i)) && n)
                        }(t, i, n, r)) {
                        if (T.current || !s) {
                            null == a || a(E(t, this.options, e)), null == o || o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let u = this.initPlayback(t, e);
                    !1 !== u && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...u
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                flatten() {
                    this.options.type = "keyframes", this.options.ease = "linear"
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }
            let ei = (t, e, i) => {
                    let n = e - t;
                    return 0 === n ? 1 : (i - t) / n
                },
                en = (t, e, i = 10) => {
                    let n = "",
                        r = Math.max(Math.round(e / i), 2);
                    for (let e = 0; e < r; e++) n += t(ei(0, r - 1, e)) + ", ";
                    return `linear(${n.substring(0,n.length-2)})`
                };

            function er(t, e, i) {
                var n, r;
                let s = Math.max(e - 5, 0);
                return n = i - t(s), (r = e - s) ? 1e3 / r * n : 0
            }
            let es = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };

            function eo(t, e) {
                return t * Math.sqrt(1 - e * e)
            }

            function ea(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let el = ["duration", "bounce"],
                eu = ["stiffness", "damping", "mass"];

            function eh(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function ec(t = es.visualDuration, e = es.bounce) {
                let i;
                let n = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: r,
                        restDelta: s
                    } = n,
                    o = n.keyframes[0],
                    a = n.keyframes[n.keyframes.length - 1],
                    l = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: u,
                        damping: h,
                        mass: c,
                        duration: d,
                        velocity: p,
                        isResolvedFromDuration: f
                    } = function(t) {
                        let e = {
                            velocity: es.velocity,
                            stiffness: es.stiffness,
                            damping: es.damping,
                            mass: es.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!eh(t, eu) && eh(t, el)) {
                            if (t.visualDuration) {
                                let i = 2 * Math.PI / (1.2 * t.visualDuration),
                                    n = i * i,
                                    r = 2 * tn(.05, 1, 1 - t.bounce) * Math.sqrt(n);
                                e = { ...e,
                                    mass: es.mass,
                                    stiffness: n,
                                    damping: r
                                }
                            } else {
                                let i = function({
                                    duration: t = es.duration,
                                    bounce: e = es.bounce,
                                    velocity: i = es.velocity,
                                    mass: n = es.mass
                                }) {
                                    let r, s;
                                    (0, Z.K)(t <= m(es.maxDuration), "Spring duration must be 10 seconds or less");
                                    let o = 1 - e;
                                    o = tn(es.minDamping, es.maxDamping, o), t = tn(es.minDuration, es.maxDuration, v(t)), o < 1 ? (r = e => {
                                        let n = e * o,
                                            r = n * t;
                                        return .001 - (n - i) / eo(e, o) * Math.exp(-r)
                                    }, s = e => {
                                        let n = e * o * t,
                                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                            a = eo(Math.pow(e, 2), o);
                                        return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / a
                                    }) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), s = e => t * t * (i - e) * Math.exp(-e * t));
                                    let a = function(t, e, i) {
                                        let n = i;
                                        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                        return n
                                    }(r, s, 5 / t);
                                    if (t = m(t), isNaN(a)) return {
                                        stiffness: es.stiffness,
                                        damping: es.damping,
                                        duration: t
                                    }; {
                                        let e = Math.pow(a, 2) * n;
                                        return {
                                            stiffness: e,
                                            damping: 2 * o * Math.sqrt(n * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = { ...e,
                                    ...i,
                                    mass: es.mass
                                }).isResolvedFromDuration = !0
                            }
                        }
                        return e
                    }({ ...n,
                        velocity: -v(n.velocity || 0)
                    }),
                    y = p || 0,
                    g = h / (2 * Math.sqrt(u * c)),
                    x = a - o,
                    w = v(Math.sqrt(u / c)),
                    b = 5 > Math.abs(x);
                if (r || (r = b ? es.restSpeed.granular : es.restSpeed.default), s || (s = b ? es.restDelta.granular : es.restDelta.default), g < 1) {
                    let t = eo(w, g);
                    i = e => a - Math.exp(-g * w * e) * ((y + g * w * x) / t * Math.sin(t * e) + x * Math.cos(t * e))
                } else if (1 === g) i = t => a - Math.exp(-w * t) * (x + (y + w * x) * t);
                else {
                    let t = w * Math.sqrt(g * g - 1);
                    i = e => {
                        let i = Math.exp(-g * w * e),
                            n = Math.min(t * e, 300);
                        return a - i * ((y + g * w * x) * Math.sinh(n) + t * x * Math.cosh(n)) / t
                    }
                }
                let P = {
                    calculatedDuration: f && d || null,
                    next: t => {
                        let e = i(t);
                        if (f) l.done = t >= d;
                        else {
                            let n = 0;
                            g < 1 && (n = 0 === t ? m(y) : er(i, t, e));
                            let o = Math.abs(n) <= r,
                                u = Math.abs(a - e) <= s;
                            l.done = o && u
                        }
                        return l.value = l.done ? a : e, l
                    },
                    toString: () => {
                        let t = Math.min(ea(P), 2e4),
                            e = en(e => P.next(t * e).value, t, 30);
                        return t + "ms " + e
                    }
                };
                return P
            }

            function ed({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let p = t[0],
                    f = {
                        done: !1,
                        value: p
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    y = i * e,
                    g = p + y,
                    x = void 0 === o ? g : o(g);
                x !== g && (y = x - p);
                let w = t => -y * Math.exp(-t / n),
                    b = t => x + w(t),
                    P = t => {
                        let e = w(t),
                            i = b(t);
                        f.done = Math.abs(e) <= u, f.value = f.done ? x : i
                    },
                    S = t => {
                        m(f.value) && (c = t, d = ec({
                            keyframes: [f.value, v(f.value)],
                            velocity: er(b, t, f.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, P(t), S(t)), void 0 !== c && t >= c) ? d.next(t - c) : (e || P(t), f)
                    }
                }
            }
            let ep = $(.42, 0, 1, 1),
                ef = $(0, 0, .58, 1),
                em = $(.42, 0, .58, 1),
                ev = t => Array.isArray(t) && "number" != typeof t[0],
                ey = t => Array.isArray(t) && "number" == typeof t[0],
                eg = {
                    linear: k.Z,
                    easeIn: ep,
                    easeInOut: em,
                    easeOut: ef,
                    circIn: Y,
                    circInOut: H,
                    circOut: K,
                    backIn: W,
                    backInOut: z,
                    backOut: N,
                    anticipate: _
                },
                ex = t => {
                    if (ey(t)) {
                        (0, Z.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return $(e, i, n, r)
                    }
                    return "string" == typeof t ? ((0, Z.k)(void 0 !== eg[t], `Invalid easing type '${t}'`), eg[t]) : t
                },
                ew = (t, e) => i => e(t(i)),
                eb = (...t) => t.reduce(ew),
                eP = (t, e, i) => t + (e - t) * i;

            function eS(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function eT(t, e) {
                return i => i > 0 ? e : t
            }
            let eA = (t, e, i) => {
                    let n = t * t,
                        r = i * (e * e - n) + n;
                    return r < 0 ? 0 : Math.sqrt(r)
                },
                eE = [t$, tB, tI],
                eC = t => eE.find(e => e.test(t));

            function eM(t) {
                let e = eC(t);
                if ((0, Z.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let i = e.parse(t);
                return e === tI && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let n = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - n;
                        r = eS(a, n, t + 1 / 3), s = eS(a, n, t), o = eS(a, n, t - 1 / 3)
                    } else r = s = o = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: n
                    }
                }(i)), i
            }
            let eV = (t, e) => {
                    let i = eM(t),
                        n = eM(e);
                    if (!i || !n) return eT(t, e);
                    let r = { ...i
                    };
                    return t => (r.red = eA(i.red, n.red, t), r.green = eA(i.green, n.green, t), r.blue = eA(i.blue, n.blue, t), r.alpha = eP(i.alpha, n.alpha, t), tB.transform(r))
                },
                ek = new Set(["none", "hidden"]);

            function eD(t, e) {
                return i => eP(t, e, i)
            }

            function ej(t) {
                return "number" == typeof t ? eD : "string" == typeof t ? tt(t) ? eT : tU.test(t) ? eV : eF : Array.isArray(t) ? eR : "object" == typeof t ? tU.test(t) ? eV : eL : eT
            }

            function eR(t, e) {
                let i = [...t],
                    n = i.length,
                    r = t.map((t, i) => ej(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < n; e++) i[e] = r[e](t);
                    return i
                }
            }

            function eL(t, e) {
                let i = { ...t,
                        ...e
                    },
                    n = {};
                for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = ej(t[r])(t[r], e[r]));
                return t => {
                    for (let e in n) i[e] = n[e](t);
                    return i
                }
            }
            let eF = (t, e) => {
                let i = tZ.createTransformer(e),
                    n = tY(t),
                    r = tY(e);
                return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? ek.has(t) && !r.values.length || ek.has(e) && !n.values.length ? ek.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : eb(eR(function(t, e) {
                    var i;
                    let n = [],
                        r = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s],
                            a = t.indexes[o][r[o]],
                            l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        n[s] = l, r[o]++
                    }
                    return n
                }(n, r), r.values), i) : ((0, Z.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), eT(t, e))
            };

            function eO(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? eP(t, e, i) : ej(t)(t, e)
            }

            function eB({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = ev(n) ? n.map(ex) : ex(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = function(t, e, {
                        clamp: i = !0,
                        ease: n,
                        mixer: r
                    } = {}) {
                        let s = t.length;
                        if ((0, Z.k)(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                        if (2 === s && t[0] === t[1]) return () => e[1];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let o = function(t, e, i) {
                                let n = [],
                                    r = i || eO,
                                    s = t.length - 1;
                                for (let i = 0; i < s; i++) {
                                    let s = r(t[i], t[i + 1]);
                                    e && (s = eb(Array.isArray(e) ? e[i] || k.Z : e, s)), n.push(s)
                                }
                                return n
                            }(e, n, r),
                            a = o.length,
                            l = e => {
                                let i = 0;
                                if (a > 1)
                                    for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                                let n = ei(t[i], t[i + 1], e);
                                return o[i](n)
                            };
                        return i ? e => l(tn(t[0], t[s - 1], e)) : l
                    }((i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let r = ei(0, e, n);
                                t.push(eP(i, 1, r))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || em).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = o(e), s.done = e >= t, s)
                }
            }
            let e$ = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => R.update(e, !0),
                        stop: () => L(e),
                        now: () => F.isProcessing ? F.timestamp : t4.now()
                    }
                },
                eI = {
                    decay: ed,
                    inertia: ed,
                    tween: eB,
                    keyframes: eB,
                    spring: ec
                },
                eU = t => t / 100;
            class eN extends ee {
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options, s = (null == n ? void 0 : n.KeyframeResolver) || tV;
                    this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                }
                initPlayback(t) {
                    let e, i;
                    let {
                        type: n = "keyframes",
                        repeat: r = 0,
                        repeatDelay: s = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, l = t8(n) ? n : eI[n] || eB;
                    l !== eB && "number" != typeof t[0] && (e = eb(eU, eO(t[0], t[1])), t = [0, 100]);
                    let u = l({ ...this.options,
                        keyframes: t
                    });
                    "mirror" === o && (i = l({ ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -a
                    })), null === u.calculatedDuration && (u.calculatedDuration = ea(u));
                    let {
                        calculatedDuration: h
                    } = u, c = h + s;
                    return {
                        generator: u,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: e,
                        calculatedDuration: h,
                        resolvedDuration: c,
                        totalDuration: c * (r + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: i
                    } = this;
                    if (!i) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: r,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: h
                    } = i;
                    if (null === this.startTime) return r.next(0);
                    let {
                        delay: c,
                        repeat: d,
                        repeatType: p,
                        repeatDelay: f,
                        onUpdate: m
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
                        y = this.speed >= 0 ? v < 0 : v > u;
                    this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let g = this.currentTime,
                        x = r;
                    if (d) {
                        let t = Math.min(this.currentTime, u) / h,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (i = 1 - i, f && (i -= f / h)) : "mirror" === p && (x = s)), g = tn(0, 1, i) * h
                    }
                    let w = y ? {
                        done: !1,
                        value: a[0]
                    } : x.next(g);
                    o && (w.value = o(w.value));
                    let {
                        done: b
                    } = w;
                    y || null === l || (b = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
                    return P && void 0 !== n && (w.value = E(a, this.options, n)), m && m(w.value), P && this.finish(), w
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? v(t.calculatedDuration) : 0
                }
                get time() {
                    return v(this.currentTime)
                }
                set time(t) {
                    t = m(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = v(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = e$,
                        onPlay: e,
                        startTime: i
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let n = this.driver.now();
                    null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }
            let eW = new Set(["opacity", "clipPath", "filter", "transform"]);

            function ez(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let e_ = {
                    linearEasing: void 0
                },
                eY = function(t, e) {
                    let i = ez(t);
                    return () => {
                        var t;
                        return null !== (t = e_[e]) && void 0 !== t ? t : i()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                eK = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                eH = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: eK([0, .65, .55, 1]),
                    circOut: eK([.55, 0, 1, .45]),
                    backIn: eK([.31, .01, .66, -.59]),
                    backOut: eK([.33, 1.53, .69, .99])
                };

            function eX(t, e) {
                t.timeline = e, t.onfinish = null
            }
            let eZ = ez(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                eq = {
                    anticipate: _,
                    backInOut: z,
                    circInOut: H
                };
            class eG extends ee {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options;
                    this.resolver = new t9(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var i, n;
                    let {
                        duration: r = 300,
                        times: s,
                        ease: o,
                        type: a,
                        motionValue: l,
                        name: u,
                        startTime: h
                    } = this.options;
                    if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
                    if ("string" == typeof o && eY() && o in eq && (o = eq[o]), t8((n = this.options).type) || "spring" === n.type || ! function t(e) {
                            return !!("function" == typeof e && eY() || !e || "string" == typeof e && (e in eH || eY()) || ey(e) || Array.isArray(e) && e.every(t))
                        }(n.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: i,
                            motionValue: n,
                            element: l,
                            ...u
                        } = this.options, h = function(t, e) {
                            let i = new eN({ ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: t[0]
                                },
                                r = [],
                                s = 0;
                            for (; !n.done && s < 2e4;) r.push((n = i.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: r,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = h.keyframes).length && (t[1] = t[0]), r = h.duration, s = h.times, o = h.ease, a = "keyframes"
                    }
                    let c = function(t, e, i, {
                        delay: n = 0,
                        duration: r = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a = "easeInOut",
                        times: l
                    } = {}) {
                        let u = {
                            [e]: i
                        };
                        l && (u.offset = l);
                        let h = function t(e, i) {
                            if (e) return "function" == typeof e && eY() ? en(e, i) : ey(e) ? eK(e) : Array.isArray(e) ? e.map(e => t(e, i) || eH.easeOut) : eH[e]
                        }(a, r);
                        return Array.isArray(h) && (u.easing = h), t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(l.owner.current, u, t, { ...this.options,
                        duration: r,
                        times: s,
                        ease: o
                    });
                    return c.startTime = null != h ? h : this.calcStartTime(), this.pendingTimeline ? (eX(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
                        let {
                            onComplete: i
                        } = this.options;
                        l.set(E(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: c,
                        duration: r,
                        times: s,
                        type: a,
                        ease: o,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return v(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return v(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.currentTime = m(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return k.Z;
                        let {
                            animation: i
                        } = e;
                        eX(i, t)
                    } else this.pendingTimeline = t;
                    return k.Z
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: i,
                        duration: n,
                        type: r,
                        ease: s,
                        times: o
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: a,
                            element: l,
                            ...u
                        } = this.options, h = new eN({ ...u,
                            keyframes: i,
                            duration: n,
                            type: r,
                            ease: s,
                            times: o,
                            isGenerator: !0
                        }), c = m(this.time);
                        t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10)
                    }
                    let {
                        onStop: a
                    } = this.options;
                    a && a(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: n,
                        repeatType: r,
                        damping: s,
                        type: o
                    } = t;
                    return eZ() && i && eW.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== r && 0 !== s && "inertia" !== o
                }
            }
            let eJ = ez(() => void 0 !== window.ScrollTimeline);
            class eQ {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t, e) {
                    let i = this.animations.map(i => eJ() && i.attachTimeline ? i.attachTimeline(t) : e(i));
                    return () => {
                        i.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                flatten() {
                    this.runAll("flatten")
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            let e0 = (t, e, i, n = {}, r, s) => o => {
                    let a = P(n, t) || {},
                        l = a.delay || n.delay || 0,
                        {
                            elapsed: u = 0
                        } = n;
                    u -= m(l);
                    let h = {
                        keyframes: Array.isArray(i) ? i : [null, i],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...a,
                        delay: -u,
                        onUpdate: t => {
                            e.set(t), a.onUpdate && a.onUpdate(t)
                        },
                        onComplete: () => {
                            o(), a.onComplete && a.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: s ? void 0 : r
                    };
                    ! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: n,
                        staggerDirection: r,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(a) && (h = { ...h,
                        ...b(t, h)
                    }), h.duration && (h.duration = m(h.duration)), h.repeatDelay && (h.repeatDelay = m(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
                    let c = !1;
                    if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0, 0 !== h.delay || (c = !0)), (T.current || S.skipAnimations) && (c = !0, h.duration = 0, h.delay = 0), c && !s && void 0 !== e.get()) {
                        let t = E(h.keyframes, a);
                        if (void 0 !== t) return R.update(() => {
                            h.onUpdate(t), h.onComplete()
                        }), new eQ([])
                    }
                    return !s && eG.supports(h) ? new eG(h) : new eN(h)
                },
                e1 = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                e5 = t => s(t) ? t[t.length - 1] || 0 : t;

            function e3(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function e2(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class e6 {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return e3(this.subscriptions, t), () => e2(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let e9 = t => !isNaN(parseFloat(t)),
                e8 = {
                    current: void 0
                };
            class e7 {
                constructor(t, e = {}) {
                    this.version = "11.15.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = t4.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = t4.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = e9(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new e6);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), R.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return e8.current && e8.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = t4.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), i ? 1e3 / i * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function e4(t, e) {
                return new e7(t, e)
            }
            let it = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                ie = "data-" + it("framerAppearId"),
                ii = t => !!(t && t.getVelocity);

            function ir(t, e) {
                let i = t.getValue("willChange");
                if (ii(i) && i.add) return i.add(e)
            }

            function is(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: r
            } = {}) {
                var s;
                let {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = e;
                n && (o = n);
                let u = [],
                    c = r && t.animationState && t.animationState.getState()[r];
                for (let e in l) {
                    let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null),
                        r = l[e];
                    if (void 0 === r || c && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(c, e)) continue;
                    let a = {
                            delay: i,
                            ...P(o || {}, e)
                        },
                        h = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = t.props[ie];
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, R);
                            null !== t && (a.startTime = t, h = !0)
                        }
                    }
                    ir(t, e), n.start(e0(e, n, r, t.shouldReduceMotion && f.has(e) ? {
                        type: !1
                    } : a, t, h));
                    let d = n.animation;
                    d && u.push(d)
                }
                return a && Promise.all(u).then(() => {
                    R.update(() => {
                        a && function(t, e) {
                            let {
                                transitionEnd: i = {},
                                transition: n = {},
                                ...r
                            } = h(t, e) || {};
                            for (let e in r = { ...r,
                                    ...i
                                }) {
                                let i = e5(r[e]);
                                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, e4(i))
                            }
                        }(t, a)
                    })
                }), u
            }

            function io(t, e, i = {}) {
                var n;
                let r = h(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (s = i.transitionOverride);
                let o = r ? () => Promise.all(is(t, r, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(ia).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(io(t, e, { ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + n, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(i.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function ia(t, e) {
                return t.sortNodePosition(e)
            }
            let il = d.length,
                iu = [...c].reverse(),
                ih = c.length;

            function ic(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function id() {
                return {
                    animate: ic(!0),
                    whileInView: ic(),
                    whileHover: ic(),
                    whileTap: ic(),
                    whileDrag: ic(),
                    whileFocus: ic(),
                    exit: ic()
                }
            }
            class ip {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class im extends ip {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let n;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => io(t, e, i)));
                                else if ("string" == typeof e) n = io(t, e, i);
                                else {
                                    let r = "function" == typeof e ? h(t, e, i.custom) : e;
                                    n = Promise.all(is(t, r, i))
                                }
                                return n.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, i))),
                            i = id(),
                            n = !0,
                            l = e => (i, n) => {
                                var r;
                                let s = h(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                                if (s) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = s;
                                    i = { ...i,
                                        ...n,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function u(u) {
                            let {
                                props: h
                            } = t, c = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < il; t++) {
                                    let n = d[t],
                                        r = e.props[n];
                                    (a(r) || !1 === r) && (i[n] = r)
                                }
                                return i
                            }(t.parent) || {}, p = [], f = new Set, m = {}, v = 1 / 0;
                            for (let e = 0; e < ih; e++) {
                                var y;
                                let d = iu[e],
                                    g = i[d],
                                    x = void 0 !== h[d] ? h[d] : c[d],
                                    w = a(x),
                                    b = d === u ? g.isActive : null;
                                !1 === b && (v = e);
                                let P = x === c[d] && x !== h[d] && w;
                                if (P && n && t.manuallyAnimateOnMount && (P = !1), g.protectedKeys = { ...m
                                    }, !g.isActive && null === b || !x && !g.prevProp || r(x) || "boolean" == typeof x) continue;
                                let S = (y = g.prevProp, "string" == typeof x ? x !== y : !!Array.isArray(x) && !o(x, y)),
                                    T = S || d === u && g.isActive && !P && w || e > v && w,
                                    A = !1,
                                    E = Array.isArray(x) ? x : [x],
                                    C = E.reduce(l(d), {});
                                !1 === b && (C = {});
                                let {
                                    prevResolvedValues: M = {}
                                } = g, V = { ...M,
                                    ...C
                                }, k = e => {
                                    T = !0, f.has(e) && (A = !0, f.delete(e)), g.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in V) {
                                    let e = C[t],
                                        i = M[t];
                                    if (!m.hasOwnProperty(t))(s(e) && s(i) ? o(e, i) : e === i) ? void 0 !== e && f.has(t) ? k(t) : g.protectedKeys[t] = !0 : null != e ? k(t) : f.add(t)
                                }
                                g.prevProp = x, g.prevResolvedValues = C, g.isActive && (m = { ...m,
                                    ...C
                                }), n && t.blockInitialAnimation && (T = !1);
                                let D = !(P && S) || A;
                                T && D && p.push(...E.map(t => ({
                                    animation: t,
                                    options: {
                                        type: d
                                    }
                                })))
                            }
                            if (f.size) {
                                let e = {};
                                f.forEach(i => {
                                    let n = t.getBaseTarget(i),
                                        r = t.getValue(i);
                                    r && (r.liveStyle = !0), e[i] = null != n ? n : null
                                }), p.push({
                                    animation: e
                                })
                            }
                            let g = !!p.length;
                            return n && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (g = !1), n = !1, g ? e(p) : Promise.resolve()
                        }
                        return {
                            animateChanges: u,
                            setActive: function(e, n) {
                                var r;
                                if (i[e].isActive === n) return Promise.resolve();
                                null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                }), i[e].isActive = n;
                                let s = u(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = id(), n = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    r(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let iv = 0;
            class iy extends ip {
                constructor() {
                    super(...arguments), this.id = iv++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let ig = {
                x: !1,
                y: !1
            };

            function ix(t, e) {
                let i = function(t, e, i) {
                        var n;
                        if (t instanceof Element) return [t];
                        if ("string" == typeof t) {
                            let r = document;
                            e && (r = e.current);
                            let s = null !== (n = null == i ? void 0 : i[t]) && void 0 !== n ? n : r.querySelectorAll(t);
                            return s ? Array.from(s) : []
                        }
                        return Array.from(t)
                    }(t),
                    n = new AbortController;
                return [i, {
                    passive: !0,
                    ...e,
                    signal: n.signal
                }, () => n.abort()]
            }

            function iw(t) {
                return e => {
                    "touch" === e.pointerType || ig.x || ig.y || t(e)
                }
            }
            let ib = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary,
                iP = new WeakSet;

            function iS(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function iT(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let iA = (t, e) => {
                    let i = t.currentTarget;
                    if (!i) return;
                    let n = iS(() => {
                        if (iP.has(i)) return;
                        iT(i, "down");
                        let t = iS(() => {
                            iT(i, "up")
                        });
                        i.addEventListener("keyup", t, e), i.addEventListener("blur", () => iT(i, "cancel"), e)
                    });
                    i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
                },
                iE = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                iC = (t, e) => !!e && (t === e || iC(t, e.parentElement));

            function iM(t) {
                return ib(t) && !(ig.x || ig.y)
            }

            function iV(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let ik = t => e => ib(e) && t(e, iV(e));

            function iD(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }

            function ij(t, e, i, n) {
                return iD(t, e, ik(i), n)
            }
            let iR = (t, e) => Math.abs(t - e);
            class iL {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: n,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = iB(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                r = (t = i.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(iR(t.x, e.x) ** 2 + iR(t.y, e.y) ** 2) >= 3);
                            if (!n && !r) return;
                            let {
                                point: s
                            } = i, {
                                timestamp: o
                            } = F;
                            this.history.push({ ...s,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = iF(e, this.transformPagePoint), R.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: n,
                                resumeAnimation: r
                            } = this.handlers;
                            if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = iB("pointercancel" === t.type ? this.lastMoveEventInfo : iF(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, s), n && n(t, s)
                        }, !ib(t)) return;
                    this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                    let s = iF(iV(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = F;
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, iB(s, this.history)), this.removeListeners = eb(ij(this.contextWindow, "pointermove", this.handlePointerMove), ij(this.contextWindow, "pointerup", this.handlePointerUp), ij(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), L(this.updatePoint)
                }
            }

            function iF(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function iO(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function iB({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: iO(t, i$(e)),
                    offset: iO(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = i$(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > m(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = v(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function i$(t) {
                return t[t.length - 1]
            }

            function iI(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function iU(t) {
                return t.max - t.min
            }

            function iN(t, e, i, n = .5) {
                t.origin = n, t.originPoint = eP(e.min, e.max, t.origin), t.scale = iU(i) / iU(e), t.translate = eP(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function iW(t, e, i, n) {
                iN(t.x, e.x, i.x, n ? n.originX : void 0), iN(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function iz(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + iU(e)
            }

            function i_(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + iU(e)
            }

            function iY(t, e, i) {
                i_(t.x, e.x, i.x), i_(t.y, e.y, i.y)
            }

            function iK(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function iH(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function iX(t, e, i) {
                return {
                    min: iZ(t, e),
                    max: iZ(t, i)
                }
            }

            function iZ(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let iq = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                iG = () => ({
                    x: iq(),
                    y: iq()
                }),
                iJ = () => ({
                    min: 0,
                    max: 0
                }),
                iQ = () => ({
                    x: iJ(),
                    y: iJ()
                });

            function i0(t) {
                return [t("x"), t("y")]
            }

            function i1({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function i5(t) {
                return void 0 === t || 1 === t
            }

            function i3({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !i5(t) || !i5(e) || !i5(i)
            }

            function i2(t) {
                return i3(t) || i6(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function i6(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function i9(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function i8(t, e = 0, i = 1, n, r) {
                t.min = i9(t.min, e, i, n, r), t.max = i9(t.max, e, i, n, r)
            }

            function i7(t, {
                x: e,
                y: i
            }) {
                i8(t.x, e.translate, e.scale, e.originPoint), i8(t.y, i.translate, i.scale, i.originPoint)
            }

            function i4(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function nt(t, e, i, n, r = .5) {
                let s = eP(t.min, t.max, r);
                i8(t, e, i, s, n)
            }

            function ne(t, e) {
                nt(t.x, e.x, e.scaleX, e.scale, e.originX), nt(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function ni(t, e) {
                return i1(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let nn = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                nr = new WeakMap;
            class ns {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = iQ(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new iL(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(iV(t).point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === i || "y" === i ? ig[i] ? null : (ig[i] = !0, () => {
                                    ig[i] = !1
                                }) : ig.x || ig.y ? null : (ig.x = ig.y = !0, () => {
                                    ig.x = ig.y = !1
                                }), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), i0(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tu.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = iU(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && R.postRender(() => r(t, e)), ir(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openDragLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => i0(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: nn(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && R.postRender(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !no(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? eP(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? eP(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, r = this.constraints;
                    e && iI(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: iK(t.x, i, r),
                            y: iK(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: iX(t, "left", "right"),
                            y: iX(t, "top", "bottom")
                        }
                    }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && i0(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !iI(e)) return !1;
                    let n = e.current;
                    (0, Z.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = ni(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (i4(n.x, r.offset.x), i4(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: iH((t = r.layout.layoutBox).x, s.x),
                            y: iH(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = i1(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(i0(o => {
                        if (!no(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return ir(this.visualElement, t), i.start(e0(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    i0(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    i0(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    i0(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!no(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - eP(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!iI(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    i0(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = iU(t),
                                    r = iU(e);
                                return r > n ? i = ei(e.min, e.max - n, t.min) : n > r && (i = ei(t.min, t.max - r, e.min)), tn(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), i0(e => {
                        if (!no(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set(eP(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    nr.set(this.visualElement, this);
                    let t = ij(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            iI(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), R.read(e);
                    let r = iD(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (i0(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function no(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class na extends ip {
                constructor(t) {
                    super(t), this.removeGroupControls = k.Z, this.removeListeners = k.Z, this.controls = new ns(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || k.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let nl = t => (e, i) => {
                t && R.postRender(() => t(e, i))
            };
            class nu extends ip {
                constructor() {
                    super(...arguments), this.removePointerDownListener = k.Z
                }
                onPointerDown(t) {
                    this.session = new iL(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: nn(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: nl(t),
                        onStart: nl(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, n && R.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = ij(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var nh = i(53858),
                nc = i(23056),
                nd = i(15792),
                np = i(71608);
            let nf = (0, nc.createContext)({}),
                nm = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function nv(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let ny = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!th.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let i = nv(t, e.target.x),
                            n = nv(t, e.target.y);
                        return `${i}% ${n}%`
                    }
                },
                ng = {},
                {
                    schedule: nx,
                    cancel: nw
                } = j(queueMicrotask, !1);
            class nb extends nc.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(ng, nS), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), nm.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || R.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), nx.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function nP(t) {
                let [e, i] = (0, nd.oO)(), n = (0, nc.useContext)(np.p);
                return (0, nh.jsx)(nb, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, nc.useContext)(nf),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let nS = {
                    borderRadius: { ...ny,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: ny,
                    borderTopRightRadius: ny,
                    borderBottomLeftRadius: ny,
                    borderBottomRightRadius: ny,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let n = tZ.parse(t);
                            if (n.length > 5) return t;
                            let r = tZ.createTransformer(t),
                                s = "number" != typeof n[0] ? 1 : 0,
                                o = i.x.scale * e.x,
                                a = i.y.scale * e.y;
                            n[0 + s] /= o, n[1 + s] /= a;
                            let l = eP(o, a, .5);
                            return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                        }
                    }
                },
                nT = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nA = nT.length,
                nE = t => "string" == typeof t ? parseFloat(t) : t,
                nC = t => "number" == typeof t || th.test(t);

            function nM(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let nV = nD(0, .5, K),
                nk = nD(.5, .95, k.Z);

            function nD(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i(ei(t, e, n))
            }

            function nj(t, e) {
                t.min = e.min, t.max = e.max
            }

            function nR(t, e) {
                nj(t.x, e.x), nj(t.y, e.y)
            }

            function nL(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function nF(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function nO(t, e, [i, n, r], s, o) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                    if (tu.test(e) && (e = parseFloat(e), e = eP(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = eP(s.min, s.max, n);
                    t === s && (a -= e), t.min = nF(t.min, e, i, a, r), t.max = nF(t.max, e, i, a, r)
                }(t, e[i], e[n], e[r], e.scale, s, o)
            }
            let nB = ["x", "scaleX", "originX"],
                n$ = ["y", "scaleY", "originY"];

            function nI(t, e, i, n) {
                nO(t.x, e, nB, i ? i.x : void 0, n ? n.x : void 0), nO(t.y, e, n$, i ? i.y : void 0, n ? n.y : void 0)
            }

            function nU(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function nN(t) {
                return nU(t.x) && nU(t.y)
            }

            function nW(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function nz(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function n_(t, e) {
                return nz(t.x, e.x) && nz(t.y, e.y)
            }

            function nY(t) {
                return iU(t.x) / iU(t.y)
            }

            function nK(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class nH {
                constructor() {
                    this.members = []
                }
                add(t) {
                    e3(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (e2(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let nX = (t, e) => t.depth - e.depth;
            class nZ {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    e3(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    e2(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(nX), this.isDirty = !1, this.children.forEach(t)
                }
            }

            function nq(t) {
                let e = ii(t) ? t.get() : t;
                return e1(e) ? e.toValue() : e
            }
            let nG = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                nJ = "undefined" != typeof window && void 0 !== window.MotionDebug,
                nQ = ["", "X", "Y", "Z"],
                n0 = {
                    visibility: "hidden"
                },
                n1 = 0;

            function n5(t, e, i, n) {
                let {
                    latestValues: r
                } = e;
                r[t] && (i[t] = r[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function n3({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = n1++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, nJ && (nG.totalNodes = nG.resolvedTargetDeltas = nG.recalculatedProjection = 0), this.nodes.forEach(n9), this.nodes.forEach(rn), this.nodes.forEach(rr), this.nodes.forEach(n8), nJ && window.MotionDebug.record(nG)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new nZ)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new e6), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = t4.now(),
                                        n = ({
                                            timestamp: r
                                        }) => {
                                            let s = r - i;
                                            s >= e && (L(n), t(s - e))
                                        };
                                    return R.read(n, !0), () => L(n)
                                }(n, 250), nm.hasAnimatedSinceResize && (nm.hasAnimatedSinceResize = !1, this.nodes.forEach(ri))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || rh,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !n_(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...P(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || ri(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, L(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(rs), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: i
                                } = e.options;
                                if (!i) return;
                                let n = i.props[ie];
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", R, !(t || i))
                                }
                                let {
                                    parent: r
                                } = e;
                                r && !r.hasCheckedOptimisedAppear && t(r)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(n4);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(rt), this.isUpdating = !1, this.nodes.forEach(re), this.nodes.forEach(n2), this.nodes.forEach(n6), this.clearAllSnapshots();
                        let t = t4.now();
                        F.delta = tn(0, 1e3 / 60, t - F.timestamp), F.timestamp = t, F.isProcessing = !0, O.update.process(F), O.preRender.process(F), O.render.process(F), F.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, nx.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(n7), this.sharedNodes.forEach(ro)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, R.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        R.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = iQ(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = n(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: i(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !nN(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || i2(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), rp((e = n).x), rp(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return iQ();
                        let i = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(rm))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (i4(i.x, t.offset.x), i4(i.y, t.offset.y))
                        }
                        return i
                    }
                    removeElementScroll(t) {
                        var e;
                        let i = iQ();
                        if (nR(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return i;
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            n !== this.root && r && s.layoutScroll && (r.wasRoot && nR(i, t), i4(i.x, r.offset.x), i4(i.y, r.offset.y))
                        }
                        return i
                    }
                    applyTransform(t, e = !1) {
                        let i = iQ();
                        nR(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && ne(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), i2(n.latestValues) && ne(i, n.latestValues)
                        }
                        return i2(this.latestValues) && ne(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = iQ();
                        nR(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !i2(i.latestValues)) continue;
                            i3(i.latestValues) && i.updateSnapshot();
                            let n = iQ();
                            nR(n, i.measurePageBox()), nI(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return i2(this.latestValues) && nI(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = F.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = iQ(), this.relativeTargetOrigin = iQ(), iY(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), nR(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = iQ(), this.targetWithTransforms = iQ()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, iz(i.x, n.x, r.x), iz(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nR(this.target, this.layout.layoutBox), i7(this.target, this.targetDelta)) : nR(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = iQ(), this.relativeTargetOrigin = iQ(), iY(this.relativeTargetOrigin, this.target, t.target), nR(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                nJ && nG.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || i3(this.parent.latestValues) || i6(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === F.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        nR(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (r = i[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = r.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && ne(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, i7(t, s)), n && i2(r.latestValues) && ne(t, r.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = iQ());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (nL(this.prevProjectionDelta.x, this.projectionDelta.x), nL(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), iW(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && nK(this.projectionDelta.x, this.prevProjectionDelta.x) && nK(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), nJ && nG.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = iG(), this.projectionDelta = iG(), this.projectionDeltaWithTransform = iG()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = iG();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = iQ(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(ru));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (ra(o.x, t.x, n), ra(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, d, p, f;
                                iY(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, rl(p.x, f.x, a.x, n), rl(p.y, f.y, a.y, n), i && (u = this.relativeTarget, d = i, nW(u.x, d.x) && nW(u.y, d.y)) && (this.isProjectionDirty = !1), i || (i = iQ()), nR(i, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = eP(0, void 0 !== i.opacity ? i.opacity : 1, nV(n)), t.opacityExit = eP(void 0 !== e.opacity ? e.opacity : 1, 0, nk(n))) : s && (t.opacity = eP(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < nA; r++) {
                                    let s = `border${nT[r]}Radius`,
                                        o = nM(e, s),
                                        a = nM(i, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || nC(o) === nC(a) ? (t[s] = Math.max(eP(nE(o), nE(a), n), 0), (tu.test(a) || tu.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = eP(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (L(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = R.update(() => {
                            nm.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = ii(t) ? t : e4(t);
                                return n.start(e0("", n, 1e3, i)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && rf(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || iQ();
                                let e = iU(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = iU(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            nR(e, i), ne(e, r), iW(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new nH), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let n = {};
                        i.z && n5("z", t, n, this.animationValues);
                        for (let e = 0; e < nQ.length; e++) n5(`rotate${nQ[e]}`, t, n, this.animationValues), n5(`skew${nQ[e]}`, t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return n0;
                        let n = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = nq(null == t ? void 0 : t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = nq(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !i2(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = function(t, e, i) {
                            let n = "",
                                r = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                o = (null == i ? void 0 : i.z) || 0;
                            if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: r,
                                    rotateY: s,
                                    skewX: o,
                                    skewY: a
                                } = i;
                                t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), r && (n += `rotateX(${r}deg) `), s && (n += `rotateY(${s}deg) `), o && (n += `skewX(${o}deg) `), a && (n += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, ng) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = ng[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? nq(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(n4), this.root.sharedNodes.clear()
                    }
                }
            }

            function n2(t) {
                t.updateLayout()
            }

            function n6(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? i0(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = iU(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : rf(r, i.layoutBox, e) && i0(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            o = iU(e[n]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = iG();
                    iW(o, e, i.layoutBox);
                    let a = iG();
                    s ? iW(a, t.applyTransform(n, !0), i.measuredBox) : iW(a, e, i.layoutBox);
                    let l = !nN(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let o = iQ();
                                iY(o, i.layoutBox, r.layoutBox);
                                let a = iQ();
                                iY(a, e, s.layoutBox), n_(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function n9(t) {
                nJ && nG.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function n8(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function n7(t) {
                t.clearSnapshot()
            }

            function n4(t) {
                t.clearMeasurements()
            }

            function rt(t) {
                t.isLayoutDirty = !1
            }

            function re(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function ri(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function rn(t) {
                t.resolveTargetDelta()
            }

            function rr(t) {
                t.calcProjection()
            }

            function rs(t) {
                t.resetSkewAndRotation()
            }

            function ro(t) {
                t.removeLeadSnapshot()
            }

            function ra(t, e, i) {
                t.translate = eP(e.translate, 0, i), t.scale = eP(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function rl(t, e, i, n) {
                t.min = eP(e.min, i.min, n), t.max = eP(e.max, i.max, n)
            }

            function ru(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let rh = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                rc = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                rd = rc("applewebkit/") && !rc("chrome/") ? Math.round : k.Z;

            function rp(t) {
                t.min = rd(t.min), t.max = rd(t.max)
            }

            function rf(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nY(e) - nY(i)))
            }

            function rm(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let rv = n3({
                    attachResizeListener: (t, e) => iD(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ry = {
                    current: void 0
                },
                rg = n3({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!ry.current) {
                            let t = new rv({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), ry.current = t
                        }
                        return ry.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function rx(t, e, i) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
                let r = n["onHover" + i];
                r && R.postRender(() => r(e, iV(e)))
            }
            class rw extends ip {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [n, r, s] = ix(t, i), o = iw(t => {
                            let {
                                target: i
                            } = t, n = e(t);
                            if (!n || !i) return;
                            let s = iw(t => {
                                n(t), i.removeEventListener("pointerleave", s)
                            });
                            i.addEventListener("pointerleave", s, r)
                        });
                        return n.forEach(t => {
                            t.addEventListener("pointerenter", o, r)
                        }), s
                    }(t, t => (rx(this.node, t, "Start"), t => rx(this.node, t, "End"))))
                }
                unmount() {}
            }
            class rb extends ip {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = eb(iD(this.node.current, "focus", () => this.onFocus()), iD(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }

            function rP(t, e, i) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
                let r = n["onTap" + ("End" === i ? "" : i)];
                r && R.postRender(() => r(e, iV(e)))
            }
            class rS extends ip {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [n, r, s] = ix(t, i), o = t => {
                            let n = t.currentTarget;
                            if (!iM(t) || iP.has(n)) return;
                            iP.add(n);
                            let s = e(t),
                                o = (t, e) => {
                                    window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), iM(t) && iP.has(n) && (iP.delete(n), s && s(t, {
                                        success: e
                                    }))
                                },
                                a = t => {
                                    o(t, i.useGlobalTarget || iC(n, t.target))
                                },
                                l = t => {
                                    o(t, !1)
                                };
                            window.addEventListener("pointerup", a, r), window.addEventListener("pointercancel", l, r)
                        };
                        return n.forEach(t => {
                            iE.has(t.tagName) || -1 !== t.tabIndex || (t.tabIndex = 0), (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r), t.addEventListener("focus", t => iA(t, r), r)
                        }), s
                    }(t, t => (rP(this.node, t, "Start"), (t, {
                        success: e
                    }) => rP(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let rT = new WeakMap,
                rA = new WeakMap,
                rE = t => {
                    let e = rT.get(t.target);
                    e && e(t)
                },
                rC = t => {
                    t.forEach(rE)
                },
                rM = {
                    some: 0,
                    all: 1
                };
            class rV extends ip {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : rM[n]
                    };
                    return function(t, e, i) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            rA.has(i) || rA.set(i, {});
                            let n = rA.get(i),
                                r = JSON.stringify(e);
                            return n[r] || (n[r] = new IntersectionObserver(rC, {
                                root: t,
                                ...e
                            })), n[r]
                        }(e);
                        return rT.set(t, i), n.observe(t), () => {
                            rT.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? i : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            var rk = i(66529);
            let rD = (0, nc.createContext)({});
            var rj = i(3883),
                rR = i(56339);
            let rL = (0, nc.createContext)({
                strict: !1
            });

            function rF(t) {
                return r(t.animate) || d.some(e => a(t[e]))
            }

            function rO(t) {
                return !!(rF(t) || t.variants)
            }

            function rB(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let r$ = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                rI = {};
            for (let t in r$) rI[t] = {
                isEnabled: e => r$[t].some(t => !!e[t])
            };
            var rU = i(77053);
            let rN = Symbol.for("motionComponentSymbol"),
                rW = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function rz(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (rW.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }

            function r_(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let rY = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function rK(t, e, i, n) {
                for (let i in r_(t, e, void 0, n), e.attrs) t.setAttribute(rY.has(i) ? i : it(i), e.attrs[i])
            }

            function rH(t, {
                layout: e,
                layoutId: i
            }) {
                return f.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!ng[t] || "opacity" === t)
            }

            function rX(t, e, i) {
                var n;
                let {
                    style: r
                } = t, s = {};
                for (let o in r)(ii(r[o]) || e.style && ii(e.style[o]) || rH(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
                return s
            }

            function rZ(t, e, i) {
                let n = rX(t, e, i);
                for (let i in t)(ii(t[i]) || ii(e[i])) && (n[-1 !== p.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return n
            }
            var rq = i(80858);
            let rG = t => (e, i) => {
                    let n = (0, nc.useContext)(rD),
                        s = (0, nc.useContext)(rj.O),
                        o = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: i
                        }, n, s, o) {
                            let a = {
                                latestValues: function(t, e, i, n) {
                                    let s = {},
                                        o = n(t, {});
                                    for (let t in o) s[t] = nq(o[t]);
                                    let {
                                        initial: a,
                                        animate: l
                                    } = t, h = rF(t), c = rO(t);
                                    e && c && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === l && (l = e.animate));
                                    let d = !!i && !1 === i.initial,
                                        p = (d = d || !1 === a) ? l : a;
                                    if (p && "boolean" != typeof p && !r(p)) {
                                        let e = Array.isArray(p) ? p : [p];
                                        for (let i = 0; i < e.length; i++) {
                                            let n = u(t, e[i]);
                                            if (n) {
                                                let {
                                                    transitionEnd: t,
                                                    transition: e,
                                                    ...i
                                                } = n;
                                                for (let t in i) {
                                                    let e = i[t];
                                                    if (Array.isArray(e)) {
                                                        let t = d ? e.length - 1 : 0;
                                                        e = e[t]
                                                    }
                                                    null !== e && (s[t] = e)
                                                }
                                                for (let e in t) s[e] = t[e]
                                            }
                                        }
                                    }
                                    return s
                                }(n, s, o, t),
                                renderState: e()
                            };
                            return i && (a.mount = t => i(n, t, a)), a
                        })(t, e, n, s);
                    return i ? o() : (0, rq.h)(o)
                },
                rJ = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                rQ = () => ({ ...rJ(),
                    attrs: {}
                }),
                r0 = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                r1 = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                r5 = p.length;

            function r3(t, e, i) {
                let {
                    style: n,
                    vars: r,
                    transformOrigin: s
                } = t, o = !1, a = !1;
                for (let t in e) {
                    let i = e[t];
                    if (f.has(t)) {
                        o = !0;
                        continue
                    }
                    if (J(t)) {
                        r[t] = i;
                        continue
                    } {
                        let e = r0(i, t1[t]);
                        t.startsWith("origin") ? (a = !0, s[t] = e) : n[t] = e
                    }
                }
                if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                        let n = "",
                            r = !0;
                        for (let s = 0; s < r5; s++) {
                            let o = p[s],
                                a = t[o];
                            if (void 0 === a) continue;
                            let l = !0;
                            if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                                let t = r0(a, t1[o]);
                                if (!l) {
                                    r = !1;
                                    let e = r1[o] || o;
                                    n += `${e}(${t}) `
                                }
                                i && (e[o] = t)
                            }
                        }
                        return n = n.trim(), i ? n = i(e, r ? "" : n) : r && (n = "none"), n
                    }(e, t.transform, i) : n.transform && (n.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = s;
                    n.transformOrigin = `${t} ${e} ${i}`
                }
            }

            function r2(t, e, i) {
                return "string" == typeof t ? t : th.transform(e + i * t)
            }
            let r6 = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                r9 = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function r8(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c) {
                if (r3(t, u, c), h) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: d,
                    style: p,
                    dimensions: f
                } = t;
                d.transform && (f && (p.transform = d.transform), delete d.transform), f && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                    let n = r2(e, t.x, t.width),
                        r = r2(i, t.y, t.height);
                    return `${n} ${r}`
                }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (d.x = e), void 0 !== i && (d.y = i), void 0 !== n && (d.scale = n), void 0 !== o && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? r6 : r9;
                    t[s.offset] = th.transform(-n);
                    let o = th.transform(e),
                        a = th.transform(i);
                    t[s.array] = `${o} ${a}`
                }(d, o, a, l, !1)
            }
            let r7 = t => "string" == typeof t && "svg" === t.toLowerCase(),
                r4 = {
                    useVisualState: rG({
                        scrapeMotionValuesFromProps: rZ,
                        createRenderState: rQ,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            R.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), R.render(() => {
                                r8(i, n, r7(e.tagName), t.transformTemplate), rK(e, i)
                            })
                        }
                    })
                },
                st = {
                    useVisualState: rG({
                        scrapeMotionValuesFromProps: rX,
                        createRenderState: rJ
                    })
                };

            function se(t, e, i) {
                for (let n in e) ii(e[n]) || rH(n, i) || (t[n] = e[n])
            }
            let si = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function sn(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || si.has(t)
            }
            let sr = t => !sn(t);
            try {
                (C = require("@emotion/is-prop-valid").default) && (sr = t => t.startsWith("on") ? !sn(t) : C(t))
            } catch (t) {}
            let ss = {
                    current: null
                },
                so = {
                    current: !1
                },
                sa = new WeakMap,
                sl = [...tP, tU, tZ],
                su = t => sl.find(tb(t)),
                sh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class sc {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    blockInitialAnimation: r,
                    visualState: s
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = tV, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = t4.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, R.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l
                    } = s;
                    this.latestValues = a, this.baseTarget = { ...a
                    }, this.initialValues = e.initial ? { ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!r, this.isControllingVariants = rF(e), this.isVariantNode = rO(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in h) {
                        let e = h[t];
                        void 0 !== a[t] && ii(e) && e.set(a[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, sa.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), so.current || function() {
                        if (so.current = !0, rU.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => ss.current = t.matches;
                                t.addListener(e), e()
                            } else ss.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ss.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in sa.delete(this.current), this.projection && this.projection.unmount(), L(this.notifyUpdate), L(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = f.has(t),
                        r = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && R.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        r(), s(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in rI) {
                        let e = rI[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: n
                        } = e;
                        if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iQ()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < sh.length; e++) {
                        let i = sh[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let n in e) {
                            let r = e[n],
                                s = i[n];
                            if (ii(r)) t.addValue(n, r);
                            else if (ii(s)) t.addValue(n, e4(r, {
                                owner: t
                            }));
                            else if (s !== r) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, e4(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = e4(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    var i;
                    let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != n && ("string" == typeof n && (q(n) || X(n)) ? n = parseFloat(n) : !su(n) && tZ.test(e) && (n = t2(t, e)), this.setBaseTarget(t, ii(n) ? n.get() : n)), ii(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let i;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let r = u(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        r && (i = r[t])
                    }
                    if (n && void 0 !== i) return i;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || ii(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new e6), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class sd extends sc {
                constructor() {
                    super(...arguments), this.KeyframeResolver = t9
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    ii(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
            class sp extends sd {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = r_
                }
                readValueFromInstance(t, e) {
                    if (f.has(e)) {
                        let t = t3(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = (J(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return ni(t, e)
                }
                build(t, e, i) {
                    r3(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return rX(t, e, i)
                }
            }
            class sf extends sd {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = iQ
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (f.has(e)) {
                        let t = t3(e);
                        return t && t.default || 0
                    }
                    return e = rY.has(e) ? e : it(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return rZ(t, e, i)
                }
                build(t, e, i) {
                    r8(t, e, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    rK(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = r7(t.tagName), super.mount(t)
                }
            }
            let sm = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
                })
            }((M = {
                animation: {
                    Feature: im
                },
                exit: {
                    Feature: iy
                },
                inView: {
                    Feature: rV
                },
                tap: {
                    Feature: rS
                },
                focus: {
                    Feature: rb
                },
                hover: {
                    Feature: rw
                },
                pan: {
                    Feature: nu
                },
                drag: {
                    Feature: na,
                    ProjectionNode: rg,
                    MeasureLayout: nP
                },
                layout: {
                    ProjectionNode: rg,
                    MeasureLayout: nP
                }
            }, V = (t, e) => rz(t) ? new sf(e) : new sp(e, {
                allowProjection: t !== nc.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    let {
                        preloadedFeatures: e,
                        createVisualElement: i,
                        useRender: n,
                        useVisualState: r,
                        Component: s
                    } = t;
                    e && function(t) {
                        for (let e in t) rI[e] = { ...rI[e],
                            ...t[e]
                        }
                    }(e);
                    let o = (0, nc.forwardRef)(function(t, e) {
                        var o;
                        let l;
                        let u = { ...(0, nc.useContext)(rk._),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, i = (0, nc.useContext)(np.p).id;
                                    return i && void 0 !== e ? i + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: h
                            } = u,
                            c = function(t) {
                                let {
                                    initial: e,
                                    animate: i
                                } = function(t, e) {
                                    if (rF(t)) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = t;
                                        return {
                                            initial: !1 === e || a(e) ? e : void 0,
                                            animate: a(i) ? i : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, nc.useContext)(rD));
                                return (0, nc.useMemo)(() => ({
                                    initial: e,
                                    animate: i
                                }), [rB(e), rB(i)])
                            }(t),
                            d = r(t, h);
                        if (!h && rU.j) {
                            (0, nc.useContext)(rL).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: i
                                } = rI;
                                if (!e && !i) return {};
                                let n = { ...e,
                                    ...i
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                    ProjectionNode: n.ProjectionNode
                                }
                            }(u);
                            l = t.MeasureLayout, c.visualElement = function(t, e, i, n, r) {
                                var s, o;
                                let {
                                    visualElement: a
                                } = (0, nc.useContext)(rD), l = (0, nc.useContext)(rL), u = (0, nc.useContext)(rj.O), h = (0, nc.useContext)(rk._).reducedMotion, c = (0, nc.useRef)(null);
                                n = n || l.renderer, !c.current && n && (c.current = n(t, {
                                    visualState: e,
                                    parent: a,
                                    props: i,
                                    presenceContext: u,
                                    blockInitialAnimation: !!u && !1 === u.initial,
                                    reducedMotionConfig: h
                                }));
                                let d = c.current,
                                    p = (0, nc.useContext)(nf);
                                d && !d.projection && r && ("html" === d.type || "svg" === d.type) && function(t, e, i, n) {
                                    let {
                                        layoutId: r,
                                        layout: s,
                                        drag: o,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    } = e;
                                    t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: r,
                                        layout: s,
                                        alwaysMeasureLayout: !!o || a && iI(a),
                                        visualElement: t,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: n,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(c.current, i, r, p);
                                let f = (0, nc.useRef)(!1);
                                (0, nc.useInsertionEffect)(() => {
                                    d && f.current && d.update(i, u)
                                });
                                let m = i[ie],
                                    v = (0, nc.useRef)(!!m && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, m)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, m)));
                                return (0, rR.L)(() => {
                                    d && (f.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), nx.render(d.render), v.current && d.animationState && d.animationState.animateChanges())
                                }), (0, nc.useEffect)(() => {
                                    d && (!v.current && d.animationState && d.animationState.animateChanges(), v.current && (queueMicrotask(() => {
                                        var t;
                                        null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, m)
                                    }), v.current = !1))
                                }), d
                            }(s, d, u, i, t.ProjectionNode)
                        }
                        return (0, nh.jsxs)(rD.Provider, {
                            value: c,
                            children: [l && c.visualElement ? (0, nh.jsx)(l, {
                                visualElement: c.visualElement,
                                ...u
                            }) : null, n(s, t, (o = c.visualElement, (0, nc.useCallback)(t => {
                                t && d.mount && d.mount(t), o && (t ? o.mount(t) : o.unmount()), e && ("function" == typeof e ? e(t) : iI(e) && (e.current = t))
                            }, [o])), d, h, c.visualElement)]
                        })
                    });
                    return o[rN] = s, o
                }({ ...rz(t) ? r4 : st,
                    preloadedFeatures: M,
                    useRender: function(t = !1) {
                        return (e, i, n, {
                            latestValues: r
                        }, s) => {
                            let o = (rz(e) ? function(t, e, i, n) {
                                    let r = (0, nc.useMemo)(() => {
                                        let i = rQ();
                                        return r8(i, e, r7(n), t.transformTemplate), { ...i.attrs,
                                            style: { ...i.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        se(e, t.style, t), r.style = { ...e,
                                            ...r.style
                                        }
                                    }
                                    return r
                                } : function(t, e) {
                                    let i = {},
                                        n = function(t, e) {
                                            let i = t.style || {},
                                                n = {};
                                            return se(n, i, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, nc.useMemo)(() => {
                                                    let i = rJ();
                                                    return r3(i, e, t), Object.assign({}, i.vars, i.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i
                                })(i, r, s, e),
                                a = function(t, e, i) {
                                    let n = {};
                                    for (let r in t)("values" !== r || "object" != typeof t.values) && (sr(r) || !0 === i && sn(r) || !e && !sn(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                    return n
                                }(i, "string" == typeof e, t),
                                l = e !== nc.Fragment ? { ...a,
                                    ...o,
                                    ref: n
                                } : {},
                                {
                                    children: u
                                } = i,
                                h = (0, nc.useMemo)(() => ii(u) ? u.get() : u, [u]);
                            return (0, nc.createElement)(e, { ...l,
                                children: h
                            })
                        }
                    }(e),
                    createVisualElement: V,
                    Component: t
                })
            }))
        },
        77053: function(t, e, i) {
            "use strict";
            i.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof window
        },
        80858: function(t, e, i) {
            "use strict";
            i.d(e, {
                h: function() {
                    return r
                }
            });
            var n = i(23056);

            function r(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        56339: function(t, e, i) {
            "use strict";
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(23056);
            let r = i(77053).j ? n.useLayoutEffect : n.useEffect
        },
        43939: function(t, e, i) {
            "use strict";
            i.d(e, {
                K: function() {
                    return r
                },
                k: function() {
                    return s
                }
            });
            var n = i(81550);
            let r = n.Z,
                s = n.Z
        },
        81550: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        }
    }
]);