(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8268], {
        98268: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return b
                }
            });
            var i = t(53858),
                l = t(86336);
            t(61046);
            var r = t(5618),
                o = t(26766),
                c = t(10602),
                a = t(97261),
                s = t(27951),
                d = t(6600),
                x = t(70681),
                h = t(75280),
                u = t(58735),
                p = t(11358),
                f = t(21688),
                j = t(66027),
                g = t(45773),
                m = t(60700),
                w = t(52032),
                v = t(79714),
                k = t(12413);

            function b(e) {
                let {
                    isOpen: n,
                    onClose: t,
                    onOpenTutorialVideoModal: b
                } = e, I = (0, v.useLocale)(), A = (0, w._l)(), _ = (0, i.jsx)(r.VStack, {
                    align: "center",
                    w: "100%",
                    paddingX: "1rem",
                    gap: 0,
                    children: A.map(e => {
                        var n;
                        return e.linkUrl ? (0, i.jsx)(o.Link, {
                            href: e.linkUrl,
                            w: "100%",
                            _hover: {
                                bg: "hsl(0, 0%, 7%)",
                                textDecoration: "none"
                            },
                            textDecoration: "none",
                            children: (0, i.jsx)(c.Flex, {
                                w: "100%",
                                h: "3.5rem",
                                align: "center",
                                children: (0, i.jsx)(a.Text, {
                                    as: "span",
                                    children: e.title
                                })
                            })
                        }, e.id) : (0, i.jsx)(s.Accordion, {
                            w: "100%",
                            allowMultiple: !0,
                            children: (0, i.jsxs)(d.AccordionItem, {
                                border: "none",
                                children: [(0, i.jsxs)(x.AccordionButton, {
                                    p: 0,
                                    h: "3.5rem",
                                    children: [(0, i.jsx)(h.Box, {
                                        flex: "1",
                                        textAlign: "left",
                                        children: e.title
                                    }), (0, i.jsx)(u.AccordionIcon, {})]
                                }), (0, i.jsx)(p.AccordionPanel, {
                                    bg: "hsl(0, 0%, 7%)",
                                    paddingX: "1rem",
                                    paddingY: 0,
                                    children: null == e ? void 0 : null === (n = e.children) || void 0 === n ? void 0 : n.map((e, n) => {
                                        if (null != e.linkUrl) return (0, i.jsx)(k.Z, {
                                            lang: I,
                                            textDecoration: "none",
                                            href: e.linkUrl,
                                            display: "flex",
                                            alignItems: "center",
                                            h: "3.5rem",
                                            _hover: {
                                                textDecoration: "none"
                                            },
                                            children: e.title
                                        }, n)
                                    })
                                })]
                            })
                        }, e.id)
                    })
                });
                return (0, i.jsx)(i.Fragment, {
                    children: n && (0, i.jsx)(h.Box, {
                        position: "fixed",
                        w: "100vw",
                        h: "100vh",
                        top: "0",
                        left: "0",
                        bg: "#000",
                        zIndex: 10,
                        transition: "all .2s linear",
                        pointerEvents: "auto",
                        overflowY: "auto",
                        children: (0, i.jsxs)(c.Flex, {
                            direction: "column",
                            alignItems: "center",
                            h: "100%",
                            opacity: 1,
                            transition: "all .2s linear",
                            children: [(0, i.jsxs)(f.HStack, {
                                w: "100%",
                                justifyContent: "space-between",
                                p: "1rem",
                                children: [(0, i.jsx)(j.Image, {
                                    w: "136px",
                                    h: "24px",
                                    src: "".concat(m.Em, "/tools/topview_logo.png"),
                                    alt: "特看数字人",
                                    fetchPriority: "low"
                                }), (0, i.jsx)(g.IconButton, {
                                    icon: (0, i.jsx)(l.T, {
                                        w: "20px",
                                        h: "20px"
                                    }),
                                    "aria-label": "Close",
                                    variant: "outline",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: "24px",
                                    borderRadius: "50%",
                                    onClick: t
                                })]
                            }), _]
                        })
                    })
                })
            }
        },
        61046: function() {},
        86336: function(e, n, t) {
            "use strict";
            t.d(n, {
                T: function() {
                    return i
                }
            });
            let i = (0, t(41179).createIcon)({
                displayName: "CloseIcon",
                d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            })
        }
    }
]);