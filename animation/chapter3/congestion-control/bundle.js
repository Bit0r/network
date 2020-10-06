!function (e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
    }
    var n = {};
    return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
}([function (e, t, n) {
    e.exports = n(1)
}
    , function (e, t, n) {
        var i = n(2)
            , o = n(27);
        new i(new o)
    }
    , function (e, t, n) {
        (function (t) {
            var i = n(4);
            n(5),
                n(12);
            var o = n(14)
                , r = n(15)
                , a = n(17)
                , s = n(23)
                , l = i(n(26))
                , c = 4
                , u = {
                    min: 1,
                    max: 25
                }
                , d = 2
                , h = 40
                , p = 1e3 / h
                , f = 500
                , g = {
                    "default": 30,
                    min: 0,
                    max: 100
                }
                , m = {
                    0: "无延迟",
                    100: "高延迟"
                }
                , v = {
                    start: "开始",
                    pause: "暂停",
                    resume: "恢复"
                }
                , y = {
                    area: "#008000",
                    lines: ["#FFFF00", "#C0FFFF", "red", "blue"]
                }
                , b = function (e, t) {
                    e.textContent = t,
                        e.setAttribute("aria-label", t)
                }
                , x = function (e) {
                    this.model = e,
                        this.node = l.querySelector("div").cloneNode(!0),
                        this.canvas = this.node.querySelector("canvas"),
                        this.ctx = this.canvas.getContext("2d"),
                        this.workstationsNode = this.node.querySelector("._workstations"),
                        this.levelNode = this.node.querySelector("._level"),
                        this.height = this.canvas.height,
                        this.width = this.canvas.width,
                        this.model.totalBandwidth = f,
                        this.model.delay = g["default"],
                        this.maxHistory = this.width,
                        this.then = Date.now(),
                        this.updateDelayValue(g["default"]),
                        this.updateHeightValue(f),
                        this.isPlaying = !1,
                        this.animationId = -1,
                        this.workstations = [],
                        this.history = [],
                        this.totalHistory = [],
                        this.aria = new r(this.node.querySelector(".navigation"), this.canvas.querySelector("p"), e),
                        document.body.appendChild(this.node);
                    var n = this.node.querySelector("._bandwidth")
                        , i = this.node.querySelector("._delay");
                    n.textContent = f,
                        i.textContent = g["default"];
                    var a = new s(t("._delay-slider"), {
                        ariaLabel: o.delaySlider,
                        min: g.min,
                        max: g.max,
                        step: 1,
                        initialValue: g["default"],
                        withTicks: !0,
                        ticks: {
                            withLabels: !0,
                            labelFormatter: function (e) {
                                return m[e]
                            },
                            step: 100,
                            position: s.TicksPosition.BOTTOM
                        },
                        onChange: function (e) {
                            var t = e > this.model.delay;
                            this.updateDelayValue(e),
                                this.model.delay = e,
                                i.textContent = e,
                                this.aria.delayChanged(t)
                        }
                            .bind(this)
                    })
                        , c = new s(t("._bandwidth-slider"), {
                            ariaLabel: o.bandwidthSlider,
                            min: 0,
                            max: this.model.maxBandwidth,
                            step: 1,
                            initialValue: f,
                            isVertical: !0,
                            withTicks: !0,
                            ticks: {
                                withLabels: !0,
                                step: 500,
                                position: s.TicksPosition.RIGHT
                            },
                            onChange: function (e) {
                                this.model.totalBandwidth = e,
                                    this.updateHeightValue(e),
                                    this.drawBandwidthLine(),
                                    n.textContent = e,
                                    this.aria.bandwidthChanged(),
                                    this.aria.animation()
                            }
                                .bind(this)
                        });
                    this.node.querySelector("._add").addEventListener("click", this.addWorkstation.bind(this)),
                        this.node.querySelector("._remove").addEventListener("click", this.removeWorkstation.bind(this, !1));
                    var u = this.node.querySelector("._start");
                    u.addEventListener("click", function () {
                        this.isPlaying ? (this.isPlaying = !1,
                            b(u, v.resume),
                            this.aria.pause()) : (this.isPlaying = !0,
                                b(u, v.pause),
                                this.animate())
                    }
                        .bind(this)),
                        this.node.querySelector("._reset").addEventListener("click", function () {
                            for (cancelAnimationFrame(this.animationId),
                                this.ctx.clearRect(0, 0, this.width, this.height),
                                this.isPlaying = !1,
                                b(u, v.start),
                                this.model.totalBandwidth = f,
                                this.updateDelayValue(g["default"]),
                                this.updateHeightValue(f),
                                c.setValue(f, !0),
                                a.setValue(g["default"], !0); this.workstations.length > 1;)
                                this.removeWorkstation(!0);
                            this.model.workstations[0].reset(),
                                this.workstations[0].setRecoveryMethodToReno(),
                                this.history[0] = [],
                                this.totalHistory = []
                        }
                            .bind(this)),
                        this.addWorkstation(),
                        this.drawBandwidthLine(),
                        this.aria.animation()
                };
            x.prototype.addWorkstation = function () {
                if (this.workstations.length < c) {
                    this.workstations.push(new a(this.workstationsNode, this.model.addWorkstation(), this.aria));
                    var e = this.history.length ? this.history[0].length : 0;
                    this.history.push(new Array(e)),
                        1 !== this.workstations.length && this.aria.addWorkstation(),
                        this.aria.animation()
                }
            }
                ,
                x.prototype.removeWorkstation = function (e) {
                    this.workstations.length > 1 && (this.workstations.pop().remove(),
                        this.history.pop(),
                        this.model.removeWorkstation(),
                        this.aria.animation(),
                        e || this.aria.removeWorkstation())
                }
                ,
                x.prototype.getGraphY = function (e) {
                    return this.height - e * this.height / this.model.maxBandwidth
                }
                ,
                x.prototype.updateDelayValue = function (e) {
                    this.speed = u.max - e * (u.max - u.min) / g.max,
                        e !== g.max && e != g.min && (this.speed = Math.round(.3 * this.speed) + u.min)
                }
                ,
                x.prototype.updateHeightValue = function (e) {
                    this.yMax = this.height * e / 1e3 + 1
                }
                ,
                x.prototype.drawHistoryLine = function (e, t) {
                    var n = 0;
                    this.ctx.strokeStyle = e,
                        this.ctx.lineWidth = d,
                        this.ctx.beginPath(),
                        this.ctx.moveTo(n, this.getGraphY(t[0]));
                    for (var i = 1; i < t.length; i++,
                        n += 1)
                        this.ctx.lineTo(n, this.getGraphY(t[i]));
                    this.ctx.stroke()
                }
                ,
                x.prototype.drawGraph = function () {
                    this.ctx.clearRect(0, 0, this.width, this.height),
                        this.drawTotalBandwith();
                    for (var e = 0; e < this.history.length; e++)
                        this.drawHistoryLine(y.lines[e], this.history[e])
                }
                ,
                x.prototype.drawTotalBandwith = function () {
                    var e = 0;
                    this.ctx.fillStyle = y.area,
                        this.ctx.beginPath(),
                        this.ctx.moveTo(e, this.height);
                    for (var t = 1; t < this.history[0].length; t++,
                        e += 1)
                        this.ctx.lineTo(e, this.getGraphY(this.totalHistory[t])),
                            this.ctx.lineTo(e + 1, this.getGraphY(this.totalHistory[t + 1]) + d),
                            this.ctx.lineTo(e + 1, this.height + d);
                    this.ctx.fill()
                }
                ,
                x.prototype.drawBandwidthLine = function () {
                    this.levelNode.style.bottom = this.yMax + 3 + "px"
                }
                ,
                x.prototype.step = function () {
                    for (var e = 0; e < this.speed; e++) {
                        this.model.run();
                        for (var t = 0; t < this.workstations.length; t++)
                            this.history[t].push(this.model.workstations[t].currentBandwidth),
                                this.history[t].length > this.maxHistory + 1 && this.history[t].splice(0, 1);
                        this.totalHistory.push(this.model.getBandwidthInUse()),
                            this.totalHistory.length > this.maxHistory + 1 && this.totalHistory.splice(0, 1)
                    }
                }
                ,
                x.prototype.animate = function () {
                    if (this.isPlaying) {
                        var e = Date.now()
                            , t = e - this.then;
                        t > p && (this.then = e - t % p,
                            this.step(),
                            this.drawGraph()),
                            this.animationId = requestAnimationFrame(this.animate.bind(this))
                    }
                }
                ,
                e.exports = x
        }
        ).call(t, n(3))
    }
    , function (e, t, n) {
        var i, o;
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
        }("undefined" != typeof window ? window : this, function (n, r) {
            function a(e) {
                var t = !!e && "length" in e && e.length
                    , n = ce.type(e);
                return "function" === n || ce.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }
            function s(e, t, n) {
                if (ce.isFunction(t))
                    return ce.grep(e, function (e, i) {
                        return !!t.call(e, i, e) !== n
                    });
                if (t.nodeType)
                    return ce.grep(e, function (e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (be.test(t))
                        return ce.filter(t, e, n);
                    t = ce.filter(t, e)
                }
                return ce.grep(e, function (e) {
                    return ie.call(t, e) > -1 !== n
                })
            }
            function l(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;)
                    ;
                return e
            }
            function c(e) {
                var t = {};
                return ce.each(e.match(Ee) || [], function (e, n) {
                    t[n] = !0
                }),
                    t
            }
            function u() {
                Z.removeEventListener("DOMContentLoaded", u),
                    n.removeEventListener("load", u),
                    ce.ready()
            }
            function d() {
                this.expando = ce.expando + d.uid++
            }
            function h(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace($e, "-$&").toLowerCase(),
                        n = e.getAttribute(i),
                        "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Le.test(n) ? ce.parseJSON(n) : n
                        } catch (o) { }
                        De.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function p(e, t, n, i) {
                var o, r = 1, a = 20, s = i ? function () {
                    return i.cur()
                }
                    : function () {
                        return ce.css(e, t, "")
                    }
                    , l = s(), c = n && n[3] || (ce.cssNumber[t] ? "" : "px"), u = (ce.cssNumber[t] || "px" !== c && +l) && Oe.exec(ce.css(e, t));
                if (u && u[3] !== c) {
                    c = c || u[3],
                        n = n || [],
                        u = +l || 1;
                    do
                        r = r || ".5",
                            u /= r,
                            ce.style(e, t, u + c);
                    while (r !== (r = s() / l) && 1 !== r && --a)
                }
                return n && (u = +u || +l || 0,
                    o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                    i && (i.unit = c,
                        i.start = u,
                        i.end = o)),
                    o
            }
            function f(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && ce.nodeName(e, t) ? ce.merge([e], n) : n
            }
            function g(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
            }
            function m(e, t, n, i, o) {
                for (var r, a, s, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, m = e.length; m > p; p++)
                    if (r = e[p],
                        r || 0 === r)
                        if ("object" === ce.type(r))
                            ce.merge(h, r.nodeType ? [r] : r);
                        else if (_e.test(r)) {
                            for (a = a || d.appendChild(t.createElement("div")),
                                s = (Me.exec(r) || ["", ""])[1].toLowerCase(),
                                l = Fe[s] || Fe._default,
                                a.innerHTML = l[1] + ce.htmlPrefilter(r) + l[2],
                                u = l[0]; u--;)
                                a = a.lastChild;
                            ce.merge(h, a.childNodes),
                                a = d.firstChild,
                                a.textContent = ""
                        } else
                            h.push(t.createTextNode(r));
                for (d.textContent = "",
                    p = 0; r = h[p++];)
                    if (i && ce.inArray(r, i) > -1)
                        o && o.push(r);
                    else if (c = ce.contains(r.ownerDocument, r),
                        a = f(d.appendChild(r), "script"),
                        c && g(a),
                        n)
                        for (u = 0; r = a[u++];)
                            Pe.test(r.type || "") && n.push(r);
                return d
            }
            function v() {
                return !0
            }
            function y() {
                return !1
            }
            function b() {
                try {
                    return Z.activeElement
                } catch (e) { }
            }
            function x(e, t, n, i, o, r) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n,
                        n = void 0);
                    for (s in t)
                        x(e, s, n, i, t[s], r);
                    return e
                }
                if (null == i && null == o ? (o = n,
                    i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
                        i = void 0) : (o = i,
                            i = n,
                            n = void 0)),
                    o === !1)
                    o = y;
                else if (!o)
                    return e;
                return 1 === r && (a = o,
                    o = function (e) {
                        return ce().off(e),
                            a.apply(this, arguments)
                    }
                    ,
                    o.guid = a.guid || (a.guid = ce.guid++)),
                    e.each(function () {
                        ce.event.add(this, t, o, i, n)
                    })
            }
            function w(e, t) {
                return ce.nodeName(e, "table") && ce.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function k(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
            }
            function T(e) {
                var t = Xe.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function C(e, t) {
                var n, i, o, r, a, s, l, c;
                if (1 === t.nodeType) {
                    if (He.hasData(e) && (r = He.access(e),
                        a = He.set(t, r),
                        c = r.events)) {
                        delete a.handle,
                            a.events = {};
                        for (o in c)
                            for (n = 0,
                                i = c[o].length; i > n; n++)
                                ce.event.add(t, o, c[o][n])
                    }
                    De.hasData(e) && (s = De.access(e),
                        l = ce.extend({}, s),
                        De.set(t, l))
                }
            }
            function E(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function S(e, t, n, i) {
                t = te.apply([], t);
                var o, r, a, s, l, c, u = 0, d = e.length, h = d - 1, p = t[0], g = ce.isFunction(p);
                if (g || d > 1 && "string" == typeof p && !se.checkClone && Ge.test(p))
                    return e.each(function (o) {
                        var r = e.eq(o);
                        g && (t[0] = p.call(this, o, r.html())),
                            S(r, t, n, i)
                    });
                if (d && (o = m(t, e[0].ownerDocument, !1, e, i),
                    r = o.firstChild,
                    1 === o.childNodes.length && (o = r),
                    r || i)) {
                    for (a = ce.map(f(o, "script"), k),
                        s = a.length; d > u; u++)
                        l = o,
                            u !== h && (l = ce.clone(l, !0, !0),
                                s && ce.merge(a, f(l, "script"))),
                            n.call(e[u], l, u);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument,
                            ce.map(a, T),
                            u = 0; s > u; u++)
                            l = a[u],
                                Pe.test(l.type || "") && !He.access(l, "globalEval") && ce.contains(c, l) && (l.src ? ce._evalUrl && ce._evalUrl(l.src) : ce.globalEval(l.textContent.replace(Ye, "")))
                }
                return e
            }
            function A(e, t, n) {
                for (var i, o = t ? ce.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
                    n || 1 !== i.nodeType || ce.cleanData(f(i)),
                        i.parentNode && (n && ce.contains(i.ownerDocument, i) && g(f(i, "script")),
                            i.parentNode.removeChild(i));
                return e
            }
            function N(e, t) {
                var n = ce(t.createElement(e)).appendTo(t.body)
                    , i = ce.css(n[0], "display");
                return n.detach(),
                    i
            }
            function H(e) {
                var t = Z
                    , n = Qe[e];
                return n || (n = N(e, t),
                    "none" !== n && n || (Je = (Je || ce("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                        t = Je[0].contentDocument,
                        t.write(),
                        t.close(),
                        n = N(e, t),
                        Je.detach()),
                    Qe[e] = n),
                    n
            }
            function D(e, t, n) {
                var i, o, r, a, s = e.style;
                return n = n || et(e),
                    a = n ? n.getPropertyValue(t) || n[t] : void 0,
                    "" !== a && void 0 !== a || ce.contains(e.ownerDocument, e) || (a = ce.style(e, t)),
                    n && !se.pixelMarginRight() && Ze.test(a) && Ke.test(t) && (i = s.width,
                        o = s.minWidth,
                        r = s.maxWidth,
                        s.minWidth = s.maxWidth = s.width = a,
                        a = n.width,
                        s.width = i,
                        s.minWidth = o,
                        s.maxWidth = r),
                    void 0 !== a ? a + "" : a
            }
            function L(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function $(e) {
                if (e in st)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = at.length; n--;)
                    if (e = at[n] + t,
                        e in st)
                        return e
            }
            function j(e, t, n) {
                var i = Oe.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function O(e, t, n, i, o) {
                for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)
                    "margin" === n && (a += ce.css(e, n + Be[r], !0, o)),
                        i ? ("content" === n && (a -= ce.css(e, "padding" + Be[r], !0, o)),
                            "margin" !== n && (a -= ce.css(e, "border" + Be[r] + "Width", !0, o))) : (a += ce.css(e, "padding" + Be[r], !0, o),
                                "padding" !== n && (a += ce.css(e, "border" + Be[r] + "Width", !0, o)));
                return a
            }
            function B(e, t, n) {
                var i = !0
                    , o = "width" === t ? e.offsetWidth : e.offsetHeight
                    , r = et(e)
                    , a = "border-box" === ce.css(e, "boxSizing", !1, r);
                if (0 >= o || null == o) {
                    if (o = D(e, t, r),
                        (0 > o || null == o) && (o = e.style[t]),
                        Ze.test(o))
                        return o;
                    i = a && (se.boxSizingReliable() || o === e.style[t]),
                        o = parseFloat(o) || 0
                }
                return o + O(e, t, n || (a ? "border" : "content"), i, r) + "px"
            }
            function R(e, t) {
                for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++)
                    i = e[a],
                        i.style && (r[a] = He.get(i, "olddisplay"),
                            n = i.style.display,
                            t ? (r[a] || "none" !== n || (i.style.display = ""),
                                "" === i.style.display && Re(i) && (r[a] = He.access(i, "olddisplay", H(i.nodeName)))) : (o = Re(i),
                                    "none" === n && o || He.set(i, "olddisplay", o ? n : ce.css(i, "display"))));
                for (a = 0; s > a; a++)
                    i = e[a],
                        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
                return e
            }
            function q(e, t, n, i, o) {
                return new q.prototype.init(e, t, n, i, o)
            }
            function M() {
                return n.setTimeout(function () {
                    lt = void 0
                }),
                    lt = ce.now()
            }
            function P(e, t) {
                var n, i = 0, o = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                    n = Be[i],
                        o["margin" + n] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e),
                    o
            }
            function F(e, t, n) {
                for (var i, o = (W.tweeners[t] || []).concat(W.tweeners["*"]), r = 0, a = o.length; a > r; r++)
                    if (i = o[r].call(n, t, e))
                        return i
            }
            function _(e, t, n) {
                var i, o, r, a, s, l, c, u, d = this, h = {}, p = e.style, f = e.nodeType && Re(e), g = He.get(e, "fxshow");
                n.queue || (s = ce._queueHooks(e, "fx"),
                    null == s.unqueued && (s.unqueued = 0,
                        l = s.empty.fire,
                        s.empty.fire = function () {
                            s.unqueued || l()
                        }
                    ),
                    s.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            s.unqueued--,
                                ce.queue(e, "fx").length || s.empty.fire()
                        })
                    })),
                    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                        c = ce.css(e, "display"),
                        u = "none" === c ? He.get(e, "olddisplay") || H(e.nodeName) : c,
                        "inline" === u && "none" === ce.css(e, "float") && (p.display = "inline-block")),
                    n.overflow && (p.overflow = "hidden",
                        d.always(function () {
                            p.overflow = n.overflow[0],
                                p.overflowX = n.overflow[1],
                                p.overflowY = n.overflow[2]
                        }));
                for (i in t)
                    if (o = t[i],
                        ut.exec(o)) {
                        if (delete t[i],
                            r = r || "toggle" === o,
                            o === (f ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i])
                                continue;
                            f = !0
                        }
                        h[i] = g && g[i] || ce.style(e, i)
                    } else
                        c = void 0;
                if (ce.isEmptyObject(h))
                    "inline" === ("none" === c ? H(e.nodeName) : c) && (p.display = c);
                else {
                    g ? "hidden" in g && (f = g.hidden) : g = He.access(e, "fxshow", {}),
                        r && (g.hidden = !f),
                        f ? ce(e).show() : d.done(function () {
                            ce(e).hide()
                        }),
                        d.done(function () {
                            var t;
                            He.remove(e, "fxshow");
                            for (t in h)
                                ce.style(e, t, h[t])
                        });
                    for (i in h)
                        a = F(f ? g[i] : 0, i, d),
                            i in g || (g[i] = a.start,
                                f && (a.end = a.start,
                                    a.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function I(e, t) {
                var n, i, o, r, a;
                for (n in e)
                    if (i = ce.camelCase(n),
                        o = t[i],
                        r = e[n],
                        ce.isArray(r) && (o = r[1],
                            r = e[n] = r[0]),
                        n !== i && (e[i] = r,
                            delete e[n]),
                        a = ce.cssHooks[i],
                        a && "expand" in a) {
                        r = a.expand(r),
                            delete e[i];
                        for (n in r)
                            n in e || (e[n] = r[n],
                                t[n] = o)
                    } else
                        t[i] = o
            }
            function W(e, t, n) {
                var i, o, r = 0, a = W.prefilters.length, s = ce.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (o)
                        return !1;
                    for (var t = lt || M(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++)
                        c.tweens[a].run(r);
                    return s.notifyWith(e, [c, r, n]),
                        1 > r && l ? n : (s.resolveWith(e, [c]),
                            !1)
                }, c = s.promise({
                    elem: e,
                    props: ce.extend({}, t),
                    opts: ce.extend(!0, {
                        specialEasing: {},
                        easing: ce.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: lt || M(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = ce.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i),
                            i
                    },
                    stop: function (t) {
                        var n = 0
                            , i = t ? c.tweens.length : 0;
                        if (o)
                            return this;
                        for (o = !0; i > n; n++)
                            c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]),
                            s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                            this
                    }
                }), u = c.props;
                for (I(u, c.opts.specialEasing); a > r; r++)
                    if (i = W.prefilters[r].call(c, e, u, c.opts))
                        return ce.isFunction(i.stop) && (ce._queueHooks(c.elem, c.opts.queue).stop = ce.proxy(i.stop, i)),
                            i;
                return ce.map(u, F, c),
                    ce.isFunction(c.opts.start) && c.opts.start.call(e, c),
                    ce.fx.timer(ce.extend(l, {
                        elem: e,
                        anim: c,
                        queue: c.opts.queue
                    })),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }
            function V(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function z(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t,
                        t = "*");
                    var i, o = 0, r = t.toLowerCase().match(Ee) || [];
                    if (ce.isFunction(n))
                        for (; i = r[o++];)
                            "+" === i[0] ? (i = i.slice(1) || "*",
                                (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function U(e, t, n, i) {
                function o(s) {
                    var l;
                    return r[s] = !0,
                        ce.each(e[s] || [], function (e, s) {
                            var c = s(t, n, i);
                            return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                                o(c),
                                !1)
                        }),
                        l
                }
                var r = {}
                    , a = e === Dt;
                return o(t.dataTypes[0]) || !r["*"] && o("*")
            }
            function G(e, t) {
                var n, i, o = ce.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                return i && ce.extend(!0, e, i),
                    e
            }
            function X(e, t, n) {
                for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];)
                    l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (o in s)
                        if (s[o] && s[o].test(i)) {
                            l.unshift(o);
                            break
                        }
                if (l[0] in n)
                    r = l[0];
                else {
                    for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            r = o;
                            break
                        }
                        a || (a = o)
                    }
                    r = r || a
                }
                return r ? (r !== l[0] && l.unshift(r),
                    n[r]) : void 0
            }
            function Y(e, t, n, i) {
                var o, r, a, s, l, c = {}, u = e.dataTypes.slice();
                if (u[1])
                    for (a in e.converters)
                        c[a.toLowerCase()] = e.converters[a];
                for (r = u.shift(); r;)
                    if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = u.shift())
                        if ("*" === r)
                            r = l;
                        else if ("*" !== l && l !== r) {
                            if (a = c[l + " " + r] || c["* " + r],
                                !a)
                                for (o in c)
                                    if (s = o.split(" "),
                                        s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                        a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0],
                                            u.unshift(s[1]));
                                        break
                                    }
                            if (a !== !0)
                                if (a && e["throws"])
                                    t = a(t);
                                else
                                    try {
                                        t = a(t)
                                    } catch (d) {
                                        return {
                                            state: "parsererror",
                                            error: a ? d : "No conversion from " + l + " to " + r
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function J(e, t, n, i) {
                var o;
                if (ce.isArray(t))
                    ce.each(t, function (t, o) {
                        n || Ot.test(e) ? i(e, o) : J(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
                    });
                else if (n || "object" !== ce.type(t))
                    i(e, t);
                else
                    for (o in t)
                        J(e + "[" + o + "]", t[o], n, i)
            }
            function Q(e) {
                return ce.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var K = []
                , Z = n.document
                , ee = K.slice
                , te = K.concat
                , ne = K.push
                , ie = K.indexOf
                , oe = {}
                , re = oe.toString
                , ae = oe.hasOwnProperty
                , se = {}
                , le = "2.2.4"
                , ce = function (e, t) {
                    return new ce.fn.init(e, t)
                }
                , ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                , de = /^-ms-/
                , he = /-([\da-z])/gi
                , pe = function (e, t) {
                    return t.toUpperCase()
                };
            ce.fn = ce.prototype = {
                jquery: le,
                constructor: ce,
                selector: "",
                length: 0,
                toArray: function () {
                    return ee.call(this)
                },
                get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : ee.call(this)
                },
                pushStack: function (e) {
                    var t = ce.merge(this.constructor(), e);
                    return t.prevObject = this,
                        t.context = this.context,
                        t
                },
                each: function (e) {
                    return ce.each(this, e)
                },
                map: function (e) {
                    return this.pushStack(ce.map(this, function (t, n) {
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
                ce.extend = ce.fn.extend = function () {
                    var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
                    for ("boolean" == typeof a && (c = a,
                        a = arguments[s] || {},
                        s++),
                        "object" == typeof a || ce.isFunction(a) || (a = {}),
                        s === l && (a = this,
                            s--); l > s; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                n = a[t],
                                    i = e[t],
                                    a !== i && (c && i && (ce.isPlainObject(i) || (o = ce.isArray(i))) ? (o ? (o = !1,
                                        r = n && ce.isArray(n) ? n : []) : r = n && ce.isPlainObject(n) ? n : {},
                                        a[t] = ce.extend(c, r, i)) : void 0 !== i && (a[t] = i));
                    return a
                }
                ,
                ce.extend({
                    expando: "jQuery" + (le + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e)
                    },
                    noop: function () { },
                    isFunction: function (e) {
                        return "function" === ce.type(e)
                    },
                    isArray: Array.isArray,
                    isWindow: function (e) {
                        return null != e && e === e.window
                    },
                    isNumeric: function (e) {
                        var t = e && e.toString();
                        return !ce.isArray(e) && t - parseFloat(t) + 1 >= 0
                    },
                    isPlainObject: function (e) {
                        var t;
                        if ("object" !== ce.type(e) || e.nodeType || ce.isWindow(e))
                            return !1;
                        if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype || {}, "isPrototypeOf"))
                            return !1;
                        for (t in e)
                            ;
                        return void 0 === t || ae.call(e, t)
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    type: function (e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[re.call(e)] || "object" : typeof e
                    },
                    globalEval: function (e) {
                        var t, n = eval;
                        e = ce.trim(e),
                            e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
                                t.text = e,
                                Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                    },
                    camelCase: function (e) {
                        return e.replace(de, "ms-").replace(he, pe)
                    },
                    nodeName: function (e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function (e, t) {
                        var n, i = 0;
                        if (a(e))
                            for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++)
                                ;
                        else
                            for (i in e)
                                if (t.call(e[i], i, e[i]) === !1)
                                    break;
                        return e
                    },
                    trim: function (e) {
                        return null == e ? "" : (e + "").replace(ue, "")
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (a(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)),
                            n
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : ie.call(t, e, n)
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, i = 0, o = e.length; n > i; i++)
                            e[o++] = t[i];
                        return e.length = o,
                            e
                    },
                    grep: function (e, t, n) {
                        for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++)
                            i = !t(e[r], r),
                                i !== s && o.push(e[r]);
                        return o
                    },
                    map: function (e, t, n) {
                        var i, o, r = 0, s = [];
                        if (a(e))
                            for (i = e.length; i > r; r++)
                                o = t(e[r], r, n),
                                    null != o && s.push(o);
                        else
                            for (r in e)
                                o = t(e[r], r, n),
                                    null != o && s.push(o);
                        return te.apply([], s)
                    },
                    guid: 1,
                    proxy: function (e, t) {
                        var n, i, o;
                        return "string" == typeof t && (n = e[t],
                            t = e,
                            e = n),
                            ce.isFunction(e) ? (i = ee.call(arguments, 2),
                                o = function () {
                                    return e.apply(t || this, i.concat(ee.call(arguments)))
                                }
                                ,
                                o.guid = e.guid = e.guid || ce.guid++,
                                o) : void 0
                    },
                    now: Date.now,
                    support: se
                }),
                "function" == typeof Symbol && (ce.fn[Symbol.iterator] = K[Symbol.iterator]),
                ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    oe["[object " + t + "]"] = t.toLowerCase()
                });
            var fe = /*!
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
                    function t(e, t, n, i) {
                        var o, r, a, s, l, c, d, p, f = t && t.ownerDocument, g = t ? t.nodeType : 9;
                        if (n = n || [],
                            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                            return n;
                        if (!i && ((t ? t.ownerDocument || t : F) !== $ && L(t),
                            t = t || $,
                            O)) {
                            if (11 !== g && (c = ve.exec(e)))
                                if (o = c[1]) {
                                    if (9 === g) {
                                        if (!(a = t.getElementById(o)))
                                            return n;
                                        if (a.id === o)
                                            return n.push(a),
                                                n
                                    } else if (f && (a = f.getElementById(o)) && M(t, a) && a.id === o)
                                        return n.push(a),
                                            n
                                } else {
                                    if (c[2])
                                        return K.apply(n, t.getElementsByTagName(e)),
                                            n;
                                    if ((o = c[3]) && w.getElementsByClassName && t.getElementsByClassName)
                                        return K.apply(n, t.getElementsByClassName(o)),
                                            n
                                }
                            if (w.qsa && !z[e + " "] && (!B || !B.test(e))) {
                                if (1 !== g)
                                    f = t,
                                        p = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = P),
                                        d = E(e),
                                        r = d.length,
                                        l = he.test(s) ? "#" + s : "[id='" + s + "']"; r--;)
                                        d[r] = l + " " + h(d[r]);
                                    p = d.join(","),
                                        f = ye.test(e) && u(t.parentNode) || t
                                }
                                if (p)
                                    try {
                                        return K.apply(n, f.querySelectorAll(p)),
                                            n
                                    } catch (m) { } finally {
                                        s === P && t.removeAttribute("id")
                                    }
                            }
                        }
                        return A(e.replace(se, "$1"), t, n, i)
                    }
                    function n() {
                        function e(n, i) {
                            return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                                e[n + " "] = i
                        }
                        var t = [];
                        return e
                    }
                    function i(e) {
                        return e[P] = !0,
                            e
                    }
                    function o(e) {
                        var t = $.createElement("div");
                        try {
                            return !!e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                                t = null
                        }
                    }
                    function r(e, t) {
                        for (var n = e.split("|"), i = n.length; i--;)
                            k.attrHandle[n[i]] = t
                    }
                    function a(e, t) {
                        var n = t && e
                            , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                        if (i)
                            return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function s(e) {
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
                    function c(e) {
                        return i(function (t) {
                            return t = +t,
                                i(function (n, i) {
                                    for (var o, r = e([], n.length, t), a = r.length; a--;)
                                        n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                                })
                        })
                    }
                    function u(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e
                    }
                    function d() { }
                    function h(e) {
                        for (var t = 0, n = e.length, i = ""; n > t; t++)
                            i += e[t].value;
                        return i
                    }
                    function p(e, t, n) {
                        var i = t.dir
                            , o = n && "parentNode" === i
                            , r = I++;
                        return t.first ? function (t, n, r) {
                            for (; t = t[i];)
                                if (1 === t.nodeType || o)
                                    return e(t, n, r)
                        }
                            : function (t, n, a) {
                                var s, l, c, u = [_, r];
                                if (a) {
                                    for (; t = t[i];)
                                        if ((1 === t.nodeType || o) && e(t, n, a))
                                            return !0
                                } else
                                    for (; t = t[i];)
                                        if (1 === t.nodeType || o) {
                                            if (c = t[P] || (t[P] = {}),
                                                l = c[t.uniqueID] || (c[t.uniqueID] = {}),
                                                (s = l[i]) && s[0] === _ && s[1] === r)
                                                return u[2] = s[2];
                                            if (l[i] = u,
                                                u[2] = e(t, n, a))
                                                return !0
                                        }
                            }
                    }
                    function f(e) {
                        return e.length > 1 ? function (t, n, i) {
                            for (var o = e.length; o--;)
                                if (!e[o](t, n, i))
                                    return !1;
                            return !0
                        }
                            : e[0]
                    }
                    function g(e, n, i) {
                        for (var o = 0, r = n.length; r > o; o++)
                            t(e, n[o], i);
                        return i
                    }
                    function m(e, t, n, i, o) {
                        for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)
                            (r = e[s]) && (n && !n(r, i, o) || (a.push(r),
                                c && t.push(s)));
                        return a
                    }
                    function v(e, t, n, o, r, a) {
                        return o && !o[P] && (o = v(o)),
                            r && !r[P] && (r = v(r, a)),
                            i(function (i, a, s, l) {
                                var c, u, d, h = [], p = [], f = a.length, v = i || g(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? v : m(v, h, e, s, l), b = n ? r || (i ? e : f || o) ? [] : a : y;
                                if (n && n(y, b, s, l),
                                    o)
                                    for (c = m(b, p),
                                        o(c, [], s, l),
                                        u = c.length; u--;)
                                        (d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                                if (i) {
                                    if (r || e) {
                                        if (r) {
                                            for (c = [],
                                                u = b.length; u--;)
                                                (d = b[u]) && c.push(y[u] = d);
                                            r(null, b = [], c, l)
                                        }
                                        for (u = b.length; u--;)
                                            (d = b[u]) && (c = r ? ee(i, d) : h[u]) > -1 && (i[c] = !(a[c] = d))
                                    }
                                } else
                                    b = m(b === a ? b.splice(f, b.length) : b),
                                        r ? r(null, a, b, l) : K.apply(a, b)
                            })
                    }
                    function y(e) {
                        for (var t, n, i, o = e.length, r = k.relative[e[0].type], a = r || k.relative[" "], s = r ? 1 : 0, l = p(function (e) {
                            return e === t
                        }, a, !0), c = p(function (e) {
                            return ee(t, e) > -1
                        }, a, !0), u = [function (e, n, i) {
                            var o = !r && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                            return t = null,
                                o
                        }
                        ]; o > s; s++)
                            if (n = k.relative[e[s].type])
                                u = [p(f(u), n)];
                            else {
                                if (n = k.filter[e[s].type].apply(null, e[s].matches),
                                    n[P]) {
                                    for (i = ++s; o > i && !k.relative[e[i].type]; i++)
                                        ;
                                    return v(s > 1 && f(u), s > 1 && h(e.slice(0, s - 1).concat({
                                        value: " " === e[s - 2].type ? "*" : ""
                                    })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && h(e))
                                }
                                u.push(n)
                            }
                        return f(u)
                    }
                    function b(e, n) {
                        var o = n.length > 0
                            , r = e.length > 0
                            , a = function (i, a, s, l, c) {
                                var u, d, h, p = 0, f = "0", g = i && [], v = [], y = N, b = i || r && k.find.TAG("*", c), x = _ += null == y ? 1 : Math.random() || .1, w = b.length;
                                for (c && (N = a === $ || a || c); f !== w && null != (u = b[f]); f++) {
                                    if (r && u) {
                                        for (d = 0,
                                            a || u.ownerDocument === $ || (L(u),
                                                s = !O); h = e[d++];)
                                            if (h(u, a || $, s)) {
                                                l.push(u);
                                                break
                                            }
                                        c && (_ = x)
                                    }
                                    o && ((u = !h && u) && p--,
                                        i && g.push(u))
                                }
                                if (p += f,
                                    o && f !== p) {
                                    for (d = 0; h = n[d++];)
                                        h(g, v, a, s);
                                    if (i) {
                                        if (p > 0)
                                            for (; f--;)
                                                g[f] || v[f] || (v[f] = J.call(l));
                                        v = m(v)
                                    }
                                    K.apply(l, v),
                                        c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                                }
                                return c && (_ = x,
                                    N = y),
                                    g
                            };
                        return o ? i(a) : a
                    }
                    var x, w, k, T, C, E, S, A, N, H, D, L, $, j, O, B, R, q, M, P = "sizzle" + 1 * new Date, F = e.document, _ = 0, I = 0, W = n(), V = n(), z = n(), U = function (e, t) {
                        return e === t && (D = !0),
                            0
                    }, G = 1 << 31, X = {}.hasOwnProperty, Y = [], J = Y.pop, Q = Y.push, K = Y.push, Z = Y.slice, ee = function (e, t) {
                        for (var n = 0, i = e.length; i > n; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(re), he = new RegExp("^" + ie + "$"), pe = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, fe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, ke = function () {
                        L()
                    };
                    try {
                        K.apply(Y = Z.call(F.childNodes), F.childNodes),
                            Y[F.childNodes.length].nodeType
                    } catch (Te) {
                        K = {
                            apply: Y.length ? function (e, t) {
                                Q.apply(e, Z.call(t))
                            }
                                : function (e, t) {
                                    for (var n = e.length, i = 0; e[n++] = t[i++];)
                                        ;
                                    e.length = n - 1
                                }
                        }
                    }
                    w = t.support = {},
                        C = t.isXML = function (e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        }
                        ,
                        L = t.setDocument = function (e) {
                            var t, n, i = e ? e.ownerDocument || e : F;
                            return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i,
                                j = $.documentElement,
                                O = !C($),
                                (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)),
                                w.attributes = o(function (e) {
                                    return e.className = "i",
                                        !e.getAttribute("className")
                                }),
                                w.getElementsByTagName = o(function (e) {
                                    return e.appendChild($.createComment("")),
                                        !e.getElementsByTagName("*").length
                                }),
                                w.getElementsByClassName = me.test($.getElementsByClassName),
                                w.getById = o(function (e) {
                                    return j.appendChild(e).id = P,
                                        !$.getElementsByName || !$.getElementsByName(P).length
                                }),
                                w.getById ? (k.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && O) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }
                                    ,
                                    k.filter.ID = function (e) {
                                        var t = e.replace(xe, we);
                                        return function (e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }
                                ) : (delete k.find.ID,
                                    k.filter.ID = function (e) {
                                        var t = e.replace(xe, we);
                                        return function (e) {
                                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }
                                    ),
                                k.find.TAG = w.getElementsByTagName ? function (e, t) {
                                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                                }
                                    : function (e, t) {
                                        var n, i = [], o = 0, r = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; n = r[o++];)
                                                1 === n.nodeType && i.push(n);
                                            return i
                                        }
                                        return r
                                    }
                                ,
                                k.find.CLASS = w.getElementsByClassName && function (e, t) {
                                    return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
                                }
                                ,
                                R = [],
                                B = [],
                                (w.qsa = me.test($.querySelectorAll)) && (o(function (e) {
                                    j.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + te + ")"),
                                        e.querySelectorAll("[id~=" + P + "-]").length || B.push("~="),
                                        e.querySelectorAll(":checked").length || B.push(":checked"),
                                        e.querySelectorAll("a#" + P + "+*").length || B.push(".#.+[+~]")
                                }),
                                    o(function (e) {
                                        var t = $.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="),
                                            e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            B.push(",.*:")
                                    })),
                                (w.matchesSelector = me.test(q = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function (e) {
                                    w.disconnectedMatch = q.call(e, "div"),
                                        q.call(e, "[s!='']:x"),
                                        R.push("!=", re)
                                }),
                                B = B.length && new RegExp(B.join("|")),
                                R = R.length && new RegExp(R.join("|")),
                                t = me.test(j.compareDocumentPosition),
                                M = t || me.test(j.contains) ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e
                                        , i = t && t.parentNode;
                                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                                }
                                    : function (e, t) {
                                        if (t)
                                            for (; t = t.parentNode;)
                                                if (t === e)
                                                    return !0;
                                        return !1
                                    }
                                ,
                                U = t ? function (e, t) {
                                    if (e === t)
                                        return D = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === F && M(F, e) ? -1 : t === $ || t.ownerDocument === F && M(F, t) ? 1 : H ? ee(H, e) - ee(H, t) : 0 : 4 & n ? -1 : 1)
                                }
                                    : function (e, t) {
                                        if (e === t)
                                            return D = !0,
                                                0;
                                        var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], l = [t];
                                        if (!o || !r)
                                            return e === $ ? -1 : t === $ ? 1 : o ? -1 : r ? 1 : H ? ee(H, e) - ee(H, t) : 0;
                                        if (o === r)
                                            return a(e, t);
                                        for (n = e; n = n.parentNode;)
                                            s.unshift(n);
                                        for (n = t; n = n.parentNode;)
                                            l.unshift(n);
                                        for (; s[i] === l[i];)
                                            i++;
                                        return i ? a(s[i], l[i]) : s[i] === F ? -1 : l[i] === F ? 1 : 0
                                    }
                                ,
                                $) : $
                        }
                        ,
                        t.matches = function (e, n) {
                            return t(e, null, null, n)
                        }
                        ,
                        t.matchesSelector = function (e, n) {
                            if ((e.ownerDocument || e) !== $ && L(e),
                                n = n.replace(ue, "='$1']"),
                                w.matchesSelector && O && !z[n + " "] && (!R || !R.test(n)) && (!B || !B.test(n)))
                                try {
                                    var i = q.call(e, n);
                                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return i
                                } catch (o) { }
                            return t(n, $, null, [e]).length > 0
                        }
                        ,
                        t.contains = function (e, t) {
                            return (e.ownerDocument || e) !== $ && L(e),
                                M(e, t)
                        }
                        ,
                        t.attr = function (e, t) {
                            (e.ownerDocument || e) !== $ && L(e);
                            var n = k.attrHandle[t.toLowerCase()]
                                , i = n && X.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                            return void 0 !== i ? i : w.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        }
                        ,
                        t.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        t.uniqueSort = function (e) {
                            var t, n = [], i = 0, o = 0;
                            if (D = !w.detectDuplicates,
                                H = !w.sortStable && e.slice(0),
                                e.sort(U),
                                D) {
                                for (; t = e[o++];)
                                    t === e[o] && (i = n.push(o));
                                for (; i--;)
                                    e.splice(n[i], 1)
                            }
                            return H = null,
                                e
                        }
                        ,
                        T = t.getText = function (e) {
                            var t, n = "", i = 0, o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += T(e)
                                } else if (3 === o || 4 === o)
                                    return e.nodeValue
                            } else
                                for (; t = e[i++];)
                                    n += T(t);
                            return n
                        }
                        ,
                        k = t.selectors = {
                            cacheLength: 50,
                            createPseudo: i,
                            match: pe,
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
                                    return e[1] = e[1].replace(xe, we),
                                        e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we),
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
                                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                        e[2] = n.slice(0, t)),
                                        e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(xe, we).toLowerCase();
                                    return "*" === e ? function () {
                                        return !0
                                    }
                                        : function (e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                },
                                CLASS: function (e) {
                                    var t = W[e + " "];
                                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function (e, n, i) {
                                    return function (o) {
                                        var r = t.attr(o, e);
                                        return null == r ? "!=" === n : n ? (r += "",
                                            "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                                    }
                                },
                                CHILD: function (e, t, n, i, o) {
                                    var r = "nth" !== e.slice(0, 3)
                                        , a = "last" !== e.slice(-4)
                                        , s = "of-type" === t;
                                    return 1 === i && 0 === o ? function (e) {
                                        return !!e.parentNode
                                    }
                                        : function (t, n, l) {
                                            var c, u, d, h, p, f, g = r !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                                            if (m) {
                                                if (r) {
                                                    for (; g;) {
                                                        for (h = t; h = h[g];)
                                                            if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                                                return !1;
                                                        f = g = "only" === e && !f && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (f = [a ? m.firstChild : m.lastChild],
                                                    a && y) {
                                                    for (h = m,
                                                        d = h[P] || (h[P] = {}),
                                                        u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                                        c = u[e] || [],
                                                        p = c[0] === _ && c[1],
                                                        b = p && c[2],
                                                        h = p && m.childNodes[p]; h = ++p && h && h[g] || (b = p = 0) || f.pop();)
                                                        if (1 === h.nodeType && ++b && h === t) {
                                                            u[e] = [_, p, b];
                                                            break
                                                        }
                                                } else if (y && (h = t,
                                                    d = h[P] || (h[P] = {}),
                                                    u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                                    c = u[e] || [],
                                                    p = c[0] === _ && c[1],
                                                    b = p),
                                                    b === !1)
                                                    for (; (h = ++p && h && h[g] || (b = p = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[P] || (h[P] = {}),
                                                        u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                                        u[e] = [_, b]),
                                                        h !== t));)
                                                        ;
                                                return b -= o,
                                                    b === i || b % i === 0 && b / i >= 0
                                            }
                                        }
                                },
                                PSEUDO: function (e, n) {
                                    var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return r[P] ? r(n) : r.length > 1 ? (o = [e, e, "", n],
                                        k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                            for (var i, o = r(e, n), a = o.length; a--;)
                                                i = ee(e, o[a]),
                                                    e[i] = !(t[i] = o[a])
                                        }) : function (e) {
                                            return r(e, 0, o)
                                        }
                                    ) : r
                                }
                            },
                            pseudos: {
                                not: i(function (e) {
                                    var t = []
                                        , n = []
                                        , o = S(e.replace(se, "$1"));
                                    return o[P] ? i(function (e, t, n, i) {
                                        for (var r, a = o(e, null, i, []), s = e.length; s--;)
                                            (r = a[s]) && (e[s] = !(t[s] = r))
                                    }) : function (e, i, r) {
                                        return t[0] = e,
                                            o(t, null, r, n),
                                            t[0] = null,
                                            !n.pop()
                                    }
                                }),
                                has: i(function (e) {
                                    return function (n) {
                                        return t(e, n).length > 0
                                    }
                                }),
                                contains: i(function (e) {
                                    return e = e.replace(xe, we),
                                        function (t) {
                                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: i(function (e) {
                                    return he.test(e || "") || t.error("unsupported lang: " + e),
                                        e = e.replace(xe, we).toLowerCase(),
                                        function (t) {
                                            var n;
                                            do
                                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
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
                                    return e === j
                                },
                                focus: function (e) {
                                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                                    return fe.test(e.nodeName)
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: c(function () {
                                    return [0]
                                }),
                                last: c(function (e, t) {
                                    return [t - 1]
                                }),
                                eq: c(function (e, t, n) {
                                    return [0 > n ? n + t : n]
                                }),
                                even: c(function (e, t) {
                                    for (var n = 0; t > n; n += 2)
                                        e.push(n);
                                    return e
                                }),
                                odd: c(function (e, t) {
                                    for (var n = 1; t > n; n += 2)
                                        e.push(n);
                                    return e
                                }),
                                lt: c(function (e, t, n) {
                                    for (var i = 0 > n ? n + t : n; --i >= 0;)
                                        e.push(i);
                                    return e
                                }),
                                gt: c(function (e, t, n) {
                                    for (var i = 0 > n ? n + t : n; ++i < t;)
                                        e.push(i);
                                    return e
                                })
                            }
                        },
                        k.pseudos.nth = k.pseudos.eq;
                    for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        k.pseudos[x] = s(x);
                    for (x in {
                        submit: !0,
                        reset: !0
                    })
                        k.pseudos[x] = l(x);
                    return d.prototype = k.filters = k.pseudos,
                        k.setFilters = new d,
                        E = t.tokenize = function (e, n) {
                            var i, o, r, a, s, l, c, u = V[e + " "];
                            if (u)
                                return n ? 0 : u.slice(0);
                            for (s = e,
                                l = [],
                                c = k.preFilter; s;) {
                                i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                                    l.push(r = [])),
                                    i = !1,
                                    (o = ce.exec(s)) && (i = o.shift(),
                                        r.push({
                                            value: i,
                                            type: o[0].replace(se, " ")
                                        }),
                                        s = s.slice(i.length));
                                for (a in k.filter)
                                    !(o = pe[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(),
                                        r.push({
                                            value: i,
                                            type: a,
                                            matches: o
                                        }),
                                        s = s.slice(i.length));
                                if (!i)
                                    break
                            }
                            return n ? s.length : s ? t.error(e) : V(e, l).slice(0)
                        }
                        ,
                        S = t.compile = function (e, t) {
                            var n, i = [], o = [], r = z[e + " "];
                            if (!r) {
                                for (t || (t = E(e)),
                                    n = t.length; n--;)
                                    r = y(t[n]),
                                        r[P] ? i.push(r) : o.push(r);
                                r = z(e, b(o, i)),
                                    r.selector = e
                            }
                            return r
                        }
                        ,
                        A = t.select = function (e, t, n, i) {
                            var o, r, a, s, l, c = "function" == typeof e && e, d = !i && E(e = c.selector || e);
                            if (n = n || [],
                                1 === d.length) {
                                if (r = d[0] = d[0].slice(0),
                                    r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && O && k.relative[r[1].type]) {
                                    if (t = (k.find.ID(a.matches[0].replace(xe, we), t) || [])[0],
                                        !t)
                                        return n;
                                    c && (t = t.parentNode),
                                        e = e.slice(r.shift().value.length)
                                }
                                for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o],
                                    !k.relative[s = a.type]);)
                                    if ((l = k.find[s]) && (i = l(a.matches[0].replace(xe, we), ye.test(r[0].type) && u(t.parentNode) || t))) {
                                        if (r.splice(o, 1),
                                            e = i.length && h(r),
                                            !e)
                                            return K.apply(n, i),
                                                n;
                                        break
                                    }
                            }
                            return (c || S(e, d))(i, t, !O, n, !t || ye.test(e) && u(t.parentNode) || t),
                                n
                        }
                        ,
                        w.sortStable = P.split("").sort(U).join("") === P,
                        w.detectDuplicates = !!D,
                        L(),
                        w.sortDetached = o(function (e) {
                            return 1 & e.compareDocumentPosition($.createElement("div"))
                        }),
                        o(function (e) {
                            return e.innerHTML = "<a href='#'></a>",
                                "#" === e.firstChild.getAttribute("href")
                        }) || r("type|href|height|width", function (e, t, n) {
                            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }),
                        w.attributes && o(function (e) {
                            return e.innerHTML = "<input/>",
                                e.firstChild.setAttribute("value", ""),
                                "" === e.firstChild.getAttribute("value")
                        }) || r("value", function (e, t, n) {
                            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                        }),
                        o(function (e) {
                            return null == e.getAttribute("disabled")
                        }) || r(te, function (e, t, n) {
                            var i;
                            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        }),
                        t
                }(n);
            ce.find = fe,
                ce.expr = fe.selectors,
                ce.expr[":"] = ce.expr.pseudos,
                ce.uniqueSort = ce.unique = fe.uniqueSort,
                ce.text = fe.getText,
                ce.isXMLDoc = fe.isXML,
                ce.contains = fe.contains;
            var ge = function (e, t, n) {
                for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && ce(e).is(n))
                            break;
                        i.push(e)
                    }
                return i
            }
                , me = function (e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                , ve = ce.expr.match.needsContext
                , ye = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                , be = /^.[^:#\[\.,]*$/;
            ce.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType ? ce.find.matchesSelector(i, e) ? [i] : [] : ce.find.matches(e, ce.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
            }
                ,
                ce.fn.extend({
                    find: function (e) {
                        var t, n = this.length, i = [], o = this;
                        if ("string" != typeof e)
                            return this.pushStack(ce(e).filter(function () {
                                for (t = 0; n > t; t++)
                                    if (ce.contains(o[t], this))
                                        return !0
                            }));
                        for (t = 0; n > t; t++)
                            ce.find(e, o[t], i);
                        return i = this.pushStack(n > 1 ? ce.unique(i) : i),
                            i.selector = this.selector ? this.selector + " " + e : e,
                            i
                    },
                    filter: function (e) {
                        return this.pushStack(s(this, e || [], !1))
                    },
                    not: function (e) {
                        return this.pushStack(s(this, e || [], !0))
                    },
                    is: function (e) {
                        return !!s(this, "string" == typeof e && ve.test(e) ? ce(e) : e || [], !1).length
                    }
                });
            var xe, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ke = ce.fn.init = function (e, t, n) {
                var i, o;
                if (!e)
                    return this;
                if (n = n || xe,
                    "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : we.exec(e),
                        !i || !i[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof ce ? t[0] : t,
                            ce.merge(this, ce.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                            ye.test(i[1]) && ce.isPlainObject(t))
                            for (i in t)
                                ce.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return o = Z.getElementById(i[2]),
                        o && o.parentNode && (this.length = 1,
                            this[0] = o),
                        this.context = Z,
                        this.selector = e,
                        this
                }
                return e.nodeType ? (this.context = this[0] = e,
                    this.length = 1,
                    this) : ce.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : (void 0 !== e.selector && (this.selector = e.selector,
                        this.context = e.context),
                        ce.makeArray(e, this))
            }
                ;
            ke.prototype = ce.fn,
                xe = ce(Z);
            var Te = /^(?:parents|prev(?:Until|All))/
                , Ce = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            ce.fn.extend({
                has: function (e) {
                    var t = ce(e, this)
                        , n = t.length;
                    return this.filter(function () {
                        for (var e = 0; n > e; e++)
                            if (ce.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function (e, t) {
                    for (var n, i = 0, o = this.length, r = [], a = ve.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; o > i; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                    return this.pushStack(r.length > 1 ? ce.uniqueSort(r) : r)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? ie.call(ce(e), this[0]) : ie.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
                ce.each({
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
                        return e.contentDocument || ce.merge([], e.childNodes)
                    }
                }, function (e, t) {
                    ce.fn[e] = function (n, i) {
                        var o = ce.map(this, t, n);
                        return "Until" !== e.slice(-5) && (i = n),
                            i && "string" == typeof i && (o = ce.filter(i, o)),
                            this.length > 1 && (Ce[e] || ce.uniqueSort(o),
                                Te.test(e) && o.reverse()),
                            this.pushStack(o)
                    }
                });
            var Ee = /\S+/g;
            ce.Callbacks = function (e) {
                e = "string" == typeof e ? c(e) : ce.extend({}, e);
                var t, n, i, o, r = [], a = [], s = -1, l = function () {
                    for (o = e.once,
                        i = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < r.length;)
                            r[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = r.length,
                                n = !1);
                    e.memory || (n = !1),
                        t = !1,
                        o && (r = n ? [] : "")
                }, u = {
                    add: function () {
                        return r && (n && !t && (s = r.length - 1,
                            a.push(n)),
                            function i(t) {
                                ce.each(t, function (t, n) {
                                    ce.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== ce.type(n) && i(n)
                                })
                            }(arguments),
                            n && !t && l()),
                            this
                    },
                    remove: function () {
                        return ce.each(arguments, function (e, t) {
                            for (var n; (n = ce.inArray(t, r, n)) > -1;)
                                r.splice(n, 1),
                                    s >= n && s--
                        }),
                            this
                    },
                    has: function (e) {
                        return e ? ce.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function () {
                        return r && (r = []),
                            this
                    },
                    disable: function () {
                        return o = a = [],
                            r = n = "",
                            this
                    },
                    disabled: function () {
                        return !r
                    },
                    lock: function () {
                        return o = a = [],
                            n || (r = n = ""),
                            this
                    },
                    locked: function () {
                        return !!o
                    },
                    fireWith: function (e, n) {
                        return o || (n = n || [],
                            n = [e, n.slice ? n.slice() : n],
                            a.push(n),
                            t || l()),
                            this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments),
                            this
                    },
                    fired: function () {
                        return !!i
                    }
                };
                return u
            }
                ,
                ce.extend({
                    Deferred: function (e) {
                        var t = [["resolve", "done", ce.Callbacks("once memory"), "resolved"], ["reject", "fail", ce.Callbacks("once memory"), "rejected"], ["notify", "progress", ce.Callbacks("memory")]]
                            , n = "pending"
                            , i = {
                                state: function () {
                                    return n
                                },
                                always: function () {
                                    return o.done(arguments).fail(arguments),
                                        this
                                },
                                then: function () {
                                    var e = arguments;
                                    return ce.Deferred(function (n) {
                                        ce.each(t, function (t, r) {
                                            var a = ce.isFunction(e[t]) && e[t];
                                            o[r[1]](function () {
                                                var e = a && a.apply(this, arguments);
                                                e && ce.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                            })
                                        }),
                                            e = null
                                    }).promise()
                                },
                                promise: function (e) {
                                    return null != e ? ce.extend(e, i) : i
                                }
                            }
                            , o = {};
                        return i.pipe = i.then,
                            ce.each(t, function (e, r) {
                                var a = r[2]
                                    , s = r[3];
                                i[r[1]] = a.add,
                                    s && a.add(function () {
                                        n = s
                                    }, t[1 ^ e][2].disable, t[2][2].lock),
                                    o[r[0]] = function () {
                                        return o[r[0] + "With"](this === o ? i : this, arguments),
                                            this
                                    }
                                    ,
                                    o[r[0] + "With"] = a.fireWith
                            }),
                            i.promise(o),
                            e && e.call(o, o),
                            o
                    },
                    when: function (e) {
                        var t, n, i, o = 0, r = ee.call(arguments), a = r.length, s = 1 !== a || e && ce.isFunction(e.promise) ? a : 0, l = 1 === s ? e : ce.Deferred(), c = function (e, n, i) {
                            return function (o) {
                                n[e] = this,
                                    i[e] = arguments.length > 1 ? ee.call(arguments) : o,
                                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                            }
                        };
                        if (a > 1)
                            for (t = new Array(a),
                                n = new Array(a),
                                i = new Array(a); a > o; o++)
                                r[o] && ce.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --s;
                        return s || l.resolveWith(i, r),
                            l.promise()
                    }
                });
            var Se;
            ce.fn.ready = function (e) {
                return ce.ready.promise().done(e),
                    this
            }
                ,
                ce.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (e) {
                        e ? ce.readyWait++ : ce.ready(!0)
                    },
                    ready: function (e) {
                        (e === !0 ? --ce.readyWait : ce.isReady) || (ce.isReady = !0,
                            e !== !0 && --ce.readyWait > 0 || (Se.resolveWith(Z, [ce]),
                                ce.fn.triggerHandler && (ce(Z).triggerHandler("ready"),
                                    ce(Z).off("ready"))))
                    }
                }),
                ce.ready.promise = function (e) {
                    return Se || (Se = ce.Deferred(),
                        "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(ce.ready) : (Z.addEventListener("DOMContentLoaded", u),
                            n.addEventListener("load", u))),
                        Se.promise(e)
                }
                ,
                ce.ready.promise();
            var Ae = function (e, t, n, i, o, r, a) {
                var s = 0
                    , l = e.length
                    , c = null == n;
                if ("object" === ce.type(n)) {
                    o = !0;
                    for (s in n)
                        Ae(e, t, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0,
                    ce.isFunction(i) || (a = !0),
                    c && (a ? (t.call(e, i),
                        t = null) : (c = t,
                            t = function (e, t, n) {
                                return c.call(ce(e), n)
                            }
                        )),
                    t))
                    for (; l > s; s++)
                        t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            }
                , Ne = function (e) {
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
                        if (!Ne(e))
                            return {};
                        var t = e[this.expando];
                        return t || (t = {},
                            Ne(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))),
                            t
                    },
                    set: function (e, t, n) {
                        var i, o = this.cache(e);
                        if ("string" == typeof t)
                            o[t] = n;
                        else
                            for (i in t)
                                o[i] = t[i];
                        return o
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                    },
                    access: function (e, t, n) {
                        var i;
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t),
                            void 0 !== i ? i : this.get(e, ce.camelCase(t))) : (this.set(e, t, n),
                                void 0 !== n ? n : t)
                    },
                    remove: function (e, t) {
                        var n, i, o, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 === t)
                                this.register(e);
                            else {
                                ce.isArray(t) ? i = t.concat(t.map(ce.camelCase)) : (o = ce.camelCase(t),
                                    t in r ? i = [t, o] : (i = o,
                                        i = i in r ? [i] : i.match(Ee) || [])),
                                    n = i.length;
                                for (; n--;)
                                    delete r[i[n]]
                            }
                            (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !ce.isEmptyObject(t)
                    }
                };
            var He = new d
                , De = new d
                , Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , $e = /[A-Z]/g;
            ce.extend({
                hasData: function (e) {
                    return De.hasData(e) || He.hasData(e)
                },
                data: function (e, t, n) {
                    return De.access(e, t, n)
                },
                removeData: function (e, t) {
                    De.remove(e, t)
                },
                _data: function (e, t, n) {
                    return He.access(e, t, n)
                },
                _removeData: function (e, t) {
                    He.remove(e, t)
                }
            }),
                ce.fn.extend({
                    data: function (e, t) {
                        var n, i, o, r = this[0], a = r && r.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = De.get(r),
                                1 === r.nodeType && !He.get(r, "hasDataAttrs"))) {
                                for (n = a.length; n--;)
                                    a[n] && (i = a[n].name,
                                        0 === i.indexOf("data-") && (i = ce.camelCase(i.slice(5)),
                                            h(r, i, o[i])));
                                He.set(r, "hasDataAttrs", !0)
                            }
                            return o
                        }
                        return "object" == typeof e ? this.each(function () {
                            De.set(this, e)
                        }) : Ae(this, function (t) {
                            var n, i;
                            if (r && void 0 === t) {
                                if (n = De.get(r, e) || De.get(r, e.replace($e, "-$&").toLowerCase()),
                                    void 0 !== n)
                                    return n;
                                if (i = ce.camelCase(e),
                                    n = De.get(r, i),
                                    void 0 !== n)
                                    return n;
                                if (n = h(r, i, void 0),
                                    void 0 !== n)
                                    return n
                            } else
                                i = ce.camelCase(e),
                                    this.each(function () {
                                        var n = De.get(this, i);
                                        De.set(this, i, t),
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
                ce.extend({
                    queue: function (e, t, n) {
                        var i;
                        return e ? (t = (t || "fx") + "queue",
                            i = He.get(e, t),
                            n && (!i || ce.isArray(n) ? i = He.access(e, t, ce.makeArray(n)) : i.push(n)),
                            i || []) : void 0
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = ce.queue(e, t)
                            , i = n.length
                            , o = n.shift()
                            , r = ce._queueHooks(e, t)
                            , a = function () {
                                ce.dequeue(e, t)
                            };
                        "inprogress" === o && (o = n.shift(),
                            i--),
                            o && ("fx" === t && n.unshift("inprogress"),
                                delete r.stop,
                                o.call(e, a, r)),
                            !i && r && r.empty.fire()
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return He.get(e, n) || He.access(e, n, {
                            empty: ce.Callbacks("once memory").add(function () {
                                He.remove(e, [t + "queue", n])
                            })
                        })
                    }
                }),
                ce.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                            e = "fx",
                            n--),
                            arguments.length < n ? ce.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                                var n = ce.queue(this, e, t);
                                ce._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== n[0] && ce.dequeue(this, e)
                            })
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            ce.dequeue(this, e)
                        })
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function (e, t) {
                        var n, i = 1, o = ce.Deferred(), r = this, a = this.length, s = function () {
                            --i || o.resolveWith(r, [r])
                        };
                        for ("string" != typeof e && (t = e,
                            e = void 0),
                            e = e || "fx"; a--;)
                            n = He.get(r[a], e + "queueHooks"),
                                n && n.empty && (i++,
                                    n.empty.add(s));
                        return s(),
                            o.promise(t)
                    }
                });
            var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , Oe = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i")
                , Be = ["Top", "Right", "Bottom", "Left"]
                , Re = function (e, t) {
                    return e = t || e,
                        "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
                }
                , qe = /^(?:checkbox|radio)$/i
                , Me = /<([\w:-]+)/
                , Pe = /^$|\/(?:java|ecma)script/i
                , Fe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Fe.optgroup = Fe.option,
                Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead,
                Fe.th = Fe.td;
            var _e = /<|&#?\w+;/;
            !function () {
                var e = Z.createDocumentFragment()
                    , t = e.appendChild(Z.createElement("div"))
                    , n = Z.createElement("input");
                n.setAttribute("type", "radio"),
                    n.setAttribute("checked", "checked"),
                    n.setAttribute("name", "t"),
                    t.appendChild(n),
                    se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    t.innerHTML = "<textarea>x</textarea>",
                    se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Ie = /^key/
                , We = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                , Ve = /^([^.]*)(?:\.(.+)|)/;
            ce.event = {
                global: {},
                add: function (e, t, n, i, o) {
                    var r, a, s, l, c, u, d, h, p, f, g, m = He.get(e);
                    if (m)
                        for (n.handler && (r = n,
                            n = r.handler,
                            o = r.selector),
                            n.guid || (n.guid = ce.guid++),
                            (l = m.events) || (l = m.events = {}),
                            (a = m.handle) || (a = m.handle = function (t) {
                                return "undefined" != typeof ce && ce.event.triggered !== t.type ? ce.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            t = (t || "").match(Ee) || [""],
                            c = t.length; c--;)
                            s = Ve.exec(t[c]) || [],
                                p = g = s[1],
                                f = (s[2] || "").split(".").sort(),
                                p && (d = ce.event.special[p] || {},
                                    p = (o ? d.delegateType : d.bindType) || p,
                                    d = ce.event.special[p] || {},
                                    u = ce.extend({
                                        type: p,
                                        origType: g,
                                        data: i,
                                        handler: n,
                                        guid: n.guid,
                                        selector: o,
                                        needsContext: o && ce.expr.match.needsContext.test(o),
                                        namespace: f.join(".")
                                    }, r),
                                    (h = l[p]) || (h = l[p] = [],
                                        h.delegateCount = 0,
                                        d.setup && d.setup.call(e, i, f, a) !== !1 || e.addEventListener && e.addEventListener(p, a)),
                                    d.add && (d.add.call(e, u),
                                        u.handler.guid || (u.handler.guid = n.guid)),
                                    o ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                                    ce.event.global[p] = !0)
                },
                remove: function (e, t, n, i, o) {
                    var r, a, s, l, c, u, d, h, p, f, g, m = He.hasData(e) && He.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(Ee) || [""],
                            c = t.length; c--;)
                            if (s = Ve.exec(t[c]) || [],
                                p = g = s[1],
                                f = (s[2] || "").split(".").sort(),
                                p) {
                                for (d = ce.event.special[p] || {},
                                    p = (i ? d.delegateType : d.bindType) || p,
                                    h = l[p] || [],
                                    s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    a = r = h.length; r--;)
                                    u = h[r],
                                        !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1),
                                            u.selector && h.delegateCount--,
                                            d.remove && d.remove.call(e, u));
                                a && !h.length && (d.teardown && d.teardown.call(e, f, m.handle) !== !1 || ce.removeEvent(e, p, m.handle),
                                    delete l[p])
                            } else
                                for (p in l)
                                    ce.event.remove(e, p + t[c], n, i, !0);
                        ce.isEmptyObject(l) && He.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = ce.event.fix(e);
                    var t, n, i, o, r, a = [], s = ee.call(arguments), l = (He.get(this, "events") || {})[e.type] || [], c = ce.event.special[e.type] || {};
                    if (s[0] = e,
                        e.delegateTarget = this,
                        !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (a = ce.event.handlers.call(this, e, l),
                            t = 0; (o = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem,
                                n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)
                                e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r,
                                    e.data = r.data,
                                    i = ((ce.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s),
                                    void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                                        e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function (e, t) {
                    var n, i, o, r, a = [], s = t.delegateCount, l = e.target;
                    if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                                for (i = [],
                                    n = 0; s > n; n++)
                                    r = t[n],
                                        o = r.selector + " ",
                                        void 0 === i[o] && (i[o] = r.needsContext ? ce(o, this).index(l) > -1 : ce.find(o, this, null, [l]).length),
                                        i[o] && i.push(r);
                                i.length && a.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }),
                        a
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
                        var n, i, o, r = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z,
                            i = n.documentElement,
                            o = n.body,
                            e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0),
                            e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                            e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                            e
                    }
                },
                fix: function (e) {
                    if (e[ce.expando])
                        return e;
                    var t, n, i, o = e.type, r = e, a = this.fixHooks[o];
                    for (a || (this.fixHooks[o] = a = We.test(o) ? this.mouseHooks : Ie.test(o) ? this.keyHooks : {}),
                        i = a.props ? this.props.concat(a.props) : this.props,
                        e = new ce.Event(r),
                        t = i.length; t--;)
                        n = i[t],
                            e[n] = r[n];
                    return e.target || (e.target = Z),
                        3 === e.target.nodeType && (e.target = e.target.parentNode),
                        a.filter ? a.filter(e, r) : e
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
                            return "checkbox" === this.type && this.click && ce.nodeName(this, "input") ? (this.click(),
                                !1) : void 0
                        },
                        _default: function (e) {
                            return ce.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
                ce.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                ce.Event = function (e, t) {
                    return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e,
                        this.type = e.type,
                        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : y) : this.type = e,
                        t && ce.extend(this, t),
                        this.timeStamp = e && e.timeStamp || ce.now(),
                        void (this[ce.expando] = !0)) : new ce.Event(e, t)
                }
                ,
                ce.Event.prototype = {
                    constructor: ce.Event,
                    isDefaultPrevented: y,
                    isPropagationStopped: y,
                    isImmediatePropagationStopped: y,
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
                ce.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function (e, t) {
                    ce.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n, i = this, o = e.relatedTarget, r = e.handleObj;
                            return o && (o === i || ce.contains(i, o)) || (e.type = r.origType,
                                n = r.handler.apply(this, arguments),
                                e.type = t),
                                n
                        }
                    }
                }),
                ce.fn.extend({
                    on: function (e, t, n, i) {
                        return x(this, e, t, n, i)
                    },
                    one: function (e, t, n, i) {
                        return x(this, e, t, n, i, 1)
                    },
                    off: function (e, t, n) {
                        var i, o;
                        if (e && e.preventDefault && e.handleObj)
                            return i = e.handleObj,
                                ce(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                                this;
                        if ("object" == typeof e) {
                            for (o in e)
                                this.off(o, t, e[o]);
                            return this
                        }
                        return t !== !1 && "function" != typeof t || (n = t,
                            t = void 0),
                            n === !1 && (n = y),
                            this.each(function () {
                                ce.event.remove(this, e, n, t)
                            })
                    }
                });
            var ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                , Ue = /<script|<style|<link/i
                , Ge = /checked\s*(?:[^=]|=\s*.checked.)/i
                , Xe = /^true\/(.*)/
                , Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ce.extend({
                htmlPrefilter: function (e) {
                    return e.replace(ze, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var i, o, r, a, s = e.cloneNode(!0), l = ce.contains(e.ownerDocument, e);
                    if (!(se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                        for (a = f(s),
                            r = f(e),
                            i = 0,
                            o = r.length; o > i; i++)
                            E(r[i], a[i]);
                    if (t)
                        if (n)
                            for (r = r || f(e),
                                a = a || f(s),
                                i = 0,
                                o = r.length; o > i; i++)
                                C(r[i], a[i]);
                        else
                            C(e, s);
                    return a = f(s, "script"),
                        a.length > 0 && g(a, !l && f(e, "script")),
                        s
                },
                cleanData: function (e) {
                    for (var t, n, i, o = ce.event.special, r = 0; void 0 !== (n = e[r]); r++)
                        if (Ne(n)) {
                            if (t = n[He.expando]) {
                                if (t.events)
                                    for (i in t.events)
                                        o[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, t.handle);
                                n[He.expando] = void 0
                            }
                            n[De.expando] && (n[De.expando] = void 0)
                        }
                }
            }),
                ce.fn.extend({
                    domManip: S,
                    detach: function (e) {
                        return A(this, e, !0)
                    },
                    remove: function (e) {
                        return A(this, e)
                    },
                    text: function (e) {
                        return Ae(this, function (e) {
                            return void 0 === e ? ce.text(this) : this.empty().each(function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function () {
                        return S(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = w(this, e);
                                t.appendChild(e)
                            }
                        })
                    },
                    prepend: function () {
                        return S(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = w(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function () {
                        return S(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function () {
                        return S(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (ce.cleanData(f(e, !1)),
                                e.textContent = "");
                        return this
                    },
                    clone: function (e, t) {
                        return e = null == e ? !1 : e,
                            t = null == t ? e : t,
                            this.map(function () {
                                return ce.clone(this, e, t)
                            })
                    },
                    html: function (e) {
                        return Ae(this, function (e) {
                            var t = this[0] || {}
                                , n = 0
                                , i = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Ue.test(e) && !Fe[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = ce.htmlPrefilter(e);
                                try {
                                    for (; i > n; n++)
                                        t = this[n] || {},
                                            1 === t.nodeType && (ce.cleanData(f(t, !1)),
                                                t.innerHTML = e);
                                    t = 0
                                } catch (o) { }
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function () {
                        var e = [];
                        return S(this, arguments, function (t) {
                            var n = this.parentNode;
                            ce.inArray(this, e) < 0 && (ce.cleanData(f(this)),
                                n && n.replaceChild(t, this))
                        }, e)
                    }
                }),
                ce.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function (e, t) {
                    ce.fn[e] = function (e) {
                        for (var n, i = [], o = ce(e), r = o.length - 1, a = 0; r >= a; a++)
                            n = a === r ? this : this.clone(!0),
                                ce(o[a])[t](n),
                                ne.apply(i, n.get());
                        return this.pushStack(i)
                    }
                });
            var Je, Qe = {
                HTML: "block",
                BODY: "block"
            }, Ke = /^margin/, Ze = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"), et = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                    t.getComputedStyle(e)
            }, tt = function (e, t, n, i) {
                var o, r, a = {};
                for (r in t)
                    a[r] = e.style[r],
                        e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t)
                    e.style[r] = a[r];
                return o
            }, nt = Z.documentElement;
            !function () {
                function e() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        s.innerHTML = "",
                        nt.appendChild(a);
                    var e = n.getComputedStyle(s);
                    t = "1%" !== e.top,
                        r = "2px" === e.marginLeft,
                        i = "4px" === e.width,
                        s.style.marginRight = "50%",
                        o = "4px" === e.marginRight,
                        nt.removeChild(a)
                }
                var t, i, o, r, a = Z.createElement("div"), s = Z.createElement("div");
                s.style && (s.style.backgroundClip = "content-box",
                    s.cloneNode(!0).style.backgroundClip = "",
                    se.clearCloneStyle = "content-box" === s.style.backgroundClip,
                    a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                    a.appendChild(s),
                    ce.extend(se, {
                        pixelPosition: function () {
                            return e(),
                                t
                        },
                        boxSizingReliable: function () {
                            return null == i && e(),
                                i
                        },
                        pixelMarginRight: function () {
                            return null == i && e(),
                                o
                        },
                        reliableMarginLeft: function () {
                            return null == i && e(),
                                r
                        },
                        reliableMarginRight: function () {
                            var e, t = s.appendChild(Z.createElement("div"));
                            return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                                t.style.marginRight = t.style.width = "0",
                                s.style.width = "1px",
                                nt.appendChild(a),
                                e = !parseFloat(n.getComputedStyle(t).marginRight),
                                nt.removeChild(a),
                                s.removeChild(t),
                                e
                        }
                    }))
            }();
            var it = /^(none|table(?!-c[ea]).+)/
                , ot = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                , rt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                }
                , at = ["Webkit", "O", "Moz", "ms"]
                , st = Z.createElement("div").style;
            ce.extend({
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
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, a, s = ce.camelCase(t), l = e.style;
                        return t = ce.cssProps[s] || (ce.cssProps[s] = $(s) || s),
                            a = ce.cssHooks[t] || ce.cssHooks[s],
                            void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t] : (r = typeof n,
                                "string" === r && (o = Oe.exec(n)) && o[1] && (n = p(e, t, o),
                                    r = "number"),
                                null != n && n === n && ("number" === r && (n += o && o[3] || (ce.cssNumber[s] ? "" : "px")),
                                    se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                    a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)),
                                void 0)
                    }
                },
                css: function (e, t, n, i) {
                    var o, r, a, s = ce.camelCase(t);
                    return t = ce.cssProps[s] || (ce.cssProps[s] = $(s) || s),
                        a = ce.cssHooks[t] || ce.cssHooks[s],
                        a && "get" in a && (o = a.get(e, !0, n)),
                        void 0 === o && (o = D(e, t, i)),
                        "normal" === o && t in rt && (o = rt[t]),
                        "" === n || n ? (r = parseFloat(o),
                            n === !0 || isFinite(r) ? r || 0 : o) : o
                }
            }),
                ce.each(["height", "width"], function (e, t) {
                    ce.cssHooks[t] = {
                        get: function (e, n, i) {
                            return n ? it.test(ce.css(e, "display")) && 0 === e.offsetWidth ? tt(e, ot, function () {
                                return B(e, t, i)
                            }) : B(e, t, i) : void 0
                        },
                        set: function (e, n, i) {
                            var o, r = i && et(e), a = i && O(e, t, i, "border-box" === ce.css(e, "boxSizing", !1, r), r);
                            return a && (o = Oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                                n = ce.css(e, t)),
                                j(e, n, a)
                        }
                    }
                }),
                ce.cssHooks.marginLeft = L(se.reliableMarginLeft, function (e, t) {
                    return t ? (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                        marginLeft: 0
                    }, function () {
                        return e.getBoundingClientRect().left
                    })) + "px" : void 0
                }),
                ce.cssHooks.marginRight = L(se.reliableMarginRight, function (e, t) {
                    return t ? tt(e, {
                        display: "inline-block"
                    }, D, [e, "marginRight"]) : void 0
                }),
                ce.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (e, t) {
                    ce.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                                o[e + Be[i] + t] = r[i] || r[i - 2] || r[0];
                            return o
                        }
                    },
                        Ke.test(e) || (ce.cssHooks[e + t].set = j)
                }),
                ce.fn.extend({
                    css: function (e, t) {
                        return Ae(this, function (e, t, n) {
                            var i, o, r = {}, a = 0;
                            if (ce.isArray(t)) {
                                for (i = et(e),
                                    o = t.length; o > a; a++)
                                    r[t[a]] = ce.css(e, t[a], !1, i);
                                return r
                            }
                            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
                        }, e, t, arguments.length > 1)
                    },
                    show: function () {
                        return R(this, !0)
                    },
                    hide: function () {
                        return R(this)
                    },
                    toggle: function (e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                            Re(this) ? ce(this).show() : ce(this).hide()
                        })
                    }
                }),
                ce.Tween = q,
                q.prototype = {
                    constructor: q,
                    init: function (e, t, n, i, o, r) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = o || ce.easing._default,
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = i,
                            this.unit = r || (ce.cssNumber[n] ? "" : "px")
                    },
                    cur: function () {
                        var e = q.propHooks[this.prop];
                        return e && e.get ? e.get(this) : q.propHooks._default.get(this)
                    },
                    run: function (e) {
                        var t, n = q.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                            this.now = (this.end - this.start) * t + this.start,
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : q.propHooks._default.set(this),
                            this
                    }
                },
                q.prototype.init.prototype = q.prototype,
                q.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, ""),
                                t && "auto" !== t ? t : 0)
                        },
                        set: function (e) {
                            ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ce.cssProps[e.prop]] && !ce.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                q.propHooks.scrollTop = q.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                ce.easing = {
                    linear: function (e) {
                        return e
                    },
                    swing: function (e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                ce.fx = q.prototype.init,
                ce.fx.step = {};
            var lt, ct, ut = /^(?:toggle|show|hide)$/, dt = /queueHooks$/;
            ce.Animation = ce.extend(W, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return p(n.elem, e, Oe.exec(t), n),
                            n
                    }
                    ]
                },
                tweener: function (e, t) {
                    ce.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.match(Ee);
                    for (var n, i = 0, o = e.length; o > i; i++)
                        n = e[i],
                            W.tweeners[n] = W.tweeners[n] || [],
                            W.tweeners[n].unshift(t)
                },
                prefilters: [_],
                prefilter: function (e, t) {
                    t ? W.prefilters.unshift(e) : W.prefilters.push(e)
                }
            }),
                ce.speed = function (e, t, n) {
                    var i = e && "object" == typeof e ? ce.extend({}, e) : {
                        complete: n || !n && t || ce.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !ce.isFunction(t) && t
                    };
                    return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default,
                        null != i.queue && i.queue !== !0 || (i.queue = "fx"),
                        i.old = i.complete,
                        i.complete = function () {
                            ce.isFunction(i.old) && i.old.call(this),
                                i.queue && ce.dequeue(this, i.queue)
                        }
                        ,
                        i
                }
                ,
                ce.fn.extend({
                    fadeTo: function (e, t, n, i) {
                        return this.filter(Re).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function (e, t, n, i) {
                        var o = ce.isEmptyObject(e)
                            , r = ce.speed(t, n, i)
                            , a = function () {
                                var t = W(this, ce.extend({}, e), r);
                                (o || He.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a,
                            o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                    },
                    stop: function (e, t, n) {
                        var i = function (e) {
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
                                    , r = ce.timers
                                    , a = He.get(this);
                                if (o)
                                    a[o] && a[o].stop && i(a[o]);
                                else
                                    for (o in a)
                                        a[o] && a[o].stop && dt.test(o) && i(a[o]);
                                for (o = r.length; o--;)
                                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                                        t = !1,
                                        r.splice(o, 1));
                                !t && n || ce.dequeue(this, e)
                            })
                    },
                    finish: function (e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function () {
                                var t, n = He.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = ce.timers, a = i ? i.length : 0;
                                for (n.finish = !0,
                                    ce.queue(this, e, []),
                                    o && o.stop && o.stop.call(this, !0),
                                    t = r.length; t--;)
                                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                                        r.splice(t, 1));
                                for (t = 0; a > t; t++)
                                    i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                ce.each(["toggle", "show", "hide"], function (e, t) {
                    var n = ce.fn[t];
                    ce.fn[t] = function (e, i, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, o)
                    }
                }),
                ce.each({
                    slideDown: P("show"),
                    slideUp: P("hide"),
                    slideToggle: P("toggle"),
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
                    ce.fn[e] = function (e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                }),
                ce.timers = [],
                ce.fx.tick = function () {
                    var e, t = 0, n = ce.timers;
                    for (lt = ce.now(); t < n.length; t++)
                        e = n[t],
                            e() || n[t] !== e || n.splice(t--, 1);
                    n.length || ce.fx.stop(),
                        lt = void 0
                }
                ,
                ce.fx.timer = function (e) {
                    ce.timers.push(e),
                        e() ? ce.fx.start() : ce.timers.pop()
                }
                ,
                ce.fx.interval = 13,
                ce.fx.start = function () {
                    ct || (ct = n.setInterval(ce.fx.tick, ce.fx.interval))
                }
                ,
                ce.fx.stop = function () {
                    n.clearInterval(ct),
                        ct = null
                }
                ,
                ce.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                ce.fn.delay = function (e, t) {
                    return e = ce.fx ? ce.fx.speeds[e] || e : e,
                        t = t || "fx",
                        this.queue(t, function (t, i) {
                            var o = n.setTimeout(t, e);
                            i.stop = function () {
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
                        se.checkOn = "" !== e.value,
                        se.optSelected = n.selected,
                        t.disabled = !0,
                        se.optDisabled = !n.disabled,
                        e = Z.createElement("input"),
                        e.value = "t",
                        e.type = "radio",
                        se.radioValue = "t" === e.value
                }();
            var ht, pt = ce.expr.attrHandle;
            ce.fn.extend({
                attr: function (e, t) {
                    return Ae(this, ce.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        ce.removeAttr(this, e)
                    })
                }
            }),
                ce.extend({
                    attr: function (e, t, n) {
                        var i, o, r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === r && ce.isXMLDoc(e) || (t = t.toLowerCase(),
                                o = ce.attrHooks[t] || (ce.expr.match.bool.test(t) ? ht : void 0)),
                                void 0 !== n ? null === n ? void ce.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                                    n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = ce.find.attr(e, t),
                                        null == i ? void 0 : i))
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!se.radioValue && "radio" === t && ce.nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                        n && (e.value = n),
                                        t
                                }
                            }
                        }
                    },
                    removeAttr: function (e, t) {
                        var n, i, o = 0, r = t && t.match(Ee);
                        if (r && 1 === e.nodeType)
                            for (; n = r[o++];)
                                i = ce.propFix[n] || n,
                                    ce.expr.match.bool.test(n) && (e[i] = !1),
                                    e.removeAttribute(n)
                    }
                }),
                ht = {
                    set: function (e, t, n) {
                        return t === !1 ? ce.removeAttr(e, n) : e.setAttribute(n, n),
                            n
                    }
                },
                ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = pt[t] || ce.find.attr;
                    pt[t] = function (e, t, i) {
                        var o, r;
                        return i || (r = pt[t],
                            pt[t] = o,
                            o = null != n(e, t, i) ? t.toLowerCase() : null,
                            pt[t] = r),
                            o
                    }
                });
            var ft = /^(?:input|select|textarea|button)$/i
                , gt = /^(?:a|area)$/i;
            ce.fn.extend({
                prop: function (e, t) {
                    return Ae(this, ce.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[ce.propFix[e] || e]
                    })
                }
            }),
                ce.extend({
                    prop: function (e, t, n) {
                        var i, o, r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return 1 === r && ce.isXMLDoc(e) || (t = ce.propFix[t] || t,
                                o = ce.propHooks[t]),
                                void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = ce.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : ft.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    }
                }),
                se.optSelected || (ce.propHooks.selected = {
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
                ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    ce.propFix[this.toLowerCase()] = this
                });
            var mt = /[\t\r\n\f]/g;
            ce.fn.extend({
                addClass: function (e) {
                    var t, n, i, o, r, a, s, l = 0;
                    if (ce.isFunction(e))
                        return this.each(function (t) {
                            ce(this).addClass(e.call(this, t, V(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(Ee) || []; n = this[l++];)
                            if (o = V(n),
                                i = 1 === n.nodeType && (" " + o + " ").replace(mt, " ")) {
                                for (a = 0; r = t[a++];)
                                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                s = ce.trim(i),
                                    o !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, i, o, r, a, s, l = 0;
                    if (ce.isFunction(e))
                        return this.each(function (t) {
                            ce(this).removeClass(e.call(this, t, V(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Ee) || []; n = this[l++];)
                            if (o = V(n),
                                i = 1 === n.nodeType && (" " + o + " ").replace(mt, " ")) {
                                for (a = 0; r = t[a++];)
                                    for (; i.indexOf(" " + r + " ") > -1;)
                                        i = i.replace(" " + r + " ", " ");
                                s = ce.trim(i),
                                    o !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ce.isFunction(e) ? this.each(function (n) {
                        ce(this).toggleClass(e.call(this, n, V(this), t), t)
                    }) : this.each(function () {
                        var t, i, o, r;
                        if ("string" === n)
                            for (i = 0,
                                o = ce(this),
                                r = e.match(Ee) || []; t = r[i++];)
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = V(this),
                                t && He.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : He.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + V(n) + " ").replace(mt, " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var vt = /\r/g
                , yt = /[\x20\t\r\n\f]+/g;
            ce.fn.extend({
                val: function (e) {
                    var t, n, i, o = this[0];
                    {
                        if (arguments.length)
                            return i = ce.isFunction(e),
                                this.each(function (n) {
                                    var o;
                                    1 === this.nodeType && (o = i ? e.call(this, n, ce(this).val()) : e,
                                        null == o ? o = "" : "number" == typeof o ? o += "" : ce.isArray(o) && (o = ce.map(o, function (e) {
                                            return null == e ? "" : e + ""
                                        })),
                                        t = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()],
                                        t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                                });
                        if (o)
                            return t = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()],
                                t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
                                    "string" == typeof n ? n.replace(vt, "") : null == n ? "" : n)
                    }
                }
            }),
                ce.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = ce.find.attr(e, "value");
                                return null != t ? t : ce.trim(ce.text(e)).replace(yt, " ")
                            }
                        },
                        select: {
                            get: function (e) {
                                for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                                    if (n = i[l],
                                        (n.selected || l === o) && (se.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ce.nodeName(n.parentNode, "optgroup"))) {
                                        if (t = ce(n).val(),
                                            r)
                                            return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function (e, t) {
                                for (var n, i, o = e.options, r = ce.makeArray(t), a = o.length; a--;)
                                    i = o[a],
                                        (i.selected = ce.inArray(ce.valHooks.option.get(i), r) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                    r
                            }
                        }
                    }
                }),
                ce.each(["radio", "checkbox"], function () {
                    ce.valHooks[this] = {
                        set: function (e, t) {
                            return ce.isArray(t) ? e.checked = ce.inArray(ce(e).val(), t) > -1 : void 0
                        }
                    },
                        se.checkOn || (ce.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        }
                        )
                });
            var bt = /^(?:focusinfocus|focusoutblur)$/;
            ce.extend(ce.event, {
                trigger: function (e, t, i, o) {
                    var r, a, s, l, c, u, d, h = [i || Z], p = ae.call(e, "type") ? e.type : e, f = ae.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = s = i = i || Z,
                        3 !== i.nodeType && 8 !== i.nodeType && !bt.test(p + ce.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."),
                            p = f.shift(),
                            f.sort()),
                            c = p.indexOf(":") < 0 && "on" + p,
                            e = e[ce.expando] ? e : new ce.Event(p, "object" == typeof e && e),
                            e.isTrigger = o ? 2 : 3,
                            e.namespace = f.join("."),
                            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            e.result = void 0,
                            e.target || (e.target = i),
                            t = null == t ? [e] : ce.makeArray(t, [e]),
                            d = ce.event.special[p] || {},
                            o || !d.trigger || d.trigger.apply(i, t) !== !1)) {
                        if (!o && !d.noBubble && !ce.isWindow(i)) {
                            for (l = d.delegateType || p,
                                bt.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                                h.push(a),
                                    s = a;
                            s === (i.ownerDocument || Z) && h.push(s.defaultView || s.parentWindow || n)
                        }
                        for (r = 0; (a = h[r++]) && !e.isPropagationStopped();)
                            e.type = r > 1 ? l : d.bindType || p,
                                u = (He.get(a, "events") || {})[e.type] && He.get(a, "handle"),
                                u && u.apply(a, t),
                                u = c && a[c],
                                u && u.apply && Ne(a) && (e.result = u.apply(a, t),
                                    e.result === !1 && e.preventDefault());
                        return e.type = p,
                            o || e.isDefaultPrevented() || d._default && d._default.apply(h.pop(), t) !== !1 || !Ne(i) || c && ce.isFunction(i[p]) && !ce.isWindow(i) && (s = i[c],
                                s && (i[c] = null),
                                ce.event.triggered = p,
                                i[p](),
                                ce.event.triggered = void 0,
                                s && (i[c] = s)),
                            e.result
                    }
                },
                simulate: function (e, t, n) {
                    var i = ce.extend(new ce.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    ce.event.trigger(i, null, t)
                }
            }),
                ce.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            ce.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        return n ? ce.event.trigger(e, t, n, !0) : void 0
                    }
                }),
                ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                    ce.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }),
                ce.fn.extend({
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                se.focusin = "onfocusin" in n,
                se.focusin || ce.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function (e, t) {
                    var n = function (e) {
                        ce.event.simulate(t, e.target, ce.event.fix(e))
                    };
                    ce.event.special[t] = {
                        setup: function () {
                            var i = this.ownerDocument || this
                                , o = He.access(i, t);
                            o || i.addEventListener(e, n, !0),
                                He.access(i, t, (o || 0) + 1)
                        },
                        teardown: function () {
                            var i = this.ownerDocument || this
                                , o = He.access(i, t) - 1;
                            o ? He.access(i, t, o) : (i.removeEventListener(e, n, !0),
                                He.remove(i, t))
                        }
                    }
                });
            var xt = n.location
                , wt = ce.now()
                , kt = /\?/;
            ce.parseJSON = function (e) {
                return JSON.parse(e + "")
            }
                ,
                ce.parseXML = function (e) {
                    var t;
                    if (!e || "string" != typeof e)
                        return null;
                    try {
                        t = (new n.DOMParser).parseFromString(e, "text/xml")
                    } catch (i) {
                        t = void 0
                    }
                    return t && !t.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + e),
                        t
                }
                ;
            var Tt = /#.*$/
                , Ct = /([?&])_=[^&]*/
                , Et = /^(.*?):[ \t]*([^\r\n]*)$/gm
                , St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                , At = /^(?:GET|HEAD)$/
                , Nt = /^\/\//
                , Ht = {}
                , Dt = {}
                , Lt = "*/".concat("*")
                , $t = Z.createElement("a");
            $t.href = xt.href,
                ce.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: xt.href,
                        type: "GET",
                        isLocal: St.test(xt.protocol),
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
                            "text json": ce.parseJSON,
                            "text xml": ce.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function (e, t) {
                        return t ? G(G(e, ce.ajaxSettings), t) : G(ce.ajaxSettings, e)
                    },
                    ajaxPrefilter: z(Ht),
                    ajaxTransport: z(Dt),
                    ajax: function (e, t) {
                        function i(e, t, i, s) {
                            var c, d, y, b, w, T = t;
                            2 !== x && (x = 2,
                                l && n.clearTimeout(l),
                                o = void 0,
                                a = s || "",
                                k.readyState = e > 0 ? 4 : 0,
                                c = e >= 200 && 300 > e || 304 === e,
                                i && (b = X(h, k, i)),
                                b = Y(h, b, k, c),
                                c ? (h.ifModified && (w = k.getResponseHeader("Last-Modified"),
                                    w && (ce.lastModified[r] = w),
                                    w = k.getResponseHeader("etag"),
                                    w && (ce.etag[r] = w)),
                                    204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                                        d = b.data,
                                        y = b.error,
                                        c = !y)) : (y = T,
                                            !e && T || (T = "error",
                                                0 > e && (e = 0))),
                                k.status = e,
                                k.statusText = (t || T) + "",
                                c ? g.resolveWith(p, [d, T, k]) : g.rejectWith(p, [k, T, y]),
                                k.statusCode(v),
                                v = void 0,
                                u && f.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? d : y]),
                                m.fireWith(p, [k, T]),
                                u && (f.trigger("ajaxComplete", [k, h]),
                                    --ce.active || ce.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var o, r, a, s, l, c, u, d, h = ce.ajaxSetup({}, t), p = h.context || h, f = h.context && (p.nodeType || p.jquery) ? ce(p) : ce.event, g = ce.Deferred(), m = ce.Callbacks("once memory"), v = h.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", k = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === x) {
                                    if (!s)
                                        for (s = {}; t = Et.exec(a);)
                                            s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return 2 === x ? a : null
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return x || (e = b[n] = b[n] || e,
                                    y[e] = t),
                                    this
                            },
                            overrideMimeType: function (e) {
                                return x || (h.mimeType = e),
                                    this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > x)
                                        for (t in e)
                                            v[t] = [v[t], e[t]];
                                    else
                                        k.always(e[k.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || w;
                                return o && o.abort(t),
                                    i(0, t),
                                    this
                            }
                        };
                        if (g.promise(k).complete = m.add,
                            k.success = k.done,
                            k.error = k.fail,
                            h.url = ((e || h.url || xt.href) + "").replace(Tt, "").replace(Nt, xt.protocol + "//"),
                            h.type = t.method || t.type || h.method || h.type,
                            h.dataTypes = ce.trim(h.dataType || "*").toLowerCase().match(Ee) || [""],
                            null == h.crossDomain) {
                            c = Z.createElement("a");
                            try {
                                c.href = h.url,
                                    c.href = c.href,
                                    h.crossDomain = $t.protocol + "//" + $t.host != c.protocol + "//" + c.host
                            } catch (T) {
                                h.crossDomain = !0
                            }
                        }
                        if (h.data && h.processData && "string" != typeof h.data && (h.data = ce.param(h.data, h.traditional)),
                            U(Ht, h, t, k),
                            2 === x)
                            return k;
                        u = ce.event && h.global,
                            u && 0 === ce.active++ && ce.event.trigger("ajaxStart"),
                            h.type = h.type.toUpperCase(),
                            h.hasContent = !At.test(h.type),
                            r = h.url,
                            h.hasContent || (h.data && (r = h.url += (kt.test(r) ? "&" : "?") + h.data,
                                delete h.data),
                                h.cache === !1 && (h.url = Ct.test(r) ? r.replace(Ct, "$1_=" + wt++) : r + (kt.test(r) ? "&" : "?") + "_=" + wt++)),
                            h.ifModified && (ce.lastModified[r] && k.setRequestHeader("If-Modified-Since", ce.lastModified[r]),
                                ce.etag[r] && k.setRequestHeader("If-None-Match", ce.etag[r])),
                            (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && k.setRequestHeader("Content-Type", h.contentType),
                            k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : h.accepts["*"]);
                        for (d in h.headers)
                            k.setRequestHeader(d, h.headers[d]);
                        if (h.beforeSend && (h.beforeSend.call(p, k, h) === !1 || 2 === x))
                            return k.abort();
                        w = "abort";
                        for (d in {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            k[d](h[d]);
                        if (o = U(Dt, h, t, k)) {
                            if (k.readyState = 1,
                                u && f.trigger("ajaxSend", [k, h]),
                                2 === x)
                                return k;
                            h.async && h.timeout > 0 && (l = n.setTimeout(function () {
                                k.abort("timeout")
                            }, h.timeout));
                            try {
                                x = 1,
                                    o.send(y, i)
                            } catch (T) {
                                if (!(2 > x))
                                    throw T;
                                i(-1, T)
                            }
                        } else
                            i(-1, "No Transport");
                        return k
                    },
                    getJSON: function (e, t, n) {
                        return ce.get(e, t, n, "json")
                    },
                    getScript: function (e, t) {
                        return ce.get(e, void 0, t, "script")
                    }
                }),
                ce.each(["get", "post"], function (e, t) {
                    ce[t] = function (e, n, i, o) {
                        return ce.isFunction(n) && (o = o || i,
                            i = n,
                            n = void 0),
                            ce.ajax(ce.extend({
                                url: e,
                                type: t,
                                dataType: o,
                                data: n,
                                success: i
                            }, ce.isPlainObject(e) && e))
                    }
                }),
                ce._evalUrl = function (e) {
                    return ce.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }
                ,
                ce.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return ce.isFunction(e) ? this.each(function (t) {
                            ce(this).wrapAll(e.call(this, t))
                        }) : (this[0] && (t = ce(e, this[0].ownerDocument).eq(0).clone(!0),
                            this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function () {
                                for (var e = this; e.firstElementChild;)
                                    e = e.firstElementChild;
                                return e
                            }).append(this)),
                            this)
                    },
                    wrapInner: function (e) {
                        return ce.isFunction(e) ? this.each(function (t) {
                            ce(this).wrapInner(e.call(this, t))
                        }) : this.each(function () {
                            var t = ce(this)
                                , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function (e) {
                        var t = ce.isFunction(e);
                        return this.each(function (n) {
                            ce(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function () {
                        return this.parent().each(function () {
                            ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }),
                ce.expr.filters.hidden = function (e) {
                    return !ce.expr.filters.visible(e)
                }
                ,
                ce.expr.filters.visible = function (e) {
                    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
                }
                ;
            var jt = /%20/g
                , Ot = /\[\]$/
                , Bt = /\r?\n/g
                , Rt = /^(?:submit|button|image|reset|file)$/i
                , qt = /^(?:input|select|textarea|keygen)/i;
            ce.param = function (e, t) {
                var n, i = [], o = function (e, t) {
                    t = ce.isFunction(t) ? t() : null == t ? "" : t,
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = ce.ajaxSettings && ce.ajaxSettings.traditional),
                    ce.isArray(e) || e.jquery && !ce.isPlainObject(e))
                    ce.each(e, function () {
                        o(this.name, this.value)
                    });
                else
                    for (n in e)
                        J(n, e[n], t, o);
                return i.join("&").replace(jt, "+")
            }
                ,
                ce.fn.extend({
                    serialize: function () {
                        return ce.param(this.serializeArray())
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = ce.prop(this, "elements");
                            return e ? ce.makeArray(e) : this
                        }).filter(function () {
                            var e = this.type;
                            return this.name && !ce(this).is(":disabled") && qt.test(this.nodeName) && !Rt.test(e) && (this.checked || !qe.test(e))
                        }).map(function (e, t) {
                            var n = ce(this).val();
                            return null == n ? null : ce.isArray(n) ? ce.map(n, function (e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Bt, "\r\n")
                                }
                            }) : {
                                    name: t.name,
                                    value: n.replace(Bt, "\r\n")
                                }
                        }).get()
                    }
                }),
                ce.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) { }
                }
                ;
            var Mt = {
                0: 200,
                1223: 204
            }
                , Pt = ce.ajaxSettings.xhr();
            se.cors = !!Pt && "withCredentials" in Pt,
                se.ajax = Pt = !!Pt,
                ce.ajaxTransport(function (e) {
                    var t, i;
                    return se.cors || Pt && !e.crossDomain ? {
                        send: function (o, r) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                for (a in e.xhrFields)
                                    s[a] = e.xhrFields[a];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                                e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                            for (a in o)
                                s.setRequestHeader(a, o[a]);
                            t = function (e) {
                                return function () {
                                    t && (t = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                                        "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Mt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                                text: s.responseText
                                            }, s.getAllResponseHeaders()))
                                }
                            }
                                ,
                                s.onload = t(),
                                i = s.onerror = t("error"),
                                void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                                    4 === s.readyState && n.setTimeout(function () {
                                        t && i()
                                    })
                                }
                                ,
                                t = t("abort");
                            try {
                                s.send(e.hasContent && e.data || null)
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
                ce.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function (e) {
                            return ce.globalEval(e),
                                e
                        }
                    }
                }),
                ce.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1),
                        e.crossDomain && (e.type = "GET")
                }),
                ce.ajaxTransport("script", function (e) {
                    if (e.crossDomain) {
                        var t, n;
                        return {
                            send: function (i, o) {
                                t = ce("<script>").prop({
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
            var Ft = []
                , _t = /(=)\?(?=&|$)|\?\?/;
            ce.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Ft.pop() || ce.expando + "_" + wt++;
                    return this[e] = !0,
                        e
                }
            }),
                ce.ajaxPrefilter("json jsonp", function (e, t, i) {
                    var o, r, a, s = e.jsonp !== !1 && (_t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(e.data) && "data");
                    return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ce.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        s ? e[s] = e[s].replace(_t, "$1" + o) : e.jsonp !== !1 && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                        e.converters["script json"] = function () {
                            return a || ce.error(o + " was not called"),
                                a[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        r = n[o],
                        n[o] = function () {
                            a = arguments
                        }
                        ,
                        i.always(function () {
                            void 0 === r ? ce(n).removeProp(o) : n[o] = r,
                                e[o] && (e.jsonpCallback = t.jsonpCallback,
                                    Ft.push(o)),
                                a && ce.isFunction(r) && r(a[0]),
                                a = r = void 0
                        }),
                        "script") : void 0
                }),
                ce.parseHTML = function (e, t, n) {
                    if (!e || "string" != typeof e)
                        return null;
                    "boolean" == typeof t && (n = t,
                        t = !1),
                        t = t || Z;
                    var i = ye.exec(e)
                        , o = !n && [];
                    return i ? [t.createElement(i[1])] : (i = m([e], t, o),
                        o && o.length && ce(o).remove(),
                        ce.merge([], i.childNodes))
                }
                ;
            var It = ce.fn.load;
            ce.fn.load = function (e, t, n) {
                if ("string" != typeof e && It)
                    return It.apply(this, arguments);
                var i, o, r, a = this, s = e.indexOf(" ");
                return s > -1 && (i = ce.trim(e.slice(s)),
                    e = e.slice(0, s)),
                    ce.isFunction(t) ? (n = t,
                        t = void 0) : t && "object" == typeof t && (o = "POST"),
                    a.length > 0 && ce.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done(function (e) {
                        r = arguments,
                            a.html(i ? ce("<div>").append(ce.parseHTML(e)).find(i) : e)
                    }).always(n && function (e, t) {
                        a.each(function () {
                            n.apply(this, r || [e.responseText, t, e])
                        })
                    }
                    ),
                    this
            }
                ,
                ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    ce.fn[t] = function (e) {
                        return this.on(t, e)
                    }
                }),
                ce.expr.filters.animated = function (e) {
                    return ce.grep(ce.timers, function (t) {
                        return e === t.elem
                    }).length
                }
                ,
                ce.offset = {
                    setOffset: function (e, t, n) {
                        var i, o, r, a, s, l, c, u = ce.css(e, "position"), d = ce(e), h = {};
                        "static" === u && (e.style.position = "relative"),
                            s = d.offset(),
                            r = ce.css(e, "top"),
                            l = ce.css(e, "left"),
                            c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1,
                            c ? (i = d.position(),
                                a = i.top,
                                o = i.left) : (a = parseFloat(r) || 0,
                                    o = parseFloat(l) || 0),
                            ce.isFunction(t) && (t = t.call(e, n, ce.extend({}, s))),
                            null != t.top && (h.top = t.top - s.top + a),
                            null != t.left && (h.left = t.left - s.left + o),
                            "using" in t ? t.using.call(e, h) : d.css(h)
                    }
                },
                ce.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function (t) {
                                ce.offset.setOffset(this, e, t)
                            });
                        var t, n, i = this[0], o = {
                            top: 0,
                            left: 0
                        }, r = i && i.ownerDocument;
                        if (r)
                            return t = r.documentElement,
                                ce.contains(t, i) ? (o = i.getBoundingClientRect(),
                                    n = Q(r),
                                {
                                    top: o.top + n.pageYOffset - t.clientTop,
                                    left: o.left + n.pageXOffset - t.clientLeft
                                }) : o
                    },
                    position: function () {
                        if (this[0]) {
                            var e, t, n = this[0], i = {
                                top: 0,
                                left: 0
                            };
                            return "fixed" === ce.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                                t = this.offset(),
                                ce.nodeName(e[0], "html") || (i = e.offset()),
                                i.top += ce.css(e[0], "borderTopWidth", !0),
                                i.left += ce.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - i.top - ce.css(n, "marginTop", !0),
                                left: t.left - i.left - ce.css(n, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === ce.css(e, "position");)
                                e = e.offsetParent;
                            return e || nt
                        })
                    }
                }),
                ce.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function (e, t) {
                    var n = "pageYOffset" === t;
                    ce.fn[e] = function (i) {
                        return Ae(this, function (e, i, o) {
                            var r = Q(e);
                            return void 0 === o ? r ? r[t] : e[i] : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
                        }, e, i, arguments.length)
                    }
                }),
                ce.each(["top", "left"], function (e, t) {
                    ce.cssHooks[t] = L(se.pixelPosition, function (e, n) {
                        return n ? (n = D(e, t),
                            Ze.test(n) ? ce(e).position()[t] + "px" : n) : void 0
                    })
                }),
                ce.each({
                    Height: "height",
                    Width: "width"
                }, function (e, t) {
                    ce.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function (n, i) {
                        ce.fn[i] = function (i, o) {
                            var r = arguments.length && (n || "boolean" != typeof i)
                                , a = n || (i === !0 || o === !0 ? "margin" : "border");
                            return Ae(this, function (t, n, i) {
                                var o;
                                return ce.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ce.css(t, n, a) : ce.style(t, n, i, a)
                            }, t, r ? i : void 0, r, null)
                        }
                    })
                }),
                ce.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function (e, t, n, i) {
                        return this.on(t, e, n, i)
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    size: function () {
                        return this.length
                    }
                }),
                ce.fn.andSelf = ce.fn.addBack,
                i = [],
                o = function () {
                    return ce
                }
                    .apply(t, i),
                !(void 0 !== o && (e.exports = o));
            var Wt = n.jQuery
                , Vt = n.$;
            return ce.noConflict = function (e) {
                return n.$ === ce && (n.$ = Vt),
                    e && n.jQuery === ce && (n.jQuery = Wt),
                    ce
            }
                ,
                r || (n.jQuery = n.$ = ce),
                ce
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
        var i = n(6);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(11)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(7)(),
            t.push([e.id, ".applet{width:900px;display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-align:start;align-items:flex-start}button:active{color:#000;background:#ddd}.simulation-section{width:700px}.simulation-section,.workstations-section{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap}.workstations-section{width:200px}.buttons-section{width:185px;font-size:90%}.buttons-section button{margin:2px 0}.simulation-controls,.workstation-controls{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 10px 20px}.graph-section{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:start;align-items:flex-start}.graph-container{position:relative;border:1px solid grey}canvas{vertical-align:top}.graph-header{padding:4px;font-size:80%;font-weight:700;text-align:center;background:#cfc;border-bottom:1px solid grey}.level{position:absolute;bottom:100px;width:100%;border-bottom:1px solid #000}.slider-label{padding:0 0 10px 5px}.bandwidth,.delay{-ms-flex:100%;flex:100%;font-size:80%;text-align:center;margin-top:-15px}.bandwidth-slider{height:200px;padding-bottom:6px}.environment-section{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;margin:50px 0}.router{width:145px;height:50px;background:url(" + n(8) + ") 100%/contain no-repeat}.pipe{width:297px;height:40px;background:url(" + n(9) + ") 100%/contain no-repeat}.cloud{width:130px;height:50px;background:url(" + n(10) + ") 100%/contain no-repeat}.cloud:before,.pipe:before,.router:before{content:'';display:inline-block;width:65px;height:50%;border-bottom:1px solid #000}.delay-slider{width:300px;padding-left:170px}", ""])
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
                    for (var i = {}, o = 0; o < this.length; o++) {
                        var r = this[o][0];
                        "number" == typeof r && (i[r] = !0)
                    }
                    for (o = 0; o < t.length; o++) {
                        var a = t[o];
                        "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                            e.push(a))
                    }
                }
                ,
                e
        }
    }
    , function (e, t, n) {
        e.exports = n.p + "4238923feefef885e568ae911bd8d37b.png"
    }
    , function (e, t, n) {
        e.exports = n.p + "6682b4ce4a16345abd4fb221fce6689f.png"
    }
    , function (e, t, n) {
        e.exports = n.p + "71d5cc09fbe655731cc026dee2669c51.png"
    }
    , function (e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n]
                    , o = p[i.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++)
                        o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++)
                        o.parts.push(c(i.parts[r], t))
                } else {
                    for (var a = [], r = 0; r < i.parts.length; r++)
                        a.push(c(i.parts[r], t));
                    p[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function o(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i]
                    , r = o[0]
                    , a = o[1]
                    , s = o[2]
                    , l = o[3]
                    , c = {
                        css: a,
                        media: s,
                        sourceMap: l
                    };
                n[r] ? n[r].parts.push(c) : t.push(n[r] = {
                    id: r,
                    parts: [c]
                })
            }
            return t
        }
        function r(e, t) {
            var n = m()
                , i = b[b.length - 1];
            if ("top" === e.insertAt)
                i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                    b.push(t);
            else {
                if ("bottom" !== e.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function a(e) {
            e.parentNode.removeChild(e);
            var t = b.indexOf(e);
            t >= 0 && b.splice(t, 1)
        }
        function s(e) {
            var t = document.createElement("style");
            return t.type = "text/css",
                r(e, t),
                t
        }
        function l(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet",
                r(e, t),
                t
        }
        function c(e, t) {
            var n, i, o;
            if (t.singleton) {
                var r = y++;
                n = v || (v = s(t)),
                    i = u.bind(null, n, r, !1),
                    o = u.bind(null, n, r, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t),
                    i = h.bind(null, n),
                    o = function () {
                        a(n),
                            n.href && URL.revokeObjectURL(n.href)
                    }
                ) : (n = s(t),
                    i = d.bind(null, n),
                    o = function () {
                        a(n)
                    }
                    );
            return i(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        i(e = t)
                    } else
                        o()
                }
        }
        function u(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet)
                e.styleSheet.cssText = x(t, o);
            else {
                var r = document.createTextNode(o)
                    , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                    a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }
        function d(e, t) {
            var n = t.css
                , i = t.media;
            if (i && e.setAttribute("media", i),
                e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;)
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        function h(e, t) {
            var n = t.css
                , i = t.sourceMap;
            i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var o = new Blob([n], {
                type: "text/css"
            })
                , r = e.href;
            e.href = URL.createObjectURL(o),
                r && URL.revokeObjectURL(r)
        }
        var p = {}
            , f = function (e) {
                var t;
                return function () {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)),
                        t
                }
            }
            , g = f(function () {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            })
            , m = f(function () {
                return document.head || document.getElementsByTagName("head")[0]
            })
            , v = null
            , y = 0
            , b = [];
        e.exports = function (e, t) {
            t = t || {},
                "undefined" == typeof t.singleton && (t.singleton = g()),
                "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = o(e);
            return i(n, t),
                function (e) {
                    for (var r = [], a = 0; a < n.length; a++) {
                        var s = n[a]
                            , l = p[s.id];
                        l.refs--,
                            r.push(l)
                    }
                    if (e) {
                        var c = o(e);
                        i(c, t)
                    }
                    for (var a = 0; a < r.length; a++) {
                        var l = r[a];
                        if (0 === l.refs) {
                            for (var u = 0; u < l.parts.length; u++)
                                l.parts[u]();
                            delete p[l.id]
                        }
                    }
                }
        }
            ;
        var x = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n,
                    e.filter(Boolean).join("\n")
            }
        }()
    }
    , function (e, t, n) {
        var i = n(13);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(11)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(7)(),
            t.push([e.id, "body{font-family:Arial,sans-serif}.header,h1{color:#101027;font-size:200%;font-weight:400;margin:.67em 0}.focusable,canvas{border:3px solid transparent}.focusable:focus,button:focus,canvas:focus{outline:none;border:3px dotted #000}.text,p{font-size:100%;margin:1em 0}button{font-size:80%;height:25px;background:linear-gradient(#fff,#f0f0f0);border:1px solid #adadad;box-sizing:border-box}button:disabled{background:#d3d3d3;border:1px solid #bcbcbc}button::-moz-focus-inner{border:0}.navigation{width:0;height:0;padding:0;margin:0;overflow:hidden}", ""])
    }
    , function (e, t) {
        var n = {
            num: "%n%",
            ind: "%i%",
            rate: "%r%",
            rates: "%rs%",
            delay: "%d%",
            delay: [{
                ph: "%v%",
                values: ["increased", "decreased"]
            }, {
                ph: "%t%",
                values: ["slower", "faster"]
            }]
        };
        e.exports = {
            navigation: "With this interactive animation, you will explore how T, C, P behaves when multiple clients are sending data over the same link. The model shows the workstation connected to the router. A cloud picture represents the web, and a long horizontal cylinder represents the transmission link between the router and the web. The bandwidth is set to 5 hundred megabit by default. The T, C, P fairness graph is placed above the transmission link. When you start the animation, with this graph you can explore how the transmission rate changes. The vertical slider is placed next to the graph. By moving this slider, you can set the bandwidth from zero to 1 thousand megabits. A thin horizontal line goes through the T, C, P fairness graph dividing it in two and showing the set bandwidth. The horizontal slider is placed below the transmission line. With this slider you can set the transmission delay from no delay to high delay. The default value is thirty milliseconds. There are four control buttons next to the workstation. Three acks button and the Timeout button trigger the corresponding event. The Reno and Tahoe buttons set the recovery method. The four more buttons are placed next to the T, C, P fairness graph. Add workstation, remove workstation, start and reset buttons. You can add up to 4 workstations in total by pressing the Add workstation button. To reduce the number of client machines, press the Remove workstation button. When you press the Start button, the animation starts, and this button turns into the Pause button. If you pause the simulation, this button turns into the Resume button. To set all the parameters of the model to their defaults, press the Reset button. ",
            placeholders: n,
            units: {
                bandwidth: "MegaBit"
            },
            eventButtons: {
                ack: "Trigger 3 Ack's event for the workstation " + n.ind + ". Updates activity aside. ",
                timeout: "Trigger timeout event for the workstation " + n.ind + ". Updates activity aside. "
            },
            methodButtons: {
                reno: "Set the recovery method to Reno for the workstation " + n.ind + ". ",
                tahoe: "Set the recovery method to Tahoe for the workstation " + n.ind + ". ",
                current: "Current method is "
            },
            bandwidthSlider: "Set bandwidth",
            delaySlider: "Set transmission delay",
            userActions: {
                add: {
                    "default": "There are " + n.num + " workstations now. The new line is added to the T, C, P fairness graph."
                },
                remove: {
                    "default": "The workstation " + n.ind + " was removed. The corresponding line on the T, C, P fairness graph goes down to zero. The total amount of consumed bandwidth reduces by the transmission rate this workstation had at the moment. ",
                    single: "There is a single workstation now.",
                    notSingle: "There are " + n.num + " workstations now."
                },
                pause: {
                    single: "There a single line on the T, C, P fairness graph. The current transmission rate is " + n.rate + " megabit, and the transmission delay equals " + n.delay + " milliseconds. ",
                    notSingle: "There are " + n.num + " lines on the T, C, P fairness graph for the " + n.num + " workstations. The transmission rates are " + n.rates + " respectively. The bandwidth equals " + n.rate + " megabit, and the transmission delay equals " + n.delay + " milliseconds. "
                },
                ack: {
                    reno: "The transmission rate of the workstation " + n.ind + " rapidly decreases to half, and then is starts increasing again. ",
                    tahoe: "The transmission rate of the workstation " + n.ind + " rapidly decreases to zero, and then is starts increasing again. "
                },
                timeout: "The transmission rate of the workstation " + n.ind + " rapidly decreases to zero, and then is starts increasing again. ",
                delay: "For the delay was " + n.delay[0].ph + ", the transmission goes " + n.delay[1].ph + " now.",
                bandwidth: "The maximum bandwidth is " + n.rate + " now."
            },
            animation: {
                start: "There is as many lines on the T, C, P fairness graph as there are workstations. For every workstation the transmission begins with the speed step. Then the transmission rate starts increasing gradually. A part of the graph background is highlighted, showing the total amount of consumed bandwidth. The height of the highlighted area equals the sum of the current transmission rates. ",
                single: "In case of a single workstation, the highlighted area equals the area below the graph of the transmission rate. ",
                notSingle: "In case of " + n.num + " workstations, the highlighted area is higher than the level of the upper line on the graph, representing the workstation with the highest transmission rate. ",
                end: "When the total current transmission rate reaches the maximum bandwith, which is currently set to " + n.rate + " megabit, all of the sending clients reduce their transmissions rates, depending on the recovery method. If Reno recovery method is selected for some workstation, its transmission rate reduces two times from the level at which it was when the maximum amount of bandwidth was consumed. If the Tahoe recovery method is selected for some workstation, its transmission rate reduces to zero. Thus, the total amount of consumed bandwidth is reduced, and then each workstation starts increasing its transmission rate again. "
            }
        }
    }
    , function (e, t, n) {
        var i = n(14)
            , o = n(16)
            , r = function (e, t, n) {
                e.textContent = i.navigation,
                    this.animationNode = t,
                    this.model = n,
                    this.voice = new o
            };
        r.prototype.addWorkstation = function () {
            var e = i.userActions.add["default"].replace(i.placeholders.num, this.model.workstations.length);
            this.voice.speak(e)
        }
            ,
            r.prototype.removeWorkstation = function () {
                var e = i.userActions.remove["default"].replace(i.placeholders.ind, this.model.workstations.length + 1);
                e += this.model.workstations.length > 1 ? i.userActions.remove.notSingle.replace(i.placeholders.num, this.model.workstations.length) : i.userActions.remove.single,
                    this.voice.speak(e)
            }
            ,
            r.prototype.pause = function () {
                var e = "";
                if (this.model.workstations.length > 1) {
                    for (var t = "", n = 0; n < this.model.workstations.length; n++) {
                        var o = n === this.model.workstations.length - 1 ? "" : ", "
                            , r = this.model.workstations[n].currentBandwidth.toFixed(0);
                        t += r + " " + i.units.bandwidth + o
                    }
                    e += i.userActions.pause.notSingle,
                        e = e.replace(i.placeholders.num, this.model.workstations.length),
                        e = e.replace(i.placeholders.num, this.model.workstations.length),
                        e = e.replace(i.placeholders.rates, t),
                        e = e.replace(i.placeholders.rate, this.model.totalBandwidth),
                        e = e.replace(i.placeholders.delay, this.model.delay)
                } else
                    e += i.userActions.pause.single,
                        e = e.replace(i.placeholders.rate, this.model.totalBandwidth),
                        e = e.replace(i.placeholders.delay, this.model.delay);
                this.voice.speak(e)
            }
            ,
            r.prototype.ack = function (e) {
                var t = e.isReno ? i.userActions.ack.reno : i.userActions.ack.tahoe;
                t = t.replace(i.placeholders.ind, e.index + 1),
                    this.voice.speak(t)
            }
            ,
            r.prototype.timeout = function (e) {
                var t = i.userActions.timeout;
                t = t.replace(i.placeholders.ind, e.index + 1),
                    this.voice.speak(t)
            }
            ,
            r.prototype.delayChanged = function (e) {
                var t = i.userActions.delay
                    , n = e ? 0 : 1;
                t = t.replace(i.placeholders.delay[0].ph, i.placeholders.delay[0].values[n]),
                    t = t.replace(i.placeholders.delay[1].ph, i.placeholders.delay[1].values[n]),
                    this.voice.speak(t)
            }
            ,
            r.prototype.bandwidthChanged = function () {
                var e = i.userActions.bandwidth.replace(i.placeholders.rate, this.model.totalBandwidth);
                this.voice.speak(e)
            }
            ,
            r.prototype.animation = function () {
                var e = i.animation.start;
                e += this.model.workstations.length > 1 ? i.animation.notSingle.replace(i.placeholders.num, this.model.workstations.length) : i.animation.single,
                    e += i.animation.end.replace(i.placeholders.rate, this.model.totalBandwidth),
                    this.animationNode.textContent = e
            }
            ,
            e.exports = r
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
        var i = n(4)
            , o = i(n(18))
            , r = n(19)
            , a = n(14);
        n(20);
        var s = "checked"
            , l = function (e, t, n) {
                this.parentNode = e,
                    this.node = o.querySelector("div").cloneNode(!0),
                    this.parentNode.appendChild(this.node),
                    this.model = t,
                    this.aria = n,
                    this.renoBtn = this.node.querySelector("._reno"),
                    this.tahoeBtn = this.node.querySelector("._tahoe"),
                    this.renoBtn.addEventListener("click", this.setRecoveryMethodToReno.bind(this)),
                    this.tahoeBtn.addEventListener("click", this.setRecoveryMethodToTahoe.bind(this));
                var i = this.node.querySelector("._ack");
                i.setAttribute("aria-label", this._getAriaLabel(a.eventButtons.ack)),
                    i.addEventListener("click", function () {
                        this.model.ack(),
                            this.aria.ack(this.model)
                    }
                        .bind(this));
                var r = this.node.querySelector("._timeout");
                r.setAttribute("aria-label", this._getAriaLabel(a.eventButtons.timeout)),
                    r.addEventListener("click", function () {
                        this.model.timeout(),
                            this.aria.timeout(this.model)
                    }
                        .bind(this)),
                    this.updateMethodButtonsAltText()
            };
        l.prototype.setRecoveryMethodToReno = function () {
            this.renoBtn.classList.add(s),
                this.tahoeBtn.classList.remove(s),
                this.model.setRecoveryMethod(r.RECOVERY_METHOD.reno),
                this.updateMethodButtonsAltText()
        }
            ,
            l.prototype.setRecoveryMethodToTahoe = function () {
                this.tahoeBtn.classList.add(s),
                    this.renoBtn.classList.remove(s),
                    this.model.setRecoveryMethod(r.RECOVERY_METHOD.tahoe),
                    this.updateMethodButtonsAltText()
            }
            ,
            l.prototype.updateMethodButtonsAltText = function () {
                var e = a.methodButtons.current + this.model.recoveryMethod + ".";
                this.renoBtn.setAttribute("aria-label", this._getAriaLabel(a.methodButtons.reno) + e),
                    this.tahoeBtn.setAttribute("aria-label", this._getAriaLabel(a.methodButtons.tahoe) + e)
            }
            ,
            l.prototype.remove = function () {
                this.parentNode.removeChild(this.node)
            }
            ,
            l.prototype._getAriaLabel = function (e) {
                return e.replace(a.placeholders.ind, this.model.index + 1)
            }
            ,
            e.exports = l
    }
    , function (e, t) {
        e.exports = '<div class="workstation">\r\n  <div class="icon"></div>\r\n  <div class="buttons">\r\n    <button tabindex="0" class="_ack" aria-label="" role="button">3 Ack\'s</button>\r\n    <button tabindex="0" class="_timeout" aria-label="" role="button">Timeout</button>\r\n    <hr>\r\n    <button tabindex="0" class="_reno checked" aria-label="" role="button">Reno</button>\r\n    <button tabindex="0" class="_tahoe" aria-label="" role="button">Tahoe</button>\r\n  </div>\r\n  <div class="mask"></div>\r\n</div>'
    }
    , function (e, t) {
        var n = {
            reno: "reno",
            tahoe: "tahoe"
        }
            , i = function (e) {
                this.index = e,
                    this.reset()
            };
        i.prototype.reset = function () {
            this.recoveryMethod = n.reno,
                this.currentBandwidth = 1,
                this.threshold = 0,
                this.isFirstTime = !0
        }
            ,
            i.prototype.ack = function () {
                this.threshold = this.currentBandwidth / 2,
                    this.currentBandwidth = this.recoveryMethod === n.reno ? this.threshold : 1
            }
            ,
            i.prototype.timeout = function () {
                this.threshold = this.currentBandwidth / 2,
                    this.currentBandwidth = 1
            }
            ,
            i.prototype.setRecoveryMethod = function (e) {
                this.recoveryMethod = e
            }
            ,
            i.prototype.isReno = function () {
                return this.recoveryMethod === n.reno
            }
            ,
            i.prototype.increment = function () {
                this.isFirstTime || 2 * this.currentBandwidth < this.threshold ? this.currentBandwidth = 0 == this.currentBandwidth ? 1 : this.currentBandwidth *= 2 : this.currentBandwidth < this.threshold ? this.currentBandwidth += this.threshold - this.currentBandwidth : ++this.currentBandwidth
            }
            ,
            i.prototype.simulateIncrement = function () {
                return 0 == this.threshold || 2 * this.currentBandwidth < this.threshold ? 2 * this.currentBandwidth : this.currentBandwidth < this.threshold ? this.threshold - this.currentBandwidth : this.currentBandwidth + 1
            }
            ,
            i.RECOVERY_METHOD = n,
            e.exports = i
    }
    , function (e, t, n) {
        var i = n(21);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(11)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(7)(),
            t.push([e.id, ".workstation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:15px 0;border-right:1px solid #000}.workstation .buttons{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100px;font-size:95%}.workstation button{margin:2px 10px}.workstation button.checked{background:#ccf3ff}.workstation hr{margin:3px 0;border-top:1px solid #000}.icon{width:100px;height:100px;background:rgba(255,255,0,.35) url(" + n(22) + ") 50%/contain no-repeat;border-radius:2px;border:1px solid #000;box-sizing:border-box}.workstation+.workstation .icon{background-color:#c0ffff}.workstation+.workstation+.workstation .icon{background-color:rgba(125,7,8,.67)}.workstation+.workstation+.workstation+.workstation .icon{background-color:rgba(5,9,125,.67)}.mask{position:absolute;width:2px;background-color:#fff;right:-1px}.workstation:first-child .mask,:not(.workstation)+.workstation .mask{top:0;height:50%}.workstation:last-of-type .mask{bottom:0;height:50%}.workstation:nth-child(1) .mask:after{content:'';position:absolute;top:100%;height:300%;width:1px;right:0;background-color:#000}.workstation:nth-child(2) .mask{display:none}", ""])
    }
    , function (e, t, n) {
        e.exports = n.p + "4fcc7b00bf5eeaaf6ee5bd8db9520016.png"
    }
    , function (e, t, n) {
        (function (t, i) {
            function o(e) {
                return "undefined" != typeof e.step && ("undefined" == typeof e.ticks || "undefined" == typeof e.ticks.step || e.ticks.step < e.step) && ("undefined" == typeof e.ticks && (e.ticks = {}),
                    e.ticks.step = e.step),
                    e
            }
            function r(e) {
                return e.isVertical ? e.ticks.position != x.LEFT && e.ticks.position != x.RIGHT && (e.ticks.position = x.LEFT) : e.ticks.position != x.BOTTOM && e.ticks.position != x.TOP && (e.ticks.position = x.BOTTOM),
                    e
            }
            function a(e) {
                var t = e.data;
                if (t.options.enable) {
                    e.preventDefault(),
                        e.stopPropagation(),
                        v(e);
                    var n = e.clientX
                        , o = e.clientY;
                    t.setAnimationEnable(!1),
                        t.updateSize();
                    var r, a = i(e.target).hasClass("cg-slider-handle-right");
                    r = a ? t.$rightHandle : t.$leftHandle,
                        r.focus();
                    var c = parseInt(r.css("left"))
                        , u = -1 == r.css("bottom").indexOf("%") ? parseInt(r.css("bottom")) : parseFloat(r.css("bottom")) * t.options.pixelMax / 100;
                    isNaN(c) && (c = 0),
                        isNaN(u) && (u = 0),
                        t.startDragValue = t.getValue();
                    var d = {
                        $handle: r,
                        sliderInstance: t,
                        startClientX: n,
                        startClientY: o,
                        startElemX: c,
                        startElemY: u
                    };
                    i(document).on("mousemove" + b.EVENT_CLASS + " touchmove" + b.EVENT_CLASS, d, s),
                        i(document).on("mouseup" + b.EVENT_CLASS + " touchend" + b.EVENT_CLASS, d, l)
                }
            }
            function s(e) {
                e.preventDefault(),
                    e.stopPropagation(),
                    v(e);
                var t = i(e.data.$handle).hasClass("cg-slider-handle-right")
                    , n = e.data.sliderInstance
                    , o = n.options.isVertical ? e.data.startElemY - e.clientY + e.data.startClientY : e.data.startElemX + e.clientX - e.data.startClientX;
                return n.onDrag || (n.onDrag = !0),
                    t ? n.setValue(p(o, n.options), !1) : n.setValue([p(o, n.options), n.value[1]], !1),
                    JSON.stringify(n.startDragValue) != JSON.stringify(n.getValue()) && (n.changedOnDrag || (n.changedOnDrag = !0,
                        i(n).trigger(b.START_CHANGE))),
                    !1
            }
            function l(e) {
                var t = e.data.sliderInstance;
                i(document).off("mousemove" + b.EVENT_CLASS + " touchmove" + b.EVENT_CLASS),
                    i(document).off("mouseup" + b.EVENT_CLASS + " touchend" + b.EVENT_CLASS),
                    t.startDragValue && (t.changedOnDrag && i(t).trigger(b.STOP_CHANGE, [t.getValue()]),
                        t.onDrag = !1,
                        t.changedOnDrag = !1,
                        t.startDragValue = null),
                    t.setAnimationEnable(!0)
            }
            function c(e) {
                e.preventDefault(),
                    e.stopPropagation(),
                    v(e);
                var t = e.data;
                i(t).trigger(b.START_CHANGE),
                    t.updateSize();
                var n = t.options.isVertical ? p(t.options.pixelMax - e.pageY + t.$clickArea.offset().top, t.options) : p(e.pageX - t.$clickArea.offset().left, t.options);
                t.options.isRange ? n > t.value[1] ? t.setValue([t.value[0], n]) : n < t.value[0] ? t.setValue([n, t.value[1]]) : Math.abs(n - t.value[0]) > Math.abs(n - t.value[1]) ? t.setValue([t.value[0], n]) : t.setValue([n, t.value[1]]) : t.setValue(n),
                    i(t).trigger(b.STOP_CHANGE, [t.getValue()])
            }
            function u(e) {
                var t = e.data
                    , n = i(e.target).hasClass("cg-slider-handle-right");
                if (t.options.enable) {
                    var o;
                    switch (e.keyCode) {
                        case k.HOME:
                        case k.PAGE_DOWN:
                            o = n ? t.options.min : [t.options.min, t.value[1]];
                            break;
                        case k.END:
                        case k.PAGE_UP:
                            o = n ? t.options.max : [t.options.max, t.value[1]];
                            break;
                        case k.UP:
                        case k.RIGHT:
                            o = n ? t.value[1] + t.options.step : [t.value[0] + t.options.step, t.value[1]];
                            break;
                        case k.DOWN:
                        case k.LEFT:
                            o = n ? t.value[1] - t.options.step : [t.value[0] - t.options.step, t.value[1]]
                    }
                    "undefined" == typeof o || isNaN(o) && (isNaN(o[0]) || isNaN(o[1])) || (t.changedOnDrag || (t.changedOnDrag = !0,
                        i(t).trigger(b.START_CHANGE),
                        i(e.target).on("keyup" + b.EVENT_CLASS, t, d)),
                        t.setValue(o),
                        e.preventDefault())
                }
            }
            function d(e) {
                var t = e.data;
                t.changedOnDrag && (i(t).trigger(b.STOP_CHANGE, [t.getValue()]),
                    t.changedOnDrag = !1),
                    i(e.target).off("keyup" + b.EVENT_CLASS)
            }
            function h(e) {
                var t = -1
                    , n = (1 + e + "").split(".");
                return 2 == n.length && (t = n[1].length),
                    t
            }
            function p(e, t) {
                return t.min + (t.max - t.min) / (t.pixelMax - t.pixelMin) * e
            }
            function f(e, t) {
                return Math.round((e - t.min) * ((t.pixelMax - t.pixelMin) / (t.max - t.min)))
            }
            function g(e, t) {
                return 100 * (e - t.min) / (t.max - t.min)
            }
            function m(e, t) {
                e = Math.max(Math.min(t.max, e), t.min);
                var n = h(t.step);
                if (e = Math.round(e / t.step) * t.step,
                    -1 != n) {
                    var i = Math.pow(10, n);
                    e = Math.round(e * i) / i
                }
                return e
            }
            function v(e) {
                e.originalEvent.touches && e.originalEvent.touches[0] ? (e.clientX = e.originalEvent.touches[0].clientX,
                    e.clientY = e.originalEvent.touches[0].clientY,
                    e.pageX = e.originalEvent.touches[0].pageX,
                    e.pageY = e.originalEvent.touches[0].pageY) : e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] && (e.clientX = e.originalEvent.changedTouches[0].clientX,
                        e.clientY = e.originalEvent.changedTouches[0].clientY,
                        e.pageX = e.originalEvent.changedTouches[0].pageX,
                        e.pageY = e.originalEvent.changedTouches[0].pageY)
            }
            function y(e) {
                var t, n = arguments;
                if (1 == n.length && "string" == typeof n[0]) {
                    if (t = i(this[0]).data("competentum.slider"),
                        !t)
                        throw new Error("Slider is not initialized.");
                    return t.getOption(n[0])
                }
                return this.each(function () {
                    var o = i(this);
                    if (t = o.data("competentum.slider"))
                        if (1 == n.length && "object" == typeof n[0])
                            t.setOptions(n[0]);
                        else {
                            if (2 != n.length || "string" != typeof n[0])
                                throw new Error("Slider: wrong count or type of arguments.");
                            t.setOption(n[0], n[1])
                        }
                    else
                        t = new T(this, e),
                            o.data("competentum.slider", t)
                })
            }
            if (n(24),
                "undefined" == typeof t)
                throw new Error("Slider's JavaScript requires jQuery");
            var b = {
                CHANGE: "change",
                START_CHANGE: "start_change",
                STOP_CHANGE: "stop_change",
                EVENT_CLASS: ".slider_event"
            }
                , x = {
                    TOP: "top",
                    BOTTOM: "bottom",
                    LEFT: "left",
                    RIGHT: "right"
                }
                , w = {
                    min: 0,
                    max: 10,
                    step: 1,
                    enableAnimation: !0,
                    enableTooltips: !1,
                    tooltipFadeDuration: 200,
                    minAnimationDistance: 15,
                    initialValue: 0,
                    pixelMin: 0,
                    pixelMax: 100,
                    ariaLabel: "",
                    enable: !0,
                    isRange: !1,
                    isVertical: !1,
                    onChange: i.noop,
                    onStartChange: i.noop,
                    onStopChange: i.noop,
                    tabindex: 0,
                    withTicks: !1,
                    ticks: {
                        position: x.BOTTOM,
                        withLabels: !1,
                        labelFormatter: function (e) {
                            return e
                        },
                        step: 1,
                        maxTicksCount: 100
                    }
                }
                , k = {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
                , T = function (e, t) {
                    var n = this;
                    e = n.$domElement = i(e).addClass("cg-slider"),
                        o(t),
                        n.options = i.extend(!0, {}, w, t),
                        r(n.options),
                        n.snapIntervalPrecision = h(n.options.step),
                        n.options.isVertical && n.$domElement.addClass("cg-slider-vertical"),
                        n.$rootElement = i('<div class="cg-slider-controlBar">	                        <div class="cg-slider-alignmentTable">	                            <div class="cg-slider-alignmentCell">	                                <div class="cg-slider-bg">	                                    <div class="cg-slider-progress"></div>	                                </div>	                            </div>	                        </div>	                        <div class="cg-slider-handle cg-slider-handle-left" tabindex="0" role="slider" 	                        aria-label="" aria-valuetext="0" aria-valuenow="0" 	                        aria-valuemin="' + n.options.min + '" aria-valuemax="' + n.options.max + '"></div>	                        <div class="cg-slider-handle cg-slider-handle-right" tabindex="0" role="slider" 	                        aria-label="" aria-valuetext="0" aria-valuenow="0" 	                        aria-valuemin="' + n.options.min + '" aria-valuemax="' + n.options.max + '"></div>	                    </div>').appendTo(e),
                        n.setAnimationEnable(n.options.enableAnimation),
                        i(window).on("resize", function () {
                            n.updateSliderPosition()
                        }),
                        i(n).on(b.START_CHANGE, function () {
                            n.$domElement.trigger(b.START_CHANGE),
                                n.options.onStartChange()
                        }).on(b.CHANGE, function (e, t) {
                            n.$domElement.trigger(b.CHANGE, [t]),
                                n.options.onChange(t)
                        }).on(b.STOP_CHANGE, function (e, t) {
                            n.$domElement.trigger(b.STOP_CHANGE, [t]),
                                n.options.onStopChange(t)
                        }),
                        n.$leftHandle = e.find(".cg-slider-handle-left"),
                        n.$rightHandle = e.find(".cg-slider-handle-right"),
                        n.$staticElement = e.find(".cg-slider-bg"),
                        n.$progress = e.find(".cg-slider-progress"),
                        n.$clickArea = e.find(".cg-slider-alignmentTable"),
                        n.updateSize(),
                        n.enabled(n.options.enable),
                        n.drawTicks(),
                        n.$rightHandle.on("mousedown touchstart", n, a).on("keydown", n, u),
                        n.options.enableTooltips && (n.$leftHandleTooltip = i("<div></div>").addClass("cg-slider-handle-tooltip").appendTo(n.$rootElement),
                            n.$rightHandleTooltip = i("<div></div>").addClass("cg-slider-handle-tooltip").appendTo(n.$rootElement),
                            n.$leftHandle.on("focus mouseenter", function () {
                                n.$leftHandleTooltip.fadeIn(n.options.tooltipFadeDuration)
                            }).on("blur mouseleave", function () {
                                i(this).is(":focus") || n.$leftHandleTooltip.fadeOut(n.options.tooltipFadeDuration)
                            }),
                            n.$rightHandle.on("focus mouseenter", function () {
                                n.$rightHandleTooltip.fadeIn(n.options.tooltipFadeDuration)
                            }).on("blur mouseleave", function () {
                                i(this).is(":focus") || n.$rightHandleTooltip.fadeOut(n.options.tooltipFadeDuration)
                            })),
                        n.updateAriaLabels(),
                        n.options.isRange ? n.$leftHandle.on("mousedown touchstart", n, a).on("keydown", n, u) : (n.$leftHandle.hide(),
                            n.$leftHandleTooltip && n.$leftHandleTooltip.hide()),
                        n.$clickArea.on("click", n, c),
                        n.setValue(n.options.initialValue, !1, !0)
                };
            T.prototype = {
                options: {},
                value: [0, 0],
                $rightHandle: null,
                $staticElement: null,
                $domElement: null,
                onDrag: !1,
                changedOnDrag: !1,
                startDragValue: null,
                getOption: function (e) {
                    var t = this;
                    return t.options.hasOwnProperty(e) ? t.options[e] : void 0
                },
                setOption: function (e, t) {
                    var n = this;
                    if (n.options.hasOwnProperty(e))
                        switch (e) {
                            case "max":
                            case "min":
                            case "step":
                                t = parseFloat(t),
                                    isNaN(t) || (n.options[e] = t,
                                        n.setValue(n.getValue(), void 0, !0)),
                                    n.destroyTicks(),
                                    n.drawTicks();
                                break;
                            case "withTicks":
                                if ("boolean" != typeof t || n.options.withTicks == t)
                                    return;
                                n.options.withTicks = t,
                                    n.destroyTicks(),
                                    n.drawTicks();
                                break;
                            case "ticks":
                                if ("object" != typeof t)
                                    return;
                                n.options.ticks = i.extend(n.options.ticks, t),
                                    n.destroyTicks(),
                                    n.drawTicks();
                                break;
                            case "enable":
                                if ("boolean" != typeof t || n.options.enable == t)
                                    return;
                                n.enabled(t);
                                break;
                            case "ariaLabel":
                                n.options.ariaLabel = t,
                                    n.updateAriaLabels();
                                break;
                            default:
                                console && console.error && console.error('Slider error: option "' + e + "\" can't be changed or not implemented yet.")
                        }
                },
                setOptions: function (e) {
                    var t = this;
                    for (var n in e)
                        e.hasOwnProperty(n) && t.setOption(n, e[n])
                },
                getValue: function () {
                    var e = this;
                    return e.options.isRange ? [e.value[0], e.value[1]] : e.value[1]
                },
                setValue: function (e, t, n) {
                    var o = this;
                    "array" != i.type(e) && (e = [o.value[0], e]);
                    var r = !1;
                    if (o.options.enableAnimation && o.$rootElement.data("animation")) {
                        var a = Math.max(Math.abs(f(e[0], o.options) - f(o.value[0], o.options)), Math.abs(f(e[1], o.options) - f(o.value[1], o.options)));
                        (t === !1 || a < o.options.minAnimationDistance) && (o.setAnimationEnable(!1),
                            r = !0)
                    }
                    e[0] = m(e[0], o.options),
                        e[1] = m(e[1], o.options),
                        o.options.isRange ? e[0] == o.value[0] ? e[1] = Math.max(e[1], o.value[0] + o.options.step) : e[0] = Math.min(e[0], e[1] - o.options.step) : e[0] = o.options.min,
                        (JSON.stringify(o.value) != JSON.stringify(e) || n) && (o.value = e,
                            o.updateTooltipValues(),
                            o.updateSliderPosition(),
                            o.$leftHandle.attr("aria-valuetext", e[0]),
                            o.$rightHandle.attr("aria-valuetext", e[1]),
                            o.$leftHandle.attr("aria-valuenow", e[0]),
                            o.$rightHandle.attr("aria-valuenow", e[1]),
                            i(o).trigger(b.CHANGE, [o.getValue()])),
                        r && o.setAnimationEnable(!0)
                },
                setAnimationEnable: function (e) {
                    var t = this;
                    e && t.options.enableAnimation && !t.$rootElement.data("animation") ? (t.$rootElement.data("animation", !0),
                        t.$rootElement.attr("animation", "on")) : t.$rootElement.data("animation") && (t.$rootElement.data("animation", !1),
                            t.$rootElement.removeAttr("animation"))
                },
                destroyTicks: function () {
                    for (var e = this, t = 0; t < e.ticks.length; t++)
                        e.ticks[t].$domElement.remove(),
                            e.ticks[t].$label.remove();
                    e.ticks.length = 0
                },
                drawTicks: function () {
                    var e = this
                        , t = e.options;
                    if (t.withTicks && !((t.max - t.min) / t.ticks.step > t.ticks.maxTicksCount)) {
                        e.ticks = [];
                        var n = 0
                            , o = 0
                            , r = t.min;
                        do {
                            var a = {
                                $domElement: i('<div class="cg-slider-tick"></div>').prependTo(e.$staticElement)
                            };
                            a.$domElement.addClass("cg-slider-tick-" + t.ticks.position),
                                t.isVertical ? a.$domElement.css("bottom", g(r, t) + "%") : a.$domElement.css("left", g(r, t) + "%"),
                                t.ticks.withLabels && (a.$label = i('<div class="cg-slider-tick-label">' + t.ticks.labelFormatter(r) + "</div>").appendTo(a.$domElement),
                                    n = Math.max(n, a.$label.width())),
                                e.ticks.push(a),
                                r += t.ticks.step
                        } while (r <= t.max); o = e.ticks[0].$label.height(),
                            t.ticks.withLabels && e.$rootElement.addClass("cg-slider-with-labels-" + t.ticks.position)
                    }
                },
                updateAriaLabels: function () {
                    var e = this;
                    e.options.isRange ? (e.$leftHandle.attr("aria-label", e.options.ariaLabel + " minimum"),
                        e.$rightHandle.attr("aria-label", e.options.ariaLabel + " maximum")) : (e.$rightHandle.attr("aria-label", e.options.ariaLabel),
                            e.$leftHandle.attr("aria-hidden", "true"))
                },
                updateTooltipValues: function () {
                    var e = this;
                    e.options.enableTooltips && (e.$leftHandleTooltip.html(e.value[0]),
                        e.$rightHandleTooltip.html(e.value[1]),
                        e.options.isVertical || (e.$leftHandleTooltip.css("margin-left", parseInt(-(e.$leftHandleTooltip.width() + parseInt(e.$leftHandleTooltip.css("padding-left")) + parseInt(e.$leftHandleTooltip.css("padding-right"))) / 2)),
                            e.$rightHandleTooltip.css("margin-left", parseInt(-(e.$rightHandleTooltip.width() + parseInt(e.$leftHandleTooltip.css("padding-left")) + parseInt(e.$leftHandleTooltip.css("padding-right"))) / 2))))
                },
                updateSize: function () {
                    var e = this;
                    e.options.pixelMax = e.getMaxPilxelValue()
                },
                updateSliderPosition: function () {
                    var e = this;
                    e.updateSize();
                    var t = g(e.value[0], e.options)
                        , n = g(e.value[1], e.options);
                    e.options.isVertical ? (e.$leftHandle.css({
                        bottom: t + "%"
                    }),
                        e.$rightHandle.css({
                            bottom: n + "%"
                        }),
                        e.options.enableTooltips && (e.$leftHandleTooltip.css("bottom", t + "%"),
                            e.$rightHandleTooltip.css("bottom", n + "%")),
                        e.$progress.css("bottom", t + "%").height(n - t + "%")) : (e.$leftHandle.css({
                            left: t + "%"
                        }),
                            e.$rightHandle.css({
                                left: n + "%"
                            }),
                            e.options.enableTooltips && (e.$leftHandleTooltip.css("left", t + "%"),
                                e.$rightHandleTooltip.css("left", n + "%")),
                            e.$progress.css("left", t + "%").width(n - t + "%"))
                },
                getMaxPilxelValue: function () {
                    var e = this;
                    return e.options.isVertical ? e.$staticElement.outerHeight() : e.$staticElement.outerWidth()
                },
                enabled: function (e) {
                    var t = this;
                    t.options.enable = !!e,
                        t.options.enable ? (t.$leftHandle.removeClass("disable"),
                            t.$leftHandle.attr("tabIndex", t.options.tabindex),
                            t.$rightHandle.removeClass("disable"),
                            t.$rightHandle.attr("tabIndex", t.options.tabindex),
                            t.$staticElement.removeClass("disable")) : (t.$leftHandle.addClass("disable"),
                                t.$leftHandle.removeAttr("tabIndex"),
                                t.$rightHandle.addClass("disable"),
                                t.$rightHandle.removeAttr("tabIndex"),
                                t.$staticElement.addClass("disable"))
                }
            };
            var C = i.fn.slider;
            i.fn.slider = y,
                i.fn.slider.Constructor = T;
            var E = i.fn.val;
            i.fn.val = function (e, t) {
                var n = i(this)
                    , o = n.data("competentum.slider");
                return "undefined" != typeof o ? "undefined" != typeof e ? (o.setValue(e, t),
                    n) : o.getValue() : E.apply(this, arguments)
            }
                ,
                i.fn.slider.noConflict = function () {
                    return i.fn.slider = C,
                        this
                }
                ,
                T.Event = b,
                T.TicksPosition = x,
                e.exports = T
        }
        ).call(t, n(3), n(3))
    }
    , function (e, t, n) {
        var i = n(25);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(11)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(7)(),
            t.push([e.id, '.cg-slider-controlBar{display:inline-block;vertical-align:middle;position:relative;height:28px}.cg-slider-vertical .cg-slider-controlBar{height:100%;width:28px}.cg-slider-alignmentTable{display:table;height:100%;width:100%;vertical-align:middle;table-layout:fixed}.cg-slider-alignmentCell{display:table-cell;width:100%;height:100%;vertical-align:middle}.cg-slider-bg{width:100%;height:4px;box-sizing:border-box;-ms-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;border:none;background:#aaa;position:relative;margin:auto}.cg-slider-vertical .cg-slider-bg{width:4px;height:100%}.cg-slider-progress{position:absolute;height:100%;background:#2196f3}.cg-slider-vertical .cg-slider-progress{width:100%;height:auto}.cg-slider-handle{position:absolute;cursor:pointer;left:0;top:50%;margin:-6px;width:12px;height:12px;background-color:#2196f3;border-radius:50%}.cg-slider-vertical .cg-slider-handle{left:50%;bottom:0;top:auto}.cg-slider-handle:after{content:"";position:absolute;left:-4px;right:-4px;bottom:-4px;top:-4px;border-radius:50%}.cg-slider-handle-tooltip{display:none;color:#fff;cursor:default;z-index:100;font-size:12px;text-align:center;padding-left:3px;padding-right:3px;line-height:22px;height:22px;min-width:16px;position:absolute;top:-24px;background-color:#2196f3;border-radius:10px}.cg-slider-vertical .cg-slider-handle-tooltip{top:auto;margin-bottom:-10px;margin-left:17px;left:50%}.cg-slider-handle-tooltip:after{content:"";width:0;height:0;position:absolute;left:50%;bottom:-5px;margin-left:-7px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:8px solid #2196f3}.cg-slider-vertical .cg-slider-handle-tooltip:after{content:"";width:0;height:0;position:absolute;top:50%;left:-5px;margin-top:-7px;border-right:8px solid #2196f3;border-bottom:7px solid transparent;border-top:7px solid transparent}.cg-slider-handle:focus{outline:none}.cg-slider-handle:focus:after{content:"";position:absolute;left:-4px;right:-4px;bottom:-4px;top:-4px;border-radius:50%;background-color:rgba(33,150,243,.3)}.cg-slider-handle:active:after,.cg-slider-handle:hover:after{content:"";position:absolute;left:-4px;right:-4px;bottom:-4px;top:-4px;border-radius:50%;background-color:#2196f3}.cg-slider-handle.disable,.cg-slider-handle.disable:active,.cg-slider-handle.disable:hover{cursor:default;opacity:.3}.cg-slider-controlBar[animation=on] .cg-slider-progress{transition:left .5s ease-in-out,width .5s ease-in-out}.cg-slider-vertical .cg-slider-controlBar[animation=on] .cg-slider-progress{transition:bottom .5s ease-in-out,height .5s ease-in-out}.cg-slider-controlBar[animation=on] .cg-slider-handle,.cg-slider-controlBar[animation=on] .cg-slider-handle-tooltip{transition:left .5s ease-in-out}.cg-slider-vertical .cg-slider-controlBar[animation=on] .cg-slider-handle,.cg-slider-vertical .cg-slider-controlBar[animation=on] .cg-slider-handle-tooltip{transition:bottom .5s ease-in-out}.cg-slider-bg.disable,.cg-slider-bg.disable:active,.cg-slider-bg.disable:hover{cursor:default;opacity:.3}.cg-slider-tick{position:absolute;width:2px;margin-left:-1px;height:10px;background-color:#aaa}.cg-slider-vertical .cg-slider-tick{margin-left:0;margin-bottom:-1px;width:10px;height:2px}.cg-slider-tick-bottom{top:0}.cg-slider-tick-top{bottom:0}.cg-slider-tick-left{right:0}.cg-slider-tick-right{left:0}.cg-slider-tick-label{position:absolute;font-size:12px}.cg-slider-tick-bottom .cg-slider-tick-label{text-align:center;top:12px}.cg-slider-tick-top .cg-slider-tick-label{text-align:center;bottom:12px}.cg-slider-tick-left .cg-slider-tick-label{padding-top:1px;right:12px}.cg-slider-tick-right .cg-slider-tick-label{padding-top:1px;left:12px}.cg-slider-with-labels-bottom{margin-bottom:15px}.cg-slider-with-labels-top{margin-top:15px}.cg-slider-with-labels-left{margin-left:40px}.cg-slider-with-labels-right{margin-right:40px}', ""])
    }
    , function (e, t) {
        e.exports = `
    <div class="content">
        <h1>TCP拥塞控制</h1>
        <p>
            本书第三章介绍了TCP拥塞控制。
            在这个交互式动画中，您可以查看多个客户端通过同一个链路发送数据时TCP的行为。
            你可以在模拟之前或期间添加站点。（默认值是一个站。）
            当带宽消耗到最大值时，所有发送客户端都会根据恢复方法（Reno或Tahoe）降低其传输速率。
        </p>
        <p>
            图中的绿色背景显示总的带宽消耗量。
            “3个ACK”按钮和“超时”按钮触发特定工作站的相应事件。
            “Reno”和“Tahoe”按钮设置特定工作站的恢复方法。
            滑块可用于调整速度和最大带宽。
        </p>
        <p class="navigation" id="navigation"></p>
        <div class="applet">
            <div class="workstations-section _workstations"></div>
            <div class="simulation-section">
                <div class="buttons-section">
                    <div class="workstation-controls">
                        <button tabindex="0" class="_add">添加工作站</button>
                        <button tabindex="0" class="_remove">删除工作站</button>
                    </div>
                    <div class="simulation-controls">
                        <button tabindex="0" class="_start">开始</button>
                        <button tabindex="0" class="_reset">重置</button>
                    </div>
                </div>
                <div class="graph-section">
                    <div class="graph-container">
                        <div class="graph-header">TCP公平图</div>
                        <div class="level _level"></div>
                        <canvas width="400" height="200">
                            <p></p>
                        </canvas>
                    </div>
                    <div class="bandwidth-slider _bandwidth-slider">
                        <div class="slider-label">带宽</div>
                    </div>
                </div>
                <div class="environment-section">
                    <div class="bandwidth"><span class="_bandwidth"></span>M bit/sec</div>
                    <div class="router"></div>
                    <div class="pipe"></div>
                    <div class="cloud"></div>
                    <div class="delay-slider _delay-slider"></div>
                    <div class="delay"><span class="_delay"></span> ms 延迟</div>
                </div>
            </div>
        </div>
    </div>`
    }
    , function (e, t, n) {
        var i = n(19)
            , o = function () {
                this.maxBandwidth = 1e3,
                    this.totalBandwidth = 0,
                    this.workstations = [],
                    this.delay = 30
            };
        o.prototype.addWorkstation = function () {
            var e = this.workstations.length;
            return this.workstations.push(new i(e)),
                this.workstations[e]
        }
            ,
            o.prototype.removeWorkstation = function () {
                this.workstations.pop()
            }
            ,
            o.prototype.isSpaceAvailable = function (e, t) {
                var n = this.getBandwidthInUse() - this.workstations[t].currentBandwidth;
                return !((n += e) > this.totalBandwidth)
            }
            ,
            o.prototype.getBandwidthInUse = function () {
                for (var e = 0, t = 0; t < this.workstations.length; t++)
                    e += this.workstations[t].currentBandwidth;
                return e
            }
            ,
            o.prototype.run = function () {
                for (var e = !1, t = 0; t < this.workstations.length; t++) {
                    var n = this.workstations[t];
                    this.isSpaceAvailable(n.simulateIncrement(), t) || (e = !0)
                }
                for (var t = 0; t < this.workstations.length; t++) {
                    var n = this.workstations[t];
                    e ? (n.isFirstTime ? n.isFirstTime = !1 : this.totalBandwidth > 10 && n.increment(),
                        n.ack()) : n.increment()
                }
            }
            ,
            e.exports = o
    }
]);
