"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3414], {
        76819: function(e, t, n) {
            n.r(t);
            var a = n(53858),
                r = n(23056),
                i = n(10602),
                o = n(52289),
                l = n(75280),
                s = n(66027),
                c = n(34625),
                d = n(26766),
                x = n(840);
            t.default = e => {
                var t, n, p, u;
                let {
                    padding: f,
                    isBorder: h,
                    cardData: m,
                    subTitle: g,
                    bodyText: v,
                    bodyTextStyleConfig: b,
                    media: w,
                    placeHolder: j,
                    isLazy: y,
                    maxHeight: k,
                    mediaWidth: S,
                    mediaHeigth: F,
                    isTextCenter: _,
                    cardConfig: z,
                    mediaConfig: I
                } = e, T = (0, r.useRef)(null), B = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    let e = new IntersectionObserver(t => {
                        t.forEach(t => {
                            var n;
                            if (t.isIntersecting && (null == w ? void 0 : null === (n = w[0]) || void 0 === n ? void 0 : n.url)) {
                                let n = t.target.getAttribute("data-src");
                                if (n) {
                                    let a = new window.Image;
                                    a.src = n, a.onload = () => {
                                        T.current && (T.current.src = n, T.current.style.opacity = "1", B.current && (B.current.style.opacity = "0"))
                                    }, e.unobserve(t.target)
                                }
                            }
                        })
                    }, {
                        threshold: .5
                    });
                    return T.current && e.observe(T.current), () => {
                        e.disconnect()
                    }
                }, [w]), (0, a.jsxs)(i.Flex, {
                    direction: {
                        base: "column",
                        xl: "row"
                    },
                    align: "center",
                    h: {
                        base: "100%",
                        xl: k
                    },
                    borderRadius: h ? "32px" : void 0,
                    bg: h ? "hsl(240, 12%, 11%)" : void 0,
                    padding: f,
                    gap: "40px",
                    ...z,
                    children: [(0, a.jsxs)(o.Stack, {
                        position: "relative",
                        w: {
                            base: "100%",
                            xl: "50%"
                        },
                        h: {
                            base: "100%",
                            xl: "100%"
                        },
                        align: "center",
                        justifyContent: "center",
                        children: [y && (0, a.jsx)(l.Box, {
                            w: "100%",
                            h: "100%",
                            backgroundImage: "url(".concat(null == w ? void 0 : null === (t = w[1]) || void 0 === t ? void 0 : t.url, ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(10px)",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            zIndex: "1",
                            transition: "opacity 0.5s",
                            ref: B
                        }), (0, a.jsx)(s.Image, {
                            w: S || "100%",
                            h: {
                                base: "auto",
                                xl: F || "100%"
                            },
                            maxH: {
                                base: "300px",
                                xl: "none"
                            },
                            ref: T,
                            "data-src": null == w ? void 0 : null === (n = w[0]) || void 0 === n ? void 0 : n.url,
                            src: j || (null == w ? void 0 : null === (p = w[1]) || void 0 === p ? void 0 : p.url),
                            alt: null == w ? void 0 : null === (u = w[0]) || void 0 === u ? void 0 : u.alt,
                            objectFit: "contain",
                            loading: y ? "lazy" : void 0,
                            opacity: y ? "0" : "1",
                            transition: y ? "opacity 0.5s" : void 0,
                            borderRadius: "32px",
                            zIndex: 2,
                            ...I
                        })]
                    }), (0, a.jsxs)(o.Stack, {
                        flex: "1",
                        justifyContent: "center",
                        pl: {
                            base: void 0,
                            xl: "20px"
                        },
                        alignSelf: _ ? "center" : "flex-start",
                        children: [g && (0, a.jsx)(c.Heading, {
                            as: "h3",
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: {
                                base: "2rem",
                                xl: "40px"
                            },
                            lineHeight: {
                                base: 1.25,
                                xl: "48px"
                            },
                            textAlign: {
                                base: "center",
                                xl: "left"
                            },
                            children: g
                        }), (0, a.jsx)(l.Box, {
                            w: "100%",
                            fontSize: {
                                base: "1.25rem",
                                xl: "24px"
                            },
                            lineHeight: {
                                base: "24px",
                                xl: "1.1"
                            },
                            color: "hsla(0, 0%, 100%, .7)",
                            textAlign: {
                                base: "center",
                                xl: "left"
                            },
                            dangerouslySetInnerHTML: {
                                __html: v || ""
                            },
                            sx: {
                                wordBreak: "normal",
                                overflowWrap: "break-word",
                                "& p, & ol": {
                                    marginBottom: "20px"
                                },
                                "& p:last-child, & ol:last-child": {
                                    marginBottom: 0
                                },
                                "& br": {
                                    display: "block",
                                    content: '""',
                                    marginTop: "20px"
                                },
                                "& ol": {
                                    listStyleType: "decimal",
                                    paddingLeft: "40px"
                                },
                                "& li": {
                                    marginBottom: "10px"
                                },
                                "& li:last-child": {
                                    marginBottom: 0
                                }
                            },
                            ...b
                        }), (null == m ? void 0 : m.cta_href) && (0, a.jsx)(d.Link, {
                            href: null == m ? void 0 : m.cta_href,
                            mt: "20px",
                            children: (0, a.jsx)(x.Button, {
                                borderRadius: "28px",
                                h: "50px",
                                padding: "16px 24px",
                                bg: "transparent",
                                border: "2px solid #fff",
                                fontSize: {
                                    base: ".75rem",
                                    xl: "16px"
                                },
                                color: "#fff",
                                _hover: {
                                    bg: "rgba(255, 255, 255, 0.2)"
                                },
                                children: null == m ? void 0 : m.cta_text
                            })
                        })]
                    })]
                })
            }
        },
        3032: function(e, t, n) {
            n.r(t);
            var a = n(53858),
                r = n(23056),
                i = n(10602),
                o = n(52289),
                l = n(75280),
                s = n(64871),
                c = n(66027),
                d = n(34625),
                x = n(26766),
                p = n(840);
            t.default = e => {
                var t, n, u, f;
                let {
                    padding: h,
                    isBorder: m,
                    subTitle: g,
                    bodyText: v,
                    bodyTextStyleConfig: b,
                    media: w,
                    placeHolder: j,
                    isLazy: y,
                    maxHeight: k,
                    hasPaddingLeft: S,
                    mediaWidth: F,
                    mediaHeigth: _,
                    isTextCenter: z,
                    cardConfig: I,
                    mediaConfig: T,
                    cardData: B
                } = e, D = (0, r.useRef)(null), C = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    let e = new IntersectionObserver(t => {
                        t.forEach(t => {
                            var n;
                            if (t.isIntersecting && (null == w ? void 0 : null === (n = w[0]) || void 0 === n ? void 0 : n.url)) {
                                let n = t.target.getAttribute("data-src");
                                if (n) {
                                    let a = new window.Image;
                                    a.src = n, a.onload = () => {
                                        D.current && (D.current.src = n, D.current.style.opacity = "1", C.current && (C.current.style.opacity = "0"))
                                    }, e.unobserve(t.target)
                                }
                            }
                        })
                    }, {
                        threshold: .5
                    });
                    return D.current && e.observe(D.current), () => {
                        e.disconnect()
                    }
                }, [w]), (0, a.jsxs)(i.Flex, {
                    direction: {
                        base: "column-reverse",
                        xl: "row-reverse"
                    },
                    align: "center",
                    h: {
                        base: "100%",
                        xl: k
                    },
                    borderRadius: m ? "32px" : void 0,
                    bg: m ? "hsl(240, 12%, 11%)" : void 0,
                    padding: {
                        base: "40px 0px 40px 0px",
                        xl: h
                    },
                    paddingLeft: {
                        base: "0px",
                        xl: S ? "60px" : "0px"
                    },
                    gap: "60px",
                    ...I,
                    children: [(0, a.jsxs)(o.Stack, {
                        position: "relative",
                        w: {
                            base: "100%",
                            xl: "50%"
                        },
                        h: {
                            base: "206px",
                            xl: "100%"
                        },
                        align: "center",
                        justifyContent: "center",
                        children: [y && (0, a.jsx)(l.Box, {
                            w: "100%",
                            h: "100%",
                            backgroundImage: "url(".concat(null == w ? void 0 : null === (t = w[1]) || void 0 === t ? void 0 : t.url, ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(10px)",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            zIndex: "1",
                            transition: "opacity 0.5s",
                            ref: C
                        }), (0, a.jsx)(s.AspectRatio, {
                            ratio: 16 / 9,
                            w: F || "100%",
                            minW: {
                                base: "300px",
                                xl: "400px"
                            },
                            children: (0, a.jsx)(c.Image, {
                                w: F || "100%",
                                h: {
                                    base: "auto",
                                    xl: _ || "100%"
                                },
                                maxH: {
                                    base: "300px",
                                    xl: "none"
                                },
                                ref: D,
                                "data-src": null == w ? void 0 : null === (n = w[0]) || void 0 === n ? void 0 : n.url,
                                src: j || (null == w ? void 0 : null === (u = w[1]) || void 0 === u ? void 0 : u.url),
                                alt: null == w ? void 0 : null === (f = w[0]) || void 0 === f ? void 0 : f.alt,
                                objectFit: "contain",
                                loading: y ? "lazy" : void 0,
                                opacity: y ? "0" : "1",
                                transition: y ? "opacity 0.5s" : void 0,
                                borderRadius: "32px",
                                zIndex: 2,
                                ...T
                            })
                        })]
                    }), (0, a.jsxs)(o.Stack, {
                        flex: "1",
                        justifyContent: "center",
                        pl: {
                            base: void 0,
                            xl: "20px"
                        },
                        alignSelf: z ? "center" : "flex-start",
                        children: [g && (0, a.jsx)(d.Heading, {
                            as: "h3",
                            size: "md",
                            mb: 2,
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: {
                                base: "2rem",
                                xl: "40px"
                            },
                            lineHeight: "48px",
                            textAlign: {
                                base: "center",
                                xl: "left"
                            },
                            children: g
                        }), (0, a.jsx)(l.Box, {
                            w: "100%",
                            fontSize: {
                                base: "1.25rem",
                                xl: "24px"
                            },
                            lineHeight: {
                                base: "24px",
                                xl: "1.1"
                            },
                            color: "hsla(0, 0%, 100%, .7)",
                            textAlign: {
                                base: "center",
                                xl: "left"
                            },
                            dangerouslySetInnerHTML: {
                                __html: v || ""
                            },
                            sx: {
                                wordBreak: "normal",
                                overflowWrap: "break-word",
                                "& p, & ol": {
                                    marginBottom: "20px"
                                },
                                "& p:last-child, & ol:last-child": {
                                    marginBottom: 0
                                },
                                "& br": {
                                    display: "block",
                                    content: '""',
                                    marginTop: "20px"
                                },
                                "& ol": {
                                    listStyleType: "decimal",
                                    paddingLeft: "40px"
                                },
                                "& li": {
                                    marginBottom: "10px"
                                },
                                "& li:last-child": {
                                    marginBottom: 0
                                }
                            },
                            ...b
                        }), (null == B ? void 0 : B.cta_href) && (0, a.jsx)(x.Link, {
                            href: null == B ? void 0 : B.cta_href,
                            mt: "20px",
                            children: (0, a.jsx)(p.Button, {
                                borderRadius: "28px",
                                h: "50px",
                                padding: "16px 24px",
                                bg: "transparent",
                                border: "2px solid #fff",
                                fontSize: {
                                    base: ".75rem",
                                    xl: "16px"
                                },
                                color: "#fff",
                                _hover: {
                                    bg: "rgba(255, 255, 255, 0.2)"
                                },
                                children: null == B ? void 0 : B.cta_text
                            })
                        })]
                    })]
                })
            }
        },
        18370: function(e, t, n) {
            n.r(t);
            var a = n(67973),
                r = n(53858),
                i = n(23056),
                o = n(36028),
                l = n(75280),
                s = n(66027),
                c = n(26602),
                d = n(12323),
                x = n(34625),
                p = n(52289),
                u = n(28759),
                f = n(10602),
                h = n(56377),
                m = n(45662),
                g = n(45972);

            function v() {
                let e = (0, a._)(["\n    0% {\n      transform: translateX(0);\n    }\n    100% {\n      transform: translateX(", "calc(", "));\n    }\n  "]);
                return v = function() {
                    return e
                }, e
            }

            function b() {
                let e = (0, a._)(["\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  "]);
                return b = function() {
                    return e
                }, e
            }
            let w = (0, i.memo)(e => {
                let {
                    title: t,
                    allItemWidth: n,
                    scrollAnimationDuration: a,
                    fadeAnimationDuration: w,
                    animationDirection: j,
                    s3FolderList: y,
                    headingStyle: k
                } = e, [S, F] = (0, i.useState)(null), [_, z] = (0, i.useState)(5), {
                    ref: I,
                    inView: T
                } = (0, g.YD)({
                    triggerOnce: !0,
                    rootMargin: "200px 0px"
                }), B = (0, o.useBreakpointValue)({
                    base: !0,
                    xl: !1
                });
                (0, i.useEffect)(() => {
                    void 0 !== B && F(B)
                }, [B]), (0, i.useEffect)(() => {
                    if (T && _ < y.length) {
                        let e = () => {
                            z(e => Math.min(e + 5, y.length)), _ + 5 < y.length && requestAnimationFrame(e)
                        };
                        requestAnimationFrame(e)
                    }
                }, [T, _, y.length]);
                let D = (0, i.useMemo)(() => (0, h.F4)(v(), "left" === j ? "-" : "", n), [j, n]),
                    C = (0, i.useMemo)(() => (0, h.F4)(b()), []),
                    A = (0, i.useCallback)((e, t) => (0, r.jsxs)(l.Box, {
                        flexShrink: 0,
                        w: "250px",
                        h: "440px",
                        bg: "transparent",
                        position: "relative",
                        borderRadius: "20px",
                        overflow: "hidden",
                        role: "group",
                        onMouseEnter: e => {
                            let t = e.currentTarget.querySelector("video");
                            t && t.paused && t.play().catch(e => {
                                console.error("Error playing video:", e)
                            })
                        },
                        onMouseLeave: e => {
                            let t = e.currentTarget.querySelector("video");
                            t && (t.pause(), t.currentTime = 0)
                        },
                        children: [(0, r.jsx)(l.Box, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            w: "100%",
                            h: "100%",
                            zIndex: 1,
                            children: (0, r.jsx)(s.Image, {
                                src: (0, m.F)("".concat(e, "/").concat(t + 1, ".webp")),
                                alt: "preview ".concat(t + 1),
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "20px",
                                loading: "eager",
                                style: {
                                    display: "block"
                                }
                            })
                        }), (0, r.jsx)(l.Box, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            w: "100%",
                            h: "100%",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            _groupHover: {
                                opacity: 1
                            },
                            zIndex: 2,
                            children: (0, r.jsx)("video", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "20px"
                                },
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                preload: "none",
                                children: (0, r.jsx)("source", {
                                    type: "video/mp4",
                                    src: (0, m.F)("".concat(e, "/").concat(t + 1, ".mp4"))
                                })
                            })
                        })]
                    }, t), []);
                return null === S ? (0, r.jsx)(c.Center, {
                    w: "100%",
                    h: "100%",
                    children: (0, r.jsx)(d.Spinner, {
                        size: "xl"
                    })
                }) : (0, r.jsx)("div", {
                    ref: I,
                    children: T && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c.Center, {
                            children: (0, r.jsx)(x.Heading, {
                                as: "h2",
                                mt: "120px",
                                mb: {
                                    base: "2rem",
                                    xl: "90px"
                                },
                                maxW: "1100px",
                                textAlign: "center",
                                fontSize: {
                                    base: "2.5rem",
                                    xl: "60px"
                                },
                                fontWeight: "700",
                                ...k,
                                dangerouslySetInnerHTML: {
                                    __html: t
                                }
                            })
                        }), (0, r.jsx)(p.Stack, {
                            w: "100%",
                            overflow: "hidden",
                            children: S ? (0, r.jsx)(c.Center, {
                                children: (0, r.jsx)(u.Grid, {
                                    w: "90%",
                                    templateColumns: "repeat(2, 1fr)",
                                    gap: "1rem",
                                    animation: "".concat(C, " ").concat(w, " linear forwards"),
                                    children: y.slice(0, _).map((e, t) => (0, r.jsx)(l.Box, {
                                        flexShrink: 1,
                                        w: "100%",
                                        h: "auto",
                                        bg: "transparent",
                                        gap: "28px",
                                        onMouseEnter: e => {
                                            let t = e.currentTarget.querySelector("video");
                                            t && t.play().catch(e => {
                                                console.error("Error playing video:", e)
                                            })
                                        },
                                        onMouseLeave: e => {
                                            let t = e.currentTarget.querySelector("video");
                                            t && t.pause()
                                        },
                                        children: (0, r.jsx)("video", {
                                            poster: (0, m.F)("".concat(e, "/").concat(t + 1, ".webp")),
                                            width: "100%",
                                            height: "auto",
                                            style: {
                                                borderRadius: "20px",
                                                objectFit: "cover"
                                            },
                                            loop: !0,
                                            preload: "none",
                                            muted: !0,
                                            children: (0, r.jsx)("source", {
                                                type: "video/mp4",
                                                src: (0, m.F)("".concat(e, "/").concat(t + 1, ".mp4"))
                                            })
                                        })
                                    }, t))
                                })
                            }) : (0, r.jsxs)(f.Flex, {
                                gap: "24px",
                                flexDirection: "left" === j ? "row" : "row-reverse",
                                animation: "".concat(D, " ").concat(a, " linear infinite"),
                                _hover: {
                                    animationPlayState: "paused"
                                },
                                children: [y.slice(0, _).map(A), y.slice(0, _).map(A), y.slice(0, _).map(A)]
                            })
                        })]
                    })
                })
            });
            w.displayName = "ScrollingWall", t.default = w
        },
        31233: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n(67973),
                r = n(53858),
                i = n(23056),
                o = n(47477),
                l = n(97261),
                s = n(6755),
                c = n(10602),
                d = n(66027),
                x = n(52289),
                p = n(56377),
                u = n(17707),
                f = n(79714);
            let h = () => {
                let e = (0, f.useTranslations)("components.userComments");
                return {
                    data: [{
                        id: 1,
                        rating: 5,
                        review: e("data.0.review"),
                        avatar: "/avatar/0.webp",
                        name: e("data.0.name"),
                        title: [{
                            id: 50,
                            content: e("data.0.title.0.content")
                        }, {
                            id: 51,
                            content: e("data.0.title.1.content")
                        }]
                    }, {
                        id: 2,
                        rating: 5,
                        review: e("data.1.review"),
                        avatar: "/avatar/1.webp",
                        name: e("data.1.name"),
                        title: [{
                            id: 52,
                            content: e("data.1.title.0.content")
                        }, {
                            id: 53,
                            content: e("data.1.title.1.content")
                        }]
                    }, {
                        id: 3,
                        rating: 4,
                        review: e("data.2.review"),
                        avatar: "/avatar/2.webp",
                        name: e("data.2.name"),
                        title: [{
                            id: 54,
                            content: e("data.2.title.0.content")
                        }, {
                            id: 55,
                            content: e("data.2.title.1.content")
                        }]
                    }, {
                        id: 4,
                        rating: 4.5,
                        review: e("data.3.review"),
                        avatar: "/avatar/3.webp",
                        name: e("data.3.name"),
                        title: [{
                            id: 56,
                            content: e("data.3.title.0.content")
                        }, {
                            id: 57,
                            content: e("data.3.title.1.content")
                        }]
                    }, {
                        id: 5,
                        rating: 5,
                        review: e("data.4.review"),
                        avatar: "/avatar/4.webp",
                        name: e("data.4.name"),
                        title: [{
                            id: 58,
                            content: e("data.4.title.0.content")
                        }, {
                            id: 59,
                            content: e("data.4.title.1.content")
                        }]
                    }],
                    secondData: [{
                        id: 100,
                        rating: 5,
                        review: e("secondData.0.review"),
                        avatar: "/avatar/5.webp",
                        name: e("secondData.0.name"),
                        title: [{
                            id: 101,
                            content: e("secondData.0.title.0.content")
                        }, {
                            id: 102,
                            content: e("secondData.0.title.1.content")
                        }]
                    }, {
                        id: 103,
                        rating: 5,
                        review: e("secondData.1.review"),
                        avatar: "/avatar/6.webp",
                        name: e("secondData.1.name"),
                        title: [{
                            id: 104,
                            content: e("secondData.1.title.0.content")
                        }, {
                            id: 105,
                            content: e("secondData.1.title.1.content")
                        }]
                    }, {
                        id: 106,
                        rating: 5,
                        review: e("secondData.2.review"),
                        avatar: "/avatar/7.webp",
                        name: e("secondData.2.name"),
                        title: [{
                            id: 107,
                            content: e("secondData.2.title.0.content")
                        }, {
                            id: 108,
                            content: e("secondData.2.title.1.content")
                        }]
                    }, {
                        id: 109,
                        rating: 5,
                        review: e("secondData.3.review"),
                        avatar: "/avatar/8.webp",
                        name: e("secondData.3.name"),
                        title: [{
                            id: 110,
                            content: e("secondData.3.title.0.content")
                        }, {
                            id: 111,
                            content: e("secondData.3.title.1.content")
                        }]
                    }, {
                        id: 112,
                        rating: 5,
                        review: e("secondData.4.review"),
                        avatar: "/avatar/9.webp",
                        name: e("secondData.4.name"),
                        title: [{
                            id: 113,
                            content: e("secondData.4.title.0.content")
                        }, {
                            id: 114,
                            content: e("secondData.4.title.1.content")
                        }]
                    }]
                }
            };
            var m = n(45662),
                g = n(45972);

            function v() {
                let e = (0, a._)(["\n      0% { transform: translateX(0px); }\n      100% { transform: translateX(calc(-2096px - 24px)); }\n    "]);
                return v = function() {
                    return e
                }, e
            }

            function b() {
                let e = (0, a._)(["\n      0% { transform: translateX(0px); }\n      100% { transform: translateX(calc(2096px + 24px)); }\n    "]);
                return b = function() {
                    return e
                }, e
            }
            let w = (0, u.default)(() => n.e(4178).then(n.bind(n, 74178)), {
                    loadableGenerated: {
                        webpack: () => [74178]
                    },
                    ssr: !1
                }),
                j = i.memo(e => {
                    let {
                        isOneLine: t,
                        dataSource: n
                    } = e, {
                        data: a,
                        secondData: u
                    } = h(), [f, j] = (0, g.YD)({
                        triggerOnce: !0,
                        threshold: .1
                    }), [y, k] = (0, i.useState)(0), S = (0, i.useRef)(null), F = (0, i.useMemo)(() => (0, p.F4)(v()), []), _ = (0, i.useMemo)(() => (0, p.F4)(b()), []), z = n || a, I = (0, i.useCallback)((e, t) => (0, r.jsxs)(o.Card, {
                        flexShrink: 0,
                        w: "400px",
                        h: "384px",
                        borderRadius: "24px",
                        bg: "hsl(240, 12%, 11%)",
                        padding: "40px 28px",
                        gap: "28px",
                        mb: "24px",
                        children: [(0, r.jsx)(w, {
                            rating: e.rating
                        }), (0, r.jsxs)(l.Text, {
                            flex: 1,
                            wordBreak: "break-all",
                            color: "#fff",
                            children: ["“ ", e.review, " ”"]
                        }), (0, r.jsx)(s.Divider, {
                            orientation: "horizontal",
                            borderColor: "gray.600"
                        }), (0, r.jsxs)(c.Flex, {
                            children: [(0, r.jsx)(d.Image, {
                                loading: "lazy",
                                fetchPriority: "low",
                                alt: "user-comment",
                                borderRadius: "50%",
                                w: "56px",
                                h: "56px",
                                src: (0, m.F)(e.avatar),
                                mr: "12px"
                            }), (0, r.jsxs)(x.Stack, {
                                gap: "0px",
                                children: [(0, r.jsx)(l.Text, {
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    color: "#fff",
                                    children: e.name
                                }), e.title.map(e => (0, r.jsx)(l.Text, {
                                    fontSize: "16px",
                                    fontWeight: "450",
                                    opacity: "70%",
                                    color: "#fff",
                                    children: e.content
                                }, "".concat(e.id, "_").concat(t)))]
                            })]
                        })]
                    }, "".concat(e.id, "_").concat(t)), []), T = (0, i.useCallback)((e, t, n) => (0, r.jsxs)(c.Flex, {
                        gap: "24px",
                        flexDirection: t,
                        animation: "".concat(n, " ").concat("40s", " linear infinite"),
                        _hover: {
                            animationPlayState: "paused"
                        },
                        children: [e.slice(0, y).map((e, t) => I(e, t)), e.slice(0, y).map((t, n) => I(t, n + e.length)), y > 0 && I(e[0], 2 * e.length)]
                    }), [I, "40s", y]), B = (0, i.useMemo)(() => T(z, "row", F), [z, T, F]), D = (0, i.useMemo)(() => T(u, "row-reverse", _), [u, T, _]);
                    return (0, i.useEffect)(() => {
                        if (j && y < z.length) {
                            let e = () => {
                                k(t => {
                                    let n = Math.min(t + 1, z.length);
                                    return n < z.length && (S.current = requestAnimationFrame(e)), n
                                })
                            };
                            S.current = requestAnimationFrame(e)
                        }
                        return () => {
                            S.current && cancelAnimationFrame(S.current)
                        }
                    }, [j, y, z.length]), (0, r.jsx)(x.Stack, {
                        w: "100%",
                        overflow: "hidden",
                        ref: f,
                        children: j && (0, r.jsxs)(r.Fragment, {
                            children: [B, !t && D]
                        })
                    })
                });
            j.displayName = "UserComment";
            var y = j
        },
        9726: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n(53858),
                r = n(45662),
                i = n(36028),
                o = n(66027);

            function l() {
                let e = (0, i.useBreakpointValue)({
                    base: "".concat((0, r.F)("/tools/logo-wall-mobile.webp")),
                    xl: "".concat((0, r.F)("/tools/logo_wall_2.webp"))
                });
                return (0, a.jsx)(o.Image, {
                    src: e,
                    alt: "logo-wall",
                    css: {
                        maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)"
                    }
                })
            }
        },
        11803: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return b
                },
                translateCardData: function() {
                    return w
                }
            });
            var a = n(53858),
                r = n(26602),
                i = n(75280),
                o = n(34625),
                l = n(52289),
                s = n(10602),
                c = n(97261),
                d = n(74031),
                x = n(23056),
                p = n(28803),
                u = n(96378),
                f = n(26766),
                h = n(840),
                m = n(84882);

            function g(e) {
                let {
                    index: t,
                    btnLink: n
                } = e, r = (0, m.usePathname)(), i = new Map([
                    ["/make/ai-video-maker", "Try AI Video Maker For Free"],
                    ["/make/ai-video-generator", "Try AI Video Generator For Free"],
                    ["/make/tiktok-video-maker", "Try TikTok Video Maker For Free"]
                ]);
                return (0, a.jsx)(s.Flex, {
                    w: "100%",
                    justifyContent: 0 === t ? "flex-start" : "center",
                    children: (0, a.jsx)(f.Link, {
                        isExternal: !0,
                        href: n,
                        children: (0, a.jsx)(h.Button, {
                            w: "340px",
                            h: "64px",
                            color: "#fff",
                            padding: "24px 15px 24px 24px",
                            borderRadius: "12px",
                            bg: "hsl(245, 88%, 60%)",
                            _hover: {
                                bg: "hsl(245, 88%, 80%)"
                            },
                            children: (0, a.jsx)(c.Text, {
                                fontWeight: "450",
                                fontSize: "16px",
                                whiteSpace: "normal",
                                mr: "16px",
                                children: 0 === t && "/make/ai-video-maker" === r ? "Try AI Video Maker Now" : i.get(r)
                            })
                        })
                    })
                })
            }
            let v = x.memo(e => {
                let {
                    mt: t,
                    title: n,
                    questionList: f,
                    hasBottomButton: h
                } = e, [m, v] = (0, x.useState)(f), [b, w] = (0, x.useTransition)();
                return (0, a.jsx)(r.Center, {
                    mt: t,
                    children: (0, a.jsxs)(i.Box, {
                        w: "100%",
                        maxW: "1172px",
                        mt: {
                            base: "0px",
                            xl: "95px"
                        },
                        mb: "90px",
                        children: [(0, a.jsx)(o.Heading, {
                            as: "h2",
                            textAlign: "center",
                            fontSize: {
                                base: "1.5rem",
                                xl: "60px"
                            },
                            fontWeight: "700",
                            lineHeight: {
                                base: "2.71rem",
                                xl: "70px"
                            },
                            children: n
                        }), (0, a.jsx)(l.Stack, {
                            spacing: "16px",
                            mt: {
                                base: "1.25rem",
                                xl: "73px"
                            },
                            align: "center",
                            w: "100%",
                            maxW: "100%",
                            children: m.map(e => (0, a.jsxs)(i.Box, {
                                w: "100%",
                                maxW: "90%",
                                as: "button",
                                borderRadius: "10px",
                                bg: "#1F1F24",
                                padding: "20px",
                                onClick: () => {
                                    w(() => {
                                        v(t => t.map(t => t.id === e.id ? { ...t,
                                            isShow: !t.isShow
                                        } : t))
                                    })
                                },
                                children: [(0, a.jsxs)(s.Flex, {
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    w: "100%",
                                    children: [(0, a.jsx)(o.Heading, {
                                        as: "h3",
                                        textAlign: "left",
                                        fontWeight: "450",
                                        fontSize: {
                                            base: ".9rem",
                                            xl: "20px"
                                        },
                                        lineHeight: {
                                            base: "1rem",
                                            xl: "30px"
                                        },
                                        children: e.question
                                    }), (0, a.jsx)(c.Text, {
                                        padding: "0",
                                        bg: "#1F1F24",
                                        _hover: {
                                            bg: "gray.200",
                                            borderRadius: "10px"
                                        },
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        children: e.isShow ? (0, a.jsx)(u.Z, {}) : (0, a.jsx)(p.p, {})
                                    })]
                                }), (0, a.jsx)(d.Collapse, { in: e.isShow,
                                    style: {
                                        width: "100%"
                                    },
                                    children: (0, a.jsx)(c.Text, {
                                        mt: {
                                            base: "1.5rem",
                                            xl: void 0
                                        },
                                        color: "#8E8BAE",
                                        ml: "20px",
                                        fontSize: {
                                            base: ".8rem",
                                            xl: "18px"
                                        },
                                        fontWeight: "500",
                                        textAlign: "left",
                                        userSelect: "text",
                                        onClick: e => e.stopPropagation(),
                                        children: function(e) {
                                            let t = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
                                            return e.split("\n").map((e, n) => (0, a.jsxs)(x.Fragment, {
                                                children: [e.split(t).map((e, n) => t.test(e) ? (0, a.jsx)("a", {
                                                    href: "mailto:".concat(e),
                                                    style: {
                                                        color: "#4E40F3"
                                                    },
                                                    children: e
                                                }, n) : e), (0, a.jsx)("br", {})]
                                            }, n))
                                        }(e.answer)
                                    })
                                })]
                            }, e.id))
                        }), h && (0, a.jsx)(r.Center, {
                            mt: "50px",
                            children: (0, a.jsx)(g, {
                                index: 2,
                                btnText: "Try AI Video Maker For Free",
                                btnLink: "/gen/m2v"
                            })
                        })]
                    })
                })
            });
            v.displayName = "QuestionList";
            var b = v;

            function w(e, t, n) {
                let a = {
                        heading: t ? e.titleList[0] : "",
                        description: n ? e.textList[0] : ""
                    },
                    r = [];
                for (let n = 0; n < e.textList.length; n++) r.push({
                    id: n,
                    title: e.titleList[n + t],
                    text: e.textList[n]
                });
                let i = [];
                for (let e of r) i.push({
                    id: null == e ? void 0 : e.id,
                    isShow: !1,
                    question: null == e ? void 0 : e.title,
                    answer: null == e ? void 0 : e.text
                });
                return [a, i]
            }
        },
        45662: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return r
                }
            });
            var a = n(50180);
            let r = e => {
                var t;
                let n = null !== (t = a.env.ASSET_HOST) && void 0 !== t ? t : "https://d1735p3aqhycef.cloudfront.net/official-website/public";
                return e && e.startsWith("/") && n ? "".concat(n).concat(e) : e
            }
        }
    }
]);