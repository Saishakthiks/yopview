(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9251], {
        91054: function() {},
        67545: function(e, i, t) {
            "use strict";
            t.r(i), t.d(i, {
                default: function() {
                    return K
                }
            });
            var n = t(53858),
                r = t(52843),
                o = t(12463),
                s = t(44511),
                a = t(84253),
                l = t(97194),
                c = t(77168),
                d = t(75280),
                u = t(46700),
                x = t(73473),
                p = t(4738),
                m = t(30387),
                h = t(34625),
                f = t(70833),
                g = t(89603),
                j = t(67823),
                v = t(840),
                S = t(14461),
                w = t(75004),
                b = t(80062),
                y = t(97261),
                C = t(86884),
                F = t(23056),
                B = t(69344),
                I = t.n(B),
                E = t(37231),
                z = t.n(E),
                k = t(37660),
                A = t(69335),
                O = t(6755),
                T = t(26602),
                _ = t(66027),
                V = t(45662),
                P = t(15397),
                H = t(77839),
                M = e => {
                    var i, t;
                    let {
                        mode: r,
                        cb: o
                    } = e, s = {
                        Apple: {
                            src: (0, V.F)("/login-icon/apple.svg"),
                            alt: "Apple Logo"
                        },
                        Google: {
                            src: (0, V.F)("/login-icon/google.svg"),
                            alt: "Google Logo"
                        }
                    }, [a, l] = (0, P.FV)(H.PH);
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(v.Button, {
                            w: "100%",
                            h: "43px",
                            bg: "#222",
                            _hover: {
                                bg: "#aaa"
                            },
                            onClick: () => {
                                l(e => ({ ...e,
                                    loggingIn: !0
                                })), o()
                            },
                            isDisabled: a.loggingIn,
                            children: [(0, n.jsx)(d.Box, {
                                mr: "10px",
                                borderRadius: "50%",
                                children: (0, n.jsx)(_.Image, {
                                    w: "20px",
                                    h: "20px",
                                    src: null === (i = s[r]) || void 0 === i ? void 0 : i.src,
                                    alt: null === (t = s[r]) || void 0 === t ? void 0 : t.alt
                                })
                            }), (0, n.jsxs)(y.Text, {
                                color: "white",
                                fontFamily: "Eina01-Bold",
                                fontSize: "14px",
                                children: ["Continue with ", r]
                            })]
                        })
                    })
                },
                N = () => {
                    let {
                        callbackUrl: e
                    } = (0, P.sJ)(H.PH), [i, t] = (0, P.FV)(H.PH);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(d.Box, {
                            mb: "16px",
                            children: (0, n.jsx)(M, {
                                mode: "Google",
                                cb: async () => {
                                    (0, A.wu)("account.signin", "signinBtn.google.click", ""), await (0, k.signIn)("google", {
                                        callbackUrl: e
                                    }).finally(() => {
                                        t(e => ({ ...e,
                                            loggingIn: !1
                                        }))
                                    })
                                }
                            })
                        }), (0, n.jsx)(M, {
                            mode: "Apple",
                            cb: async () => {
                                (0, A.wu)("account.signin", "signinBtn.apple.click", ""), await (0, k.signIn)("apple", {
                                    callbackUrl: e
                                }).finally(() => {
                                    t(e => ({ ...e,
                                        loggingIn: !1
                                    }))
                                })
                            }
                        }), (0, n.jsxs)(d.Box, {
                            position: "relative",
                            paddingY: "30px",
                            children: [(0, n.jsx)(O.Divider, {}), (0, n.jsx)(T.AbsoluteCenter, {
                                bg: "#000",
                                px: "4",
                                children: "OR"
                            })]
                        })]
                    })
                },
                L = t(9239);
            let Z = e => {
                let {
                    isSubmitting: i
                } = e, [, t] = (0, P.FV)(H.PH);
                return (0, F.useEffect)(() => {
                    i || t(e => ({ ...e,
                        loggingIn: !1
                    }))
                }, [i]), null
            };
            var J = e => {
                    let {
                        onModalClose: i,
                        onAlertClose: t,
                        onAlertOpen: r
                    } = e, [o, s] = (0, P.FV)(H.PH), [a, l] = (0, F.useState)(!1), c = () => l(!a), u = e => I().randomBytes(Math.ceil(e / 2)).toString("hex").slice(0, e);
                    async function x(e) {
                        return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e) ? await (0, L.O6)(e) ? void 0 : "This email is not registered," : "Email format is incorrect" : "Email is required"
                    }

                    function B(e) {
                        let i;
                        return e ? /\s/i.test(e) ? i = "The password cannot contain Spaces" : /.{6,}/i.test(e) || (i = "Password must be at least 6 characters") : i = "Password is required", i
                    }
                    async function E(e, n) {
                        let {
                            email: a,
                            password: l
                        } = e, c = u(16), d = z().AES.encrypt(l, c).toString(), x = "".concat(d, ",").concat(c);
                        await (0, L.Ry)(a, x).then(async () => {
                            await (0, k.signIn)("email", {
                                email: a,
                                password: x,
                                callbackUrl: o.callbackUrl,
                                redirect: o.redirect
                            }), i()
                        }).catch(() => {
                            s(e => ({ ...e,
                                alertInfo: {
                                    message: "Password incorrect",
                                    status: "error"
                                }
                            })), r(), setTimeout(t, 1500), n.setSubmitting(!1)
                        }).finally(() => {
                            s(e => ({ ...e,
                                loggingIn: !1
                            })), (0, A.wu)("account.signin", "signinBtn.click.email", "")
                        })
                    }
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(h.Heading, {
                            fontSize: "28px",
                            mb: "30px",
                            children: "Log in to Topview"
                        }), (0, n.jsx)(N, {}), (0, n.jsx)(C.J9, {
                            initialValues: {
                                email: o.email,
                                password: ""
                            },
                            validateOnChange: !1,
                            onSubmit: E,
                            children: e => (0, n.jsxs)(C.l0, {
                                children: [(0, n.jsx)(C.gN, {
                                    name: "email",
                                    validate: x,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.email && !!t.touched.email || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsx)(g.Input, { ...i,
                                                placeholder: "Email address",
                                                _placeholder: {
                                                    fontSize: "14px"
                                                },
                                                onChange: async e => {
                                                    s(i => ({ ...i,
                                                        email: e.target.value
                                                    })), await t.setFieldValue("email", e.target.value)
                                                }
                                            }), (0, n.jsxs)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: [String(t.errors.email), "This email is not registered," === t.errors.email && (0, n.jsx)(v.Button, {
                                                    variant: "link",
                                                    fontSize: "12px",
                                                    color: "#4E40F3",
                                                    ml: "4px",
                                                    onClick: () => {
                                                        s(e => ({ ...e,
                                                            active: "signup"
                                                        }))
                                                    },
                                                    children: "Sign up with this email"
                                                })]
                                            })]
                                        })
                                    }
                                }), (0, n.jsx)(C.gN, {
                                    name: "password",
                                    validate: B,
                                    children: i => {
                                        let {
                                            field: t,
                                            form: r
                                        } = i;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!r.errors.password && !!r.touched.password || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsxs)(S.InputGroup, {
                                                children: [(0, n.jsx)(g.Input, { ...t,
                                                    placeholder: "Password",
                                                    type: a ? "text" : "password",
                                                    _placeholder: {
                                                        fontSize: "14px"
                                                    },
                                                    autoComplete: "new-password",
                                                    onChange: async i => {
                                                        await r.setFieldValue("password", i.target.value), await e.validateField("password")
                                                    }
                                                }), (0, n.jsx)(w.InputRightElement, {
                                                    width: "4.5rem",
                                                    children: (0, n.jsx)(v.Button, {
                                                        bg: "#000",
                                                        h: "1.75rem",
                                                        size: "sm",
                                                        onClick: c,
                                                        _hover: {
                                                            bg: "#000"
                                                        },
                                                        children: a ? (0, n.jsx)(b.Icon, {
                                                            w: "20px",
                                                            color: "#fff",
                                                            as: p.t
                                                        }) : (0, n.jsx)(b.Icon, {
                                                            w: "20px",
                                                            color: "#fff",
                                                            as: m.O
                                                        })
                                                    })
                                                })]
                                            }), (0, n.jsx)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: String(r.errors.password)
                                            })]
                                        })
                                    }
                                }), (0, n.jsx)(v.Button, {
                                    isLoading: e.isSubmitting,
                                    type: "submit",
                                    w: "full",
                                    mb: "16px",
                                    bg: "#4E40F3",
                                    color: "#fff",
                                    _hover: {
                                        bg: "#aaa4f2"
                                    },
                                    isDisabled: !e.values.email || !e.values.password,
                                    onClick: () => {
                                        e.values.email && e.values.password && s(e => ({ ...e,
                                            loggingIn: !0
                                        }))
                                    },
                                    children: "Log in"
                                }), (0, n.jsx)(Z, {
                                    isSubmitting: e.isSubmitting
                                })]
                            })
                        }), (0, n.jsxs)(d.Box, {
                            children: [(0, n.jsxs)(d.Box, {
                                display: "flex",
                                mb: "8px",
                                children: [(0, n.jsx)(y.Text, {
                                    mr: "10px",
                                    fontSize: "12px",
                                    color: "#B5B5B5",
                                    children: "Don’t have a account?"
                                }), (0, n.jsx)(v.Button, {
                                    variant: "link",
                                    fontSize: "12px",
                                    color: "#fff",
                                    onClick: () => {
                                        s(e => ({ ...e,
                                            active: "signup"
                                        }))
                                    },
                                    children: "Sign up"
                                })]
                            }), (0, n.jsx)(v.Button, {
                                variant: "link",
                                fontSize: "12px",
                                color: "#fff",
                                onClick: () => {
                                    s(e => ({ ...e,
                                        active: "reset"
                                    }))
                                },
                                children: "Forgot your password?"
                            })]
                        })]
                    })
                },
                R = e => {
                    let {
                        setStep: i
                    } = e, [t, r] = (0, P.FV)(H.PH);
                    async function o(e) {
                        return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e) ? await (0, L.O6)(e) ? "This email is already registered," : void 0 : "Email format is incorrect" : "Email is required"
                    }
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(C.J9, {
                            initialValues: {
                                email: t.email
                            },
                            validateOnChange: !1,
                            onSubmit: function(e, t) {
                                i(2), t.setSubmitting(!1)
                            },
                            children: e => (0, n.jsxs)(C.l0, {
                                children: [(0, n.jsx)(C.gN, {
                                    name: "email",
                                    validate: o,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.email && !!t.touched.email || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsx)(g.Input, { ...i,
                                                placeholder: "Email address",
                                                _placeholder: {
                                                    fontSize: "14px"
                                                },
                                                onChange: async e => {
                                                    r(i => ({ ...i,
                                                        email: e.target.value
                                                    })), await t.setFieldValue("email", e.target.value)
                                                }
                                            }), (0, n.jsxs)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: [String(t.errors.email), "This email is already registered," === t.errors.email && (0, n.jsx)(v.Button, {
                                                    variant: "link",
                                                    fontSize: "12px",
                                                    color: "#4E40F3",
                                                    ml: "4px",
                                                    onClick: () => {
                                                        r(e => ({ ...e,
                                                            active: "login"
                                                        }))
                                                    },
                                                    children: "Log in with this email"
                                                })]
                                            })]
                                        })
                                    }
                                }), (0, n.jsx)(v.Button, {
                                    isLoading: e.isSubmitting,
                                    type: "submit",
                                    w: "full",
                                    mb: "16px",
                                    bg: "#4E40F3",
                                    color: "#fff",
                                    _hover: {
                                        bg: "#aaa4f2"
                                    },
                                    isDisabled: t.loggingIn,
                                    children: "Sign up"
                                })]
                            })
                        }), (0, n.jsxs)(d.Box, {
                            children: [(0, n.jsxs)(d.Box, {
                                display: "flex",
                                mb: "8px",
                                children: [(0, n.jsx)(y.Text, {
                                    mr: "10px",
                                    fontSize: "12px",
                                    color: "#B5B5B5",
                                    children: "Already have a account?"
                                }), (0, n.jsx)(v.Button, {
                                    variant: "link",
                                    fontSize: "12px",
                                    color: "#fff",
                                    onClick: () => {
                                        r(e => ({ ...e,
                                            active: "login"
                                        }))
                                    },
                                    children: "Log in"
                                })]
                            }), (0, n.jsx)(v.Button, {
                                variant: "link",
                                fontSize: "12px",
                                color: "#fff",
                                onClick: () => {
                                    r(e => ({ ...e,
                                        active: "reset"
                                    }))
                                },
                                children: "Forgot your password?"
                            })]
                        })]
                    })
                },
                q = e => {
                    let {
                        setStep: i,
                        onAlertOpen: t,
                        onAlertClose: r
                    } = e, [o, s] = (0, P.FV)(H.PH), [a, l] = (0, F.useState)(60);

                    function c() {
                        let e = setInterval(() => {
                            l(i => i <= 1 ? (clearInterval(e), 0) : i - 1)
                        }, 1e3);
                        return () => clearInterval(e)
                    }
                    async function u(e) {
                        return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e) ? await (0, L.O6)(e) ? "This email is already registered," : void 0 : "Email format is incorrect" : "Email is required"
                    }

                    function x(e) {
                        let i;
                        return e || (i = "Verification code is required"), i
                    }
                    async function p(e, n) {
                        (0, L.K9)(e.email, e.verificationCode).then(() => {
                            i(3)
                        }).catch(() => {
                            s(e => ({ ...e,
                                alertInfo: {
                                    message: "Verification code is incorrect",
                                    status: "error"
                                }
                            })), t(), setTimeout(r, 1500)
                        }).finally(() => {
                            n.setSubmitting(!1)
                        })
                    }
                    return (0, F.useEffect)(() => {
                        (0, L.XH)(o.email), c()
                    }, []), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(C.J9, {
                            initialValues: {
                                email: o.email,
                                verificationCode: ""
                            },
                            validateOnChange: !1,
                            onSubmit: p,
                            children: e => (0, n.jsxs)(C.l0, {
                                children: [(0, n.jsx)(C.gN, {
                                    name: "email",
                                    validate: u,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.email && !!t.touched.email || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsx)(g.Input, { ...i,
                                                placeholder: "Email address",
                                                _placeholder: {
                                                    fontSize: "14px"
                                                },
                                                onChange: async e => {
                                                    s(i => ({ ...i,
                                                        email: e.target.value
                                                    })), await t.setFieldValue("email", e.target.value)
                                                }
                                            }), (0, n.jsxs)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: [String(t.errors.email), "This email is already registered," === t.errors.email && (0, n.jsx)(v.Button, {
                                                    variant: "link",
                                                    fontSize: "12px",
                                                    color: "#4E40F3",
                                                    ml: "4px",
                                                    onClick: () => {
                                                        s(e => ({ ...e,
                                                            active: "login"
                                                        }))
                                                    },
                                                    children: "Log in with this email"
                                                })]
                                            })]
                                        })
                                    }
                                }), (0, n.jsx)(C.gN, {
                                    name: "verificationCode",
                                    validate: x,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.verificationCode && !!t.touched.verificationCode || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsx)(g.Input, { ...i,
                                                placeholder: "Enter verification code sent to your email",
                                                _placeholder: {
                                                    fontSize: "14px"
                                                },
                                                autoComplete: "off"
                                            }), (0, n.jsx)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: String(t.errors.verificationCode)
                                            })]
                                        })
                                    }
                                }), (0, n.jsxs)(d.Box, {
                                    children: [(0, n.jsx)(y.Text, {
                                        mr: "10px",
                                        fontSize: "12px",
                                        color: "#B5B5B5",
                                        children: "Didn’t receive a code?"
                                    }), (0, n.jsx)(d.Box, {
                                        mb: "8px",
                                        children: (0, n.jsxs)(y.Text, {
                                            fontSize: "12px",
                                            color: "#B5B5B5",
                                            children: ["It may take a few minutes for the code to arrive in your email, or", a > 0 ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)(v.Button, {
                                                    mx: "4px",
                                                    variant: "link",
                                                    fontSize: "12px",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    children: "resend"
                                                }), "(", (0, n.jsxs)(y.Text, {
                                                    as: "span",
                                                    color: "#4E40F3",
                                                    children: [a, "s"]
                                                }), ")"]
                                            }) : (0, n.jsx)(v.Button, {
                                                ml: "4px",
                                                variant: "link",
                                                fontSize: "12px",
                                                color: "#4E40F3",
                                                fontWeight: 700,
                                                onClick: async () => {
                                                    var i;
                                                    l(60), c(), await (0, L.XH)(null == e ? void 0 : null === (i = e.values) || void 0 === i ? void 0 : i.email)
                                                },
                                                children: "resend"
                                            })]
                                        })
                                    })]
                                }), (0, n.jsx)(v.Button, {
                                    isLoading: e.isSubmitting,
                                    type: "submit",
                                    w: "full",
                                    mb: "16px",
                                    bg: "#4E40F3",
                                    color: "#fff",
                                    _hover: {
                                        bg: "#aaa4f2"
                                    },
                                    children: "Verify"
                                })]
                            })
                        })
                    })
                },
                D = e => {
                    let {
                        onModalClose: i
                    } = e, {
                        callbackUrl: t,
                        email: r
                    } = (0, P.sJ)(H.PH), [o, s] = (0, F.useState)(!1), a = () => s(!o), l = e => I().randomBytes(Math.ceil(e / 2)).toString("hex").slice(0, e);

                    function c(e) {
                        let i;
                        return e ? /\s/i.test(e) ? i = "The password cannot contain Spaces" : /.{6,}/i.test(e) || (i = "Password must be at least 6 characters") : i = "Password is required", i
                    }

                    function d(e) {
                        let i;
                        return e || (i = "Name is required"), i
                    }
                    async function u(e, n) {
                        let o = l(16),
                            s = z().AES.encrypt(e.password, o).toString();
                        await (0, L.gS)(e.email, "".concat(s, ",").concat(o), e.username).then(async () => {
                            await (0, k.signIn)("email", {
                                email: r,
                                password: "".concat(s, ",").concat(o),
                                callbackUrl: t
                            }), i()
                        }).catch(() => {
                            n.setSubmitting(!1)
                        })
                    }
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(C.J9, {
                            initialValues: {
                                email: r,
                                password: "",
                                username: ""
                            },
                            validateOnChange: !1,
                            onSubmit: u,
                            children: e => (0, n.jsxs)(C.l0, {
                                children: [(0, n.jsx)(C.gN, {
                                    name: "email",
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsx)(f.FormControl, {
                                            isInvalid: !!t.errors.email && !!t.touched.email || void 0,
                                            mb: "16px",
                                            children: (0, n.jsx)(g.Input, { ...i,
                                                placeholder: "Email address",
                                                _placeholder: {
                                                    fontSize: "14px"
                                                },
                                                disabled: !0
                                            })
                                        })
                                    }
                                }), (0, n.jsx)(C.gN, {
                                    name: "password",
                                    validate: c,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.password && !!t.touched.password || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsxs)(S.InputGroup, {
                                                children: [(0, n.jsx)(g.Input, { ...i,
                                                    placeholder: "Password",
                                                    type: o ? "text" : "password",
                                                    _placeholder: {
                                                        fontSize: "14px"
                                                    }
                                                }), (0, n.jsx)(w.InputRightElement, {
                                                    width: "4.5rem",
                                                    children: (0, n.jsx)(v.Button, {
                                                        bg: "#000",
                                                        h: "1.75rem",
                                                        size: "sm",
                                                        onClick: a,
                                                        _hover: {
                                                            bg: "#000"
                                                        },
                                                        children: o ? (0, n.jsx)(b.Icon, {
                                                            w: "20px",
                                                            color: "#fff",
                                                            as: p.t
                                                        }) : (0, n.jsx)(b.Icon, {
                                                            w: "20px",
                                                            color: "#fff",
                                                            as: m.O
                                                        })
                                                    })
                                                })]
                                            }), (0, n.jsx)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: String(t.errors.password)
                                            })]
                                        })
                                    }
                                }), (0, n.jsx)(C.gN, {
                                    name: "username",
                                    validate: d,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.username && !!t.touched.username || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsx)(g.Input, { ...i,
                                                placeholder: "Enter your name",
                                                _placeholder: {
                                                    fontSize: "14px"
                                                }
                                            }), (0, n.jsx)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: String(t.errors.username)
                                            })]
                                        })
                                    }
                                }), (0, n.jsx)(v.Button, {
                                    isLoading: e.isSubmitting,
                                    type: "submit",
                                    w: "full",
                                    mb: "16px",
                                    bg: "#4E40F3",
                                    color: "#fff",
                                    _hover: {
                                        bg: "#aaa4f2"
                                    },
                                    children: "Finish"
                                })]
                            })
                        })
                    })
                },
                W = e => {
                    let {
                        onModalClose: i,
                        onAlertClose: t,
                        onAlertOpen: r
                    } = e, [o, s] = (0, F.useState)(1);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(h.Heading, {
                            fontSize: "28px",
                            mb: "30px",
                            children: "Sign up for Topview"
                        }), (0, n.jsx)(N, {}), 1 === o && (0, n.jsx)(R, {
                            setStep: s
                        }), 2 === o && (0, n.jsx)(q, {
                            setStep: s,
                            onAlertClose: t,
                            onAlertOpen: r
                        }), 3 === o && (0, n.jsx)(D, {
                            onModalClose: i
                        })]
                    })
                },
                G = e => {
                    let {
                        setStep: i
                    } = e, [t, r] = (0, P.FV)(H.PH);
                    async function o(e) {
                        return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e) ? await (0, L.O6)(e) ? void 0 : "This email is not registered," : "Email format is incorrect" : "Email is required"
                    }
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(h.Heading, {
                            fontSize: "28px",
                            mb: "30px",
                            children: "Reset password"
                        }), (0, n.jsx)(C.J9, {
                            initialValues: {
                                email: t.email
                            },
                            validateOnChange: !1,
                            onSubmit: function(e, t) {
                                i(2), t.setSubmitting(!1)
                            },
                            children: e => (0, n.jsxs)(C.l0, {
                                children: [(0, n.jsx)(C.gN, {
                                    name: "email",
                                    validate: o,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.email && !!t.touched.email || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsx)(g.Input, { ...i,
                                                placeholder: "Email address",
                                                _placeholder: {
                                                    fontSize: "14px"
                                                },
                                                onChange: async e => {
                                                    r(i => ({ ...i,
                                                        email: e.target.value
                                                    })), await t.setFieldValue("email", e.target.value)
                                                }
                                            }), (0, n.jsxs)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: [String(t.errors.email), "This email is not registered," === t.errors.email && (0, n.jsx)(v.Button, {
                                                    variant: "link",
                                                    fontSize: "12px",
                                                    color: "#4E40F3",
                                                    ml: "4px",
                                                    onClick: () => {
                                                        r(e => ({ ...e,
                                                            active: "signup"
                                                        }))
                                                    },
                                                    children: "Sign up with this email"
                                                })]
                                            })]
                                        })
                                    }
                                }), (0, n.jsx)(v.Button, {
                                    isLoading: e.isSubmitting,
                                    type: "submit",
                                    w: "full",
                                    mb: "16px",
                                    bg: "#4E40F3",
                                    color: "#fff",
                                    _hover: {
                                        bg: "#aaa4f2"
                                    },
                                    children: "Next"
                                })]
                            })
                        }), (0, n.jsx)(d.Box, {
                            children: (0, n.jsx)(v.Button, {
                                variant: "link",
                                fontSize: "12px",
                                color: "#fff",
                                onClick: () => {
                                    r(e => ({ ...e,
                                        active: "login"
                                    }))
                                },
                                children: "Back to login"
                            })
                        })]
                    })
                },
                X = e => {
                    let {
                        setStep: i,
                        onAlertOpen: t,
                        onAlertClose: r
                    } = e, [o, s] = (0, P.FV)(H.PH), [a, l] = (0, F.useState)(60);

                    function c() {
                        let e = setInterval(() => {
                            l(i => i <= 1 ? (clearInterval(e), 0) : i - 1)
                        }, 1e3);
                        return () => clearInterval(e)
                    }

                    function u(e) {
                        let i;
                        return e || (i = "Verification code is required"), i
                    }
                    return (0, F.useEffect)(() => {
                        (0, L.XH)(o.email), c()
                    }, []), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(h.Heading, {
                            fontSize: "28px",
                            mb: "30px",
                            children: "Verify your identity"
                        }), (0, n.jsx)(C.J9, {
                            initialValues: {
                                verificationCode: ""
                            },
                            validateOnChange: !1,
                            onSubmit: function(e, n) {
                                (0, L.K9)(o.email, e.verificationCode).then(e => {
                                    "success" === e.status ? i(3) : (s(e => ({ ...e,
                                        alertInfo: {
                                            message: "Verification code is incorrect",
                                            status: "error"
                                        }
                                    })), t(), setTimeout(r, 1500))
                                }).finally(() => {
                                    n.setSubmitting(!1)
                                })
                            },
                            children: e => (0, n.jsxs)(C.l0, {
                                children: [(0, n.jsxs)(d.Box, {
                                    mb: "20px",
                                    fontSize: "14px",
                                    children: [(0, n.jsx)(y.Text, {
                                        children: "Enter the code sent to "
                                    }), (0, n.jsx)(y.Text, {
                                        fontWeight: 700,
                                        children: o.email
                                    })]
                                }), (0, n.jsx)(C.gN, {
                                    name: "verificationCode",
                                    validate: u,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.verificationCode && !!t.touched.verificationCode || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsx)(g.Input, { ...i,
                                                placeholder: "Enter verification code sent to your email",
                                                _placeholder: {
                                                    fontSize: "14px"
                                                },
                                                autoComplete: "off"
                                            }), (0, n.jsx)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: String(t.errors.verificationCode)
                                            })]
                                        })
                                    }
                                }), (0, n.jsxs)(d.Box, {
                                    children: [(0, n.jsx)(y.Text, {
                                        mr: "10px",
                                        fontSize: "12px",
                                        color: "#B5B5B5",
                                        children: "Didn’t receive a code?"
                                    }), (0, n.jsx)(d.Box, {
                                        mb: "8px",
                                        children: (0, n.jsxs)(y.Text, {
                                            fontSize: "12px",
                                            color: "#B5B5B5",
                                            children: ["It may take a few minutes for the code to arrive in your email, or", a > 0 ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)(v.Button, {
                                                    mx: "4px",
                                                    variant: "link",
                                                    fontSize: "12px",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    children: "resend"
                                                }), "(", (0, n.jsxs)(y.Text, {
                                                    as: "span",
                                                    color: "#4E40F3",
                                                    children: [a, "s"]
                                                }), ")"]
                                            }) : (0, n.jsx)(v.Button, {
                                                ml: "4px",
                                                variant: "link",
                                                fontSize: "12px",
                                                color: "#4E40F3",
                                                fontWeight: 700,
                                                onClick: async () => {
                                                    l(60), c(), await (0, L.XH)(o.email)
                                                },
                                                children: "resend"
                                            })]
                                        })
                                    })]
                                }), (0, n.jsx)(v.Button, {
                                    isLoading: e.isSubmitting,
                                    type: "submit",
                                    w: "full",
                                    mb: "16px",
                                    bg: "#4E40F3",
                                    color: "#fff",
                                    _hover: {
                                        bg: "#aaa4f2"
                                    },
                                    children: "Verify"
                                })]
                            })
                        }), (0, n.jsx)(d.Box, {
                            children: (0, n.jsx)(v.Button, {
                                variant: "link",
                                fontSize: "12px",
                                color: "#fff",
                                onClick: () => {
                                    s(e => ({ ...e,
                                        active: "login"
                                    }))
                                },
                                children: "Back to login"
                            })
                        })]
                    })
                },
                U = e => {
                    let {
                        onAlertOpen: i,
                        onAlertClose: t
                    } = e, [r, o] = (0, P.FV)(H.PH), [s, a] = (0, F.useState)(!1), l = () => a(!s), c = e => I().randomBytes(Math.ceil(e / 2)).toString("hex").slice(0, e);

                    function u(e) {
                        let i;
                        return e ? /\s/i.test(e) ? i = "The password cannot contain Spaces" : /.{6,}/i.test(e) || (i = "Password must be at least 6 characters") : i = "Password is required", i
                    }
                    async function x(e, n) {
                        let s = c(16),
                            a = z().AES.encrypt(e.password, s).toString();
                        await (0, L.gS)(r.email, "".concat(a, ",").concat(s)).then(() => {
                            n.setSubmitting(!1), o(e => ({ ...e,
                                alertInfo: {
                                    message: "Password modification successfult",
                                    status: "success"
                                }
                            })), i(), setTimeout(t, 1500), o(e => ({ ...e,
                                active: "login"
                            }))
                        }).catch(e => {
                            console.log(e)
                        }).finally(() => {
                            n.setSubmitting(!1)
                        })
                    }
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(h.Heading, {
                            fontSize: "28px",
                            mb: "30px",
                            children: "Set new password"
                        }), (0, n.jsx)(C.J9, {
                            initialValues: {
                                password: ""
                            },
                            validateOnChange: !1,
                            onSubmit: x,
                            children: e => (0, n.jsxs)(C.l0, {
                                children: [(0, n.jsx)(C.gN, {
                                    name: "password",
                                    validate: u,
                                    children: e => {
                                        let {
                                            field: i,
                                            form: t
                                        } = e;
                                        return (0, n.jsxs)(f.FormControl, {
                                            isInvalid: !!t.errors.password && !!t.touched.password || void 0,
                                            mb: "16px",
                                            children: [(0, n.jsxs)(S.InputGroup, {
                                                children: [(0, n.jsx)(g.Input, { ...i,
                                                    placeholder: "Password",
                                                    type: s ? "text" : "password",
                                                    _placeholder: {
                                                        fontSize: "14px"
                                                    }
                                                }), (0, n.jsx)(w.InputRightElement, {
                                                    width: "4.5rem",
                                                    children: (0, n.jsx)(v.Button, {
                                                        bg: "#000",
                                                        h: "1.75rem",
                                                        size: "sm",
                                                        onClick: l,
                                                        _hover: {
                                                            bg: "#000"
                                                        },
                                                        children: s ? (0, n.jsx)(b.Icon, {
                                                            w: "20px",
                                                            color: "#fff",
                                                            as: p.t
                                                        }) : (0, n.jsx)(b.Icon, {
                                                            w: "20px",
                                                            color: "#fff",
                                                            as: m.O
                                                        })
                                                    })
                                                })]
                                            }), (0, n.jsx)(j.FormErrorMessage, {
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                children: String(t.errors.password)
                                            })]
                                        })
                                    }
                                }), (0, n.jsx)(v.Button, {
                                    isLoading: e.isSubmitting,
                                    type: "submit",
                                    w: "full",
                                    mb: "16px",
                                    bg: "#4E40F3",
                                    color: "#fff",
                                    _hover: {
                                        bg: "#aaa4f2"
                                    },
                                    children: "Finish"
                                })]
                            })
                        }), (0, n.jsx)(d.Box, {
                            children: (0, n.jsx)(v.Button, {
                                variant: "link",
                                fontSize: "12px",
                                color: "#fff",
                                onClick: () => {
                                    o(e => ({ ...e,
                                        active: "login"
                                    }))
                                },
                                children: "Back to login"
                            })
                        })]
                    })
                },
                $ = e => {
                    let {
                        onAlertClose: i,
                        onAlertOpen: t
                    } = e, [r, o] = (0, F.useState)(1);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [1 === r && (0, n.jsx)(G, {
                            setStep: o
                        }), 2 === r && (0, n.jsx)(X, {
                            setStep: o,
                            onAlertClose: i,
                            onAlertOpen: t
                        }), 3 === r && (0, n.jsx)(U, {
                            onAlertClose: i,
                            onAlertOpen: t
                        })]
                    })
                },
                K = function(e) {
                    let {
                        isOpen: i,
                        onClose: t
                    } = e, p = (0, P.sJ)(H.PH), {
                        isOpen: m,
                        onClose: h,
                        onOpen: f
                    } = (0, r.useDisclosure)();
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(o.Modal, {
                            isOpen: i,
                            onClose: t,
                            isCentered: !0,
                            children: [(0, n.jsx)(s.ModalOverlay, {}), (0, n.jsxs)(a.ModalContent, {
                                bg: "#000",
                                rounded: "10px",
                                minW: 0,
                                minH: "633px",
                                children: [(0, n.jsx)(l.ModalCloseButton, {}), (0, n.jsx)(c.ModalBody, {
                                    margin: "auto",
                                    py: "60px",
                                    children: (0, n.jsx)("div", {
                                        translate: "no",
                                        children: (0, n.jsxs)(d.Box, {
                                            w: "309px",
                                            position: "relative",
                                            children: [m && (0, n.jsxs)(u.Alert, {
                                                status: p.alertInfo.status,
                                                position: "absolute",
                                                top: "-40px",
                                                color: "#000",
                                                "data-theme": "light",
                                                children: [(0, n.jsx)(x.AlertIcon, {}), p.alertInfo.message]
                                            }), "login" === p.active && (0, n.jsx)(J, {
                                                onModalClose: t,
                                                onAlertClose: h,
                                                onAlertOpen: f
                                            }), "signup" === p.active && (0, n.jsx)(W, {
                                                onModalClose: t,
                                                onAlertClose: h,
                                                onAlertOpen: f
                                            }), "reset" === p.active && (0, n.jsx)($, {
                                                onAlertClose: h,
                                                onAlertOpen: f
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        9239: function(e, i, t) {
            "use strict";
            t.d(i, {
                K9: function() {
                    return a
                },
                O6: function() {
                    return o
                },
                Ry: function() {
                    return c
                },
                XH: function() {
                    return s
                },
                gS: function() {
                    return l
                }
            });
            var n = t(43733);
            let r = async e => {
                    let {
                        url: i,
                        data: t,
                        headers: n
                    } = e;
                    return console.log(i, {
                        method: "POST",
                        headers: Object.assign({}, {
                            "Content-Type": "application/json"
                        }, n),
                        body: JSON.stringify(t)
                    }), await fetch(i, {
                        method: "POST",
                        headers: Object.assign({}, {
                            "Content-Type": "application/json"
                        }, n),
                        body: JSON.stringify(t)
                    }).then(e => e.json()).then(e => {
                        let {
                            result: i
                        } = e;
                        if (null == i ? void 0 : i.data) return i.data;
                        throw Error("No data returned")
                    })
                },
                o = async e => new Promise(i => {
                    r({
                        url: "/api/trpc/account.checkEmailExist",
                        data: {
                            email: e
                        }
                    }).then(e => {
                        "success" === e.status ? i(!0) : i(!1)
                    })
                }),
                s = async e => {
                    let i;
                    window.rewardful("ready", function() {
                        i = window.Rewardful.referral, console.log("referral", window.Rewardful.referral)
                    });
                    let t = n.Z.get("promotion");
                    return console.log("promotion", t), await r({
                        url: "/api/trpc/account.sendVerifyCode2Email",
                        data: {
                            email: e,
                            ...i ? {
                                rewardfulReferral: i
                            } : {},
                            ...t ? {
                                promotion: t
                            } : {}
                        }
                    })
                },
                a = async (e, i) => await r({
                    url: "/api/trpc/account.verifyCodeFromUserInput",
                    data: {
                        email: e,
                        code: i
                    }
                }),
                l = async (e, i, t) => await r({
                    url: "/api/trpc/account.updateUserInfo",
                    data: {
                        email: e,
                        password: i,
                        username: t
                    }
                }),
                c = async (e, i) => r({
                    url: "/api/trpc/account.signInWithEmail",
                    data: {
                        email: e,
                        password: i
                    }
                }).then(e => {
                    if ("error" !== e.status) return e;
                    throw Error(e.message)
                })
        }
    }
]);