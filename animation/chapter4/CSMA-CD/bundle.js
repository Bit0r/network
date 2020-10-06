!function (e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
    }
    var n = {};
    return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
}(function (e) {
    for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t))
            switch (typeof e[t]) {
                case "function":
                    break;
                case "object":
                    e[t] = function (t) {
                        var n = t.slice(1)
                            , r = e[t[0]];
                        return function (e, t, o) {
                            r.apply(this, [e, t, o].concat(n))
                        }
                    }(e[t]);
                    break;
                default:
                    e[t] = e[e[t]]
            }
    return e
}([function (e, t, n) {
    e.exports = n(1)
}
    , function (e, t, n) {
        var r = n(2);
        new r
    }
    , function (e, t, n) {
        (function (t) {
            var r = n(4)
                , o = n(5);
            n(14),
                n(18),
                n(23);
            var i = r(n(25))
                , s = function () {
                    this.node = i.querySelector("div").cloneNode(!0),
                        this.$node = t(this.node),
                        document.body.appendChild(this.node),
                        this.applet = new o,
                        t("[autofocus]").focus()
                };
            e.exports = s
        }
        ).call(t, n(3))
    }
    , function (e, t, n) {
        var r, o;
        /*!
         * jQuery JavaScript Library v2.2.4
         * http://jquery.com/
         *
         * Includes Sizzle.js
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-05-20T17:23Z
         */
        !function (t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
                : n(t)
        }("undefined" != typeof window ? window : this, function (n, i) {
            function s(e) {
                var t = !!e && "length" in e && e.length
                    , n = ue.type(e);
                return "function" === n || ue.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }
            function a(e, t, n) {
                if (ue.isFunction(t))
                    return ue.grep(e, function (e, r) {
                        return !!t.call(e, r, e) !== n
                    });
                if (t.nodeType)
                    return ue.grep(e, function (e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (be.test(t))
                        return ue.filter(t, e, n);
                    t = ue.filter(t, e)
                }
                return ue.grep(e, function (e) {
                    return re.call(t, e) > -1 !== n
                })
            }
            function l(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;)
                    ;
                return e
            }
            function u(e) {
                var t = {};
                return ue.each(e.match(Ce) || [], function (e, n) {
                    t[n] = !0
                }),
                    t
            }
            function c() {
                Z.removeEventListener("DOMContentLoaded", c),
                    n.removeEventListener("load", c),
                    ue.ready()
            }
            function d() {
                this.expando = ue.expando + d.uid++
            }
            function p(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(Re, "-$&").toLowerCase(),
                        n = e.getAttribute(r),
                        "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Le.test(n) ? ue.parseJSON(n) : n
                        } catch (o) { }
                        De.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function f(e, t, n, r) {
                var o, i = 1, s = 20, a = r ? function () {
                    return r.cur()
                }
                    : function () {
                        return ue.css(e, t, "")
                    }
                    , l = a(), u = n && n[3] || (ue.cssNumber[t] ? "" : "px"), c = (ue.cssNumber[t] || "px" !== u && +l) && qe.exec(ue.css(e, t));
                if (c && c[3] !== u) {
                    u = u || c[3],
                        n = n || [],
                        c = +l || 1;
                    do
                        i = i || ".5",
                            c /= i,
                            ue.style(e, t, c + u);
                    while (i !== (i = a() / l) && 1 !== i && --s)
                }
                return n && (c = +c || +l || 0,
                    o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = u,
                        r.start = c,
                        r.end = o)),
                    o
            }
            function h(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && ue.nodeName(e, t) ? ue.merge([e], n) : n
            }
            function g(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    Ne.set(e[n], "globalEval", !t || Ne.get(t[n], "globalEval"))
            }
            function m(e, t, n, r, o) {
                for (var i, s, a, l, u, c, d = t.createDocumentFragment(), p = [], f = 0, m = e.length; m > f; f++)
                    if (i = e[f],
                        i || 0 === i)
                        if ("object" === ue.type(i))
                            ue.merge(p, i.nodeType ? [i] : i);
                        else if (Pe.test(i)) {
                            for (s = s || d.appendChild(t.createElement("div")),
                                a = ($e.exec(i) || ["", ""])[1].toLowerCase(),
                                l = Ie[a] || Ie._default,
                                s.innerHTML = l[1] + ue.htmlPrefilter(i) + l[2],
                                c = l[0]; c--;)
                                s = s.lastChild;
                            ue.merge(p, s.childNodes),
                                s = d.firstChild,
                                s.textContent = ""
                        } else
                            p.push(t.createTextNode(i));
                for (d.textContent = "",
                    f = 0; i = p[f++];)
                    if (r && ue.inArray(i, r) > -1)
                        o && o.push(i);
                    else if (u = ue.contains(i.ownerDocument, i),
                        s = h(d.appendChild(i), "script"),
                        u && g(s),
                        n)
                        for (c = 0; i = s[c++];)
                            Fe.test(i.type || "") && n.push(i);
                return d
            }
            function v() {
                return !0
            }
            function x() {
                return !1
            }
            function b() {
                try {
                    return Z.activeElement
                } catch (e) { }
            }
            function j(e, t, n, r, o, i) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n,
                        n = void 0);
                    for (a in t)
                        j(e, a, n, r, t[a], i);
                    return e
                }
                if (null == r && null == o ? (o = n,
                    r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
                        r = void 0) : (o = r,
                            r = n,
                            n = void 0)),
                    o === !1)
                    o = x;
                else if (!o)
                    return e;
                return 1 === i && (s = o,
                    o = function (e) {
                        return ue().off(e),
                            s.apply(this, arguments)
                    }
                    ,
                    o.guid = s.guid || (s.guid = ue.guid++)),
                    e.each(function () {
                        ue.event.add(this, t, o, r, n)
                    })
            }
            function y(e, t) {
                return ue.nodeName(e, "table") && ue.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function k(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
            }
            function w(e) {
                var t = Je.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function A(e, t) {
                var n, r, o, i, s, a, l, u;
                if (1 === t.nodeType) {
                    if (Ne.hasData(e) && (i = Ne.access(e),
                        s = Ne.set(t, i),
                        u = i.events)) {
                        delete s.handle,
                            s.events = {};
                        for (o in u)
                            for (n = 0,
                                r = u[o].length; r > n; n++)
                                ue.event.add(t, o, u[o][n])
                    }
                    De.hasData(e) && (a = De.access(e),
                        l = ue.extend({}, a),
                        De.set(t, l))
                }
            }
            function C(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function T(e, t, n, r) {
                t = te.apply([], t);
                var o, i, s, a, l, u, c = 0, d = e.length, p = d - 1, f = t[0], g = ue.isFunction(f);
                if (g || d > 1 && "string" == typeof f && !ae.checkClone && Xe.test(f))
                    return e.each(function (o) {
                        var i = e.eq(o);
                        g && (t[0] = f.call(this, o, i.html())),
                            T(i, t, n, r)
                    });
                if (d && (o = m(t, e[0].ownerDocument, !1, e, r),
                    i = o.firstChild,
                    1 === o.childNodes.length && (o = i),
                    i || r)) {
                    for (s = ue.map(h(o, "script"), k),
                        a = s.length; d > c; c++)
                        l = o,
                            c !== p && (l = ue.clone(l, !0, !0),
                                a && ue.merge(s, h(l, "script"))),
                            n.call(e[c], l, c);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument,
                            ue.map(s, w),
                            c = 0; a > c; c++)
                            l = s[c],
                                Fe.test(l.type || "") && !Ne.access(l, "globalEval") && ue.contains(u, l) && (l.src ? ue._evalUrl && ue._evalUrl(l.src) : ue.globalEval(l.textContent.replace(Ve, "")))
                }
                return e
            }
            function E(e, t, n) {
                for (var r, o = t ? ue.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
                    n || 1 !== r.nodeType || ue.cleanData(h(r)),
                        r.parentNode && (n && ue.contains(r.ownerDocument, r) && g(h(r, "script")),
                            r.parentNode.removeChild(r));
                return e
            }
            function S(e, t) {
                var n = ue(t.createElement(e)).appendTo(t.body)
                    , r = ue.css(n[0], "display");
                return n.detach(),
                    r
            }
            function N(e) {
                var t = Z
                    , n = Ge[e];
                return n || (n = S(e, t),
                    "none" !== n && n || (Qe = (Qe || ue("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                        t = Qe[0].contentDocument,
                        t.write(),
                        t.close(),
                        n = S(e, t),
                        Qe.detach()),
                    Ge[e] = n),
                    n
            }
            function D(e, t, n) {
                var r, o, i, s, a = e.style;
                return n = n || et(e),
                    s = n ? n.getPropertyValue(t) || n[t] : void 0,
                    "" !== s && void 0 !== s || ue.contains(e.ownerDocument, e) || (s = ue.style(e, t)),
                    n && !ae.pixelMarginRight() && Ze.test(s) && Ke.test(t) && (r = a.width,
                        o = a.minWidth,
                        i = a.maxWidth,
                        a.minWidth = a.maxWidth = a.width = s,
                        s = n.width,
                        a.width = r,
                        a.minWidth = o,
                        a.maxWidth = i),
                    void 0 !== s ? s + "" : s
            }
            function L(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function R(e) {
                if (e in at)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--;)
                    if (e = st[n] + t,
                        e in at)
                        return e
            }
            function M(e, t, n) {
                var r = qe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function q(e, t, n, r, o) {
                for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > i; i += 2)
                    "margin" === n && (s += ue.css(e, n + Oe[i], !0, o)),
                        r ? ("content" === n && (s -= ue.css(e, "padding" + Oe[i], !0, o)),
                            "margin" !== n && (s -= ue.css(e, "border" + Oe[i] + "Width", !0, o))) : (s += ue.css(e, "padding" + Oe[i], !0, o),
                                "padding" !== n && (s += ue.css(e, "border" + Oe[i] + "Width", !0, o)));
                return s
            }
            function O(e, t, n) {
                var r = !0
                    , o = "width" === t ? e.offsetWidth : e.offsetHeight
                    , i = et(e)
                    , s = "border-box" === ue.css(e, "boxSizing", !1, i);
                if (0 >= o || null == o) {
                    if (o = D(e, t, i),
                        (0 > o || null == o) && (o = e.style[t]),
                        Ze.test(o))
                        return o;
                    r = s && (ae.boxSizingReliable() || o === e.style[t]),
                        o = parseFloat(o) || 0
                }
                return o + q(e, t, n || (s ? "border" : "content"), r, i) + "px"
            }
            function H(e, t) {
                for (var n, r, o, i = [], s = 0, a = e.length; a > s; s++)
                    r = e[s],
                        r.style && (i[s] = Ne.get(r, "olddisplay"),
                            n = r.style.display,
                            t ? (i[s] || "none" !== n || (r.style.display = ""),
                                "" === r.style.display && He(r) && (i[s] = Ne.access(r, "olddisplay", N(r.nodeName)))) : (o = He(r),
                                    "none" === n && o || Ne.set(r, "olddisplay", o ? n : ue.css(r, "display"))));
                for (s = 0; a > s; s++)
                    r = e[s],
                        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[s] || "" : "none"));
                return e
            }
            function B(e, t, n, r, o) {
                return new B.prototype.init(e, t, n, r, o)
            }
            function $() {
                return n.setTimeout(function () {
                    lt = void 0
                }),
                    lt = ue.now()
            }
            function F(e, t) {
                var n, r = 0, o = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > r; r += 2 - t)
                    n = Oe[r],
                        o["margin" + n] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e),
                    o
            }
            function I(e, t, n) {
                for (var r, o = (_.tweeners[t] || []).concat(_.tweeners["*"]), i = 0, s = o.length; s > i; i++)
                    if (r = o[i].call(n, t, e))
                        return r
            }
            function P(e, t, n) {
                var r, o, i, s, a, l, u, c, d = this, p = {}, f = e.style, h = e.nodeType && He(e), g = Ne.get(e, "fxshow");
                n.queue || (a = ue._queueHooks(e, "fx"),
                    null == a.unqueued && (a.unqueued = 0,
                        l = a.empty.fire,
                        a.empty.fire = function () {
                            a.unqueued || l()
                        }
                    ),
                    a.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            a.unqueued--,
                                ue.queue(e, "fx").length || a.empty.fire()
                        })
                    })),
                    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                        u = ue.css(e, "display"),
                        c = "none" === u ? Ne.get(e, "olddisplay") || N(e.nodeName) : u,
                        "inline" === c && "none" === ue.css(e, "float") && (f.display = "inline-block")),
                    n.overflow && (f.overflow = "hidden",
                        d.always(function () {
                            f.overflow = n.overflow[0],
                                f.overflowX = n.overflow[1],
                                f.overflowY = n.overflow[2]
                        }));
                for (r in t)
                    if (o = t[r],
                        ct.exec(o)) {
                        if (delete t[r],
                            i = i || "toggle" === o,
                            o === (h ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[r])
                                continue;
                            h = !0
                        }
                        p[r] = g && g[r] || ue.style(e, r)
                    } else
                        u = void 0;
                if (ue.isEmptyObject(p))
                    "inline" === ("none" === u ? N(e.nodeName) : u) && (f.display = u);
                else {
                    g ? "hidden" in g && (h = g.hidden) : g = Ne.access(e, "fxshow", {}),
                        i && (g.hidden = !h),
                        h ? ue(e).show() : d.done(function () {
                            ue(e).hide()
                        }),
                        d.done(function () {
                            var t;
                            Ne.remove(e, "fxshow");
                            for (t in p)
                                ue.style(e, t, p[t])
                        });
                    for (r in p)
                        s = I(h ? g[r] : 0, r, d),
                            r in g || (g[r] = s.start,
                                h && (s.end = s.start,
                                    s.start = "width" === r || "height" === r ? 1 : 0))
                }
            }
            function U(e, t) {
                var n, r, o, i, s;
                for (n in e)
                    if (r = ue.camelCase(n),
                        o = t[r],
                        i = e[n],
                        ue.isArray(i) && (o = i[1],
                            i = e[n] = i[0]),
                        n !== r && (e[r] = i,
                            delete e[n]),
                        s = ue.cssHooks[r],
                        s && "expand" in s) {
                        i = s.expand(i),
                            delete e[r];
                        for (n in i)
                            n in e || (e[n] = i[n],
                                t[n] = o)
                    } else
                        t[r] = o
            }
            function _(e, t, n) {
                var r, o, i = 0, s = _.prefilters.length, a = ue.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (o)
                        return !1;
                    for (var t = lt || $(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, s = 0, l = u.tweens.length; l > s; s++)
                        u.tweens[s].run(i);
                    return a.notifyWith(e, [u, i, n]),
                        1 > i && l ? n : (a.resolveWith(e, [u]),
                            !1)
                }, u = a.promise({
                    elem: e,
                    props: ue.extend({}, t),
                    opts: ue.extend(!0, {
                        specialEasing: {},
                        easing: ue.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: lt || $(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = ue.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r),
                            r
                    },
                    stop: function (t) {
                        var n = 0
                            , r = t ? u.tweens.length : 0;
                        if (o)
                            return this;
                        for (o = !0; r > n; n++)
                            u.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [u, 1, 0]),
                            a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
                            this
                    }
                }), c = u.props;
                for (U(c, u.opts.specialEasing); s > i; i++)
                    if (r = _.prefilters[i].call(u, e, c, u.opts))
                        return ue.isFunction(r.stop) && (ue._queueHooks(u.elem, u.opts.queue).stop = ue.proxy(r.stop, r)),
                            r;
                return ue.map(c, I, u),
                    ue.isFunction(u.opts.start) && u.opts.start.call(e, u),
                    ue.fx.timer(ue.extend(l, {
                        elem: e,
                        anim: u,
                        queue: u.opts.queue
                    })),
                    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }
            function z(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function W(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t,
                        t = "*");
                    var r, o = 0, i = t.toLowerCase().match(Ce) || [];
                    if (ue.isFunction(n))
                        for (; r = i[o++];)
                            "+" === r[0] ? (r = r.slice(1) || "*",
                                (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function Y(e, t, n, r) {
                function o(a) {
                    var l;
                    return i[a] = !0,
                        ue.each(e[a] || [], function (e, a) {
                            var u = a(t, n, r);
                            return "string" != typeof u || s || i[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                                o(u),
                                !1)
                        }),
                        l
                }
                var i = {}
                    , s = e === Dt;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }
            function X(e, t) {
                var n, r, o = ue.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && ue.extend(!0, e, r),
                    e
            }
            function J(e, t, n) {
                for (var r, o, i, s, a = e.contents, l = e.dataTypes; "*" === l[0];)
                    l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (o in a)
                        if (a[o] && a[o].test(r)) {
                            l.unshift(o);
                            break
                        }
                if (l[0] in n)
                    i = l[0];
                else {
                    for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            i = o;
                            break
                        }
                        s || (s = o)
                    }
                    i = i || s
                }
                return i ? (i !== l[0] && l.unshift(i),
                    n[i]) : void 0
            }
            function V(e, t, n, r) {
                var o, i, s, a, l, u = {}, c = e.dataTypes.slice();
                if (c[1])
                    for (s in e.converters)
                        u[s.toLowerCase()] = e.converters[s];
                for (i = c.shift(); i;)
                    if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = i,
                        i = c.shift())
                        if ("*" === i)
                            i = l;
                        else if ("*" !== l && l !== i) {
                            if (s = u[l + " " + i] || u["* " + i],
                                !s)
                                for (o in u)
                                    if (a = o.split(" "),
                                        a[1] === i && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        s === !0 ? s = u[o] : u[o] !== !0 && (i = a[0],
                                            c.unshift(a[1]));
                                        break
                                    }
                            if (s !== !0)
                                if (s && e["throws"])
                                    t = s(t);
                                else
                                    try {
                                        t = s(t)
                                    } catch (d) {
                                        return {
                                            state: "parsererror",
                                            error: s ? d : "No conversion from " + l + " to " + i
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function Q(e, t, n, r) {
                var o;
                if (ue.isArray(t))
                    ue.each(t, function (t, o) {
                        n || qt.test(e) ? r(e, o) : Q(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                    });
                else if (n || "object" !== ue.type(t))
                    r(e, t);
                else
                    for (o in t)
                        Q(e + "[" + o + "]", t[o], n, r)
            }
            function G(e) {
                return ue.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var K = []
                , Z = n.document
                , ee = K.slice
                , te = K.concat
                , ne = K.push
                , re = K.indexOf
                , oe = {}
                , ie = oe.toString
                , se = oe.hasOwnProperty
                , ae = {}
                , le = "2.2.4"
                , ue = function (e, t) {
                    return new ue.fn.init(e, t)
                }
                , ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                , de = /^-ms-/
                , pe = /-([\da-z])/gi
                , fe = function (e, t) {
                    return t.toUpperCase()
                };
            ue.fn = ue.prototype = {
                jquery: le,
                constructor: ue,
                selector: "",
                length: 0,
                toArray: function () {
                    return ee.call(this)
                },
                get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : ee.call(this)
                },
                pushStack: function (e) {
                    var t = ue.merge(this.constructor(), e);
                    return t.prevObject = this,
                        t.context = this.context,
                        t
                },
                each: function (e) {
                    return ue.each(this, e)
                },
                map: function (e) {
                    return this.pushStack(ue.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(ee.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length
                        , n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: ne,
                sort: K.sort,
                splice: K.splice
            },
                ue.extend = ue.fn.extend = function () {
                    var e, t, n, r, o, i, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
                    for ("boolean" == typeof s && (u = s,
                        s = arguments[a] || {},
                        a++),
                        "object" == typeof s || ue.isFunction(s) || (s = {}),
                        a === l && (s = this,
                            a--); l > a; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                n = s[t],
                                    r = e[t],
                                    s !== r && (u && r && (ue.isPlainObject(r) || (o = ue.isArray(r))) ? (o ? (o = !1,
                                        i = n && ue.isArray(n) ? n : []) : i = n && ue.isPlainObject(n) ? n : {},
                                        s[t] = ue.extend(u, i, r)) : void 0 !== r && (s[t] = r));
                    return s
                }
                ,
                ue.extend({
                    expando: "jQuery" + (le + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e)
                    },
                    noop: function () { },
                    isFunction: function (e) {
                        return "function" === ue.type(e)
                    },
                    isArray: Array.isArray,
                    isWindow: function (e) {
                        return null != e && e === e.window
                    },
                    isNumeric: function (e) {
                        var t = e && e.toString();
                        return !ue.isArray(e) && t - parseFloat(t) + 1 >= 0
                    },
                    isPlainObject: function (e) {
                        var t;
                        if ("object" !== ue.type(e) || e.nodeType || ue.isWindow(e))
                            return !1;
                        if (e.constructor && !se.call(e, "constructor") && !se.call(e.constructor.prototype || {}, "isPrototypeOf"))
                            return !1;
                        for (t in e)
                            ;
                        return void 0 === t || se.call(e, t)
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    type: function (e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[ie.call(e)] || "object" : typeof e
                    },
                    globalEval: function (e) {
                        var t, n = eval;
                        e = ue.trim(e),
                            e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
                                t.text = e,
                                Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                    },
                    camelCase: function (e) {
                        return e.replace(de, "ms-").replace(pe, fe)
                    },
                    nodeName: function (e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function (e, t) {
                        var n, r = 0;
                        if (s(e))
                            for (n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++)
                                ;
                        else
                            for (r in e)
                                if (t.call(e[r], r, e[r]) === !1)
                                    break;
                        return e
                    },
                    trim: function (e) {
                        return null == e ? "" : (e + "").replace(ce, "")
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (s(Object(e)) ? ue.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)),
                            n
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : re.call(t, e, n)
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, r = 0, o = e.length; n > r; r++)
                            e[o++] = t[r];
                        return e.length = o,
                            e
                    },
                    grep: function (e, t, n) {
                        for (var r, o = [], i = 0, s = e.length, a = !n; s > i; i++)
                            r = !t(e[i], i),
                                r !== a && o.push(e[i]);
                        return o
                    },
                    map: function (e, t, n) {
                        var r, o, i = 0, a = [];
                        if (s(e))
                            for (r = e.length; r > i; i++)
                                o = t(e[i], i, n),
                                    null != o && a.push(o);
                        else
                            for (i in e)
                                o = t(e[i], i, n),
                                    null != o && a.push(o);
                        return te.apply([], a)
                    },
                    guid: 1,
                    proxy: function (e, t) {
                        var n, r, o;
                        return "string" == typeof t && (n = e[t],
                            t = e,
                            e = n),
                            ue.isFunction(e) ? (r = ee.call(arguments, 2),
                                o = function () {
                                    return e.apply(t || this, r.concat(ee.call(arguments)))
                                }
                                ,
                                o.guid = e.guid = e.guid || ue.guid++,
                                o) : void 0
                    },
                    now: Date.now,
                    support: ae
                }),
                "function" == typeof Symbol && (ue.fn[Symbol.iterator] = K[Symbol.iterator]),
                ue.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    oe["[object " + t + "]"] = t.toLowerCase()
                });
            var he = /*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
                function (e) {
                    function t(e, t, n, r) {
                        var o, i, s, a, l, u, d, f, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
                        if (n = n || [],
                            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                            return n;
                        if (!r && ((t ? t.ownerDocument || t : I) !== R && L(t),
                            t = t || R,
                            q)) {
                            if (11 !== g && (u = ve.exec(e)))
                                if (o = u[1]) {
                                    if (9 === g) {
                                        if (!(s = t.getElementById(o)))
                                            return n;
                                        if (s.id === o)
                                            return n.push(s),
                                                n
                                    } else if (h && (s = h.getElementById(o)) && $(t, s) && s.id === o)
                                        return n.push(s),
                                            n
                                } else {
                                    if (u[2])
                                        return K.apply(n, t.getElementsByTagName(e)),
                                            n;
                                    if ((o = u[3]) && y.getElementsByClassName && t.getElementsByClassName)
                                        return K.apply(n, t.getElementsByClassName(o)),
                                            n
                                }
                            if (y.qsa && !W[e + " "] && (!O || !O.test(e))) {
                                if (1 !== g)
                                    h = t,
                                        f = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = F),
                                        d = C(e),
                                        i = d.length,
                                        l = pe.test(a) ? "#" + a : "[id='" + a + "']"; i--;)
                                        d[i] = l + " " + p(d[i]);
                                    f = d.join(","),
                                        h = xe.test(e) && c(t.parentNode) || t
                                }
                                if (f)
                                    try {
                                        return K.apply(n, h.querySelectorAll(f)),
                                            n
                                    } catch (m) { } finally {
                                        a === F && t.removeAttribute("id")
                                    }
                            }
                        }
                        return E(e.replace(ae, "$1"), t, n, r)
                    }
                    function n() {
                        function e(n, r) {
                            return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                                e[n + " "] = r
                        }
                        var t = [];
                        return e
                    }
                    function r(e) {
                        return e[F] = !0,
                            e
                    }
                    function o(e) {
                        var t = R.createElement("div");
                        try {
                            return !!e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                                t = null
                        }
                    }
                    function i(e, t) {
                        for (var n = e.split("|"), r = n.length; r--;)
                            k.attrHandle[n[r]] = t
                    }
                    function s(e, t) {
                        var n = t && e
                            , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                        if (r)
                            return r;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function a(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return "input" === n && t.type === e
                        }
                    }
                    function l(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function u(e) {
                        return r(function (t) {
                            return t = +t,
                                r(function (n, r) {
                                    for (var o, i = e([], n.length, t), s = i.length; s--;)
                                        n[o = i[s]] && (n[o] = !(r[o] = n[o]))
                                })
                        })
                    }
                    function c(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e
                    }
                    function d() { }
                    function p(e) {
                        for (var t = 0, n = e.length, r = ""; n > t; t++)
                            r += e[t].value;
                        return r
                    }
                    function f(e, t, n) {
                        var r = t.dir
                            , o = n && "parentNode" === r
                            , i = U++;
                        return t.first ? function (t, n, i) {
                            for (; t = t[r];)
                                if (1 === t.nodeType || o)
                                    return e(t, n, i)
                        }
                            : function (t, n, s) {
                                var a, l, u, c = [P, i];
                                if (s) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || o) && e(t, n, s))
                                            return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || o) {
                                            if (u = t[F] || (t[F] = {}),
                                                l = u[t.uniqueID] || (u[t.uniqueID] = {}),
                                                (a = l[r]) && a[0] === P && a[1] === i)
                                                return c[2] = a[2];
                                            if (l[r] = c,
                                                c[2] = e(t, n, s))
                                                return !0
                                        }
                            }
                    }
                    function h(e) {
                        return e.length > 1 ? function (t, n, r) {
                            for (var o = e.length; o--;)
                                if (!e[o](t, n, r))
                                    return !1;
                            return !0
                        }
                            : e[0]
                    }
                    function g(e, n, r) {
                        for (var o = 0, i = n.length; i > o; o++)
                            t(e, n[o], r);
                        return r
                    }
                    function m(e, t, n, r, o) {
                        for (var i, s = [], a = 0, l = e.length, u = null != t; l > a; a++)
                            (i = e[a]) && (n && !n(i, r, o) || (s.push(i),
                                u && t.push(a)));
                        return s
                    }
                    function v(e, t, n, o, i, s) {
                        return o && !o[F] && (o = v(o)),
                            i && !i[F] && (i = v(i, s)),
                            r(function (r, s, a, l) {
                                var u, c, d, p = [], f = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), x = !e || !r && t ? v : m(v, p, e, a, l), b = n ? i || (r ? e : h || o) ? [] : s : x;
                                if (n && n(x, b, a, l),
                                    o)
                                    for (u = m(b, f),
                                        o(u, [], a, l),
                                        c = u.length; c--;)
                                        (d = u[c]) && (b[f[c]] = !(x[f[c]] = d));
                                if (r) {
                                    if (i || e) {
                                        if (i) {
                                            for (u = [],
                                                c = b.length; c--;)
                                                (d = b[c]) && u.push(x[c] = d);
                                            i(null, b = [], u, l)
                                        }
                                        for (c = b.length; c--;)
                                            (d = b[c]) && (u = i ? ee(r, d) : p[c]) > -1 && (r[u] = !(s[u] = d))
                                    }
                                } else
                                    b = m(b === s ? b.splice(h, b.length) : b),
                                        i ? i(null, s, b, l) : K.apply(s, b)
                            })
                    }
                    function x(e) {
                        for (var t, n, r, o = e.length, i = k.relative[e[0].type], s = i || k.relative[" "], a = i ? 1 : 0, l = f(function (e) {
                            return e === t
                        }, s, !0), u = f(function (e) {
                            return ee(t, e) > -1
                        }, s, !0), c = [function (e, n, r) {
                            var o = !i && (r || n !== S) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                            return t = null,
                                o
                        }
                        ]; o > a; a++)
                            if (n = k.relative[e[a].type])
                                c = [f(h(c), n)];
                            else {
                                if (n = k.filter[e[a].type].apply(null, e[a].matches),
                                    n[F]) {
                                    for (r = ++a; o > r && !k.relative[e[r].type]; r++)
                                        ;
                                    return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                                        value: " " === e[a - 2].type ? "*" : ""
                                    })).replace(ae, "$1"), n, r > a && x(e.slice(a, r)), o > r && x(e = e.slice(r)), o > r && p(e))
                                }
                                c.push(n)
                            }
                        return h(c)
                    }
                    function b(e, n) {
                        var o = n.length > 0
                            , i = e.length > 0
                            , s = function (r, s, a, l, u) {
                                var c, d, p, f = 0, h = "0", g = r && [], v = [], x = S, b = r || i && k.find.TAG("*", u), j = P += null == x ? 1 : Math.random() || .1, y = b.length;
                                for (u && (S = s === R || s || u); h !== y && null != (c = b[h]); h++) {
                                    if (i && c) {
                                        for (d = 0,
                                            s || c.ownerDocument === R || (L(c),
                                                a = !q); p = e[d++];)
                                            if (p(c, s || R, a)) {
                                                l.push(c);
                                                break
                                            }
                                        u && (P = j)
                                    }
                                    o && ((c = !p && c) && f--,
                                        r && g.push(c))
                                }
                                if (f += h,
                                    o && h !== f) {
                                    for (d = 0; p = n[d++];)
                                        p(g, v, s, a);
                                    if (r) {
                                        if (f > 0)
                                            for (; h--;)
                                                g[h] || v[h] || (v[h] = Q.call(l));
                                        v = m(v)
                                    }
                                    K.apply(l, v),
                                        u && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                                }
                                return u && (P = j,
                                    S = x),
                                    g
                            };
                        return o ? r(s) : s
                    }
                    var j, y, k, w, A, C, T, E, S, N, D, L, R, M, q, O, H, B, $, F = "sizzle" + 1 * new Date, I = e.document, P = 0, U = 0, _ = n(), z = n(), W = n(), Y = function (e, t) {
                        return e === t && (D = !0),
                            0
                    }, X = 1 << 31, J = {}.hasOwnProperty, V = [], Q = V.pop, G = V.push, K = V.push, Z = V.slice, ee = function (e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(ie), pe = new RegExp("^" + re + "$"), fe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re + "|[*])"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ie),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, je = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), ye = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, ke = function () {
                        L()
                    };
                    try {
                        K.apply(V = Z.call(I.childNodes), I.childNodes),
                            V[I.childNodes.length].nodeType
                    } catch (we) {
                        K = {
                            apply: V.length ? function (e, t) {
                                G.apply(e, Z.call(t))
                            }
                                : function (e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];)
                                        ;
                                    e.length = n - 1
                                }
                        }
                    }
                    y = t.support = {},
                        A = t.isXML = function (e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        }
                        ,
                        L = t.setDocument = function (e) {
                            var t, n, r = e ? e.ownerDocument || e : I;
                            return r !== R && 9 === r.nodeType && r.documentElement ? (R = r,
                                M = R.documentElement,
                                q = !A(R),
                                (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)),
                                y.attributes = o(function (e) {
                                    return e.className = "i",
                                        !e.getAttribute("className")
                                }),
                                y.getElementsByTagName = o(function (e) {
                                    return e.appendChild(R.createComment("")),
                                        !e.getElementsByTagName("*").length
                                }),
                                y.getElementsByClassName = me.test(R.getElementsByClassName),
                                y.getById = o(function (e) {
                                    return M.appendChild(e).id = F,
                                        !R.getElementsByName || !R.getElementsByName(F).length
                                }),
                                y.getById ? (k.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && q) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }
                                    ,
                                    k.filter.ID = function (e) {
                                        var t = e.replace(je, ye);
                                        return function (e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }
                                ) : (delete k.find.ID,
                                    k.filter.ID = function (e) {
                                        var t = e.replace(je, ye);
                                        return function (e) {
                                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }
                                    ),
                                k.find.TAG = y.getElementsByTagName ? function (e, t) {
                                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
                                }
                                    : function (e, t) {
                                        var n, r = [], o = 0, i = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; n = i[o++];)
                                                1 === n.nodeType && r.push(n);
                                            return r
                                        }
                                        return i
                                    }
                                ,
                                k.find.CLASS = y.getElementsByClassName && function (e, t) {
                                    return "undefined" != typeof t.getElementsByClassName && q ? t.getElementsByClassName(e) : void 0
                                }
                                ,
                                H = [],
                                O = [],
                                (y.qsa = me.test(R.querySelectorAll)) && (o(function (e) {
                                    M.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"),
                                        e.querySelectorAll("[id~=" + F + "-]").length || O.push("~="),
                                        e.querySelectorAll(":checked").length || O.push(":checked"),
                                        e.querySelectorAll("a#" + F + "+*").length || O.push(".#.+[+~]")
                                }),
                                    o(function (e) {
                                        var t = R.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="),
                                            e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            O.push(",.*:")
                                    })),
                                (y.matchesSelector = me.test(B = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function (e) {
                                    y.disconnectedMatch = B.call(e, "div"),
                                        B.call(e, "[s!='']:x"),
                                        H.push("!=", ie)
                                }),
                                O = O.length && new RegExp(O.join("|")),
                                H = H.length && new RegExp(H.join("|")),
                                t = me.test(M.compareDocumentPosition),
                                $ = t || me.test(M.contains) ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e
                                        , r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                }
                                    : function (e, t) {
                                        if (t)
                                            for (; t = t.parentNode;)
                                                if (t === e)
                                                    return !0;
                                        return !1
                                    }
                                ,
                                Y = t ? function (e, t) {
                                    if (e === t)
                                        return D = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                        1 & n || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === R || e.ownerDocument === I && $(I, e) ? -1 : t === R || t.ownerDocument === I && $(I, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                                }
                                    : function (e, t) {
                                        if (e === t)
                                            return D = !0,
                                                0;
                                        var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], l = [t];
                                        if (!o || !i)
                                            return e === R ? -1 : t === R ? 1 : o ? -1 : i ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                                        if (o === i)
                                            return s(e, t);
                                        for (n = e; n = n.parentNode;)
                                            a.unshift(n);
                                        for (n = t; n = n.parentNode;)
                                            l.unshift(n);
                                        for (; a[r] === l[r];)
                                            r++;
                                        return r ? s(a[r], l[r]) : a[r] === I ? -1 : l[r] === I ? 1 : 0
                                    }
                                ,
                                R) : R
                        }
                        ,
                        t.matches = function (e, n) {
                            return t(e, null, null, n)
                        }
                        ,
                        t.matchesSelector = function (e, n) {
                            if ((e.ownerDocument || e) !== R && L(e),
                                n = n.replace(ce, "='$1']"),
                                y.matchesSelector && q && !W[n + " "] && (!H || !H.test(n)) && (!O || !O.test(n)))
                                try {
                                    var r = B.call(e, n);
                                    if (r || y.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return r
                                } catch (o) { }
                            return t(n, R, null, [e]).length > 0
                        }
                        ,
                        t.contains = function (e, t) {
                            return (e.ownerDocument || e) !== R && L(e),
                                $(e, t)
                        }
                        ,
                        t.attr = function (e, t) {
                            (e.ownerDocument || e) !== R && L(e);
                            var n = k.attrHandle[t.toLowerCase()]
                                , r = n && J.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                            return void 0 !== r ? r : y.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }
                        ,
                        t.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        t.uniqueSort = function (e) {
                            var t, n = [], r = 0, o = 0;
                            if (D = !y.detectDuplicates,
                                N = !y.sortStable && e.slice(0),
                                e.sort(Y),
                                D) {
                                for (; t = e[o++];)
                                    t === e[o] && (r = n.push(o));
                                for (; r--;)
                                    e.splice(n[r], 1)
                            }
                            return N = null,
                                e
                        }
                        ,
                        w = t.getText = function (e) {
                            var t, n = "", r = 0, o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += w(e)
                                } else if (3 === o || 4 === o)
                                    return e.nodeValue
                            } else
                                for (; t = e[r++];)
                                    n += w(t);
                            return n
                        }
                        ,
                        k = t.selectors = {
                            cacheLength: 50,
                            createPseudo: r,
                            match: fe,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function (e) {
                                    return e[1] = e[1].replace(je, ye),
                                        e[3] = (e[3] || e[4] || e[5] || "").replace(je, ye),
                                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                        e.slice(0, 4)
                                },
                                CHILD: function (e) {
                                    return e[1] = e[1].toLowerCase(),
                                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                                        e
                                },
                                PSEUDO: function (e) {
                                    var t, n = !e[6] && e[2];
                                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                        e[2] = n.slice(0, t)),
                                        e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(je, ye).toLowerCase();
                                    return "*" === e ? function () {
                                        return !0
                                    }
                                        : function (e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                },
                                CLASS: function (e) {
                                    var t = _[e + " "];
                                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function (e) {
                                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function (e, n, r) {
                                    return function (o) {
                                        var i = t.attr(o, e);
                                        return null == i ? "!=" === n : n ? (i += "",
                                            "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                                    }
                                },
                                CHILD: function (e, t, n, r, o) {
                                    var i = "nth" !== e.slice(0, 3)
                                        , s = "last" !== e.slice(-4)
                                        , a = "of-type" === t;
                                    return 1 === r && 0 === o ? function (e) {
                                        return !!e.parentNode
                                    }
                                        : function (t, n, l) {
                                            var u, c, d, p, f, h, g = i !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), x = !l && !a, b = !1;
                                            if (m) {
                                                if (i) {
                                                    for (; g;) {
                                                        for (p = t; p = p[g];)
                                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                                return !1;
                                                        h = g = "only" === e && !h && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (h = [s ? m.firstChild : m.lastChild],
                                                    s && x) {
                                                    for (p = m,
                                                        d = p[F] || (p[F] = {}),
                                                        c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                                        u = c[e] || [],
                                                        f = u[0] === P && u[1],
                                                        b = f && u[2],
                                                        p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                                        if (1 === p.nodeType && ++b && p === t) {
                                                            c[e] = [P, f, b];
                                                            break
                                                        }
                                                } else if (x && (p = t,
                                                    d = p[F] || (p[F] = {}),
                                                    c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                                    u = c[e] || [],
                                                    f = u[0] === P && u[1],
                                                    b = f),
                                                    b === !1)
                                                    for (; (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (x && (d = p[F] || (p[F] = {}),
                                                        c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                                        c[e] = [P, b]),
                                                        p !== t));)
                                                        ;
                                                return b -= o,
                                                    b === r || b % r === 0 && b / r >= 0
                                            }
                                        }
                                },
                                PSEUDO: function (e, n) {
                                    var o, i = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return i[F] ? i(n) : i.length > 1 ? (o = [e, e, "", n],
                                        k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                            for (var r, o = i(e, n), s = o.length; s--;)
                                                r = ee(e, o[s]),
                                                    e[r] = !(t[r] = o[s])
                                        }) : function (e) {
                                            return i(e, 0, o)
                                        }
                                    ) : i
                                }
                            },
                            pseudos: {
                                not: r(function (e) {
                                    var t = []
                                        , n = []
                                        , o = T(e.replace(ae, "$1"));
                                    return o[F] ? r(function (e, t, n, r) {
                                        for (var i, s = o(e, null, r, []), a = e.length; a--;)
                                            (i = s[a]) && (e[a] = !(t[a] = i))
                                    }) : function (e, r, i) {
                                        return t[0] = e,
                                            o(t, null, i, n),
                                            t[0] = null,
                                            !n.pop()
                                    }
                                }),
                                has: r(function (e) {
                                    return function (n) {
                                        return t(e, n).length > 0
                                    }
                                }),
                                contains: r(function (e) {
                                    return e = e.replace(je, ye),
                                        function (t) {
                                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: r(function (e) {
                                    return pe.test(e || "") || t.error("unsupported lang: " + e),
                                        e = e.replace(je, ye).toLowerCase(),
                                        function (t) {
                                            var n;
                                            do
                                                if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                                    return n = n.toLowerCase(),
                                                        n === e || 0 === n.indexOf(e + "-");
                                            while ((t = t.parentNode) && 1 === t.nodeType); return !1
                                        }
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function (e) {
                                    return e === M
                                },
                                focus: function (e) {
                                    return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: function (e) {
                                    return e.disabled === !1
                                },
                                disabled: function (e) {
                                    return e.disabled === !0
                                },
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex,
                                        e.selected === !0
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6)
                                            return !1;
                                    return !0
                                },
                                parent: function (e) {
                                    return !k.pseudos.empty(e)
                                },
                                header: function (e) {
                                    return ge.test(e.nodeName)
                                },
                                input: function (e) {
                                    return he.test(e.nodeName)
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: u(function () {
                                    return [0]
                                }),
                                last: u(function (e, t) {
                                    return [t - 1]
                                }),
                                eq: u(function (e, t, n) {
                                    return [0 > n ? n + t : n]
                                }),
                                even: u(function (e, t) {
                                    for (var n = 0; t > n; n += 2)
                                        e.push(n);
                                    return e
                                }),
                                odd: u(function (e, t) {
                                    for (var n = 1; t > n; n += 2)
                                        e.push(n);
                                    return e
                                }),
                                lt: u(function (e, t, n) {
                                    for (var r = 0 > n ? n + t : n; --r >= 0;)
                                        e.push(r);
                                    return e
                                }),
                                gt: u(function (e, t, n) {
                                    for (var r = 0 > n ? n + t : n; ++r < t;)
                                        e.push(r);
                                    return e
                                })
                            }
                        },
                        k.pseudos.nth = k.pseudos.eq;
                    for (j in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        k.pseudos[j] = a(j);
                    for (j in {
                        submit: !0,
                        reset: !0
                    })
                        k.pseudos[j] = l(j);
                    return d.prototype = k.filters = k.pseudos,
                        k.setFilters = new d,
                        C = t.tokenize = function (e, n) {
                            var r, o, i, s, a, l, u, c = z[e + " "];
                            if (c)
                                return n ? 0 : c.slice(0);
                            for (a = e,
                                l = [],
                                u = k.preFilter; a;) {
                                r && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                                    l.push(i = [])),
                                    r = !1,
                                    (o = ue.exec(a)) && (r = o.shift(),
                                        i.push({
                                            value: r,
                                            type: o[0].replace(ae, " ")
                                        }),
                                        a = a.slice(r.length));
                                for (s in k.filter)
                                    !(o = fe[s].exec(a)) || u[s] && !(o = u[s](o)) || (r = o.shift(),
                                        i.push({
                                            value: r,
                                            type: s,
                                            matches: o
                                        }),
                                        a = a.slice(r.length));
                                if (!r)
                                    break
                            }
                            return n ? a.length : a ? t.error(e) : z(e, l).slice(0)
                        }
                        ,
                        T = t.compile = function (e, t) {
                            var n, r = [], o = [], i = W[e + " "];
                            if (!i) {
                                for (t || (t = C(e)),
                                    n = t.length; n--;)
                                    i = x(t[n]),
                                        i[F] ? r.push(i) : o.push(i);
                                i = W(e, b(o, r)),
                                    i.selector = e
                            }
                            return i
                        }
                        ,
                        E = t.select = function (e, t, n, r) {
                            var o, i, s, a, l, u = "function" == typeof e && e, d = !r && C(e = u.selector || e);
                            if (n = n || [],
                                1 === d.length) {
                                if (i = d[0] = d[0].slice(0),
                                    i.length > 2 && "ID" === (s = i[0]).type && y.getById && 9 === t.nodeType && q && k.relative[i[1].type]) {
                                    if (t = (k.find.ID(s.matches[0].replace(je, ye), t) || [])[0],
                                        !t)
                                        return n;
                                    u && (t = t.parentNode),
                                        e = e.slice(i.shift().value.length)
                                }
                                for (o = fe.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o],
                                    !k.relative[a = s.type]);)
                                    if ((l = k.find[a]) && (r = l(s.matches[0].replace(je, ye), xe.test(i[0].type) && c(t.parentNode) || t))) {
                                        if (i.splice(o, 1),
                                            e = r.length && p(i),
                                            !e)
                                            return K.apply(n, r),
                                                n;
                                        break
                                    }
                            }
                            return (u || T(e, d))(r, t, !q, n, !t || xe.test(e) && c(t.parentNode) || t),
                                n
                        }
                        ,
                        y.sortStable = F.split("").sort(Y).join("") === F,
                        y.detectDuplicates = !!D,
                        L(),
                        y.sortDetached = o(function (e) {
                            return 1 & e.compareDocumentPosition(R.createElement("div"))
                        }),
                        o(function (e) {
                            return e.innerHTML = "<a href='#'></a>",
                                "#" === e.firstChild.getAttribute("href")
                        }) || i("type|href|height|width", function (e, t, n) {
                            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }),
                        y.attributes && o(function (e) {
                            return e.innerHTML = "<input/>",
                                e.firstChild.setAttribute("value", ""),
                                "" === e.firstChild.getAttribute("value")
                        }) || i("value", function (e, t, n) {
                            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                        }),
                        o(function (e) {
                            return null == e.getAttribute("disabled")
                        }) || i(te, function (e, t, n) {
                            var r;
                            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }),
                        t
                }(n);
            ue.find = he,
                ue.expr = he.selectors,
                ue.expr[":"] = ue.expr.pseudos,
                ue.uniqueSort = ue.unique = he.uniqueSort,
                ue.text = he.getText,
                ue.isXMLDoc = he.isXML,
                ue.contains = he.contains;
            var ge = function (e, t, n) {
                for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && ue(e).is(n))
                            break;
                        r.push(e)
                    }
                return r
            }
                , me = function (e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                , ve = ue.expr.match.needsContext
                , xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                , be = /^.[^:#\[\.,]*$/;
            ue.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? ue.find.matchesSelector(r, e) ? [r] : [] : ue.find.matches(e, ue.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
            }
                ,
                ue.fn.extend({
                    find: function (e) {
                        var t, n = this.length, r = [], o = this;
                        if ("string" != typeof e)
                            return this.pushStack(ue(e).filter(function () {
                                for (t = 0; n > t; t++)
                                    if (ue.contains(o[t], this))
                                        return !0
                            }));
                        for (t = 0; n > t; t++)
                            ue.find(e, o[t], r);
                        return r = this.pushStack(n > 1 ? ue.unique(r) : r),
                            r.selector = this.selector ? this.selector + " " + e : e,
                            r
                    },
                    filter: function (e) {
                        return this.pushStack(a(this, e || [], !1))
                    },
                    not: function (e) {
                        return this.pushStack(a(this, e || [], !0))
                    },
                    is: function (e) {
                        return !!a(this, "string" == typeof e && ve.test(e) ? ue(e) : e || [], !1).length
                    }
                });
            var je, ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ke = ue.fn.init = function (e, t, n) {
                var r, o;
                if (!e)
                    return this;
                if (n = n || je,
                    "string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ye.exec(e),
                        !r || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof ue ? t[0] : t,
                            ue.merge(this, ue.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                            xe.test(r[1]) && ue.isPlainObject(t))
                            for (r in t)
                                ue.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return o = Z.getElementById(r[2]),
                        o && o.parentNode && (this.length = 1,
                            this[0] = o),
                        this.context = Z,
                        this.selector = e,
                        this
                }
                return e.nodeType ? (this.context = this[0] = e,
                    this.length = 1,
                    this) : ue.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ue) : (void 0 !== e.selector && (this.selector = e.selector,
                        this.context = e.context),
                        ue.makeArray(e, this))
            }
                ;
            ke.prototype = ue.fn,
                je = ue(Z);
            var we = /^(?:parents|prev(?:Until|All))/
                , Ae = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            ue.fn.extend({
                has: function (e) {
                    var t = ue(e, this)
                        , n = t.length;
                    return this.filter(function () {
                        for (var e = 0; n > e; e++)
                            if (ue.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function (e, t) {
                    for (var n, r = 0, o = this.length, i = [], s = ve.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; o > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                    return this.pushStack(i.length > 1 ? ue.uniqueSort(i) : i)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? re.call(ue(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(ue.uniqueSort(ue.merge(this.get(), ue(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
                ue.each({
                    parent: function (e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function (e) {
                        return ge(e, "parentNode")
                    },
                    parentsUntil: function (e, t, n) {
                        return ge(e, "parentNode", n)
                    },
                    next: function (e) {
                        return l(e, "nextSibling")
                    },
                    prev: function (e) {
                        return l(e, "previousSibling")
                    },
                    nextAll: function (e) {
                        return ge(e, "nextSibling")
                    },
                    prevAll: function (e) {
                        return ge(e, "previousSibling")
                    },
                    nextUntil: function (e, t, n) {
                        return ge(e, "nextSibling", n)
                    },
                    prevUntil: function (e, t, n) {
                        return ge(e, "previousSibling", n)
                    },
                    siblings: function (e) {
                        return me((e.parentNode || {}).firstChild, e)
                    },
                    children: function (e) {
                        return me(e.firstChild)
                    },
                    contents: function (e) {
                        return e.contentDocument || ue.merge([], e.childNodes)
                    }
                }, function (e, t) {
                    ue.fn[e] = function (n, r) {
                        var o = ue.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n),
                            r && "string" == typeof r && (o = ue.filter(r, o)),
                            this.length > 1 && (Ae[e] || ue.uniqueSort(o),
                                we.test(e) && o.reverse()),
                            this.pushStack(o)
                    }
                });
            var Ce = /\S+/g;
            ue.Callbacks = function (e) {
                e = "string" == typeof e ? u(e) : ue.extend({}, e);
                var t, n, r, o, i = [], s = [], a = -1, l = function () {
                    for (o = e.once,
                        r = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < i.length;)
                            i[a].apply(n[0], n[1]) === !1 && e.stopOnFalse && (a = i.length,
                                n = !1);
                    e.memory || (n = !1),
                        t = !1,
                        o && (i = n ? [] : "")
                }, c = {
                    add: function () {
                        return i && (n && !t && (a = i.length - 1,
                            s.push(n)),
                            function r(t) {
                                ue.each(t, function (t, n) {
                                    ue.isFunction(n) ? e.unique && c.has(n) || i.push(n) : n && n.length && "string" !== ue.type(n) && r(n)
                                })
                            }(arguments),
                            n && !t && l()),
                            this
                    },
                    remove: function () {
                        return ue.each(arguments, function (e, t) {
                            for (var n; (n = ue.inArray(t, i, n)) > -1;)
                                i.splice(n, 1),
                                    a >= n && a--
                        }),
                            this
                    },
                    has: function (e) {
                        return e ? ue.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function () {
                        return i && (i = []),
                            this
                    },
                    disable: function () {
                        return o = s = [],
                            i = n = "",
                            this
                    },
                    disabled: function () {
                        return !i
                    },
                    lock: function () {
                        return o = s = [],
                            n || (i = n = ""),
                            this
                    },
                    locked: function () {
                        return !!o
                    },
                    fireWith: function (e, n) {
                        return o || (n = n || [],
                            n = [e, n.slice ? n.slice() : n],
                            s.push(n),
                            t || l()),
                            this
                    },
                    fire: function () {
                        return c.fireWith(this, arguments),
                            this
                    },
                    fired: function () {
                        return !!r
                    }
                };
                return c
            }
                ,
                ue.extend({
                    Deferred: function (e) {
                        var t = [["resolve", "done", ue.Callbacks("once memory"), "resolved"], ["reject", "fail", ue.Callbacks("once memory"), "rejected"], ["notify", "progress", ue.Callbacks("memory")]]
                            , n = "pending"
                            , r = {
                                state: function () {
                                    return n
                                },
                                always: function () {
                                    return o.done(arguments).fail(arguments),
                                        this
                                },
                                then: function () {
                                    var e = arguments;
                                    return ue.Deferred(function (n) {
                                        ue.each(t, function (t, i) {
                                            var s = ue.isFunction(e[t]) && e[t];
                                            o[i[1]](function () {
                                                var e = s && s.apply(this, arguments);
                                                e && ue.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                            })
                                        }),
                                            e = null
                                    }).promise()
                                },
                                promise: function (e) {
                                    return null != e ? ue.extend(e, r) : r
                                }
                            }
                            , o = {};
                        return r.pipe = r.then,
                            ue.each(t, function (e, i) {
                                var s = i[2]
                                    , a = i[3];
                                r[i[1]] = s.add,
                                    a && s.add(function () {
                                        n = a
                                    }, t[1 ^ e][2].disable, t[2][2].lock),
                                    o[i[0]] = function () {
                                        return o[i[0] + "With"](this === o ? r : this, arguments),
                                            this
                                    }
                                    ,
                                    o[i[0] + "With"] = s.fireWith
                            }),
                            r.promise(o),
                            e && e.call(o, o),
                            o
                    },
                    when: function (e) {
                        var t, n, r, o = 0, i = ee.call(arguments), s = i.length, a = 1 !== s || e && ue.isFunction(e.promise) ? s : 0, l = 1 === a ? e : ue.Deferred(), u = function (e, n, r) {
                            return function (o) {
                                n[e] = this,
                                    r[e] = arguments.length > 1 ? ee.call(arguments) : o,
                                    r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                            }
                        };
                        if (s > 1)
                            for (t = new Array(s),
                                n = new Array(s),
                                r = new Array(s); s > o; o++)
                                i[o] && ue.isFunction(i[o].promise) ? i[o].promise().progress(u(o, n, t)).done(u(o, r, i)).fail(l.reject) : --a;
                        return a || l.resolveWith(r, i),
                            l.promise()
                    }
                });
            var Te;
            ue.fn.ready = function (e) {
                return ue.ready.promise().done(e),
                    this
            }
                ,
                ue.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (e) {
                        e ? ue.readyWait++ : ue.ready(!0)
                    },
                    ready: function (e) {
                        (e === !0 ? --ue.readyWait : ue.isReady) || (ue.isReady = !0,
                            e !== !0 && --ue.readyWait > 0 || (Te.resolveWith(Z, [ue]),
                                ue.fn.triggerHandler && (ue(Z).triggerHandler("ready"),
                                    ue(Z).off("ready"))))
                    }
                }),
                ue.ready.promise = function (e) {
                    return Te || (Te = ue.Deferred(),
                        "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(ue.ready) : (Z.addEventListener("DOMContentLoaded", c),
                            n.addEventListener("load", c))),
                        Te.promise(e)
                }
                ,
                ue.ready.promise();
            var Ee = function (e, t, n, r, o, i, s) {
                var a = 0
                    , l = e.length
                    , u = null == n;
                if ("object" === ue.type(n)) {
                    o = !0;
                    for (a in n)
                        Ee(e, t, a, n[a], !0, i, s)
                } else if (void 0 !== r && (o = !0,
                    ue.isFunction(r) || (s = !0),
                    u && (s ? (t.call(e, r),
                        t = null) : (u = t,
                            t = function (e, t, n) {
                                return u.call(ue(e), n)
                            }
                        )),
                    t))
                    for (; l > a; a++)
                        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
            }
                , Se = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            d.uid = 1,
                d.prototype = {
                    register: function (e, t) {
                        var n = t || {};
                        return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                            value: n,
                            writable: !0,
                            configurable: !0
                        }),
                            e[this.expando]
                    },
                    cache: function (e) {
                        if (!Se(e))
                            return {};
                        var t = e[this.expando];
                        return t || (t = {},
                            Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))),
                            t
                    },
                    set: function (e, t, n) {
                        var r, o = this.cache(e);
                        if ("string" == typeof t)
                            o[t] = n;
                        else
                            for (r in t)
                                o[r] = t[r];
                        return o
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                    },
                    access: function (e, t, n) {
                        var r;
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
                            void 0 !== r ? r : this.get(e, ue.camelCase(t))) : (this.set(e, t, n),
                                void 0 !== n ? n : t)
                    },
                    remove: function (e, t) {
                        var n, r, o, i = e[this.expando];
                        if (void 0 !== i) {
                            if (void 0 === t)
                                this.register(e);
                            else {
                                ue.isArray(t) ? r = t.concat(t.map(ue.camelCase)) : (o = ue.camelCase(t),
                                    t in i ? r = [t, o] : (r = o,
                                        r = r in i ? [r] : r.match(Ce) || [])),
                                    n = r.length;
                                for (; n--;)
                                    delete i[r[n]]
                            }
                            (void 0 === t || ue.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !ue.isEmptyObject(t)
                    }
                };
            var Ne = new d
                , De = new d
                , Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , Re = /[A-Z]/g;
            ue.extend({
                hasData: function (e) {
                    return De.hasData(e) || Ne.hasData(e)
                },
                data: function (e, t, n) {
                    return De.access(e, t, n)
                },
                removeData: function (e, t) {
                    De.remove(e, t)
                },
                _data: function (e, t, n) {
                    return Ne.access(e, t, n)
                },
                _removeData: function (e, t) {
                    Ne.remove(e, t)
                }
            }),
                ue.fn.extend({
                    data: function (e, t) {
                        var n, r, o, i = this[0], s = i && i.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = De.get(i),
                                1 === i.nodeType && !Ne.get(i, "hasDataAttrs"))) {
                                for (n = s.length; n--;)
                                    s[n] && (r = s[n].name,
                                        0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)),
                                            p(i, r, o[r])));
                                Ne.set(i, "hasDataAttrs", !0)
                            }
                            return o
                        }
                        return "object" == typeof e ? this.each(function () {
                            De.set(this, e)
                        }) : Ee(this, function (t) {
                            var n, r;
                            if (i && void 0 === t) {
                                if (n = De.get(i, e) || De.get(i, e.replace(Re, "-$&").toLowerCase()),
                                    void 0 !== n)
                                    return n;
                                if (r = ue.camelCase(e),
                                    n = De.get(i, r),
                                    void 0 !== n)
                                    return n;
                                if (n = p(i, r, void 0),
                                    void 0 !== n)
                                    return n
                            } else
                                r = ue.camelCase(e),
                                    this.each(function () {
                                        var n = De.get(this, r);
                                        De.set(this, r, t),
                                            e.indexOf("-") > -1 && void 0 !== n && De.set(this, e, t)
                                    })
                        }, null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            De.remove(this, e)
                        })
                    }
                }),
                ue.extend({
                    queue: function (e, t, n) {
                        var r;
                        return e ? (t = (t || "fx") + "queue",
                            r = Ne.get(e, t),
                            n && (!r || ue.isArray(n) ? r = Ne.access(e, t, ue.makeArray(n)) : r.push(n)),
                            r || []) : void 0
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = ue.queue(e, t)
                            , r = n.length
                            , o = n.shift()
                            , i = ue._queueHooks(e, t)
                            , s = function () {
                                ue.dequeue(e, t)
                            };
                        "inprogress" === o && (o = n.shift(),
                            r--),
                            o && ("fx" === t && n.unshift("inprogress"),
                                delete i.stop,
                                o.call(e, s, i)),
                            !r && i && i.empty.fire()
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return Ne.get(e, n) || Ne.access(e, n, {
                            empty: ue.Callbacks("once memory").add(function () {
                                Ne.remove(e, [t + "queue", n])
                            })
                        })
                    }
                }),
                ue.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                            e = "fx",
                            n--),
                            arguments.length < n ? ue.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                                var n = ue.queue(this, e, t);
                                ue._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== n[0] && ue.dequeue(this, e)
                            })
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            ue.dequeue(this, e)
                        })
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function (e, t) {
                        var n, r = 1, o = ue.Deferred(), i = this, s = this.length, a = function () {
                            --r || o.resolveWith(i, [i])
                        };
                        for ("string" != typeof e && (t = e,
                            e = void 0),
                            e = e || "fx"; s--;)
                            n = Ne.get(i[s], e + "queueHooks"),
                                n && n.empty && (r++,
                                    n.empty.add(a));
                        return a(),
                            o.promise(t)
                    }
                });
            var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , qe = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i")
                , Oe = ["Top", "Right", "Bottom", "Left"]
                , He = function (e, t) {
                    return e = t || e,
                        "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
                }
                , Be = /^(?:checkbox|radio)$/i
                , $e = /<([\w:-]+)/
                , Fe = /^$|\/(?:java|ecma)script/i
                , Ie = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Ie.optgroup = Ie.option,
                Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead,
                Ie.th = Ie.td;
            var Pe = /<|&#?\w+;/;
            !function () {
                var e = Z.createDocumentFragment()
                    , t = e.appendChild(Z.createElement("div"))
                    , n = Z.createElement("input");
                n.setAttribute("type", "radio"),
                    n.setAttribute("checked", "checked"),
                    n.setAttribute("name", "t"),
                    t.appendChild(n),
                    ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    t.innerHTML = "<textarea>x</textarea>",
                    ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Ue = /^key/
                , _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                , ze = /^([^.]*)(?:\.(.+)|)/;
            ue.event = {
                global: {},
                add: function (e, t, n, r, o) {
                    var i, s, a, l, u, c, d, p, f, h, g, m = Ne.get(e);
                    if (m)
                        for (n.handler && (i = n,
                            n = i.handler,
                            o = i.selector),
                            n.guid || (n.guid = ue.guid++),
                            (l = m.events) || (l = m.events = {}),
                            (s = m.handle) || (s = m.handle = function (t) {
                                return "undefined" != typeof ue && ue.event.triggered !== t.type ? ue.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            t = (t || "").match(Ce) || [""],
                            u = t.length; u--;)
                            a = ze.exec(t[u]) || [],
                                f = g = a[1],
                                h = (a[2] || "").split(".").sort(),
                                f && (d = ue.event.special[f] || {},
                                    f = (o ? d.delegateType : d.bindType) || f,
                                    d = ue.event.special[f] || {},
                                    c = ue.extend({
                                        type: f,
                                        origType: g,
                                        data: r,
                                        handler: n,
                                        guid: n.guid,
                                        selector: o,
                                        needsContext: o && ue.expr.match.needsContext.test(o),
                                        namespace: h.join(".")
                                    }, i),
                                    (p = l[f]) || (p = l[f] = [],
                                        p.delegateCount = 0,
                                        d.setup && d.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)),
                                    d.add && (d.add.call(e, c),
                                        c.handler.guid || (c.handler.guid = n.guid)),
                                    o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                    ue.event.global[f] = !0)
                },
                remove: function (e, t, n, r, o) {
                    var i, s, a, l, u, c, d, p, f, h, g, m = Ne.hasData(e) && Ne.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(Ce) || [""],
                            u = t.length; u--;)
                            if (a = ze.exec(t[u]) || [],
                                f = g = a[1],
                                h = (a[2] || "").split(".").sort(),
                                f) {
                                for (d = ue.event.special[f] || {},
                                    f = (r ? d.delegateType : d.bindType) || f,
                                    p = l[f] || [],
                                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    s = i = p.length; i--;)
                                    c = p[i],
                                        !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1),
                                            c.selector && p.delegateCount--,
                                            d.remove && d.remove.call(e, c));
                                s && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ue.removeEvent(e, f, m.handle),
                                    delete l[f])
                            } else
                                for (f in l)
                                    ue.event.remove(e, f + t[u], n, r, !0);
                        ue.isEmptyObject(l) && Ne.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = ue.event.fix(e);
                    var t, n, r, o, i, s = [], a = ee.call(arguments), l = (Ne.get(this, "events") || {})[e.type] || [], u = ue.event.special[e.type] || {};
                    if (a[0] = e,
                        e.delegateTarget = this,
                        !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (s = ue.event.handlers.call(this, e, l),
                            t = 0; (o = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem,
                                n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)
                                e.rnamespace && !e.rnamespace.test(i.namespace) || (e.handleObj = i,
                                    e.data = i.data,
                                    r = ((ue.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a),
                                    void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                                        e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, o, i, s = [], a = t.delegateCount, l = e.target;
                    if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                                for (r = [],
                                    n = 0; a > n; n++)
                                    i = t[n],
                                        o = i.selector + " ",
                                        void 0 === r[o] && (r[o] = i.needsContext ? ue(o, this).index(l) > -1 : ue.find(o, this, null, [l]).length),
                                        r[o] && r.push(i);
                                r.length && s.push({
                                    elem: l,
                                    handlers: r
                                })
                            }
                    return a < t.length && s.push({
                        elem: this,
                        handlers: t.slice(a)
                    }),
                        s
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                            e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, r, o, i = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z,
                            r = n.documentElement,
                            o = n.body,
                            e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0),
                            e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)),
                            e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                            e
                    }
                },
                fix: function (e) {
                    if (e[ue.expando])
                        return e;
                    var t, n, r, o = e.type, i = e, s = this.fixHooks[o];
                    for (s || (this.fixHooks[o] = s = _e.test(o) ? this.mouseHooks : Ue.test(o) ? this.keyHooks : {}),
                        r = s.props ? this.props.concat(s.props) : this.props,
                        e = new ue.Event(i),
                        t = r.length; t--;)
                        n = r[t],
                            e[n] = i[n];
                    return e.target || (e.target = Z),
                        3 === e.target.nodeType && (e.target = e.target.parentNode),
                        s.filter ? s.filter(e, i) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            return this !== b() && this.focus ? (this.focus(),
                                !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === b() && this.blur ? (this.blur(),
                                !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && ue.nodeName(this, "input") ? (this.click(),
                                !1) : void 0
                        },
                        _default: function (e) {
                            return ue.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
                ue.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                ue.Event = function (e, t) {
                    return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e,
                        this.type = e.type,
                        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : x) : this.type = e,
                        t && ue.extend(this, t),
                        this.timeStamp = e && e.timeStamp || ue.now(),
                        void (this[ue.expando] = !0)) : new ue.Event(e, t)
                }
                ,
                ue.Event.prototype = {
                    constructor: ue.Event,
                    isDefaultPrevented: x,
                    isPropagationStopped: x,
                    isImmediatePropagationStopped: x,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = v,
                            e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        this.isPropagationStopped = v,
                            e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = v,
                            e && !this.isSimulated && e.stopImmediatePropagation(),
                            this.stopPropagation()
                    }
                },
                ue.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function (e, t) {
                    ue.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n, r = this, o = e.relatedTarget, i = e.handleObj;
                            return o && (o === r || ue.contains(r, o)) || (e.type = i.origType,
                                n = i.handler.apply(this, arguments),
                                e.type = t),
                                n
                        }
                    }
                }),
                ue.fn.extend({
                    on: function (e, t, n, r) {
                        return j(this, e, t, n, r)
                    },
                    one: function (e, t, n, r) {
                        return j(this, e, t, n, r, 1)
                    },
                    off: function (e, t, n) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj)
                            return r = e.handleObj,
                                ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                                this;
                        if ("object" == typeof e) {
                            for (o in e)
                                this.off(o, t, e[o]);
                            return this
                        }
                        return t !== !1 && "function" != typeof t || (n = t,
                            t = void 0),
                            n === !1 && (n = x),
                            this.each(function () {
                                ue.event.remove(this, e, n, t)
                            })
                    }
                });
            var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                , Ye = /<script|<style|<link/i
                , Xe = /checked\s*(?:[^=]|=\s*.checked.)/i
                , Je = /^true\/(.*)/
                , Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ue.extend({
                htmlPrefilter: function (e) {
                    return e.replace(We, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var r, o, i, s, a = e.cloneNode(!0), l = ue.contains(e.ownerDocument, e);
                    if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                        for (s = h(a),
                            i = h(e),
                            r = 0,
                            o = i.length; o > r; r++)
                            C(i[r], s[r]);
                    if (t)
                        if (n)
                            for (i = i || h(e),
                                s = s || h(a),
                                r = 0,
                                o = i.length; o > r; r++)
                                A(i[r], s[r]);
                        else
                            A(e, a);
                    return s = h(a, "script"),
                        s.length > 0 && g(s, !l && h(e, "script")),
                        a
                },
                cleanData: function (e) {
                    for (var t, n, r, o = ue.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (Se(n)) {
                            if (t = n[Ne.expando]) {
                                if (t.events)
                                    for (r in t.events)
                                        o[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, t.handle);
                                n[Ne.expando] = void 0
                            }
                            n[De.expando] && (n[De.expando] = void 0)
                        }
                }
            }),
                ue.fn.extend({
                    domManip: T,
                    detach: function (e) {
                        return E(this, e, !0)
                    },
                    remove: function (e) {
                        return E(this, e)
                    },
                    text: function (e) {
                        return Ee(this, function (e) {
                            return void 0 === e ? ue.text(this) : this.empty().each(function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function () {
                        return T(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = y(this, e);
                                t.appendChild(e)
                            }
                        })
                    },
                    prepend: function () {
                        return T(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = y(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function () {
                        return T(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function () {
                        return T(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (ue.cleanData(h(e, !1)),
                                e.textContent = "");
                        return this
                    },
                    clone: function (e, t) {
                        return e = null == e ? !1 : e,
                            t = null == t ? e : t,
                            this.map(function () {
                                return ue.clone(this, e, t)
                            })
                    },
                    html: function (e) {
                        return Ee(this, function (e) {
                            var t = this[0] || {}
                                , n = 0
                                , r = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Ye.test(e) && !Ie[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = ue.htmlPrefilter(e);
                                try {
                                    for (; r > n; n++)
                                        t = this[n] || {},
                                            1 === t.nodeType && (ue.cleanData(h(t, !1)),
                                                t.innerHTML = e);
                                    t = 0
                                } catch (o) { }
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function () {
                        var e = [];
                        return T(this, arguments, function (t) {
                            var n = this.parentNode;
                            ue.inArray(this, e) < 0 && (ue.cleanData(h(this)),
                                n && n.replaceChild(t, this))
                        }, e)
                    }
                }),
                ue.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function (e, t) {
                    ue.fn[e] = function (e) {
                        for (var n, r = [], o = ue(e), i = o.length - 1, s = 0; i >= s; s++)
                            n = s === i ? this : this.clone(!0),
                                ue(o[s])[t](n),
                                ne.apply(r, n.get());
                        return this.pushStack(r)
                    }
                });
            var Qe, Ge = {
                HTML: "block",
                BODY: "block"
            }, Ke = /^margin/, Ze = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"), et = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                    t.getComputedStyle(e)
            }, tt = function (e, t, n, r) {
                var o, i, s = {};
                for (i in t)
                    s[i] = e.style[i],
                        e.style[i] = t[i];
                o = n.apply(e, r || []);
                for (i in t)
                    e.style[i] = s[i];
                return o
            }, nt = Z.documentElement;
            !function () {
                function e() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        a.innerHTML = "",
                        nt.appendChild(s);
                    var e = n.getComputedStyle(a);
                    t = "1%" !== e.top,
                        i = "2px" === e.marginLeft,
                        r = "4px" === e.width,
                        a.style.marginRight = "50%",
                        o = "4px" === e.marginRight,
                        nt.removeChild(s)
                }
                var t, r, o, i, s = Z.createElement("div"), a = Z.createElement("div");
                a.style && (a.style.backgroundClip = "content-box",
                    a.cloneNode(!0).style.backgroundClip = "",
                    ae.clearCloneStyle = "content-box" === a.style.backgroundClip,
                    s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                    s.appendChild(a),
                    ue.extend(ae, {
                        pixelPosition: function () {
                            return e(),
                                t
                        },
                        boxSizingReliable: function () {
                            return null == r && e(),
                                r
                        },
                        pixelMarginRight: function () {
                            return null == r && e(),
                                o
                        },
                        reliableMarginLeft: function () {
                            return null == r && e(),
                                i
                        },
                        reliableMarginRight: function () {
                            var e, t = a.appendChild(Z.createElement("div"));
                            return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                                t.style.marginRight = t.style.width = "0",
                                a.style.width = "1px",
                                nt.appendChild(s),
                                e = !parseFloat(n.getComputedStyle(t).marginRight),
                                nt.removeChild(s),
                                a.removeChild(t),
                                e
                        }
                    }))
            }();
            var rt = /^(none|table(?!-c[ea]).+)/
                , ot = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                , it = {
                    letterSpacing: "0",
                    fontWeight: "400"
                }
                , st = ["Webkit", "O", "Moz", "ms"]
                , at = Z.createElement("div").style;
            ue.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = D(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, s, a = ue.camelCase(t), l = e.style;
                        return t = ue.cssProps[a] || (ue.cssProps[a] = R(a) || a),
                            s = ue.cssHooks[t] || ue.cssHooks[a],
                            void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : l[t] : (i = typeof n,
                                "string" === i && (o = qe.exec(n)) && o[1] && (n = f(e, t, o),
                                    i = "number"),
                                null != n && n === n && ("number" === i && (n += o && o[3] || (ue.cssNumber[a] ? "" : "px")),
                                    ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                    s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l[t] = n)),
                                void 0)
                    }
                },
                css: function (e, t, n, r) {
                    var o, i, s, a = ue.camelCase(t);
                    return t = ue.cssProps[a] || (ue.cssProps[a] = R(a) || a),
                        s = ue.cssHooks[t] || ue.cssHooks[a],
                        s && "get" in s && (o = s.get(e, !0, n)),
                        void 0 === o && (o = D(e, t, r)),
                        "normal" === o && t in it && (o = it[t]),
                        "" === n || n ? (i = parseFloat(o),
                            n === !0 || isFinite(i) ? i || 0 : o) : o
                }
            }),
                ue.each(["height", "width"], function (e, t) {
                    ue.cssHooks[t] = {
                        get: function (e, n, r) {
                            return n ? rt.test(ue.css(e, "display")) && 0 === e.offsetWidth ? tt(e, ot, function () {
                                return O(e, t, r)
                            }) : O(e, t, r) : void 0
                        },
                        set: function (e, n, r) {
                            var o, i = r && et(e), s = r && q(e, t, r, "border-box" === ue.css(e, "boxSizing", !1, i), i);
                            return s && (o = qe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                                n = ue.css(e, t)),
                                M(e, n, s)
                        }
                    }
                }),
                ue.cssHooks.marginLeft = L(ae.reliableMarginLeft, function (e, t) {
                    return t ? (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                        marginLeft: 0
                    }, function () {
                        return e.getBoundingClientRect().left
                    })) + "px" : void 0
                }),
                ue.cssHooks.marginRight = L(ae.reliableMarginRight, function (e, t) {
                    return t ? tt(e, {
                        display: "inline-block"
                    }, D, [e, "marginRight"]) : void 0
                }),
                ue.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (e, t) {
                    ue.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                                o[e + Oe[r] + t] = i[r] || i[r - 2] || i[0];
                            return o
                        }
                    },
                        Ke.test(e) || (ue.cssHooks[e + t].set = M)
                }),
                ue.fn.extend({
                    css: function (e, t) {
                        return Ee(this, function (e, t, n) {
                            var r, o, i = {}, s = 0;
                            if (ue.isArray(t)) {
                                for (r = et(e),
                                    o = t.length; o > s; s++)
                                    i[t[s]] = ue.css(e, t[s], !1, r);
                                return i
                            }
                            return void 0 !== n ? ue.style(e, t, n) : ue.css(e, t)
                        }, e, t, arguments.length > 1)
                    },
                    show: function () {
                        return H(this, !0)
                    },
                    hide: function () {
                        return H(this)
                    },
                    toggle: function (e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                            He(this) ? ue(this).show() : ue(this).hide()
                        })
                    }
                }),
                ue.Tween = B,
                B.prototype = {
                    constructor: B,
                    init: function (e, t, n, r, o, i) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = o || ue.easing._default,
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = r,
                            this.unit = i || (ue.cssNumber[n] ? "" : "px")
                    },
                    cur: function () {
                        var e = B.propHooks[this.prop];
                        return e && e.get ? e.get(this) : B.propHooks._default.get(this)
                    },
                    run: function (e) {
                        var t, n = B.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                            this.now = (this.end - this.start) * t + this.start,
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : B.propHooks._default.set(this),
                            this
                    }
                },
                B.prototype.init.prototype = B.prototype,
                B.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ue.css(e.elem, e.prop, ""),
                                t && "auto" !== t ? t : 0)
                        },
                        set: function (e) {
                            ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ue.cssProps[e.prop]] && !ue.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ue.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                B.propHooks.scrollTop = B.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                ue.easing = {
                    linear: function (e) {
                        return e
                    },
                    swing: function (e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                ue.fx = B.prototype.init,
                ue.fx.step = {};
            var lt, ut, ct = /^(?:toggle|show|hide)$/, dt = /queueHooks$/;
            ue.Animation = ue.extend(_, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return f(n.elem, e, qe.exec(t), n),
                            n
                    }
                    ]
                },
                tweener: function (e, t) {
                    ue.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.match(Ce);
                    for (var n, r = 0, o = e.length; o > r; r++)
                        n = e[r],
                            _.tweeners[n] = _.tweeners[n] || [],
                            _.tweeners[n].unshift(t)
                },
                prefilters: [P],
                prefilter: function (e, t) {
                    t ? _.prefilters.unshift(e) : _.prefilters.push(e)
                }
            }),
                ue.speed = function (e, t, n) {
                    var r = e && "object" == typeof e ? ue.extend({}, e) : {
                        complete: n || !n && t || ue.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !ue.isFunction(t) && t
                    };
                    return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default,
                        null != r.queue && r.queue !== !0 || (r.queue = "fx"),
                        r.old = r.complete,
                        r.complete = function () {
                            ue.isFunction(r.old) && r.old.call(this),
                                r.queue && ue.dequeue(this, r.queue)
                        }
                        ,
                        r
                }
                ,
                ue.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(He).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function (e, t, n, r) {
                        var o = ue.isEmptyObject(e)
                            , i = ue.speed(t, n, r)
                            , s = function () {
                                var t = _(this, ue.extend({}, e), i);
                                (o || Ne.get(this, "finish")) && t.stop(!0)
                            };
                        return s.finish = s,
                            o || i.queue === !1 ? this.each(s) : this.queue(i.queue, s)
                    },
                    stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop,
                                t(n)
                        };
                        return "string" != typeof e && (n = t,
                            t = e,
                            e = void 0),
                            t && e !== !1 && this.queue(e || "fx", []),
                            this.each(function () {
                                var t = !0
                                    , o = null != e && e + "queueHooks"
                                    , i = ue.timers
                                    , s = Ne.get(this);
                                if (o)
                                    s[o] && s[o].stop && r(s[o]);
                                else
                                    for (o in s)
                                        s[o] && s[o].stop && dt.test(o) && r(s[o]);
                                for (o = i.length; o--;)
                                    i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                                        t = !1,
                                        i.splice(o, 1));
                                !t && n || ue.dequeue(this, e)
                            })
                    },
                    finish: function (e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function () {
                                var t, n = Ne.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = ue.timers, s = r ? r.length : 0;
                                for (n.finish = !0,
                                    ue.queue(this, e, []),
                                    o && o.stop && o.stop.call(this, !0),
                                    t = i.length; t--;)
                                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                                        i.splice(t, 1));
                                for (t = 0; s > t; t++)
                                    r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                ue.each(["toggle", "show", "hide"], function (e, t) {
                    var n = ue.fn[t];
                    ue.fn[t] = function (e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, o)
                    }
                }),
                ue.each({
                    slideDown: F("show"),
                    slideUp: F("hide"),
                    slideToggle: F("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function (e, t) {
                    ue.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }),
                ue.timers = [],
                ue.fx.tick = function () {
                    var e, t = 0, n = ue.timers;
                    for (lt = ue.now(); t < n.length; t++)
                        e = n[t],
                            e() || n[t] !== e || n.splice(t--, 1);
                    n.length || ue.fx.stop(),
                        lt = void 0
                }
                ,
                ue.fx.timer = function (e) {
                    ue.timers.push(e),
                        e() ? ue.fx.start() : ue.timers.pop()
                }
                ,
                ue.fx.interval = 13,
                ue.fx.start = function () {
                    ut || (ut = n.setInterval(ue.fx.tick, ue.fx.interval))
                }
                ,
                ue.fx.stop = function () {
                    n.clearInterval(ut),
                        ut = null
                }
                ,
                ue.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                ue.fn.delay = function (e, t) {
                    return e = ue.fx ? ue.fx.speeds[e] || e : e,
                        t = t || "fx",
                        this.queue(t, function (t, r) {
                            var o = n.setTimeout(t, e);
                            r.stop = function () {
                                n.clearTimeout(o)
                            }
                        })
                }
                ,
                function () {
                    var e = Z.createElement("input")
                        , t = Z.createElement("select")
                        , n = t.appendChild(Z.createElement("option"));
                    e.type = "checkbox",
                        ae.checkOn = "" !== e.value,
                        ae.optSelected = n.selected,
                        t.disabled = !0,
                        ae.optDisabled = !n.disabled,
                        e = Z.createElement("input"),
                        e.value = "t",
                        e.type = "radio",
                        ae.radioValue = "t" === e.value
                }();
            var pt, ft = ue.expr.attrHandle;
            ue.fn.extend({
                attr: function (e, t) {
                    return Ee(this, ue.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        ue.removeAttr(this, e)
                    })
                }
            }),
                ue.extend({
                    attr: function (e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i)
                            return "undefined" == typeof e.getAttribute ? ue.prop(e, t, n) : (1 === i && ue.isXMLDoc(e) || (t = t.toLowerCase(),
                                o = ue.attrHooks[t] || (ue.expr.match.bool.test(t) ? pt : void 0)),
                                void 0 !== n ? null === n ? void ue.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                                    n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = ue.find.attr(e, t),
                                        null == r ? void 0 : r))
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!ae.radioValue && "radio" === t && ue.nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                        n && (e.value = n),
                                        t
                                }
                            }
                        }
                    },
                    removeAttr: function (e, t) {
                        var n, r, o = 0, i = t && t.match(Ce);
                        if (i && 1 === e.nodeType)
                            for (; n = i[o++];)
                                r = ue.propFix[n] || n,
                                    ue.expr.match.bool.test(n) && (e[r] = !1),
                                    e.removeAttribute(n)
                    }
                }),
                pt = {
                    set: function (e, t, n) {
                        return t === !1 ? ue.removeAttr(e, n) : e.setAttribute(n, n),
                            n
                    }
                },
                ue.each(ue.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = ft[t] || ue.find.attr;
                    ft[t] = function (e, t, r) {
                        var o, i;
                        return r || (i = ft[t],
                            ft[t] = o,
                            o = null != n(e, t, r) ? t.toLowerCase() : null,
                            ft[t] = i),
                            o
                    }
                });
            var ht = /^(?:input|select|textarea|button)$/i
                , gt = /^(?:a|area)$/i;
            ue.fn.extend({
                prop: function (e, t) {
                    return Ee(this, ue.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[ue.propFix[e] || e]
                    })
                }
            }),
                ue.extend({
                    prop: function (e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i)
                            return 1 === i && ue.isXMLDoc(e) || (t = ue.propFix[t] || t,
                                o = ue.propHooks[t]),
                                void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = ue.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    }
                }),
                ae.optSelected || (ue.propHooks.selected = {
                    get: function (e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex,
                            null
                    },
                    set: function (e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                            t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    ue.propFix[this.toLowerCase()] = this
                });
            var mt = /[\t\r\n\f]/g;
            ue.fn.extend({
                addClass: function (e) {
                    var t, n, r, o, i, s, a, l = 0;
                    if (ue.isFunction(e))
                        return this.each(function (t) {
                            ue(this).addClass(e.call(this, t, z(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(Ce) || []; n = this[l++];)
                            if (o = z(n),
                                r = 1 === n.nodeType && (" " + o + " ").replace(mt, " ")) {
                                for (s = 0; i = t[s++];)
                                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a = ue.trim(r),
                                    o !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, r, o, i, s, a, l = 0;
                    if (ue.isFunction(e))
                        return this.each(function (t) {
                            ue(this).removeClass(e.call(this, t, z(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Ce) || []; n = this[l++];)
                            if (o = z(n),
                                r = 1 === n.nodeType && (" " + o + " ").replace(mt, " ")) {
                                for (s = 0; i = t[s++];)
                                    for (; r.indexOf(" " + i + " ") > -1;)
                                        r = r.replace(" " + i + " ", " ");
                                a = ue.trim(r),
                                    o !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ue.isFunction(e) ? this.each(function (n) {
                        ue(this).toggleClass(e.call(this, n, z(this), t), t)
                    }) : this.each(function () {
                        var t, r, o, i;
                        if ("string" === n)
                            for (r = 0,
                                o = ue(this),
                                i = e.match(Ce) || []; t = i[r++];)
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = z(this),
                                t && Ne.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ne.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + z(n) + " ").replace(mt, " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var vt = /\r/g
                , xt = /[\x20\t\r\n\f]+/g;
            ue.fn.extend({
                val: function (e) {
                    var t, n, r, o = this[0];
                    {
                        if (arguments.length)
                            return r = ue.isFunction(e),
                                this.each(function (n) {
                                    var o;
                                    1 === this.nodeType && (o = r ? e.call(this, n, ue(this).val()) : e,
                                        null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function (e) {
                                            return null == e ? "" : e + ""
                                        })),
                                        t = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()],
                                        t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                                });
                        if (o)
                            return t = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()],
                                t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
                                    "string" == typeof n ? n.replace(vt, "") : null == n ? "" : n)
                    }
                }
            }),
                ue.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = ue.find.attr(e, "value");
                                return null != t ? t : ue.trim(ue.text(e)).replace(xt, " ")
                            }
                        },
                        select: {
                            get: function (e) {
                                for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, s = i ? null : [], a = i ? o + 1 : r.length, l = 0 > o ? a : i ? o : 0; a > l; l++)
                                    if (n = r[l],
                                        (n.selected || l === o) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ue.nodeName(n.parentNode, "optgroup"))) {
                                        if (t = ue(n).val(),
                                            i)
                                            return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function (e, t) {
                                for (var n, r, o = e.options, i = ue.makeArray(t), s = o.length; s--;)
                                    r = o[s],
                                        (r.selected = ue.inArray(ue.valHooks.option.get(r), i) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                    i
                            }
                        }
                    }
                }),
                ue.each(["radio", "checkbox"], function () {
                    ue.valHooks[this] = {
                        set: function (e, t) {
                            return ue.isArray(t) ? e.checked = ue.inArray(ue(e).val(), t) > -1 : void 0
                        }
                    },
                        ae.checkOn || (ue.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        }
                        )
                });
            var bt = /^(?:focusinfocus|focusoutblur)$/;
            ue.extend(ue.event, {
                trigger: function (e, t, r, o) {
                    var i, s, a, l, u, c, d, p = [r || Z], f = se.call(e, "type") ? e.type : e, h = se.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = a = r = r || Z,
                        3 !== r.nodeType && 8 !== r.nodeType && !bt.test(f + ue.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."),
                            f = h.shift(),
                            h.sort()),
                            u = f.indexOf(":") < 0 && "on" + f,
                            e = e[ue.expando] ? e : new ue.Event(f, "object" == typeof e && e),
                            e.isTrigger = o ? 2 : 3,
                            e.namespace = h.join("."),
                            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            e.result = void 0,
                            e.target || (e.target = r),
                            t = null == t ? [e] : ue.makeArray(t, [e]),
                            d = ue.event.special[f] || {},
                            o || !d.trigger || d.trigger.apply(r, t) !== !1)) {
                        if (!o && !d.noBubble && !ue.isWindow(r)) {
                            for (l = d.delegateType || f,
                                bt.test(l + f) || (s = s.parentNode); s; s = s.parentNode)
                                p.push(s),
                                    a = s;
                            a === (r.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || n)
                        }
                        for (i = 0; (s = p[i++]) && !e.isPropagationStopped();)
                            e.type = i > 1 ? l : d.bindType || f,
                                c = (Ne.get(s, "events") || {})[e.type] && Ne.get(s, "handle"),
                                c && c.apply(s, t),
                                c = u && s[u],
                                c && c.apply && Se(s) && (e.result = c.apply(s, t),
                                    e.result === !1 && e.preventDefault());
                        return e.type = f,
                            o || e.isDefaultPrevented() || d._default && d._default.apply(p.pop(), t) !== !1 || !Se(r) || u && ue.isFunction(r[f]) && !ue.isWindow(r) && (a = r[u],
                                a && (r[u] = null),
                                ue.event.triggered = f,
                                r[f](),
                                ue.event.triggered = void 0,
                                a && (r[u] = a)),
                            e.result
                    }
                },
                simulate: function (e, t, n) {
                    var r = ue.extend(new ue.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    ue.event.trigger(r, null, t)
                }
            }),
                ue.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            ue.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        return n ? ue.event.trigger(e, t, n, !0) : void 0
                    }
                }),
                ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                    ue.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }),
                ue.fn.extend({
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                ae.focusin = "onfocusin" in n,
                ae.focusin || ue.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function (e, t) {
                    var n = function (e) {
                        ue.event.simulate(t, e.target, ue.event.fix(e))
                    };
                    ue.event.special[t] = {
                        setup: function () {
                            var r = this.ownerDocument || this
                                , o = Ne.access(r, t);
                            o || r.addEventListener(e, n, !0),
                                Ne.access(r, t, (o || 0) + 1)
                        },
                        teardown: function () {
                            var r = this.ownerDocument || this
                                , o = Ne.access(r, t) - 1;
                            o ? Ne.access(r, t, o) : (r.removeEventListener(e, n, !0),
                                Ne.remove(r, t))
                        }
                    }
                });
            var jt = n.location
                , yt = ue.now()
                , kt = /\?/;
            ue.parseJSON = function (e) {
                return JSON.parse(e + "")
            }
                ,
                ue.parseXML = function (e) {
                    var t;
                    if (!e || "string" != typeof e)
                        return null;
                    try {
                        t = (new n.DOMParser).parseFromString(e, "text/xml")
                    } catch (r) {
                        t = void 0
                    }
                    return t && !t.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + e),
                        t
                }
                ;
            var wt = /#.*$/
                , At = /([?&])_=[^&]*/
                , Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm
                , Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                , Et = /^(?:GET|HEAD)$/
                , St = /^\/\//
                , Nt = {}
                , Dt = {}
                , Lt = "*/".concat("*")
                , Rt = Z.createElement("a");
            Rt.href = jt.href,
                ue.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: jt.href,
                        type: "GET",
                        isLocal: Tt.test(jt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Lt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": ue.parseJSON,
                            "text xml": ue.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function (e, t) {
                        return t ? X(X(e, ue.ajaxSettings), t) : X(ue.ajaxSettings, e)
                    },
                    ajaxPrefilter: W(Nt),
                    ajaxTransport: W(Dt),
                    ajax: function (e, t) {
                        function r(e, t, r, a) {
                            var u, d, x, b, y, w = t;
                            2 !== j && (j = 2,
                                l && n.clearTimeout(l),
                                o = void 0,
                                s = a || "",
                                k.readyState = e > 0 ? 4 : 0,
                                u = e >= 200 && 300 > e || 304 === e,
                                r && (b = J(p, k, r)),
                                b = V(p, b, k, u),
                                u ? (p.ifModified && (y = k.getResponseHeader("Last-Modified"),
                                    y && (ue.lastModified[i] = y),
                                    y = k.getResponseHeader("etag"),
                                    y && (ue.etag[i] = y)),
                                    204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state,
                                        d = b.data,
                                        x = b.error,
                                        u = !x)) : (x = w,
                                            !e && w || (w = "error",
                                                0 > e && (e = 0))),
                                k.status = e,
                                k.statusText = (t || w) + "",
                                u ? g.resolveWith(f, [d, w, k]) : g.rejectWith(f, [k, w, x]),
                                k.statusCode(v),
                                v = void 0,
                                c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? d : x]),
                                m.fireWith(f, [k, w]),
                                c && (h.trigger("ajaxComplete", [k, p]),
                                    --ue.active || ue.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var o, i, s, a, l, u, c, d, p = ue.ajaxSetup({}, t), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? ue(f) : ue.event, g = ue.Deferred(), m = ue.Callbacks("once memory"), v = p.statusCode || {}, x = {}, b = {}, j = 0, y = "canceled", k = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === j) {
                                    if (!a)
                                        for (a = {}; t = Ct.exec(s);)
                                            a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return 2 === j ? s : null
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return j || (e = b[n] = b[n] || e,
                                    x[e] = t),
                                    this
                            },
                            overrideMimeType: function (e) {
                                return j || (p.mimeType = e),
                                    this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > j)
                                        for (t in e)
                                            v[t] = [v[t], e[t]];
                                    else
                                        k.always(e[k.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || y;
                                return o && o.abort(t),
                                    r(0, t),
                                    this
                            }
                        };
                        if (g.promise(k).complete = m.add,
                            k.success = k.done,
                            k.error = k.fail,
                            p.url = ((e || p.url || jt.href) + "").replace(wt, "").replace(St, jt.protocol + "//"),
                            p.type = t.method || t.type || p.method || p.type,
                            p.dataTypes = ue.trim(p.dataType || "*").toLowerCase().match(Ce) || [""],
                            null == p.crossDomain) {
                            u = Z.createElement("a");
                            try {
                                u.href = p.url,
                                    u.href = u.href,
                                    p.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host
                            } catch (w) {
                                p.crossDomain = !0
                            }
                        }
                        if (p.data && p.processData && "string" != typeof p.data && (p.data = ue.param(p.data, p.traditional)),
                            Y(Nt, p, t, k),
                            2 === j)
                            return k;
                        c = ue.event && p.global,
                            c && 0 === ue.active++ && ue.event.trigger("ajaxStart"),
                            p.type = p.type.toUpperCase(),
                            p.hasContent = !Et.test(p.type),
                            i = p.url,
                            p.hasContent || (p.data && (i = p.url += (kt.test(i) ? "&" : "?") + p.data,
                                delete p.data),
                                p.cache === !1 && (p.url = At.test(i) ? i.replace(At, "$1_=" + yt++) : i + (kt.test(i) ? "&" : "?") + "_=" + yt++)),
                            p.ifModified && (ue.lastModified[i] && k.setRequestHeader("If-Modified-Since", ue.lastModified[i]),
                                ue.etag[i] && k.setRequestHeader("If-None-Match", ue.etag[i])),
                            (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && k.setRequestHeader("Content-Type", p.contentType),
                            k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : p.accepts["*"]);
                        for (d in p.headers)
                            k.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (p.beforeSend.call(f, k, p) === !1 || 2 === j))
                            return k.abort();
                        y = "abort";
                        for (d in {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            k[d](p[d]);
                        if (o = Y(Dt, p, t, k)) {
                            if (k.readyState = 1,
                                c && h.trigger("ajaxSend", [k, p]),
                                2 === j)
                                return k;
                            p.async && p.timeout > 0 && (l = n.setTimeout(function () {
                                k.abort("timeout")
                            }, p.timeout));
                            try {
                                j = 1,
                                    o.send(x, r)
                            } catch (w) {
                                if (!(2 > j))
                                    throw w;
                                r(-1, w)
                            }
                        } else
                            r(-1, "No Transport");
                        return k
                    },
                    getJSON: function (e, t, n) {
                        return ue.get(e, t, n, "json")
                    },
                    getScript: function (e, t) {
                        return ue.get(e, void 0, t, "script")
                    }
                }),
                ue.each(["get", "post"], function (e, t) {
                    ue[t] = function (e, n, r, o) {
                        return ue.isFunction(n) && (o = o || r,
                            r = n,
                            n = void 0),
                            ue.ajax(ue.extend({
                                url: e,
                                type: t,
                                dataType: o,
                                data: n,
                                success: r
                            }, ue.isPlainObject(e) && e))
                    }
                }),
                ue._evalUrl = function (e) {
                    return ue.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }
                ,
                ue.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return ue.isFunction(e) ? this.each(function (t) {
                            ue(this).wrapAll(e.call(this, t))
                        }) : (this[0] && (t = ue(e, this[0].ownerDocument).eq(0).clone(!0),
                            this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function () {
                                for (var e = this; e.firstElementChild;)
                                    e = e.firstElementChild;
                                return e
                            }).append(this)),
                            this)
                    },
                    wrapInner: function (e) {
                        return ue.isFunction(e) ? this.each(function (t) {
                            ue(this).wrapInner(e.call(this, t))
                        }) : this.each(function () {
                            var t = ue(this)
                                , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function (e) {
                        var t = ue.isFunction(e);
                        return this.each(function (n) {
                            ue(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function () {
                        return this.parent().each(function () {
                            ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }),
                ue.expr.filters.hidden = function (e) {
                    return !ue.expr.filters.visible(e)
                }
                ,
                ue.expr.filters.visible = function (e) {
                    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
                }
                ;
            var Mt = /%20/g
                , qt = /\[\]$/
                , Ot = /\r?\n/g
                , Ht = /^(?:submit|button|image|reset|file)$/i
                , Bt = /^(?:input|select|textarea|keygen)/i;
            ue.param = function (e, t) {
                var n, r = [], o = function (e, t) {
                    t = ue.isFunction(t) ? t() : null == t ? "" : t,
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = ue.ajaxSettings && ue.ajaxSettings.traditional),
                    ue.isArray(e) || e.jquery && !ue.isPlainObject(e))
                    ue.each(e, function () {
                        o(this.name, this.value)
                    });
                else
                    for (n in e)
                        Q(n, e[n], t, o);
                return r.join("&").replace(Mt, "+")
            }
                ,
                ue.fn.extend({
                    serialize: function () {
                        return ue.param(this.serializeArray())
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = ue.prop(this, "elements");
                            return e ? ue.makeArray(e) : this
                        }).filter(function () {
                            var e = this.type;
                            return this.name && !ue(this).is(":disabled") && Bt.test(this.nodeName) && !Ht.test(e) && (this.checked || !Be.test(e))
                        }).map(function (e, t) {
                            var n = ue(this).val();
                            return null == n ? null : ue.isArray(n) ? ue.map(n, function (e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Ot, "\r\n")
                                }
                            }) : {
                                    name: t.name,
                                    value: n.replace(Ot, "\r\n")
                                }
                        }).get()
                    }
                }),
                ue.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) { }
                }
                ;
            var $t = {
                0: 200,
                1223: 204
            }
                , Ft = ue.ajaxSettings.xhr();
            ae.cors = !!Ft && "withCredentials" in Ft,
                ae.ajax = Ft = !!Ft,
                ue.ajaxTransport(function (e) {
                    var t, r;
                    return ae.cors || Ft && !e.crossDomain ? {
                        send: function (o, i) {
                            var s, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                for (s in e.xhrFields)
                                    a[s] = e.xhrFields[s];
                            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                                e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                            for (s in o)
                                a.setRequestHeader(s, o[s]);
                            t = function (e) {
                                return function () {
                                    t && (t = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i($t[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                                text: a.responseText
                                            }, a.getAllResponseHeaders()))
                                }
                            }
                                ,
                                a.onload = t(),
                                r = a.onerror = t("error"),
                                void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
                                    4 === a.readyState && n.setTimeout(function () {
                                        t && r()
                                    })
                                }
                                ,
                                t = t("abort");
                            try {
                                a.send(e.hasContent && e.data || null)
                            } catch (l) {
                                if (t)
                                    throw l
                            }
                        },
                        abort: function () {
                            t && t()
                        }
                    } : void 0
                }),
                ue.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function (e) {
                            return ue.globalEval(e),
                                e
                        }
                    }
                }),
                ue.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1),
                        e.crossDomain && (e.type = "GET")
                }),
                ue.ajaxTransport("script", function (e) {
                    if (e.crossDomain) {
                        var t, n;
                        return {
                            send: function (r, o) {
                                t = ue("<script>").prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function (e) {
                                    t.remove(),
                                        n = null,
                                        e && o("error" === e.type ? 404 : 200, e.type)
                                }
                                ),
                                    Z.head.appendChild(t[0])
                            },
                            abort: function () {
                                n && n()
                            }
                        }
                    }
                });
            var It = []
                , Pt = /(=)\?(?=&|$)|\?\?/;
            ue.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = It.pop() || ue.expando + "_" + yt++;
                    return this[e] = !0,
                        e
                }
            }),
                ue.ajaxPrefilter("json jsonp", function (e, t, r) {
                    var o, i, s, a = e.jsonp !== !1 && (Pt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(e.data) && "data");
                    return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ue.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        a ? e[a] = e[a].replace(Pt, "$1" + o) : e.jsonp !== !1 && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                        e.converters["script json"] = function () {
                            return s || ue.error(o + " was not called"),
                                s[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        i = n[o],
                        n[o] = function () {
                            s = arguments
                        }
                        ,
                        r.always(function () {
                            void 0 === i ? ue(n).removeProp(o) : n[o] = i,
                                e[o] && (e.jsonpCallback = t.jsonpCallback,
                                    It.push(o)),
                                s && ue.isFunction(i) && i(s[0]),
                                s = i = void 0
                        }),
                        "script") : void 0
                }),
                ue.parseHTML = function (e, t, n) {
                    if (!e || "string" != typeof e)
                        return null;
                    "boolean" == typeof t && (n = t,
                        t = !1),
                        t = t || Z;
                    var r = xe.exec(e)
                        , o = !n && [];
                    return r ? [t.createElement(r[1])] : (r = m([e], t, o),
                        o && o.length && ue(o).remove(),
                        ue.merge([], r.childNodes))
                }
                ;
            var Ut = ue.fn.load;
            ue.fn.load = function (e, t, n) {
                if ("string" != typeof e && Ut)
                    return Ut.apply(this, arguments);
                var r, o, i, s = this, a = e.indexOf(" ");
                return a > -1 && (r = ue.trim(e.slice(a)),
                    e = e.slice(0, a)),
                    ue.isFunction(t) ? (n = t,
                        t = void 0) : t && "object" == typeof t && (o = "POST"),
                    s.length > 0 && ue.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done(function (e) {
                        i = arguments,
                            s.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
                    }).always(n && function (e, t) {
                        s.each(function () {
                            n.apply(this, i || [e.responseText, t, e])
                        })
                    }
                    ),
                    this
            }
                ,
                ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    ue.fn[t] = function (e) {
                        return this.on(t, e)
                    }
                }),
                ue.expr.filters.animated = function (e) {
                    return ue.grep(ue.timers, function (t) {
                        return e === t.elem
                    }).length
                }
                ,
                ue.offset = {
                    setOffset: function (e, t, n) {
                        var r, o, i, s, a, l, u, c = ue.css(e, "position"), d = ue(e), p = {};
                        "static" === c && (e.style.position = "relative"),
                            a = d.offset(),
                            i = ue.css(e, "top"),
                            l = ue.css(e, "left"),
                            u = ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1,
                            u ? (r = d.position(),
                                s = r.top,
                                o = r.left) : (s = parseFloat(i) || 0,
                                    o = parseFloat(l) || 0),
                            ue.isFunction(t) && (t = t.call(e, n, ue.extend({}, a))),
                            null != t.top && (p.top = t.top - a.top + s),
                            null != t.left && (p.left = t.left - a.left + o),
                            "using" in t ? t.using.call(e, p) : d.css(p)
                    }
                },
                ue.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function (t) {
                                ue.offset.setOffset(this, e, t)
                            });
                        var t, n, r = this[0], o = {
                            top: 0,
                            left: 0
                        }, i = r && r.ownerDocument;
                        if (i)
                            return t = i.documentElement,
                                ue.contains(t, r) ? (o = r.getBoundingClientRect(),
                                    n = G(i),
                                {
                                    top: o.top + n.pageYOffset - t.clientTop,
                                    left: o.left + n.pageXOffset - t.clientLeft
                                }) : o
                    },
                    position: function () {
                        if (this[0]) {
                            var e, t, n = this[0], r = {
                                top: 0,
                                left: 0
                            };
                            return "fixed" === ue.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                                t = this.offset(),
                                ue.nodeName(e[0], "html") || (r = e.offset()),
                                r.top += ue.css(e[0], "borderTopWidth", !0),
                                r.left += ue.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - r.top - ue.css(n, "marginTop", !0),
                                left: t.left - r.left - ue.css(n, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === ue.css(e, "position");)
                                e = e.offsetParent;
                            return e || nt
                        })
                    }
                }),
                ue.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function (e, t) {
                    var n = "pageYOffset" === t;
                    ue.fn[e] = function (r) {
                        return Ee(this, function (e, r, o) {
                            var i = G(e);
                            return void 0 === o ? i ? i[t] : e[r] : void (i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o)
                        }, e, r, arguments.length)
                    }
                }),
                ue.each(["top", "left"], function (e, t) {
                    ue.cssHooks[t] = L(ae.pixelPosition, function (e, n) {
                        return n ? (n = D(e, t),
                            Ze.test(n) ? ue(e).position()[t] + "px" : n) : void 0
                    })
                }),
                ue.each({
                    Height: "height",
                    Width: "width"
                }, function (e, t) {
                    ue.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function (n, r) {
                        ue.fn[r] = function (r, o) {
                            var i = arguments.length && (n || "boolean" != typeof r)
                                , s = n || (r === !0 || o === !0 ? "margin" : "border");
                            return Ee(this, function (t, n, r) {
                                var o;
                                return ue.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ue.css(t, n, s) : ue.style(t, n, r, s)
                            }, t, i ? r : void 0, i, null)
                        }
                    })
                }),
                ue.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function (e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    size: function () {
                        return this.length
                    }
                }),
                ue.fn.andSelf = ue.fn.addBack,
                r = [],
                o = function () {
                    return ue
                }
                    .apply(t, r),
                !(void 0 !== o && (e.exports = o));
            var _t = n.jQuery
                , zt = n.$;
            return ue.noConflict = function (e) {
                return n.$ === ue && (n.$ = zt),
                    e && n.jQuery === ue && (n.jQuery = _t),
                    ue
            }
                ,
                i || (n.jQuery = n.$ = ue),
                ue
        })
    }
    , function (e, t) {
        "use strict";
        var n = document.createElement("div");
        e.exports = function (e) {
            var t = document.createDocumentFragment();
            for (e = e.replace(/>\s*</gm, "><"),
                n.innerHTML = e.replace(/>\s*</gm, "><"); n.firstChild;)
                t.appendChild(n.firstChild);
            return t
        }
    }
    , function (e, t, n) {
        (function (t) {
            var r, o = n(6), s = n(7), a = n(8), l = n(12), u = n(13), c = {
                49: "1",
                50: "2",
                51: "3",
                97: "1",
                98: "2",
                99: "3"
            };
            window.requestAnimFrame = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                    window.setTimeout(e, 1e3 / 60)
                }
            }();
            var d = function () {
                r = this,
                    this.voice = new o;
                var e = t(".animation canvas")[0];
                this.ctx = e.getContext("2d"),
                    this.ctx.font = "12px Verdana",
                    this.stations = [],
                    this.htmlElements = {},
                    this.timer = 0,
                    this.timer_started = !1,
                    this.timerId = 0,
                    this.isStarted = !1,
                    this.init(),
                    this.img = new Image,
                    this.img.src = u,
                    this.img.onload = function () {
                        r.stations[0].setImg(r.img),
                            r.stations[0].drawStations(r.ctx)
                    }
                    ,
                    document.onkeydown = function (e) {
                        if (e = e || window.event,
                            0 != r.isStarted) {
                            var t, n = e.key || c[e.keyCode];
                            if (parseInt(n) < 4) {
                                switch (r.voice.speak(l.msg23 + n + l.msg24),
                                n) {
                                    case "1":
                                        t = r.clickOnCanvas({
                                            offsetX: 320,
                                            offsetY: 40
                                        });
                                        break;
                                    case "2":
                                        t = r.clickOnCanvas({
                                            offsetX: 320,
                                            offsetY: 140
                                        });
                                        break;
                                    case "3":
                                        t = r.clickOnCanvas({
                                            offsetX: 320,
                                            offsetY: 240
                                        })
                                }
                                var o = parseInt(n) - 1;
                                r.stations[o].update(),
                                    r.stations[o].isBusy() ? r.voice.speak(l.msg1) : r.voice.speak(l.msg3)
                            }
                        }
                    }
            };
            d.prototype = {
                init: function () {
                    this.initHtmlElements(),
                        this.initConstants(),
                        this.htmlElements.$canvas.on("click", this.clickOnCanvas);
                    for (var e = 0; 3 > e; e++)
                        this.stations[e] = new s(e, this.stations);
                    this.redrawBoard()
                },
                initConstants: function () {
                    a.CableLength = parseInt(this.htmlElements.$combobox_length.val()),
                        a.FrameSize = parseInt(this.htmlElements.$combobox_size.val()),
                        a.TransmissionRate = 10
                },
                initHtmlElements: function () {
                    this.htmlElements.$start = t("#start"),
                        this.htmlElements.$stop = t("#stop"),
                        this.htmlElements.$pause = t("#pause"),
                        this.htmlElements.$resume = t("#resume"),
                        this.htmlElements.$combobox_length = t(".combobox-length"),
                        this.htmlElements.$combobox_size = t(".combobox-size"),
                        this.htmlElements.$combobox_rate = t(".combobox-rate"),
                        this.htmlElements.$canvas = t(".animation canvas"),
                        this.htmlElements.$pause.attr("disabled", "disabled"),
                        this.htmlElements.$resume.attr("disabled", "disabled"),
                        this.htmlElements.$stop.attr("disabled", "disabled"),
                        this.htmlElements.$start.on("click", this.clickOnStart.bind(this)),
                        this.htmlElements.$pause.on("click", this.clickOnPause),
                        this.htmlElements.$resume.on("click", this.clickOnResume),
                        this.htmlElements.$stop.on("click", this.clickOnStop.bind(this))
                },
                clickOnStart: function () {
                    r.isStarted = !0,
                        r.initConstants(),
                        r.htmlElements.$combobox_length.attr("disabled", "disabled"),
                        r.htmlElements.$combobox_rate.attr("disabled", "disabled"),
                        r.htmlElements.$combobox_size.attr("disabled", "disabled"),
                        r.htmlElements.$start.attr("disabled", "disabled"),
                        r.htmlElements.$stop.removeAttr("disabled"),
                        r.htmlElements.$pause.removeAttr("disabled");
                    for (var e = 0; 3 > e; e++)
                        r.stations[e] = new s(e, this.stations, r.ctx);
                    r.redrawBoard(),
                        r.htmlElements.$stop.focus(),
                        r.voice.speak(l.msg4)
                },
                clickOnStop: function () {
                    r.htmlElements.$combobox_length.removeAttr("disabled"),
                        r.htmlElements.$combobox_rate.removeAttr("disabled"),
                        r.htmlElements.$combobox_size.removeAttr("disabled"),
                        r.htmlElements.$start.removeAttr("disabled"),
                        r.htmlElements.$stop.attr("disabled", "disabled"),
                        r.htmlElements.$pause.attr("disabled", "disabled"),
                        r.htmlElements.$resume.attr("disabled", "disabled"),
                        r.stopTimer(),
                        r.isStarted = !1,
                        r.redrawBoard(),
                        r.timer_started = !1,
                        r.timer = 0;
                    for (var e = 0; 3 > e; e++)
                        r.stations[e] = null;
                    r.htmlElements.$start.focus(),
                        r.voice.speak(l.msg27),
                        r.voice.speak(l.msg5)
                },
                clickOnCanvas: function (e) {
                    var t = e.offsetX
                        , n = e.offsetY;
                    r.initConstants();
                    for (var o = 0; 3 > o; o++)
                        if (null != r.stations[o] && 1 == r.isStarted && r.stations[o].onClick(t, n))
                            return r.timer_started = !0,
                                r.startTimer(),
                                !0;
                    return !1
                },
                clickOnPause: function () {
                    for (r.htmlElements.$pause.attr("disabled", "disabled"),
                        r.htmlElements.$resume.removeAttr("disabled"),
                        r.timer_started = !1,
                        r.isStarted = !1,
                        r.stopTimer(),
                        r.htmlElements.$resume.focus(),
                        r.voice.speak(l.msg6),
                        r.voice.speak(l.msg7 + Math.floor(r.timer) + l.msg9),
                        i = 0; i < r.stations.length; i++)
                        null != r.stations[i] && r.voice.speak(r.stations[i].getState());
                    r.voice.speak(l.msg10)
                },
                clickOnResume: function () {
                    r.htmlElements.$pause.removeAttr("disabled"),
                        r.htmlElements.$resume.attr("disabled", "disabled"),
                        r.timer_started = !0,
                        r.isStarted = !0,
                        r.htmlElements.$pause.focus(),
                        r.voice.speak(l.msg26),
                        r.startTimer()
                },
                redrawBoard: function () {
                    this.ctx.beginPath(),
                        this.ctx.clearRect(0, 0, 800, 800),
                        this.ctx.lineWidth = 1;
                    var e, t = this.ctx;
                    for (t.fillText(l.msg25, 10, 140),
                        t.fillText(l.msg8, 10, 150),
                        t.fillStyle = "red",
                        t.fillText("" + Math.floor(this.timer), 10, 165),
                        t.fillStyle = "black",
                        this.timer_started && (this.timer += .25),
                        e = 0; 3 > e; e++)
                        null != this.stations[e] && (this.stations[e].update(t),
                            this.stations[e].drawText(t));
                    this.stations[0].drawStations(t),
                        this.ctx.stroke()
                },
                startTimer: function () {
                    this.timerId <= 0 && (this.timerId = setInterval(this.redrawBoard.bind(this), 100))
                },
                stopTimer: function () {
                    clearInterval(this.timerId),
                        this.timerId = -1
                },
                render: function () {
                    this.redrawBoard()
                }
            },
                e.exports = d
        }
        ).call(t, n(3))
    }
    , function (e, t, n) {
        (function (t) {
            var n = function (e) {
                this.history = [],
                    this.maxHistory = e || 500;
                var n = '<div id="voice-log" role="log" aria-live="polite" aria-atomic="false" style="width:0px; height:0px; position: absolute; left: -9999px; font-size:0px; "></div>';
                t(document.body).append(n),
                    this.$voiceLog = t("#voice-log")
            };
            n.prototype = {
                speak: function (e) {
                    var t = "<p>" + e + "</p>";
                    this.updateHistory(),
                        this.$voiceLog.append(t),
                        this.history.push(e)
                },
                updateHistory: function () {
                    var e = this.$voiceLog.find("p");
                    e.length > this.maxHistory && (this.history = [],
                        e.remove())
                }
            },
                e.exports = n
        }
        ).call(t, n(3))
    }
    , function (e, t, n) {
        var r, o = n(8), i = n(9), s = n(12), a = function (e, t, n) {
            var r = this;
            r.img = n;
            var a = ""
                , l = "";
            this.K_string = "";
            var u, c, d, p, f, h, g = void 0, m = [];
            r.passing_frames = 0;
            var v;
            r.waiting = void 0;
            var x, b, j = function (e, t) {
                m = t,
                    a = "",
                    l = "",
                    r.K_string = "",
                    u = e,
                    f = !1,
                    c = null,
                    d = null,
                    g = !1,
                    h = !1,
                    r.waiting = !1,
                    r.passing_frames = 0,
                    v = 0,
                    r.stations = m,
                    x = parseInt(Math.ceil(51200 / (25 * o.TransmissionRate)))
            };
            this.drawText = function (e) {
                null != c && c.Draw(e),
                    null != d && d.Draw(e),
                    a == s.msg2 ? (e.fillStyle = "red",
                        e.fillText(a, 150, 100 * u + 50),
                        e.fillStyle = "black") : e.fillText(a, 150, 100 * u + 50),
                    e.fillText(l, 150, 100 * u + 60),
                    e.fillText(r.K_string, 150, 100 * u + 70)
            }
                ,
                this.update = function (e) {
                    if (null != d && (d.Update() || (d = null)),
                        f && r.passing_frames <= 0 && !r.waiting) {
                        if (!g && null == c)
                            return c = new i(305, 100 * u + 40, u, m, e),
                                g = !0,
                                a = s.msg18,
                                r.K_string = "",
                                void (p = 0);
                        c.Update() || (c = null,
                            f = !1,
                            g = !1,
                            v = 0,
                            a = s.msg2,
                            l = "",
                            r.K_string = "")
                    }
                    return f && r.passing_frames > 0 && !g && !r.waiting ? (a = s.msg11,
                        !1) : f && r.passing_frames > 0 && g ? (g = !1,
                            h = !0,
                            c.abort = !0,
                            v++,
                            d = c,
                            d.Update(),
                            c = null,
                            r.waiting = !0,
                            p = r.K(),
                            b = x * p,
                            a = 0 == p ? s.msg11 : s.msg19,
                            l = s.msg20 + v,
                            void (r.K_string = s.msg21 + p)) : (h && (h = !1),
                                void (r.waiting && (b > 0 ? b-- : r.waiting = !1)))
                }
                ,
                this.onClick = function (e, t) {
                    return e >= 305 && 345 >= e && t >= 100 * u + 20 && 100 * u + 60 >= t ? (f = !0,
                        !0) : !1
                }
                ,
                this.K = function () {
                    var e = parseInt(Math.round(Math.random() * (Math.pow(2, Math.min(v, 10)) - 1)));
                    return e
                }
                ,
                this.isTransmitting = function () {
                    return g
                }
                ,
                this.isBusy = function () {
                    var e = !1;
                    return e = a == s.msg11
                }
                ,
                this.getState = function () {
                    var e = "";
                    if (a.length > 0)
                        switch (a) {
                            case s.msg18:
                                e += s.msg22 + (u + 1) + s.msg12;
                                break;
                            case s.msg11:
                                e += s.msg22 + (u + 1) + s.msg13;
                                break;
                            case s.msg19:
                                e += s.msg22 + (u + 1) + s.msg14;
                                break;
                            case s.msg2:
                                e += s.msg22 + (u + 1) + s.msg15
                        }
                    return v > 0 && (e += s.msg16 + v + ". "),
                        p >= 0 && r.K_string.length > 0 && (e += s.msg17 + p + ". "),
                        e
                }
                ,
                j(e, t)
        };
        a.prototype = {
            setImg: function (e) {
                r = e
            },
            drawStations: function (e) {
                var t, n;
                for (t = 0; 3 > t; t++) {
                    switch (n = t + 1,
                    t + 1) {
                        case 1:
                            e.fillStyle = "cyan";
                            break;
                        case 2:
                            e.fillStyle = "green";
                            break;
                        case 3:
                            e.fillStyle = "magenta";
                            break;
                        case 4:
                            e.fillStyle = "orange"
                    }
                    e.fillRect(305, 100 * t + 20, 40, 40),
                        e.fillStyle = "black",
                        e.fillText(n.toString(), 320, 100 * t + 45),
                        e.beginPath(),
                        e.moveTo(345, 100 * t + 40),
                        e.lineTo(350, 100 * t + 40),
                        e.stroke(),
                        e.fillText(n.toString(), 350 + 10 * t + 3, 30),
                        r && e.drawImage(r, 305, 100 * t + 20, 40, 40)
                }
                e.beginPath(),
                    e.moveTo(350, 40),
                    e.lineTo(350, 240),
                    e.stroke()
            }
        },
            e.exports = a
    }
    , function (e, t) {
        var n = {
            CableLength: void 0,
            FrameSize: void 0,
            TransmissionRate: void 0
        };
        e.exports = n
    }
    , function (e, t, n) {
        var r = n(8)
            , o = n(10)
            , i = function (e, t, n, i, s) {
                var a, l, u = Math.ceil(100 * r.FrameSize / (25 * r.TransmissionRate)), c = [];
                this.abort = void 0;
                var d = [];
                this.init = function (e, t, n, r, i) {
                    var s;
                    for (a = n,
                        l = !1,
                        this.abort = !1,
                        d = r,
                        c[0] = new o(305, 100 * a + 40, a, d, i),
                        c[0].first = !0,
                        1 == u && (c[0].last = !0),
                        s = 1; u > s; s++)
                        c[s] = null
                }
                    ,
                    this.init(e, t, n, i, s),
                    this.Draw = function (e) {
                        var t;
                        for (t = 0; u > t; t++)
                            if (null != c[t]) {
                                switch (a) {
                                    case 0:
                                        t % 2 == 0 ? e.fillStyle = "#00ffff" : e.fillStyle = "#00aaaa";
                                        break;
                                    case 1:
                                        t % 2 == 0 ? e.fillStyle = "#00ff00" : e.fillStyle = "#00aa00";
                                        break;
                                    case 2:
                                        t % 2 == 0 ? e.fillStyle = "#ff00ff" : e.fillStyle = "#aa00aa"
                                }
                                c[t].Draw(e),
                                    e.fillStyle = "#000000"
                            }
                    }
                    ,
                    this.Update = function () {
                        var e, t = !1;
                        for (e = 0; u > e; e++)
                            if (null != c[e])
                                c[e].Update() ? t = !0 : c[e] = null;
                            else if (0 != e && null != c[e - 1])
                                return this.abort ? (u = e + 1,
                                    c[e - 1].last = !0) : (c[e] = new o(305, 100 * a + 40, a, d),
                                        e == u - 1 && (c[e].last = !0)),
                                    !0;
                        return t
                    }
            };
        e.exports = i
    }
    , function (e, t, n) {
        var r = n(8)
            , o = n(11)
            , i = (Math.ceil(1e4 / r.CableLength),
                Math.ceil(1e4 / r.CableLength),
                function (e, t, n, i, s) {
                    var a, l, u, c = this, d = [];
                    c.first = !1,
                        c.last = !1;
                    var p, f, h = [], g = 0, m = 0, v = function (e, t, n, i) {
                        g = Math.ceil(1e4 / r.CableLength),
                            m = Math.ceil(1e4 / r.CableLength),
                            a = e,
                            l = t,
                            u = n;
                        c.first = !1,
                            c.last = !1,
                            h = i,
                            p = -1,
                            f = -1,
                            0 != u && (d[0] = new o,
                                d[0].X = a + 50 + 10 * u,
                                d[0].Y = l - g,
                                d[0].speed = -g),
                            2 != u && (d[1] = new o,
                                d[1].X = a + 50 + 10 * u,
                                d[1].Y = l,
                                d[1].speed = g)
                    };
                    v(e, t, n, i);
                    var x = function (e) {
                        return e % 100 == 40 && e != 100 * u + 40
                    };
                    this.Update = function () {
                        var e = 0
                            , t = 0;
                        if (null != d[0] && d[0].Y <= 40 && (e = d[0].Y,
                            d[0] = null),
                            null != d[1] && d[1].Y >= 240 && (t = d[1].Y,
                                d[1] = null),
                            null != d[0] && (d[0].Y + d[0].speed > 40 ? d[0].Y += d[0].speed : d[0].Y = 40),
                            null != d[1] && (d[1].Y + d[1].speed < 240 ? d[1].Y += d[1].speed : d[1].Y = 240),
                            c.first && (null != d[0] && x(d[0].Y) && h[Math.floor((d[0].Y - 40) / 100)].passing_frames++,
                                null != d[1] && x(d[1].Y + g))) {
                            var n = Math.floor((d[1].Y - 40 + g) / 100);
                            0 > n && (n = 0),
                                n > 2 && (n = 2),
                                h[n].passing_frames++
                        }
                        if (c.last) {
                            if (null != d[0] && x(d[0].Y + g)) {
                                var n = Math.floor((d[0].Y - 40 + g) / 100);
                                0 > n && (n = 0),
                                    n > 2 && (n = 2),
                                    h[n].passing_frames > 0 && h[n].passing_frames--
                            }
                            if (null == d[0] && x(e) && h[Math.floor((e - 40) / 100)].passing_frames > 0 && h[Math.floor((e - 40) / 100)].passing_frames--,
                                null == d[1] && x(t) && (t - 40) / 100 != 2 && h[Math.floor((t - 40) / 100)].passing_frames > 0 && h[Math.floor((t - 40) / 100)].passing_frames--,
                                null != d[1] && x(d[1].Y)) {
                                var n = Math.floor((d[1].Y - 40 + g) / 100);
                                0 > n && (n = 0),
                                    n > 2 && (n = 2),
                                    h[n].passing_frames > 0 && h[n].passing_frames--
                            }
                        }
                        return null != d[0] || null != d[1]
                    }
                        ,
                        this.Draw = function (e) {
                            null != d[0] && d[0].Y >= 40 && e.fillRect(d[0].X, d[0].Y, 10, m),
                                null != d[1] && (d[1].Y + m <= 240 ? e.fillRect(d[1].X, d[1].Y, 10, m) : e.fillRect(d[1].X, d[1].Y, 10, 240 - d[1].Y))
                        }
                }
            );
        i.prototype = {
            Speed: Math.ceil(1e4 / r.CableLength),
            Size: Math.ceil(1e4 / r.CableLength)
        },
            e.exports = i
    }
    , function (e, t) {
        var n = function () {
            this.X = void 0,
                this.Y = void 0,
                this.speed = void 0
        };
        e.exports = n
    }
    , function (e, t) {
        var n = {
            msg1: "信道正忙",
            msg2: "传输完成",
            msg3: "站点 num 正在传输",
            msg4: "启动按钮按下。动画已启动。按Num1、Num2或Num3键启动变速箱。按暂停按钮检测传输的当前状态",
            msg5: "动画已停止。现在可以更改模型参数并再次运行动画。",
            msg6: "按下暂停按钮。",
            msg7: "到目前为止，经过的时间等于",
            msg8: "（微秒）",
            msg9: "微秒。",
            msg10: "按恢复按钮继续。",
            msg11: "信道忙",
            msg12: "正在传输。",
            msg13: "正在等待，因为信道正忙",
            msg14: "正在在回退。",
            msg15: "已完成传输。",
            msg16: "碰撞次数等于",
            msg17: "K等于",
            msg18: "传输",
            msg19: "回退",
            msg20: "碰撞：",
            msg21: "K = ",
            msg22: "站点",
            msg23: "按键",
            msg24: "被按下。",
            msg25: "时间",
            msg26: "恢复键被按下",
            msg27: "停止键被按下"
        };
        e.exports = n
    }
    , function (e, t, n) {
        e.exports = n.p + "4fcc7b00bf5eeaaf6ee5bd8db9520016.png"
    }
    , [26, 15], function (e, t, n) {
        t = e.exports = n(16)(),
            t.push([e.id, ".bold{font-weight:700}.element{width:100px;text-align:center;display:inline-block}.combobox{width:90px}.tstimage{background:url(" + n(13) + ") 100%/contain no-repeat}.visually-hidden{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}", ""])
    }
    , function (e, t) {
        e.exports = function () {
            var e = [];
            return e.toString = function () {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }
                ,
                e.i = function (t, n) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var r = {}, o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0)
                    }
                    for (o = 0; o < t.length; o++) {
                        var s = t[o];
                        "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
                            e.push(s))
                    }
                }
                ,
                e
        }
    }
    , function (e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n]
                    , o = f[r.id];
                if (o) {
                    o.refs++;
                    for (var i = 0; i < o.parts.length; i++)
                        o.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++)
                        o.parts.push(u(r.parts[i], t))
                } else {
                    for (var s = [], i = 0; i < r.parts.length; i++)
                        s.push(u(r.parts[i], t));
                    f[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function o(e) {
            for (var t = [], n = {}, r = 0; r < e.length; r++) {
                var o = e[r]
                    , i = o[0]
                    , s = o[1]
                    , a = o[2]
                    , l = o[3]
                    , u = {
                        css: s,
                        media: a,
                        sourceMap: l
                    };
                n[i] ? n[i].parts.push(u) : t.push(n[i] = {
                    id: i,
                    parts: [u]
                })
            }
            return t
        }
        function i(e, t) {
            var n = m()
                , r = b[b.length - 1];
            if ("top" === e.insertAt)
                r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                    b.push(t);
            else {
                if ("bottom" !== e.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function s(e) {
            e.parentNode.removeChild(e);
            var t = b.indexOf(e);
            t >= 0 && b.splice(t, 1)
        }
        function a(e) {
            var t = document.createElement("style");
            return t.type = "text/css",
                i(e, t),
                t
        }
        function l(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet",
                i(e, t),
                t
        }
        function u(e, t) {
            var n, r, o;
            if (t.singleton) {
                var i = x++;
                n = v || (v = a(t)),
                    r = c.bind(null, n, i, !1),
                    o = c.bind(null, n, i, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t),
                    r = p.bind(null, n),
                    o = function () {
                        s(n),
                            n.href && URL.revokeObjectURL(n.href)
                    }
                ) : (n = a(t),
                    r = d.bind(null, n),
                    o = function () {
                        s(n)
                    }
                    );
            return r(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        r(e = t)
                    } else
                        o()
                }
        }
        function c(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = j(t, o);
            else {
                var i = document.createTextNode(o)
                    , s = e.childNodes;
                s[t] && e.removeChild(s[t]),
                    s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
            }
        }
        function d(e, t) {
            var n = t.css
                , r = t.media;
            if (r && e.setAttribute("media", r),
                e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;)
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        function p(e, t) {
            var n = t.css
                , r = t.sourceMap;
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var o = new Blob([n], {
                type: "text/css"
            })
                , i = e.href;
            e.href = URL.createObjectURL(o),
                i && URL.revokeObjectURL(i)
        }
        var f = {}
            , h = function (e) {
                var t;
                return function () {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)),
                        t
                }
            }
            , g = h(function () {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            })
            , m = h(function () {
                return document.head || document.getElementsByTagName("head")[0]
            })
            , v = null
            , x = 0
            , b = [];
        e.exports = function (e, t) {
            t = t || {},
                "undefined" == typeof t.singleton && (t.singleton = g()),
                "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = o(e);
            return r(n, t),
                function (e) {
                    for (var i = [], s = 0; s < n.length; s++) {
                        var a = n[s]
                            , l = f[a.id];
                        l.refs--,
                            i.push(l)
                    }
                    if (e) {
                        var u = o(e);
                        r(u, t)
                    }
                    for (var s = 0; s < i.length; s++) {
                        var l = i[s];
                        if (0 === l.refs) {
                            for (var c = 0; c < l.parts.length; c++)
                                l.parts[c]();
                            delete f[l.id]
                        }
                    }
                }
        }
            ;
        var j = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n,
                    e.filter(Boolean).join("\n")
            }
        }()
    }
    , function (e, t, n) {
        var r = n(19);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(17)(r, {});
        r.locals && (e.exports = r.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(16)(),
            t.push([e.id, ".jstree-children,.jstree-container-ul,.jstree-node{display:block;margin:0;padding:0;list-style-type:none;list-style-image:none}.jstree-anchor,.jstree-node{white-space:nowrap}.jstree-anchor{display:inline-block;color:#000;padding:0 4px 0 1px;margin:0;vertical-align:top}.jstree-anchor:focus{outline:0}.jstree-anchor,.jstree-anchor:active,.jstree-anchor:hover,.jstree-anchor:link,.jstree-anchor:visited{text-decoration:none;color:inherit}.jstree-icon,.jstree-icon:empty{display:inline-block;text-decoration:none;margin:0;padding:0;vertical-align:top;text-align:center}.jstree-ocl{cursor:pointer}.jstree-leaf>.jstree-ocl{cursor:default}.jstree .jstree-open>.jstree-children{display:block}.jstree .jstree-closed>.jstree-children,.jstree .jstree-leaf>.jstree-children{display:none}.jstree-anchor>.jstree-themeicon{margin-right:2px}.jstree-anchor>.jstree-themeicon-hidden,.jstree-hidden,.jstree-no-icons .jstree-themeicon,.jstree-node.jstree-hidden{display:none}.jstree-rtl .jstree-anchor{padding:0 1px 0 4px}.jstree-rtl .jstree-anchor>.jstree-themeicon{margin-left:2px;margin-right:0}.jstree-rtl .jstree-node{margin-left:0}.jstree-rtl .jstree-container-ul>.jstree-node{margin-right:0}.jstree-wholerow-ul{position:relative;display:inline-block;min-width:100%}.jstree-wholerow-ul .jstree-leaf>.jstree-ocl{cursor:pointer}.jstree-wholerow-ul .jstree-anchor,.jstree-wholerow-ul .jstree-icon{position:relative}.jstree-wholerow-ul .jstree-wholerow{width:100%;cursor:pointer;position:absolute;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vakata-context{display:none}.vakata-context,.vakata-context ul{margin:0;padding:2px;position:absolute;background:#f5f5f5;border:1px solid #979797;box-shadow:2px 2px 2px #999}.vakata-context ul{list-style:none;left:100%;margin-top:-2.7em;margin-left:-4px}.vakata-context .vakata-context-right ul{left:auto;right:100%;margin-left:auto;margin-right:-4px}.vakata-context li{list-style:none}.vakata-context li>a{display:block;padding:0 2em;text-decoration:none;width:auto;color:#000;white-space:nowrap;line-height:2.4em;text-shadow:1px 1px 0 #fff;border-radius:1px}.vakata-context li>a:hover{position:relative;background-color:#e8eff7;box-shadow:0 0 2px #0a6aa1}.vakata-context li>a.vakata-context-parent{background-image:url(data:image/gif;base64,R0lGODlhCwAHAIAAACgoKP///yH5BAEAAAEALAAAAAALAAcAAAIORI4JlrqN1oMSnmmZDQUAOw==);background-position:100%;background-repeat:no-repeat}.vakata-context li>a:focus{outline:0}.vakata-context .vakata-context-hover>a{position:relative;background-color:#e8eff7;box-shadow:0 0 2px #0a6aa1}.vakata-context .vakata-context-separator>a,.vakata-context .vakata-context-separator>a:hover{background:#fff;border:0;border-top:1px solid #e2e3e3;height:1px;min-height:1px;max-height:1px;padding:0;margin:0 0 0 2.4em;border-left:1px solid #e0e0e0;text-shadow:0 0 0 transparent;box-shadow:0 0 0 transparent;border-radius:0}.vakata-context .vakata-contextmenu-disabled a,.vakata-context .vakata-contextmenu-disabled a:hover{color:silver;background-color:transparent;border:0;box-shadow:0 0 0}.vakata-context li>a>i{text-decoration:none;display:inline-block;height:2.4em;background:0 0;margin:0 0 0 -2em;vertical-align:top;text-align:center}.vakata-context li>a>i,.vakata-context li>a>i:empty{width:2.4em;line-height:2.4em}.vakata-context li>a .vakata-contextmenu-sep{display:inline-block;width:1px;height:2.4em;background:#fff;margin:0 .5em 0 0;border-left:1px solid #e2e3e3}.vakata-context .vakata-contextmenu-shortcut{font-size:.8em;color:silver;opacity:.5;display:none}.vakata-context-rtl ul{left:auto;right:100%;margin-left:auto;margin-right:-4px}.vakata-context-rtl li>a.vakata-context-parent{background-image:url(data:image/gif;base64,R0lGODlhCwAHAIAAACgoKP///yH5BAEAAAEALAAAAAALAAcAAAINjI+AC7rWHIsPtmoxLAA7);background-position:0;background-repeat:no-repeat}.vakata-context-rtl .vakata-context-separator>a{margin:0 2.4em 0 0;border-left:0;border-right:1px solid #e2e3e3}.vakata-context-rtl .vakata-context-left ul{right:auto;left:100%;margin-left:-4px;margin-right:auto}.vakata-context-rtl li>a>i{margin:0 -2em 0 0}.vakata-context-rtl li>a .vakata-contextmenu-sep{margin:0 0 0 .5em;border-left-color:#fff;background:#e2e3e3}#jstree-marker{position:absolute;top:0;left:0;margin:-5px 0 0;padding:0;border-right:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid;width:0;height:0;font-size:0;line-height:0}#jstree-dnd{line-height:16px;margin:0;padding:4px}#jstree-dnd .jstree-copy,#jstree-dnd .jstree-icon{display:inline-block;text-decoration:none;margin:0 2px 0 0;padding:0;width:16px;height:16px}#jstree-dnd .jstree-ok{background:green}#jstree-dnd .jstree-er{background:red}#jstree-dnd .jstree-copy{margin:0 2px}.jstree-default .jstree-icon,.jstree-default .jstree-node{background-repeat:no-repeat;background-color:transparent}.jstree-default .jstree-anchor,.jstree-default .jstree-wholerow{transition:background-color .15s,box-shadow .15s}.jstree-default .jstree-context,.jstree-default .jstree-hovered{background:#e7f4f9;border-radius:2px;box-shadow:inset 0 0 1px #ccc}.jstree-default .jstree-clicked{background:#beebff;border-radius:2px;box-shadow:inset 0 0 1px #999}.jstree-default .jstree-no-icons .jstree-anchor>.jstree-themeicon{display:none}.jstree-default .jstree-disabled{background:0 0;color:#666}.jstree-default .jstree-disabled.jstree-hovered{background:0 0;box-shadow:none}.jstree-default .jstree-disabled>.jstree-icon{opacity:.8;filter:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='jstree-grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#jstree-grayscale\");filter:gray;-webkit-filter:grayscale(100%)}.jstree-default .jstree-search{font-style:italic;color:#8b0000;font-weight:700}.jstree-default .jstree-no-checkboxes .jstree-checkbox{display:none!important}.jstree-default.jstree-checkbox-no-clicked .jstree-clicked{background:0 0;box-shadow:none}.jstree-default.jstree-checkbox-no-clicked .jstree-clicked.jstree-hovered{background:#e7f4f9}.jstree-default.jstree-checkbox-no-clicked>.jstree-wholerow-ul .jstree-wholerow-clicked{background:0 0}.jstree-default.jstree-checkbox-no-clicked>.jstree-wholerow-ul .jstree-wholerow-clicked.jstree-wholerow-hovered{background:#e7f4f9}.jstree-default>.jstree-striped{min-width:100%;display:inline-block;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAMAAAB/qqA+AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMNAMM9s3UAAAAXSURBVHjajcEBAQAAAIKg/H/aCQZ70AUBjAATb6YPDgAAAABJRU5ErkJggg==) 0 0 repeat}.jstree-default>.jstree-wholerow-ul .jstree-clicked,.jstree-default>.jstree-wholerow-ul .jstree-hovered{background:0 0;box-shadow:none;border-radius:0}.jstree-default .jstree-wholerow{box-sizing:border-box}.jstree-default .jstree-wholerow-hovered{background:#e7f4f9}.jstree-default .jstree-wholerow-clicked{background:#beebff;background:linear-gradient(180deg,#beebff 0,#a8e4ff)}.jstree-default .jstree-node{min-height:24px;line-height:24px;margin-left:24px;min-width:24px}.jstree-default .jstree-anchor{line-height:24px;height:24px}.jstree-default .jstree-icon,.jstree-default .jstree-icon:empty{width:24px;height:24px;line-height:24px}.jstree-default.jstree-rtl .jstree-node{margin-right:24px}.jstree-default .jstree-wholerow{height:24px}.jstree-default .jstree-icon,.jstree-default .jstree-node{background-image:url(" + n(20) + ")}.jstree-default .jstree-node{background-position:-292px -4px;background-repeat:repeat-y}.jstree-default .jstree-last{background:0 0}.jstree-default .jstree-open>.jstree-ocl{background-position:-132px -4px}.jstree-default .jstree-closed>.jstree-ocl{background-position:-100px -4px}.jstree-default .jstree-leaf>.jstree-ocl{background-position:-68px -4px}.jstree-default .jstree-themeicon{background-position:-260px -4px}.jstree-default>.jstree-no-dots .jstree-leaf>.jstree-ocl,.jstree-default>.jstree-no-dots .jstree-node{background:0 0}.jstree-default>.jstree-no-dots .jstree-open>.jstree-ocl{background-position:-36px -4px}.jstree-default>.jstree-no-dots .jstree-closed>.jstree-ocl{background-position:-4px -4px}.jstree-default .jstree-disabled,.jstree-default .jstree-disabled.jstree-hovered{background:0 0}.jstree-default .jstree-disabled.jstree-clicked{background:#efefef}.jstree-default .jstree-checkbox{background-position:-164px -4px}.jstree-default .jstree-checkbox:hover{background-position:-164px -36px}.jstree-default.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox,.jstree-default .jstree-checked>.jstree-checkbox{background-position:-228px -4px}.jstree-default.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox:hover,.jstree-default .jstree-checked>.jstree-checkbox:hover{background-position:-228px -36px}.jstree-default .jstree-anchor>.jstree-undetermined{background-position:-196px -4px}.jstree-default .jstree-anchor>.jstree-undetermined:hover{background-position:-196px -36px}.jstree-default .jstree-checkbox-disabled{opacity:.8;filter:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='jstree-grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#jstree-grayscale\");filter:gray;-webkit-filter:grayscale(100%)}.jstree-default>.jstree-striped{background-size:auto 48px}.jstree-default.jstree-rtl .jstree-node{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==);background-position:100% 1px;background-repeat:repeat-y}.jstree-default.jstree-rtl .jstree-open>.jstree-ocl{background-position:-132px -36px}.jstree-default.jstree-rtl .jstree-closed>.jstree-ocl{background-position:-100px -36px}.jstree-default.jstree-rtl .jstree-leaf>.jstree-ocl{background-position:-68px -36px}.jstree-default.jstree-rtl>.jstree-no-dots .jstree-leaf>.jstree-ocl,.jstree-default.jstree-rtl>.jstree-no-dots .jstree-node{background:0 0}.jstree-default.jstree-rtl>.jstree-no-dots .jstree-open>.jstree-ocl{background-position:-36px -36px}.jstree-default.jstree-rtl>.jstree-no-dots .jstree-closed>.jstree-ocl{background-position:-4px -36px}.jstree-default .jstree-themeicon-custom{background-color:transparent;background-image:none;background-position:0 0}.jstree-default>.jstree-container-ul .jstree-loading>.jstree-ocl{background:url(" + n(21) + ") 50% no-repeat}.jstree-default .jstree-file{background:url(" + n(20) + ") -100px -68px no-repeat}.jstree-default .jstree-folder{background:url(" + n(20) + ") -260px -4px no-repeat}.jstree-default>.jstree-container-ul>.jstree-node{margin-left:0;margin-right:0}#jstree-dnd.jstree-default{line-height:24px;padding:0 4px}#jstree-dnd.jstree-default .jstree-er,#jstree-dnd.jstree-default .jstree-ok{background-image:url(" + n(20) + ");background-repeat:no-repeat;background-color:transparent}#jstree-dnd.jstree-default i{background:0 0;width:24px;height:24px;line-height:24px}#jstree-dnd.jstree-default .jstree-ok{background-position:-4px -68px}#jstree-dnd.jstree-default .jstree-er{background-position:-36px -68px}.jstree-default.jstree-rtl .jstree-node{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==)}.jstree-default.jstree-rtl .jstree-last{background:0 0}.jstree-default-small .jstree-node{min-height:18px;line-height:18px;margin-left:18px;min-width:18px}.jstree-default-small .jstree-anchor{line-height:18px;height:18px}.jstree-default-small .jstree-icon,.jstree-default-small .jstree-icon:empty{width:18px;height:18px;line-height:18px}.jstree-default-small.jstree-rtl .jstree-node{margin-right:18px}.jstree-default-small .jstree-wholerow{height:18px}.jstree-default-small .jstree-icon,.jstree-default-small .jstree-node{background-image:url(" + n(20) + ")}.jstree-default-small .jstree-node{background-position:-295px -7px;background-repeat:repeat-y}.jstree-default-small .jstree-last{background:0 0}.jstree-default-small .jstree-open>.jstree-ocl{background-position:-135px -7px}.jstree-default-small .jstree-closed>.jstree-ocl{background-position:-103px -7px}.jstree-default-small .jstree-leaf>.jstree-ocl{background-position:-71px -7px}.jstree-default-small .jstree-themeicon{background-position:-263px -7px}.jstree-default-small>.jstree-no-dots .jstree-leaf>.jstree-ocl,.jstree-default-small>.jstree-no-dots .jstree-node{background:0 0}.jstree-default-small>.jstree-no-dots .jstree-open>.jstree-ocl{background-position:-39px -7px}.jstree-default-small>.jstree-no-dots .jstree-closed>.jstree-ocl{background-position:-7px -7px}.jstree-default-small .jstree-disabled,.jstree-default-small .jstree-disabled.jstree-hovered{background:0 0}.jstree-default-small .jstree-disabled.jstree-clicked{background:#efefef}.jstree-default-small .jstree-checkbox{background-position:-167px -7px}.jstree-default-small .jstree-checkbox:hover{background-position:-167px -39px}.jstree-default-small.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox,.jstree-default-small .jstree-checked>.jstree-checkbox{background-position:-231px -7px}.jstree-default-small.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox:hover,.jstree-default-small .jstree-checked>.jstree-checkbox:hover{background-position:-231px -39px}.jstree-default-small .jstree-anchor>.jstree-undetermined{background-position:-199px -7px}.jstree-default-small .jstree-anchor>.jstree-undetermined:hover{background-position:-199px -39px}.jstree-default-small .jstree-checkbox-disabled{opacity:.8;filter:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='jstree-grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#jstree-grayscale\");filter:gray;-webkit-filter:grayscale(100%)}.jstree-default-small>.jstree-striped{background-size:auto 36px}.jstree-default-small.jstree-rtl .jstree-node{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==);background-position:100% 1px;background-repeat:repeat-y}.jstree-default-small.jstree-rtl .jstree-open>.jstree-ocl{background-position:-135px -39px}.jstree-default-small.jstree-rtl .jstree-closed>.jstree-ocl{background-position:-103px -39px}.jstree-default-small.jstree-rtl .jstree-leaf>.jstree-ocl{background-position:-71px -39px}.jstree-default-small.jstree-rtl>.jstree-no-dots .jstree-leaf>.jstree-ocl,.jstree-default-small.jstree-rtl>.jstree-no-dots .jstree-node{background:0 0}.jstree-default-small.jstree-rtl>.jstree-no-dots .jstree-open>.jstree-ocl{background-position:-39px -39px}.jstree-default-small.jstree-rtl>.jstree-no-dots .jstree-closed>.jstree-ocl{background-position:-7px -39px}.jstree-default-small .jstree-themeicon-custom{background-color:transparent;background-image:none;background-position:0 0}.jstree-default-small>.jstree-container-ul .jstree-loading>.jstree-ocl{background:url(" + n(21) + ") 50% no-repeat}.jstree-default-small .jstree-file{background:url(" + n(20) + ") -103px -71px no-repeat}.jstree-default-small .jstree-folder{background:url(" + n(20) + ") -263px -7px no-repeat}.jstree-default-small>.jstree-container-ul>.jstree-node{margin-left:0;margin-right:0}#jstree-dnd.jstree-default-small{line-height:18px;padding:0 4px}#jstree-dnd.jstree-default-small .jstree-er,#jstree-dnd.jstree-default-small .jstree-ok{background-image:url(" + n(20) + ");background-repeat:no-repeat;background-color:transparent}#jstree-dnd.jstree-default-small i{background:0 0;width:18px;height:18px;line-height:18px}#jstree-dnd.jstree-default-small .jstree-ok{background-position:-7px -71px}#jstree-dnd.jstree-default-small .jstree-er{background-position:-39px -71px}.jstree-default-small.jstree-rtl .jstree-node{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAACAQMAAABv1h6PAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMHBgAAiABBI4gz9AAAAABJRU5ErkJggg==)}.jstree-default-small.jstree-rtl .jstree-last{background:0 0}.jstree-default-large .jstree-node{min-height:32px;line-height:32px;margin-left:32px;min-width:32px}.jstree-default-large .jstree-anchor{line-height:32px;height:32px}.jstree-default-large .jstree-icon,.jstree-default-large .jstree-icon:empty{width:32px;height:32px;line-height:32px}.jstree-default-large.jstree-rtl .jstree-node{margin-right:32px}.jstree-default-large .jstree-wholerow{height:32px}.jstree-default-large .jstree-icon,.jstree-default-large .jstree-node{background-image:url(" + n(20) + ")}.jstree-default-large .jstree-node{background-position:-288px 0;background-repeat:repeat-y}.jstree-default-large .jstree-last{background:0 0}.jstree-default-large .jstree-open>.jstree-ocl{background-position:-128px 0}.jstree-default-large .jstree-closed>.jstree-ocl{background-position:-96px 0}.jstree-default-large .jstree-leaf>.jstree-ocl{background-position:-64px 0}.jstree-default-large .jstree-themeicon{background-position:-256px 0}.jstree-default-large>.jstree-no-dots .jstree-leaf>.jstree-ocl,.jstree-default-large>.jstree-no-dots .jstree-node{background:0 0}.jstree-default-large>.jstree-no-dots .jstree-open>.jstree-ocl{background-position:-32px 0}.jstree-default-large>.jstree-no-dots .jstree-closed>.jstree-ocl{background-position:0 0}.jstree-default-large .jstree-disabled,.jstree-default-large .jstree-disabled.jstree-hovered{background:0 0}.jstree-default-large .jstree-disabled.jstree-clicked{background:#efefef}.jstree-default-large .jstree-checkbox{background-position:-160px 0}.jstree-default-large .jstree-checkbox:hover{background-position:-160px -32px}.jstree-default-large.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox,.jstree-default-large .jstree-checked>.jstree-checkbox{background-position:-224px 0}.jstree-default-large.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox:hover,.jstree-default-large .jstree-checked>.jstree-checkbox:hover{background-position:-224px -32px}.jstree-default-large .jstree-anchor>.jstree-undetermined{background-position:-192px 0}.jstree-default-large .jstree-anchor>.jstree-undetermined:hover{background-position:-192px -32px}.jstree-default-large .jstree-checkbox-disabled{opacity:.8;filter:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='jstree-grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#jstree-grayscale\");filter:gray;-webkit-filter:grayscale(100%)}.jstree-default-large>.jstree-striped{background-size:auto 64px}.jstree-default-large.jstree-rtl .jstree-node{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==);background-position:100% 1px;background-repeat:repeat-y}.jstree-default-large.jstree-rtl .jstree-open>.jstree-ocl{background-position:-128px -32px}.jstree-default-large.jstree-rtl .jstree-closed>.jstree-ocl{background-position:-96px -32px}.jstree-default-large.jstree-rtl .jstree-leaf>.jstree-ocl{background-position:-64px -32px}.jstree-default-large.jstree-rtl>.jstree-no-dots .jstree-leaf>.jstree-ocl,.jstree-default-large.jstree-rtl>.jstree-no-dots .jstree-node{background:0 0}.jstree-default-large.jstree-rtl>.jstree-no-dots .jstree-open>.jstree-ocl{background-position:-32px -32px}.jstree-default-large.jstree-rtl>.jstree-no-dots .jstree-closed>.jstree-ocl{background-position:0 -32px}.jstree-default-large .jstree-themeicon-custom{background-color:transparent;background-image:none;background-position:0 0}.jstree-default-large>.jstree-container-ul .jstree-loading>.jstree-ocl{background:url(" + n(21) + ") 50% no-repeat}.jstree-default-large .jstree-file{background:url(" + n(20) + ") -96px -64px no-repeat}.jstree-default-large .jstree-folder{background:url(" + n(20) + ") -256px 0 no-repeat}.jstree-default-large>.jstree-container-ul>.jstree-node{margin-left:0;margin-right:0}#jstree-dnd.jstree-default-large{line-height:32px;padding:0 4px}#jstree-dnd.jstree-default-large .jstree-er,#jstree-dnd.jstree-default-large .jstree-ok{background-image:url(" + n(20) + ");background-repeat:no-repeat;background-color:transparent}#jstree-dnd.jstree-default-large i{background:0 0;width:32px;height:32px;line-height:32px}#jstree-dnd.jstree-default-large .jstree-ok{background-position:0 -64px}#jstree-dnd.jstree-default-large .jstree-er{background-position:-32px -64px}.jstree-default-large.jstree-rtl .jstree-node{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAACAQMAAAAD0EyKAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjgIIGBgABCgCBvVLXcAAAAABJRU5ErkJggg==)}.jstree-default-large.jstree-rtl .jstree-last{background:0 0}@media (max-width:768px){#jstree-dnd.jstree-dnd-responsive{line-height:40px;font-weight:700;font-size:1.1em;text-shadow:1px 1px #fff}#jstree-dnd.jstree-dnd-responsive>i{background:0 0;width:40px;height:40px}#jstree-dnd.jstree-dnd-responsive>.jstree-ok{background-image:url(" + n(22) + ");background-position:0 -200px;background-size:120px 240px}#jstree-dnd.jstree-dnd-responsive>.jstree-er{background-image:url(" + n(22) + ");background-position:-40px -200px;background-size:120px 240px}#jstree-marker.jstree-dnd-responsive{border-left-width:10px;border-top-width:10px;border-bottom-width:10px;margin-top:-10px}}@media (max-width:768px){.jstree-default-responsive .jstree-icon{background-image:url(" + n(22) + ")}.jstree-default-responsive .jstree-leaf>.jstree-ocl,.jstree-default-responsive .jstree-node{background:0 0}.jstree-default-responsive .jstree-node{min-height:40px;line-height:40px;margin-left:40px;min-width:40px;white-space:nowrap}.jstree-default-responsive .jstree-anchor{line-height:40px;height:40px}.jstree-default-responsive .jstree-icon,.jstree-default-responsive .jstree-icon:empty{width:40px;height:40px;line-height:40px}.jstree-default-responsive>.jstree-container-ul>.jstree-node{margin-left:0}.jstree-default-responsive.jstree-rtl .jstree-node{margin-left:0;margin-right:40px;background:0 0}.jstree-default-responsive.jstree-rtl .jstree-container-ul>.jstree-node{margin-right:0}.jstree-default-responsive .jstree-checkbox,.jstree-default-responsive .jstree-ocl,.jstree-default-responsive .jstree-themeicon{background-size:120px 240px}.jstree-default-responsive .jstree-leaf>.jstree-ocl,.jstree-default-responsive.jstree-rtl .jstree-leaf>.jstree-ocl{background:0 0}.jstree-default-responsive .jstree-open>.jstree-ocl{background-position:0 0!important}.jstree-default-responsive .jstree-closed>.jstree-ocl{background-position:0 -40px!important}.jstree-default-responsive.jstree-rtl .jstree-closed>.jstree-ocl{background-position:-40px 0!important}.jstree-default-responsive .jstree-themeicon{background-position:-40px -40px}.jstree-default-responsive .jstree-checkbox,.jstree-default-responsive .jstree-checkbox:hover{background-position:-40px -80px}.jstree-default-responsive.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox,.jstree-default-responsive.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox:hover,.jstree-default-responsive .jstree-checked>.jstree-checkbox,.jstree-default-responsive .jstree-checked>.jstree-checkbox:hover{background-position:0 -80px}.jstree-default-responsive .jstree-anchor>.jstree-undetermined,.jstree-default-responsive .jstree-anchor>.jstree-undetermined:hover{background-position:0 -120px}.jstree-default-responsive .jstree-anchor{font-weight:700;font-size:1.1em;text-shadow:1px 1px #fff}.jstree-default-responsive>.jstree-striped{background:0 0}.jstree-default-responsive .jstree-wholerow{border-top:1px solid hsla(0,0%,100%,.7);border-bottom:1px solid rgba(64,64,64,.2);background:#ebebeb;height:40px}.jstree-default-responsive .jstree-wholerow-hovered{background:#e7f4f9}.jstree-default-responsive .jstree-wholerow-clicked{background:#beebff}.jstree-default-responsive .jstree-children .jstree-last>.jstree-wholerow{box-shadow:inset 0 -6px 3px -5px #666}.jstree-default-responsive .jstree-children .jstree-open>.jstree-wholerow{box-shadow:inset 0 6px 3px -5px #666;border-top:0}.jstree-default-responsive .jstree-children .jstree-open+.jstree-open{box-shadow:none}.jstree-default-responsive .jstree-checkbox,.jstree-default-responsive .jstree-icon,.jstree-default-responsive .jstree-node,.jstree-default-responsive .jstree-node>.jstree-ocl,.jstree-default-responsive .jstree-themeicon{background-image:url(" + n(22) + ");background-size:120px 240px}.jstree-default-responsive .jstree-node{background-position:-80px 0;background-repeat:repeat-y}.jstree-default-responsive .jstree-last{background:0 0}.jstree-default-responsive .jstree-leaf>.jstree-ocl{background-position:-40px -120px}.jstree-default-responsive .jstree-last>.jstree-ocl{background-position:-40px -160px}.jstree-default-responsive .jstree-themeicon-custom{background-color:transparent;background-image:none;background-position:0 0}.jstree-default-responsive .jstree-file{background:url(" + n(22) + ") 0 -160px no-repeat;background-size:120px 240px}.jstree-default-responsive .jstree-folder{background:url(" + n(22) + ") -40px -40px no-repeat;background-size:120px 240px}.jstree-default-responsive>.jstree-container-ul>.jstree-node{margin-left:0;margin-right:0}}", ""]);
    }
    , function (e, t, n) {
        e.exports = n.p + "db49c8de4f267eede40a9a8843efcdec.png"
    }
    , function (e, t, n) {
        e.exports = n.p + "9ed4669f524bec38319be63a2ee4ba26.gif"
    }
    , function (e, t, n) {
        e.exports = n.p + "1f075735090412ed7eb8077d819b19c6.png"
    }
    , [26, 24], function (e, t, n) {
        t = e.exports = n(16)(),
            t.push([e.id, "body{font-family:Arial,sans-serif}.header,h1{color:#101027;font-size:200%;font-weight:400;margin:.67em 0}.focusable,canvas{border:3px solid transparent}.focusable:focus,button:focus,canvas:focus{outline:none;border:3px dotted #000}.text,p{font-size:100%;margin:1em 0}button{font-size:80%;height:25px;background:linear-gradient(#fff,#f0f0f0);border:1px solid #adadad;box-sizing:border-box}button:disabled{background:#d3d3d3;border:1px solid #bcbcbc}button::-moz-focus-inner{border:0}.navigation{width:0;height:0;padding:0;margin:0;overflow:hidden}", ""])
    }
    , function (e, t) {
        e.exports = `
    <div id="content" class="content">
        <h1> CSMA/CD </h1>
        <p>
            此交互式动画允许您可视化传输时间和传播延迟如何影响 CSMA/CD。
            交互式动画使用总线拓扑（例如使用10Base2），而不是星形拓扑。
            类似的效果发生在星形拓扑上。
            交互式动画假定传播速度为
            <span>
                <span class="visually-hidden">
                    2乘以10的8次方米每秒
                </span>
                <span>2*10<sup>8</sup>
                    米/秒。
                </span>
            </span>
            传输速度为 10M bps。
        </p>
        <ol>
            <li>设置参数：总线长度、帧大小和传输速率。</li>
            <li>单击“开始”。</li>
            <li class="bold">单击节点生成数据包。</li>
        </ol>
        <p id="navigation" class="navigation">
            通过此交互式动画，您将探索传输时间和传播延迟如何影响带冲突检测的载波侦听多址接入，即C、S、M、A、斜杠C、D。
            交互式动画使用总线拓扑，而不是星形拓扑，尽管星形拓扑也会产生类似的效果。
            交互式动画假定传播速度为2乘以10的8次方米每秒。
            有一个方案显示了根据总线拓扑连接的三个工作站，分别标记为1、2和3。
            以下参数可用，总线长度以米为单位，帧大小以比特为单位，传输速率以兆比特每秒为单位。
            控制按钮位于右侧，包括开始按钮、停止按钮、暂停按钮和恢复按钮。
            设置参数时，单击“开始”按钮开始。
            使用暂停按钮检测传输的当前状态。
        </p>
        <div class="animation">
            <canvas width="450" height="340"></canvas>
            <div class="panel">
                <div class="element">
                    <p>
                        长度（米）
                        <select class="combobox combobox-length" name="sel1">
                            <option>1000</option>
                            <option>2500</option>
                        </select>
                    </p>
                </div>
                <div class="element">
                    <p>
                        大小（比特）
                        <select class="combobox combobox-size" name="sel1">
                            <option>500</option>
                            <option>1000</option>
                            <option>5000</option>
                        </select>
                    </p>
                </div>
                <button tabindex="0" id="start">开始</button>
                <button id="stop">停止</button>
                <button id="pause">暂停</button>
                <button id="resume">恢复</button>
            </div>
        </div>
        <p>
        <p>
            这个交互动画最初由丹尼尔·布鲁斯泰恩（Daniel Brushteyn）于1997年编写，是宾夕法尼亚大学课程的一部分。
        </p>
        </p>
    </div>`
    }
    , function (e, t, n, r) {
        var o = n(r);
        "string" == typeof o && (o = [[e.id, o, ""]]);
        n(17)(o, {});
        o.locals && (e.exports = o.locals)
    }
]));
