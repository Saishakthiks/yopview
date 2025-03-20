"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9287], {
        79287: function(e, i, n) {
            n.r(i), n.d(i, {
                default: function() {
                    return L
                }
            });
            var t = n(53858),
                o = n(75280),
                r = n(10602),
                l = n(97261),
                s = n(34901),
                c = n(68483),
                d = n(46573),
                u = n(27281),
                a = n(66027),
                p = n(47623),
                x = n(33535),
                h = n(37660),
                f = n(23056),
                v = n(43733),
                g = n(69335),
                w = n(84882),
                b = n(45662);

            function j() {
                return (0, t.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, t.jsx)("path", {
                        d: "M15.8333 4.16667V5.83333H12.5V4.16667H15.8333ZM7.5 4.16667V9.16667H4.16667V4.16667H7.5ZM15.8333 10.8333V15.8333H12.5V10.8333H15.8333ZM7.5 14.1667V15.8333H4.16667V14.1667H7.5ZM17.5 2.5H10.8333V7.5H17.5V2.5ZM9.16667 2.5H2.5V10.8333H9.16667V2.5ZM17.5 9.16667H10.8333V17.5H17.5V9.16667ZM9.16667 12.5H2.5V17.5H9.16667V12.5Z",
                        fill: "white"
                    })
                })
            }

            function m() {
                return (0, t.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, t.jsx)("path", {
                        d: "M2.86404 7.26539L4.93166 16.3402H14.9178L16.9854 7.26539L13.6577 9.48389L9.92477 4.25775L6.19178 9.48389L2.86404 7.26539ZM2.29031 4.8881L5.77527 7.2114L9.24941 2.34759C9.5158 1.97463 10.0342 1.88824 10.4071 2.15465C10.4816 2.20788 10.5468 2.27307 10.6001 2.34759L14.0742 7.2114L17.5591 4.8881C17.9405 4.63386 18.4557 4.73691 18.71 5.11827C18.8193 5.28227 18.8667 5.47983 18.8437 5.67558L16.48 17.2671C16.4308 17.6851 16.0766 18 15.6558 18H4.19368C3.77286 18 3.41864 17.6851 3.36947 17.2671L1.00576 5.67558C0.952211 5.22038 1.27781 4.80796 1.73301 4.7544C1.92876 4.73137 2.12632 4.77877 2.29031 4.8881Z",
                        fill: "white"
                    })
                })
            }
            var C = n(67482);

            function H() {
                return (0, t.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, t.jsx)("path", {
                        d: "M14.1667 5.83333L12.9917 7.00833L15.1417 9.16667H6.66669V10.8333H15.1417L12.9917 12.9833L14.1667 14.1667L18.3334 10L14.1667 5.83333ZM3.33335 4.16667H10V2.5H3.33335C2.41669 2.5 1.66669 3.25 1.66669 4.16667V15.8333C1.66669 16.75 2.41669 17.5 3.33335 17.5H10V15.8333H3.33335V4.16667Z",
                        fill: "white"
                    })
                })
            }
            let V = e => {
                    let {
                        children: i,
                        toPath: n,
                        isOpenNewWindow: r
                    } = e;
                    return n ? (0, t.jsx)(C.default, {
                        href: n,
                        prefetch: !0,
                        target: r ? "_blank" : "_self",
                        children: i
                    }) : (0, t.jsx)(o.Box, {
                        children: i
                    })
                },
                k = e => {
                    let {
                        list: i
                    } = e, n = {
                        bg: "rgba(158, 158, 158, 0.21)"
                    };
                    return (0, t.jsx)(o.Box, {
                        borderTop: "1px solid #353537",
                        py: "8px",
                        children: i.map(e => (0, t.jsx)(o.Box, {
                            onClick: () => e.cb && e.cb(),
                            cursor: "pointer",
                            children: (0, t.jsx)(V, {
                                toPath: null == e ? void 0 : e.toPath,
                                isOpenNewWindow: null == e ? void 0 : e.isOpenNewWindow,
                                children: (0, t.jsxs)(r.Flex, {
                                    alignItems: "center",
                                    w: "100%",
                                    h: "40px",
                                    px: "16px",
                                    ...!e.isDisableSkip && {
                                        _hover: n
                                    },
                                    children: [(0, t.jsx)(l.Text, {
                                        w: "15px",
                                        mr: "12px",
                                        children: e.icon
                                    }), (0, t.jsx)(l.Text, {
                                        color: "#fff",
                                        fontWeight: "500",
                                        fontSize: "14px",
                                        children: e.name
                                    })]
                                })
                            })
                        }, e.id))
                    })
                };
            var L = function(e) {
                var i, n, C, V, L;
                let {
                    isHideName: B
                } = e, {
                    data: Z
                } = (0, h.useSession)(), {
                    onCopy: S,
                    value: D,
                    hasCopied: M
                } = (0, s.useClipboard)((null == Z ? void 0 : Z.id) || ""), F = (0, c.useToast)(), I = (0, w.useRouter)(), O = (0, w.usePathname)(), P = [{
                    id: 3,
                    isOpenNewWindow: !1,
                    toPath: "/dashboard/home",
                    isDisableSkip: !1,
                    name: "Dashboard",
                    icon: (0, t.jsx)(j, {}),
                    cb: null
                }, {
                    id: 4,
                    isOpenNewWindow: !1,
                    toPath: "/dashboard/subscription",
                    isDisableSkip: !1,
                    name: "Subscription",
                    icon: (0, t.jsx)(m, {}),
                    cb: null
                }], R = [{
                    id: 1,
                    isOpenNewWindow: !1,
                    toPath: "",
                    isDisableSkip: !1,
                    name: "Logout",
                    icon: (0, t.jsx)(H, {}),
                    cb: () => T()
                }], y = () => {
                    S()
                }, T = () => {
                    (0, g.wu)("global", "logout", ""), v.Z.remove("*"), (0, h.signOut)({
                        redirect: !1
                    })
                };
                return (0, f.useEffect)(() => {
                    M && D && F({
                        position: "top",
                        status: "success",
                        title: "Successfully copied uid",
                        duration: 1500
                    })
                }, [M, F, D]), (0, f.useEffect)(() => {
                    (null == Z ? void 0 : Z.id) && (0, g.hF)(Z.id)
                }, [Z]), (0, t.jsx)(o.Box, {
                    children: (0, t.jsxs)(d.Popover, {
                        placement: "bottom-end",
                        trigger: "hover",
                        ...!(null == Z ? void 0 : Z.id) && {
                            isOpen: !1
                        },
                        children: [(0, t.jsx)(u.PopoverTrigger, {
                            children: (0, t.jsxs)(r.Flex, {
                                h: "40px",
                                alignItems: "center",
                                cursor: "pointer",
                                onDoubleClick: () => y(),
                                onClick: () => {
                                    Z || I.push("/account/signin?callbackUrl=".concat(O))
                                },
                                children: [(0, t.jsx)(a.Image, {
                                    src: (null == Z ? void 0 : null === (i = Z.user) || void 0 === i ? void 0 : i.image) || (0, b.F)("/login-icon/avatar.jpeg"),
                                    alt: "avatar",
                                    width: "34px",
                                    height: "34px",
                                    borderRadius: "50%"
                                }), !B && (0, t.jsx)(r.Flex, {
                                    flexDirection: "column",
                                    fontSize: "12px",
                                    justifyContent: "center",
                                    ml: "10px",
                                    children: (0, t.jsx)(l.Text, {
                                        color: "#B5B5B5",
                                        children: null == Z ? void 0 : null === (n = Z.user) || void 0 === n ? void 0 : n.email
                                    })
                                })]
                            })
                        }), (0, t.jsx)(p.PopoverContent, {
                            w: "auto",
                            bg: "transparent",
                            border: "none",
                            children: (0, t.jsx)(x.PopoverBody, {
                                p: "0",
                                w: "240px",
                                border: "1px solid #353537",
                                borderRadius: "12px",
                                bg: "#1C1C1D",
                                children: (0, t.jsxs)(o.Box, {
                                    children: [(0, t.jsxs)(r.Flex, {
                                        fontSize: "12px",
                                        minH: "72px",
                                        alignItems: "center",
                                        p: "16px",
                                        children: [(0, t.jsx)(a.Image, {
                                            width: "40px",
                                            height: "40px",
                                            mr: "8px",
                                            borderRadius: "50%",
                                            src: (null == Z ? void 0 : null === (C = Z.user) || void 0 === C ? void 0 : C.image) || (0, b.F)("/login-icon/avatar.jpeg"),
                                            alt: "avatar"
                                        }), (0, t.jsxs)(r.Flex, {
                                            direction: "column",
                                            justifyContent: "center",
                                            wordBreak: "break-all",
                                            children: [(0, t.jsx)(l.Text, {
                                                fontWeight: "600",
                                                fontSize: "14px",
                                                lineHeight: "18px",
                                                children: null == Z ? void 0 : null === (V = Z.user) || void 0 === V ? void 0 : V.name
                                            }), (0, t.jsx)(l.Text, {
                                                color: "#828283",
                                                fontSize: "12px",
                                                lineHeight: "16px",
                                                children: null == Z ? void 0 : null === (L = Z.user) || void 0 === L ? void 0 : L.email
                                            })]
                                        })]
                                    }), (0, t.jsx)(k, {
                                        list: P
                                    }), (0, t.jsx)(k, {
                                        list: R
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        43733: function(e, i, n) { /*! js-cookie v3.0.5 | MIT */
            function t(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    for (var t in n) e[t] = n[t]
                }
                return e
            }
            n.d(i, {
                Z: function() {
                    return o
                }
            });
            var o = function e(i, n) {
                function o(e, o, r) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(r = t({}, n, r)).expires && (r.expires = new Date(Date.now() + 864e5 * r.expires)), r.expires && (r.expires = r.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var l = "";
                        for (var s in r) r[s] && (l += "; " + s, !0 !== r[s] && (l += "=" + r[s].split(";")[0]));
                        return document.cookie = e + "=" + i.write(o, e) + l
                    }
                }
                return Object.create({
                    set: o,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var n = document.cookie ? document.cookie.split("; ") : [], t = {}, o = 0; o < n.length; o++) {
                                var r = n[o].split("="),
                                    l = r.slice(1).join("=");
                                try {
                                    var s = decodeURIComponent(r[0]);
                                    if (t[s] = i.read(l, s), e === s) break
                                } catch (e) {}
                            }
                            return e ? t[e] : t
                        }
                    },
                    remove: function(e, i) {
                        o(e, "", t({}, i, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(i) {
                        return e(this.converter, t({}, this.attributes, i))
                    },
                    withConverter: function(i) {
                        return e(t({}, this.converter, i), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(n)
                    },
                    converter: {
                        value: Object.freeze(i)
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
            })
        }
    }
]);