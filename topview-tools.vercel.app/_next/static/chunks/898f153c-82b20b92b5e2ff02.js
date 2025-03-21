"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4565], {
        15397: function(e, t, n) {
            let r;
            n.d(t, {
                FV: function() {
                    return iU
                },
                Wh: function() {
                    return iL
                },
                Zl: function() {
                    return iI
                },
                cn: function() {
                    return iV
                },
                nZ: function() {
                    return iC
                },
                sJ: function() {
                    return iM
                }
            });
            var o, i, a, l, s = n(23056),
                u = n(56929),
                c = n(50180),
                d = function(e) {
                    let t = Error(e);
                    if (void 0 === t.stack) try {
                        throw t
                    } catch (e) {}
                    return t
                },
                f = function(e) {
                    return !!e && "function" == typeof e.then
                },
                h = function(e, t) {
                    if (null != e) return e;
                    throw d(null != t ? t : "Got unexpected null or undefined")
                };

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class v {
                getValue() {
                    throw d("BaseLoadable")
                }
                toPromise() {
                    throw d("BaseLoadable")
                }
                valueMaybe() {
                    throw d("BaseLoadable")
                }
                valueOrThrow() {
                    throw d(`Loadable expected value, but in "${this.state}" state`)
                }
                promiseMaybe() {
                    throw d("BaseLoadable")
                }
                promiseOrThrow() {
                    throw d(`Loadable expected promise, but in "${this.state}" state`)
                }
                errorMaybe() {
                    throw d("BaseLoadable")
                }
                errorOrThrow() {
                    throw d(`Loadable expected error, but in "${this.state}" state`)
                }
                is(e) {
                    return e.state === this.state && e.contents === this.contents
                }
                map(e) {
                    throw d("BaseLoadable")
                }
            }
            class _ extends v {
                constructor(e) {
                    super(), p(this, "state", "hasValue"), p(this, "contents", void 0), this.contents = e
                }
                getValue() {
                    return this.contents
                }
                toPromise() {
                    return Promise.resolve(this.contents)
                }
                valueMaybe() {
                    return this.contents
                }
                valueOrThrow() {
                    return this.contents
                }
                promiseMaybe() {}
                errorMaybe() {}
                map(e) {
                    try {
                        let t = e(this.contents);
                        return f(t) ? R(t) : w(t) ? t : S(t)
                    } catch (t) {
                        return f(t) ? R(t.next(() => this.map(e))) : g(t)
                    }
                }
            }
            class y extends v {
                constructor(e) {
                    super(), p(this, "state", "hasError"), p(this, "contents", void 0), this.contents = e
                }
                getValue() {
                    throw this.contents
                }
                toPromise() {
                    return Promise.reject(this.contents)
                }
                valueMaybe() {}
                promiseMaybe() {}
                errorMaybe() {
                    return this.contents
                }
                errorOrThrow() {
                    return this.contents
                }
                map(e) {
                    return this
                }
            }
            class m extends v {
                constructor(e) {
                    super(), p(this, "state", "loading"), p(this, "contents", void 0), this.contents = e
                }
                getValue() {
                    throw this.contents
                }
                toPromise() {
                    return this.contents
                }
                valueMaybe() {}
                promiseMaybe() {
                    return this.contents
                }
                promiseOrThrow() {
                    return this.contents
                }
                errorMaybe() {}
                map(e) {
                    return R(this.contents.then(t => {
                        let n = e(t);
                        if (w(n)) switch (n.state) {
                            case "hasValue":
                            case "loading":
                                return n.contents;
                            case "hasError":
                                throw n.contents
                        }
                        return n
                    }).catch(t => {
                        if (f(t)) return t.then(() => this.map(e).contents);
                        throw t
                    }))
                }
            }

            function S(e) {
                return Object.freeze(new _(e))
            }

            function g(e) {
                return Object.freeze(new y(e))
            }

            function R(e) {
                return Object.freeze(new m(e))
            }

            function T() {
                return Object.freeze(new m(new Promise(() => {})))
            }

            function b(e) {
                var t;
                let n = (t = (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map(t => e[t])).map(e => w(e) ? e : f(e) ? R(e) : S(e))).every(e => "hasValue" === e.state) ? S(t.map(e => e.contents)) : t.some(e => "hasError" === e.state) ? g(h(t.find(e => "hasError" === e.state), "Invalid loadable passed to loadableAll").contents) : R(Promise.all(t.map(e => e.contents)));
                return Array.isArray(e) ? n : n.map(t => Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e,
                    [n]: t[r]
                }), {}))
            }

            function w(e) {
                return e instanceof v
            }
            var A = {
                    loadableWithValue: S,
                    loadableWithError: g,
                    loadableWithPromise: R,
                    loadableLoading: T,
                    loadableAll: b,
                    isLoadable: w,
                    RecoilLoadable: { of: e => f(e) ? R(e) : w(e) ? e : S(e),
                        error: e => g(e),
                        loading: () => T(),
                        all: b,
                        isLoadable: w
                    }
                },
                E = Object.freeze({
                    __proto__: null,
                    loadableWithValue: A.loadableWithValue,
                    loadableWithError: A.loadableWithError,
                    loadableWithPromise: A.loadableWithPromise,
                    loadableLoading: A.loadableLoading,
                    loadableAll: A.loadableAll,
                    isLoadable: A.isLoadable,
                    RecoilLoadable: A.RecoilLoadable
                });
            let N = {
                RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
                RECOIL_GKS_ENABLED: new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
            };

            function k(e) {
                return N.RECOIL_GKS_ENABLED.has(e)
            }
            void 0 !== c && (null == c ? void 0 : c.env) != null && (function(e, t) {
                var n, r;
                let o = null === (n = c.env[e]) || void 0 === n ? void 0 : null === (r = n.toLowerCase()) || void 0 === r ? void 0 : r.trim();
                if (null != o && "" !== o) {
                    if (!["true", "false"].includes(o)) throw d(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
                    t("true" === o)
                }
            }("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", e => {
                N.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e
            }), function(e, t) {
                var n;
                let r = null === (n = c.env[e]) || void 0 === n ? void 0 : n.trim();
                null != r && "" !== r && t(r.split(/\s*,\s*|\s+/))
            }("RECOIL_GKS_ENABLED", e => {
                e.forEach(e => {
                    N.RECOIL_GKS_ENABLED.add(e)
                })
            })), k.setPass = e => {
                N.RECOIL_GKS_ENABLED.add(e)
            }, k.setFail = e => {
                N.RECOIL_GKS_ENABLED.delete(e)
            }, k.clear = () => {
                N.RECOIL_GKS_ENABLED.clear()
            };
            var L = function(e, t, {
                error: n
            } = {}) {
                return null
            };
            let V = null !== (i = s.createMutableSource) && void 0 !== i ? i : s.unstable_createMutableSource,
                C = null !== (a = s.useMutableSource) && void 0 !== a ? a : s.unstable_useMutableSource,
                M = null !== (l = s.useSyncExternalStore) && void 0 !== l ? l : s.unstable_useSyncExternalStore,
                U = !1;
            var I = {
                createMutableSource: V,
                useMutableSource: C,
                useSyncExternalStore: M,
                currentRendererSupportsUseSyncExternalStore: function() {
                    var e;
                    let {
                        ReactCurrentDispatcher: t,
                        ReactCurrentOwner: n
                    } = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, r = null != (null !== (e = null == t ? void 0 : t.current) && void 0 !== e ? e : n.currentDispatcher).useSyncExternalStore;
                    return !M || r || U || (U = !0, L("A React renderer without React 18+ API support is being used with React 18+.")), r
                },
                reactMode: function() {
                    return k("recoil_transition_support") ? {
                        mode: "TRANSITION_SUPPORT",
                        early: !0,
                        concurrent: !0
                    } : k("recoil_sync_external_store") && null != M ? {
                        mode: "SYNC_EXTERNAL_STORE",
                        early: !0,
                        concurrent: !1
                    } : k("recoil_mutable_source") && null != C && "undefined" != typeof window && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE ? k("recoil_suppress_rerender_in_callback") ? {
                        mode: "MUTABLE_SOURCE",
                        early: !0,
                        concurrent: !0
                    } : {
                        mode: "MUTABLE_SOURCE",
                        early: !1,
                        concurrent: !1
                    } : k("recoil_suppress_rerender_in_callback") ? {
                        mode: "LEGACY",
                        early: !0,
                        concurrent: !1
                    } : {
                        mode: "LEGACY",
                        early: !1,
                        concurrent: !1
                    }
                },
                isFastRefreshEnabled: function() {
                    return !1
                }
            };
            class B {
                constructor(e) {
                    p(this, "key", void 0), this.key = e
                }
                toJSON() {
                    return {
                        key: this.key
                    }
                }
            }
            class D extends B {}
            class O extends B {}
            var P = {
                    AbstractRecoilValue: B,
                    RecoilState: D,
                    RecoilValueReadOnly: O,
                    isRecoilValue: function(e) {
                        return e instanceof D || e instanceof O
                    }
                },
                x = Object.freeze({
                    __proto__: null,
                    AbstractRecoilValue: P.AbstractRecoilValue,
                    RecoilState: P.RecoilState,
                    RecoilValueReadOnly: P.RecoilValueReadOnly,
                    isRecoilValue: P.isRecoilValue
                }),
                z = function(e, ...t) {},
                F = function(e, t) {
                    return function*() {
                        let n = 0;
                        for (let r of e) yield t(r, n++)
                    }()
                };
            let {
                isFastRefreshEnabled: G
            } = I;
            class W {}
            let $ = new W,
                K = new Map,
                j = new Map;
            class H extends Error {}
            let q = new Map;

            function Z(e) {
                return q.get(e)
            }
            var Y = {
                    nodes: K,
                    recoilValues: j,
                    registerNode: function(e) {
                        var t;
                        N.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && (t = e.key, K.has(t) && console.warn(`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`)), K.set(e.key, e);
                        let n = null == e.set ? new x.RecoilValueReadOnly(e.key) : new x.RecoilState(e.key);
                        return j.set(e.key, n), n
                    },
                    getNode: function(e) {
                        let t = K.get(e);
                        if (null == t) throw new H(`Missing definition for RecoilValue: "${e}""`);
                        return t
                    },
                    getNodeMaybe: function(e) {
                        return K.get(e)
                    },
                    deleteNodeConfigIfPossible: function(e) {
                        var t, n;
                        if (!k("recoil_memory_managament_2020")) return;
                        let r = K.get(e);
                        null != r && null !== (t = r.shouldDeleteConfigOnRelease) && void 0 !== t && t.call(r) && (K.delete(e), null === (n = Z(e)) || void 0 === n || n(), q.delete(e))
                    },
                    setConfigDeletionHandler: function(e, t) {
                        k("recoil_memory_managament_2020") && (void 0 === t ? q.delete(e) : q.set(e, t))
                    },
                    getConfigDeletionHandler: Z,
                    recoilValuesForKeys: function(e) {
                        return F(e, e => h(j.get(e)))
                    },
                    NodeMissingError: H,
                    DefaultValue: W,
                    DEFAULT_VALUE: $
                },
                J = (function(e) {
                    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        n = {},
                        r = {},
                        o = function(e) {
                            return function() {
                                return e
                            }
                        },
                        i = n.hash = function(e) {
                            var n = void 0 === e ? "undefined" : t(e);
                            if ("number" === n) return e;
                            "string" !== n && (e += "");
                            for (var r = 0, o = 0, i = e.length; o < i; ++o) r = (r << 5) - r + e.charCodeAt(o) | 0;
                            return r
                        },
                        a = function(e, t) {
                            return t >>> e & 31
                        },
                        l = function(e) {
                            return 1 << e
                        },
                        s = function(e, t) {
                            var n;
                            return n = e & t - 1, n -= n >> 1 & 1431655765, n = (n = (858993459 & n) + (n >> 2 & 858993459)) + (n >> 4) & 252645135, n += n >> 8, 127 & (n += n >> 16)
                        },
                        u = function(e, t, n, r) {
                            var o = r;
                            if (!e) {
                                var i = r.length;
                                o = Array(i);
                                for (var a = 0; a < i; ++a) o[a] = r[a]
                            }
                            return o[t] = n, o
                        },
                        c = function(e, t, n) {
                            var r = n.length - 1,
                                o = 0,
                                i = 0,
                                a = n;
                            if (e) o = i = t;
                            else
                                for (a = Array(r); o < t;) a[i++] = n[o++];
                            for (++o; o <= r;) a[i++] = n[o++];
                            return e && (a.length = r), a
                        },
                        d = function(e, t, n, r) {
                            var o = r.length;
                            if (e) {
                                for (var i = o; i >= t;) r[i--] = r[i];
                                return r[t] = n, r
                            }
                            for (var a = 0, l = 0, s = Array(o + 1); a < t;) s[l++] = r[a++];
                            for (s[t] = n; a < o;) s[++l] = r[a++];
                            return s
                        },
                        f = {
                            __hamt_isEmpty: !0
                        },
                        h = function(e) {
                            return e === f || e && e.__hamt_isEmpty
                        },
                        p = function(e, t, n, r) {
                            return {
                                type: 1,
                                edit: e,
                                hash: t,
                                key: n,
                                value: r,
                                _modify: b
                            }
                        },
                        v = function(e, t, n) {
                            return {
                                type: 2,
                                edit: e,
                                hash: t,
                                children: n,
                                _modify: w
                            }
                        },
                        _ = function(e, t, n) {
                            return {
                                type: 3,
                                edit: e,
                                mask: t,
                                children: n,
                                _modify: A
                            }
                        },
                        y = function(e, t, n) {
                            return {
                                type: 4,
                                edit: e,
                                size: t,
                                children: n,
                                _modify: E
                            }
                        },
                        m = function(e, t, n, r, o) {
                            for (var i = [], a = r, l = 0, s = 0; a; ++s) 1 & a && (i[s] = o[l++]), a >>>= 1;
                            return i[t] = n, y(e, l + 1, i)
                        },
                        S = function(e, t, n, r) {
                            for (var o = Array(t - 1), i = 0, a = 0, l = 0, s = r.length; l < s; ++l)
                                if (l !== n) {
                                    var u = r[l];
                                    u && !h(u) && (o[i++] = u, a |= 1 << l)
                                }
                            return _(e, a, o)
                        },
                        g = function e(t, n, r, o, i, s) {
                            if (r === i) return v(t, r, [s, o]);
                            var u = a(n, r),
                                c = a(n, i);
                            return _(t, l(u) | l(c), u === c ? [e(t, n + 5, r, o, i, s)] : u < c ? [o, s] : [s, o])
                        },
                        R = function(e, t, n, o, i, a, l, s) {
                            for (var d = i.length, f = 0; f < d; ++f) {
                                var h = i[f];
                                if (n(l, h.key)) {
                                    var v = h.value,
                                        _ = a(v);
                                    if (_ === v) return i;
                                    if (_ === r) return --s.value, c(e, f, i);
                                    return u(e, f, p(t, o, l, _), i)
                                }
                            }
                            var y = a();
                            return y === r ? i : (++s.value, u(e, d, p(t, o, l, y), i))
                        },
                        T = function(e, t) {
                            return e === t.edit
                        },
                        b = function(e, t, n, o, i, a, l) {
                            if (t(a, this.key)) {
                                var s = o(this.value);
                                return s === this.value ? this : s === r ? (--l.value, f) : T(e, this) ? (this.value = s, this) : p(e, i, a, s)
                            }
                            var u = o();
                            return u === r ? this : (++l.value, g(e, n, this.hash, this, i, p(e, i, a, u)))
                        },
                        w = function(e, t, n, o, i, a, l) {
                            if (i === this.hash) {
                                var s = R(T(e, this), e, t, this.hash, this.children, o, a, l);
                                return s === this.children ? this : s.length > 1 ? v(e, this.hash, s) : s[0]
                            }
                            var u = o();
                            return u === r ? this : (++l.value, g(e, n, this.hash, this, i, p(e, i, a, u)))
                        },
                        A = function(e, t, n, r, o, i, p) {
                            var v, y = this.mask,
                                S = this.children,
                                g = a(n, o),
                                R = l(g),
                                b = s(y, R),
                                w = y & R,
                                A = w ? S[b] : f,
                                E = A._modify(e, t, n + 5, r, o, i, p);
                            if (A === E) return this;
                            var N = T(e, this),
                                k = y,
                                L = void 0;
                            if (w && h(E)) {
                                if (!(k &= ~R)) return f;
                                if (S.length <= 2 && ((v = S[1 ^ b]) === f || 1 === v.type || 2 === v.type)) return S[1 ^ b];
                                L = c(N, b, S)
                            } else if (w || h(E)) L = u(N, b, E, S);
                            else {
                                if (S.length >= 16) return m(e, g, E, y, S);
                                k |= R, L = d(N, b, E, S)
                            }
                            return N ? (this.mask = k, this.children = L, this) : _(e, k, L)
                        },
                        E = function(e, t, n, r, o, i, l) {
                            var s = this.size,
                                c = this.children,
                                d = a(n, o),
                                p = c[d],
                                v = (p || f)._modify(e, t, n + 5, r, o, i, l);
                            if (p === v) return this;
                            var _ = T(e, this),
                                m = void 0;
                            if (h(p) && !h(v)) ++s, m = u(_, d, v, c);
                            else if (!h(p) && h(v)) {
                                if (--s <= 8) return S(e, s, d, c);
                                m = u(_, d, f, c)
                            } else m = u(_, d, v, c);
                            return _ ? (this.size = s, this.children = m, this) : y(e, s, m)
                        };

                    function N(e, t, n, r, o) {
                        this._editable = e, this._edit = t, this._config = n, this._root = r, this._size = o
                    }
                    f._modify = function(e, t, n, o, i, a, l) {
                        var s = o();
                        return s === r ? f : (++l.value, p(e, i, a, s))
                    }, N.prototype.setTree = function(e, t) {
                        return this._editable ? (this._root = e, this._size = t, this) : e === this._root ? this : new N(this._editable, this._edit, this._config, e, t)
                    };
                    var k = n.tryGetHash = function(e, t, n, r) {
                        for (var o = r._root, i = 0, u = r._config.keyEq;;) switch (o.type) {
                            case 1:
                                return u(n, o.key) ? o.value : e;
                            case 2:
                                if (t === o.hash)
                                    for (var c = o.children, d = 0, f = c.length; d < f; ++d) {
                                        var h = c[d];
                                        if (u(n, h.key)) return h.value
                                    }
                                return e;
                            case 3:
                                var p = l(a(i, t));
                                if (o.mask & p) {
                                    o = o.children[s(o.mask, p)], i += 5;
                                    break
                                }
                                return e;
                            case 4:
                                if (o = o.children[a(i, t)]) {
                                    i += 5;
                                    break
                                }
                                return e;
                            default:
                                return e
                        }
                    };
                    N.prototype.tryGetHash = function(e, t, n) {
                        return k(e, t, n, this)
                    };
                    var L = n.tryGet = function(e, t, n) {
                        return k(e, n._config.hash(t), t, n)
                    };
                    N.prototype.tryGet = function(e, t) {
                        return L(e, t, this)
                    };
                    var V = n.getHash = function(e, t, n) {
                        return k(void 0, e, t, n)
                    };
                    N.prototype.getHash = function(e, t) {
                        return V(e, t, this)
                    }, n.get = function(e, t) {
                        return k(void 0, t._config.hash(e), e, t)
                    }, N.prototype.get = function(e, t) {
                        return L(t, e, this)
                    };
                    var C = n.has = function(e, t, n) {
                        return k(r, e, t, n) !== r
                    };
                    N.prototype.hasHash = function(e, t) {
                        return C(e, t, this)
                    };
                    var M = n.has = function(e, t) {
                        return C(t._config.hash(e), e, t)
                    };
                    N.prototype.has = function(e) {
                        return M(e, this)
                    };
                    var U = function(e, t) {
                        return e === t
                    };
                    n.make = function(e) {
                        return new N(0, 0, {
                            keyEq: e && e.keyEq || U,
                            hash: e && e.hash || i
                        }, f, 0)
                    }, n.empty = n.make();
                    var I = n.isEmpty = function(e) {
                        return e && !!h(e._root)
                    };
                    N.prototype.isEmpty = function() {
                        return I(this)
                    };
                    var B = n.modifyHash = function(e, t, n, r) {
                        var o = {
                                value: r._size
                            },
                            i = r._root._modify(r._editable ? r._edit : NaN, r._config.keyEq, 0, e, t, n, o);
                        return r.setTree(i, o.value)
                    };
                    N.prototype.modifyHash = function(e, t, n) {
                        return B(n, e, t, this)
                    };
                    var D = n.modify = function(e, t, n) {
                        return B(e, n._config.hash(t), t, n)
                    };
                    N.prototype.modify = function(e, t) {
                        return D(t, e, this)
                    };
                    var O = n.setHash = function(e, t, n, r) {
                        return B(o(n), e, t, r)
                    };
                    N.prototype.setHash = function(e, t, n) {
                        return O(e, t, n, this)
                    };
                    var P = n.set = function(e, t, n) {
                        return O(n._config.hash(e), e, t, n)
                    };
                    N.prototype.set = function(e, t) {
                        return P(e, t, this)
                    };
                    var x = o(r),
                        z = n.removeHash = function(e, t, n) {
                            return B(x, e, t, n)
                        };
                    N.prototype.removeHash = N.prototype.deleteHash = function(e, t) {
                        return z(e, t, this)
                    };
                    var F = n.remove = function(e, t) {
                        return z(t._config.hash(e), e, t)
                    };
                    N.prototype.remove = N.prototype.delete = function(e) {
                        return F(e, this)
                    };
                    var G = n.beginMutation = function(e) {
                        return new N(e._editable + 1, e._edit + 1, e._config, e._root, e._size)
                    };
                    N.prototype.beginMutation = function() {
                        return G(this)
                    };
                    var W = n.endMutation = function(e) {
                        return e._editable = e._editable && e._editable - 1, e
                    };
                    N.prototype.endMutation = function() {
                        return W(this)
                    };
                    var $ = n.mutate = function(e, t) {
                        var n = G(t);
                        return e(n), W(n)
                    };
                    N.prototype.mutate = function(e) {
                        return $(e, this)
                    };
                    var K = function(e) {
                            return e && j(e[0], e[1], e[2], e[3], e[4])
                        },
                        j = function(e, t, n, r, o) {
                            for (; n < e;) {
                                var i = t[n++];
                                if (i && !h(i)) return H(i, r, [e, t, n, r, o])
                            }
                            return K(o)
                        },
                        H = function(e, t, n) {
                            switch (e.type) {
                                case 1:
                                    return {
                                        value: t(e),
                                        rest: n
                                    };
                                case 2:
                                case 4:
                                case 3:
                                    var r = e.children;
                                    return j(r.length, r, 0, t, n);
                                default:
                                    return K(n)
                            }
                        },
                        q = {
                            done: !0
                        };

                    function Z(e) {
                        this.v = e
                    }
                    Z.prototype.next = function() {
                        if (!this.v) return q;
                        var e = this.v;
                        return this.v = K(e.rest), e
                    }, Z.prototype[Symbol.iterator] = function() {
                        return this
                    };
                    var Y = function(e, t) {
                            return new Z(H(e._root, t))
                        },
                        J = function(e) {
                            return [e.key, e.value]
                        },
                        X = n.entries = function(e) {
                            return Y(e, J)
                        };
                    N.prototype.entries = N.prototype[Symbol.iterator] = function() {
                        return X(this)
                    };
                    var Q = function(e) {
                            return e.key
                        },
                        ee = n.keys = function(e) {
                            return Y(e, Q)
                        };
                    N.prototype.keys = function() {
                        return ee(this)
                    };
                    var et = function(e) {
                            return e.value
                        },
                        en = n.values = N.prototype.values = function(e) {
                            return Y(e, et)
                        };
                    N.prototype.values = function() {
                        return en(this)
                    };
                    var er = n.fold = function(e, t, n) {
                        var r = n._root;
                        if (1 === r.type) return e(t, r.value, r.key);
                        for (var o = [r.children], i = void 0; i = o.pop();)
                            for (var a = 0, l = i.length; a < l;) {
                                var s = i[a++];
                                s && s.type && (1 === s.type ? t = e(t, s.value, s.key) : o.push(s.children))
                            }
                        return t
                    };
                    N.prototype.fold = function(e, t) {
                        return er(e, t, this)
                    };
                    var eo = n.forEach = function(e, t) {
                        return er(function(n, r, o) {
                            return e(r, o, t)
                        }, null, t)
                    };
                    N.prototype.forEach = function(e) {
                        return eo(e, this)
                    };
                    var ei = n.count = function(e) {
                        return e._size
                    };
                    N.prototype.count = function() {
                        return ei(this)
                    }, Object.defineProperty(N.prototype, "size", {
                        get: N.prototype.count
                    }), e.exports ? e.exports = n : undefined.hamt = n
                }(o = {
                    exports: {}
                }, o.exports), o.exports);
            class X {
                constructor(e) {
                    p(this, "_map", void 0), this._map = new Map(null == e ? void 0 : e.entries())
                }
                keys() {
                    return this._map.keys()
                }
                entries() {
                    return this._map.entries()
                }
                get(e) {
                    return this._map.get(e)
                }
                has(e) {
                    return this._map.has(e)
                }
                set(e, t) {
                    return this._map.set(e, t), this
                }
                delete(e) {
                    return this._map.delete(e), this
                }
                clone() {
                    return ee(this)
                }
                toMap() {
                    return new Map(this._map)
                }
            }
            class Q {
                constructor(e) {
                    if (p(this, "_hamt", J.empty.beginMutation()), e instanceof Q) {
                        let t = e._hamt.endMutation();
                        e._hamt = t.beginMutation(), this._hamt = t.beginMutation()
                    } else if (e)
                        for (let [t, n] of e.entries()) this._hamt.set(t, n)
                }
                keys() {
                    return this._hamt.keys()
                }
                entries() {
                    return this._hamt.entries()
                }
                get(e) {
                    return this._hamt.get(e)
                }
                has(e) {
                    return this._hamt.has(e)
                }
                set(e, t) {
                    return this._hamt.set(e, t), this
                }
                delete(e) {
                    return this._hamt.delete(e), this
                }
                clone() {
                    return ee(this)
                }
                toMap() {
                    return new Map(this._hamt)
                }
            }

            function ee(e) {
                return k("recoil_hamt_2020") ? new Q(e) : new X(e)
            }
            var et = Object.freeze({
                    __proto__: null,
                    persistentMap: {
                        persistentMap: ee
                    }.persistentMap
                }),
                en = function(e, ...t) {
                    let n = new Set;
                    e: for (let r of e) {
                        for (let e of t)
                            if (e.has(r)) continue e;
                        n.add(r)
                    }
                    return n
                },
                er = function(e, t) {
                    let n = new Map;
                    return e.forEach((e, r) => {
                        n.set(r, t(e, r))
                    }), n
                };

            function eo(e, t, n, r) {
                let {
                    nodeDeps: o,
                    nodeToNodeSubscriptions: i
                } = n, a = o.get(e);
                if (!a || !r || a === r.nodeDeps.get(e)) {
                    for (let n of (o.set(e, t), null == a ? t : en(t, a))) i.has(n) || i.set(n, new Set), h(i.get(n)).add(e);
                    if (a)
                        for (let n of en(a, t)) {
                            if (!i.has(n)) return;
                            let t = h(i.get(n));
                            t.delete(e), 0 === t.size && i.delete(n)
                        }
                }
            }
            var ei = {
                cloneGraph: function(e) {
                    return {
                        nodeDeps: er(e.nodeDeps, e => new Set(e)),
                        nodeToNodeSubscriptions: er(e.nodeToNodeSubscriptions, e => new Set(e))
                    }
                },
                graph: function() {
                    return {
                        nodeDeps: new Map,
                        nodeToNodeSubscriptions: new Map
                    }
                },
                saveDepsToStore: function(e, t, n, r) {
                    var o, i, a, l, s;
                    let u = n.getState();
                    r === u.currentTree.version || r === (null === (o = u.nextTree) || void 0 === o ? void 0 : o.version) || r === (null === (i = u.previousTree) || void 0 === i ? void 0 : i.version) || L("Tried to save dependencies to a discarded tree");
                    let c = n.getGraph(r);
                    if (eo(e, t, c), r === (null === (a = u.previousTree) || void 0 === a ? void 0 : a.version) && eo(e, t, n.getGraph(u.currentTree.version), c), r === (null === (l = u.previousTree) || void 0 === l ? void 0 : l.version) || r === u.currentTree.version) {
                        let r = null === (s = u.nextTree) || void 0 === s ? void 0 : s.version;
                        void 0 !== r && eo(e, t, n.getGraph(r), c)
                    }
                }
            };
            let ea = 0,
                el = 0,
                es = 0;
            var eu = {
                getNextTreeStateVersion: () => ea++,
                getNextStoreID: () => el++,
                getNextComponentID: () => es++
            };
            let {
                persistentMap: ec
            } = et, {
                graph: ed
            } = ei, {
                getNextTreeStateVersion: ef
            } = eu;

            function eh() {
                let e = ef();
                return {
                    version: e,
                    stateID: e,
                    transactionMetadata: {},
                    dirtyAtoms: new Set,
                    atomValues: ec(),
                    nonvalidatedAtoms: ec()
                }
            }
            var ep = {
                makeEmptyTreeState: eh,
                makeEmptyStoreState: function() {
                    let e = eh();
                    return {
                        currentTree: e,
                        nextTree: null,
                        previousTree: null,
                        commitDepth: 0,
                        knownAtoms: new Set,
                        knownSelectors: new Set,
                        transactionSubscriptions: new Map,
                        nodeTransactionSubscriptions: new Map,
                        nodeToComponentSubscriptions: new Map,
                        queuedComponentCallbacks_DEPRECATED: [],
                        suspendedComponentResolvers: new Set,
                        graphsByVersion: new Map().set(e.version, ed()),
                        retention: {
                            referenceCounts: new Map,
                            nodesRetainedByZone: new Map,
                            retainablesToCheckForRelease: new Set
                        },
                        nodeCleanupFunctions: new Map
                    }
                },
                getNextTreeStateVersion: ef
            };
            class ev {}
            var e_ = {
                    RetentionZone: ev,
                    retentionZone: function() {
                        return new ev
                    }
                },
                ey = {
                    setByAddingToSet: function(e, t) {
                        let n = new Set(e);
                        return n.add(t), n
                    },
                    setByDeletingFromSet: function(e, t) {
                        let n = new Set(e);
                        return n.delete(t), n
                    },
                    mapBySettingInMap: function(e, t, n) {
                        let r = new Map(e);
                        return r.set(t, n), r
                    },
                    mapByUpdatingInMap: function(e, t, n) {
                        let r = new Map(e);
                        return r.set(t, n(r.get(t))), r
                    },
                    mapByDeletingFromMap: function(e, t) {
                        let n = new Map(e);
                        return n.delete(t), n
                    },
                    mapByDeletingMultipleFromMap: function(e, t) {
                        let n = new Map(e);
                        return t.forEach(e => n.delete(e)), n
                    }
                },
                em = function*(e, t) {
                    let n = 0;
                    for (let r of e) t(r, n++) && (yield r)
                },
                eS = function(e, t) {
                    return new Proxy(e, {
                        get: (e, n) => (!(n in e) && n in t && (e[n] = t[n]()), e[n]),
                        ownKeys: e => Object.keys(e)
                    })
                };
            let {
                getNode: eg,
                getNodeMaybe: eR,
                recoilValuesForKeys: eT
            } = Y, {
                RetentionZone: eb
            } = e_, {
                setByAddingToSet: ew
            } = ey, eA = Object.freeze(new Set);
            class eE extends Error {}

            function eN(e, t, n, r) {
                let o = e.getState();
                if (o.nodeCleanupFunctions.has(n)) return;
                let i = eg(n),
                    a = function(e, t, n) {
                        if (!k("recoil_memory_managament_2020")) return () => void 0;
                        let {
                            nodesRetainedByZone: r
                        } = e.getState().retention;

                        function o(e) {
                            let n = r.get(e);
                            n || r.set(e, n = new Set), n.add(t)
                        }
                        if (n instanceof eb) o(n);
                        else if (Array.isArray(n))
                            for (let e of n) o(e);
                        return () => {
                            if (!k("recoil_memory_managament_2020")) return;
                            let {
                                retention: r
                            } = e.getState();

                            function o(e) {
                                let n = r.nodesRetainedByZone.get(e);
                                null == n || n.delete(t), n && 0 === n.size && r.nodesRetainedByZone.delete(e)
                            }
                            if (n instanceof eb) o(n);
                            else if (Array.isArray(n))
                                for (let e of n) o(e)
                        }
                    }(e, n, i.retainedBy),
                    l = i.init(e, t, r);
                o.nodeCleanupFunctions.set(n, () => {
                    l(), a()
                })
            }

            function ek(e, t, n) {
                return eg(n).peek(e, t)
            }

            function eL(e, t, n) {
                let r = new Set,
                    o = Array.from(n),
                    i = e.getGraph(t.version);
                for (let e = o.pop(); e; e = o.pop()) {
                    var a;
                    for (let t of (r.add(e), null !== (a = i.nodeToNodeSubscriptions.get(e)) && void 0 !== a ? a : eA)) r.has(t) || o.push(t)
                }
                return r
            }
            var eV = {
                getNodeLoadable: function(e, t, n) {
                    return eN(e, t, n, "get"), eg(n).get(e, t)
                },
                peekNodeLoadable: ek,
                setNodeValue: function(e, t, n, r) {
                    let o = eg(n);
                    if (null == o.set) throw new eE(`Attempt to set read-only RecoilValue: ${n}`);
                    let i = o.set;
                    return eN(e, t, n, "set"), i(e, t, r)
                },
                initializeNode: function(e, t, n) {
                    eN(e, e.getState().currentTree, t, n)
                },
                cleanUpNode: function(e, t) {
                    var n;
                    let r = e.getState();
                    null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(), r.nodeCleanupFunctions.delete(t)
                },
                setUnvalidatedAtomValue_DEPRECATED: function(e, t, n) {
                    var r;
                    let o = eR(t);
                    return null == o || null === (r = o.invalidate) || void 0 === r || r.call(o, e), { ...e,
                        atomValues: e.atomValues.clone().delete(t),
                        nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
                        dirtyAtoms: ew(e.dirtyAtoms, t)
                    }
                },
                peekNodeInfo: function(e, t, n) {
                    let r = e.getState(),
                        o = e.getGraph(t.version),
                        i = eg(n).nodeType;
                    return eS({
                        type: i
                    }, {
                        loadable: () => ek(e, t, n),
                        isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
                        isSet: () => "selector" !== i && t.atomValues.has(n),
                        isModified: () => t.dirtyAtoms.has(n),
                        deps: () => {
                            var e;
                            return eT(null !== (e = o.nodeDeps.get(n)) && void 0 !== e ? e : [])
                        },
                        subscribers: () => {
                            var o, i;
                            return {
                                nodes: eT(em(eL(e, t, new Set([n])), e => e !== n)),
                                components: F(null !== (o = null === (i = r.nodeToComponentSubscriptions.get(n)) || void 0 === i ? void 0 : i.values()) && void 0 !== o ? o : [], ([e]) => ({
                                    name: e
                                }))
                            }
                        }
                    })
                },
                getDownstreamNodes: eL
            };
            let eC = null;
            var eM = {
                setInvalidateMemoizedSnapshot: function(e) {
                    eC = e
                },
                invalidateMemoizedSnapshot: function() {
                    var e;
                    null === (e = eC) || void 0 === e || e()
                }
            };
            let {
                getDownstreamNodes: eU,
                getNodeLoadable: eI,
                setNodeValue: eB
            } = eV, {
                getNextComponentID: eD
            } = eu, {
                getNode: eO,
                getNodeMaybe: eP
            } = Y, {
                DefaultValue: ex
            } = Y, {
                reactMode: ez
            } = I, {
                AbstractRecoilValue: eF,
                RecoilState: eG,
                RecoilValueReadOnly: eW,
                isRecoilValue: e$
            } = x, {
                invalidateMemoizedSnapshot: eK
            } = eM;

            function ej(e, t, n) {
                "hasValue" === n.state && n.contents instanceof ex ? e.atomValues.delete(t) : e.atomValues.set(t, n), e.dirtyAtoms.add(t), e.nonvalidatedAtoms.delete(t)
            }

            function eH(e, t) {
                e.replaceState(n => {
                    let r = eY(n);
                    for (let n of t) ! function(e, t, n) {
                        if ("set" === n.type) {
                            let {
                                recoilValue: r,
                                valueOrUpdater: o
                            } = n, i = function(e, t, {
                                key: n
                            }, r) {
                                if ("function" != typeof r) return r; {
                                    let o = eI(e, t, n);
                                    if ("loading" === o.state) {
                                        let e = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
                                        throw L(e), d(e)
                                    }
                                    if ("hasError" === o.state) throw o.contents;
                                    return r(o.contents)
                                }
                            }(e, t, r, o);
                            for (let [n, o] of eB(e, t, r.key, i).entries()) ej(t, n, o)
                        } else if ("setLoadable" === n.type) {
                            let {
                                recoilValue: {
                                    key: e
                                },
                                loadable: r
                            } = n;
                            ej(t, e, r)
                        } else if ("markModified" === n.type) {
                            let {
                                recoilValue: {
                                    key: e
                                }
                            } = n;
                            t.dirtyAtoms.add(e)
                        } else if ("setUnvalidated" === n.type) {
                            var r;
                            let {
                                recoilValue: {
                                    key: e
                                },
                                unvalidatedValue: o
                            } = n, i = eP(e);
                            null == i || null === (r = i.invalidate) || void 0 === r || r.call(i, t), t.atomValues.delete(e), t.nonvalidatedAtoms.set(e, o), t.dirtyAtoms.add(e)
                        } else L(`Unknown action ${n.type}`)
                    }(e, r, n);
                    return eJ(e, r), eK(), r
                })
            }

            function eq(e, t) {
                if (eZ.length) {
                    let n = eZ[eZ.length - 1],
                        r = n.get(e);
                    r || n.set(e, r = []), r.push(t)
                } else eH(e, [t])
            }
            let eZ = [];

            function eY(e) {
                return { ...e,
                    atomValues: e.atomValues.clone(),
                    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
                    dirtyAtoms: new Set(e.dirtyAtoms)
                }
            }

            function eJ(e, t) {
                for (let o of eU(e, t, t.dirtyAtoms)) {
                    var n, r;
                    null === (n = eP(o)) || void 0 === n || null === (r = n.invalidate) || void 0 === r || r.call(n, t)
                }
            }

            function eX(e, t, n) {
                eq(e, {
                    type: "set",
                    recoilValue: t,
                    valueOrUpdater: n
                })
            }
            var eQ = {
                    RecoilValueReadOnly: eW,
                    AbstractRecoilValue: eF,
                    RecoilState: eG,
                    getRecoilValueAsLoadable: function(e, {
                        key: t
                    }, n = e.getState().currentTree) {
                        var r, o;
                        let i = e.getState();
                        n.version === i.currentTree.version || n.version === (null === (r = i.nextTree) || void 0 === r ? void 0 : r.version) || n.version === (null === (o = i.previousTree) || void 0 === o ? void 0 : o.version) || L("Tried to read from a discarded tree");
                        let a = eI(e, n, t);
                        return "loading" === a.state && a.contents.catch(() => {}), a
                    },
                    setRecoilValue: eX,
                    setRecoilValueLoadable: function(e, t, n) {
                        if (n instanceof ex) return eX(e, t, n);
                        eq(e, {
                            type: "setLoadable",
                            recoilValue: t,
                            loadable: n
                        })
                    },
                    markRecoilValueModified: function(e, t) {
                        eq(e, {
                            type: "markModified",
                            recoilValue: t
                        })
                    },
                    setUnvalidatedRecoilValue: function(e, t, n) {
                        eq(e, {
                            type: "setUnvalidated",
                            recoilValue: t,
                            unvalidatedValue: n
                        })
                    },
                    subscribeToRecoilValue: function(e, {
                        key: t
                    }, n, r = null) {
                        let o = eD(),
                            i = e.getState();
                        i.nodeToComponentSubscriptions.has(t) || i.nodeToComponentSubscriptions.set(t, new Map), h(i.nodeToComponentSubscriptions.get(t)).set(o, [null != r ? r : "<not captured>", n]);
                        let a = ez();
                        if (a.early && ("LEGACY" === a.mode || "MUTABLE_SOURCE" === a.mode)) {
                            let r = e.getState().nextTree;
                            r && r.dirtyAtoms.has(t) && n(r)
                        }
                        return {
                            release: () => {
                                let n = e.getState(),
                                    r = n.nodeToComponentSubscriptions.get(t);
                                if (void 0 === r || !r.has(o)) {
                                    L(`Subscription missing at release time for atom ${t}. This is a bug in Recoil.`);
                                    return
                                }
                                r.delete(o), 0 === r.size && n.nodeToComponentSubscriptions.delete(t)
                            }
                        }
                    },
                    isRecoilValue: e$,
                    applyAtomValueWrites: function(e, t) {
                        let n = e.clone();
                        return t.forEach((e, t) => {
                            "hasValue" === e.state && e.contents instanceof ex ? n.delete(t) : n.set(t, e)
                        }), n
                    },
                    batchStart: function() {
                        let e = new Map;
                        return eZ.push(e), () => {
                            for (let [t, n] of e) eH(t, n);
                            eZ.pop() !== e && L("Incorrect order of batch popping")
                        }
                    },
                    writeLoadableToTreeState: ej,
                    invalidateDownstreams: eJ,
                    copyTreeState: eY,
                    refreshRecoilValue: function(e, t) {
                        var n;
                        let {
                            currentTree: r
                        } = e.getState(), o = eO(t.key);
                        null === (n = o.clearCache) || void 0 === n || n.call(o, e, r)
                    }
                },
                e0 = function(e, t, n) {
                    let r = e.entries(),
                        o = r.next();
                    for (; !o.done;) {
                        let i = o.value;
                        if (t.call(n, i[1], i[0], e)) return !0;
                        o = r.next()
                    }
                    return !1
                };
            let {
                cleanUpNode: e1
            } = eV, {
                deleteNodeConfigIfPossible: e2,
                getNode: e5
            } = Y, {
                RetentionZone: e3
            } = e_, e4 = new Set;

            function e8(e, t) {
                let n = e.getState(),
                    r = n.currentTree;
                if (n.nextTree) {
                    L("releaseNodesNowOnCurrentTree should only be called at the end of a batch");
                    return
                }
                let o = new Set;
                for (let e of t)
                    if (e instanceof e3)
                        for (let t of function(e, t) {
                                var n;
                                return null !== (n = e.retention.nodesRetainedByZone.get(t)) && void 0 !== n ? n : e4
                            }(n, e)) o.add(t);
                    else o.add(e);
                for (let t of function(e, t) {
                        let n = e.getState(),
                            r = n.currentTree,
                            o = e.getGraph(r.version),
                            i = new Set,
                            a = new Set;
                        return function t(l) {
                            var s, u;
                            let c = new Set;
                            for (let t of function(e, t, n, r, o) {
                                    let i = e.getGraph(t.version),
                                        a = [],
                                        l = new Set;
                                    for (; n.size > 0;)(function e(t) {
                                        if (r.has(t) || o.has(t)) {
                                            n.delete(t);
                                            return
                                        }
                                        if (l.has(t)) return;
                                        let s = i.nodeToNodeSubscriptions.get(t);
                                        if (s)
                                            for (let t of s) e(t);
                                        l.add(t), n.delete(t), a.push(t)
                                    })(h(n.values().next().value));
                                    return a
                                }(e, r, l, i, a)) {
                                if ("recoilRoot" === e5(t).retainedBy || (null !== (s = n.retention.referenceCounts.get(t)) && void 0 !== s ? s : 0) > 0 || e9(t).some(e => n.retention.referenceCounts.get(e))) {
                                    a.add(t);
                                    continue
                                }
                                let e = o.nodeToNodeSubscriptions.get(t);
                                if (e && e0(e, e => a.has(e))) {
                                    a.add(t);
                                    continue
                                }
                                i.add(t), c.add(t)
                            }
                            let d = new Set;
                            for (let e of c)
                                for (let t of null !== (u = o.nodeDeps.get(e)) && void 0 !== u ? u : e4) i.has(t) || d.add(t);
                            d.size && t(d)
                        }(t), i
                    }(e, o)) ! function(e, t, n) {
                    var r, o;
                    if (!k("recoil_memory_managament_2020")) return;
                    e1(e, n);
                    let i = e.getState();
                    for (let e of (i.knownAtoms.delete(n), i.knownSelectors.delete(n), i.nodeTransactionSubscriptions.delete(n), i.retention.referenceCounts.delete(n), e9(n))) null === (r = i.retention.nodesRetainedByZone.get(e)) || void 0 === r || r.delete(n);
                    t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
                    let a = i.graphsByVersion.get(t.version);
                    if (a) {
                        let e = a.nodeDeps.get(n);
                        if (void 0 !== e)
                            for (let t of (a.nodeDeps.delete(n), e)) null === (o = a.nodeToNodeSubscriptions.get(t)) || void 0 === o || o.delete(n);
                        a.nodeToNodeSubscriptions.delete(n)
                    }
                    e2(n)
                }(e, r, t)
            }

            function e9(e) {
                let t = e5(e).retainedBy;
                return void 0 === t || "components" === t || "recoilRoot" === t ? [] : t instanceof e3 ? [t] : t
            }

            function e6(e, t) {
                k("recoil_memory_managament_2020") && (e.getState().retention.referenceCounts.delete(t), function(e, t) {
                    let n = e.getState();
                    n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : e8(e, new Set([t]))
                }(e, t))
            }
            var e7 = {
                SUSPENSE_TIMEOUT_MS: 12e4,
                updateRetainCount: function(e, t, n) {
                    var r;
                    if (!k("recoil_memory_managament_2020")) return;
                    let o = e.getState().retention.referenceCounts,
                        i = (null !== (r = o.get(t)) && void 0 !== r ? r : 0) + n;
                    0 === i ? e6(e, t) : o.set(t, i)
                },
                updateRetainCountToZero: e6,
                releaseScheduledRetainablesNow: function(e) {
                    if (!k("recoil_memory_managament_2020")) return;
                    let t = e.getState();
                    e8(e, t.retention.retainablesToCheckForRelease), t.retention.retainablesToCheckForRelease.clear()
                },
                retainedByOptionWithDefault: function(e) {
                    return void 0 === e ? "recoilRoot" : e
                }
            };
            let {
                unstable_batchedUpdates: te
            } = u, {
                unstable_batchedUpdates: tt
            } = {
                unstable_batchedUpdates: te
            }, {
                batchStart: tn
            } = eQ, {
                unstable_batchedUpdates: tr
            } = {
                unstable_batchedUpdates: tt
            }, to = tr || (e => e());
            var ti = {
                    getBatcher: () => to,
                    setBatcher: e => {
                        to = e
                    },
                    batchUpdates: e => {
                        to(() => {
                            let t = () => void 0;
                            try {
                                t = tn(), e()
                            } finally {
                                t()
                            }
                        })
                    }
                },
                ta = function*(e) {
                    for (let t of e)
                        for (let e of t) yield e
                };
            let tl = "undefined" == typeof Window || "undefined" == typeof window;
            var ts = {
                isSSR: tl,
                isReactNative: "undefined" != typeof navigator && "ReactNative" === navigator.product,
                isWindow: e => !tl && (e === window || e instanceof Window)
            };
            let {
                batchUpdates: tu
            } = ti, {
                initializeNode: tc,
                peekNodeInfo: td
            } = eV, {
                graph: tf
            } = ei, {
                getNextStoreID: th
            } = eu, {
                DEFAULT_VALUE: tp,
                recoilValues: tv,
                recoilValuesForKeys: t_
            } = Y, {
                AbstractRecoilValue: ty,
                getRecoilValueAsLoadable: tm,
                setRecoilValue: tS,
                setUnvalidatedRecoilValue: tg
            } = eQ, {
                updateRetainCount: tR
            } = e7, {
                setInvalidateMemoizedSnapshot: tT
            } = eM, {
                getNextTreeStateVersion: tb,
                makeEmptyStoreState: tw
            } = ep, {
                isSSR: tA
            } = ts, {
                memoizeOneWithArgsHashAndInvalidation: tE
            } = {
                memoizeWithArgsHash: function(e, t) {
                    let n;
                    return (...r) => {
                        n || (n = {});
                        let o = t(...r);
                        return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o]
                    }
                },
                memoizeOneWithArgsHash: function(e, t) {
                    let n, r;
                    return (...o) => {
                        let i = t(...o);
                        return n === i ? r : (n = i, r = e(...o))
                    }
                },
                memoizeOneWithArgsHashAndInvalidation: function(e, t) {
                    let n, r;
                    return [(...o) => {
                        let i = t(...o);
                        return n === i ? r : (n = i, r = e(...o))
                    }, () => {
                        n = null
                    }]
                }
            };
            class tN {
                constructor(e, t) {
                    for (let n of (p(this, "_store", void 0), p(this, "_refCount", 1), p(this, "getLoadable", e => (this.checkRefCount_INTERNAL(), tm(this._store, e))), p(this, "getPromise", e => (this.checkRefCount_INTERNAL(), this.getLoadable(e).toPromise())), p(this, "getNodes_UNSTABLE", e => {
                            if (this.checkRefCount_INTERNAL(), (null == e ? void 0 : e.isModified) === !0) return (null == e ? void 0 : e.isInitialized) === !1 ? [] : t_(this._store.getState().currentTree.dirtyAtoms);
                            let t = this._store.getState().knownAtoms,
                                n = this._store.getState().knownSelectors;
                            return (null == e ? void 0 : e.isInitialized) == null ? tv.values() : !0 === e.isInitialized ? t_(ta([t, n])) : em(tv.values(), ({
                                key: e
                            }) => !t.has(e) && !n.has(e))
                        }), p(this, "getInfo_UNSTABLE", ({
                            key: e
                        }) => (this.checkRefCount_INTERNAL(), td(this._store, this._store.getState().currentTree, e))), p(this, "map", e => {
                            this.checkRefCount_INTERNAL();
                            let t = new tC(this, tu);
                            return e(t), t
                        }), p(this, "asyncMap", async e => {
                            this.checkRefCount_INTERNAL();
                            let t = new tC(this, tu);
                            return t.retain(), await e(t), t.autoRelease_INTERNAL(), t
                        }), this._store = {
                            storeID: th(),
                            parentStoreID: t,
                            getState: () => e,
                            replaceState: t => {
                                e.currentTree = t(e.currentTree)
                            },
                            getGraph: t => {
                                let n = e.graphsByVersion;
                                if (n.has(t)) return h(n.get(t));
                                let r = tf();
                                return n.set(t, r), r
                            },
                            subscribeToTransactions: () => ({
                                release: () => {}
                            }),
                            addTransactionMetadata: () => {
                                throw d("Cannot subscribe to Snapshots")
                            }
                        }, this._store.getState().knownAtoms)) tc(this._store, n, "get"), tR(this._store, n, 1);
                    this.autoRelease_INTERNAL()
                }
                retain() {
                    this._refCount <= 0 && L("Attempt to retain() Snapshot that was already released."), this._refCount++;
                    let e = !1;
                    return () => {
                        e || (e = !0, this._release())
                    }
                }
                autoRelease_INTERNAL() {
                    tA || window.setTimeout(() => this._release(), 10)
                }
                _release() {
                    if (this._refCount--, 0 === this._refCount) {
                        if (this._store.getState().nodeCleanupFunctions.forEach(e => e()), this._store.getState().nodeCleanupFunctions.clear(), !k("recoil_memory_managament_2020")) return
                    } else this._refCount
                }
                isRetained() {
                    return this._refCount > 0
                }
                checkRefCount_INTERNAL() {
                    k("recoil_memory_managament_2020") && this._refCount
                }
                getStore_INTERNAL() {
                    return this.checkRefCount_INTERNAL(), this._store
                }
                getID() {
                    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
                }
                getStoreID() {
                    return this.checkRefCount_INTERNAL(), this._store.storeID
                }
            }

            function tk(e, t, n = !1) {
                let r = e.getState(),
                    o = n ? tb() : t.version;
                return {
                    currentTree: {
                        version: n ? o : t.version,
                        stateID: n ? o : t.stateID,
                        transactionMetadata: { ...t.transactionMetadata
                        },
                        dirtyAtoms: new Set(t.dirtyAtoms),
                        atomValues: t.atomValues.clone(),
                        nonvalidatedAtoms: t.nonvalidatedAtoms.clone()
                    },
                    commitDepth: 0,
                    nextTree: null,
                    previousTree: null,
                    knownAtoms: new Set(r.knownAtoms),
                    knownSelectors: new Set(r.knownSelectors),
                    transactionSubscriptions: new Map,
                    nodeTransactionSubscriptions: new Map,
                    nodeToComponentSubscriptions: new Map,
                    queuedComponentCallbacks_DEPRECATED: [],
                    suspendedComponentResolvers: new Set,
                    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
                    retention: {
                        referenceCounts: new Map,
                        nodesRetainedByZone: new Map,
                        retainablesToCheckForRelease: new Set
                    },
                    nodeCleanupFunctions: new Map(F(r.nodeCleanupFunctions.entries(), ([e]) => [e, () => {}]))
                }
            }
            let [tL, tV] = tE((e, t) => {
                var n;
                let r = e.getState();
                return new tN(tk(e, "latest" === t ? null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree : h(r.previousTree)), e.storeID)
            }, (e, t) => {
                var n, r;
                return String(t) + String(e.storeID) + String(null === (n = e.getState().nextTree) || void 0 === n ? void 0 : n.version) + String(e.getState().currentTree.version) + String(null === (r = e.getState().previousTree) || void 0 === r ? void 0 : r.version)
            });
            tT(tV);
            class tC extends tN {
                constructor(e, t) {
                    super(tk(e.getStore_INTERNAL(), e.getStore_INTERNAL().getState().currentTree, !0), e.getStoreID()), p(this, "_batch", void 0), p(this, "set", (e, t) => {
                        this.checkRefCount_INTERNAL();
                        let n = this.getStore_INTERNAL();
                        this._batch(() => {
                            tR(n, e.key, 1), tS(this.getStore_INTERNAL(), e, t)
                        })
                    }), p(this, "reset", e => {
                        this.checkRefCount_INTERNAL();
                        let t = this.getStore_INTERNAL();
                        this._batch(() => {
                            tR(t, e.key, 1), tS(this.getStore_INTERNAL(), e, tp)
                        })
                    }), p(this, "setUnvalidatedAtomValues_DEPRECATED", e => {
                        this.checkRefCount_INTERNAL();
                        let t = this.getStore_INTERNAL();
                        tu(() => {
                            for (let [n, r] of e.entries()) tR(t, n, 1), tg(t, new ty(n), r)
                        })
                    }), this._batch = t
                }
            }
            var tM = {
                    Snapshot: tN,
                    MutableSnapshot: tC,
                    freshSnapshot: function(e) {
                        let t = new tN(tw());
                        return null != e ? t.map(e) : t
                    },
                    cloneSnapshot: function(e, t = "latest") {
                        let n = tL(e, t);
                        return n.isRetained() ? n : (tV(), tL(e, t))
                    }
                },
                tU = Object.freeze({
                    __proto__: null,
                    Snapshot: tM.Snapshot,
                    MutableSnapshot: tM.MutableSnapshot,
                    freshSnapshot: tM.freshSnapshot,
                    cloneSnapshot: tM.cloneSnapshot
                }),
                tI = function(...e) {
                    let t = new Set;
                    for (let n of e)
                        for (let e of n) t.add(e);
                    return t
                };
            let {
                useRef: tB
            } = s;
            var tD = function(e) {
                let t = tB(e);
                return t.current === e && "function" == typeof e && (t.current = e()), t
            };
            let {
                getNextTreeStateVersion: tO,
                makeEmptyStoreState: tP
            } = ep, {
                cleanUpNode: tx,
                getDownstreamNodes: tz,
                initializeNode: tF,
                setNodeValue: tG,
                setUnvalidatedAtomValue_DEPRECATED: tW
            } = eV, {
                graph: t$
            } = ei, {
                cloneGraph: tK
            } = ei, {
                getNextStoreID: tj
            } = eu, {
                createMutableSource: tH,
                reactMode: tq
            } = I, {
                applyAtomValueWrites: tZ
            } = eQ, {
                releaseScheduledRetainablesNow: tY
            } = e7, {
                freshSnapshot: tJ
            } = tU, {
                useCallback: tX,
                useContext: tQ,
                useEffect: t0,
                useMemo: t1,
                useRef: t2,
                useState: t5
            } = s;

            function t3() {
                throw d("This component must be used inside a <RecoilRoot> component.")
            }
            let t4 = Object.freeze({
                    storeID: tj(),
                    getState: t3,
                    replaceState: t3,
                    getGraph: t3,
                    subscribeToTransactions: t3,
                    addTransactionMetadata: t3
                }),
                t8 = !1;

            function t9(e) {
                if (t8) throw d("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
                let t = e.getState();
                if (null === t.nextTree) {
                    k("recoil_memory_managament_2020") && k("recoil_release_on_cascading_update_killswitch_2021") && t.commitDepth > 0 && tY(e);
                    let n = t.currentTree.version,
                        r = tO();
                    t.nextTree = { ...t.currentTree,
                        version: r,
                        stateID: r,
                        dirtyAtoms: new Set,
                        transactionMetadata: {}
                    }, t.graphsByVersion.set(r, tK(h(t.graphsByVersion.get(n))))
                }
            }
            let t6 = s.createContext({
                    current: t4
                }),
                t7 = () => tQ(t6),
                ne = s.createContext(null);

            function nt(e, t, n) {
                for (let r of tz(e, n, n.dirtyAtoms)) {
                    let e = t.nodeToComponentSubscriptions.get(r);
                    if (e)
                        for (let [t, [r, o]] of e) o(n)
                }
            }

            function nn(e) {
                let t = e.getState(),
                    n = t.currentTree,
                    r = n.dirtyAtoms;
                if (r.size) {
                    for (let [n, o] of t.nodeTransactionSubscriptions)
                        if (r.has(n))
                            for (let [t, n] of o) n(e);
                    for (let [n, r] of t.transactionSubscriptions) r(e);
                    (!tq().early || t.suspendedComponentResolvers.size > 0) && (nt(e, t, n), t.suspendedComponentResolvers.forEach(e => e()), t.suspendedComponentResolvers.clear())
                }
                t.queuedComponentCallbacks_DEPRECATED.forEach(e => e(n)), t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length)
            }

            function nr({
                setNotifyBatcherOfChange: e
            }) {
                let t = t7(),
                    [, n] = t5([]);
                return e(() => n({})), t0(() => (e(() => n({})), () => {
                    e(() => {})
                }), [e]), t0(() => {
                    var e;
                    (function(e) {
                        let t = e.getState();
                        t.commitDepth++;
                        try {
                            let {
                                nextTree: n
                            } = t;
                            if (null == n) return;
                            t.previousTree = t.currentTree, t.currentTree = n, t.nextTree = null, nn(e), null != t.previousTree ? t.graphsByVersion.delete(t.previousTree.version) : L("Ended batch with no previous state, which is unexpected", "recoil"), t.previousTree = null, k("recoil_memory_managament_2020") && null == n && tY(e)
                        } finally {
                            t.commitDepth--
                        }
                    })(t.current)
                }), null
            }
            let no = 0;

            function ni({
                initializeState_DEPRECATED: e,
                initializeState: t,
                store_INTERNAL: n,
                children: r
            }) {
                let o;
                let i = e => {
                        let t = o.current.graphsByVersion;
                        if (t.has(e)) return h(t.get(e));
                        let n = t$();
                        return t.set(e, n), n
                    },
                    a = (e, t) => {
                        if (null == t) {
                            let {
                                transactionSubscriptions: t
                            } = f.current.getState(), n = no++;
                            return t.set(n, e), {
                                release: () => {
                                    t.delete(n)
                                }
                            }
                        } {
                            let {
                                nodeTransactionSubscriptions: n
                            } = f.current.getState();
                            n.has(t) || n.set(t, new Map);
                            let r = no++;
                            return h(n.get(t)).set(r, e), {
                                release: () => {
                                    let e = n.get(t);
                                    e && (e.delete(r), 0 === e.size && n.delete(t))
                                }
                            }
                        }
                    },
                    l = e => {
                        for (let t of (t9(f.current), Object.keys(e))) h(f.current.getState().nextTree).transactionMetadata[t] = e[t]
                    },
                    u = e => {
                        let t;
                        t9(f.current);
                        let n = h(o.current.nextTree);
                        try {
                            t8 = !0, t = e(n)
                        } finally {
                            t8 = !1
                        }
                        t !== n && (o.current.nextTree = t, tq().early && nt(f.current, o.current, t), h(c.current)())
                    },
                    c = t2(null),
                    d = tX(e => {
                        c.current = e
                    }, [c]),
                    f = tD(() => null != n ? n : {
                        storeID: tj(),
                        getState: () => o.current,
                        replaceState: u,
                        getGraph: i,
                        subscribeToTransactions: a,
                        addTransactionMetadata: l
                    });
                null != n && (f.current = n);
                let p = t1(() => null == tH ? void 0 : tH(o, () => o.current.currentTree.version), [o = tD(() => null != e ? function(e, t) {
                    let n = tP();
                    return t({
                        set: (t, r) => {
                            let o = n.currentTree,
                                i = tG(e, o, t.key, r),
                                a = new Set(i.keys()),
                                l = o.nonvalidatedAtoms.clone();
                            for (let e of a) l.delete(e);
                            n.currentTree = { ...o,
                                dirtyAtoms: tI(o.dirtyAtoms, a),
                                atomValues: tZ(o.atomValues, i),
                                nonvalidatedAtoms: l
                            }
                        },
                        setUnvalidatedAtomValues: e => {
                            e.forEach((e, t) => {
                                n.currentTree = tW(n.currentTree, t, e)
                            })
                        }
                    }), n
                }(f.current, e) : null != t ? function(e) {
                    let t = tJ(e),
                        n = t.getStore_INTERNAL().getState();
                    return t.retain(), n.nodeCleanupFunctions.forEach(e => e()), n.nodeCleanupFunctions.clear(), n
                }(t) : tP())]);
                return t0(() => {
                    let e = f.current;
                    for (let t of new Set(e.getState().knownAtoms)) tF(e, t, "get");
                    return () => {
                        for (let t of e.getState().knownAtoms) tx(e, t)
                    }
                }, [f]), s.createElement(t6.Provider, {
                    value: f
                }, s.createElement(ne.Provider, {
                    value: p
                }, s.createElement(nr, {
                    setNotifyBatcherOfChange: d
                }), r))
            }
            var na = {
                    RecoilRoot: function(e) {
                        let {
                            override: t,
                            ...n
                        } = e, r = t7();
                        return !1 === t && r.current !== t4 ? e.children : s.createElement(ni, n)
                    },
                    useStoreRef: t7,
                    useRecoilMutableSource: function() {
                        let e = tQ(ne);
                        return null == e && z("Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."), e
                    },
                    useRecoilStoreID: function() {
                        return t7().current.storeID
                    },
                    notifyComponents_FOR_TESTING: nt,
                    sendEndOfBatchNotifications_FOR_TESTING: nn
                },
                nl = function(e, t) {
                    if (e === t) return !0;
                    if (e.length !== t.length) return !1;
                    for (let n = 0, r = e.length; n < r; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
                };
            let {
                useEffect: ns,
                useRef: nu
            } = s;
            var nc = function(e) {
                let t = nu();
                return ns(() => {
                    t.current = e
                }), t.current
            };
            let {
                useStoreRef: nd
            } = na, {
                SUSPENSE_TIMEOUT_MS: nf
            } = e7, {
                updateRetainCount: nh
            } = e7, {
                RetentionZone: np
            } = e_, {
                useEffect: nv,
                useRef: n_
            } = s, {
                isSSR: ny
            } = ts;
            var nm = function(e) {
                    if (k("recoil_memory_managament_2020")) return function(e) {
                        let t = (Array.isArray(e) ? e : [e]).map(e => e instanceof np ? e : e.key),
                            n = nd();
                        nv(() => {
                            if (!k("recoil_memory_managament_2020")) return;
                            let e = n.current;
                            if (r.current && !ny) window.clearTimeout(r.current), r.current = null;
                            else
                                for (let n of t) nh(e, n, 1);
                            return () => {
                                for (let n of t) nh(e, n, -1)
                            }
                        }, [n, ...t]);
                        let r = n_(),
                            o = nc(t);
                        if (!ny && (void 0 === o || !nl(o, t))) {
                            let e = n.current;
                            for (let n of t) nh(e, n, 1);
                            if (o)
                                for (let t of o) nh(e, t, -1);
                            r.current && window.clearTimeout(r.current), r.current = window.setTimeout(() => {
                                for (let n of (r.current = null, t)) nh(e, n, -1)
                            }, nf)
                        }
                    }(e)
                },
                nS = function() {
                    return "<component name not available>"
                };
            let {
                batchUpdates: ng
            } = ti, {
                DEFAULT_VALUE: nR
            } = Y, {
                currentRendererSupportsUseSyncExternalStore: nT,
                reactMode: nb,
                useMutableSource: nw,
                useSyncExternalStore: nA
            } = I, {
                useRecoilMutableSource: nE,
                useStoreRef: nN
            } = na, {
                isRecoilValue: nk
            } = x, {
                AbstractRecoilValue: nL,
                getRecoilValueAsLoadable: nV,
                setRecoilValue: nC,
                setUnvalidatedRecoilValue: nM,
                subscribeToRecoilValue: nU
            } = eQ, {
                useCallback: nI,
                useEffect: nB,
                useMemo: nD,
                useRef: nO,
                useState: nP
            } = s, {
                setByAddingToSet: nx
            } = ey, {
                isSSR: nz
            } = ts;

            function nF(e, t, n) {
                if ("hasValue" === e.state) return e.contents;
                if ("loading" === e.state) throw new Promise(t => {
                    let r = n.current.getState().suspendedComponentResolvers;
                    r.add(t), nz && f(e.contents) && e.contents.finally(() => {
                        r.delete(t)
                    })
                });
                if ("hasError" === e.state) throw e.contents;
                throw d(`Invalid value of loadable atom "${t.key}"`)
            }

            function nG(e) {
                let t = nN(),
                    n = nS(),
                    r = nI(() => {
                        var n;
                        let r = t.current,
                            o = r.getState();
                        return {
                            loadable: nV(r, e, nb().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree),
                            key: e.key
                        }
                    }, [t, e]),
                    o = nI(e => {
                        let t;
                        return () => {
                            var n, r;
                            let o = e();
                            return null !== (n = t) && void 0 !== n && n.loadable.is(o.loadable) && (null === (r = t) || void 0 === r ? void 0 : r.key) === o.key ? t : (t = o, o)
                        }
                    }, []),
                    i = nD(() => o(r), [r, o]);
                return nA(nI(r => nU(t.current, e, r, n).release, [t, e, n]), i, i).loadable
            }

            function nW(e) {
                let t = nN(),
                    n = nI(() => {
                        var n;
                        let r = t.current,
                            o = r.getState();
                        return nV(r, e, nb().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree)
                    }, [t, e]),
                    r = nI(() => n(), [n]),
                    o = nS(),
                    i = nI((r, i) => nU(t.current, e, () => {
                        if (!k("recoil_suppress_rerender_in_callback")) return i();
                        let e = n();
                        s.current.is(e) || i(), s.current = e
                    }, o).release, [t, e, o, n]),
                    a = nE();
                if (null == a) throw d("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
                let l = nw(a, r, i),
                    s = nO(l);
                return nB(() => {
                    s.current = l
                }), l
            }

            function n$(e) {
                let t = nN(),
                    n = nS(),
                    r = nI(() => {
                        var n;
                        let r = t.current,
                            o = r.getState();
                        return nV(r, e, nb().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree)
                    }, [t, e]),
                    o = nI(() => ({
                        loadable: r(),
                        key: e.key
                    }), [r, e.key]),
                    i = nI(e => {
                        let t = o();
                        return e.loadable.is(t.loadable) && e.key === t.key ? e : t
                    }, [o]);
                nB(() => {
                    let r = nU(t.current, e, e => {
                        l(i)
                    }, n);
                    return l(i), r.release
                }, [n, e, t, i]);
                let [a, l] = nP(o);
                return a.key !== e.key ? o().loadable : a.loadable
            }

            function nK(e) {
                let t = nN(),
                    [, n] = nP([]),
                    r = nS(),
                    o = nI(() => {
                        var n;
                        let r = t.current,
                            o = r.getState();
                        return nV(r, e, nb().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree)
                    }, [t, e]),
                    i = o(),
                    a = nO(i);
                return nB(() => {
                    a.current = i
                }), nB(() => {
                    let i = t.current,
                        l = i.getState(),
                        s = nU(i, e, e => {
                            var t;
                            if (!k("recoil_suppress_rerender_in_callback")) return n([]);
                            let r = o();
                            null !== (t = a.current) && void 0 !== t && t.is(r) || n(r), a.current = r
                        }, r);
                    if (l.nextTree) i.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                        a.current = null, n([])
                    });
                    else {
                        var u;
                        if (!k("recoil_suppress_rerender_in_callback")) return n([]);
                        let e = o();
                        null !== (u = a.current) && void 0 !== u && u.is(e) || n(e), a.current = e
                    }
                    return s.release
                }, [r, o, e, t]), i
            }

            function nj(e) {
                return k("recoil_memory_managament_2020") && nm(e), ({
                    TRANSITION_SUPPORT: n$,
                    SYNC_EXTERNAL_STORE: nT() ? nG : n$,
                    MUTABLE_SOURCE: nW,
                    LEGACY: nK
                })[nb().mode](e)
            }

            function nH(e) {
                let t = nN();
                return nF(nj(e), e, t)
            }

            function nq(e) {
                let t = nN();
                return nI(n => {
                    nC(t.current, e, n)
                }, [t, e])
            }

            function nZ(e) {
                return k("recoil_memory_managament_2020") && nm(e), n$(e)
            }

            function nY(e) {
                let t = nN();
                return nF(nZ(e), e, t)
            }
            var nJ = function(e, t) {
                    let n = new Map;
                    for (let [r, o] of e) t(o, r) && n.set(r, o);
                    return n
                },
                nX = function(e, t) {
                    let n = new Set;
                    for (let r of e) t(r) && n.add(r);
                    return n
                },
                nQ = function(...e) {
                    let t = new Map;
                    for (let n = 0; n < e.length; n++) {
                        let r;
                        let o = e[n].keys();
                        for (; !(r = o.next()).done;) t.set(r.value, e[n].get(r.value))
                    }
                    return t
                };
            let {
                batchUpdates: n0
            } = ti, {
                DEFAULT_VALUE: n1,
                getNode: n2,
                nodes: n5
            } = Y, {
                useStoreRef: n3
            } = na, {
                AbstractRecoilValue: n4,
                setRecoilValueLoadable: n8
            } = eQ, {
                SUSPENSE_TIMEOUT_MS: n9
            } = e7, {
                cloneSnapshot: n6
            } = tU, {
                useCallback: n7,
                useEffect: re,
                useRef: rt,
                useState: rn
            } = s, {
                isSSR: rr
            } = ts;

            function ro(e) {
                let t = n3();
                re(() => t.current.subscribeToTransactions(e).release, [e, t])
            }

            function ri(e) {
                let t = er(nJ(e.atomValues.toMap(), (e, t) => {
                    let n = n2(t).persistence_UNSTABLE;
                    return null != n && "none" !== n.type && "hasValue" === e.state
                }), e => e.contents);
                return nQ(e.nonvalidatedAtoms.toMap(), t)
            }

            function ra(e, t) {
                var n;
                let r = e.getState(),
                    o = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
                    i = t.getStore_INTERNAL().getState().currentTree;
                n0(() => {
                    let n = new Set;
                    for (let e of [o.atomValues.keys(), i.atomValues.keys()])
                        for (let t of e) {
                            var r, a;
                            (null === (r = o.atomValues.get(t)) || void 0 === r ? void 0 : r.contents) !== (null === (a = i.atomValues.get(t)) || void 0 === a ? void 0 : a.contents) && n2(t).shouldRestoreFromSnapshots && n.add(t)
                        }
                    n.forEach(t => {
                        n8(e, new n4(t), i.atomValues.has(t) ? h(i.atomValues.get(t)) : n1)
                    }), e.replaceState(e => ({ ...e,
                        stateID: t.getID()
                    }))
                })
            }
            var rl = {
                useRecoilSnapshot: function() {
                    let e = n3(),
                        [t, n] = rn(() => n6(e.current)),
                        r = nc(t),
                        o = rt(),
                        i = rt();
                    if (ro(n7(e => n(n6(e)), [])), re(() => {
                            let e = t.retain();
                            if (o.current && !rr) {
                                var n;
                                window.clearTimeout(o.current), o.current = null, null === (n = i.current) || void 0 === n || n.call(i), i.current = null
                            }
                            return () => {
                                window.setTimeout(e, 10)
                            }
                        }, [t]), r !== t && !rr) {
                        if (o.current) {
                            var a;
                            window.clearTimeout(o.current), o.current = null, null === (a = i.current) || void 0 === a || a.call(i), i.current = null
                        }
                        i.current = t.retain(), o.current = window.setTimeout(() => {
                            var e;
                            o.current = null, null === (e = i.current) || void 0 === e || e.call(i), i.current = null
                        }, n9)
                    }
                    return t
                },
                gotoSnapshot: ra,
                useGotoRecoilSnapshot: function() {
                    let e = n3();
                    return n7(t => ra(e.current, t), [e])
                },
                useRecoilTransactionObserver: function(e) {
                    ro(n7(t => {
                        e({
                            snapshot: n6(t, "latest"),
                            previousSnapshot: n6(t, "previous")
                        })
                    }, [e]))
                },
                useTransactionObservation_DEPRECATED: function(e) {
                    ro(n7(t => {
                        let n = t.getState().previousTree,
                            r = t.getState().currentTree;
                        n || (L("Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"), n = t.getState().currentTree);
                        let o = ri(r),
                            i = ri(n),
                            a = er(n5, e => {
                                var t, n, r, o;
                                return {
                                    persistence_UNSTABLE: {
                                        type: null !== (t = null === (n = e.persistence_UNSTABLE) || void 0 === n ? void 0 : n.type) && void 0 !== t ? t : "none",
                                        backButton: null !== (r = null === (o = e.persistence_UNSTABLE) || void 0 === o ? void 0 : o.backButton) && void 0 !== r && r
                                    }
                                }
                            }),
                            l = nX(r.dirtyAtoms, e => o.has(e) || i.has(e));
                        e({
                            atomValues: o,
                            previousAtomValues: i,
                            atomInfo: a,
                            modifiedAtoms: l,
                            transactionMetadata: { ...r.transactionMetadata
                            }
                        })
                    }, [e]))
                },
                useTransactionSubscription_DEPRECATED: ro
            };
            let {
                peekNodeInfo: rs
            } = eV, {
                useStoreRef: ru
            } = na, {
                reactMode: rc
            } = I, {
                RecoilRoot: rd,
                useStoreRef: rf
            } = na, {
                useMemo: rh
            } = s, {
                loadableWithValue: rp
            } = E, {
                initializeNode: rv
            } = eV, {
                DEFAULT_VALUE: r_,
                getNode: ry
            } = Y, {
                copyTreeState: rm,
                getRecoilValueAsLoadable: rS,
                invalidateDownstreams: rg,
                writeLoadableToTreeState: rR
            } = eQ;

            function rT(e) {
                return "atom" === ry(e.key).nodeType
            }
            class rb {
                constructor(e, t) {
                    p(this, "_store", void 0), p(this, "_treeState", void 0), p(this, "_changes", void 0), p(this, "get", e => {
                        if (this._changes.has(e.key)) return this._changes.get(e.key);
                        if (!rT(e)) throw d("Reading selectors within atomicUpdate is not supported");
                        let t = rS(this._store, e, this._treeState);
                        if ("hasValue" === t.state) return t.contents;
                        if ("hasError" === t.state) throw t.contents;
                        throw d(`Expected Recoil atom ${e.key} to have a value, but it is in a loading state.`)
                    }), p(this, "set", (e, t) => {
                        if (!rT(e)) throw d("Setting selectors within atomicUpdate is not supported");
                        if ("function" == typeof t) {
                            let n = this.get(e);
                            this._changes.set(e.key, t(n))
                        } else rv(this._store, e.key, "set"), this._changes.set(e.key, t)
                    }), p(this, "reset", e => {
                        this.set(e, r_)
                    }), this._store = e, this._treeState = t, this._changes = new Map
                }
                newTreeState_INTERNAL() {
                    if (0 === this._changes.size) return this._treeState;
                    let e = rm(this._treeState);
                    for (let [t, n] of this._changes) rR(e, t, rp(n));
                    return rg(this._store, e), e
                }
            }
            var rw = Object.freeze({
                    __proto__: null,
                    atomicUpdater: function(e) {
                        return t => {
                            e.replaceState(n => {
                                let r = new rb(e, n);
                                return t(r), r.newTreeState_INTERNAL()
                            })
                        }
                    }
                }),
                rA = function(e, t) {
                    if (!e) throw Error(t)
                };
            let {
                atomicUpdater: rE
            } = rw, {
                batchUpdates: rN
            } = ti, {
                DEFAULT_VALUE: rk
            } = Y, {
                useStoreRef: rL
            } = na, {
                refreshRecoilValue: rV,
                setRecoilValue: rC
            } = eQ, {
                cloneSnapshot: rM
            } = tU, {
                gotoSnapshot: rU
            } = rl, {
                useCallback: rI
            } = s;
            class rB {}
            let rD = new rB;

            function rO(e, t, n, r) {
                let o, i = rD;
                if (rN(() => {
                        let a = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
                        if ("function" != typeof t) throw d(a);
                        let l = t(eS({ ...null != r ? r : {},
                            set: (t, n) => rC(e, t, n),
                            reset: t => rC(e, t, rk),
                            refresh: t => rV(e, t),
                            gotoSnapshot: t => rU(e, t),
                            transact_UNSTABLE: t => rE(e)(t)
                        }, {
                            snapshot: () => {
                                let t = rM(e);
                                return o = t.retain(), t
                            }
                        }));
                        if ("function" != typeof l) throw d(a);
                        i = l(...n)
                    }), i instanceof rB && rA(!1), f(i)) i = i.finally(() => {
                    var e;
                    null === (e = o) || void 0 === e || e()
                });
                else {
                    var a;
                    null === (a = o) || void 0 === a || a()
                }
                return i
            }
            var rP = {
                recoilCallback: rO,
                useRecoilCallback: function(e, t) {
                    let n = rL();
                    return rI((...t) => rO(n.current, e, t), null != t ? [...t, n] : void 0)
                }
            };
            let {
                useStoreRef: rx
            } = na, {
                refreshRecoilValue: rz
            } = eQ, {
                useCallback: rF
            } = s, {
                atomicUpdater: rG
            } = rw, {
                useStoreRef: rW
            } = na, {
                useMemo: r$
            } = s;
            class rK {
                constructor(e) {
                    p(this, "value", void 0), this.value = e
                }
            }
            var rj = Object.freeze({
                __proto__: null,
                WrappedValue: {
                    WrappedValue: rK
                }.WrappedValue
            });
            let {
                isFastRefreshEnabled: rH
            } = I;
            class rq extends Error {}
            class rZ {
                constructor(e) {
                    var t, n, r;
                    p(this, "_name", void 0), p(this, "_numLeafs", void 0), p(this, "_root", void 0), p(this, "_onHit", void 0), p(this, "_onSet", void 0), p(this, "_mapNodeValue", void 0), this._name = null == e ? void 0 : e.name, this._numLeafs = 0, this._root = null, this._onHit = null !== (t = null == e ? void 0 : e.onHit) && void 0 !== t ? t : () => {}, this._onSet = null !== (n = null == e ? void 0 : e.onSet) && void 0 !== n ? n : () => {}, this._mapNodeValue = null !== (r = null == e ? void 0 : e.mapNodeValue) && void 0 !== r ? r : e => e
                }
                size() {
                    return this._numLeafs
                }
                root() {
                    return this._root
                }
                get(e, t) {
                    var n;
                    return null === (n = this.getLeafNode(e, t)) || void 0 === n ? void 0 : n.value
                }
                getLeafNode(e, t) {
                    if (null == this._root) return;
                    let n = this._root;
                    for (; n;) {
                        if (null == t || t.onNodeVisit(n), "leaf" === n.type) return this._onHit(n), n;
                        let r = this._mapNodeValue(e(n.nodeKey));
                        n = n.branches.get(r)
                    }
                }
                set(e, t, n) {
                    let r = () => {
                        var r, o, i, a, l, s, u;
                        let c, d;
                        for (let [t, r] of e) {
                            let e = this._root;
                            if ((null == e ? void 0 : e.type) === "leaf") throw this.invalidCacheError();
                            let o = c;
                            if ("branch" !== (c = null !== (l = c = o ? o.branches.get(d) : e) && void 0 !== l ? l : {
                                    type: "branch",
                                    nodeKey: t,
                                    parent: o,
                                    branches: new Map,
                                    branchKey: d
                                }).type || c.nodeKey !== t) throw this.invalidCacheError();
                            null == o || o.branches.set(d, c), null == n || null === (s = n.onNodeVisit) || void 0 === s || s.call(n, c), d = this._mapNodeValue(r), this._root = null !== (u = this._root) && void 0 !== u ? u : c
                        }
                        let f = c ? null === (r = c) || void 0 === r ? void 0 : r.branches.get(d) : this._root;
                        if (null != f && ("leaf" !== f.type || f.branchKey !== d)) throw this.invalidCacheError();
                        let h = {
                            type: "leaf",
                            value: t,
                            parent: c,
                            branchKey: d
                        };
                        null === (o = c) || void 0 === o || o.branches.set(d, h), this._root = null !== (i = this._root) && void 0 !== i ? i : h, this._numLeafs++, this._onSet(h), null == n || null === (a = n.onNodeVisit) || void 0 === a || a.call(n, h)
                    };
                    try {
                        r()
                    } catch (e) {
                        if (e instanceof rq) this.clear(), r();
                        else throw e
                    }
                }
                delete(e) {
                    let t = this.root();
                    if (!t) return !1;
                    if (e === t) return this._root = null, this._numLeafs = 0, !0;
                    let n = e.parent,
                        r = e.branchKey;
                    for (; n;) {
                        var o;
                        if (n.branches.delete(r), n === t) return 0 === n.branches.size ? (this._root = null, this._numLeafs = 0) : this._numLeafs--, !0;
                        if (n.branches.size > 0) break;
                        r = null === (o = n) || void 0 === o ? void 0 : o.branchKey, n = n.parent
                    }
                    for (; n !== t; n = n.parent)
                        if (null == n) return !1;
                    return this._numLeafs--, !0
                }
                clear() {
                    this._numLeafs = 0, this._root = null
                }
                invalidCacheError() {
                    throw L((rH() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.") + (null != this._name ? ` - ${this._name}` : "")), new rq
                }
            }
            var rY = Object.freeze({
                __proto__: null,
                TreeCache: {
                    TreeCache: rZ
                }.TreeCache
            });
            class rJ {
                constructor(e) {
                    var t;
                    p(this, "_maxSize", void 0), p(this, "_size", void 0), p(this, "_head", void 0), p(this, "_tail", void 0), p(this, "_map", void 0), p(this, "_keyMapper", void 0), this._maxSize = e.maxSize, this._size = 0, this._head = null, this._tail = null, this._map = new Map, this._keyMapper = null !== (t = e.mapKey) && void 0 !== t ? t : e => e
                }
                head() {
                    return this._head
                }
                tail() {
                    return this._tail
                }
                size() {
                    return this._size
                }
                maxSize() {
                    return this._maxSize
                }
                has(e) {
                    return this._map.has(this._keyMapper(e))
                }
                get(e) {
                    let t = this._keyMapper(e),
                        n = this._map.get(t);
                    if (n) return this.set(e, n.value), n.value
                }
                set(e, t) {
                    let n = this._keyMapper(e);
                    this._map.get(n) && this.delete(e);
                    let r = this.head(),
                        o = {
                            key: e,
                            right: r,
                            left: null,
                            value: t
                        };
                    r ? r.left = o : this._tail = o, this._map.set(n, o), this._head = o, this._size++, this._maybeDeleteLRU()
                }
                _maybeDeleteLRU() {
                    this.size() > this.maxSize() && this.deleteLru()
                }
                deleteLru() {
                    let e = this.tail();
                    e && this.delete(e.key)
                }
                delete(e) {
                    let t = this._keyMapper(e);
                    if (!this._size || !this._map.has(t)) return;
                    let n = h(this._map.get(t)),
                        r = n.right,
                        o = n.left;
                    r && (r.left = n.left), o && (o.right = n.right), n === this.head() && (this._head = r), n === this.tail() && (this._tail = o), this._map.delete(t), this._size--
                }
                clear() {
                    this._size = 0, this._head = null, this._tail = null, this._map = new Map
                }
            }
            var rX = Object.freeze({
                __proto__: null,
                LRUCache: {
                    LRUCache: rJ
                }.LRUCache
            });
            let {
                LRUCache: rQ
            } = rX, {
                TreeCache: r0
            } = rY;
            var r1 = function({
                    name: e,
                    maxSize: t,
                    mapNodeValue: n = e => e
                }) {
                    let r = new rQ({
                            maxSize: t
                        }),
                        o = new r0({
                            name: e,
                            mapNodeValue: n,
                            onHit: e => {
                                r.set(e, !0)
                            },
                            onSet: e => {
                                let n = r.tail();
                                r.set(e, !0), n && o.size() > t && o.delete(n.key)
                            }
                        });
                    return o
                },
                r2 = function(e, t = {
                    allowFunctions: !1
                }) {
                    return function e(t, n, r) {
                        if ("string" == typeof t && !t.includes('"') && !t.includes("\\")) return `"${t}"`;
                        switch (typeof t) {
                            case "undefined":
                                return "";
                            case "boolean":
                                return t ? "true" : "false";
                            case "number":
                            case "symbol":
                                return String(t);
                            case "string":
                                return JSON.stringify(t);
                            case "function":
                                if ((null == n ? void 0 : n.allowFunctions) !== !0) throw d("Attempt to serialize function in a Recoil cache key");
                                return `__FUNCTION(${t.name})__`
                        }
                        if (null === t) return "null";
                        if ("object" != typeof t) {
                            var o;
                            return null !== (o = JSON.stringify(t)) && void 0 !== o ? o : ""
                        }
                        if (f(t)) return "__PROMISE__";
                        if (Array.isArray(t)) return `[${t.map((t,r)=>e(t,n,r.toString()))}]`;
                        if ("function" == typeof t.toJSON) return e(t.toJSON(r), n, r);
                        if (t instanceof Map) {
                            let o = {};
                            for (let [r, i] of t) o["string" == typeof r ? r : e(r, n)] = i;
                            return e(o, n, r)
                        }
                        return t instanceof Set ? e(Array.from(t).sort((t, r) => e(t, n).localeCompare(e(r, n))), n, r) : void 0 !== Symbol && null != t[Symbol.iterator] && "function" == typeof t[Symbol.iterator] ? e(Array.from(t), n, r) : `{${Object.keys(t).filter(e=>void 0!==t[e]).sort().map(r=>`${e(r,n)}:${e(t[r],n,r)}`).join(",")}}`
                    }(e, t)
                };
            let {
                TreeCache: r5
            } = rY, r3 = {
                equality: "reference",
                eviction: "keep-all",
                maxSize: 1 / 0
            }, {
                isReactNative: r4,
                isWindow: r8
            } = ts, {
                isLoadable: r9,
                loadableWithError: r6,
                loadableWithPromise: r7,
                loadableWithValue: oe
            } = E, {
                WrappedValue: ot
            } = rj, {
                getNodeLoadable: on,
                peekNodeLoadable: or,
                setNodeValue: oo
            } = eV, {
                saveDepsToStore: oi
            } = ei, {
                DEFAULT_VALUE: oa,
                getConfigDeletionHandler: ol,
                getNode: os,
                registerNode: ou
            } = Y, {
                isRecoilValue: oc
            } = x, {
                markRecoilValueModified: od
            } = eQ, {
                retainedByOptionWithDefault: of
            } = e7, {
                recoilCallback: oh
            } = rP, {
                startPerfBlock: op
            } = {
                startPerfBlock: function(e) {
                    return () => null
                }
            };
            class ov {}
            let o_ = new ov,
                oy = [],
                om = new Map,
                oS = (r = 0, () => r++);

            function og(e) {
                let t = null,
                    {
                        key: n,
                        get: r,
                        cachePolicy_UNSTABLE: o
                    } = e,
                    i = null != e.set ? e.set : void 0,
                    a = new Set,
                    l = function({
                        equality: e = r3.equality,
                        eviction: t = r3.eviction,
                        maxSize: n = r3.maxSize
                    } = r3, r) {
                        return function(e, t, n, r) {
                            switch (e) {
                                case "keep-all":
                                    return new r5({
                                        name: r,
                                        mapNodeValue: n
                                    });
                                case "lru":
                                    return r1({
                                        name: r,
                                        maxSize: h(t),
                                        mapNodeValue: n
                                    });
                                case "most-recent":
                                    return r1({
                                        name: r,
                                        maxSize: 1,
                                        mapNodeValue: n
                                    })
                            }
                            throw d(`Unrecognized eviction policy ${e}`)
                        }(t, n, function(e) {
                            switch (e) {
                                case "reference":
                                    return e => e;
                                case "value":
                                    return e => r2(e)
                            }
                            throw d(`Unrecognized equality policy ${e}`)
                        }(e), r)
                    }(null != o ? o : {
                        equality: "reference",
                        eviction: "keep-all"
                    }, n),
                    s = of (e.retainedBy_UNSTABLE),
                    u = new Map,
                    c = 0;

                function p() {
                    return !k("recoil_memory_managament_2020") || c > 0
                }

                function v(e) {
                    return e.getState().knownSelectors.add(n), c++, () => {
                        c--
                    }
                }

                function _() {
                    return void 0 !== ol(n) && !p()
                }

                function y(e, t) {
                    N(e, t) && E(e), m(t, !0)
                }

                function m(e, n) {
                    let r = om.get(e);
                    if (null != r) {
                        for (let e of r) od(e, h(t));
                        n && om.delete(e)
                    }
                }

                function S(e, t) {
                    let n = om.get(t);
                    null == n && om.set(t, n = new Set), n.add(e)
                }

                function g(e, t, n, r, o, i) {
                    return t.then(r => {
                        if (!p()) throw E(e), o_;
                        null != i.loadingDepKey && i.loadingDepPromise === t ? n.atomValues.set(i.loadingDepKey, oe(r)) : e.getState().knownSelectors.forEach(e => {
                            n.atomValues.delete(e)
                        });
                        let a = b(e, n);
                        if (a && "loading" !== a.state) {
                            if ((N(e, o) || null == A(e)) && y(e, o), "hasValue" === a.state) return a.contents;
                            throw a.contents
                        }
                        if (!N(e, o)) {
                            let t = w(e, n);
                            if (null != t) return t.loadingLoadable.contents
                        }
                        let [l, s] = T(e, n, o);
                        if ("loading" !== l.state && (V(n, l, s), y(e, o)), "hasError" === l.state) throw l.contents;
                        return l.contents
                    }).catch(t => {
                        if (t instanceof ov) throw o_;
                        if (!p()) throw E(e), o_;
                        throw V(n, r6(t), r), y(e, o), t
                    })
                }

                function R(e, t, r, o) {
                    var i, l, s, u, c, d, f;
                    for (let h of ((N(e, o) || t.version === (null === (i = e.getState()) || void 0 === i ? void 0 : null === (l = i.currentTree) || void 0 === l ? void 0 : l.version) || t.version === (null === (s = e.getState()) || void 0 === s ? void 0 : null === (u = s.nextTree) || void 0 === u ? void 0 : u.version)) && oi(n, r, e, null !== (c = null === (d = e.getState()) || void 0 === d ? void 0 : null === (f = d.nextTree) || void 0 === f ? void 0 : f.version) && void 0 !== c ? c : e.getState().currentTree.version), r)) a.add(h)
                }

                function T(e, o, i) {
                    let a, l;
                    let s = op(n),
                        u = !0,
                        c = !0,
                        v = () => {
                            s(), c = !1
                        },
                        _ = !1,
                        S = {
                            loadingDepKey: null,
                            loadingDepPromise: null
                        },
                        T = new Map;

                    function b({
                        key: t
                    }) {
                        let n = on(e, o, t);
                        switch (T.set(t, n), !u && (R(e, o, new Set(T.keys()), i), N(e, i) && (h(A(e)).stateVersions.clear(), m(i, !1))), n.state) {
                            case "hasValue":
                                return n.contents;
                            case "hasError":
                                throw n.contents;
                            case "loading":
                                throw S.loadingDepKey = t, S.loadingDepPromise = n.contents, n.contents
                        }
                        throw d("Invalid Loadable state")
                    }
                    try {
                        (a = r({
                            get: b,
                            getCallback: n => (...r) => {
                                if (c) throw d("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
                                return null != t || rA(!1), oh(e, n, r, {
                                    node: t
                                })
                            }
                        }), a = oc(a) ? b(a) : a, r9(a) && ("hasError" === a.state && (_ = !0), a = a.contents), f(a)) ? a = a.then(t => {
                            if (!p()) throw E(e), o_;
                            let n = oe(t);
                            return V(o, n, T), y(e, i), t
                        }).catch(t => {
                            if (!p()) throw E(e), o_;
                            if (f(t)) return g(e, t, o, T, i, S);
                            let n = r6(t);
                            throw V(o, n, T), y(e, i), t
                        }).finally(v): v(), a = a instanceof ot ? a.value : a
                    } catch (t) {
                        f(a = t) ? a = g(e, a, o, T, i, S).finally(v) : (_ = !0, v())
                    }
                    return l = _ ? r6(a) : f(a) ? r7(a) : oe(a), u = !1,
                        function(e, t, n) {
                            if (N(e, t)) {
                                let t = A(e);
                                null != t && (t.depValuesDiscoveredSoFarDuringAsyncWork = n)
                            }
                        }(e, i, T), R(e, o, new Set(T.keys()), i), [l, T]
                }

                function b(e, t) {
                    let r = t.atomValues.get(n);
                    if (null != r) return r;
                    let o = new Set;
                    try {
                        r = l.get(n => ("string" != typeof n && rA(!1), on(e, t, n).contents), {
                            onNodeVisit: e => {
                                "branch" === e.type && e.nodeKey !== n && o.add(e.nodeKey)
                            }
                        })
                    } catch (e) {
                        throw d(`Problem with cache lookup for selector "${n}": ${e.message}`)
                    }
                    if (r) {
                        var i;
                        t.atomValues.set(n, r), R(e, t, o, null === (i = A(e)) || void 0 === i ? void 0 : i.executionID)
                    }
                    return r
                }

                function w(e, t) {
                    for (let n of ta([u.has(e) ? [h(u.get(e))] : [], F(em(u, ([t]) => t !== e), ([, e]) => e)])) {
                        if (n.stateVersions.get(t.version) || ! function(n) {
                                for (let [r, o] of n)
                                    if (!on(e, t, r).is(o)) return !0;
                                return !1
                            }(n.depValuesDiscoveredSoFarDuringAsyncWork)) return n.stateVersions.set(t.version, !0), n;
                        n.stateVersions.set(t.version, !1)
                    }
                }

                function A(e) {
                    return u.get(e)
                }

                function E(e) {
                    u.delete(e)
                }

                function N(e, t) {
                    var n;
                    return t === (null === (n = A(e)) || void 0 === n ? void 0 : n.executionID)
                }

                function V(e, t, r) {
                    e.atomValues.set(n, t);
                    try {
                        l.set(Array.from(r.entries()).map(([e, t]) => [e, t.contents]), t)
                    } catch (e) {
                        throw d(`Problem with setting cache for selector "${n}": ${e.message}`)
                    }
                }

                function C(e, t) {
                    let r = t.atomValues.get(n);
                    return null != r ? r : l.get(n => {
                        var r;
                        return "string" != typeof n && rA(!1), null === (r = or(e, t, n)) || void 0 === r ? void 0 : r.contents
                    })
                }

                function M(e, t) {
                    return function(e) {
                        if (oy.includes(n)) return r6(d(`Recoil selector has circular dependencies: ${oy.slice(oy.indexOf(n)).join(" → ")}`));
                        oy.push(n);
                        try {
                            return e()
                        } finally {
                            oy.pop()
                        }
                    }(() => (function(e, t) {
                        var n;
                        let r = b(e, t);
                        if (null != r) return E(e), r;
                        let o = w(e, t);
                        if (null != o) return (null === (n = o.loadingLoadable) || void 0 === n ? void 0 : n.state) === "loading" && S(e, o.executionID), o.loadingLoadable;
                        let i = oS(),
                            [a, l] = T(e, t, i);
                        return "loading" === a.state ? (u.set(e, {
                            depValuesDiscoveredSoFarDuringAsyncWork: l,
                            executionID: i,
                            loadingLoadable: a,
                            stateVersions: new Map([
                                [t.version, !0]
                            ])
                        }), S(e, i)) : (E(e), V(t, a, l)), a
                    })(e, t))
                }

                function U(e) {
                    e.atomValues.delete(n)
                }

                function I(e, n) {
                    for (let o of (null != t || rA(!1), a)) {
                        var r;
                        let t = os(o);
                        null === (r = t.clearCache) || void 0 === r || r.call(t, e, n)
                    }
                    a.clear(), U(n), l.clear(), od(e, t)
                }
                return t = null != i ? ou({
                    key: n,
                    nodeType: "selector",
                    peek: C,
                    get: M,
                    set: (e, t, r) => {
                        let o = !1,
                            a = new Map;

                        function l({
                            key: r
                        }) {
                            if (o) throw d("Recoil: Async selector sets are not currently supported.");
                            let i = on(e, t, r);
                            if ("hasValue" === i.state) return i.contents;
                            if ("loading" === i.state) {
                                let e = `Getting value of asynchronous atom or selector "${r}" in a pending state while setting selector "${n}" is not yet supported.`;
                                throw L(e), d(e)
                            }
                            throw i.contents
                        }

                        function s(n, r) {
                            if (o) {
                                let e = "Recoil: Async selector sets are not currently supported.";
                                throw L(e), d(e)
                            }
                            let i = "function" == typeof r ? r(l(n)) : r;
                            oo(e, t, n.key, i).forEach((e, t) => a.set(t, e))
                        }
                        let u = i({
                            set: s,
                            get: l,
                            reset: function(e) {
                                s(e, oa)
                            }
                        }, r);
                        if (void 0 !== u) throw f(u) ? d("Recoil: Async selector sets are not currently supported.") : d("Recoil: selector set should be a void function.");
                        return o = !0, a
                    },
                    init: v,
                    invalidate: U,
                    clearCache: I,
                    shouldDeleteConfigOnRelease: _,
                    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                    shouldRestoreFromSnapshots: !1,
                    retainedBy: s
                }) : ou({
                    key: n,
                    nodeType: "selector",
                    peek: C,
                    get: M,
                    init: v,
                    invalidate: U,
                    clearCache: I,
                    shouldDeleteConfigOnRelease: _,
                    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                    shouldRestoreFromSnapshots: !1,
                    retainedBy: s
                })
            }
            og.value = e => new ot(e);
            let {
                isLoadable: oR,
                loadableWithError: oT,
                loadableWithPromise: ob,
                loadableWithValue: ow
            } = E, {
                WrappedValue: oA
            } = rj, {
                peekNodeInfo: oE
            } = eV, {
                DEFAULT_VALUE: oN,
                DefaultValue: ok,
                getConfigDeletionHandler: oL,
                registerNode: oV,
                setConfigDeletionHandler: oC
            } = Y, {
                isRecoilValue: oM
            } = x, {
                getRecoilValueAsLoadable: oU,
                markRecoilValueModified: oI,
                setRecoilValue: oB,
                setRecoilValueLoadable: oD
            } = eQ, {
                retainedByOptionWithDefault: oO
            } = e7, oP = e => e instanceof oA ? e.value : e;

            function ox(e) {
                let { ...t
                } = e, n = "default" in e ? e.default : new Promise(() => {});
                return oM(n) ? function(e) {
                    let t = ox({ ...e,
                            default: oN,
                            persistence_UNSTABLE: void 0 === e.persistence_UNSTABLE ? void 0 : { ...e.persistence_UNSTABLE,
                                validator: t => t instanceof ok ? t : h(e.persistence_UNSTABLE).validator(t, oN)
                            },
                            effects: e.effects,
                            effects_UNSTABLE: e.effects_UNSTABLE
                        }),
                        n = og({
                            key: `${e.key}__withFallback`,
                            get: ({
                                get: n
                            }) => {
                                let r = n(t);
                                return r instanceof ok ? e.default : r
                            },
                            set: ({
                                set: e
                            }, n) => e(t, n),
                            cachePolicy_UNSTABLE: {
                                eviction: "most-recent"
                            },
                            dangerouslyAllowMutability: e.dangerouslyAllowMutability
                        });
                    return oC(n.key, oL(e.key)), n
                }({ ...t,
                    default: n
                }) : function(e) {
                    var t;
                    let n;
                    let {
                        key: r,
                        persistence_UNSTABLE: o
                    } = e, i = oO(e.retainedBy_UNSTABLE), a = 0;

                    function l(e) {
                        return ob(e.then(e => (s = ow(e), e)).catch(e => {
                            throw s = oT(e), e
                        }))
                    }
                    let s = f(e.default) ? l(e.default) : oR(e.default) ? "loading" === e.default.state ? l(e.default.contents) : e.default : ow(oP(e.default));
                    s.contents;
                    let u = new Map;

                    function c(e, t) {
                        var o, i;
                        return null !== (o = null !== (i = t.atomValues.get(r)) && void 0 !== i ? i : n) && void 0 !== o ? o : s
                    }
                    let p = oV({
                        key: r,
                        nodeType: "atom",
                        peek: c,
                        get: function(e, t) {
                            if (t.atomValues.has(r)) return h(t.atomValues.get(r));
                            if (!t.nonvalidatedAtoms.has(r)) return s; {
                                if (null != n) return n;
                                if (null == o) return z(`Tried to restore a persisted value for atom ${r} but it has no persistence settings.`), s;
                                let e = t.nonvalidatedAtoms.get(r),
                                    i = o.validator(e, oN);
                                return n = i instanceof ok ? s : ow(i)
                            }
                        },
                        set: function(e, t, o) {
                            if (t.atomValues.has(r)) {
                                let e = h(t.atomValues.get(r));
                                if ("hasValue" === e.state && o === e.contents) return new Map
                            } else if (!t.nonvalidatedAtoms.has(r) && o instanceof ok) return new Map;
                            return n = void 0, new Map().set(r, ow(o))
                        },
                        init: function(t, n, o) {
                            var i, l, h;
                            a++, t.getState().knownAtoms.add(r), "loading" === s.state && s.contents.finally(() => {
                                var e;
                                (null !== (e = t.getState().nextTree) && void 0 !== e ? e : t.getState().currentTree).atomValues.has(r) || oI(t, p)
                            });
                            let v = null !== (i = e.effects) && void 0 !== i ? i : e.effects_UNSTABLE;
                            if (null != v) {
                                let e = oN,
                                    i = !0,
                                    a = !1,
                                    S = null;

                                function _(o) {
                                    if (i && o.key === r) {
                                        let r = e;
                                        return r instanceof ok ? c(t, n) : f(r) ? ob(r.then(e => e instanceof ok ? s.toPromise() : e)) : ow(r)
                                    }
                                    return oU(t, o)
                                }

                                function y(e) {
                                    return _(e).toPromise()
                                }

                                function m(n) {
                                    var o;
                                    let a = oE(t, null !== (o = t.getState().nextTree) && void 0 !== o ? o : t.getState().currentTree, n.key);
                                    return !i || n.key !== r || e instanceof ok ? a : { ...a,
                                        isSet: !0,
                                        loadable: _(n)
                                    }
                                }
                                let g = n => r => {
                                        if (i) {
                                            let t = _(p),
                                                o = "hasValue" === t.state ? t.contents : oN;
                                            f(e = "function" == typeof r ? r(o) : r) && (e = e.then(e => (S = {
                                                effect: n,
                                                value: e
                                            }, e)))
                                        } else {
                                            if (f(r)) throw d("Setting atoms to async values is not implemented.");
                                            "function" != typeof r && (S = {
                                                effect: n,
                                                value: oP(r)
                                            }), oB(t, p, "function" == typeof r ? e => {
                                                let t = oP(r(e));
                                                return S = {
                                                    effect: n,
                                                    value: t
                                                }, t
                                            } : oP(r))
                                        }
                                    },
                                    R = e => () => g(e)(oN),
                                    T = e => n => {
                                        var o;
                                        let {
                                            release: i
                                        } = t.subscribeToTransactions(t => {
                                            var o, i, a, l, u;
                                            let {
                                                currentTree: c,
                                                previousTree: d
                                            } = t.getState();
                                            d || (L("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"), d = c);
                                            let f = null !== (o = c.atomValues.get(r)) && void 0 !== o ? o : s;
                                            if ("hasValue" === f.state) {
                                                let t = f.contents,
                                                    o = null !== (i = d.atomValues.get(r)) && void 0 !== i ? i : s,
                                                    h = "hasValue" === o.state ? o.contents : oN;
                                                (null === (a = S) || void 0 === a ? void 0 : a.effect) !== e || (null === (l = S) || void 0 === l ? void 0 : l.value) !== t ? n(t, h, !c.atomValues.has(r)) : (null === (u = S) || void 0 === u ? void 0 : u.effect) === e && (S = null)
                                            }
                                        }, r);
                                        u.set(t, [...null !== (o = u.get(t)) && void 0 !== o ? o : [], i])
                                    };
                                for (let n of v) try {
                                    let e = n({
                                        node: p,
                                        storeID: t.storeID,
                                        parentStoreID_UNSTABLE: t.parentStoreID,
                                        trigger: o,
                                        setSelf: g(n),
                                        resetSelf: R(n),
                                        onSet: T(n),
                                        getPromise: y,
                                        getLoadable: _,
                                        getInfo_UNSTABLE: m
                                    });
                                    null != e && u.set(t, [...null !== (l = u.get(t)) && void 0 !== l ? l : [], e])
                                } catch (t) {
                                    e = t, a = !0
                                }
                                if (i = !1, !(e instanceof ok)) {
                                    let o = a ? oT(e) : f(e) ? ob(function(e, t) {
                                        let n = t.then(t => {
                                            var o, i;
                                            return (null === (i = (null !== (o = e.getState().nextTree) && void 0 !== o ? o : e.getState().currentTree).atomValues.get(r)) || void 0 === i ? void 0 : i.contents) === n && oB(e, p, t), t
                                        }).catch(t => {
                                            var o, i;
                                            throw (null === (i = (null !== (o = e.getState().nextTree) && void 0 !== o ? o : e.getState().currentTree).atomValues.get(r)) || void 0 === i ? void 0 : i.contents) === n && oD(e, p, oT(t)), t
                                        });
                                        return n
                                    }(t, e)) : ow(oP(e));
                                    o.contents, n.atomValues.set(r, o), null === (h = t.getState().nextTree) || void 0 === h || h.atomValues.set(r, o)
                                }
                            }
                            return () => {
                                var e;
                                a--, null === (e = u.get(t)) || void 0 === e || e.forEach(e => e()), u.delete(t)
                            }
                        },
                        invalidate: function() {
                            n = void 0
                        },
                        shouldDeleteConfigOnRelease: function() {
                            return void 0 !== oL(r) && a <= 0
                        },
                        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                        persistence_UNSTABLE: e.persistence_UNSTABLE ? {
                            type: e.persistence_UNSTABLE.type,
                            backButton: e.persistence_UNSTABLE.backButton
                        } : void 0,
                        shouldRestoreFromSnapshots: !0,
                        retainedBy: i
                    });
                    return p
                }({ ...t,
                    default: n
                })
            }
            ox.value = e => new oA(e);
            class oz {
                constructor(e) {
                    var t;
                    p(this, "_map", void 0), p(this, "_keyMapper", void 0), this._map = new Map, this._keyMapper = null !== (t = null == e ? void 0 : e.mapKey) && void 0 !== t ? t : e => e
                }
                size() {
                    return this._map.size
                }
                has(e) {
                    return this._map.has(this._keyMapper(e))
                }
                get(e) {
                    return this._map.get(this._keyMapper(e))
                }
                set(e, t) {
                    this._map.set(this._keyMapper(e), t)
                }
                delete(e) {
                    this._map.delete(this._keyMapper(e))
                }
                clear() {
                    this._map.clear()
                }
            }
            var oF = Object.freeze({
                __proto__: null,
                MapCache: {
                    MapCache: oz
                }.MapCache
            });
            let {
                LRUCache: oG
            } = rX, {
                MapCache: oW
            } = oF, o$ = {
                equality: "reference",
                eviction: "none",
                maxSize: 1 / 0
            };
            var oK = function({
                equality: e = o$.equality,
                eviction: t = o$.eviction,
                maxSize: n = o$.maxSize
            } = o$) {
                return function(e, t, n) {
                    switch (e) {
                        case "keep-all":
                            return new oW({
                                mapKey: n
                            });
                        case "lru":
                            return new oG({
                                mapKey: n,
                                maxSize: h(t)
                            });
                        case "most-recent":
                            return new oG({
                                mapKey: n,
                                maxSize: 1
                            })
                    }
                    throw d(`Unrecognized eviction policy ${e}`)
                }(t, n, function(e) {
                    switch (e) {
                        case "reference":
                            return e => e;
                        case "value":
                            return e => r2(e)
                    }
                    throw d(`Unrecognized equality policy ${e}`)
                }(e))
            };
            let {
                setConfigDeletionHandler: oj
            } = Y, {
                setConfigDeletionHandler: oH
            } = Y, oq = 0;
            var oZ = function(e) {
                var t, n;
                let r = oK({
                    equality: null !== (t = null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n ? void 0 : n.equality) && void 0 !== t ? t : "value",
                    eviction: "keep-all"
                });
                return t => {
                    var n;
                    let o, i;
                    try {
                        o = r.get(t)
                    } catch (t) {
                        throw d(`Problem with cache lookup for selector ${e.key}: ${t.message}`)
                    }
                    if (null != o) return o;
                    let a = `${e.key}__selectorFamily/${null!==(n=r2(t,{allowFunctions:!0}))&&void 0!==n?n:"void"}/${oq++}`,
                        l = n => e.get(t)(n),
                        s = e.cachePolicy_UNSTABLE,
                        u = "function" == typeof e.retainedBy_UNSTABLE ? e.retainedBy_UNSTABLE(t) : e.retainedBy_UNSTABLE;
                    if (null != e.set) {
                        let n = e.set;
                        i = og({
                            key: a,
                            get: l,
                            set: (e, r) => n(t)(e, r),
                            cachePolicy_UNSTABLE: s,
                            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                            retainedBy_UNSTABLE: u
                        })
                    } else i = og({
                        key: a,
                        get: l,
                        cachePolicy_UNSTABLE: s,
                        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                        retainedBy_UNSTABLE: u
                    });
                    return r.set(t, i), oH(i.key, () => {
                        r.delete(t)
                    }), i
                }
            };
            let oY = oZ({
                    key: "__constant",
                    get: e => () => e,
                    cachePolicyForParams_UNSTABLE: {
                        equality: "reference"
                    }
                }),
                oJ = oZ({
                    key: "__error",
                    get: e => () => {
                        throw d(e)
                    },
                    cachePolicyForParams_UNSTABLE: {
                        equality: "reference"
                    }
                }),
                {
                    loadableWithError: oX,
                    loadableWithPromise: oQ,
                    loadableWithValue: o0
                } = E;

            function o1(e, t) {
                let n = Array(t.length).fill(void 0),
                    r = Array(t.length).fill(void 0);
                for (let [o, i] of t.entries()) try {
                    n[o] = e(i)
                } catch (e) {
                    r[o] = e
                }
                return [n, r]
            }

            function o2(e) {
                return null != e && !f(e)
            }

            function o5(e) {
                return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map(t => e[t])
            }

            function o3(e, t) {
                return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e,
                    [n]: t[r]
                }), {})
            }

            function o4(e, t, n) {
                return o3(e, n.map((e, n) => null == e ? o0(t[n]) : f(e) ? oQ(e) : oX(e)))
            }
            let o8 = oZ({
                    key: "__waitForNone",
                    get: e => ({
                        get: t
                    }) => {
                        let [n, r] = o1(t, o5(e));
                        return o4(e, n, r)
                    },
                    dangerouslyAllowMutability: !0
                }),
                o9 = oZ({
                    key: "__waitForAny",
                    get: e => ({
                        get: t
                    }) => {
                        let [n, r] = o1(t, o5(e));
                        return r.some(e => !f(e)) ? o4(e, n, r) : new Promise(t => {
                            for (let [o, i] of r.entries()) f(i) && i.then(i => {
                                n[o] = i, r[o] = void 0, t(o4(e, n, r))
                            }).catch(i => {
                                r[o] = i, t(o4(e, n, r))
                            })
                        })
                    },
                    dangerouslyAllowMutability: !0
                }),
                o6 = oZ({
                    key: "__waitForAll",
                    get: e => ({
                        get: t
                    }) => {
                        let [n, r] = o1(t, o5(e));
                        if (r.every(e => null == e)) return o3(e, n);
                        let o = r.find(o2);
                        if (null != o) throw o;
                        return Promise.all(r).then(t => o3(e, t.map((e, t) => void 0 === e ? n[t] : e)))
                    },
                    dangerouslyAllowMutability: !0
                }),
                o7 = oZ({
                    key: "__waitForAllSettled",
                    get: e => ({
                        get: t
                    }) => {
                        let [n, r] = o1(t, o5(e));
                        return r.every(e => !f(e)) ? o4(e, n, r) : Promise.all(r.map((e, t) => f(e) ? e.then(e => {
                            n[t] = e, r[t] = void 0
                        }).catch(e => {
                            n[t] = void 0, r[t] = e
                        }) : null)).then(() => o4(e, n, r))
                    },
                    dangerouslyAllowMutability: !0
                }),
                ie = oZ({
                    key: "__noWait",
                    get: e => ({
                        get: t
                    }) => {
                        try {
                            return og.value(o0(t(e)))
                        } catch (e) {
                            return og.value(f(e) ? oQ(e) : oX(e))
                        }
                    },
                    dangerouslyAllowMutability: !0
                }),
                {
                    RecoilLoadable: it
                } = E,
                {
                    DefaultValue: ir
                } = Y,
                {
                    RecoilRoot: io,
                    useRecoilStoreID: ii
                } = na,
                {
                    isRecoilValue: ia
                } = x,
                {
                    retentionZone: il
                } = e_,
                {
                    freshSnapshot: is
                } = tU,
                {
                    useRecoilState: iu,
                    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: ic,
                    useRecoilStateLoadable: id,
                    useRecoilValue: ih,
                    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: ip,
                    useRecoilValueLoadable: iv,
                    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: i_,
                    useResetRecoilState: iy,
                    useSetRecoilState: im
                } = {
                    recoilComponentGetRecoilValueCount_FOR_TESTING: {
                        current: 0
                    },
                    useRecoilInterface: function() {
                        let e = nS(),
                            t = nN(),
                            [, n] = nP([]),
                            r = nO(new Set);
                        r.current = new Set;
                        let o = nO(new Set),
                            i = nO(new Map),
                            a = nI(e => {
                                let t = i.current.get(e);
                                t && (t.release(), i.current.delete(e))
                            }, [i]),
                            l = nI((e, t) => {
                                i.current.has(t) && n([])
                            }, []);
                        return nB(() => {
                            let n = t.current;
                            en(r.current, o.current).forEach(t => {
                                if (i.current.has(t)) {
                                    z(`Double subscription to RecoilValue "${t}"`);
                                    return
                                }
                                let r = nU(n, new nL(t), e => l(e, t), e);
                                i.current.set(t, r), n.getState().nextTree ? n.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                                    l(n.getState(), t)
                                }) : l(n.getState(), t)
                            }), en(o.current, r.current).forEach(e => {
                                a(e)
                            }), o.current = r.current
                        }), nB(() => {
                            let n = i.current;
                            return en(r.current, new Set(n.keys())).forEach(r => {
                                let o = nU(t.current, new nL(r), e => l(e, r), e);
                                n.set(r, o)
                            }), () => n.forEach((e, t) => a(t))
                        }, [e, t, a, l]), nD(() => {
                            function e(e) {
                                return n => {
                                    nC(t.current, e, n)
                                }
                            }

                            function n(e) {
                                var n;
                                r.current.has(e.key) || (r.current = nx(r.current, e.key));
                                let o = t.current.getState();
                                return nV(t.current, e, nb().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree)
                            }

                            function o(e) {
                                return nF(n(e), e, t)
                            }
                            return {
                                getRecoilValue: o,
                                getRecoilValueLoadable: n,
                                getRecoilState: function(t) {
                                    return [o(t), e(t)]
                                },
                                getRecoilStateLoadable: function(t) {
                                    return [n(t), e(t)]
                                },
                                getSetRecoilState: e,
                                getResetRecoilState: function(e) {
                                    return () => nC(t.current, e, nR)
                                }
                            }
                        }, [r, t])
                    },
                    useRecoilState: function(e) {
                        return [nH(e), nq(e)]
                    },
                    useRecoilStateLoadable: function(e) {
                        return [nj(e), nq(e)]
                    },
                    useRecoilValue: nH,
                    useRecoilValueLoadable: nj,
                    useResetRecoilState: function(e) {
                        let t = nN();
                        return nI(() => {
                            nC(t.current, e, nR)
                        }, [t, e])
                    },
                    useSetRecoilState: nq,
                    useSetUnvalidatedAtomValues: function() {
                        let e = nN();
                        return (t, n = {}) => {
                            ng(() => {
                                e.current.addTransactionMetadata(n), t.forEach((t, n) => nM(e.current, new nL(n), t))
                            })
                        }
                    },
                    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: nZ,
                    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: nY,
                    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: function(e) {
                        return [nY(e), nq(e)]
                    }
                },
                {
                    useGotoRecoilSnapshot: iS,
                    useRecoilSnapshot: ig,
                    useRecoilTransactionObserver: iR
                } = rl,
                {
                    useRecoilCallback: iT
                } = rP,
                {
                    noWait: ib,
                    waitForAll: iw,
                    waitForAllSettled: iA,
                    waitForAny: iE,
                    waitForNone: iN
                } = {
                    waitForNone: o8,
                    waitForAny: o9,
                    waitForAll: o6,
                    waitForAllSettled: o7,
                    noWait: ie
                };
            var ik = {
                DefaultValue: ir,
                isRecoilValue: ia,
                RecoilLoadable: it,
                RecoilEnv: N,
                RecoilRoot: io,
                useRecoilStoreID: ii,
                useRecoilBridgeAcrossReactRoots_UNSTABLE: function() {
                    "MUTABLE_SOURCE" === rc().mode && console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
                    let e = rf().current;
                    return rh(() => function({
                        children: t
                    }) {
                        return s.createElement(rd, {
                            store_INTERNAL: e
                        }, t)
                    }, [e])
                },
                atom: ox,
                selector: og,
                atomFamily: function(e) {
                    var t, n;
                    let r = oK({
                        equality: null !== (t = null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n ? void 0 : n.equality) && void 0 !== t ? t : "value",
                        eviction: "keep-all"
                    });
                    return t => {
                        var n, o;
                        let i = r.get(t);
                        if (null != i) return i;
                        let {
                            cachePolicyForParams_UNSTABLE: a,
                            ...l
                        } = e, s = "default" in e ? e.default : new Promise(() => {}), u = ox({ ...l,
                            key: `${e.key}__${null!==(n=r2(t))&&void 0!==n?n:"void"}`,
                            default: "function" == typeof s ? s(t) : s,
                            retainedBy_UNSTABLE: "function" == typeof e.retainedBy_UNSTABLE ? e.retainedBy_UNSTABLE(t) : e.retainedBy_UNSTABLE,
                            effects: "function" == typeof e.effects ? e.effects(t) : "function" == typeof e.effects_UNSTABLE ? e.effects_UNSTABLE(t) : null !== (o = e.effects) && void 0 !== o ? o : e.effects_UNSTABLE
                        });
                        return r.set(t, u), oj(u.key, () => {
                            r.delete(t)
                        }), u
                    }
                },
                selectorFamily: oZ,
                constSelector: function(e) {
                    return oY(e)
                },
                errorSelector: function(e) {
                    return oJ(e)
                },
                readOnlySelector: function(e) {
                    return e
                },
                noWait: ib,
                waitForNone: iN,
                waitForAny: iE,
                waitForAll: iw,
                waitForAllSettled: iA,
                useRecoilValue: ih,
                useRecoilValueLoadable: iv,
                useRecoilState: iu,
                useRecoilStateLoadable: id,
                useSetRecoilState: im,
                useResetRecoilState: iy,
                useGetRecoilValueInfo_UNSTABLE: function() {
                    let e = ru();
                    return ({
                        key: t
                    }) => rs(e.current, e.current.getState().currentTree, t)
                },
                useRecoilRefresher_UNSTABLE: function(e) {
                    let t = rx();
                    return rF(() => {
                        rz(t.current, e)
                    }, [e, t])
                },
                useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: i_,
                useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: ip,
                useRecoilState_TRANSITION_SUPPORT_UNSTABLE: ic,
                useRecoilCallback: iT,
                useRecoilTransaction_UNSTABLE: function(e, t) {
                    let n = rW();
                    return r$(() => (...t) => {
                        rG(n.current)(n => {
                            e(n)(...t)
                        })
                    }, null != t ? [...t, n] : void 0)
                },
                useGotoRecoilSnapshot: iS,
                useRecoilSnapshot: ig,
                useRecoilTransactionObserver_UNSTABLE: iR,
                snapshot_UNSTABLE: is,
                useRetain: nm,
                retentionZone: il
            };
            ik.DefaultValue, ik.isRecoilValue, ik.RecoilLoadable, ik.RecoilEnv;
            var iL = ik.RecoilRoot;
            ik.useRecoilStoreID, ik.useRecoilBridgeAcrossReactRoots_UNSTABLE;
            var iV = ik.atom,
                iC = ik.selector;
            ik.atomFamily, ik.selectorFamily, ik.constSelector, ik.errorSelector, ik.readOnlySelector, ik.noWait, ik.waitForNone, ik.waitForAny, ik.waitForAll, ik.waitForAllSettled;
            var iM = ik.useRecoilValue;
            ik.useRecoilValueLoadable;
            var iU = ik.useRecoilState;
            ik.useRecoilStateLoadable;
            var iI = ik.useSetRecoilState;
            ik.useResetRecoilState, ik.useGetRecoilValueInfo_UNSTABLE, ik.useRecoilRefresher_UNSTABLE, ik.useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE, ik.useRecoilValue_TRANSITION_SUPPORT_UNSTABLE, ik.useRecoilState_TRANSITION_SUPPORT_UNSTABLE, ik.useRecoilCallback, ik.useRecoilTransaction_UNSTABLE, ik.useGotoRecoilSnapshot, ik.useRecoilSnapshot, ik.useRecoilTransactionObserver_UNSTABLE, ik.snapshot_UNSTABLE, ik.useRetain, ik.retentionZone
        }
    }
]);