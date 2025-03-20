"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6872], {
        78233: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n(53858),
                i = n(23056),
                o = n(37660),
                a = n(52843),
                d = n(79335),
                s = n(43749),
                l = n(75280),
                c = n(840);
            let p = e => {
                    let {
                        text: t,
                        btnStyleConfig: n,
                        onClick: i,
                        isDisabled: o
                    } = e;
                    return (0, r.jsx)(l.Box, {
                        onClick: i,
                        children: (0, r.jsx)(c.Button, {
                            height: "auto",
                            ...n,
                            rightIcon: (0, r.jsx)(s.Z, {}),
                            isDisabled: o,
                            children: t
                        })
                    })
                },
                u = (0, i.lazy)(() => Promise.all([n.e(2199), n.e(6117), n.e(6884), n.e(2002), n.e(9251), n.e(7455)]).then(n.bind(n, 67545)));

            function f(e) {
                let {
                    text: t,
                    linkHref: n,
                    btnConfig: s,
                    btnStyleConfig: l,
                    needOpenModal: c = !0
                } = e, {
                    isOpen: f,
                    onOpen: h,
                    onClose: x
                } = (0, a.useDisclosure)(), {
                    data: m
                } = (0, o.useSession)(), w = (0, d.Z)(), g = (0, i.useCallback)(e => {
                    e.preventDefault(), e.stopPropagation(), c && "object" == typeof m && null === m ? w(h, n || "/gen/m2v") : (null == s ? void 0 : s.isExternal) ? window.open(n, "_blank") : window.location.href = n
                }, [m, h, n, w, s, c]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p, {
                        text: t,
                        btnStyleConfig: l,
                        onClick: g,
                        isDisabled: c && void 0 === m
                    }), c && (0, r.jsx)(i.Suspense, {
                        children: (0, r.jsx)(u, {
                            isOpen: f,
                            onClose: x
                        })
                    })]
                })
            }
        },
        38693: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n(53858),
                i = n(52843),
                o = n(36028),
                a = n(14461),
                d = n(75280),
                s = n(75004),
                l = n(89603),
                c = n(840),
                p = n(97261),
                u = n(37660),
                f = n(84882),
                h = n(67482),
                x = n(23056),
                m = n(79335),
                w = n(79714);
            let g = (0, x.lazy)(() => Promise.all([n.e(2199), n.e(6117), n.e(6884), n.e(2002), n.e(9251), n.e(7455)]).then(n.bind(n, 67545)));

            function _(e) {
                let {
                    hasUpload: t,
                    hasSampleLink: n,
                    navigateTo: _,
                    btnText: C,
                    queryParams: v,
                    inputPlaceHolder: y,
                    needOpenModal: k = !0
                } = e;
                (0, w.useTranslations)();
                let {
                    isOpen: P,
                    onOpen: S,
                    onClose: j
                } = (0, i.useDisclosure)(), {
                    data: I
                } = (0, u.useSession)(), B = (0, f.useRouter)(), L = (0, m.Z)(), [U, T] = (0, x.useState)(""), D = (0, x.useRef)(null), Z = (0, o.useBreakpointValue)({
                    base: "12px",
                    xl: "15px"
                }), E = ["https://www.amazon.com/Ninja-NC299AMZ-Milkshakes-One-Touch-Container/dp/B09QV24FFZ?pf_rd_p=c961ff65-a8f3-4b0e-913d-e72ebee9f7c7&pf_rd_r=2GZ4GKZQVMC2A466F95G&ref_=ShopHSP_B09QV24FFZ&th=1", "https://www.amazon.com/DEWALT-DCK240C2-Lithium-Driver-Impact/dp/B00IJ0ALYS/ref=pd_ybh_a_d_sccl_4/133-6358408-3616469?pd_rd_w=bXNMi&content-id=amzn1.sym.67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_p=67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_r=Q8RV6XHKNGAXTVVTS5KH&pd_rd_wg=ma93O&pd_rd_r=c256e4b2-1609-4215-9d4a-79793a53fe05&pd_rd_i=B00IJ0ALYS&th=1", "https://www.amazon.com/Fitbit-Advanced-Smartwatch-Graphite-Included/dp/B0B4N2T7GL/ref=pd_ybh_a_d_sccl_13/133-6358408-3616469?pd_rd_w=bXNMi&content-id=amzn1.sym.67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_p=67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_r=Q8RV6XHKNGAXTVVTS5KH&pd_rd_wg=ma93O&pd_rd_r=c256e4b2-1609-4215-9d4a-79793a53fe05&pd_rd_i=B0B4N2T7GL&psc=1", "https://www.amazon.com/MAMI-BABI-Indoor-Scratch-Resistant/dp/B0C2C7FQMZ/ref=pd_ybh_a_d_sccl_6/133-6358408-3616469?pd_rd_w=TVDGv&content-id=amzn1.sym.67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_p=67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_r=FE229K6NC2G2X6B7QRH3&pd_rd_wg=p7DyQ&pd_rd_r=f6720f05-bea8-4f32-82a1-ae9022ffa3e4&pd_rd_i=B0C2C7FQMZ&psc=1", "https://www.amazon.com/Shark-AV2511AE-Self-Empty-Capacity-Navigation/dp/B09T4YZGQR?ref=dlx_deals_dg_dcl_B09T4YZGQR_dt_sl14_5e&th=1"], z = (0, x.useCallback)(e => {
                    if (e.preventDefault(), e.stopPropagation(), k && "object" == typeof I && null === I) L(S, _ || "/gen/m2v"), "Create video" === e.target.textContent || "Upload file" === e.target.textContent || e.target.textContent;
                    else {
                        var t, n;
                        if ("Create video" === e.target.textContent) "" === U.trim() || null == U.trim() ? window.location.href = "/gen/m2v" : window.location.href = "/gen/m2v/?inputLink=".concat(encodeURIComponent(null !== (t = U.trim()) && void 0 !== t ? t : ""));
                        else if ("Upload file" === e.target.textContent) window.location.href = "/gen/m2v";
                        else if ("Try sample links" === e.target.textContent) {
                            let e = E[Math.floor(Math.random() * E.length)];
                            window.location.href = "/gen/m2v/?inputLink=".concat(encodeURIComponent(e.trim()))
                        }
                        C && _ && e.target.textContent === C && ("" === U.trim() || null == U.trim() ? window.location.href = _ : window.location.href = "".concat(_, "/?").concat(v, "=").concat(encodeURIComponent(null !== (n = U.trim()) && void 0 !== n ? n : "")))
                    }
                }, [I, S, U, B, k]);
                return (0, x.useEffect)(() => {
                    T("")
                }, []), (0, x.useEffect)(() => {
                    let e = e => {
                        "Enter" === e.key && document.activeElement === D.current && null != I && z(e)
                    };
                    return window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    }
                }, [z]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a.InputGroup, {
                        position: "relative",
                        w: {
                            base: "95%",
                            xl: "80%"
                        },
                        maxW: "500px",
                        h: "56px",
                        borderRadius: "28px",
                        mt: "38px",
                        bg: "hsla(0, 0%, 100%, 0.05)",
                        border: "1.5px solid hsla(0, 0%, 100%, .3)",
                        _hover: {
                            borderColor: "rgb(87, 104, 252)",
                            boxShadow: "rgb(87, 104, 252) 0px 0px 0px 1px"
                        },
                        children: [n && (0, r.jsx)(d.Box, {
                            _hover: {
                                cursor: "pointer"
                            },
                            fontSize: "14px",
                            borderBottom: "1px solid hsla(0, 0%, 100%, .8)",
                            position: "absolute",
                            left: "50%",
                            bottom: {
                                base: "-4rem",
                                xl: "-3.25rem"
                            },
                            onClick: z,
                            transform: "translate(-50%, -50%)",
                            children: "Try sample links"
                        }), (0, r.jsx)(s.InputLeftElement, {
                            pl: "1rem",
                            h: "100%",
                            children: (0, r.jsx)(b, {})
                        }), (0, r.jsx)(l.Input, {
                            w: {
                                base: "calc(100% - 140px)",
                                xl: "68%"
                            },
                            type: "url",
                            pl: "46px",
                            pt: "19px",
                            pb: "19px",
                            pr: "0px",
                            placeholder: y || "Amazon/Shopify/TikTok/Ebay...",
                            border: "none",
                            bg: "transparent",
                            borderRadius: "28px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            _focus: {
                                border: "none",
                                boxShadow: "none",
                                outline: "none"
                            },
                            _placeholder: {
                                fontSize: Z,
                                color: "hsl(0, 0%, 100%)",
                                opacity: .5
                            },
                            h: "100%",
                            value: U,
                            ref: D,
                            onChange: e => T(e.target.value)
                        }), (0, r.jsx)(s.InputRightElement, {
                            w: "auto",
                            h: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mr: "2px",
                            children: (0, r.jsx)(h.default, {
                                href: _ || "/gen/m2v",
                                passHref: !0,
                                prefetch: !0,
                                legacyBehavior: !0,
                                children: (0, r.jsx)("a", {
                                    onClick: z,
                                    style: {
                                        textDecoration: "none"
                                    },
                                    children: (0, r.jsx)(c.Button, {
                                        w: {
                                            base: "140px",
                                            xl: "166px"
                                        },
                                        h: "48px",
                                        borderRadius: "100px",
                                        padding: "20px 24px",
                                        border: "1px solid hsla(245, 88%, 60%, 1)",
                                        bg: "hsla(245, 88%, 60%, 0.8)",
                                        _hover: {
                                            bg: "hsla(245, 88%, 80%, 0.8)"
                                        },
                                        color: "#fff",
                                        zIndex: "1",
                                        isDisabled: k && void 0 === I,
                                        children: (0, r.jsx)(p.Text, {
                                            fontWeight: "600",
                                            flex: 1,
                                            lineHeight: "19.36px",
                                            fontSize: {
                                                base: "14px",
                                                xl: "16px"
                                            },
                                            children: C || "Create video"
                                        })
                                    })
                                })
                            })
                        })]
                    }), t && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(p.Text, {
                            as: "span",
                            fontWeight: "600",
                            fontSize: "15px",
                            opacity: "50%",
                            children: "or"
                        }), (0, r.jsx)(c.Button, {
                            onClick: z,
                            w: {
                                base: "95%",
                                xl: "140px"
                            },
                            h: "56px",
                            bg: "hsla(0, 0%, 100%, .1)",
                            border: "1.5px solid hsla(0, 0%, 100%, .4)",
                            borderRadius: "28px",
                            zIndex: "1",
                            isDisabled: k && void 0 === I,
                            color: "#fff",
                            children: "Upload file"
                        })]
                    }), (0, r.jsx)(x.Suspense, {
                        children: (0, r.jsx)(g, {
                            isOpen: P,
                            onClose: j
                        })
                    })]
                })
            }

            function b() {
                return (0, r.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("g", {
                        opacity: "0.8",
                        children: (0, r.jsx)("path", {
                            d: "M10.8633 6.83442L12.0144 7.98554C14.2396 10.2107 14.2396 13.8183 12.0144 16.0434L11.7267 16.3311C9.50157 18.5563 5.89395 18.5563 3.66884 16.3311C1.44372 14.1061 1.44372 10.4984 3.66884 8.27333L4.81996 9.42449C3.2306 11.0138 3.2306 13.5907 4.81996 15.18C6.40933 16.7694 8.98616 16.7694 10.5756 15.18L10.8633 14.8923C12.4527 13.3029 12.4527 10.726 10.8633 9.13667L9.71222 7.98554L10.8633 6.83442ZM16.3311 11.7267L15.18 10.5756C16.7694 8.98616 16.7694 6.40933 15.18 4.81996C13.5907 3.2306 11.0138 3.2306 9.42449 4.81996L9.13667 5.10774C7.5473 6.6971 7.5473 9.27398 9.13667 10.8633L10.2878 12.0144L9.13667 13.1656L7.98554 12.0144C5.76043 9.78939 5.76043 6.18173 7.98554 3.95662L8.27333 3.66884C10.4984 1.44372 14.1061 1.44372 16.3311 3.66884C18.5563 5.89395 18.5563 9.50157 16.3311 11.7267Z",
                            fill: "white"
                        })
                    })
                })
            }
        },
        96378: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(53858);

            function i() {
                return (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    children: (0, r.jsx)("rect", {
                        x: "9",
                        y: "18",
                        width: "23",
                        height: "4",
                        rx: "2",
                        fill: "#4E40F3"
                    })
                })
            }
        },
        28803: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return i
                }
            });
            var r = n(53858);

            function i() {
                return (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M29.9948 21.6673H21.6615V30.0007C21.6615 30.9173 20.9115 31.6673 19.9948 31.6673C19.0781 31.6673 18.3281 30.9173 18.3281 30.0007V21.6673H9.99479C9.07812 21.6673 8.32812 20.9173 8.32812 20.0007C8.32812 19.084 9.07812 18.334 9.99479 18.334H18.3281V10.0007C18.3281 9.08398 19.0781 8.33398 19.9948 8.33398C20.9115 8.33398 21.6615 9.08398 21.6615 10.0007V18.334H29.9948C30.9115 18.334 31.6615 19.084 31.6615 20.0007C31.6615 20.9173 30.9115 21.6673 29.9948 21.6673Z",
                        fill: "#4E40F3"
                    })
                })
            }
        },
        43749: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(53858);

            function i(e) {
                let {
                    w: t,
                    h: n
                } = e;
                return (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t || "6",
                    height: n || "10",
                    viewBox: "0 0 6 10",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M1 9.00015L5 5.22029L1 1.44043",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
        },
        77839: function(e, t, n) {
            n.d(t, {
                PH: function() {
                    return i
                },
                S7: function() {
                    return d
                },
                TV: function() {
                    return o
                },
                Xt: function() {
                    return s
                },
                _k: function() {
                    return l
                },
                do: function() {
                    return c
                },
                ut: function() {
                    return a
                }
            });
            var r = n(15397);
            let i = (0, r.cn)({
                    key: "loginState",
                    default: {
                        active: "login",
                        callbackUrl: "/",
                        email: "",
                        alertInfo: {
                            message: "",
                            status: void 0
                        },
                        redirect: !0,
                        loggingIn: !1
                    }
                }),
                o = (0, r.cn)({
                    key: "teamBenefitState",
                    default: {
                        packageNumber: 0,
                        subscriptionId: "",
                        payPrice: 0,
                        subsType: "",
                        expireTime: 0,
                        subscriptionStatus: "",
                        latestInvoiceId: "",
                        subtotal: 0,
                        paidMethod: ""
                    }
                });
            (0, r.cn)({
                key: "teamCreditState",
                default: {
                    allPaidCredit: 0,
                    remainCredit: 0
                }
            });
            let a = (0, r.cn)({
                    key: "starterStripeDataState",
                    default: {
                        name: "Starter",
                        monthCnyPrice: 138,
                        yearCnyPrice: 1296,
                        monthUsdPrice: 19,
                        yearUsdPrice: 176,
                        monthCnyPriceId: "",
                        yearCnyPriceId: "",
                        monthUsdPriceId: "",
                        yearUsdPriceId: ""
                    }
                }),
                d = (0, r.cn)({
                    key: "starterPaypalDataState",
                    default: {
                        name: "Starter",
                        monthUsdPrice: 19,
                        yearUsdPrice: 176,
                        monthUsdPriceId: "",
                        yearUsdPriceId: ""
                    }
                }),
                s = (0, r.cn)({
                    key: "businessStripeDataState",
                    default: {
                        name: "Business",
                        monthCnyPrice: 550,
                        yearCnyPrice: 4320,
                        monthUsdPrice: 75,
                        yearUsdPrice: 599,
                        monthCnyPriceId: "",
                        yearCnyPriceId: "",
                        monthUsdPriceId: "",
                        yearUsdPriceId: ""
                    }
                }),
                l = (0, r.cn)({
                    key: "businessPaypalDataState",
                    default: {
                        name: "Business",
                        monthUsdPrice: 75,
                        yearUsdPrice: 599,
                        monthUsdPriceId: "",
                        yearUsdPriceId: ""
                    }
                }),
                c = (0, r.cn)({
                    key: "pricingDescriptionListState",
                    default: {
                        free: [],
                        starter: [],
                        business: []
                    }
                })
        },
        79335: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = () => () => {
                    let e = window.navigator.userAgent;
                    return ["Mobile", "Android", "iPhone", "iPad", "iPod", "BlackBerry", "Windows Phone"].some(t => e.includes(t))
                },
                i = n(37660),
                o = n(68483),
                a = n(15397),
                d = n(77839),
                s = () => {
                    let e = r(),
                        {
                            status: t
                        } = (0, i.useSession)(),
                        n = (0, o.useToast)(),
                        s = (0, a.Zl)(d.PH);
                    return function(r, i) {
                        let o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            a = arguments.length > 3 ? arguments[3] : void 0;
                        if (null == e ? void 0 : e()) {
                            let e = "".concat("https://m.topview.ai", "/account/signin?callbackUrl=").concat(i);
                            window.location.href = e
                        } else "loading" === t ? n({
                            title: "User information loading...",
                            status: "warning",
                            duration: 3e3,
                            position: "top"
                        }) : "unauthenticated" === t ? (s(e => ({ ...e,
                            callbackUrl: i,
                            email: "",
                            active: "login",
                            redirect: o
                        })), r()) : a && a()
                    }
                }
        }
    }
]);