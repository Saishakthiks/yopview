(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1084], {
        47132: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 96522)), Promise.resolve().then(n.bind(n, 98442)), Promise.resolve().then(n.bind(n, 87650)), Promise.resolve().then(n.bind(n, 51983)), Promise.resolve().then(n.bind(n, 98387)), Promise.resolve().then(n.bind(n, 69588)), Promise.resolve().then(n.t.bind(n, 88788, 23)), Promise.resolve().then(n.t.bind(n, 92808, 23)), Promise.resolve().then(n.bind(n, 87632)), Promise.resolve().then(n.bind(n, 60663)), Promise.resolve().then(n.bind(n, 79093)), Promise.resolve().then(n.bind(n, 77463)), Promise.resolve().then(n.bind(n, 53433)), Promise.resolve().then(n.bind(n, 85416)), Promise.resolve().then(n.t.bind(n, 65109, 23)), Promise.resolve().then(n.bind(n, 3981))
        },
        87632: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(23056),
                i = n(69335);
            t.default = () => ((0, r.useEffect)(() => {
                window.GA_INITIALIZED || ((0, i.ll)(), window.GA_INITIALIZED = !0)
            }, []), null)
        },
        60663: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n(69335),
                i = n(23056),
                o = () => {
                    (0, i.useEffect)(() => {
                        (() => {
                            let e = new URLSearchParams(window.location.search);
                            window.rewardful("ready", function() {
                                window.Rewardful.referral && (0, r.wu)("rewardful", "ready", JSON.stringify({
                                    via: e.get("via"),
                                    referral: window.Rewardful.referral
                                }))
                            }), e.get("success") && console.log("Order placed! You will receive an email confirmation."), e.get("canceled") && console.log("Order canceled -- continue to shop around and checkout when you're ready.")
                        })()
                    }, [])
                },
                l = () => (o(), null)
        },
        79093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n(23056),
                i = n(61901);
            let o = () => {
                i.Z.init("CT6NVDBC77UBGVBCKOM0", {}, {
                    debug: !1
                })
            };

            function l() {
                return (0, r.useEffect)(() => {
                    o()
                }, []), null
            }
        },
        77463: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Providers: function() {
                    return a
                }
            });
            var r = n(53858),
                i = n(17376),
                o = n(31122);
            let l = (0, i.extendTheme)({
                base: "0px",
                xl: "1280px",
                "2xl": "1536px",
                styles: {
                    global: {
                        "input:-webkit-autofill": {
                            WebkitBoxShadow: "0 0 0 1000px black inset !important",
                            WebkitTextFillColor: "white !important",
                            caretColor: "white !important",
                            transition: "background-color 5000s ease-in-out 0s",
                            animation: "none !important"
                        },
                        "input:-webkit-autofill:hover": {
                            WebkitBoxShadow: "0 0 0 1000px black inset !important",
                            WebkitTextFillColor: "white !important",
                            caretColor: "white !important",
                            animation: "none !important"
                        },
                        "input:-webkit-autofill:focus": {
                            WebkitBoxShadow: "0 0 0 1000px black inset !important",
                            WebkitTextFillColor: "white !important",
                            caretColor: "white !important",
                            animation: "none !important"
                        },
                        "input:-moz-autofill": {
                            boxShadow: "0 0 0 1000px black inset !important",
                            textFillColor: "white !important",
                            caretColor: "white !important",
                            animation: "none !important"
                        }
                    }
                }
            });

            function a(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(o.ChakraProvider, {
                    theme: l,
                    children: t
                })
            }
        },
        53433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SessionProvider: function() {
                    return r.SessionProvider
                }
            });
            var r = n(37660)
        },
        85416: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecoilRoot: function() {
                    return r.Wh
                }
            });
            var r = n(15397)
        },
        3981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TRPCReactProvider: function() {
                    return f
                },
                api: function() {
                    return d
                }
            });
            var r = n(53858),
                i = n(51003),
                o = n(16716),
                l = n(18628),
                a = n(23575),
                s = n(23056),
                u = n(7109);
            n(50180);
            let c = u.ZP,
                d = (0, a.ec)();

            function f(e) {
                let [t] = (0, s.useState)(() => new i.S), [n] = (0, s.useState)(() => d.createClient({
                    transformer: c,
                    links: [(0, l.gb)({
                        enabled: e => "down" === e.direction && e.result instanceof Error
                    }), (0, l.Pq)({
                        url: "/api/trpc"
                    })]
                }));
                return (0, r.jsx)(o.aH, {
                    client: t,
                    children: (0, r.jsx)(d.Provider, {
                        client: n,
                        queryClient: t,
                        children: e.children
                    })
                })
            }
        },
        69335: function(e, t, n) {
            "use strict";
            n.d(t, {
                hF: function() {
                    return l
                },
                ll: function() {
                    return i
                },
                wu: function() {
                    return o
                }
            });
            var r = n(76117);
            let i = () => {
                    r.ZP.initialize("G-58JGZZJ4JC")
                },
                o = (e, t, n, i) => {
                    console.log("GA event:", {
                        category: e,
                        action: t,
                        label: n,
                        value: i
                    }), r.ZP.event({
                        category: e,
                        action: t,
                        label: n,
                        ..."number" == typeof i && i >= 0 && {
                            value: i
                        }
                    })
                },
                l = e => {
                    r.ZP.set({
                        userId: e
                    })
                }
        },
        65109: function() {}
    },
    function(e) {
        e.O(0, [4565, 7016, 212, 8663, 7094, 8034, 3722, 6117, 1974, 1323, 106, 1744], function() {
            return e(e.s = 47132)
        }), _N_E = e.O()
    }
]);