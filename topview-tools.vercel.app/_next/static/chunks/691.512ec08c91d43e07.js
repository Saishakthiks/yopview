"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [691], {
        70691: function(e, o, t) {
            t.r(o);
            var r = t(53858),
                i = t(23056),
                d = t(12463),
                n = t(44511),
                p = t(84253),
                s = t(77168),
                l = t(10602),
                a = t(97261),
                x = t(97194),
                c = t(75280),
                h = t(84882);
            o.default = function(e) {
                let {
                    isOpen: o,
                    onClose: t
                } = e, u = (0, h.usePathname)(), [v, f] = (0, i.useState)(0), [b, m] = (0, i.useState)(!0), g = "https://d1735p3aqhycef.cloudfront.net/aigc-web/public", j = [{
                    id: 0,
                    title: "How to convert media materials to video with Topview",
                    desc: "Just upload your materials and ideas, and AI will take care of the video production for you.",
                    poster: "".concat(g, "/helpCenter/m2v_help_video.png"),
                    videoUrl: "".concat(g, "/helpCenter/m2v_help_video.mp4"),
                    videoIframe: (0, r.jsxs)("video", {
                        width: "90%",
                        controls: !0,
                        poster: "".concat(g, "/helpCenter/m2v_help_video.png"),
                        children: [(0, r.jsx)("source", {
                            src: "".concat(g, "/helpCenter/m2v_help_video.mp4"),
                            type: "video/mp4"
                        }), "Your browser does not support the video tag."]
                    })
                }], w = (0, i.useMemo)(() => {
                    var e;
                    return null !== (e = j.find(e => e.id === v)) && void 0 !== e ? e : j[0]
                }, [v]);
                return (0, i.useEffect)(() => {
                    o && m(!0)
                }, [o]), (0, r.jsxs)(d.Modal, {
                    isOpen: o,
                    onClose: () => {
                        t()
                    },
                    isCentered: !0,
                    children: [(0, r.jsx)(n.ModalOverlay, {
                        bg: "transparent"
                    }), (0, r.jsx)(p.ModalContent, {
                        maxW: "1046px",
                        w: "1046px",
                        p: "15px 19px 30px 22px",
                        bg: "#272727",
                        borderRadius: "8px",
                        border: "1px solid #434343",
                        children: (0, r.jsxs)(s.ModalBody, {
                            p: "0",
                            children: [(0, r.jsxs)(l.Flex, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: "8px",
                                children: [(0, r.jsx)(a.Text, {
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    children: "Tutorials"
                                }), (0, r.jsx)(x.ModalCloseButton, {
                                    pos: "relative",
                                    top: "0",
                                    left: "0",
                                    stroke: "white",
                                    fontSize: "13px"
                                })]
                            }), (0, r.jsxs)(l.Flex, {
                                gap: "14px",
                                h: "552px",
                                p: "16px  7px 0 16px",
                                bg: "#000000",
                                border: "0.85px solid #282B2F",
                                borderRadius: "12px",
                                children: [(0, r.jsxs)(c.Box, {
                                    w: "762px",
                                    children: [(0, r.jsx)(c.Box, {
                                        pos: "relative",
                                        width: "762px",
                                        height: "427px",
                                        mb: "16px",
                                        border: "10px",
                                        overflow: "hidden",
                                        children: u.includes("/gen/m2v") ? (0, r.jsx)("video", {
                                            style: {
                                                width: "100%",
                                                height: "100%"
                                            },
                                            src: w.videoUrl,
                                            controls: !0,
                                            onLoadedData: () => {
                                                m(!1)
                                            }
                                        }) : w.videoIframe
                                    }), (0, r.jsx)(c.Box, {
                                        fontSize: "24px",
                                        fontWeight: "500",
                                        color: "#fff",
                                        children: w.title
                                    }), (0, r.jsx)(a.Text, {
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        children: w.desc
                                    })]
                                }), (0, r.jsx)(l.Flex, {
                                    direction: "column",
                                    gap: "16px",
                                    children: j.map(e => (0, r.jsx)(c.Box, {
                                        w: "200px",
                                        h: "113px",
                                        borderRadius: "10px",
                                        border: "2px solid #3E3E3E",
                                        bg: "url(".concat(e.poster, ")"),
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        cursor: "pointer",
                                        _hover: {
                                            borderColor: "#4E40F3"
                                        },
                                        ...w.id === e.id && {
                                            borderColor: "#4E40F3"
                                        },
                                        onClick: () => {
                                            e.id !== w.id && (m(!0), f(e.id))
                                        }
                                    }, e.id))
                                })]
                            })]
                        })
                    })]
                })
            }
        }
    }
]);