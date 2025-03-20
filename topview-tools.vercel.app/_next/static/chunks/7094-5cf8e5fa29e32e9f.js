"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7094], {
        31122: function(e, r, t) {
            t.r(r), t.d(r, {
                ChakraProvider: function() {
                    return n
                }
            });
            var o = t(60268);
            let n = (0, t(49428).Q)(o.rS)
        },
        98421: function(e, r, t) {
            t.r(r), t.d(r, {
                ColorModeProvider: function() {
                    return f
                },
                DarkMode: function() {
                    return p
                },
                LightMode: function() {
                    return g
                }
            });
            var o = t(53858),
                n = t(27660),
                i = t(80333),
                a = t(23056),
                l = t(29190);
            let s = {
                light: "chakra-ui-light",
                dark: "chakra-ui-dark"
            };
            var d = t(66051);
            let c = () => {},
                b = (0, n.jU)() ? a.useLayoutEffect : a.useEffect;

            function u(e, r) {
                return "cookie" === e.type && e.ssr ? e.get(r) : r
            }
            let f = (0, i.w)(function(e, r) {
                let {
                    value: t,
                    children: n,
                    options: {
                        useSystemColorMode: i,
                        initialColorMode: f,
                        disableTransitionOnChange: p
                    } = {},
                    colorModeManager: g = d.localStorageManager
                } = e, m = "dark" === f ? "dark" : "light", [h, y] = (0, a.useState)(() => u(g, m)), [v, x] = (0, a.useState)(() => u(g)), {
                    getSystemTheme: k,
                    setClassName: S,
                    setDataset: w,
                    addListener: _
                } = (0, a.useMemo)(() => (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            preventTransition: r = !0,
                            nonce: t
                        } = e,
                        o = {
                            setDataset: e => {
                                let t = r ? o.preventTransition() : void 0;
                                document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, null == t || t()
                            },
                            setClassName(e) {
                                document.body.classList.add(e ? s.dark : s.light), document.body.classList.remove(e ? s.light : s.dark)
                            },
                            query: () => window.matchMedia("(prefers-color-scheme: dark)"),
                            getSystemTheme(e) {
                                var r;
                                return (null !== (r = o.query().matches) && void 0 !== r ? r : "dark" === e) ? "dark" : "light"
                            },
                            addListener(e) {
                                let r = o.query(),
                                    t = r => {
                                        e(r.matches ? "dark" : "light")
                                    };
                                return "function" == typeof r.addListener ? r.addListener(t) : r.addEventListener("change", t), () => {
                                    "function" == typeof r.removeListener ? r.removeListener(t) : r.removeEventListener("change", t)
                                }
                            },
                            preventTransition() {
                                let e = document.createElement("style");
                                return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), void 0 !== t && (e.nonce = t), document.head.appendChild(e), () => {
                                    window.getComputedStyle(document.body), requestAnimationFrame(() => {
                                        requestAnimationFrame(() => {
                                            document.head.removeChild(e)
                                        })
                                    })
                                }
                            }
                        };
                    return o
                })({
                    preventTransition: p,
                    nonce: null == r ? void 0 : r.nonce
                }), [p, null == r ? void 0 : r.nonce]), z = "system" !== f || h ? h : v, C = (0, a.useCallback)(e => {
                    let r = "system" === e ? k() : e;
                    y(r), S("dark" === r), w(r), g.set(r)
                }, [g, k, S, w]);
                b(() => {
                    "system" === f && x(k())
                }, []), (0, a.useEffect)(() => {
                    let e = g.get();
                    if (e) {
                        C(e);
                        return
                    }
                    if ("system" === f) {
                        C("system");
                        return
                    }
                    C(m)
                }, [g, m, f, C]);
                let $ = (0, a.useCallback)(() => {
                    C("dark" === z ? "light" : "dark")
                }, [z, C]);
                (0, a.useEffect)(() => {
                    if (i) return _(C)
                }, [i, _, C]);
                let A = (0, a.useMemo)(() => ({
                    colorMode: null != t ? t : z,
                    toggleColorMode: t ? c : $,
                    setColorMode: t ? c : C,
                    forced: void 0 !== t
                }), [z, $, C, t]);
                return (0, o.jsx)(l.ColorModeContext.Provider, {
                    value: A,
                    children: n
                })
            });

            function p(e) {
                let r = (0, a.useMemo)(() => ({
                    colorMode: "dark",
                    toggleColorMode: c,
                    setColorMode: c,
                    forced: !0
                }), []);
                return (0, o.jsx)(l.ColorModeContext.Provider, {
                    value: r,
                    ...e
                })
            }

            function g(e) {
                let r = (0, a.useMemo)(() => ({
                    colorMode: "light",
                    toggleColorMode: c,
                    setColorMode: c,
                    forced: !0
                }), []);
                return (0, o.jsx)(l.ColorModeContext.Provider, {
                    value: r,
                    ...e
                })
            }
            f.displayName = "ColorModeProvider", p.displayName = "DarkMode", g.displayName = "LightMode"
        },
        66051: function(e, r, t) {
            t.r(r), t.d(r, {
                STORAGE_KEY: function() {
                    return o
                },
                cookieStorageManager: function() {
                    return s
                },
                cookieStorageManagerSSR: function() {
                    return d
                },
                createCookieStorageManager: function() {
                    return l
                },
                createLocalStorageManager: function() {
                    return n
                },
                localStorageManager: function() {
                    return i
                }
            });
            let o = "chakra-ui-color-mode";

            function n(e) {
                return {
                    ssr: !1,
                    type: "localStorage",
                    get(r) {
                        var t;
                        let o;
                        if (!(null === (t = globalThis) || void 0 === t ? void 0 : t.document)) return r;
                        try {
                            o = localStorage.getItem(e) || r
                        } catch (e) {}
                        return o || r
                    },
                    set(r) {
                        try {
                            localStorage.setItem(e, r)
                        } catch (e) {}
                    }
                }
            }
            let i = n(o);

            function a(e, r) {
                let t = e.match(new RegExp("(^| )".concat(r, "=([^;]+)")));
                return null == t ? void 0 : t[2]
            }

            function l(e, r) {
                return {
                    ssr: !!r,
                    type: "cookie",
                    get(t) {
                        var o;
                        return r ? a(r, e) : (null === (o = globalThis) || void 0 === o ? void 0 : o.document) && a(document.cookie, e) || t
                    },
                    set(r) {
                        document.cookie = "".concat(e, "=").concat(r, "; max-age=31536000; path=/")
                    }
                }
            }
            let s = l(o),
                d = e => l(o, e)
        },
        89242: function(e, r, t) {
            t.r(r), t.d(r, {
                CSSPolyfill: function() {
                    return c
                },
                CSSReset: function() {
                    return b
                }
            });
            var o = t(67973),
                n = t(53858),
                i = t(56377);

            function a() {
                let e = (0, o._)(["\n  :root,\n  :host {\n    --chakra-vh: 100vh;\n  }\n\n  @supports (height: -webkit-fill-available) {\n    :root,\n    :host {\n      --chakra-vh: -webkit-fill-available;\n    }\n  }\n\n  @supports (height: -moz-fill-available) {\n    :root,\n    :host {\n      --chakra-vh: -moz-fill-available;\n    }\n  }\n\n  @supports (height: 100dvh) {\n    :root,\n    :host {\n      --chakra-vh: 100dvh;\n    }\n  }\n"]);
                return a = function() {
                    return e
                }, e
            }

            function l() {
                let e = (0, o._)(['\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        margin: 0;\n        font-feature-settings: "kern";\n      }\n\n      ', " :where(*, *::before, *::after) {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n        word-wrap: break-word;\n      }\n\n      main {\n        display: block;\n      }\n\n      ", " hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      ", " :where(pre, code, kbd,samp) {\n        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      ", " a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      ", " abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      ", " :where(b, strong) {\n        font-weight: bold;\n      }\n\n      ", " small {\n        font-size: 80%;\n      }\n\n      ", " :where(sub,sup) {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      ", " sub {\n        bottom: -0.25em;\n      }\n\n      ", " sup {\n        top: -0.5em;\n      }\n\n      ", " img {\n        border-style: none;\n      }\n\n      ", " :where(button, input, optgroup, select, textarea) {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      ", " :where(button, input) {\n        overflow: visible;\n      }\n\n      ", " :where(button, select) {\n        text-transform: none;\n      }\n\n      ", ' :where(\n          button::-moz-focus-inner,\n          [type="button"]::-moz-focus-inner,\n          [type="reset"]::-moz-focus-inner,\n          [type="submit"]::-moz-focus-inner\n        ) {\n        border-style: none;\n        padding: 0;\n      }\n\n      ', " fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      ", " legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      ", " progress {\n        vertical-align: baseline;\n      }\n\n      ", " textarea {\n        overflow: auto;\n      }\n\n      ", ' :where([type="checkbox"], [type="radio"]) {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      ', ' input[type="number"]::-webkit-inner-spin-button,\n      ', ' input[type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      ', ' input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      ', ' input[type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      ', ' input[type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ', " ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      ", " details {\n        display: block;\n      }\n\n      ", " summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      ", " :where(\n          blockquote,\n          dl,\n          dd,\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6,\n          hr,\n          figure,\n          p,\n          pre\n        ) {\n        margin: 0;\n      }\n\n      ", " button {\n        background: transparent;\n        padding: 0;\n      }\n\n      ", " fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ", " :where(ol, ul) {\n        margin: 0;\n        padding: 0;\n      }\n\n      ", " textarea {\n        resize: vertical;\n      }\n\n      ", ' :where(button, [role="button"]) {\n        cursor: pointer;\n      }\n\n      ', " button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      ", " table {\n        border-collapse: collapse;\n      }\n\n      ", " :where(h1, h2, h3, h4, h5, h6) {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      ", " :where(button, input, optgroup, select, textarea) {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      ", " :where(img, svg, video, canvas, audio, iframe, embed, object) {\n        display: block;\n      }\n\n      ", " :where(img, video) {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible]\n        :focus:not([data-focus-visible-added]):not(\n          [data-focus-visible-disabled]\n        ) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      ", " select::-ms-expand {\n        display: none;\n      }\n\n      ", "\n    "]);
                return l = function() {
                    return e
                }, e
            }
            let s = String.raw,
                d = s(a()),
                c = () => (0, n.jsx)(i.xB, {
                    styles: d
                }),
                b = e => {
                    let {
                        scope: r = ""
                    } = e;
                    return (0, n.jsx)(i.xB, {
                        styles: s(l(), r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, d)
                    })
                }
        },
        92045: function(e, r, t) {
            t.r(r), t.d(r, {
                EnvironmentProvider: function() {
                    return s
                },
                useEnvironment: function() {
                    return l
                }
            });
            var o = t(53858),
                n = t(1909),
                i = t(23056);
            let a = (0, i.createContext)({
                getDocument: () => document,
                getWindow: () => window
            });

            function l() {
                let {
                    defer: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [, r] = (0, i.useReducer)(e => e + 1, 0);
                return (0, n.useSafeLayoutEffect)(() => {
                    e && r()
                }, [e]), (0, i.useContext)(a)
            }

            function s(e) {
                let {
                    children: r,
                    environment: t,
                    disabled: n
                } = e, l = (0, i.useRef)(null), s = (0, i.useMemo)(() => t || {
                    getDocument: () => {
                        var e, r;
                        return null !== (r = null === (e = l.current) || void 0 === e ? void 0 : e.ownerDocument) && void 0 !== r ? r : document
                    },
                    getWindow: () => {
                        var e, r;
                        return null !== (r = null === (e = l.current) || void 0 === e ? void 0 : e.ownerDocument.defaultView) && void 0 !== r ? r : window
                    }
                }, [t]), d = !n || !t;
                return (0, o.jsxs)(a.Provider, {
                    value: s,
                    children: [r, d && (0, o.jsx)("span", {
                        id: "__chakra_env",
                        hidden: !0,
                        ref: l
                    })]
                })
            }
            a.displayName = "EnvironmentContext", s.displayName = "EnvironmentProvider"
        },
        17376: function(e, r, t) {
            t.r(r), t.d(r, {
                createExtendTheme: function() {
                    return s
                },
                extendBaseTheme: function() {
                    return c
                },
                extendTheme: function() {
                    return d
                },
                mergeThemeOverride: function() {
                    return b
                }
            });
            var o = t(18631);
            let n = ["borders", "breakpoints", "colors", "components", "config", "direction", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "shadows", "sizes", "space", "styles", "transition", "zIndices"];
            var i = t(60268),
                a = t(18598);

            function l(e) {
                return "function" == typeof e
            }
            let s = e => function() {
                    for (var r, t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                    let s = [...i],
                        d = i[i.length - 1];
                    return (r = d, (0, o.Kn)(r) && n.every(e => Object.prototype.hasOwnProperty.call(r, e)) && s.length > 1) ? s = s.slice(0, s.length - 1) : d = e, (function() {
                        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                        return e => r.reduce((e, r) => r(e), e)
                    })(...s.map(e => r => l(e) ? e(r) : b(r, e)))(d)
                },
                d = s(i.rS),
                c = s(i.wE);

            function b() {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                return a({}, ...r, u)
            }

            function u(e, r, t, n) {
                return (l(e) || l(r)) && Object.prototype.hasOwnProperty.call(n, t) ? function() {
                    for (var t = arguments.length, o = Array(t), n = 0; n < t; n++) o[n] = arguments[n];
                    return a({}, l(e) ? e(...o) : e, l(r) ? r(...o) : r, u)
                } : (0, o.kJ)(e) && (0, o.kJ)(r) ? [...e, ...r] : (0, o.kJ)(e) && (0, o.Kn)(r) ? r : void 0
            }
        },
        49428: function(e, r, t) {
            t.d(r, {
                Q: function() {
                    return b
                }
            });
            var o = t(53858),
                n = t(98421),
                i = t(89242),
                a = t(42549),
                l = t(22224),
                s = t(92045);
            let d = e => {
                let {
                    children: r,
                    colorModeManager: t,
                    portalZIndex: d,
                    resetScope: c,
                    resetCSS: b = !0,
                    theme: u = {},
                    environment: f,
                    cssVarsRoot: p,
                    disableEnvironment: g,
                    disableGlobalStyle: m
                } = e, h = (0, o.jsx)(s.EnvironmentProvider, {
                    environment: f,
                    disabled: g,
                    children: r
                });
                return (0, o.jsx)(a.ThemeProvider, {
                    theme: u,
                    cssVarsRoot: p,
                    children: (0, o.jsxs)(n.ColorModeProvider, {
                        colorModeManager: t,
                        options: u.config,
                        children: [b ? (0, o.jsx)(i.CSSReset, {
                            scope: c
                        }) : (0, o.jsx)(i.CSSPolyfill, {}), !m && (0, o.jsx)(a.GlobalStyle, {}), d ? (0, o.jsx)(l.PortalManager, {
                            zIndex: d,
                            children: h
                        }) : h]
                    })
                })
            };
            var c = t(28663);
            let b = e => function(r) {
                let {
                    children: t,
                    theme: n = e,
                    toastOptions: i,
                    ...a
                } = r;
                return (0, o.jsxs)(d, {
                    theme: n,
                    ...a,
                    children: [(0, o.jsx)(c.ToastOptionProvider, {
                        value: null == i ? void 0 : i.defaultOptions,
                        children: t
                    }), (0, o.jsx)(c.ToastProvider, { ...i
                    })]
                })
            }
        },
        42549: function(e, r, t) {
            t.r(r), t.d(r, {
                CSSVars: function() {
                    return w
                },
                GlobalStyle: function() {
                    return $
                },
                StylesProvider: function() {
                    return _
                },
                ThemeProvider: function() {
                    return S
                },
                createStylesContext: function() {
                    return C
                },
                useStyles: function() {
                    return z
                }
            });
            var o = t(53858),
                n = t(13227),
                i = t(18631),
                a = t(18598),
                l = t(22257),
                s = t(78628);

            function d(e, r, t = {}) {
                let {
                    stop: o,
                    getKey: n
                } = t;
                return function e(t, a = []) {
                    if ((0, i.Kn)(t) || Array.isArray(t)) {
                        let i = {};
                        for (let [l, s] of Object.entries(t)) {
                            let d = n ? .(l) ? ? l,
                                c = [...a, d];
                            if (o ? .(t, c)) return r(t, a);
                            i[d] = e(s, c)
                        }
                        return i
                    }
                    return r(t, a)
                }(e)
            }
            var c = t(61601),
                b = t(15049);
            let u = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "gradients", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur", "breakpoints"];

            function f(e, r) {
                return (0, s.gJ)(String(e).replace(/\./g, "-"), void 0, r)
            }
            var p = t(17996),
                g = t(10303),
                m = t(34065),
                h = t(57980),
                y = t(80333),
                v = t(56377),
                x = t(23056),
                k = t(29190);

            function S(e) {
                let {
                    cssVarsRoot: r,
                    theme: t,
                    children: s
                } = e, p = (0, x.useMemo)(() => (function(e) {
                    let r = function(e) {
                            let {
                                __cssMap: r,
                                __cssVars: t,
                                __breakpoints: o,
                                ...n
                            } = e;
                            return n
                        }(e),
                        {
                            cssMap: t,
                            cssVars: o
                        } = function(e) {
                            let r = function(e) {
                                    let r = (0, b.e)(e, u),
                                        t = e.semanticTokens,
                                        o = e => c._.includes(e) || "default" === e,
                                        n = {};
                                    return d(r, (e, r) => {
                                        null != e && (n[r.join(".")] = {
                                            isSemantic: !1,
                                            value: e
                                        })
                                    }), d(t, (e, r) => {
                                        null != e && (n[r.join(".")] = {
                                            isSemantic: !0,
                                            value: e
                                        })
                                    }, {
                                        stop: e => Object.keys(e).every(o)
                                    }), n
                                }(e),
                                t = e.config ? .cssVarPrefix,
                                o = {},
                                n = {};
                            for (let [e, s] of Object.entries(r)) {
                                let {
                                    isSemantic: d,
                                    value: b
                                } = s, {
                                    variable: u,
                                    reference: p
                                } = f(e, t);
                                if (!d) {
                                    if (e.startsWith("space")) {
                                        let [r, ...t] = e.split("."), o = `${r}.-${t.join(".")}`, i = l.y.negate(b), a = l.y.negate(p);
                                        n[o] = {
                                            value: i,
                                            var: u,
                                            varRef: a
                                        }
                                    }
                                    o[u] = b, n[e] = {
                                        value: b,
                                        var: u,
                                        varRef: p
                                    };
                                    continue
                                }
                                o = a(o, Object.entries((0, i.Kn)(b) ? b : {
                                    default: b
                                }).reduce((o, [n, i]) => {
                                    if (!i) return o;
                                    let a = function(e, o) {
                                        let n = [String(e).split(".")[0], o].join(".");
                                        if (!r[n]) return o;
                                        let {
                                            reference: i
                                        } = f(n, t);
                                        return i
                                    }(e, `${i}`);
                                    return "default" === n ? o[u] = a : o[c.v ? .[n] ? ? n] = {
                                        [u]: a
                                    }, o
                                }, {})), n[e] = {
                                    value: p,
                                    var: u,
                                    varRef: p
                                }
                            }
                            return {
                                cssVars: o,
                                cssMap: n
                            }
                        }(r);
                    return Object.assign(r, {
                        __cssVars: {
                            "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
                            "--chakra-ring-offset-width": "0px",
                            "--chakra-ring-offset-color": "#fff",
                            "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
                            "--chakra-ring-offset-shadow": "0 0 #0000",
                            "--chakra-ring-shadow": "0 0 #0000",
                            "--chakra-space-x-reverse": "0",
                            "--chakra-space-y-reverse": "0",
                            ...o
                        },
                        __cssMap: t,
                        __breakpoints: (0, n.y)(r.breakpoints)
                    }), r
                })(t), [t]);
                return (0, o.jsxs)(y.a, {
                    theme: p,
                    children: [(0, o.jsx)(w, {
                        root: r
                    }), s]
                })
            }

            function w(e) {
                let {
                    root: r = ":host, :root"
                } = e, t = [r, "[data-theme]"].join(",");
                return (0, o.jsx)(v.xB, {
                    styles: e => ({
                        [t]: e.__cssVars
                    })
                })
            }
            let [_, z] = (0, g.createContext)({
                name: "StylesContext",
                errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
            });

            function C(e) {
                return (0, g.createContext)({
                    name: "".concat(e, "StylesContext"),
                    errorMessage: 'useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<'.concat(e, ' />" ')
                })
            }

            function $() {
                let {
                    colorMode: e
                } = (0, k.useColorMode)();
                return (0, o.jsx)(v.xB, {
                    styles: r => {
                        let t = (0, m.W)(r, "styles.global"),
                            o = (0, h.P)(t, {
                                theme: r,
                                colorMode: e
                            });
                        if (o) return (0, p.i)(o)(r)
                    }
                })
            }
        },
        22257: function(e, r, t) {
            t.d(r, {
                y: function() {
                    return b
                }
            });
            var o = t(18631);

            function n(e) {
                return (0, o.Kn)(e) && e.reference ? e.reference : String(e)
            }
            let i = (e, ...r) => r.map(n).join(` ${e} `).replace(/calc/g, ""),
                a = (...e) => `calc(${i("+",...e)})`,
                l = (...e) => `calc(${i("-",...e)})`,
                s = (...e) => `calc(${i("*",...e)})`,
                d = (...e) => `calc(${i("/",...e)})`,
                c = e => {
                    let r = n(e);
                    return null == r || Number.isNaN(parseFloat(r)) ? s(r, -1) : String(r).startsWith("-") ? String(r).slice(1) : `-${r}`
                },
                b = Object.assign(e => ({
                    add: (...r) => b(a(e, ...r)),
                    subtract: (...r) => b(l(e, ...r)),
                    multiply: (...r) => b(s(e, ...r)),
                    divide: (...r) => b(d(e, ...r)),
                    negate: () => b(c(e)),
                    toString: () => e.toString()
                }), {
                    add: a,
                    subtract: l,
                    multiply: s,
                    divide: d,
                    negate: c
                })
        },
        78628: function(e, r, t) {
            function o(e, r, t) {
                let o = function(e, r = "") {
                    var t;
                    return ((t = function(e, r = "-") {
                        return e.replace(/\s+/g, r)
                    }(`--${(function(e,r=""){return[r,e].filter(Boolean).join("-")})(e,r)}`.toString())).includes("\\.") ? t : Number.isInteger(parseFloat(t.toString())) ? t : t.replace(".", "\\.")).replace(/[!-,/:-@[-^`{-~]/g, "\\$&")
                }(e, t);
                return {
                    variable: o,
                    reference: `var(${o}${r?`, ${r}`:""})`
                }
            }

            function n(e, r) {
                let t = {};
                for (let n of r) {
                    if (Array.isArray(n)) {
                        let [r, i] = n;
                        t[r] = o(`${e}-${r}`, i);
                        continue
                    }
                    t[n] = o(`${e}-${n}`)
                }
                return t
            }
            t.d(r, {
                _6: function() {
                    return n
                },
                gJ: function() {
                    return o
                }
            })
        },
        60268: function(e, r, t) {
            function o(e, r = {}) {
                let t = !1;

                function n(r) {
                    let t = (["container", "root"].includes(r ? ? "") ? [e] : [e, r]).filter(Boolean).join("__"),
                        o = `chakra-${t}`;
                    return {
                        className: o,
                        selector: `.${o}`,
                        toString: () => r
                    }
                }
                return {
                    parts: function(...i) {
                        for (let e of (! function() {
                                if (!t) {
                                    t = !0;
                                    return
                                }
                                throw Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")
                            }(), i)) r[e] = n(e);
                        return o(e, r)
                    },
                    toPart: n,
                    extend: function(...t) {
                        for (let e of t) e in r || (r[e] = n(e));
                        return o(e, r)
                    },
                    selectors: function() {
                        return Object.fromEntries(Object.entries(r).map(([e, r]) => [e, r.selector]))
                    },
                    classnames: function() {
                        return Object.fromEntries(Object.entries(r).map(([e, r]) => [e, r.className]))
                    },
                    get keys() {
                        return Object.keys(r)
                    },
                    __type: {}
                }
            }
            t.d(r, {
                wE: function() {
                    return nX
                },
                rS: function() {
                    return nY
                }
            });
            let n = o("accordion").parts("root", "container", "button", "panel", "icon"),
                i = o("alert").parts("title", "description", "container", "icon", "spinner"),
                a = o("avatar").parts("label", "badge", "container", "excessLabel", "group"),
                l = o("breadcrumb").parts("link", "item", "container", "separator");
            o("button").parts();
            let s = o("checkbox").parts("control", "icon", "container", "label");
            o("progress").parts("track", "filledTrack", "label");
            let d = o("drawer").parts("overlay", "dialogContainer", "dialog", "header", "closeButton", "body", "footer"),
                c = o("editable").parts("preview", "input", "textarea"),
                b = o("form").parts("container", "requiredIndicator", "helperText"),
                u = o("formError").parts("text", "icon"),
                f = o("input").parts("addon", "field", "element", "group"),
                p = o("list").parts("container", "item", "icon"),
                g = o("menu").parts("button", "list", "item", "groupTitle", "icon", "command", "divider"),
                m = o("modal").parts("overlay", "dialogContainer", "dialog", "header", "closeButton", "body", "footer"),
                h = o("numberinput").parts("root", "field", "stepperGroup", "stepper");
            o("pininput").parts("field");
            let y = o("popover").parts("content", "header", "body", "footer", "popper", "arrow", "closeButton"),
                v = o("progress").parts("label", "filledTrack", "track"),
                x = o("radio").parts("container", "control", "label"),
                k = o("select").parts("field", "icon"),
                S = o("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
                w = o("stat").parts("container", "label", "helpText", "number", "icon"),
                _ = o("switch").parts("container", "track", "thumb", "label"),
                z = o("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"),
                C = o("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"),
                $ = o("tag").parts("container", "label", "closeButton"),
                A = o("card").parts("container", "header", "body", "footer");
            o("stepper").parts("stepper", "step", "title", "description", "indicator", "separator", "icon", "number");
            var j = t(90554);
            let {
                definePartsStyle: P,
                defineMultiStyleConfig: F
            } = (0, j.D)(n.keys), D = (0, j.k0)({
                borderTopWidth: "1px",
                borderColor: "inherit",
                _last: {
                    borderBottomWidth: "1px"
                }
            }), E = F({
                baseStyle: P({
                    container: D,
                    button: (0, j.k0)({
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        fontSize: "md",
                        _focusVisible: {
                            boxShadow: "outline"
                        },
                        _hover: {
                            bg: "blackAlpha.50"
                        },
                        _disabled: {
                            opacity: .4,
                            cursor: "not-allowed"
                        },
                        px: "4",
                        py: "2"
                    }),
                    panel: (0, j.k0)({
                        pt: "2",
                        px: "4",
                        pb: "5"
                    }),
                    icon: (0, j.k0)({
                        fontSize: "1.25em"
                    })
                })
            });
            var B = t(78628);

            function M(e, r, t) {
                return Math.min(Math.max(e, t), r)
            }
            class W extends Error {
                constructor(e) {
                    super(`Failed to parse color: "${e}"`)
                }
            }

            function R(e) {
                if ("string" != typeof e) throw new W(e);
                if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
                let r = e.trim();
                r = V.test(e) ? function(e) {
                    let r = I[function(e) {
                        let r = 5381,
                            t = e.length;
                        for (; t;) r = 33 * r ^ e.charCodeAt(--t);
                        return (r >>> 0) % 2341
                    }(e.toLowerCase().trim())];
                    if (!r) throw new W(e);
                    return `#${r}`
                }(e) : e;
                let t = H.exec(r);
                if (t) {
                    let e = Array.from(t).slice(1);
                    return [...e.slice(0, 3).map(e => parseInt(T(e, 2), 16)), parseInt(T(e[3] || "f", 2), 16) / 255]
                }
                let o = q.exec(r);
                if (o) {
                    let e = Array.from(o).slice(1);
                    return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
                }
                let n = L.exec(r);
                if (n) {
                    let e = Array.from(n).slice(1);
                    return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
                }
                let i = O.exec(r);
                if (i) {
                    let [r, t, o, n] = Array.from(i).slice(1).map(parseFloat);
                    if (M(0, 100, t) !== t || M(0, 100, o) !== o) throw new W(e);
                    return [...K(r, t, o), Number.isNaN(n) ? 1 : n]
                }
                throw new W(e)
            }
            let J = e => parseInt(e.replace(/_/g, ""), 36),
                I = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, r) => {
                    let t = J(r.substring(0, 3)),
                        o = J(r.substring(3)).toString(16),
                        n = "";
                    for (let e = 0; e < 6 - o.length; e++) n += "0";
                    return e[t] = `${n}${o}`, e
                }, {}),
                T = (e, r) => Array.from(Array(r)).map(() => e).join(""),
                H = RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
                q = RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
                L = RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
                O = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
                V = /^[a-z]+$/i,
                N = e => Math.round(255 * e),
                K = (e, r, t) => {
                    let o = t / 100;
                    if (0 === r) return [o, o, o].map(N);
                    let n = (e % 360 + 360) % 360 / 60,
                        i = r / 100 * (1 - Math.abs(2 * o - 1)),
                        a = i * (1 - Math.abs(n % 2 - 1)),
                        l = 0,
                        s = 0,
                        d = 0;
                    n >= 0 && n < 1 ? (l = i, s = a) : n >= 1 && n < 2 ? (l = a, s = i) : n >= 2 && n < 3 ? (s = i, d = a) : n >= 3 && n < 4 ? (s = a, d = i) : n >= 4 && n < 5 ? (l = a, d = i) : n >= 5 && n < 6 && (l = i, d = a);
                    let c = o - i / 2;
                    return [l + c, s + c, d + c].map(N)
                },
                U = e => 0 === Object.keys(e).length,
                G = (e, r, t) => {
                    let o = function(e, r, t, o, n) {
                        for (o = 0, r = r.split ? r.split(".") : r; o < r.length; o++) e = e ? e[r[o]] : n;
                        return e === n ? t : e
                    }(e, `colors.${r}`, r);
                    try {
                        return ! function(e) {
                            let [r, t, o, n] = R(e), i = e => {
                                let r = M(0, 255, e).toString(16);
                                return 1 === r.length ? `0${r}` : r
                            };
                            i(r), i(t), i(o), n < 1 && i(Math.round(255 * n))
                        }(o), o
                    } catch {
                        return t ? ? "#000000"
                    }
                },
                Y = e => {
                    let [r, t, o] = R(e);
                    return (299 * r + 587 * t + 114 * o) / 1e3
                },
                X = e => r => 128 > Y(G(r, e)) ? "dark" : "light",
                Q = e => r => "dark" === X(e)(r),
                Z = (e, r) => t => (function(e, r) {
                    let [t, o, n, i] = R(e);
                    return `rgba(${M(0,255,t).toFixed()}, ${M(0,255,o).toFixed()}, ${M(0,255,n).toFixed()}, ${parseFloat(M(0,1,i-r).toFixed(3))})`
                })(G(t, e), 1 - r);

            function ee(e = "1rem", r = "rgba(255, 255, 255, 0.15)") {
                return {
                    backgroundImage: `linear-gradient(
    45deg,
    ${r} 25%,
    transparent 25%,
    transparent 50%,
    ${r} 50%,
    ${r} 75%,
    transparent 75%,
    transparent
  )`,
                    backgroundSize: `${e} ${e}`
                }
            }
            let er = () => `#${Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")}`,
                {
                    definePartsStyle: et,
                    defineMultiStyleConfig: eo
                } = (0, j.D)(i.keys),
                en = (0, B.gJ)("alert-fg"),
                ei = (0, B.gJ)("alert-bg"),
                ea = et({
                    container: {
                        bg: ei.reference,
                        px: "4",
                        py: "3"
                    },
                    title: {
                        fontWeight: "bold",
                        lineHeight: "6",
                        marginEnd: "2"
                    },
                    description: {
                        lineHeight: "6"
                    },
                    icon: {
                        color: en.reference,
                        flexShrink: 0,
                        marginEnd: "3",
                        w: "5",
                        h: "6"
                    },
                    spinner: {
                        color: en.reference,
                        flexShrink: 0,
                        marginEnd: "3",
                        w: "5",
                        h: "5"
                    }
                });

            function el(e) {
                let {
                    theme: r,
                    colorScheme: t
                } = e, o = Z(`${t}.200`, .16)(r);
                return {
                    light: `colors.${t}.100`,
                    dark: o
                }
            }
            let es = et(e => {
                    let {
                        colorScheme: r
                    } = e, t = el(e);
                    return {
                        container: {
                            [en.variable]: `colors.${r}.600`,
                            [ei.variable]: t.light,
                            _dark: {
                                [en.variable]: `colors.${r}.200`,
                                [ei.variable]: t.dark
                            }
                        }
                    }
                }),
                ed = et(e => {
                    let {
                        colorScheme: r
                    } = e, t = el(e);
                    return {
                        container: {
                            [en.variable]: `colors.${r}.600`,
                            [ei.variable]: t.light,
                            _dark: {
                                [en.variable]: `colors.${r}.200`,
                                [ei.variable]: t.dark
                            },
                            paddingStart: "3",
                            borderStartWidth: "4px",
                            borderStartColor: en.reference
                        }
                    }
                }),
                ec = eo({
                    baseStyle: ea,
                    variants: {
                        subtle: es,
                        "left-accent": ed,
                        "top-accent": et(e => {
                            let {
                                colorScheme: r
                            } = e, t = el(e);
                            return {
                                container: {
                                    [en.variable]: `colors.${r}.600`,
                                    [ei.variable]: t.light,
                                    _dark: {
                                        [en.variable]: `colors.${r}.200`,
                                        [ei.variable]: t.dark
                                    },
                                    pt: "2",
                                    borderTopWidth: "4px",
                                    borderTopColor: en.reference
                                }
                            }
                        }),
                        solid: et(e => {
                            let {
                                colorScheme: r
                            } = e;
                            return {
                                container: {
                                    [en.variable]: "colors.white",
                                    [ei.variable]: `colors.${r}.600`,
                                    _dark: {
                                        [en.variable]: "colors.gray.900",
                                        [ei.variable]: `colors.${r}.200`
                                    },
                                    color: en.reference
                                }
                            }
                        })
                    },
                    defaultProps: {
                        variant: "subtle",
                        colorScheme: "blue"
                    }
                }),
                eb = {
                    px: "1px",
                    .5: "0.125rem",
                    1: "0.25rem",
                    1.5: "0.375rem",
                    2: "0.5rem",
                    2.5: "0.625rem",
                    3: "0.75rem",
                    3.5: "0.875rem",
                    4: "1rem",
                    5: "1.25rem",
                    6: "1.5rem",
                    7: "1.75rem",
                    8: "2rem",
                    9: "2.25rem",
                    10: "2.5rem",
                    12: "3rem",
                    14: "3.5rem",
                    16: "4rem",
                    20: "5rem",
                    24: "6rem",
                    28: "7rem",
                    32: "8rem",
                    36: "9rem",
                    40: "10rem",
                    44: "11rem",
                    48: "12rem",
                    52: "13rem",
                    56: "14rem",
                    60: "15rem",
                    64: "16rem",
                    72: "18rem",
                    80: "20rem",
                    96: "24rem"
                },
                eu = { ...eb,
                    max: "max-content",
                    min: "min-content",
                    full: "100%",
                    "3xs": "14rem",
                    "2xs": "16rem",
                    xs: "20rem",
                    sm: "24rem",
                    md: "28rem",
                    lg: "32rem",
                    xl: "36rem",
                    "2xl": "42rem",
                    "3xl": "48rem",
                    "4xl": "56rem",
                    "5xl": "64rem",
                    "6xl": "72rem",
                    "7xl": "80rem",
                    "8xl": "90rem",
                    prose: "60ch",
                    container: {
                        sm: "640px",
                        md: "768px",
                        lg: "1024px",
                        xl: "1280px"
                    }
                },
                ef = e => "function" == typeof e;

            function ep(e, ...r) {
                return ef(e) ? e(...r) : e
            }
            let {
                definePartsStyle: eg,
                defineMultiStyleConfig: em
            } = (0, j.D)(a.keys), eh = (0, B.gJ)("avatar-border-color"), ey = (0, B.gJ)("avatar-bg"), ev = (0, B.gJ)("avatar-font-size"), ex = (0, B.gJ)("avatar-size"), ek = (0, j.k0)({
                borderRadius: "full",
                border: "0.2em solid",
                borderColor: eh.reference,
                [eh.variable]: "white",
                _dark: {
                    [eh.variable]: "colors.gray.800"
                }
            }), eS = (0, j.k0)({
                bg: ey.reference,
                fontSize: ev.reference,
                width: ex.reference,
                height: ex.reference,
                lineHeight: "1",
                [ey.variable]: "colors.gray.200",
                _dark: {
                    [ey.variable]: "colors.whiteAlpha.400"
                }
            }), ew = (0, j.k0)(e => {
                let {
                    name: r,
                    theme: t
                } = e, o = r ? function(e) {
                    var r;
                    let t = er();
                    return !e || U(e) ? t : e.string && e.colors ? function(e, r) {
                        let t = 0;
                        if (0 === e.length) return r[0];
                        for (let r = 0; r < e.length; r += 1) t = e.charCodeAt(r) + ((t << 5) - t), t &= t;
                        return t = (t % r.length + r.length) % r.length, r[t]
                    }(e.string, e.colors) : e.string && !e.colors ? function(e) {
                        let r = 0;
                        if (0 === e.length) return r.toString();
                        for (let t = 0; t < e.length; t += 1) r = e.charCodeAt(t) + ((r << 5) - r), r &= r;
                        let t = "#";
                        for (let e = 0; e < 3; e += 1) {
                            let o = r >> 8 * e & 255;
                            t += `00${o.toString(16)}`.substr(-2)
                        }
                        return t
                    }(e.string) : e.colors && !e.string ? (r = e.colors)[Math.floor(Math.random() * r.length)] : t
                }({
                    string: r
                }) : "colors.gray.400", n = Q(o)(t), i = "white";
                return n || (i = "gray.800"), {
                    bg: ey.reference,
                    fontSize: ev.reference,
                    color: i,
                    borderColor: eh.reference,
                    verticalAlign: "top",
                    width: ex.reference,
                    height: ex.reference,
                    "&:not([data-loaded])": {
                        [ey.variable]: o
                    },
                    [eh.variable]: "colors.white",
                    _dark: {
                        [eh.variable]: "colors.gray.800"
                    }
                }
            }), e_ = (0, j.k0)({
                fontSize: ev.reference,
                lineHeight: "1"
            });

            function ez(e) {
                let r = "100%" !== e ? eu[e] : void 0;
                return eg({
                    container: {
                        [ex.variable]: r ? ? e,
                        [ev.variable]: `calc(${r??e} / 2.5)`
                    },
                    excessLabel: {
                        [ex.variable]: r ? ? e,
                        [ev.variable]: `calc(${r??e} / 2.5)`
                    }
                })
            }
            let eC = em({
                    baseStyle: eg(e => ({
                        badge: ep(ek, e),
                        excessLabel: ep(eS, e),
                        container: ep(ew, e),
                        label: e_
                    })),
                    sizes: {
                        "2xs": ez(4),
                        xs: ez(6),
                        sm: ez(8),
                        md: ez(12),
                        lg: ez(16),
                        xl: ez(24),
                        "2xl": ez(32),
                        full: ez("100%")
                    },
                    defaultProps: {
                        size: "md"
                    }
                }),
                e$ = (0, B._6)("badge", ["bg", "color", "shadow"]),
                eA = (0, j.k0)({
                    px: 1,
                    textTransform: "uppercase",
                    fontSize: "xs",
                    borderRadius: "sm",
                    fontWeight: "bold",
                    bg: e$.bg.reference,
                    color: e$.color.reference,
                    boxShadow: e$.shadow.reference
                }),
                ej = (0, j.k0)(e => {
                    let {
                        colorScheme: r,
                        theme: t
                    } = e, o = Z(`${r}.500`, .6)(t);
                    return {
                        [e$.bg.variable]: `colors.${r}.500`,
                        [e$.color.variable]: "colors.white",
                        _dark: {
                            [e$.bg.variable]: o,
                            [e$.color.variable]: "colors.whiteAlpha.800"
                        }
                    }
                }),
                eP = (0, j.k0)(e => {
                    let {
                        colorScheme: r,
                        theme: t
                    } = e, o = Z(`${r}.200`, .16)(t);
                    return {
                        [e$.bg.variable]: `colors.${r}.100`,
                        [e$.color.variable]: `colors.${r}.800`,
                        _dark: {
                            [e$.bg.variable]: o,
                            [e$.color.variable]: `colors.${r}.200`
                        }
                    }
                }),
                eF = (0, j.k0)(e => {
                    let {
                        colorScheme: r,
                        theme: t
                    } = e, o = Z(`${r}.200`, .8)(t);
                    return {
                        [e$.color.variable]: `colors.${r}.500`,
                        _dark: {
                            [e$.color.variable]: o
                        },
                        [e$.shadow.variable]: `inset 0 0 0px 1px ${e$.color.reference}`
                    }
                }),
                eD = (0, j.fj)({
                    baseStyle: eA,
                    variants: {
                        solid: ej,
                        subtle: eP,
                        outline: eF
                    },
                    defaultProps: {
                        variant: "subtle",
                        colorScheme: "gray"
                    }
                }),
                {
                    defineMultiStyleConfig: eE,
                    definePartsStyle: eB
                } = (0, j.D)(l.keys),
                eM = (0, B.gJ)("breadcrumb-link-decor"),
                eW = eE({
                    baseStyle: eB({
                        link: (0, j.k0)({
                            transitionProperty: "common",
                            transitionDuration: "fast",
                            transitionTimingFunction: "ease-out",
                            outline: "none",
                            color: "inherit",
                            textDecoration: eM.reference,
                            [eM.variable]: "none",
                            "&:not([aria-current=page])": {
                                cursor: "pointer",
                                _hover: {
                                    [eM.variable]: "underline"
                                },
                                _focusVisible: {
                                    boxShadow: "outline"
                                }
                            }
                        })
                    })
                });

            function eR(e, r) {
                return t => "dark" === t.colorMode ? r : e
            }

            function eJ(e) {
                let {
                    orientation: r,
                    vertical: t,
                    horizontal: o
                } = e;
                return r ? "vertical" === r ? t : o : {}
            }
            let eI = (0, j.k0)({
                    lineHeight: "1.2",
                    borderRadius: "md",
                    fontWeight: "semibold",
                    transitionProperty: "common",
                    transitionDuration: "normal",
                    _focusVisible: {
                        boxShadow: "outline"
                    },
                    _disabled: {
                        opacity: .4,
                        cursor: "not-allowed",
                        boxShadow: "none"
                    },
                    _hover: {
                        _disabled: {
                            bg: "initial"
                        }
                    }
                }),
                eT = (0, j.k0)(e => {
                    let {
                        colorScheme: r,
                        theme: t
                    } = e;
                    if ("gray" === r) return {
                        color: eR("gray.800", "whiteAlpha.900")(e),
                        _hover: {
                            bg: eR("gray.100", "whiteAlpha.200")(e)
                        },
                        _active: {
                            bg: eR("gray.200", "whiteAlpha.300")(e)
                        }
                    };
                    let o = Z(`${r}.200`, .12)(t),
                        n = Z(`${r}.200`, .24)(t);
                    return {
                        color: eR(`${r}.600`, `${r}.200`)(e),
                        bg: "transparent",
                        _hover: {
                            bg: eR(`${r}.50`, o)(e)
                        },
                        _active: {
                            bg: eR(`${r}.100`, n)(e)
                        }
                    }
                }),
                eH = (0, j.k0)(e => {
                    let {
                        colorScheme: r
                    } = e, t = eR("gray.200", "whiteAlpha.300")(e);
                    return {
                        border: "1px solid",
                        borderColor: "gray" === r ? t : "currentColor",
                        ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": {
                            marginEnd: "-1px"
                        },
                        ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": {
                            marginBottom: "-1px"
                        },
                        ...ep(eT, e)
                    }
                }),
                eq = {
                    yellow: {
                        bg: "yellow.400",
                        color: "black",
                        hoverBg: "yellow.500",
                        activeBg: "yellow.600"
                    },
                    cyan: {
                        bg: "cyan.400",
                        color: "black",
                        hoverBg: "cyan.500",
                        activeBg: "cyan.600"
                    }
                },
                eL = (0, j.k0)(e => {
                    let {
                        colorScheme: r
                    } = e;
                    if ("gray" === r) {
                        let r = eR("gray.100", "whiteAlpha.200")(e);
                        return {
                            bg: r,
                            color: eR("gray.800", "whiteAlpha.900")(e),
                            _hover: {
                                bg: eR("gray.200", "whiteAlpha.300")(e),
                                _disabled: {
                                    bg: r
                                }
                            },
                            _active: {
                                bg: eR("gray.300", "whiteAlpha.400")(e)
                            }
                        }
                    }
                    let {
                        bg: t = `${r}.500`,
                        color: o = "white",
                        hoverBg: n = `${r}.600`,
                        activeBg: i = `${r}.700`
                    } = eq[r] ? ? {}, a = eR(t, `${r}.200`)(e);
                    return {
                        bg: a,
                        color: eR(o, "gray.800")(e),
                        _hover: {
                            bg: eR(n, `${r}.300`)(e),
                            _disabled: {
                                bg: a
                            }
                        },
                        _active: {
                            bg: eR(i, `${r}.400`)(e)
                        }
                    }
                }),
                eO = (0, j.k0)(e => {
                    let {
                        colorScheme: r
                    } = e;
                    return {
                        padding: 0,
                        height: "auto",
                        lineHeight: "normal",
                        verticalAlign: "baseline",
                        color: eR(`${r}.500`, `${r}.200`)(e),
                        _hover: {
                            textDecoration: "underline",
                            _disabled: {
                                textDecoration: "none"
                            }
                        },
                        _active: {
                            color: eR(`${r}.700`, `${r}.500`)(e)
                        }
                    }
                }),
                eV = (0, j.k0)({
                    bg: "none",
                    color: "inherit",
                    display: "inline",
                    lineHeight: "inherit",
                    m: "0",
                    p: "0"
                }),
                eN = {
                    lg: (0, j.k0)({
                        h: "12",
                        minW: "12",
                        fontSize: "lg",
                        px: "6"
                    }),
                    md: (0, j.k0)({
                        h: "10",
                        minW: "10",
                        fontSize: "md",
                        px: "4"
                    }),
                    sm: (0, j.k0)({
                        h: "8",
                        minW: "8",
                        fontSize: "sm",
                        px: "3"
                    }),
                    xs: (0, j.k0)({
                        h: "6",
                        minW: "6",
                        fontSize: "xs",
                        px: "2"
                    })
                },
                eK = (0, j.fj)({
                    baseStyle: eI,
                    variants: {
                        ghost: eT,
                        outline: eH,
                        solid: eL,
                        link: eO,
                        unstyled: eV
                    },
                    sizes: eN,
                    defaultProps: {
                        variant: "solid",
                        size: "md",
                        colorScheme: "gray"
                    }
                }),
                {
                    definePartsStyle: eU,
                    defineMultiStyleConfig: eG
                } = (0, j.D)(A.keys),
                eY = (0, B.gJ)("card-bg"),
                eX = (0, B.gJ)("card-padding"),
                eQ = (0, B.gJ)("card-shadow"),
                eZ = (0, B.gJ)("card-radius"),
                e0 = (0, B.gJ)("card-border-width", "0"),
                e1 = (0, B.gJ)("card-border-color"),
                e2 = eU({
                    container: {
                        [eY.variable]: "colors.chakra-body-bg",
                        backgroundColor: eY.reference,
                        boxShadow: eQ.reference,
                        borderRadius: eZ.reference,
                        color: "chakra-body-text",
                        borderWidth: e0.reference,
                        borderColor: e1.reference
                    },
                    body: {
                        padding: eX.reference,
                        flex: "1 1 0%"
                    },
                    header: {
                        padding: eX.reference
                    },
                    footer: {
                        padding: eX.reference
                    }
                }),
                e5 = {
                    sm: eU({
                        container: {
                            [eZ.variable]: "radii.base",
                            [eX.variable]: "space.3"
                        }
                    }),
                    md: eU({
                        container: {
                            [eZ.variable]: "radii.md",
                            [eX.variable]: "space.5"
                        }
                    }),
                    lg: eU({
                        container: {
                            [eZ.variable]: "radii.xl",
                            [eX.variable]: "space.7"
                        }
                    })
                },
                e6 = eG({
                    baseStyle: e2,
                    variants: {
                        elevated: eU({
                            container: {
                                [eQ.variable]: "shadows.base",
                                _dark: {
                                    [eY.variable]: "colors.gray.700"
                                }
                            }
                        }),
                        outline: eU({
                            container: {
                                [e0.variable]: "1px",
                                [e1.variable]: "colors.chakra-border-color"
                            }
                        }),
                        filled: eU({
                            container: {
                                [eY.variable]: "colors.chakra-subtle-bg"
                            }
                        }),
                        unstyled: {
                            body: {
                                [eX.variable]: 0
                            },
                            header: {
                                [eX.variable]: 0
                            },
                            footer: {
                                [eX.variable]: 0
                            }
                        }
                    },
                    sizes: e5,
                    defaultProps: {
                        variant: "elevated",
                        size: "md"
                    }
                }),
                {
                    definePartsStyle: e4,
                    defineMultiStyleConfig: e3
                } = (0, j.D)(s.keys),
                e8 = (0, B.gJ)("checkbox-size"),
                e9 = (0, j.k0)(e => {
                    let {
                        colorScheme: r
                    } = e;
                    return {
                        w: e8.reference,
                        h: e8.reference,
                        transitionProperty: "box-shadow",
                        transitionDuration: "normal",
                        border: "2px solid",
                        borderRadius: "sm",
                        borderColor: "inherit",
                        color: "white",
                        _checked: {
                            bg: eR(`${r}.500`, `${r}.200`)(e),
                            borderColor: eR(`${r}.500`, `${r}.200`)(e),
                            color: eR("white", "gray.900")(e),
                            _hover: {
                                bg: eR(`${r}.600`, `${r}.300`)(e),
                                borderColor: eR(`${r}.600`, `${r}.300`)(e)
                            },
                            _disabled: {
                                borderColor: eR("gray.200", "transparent")(e),
                                bg: eR("gray.200", "whiteAlpha.300")(e),
                                color: eR("gray.500", "whiteAlpha.500")(e)
                            }
                        },
                        _indeterminate: {
                            bg: eR(`${r}.500`, `${r}.200`)(e),
                            borderColor: eR(`${r}.500`, `${r}.200`)(e),
                            color: eR("white", "gray.900")(e)
                        },
                        _disabled: {
                            bg: eR("gray.100", "whiteAlpha.100")(e),
                            borderColor: eR("gray.100", "transparent")(e)
                        },
                        _focusVisible: {
                            boxShadow: "outline"
                        },
                        _invalid: {
                            borderColor: eR("red.500", "red.300")(e)
                        }
                    }
                }),
                e7 = (0, j.k0)({
                    _disabled: {
                        cursor: "not-allowed"
                    }
                }),
                re = (0, j.k0)({
                    userSelect: "none",
                    _disabled: {
                        opacity: .4
                    }
                }),
                rr = (0, j.k0)({
                    transitionProperty: "transform",
                    transitionDuration: "normal"
                }),
                rt = e3({
                    baseStyle: e4(e => ({
                        icon: rr,
                        container: e7,
                        control: ep(e9, e),
                        label: re
                    })),
                    sizes: {
                        sm: e4({
                            control: {
                                [e8.variable]: "sizes.3"
                            },
                            label: {
                                fontSize: "sm"
                            },
                            icon: {
                                fontSize: "3xs"
                            }
                        }),
                        md: e4({
                            control: {
                                [e8.variable]: "sizes.4"
                            },
                            label: {
                                fontSize: "md"
                            },
                            icon: {
                                fontSize: "2xs"
                            }
                        }),
                        lg: e4({
                            control: {
                                [e8.variable]: "sizes.5"
                            },
                            label: {
                                fontSize: "lg"
                            },
                            icon: {
                                fontSize: "2xs"
                            }
                        })
                    },
                    defaultProps: {
                        size: "md",
                        colorScheme: "blue"
                    }
                });

            function ro(e) {
                let r = function(e, r = "-") {
                    return e.replace(/\s+/g, r)
                }(e.toString());
                return r.includes("\\.") ? e : Number.isInteger(parseFloat(e.toString())) ? e : r.replace(".", "\\.")
            }

            function rn(e, r) {
                var t, o;
                let n = function(e, r = "") {
                    return `--${function(e,r=""){return[r,ro(e)].filter(Boolean).join("-")}(e,r)}`
                }(e, r ? .prefix);
                return {
                    variable: n,
                    reference: (t = "string" == typeof(o = r ? .fallback) ? o : o ? .reference, `var(${ro(n)}${t?`, ${t}`:""})`)
                }
            }
            let ri = rn("close-button-size"),
                ra = rn("close-button-bg"),
                rl = (0, j.k0)({
                    w: [ri.reference],
                    h: [ri.reference],
                    borderRadius: "md",
                    transitionProperty: "common",
                    transitionDuration: "normal",
                    _disabled: {
                        opacity: .4,
                        cursor: "not-allowed",
                        boxShadow: "none"
                    },
                    _hover: {
                        [ra.variable]: "colors.blackAlpha.100",
                        _dark: {
                            [ra.variable]: "colors.whiteAlpha.100"
                        }
                    },
                    _active: {
                        [ra.variable]: "colors.blackAlpha.200",
                        _dark: {
                            [ra.variable]: "colors.whiteAlpha.200"
                        }
                    },
                    _focusVisible: {
                        boxShadow: "outline"
                    },
                    bg: ra.reference
                }),
                rs = {
                    lg: (0, j.k0)({
                        [ri.variable]: "sizes.10",
                        fontSize: "md"
                    }),
                    md: (0, j.k0)({
                        [ri.variable]: "sizes.8",
                        fontSize: "xs"
                    }),
                    sm: (0, j.k0)({
                        [ri.variable]: "sizes.6",
                        fontSize: "2xs"
                    })
                },
                rd = (0, j.fj)({
                    baseStyle: rl,
                    sizes: rs,
                    defaultProps: {
                        size: "md"
                    }
                }),
                {
                    variants: rc,
                    defaultProps: rb
                } = eD,
                ru = (0, j.k0)({
                    fontFamily: "mono",
                    fontSize: "sm",
                    px: "0.2em",
                    borderRadius: "sm",
                    bg: e$.bg.reference,
                    color: e$.color.reference,
                    boxShadow: e$.shadow.reference
                }),
                rf = (0, j.fj)({
                    baseStyle: ru,
                    variants: rc,
                    defaultProps: rb
                }),
                rp = (0, j.k0)({
                    w: "100%",
                    mx: "auto",
                    maxW: "prose",
                    px: "4"
                }),
                rg = (0, j.fj)({
                    baseStyle: rp
                }),
                rm = (0, j.k0)({
                    opacity: .6,
                    borderColor: "inherit"
                }),
                rh = (0, j.k0)({
                    borderStyle: "solid"
                }),
                ry = (0, j.k0)({
                    borderStyle: "dashed"
                }),
                rv = (0, j.fj)({
                    baseStyle: rm,
                    variants: {
                        solid: rh,
                        dashed: ry
                    },
                    defaultProps: {
                        variant: "solid"
                    }
                }),
                {
                    definePartsStyle: rx,
                    defineMultiStyleConfig: rk
                } = (0, j.D)(d.keys),
                rS = (0, B.gJ)("drawer-bg"),
                rw = (0, B.gJ)("drawer-box-shadow");

            function r_(e) {
                return "full" === e ? rx({
                    dialog: {
                        maxW: "100vw",
                        h: "100vh"
                    }
                }) : rx({
                    dialog: {
                        maxW: e
                    }
                })
            }
            let rz = (0, j.k0)({
                    bg: "blackAlpha.600",
                    zIndex: "modal"
                }),
                rC = (0, j.k0)({
                    display: "flex",
                    zIndex: "modal",
                    justifyContent: "center"
                }),
                r$ = (0, j.k0)(e => {
                    let {
                        isFullHeight: r
                    } = e;
                    return { ...r && {
                            height: "100vh"
                        },
                        zIndex: "modal",
                        maxH: "100vh",
                        color: "inherit",
                        [rS.variable]: "colors.white",
                        [rw.variable]: "shadows.lg",
                        _dark: {
                            [rS.variable]: "colors.gray.700",
                            [rw.variable]: "shadows.dark-lg"
                        },
                        bg: rS.reference,
                        boxShadow: rw.reference
                    }
                }),
                rA = (0, j.k0)({
                    px: "6",
                    py: "4",
                    fontSize: "xl",
                    fontWeight: "semibold"
                }),
                rj = (0, j.k0)({
                    position: "absolute",
                    top: "2",
                    insetEnd: "3"
                }),
                rP = (0, j.k0)({
                    px: "6",
                    py: "2",
                    flex: "1",
                    overflow: "auto"
                }),
                rF = (0, j.k0)({
                    px: "6",
                    py: "4"
                }),
                rD = rk({
                    baseStyle: rx(e => ({
                        overlay: rz,
                        dialogContainer: rC,
                        dialog: ep(r$, e),
                        header: rA,
                        closeButton: rj,
                        body: rP,
                        footer: rF
                    })),
                    sizes: {
                        xs: r_("xs"),
                        sm: r_("md"),
                        md: r_("lg"),
                        lg: r_("2xl"),
                        xl: r_("4xl"),
                        full: r_("full")
                    },
                    defaultProps: {
                        size: "xs"
                    }
                }),
                {
                    definePartsStyle: rE,
                    defineMultiStyleConfig: rB
                } = (0, j.D)(c.keys),
                rM = rB({
                    baseStyle: rE({
                        preview: (0, j.k0)({
                            borderRadius: "md",
                            py: "1",
                            transitionProperty: "common",
                            transitionDuration: "normal"
                        }),
                        input: (0, j.k0)({
                            borderRadius: "md",
                            py: "1",
                            transitionProperty: "common",
                            transitionDuration: "normal",
                            width: "full",
                            _focusVisible: {
                                boxShadow: "outline"
                            },
                            _placeholder: {
                                opacity: .6
                            }
                        }),
                        textarea: (0, j.k0)({
                            borderRadius: "md",
                            py: "1",
                            transitionProperty: "common",
                            transitionDuration: "normal",
                            width: "full",
                            _focusVisible: {
                                boxShadow: "outline"
                            },
                            _placeholder: {
                                opacity: .6
                            }
                        })
                    })
                }),
                {
                    definePartsStyle: rW,
                    defineMultiStyleConfig: rR
                } = (0, j.D)(b.keys),
                rJ = (0, B.gJ)("form-control-color"),
                rI = rR({
                    baseStyle: rW({
                        container: {
                            width: "100%",
                            position: "relative"
                        },
                        requiredIndicator: (0, j.k0)({
                            marginStart: "1",
                            [rJ.variable]: "colors.red.500",
                            _dark: {
                                [rJ.variable]: "colors.red.300"
                            },
                            color: rJ.reference
                        }),
                        helperText: (0, j.k0)({
                            mt: "2",
                            [rJ.variable]: "colors.gray.600",
                            _dark: {
                                [rJ.variable]: "colors.whiteAlpha.600"
                            },
                            color: rJ.reference,
                            lineHeight: "normal",
                            fontSize: "sm"
                        })
                    })
                }),
                {
                    definePartsStyle: rT,
                    defineMultiStyleConfig: rH
                } = (0, j.D)(u.keys),
                rq = (0, B.gJ)("form-error-color"),
                rL = rH({
                    baseStyle: rT({
                        text: (0, j.k0)({
                            [rq.variable]: "colors.red.500",
                            _dark: {
                                [rq.variable]: "colors.red.300"
                            },
                            color: rq.reference,
                            mt: "2",
                            fontSize: "sm",
                            lineHeight: "normal"
                        }),
                        icon: (0, j.k0)({
                            marginEnd: "0.5em",
                            [rq.variable]: "colors.red.500",
                            _dark: {
                                [rq.variable]: "colors.red.300"
                            },
                            color: rq.reference
                        })
                    })
                }),
                rO = (0, j.k0)({
                    fontSize: "md",
                    marginEnd: "3",
                    mb: "2",
                    fontWeight: "medium",
                    transitionProperty: "common",
                    transitionDuration: "normal",
                    opacity: 1,
                    _disabled: {
                        opacity: .4
                    }
                }),
                rV = (0, j.fj)({
                    baseStyle: rO
                }),
                rN = (0, j.k0)({
                    fontFamily: "heading",
                    fontWeight: "bold"
                }),
                rK = {
                    "4xl": (0, j.k0)({
                        fontSize: ["6xl", null, "7xl"],
                        lineHeight: 1
                    }),
                    "3xl": (0, j.k0)({
                        fontSize: ["5xl", null, "6xl"],
                        lineHeight: 1
                    }),
                    "2xl": (0, j.k0)({
                        fontSize: ["4xl", null, "5xl"],
                        lineHeight: [1.2, null, 1]
                    }),
                    xl: (0, j.k0)({
                        fontSize: ["3xl", null, "4xl"],
                        lineHeight: [1.33, null, 1.2]
                    }),
                    lg: (0, j.k0)({
                        fontSize: ["2xl", null, "3xl"],
                        lineHeight: [1.33, null, 1.2]
                    }),
                    md: (0, j.k0)({
                        fontSize: "xl",
                        lineHeight: 1.2
                    }),
                    sm: (0, j.k0)({
                        fontSize: "md",
                        lineHeight: 1.2
                    }),
                    xs: (0, j.k0)({
                        fontSize: "sm",
                        lineHeight: 1.2
                    })
                },
                rU = (0, j.fj)({
                    baseStyle: rN,
                    sizes: rK,
                    defaultProps: {
                        size: "xl"
                    }
                }),
                {
                    definePartsStyle: rG,
                    defineMultiStyleConfig: rY
                } = (0, j.D)(f.keys),
                rX = (0, B.gJ)("input-height"),
                rQ = (0, B.gJ)("input-font-size"),
                rZ = (0, B.gJ)("input-padding"),
                r0 = (0, B.gJ)("input-border-radius"),
                r1 = rG({
                    addon: {
                        height: rX.reference,
                        fontSize: rQ.reference,
                        px: rZ.reference,
                        borderRadius: r0.reference
                    },
                    field: {
                        width: "100%",
                        height: rX.reference,
                        fontSize: rQ.reference,
                        px: rZ.reference,
                        borderRadius: r0.reference,
                        minWidth: 0,
                        outline: 0,
                        position: "relative",
                        appearance: "none",
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        _disabled: {
                            opacity: .4,
                            cursor: "not-allowed"
                        }
                    }
                }),
                r2 = {
                    lg: (0, j.k0)({
                        [rQ.variable]: "fontSizes.lg",
                        [rZ.variable]: "space.4",
                        [r0.variable]: "radii.md",
                        [rX.variable]: "sizes.12"
                    }),
                    md: (0, j.k0)({
                        [rQ.variable]: "fontSizes.md",
                        [rZ.variable]: "space.4",
                        [r0.variable]: "radii.md",
                        [rX.variable]: "sizes.10"
                    }),
                    sm: (0, j.k0)({
                        [rQ.variable]: "fontSizes.sm",
                        [rZ.variable]: "space.3",
                        [r0.variable]: "radii.sm",
                        [rX.variable]: "sizes.8"
                    }),
                    xs: (0, j.k0)({
                        [rQ.variable]: "fontSizes.xs",
                        [rZ.variable]: "space.2",
                        [r0.variable]: "radii.sm",
                        [rX.variable]: "sizes.6"
                    })
                },
                r5 = {
                    lg: rG({
                        field: r2.lg,
                        group: r2.lg
                    }),
                    md: rG({
                        field: r2.md,
                        group: r2.md
                    }),
                    sm: rG({
                        field: r2.sm,
                        group: r2.sm
                    }),
                    xs: rG({
                        field: r2.xs,
                        group: r2.xs
                    })
                };

            function r6(e) {
                let {
                    focusBorderColor: r,
                    errorBorderColor: t
                } = e;
                return {
                    focusBorderColor: r || eR("blue.500", "blue.300")(e),
                    errorBorderColor: t || eR("red.500", "red.300")(e)
                }
            }
            let r4 = rG(e => {
                    let {
                        theme: r
                    } = e, {
                        focusBorderColor: t,
                        errorBorderColor: o
                    } = r6(e);
                    return {
                        field: {
                            border: "1px solid",
                            borderColor: "inherit",
                            bg: "inherit",
                            _hover: {
                                borderColor: eR("gray.300", "whiteAlpha.400")(e)
                            },
                            _readOnly: {
                                boxShadow: "none !important",
                                userSelect: "all"
                            },
                            _invalid: {
                                borderColor: G(r, o),
                                boxShadow: `0 0 0 1px ${G(r,o)}`
                            },
                            _focusVisible: {
                                zIndex: 1,
                                borderColor: G(r, t),
                                boxShadow: `0 0 0 1px ${G(r,t)}`
                            }
                        },
                        addon: {
                            border: "1px solid",
                            borderColor: eR("inherit", "whiteAlpha.50")(e),
                            bg: eR("gray.100", "whiteAlpha.300")(e)
                        }
                    }
                }),
                r3 = rG(e => {
                    let {
                        theme: r
                    } = e, {
                        focusBorderColor: t,
                        errorBorderColor: o
                    } = r6(e);
                    return {
                        field: {
                            border: "2px solid",
                            borderColor: "transparent",
                            bg: eR("gray.100", "whiteAlpha.50")(e),
                            _hover: {
                                bg: eR("gray.200", "whiteAlpha.100")(e)
                            },
                            _readOnly: {
                                boxShadow: "none !important",
                                userSelect: "all"
                            },
                            _invalid: {
                                borderColor: G(r, o)
                            },
                            _focusVisible: {
                                bg: "transparent",
                                borderColor: G(r, t)
                            }
                        },
                        addon: {
                            border: "2px solid",
                            borderColor: "transparent",
                            bg: eR("gray.100", "whiteAlpha.50")(e)
                        }
                    }
                }),
                r8 = rY({
                    baseStyle: r1,
                    sizes: r5,
                    variants: {
                        outline: r4,
                        filled: r3,
                        flushed: rG(e => {
                            let {
                                theme: r
                            } = e, {
                                focusBorderColor: t,
                                errorBorderColor: o
                            } = r6(e);
                            return {
                                field: {
                                    borderBottom: "1px solid",
                                    borderColor: "inherit",
                                    borderRadius: "0",
                                    px: "0",
                                    bg: "transparent",
                                    _readOnly: {
                                        boxShadow: "none !important",
                                        userSelect: "all"
                                    },
                                    _invalid: {
                                        borderColor: G(r, o),
                                        boxShadow: `0px 1px 0px 0px ${G(r,o)}`
                                    },
                                    _focusVisible: {
                                        borderColor: G(r, t),
                                        boxShadow: `0px 1px 0px 0px ${G(r,t)}`
                                    }
                                },
                                addon: {
                                    borderBottom: "2px solid",
                                    borderColor: "inherit",
                                    borderRadius: "0",
                                    px: "0",
                                    bg: "transparent"
                                }
                            }
                        }),
                        unstyled: rG({
                            field: {
                                bg: "transparent",
                                px: "0",
                                height: "auto"
                            },
                            addon: {
                                bg: "transparent",
                                px: "0",
                                height: "auto"
                            }
                        })
                    },
                    defaultProps: {
                        size: "md",
                        variant: "outline"
                    }
                }),
                r9 = (0, B.gJ)("kbd-bg"),
                r7 = (0, j.k0)({
                    [r9.variable]: "colors.gray.100",
                    _dark: {
                        [r9.variable]: "colors.whiteAlpha.100"
                    },
                    bg: r9.reference,
                    borderRadius: "md",
                    borderWidth: "1px",
                    borderBottomWidth: "3px",
                    fontSize: "0.8em",
                    fontWeight: "bold",
                    lineHeight: "normal",
                    px: "0.4em",
                    whiteSpace: "nowrap"
                }),
                te = (0, j.fj)({
                    baseStyle: r7
                }),
                tr = (0, j.k0)({
                    transitionProperty: "common",
                    transitionDuration: "fast",
                    transitionTimingFunction: "ease-out",
                    cursor: "pointer",
                    textDecoration: "none",
                    outline: "none",
                    color: "inherit",
                    _hover: {
                        textDecoration: "underline"
                    },
                    _focusVisible: {
                        boxShadow: "outline"
                    }
                }),
                tt = (0, j.fj)({
                    baseStyle: tr
                }),
                {
                    defineMultiStyleConfig: to,
                    definePartsStyle: tn
                } = (0, j.D)(p.keys),
                ti = to({
                    baseStyle: tn({
                        icon: (0, j.k0)({
                            marginEnd: "2",
                            display: "inline",
                            verticalAlign: "text-bottom"
                        })
                    })
                }),
                {
                    defineMultiStyleConfig: ta,
                    definePartsStyle: tl
                } = (0, j.D)(g.keys),
                ts = (0, B.gJ)("menu-bg"),
                td = (0, B.gJ)("menu-shadow"),
                tc = (0, j.k0)({
                    [ts.variable]: "#fff",
                    [td.variable]: "shadows.sm",
                    _dark: {
                        [ts.variable]: "colors.gray.700",
                        [td.variable]: "shadows.dark-lg"
                    },
                    color: "inherit",
                    minW: "3xs",
                    py: "2",
                    zIndex: "dropdown",
                    borderRadius: "md",
                    borderWidth: "1px",
                    bg: ts.reference,
                    boxShadow: td.reference
                }),
                tb = (0, j.k0)({
                    py: "1.5",
                    px: "3",
                    transitionProperty: "background",
                    transitionDuration: "ultra-fast",
                    transitionTimingFunction: "ease-in",
                    _focus: {
                        [ts.variable]: "colors.gray.100",
                        _dark: {
                            [ts.variable]: "colors.whiteAlpha.100"
                        }
                    },
                    _active: {
                        [ts.variable]: "colors.gray.200",
                        _dark: {
                            [ts.variable]: "colors.whiteAlpha.200"
                        }
                    },
                    _expanded: {
                        [ts.variable]: "colors.gray.100",
                        _dark: {
                            [ts.variable]: "colors.whiteAlpha.100"
                        }
                    },
                    _disabled: {
                        opacity: .4,
                        cursor: "not-allowed"
                    },
                    bg: ts.reference
                }),
                tu = (0, j.k0)({
                    mx: 4,
                    my: 2,
                    fontWeight: "semibold",
                    fontSize: "sm"
                }),
                tf = (0, j.k0)({
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                }),
                tp = (0, j.k0)({
                    opacity: .6
                }),
                tg = (0, j.k0)({
                    border: 0,
                    borderBottom: "1px solid",
                    borderColor: "inherit",
                    my: "2",
                    opacity: .6
                }),
                tm = ta({
                    baseStyle: tl({
                        button: (0, j.k0)({
                            transitionProperty: "common",
                            transitionDuration: "normal"
                        }),
                        list: tc,
                        item: tb,
                        groupTitle: tu,
                        icon: tf,
                        command: tp,
                        divider: tg
                    })
                }),
                {
                    defineMultiStyleConfig: th,
                    definePartsStyle: ty
                } = (0, j.D)(m.keys),
                tv = (0, B.gJ)("modal-bg"),
                tx = (0, B.gJ)("modal-shadow"),
                tk = (0, j.k0)({
                    bg: "blackAlpha.600",
                    zIndex: "modal"
                }),
                tS = (0, j.k0)(e => {
                    let {
                        isCentered: r,
                        scrollBehavior: t
                    } = e;
                    return {
                        display: "flex",
                        zIndex: "modal",
                        justifyContent: "center",
                        alignItems: r ? "center" : "flex-start",
                        overflow: "inside" === t ? "hidden" : "auto",
                        overscrollBehaviorY: "none"
                    }
                }),
                tw = (0, j.k0)(e => {
                    let {
                        isCentered: r,
                        scrollBehavior: t
                    } = e;
                    return {
                        borderRadius: "md",
                        color: "inherit",
                        my: r ? "auto" : "16",
                        mx: r ? "auto" : void 0,
                        zIndex: "modal",
                        maxH: "inside" === t ? "calc(100% - 7.5rem)" : void 0,
                        [tv.variable]: "colors.white",
                        [tx.variable]: "shadows.lg",
                        _dark: {
                            [tv.variable]: "colors.gray.700",
                            [tx.variable]: "shadows.dark-lg"
                        },
                        bg: tv.reference,
                        boxShadow: tx.reference
                    }
                }),
                t_ = (0, j.k0)({
                    px: "6",
                    py: "4",
                    fontSize: "xl",
                    fontWeight: "semibold"
                }),
                tz = (0, j.k0)({
                    position: "absolute",
                    top: "2",
                    insetEnd: "3"
                }),
                tC = (0, j.k0)(e => {
                    let {
                        scrollBehavior: r
                    } = e;
                    return {
                        px: "6",
                        py: "2",
                        flex: "1",
                        overflow: "inside" === r ? "auto" : void 0
                    }
                }),
                t$ = (0, j.k0)({
                    px: "6",
                    py: "4"
                });

            function tA(e) {
                return "full" === e ? ty({
                    dialog: {
                        maxW: "100vw",
                        minH: "$100vh",
                        my: "0",
                        borderRadius: "0"
                    }
                }) : ty({
                    dialog: {
                        maxW: e
                    }
                })
            }
            let tj = th({
                baseStyle: ty(e => ({
                    overlay: tk,
                    dialogContainer: ep(tS, e),
                    dialog: ep(tw, e),
                    header: t_,
                    closeButton: tz,
                    body: ep(tC, e),
                    footer: t$
                })),
                sizes: {
                    xs: tA("xs"),
                    sm: tA("sm"),
                    md: tA("md"),
                    lg: tA("lg"),
                    xl: tA("xl"),
                    "2xl": tA("2xl"),
                    "3xl": tA("3xl"),
                    "4xl": tA("4xl"),
                    "5xl": tA("5xl"),
                    "6xl": tA("6xl"),
                    full: tA("full")
                },
                defaultProps: {
                    size: "md"
                }
            });
            var tP = t(18631);

            function tF(e) {
                return (0, tP.Kn)(e) && e.reference ? e.reference : String(e)
            }
            let tD = (e, ...r) => r.map(tF).join(` ${e} `).replace(/calc/g, ""),
                tE = (...e) => `calc(${tD("+",...e)})`,
                tB = (...e) => `calc(${tD("-",...e)})`,
                tM = (...e) => `calc(${tD("*",...e)})`,
                tW = (...e) => `calc(${tD("/",...e)})`,
                tR = e => {
                    let r = tF(e);
                    return null == r || Number.isNaN(parseFloat(r)) ? tM(r, -1) : String(r).startsWith("-") ? String(r).slice(1) : `-${r}`
                },
                tJ = Object.assign(e => ({
                    add: (...r) => tJ(tE(e, ...r)),
                    subtract: (...r) => tJ(tB(e, ...r)),
                    multiply: (...r) => tJ(tM(e, ...r)),
                    divide: (...r) => tJ(tW(e, ...r)),
                    negate: () => tJ(tR(e)),
                    toString: () => e.toString()
                }), {
                    add: tE,
                    subtract: tB,
                    multiply: tM,
                    divide: tW,
                    negate: tR
                }),
                tI = {
                    letterSpacings: {
                        tighter: "-0.05em",
                        tight: "-0.025em",
                        normal: "0",
                        wide: "0.025em",
                        wider: "0.05em",
                        widest: "0.1em"
                    },
                    lineHeights: {
                        normal: "normal",
                        none: 1,
                        shorter: 1.25,
                        short: 1.375,
                        base: 1.5,
                        tall: 1.625,
                        taller: "2",
                        3: ".75rem",
                        4: "1rem",
                        5: "1.25rem",
                        6: "1.5rem",
                        7: "1.75rem",
                        8: "2rem",
                        9: "2.25rem",
                        10: "2.5rem"
                    },
                    fontWeights: {
                        hairline: 100,
                        thin: 200,
                        light: 300,
                        normal: 400,
                        medium: 500,
                        semibold: 600,
                        bold: 700,
                        extrabold: 800,
                        black: 900
                    },
                    fonts: {
                        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                        mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
                    },
                    fontSizes: {
                        "3xs": "0.45rem",
                        "2xs": "0.625rem",
                        xs: "0.75rem",
                        sm: "0.875rem",
                        md: "1rem",
                        lg: "1.125rem",
                        xl: "1.25rem",
                        "2xl": "1.5rem",
                        "3xl": "1.875rem",
                        "4xl": "2.25rem",
                        "5xl": "3rem",
                        "6xl": "3.75rem",
                        "7xl": "4.5rem",
                        "8xl": "6rem",
                        "9xl": "8rem"
                    }
                },
                {
                    defineMultiStyleConfig: tT,
                    definePartsStyle: tH
                } = (0, j.D)(h.keys),
                tq = rn("number-input-stepper-width"),
                tL = rn("number-input-input-padding"),
                tO = tJ(tq).add("0.5rem").toString(),
                tV = rn("number-input-bg"),
                tN = rn("number-input-color"),
                tK = rn("number-input-border-color"),
                tU = (0, j.k0)({
                    [tq.variable]: "sizes.6",
                    [tL.variable]: tO
                }),
                tG = (0, j.k0)(e => ep(r8.baseStyle, e) ? .field ? ? {}),
                tY = (0, j.k0)({
                    width: tq.reference
                }),
                tX = (0, j.k0)({
                    borderStart: "1px solid",
                    borderStartColor: tK.reference,
                    color: tN.reference,
                    bg: tV.reference,
                    [tN.variable]: "colors.chakra-body-text",
                    [tK.variable]: "colors.chakra-border-color",
                    _dark: {
                        [tN.variable]: "colors.whiteAlpha.800",
                        [tK.variable]: "colors.whiteAlpha.300"
                    },
                    _active: {
                        [tV.variable]: "colors.gray.200",
                        _dark: {
                            [tV.variable]: "colors.whiteAlpha.300"
                        }
                    },
                    _disabled: {
                        opacity: .4,
                        cursor: "not-allowed"
                    }
                });

            function tQ(e) {
                let r = r8.sizes ? .[e],
                    t = {
                        lg: "md",
                        md: "md",
                        sm: "sm",
                        xs: "sm"
                    },
                    o = r.field ? .fontSize ? ? "md",
                    n = tI.fontSizes[o];
                return tH({
                    field: { ...r.field,
                        paddingInlineEnd: tL.reference,
                        verticalAlign: "top"
                    },
                    stepper: {
                        fontSize: tJ(n).multiply(.75).toString(),
                        _first: {
                            borderTopEndRadius: t[e]
                        },
                        _last: {
                            borderBottomEndRadius: t[e],
                            mt: "-1px",
                            borderTopWidth: 1
                        }
                    }
                })
            }
            let tZ = tT({
                    baseStyle: tH(e => ({
                        root: tU,
                        field: ep(tG, e) ? ? {},
                        stepperGroup: tY,
                        stepper: tX
                    })),
                    sizes: {
                        xs: tQ("xs"),
                        sm: tQ("sm"),
                        md: tQ("md"),
                        lg: tQ("lg")
                    },
                    variants: r8.variants,
                    defaultProps: r8.defaultProps
                }),
                t0 = (0, j.k0)({ ...r8.baseStyle ? .field,
                    textAlign : "center"
                }),
                t1 = {
                    lg: (0, j.k0)({
                        fontSize: "lg",
                        w: 12,
                        h: 12,
                        borderRadius: "md"
                    }),
                    md: (0, j.k0)({
                        fontSize: "md",
                        w: 10,
                        h: 10,
                        borderRadius: "md"
                    }),
                    sm: (0, j.k0)({
                        fontSize: "sm",
                        w: 8,
                        h: 8,
                        borderRadius: "sm"
                    }),
                    xs: (0, j.k0)({
                        fontSize: "xs",
                        w: 6,
                        h: 6,
                        borderRadius: "sm"
                    })
                },
                t2 = {
                    outline: (0, j.k0)(e => ep(r8.variants ? .outline, e) ? .field ? ? {}),
                    flushed: (0, j.k0)(e => ep(r8.variants ? .flushed, e) ? .field ? ? {}),
                    filled: (0, j.k0)(e => ep(r8.variants ? .filled, e) ? .field ? ? {}),
                    unstyled: r8.variants ? .unstyled.field ? ? {}
                },
                t5 = (0, j.fj)({
                    baseStyle: t0,
                    sizes: t1,
                    variants: t2,
                    defaultProps: r8.defaultProps
                }),
                {
                    defineMultiStyleConfig: t6,
                    definePartsStyle: t4
                } = (0, j.D)(y.keys),
                t3 = rn("popper-bg"),
                t8 = rn("popper-arrow-bg"),
                t9 = rn("popper-arrow-shadow-color"),
                t7 = (0, j.k0)({
                    zIndex: "popover"
                }),
                oe = (0, j.k0)({
                    [t3.variable]: "colors.white",
                    bg: t3.reference,
                    [t8.variable]: t3.reference,
                    [t9.variable]: "colors.gray.200",
                    _dark: {
                        [t3.variable]: "colors.gray.700",
                        [t9.variable]: "colors.whiteAlpha.300"
                    },
                    width: "xs",
                    border: "1px solid",
                    borderColor: "inherit",
                    borderRadius: "md",
                    boxShadow: "sm",
                    zIndex: "inherit",
                    _focusVisible: {
                        outline: 0,
                        boxShadow: "outline"
                    }
                }),
                or = (0, j.k0)({
                    px: 3,
                    py: 2,
                    borderBottomWidth: "1px"
                }),
                ot = t6({
                    baseStyle: t4({
                        popper: t7,
                        content: oe,
                        header: or,
                        body: (0, j.k0)({
                            px: 3,
                            py: 2
                        }),
                        footer: (0, j.k0)({
                            px: 3,
                            py: 2,
                            borderTopWidth: "1px"
                        }),
                        closeButton: (0, j.k0)({
                            position: "absolute",
                            borderRadius: "md",
                            top: 1,
                            insetEnd: 2,
                            padding: 2
                        })
                    })
                }),
                {
                    defineMultiStyleConfig: oo,
                    definePartsStyle: on
                } = (0, j.D)(v.keys),
                oi = (0, j.k0)(e => {
                    let {
                        colorScheme: r,
                        theme: t,
                        isIndeterminate: o,
                        hasStripe: n
                    } = e, i = eR(ee(), ee("1rem", "rgba(0,0,0,0.1)"))(e), a = eR(`${r}.500`, `${r}.200`)(e), l = `linear-gradient(
    to right,
    transparent 0%,
    ${G(t,a)} 50%,
    transparent 100%
  )`;
                    return { ...!o && n && i,
                        ...o ? {
                            bgImage: l
                        } : {
                            bgColor: a
                        }
                    }
                }),
                oa = (0, j.k0)({
                    lineHeight: "1",
                    fontSize: "0.25em",
                    fontWeight: "bold",
                    color: "white"
                }),
                ol = (0, j.k0)(e => ({
                    bg: eR("gray.100", "whiteAlpha.300")(e)
                })),
                os = (0, j.k0)(e => ({
                    transitionProperty: "common",
                    transitionDuration: "slow",
                    ...oi(e)
                })),
                od = on(e => ({
                    label: oa,
                    filledTrack: os(e),
                    track: ol(e)
                })),
                oc = oo({
                    sizes: {
                        xs: on({
                            track: {
                                h: "1"
                            }
                        }),
                        sm: on({
                            track: {
                                h: "2"
                            }
                        }),
                        md: on({
                            track: {
                                h: "3"
                            }
                        }),
                        lg: on({
                            track: {
                                h: "4"
                            }
                        })
                    },
                    baseStyle: od,
                    defaultProps: {
                        size: "md",
                        colorScheme: "blue"
                    }
                }),
                {
                    defineMultiStyleConfig: ob,
                    definePartsStyle: ou
                } = (0, j.D)(x.keys),
                of = (0, j.k0)(e => {
                    let r = ep(rt.baseStyle, e) ? .control;
                    return { ...r,
                        borderRadius: "full",
                        _checked: { ...r ? ._checked,
                            _before : {
                                content: '""',
                                display: "inline-block",
                                pos: "relative",
                                w: "50%",
                                h: "50%",
                                borderRadius: "50%",
                                bg: "currentColor"
                            }
                        }
                    }
                }),
                op = ob({
                    baseStyle: ou(e => ({
                        label: rt.baseStyle ? .(e).label,
                        container: rt.baseStyle ? .(e).container,
                        control: of (e)
                    })),
                    sizes: {
                        md: ou({
                            control: {
                                w: "4",
                                h: "4"
                            },
                            label: {
                                fontSize: "md"
                            }
                        }),
                        lg: ou({
                            control: {
                                w: "5",
                                h: "5"
                            },
                            label: {
                                fontSize: "lg"
                            }
                        }),
                        sm: ou({
                            control: {
                                width: "3",
                                height: "3"
                            },
                            label: {
                                fontSize: "sm"
                            }
                        })
                    },
                    defaultProps: {
                        size: "md",
                        colorScheme: "blue"
                    }
                }),
                {
                    defineMultiStyleConfig: og,
                    definePartsStyle: om
                } = (0, j.D)(k.keys),
                oh = (0, B.gJ)("select-bg"),
                oy = om({
                    field: (0, j.k0)({ ...r8.baseStyle ? .field,
                        appearance : "none",
                        paddingBottom: "1px",
                        lineHeight: "normal",
                        bg: oh.reference,
                        [oh.variable]: "colors.white",
                        _dark: {
                            [oh.variable]: "colors.gray.700"
                        },
                        "> option, > optgroup": {
                            bg: oh.reference
                        }
                    }),
                    icon: (0, j.k0)({
                        width: "6",
                        height: "100%",
                        insetEnd: "2",
                        position: "relative",
                        color: "currentColor",
                        fontSize: "xl",
                        _disabled: {
                            opacity: .5
                        }
                    })
                }),
                ov = (0, j.k0)({
                    paddingInlineEnd: "8"
                }),
                ox = og({
                    baseStyle: oy,
                    sizes: {
                        lg: { ...r8.sizes ? .lg,
                            field : { ...r8.sizes ? .lg.field,
                                ...ov
                            }
                        },
                        md: { ...r8.sizes ? .md,
                            field : { ...r8.sizes ? .md.field,
                                ...ov
                            }
                        },
                        sm: { ...r8.sizes ? .sm,
                            field : { ...r8.sizes ? .sm.field,
                                ...ov
                            }
                        },
                        xs: { ...r8.sizes ? .xs,
                            field : { ...r8.sizes ? .xs.field,
                                ...ov
                            },
                            icon: {
                                insetEnd: "1"
                            }
                        }
                    },
                    variants: r8.variants,
                    defaultProps: r8.defaultProps
                }),
                ok = (0, B.gJ)("skeleton-start-color"),
                oS = (0, B.gJ)("skeleton-end-color"),
                ow = (0, j.k0)({
                    [ok.variable]: "colors.gray.100",
                    [oS.variable]: "colors.gray.400",
                    _dark: {
                        [ok.variable]: "colors.gray.800",
                        [oS.variable]: "colors.gray.600"
                    },
                    background: ok.reference,
                    borderColor: oS.reference,
                    opacity: .7,
                    borderRadius: "sm"
                }),
                o_ = (0, j.fj)({
                    baseStyle: ow
                }),
                oz = (0, B.gJ)("skip-link-bg"),
                oC = (0, j.k0)({
                    borderRadius: "md",
                    fontWeight: "semibold",
                    _focusVisible: {
                        boxShadow: "outline",
                        padding: "4",
                        position: "fixed",
                        top: "6",
                        insetStart: "6",
                        [oz.variable]: "colors.white",
                        _dark: {
                            [oz.variable]: "colors.gray.700"
                        },
                        bg: oz.reference
                    }
                }),
                o$ = (0, j.fj)({
                    baseStyle: oC
                });
            var oA = t(22257);
            let {
                defineMultiStyleConfig: oj,
                definePartsStyle: oP
            } = (0, j.D)(S.keys), oF = (0, B.gJ)("slider-thumb-size"), oD = (0, B.gJ)("slider-track-size"), oE = (0, B.gJ)("slider-bg"), oB = (0, j.k0)(e => {
                let {
                    orientation: r
                } = e;
                return {
                    display: "inline-block",
                    position: "relative",
                    cursor: "pointer",
                    _disabled: {
                        opacity: .6,
                        cursor: "default",
                        pointerEvents: "none"
                    },
                    ...eJ({
                        orientation: r,
                        vertical: {
                            h: "100%",
                            px: (0, oA.y)(oF.reference).divide(2).toString()
                        },
                        horizontal: {
                            w: "100%",
                            py: (0, oA.y)(oF.reference).divide(2).toString()
                        }
                    })
                }
            }), oM = (0, j.k0)(e => ({ ...eJ({
                    orientation: e.orientation,
                    horizontal: {
                        h: oD.reference
                    },
                    vertical: {
                        w: oD.reference
                    }
                }),
                overflow: "hidden",
                borderRadius: "sm",
                [oE.variable]: "colors.gray.200",
                _dark: {
                    [oE.variable]: "colors.whiteAlpha.200"
                },
                _disabled: {
                    [oE.variable]: "colors.gray.300",
                    _dark: {
                        [oE.variable]: "colors.whiteAlpha.300"
                    }
                },
                bg: oE.reference
            })), oW = (0, j.k0)(e => {
                let {
                    orientation: r
                } = e;
                return { ...eJ({
                        orientation: r,
                        vertical: {
                            left: "50%",
                            transform: "translateX(-50%)",
                            _active: {
                                transform: "translateX(-50%) scale(1.15)"
                            }
                        },
                        horizontal: {
                            top: "50%",
                            transform: "translateY(-50%)",
                            _active: {
                                transform: "translateY(-50%) scale(1.15)"
                            }
                        }
                    }),
                    w: oF.reference,
                    h: oF.reference,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    outline: 0,
                    zIndex: 1,
                    borderRadius: "full",
                    bg: "white",
                    boxShadow: "base",
                    border: "1px solid",
                    borderColor: "transparent",
                    transitionProperty: "transform",
                    transitionDuration: "normal",
                    _focusVisible: {
                        boxShadow: "outline"
                    },
                    _disabled: {
                        bg: "gray.300"
                    }
                }
            }), oR = (0, j.k0)(e => {
                let {
                    colorScheme: r
                } = e;
                return {
                    width: "inherit",
                    height: "inherit",
                    [oE.variable]: `colors.${r}.500`,
                    _dark: {
                        [oE.variable]: `colors.${r}.200`
                    },
                    bg: oE.reference
                }
            }), oJ = oP(e => ({
                container: oB(e),
                track: oM(e),
                thumb: oW(e),
                filledTrack: oR(e)
            })), oI = oP({
                container: {
                    [oF.variable]: "sizes.4",
                    [oD.variable]: "sizes.1"
                }
            }), oT = oj({
                baseStyle: oJ,
                sizes: {
                    lg: oI,
                    md: oP({
                        container: {
                            [oF.variable]: "sizes.3.5",
                            [oD.variable]: "sizes.1"
                        }
                    }),
                    sm: oP({
                        container: {
                            [oF.variable]: "sizes.2.5",
                            [oD.variable]: "sizes.0.5"
                        }
                    })
                },
                defaultProps: {
                    size: "md",
                    colorScheme: "blue"
                }
            }), oH = rn("spinner-size"), oq = (0, j.k0)({
                width: [oH.reference],
                height: [oH.reference]
            }), oL = {
                xs: (0, j.k0)({
                    [oH.variable]: "sizes.3"
                }),
                sm: (0, j.k0)({
                    [oH.variable]: "sizes.4"
                }),
                md: (0, j.k0)({
                    [oH.variable]: "sizes.6"
                }),
                lg: (0, j.k0)({
                    [oH.variable]: "sizes.8"
                }),
                xl: (0, j.k0)({
                    [oH.variable]: "sizes.12"
                })
            }, oO = (0, j.fj)({
                baseStyle: oq,
                sizes: oL,
                defaultProps: {
                    size: "md"
                }
            }), {
                defineMultiStyleConfig: oV,
                definePartsStyle: oN
            } = (0, j.D)(w.keys), oK = (0, j.k0)({
                fontWeight: "medium"
            }), oU = oV({
                baseStyle: oN({
                    container: {},
                    label: oK,
                    helpText: (0, j.k0)({
                        opacity: .8,
                        marginBottom: "2"
                    }),
                    number: (0, j.k0)({
                        verticalAlign: "baseline",
                        fontWeight: "semibold"
                    }),
                    icon: (0, j.k0)({
                        marginEnd: 1,
                        w: "3.5",
                        h: "3.5",
                        verticalAlign: "middle"
                    })
                }),
                sizes: {
                    md: oN({
                        label: {
                            fontSize: "sm"
                        },
                        helpText: {
                            fontSize: "sm"
                        },
                        number: {
                            fontSize: "2xl"
                        }
                    })
                },
                defaultProps: {
                    size: "md"
                }
            }), {
                defineMultiStyleConfig: oG,
                definePartsStyle: oY
            } = (0, j.D)(["stepper", "step", "title", "description", "indicator", "separator", "icon", "number"]), oX = (0, B.gJ)("stepper-indicator-size"), oQ = (0, B.gJ)("stepper-icon-size"), oZ = (0, B.gJ)("stepper-title-font-size"), o0 = (0, B.gJ)("stepper-description-font-size"), o1 = (0, B.gJ)("stepper-accent-color"), o2 = oG({
                baseStyle: oY(({
                    colorScheme: e
                }) => ({
                    stepper: {
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "4",
                        "&[data-orientation=vertical]": {
                            flexDirection: "column",
                            alignItems: "flex-start"
                        },
                        "&[data-orientation=horizontal]": {
                            flexDirection: "row",
                            alignItems: "center"
                        },
                        [o1.variable]: `colors.${e}.500`,
                        _dark: {
                            [o1.variable]: `colors.${e}.200`
                        }
                    },
                    title: {
                        fontSize: oZ.reference,
                        fontWeight: "medium"
                    },
                    description: {
                        fontSize: o0.reference,
                        color: "chakra-subtle-text"
                    },
                    number: {
                        fontSize: oZ.reference
                    },
                    step: {
                        flexShrink: 0,
                        position: "relative",
                        display: "flex",
                        gap: "2",
                        "&[data-orientation=horizontal]": {
                            alignItems: "center"
                        },
                        flex: "1",
                        "&:last-of-type:not([data-stretch])": {
                            flex: "initial"
                        }
                    },
                    icon: {
                        flexShrink: 0,
                        width: oQ.reference,
                        height: oQ.reference
                    },
                    indicator: {
                        flexShrink: 0,
                        borderRadius: "full",
                        width: oX.reference,
                        height: oX.reference,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&[data-status=active]": {
                            borderWidth: "2px",
                            borderColor: o1.reference
                        },
                        "&[data-status=complete]": {
                            bg: o1.reference,
                            color: "chakra-inverse-text"
                        },
                        "&[data-status=incomplete]": {
                            borderWidth: "2px"
                        }
                    },
                    separator: {
                        bg: "chakra-border-color",
                        flex: "1",
                        "&[data-status=complete]": {
                            bg: o1.reference
                        },
                        "&[data-orientation=horizontal]": {
                            width: "100%",
                            height: "2px",
                            marginStart: "2"
                        },
                        "&[data-orientation=vertical]": {
                            width: "2px",
                            position: "absolute",
                            height: "100%",
                            maxHeight: `calc(100% - ${oX.reference} - 8px)`,
                            top: `calc(${oX.reference} + 4px)`,
                            insetStart: `calc(${oX.reference} / 2 - 1px)`
                        }
                    }
                })),
                sizes: {
                    xs: oY({
                        stepper: {
                            [oX.variable]: "sizes.4",
                            [oQ.variable]: "sizes.3",
                            [oZ.variable]: "fontSizes.xs",
                            [o0.variable]: "fontSizes.xs"
                        }
                    }),
                    sm: oY({
                        stepper: {
                            [oX.variable]: "sizes.6",
                            [oQ.variable]: "sizes.4",
                            [oZ.variable]: "fontSizes.sm",
                            [o0.variable]: "fontSizes.xs"
                        }
                    }),
                    md: oY({
                        stepper: {
                            [oX.variable]: "sizes.8",
                            [oQ.variable]: "sizes.5",
                            [oZ.variable]: "fontSizes.md",
                            [o0.variable]: "fontSizes.sm"
                        }
                    }),
                    lg: oY({
                        stepper: {
                            [oX.variable]: "sizes.10",
                            [oQ.variable]: "sizes.6",
                            [oZ.variable]: "fontSizes.lg",
                            [o0.variable]: "fontSizes.md"
                        }
                    })
                },
                defaultProps: {
                    size: "md",
                    colorScheme: "blue"
                }
            }), {
                defineMultiStyleConfig: o5,
                definePartsStyle: o6
            } = (0, j.D)(_.keys), o4 = rn("switch-track-width"), o3 = rn("switch-track-height"), o8 = rn("switch-track-diff"), o9 = tJ.subtract(o4, o3), o7 = rn("switch-thumb-x"), ne = rn("switch-bg"), nr = (0, j.k0)(e => {
                let {
                    colorScheme: r
                } = e;
                return {
                    borderRadius: "full",
                    p: "0.5",
                    width: [o4.reference],
                    height: [o3.reference],
                    transitionProperty: "common",
                    transitionDuration: "fast",
                    [ne.variable]: "colors.gray.300",
                    _dark: {
                        [ne.variable]: "colors.whiteAlpha.400"
                    },
                    _focusVisible: {
                        boxShadow: "outline"
                    },
                    _disabled: {
                        opacity: .4,
                        cursor: "not-allowed"
                    },
                    _checked: {
                        [ne.variable]: `colors.${r}.500`,
                        _dark: {
                            [ne.variable]: `colors.${r}.200`
                        }
                    },
                    bg: ne.reference
                }
            }), nt = (0, j.k0)({
                bg: "white",
                transitionProperty: "transform",
                transitionDuration: "normal",
                borderRadius: "inherit",
                width: [o3.reference],
                height: [o3.reference],
                _checked: {
                    transform: `translateX(${o7.reference})`
                }
            }), no = o5({
                baseStyle: o6(e => ({
                    container: {
                        [o8.variable]: o9,
                        [o7.variable]: o8.reference,
                        _rtl: {
                            [o7.variable]: tJ(o8).negate().toString()
                        }
                    },
                    track: nr(e),
                    thumb: nt
                })),
                sizes: {
                    sm: o6({
                        container: {
                            [o4.variable]: "1.375rem",
                            [o3.variable]: "sizes.3"
                        }
                    }),
                    md: o6({
                        container: {
                            [o4.variable]: "1.875rem",
                            [o3.variable]: "sizes.4"
                        }
                    }),
                    lg: o6({
                        container: {
                            [o4.variable]: "2.875rem",
                            [o3.variable]: "sizes.6"
                        }
                    })
                },
                defaultProps: {
                    size: "md",
                    colorScheme: "blue"
                }
            }), {
                defineMultiStyleConfig: nn,
                definePartsStyle: ni
            } = (0, j.D)(z.keys), na = ni({
                table: {
                    fontVariantNumeric: "lining-nums tabular-nums",
                    borderCollapse: "collapse",
                    width: "full"
                },
                th: {
                    fontFamily: "heading",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "wider",
                    textAlign: "start"
                },
                td: {
                    textAlign: "start"
                },
                caption: {
                    mt: 4,
                    fontFamily: "heading",
                    textAlign: "center",
                    fontWeight: "medium"
                }
            }), nl = (0, j.k0)({
                "&[data-is-numeric=true]": {
                    textAlign: "end"
                }
            }), ns = nn({
                baseStyle: na,
                variants: {
                    simple: ni(e => {
                        let {
                            colorScheme: r
                        } = e;
                        return {
                            th: {
                                color: eR("gray.600", "gray.400")(e),
                                borderBottom: "1px",
                                borderColor: eR(`${r}.100`, `${r}.700`)(e),
                                ...nl
                            },
                            td: {
                                borderBottom: "1px",
                                borderColor: eR(`${r}.100`, `${r}.700`)(e),
                                ...nl
                            },
                            caption: {
                                color: eR("gray.600", "gray.100")(e)
                            },
                            tfoot: {
                                tr: {
                                    "&:last-of-type": {
                                        th: {
                                            borderBottomWidth: 0
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    striped: ni(e => {
                        let {
                            colorScheme: r
                        } = e;
                        return {
                            th: {
                                color: eR("gray.600", "gray.400")(e),
                                borderBottom: "1px",
                                borderColor: eR(`${r}.100`, `${r}.700`)(e),
                                ...nl
                            },
                            td: {
                                borderBottom: "1px",
                                borderColor: eR(`${r}.100`, `${r}.700`)(e),
                                ...nl
                            },
                            caption: {
                                color: eR("gray.600", "gray.100")(e)
                            },
                            tbody: {
                                tr: {
                                    "&:nth-of-type(odd)": {
                                        "th, td": {
                                            borderBottomWidth: "1px",
                                            borderColor: eR(`${r}.100`, `${r}.700`)(e)
                                        },
                                        td: {
                                            background: eR(`${r}.100`, `${r}.700`)(e)
                                        }
                                    }
                                }
                            },
                            tfoot: {
                                tr: {
                                    "&:last-of-type": {
                                        th: {
                                            borderBottomWidth: 0
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    unstyled: (0, j.k0)({})
                },
                sizes: {
                    sm: ni({
                        th: {
                            px: "4",
                            py: "1",
                            lineHeight: "4",
                            fontSize: "xs"
                        },
                        td: {
                            px: "4",
                            py: "2",
                            fontSize: "sm",
                            lineHeight: "4"
                        },
                        caption: {
                            px: "4",
                            py: "2",
                            fontSize: "xs"
                        }
                    }),
                    md: ni({
                        th: {
                            px: "6",
                            py: "3",
                            lineHeight: "4",
                            fontSize: "xs"
                        },
                        td: {
                            px: "6",
                            py: "4",
                            lineHeight: "5"
                        },
                        caption: {
                            px: "6",
                            py: "2",
                            fontSize: "sm"
                        }
                    }),
                    lg: ni({
                        th: {
                            px: "8",
                            py: "4",
                            lineHeight: "5",
                            fontSize: "sm"
                        },
                        td: {
                            px: "8",
                            py: "5",
                            lineHeight: "6"
                        },
                        caption: {
                            px: "6",
                            py: "2",
                            fontSize: "md"
                        }
                    })
                },
                defaultProps: {
                    variant: "simple",
                    size: "md",
                    colorScheme: "gray"
                }
            }), nd = (0, B.gJ)("tabs-color"), nc = (0, B.gJ)("tabs-bg"), nb = (0, B.gJ)("tabs-border-color"), {
                defineMultiStyleConfig: nu,
                definePartsStyle: nf
            } = (0, j.D)(C.keys), np = (0, j.k0)(e => {
                let {
                    orientation: r
                } = e;
                return {
                    display: "vertical" === r ? "flex" : "block"
                }
            }), ng = (0, j.k0)(e => {
                let {
                    isFitted: r
                } = e;
                return {
                    flex: r ? 1 : void 0,
                    transitionProperty: "common",
                    transitionDuration: "normal",
                    _focusVisible: {
                        zIndex: 1,
                        boxShadow: "outline"
                    },
                    _disabled: {
                        cursor: "not-allowed",
                        opacity: .4
                    }
                }
            }), nm = (0, j.k0)(e => {
                let {
                    align: r = "start",
                    orientation: t
                } = e;
                return {
                    justifyContent: ({
                        end: "flex-end",
                        center: "center",
                        start: "flex-start"
                    })[r],
                    flexDirection: "vertical" === t ? "column" : "row"
                }
            }), nh = (0, j.k0)({
                p: 4
            }), ny = nf(e => ({
                root: np(e),
                tab: ng(e),
                tablist: nm(e),
                tabpanel: nh
            })), nv = {
                sm: nf({
                    tab: {
                        py: 1,
                        px: 4,
                        fontSize: "sm"
                    }
                }),
                md: nf({
                    tab: {
                        fontSize: "md",
                        py: 2,
                        px: 4
                    }
                }),
                lg: nf({
                    tab: {
                        fontSize: "lg",
                        py: 3,
                        px: 4
                    }
                })
            }, nx = nf(e => {
                let {
                    colorScheme: r,
                    orientation: t
                } = e, o = "vertical" === t, n = o ? "borderStart" : "borderBottom";
                return {
                    tablist: {
                        [n]: "2px solid",
                        borderColor: "inherit"
                    },
                    tab: {
                        [n]: "2px solid",
                        borderColor: "transparent",
                        [o ? "marginStart" : "marginBottom"]: "-2px",
                        _selected: {
                            [nd.variable]: `colors.${r}.600`,
                            _dark: {
                                [nd.variable]: `colors.${r}.300`
                            },
                            borderColor: "currentColor"
                        },
                        _active: {
                            [nc.variable]: "colors.gray.200",
                            _dark: {
                                [nc.variable]: "colors.whiteAlpha.300"
                            }
                        },
                        _disabled: {
                            _active: {
                                bg: "none"
                            }
                        },
                        color: nd.reference,
                        bg: nc.reference
                    }
                }
            }), nk = nf(e => {
                let {
                    colorScheme: r
                } = e;
                return {
                    tab: {
                        borderTopRadius: "md",
                        border: "1px solid",
                        borderColor: "transparent",
                        mb: "-1px",
                        [nb.variable]: "transparent",
                        _selected: {
                            [nd.variable]: `colors.${r}.600`,
                            [nb.variable]: "colors.white",
                            _dark: {
                                [nd.variable]: `colors.${r}.300`,
                                [nb.variable]: "colors.gray.800"
                            },
                            borderColor: "inherit",
                            borderBottomColor: nb.reference
                        },
                        color: nd.reference
                    },
                    tablist: {
                        mb: "-1px",
                        borderBottom: "1px solid",
                        borderColor: "inherit"
                    }
                }
            }), nS = nf(e => {
                let {
                    colorScheme: r
                } = e;
                return {
                    tab: {
                        border: "1px solid",
                        borderColor: "inherit",
                        [nc.variable]: "colors.gray.50",
                        _dark: {
                            [nc.variable]: "colors.whiteAlpha.50"
                        },
                        mb: "-1px",
                        _notLast: {
                            marginEnd: "-1px"
                        },
                        _selected: {
                            [nc.variable]: "colors.white",
                            [nd.variable]: `colors.${r}.600`,
                            _dark: {
                                [nc.variable]: "colors.gray.800",
                                [nd.variable]: `colors.${r}.300`
                            },
                            borderColor: "inherit",
                            borderTopColor: "currentColor",
                            borderBottomColor: "transparent"
                        },
                        color: nd.reference,
                        bg: nc.reference
                    },
                    tablist: {
                        mb: "-1px",
                        borderBottom: "1px solid",
                        borderColor: "inherit"
                    }
                }
            }), nw = nf(e => {
                let {
                    colorScheme: r,
                    theme: t
                } = e;
                return {
                    tab: {
                        borderRadius: "full",
                        fontWeight: "semibold",
                        color: "gray.600",
                        _selected: {
                            color: G(t, `${r}.700`),
                            bg: G(t, `${r}.100`)
                        }
                    }
                }
            }), n_ = nu({
                baseStyle: ny,
                sizes: nv,
                variants: {
                    line: nx,
                    enclosed: nk,
                    "enclosed-colored": nS,
                    "soft-rounded": nw,
                    "solid-rounded": nf(e => {
                        let {
                            colorScheme: r
                        } = e;
                        return {
                            tab: {
                                borderRadius: "full",
                                fontWeight: "semibold",
                                [nd.variable]: "colors.gray.600",
                                _dark: {
                                    [nd.variable]: "inherit"
                                },
                                _selected: {
                                    [nd.variable]: "colors.white",
                                    [nc.variable]: `colors.${r}.600`,
                                    _dark: {
                                        [nd.variable]: "colors.gray.800",
                                        [nc.variable]: `colors.${r}.300`
                                    }
                                },
                                color: nd.reference,
                                bg: nc.reference
                            }
                        }
                    }),
                    unstyled: nf({})
                },
                defaultProps: {
                    size: "md",
                    variant: "line",
                    colorScheme: "blue"
                }
            }), {
                defineMultiStyleConfig: nz,
                definePartsStyle: nC
            } = (0, j.D)($.keys), n$ = (0, B.gJ)("tag-bg"), nA = (0, B.gJ)("tag-color"), nj = (0, B.gJ)("tag-shadow"), nP = (0, B.gJ)("tag-min-height"), nF = (0, B.gJ)("tag-min-width"), nD = (0, B.gJ)("tag-font-size"), nE = (0, B.gJ)("tag-padding-inline"), nB = nC({
                container: (0, j.k0)({
                    fontWeight: "medium",
                    lineHeight: 1.2,
                    outline: 0,
                    [nA.variable]: e$.color.reference,
                    [n$.variable]: e$.bg.reference,
                    [nj.variable]: e$.shadow.reference,
                    color: nA.reference,
                    bg: n$.reference,
                    boxShadow: nj.reference,
                    borderRadius: "md",
                    minH: nP.reference,
                    minW: nF.reference,
                    fontSize: nD.reference,
                    px: nE.reference,
                    _focusVisible: {
                        [nj.variable]: "shadows.outline"
                    }
                }),
                label: (0, j.k0)({
                    lineHeight: 1.2,
                    overflow: "visible"
                }),
                closeButton: (0, j.k0)({
                    fontSize: "lg",
                    w: "5",
                    h: "5",
                    transitionProperty: "common",
                    transitionDuration: "normal",
                    borderRadius: "full",
                    marginStart: "1.5",
                    marginEnd: "-1",
                    opacity: .5,
                    _disabled: {
                        opacity: .4
                    },
                    _focusVisible: {
                        boxShadow: "outline",
                        bg: "rgba(0, 0, 0, 0.14)"
                    },
                    _hover: {
                        opacity: .8
                    },
                    _active: {
                        opacity: 1
                    }
                })
            }), nM = {
                sm: nC({
                    container: {
                        [nP.variable]: "sizes.5",
                        [nF.variable]: "sizes.5",
                        [nD.variable]: "fontSizes.xs",
                        [nE.variable]: "space.2"
                    },
                    closeButton: {
                        marginEnd: "-2px",
                        marginStart: "0.35rem"
                    }
                }),
                md: nC({
                    container: {
                        [nP.variable]: "sizes.6",
                        [nF.variable]: "sizes.6",
                        [nD.variable]: "fontSizes.sm",
                        [nE.variable]: "space.2"
                    }
                }),
                lg: nC({
                    container: {
                        [nP.variable]: "sizes.8",
                        [nF.variable]: "sizes.8",
                        [nD.variable]: "fontSizes.md",
                        [nE.variable]: "space.3"
                    }
                })
            }, nW = nz({
                variants: {
                    subtle: nC(e => ({
                        container: eD.variants ? .subtle(e)
                    })),
                    solid: nC(e => ({
                        container: eD.variants ? .solid(e)
                    })),
                    outline: nC(e => ({
                        container: eD.variants ? .outline(e)
                    }))
                },
                baseStyle: nB,
                sizes: nM,
                defaultProps: {
                    size: "md",
                    variant: "subtle",
                    colorScheme: "gray"
                }
            }), nR = (0, j.k0)({ ...r8.baseStyle ? .field,
                paddingY : "2",
                minHeight: "20",
                lineHeight: "short",
                verticalAlign: "top"
            }), nJ = {
                outline: (0, j.k0)(e => r8.variants ? .outline(e).field ? ? {}),
                flushed: (0, j.k0)(e => r8.variants ? .flushed(e).field ? ? {}),
                filled: (0, j.k0)(e => r8.variants ? .filled(e).field ? ? {}),
                unstyled: r8.variants ? .unstyled.field ? ? {}
            }, nI = {
                xs: r8.sizes ? .xs.field ? ? {},
                sm: r8.sizes ? .sm.field ? ? {},
                md: r8.sizes ? .md.field ? ? {},
                lg: r8.sizes ? .lg.field ? ? {}
            }, nT = (0, j.fj)({
                baseStyle: nR,
                sizes: nI,
                variants: nJ,
                defaultProps: {
                    size: "md",
                    variant: "outline"
                }
            }), nH = rn("tooltip-bg"), nq = rn("tooltip-fg"), nL = rn("popper-arrow-bg"), nO = (0, j.k0)({
                bg: nH.reference,
                color: nq.reference,
                [nH.variable]: "colors.gray.700",
                [nq.variable]: "colors.whiteAlpha.900",
                _dark: {
                    [nH.variable]: "colors.gray.300",
                    [nq.variable]: "colors.gray.900"
                },
                [nL.variable]: nH.reference,
                px: "2",
                py: "0.5",
                borderRadius: "sm",
                fontWeight: "medium",
                fontSize: "sm",
                boxShadow: "md",
                maxW: "xs",
                zIndex: "tooltip"
            }), nV = (0, j.fj)({
                baseStyle: nO
            }), nN = {
                breakpoints: {
                    base: "0em",
                    sm: "30em",
                    md: "48em",
                    lg: "62em",
                    xl: "80em",
                    "2xl": "96em"
                },
                zIndices: {
                    hide: -1,
                    auto: "auto",
                    base: 0,
                    docked: 10,
                    dropdown: 1e3,
                    sticky: 1100,
                    banner: 1200,
                    overlay: 1300,
                    modal: 1400,
                    popover: 1500,
                    skipLink: 1600,
                    toast: 1700,
                    tooltip: 1800
                },
                radii: {
                    none: "0",
                    sm: "0.125rem",
                    base: "0.25rem",
                    md: "0.375rem",
                    lg: "0.5rem",
                    xl: "0.75rem",
                    "2xl": "1rem",
                    "3xl": "1.5rem",
                    full: "9999px"
                },
                blur: {
                    none: 0,
                    sm: "4px",
                    base: "8px",
                    md: "12px",
                    lg: "16px",
                    xl: "24px",
                    "2xl": "40px",
                    "3xl": "64px"
                },
                colors: {
                    transparent: "transparent",
                    current: "currentColor",
                    black: "#000000",
                    white: "#FFFFFF",
                    whiteAlpha: {
                        50: "rgba(255, 255, 255, 0.04)",
                        100: "rgba(255, 255, 255, 0.06)",
                        200: "rgba(255, 255, 255, 0.08)",
                        300: "rgba(255, 255, 255, 0.16)",
                        400: "rgba(255, 255, 255, 0.24)",
                        500: "rgba(255, 255, 255, 0.36)",
                        600: "rgba(255, 255, 255, 0.48)",
                        700: "rgba(255, 255, 255, 0.64)",
                        800: "rgba(255, 255, 255, 0.80)",
                        900: "rgba(255, 255, 255, 0.92)"
                    },
                    blackAlpha: {
                        50: "rgba(0, 0, 0, 0.04)",
                        100: "rgba(0, 0, 0, 0.06)",
                        200: "rgba(0, 0, 0, 0.08)",
                        300: "rgba(0, 0, 0, 0.16)",
                        400: "rgba(0, 0, 0, 0.24)",
                        500: "rgba(0, 0, 0, 0.36)",
                        600: "rgba(0, 0, 0, 0.48)",
                        700: "rgba(0, 0, 0, 0.64)",
                        800: "rgba(0, 0, 0, 0.80)",
                        900: "rgba(0, 0, 0, 0.92)"
                    },
                    gray: {
                        50: "#F7FAFC",
                        100: "#EDF2F7",
                        200: "#E2E8F0",
                        300: "#CBD5E0",
                        400: "#A0AEC0",
                        500: "#718096",
                        600: "#4A5568",
                        700: "#2D3748",
                        800: "#1A202C",
                        900: "#171923"
                    },
                    red: {
                        50: "#FFF5F5",
                        100: "#FED7D7",
                        200: "#FEB2B2",
                        300: "#FC8181",
                        400: "#F56565",
                        500: "#E53E3E",
                        600: "#C53030",
                        700: "#9B2C2C",
                        800: "#822727",
                        900: "#63171B"
                    },
                    orange: {
                        50: "#FFFAF0",
                        100: "#FEEBC8",
                        200: "#FBD38D",
                        300: "#F6AD55",
                        400: "#ED8936",
                        500: "#DD6B20",
                        600: "#C05621",
                        700: "#9C4221",
                        800: "#7B341E",
                        900: "#652B19"
                    },
                    yellow: {
                        50: "#FFFFF0",
                        100: "#FEFCBF",
                        200: "#FAF089",
                        300: "#F6E05E",
                        400: "#ECC94B",
                        500: "#D69E2E",
                        600: "#B7791F",
                        700: "#975A16",
                        800: "#744210",
                        900: "#5F370E"
                    },
                    green: {
                        50: "#F0FFF4",
                        100: "#C6F6D5",
                        200: "#9AE6B4",
                        300: "#68D391",
                        400: "#48BB78",
                        500: "#38A169",
                        600: "#2F855A",
                        700: "#276749",
                        800: "#22543D",
                        900: "#1C4532"
                    },
                    teal: {
                        50: "#E6FFFA",
                        100: "#B2F5EA",
                        200: "#81E6D9",
                        300: "#4FD1C5",
                        400: "#38B2AC",
                        500: "#319795",
                        600: "#2C7A7B",
                        700: "#285E61",
                        800: "#234E52",
                        900: "#1D4044"
                    },
                    blue: {
                        50: "#ebf8ff",
                        100: "#bee3f8",
                        200: "#90cdf4",
                        300: "#63b3ed",
                        400: "#4299e1",
                        500: "#3182ce",
                        600: "#2b6cb0",
                        700: "#2c5282",
                        800: "#2a4365",
                        900: "#1A365D"
                    },
                    cyan: {
                        50: "#EDFDFD",
                        100: "#C4F1F9",
                        200: "#9DECF9",
                        300: "#76E4F7",
                        400: "#0BC5EA",
                        500: "#00B5D8",
                        600: "#00A3C4",
                        700: "#0987A0",
                        800: "#086F83",
                        900: "#065666"
                    },
                    purple: {
                        50: "#FAF5FF",
                        100: "#E9D8FD",
                        200: "#D6BCFA",
                        300: "#B794F4",
                        400: "#9F7AEA",
                        500: "#805AD5",
                        600: "#6B46C1",
                        700: "#553C9A",
                        800: "#44337A",
                        900: "#322659"
                    },
                    pink: {
                        50: "#FFF5F7",
                        100: "#FED7E2",
                        200: "#FBB6CE",
                        300: "#F687B3",
                        400: "#ED64A6",
                        500: "#D53F8C",
                        600: "#B83280",
                        700: "#97266D",
                        800: "#702459",
                        900: "#521B41"
                    }
                },
                ...tI,
                sizes: eu,
                shadows: {
                    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
                    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
                    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
                    none: "none",
                    "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
                },
                space: eb,
                borders: {
                    none: 0,
                    "1px": "1px solid",
                    "2px": "2px solid",
                    "4px": "4px solid",
                    "8px": "8px solid"
                },
                transition: {
                    property: {
                        common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                        colors: "background-color, border-color, color, fill, stroke",
                        dimensions: "width, height",
                        position: "left, right, top, bottom",
                        background: "background-color, background-image, background-position"
                    },
                    easing: {
                        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
                        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
                        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    duration: {
                        "ultra-fast": "50ms",
                        faster: "100ms",
                        fast: "150ms",
                        normal: "200ms",
                        slow: "300ms",
                        slower: "400ms",
                        "ultra-slow": "500ms"
                    }
                }
            }, nK = {
                colors: {
                    "chakra-body-text": {
                        _light: "gray.800",
                        _dark: "whiteAlpha.900"
                    },
                    "chakra-body-bg": {
                        _light: "white",
                        _dark: "gray.800"
                    },
                    "chakra-border-color": {
                        _light: "gray.200",
                        _dark: "whiteAlpha.300"
                    },
                    "chakra-inverse-text": {
                        _light: "white",
                        _dark: "gray.800"
                    },
                    "chakra-subtle-bg": {
                        _light: "gray.100",
                        _dark: "gray.700"
                    },
                    "chakra-subtle-text": {
                        _light: "gray.600",
                        _dark: "gray.400"
                    },
                    "chakra-placeholder-color": {
                        _light: "gray.500",
                        _dark: "whiteAlpha.400"
                    }
                }
            }, nU = {
                global: {
                    body: {
                        fontFamily: "body",
                        color: "chakra-body-text",
                        bg: "chakra-body-bg",
                        transitionProperty: "background-color",
                        transitionDuration: "normal",
                        lineHeight: "base"
                    },
                    "*::placeholder": {
                        color: "chakra-placeholder-color"
                    },
                    "*, *::before, &::after": {
                        borderColor: "chakra-border-color"
                    }
                }
            }, nG = {
                useSystemColorMode: !1,
                initialColorMode: "light",
                cssVarPrefix: "chakra"
            }, nY = {
                semanticTokens: nK,
                direction: "ltr",
                ...nN,
                components: {
                    Accordion: E,
                    Alert: ec,
                    Avatar: eC,
                    Badge: eD,
                    Breadcrumb: eW,
                    Button: eK,
                    Checkbox: rt,
                    CloseButton: rd,
                    Code: rf,
                    Container: rg,
                    Divider: rv,
                    Drawer: rD,
                    Editable: rM,
                    Form: rI,
                    FormError: rL,
                    FormLabel: rV,
                    Heading: rU,
                    Input: r8,
                    Kbd: te,
                    Link: tt,
                    List: ti,
                    Menu: tm,
                    Modal: tj,
                    NumberInput: tZ,
                    PinInput: t5,
                    Popover: ot,
                    Progress: oc,
                    Radio: op,
                    Select: ox,
                    Skeleton: o_,
                    SkipLink: o$,
                    Slider: oT,
                    Spinner: oO,
                    Stat: oU,
                    Switch: no,
                    Table: ns,
                    Tabs: n_,
                    Tag: nW,
                    Textarea: nT,
                    Tooltip: nV,
                    Card: e6,
                    Stepper: o2
                },
                styles: nU,
                config: nG
            }, nX = {
                semanticTokens: nK,
                direction: "ltr",
                components: {},
                ...nN,
                styles: nU,
                config: nG
            }
        },
        67973: function(e, r, t) {
            t.d(r, {
                _: function() {
                    return o
                }
            });

            function o(e, r) {
                return r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(r)
                    }
                }))
            }
        }
    }
]);