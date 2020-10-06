!function (e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t),
            i.loaded = !0,
            i.exports
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
                        return function (e, t, i) {
                            r.apply(this, [e, t, i].concat(n))
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
        var r = n(2)
            , i = n(19);
        new r(new i)
    }
    , function (e, t, n) {
        (function (t) {
            var r = n(4)
                , i = n(5);
            n(10),
                n(12);
            var o = n(14)
                , s = n(15)
                , a = n(16)
                , l = n(17)
                , u = r(n(18))
                , c = 50
                , p = screen.width > 900 ? 250 : 150
                , f = 23
                , d = 25
                , h = 750
                , g = 40
                , m = g / 2
                , v = d + 2 * g
                , y = 30
                , b = 1
                , x = {
                    tcp: "TCP",
                    html: "HTML",
                    object: "OR",
                    delay: "TD"
                }
                , w = function (e) {
                    var n = Object.keys(l);
                    e.each(function (e, r) {
                        t(r).css("background", l[n[e]])
                    })
                }
                , T = function (e, n, r) {
                    var o = t("<p>" + e.text + "</p>");
                    n.append(o);
                    var s = new i(o, e);
                    return t(s).on(i.Event.VALUE_SELECT, r),
                        s
                }
                , C = function (e) {
                    this.model = e,
                        this.node = u.querySelector("div").cloneNode(!0),
                        this.$node = t(this.node),
                        this.$totalDelayTextNode = this.$node.find("._totalDelay"),
                        this.$delaysNodes = this.$node.find(".legend p"),
                        this.comboboxes = [],
                        this.canvas = this.node.querySelector("canvas"),
                        this.ctx = this.canvas.getContext("2d"),
                        this.voice = new a(5),
                        document.body.appendChild(this.node),
                        this.$node.find(".navigation").text(s.navigation),
                        t(window).on("orientationchange", function () {
                            p = screen.width > 900 ? 250 : 150,
                                this.update()
                        }
                            .bind(this));
                    var n = [function (e, t) {
                        this.model.updateConnectionType(t),
                            this.update()
                    }
                        , function (e, t) {
                            this.model.updateParallelConnectionsNumber(t),
                                this.update()
                        }
                        , function (e, t) {
                            this.model.updateobjectsNumber(t),
                                this.update()
                        }
                        , function (e, t) {
                            this.model.updateDelay(t),
                                this.update()
                        }
                    ]
                        , r = this.$node.find(".comboboxes");
                    o.forEach(function (e, t) {
                        this.comboboxes.push(T(e, r, n[t].bind(this)))
                    }, this),
                        w(this.$delaysNodes.find(".color")),
                        this.update()
                };
            C.prototype.drawBackground = function () {
                this.ctx.font = "10pt Arial, sans-serif",
                    this.ctx.fillStyle = l.black,
                    this.ctx.textAlign = "left",
                    this.ctx.fillText("Client", c - 5, d - 10),
                    this.ctx.fillText("Server", p - 10, d - 10),
                    this.ctx.fillStyle = l.yellow,
                    this.ctx.fillRect(c, d, f, h),
                    this.ctx.fillRect(p, d, f, h),
                    this.drawTransmissionSegment(l.black, d, x.tcp),
                    this.drawTransmissionSegment(l.green, d + g, x.html)
            }
                ,
                C.prototype.drawTransmissionSegment = function (e, t, n) {
                    this.drawLabel(n, t, g),
                        this.ctx.fillStyle = e,
                        this.ctx.strokeStyle = e;
                    var r = c + f;
                    this.ctx.fillRect(c, t - b, f, g + b),
                        this.ctx.beginPath(),
                        this.ctx.moveTo(r, t),
                        this.ctx.lineTo(p, t + m),
                        this.ctx.lineTo(r, t + g),
                        this.ctx.stroke()
                }
                ,
                C.prototype.drawDelaySegment = function (e) {
                    var t = c + f
                        , n = this.model.getDelay() * y;
                    return 0 != n && (this.drawLabel(x.delay, e, n),
                        this.ctx.fillStyle = l.blue,
                        this.ctx.fillRect(c, e - b, f, n + b),
                        this.ctx.beginPath(),
                        this.ctx.moveTo(t, e - b),
                        this.ctx.lineTo(p, e - m),
                        this.ctx.lineTo(p, e - m + n),
                        this.ctx.lineTo(t, e + n),
                        this.ctx.fill()),
                        n
                }
                ,
                C.prototype.drawLabel = function (e, t, n) {
                    this.ctx.fillStyle = l.black,
                        this.ctx.textAlign = "right",
                        this.ctx.fillText(e, c - 5, t + n / 2 + 2.5)
                }
                ,
                C.prototype.clear = function () {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
                ,
                C.prototype.updateLegendAltText = function () {
                    this.$delaysNodes.each(function (e, n) {
                        t(n).attr("aria-label", s.legend[e] + this.model.delays[e] + s.delayUnits)
                    }
                        .bind(this))
                }
                ,
                C.prototype.updateAnimationAltText = function () {
                    var e = s.animation.main
                        , t = s.animation.placeholders
                        , n = this.model.delays[1]
                        , r = this.model.delays[2]
                        , i = ""
                        , o = ""
                        , a = "";
                    i = n > 1 ? s.animation.toBe[1] : s.animation.toBe[0],
                        r > 1 ? (o = s.animation.toBe[1],
                            a = s.animation.plural[1]) : (o = s.animation.toBe[0],
                                a = s.animation.plural[0]),
                        e = e.replace(t.all, this.model.transmissionSegmentsNumber),
                        e = e.replace(t.tcp, n),
                        e = e.replace(t.toBe, i),
                        e = e.replace(t.obj, r),
                        e = e.replace(t.toBe, o),
                        e = e.replace(t.end, a),
                        this.model.isNonPersistent && (e += s.animation.nonPersistent),
                        e += s.animation.delay[this.comboboxes[3].getSelectedValue()],
                        e += s.animation.rrt + this.model.totalDelay + ".",
                        this.voice.speak(e)
                }
                ,
                C.prototype.update = function () {
                    this.clear(),
                        this.drawBackground();
                    var e = this.model.getTransmissionsNumber()
                        , t = v;
                    this.$totalDelayTextNode.text(this.model.totalDelay),
                        this.updateLegendAltText(),
                        this.updateAnimationAltText(),
                        this.model.isParallel ? this.comboboxes[1].enable() : this.comboboxes[1].disable();
                    for (var n = 0; e > n; n++)
                        t += this.drawDelaySegment(t),
                            this.model.isNonPersistent && (this.drawTransmissionSegment(l.black, t, x.tcp),
                                t += g),
                            this.drawTransmissionSegment(l.red, t, x.object),
                            t += g;
                    this.drawDelaySegment(t)
                }
                ,
                e.exports = C
        }
        ).call(t, n(3))
    }
    , function (e, t, n) {
        var r, i;
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
        }("undefined" != typeof window ? window : this, function (n, o) {
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
                return ue.each(e.match(Se) || [], function (e, n) {
                    t[n] = !0
                }),
                    t
            }
            function c() {
                Z.removeEventListener("DOMContentLoaded", c),
                    n.removeEventListener("load", c),
                    ue.ready()
            }
            function p() {
                this.expando = ue.expando + p.uid++
            }
            function f(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(qe, "-$&").toLowerCase(),
                        n = e.getAttribute(r),
                        "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? ue.parseJSON(n) : n
                        } catch (i) { }
                        De.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function d(e, t, n, r) {
                var i, o = 1, s = 20, a = r ? function () {
                    return r.cur()
                }
                    : function () {
                        return ue.css(e, t, "")
                    }
                    , l = a(), u = n && n[3] || (ue.cssNumber[t] ? "" : "px"), c = (ue.cssNumber[t] || "px" !== u && +l) && Pe.exec(ue.css(e, t));
                if (c && c[3] !== u) {
                    u = u || c[3],
                        n = n || [],
                        c = +l || 1;
                    do
                        o = o || ".5",
                            c /= o,
                            ue.style(e, t, c + u);
                    while (o !== (o = a() / l) && 1 !== o && --s)
                }
                return n && (c = +c || +l || 0,
                    i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = u,
                        r.start = c,
                        r.end = i)),
                    i
            }
            function h(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && ue.nodeName(e, t) ? ue.merge([e], n) : n
            }
            function g(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
            }
            function m(e, t, n, r, i) {
                for (var o, s, a, l, u, c, p = t.createDocumentFragment(), f = [], d = 0, m = e.length; m > d; d++)
                    if (o = e[d],
                        o || 0 === o)
                        if ("object" === ue.type(o))
                            ue.merge(f, o.nodeType ? [o] : o);
                        else if (Ie.test(o)) {
                            for (s = s || p.appendChild(t.createElement("div")),
                                a = (Fe.exec(o) || ["", ""])[1].toLowerCase(),
                                l = Be[a] || Be._default,
                                s.innerHTML = l[1] + ue.htmlPrefilter(o) + l[2],
                                c = l[0]; c--;)
                                s = s.lastChild;
                            ue.merge(f, s.childNodes),
                                s = p.firstChild,
                                s.textContent = ""
                        } else
                            f.push(t.createTextNode(o));
                for (p.textContent = "",
                    d = 0; o = f[d++];)
                    if (r && ue.inArray(o, r) > -1)
                        i && i.push(o);
                    else if (u = ue.contains(o.ownerDocument, o),
                        s = h(p.appendChild(o), "script"),
                        u && g(s),
                        n)
                        for (c = 0; o = s[c++];)
                            $e.test(o.type || "") && n.push(o);
                return p
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
            function x(e, t, n, r, i, o) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n,
                        n = void 0);
                    for (a in t)
                        x(e, a, n, r, t[a], o);
                    return e
                }
                if (null == r && null == i ? (i = n,
                    r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                        r = void 0) : (i = r,
                            r = n,
                            n = void 0)),
                    i === !1)
                    i = y;
                else if (!i)
                    return e;
                return 1 === o && (s = i,
                    i = function (e) {
                        return ue().off(e),
                            s.apply(this, arguments)
                    }
                    ,
                    i.guid = s.guid || (s.guid = ue.guid++)),
                    e.each(function () {
                        ue.event.add(this, t, i, r, n)
                    })
            }
            function w(e, t) {
                return ue.nodeName(e, "table") && ue.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function T(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
            }
            function C(e) {
                var t = Ye.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function N(e, t) {
                var n, r, i, o, s, a, l, u;
                if (1 === t.nodeType) {
                    if (Ee.hasData(e) && (o = Ee.access(e),
                        s = Ee.set(t, o),
                        u = o.events)) {
                        delete s.handle,
                            s.events = {};
                        for (i in u)
                            for (n = 0,
                                r = u[i].length; r > n; n++)
                                ue.event.add(t, i, u[i][n])
                    }
                    De.hasData(e) && (a = De.access(e),
                        l = ue.extend({}, a),
                        De.set(t, l))
                }
            }
            function S(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function k(e, t, n, r) {
                t = te.apply([], t);
                var i, o, s, a, l, u, c = 0, p = e.length, f = p - 1, d = t[0], g = ue.isFunction(d);
                if (g || p > 1 && "string" == typeof d && !ae.checkClone && Ve.test(d))
                    return e.each(function (i) {
                        var o = e.eq(i);
                        g && (t[0] = d.call(this, i, o.html())),
                            k(o, t, n, r)
                    });
                if (p && (i = m(t, e[0].ownerDocument, !1, e, r),
                    o = i.firstChild,
                    1 === i.childNodes.length && (i = o),
                    o || r)) {
                    for (s = ue.map(h(i, "script"), T),
                        a = s.length; p > c; c++)
                        l = i,
                            c !== f && (l = ue.clone(l, !0, !0),
                                a && ue.merge(s, h(l, "script"))),
                            n.call(e[c], l, c);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument,
                            ue.map(s, C),
                            c = 0; a > c; c++)
                            l = s[c],
                                $e.test(l.type || "") && !Ee.access(l, "globalEval") && ue.contains(u, l) && (l.src ? ue._evalUrl && ue._evalUrl(l.src) : ue.globalEval(l.textContent.replace(Ge, "")))
                }
                return e
            }
            function L(e, t, n) {
                for (var r, i = t ? ue.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                    n || 1 !== r.nodeType || ue.cleanData(h(r)),
                        r.parentNode && (n && ue.contains(r.ownerDocument, r) && g(h(r, "script")),
                            r.parentNode.removeChild(r));
                return e
            }
            function j(e, t) {
                var n = ue(t.createElement(e)).appendTo(t.body)
                    , r = ue.css(n[0], "display");
                return n.detach(),
                    r
            }
            function E(e) {
                var t = Z
                    , n = Qe[e];
                return n || (n = j(e, t),
                    "none" !== n && n || (Je = (Je || ue("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                        t = Je[0].contentDocument,
                        t.write(),
                        t.close(),
                        n = j(e, t),
                        Je.detach()),
                    Qe[e] = n),
                    n
            }
            function D(e, t, n) {
                var r, i, o, s, a = e.style;
                return n = n || et(e),
                    s = n ? n.getPropertyValue(t) || n[t] : void 0,
                    "" !== s && void 0 !== s || ue.contains(e.ownerDocument, e) || (s = ue.style(e, t)),
                    n && !ae.pixelMarginRight() && Ze.test(s) && Ke.test(t) && (r = a.width,
                        i = a.minWidth,
                        o = a.maxWidth,
                        a.minWidth = a.maxWidth = a.width = s,
                        s = n.width,
                        a.width = r,
                        a.minWidth = i,
                        a.maxWidth = o),
                    void 0 !== s ? s + "" : s
            }
            function A(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function q(e) {
                if (e in at)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--;)
                    if (e = st[n] + t,
                        e in at)
                        return e
            }
            function H(e, t, n) {
                var r = Pe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function P(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
                    "margin" === n && (s += ue.css(e, n + Re[o], !0, i)),
                        r ? ("content" === n && (s -= ue.css(e, "padding" + Re[o], !0, i)),
                            "margin" !== n && (s -= ue.css(e, "border" + Re[o] + "Width", !0, i))) : (s += ue.css(e, "padding" + Re[o], !0, i),
                                "padding" !== n && (s += ue.css(e, "border" + Re[o] + "Width", !0, i)));
                return s
            }
            function R(e, t, n) {
                var r = !0
                    , i = "width" === t ? e.offsetWidth : e.offsetHeight
                    , o = et(e)
                    , s = "border-box" === ue.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = D(e, t, o),
                        (0 > i || null == i) && (i = e.style[t]),
                        Ze.test(i))
                        return i;
                    r = s && (ae.boxSizingReliable() || i === e.style[t]),
                        i = parseFloat(i) || 0
                }
                return i + P(e, t, n || (s ? "border" : "content"), r, o) + "px"
            }
            function O(e, t) {
                for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
                    r = e[s],
                        r.style && (o[s] = Ee.get(r, "olddisplay"),
                            n = r.style.display,
                            t ? (o[s] || "none" !== n || (r.style.display = ""),
                                "" === r.style.display && Oe(r) && (o[s] = Ee.access(r, "olddisplay", E(r.nodeName)))) : (i = Oe(r),
                                    "none" === n && i || Ee.set(r, "olddisplay", i ? n : ue.css(r, "display"))));
                for (s = 0; a > s; s++)
                    r = e[s],
                        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
                return e
            }
            function M(e, t, n, r, i) {
                return new M.prototype.init(e, t, n, r, i)
            }
            function F() {
                return n.setTimeout(function () {
                    lt = void 0
                }),
                    lt = ue.now()
            }
            function $(e, t) {
                var n, r = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > r; r += 2 - t)
                    n = Re[r],
                        i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e),
                    i
            }
            function B(e, t, n) {
                for (var r, i = (_.tweeners[t] || []).concat(_.tweeners["*"]), o = 0, s = i.length; s > o; o++)
                    if (r = i[o].call(n, t, e))
                        return r
            }
            function I(e, t, n) {
                var r, i, o, s, a, l, u, c, p = this, f = {}, d = e.style, h = e.nodeType && Oe(e), g = Ee.get(e, "fxshow");
                n.queue || (a = ue._queueHooks(e, "fx"),
                    null == a.unqueued && (a.unqueued = 0,
                        l = a.empty.fire,
                        a.empty.fire = function () {
                            a.unqueued || l()
                        }
                    ),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--,
                                ue.queue(e, "fx").length || a.empty.fire()
                        })
                    })),
                    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                        u = ue.css(e, "display"),
                        c = "none" === u ? Ee.get(e, "olddisplay") || E(e.nodeName) : u,
                        "inline" === c && "none" === ue.css(e, "float") && (d.display = "inline-block")),
                    n.overflow && (d.overflow = "hidden",
                        p.always(function () {
                            d.overflow = n.overflow[0],
                                d.overflowX = n.overflow[1],
                                d.overflowY = n.overflow[2]
                        }));
                for (r in t)
                    if (i = t[r],
                        ct.exec(i)) {
                        if (delete t[r],
                            o = o || "toggle" === i,
                            i === (h ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r])
                                continue;
                            h = !0
                        }
                        f[r] = g && g[r] || ue.style(e, r)
                    } else
                        u = void 0;
                if (ue.isEmptyObject(f))
                    "inline" === ("none" === u ? E(e.nodeName) : u) && (d.display = u);
                else {
                    g ? "hidden" in g && (h = g.hidden) : g = Ee.access(e, "fxshow", {}),
                        o && (g.hidden = !h),
                        h ? ue(e).show() : p.done(function () {
                            ue(e).hide()
                        }),
                        p.done(function () {
                            var t;
                            Ee.remove(e, "fxshow");
                            for (t in f)
                                ue.style(e, t, f[t])
                        });
                    for (r in f)
                        s = B(h ? g[r] : 0, r, p),
                            r in g || (g[r] = s.start,
                                h && (s.end = s.start,
                                    s.start = "width" === r || "height" === r ? 1 : 0))
                }
            }
            function W(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (r = ue.camelCase(n),
                        i = t[r],
                        o = e[n],
                        ue.isArray(o) && (i = o[1],
                            o = e[n] = o[0]),
                        n !== r && (e[r] = o,
                            delete e[n]),
                        s = ue.cssHooks[r],
                        s && "expand" in s) {
                        o = s.expand(o),
                            delete e[r];
                        for (n in o)
                            n in e || (e[n] = o[n],
                                t[n] = i)
                    } else
                        t[r] = i
            }
            function _(e, t, n) {
                var r, i, o = 0, s = _.prefilters.length, a = ue.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (i)
                        return !1;
                    for (var t = lt || F(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; l > s; s++)
                        u.tweens[s].run(o);
                    return a.notifyWith(e, [u, o, n]),
                        1 > o && l ? n : (a.resolveWith(e, [u]),
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
                    startTime: lt || F(),
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
                        if (i)
                            return this;
                        for (i = !0; r > n; n++)
                            u.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [u, 1, 0]),
                            a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
                            this
                    }
                }), c = u.props;
                for (W(c, u.opts.specialEasing); s > o; o++)
                    if (r = _.prefilters[o].call(u, e, c, u.opts))
                        return ue.isFunction(r.stop) && (ue._queueHooks(u.elem, u.opts.queue).stop = ue.proxy(r.stop, r)),
                            r;
                return ue.map(c, B, u),
                    ue.isFunction(u.opts.start) && u.opts.start.call(e, u),
                    ue.fx.timer(ue.extend(l, {
                        elem: e,
                        anim: u,
                        queue: u.opts.queue
                    })),
                    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }
            function U(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function z(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t,
                        t = "*");
                    var r, i = 0, o = t.toLowerCase().match(Se) || [];
                    if (ue.isFunction(n))
                        for (; r = o[i++];)
                            "+" === r[0] ? (r = r.slice(1) || "*",
                                (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function X(e, t, n, r) {
                function i(a) {
                    var l;
                    return o[a] = !0,
                        ue.each(e[a] || [], function (e, a) {
                            var u = a(t, n, r);
                            return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                                i(u),
                                !1)
                        }),
                        l
                }
                var o = {}
                    , s = e === Dt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }
            function V(e, t) {
                var n, r, i = ue.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && ue.extend(!0, e, r),
                    e
            }
            function Y(e, t, n) {
                for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];)
                    l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in a)
                        if (a[i] && a[i].test(r)) {
                            l.unshift(i);
                            break
                        }
                if (l[0] in n)
                    o = l[0];
                else {
                    for (i in n) {
                        if (!l[0] || e.converters[i + " " + l[0]]) {
                            o = i;
                            break
                        }
                        s || (s = i)
                    }
                    o = o || s
                }
                return o ? (o !== l[0] && l.unshift(o),
                    n[o]) : void 0
            }
            function G(e, t, n, r) {
                var i, o, s, a, l, u = {}, c = e.dataTypes.slice();
                if (c[1])
                    for (s in e.converters)
                        u[s.toLowerCase()] = e.converters[s];
                for (o = c.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = c.shift())
                        if ("*" === o)
                            o = l;
                        else if ("*" !== l && l !== o) {
                            if (s = u[l + " " + o] || u["* " + o],
                                !s)
                                for (i in u)
                                    if (a = i.split(" "),
                                        a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0],
                                            c.unshift(a[1]));
                                        break
                                    }
                            if (s !== !0)
                                if (s && e["throws"])
                                    t = s(t);
                                else
                                    try {
                                        t = s(t)
                                    } catch (p) {
                                        return {
                                            state: "parsererror",
                                            error: s ? p : "No conversion from " + l + " to " + o
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function J(e, t, n, r) {
                var i;
                if (ue.isArray(t))
                    ue.each(t, function (t, i) {
                        n || Pt.test(e) ? r(e, i) : J(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                    });
                else if (n || "object" !== ue.type(t))
                    r(e, t);
                else
                    for (i in t)
                        J(e + "[" + i + "]", t[i], n, r)
            }
            function Q(e) {
                return ue.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var K = []
                , Z = n.document
                , ee = K.slice
                , te = K.concat
                , ne = K.push
                , re = K.indexOf
                , ie = {}
                , oe = ie.toString
                , se = ie.hasOwnProperty
                , ae = {}
                , le = "2.2.4"
                , ue = function (e, t) {
                    return new ue.fn.init(e, t)
                }
                , ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                , pe = /^-ms-/
                , fe = /-([\da-z])/gi
                , de = function (e, t) {
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
                    var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
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
                                    s !== r && (u && r && (ue.isPlainObject(r) || (i = ue.isArray(r))) ? (i ? (i = !1,
                                        o = n && ue.isArray(n) ? n : []) : o = n && ue.isPlainObject(n) ? n : {},
                                        s[t] = ue.extend(u, o, r)) : void 0 !== r && (s[t] = r));
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
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[oe.call(e)] || "object" : typeof e
                    },
                    globalEval: function (e) {
                        var t, n = eval;
                        e = ue.trim(e),
                            e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
                                t.text = e,
                                Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                    },
                    camelCase: function (e) {
                        return e.replace(pe, "ms-").replace(fe, de)
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
                        for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                            e[i++] = t[r];
                        return e.length = i,
                            e
                    },
                    grep: function (e, t, n) {
                        for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)
                            r = !t(e[o], o),
                                r !== a && i.push(e[o]);
                        return i
                    },
                    map: function (e, t, n) {
                        var r, i, o = 0, a = [];
                        if (s(e))
                            for (r = e.length; r > o; o++)
                                i = t(e[o], o, n),
                                    null != i && a.push(i);
                        else
                            for (o in e)
                                i = t(e[o], o, n),
                                    null != i && a.push(i);
                        return te.apply([], a)
                    },
                    guid: 1,
                    proxy: function (e, t) {
                        var n, r, i;
                        return "string" == typeof t && (n = e[t],
                            t = e,
                            e = n),
                            ue.isFunction(e) ? (r = ee.call(arguments, 2),
                                i = function () {
                                    return e.apply(t || this, r.concat(ee.call(arguments)))
                                }
                                ,
                                i.guid = e.guid = e.guid || ue.guid++,
                                i) : void 0
                    },
                    now: Date.now,
                    support: ae
                }),
                "function" == typeof Symbol && (ue.fn[Symbol.iterator] = K[Symbol.iterator]),
                ue.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    ie["[object " + t + "]"] = t.toLowerCase()
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
                        var i, o, s, a, l, u, p, d, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
                        if (n = n || [],
                            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                            return n;
                        if (!r && ((t ? t.ownerDocument || t : B) !== q && A(t),
                            t = t || q,
                            P)) {
                            if (11 !== g && (u = ve.exec(e)))
                                if (i = u[1]) {
                                    if (9 === g) {
                                        if (!(s = t.getElementById(i)))
                                            return n;
                                        if (s.id === i)
                                            return n.push(s),
                                                n
                                    } else if (h && (s = h.getElementById(i)) && F(t, s) && s.id === i)
                                        return n.push(s),
                                            n
                                } else {
                                    if (u[2])
                                        return K.apply(n, t.getElementsByTagName(e)),
                                            n;
                                    if ((i = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                                        return K.apply(n, t.getElementsByClassName(i)),
                                            n
                                }
                            if (w.qsa && !z[e + " "] && (!R || !R.test(e))) {
                                if (1 !== g)
                                    h = t,
                                        d = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = $),
                                        p = S(e),
                                        o = p.length,
                                        l = fe.test(a) ? "#" + a : "[id='" + a + "']"; o--;)
                                        p[o] = l + " " + f(p[o]);
                                    d = p.join(","),
                                        h = ye.test(e) && c(t.parentNode) || t
                                }
                                if (d)
                                    try {
                                        return K.apply(n, h.querySelectorAll(d)),
                                            n
                                    } catch (m) { } finally {
                                        a === $ && t.removeAttribute("id")
                                    }
                            }
                        }
                        return L(e.replace(ae, "$1"), t, n, r)
                    }
                    function n() {
                        function e(n, r) {
                            return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                                e[n + " "] = r
                        }
                        var t = [];
                        return e
                    }
                    function r(e) {
                        return e[$] = !0,
                            e
                    }
                    function i(e) {
                        var t = q.createElement("div");
                        try {
                            return !!e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                                t = null
                        }
                    }
                    function o(e, t) {
                        for (var n = e.split("|"), r = n.length; r--;)
                            T.attrHandle[n[r]] = t
                    }
                    function s(e, t) {
                        var n = t && e
                            , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
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
                                    for (var i, o = e([], n.length, t), s = o.length; s--;)
                                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                                })
                        })
                    }
                    function c(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e
                    }
                    function p() { }
                    function f(e) {
                        for (var t = 0, n = e.length, r = ""; n > t; t++)
                            r += e[t].value;
                        return r
                    }
                    function d(e, t, n) {
                        var r = t.dir
                            , i = n && "parentNode" === r
                            , o = W++;
                        return t.first ? function (t, n, o) {
                            for (; t = t[r];)
                                if (1 === t.nodeType || i)
                                    return e(t, n, o)
                        }
                            : function (t, n, s) {
                                var a, l, u, c = [I, o];
                                if (s) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || i) && e(t, n, s))
                                            return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || i) {
                                            if (u = t[$] || (t[$] = {}),
                                                l = u[t.uniqueID] || (u[t.uniqueID] = {}),
                                                (a = l[r]) && a[0] === I && a[1] === o)
                                                return c[2] = a[2];
                                            if (l[r] = c,
                                                c[2] = e(t, n, s))
                                                return !0
                                        }
                            }
                    }
                    function h(e) {
                        return e.length > 1 ? function (t, n, r) {
                            for (var i = e.length; i--;)
                                if (!e[i](t, n, r))
                                    return !1;
                            return !0
                        }
                            : e[0]
                    }
                    function g(e, n, r) {
                        for (var i = 0, o = n.length; o > i; i++)
                            t(e, n[i], r);
                        return r
                    }
                    function m(e, t, n, r, i) {
                        for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)
                            (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                                u && t.push(a)));
                        return s
                    }
                    function v(e, t, n, i, o, s) {
                        return i && !i[$] && (i = v(i)),
                            o && !o[$] && (o = v(o, s)),
                            r(function (r, s, a, l) {
                                var u, c, p, f = [], d = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, f, e, a, l), b = n ? o || (r ? e : h || i) ? [] : s : y;
                                if (n && n(y, b, a, l),
                                    i)
                                    for (u = m(b, d),
                                        i(u, [], a, l),
                                        c = u.length; c--;)
                                        (p = u[c]) && (b[d[c]] = !(y[d[c]] = p));
                                if (r) {
                                    if (o || e) {
                                        if (o) {
                                            for (u = [],
                                                c = b.length; c--;)
                                                (p = b[c]) && u.push(y[c] = p);
                                            o(null, b = [], u, l)
                                        }
                                        for (c = b.length; c--;)
                                            (p = b[c]) && (u = o ? ee(r, p) : f[c]) > -1 && (r[u] = !(s[u] = p))
                                    }
                                } else
                                    b = m(b === s ? b.splice(h, b.length) : b),
                                        o ? o(null, s, b, l) : K.apply(s, b)
                            })
                    }
                    function y(e) {
                        for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = d(function (e) {
                            return e === t
                        }, s, !0), u = d(function (e) {
                            return ee(t, e) > -1
                        }, s, !0), c = [function (e, n, r) {
                            var i = !o && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                            return t = null,
                                i
                        }
                        ]; i > a; a++)
                            if (n = T.relative[e[a].type])
                                c = [d(h(c), n)];
                            else {
                                if (n = T.filter[e[a].type].apply(null, e[a].matches),
                                    n[$]) {
                                    for (r = ++a; i > r && !T.relative[e[r].type]; r++)
                                        ;
                                    return v(a > 1 && h(c), a > 1 && f(e.slice(0, a - 1).concat({
                                        value: " " === e[a - 2].type ? "*" : ""
                                    })).replace(ae, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                                }
                                c.push(n)
                            }
                        return h(c)
                    }
                    function b(e, n) {
                        var i = n.length > 0
                            , o = e.length > 0
                            , s = function (r, s, a, l, u) {
                                var c, p, f, d = 0, h = "0", g = r && [], v = [], y = j, b = r || o && T.find.TAG("*", u), x = I += null == y ? 1 : Math.random() || .1, w = b.length;
                                for (u && (j = s === q || s || u); h !== w && null != (c = b[h]); h++) {
                                    if (o && c) {
                                        for (p = 0,
                                            s || c.ownerDocument === q || (A(c),
                                                a = !P); f = e[p++];)
                                            if (f(c, s || q, a)) {
                                                l.push(c);
                                                break
                                            }
                                        u && (I = x)
                                    }
                                    i && ((c = !f && c) && d--,
                                        r && g.push(c))
                                }
                                if (d += h,
                                    i && h !== d) {
                                    for (p = 0; f = n[p++];)
                                        f(g, v, s, a);
                                    if (r) {
                                        if (d > 0)
                                            for (; h--;)
                                                g[h] || v[h] || (v[h] = J.call(l));
                                        v = m(v)
                                    }
                                    K.apply(l, v),
                                        u && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(l)
                                }
                                return u && (I = x,
                                    j = y),
                                    g
                            };
                        return i ? r(s) : s
                    }
                    var x, w, T, C, N, S, k, L, j, E, D, A, q, H, P, R, O, M, F, $ = "sizzle" + 1 * new Date, B = e.document, I = 0, W = 0, _ = n(), U = n(), z = n(), X = function (e, t) {
                        return e === t && (D = !0),
                            0
                    }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], J = G.pop, Q = G.push, K = G.push, Z = G.slice, ee = function (e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(oe), fe = new RegExp("^" + re + "$"), de = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re + "|[*])"),
                        ATTR: new RegExp("^" + ie),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, Te = function () {
                        A()
                    };
                    try {
                        K.apply(G = Z.call(B.childNodes), B.childNodes),
                            G[B.childNodes.length].nodeType
                    } catch (Ce) {
                        K = {
                            apply: G.length ? function (e, t) {
                                Q.apply(e, Z.call(t))
                            }
                                : function (e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];)
                                        ;
                                    e.length = n - 1
                                }
                        }
                    }
                    w = t.support = {},
                        N = t.isXML = function (e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        }
                        ,
                        A = t.setDocument = function (e) {
                            var t, n, r = e ? e.ownerDocument || e : B;
                            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r,
                                H = q.documentElement,
                                P = !N(q),
                                (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                                w.attributes = i(function (e) {
                                    return e.className = "i",
                                        !e.getAttribute("className")
                                }),
                                w.getElementsByTagName = i(function (e) {
                                    return e.appendChild(q.createComment("")),
                                        !e.getElementsByTagName("*").length
                                }),
                                w.getElementsByClassName = me.test(q.getElementsByClassName),
                                w.getById = i(function (e) {
                                    return H.appendChild(e).id = $,
                                        !q.getElementsByName || !q.getElementsByName($).length
                                }),
                                w.getById ? (T.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && P) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }
                                    ,
                                    T.filter.ID = function (e) {
                                        var t = e.replace(xe, we);
                                        return function (e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }
                                ) : (delete T.find.ID,
                                    T.filter.ID = function (e) {
                                        var t = e.replace(xe, we);
                                        return function (e) {
                                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }
                                    ),
                                T.find.TAG = w.getElementsByTagName ? function (e, t) {
                                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                                }
                                    : function (e, t) {
                                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; n = o[i++];)
                                                1 === n.nodeType && r.push(n);
                                            return r
                                        }
                                        return o
                                    }
                                ,
                                T.find.CLASS = w.getElementsByClassName && function (e, t) {
                                    return "undefined" != typeof t.getElementsByClassName && P ? t.getElementsByClassName(e) : void 0
                                }
                                ,
                                O = [],
                                R = [],
                                (w.qsa = me.test(q.querySelectorAll)) && (i(function (e) {
                                    H.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"),
                                        e.querySelectorAll("[id~=" + $ + "-]").length || R.push("~="),
                                        e.querySelectorAll(":checked").length || R.push(":checked"),
                                        e.querySelectorAll("a#" + $ + "+*").length || R.push(".#.+[+~]")
                                }),
                                    i(function (e) {
                                        var t = q.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="),
                                            e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            R.push(",.*:")
                                    })),
                                (w.matchesSelector = me.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
                                    w.disconnectedMatch = M.call(e, "div"),
                                        M.call(e, "[s!='']:x"),
                                        O.push("!=", oe)
                                }),
                                R = R.length && new RegExp(R.join("|")),
                                O = O.length && new RegExp(O.join("|")),
                                t = me.test(H.compareDocumentPosition),
                                F = t || me.test(H.contains) ? function (e, t) {
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
                                X = t ? function (e, t) {
                                    if (e === t)
                                        return D = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === B && F(B, e) ? -1 : t === q || t.ownerDocument === B && F(B, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
                                }
                                    : function (e, t) {
                                        if (e === t)
                                            return D = !0,
                                                0;
                                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], l = [t];
                                        if (!i || !o)
                                            return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                                        if (i === o)
                                            return s(e, t);
                                        for (n = e; n = n.parentNode;)
                                            a.unshift(n);
                                        for (n = t; n = n.parentNode;)
                                            l.unshift(n);
                                        for (; a[r] === l[r];)
                                            r++;
                                        return r ? s(a[r], l[r]) : a[r] === B ? -1 : l[r] === B ? 1 : 0
                                    }
                                ,
                                q) : q
                        }
                        ,
                        t.matches = function (e, n) {
                            return t(e, null, null, n)
                        }
                        ,
                        t.matchesSelector = function (e, n) {
                            if ((e.ownerDocument || e) !== q && A(e),
                                n = n.replace(ce, "='$1']"),
                                w.matchesSelector && P && !z[n + " "] && (!O || !O.test(n)) && (!R || !R.test(n)))
                                try {
                                    var r = M.call(e, n);
                                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return r
                                } catch (i) { }
                            return t(n, q, null, [e]).length > 0
                        }
                        ,
                        t.contains = function (e, t) {
                            return (e.ownerDocument || e) !== q && A(e),
                                F(e, t)
                        }
                        ,
                        t.attr = function (e, t) {
                            (e.ownerDocument || e) !== q && A(e);
                            var n = T.attrHandle[t.toLowerCase()]
                                , r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                            return void 0 !== r ? r : w.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }
                        ,
                        t.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        t.uniqueSort = function (e) {
                            var t, n = [], r = 0, i = 0;
                            if (D = !w.detectDuplicates,
                                E = !w.sortStable && e.slice(0),
                                e.sort(X),
                                D) {
                                for (; t = e[i++];)
                                    t === e[i] && (r = n.push(i));
                                for (; r--;)
                                    e.splice(n[r], 1)
                            }
                            return E = null,
                                e
                        }
                        ,
                        C = t.getText = function (e) {
                            var t, n = "", r = 0, i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += C(e)
                                } else if (3 === i || 4 === i)
                                    return e.nodeValue
                            } else
                                for (; t = e[r++];)
                                    n += C(t);
                            return n
                        }
                        ,
                        T = t.selectors = {
                            cacheLength: 50,
                            createPseudo: r,
                            match: de,
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
                                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
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
                                    var t = _[e + " "];
                                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function (e) {
                                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function (e, n, r) {
                                    return function (i) {
                                        var o = t.attr(i, e);
                                        return null == o ? "!=" === n : n ? (o += "",
                                            "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                                    }
                                },
                                CHILD: function (e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3)
                                        , s = "last" !== e.slice(-4)
                                        , a = "of-type" === t;
                                    return 1 === r && 0 === i ? function (e) {
                                        return !!e.parentNode
                                    }
                                        : function (t, n, l) {
                                            var u, c, p, f, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                            if (m) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (f = t; f = f[g];)
                                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                                                return !1;
                                                        h = g = "only" === e && !h && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (h = [s ? m.firstChild : m.lastChild],
                                                    s && y) {
                                                    for (f = m,
                                                        p = f[$] || (f[$] = {}),
                                                        c = p[f.uniqueID] || (p[f.uniqueID] = {}),
                                                        u = c[e] || [],
                                                        d = u[0] === I && u[1],
                                                        b = d && u[2],
                                                        f = d && m.childNodes[d]; f = ++d && f && f[g] || (b = d = 0) || h.pop();)
                                                        if (1 === f.nodeType && ++b && f === t) {
                                                            c[e] = [I, d, b];
                                                            break
                                                        }
                                                } else if (y && (f = t,
                                                    p = f[$] || (f[$] = {}),
                                                    c = p[f.uniqueID] || (p[f.uniqueID] = {}),
                                                    u = c[e] || [],
                                                    d = u[0] === I && u[1],
                                                    b = d),
                                                    b === !1)
                                                    for (; (f = ++d && f && f[g] || (b = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (p = f[$] || (f[$] = {}),
                                                        c = p[f.uniqueID] || (p[f.uniqueID] = {}),
                                                        c[e] = [I, b]),
                                                        f !== t));)
                                                        ;
                                                return b -= i,
                                                    b === r || b % r === 0 && b / r >= 0
                                            }
                                        }
                                },
                                PSEUDO: function (e, n) {
                                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return o[$] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                                        T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                            for (var r, i = o(e, n), s = i.length; s--;)
                                                r = ee(e, i[s]),
                                                    e[r] = !(t[r] = i[s])
                                        }) : function (e) {
                                            return o(e, 0, i)
                                        }
                                    ) : o
                                }
                            },
                            pseudos: {
                                not: r(function (e) {
                                    var t = []
                                        , n = []
                                        , i = k(e.replace(ae, "$1"));
                                    return i[$] ? r(function (e, t, n, r) {
                                        for (var o, s = i(e, null, r, []), a = e.length; a--;)
                                            (o = s[a]) && (e[a] = !(t[a] = o))
                                    }) : function (e, r, o) {
                                        return t[0] = e,
                                            i(t, null, o, n),
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
                                    return e = e.replace(xe, we),
                                        function (t) {
                                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: r(function (e) {
                                    return fe.test(e || "") || t.error("unsupported lang: " + e),
                                        e = e.replace(xe, we).toLowerCase(),
                                        function (t) {
                                            var n;
                                            do
                                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
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
                                    return e === H
                                },
                                focus: function (e) {
                                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                                    return !T.pseudos.empty(e)
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
                        T.pseudos.nth = T.pseudos.eq;
                    for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        T.pseudos[x] = a(x);
                    for (x in {
                        submit: !0,
                        reset: !0
                    })
                        T.pseudos[x] = l(x);
                    return p.prototype = T.filters = T.pseudos,
                        T.setFilters = new p,
                        S = t.tokenize = function (e, n) {
                            var r, i, o, s, a, l, u, c = U[e + " "];
                            if (c)
                                return n ? 0 : c.slice(0);
                            for (a = e,
                                l = [],
                                u = T.preFilter; a;) {
                                r && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                                    l.push(o = [])),
                                    r = !1,
                                    (i = ue.exec(a)) && (r = i.shift(),
                                        o.push({
                                            value: r,
                                            type: i[0].replace(ae, " ")
                                        }),
                                        a = a.slice(r.length));
                                for (s in T.filter)
                                    !(i = de[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(),
                                        o.push({
                                            value: r,
                                            type: s,
                                            matches: i
                                        }),
                                        a = a.slice(r.length));
                                if (!r)
                                    break
                            }
                            return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
                        }
                        ,
                        k = t.compile = function (e, t) {
                            var n, r = [], i = [], o = z[e + " "];
                            if (!o) {
                                for (t || (t = S(e)),
                                    n = t.length; n--;)
                                    o = y(t[n]),
                                        o[$] ? r.push(o) : i.push(o);
                                o = z(e, b(i, r)),
                                    o.selector = e
                            }
                            return o
                        }
                        ,
                        L = t.select = function (e, t, n, r) {
                            var i, o, s, a, l, u = "function" == typeof e && e, p = !r && S(e = u.selector || e);
                            if (n = n || [],
                                1 === p.length) {
                                if (o = p[0] = p[0].slice(0),
                                    o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && P && T.relative[o[1].type]) {
                                    if (t = (T.find.ID(s.matches[0].replace(xe, we), t) || [])[0],
                                        !t)
                                        return n;
                                    u && (t = t.parentNode),
                                        e = e.slice(o.shift().value.length)
                                }
                                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                                    !T.relative[a = s.type]);)
                                    if ((l = T.find[a]) && (r = l(s.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                                        if (o.splice(i, 1),
                                            e = r.length && f(o),
                                            !e)
                                            return K.apply(n, r),
                                                n;
                                        break
                                    }
                            }
                            return (u || k(e, p))(r, t, !P, n, !t || ye.test(e) && c(t.parentNode) || t),
                                n
                        }
                        ,
                        w.sortStable = $.split("").sort(X).join("") === $,
                        w.detectDuplicates = !!D,
                        A(),
                        w.sortDetached = i(function (e) {
                            return 1 & e.compareDocumentPosition(q.createElement("div"))
                        }),
                        i(function (e) {
                            return e.innerHTML = "<a href='#'></a>",
                                "#" === e.firstChild.getAttribute("href")
                        }) || o("type|href|height|width", function (e, t, n) {
                            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }),
                        w.attributes && i(function (e) {
                            return e.innerHTML = "<input/>",
                                e.firstChild.setAttribute("value", ""),
                                "" === e.firstChild.getAttribute("value")
                        }) || o("value", function (e, t, n) {
                            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                        }),
                        i(function (e) {
                            return null == e.getAttribute("disabled")
                        }) || o(te, function (e, t, n) {
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
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && ue(e).is(n))
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
                , ye = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
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
                        var t, n = this.length, r = [], i = this;
                        if ("string" != typeof e)
                            return this.pushStack(ue(e).filter(function () {
                                for (t = 0; n > t; t++)
                                    if (ue.contains(i[t], this))
                                        return !0
                            }));
                        for (t = 0; n > t; t++)
                            ue.find(e, i[t], r);
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
            var xe, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Te = ue.fn.init = function (e, t, n) {
                var r, i;
                if (!e)
                    return this;
                if (n = n || xe,
                    "string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : we.exec(e),
                        !r || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof ue ? t[0] : t,
                            ue.merge(this, ue.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                            ye.test(r[1]) && ue.isPlainObject(t))
                            for (r in t)
                                ue.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return i = Z.getElementById(r[2]),
                        i && i.parentNode && (this.length = 1,
                            this[0] = i),
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
            Te.prototype = ue.fn,
                xe = ue(Z);
            var Ce = /^(?:parents|prev(?:Until|All))/
                , Ne = {
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
                    for (var n, r = 0, i = this.length, o = [], s = ve.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; i > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? ue.uniqueSort(o) : o)
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
                        var i = ue.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n),
                            r && "string" == typeof r && (i = ue.filter(r, i)),
                            this.length > 1 && (Ne[e] || ue.uniqueSort(i),
                                Ce.test(e) && i.reverse()),
                            this.pushStack(i)
                    }
                });
            var Se = /\S+/g;
            ue.Callbacks = function (e) {
                e = "string" == typeof e ? u(e) : ue.extend({}, e);
                var t, n, r, i, o = [], s = [], a = -1, l = function () {
                    for (i = e.once,
                        r = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < o.length;)
                            o[a].apply(n[0], n[1]) === !1 && e.stopOnFalse && (a = o.length,
                                n = !1);
                    e.memory || (n = !1),
                        t = !1,
                        i && (o = n ? [] : "")
                }, c = {
                    add: function () {
                        return o && (n && !t && (a = o.length - 1,
                            s.push(n)),
                            function r(t) {
                                ue.each(t, function (t, n) {
                                    ue.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ue.type(n) && r(n)
                                })
                            }(arguments),
                            n && !t && l()),
                            this
                    },
                    remove: function () {
                        return ue.each(arguments, function (e, t) {
                            for (var n; (n = ue.inArray(t, o, n)) > -1;)
                                o.splice(n, 1),
                                    a >= n && a--
                        }),
                            this
                    },
                    has: function (e) {
                        return e ? ue.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function () {
                        return o && (o = []),
                            this
                    },
                    disable: function () {
                        return i = s = [],
                            o = n = "",
                            this
                    },
                    disabled: function () {
                        return !o
                    },
                    lock: function () {
                        return i = s = [],
                            n || (o = n = ""),
                            this
                    },
                    locked: function () {
                        return !!i
                    },
                    fireWith: function (e, n) {
                        return i || (n = n || [],
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
                                    return i.done(arguments).fail(arguments),
                                        this
                                },
                                then: function () {
                                    var e = arguments;
                                    return ue.Deferred(function (n) {
                                        ue.each(t, function (t, o) {
                                            var s = ue.isFunction(e[t]) && e[t];
                                            i[o[1]](function () {
                                                var e = s && s.apply(this, arguments);
                                                e && ue.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                            })
                                        }),
                                            e = null
                                    }).promise()
                                },
                                promise: function (e) {
                                    return null != e ? ue.extend(e, r) : r
                                }
                            }
                            , i = {};
                        return r.pipe = r.then,
                            ue.each(t, function (e, o) {
                                var s = o[2]
                                    , a = o[3];
                                r[o[1]] = s.add,
                                    a && s.add(function () {
                                        n = a
                                    }, t[1 ^ e][2].disable, t[2][2].lock),
                                    i[o[0]] = function () {
                                        return i[o[0] + "With"](this === i ? r : this, arguments),
                                            this
                                    }
                                    ,
                                    i[o[0] + "With"] = s.fireWith
                            }),
                            r.promise(i),
                            e && e.call(i, i),
                            i
                    },
                    when: function (e) {
                        var t, n, r, i = 0, o = ee.call(arguments), s = o.length, a = 1 !== s || e && ue.isFunction(e.promise) ? s : 0, l = 1 === a ? e : ue.Deferred(), u = function (e, n, r) {
                            return function (i) {
                                n[e] = this,
                                    r[e] = arguments.length > 1 ? ee.call(arguments) : i,
                                    r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                            }
                        };
                        if (s > 1)
                            for (t = new Array(s),
                                n = new Array(s),
                                r = new Array(s); s > i; i++)
                                o[i] && ue.isFunction(o[i].promise) ? o[i].promise().progress(u(i, n, t)).done(u(i, r, o)).fail(l.reject) : --a;
                        return a || l.resolveWith(r, o),
                            l.promise()
                    }
                });
            var ke;
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
                            e !== !0 && --ue.readyWait > 0 || (ke.resolveWith(Z, [ue]),
                                ue.fn.triggerHandler && (ue(Z).triggerHandler("ready"),
                                    ue(Z).off("ready"))))
                    }
                }),
                ue.ready.promise = function (e) {
                    return ke || (ke = ue.Deferred(),
                        "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(ue.ready) : (Z.addEventListener("DOMContentLoaded", c),
                            n.addEventListener("load", c))),
                        ke.promise(e)
                }
                ,
                ue.ready.promise();
            var Le = function (e, t, n, r, i, o, s) {
                var a = 0
                    , l = e.length
                    , u = null == n;
                if ("object" === ue.type(n)) {
                    i = !0;
                    for (a in n)
                        Le(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== r && (i = !0,
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
                return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
            }
                , je = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            p.uid = 1,
                p.prototype = {
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
                        if (!je(e))
                            return {};
                        var t = e[this.expando];
                        return t || (t = {},
                            je(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))),
                            t
                    },
                    set: function (e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t)
                            i[t] = n;
                        else
                            for (r in t)
                                i[r] = t[r];
                        return i
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
                        var n, r, i, o = e[this.expando];
                        if (void 0 !== o) {
                            if (void 0 === t)
                                this.register(e);
                            else {
                                ue.isArray(t) ? r = t.concat(t.map(ue.camelCase)) : (i = ue.camelCase(t),
                                    t in o ? r = [t, i] : (r = i,
                                        r = r in o ? [r] : r.match(Se) || [])),
                                    n = r.length;
                                for (; n--;)
                                    delete o[r[n]]
                            }
                            (void 0 === t || ue.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !ue.isEmptyObject(t)
                    }
                };
            var Ee = new p
                , De = new p
                , Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , qe = /[A-Z]/g;
            ue.extend({
                hasData: function (e) {
                    return De.hasData(e) || Ee.hasData(e)
                },
                data: function (e, t, n) {
                    return De.access(e, t, n)
                },
                removeData: function (e, t) {
                    De.remove(e, t)
                },
                _data: function (e, t, n) {
                    return Ee.access(e, t, n)
                },
                _removeData: function (e, t) {
                    Ee.remove(e, t)
                }
            }),
                ue.fn.extend({
                    data: function (e, t) {
                        var n, r, i, o = this[0], s = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = De.get(o),
                                1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--;)
                                    s[n] && (r = s[n].name,
                                        0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)),
                                            f(o, r, i[r])));
                                Ee.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each(function () {
                            De.set(this, e)
                        }) : Le(this, function (t) {
                            var n, r;
                            if (o && void 0 === t) {
                                if (n = De.get(o, e) || De.get(o, e.replace(qe, "-$&").toLowerCase()),
                                    void 0 !== n)
                                    return n;
                                if (r = ue.camelCase(e),
                                    n = De.get(o, r),
                                    void 0 !== n)
                                    return n;
                                if (n = f(o, r, void 0),
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
                            r = Ee.get(e, t),
                            n && (!r || ue.isArray(n) ? r = Ee.access(e, t, ue.makeArray(n)) : r.push(n)),
                            r || []) : void 0
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = ue.queue(e, t)
                            , r = n.length
                            , i = n.shift()
                            , o = ue._queueHooks(e, t)
                            , s = function () {
                                ue.dequeue(e, t)
                            };
                        "inprogress" === i && (i = n.shift(),
                            r--),
                            i && ("fx" === t && n.unshift("inprogress"),
                                delete o.stop,
                                i.call(e, s, o)),
                            !r && o && o.empty.fire()
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return Ee.get(e, n) || Ee.access(e, n, {
                            empty: ue.Callbacks("once memory").add(function () {
                                Ee.remove(e, [t + "queue", n])
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
                        var n, r = 1, i = ue.Deferred(), o = this, s = this.length, a = function () {
                            --r || i.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                            e = void 0),
                            e = e || "fx"; s--;)
                            n = Ee.get(o[s], e + "queueHooks"),
                                n && n.empty && (r++,
                                    n.empty.add(a));
                        return a(),
                            i.promise(t)
                    }
                });
            var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , Pe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i")
                , Re = ["Top", "Right", "Bottom", "Left"]
                , Oe = function (e, t) {
                    return e = t || e,
                        "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
                }
                , Me = /^(?:checkbox|radio)$/i
                , Fe = /<([\w:-]+)/
                , $e = /^$|\/(?:java|ecma)script/i
                , Be = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Be.optgroup = Be.option,
                Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead,
                Be.th = Be.td;
            var Ie = /<|&#?\w+;/;
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
            var We = /^key/
                , _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                , Ue = /^([^.]*)(?:\.(.+)|)/;
            ue.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o, s, a, l, u, c, p, f, d, h, g, m = Ee.get(e);
                    if (m)
                        for (n.handler && (o = n,
                            n = o.handler,
                            i = o.selector),
                            n.guid || (n.guid = ue.guid++),
                            (l = m.events) || (l = m.events = {}),
                            (s = m.handle) || (s = m.handle = function (t) {
                                return "undefined" != typeof ue && ue.event.triggered !== t.type ? ue.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            t = (t || "").match(Se) || [""],
                            u = t.length; u--;)
                            a = Ue.exec(t[u]) || [],
                                d = g = a[1],
                                h = (a[2] || "").split(".").sort(),
                                d && (p = ue.event.special[d] || {},
                                    d = (i ? p.delegateType : p.bindType) || d,
                                    p = ue.event.special[d] || {},
                                    c = ue.extend({
                                        type: d,
                                        origType: g,
                                        data: r,
                                        handler: n,
                                        guid: n.guid,
                                        selector: i,
                                        needsContext: i && ue.expr.match.needsContext.test(i),
                                        namespace: h.join(".")
                                    }, o),
                                    (f = l[d]) || (f = l[d] = [],
                                        f.delegateCount = 0,
                                        p.setup && p.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s)),
                                    p.add && (p.add.call(e, c),
                                        c.handler.guid || (c.handler.guid = n.guid)),
                                    i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                                    ue.event.global[d] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var o, s, a, l, u, c, p, f, d, h, g, m = Ee.hasData(e) && Ee.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(Se) || [""],
                            u = t.length; u--;)
                            if (a = Ue.exec(t[u]) || [],
                                d = g = a[1],
                                h = (a[2] || "").split(".").sort(),
                                d) {
                                for (p = ue.event.special[d] || {},
                                    d = (r ? p.delegateType : p.bindType) || d,
                                    f = l[d] || [],
                                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    s = o = f.length; o--;)
                                    c = f[o],
                                        !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1),
                                            c.selector && f.delegateCount--,
                                            p.remove && p.remove.call(e, c));
                                s && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || ue.removeEvent(e, d, m.handle),
                                    delete l[d])
                            } else
                                for (d in l)
                                    ue.event.remove(e, d + t[u], n, r, !0);
                        ue.isEmptyObject(l) && Ee.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = ue.event.fix(e);
                    var t, n, r, i, o, s = [], a = ee.call(arguments), l = (Ee.get(this, "events") || {})[e.type] || [], u = ue.event.special[e.type] || {};
                    if (a[0] = e,
                        e.delegateTarget = this,
                        !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (s = ue.event.handlers.call(this, e, l),
                            t = 0; (i = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem,
                                n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)
                                e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                                    e.data = o.data,
                                    r = ((ue.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                                    void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                                        e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, o, s = [], a = t.delegateCount, l = e.target;
                    if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                                for (r = [],
                                    n = 0; a > n; n++)
                                    o = t[n],
                                        i = o.selector + " ",
                                        void 0 === r[i] && (r[i] = o.needsContext ? ue(i, this).index(l) > -1 : ue.find(i, this, null, [l]).length),
                                        r[i] && r.push(o);
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
                        var n, r, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z,
                            r = n.documentElement,
                            i = n.body,
                            e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                            e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                            e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                            e
                    }
                },
                fix: function (e) {
                    if (e[ue.expando])
                        return e;
                    var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
                    for (s || (this.fixHooks[i] = s = _e.test(i) ? this.mouseHooks : We.test(i) ? this.keyHooks : {}),
                        r = s.props ? this.props.concat(s.props) : this.props,
                        e = new ue.Event(o),
                        t = r.length; t--;)
                        n = r[t],
                            e[n] = o[n];
                    return e.target || (e.target = Z),
                        3 === e.target.nodeType && (e.target = e.target.parentNode),
                        s.filter ? s.filter(e, o) : e
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
                        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : y) : this.type = e,
                        t && ue.extend(this, t),
                        this.timeStamp = e && e.timeStamp || ue.now(),
                        void (this[ue.expando] = !0)) : new ue.Event(e, t)
                }
                ,
                ue.Event.prototype = {
                    constructor: ue.Event,
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
                            var n, r = this, i = e.relatedTarget, o = e.handleObj;
                            return i && (i === r || ue.contains(r, i)) || (e.type = o.origType,
                                n = o.handler.apply(this, arguments),
                                e.type = t),
                                n
                        }
                    }
                }),
                ue.fn.extend({
                    on: function (e, t, n, r) {
                        return x(this, e, t, n, r)
                    },
                    one: function (e, t, n, r) {
                        return x(this, e, t, n, r, 1)
                    },
                    off: function (e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj)
                            return r = e.handleObj,
                                ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                                this;
                        if ("object" == typeof e) {
                            for (i in e)
                                this.off(i, t, e[i]);
                            return this
                        }
                        return t !== !1 && "function" != typeof t || (n = t,
                            t = void 0),
                            n === !1 && (n = y),
                            this.each(function () {
                                ue.event.remove(this, e, n, t)
                            })
                    }
                });
            var ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                , Xe = /<script|<style|<link/i
                , Ve = /checked\s*(?:[^=]|=\s*.checked.)/i
                , Ye = /^true\/(.*)/
                , Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ue.extend({
                htmlPrefilter: function (e) {
                    return e.replace(ze, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var r, i, o, s, a = e.cloneNode(!0), l = ue.contains(e.ownerDocument, e);
                    if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                        for (s = h(a),
                            o = h(e),
                            r = 0,
                            i = o.length; i > r; r++)
                            S(o[r], s[r]);
                    if (t)
                        if (n)
                            for (o = o || h(e),
                                s = s || h(a),
                                r = 0,
                                i = o.length; i > r; r++)
                                N(o[r], s[r]);
                        else
                            N(e, a);
                    return s = h(a, "script"),
                        s.length > 0 && g(s, !l && h(e, "script")),
                        a
                },
                cleanData: function (e) {
                    for (var t, n, r, i = ue.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (je(n)) {
                            if (t = n[Ee.expando]) {
                                if (t.events)
                                    for (r in t.events)
                                        i[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, t.handle);
                                n[Ee.expando] = void 0
                            }
                            n[De.expando] && (n[De.expando] = void 0)
                        }
                }
            }),
                ue.fn.extend({
                    domManip: k,
                    detach: function (e) {
                        return L(this, e, !0)
                    },
                    remove: function (e) {
                        return L(this, e)
                    },
                    text: function (e) {
                        return Le(this, function (e) {
                            return void 0 === e ? ue.text(this) : this.empty().each(function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function () {
                        return k(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = w(this, e);
                                t.appendChild(e)
                            }
                        })
                    },
                    prepend: function () {
                        return k(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = w(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function () {
                        return k(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function () {
                        return k(this, arguments, function (e) {
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
                        return Le(this, function (e) {
                            var t = this[0] || {}
                                , n = 0
                                , r = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Xe.test(e) && !Be[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = ue.htmlPrefilter(e);
                                try {
                                    for (; r > n; n++)
                                        t = this[n] || {},
                                            1 === t.nodeType && (ue.cleanData(h(t, !1)),
                                                t.innerHTML = e);
                                    t = 0
                                } catch (i) { }
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function () {
                        var e = [];
                        return k(this, arguments, function (t) {
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
                        for (var n, r = [], i = ue(e), o = i.length - 1, s = 0; o >= s; s++)
                            n = s === o ? this : this.clone(!0),
                                ue(i[s])[t](n),
                                ne.apply(r, n.get());
                        return this.pushStack(r)
                    }
                });
            var Je, Qe = {
                HTML: "block",
                BODY: "block"
            }, Ke = /^margin/, Ze = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"), et = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                    t.getComputedStyle(e)
            }, tt = function (e, t, n, r) {
                var i, o, s = {};
                for (o in t)
                    s[o] = e.style[o],
                        e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t)
                    e.style[o] = s[o];
                return i
            }, nt = Z.documentElement;
            !function () {
                function e() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        a.innerHTML = "",
                        nt.appendChild(s);
                    var e = n.getComputedStyle(a);
                    t = "1%" !== e.top,
                        o = "2px" === e.marginLeft,
                        r = "4px" === e.width,
                        a.style.marginRight = "50%",
                        i = "4px" === e.marginRight,
                        nt.removeChild(s)
                }
                var t, r, i, o, s = Z.createElement("div"), a = Z.createElement("div");
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
                                i
                        },
                        reliableMarginLeft: function () {
                            return null == r && e(),
                                o
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
                , it = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                , ot = {
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
                        var i, o, s, a = ue.camelCase(t), l = e.style;
                        return t = ue.cssProps[a] || (ue.cssProps[a] = q(a) || a),
                            s = ue.cssHooks[t] || ue.cssHooks[a],
                            void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t] : (o = typeof n,
                                "string" === o && (i = Pe.exec(n)) && i[1] && (n = d(e, t, i),
                                    o = "number"),
                                null != n && n === n && ("number" === o && (n += i && i[3] || (ue.cssNumber[a] ? "" : "px")),
                                    ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                    s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l[t] = n)),
                                void 0)
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, s, a = ue.camelCase(t);
                    return t = ue.cssProps[a] || (ue.cssProps[a] = q(a) || a),
                        s = ue.cssHooks[t] || ue.cssHooks[a],
                        s && "get" in s && (i = s.get(e, !0, n)),
                        void 0 === i && (i = D(e, t, r)),
                        "normal" === i && t in ot && (i = ot[t]),
                        "" === n || n ? (o = parseFloat(i),
                            n === !0 || isFinite(o) ? o || 0 : i) : i
                }
            }),
                ue.each(["height", "width"], function (e, t) {
                    ue.cssHooks[t] = {
                        get: function (e, n, r) {
                            return n ? rt.test(ue.css(e, "display")) && 0 === e.offsetWidth ? tt(e, it, function () {
                                return R(e, t, r)
                            }) : R(e, t, r) : void 0
                        },
                        set: function (e, n, r) {
                            var i, o = r && et(e), s = r && P(e, t, r, "border-box" === ue.css(e, "boxSizing", !1, o), o);
                            return s && (i = Pe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                                n = ue.css(e, t)),
                                H(e, n, s)
                        }
                    }
                }),
                ue.cssHooks.marginLeft = A(ae.reliableMarginLeft, function (e, t) {
                    return t ? (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                        marginLeft: 0
                    }, function () {
                        return e.getBoundingClientRect().left
                    })) + "px" : void 0
                }),
                ue.cssHooks.marginRight = A(ae.reliableMarginRight, function (e, t) {
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
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                                i[e + Re[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    },
                        Ke.test(e) || (ue.cssHooks[e + t].set = H)
                }),
                ue.fn.extend({
                    css: function (e, t) {
                        return Le(this, function (e, t, n) {
                            var r, i, o = {}, s = 0;
                            if (ue.isArray(t)) {
                                for (r = et(e),
                                    i = t.length; i > s; s++)
                                    o[t[s]] = ue.css(e, t[s], !1, r);
                                return o
                            }
                            return void 0 !== n ? ue.style(e, t, n) : ue.css(e, t)
                        }, e, t, arguments.length > 1)
                    },
                    show: function () {
                        return O(this, !0)
                    },
                    hide: function () {
                        return O(this)
                    },
                    toggle: function (e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                            Oe(this) ? ue(this).show() : ue(this).hide()
                        })
                    }
                }),
                ue.Tween = M,
                M.prototype = {
                    constructor: M,
                    init: function (e, t, n, r, i, o) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = i || ue.easing._default,
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = r,
                            this.unit = o || (ue.cssNumber[n] ? "" : "px")
                    },
                    cur: function () {
                        var e = M.propHooks[this.prop];
                        return e && e.get ? e.get(this) : M.propHooks._default.get(this)
                    },
                    run: function (e) {
                        var t, n = M.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                            this.now = (this.end - this.start) * t + this.start,
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : M.propHooks._default.set(this),
                            this
                    }
                },
                M.prototype.init.prototype = M.prototype,
                M.propHooks = {
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
                M.propHooks.scrollTop = M.propHooks.scrollLeft = {
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
                ue.fx = M.prototype.init,
                ue.fx.step = {};
            var lt, ut, ct = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
            ue.Animation = ue.extend(_, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return d(n.elem, e, Pe.exec(t), n),
                            n
                    }
                    ]
                },
                tweener: function (e, t) {
                    ue.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.match(Se);
                    for (var n, r = 0, i = e.length; i > r; r++)
                        n = e[r],
                            _.tweeners[n] = _.tweeners[n] || [],
                            _.tweeners[n].unshift(t)
                },
                prefilters: [I],
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
                        return this.filter(Oe).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function (e, t, n, r) {
                        var i = ue.isEmptyObject(e)
                            , o = ue.speed(t, n, r)
                            , s = function () {
                                var t = _(this, ue.extend({}, e), o);
                                (i || Ee.get(this, "finish")) && t.stop(!0)
                            };
                        return s.finish = s,
                            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
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
                                    , i = null != e && e + "queueHooks"
                                    , o = ue.timers
                                    , s = Ee.get(this);
                                if (i)
                                    s[i] && s[i].stop && r(s[i]);
                                else
                                    for (i in s)
                                        s[i] && s[i].stop && pt.test(i) && r(s[i]);
                                for (i = o.length; i--;)
                                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                        t = !1,
                                        o.splice(i, 1));
                                !t && n || ue.dequeue(this, e)
                            })
                    },
                    finish: function (e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function () {
                                var t, n = Ee.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ue.timers, s = r ? r.length : 0;
                                for (n.finish = !0,
                                    ue.queue(this, e, []),
                                    i && i.stop && i.stop.call(this, !0),
                                    t = o.length; t--;)
                                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                        o.splice(t, 1));
                                for (t = 0; s > t; t++)
                                    r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                ue.each(["toggle", "show", "hide"], function (e, t) {
                    var n = ue.fn[t];
                    ue.fn[t] = function (e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
                    }
                }),
                ue.each({
                    slideDown: $("show"),
                    slideUp: $("hide"),
                    slideToggle: $("toggle"),
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
                            var i = n.setTimeout(t, e);
                            r.stop = function () {
                                n.clearTimeout(i)
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
            var ft, dt = ue.expr.attrHandle;
            ue.fn.extend({
                attr: function (e, t) {
                    return Le(this, ue.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        ue.removeAttr(this, e)
                    })
                }
            }),
                ue.extend({
                    attr: function (e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return "undefined" == typeof e.getAttribute ? ue.prop(e, t, n) : (1 === o && ue.isXMLDoc(e) || (t = t.toLowerCase(),
                                i = ue.attrHooks[t] || (ue.expr.match.bool.test(t) ? ft : void 0)),
                                void 0 !== n ? null === n ? void ue.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                                    n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ue.find.attr(e, t),
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
                        var n, r, i = 0, o = t && t.match(Se);
                        if (o && 1 === e.nodeType)
                            for (; n = o[i++];)
                                r = ue.propFix[n] || n,
                                    ue.expr.match.bool.test(n) && (e[r] = !1),
                                    e.removeAttribute(n)
                    }
                }),
                ft = {
                    set: function (e, t, n) {
                        return t === !1 ? ue.removeAttr(e, n) : e.setAttribute(n, n),
                            n
                    }
                },
                ue.each(ue.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = dt[t] || ue.find.attr;
                    dt[t] = function (e, t, r) {
                        var i, o;
                        return r || (o = dt[t],
                            dt[t] = i,
                            i = null != n(e, t, r) ? t.toLowerCase() : null,
                            dt[t] = o),
                            i
                    }
                });
            var ht = /^(?:input|select|textarea|button)$/i
                , gt = /^(?:a|area)$/i;
            ue.fn.extend({
                prop: function (e, t) {
                    return Le(this, ue.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[ue.propFix[e] || e]
                    })
                }
            }),
                ue.extend({
                    prop: function (e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && ue.isXMLDoc(e) || (t = ue.propFix[t] || t,
                                i = ue.propHooks[t]),
                                void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
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
                    var t, n, r, i, o, s, a, l = 0;
                    if (ue.isFunction(e))
                        return this.each(function (t) {
                            ue(this).addClass(e.call(this, t, U(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(Se) || []; n = this[l++];)
                            if (i = U(n),
                                r = 1 === n.nodeType && (" " + i + " ").replace(mt, " ")) {
                                for (s = 0; o = t[s++];)
                                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                a = ue.trim(r),
                                    i !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, r, i, o, s, a, l = 0;
                    if (ue.isFunction(e))
                        return this.each(function (t) {
                            ue(this).removeClass(e.call(this, t, U(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Se) || []; n = this[l++];)
                            if (i = U(n),
                                r = 1 === n.nodeType && (" " + i + " ").replace(mt, " ")) {
                                for (s = 0; o = t[s++];)
                                    for (; r.indexOf(" " + o + " ") > -1;)
                                        r = r.replace(" " + o + " ", " ");
                                a = ue.trim(r),
                                    i !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ue.isFunction(e) ? this.each(function (n) {
                        ue(this).toggleClass(e.call(this, n, U(this), t), t)
                    }) : this.each(function () {
                        var t, r, i, o;
                        if ("string" === n)
                            for (r = 0,
                                i = ue(this),
                                o = e.match(Se) || []; t = o[r++];)
                                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = U(this),
                                t && Ee.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + U(n) + " ").replace(mt, " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var vt = /\r/g
                , yt = /[\x20\t\r\n\f]+/g;
            ue.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    {
                        if (arguments.length)
                            return r = ue.isFunction(e),
                                this.each(function (n) {
                                    var i;
                                    1 === this.nodeType && (i = r ? e.call(this, n, ue(this).val()) : e,
                                        null == i ? i = "" : "number" == typeof i ? i += "" : ue.isArray(i) && (i = ue.map(i, function (e) {
                                            return null == e ? "" : e + ""
                                        })),
                                        t = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()],
                                        t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                                });
                        if (i)
                            return t = ue.valHooks[i.type] || ue.valHooks[i.nodeName.toLowerCase()],
                                t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                                    "string" == typeof n ? n.replace(vt, "") : null == n ? "" : n)
                    }
                }
            }),
                ue.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = ue.find.attr(e, "value");
                                return null != t ? t : ue.trim(ue.text(e)).replace(yt, " ")
                            }
                        },
                        select: {
                            get: function (e) {
                                for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++)
                                    if (n = r[l],
                                        (n.selected || l === i) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ue.nodeName(n.parentNode, "optgroup"))) {
                                        if (t = ue(n).val(),
                                            o)
                                            return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function (e, t) {
                                for (var n, r, i = e.options, o = ue.makeArray(t), s = i.length; s--;)
                                    r = i[s],
                                        (r.selected = ue.inArray(ue.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                    o
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
                trigger: function (e, t, r, i) {
                    var o, s, a, l, u, c, p, f = [r || Z], d = se.call(e, "type") ? e.type : e, h = se.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = a = r = r || Z,
                        3 !== r.nodeType && 8 !== r.nodeType && !bt.test(d + ue.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
                            d = h.shift(),
                            h.sort()),
                            u = d.indexOf(":") < 0 && "on" + d,
                            e = e[ue.expando] ? e : new ue.Event(d, "object" == typeof e && e),
                            e.isTrigger = i ? 2 : 3,
                            e.namespace = h.join("."),
                            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            e.result = void 0,
                            e.target || (e.target = r),
                            t = null == t ? [e] : ue.makeArray(t, [e]),
                            p = ue.event.special[d] || {},
                            i || !p.trigger || p.trigger.apply(r, t) !== !1)) {
                        if (!i && !p.noBubble && !ue.isWindow(r)) {
                            for (l = p.delegateType || d,
                                bt.test(l + d) || (s = s.parentNode); s; s = s.parentNode)
                                f.push(s),
                                    a = s;
                            a === (r.ownerDocument || Z) && f.push(a.defaultView || a.parentWindow || n)
                        }
                        for (o = 0; (s = f[o++]) && !e.isPropagationStopped();)
                            e.type = o > 1 ? l : p.bindType || d,
                                c = (Ee.get(s, "events") || {})[e.type] && Ee.get(s, "handle"),
                                c && c.apply(s, t),
                                c = u && s[u],
                                c && c.apply && je(s) && (e.result = c.apply(s, t),
                                    e.result === !1 && e.preventDefault());
                        return e.type = d,
                            i || e.isDefaultPrevented() || p._default && p._default.apply(f.pop(), t) !== !1 || !je(r) || u && ue.isFunction(r[d]) && !ue.isWindow(r) && (a = r[u],
                                a && (r[u] = null),
                                ue.event.triggered = d,
                                r[d](),
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
                                , i = Ee.access(r, t);
                            i || r.addEventListener(e, n, !0),
                                Ee.access(r, t, (i || 0) + 1)
                        },
                        teardown: function () {
                            var r = this.ownerDocument || this
                                , i = Ee.access(r, t) - 1;
                            i ? Ee.access(r, t, i) : (r.removeEventListener(e, n, !0),
                                Ee.remove(r, t))
                        }
                    }
                });
            var xt = n.location
                , wt = ue.now()
                , Tt = /\?/;
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
            var Ct = /#.*$/
                , Nt = /([?&])_=[^&]*/
                , St = /^(.*?):[ \t]*([^\r\n]*)$/gm
                , kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                , Lt = /^(?:GET|HEAD)$/
                , jt = /^\/\//
                , Et = {}
                , Dt = {}
                , At = "*/".concat("*")
                , qt = Z.createElement("a");
            qt.href = xt.href,
                ue.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: xt.href,
                        type: "GET",
                        isLocal: kt.test(xt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": At,
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
                        return t ? V(V(e, ue.ajaxSettings), t) : V(ue.ajaxSettings, e)
                    },
                    ajaxPrefilter: z(Et),
                    ajaxTransport: z(Dt),
                    ajax: function (e, t) {
                        function r(e, t, r, a) {
                            var u, p, y, b, w, C = t;
                            2 !== x && (x = 2,
                                l && n.clearTimeout(l),
                                i = void 0,
                                s = a || "",
                                T.readyState = e > 0 ? 4 : 0,
                                u = e >= 200 && 300 > e || 304 === e,
                                r && (b = Y(f, T, r)),
                                b = G(f, b, T, u),
                                u ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"),
                                    w && (ue.lastModified[o] = w),
                                    w = T.getResponseHeader("etag"),
                                    w && (ue.etag[o] = w)),
                                    204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                                        p = b.data,
                                        y = b.error,
                                        u = !y)) : (y = C,
                                            !e && C || (C = "error",
                                                0 > e && (e = 0))),
                                T.status = e,
                                T.statusText = (t || C) + "",
                                u ? g.resolveWith(d, [p, C, T]) : g.rejectWith(d, [T, C, y]),
                                T.statusCode(v),
                                v = void 0,
                                c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? p : y]),
                                m.fireWith(d, [T, C]),
                                c && (h.trigger("ajaxComplete", [T, f]),
                                    --ue.active || ue.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var i, o, s, a, l, u, c, p, f = ue.ajaxSetup({}, t), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? ue(d) : ue.event, g = ue.Deferred(), m = ue.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === x) {
                                    if (!a)
                                        for (a = {}; t = St.exec(s);)
                                            a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return 2 === x ? s : null
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return x || (e = b[n] = b[n] || e,
                                    y[e] = t),
                                    this
                            },
                            overrideMimeType: function (e) {
                                return x || (f.mimeType = e),
                                    this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > x)
                                        for (t in e)
                                            v[t] = [v[t], e[t]];
                                    else
                                        T.always(e[T.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || w;
                                return i && i.abort(t),
                                    r(0, t),
                                    this
                            }
                        };
                        if (g.promise(T).complete = m.add,
                            T.success = T.done,
                            T.error = T.fail,
                            f.url = ((e || f.url || xt.href) + "").replace(Ct, "").replace(jt, xt.protocol + "//"),
                            f.type = t.method || t.type || f.method || f.type,
                            f.dataTypes = ue.trim(f.dataType || "*").toLowerCase().match(Se) || [""],
                            null == f.crossDomain) {
                            u = Z.createElement("a");
                            try {
                                u.href = f.url,
                                    u.href = u.href,
                                    f.crossDomain = qt.protocol + "//" + qt.host != u.protocol + "//" + u.host
                            } catch (C) {
                                f.crossDomain = !0
                            }
                        }
                        if (f.data && f.processData && "string" != typeof f.data && (f.data = ue.param(f.data, f.traditional)),
                            X(Et, f, t, T),
                            2 === x)
                            return T;
                        c = ue.event && f.global,
                            c && 0 === ue.active++ && ue.event.trigger("ajaxStart"),
                            f.type = f.type.toUpperCase(),
                            f.hasContent = !Lt.test(f.type),
                            o = f.url,
                            f.hasContent || (f.data && (o = f.url += (Tt.test(o) ? "&" : "?") + f.data,
                                delete f.data),
                                f.cache === !1 && (f.url = Nt.test(o) ? o.replace(Nt, "$1_=" + wt++) : o + (Tt.test(o) ? "&" : "?") + "_=" + wt++)),
                            f.ifModified && (ue.lastModified[o] && T.setRequestHeader("If-Modified-Since", ue.lastModified[o]),
                                ue.etag[o] && T.setRequestHeader("If-None-Match", ue.etag[o])),
                            (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                            T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + At + "; q=0.01" : "") : f.accepts["*"]);
                        for (p in f.headers)
                            T.setRequestHeader(p, f.headers[p]);
                        if (f.beforeSend && (f.beforeSend.call(d, T, f) === !1 || 2 === x))
                            return T.abort();
                        w = "abort";
                        for (p in {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            T[p](f[p]);
                        if (i = X(Dt, f, t, T)) {
                            if (T.readyState = 1,
                                c && h.trigger("ajaxSend", [T, f]),
                                2 === x)
                                return T;
                            f.async && f.timeout > 0 && (l = n.setTimeout(function () {
                                T.abort("timeout")
                            }, f.timeout));
                            try {
                                x = 1,
                                    i.send(y, r)
                            } catch (C) {
                                if (!(2 > x))
                                    throw C;
                                r(-1, C)
                            }
                        } else
                            r(-1, "No Transport");
                        return T
                    },
                    getJSON: function (e, t, n) {
                        return ue.get(e, t, n, "json")
                    },
                    getScript: function (e, t) {
                        return ue.get(e, void 0, t, "script")
                    }
                }),
                ue.each(["get", "post"], function (e, t) {
                    ue[t] = function (e, n, r, i) {
                        return ue.isFunction(n) && (i = i || r,
                            r = n,
                            n = void 0),
                            ue.ajax(ue.extend({
                                url: e,
                                type: t,
                                dataType: i,
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
            var Ht = /%20/g
                , Pt = /\[\]$/
                , Rt = /\r?\n/g
                , Ot = /^(?:submit|button|image|reset|file)$/i
                , Mt = /^(?:input|select|textarea|keygen)/i;
            ue.param = function (e, t) {
                var n, r = [], i = function (e, t) {
                    t = ue.isFunction(t) ? t() : null == t ? "" : t,
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = ue.ajaxSettings && ue.ajaxSettings.traditional),
                    ue.isArray(e) || e.jquery && !ue.isPlainObject(e))
                    ue.each(e, function () {
                        i(this.name, this.value)
                    });
                else
                    for (n in e)
                        J(n, e[n], t, i);
                return r.join("&").replace(Ht, "+")
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
                            return this.name && !ue(this).is(":disabled") && Mt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Me.test(e))
                        }).map(function (e, t) {
                            var n = ue(this).val();
                            return null == n ? null : ue.isArray(n) ? ue.map(n, function (e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Rt, "\r\n")
                                }
                            }) : {
                                    name: t.name,
                                    value: n.replace(Rt, "\r\n")
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
            var Ft = {
                0: 200,
                1223: 204
            }
                , $t = ue.ajaxSettings.xhr();
            ae.cors = !!$t && "withCredentials" in $t,
                ae.ajax = $t = !!$t,
                ue.ajaxTransport(function (e) {
                    var t, r;
                    return ae.cors || $t && !e.crossDomain ? {
                        send: function (i, o) {
                            var s, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                for (s in e.xhrFields)
                                    a[s] = e.xhrFields[s];
                            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                                e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (s in i)
                                a.setRequestHeader(s, i[s]);
                            t = function (e) {
                                return function () {
                                    t && (t = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
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
                            send: function (r, i) {
                                t = ue("<script>").prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function (e) {
                                    t.remove(),
                                        n = null,
                                        e && i("error" === e.type ? 404 : 200, e.type)
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
            var Bt = []
                , It = /(=)\?(?=&|$)|\?\?/;
            ue.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Bt.pop() || ue.expando + "_" + wt++;
                    return this[e] = !0,
                        e
                }
            }),
                ue.ajaxPrefilter("json jsonp", function (e, t, r) {
                    var i, o, s, a = e.jsonp !== !1 && (It.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
                    return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ue.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        a ? e[a] = e[a].replace(It, "$1" + i) : e.jsonp !== !1 && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                        e.converters["script json"] = function () {
                            return s || ue.error(i + " was not called"),
                                s[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = n[i],
                        n[i] = function () {
                            s = arguments
                        }
                        ,
                        r.always(function () {
                            void 0 === o ? ue(n).removeProp(i) : n[i] = o,
                                e[i] && (e.jsonpCallback = t.jsonpCallback,
                                    Bt.push(i)),
                                s && ue.isFunction(o) && o(s[0]),
                                s = o = void 0
                        }),
                        "script") : void 0
                }),
                ue.parseHTML = function (e, t, n) {
                    if (!e || "string" != typeof e)
                        return null;
                    "boolean" == typeof t && (n = t,
                        t = !1),
                        t = t || Z;
                    var r = ye.exec(e)
                        , i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = m([e], t, i),
                        i && i.length && ue(i).remove(),
                        ue.merge([], r.childNodes))
                }
                ;
            var Wt = ue.fn.load;
            ue.fn.load = function (e, t, n) {
                if ("string" != typeof e && Wt)
                    return Wt.apply(this, arguments);
                var r, i, o, s = this, a = e.indexOf(" ");
                return a > -1 && (r = ue.trim(e.slice(a)),
                    e = e.slice(0, a)),
                    ue.isFunction(t) ? (n = t,
                        t = void 0) : t && "object" == typeof t && (i = "POST"),
                    s.length > 0 && ue.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done(function (e) {
                        o = arguments,
                            s.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
                    }).always(n && function (e, t) {
                        s.each(function () {
                            n.apply(this, o || [e.responseText, t, e])
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
                        var r, i, o, s, a, l, u, c = ue.css(e, "position"), p = ue(e), f = {};
                        "static" === c && (e.style.position = "relative"),
                            a = p.offset(),
                            o = ue.css(e, "top"),
                            l = ue.css(e, "left"),
                            u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1,
                            u ? (r = p.position(),
                                s = r.top,
                                i = r.left) : (s = parseFloat(o) || 0,
                                    i = parseFloat(l) || 0),
                            ue.isFunction(t) && (t = t.call(e, n, ue.extend({}, a))),
                            null != t.top && (f.top = t.top - a.top + s),
                            null != t.left && (f.left = t.left - a.left + i),
                            "using" in t ? t.using.call(e, f) : p.css(f)
                    }
                },
                ue.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function (t) {
                                ue.offset.setOffset(this, e, t)
                            });
                        var t, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        }, o = r && r.ownerDocument;
                        if (o)
                            return t = o.documentElement,
                                ue.contains(t, r) ? (i = r.getBoundingClientRect(),
                                    n = Q(o),
                                {
                                    top: i.top + n.pageYOffset - t.clientTop,
                                    left: i.left + n.pageXOffset - t.clientLeft
                                }) : i
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
                        return Le(this, function (e, r, i) {
                            var o = Q(e);
                            return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                        }, e, r, arguments.length)
                    }
                }),
                ue.each(["top", "left"], function (e, t) {
                    ue.cssHooks[t] = A(ae.pixelPosition, function (e, n) {
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
                        ue.fn[r] = function (r, i) {
                            var o = arguments.length && (n || "boolean" != typeof r)
                                , s = n || (r === !0 || i === !0 ? "margin" : "border");
                            return Le(this, function (t, n, r) {
                                var i;
                                return ue.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ue.css(t, n, s) : ue.style(t, n, r, s)
                            }, t, o ? r : void 0, o, null)
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
                i = function () {
                    return ue
                }
                    .apply(t, r),
                !(void 0 !== i && (e.exports = i));
            var _t = n.jQuery
                , Ut = n.$;
            return ue.noConflict = function (e) {
                return n.$ === ue && (n.$ = Ut),
                    e && n.jQuery === ue && (n.jQuery = _t),
                    ue
            }
                ,
                o || (n.jQuery = n.$ = ue),
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
        (function (t, r) {
            if (n(6),
                "undefined" == typeof t)
                throw new Error("ComboBox's JavaScript requires jQuery");
            var i = {
                CHANGE: "change",
                VALUE_SELECT: "valueSelect"
            }
                , o = function (e, t) {
                    this.$select = r('<select aria-label="' + t.ariaLabel + '" class="combobox"></select>'),
                        this.options = t;
                    for (var n = 0; n < t.listOptions.length; n++) {
                        var o = t.listOptions[n]
                            , s = r('<option value="' + o.value + '" aria-label="' + o.ariaLabel + '">' + o.htmlText + "</option>");
                        n === t.selectedIndex && s.prop("selected", !0),
                            this.$select.append(s)
                    }
                    this.selectedValue = this.getSelectedValue(),
                        this.$select.change(function (e) {
                            var t = this.getSelectedValue();
                            t !== this.selectedValue && (this.selectedValue = t,
                                r(this).trigger(i.VALUE_SELECT, t))
                        }
                            .bind(this)),
                        e.append(this.$select)
                };
            o.prototype.getSelectedValue = function () {
                return Number(this.$select.find("option:selected").attr("value"))
            }
                ,
                o.prototype.disable = function () {
                    this.$select.prop("disabled", !0),
                        this.$select.attr("aria-label", this.options.ariaLabelDisabled)
                }
                ,
                o.prototype.enable = function () {
                    this.$select.prop("disabled", !1),
                        this.$select.attr("aria-label", this.options.ariaLabel)
                }
                ,
                o.Event = i,
                e.exports = o
        }
        ).call(t, n(3), n(3))
    }
    , function (e, t, n) {
        var r = n(7);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(9)(r, {});
        r.locals && (e.exports = r.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(8)(),
            t.push([e.id, ".combobox{height:25px;font-size:90%}.combobox:focus{outline:none;border:3px dotted #000}", ""])
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
                    for (var r = {}, i = 0; i < this.length; i++) {
                        var o = this[i][0];
                        "number" == typeof o && (r[o] = !0)
                    }
                    for (i = 0; i < t.length; i++) {
                        var s = t[i];
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
                    , i = d[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++)
                        i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++)
                        i.parts.push(u(r.parts[o], t))
                } else {
                    for (var s = [], o = 0; o < r.parts.length; o++)
                        s.push(u(r.parts[o], t));
                    d[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function i(e) {
            for (var t = [], n = {}, r = 0; r < e.length; r++) {
                var i = e[r]
                    , o = i[0]
                    , s = i[1]
                    , a = i[2]
                    , l = i[3]
                    , u = {
                        css: s,
                        media: a,
                        sourceMap: l
                    };
                n[o] ? n[o].parts.push(u) : t.push(n[o] = {
                    id: o,
                    parts: [u]
                })
            }
            return t
        }
        function o(e, t) {
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
                o(e, t),
                t
        }
        function l(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet",
                o(e, t),
                t
        }
        function u(e, t) {
            var n, r, i;
            if (t.singleton) {
                var o = y++;
                n = v || (v = a(t)),
                    r = c.bind(null, n, o, !1),
                    i = c.bind(null, n, o, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t),
                    r = f.bind(null, n),
                    i = function () {
                        s(n),
                            n.href && URL.revokeObjectURL(n.href)
                    }
                ) : (n = a(t),
                    r = p.bind(null, n),
                    i = function () {
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
                        i()
                }
        }
        function c(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = x(t, i);
            else {
                var o = document.createTextNode(i)
                    , s = e.childNodes;
                s[t] && e.removeChild(s[t]),
                    s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
            }
        }
        function p(e, t) {
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
        function f(e, t) {
            var n = t.css
                , r = t.sourceMap;
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var i = new Blob([n], {
                type: "text/css"
            })
                , o = e.href;
            e.href = URL.createObjectURL(i),
                o && URL.revokeObjectURL(o)
        }
        var d = {}
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
            , y = 0
            , b = [];
        e.exports = function (e, t) {
            t = t || {},
                "undefined" == typeof t.singleton && (t.singleton = g()),
                "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = i(e);
            return r(n, t),
                function (e) {
                    for (var o = [], s = 0; s < n.length; s++) {
                        var a = n[s]
                            , l = d[a.id];
                        l.refs--,
                            o.push(l)
                    }
                    if (e) {
                        var u = i(e);
                        r(u, t)
                    }
                    for (var s = 0; s < o.length; s++) {
                        var l = o[s];
                        if (0 === l.refs) {
                            for (var c = 0; c < l.parts.length; c++)
                                l.parts[c]();
                            delete d[l.id]
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
    , [20, 11], function (e, t, n) {
        t = e.exports = n(8)(),
            t.push([e.id, ".applet{min-width:870px}.applet>div{display:inline-block;vertical-align:top}.applet .info{min-width:585px}.applet .canvas{min-width:300px}.canvas{padding:10px 0}.legend .color{width:20px;height:20px;margin-right:10px}.combobox,.legend .color,.shutter{display:inline-block;vertical-align:middle}.combobox,.shutter{float:right;width:240px}.comboboxes>p{line-height:25px}", ""])
    }
    , [20, 13], function (e, t, n) {
        t = e.exports = n(8)(),
            t.push([e.id, "body{font-family:Arial,sans-serif}.header,h1{color:#101027;font-size:200%;font-weight:400;margin:.67em 0}.focusable,canvas{border:3px solid transparent}.focusable:focus,button:focus,canvas:focus{outline:none;border:3px dotted #000}.text,p{font-size:100%;margin:1em 0}button{font-size:80%;height:25px;background:linear-gradient(#fff,#f0f0f0);border:1px solid #adadad;box-sizing:border-box}button:disabled{background:#d3d3d3;border:1px solid #bcbcbc}button::-moz-focus-inner{border:0}.navigation{width:0;height:0;padding:0;margin:0;overflow:hidden}", ""])
    }
    , function (e, t) {
        e.exports = [{
            listOptions: [{
                htmlText: "非持久连接",
                value: 0
            }, {
                htmlText: "具有并行连接的非持久连接",
                value: 1
            }, {
                htmlText: "无流水线的持久连接",
                value: 2
            }, {
                htmlText: "使用流水线的持久连接",
                value: 3
            }],
            selectedIndex: 0,
            text: "选择连接类型",
            ariaLabel: "选择连接类型。选择选项将更新交互式动画。"
        }, {
            listOptions: [{
                htmlText: "1",
                ariaLabel: "1",
                value: 0
            }, {
                htmlText: "2",
                ariaLabel: "2",
                value: 1
            }, {
                htmlText: "3",
                ariaLabel: "3",
                value: 2
            }, {
                htmlText: "4",
                ariaLabel: "4",
                value: 3
            }],
            selectedIndex: 0,
            text: "选择并行连接数",
            ariaLabel: "Choose number of parallel connections. Selecting options will update the interactive animation.",
            ariaLabelDisabled: "This parameter is available for Non-persistent connections with parallel connection only"
        }, {
            listOptions: [{
                htmlText: "1",
                ariaLabel: "1",
                value: 0
            }, {
                htmlText: "2",
                ariaLabel: "2",
                value: 1
            }, {
                htmlText: "3",
                ariaLabel: "3",
                value: 2
            }, {
                htmlText: "4",
                ariaLabel: "4",
                value: 3
            }],
            selectedIndex: 0,
            text: "选择对象数",
            ariaLabel: "Choose number of objects. Selecting options will update the interactive animation."
        }, {
            listOptions: [{
                htmlText: "0",
                ariaLabel: "Zero round-trip times",
                value: 0
            }, {
                htmlText: "0.25 RTT",
                ariaLabel: "0.25 round-trip times",
                value: 1
            }, {
                htmlText: "0.50 RTT",
                ariaLabel: "0.5 round-trip times",
                value: 2
            }, {
                htmlText: "1.00 RTT",
                ariaLabel: "1 round-trip time",
                value: 3
            }, {
                htmlText: "2.00 RTT",
                ariaLabel: "2 round-trip times",
                value: 4
            }],
            selectedIndex: 0,
            text: "选择每对象传输延迟（RTT）",
            ariaLabel: "Choose per-object transmission delay (in RTTs). Selecting options will update the interactive animation."
        }]
    }
    , function (e, t) {
        var n = {
            all: "%all%",
            tcp: "%tcp%",
            toBe: "%toBe%",
            obj: "%obj%",
            end: "%plural%"
        };
        e.exports = {
            navigation: "In this interactive animation, you can explore HTTP delays for the retrieval of a Web page depending on several parameters. The following options are available, listed on the left: the connection type, the number of parallel connections, the number of HTML objects, and the transmission delay per object. As you vary these parameters, the connection schema, which is placed on the right, changes. The schema consists of the two oblong vertical rectangles. The left one is labeled Client and the right one is labeled Server. Each request response pair is represented by a triangle with two equal sides, rotated by 90 degrees clockwise. The bases of these triangles are drawn with thick lines and placed over the Client side rectangle, showing the delay for each request. The legs of each triangle are drawn with thin lines. They converge on the Server side rectangle and represent request and response respectively.",
            delayUnits: " round trip times",
            legend: ["With the parameters set, the delay due to TCP connection establishment equals ", "With the parameters set, the delay due to HTML page request equals ", "With the parameters set, the delay due to object request equals ", "With the parameters set, the transmission delay equals "],
            animation: {
                placeholders: n,
                toBe: ["is", "are"],
                plural: ["", "s"],
                main: "There are " + n.all + " of request response pairs in total. " + n.tcp + " of them " + n.toBe + " due to TCP connection establishment, one is for HTML page request, and " + n.obj + " " + n.toBe + " for object request" + n.end + ". ",
                nonPersistent: "Every second request response pair is for the TCP connection establishment. ",
                delay: ["Legs of the triangles corresponding to the server responses on HTML page and object requests are equal to the other legs of these triangles representing the respective client requests. ", "Legs of the triangles corresponding to the server responses on HTML page and object requests are twice thicker now than the legs of these triangles representing the respective client requests. ", "Legs of the triangles corresponding to the server responses on HTML page and object requests are three times thicker now than the legs of these triangles representing the respective client requests. ", "Legs of the triangles corresponding to the server responses on HTML page and object requests are four times thicker now than the legs of these triangles representing the respective client requests. ", "Legs of the triangles corresponding to the server responses on HTML page and object requests are a lot thicker now than the legs of these triangles representing the respective client requests. "],
                rrt: "Total round trip time equals "
            }
        }
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
    , function (e, t) {
        e.exports = {
            black: "#000000",
            green: "#056705",
            red: "#C80A17",
            blue: "rgb(8,8,150)",
            yellow: "rgb(242,215,180)"
        }
    }
    , function (e, t) {
        e.exports = `
    <div class="content">
        <h1>HTTP延迟评估</h1>
        <p>
            这个交互式动画直观地演示了检索由一个基本HTML页面和多个对象组成的Web页面的HTTP延迟。
            交互式动画假定所有对象的大小相同（包括HTML对象）。
            用户可以做出某些选择，包括对象的数量（除了HTML对象）和RTT的传输延迟。
        </p>
        <p>
            根据这些用户输入，交互动画显示了根据RTT的总响应时间。
            此外，交互动画提供从请求网页的时刻到获得完整网页的时间的总响应时间。
        </p>
        <p id="navigation" class="navigation"></p>
        <div class="applet">
            <div class="info">
                <div class="comboboxes"></div>
                <hr>
                <p>总延误（RTT）是：<span class="_totalDelay"></span></p>
                <hr>
                <div class="legend">
                    <p> <span class="color"></span> 由于建立TCP连接而导致的延迟 (TCP) </p>
                    <p> <span class="color"></span> HTML页面请求导致的延迟 (HTML) </p>
                    <p> <span class="color"></span> 对象请求导致的延迟 (OR) </p>
                    <p> <span class="color"></span> 传输延迟 (TD) </p>
                </div>
            </div>
            <div class="canvas">
                <canvas width="300" height="750"></canvas>
            </div>
        </div>
    </div>`
    }
    , function (e, t) {
        var n = [0, 10, 20, 40, 80]
            , r = function (e, t, n, r) {
                this.objectsNumber = n || 1,
                    this.parallelConnectionsNumber = t || 1,
                    this.delays = [0, 1, 0, 0],
                    this.updateDelay(r),
                    this.updateConnectionType(e)
            };
        r.prototype.updateConnectionType = function (e) {
            this.connectionType = e || 0,
                1 === this.connectionType ? this.isParallel = !0 : this.isParallel = !1,
                0 === this.connectionType || 1 === this.connectionType ? this.isNonPersistent = !0 : this.isNonPersistent = !1,
                this.updateTotalDelay()
        }
            ,
            r.prototype.updateParallelConnectionsNumber = function (e) {
                this.parallelConnectionsNumber = e + 1,
                    this.updateTotalDelay()
            }
            ,
            r.prototype.updateobjectsNumber = function (e) {
                this.objectsNumber = e + 1,
                    this.updateTotalDelay()
            }
            ,
            r.prototype.updateDelay = function (e) {
                this.serverDelay = n[e || 0],
                    this.updateTotalDelay()
            }
            ,
            r.prototype.updateTotalDelay = function () {
                var e = this.isNonPersistent ? 2 : 1
                    , t = this.getTransmissionsNumber()
                    , n = this.getDelay();
                this.totalDelay = 2 + this.getDelay(),
                    this.delays[0] = this.isNonPersistent ? t + 1 : 1,
                    this.delays[2] = t,
                    this.delays[3] = n * (t + 1),
                    this.transmissionSegmentsNumber = this.delays[0] + this.delays[1] + this.delays[2];
                for (var r = 0; t > r; r++)
                    this.totalDelay += e + n
            }
            ,
            r.prototype.getDelay = function () {
                return .025 * this.serverDelay
            }
            ,
            r.prototype.getTransmissionsNumber = function () {
                return this.isParallel ? this.getR() : 3 === this.connectionType ? 1 : this.objectsNumber
            }
            ,
            r.prototype.getR = function () {
                var e;
                return e = this.parallelConnectionsNumber >= this.objectsNumber ? 1 : this.objectsNumber % this.parallelConnectionsNumber === 0 ? this.objectsNumber / this.parallelConnectionsNumber : Math.ceil(this.objectsNumber / this.parallelConnectionsNumber)
            }
            ,
            e.exports = r
    }
    , function (e, t, n, r) {
        var i = n(r);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(9)(i, {});
        i.locals && (e.exports = i.locals)
    }
]));
