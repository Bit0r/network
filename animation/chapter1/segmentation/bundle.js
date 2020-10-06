!function (e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t),
            r.loaded = !0,
            r.exports
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
            , r = n(25);
        new i(new r)
    }
    , function (e, t, n) {
        (function (t) {
            var r = n(4)
                , o = n(5)
                , a = (n(10),
                    n(13));
            n(14),
                n(16),
                n(18),
                n(20);
            var s = n(22)
                , l = n(23)
                , c = r(n(24))
                , u = function (e, n, i) {
                    var r = Date.now().toString(16)
                        , a = t('<p id="' + r + '" aria-label="' + e.ariaLabel + '">' + e.label + "</p>");
                    n.append(a);
                    var s = new o(a, e);
                    return s.$select.attr("aria-labelledby", r),
                        t(s).on(o.Event.VALUE_SELECT, i),
                        s
                }
                , d = function (e, t) {
                    var n = t.indexOf(e);
                    return n > 0 ? [t[n - 1], t[n + 1]] : void 0
                }
                , p = function (e, t, n) {
                    var i = "";
                    return i = e.isEmpty ? n : t.replace("{{receive}}", e.receiveBufferAmount).replace("{{internal}}", e.internalBufferAmount).replace("{{transmit}}", e.transmitBufferAmount)
                }
                , h = function (e) {
                    var n;
                    this.model = e,
                        this.viewElements = [],
                        this.voice = new a(5);
                    var i = c.querySelector("div").cloneNode(!0);
                    for (document.body.appendChild(i),
                        t(i).find(".navigation").text(l.ada.navigation),
                        this.$animationNode = t(i).find(".graphic"),
                        n = 0; n < l.texts.length; n++) {
                        var r = l.texts[n]
                            , o = t(r.selector);
                        o.html(r.text),
                            o.attr("aria-label", r.alt)
                    }
                    var d = t(".applet .visualisation .view");
                    for (n = 0; n < this.model.device_order.length; n++) {
                        var i = this.model.network_device[this.model.device_order[n]]
                            , p = new i.viewClass(i);
                        this.viewElements.push(p),
                            d.append(p.node)
                    }
                    u(s.MessageComboBox, t(".applet .combocontrols .message"), this.changeMessageSizeSelector.bind(this)),
                        u(s.PacketComboBox, t(".applet .combocontrols .packet"), this.changePackageSizeSelector.bind(this)),
                        t(".applet .slider .body").slider({
                            min: 1,
                            max: 5,
                            step: .1,
                            initialValue: 3,
                            ariaLabel: l.ada.slider,
                            onChange: this.speedSlider.bind(this)
                        }),
                        this.$start = t(".controls .start"),
                        this.$stop = t(".controls .stop"),
                        this.$pause = t(".controls .pause"),
                        this.$resume = t(".controls .resume"),
                        this.$L1 = t(".applet .checkboxes .checkbox1 input"),
                        this.$L2 = t(".applet .checkboxes .checkbox2 input"),
                        this.$L3 = t(".applet .checkboxes .checkbox3 input"),
                        this.$time = t(".applet .time span"),
                        this.$start.on("click", this.startButton.bind(this)),
                        this.$stop.on("click", this.stopButton.bind(this)),
                        this.$pause.on("click", this.pauseButton.bind(this)),
                        this.$resume.on("click", this.resumeButton.bind(this)),
                        this.$L1.on("change", this.changeLinkStatus.bind(this)),
                        this.$L2.on("change", this.changeLinkStatus.bind(this)),
                        this.$L3.on("change", this.changeLinkStatus.bind(this)),
                        this.model.setMessageSize(16),
                        this.model.setPacketSize(5),
                        this.model.setInitialState(),
                        this.$stop.prop("disabled", !0),
                        this.$pause.prop("disabled", !0),
                        this.$resume.prop("disabled", !0),
                        this.draw(),
                        this.updateAnimationAltText()
                };
            h.prototype = {
                draw: function () {
                    for (i = 0; i < this.viewElements.length; i++)
                        this.viewElements[i].draw()
                },
                startAnimation: function () {
                    this.timeout = setTimeout(1e3 * this.model.simulation_speed, this.animateStep.bind(this))
                },
                reset: function () {
                    this.model.setInitialState(),
                        this.draw(),
                        this.updateAnimationAltText()
                },
                animateStep: function () {
                    this.model.is_end() && (this.model.status = this.model.ENDED,
                        this.stopSumilation()),
                        this.model.status === this.model.RUNNED && (this.model.nextStep(),
                            this.$time.text(this.model.simulation_time),
                            setTimeout(this.animateStep.bind(this), 1e3 / this.model.simulation_speed)),
                        this.draw()
                },
                startButton: function () {
                    this.model.status !== this.model.ENDED && this.model.status !== this.model.STOPPED || this.reset(),
                        this.model.status = this.model.RUNNED,
                        setTimeout(this.animateStep.bind(this), 1e3 / this.model.simulation_speed),
                        this.$stop.prop("disabled", !1),
                        this.$start.prop("disabled", !0),
                        this.$resume.prop("disabled", !0),
                        this.$pause.prop("disabled", !1),
                        this.$pause.focus()
                },
                stopButton: function () {
                    this.model.status = this.model.STOPPED,
                        this.$stop.prop("disabled", !0),
                        this.$start.prop("disabled", !1),
                        this.$resume.prop("disabled", !0),
                        this.$pause.prop("disabled", !0),
                        this.voice.speak(this.getOnStopAltText())
                },
                pauseButton: function () {
                    this.model.status = this.model.PAUSED,
                        this.$stop.prop("disabled", !0),
                        this.$start.prop("disabled", !0),
                        this.$resume.prop("disabled", !1),
                        this.$pause.prop("disabled", !0),
                        this.voice.speak(this.getOnPauseAltText()),
                        this.$resume.focus()
                },
                resumeButton: function () {
                    this.model.status = this.model.RUNNED,
                        setTimeout(this.animateStep.bind(this), 1e3 / this.model.simulation_speed),
                        this.$stop.prop("disabled", !1),
                        this.$start.prop("disabled", !0),
                        this.$resume.prop("disabled", !0),
                        this.$pause.prop("disabled", !1),
                        this.$pause.focus()
                },
                stopSumilation: function () {
                    this.$stop.prop("disabled", !0),
                        this.$start.prop("disabled", !1),
                        this.$resume.prop("disabled", !0),
                        this.$pause.prop("disabled", !0),
                        this.voice.speak(this.getOnFullStopAltText())
                },
                speedSlider: function (e) {
                    this.model.simulation_speed = e
                },
                changeMessageSizeSelector: function (e, t) {
                    this.model.setMessageSize(t),
                        this.model.setInitialState(),
                        this.draw(),
                        this.updateAnimationAltText()
                },
                changePackageSizeSelector: function (e, t) {
                    this.model.setPacketSize(t),
                        this.model.setInitialState(),
                        this.draw(),
                        this.updateAnimationAltText()
                },
                changeLinkStatus: function (e) {
                    e.target.dataset.id && (this.model.network_device[e.target.dataset.id].active = e.target.checked),
                        this.draw(),
                        this.updateAnimationAltText()
                },
                updateAnimationAltText: function () {
                    var e = l.ada.animation1
                        , t = []
                        , n = [];
                    e += this.model.message_size <= this.model.package_size ? l.ada.animation2a.replace("{{message_size}}", this.model.message_size) : l.ada.animation2b.replace(/\{\{message_size\}\}/g, this.model.message_size).replace(/\{\{packet_size\}\}/g, this.model.package_size).replace("{{dif}}", this.model.message_size - this.model.package_size);
                    for (var i in this.model.network_device) {
                        var r = this.model.network_device[i];
                        r.active ? t.push(i) : r.level && n.push(i)
                    }
                    if (t.length) {
                        var o = d(t[0], this.model.device_order);
                        e += l.ada.animation3.replace("{{node_1}}", o[0]).replace("{{node_2}}", o[1]).replace("{{L_number}}", t[0]),
                            1 === t.length && (e += l.ada.animation4.replace("{{L_number1}}", n[0]).replace("{{L_number2}}", n[1])),
                            2 === t.length && (e += l.ada.animation5.replace("{{L_number1}}", t[1]).replace("{{L_number2}}", n[0])),
                            3 === t.length && (e += l.ada.animation6.replace("{{L_number1}}", t[1]).replace("{{L_number2}}", t[2]))
                    }
                    this.$animationNode.attr("aria-label", e)
                },
                getStatusAltText: function () {
                    var e = "";
                    return e += p(this.model.network_device.A, l.ada.pause2, l.ada.pause2b),
                        e += p(this.model.network_device.B, l.ada.pause3a, l.ada.pause3b),
                        e += p(this.model.network_device.C, l.ada.pause4, l.ada.pause4a),
                        e += p(this.model.network_device.D, l.ada.pause5a, l.ada.pause5b),
                        e += l.ada.pause6.replace("{{num}}", this.model.network_device.L1.amount).replace("{{order}}", "first"),
                        e += l.ada.pause6.replace("{{num}}", this.model.network_device.L2.amount).replace("{{order}}", "second"),
                        e += l.ada.pause6.replace("{{num}}", this.model.network_device.L3.amount).replace("{{order}}", "third ")
                },
                getOnPauseAltText: function () {
                    var e = l.ada.pause1.replace("{{num}}", this.model.simulation_time);
                    return e += this.getStatusAltText(),
                        e += l.ada.pause7
                },
                getOnStopAltText: function () {
                    var e = l.ada.stop1.replace("{{num}}", this.model.simulation_time);
                    return e += this.getStatusAltText(),
                        e += l.ada.stop3
                },
                getOnFullStopAltText: function () {
                    var e = l.ada.fullStop.replace("{{num}}", this.model.simulation_time);
                    return e += l.ada.stop2.replace("{{num}}", this.model.network_device.D.internalBufferAmount),
                        e += l.ada.stop3
                }
            },
                e.exports = h
        }
        ).call(t, n(3))
    }
    , function (e, t, n) {
        var i, r;
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
                    if (ye.test(t))
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
                return ce.each(e.match(Se) || [], function (e, n) {
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
            function p(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(_e, "-$&").toLowerCase(),
                        n = e.getAttribute(i),
                        "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : De.test(n) ? ce.parseJSON(n) : n
                        } catch (r) { }
                        $e.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function h(e, t, n, i) {
                var r, o = 1, a = 20, s = i ? function () {
                    return i.cur()
                }
                    : function () {
                        return ce.css(e, t, "")
                    }
                    , l = s(), c = n && n[3] || (ce.cssNumber[t] ? "" : "px"), u = (ce.cssNumber[t] || "px" !== c && +l) && je.exec(ce.css(e, t));
                if (u && u[3] !== c) {
                    c = c || u[3],
                        n = n || [],
                        u = +l || 1;
                    do
                        o = o || ".5",
                            u /= o,
                            ce.style(e, t, u + c);
                    while (o !== (o = s() / l) && 1 !== o && --a)
                }
                return n && (u = +u || +l || 0,
                    r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                    i && (i.unit = c,
                        i.start = u,
                        i.end = r)),
                    r
            }
            function f(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && ce.nodeName(e, t) ? ce.merge([e], n) : n
            }
            function g(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    Ne.set(e[n], "globalEval", !t || Ne.get(t[n], "globalEval"))
            }
            function m(e, t, n, i, r) {
                for (var o, a, s, l, c, u, d = t.createDocumentFragment(), p = [], h = 0, m = e.length; m > h; h++)
                    if (o = e[h],
                        o || 0 === o)
                        if ("object" === ce.type(o))
                            ce.merge(p, o.nodeType ? [o] : o);
                        else if (Be.test(o)) {
                            for (a = a || d.appendChild(t.createElement("div")),
                                s = (Re.exec(o) || ["", ""])[1].toLowerCase(),
                                l = Me[s] || Me._default,
                                a.innerHTML = l[1] + ce.htmlPrefilter(o) + l[2],
                                u = l[0]; u--;)
                                a = a.lastChild;
                            ce.merge(p, a.childNodes),
                                a = d.firstChild,
                                a.textContent = ""
                        } else
                            p.push(t.createTextNode(o));
                for (d.textContent = "",
                    h = 0; o = p[h++];)
                    if (i && ce.inArray(o, i) > -1)
                        r && r.push(o);
                    else if (c = ce.contains(o.ownerDocument, o),
                        a = f(d.appendChild(o), "script"),
                        c && g(a),
                        n)
                        for (u = 0; o = a[u++];)
                            qe.test(o.type || "") && n.push(o);
                return d
            }
            function v() {
                return !0
            }
            function b() {
                return !1
            }
            function y() {
                try {
                    return Z.activeElement
                } catch (e) { }
            }
            function x(e, t, n, i, r, o) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n,
                        n = void 0);
                    for (s in t)
                        x(e, s, n, i, t[s], o);
                    return e
                }
                if (null == i && null == r ? (r = n,
                    i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
                        i = void 0) : (r = i,
                            i = n,
                            n = void 0)),
                    r === !1)
                    r = b;
                else if (!r)
                    return e;
                return 1 === o && (a = r,
                    r = function (e) {
                        return ce().off(e),
                            a.apply(this, arguments)
                    }
                    ,
                    r.guid = a.guid || (a.guid = ce.guid++)),
                    e.each(function () {
                        ce.event.add(this, t, r, i, n)
                    })
            }
            function k(e, t) {
                return ce.nodeName(e, "table") && ce.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function w(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
            }
            function T(e) {
                var t = Ge.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function E(e, t) {
                var n, i, r, o, a, s, l, c;
                if (1 === t.nodeType) {
                    if (Ne.hasData(e) && (o = Ne.access(e),
                        a = Ne.set(t, o),
                        c = o.events)) {
                        delete a.handle,
                            a.events = {};
                        for (r in c)
                            for (n = 0,
                                i = c[r].length; i > n; n++)
                                ce.event.add(t, r, c[r][n])
                    }
                    $e.hasData(e) && (s = $e.access(e),
                        l = ce.extend({}, s),
                        $e.set(t, l))
                }
            }
            function S(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function C(e, t, n, i) {
                t = te.apply([], t);
                var r, o, a, s, l, c, u = 0, d = e.length, p = d - 1, h = t[0], g = ce.isFunction(h);
                if (g || d > 1 && "string" == typeof h && !se.checkClone && Xe.test(h))
                    return e.each(function (r) {
                        var o = e.eq(r);
                        g && (t[0] = h.call(this, r, o.html())),
                            C(o, t, n, i)
                    });
                if (d && (r = m(t, e[0].ownerDocument, !1, e, i),
                    o = r.firstChild,
                    1 === r.childNodes.length && (r = o),
                    o || i)) {
                    for (a = ce.map(f(r, "script"), w),
                        s = a.length; d > u; u++)
                        l = r,
                            u !== p && (l = ce.clone(l, !0, !0),
                                s && ce.merge(a, f(l, "script"))),
                            n.call(e[u], l, u);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument,
                            ce.map(a, T),
                            u = 0; s > u; u++)
                            l = a[u],
                                qe.test(l.type || "") && !Ne.access(l, "globalEval") && ce.contains(c, l) && (l.src ? ce._evalUrl && ce._evalUrl(l.src) : ce.globalEval(l.textContent.replace(Ye, "")))
                }
                return e
            }
            function L(e, t, n) {
                for (var i, r = t ? ce.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                    n || 1 !== i.nodeType || ce.cleanData(f(i)),
                        i.parentNode && (n && ce.contains(i.ownerDocument, i) && g(f(i, "script")),
                            i.parentNode.removeChild(i));
                return e
            }
            function A(e, t) {
                var n = ce(t.createElement(e)).appendTo(t.body)
                    , i = ce.css(n[0], "display");
                return n.detach(),
                    i
            }
            function N(e) {
                var t = Z
                    , n = Ke[e];
                return n || (n = A(e, t),
                    "none" !== n && n || (Je = (Je || ce("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                        t = Je[0].contentDocument,
                        t.write(),
                        t.close(),
                        n = A(e, t),
                        Je.detach()),
                    Ke[e] = n),
                    n
            }
            function $(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || et(e),
                    a = n ? n.getPropertyValue(t) || n[t] : void 0,
                    "" !== a && void 0 !== a || ce.contains(e.ownerDocument, e) || (a = ce.style(e, t)),
                    n && !se.pixelMarginRight() && Ze.test(a) && Qe.test(t) && (i = s.width,
                        r = s.minWidth,
                        o = s.maxWidth,
                        s.minWidth = s.maxWidth = s.width = a,
                        a = n.width,
                        s.width = i,
                        s.minWidth = r,
                        s.maxWidth = o),
                    void 0 !== a ? a + "" : a
            }
            function D(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function _(e) {
                if (e in st)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = at.length; n--;)
                    if (e = at[n] + t,
                        e in st)
                        return e
            }
            function H(e, t, n) {
                var i = je.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function j(e, t, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
                    "margin" === n && (a += ce.css(e, n + Oe[o], !0, r)),
                        i ? ("content" === n && (a -= ce.css(e, "padding" + Oe[o], !0, r)),
                            "margin" !== n && (a -= ce.css(e, "border" + Oe[o] + "Width", !0, r))) : (a += ce.css(e, "padding" + Oe[o], !0, r),
                                "padding" !== n && (a += ce.css(e, "border" + Oe[o] + "Width", !0, r)));
                return a
            }
            function O(e, t, n) {
                var i = !0
                    , r = "width" === t ? e.offsetWidth : e.offsetHeight
                    , o = et(e)
                    , a = "border-box" === ce.css(e, "boxSizing", !1, o);
                if (0 >= r || null == r) {
                    if (r = $(e, t, o),
                        (0 > r || null == r) && (r = e.style[t]),
                        Ze.test(r))
                        return r;
                    i = a && (se.boxSizingReliable() || r === e.style[t]),
                        r = parseFloat(r) || 0
                }
                return r + j(e, t, n || (a ? "border" : "content"), i, o) + "px"
            }
            function P(e, t) {
                for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++)
                    i = e[a],
                        i.style && (o[a] = Ne.get(i, "olddisplay"),
                            n = i.style.display,
                            t ? (o[a] || "none" !== n || (i.style.display = ""),
                                "" === i.style.display && Pe(i) && (o[a] = Ne.access(i, "olddisplay", N(i.nodeName)))) : (r = Pe(i),
                                    "none" === n && r || Ne.set(i, "olddisplay", r ? n : ce.css(i, "display"))));
                for (a = 0; s > a; a++)
                    i = e[a],
                        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
                return e
            }
            function z(e, t, n, i, r) {
                return new z.prototype.init(e, t, n, i, r)
            }
            function R() {
                return n.setTimeout(function () {
                    lt = void 0
                }),
                    lt = ce.now()
            }
            function q(e, t) {
                var n, i = 0, r = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                    n = Oe[i],
                        r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e),
                    r
            }
            function M(e, t, n) {
                for (var i, r = (F.tweeners[t] || []).concat(F.tweeners["*"]), o = 0, a = r.length; a > o; o++)
                    if (i = r[o].call(n, t, e))
                        return i
            }
            function B(e, t, n) {
                var i, r, o, a, s, l, c, u, d = this, p = {}, h = e.style, f = e.nodeType && Pe(e), g = Ne.get(e, "fxshow");
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
                    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                        c = ce.css(e, "display"),
                        u = "none" === c ? Ne.get(e, "olddisplay") || N(e.nodeName) : c,
                        "inline" === u && "none" === ce.css(e, "float") && (h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                        d.always(function () {
                            h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                        }));
                for (i in t)
                    if (r = t[i],
                        ut.exec(r)) {
                        if (delete t[i],
                            o = o || "toggle" === r,
                            r === (f ? "hide" : "show")) {
                            if ("show" !== r || !g || void 0 === g[i])
                                continue;
                            f = !0
                        }
                        p[i] = g && g[i] || ce.style(e, i)
                    } else
                        c = void 0;
                if (ce.isEmptyObject(p))
                    "inline" === ("none" === c ? N(e.nodeName) : c) && (h.display = c);
                else {
                    g ? "hidden" in g && (f = g.hidden) : g = Ne.access(e, "fxshow", {}),
                        o && (g.hidden = !f),
                        f ? ce(e).show() : d.done(function () {
                            ce(e).hide()
                        }),
                        d.done(function () {
                            var t;
                            Ne.remove(e, "fxshow");
                            for (t in p)
                                ce.style(e, t, p[t])
                        });
                    for (i in p)
                        a = M(f ? g[i] : 0, i, d),
                            i in g || (g[i] = a.start,
                                f && (a.end = a.start,
                                    a.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function I(e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (i = ce.camelCase(n),
                        r = t[i],
                        o = e[n],
                        ce.isArray(o) && (r = o[1],
                            o = e[n] = o[0]),
                        n !== i && (e[i] = o,
                            delete e[n]),
                        a = ce.cssHooks[i],
                        a && "expand" in a) {
                        o = a.expand(o),
                            delete e[i];
                        for (n in o)
                            n in e || (e[n] = o[n],
                                t[n] = r)
                    } else
                        t[i] = r
            }
            function F(e, t, n) {
                var i, r, o = 0, a = F.prefilters.length, s = ce.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (r)
                        return !1;
                    for (var t = lt || R(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++)
                        c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]),
                        1 > o && l ? n : (s.resolveWith(e, [c]),
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
                    startTime: lt || R(),
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
                        if (r)
                            return this;
                        for (r = !0; i > n; n++)
                            c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]),
                            s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                            this
                    }
                }), u = c.props;
                for (I(u, c.opts.specialEasing); a > o; o++)
                    if (i = F.prefilters[o].call(c, e, u, c.opts))
                        return ce.isFunction(i.stop) && (ce._queueHooks(c.elem, c.opts.queue).stop = ce.proxy(i.stop, i)),
                            i;
                return ce.map(u, M, c),
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
            function W(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t,
                        t = "*");
                    var i, r = 0, o = t.toLowerCase().match(Se) || [];
                    if (ce.isFunction(n))
                        for (; i = o[r++];)
                            "+" === i[0] ? (i = i.slice(1) || "*",
                                (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function U(e, t, n, i) {
                function r(s) {
                    var l;
                    return o[s] = !0,
                        ce.each(e[s] || [], function (e, s) {
                            var c = s(t, n, i);
                            return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                                r(c),
                                !1)
                        }),
                        l
                }
                var o = {}
                    , a = e === $t;
                return r(t.dataTypes[0]) || !o["*"] && r("*")
            }
            function X(e, t) {
                var n, i, r = ce.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && ce.extend(!0, e, i),
                    e
            }
            function G(e, t, n) {
                for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];)
                    l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (r in s)
                        if (s[r] && s[r].test(i)) {
                            l.unshift(r);
                            break
                        }
                if (l[0] in n)
                    o = l[0];
                else {
                    for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                            o = r;
                            break
                        }
                        a || (a = r)
                    }
                    o = o || a
                }
                return o ? (o !== l[0] && l.unshift(o),
                    n[o]) : void 0
            }
            function Y(e, t, n, i) {
                var r, o, a, s, l, c = {}, u = e.dataTypes.slice();
                if (u[1])
                    for (a in e.converters)
                        c[a.toLowerCase()] = e.converters[a];
                for (o = u.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = u.shift())
                        if ("*" === o)
                            o = l;
                        else if ("*" !== l && l !== o) {
                            if (a = c[l + " " + o] || c["* " + o],
                                !a)
                                for (r in c)
                                    if (s = r.split(" "),
                                        s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                        a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0],
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
                                            error: a ? d : "No conversion from " + l + " to " + o
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function J(e, t, n, i) {
                var r;
                if (ce.isArray(t))
                    ce.each(t, function (t, r) {
                        n || jt.test(e) ? i(e, r) : J(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                    });
                else if (n || "object" !== ce.type(t))
                    i(e, t);
                else
                    for (r in t)
                        J(e + "[" + r + "]", t[r], n, i)
            }
            function K(e) {
                return ce.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var Q = []
                , Z = n.document
                , ee = Q.slice
                , te = Q.concat
                , ne = Q.push
                , ie = Q.indexOf
                , re = {}
                , oe = re.toString
                , ae = re.hasOwnProperty
                , se = {}
                , le = "2.2.4"
                , ce = function (e, t) {
                    return new ce.fn.init(e, t)
                }
                , ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                , de = /^-ms-/
                , pe = /-([\da-z])/gi
                , he = function (e, t) {
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
                sort: Q.sort,
                splice: Q.splice
            },
                ce.extend = ce.fn.extend = function () {
                    var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
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
                                    a !== i && (c && i && (ce.isPlainObject(i) || (r = ce.isArray(i))) ? (r ? (r = !1,
                                        o = n && ce.isArray(n) ? n : []) : o = n && ce.isPlainObject(n) ? n : {},
                                        a[t] = ce.extend(c, o, i)) : void 0 !== i && (a[t] = i));
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
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[oe.call(e)] || "object" : typeof e
                    },
                    globalEval: function (e) {
                        var t, n = eval;
                        e = ce.trim(e),
                            e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
                                t.text = e,
                                Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                    },
                    camelCase: function (e) {
                        return e.replace(de, "ms-").replace(pe, he)
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
                        for (var n = +t.length, i = 0, r = e.length; n > i; i++)
                            e[r++] = t[i];
                        return e.length = r,
                            e
                    },
                    grep: function (e, t, n) {
                        for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++)
                            i = !t(e[o], o),
                                i !== s && r.push(e[o]);
                        return r
                    },
                    map: function (e, t, n) {
                        var i, r, o = 0, s = [];
                        if (a(e))
                            for (i = e.length; i > o; o++)
                                r = t(e[o], o, n),
                                    null != r && s.push(r);
                        else
                            for (o in e)
                                r = t(e[o], o, n),
                                    null != r && s.push(r);
                        return te.apply([], s)
                    },
                    guid: 1,
                    proxy: function (e, t) {
                        var n, i, r;
                        return "string" == typeof t && (n = e[t],
                            t = e,
                            e = n),
                            ce.isFunction(e) ? (i = ee.call(arguments, 2),
                                r = function () {
                                    return e.apply(t || this, i.concat(ee.call(arguments)))
                                }
                                ,
                                r.guid = e.guid = e.guid || ce.guid++,
                                r) : void 0
                    },
                    now: Date.now,
                    support: se
                }),
                "function" == typeof Symbol && (ce.fn[Symbol.iterator] = Q[Symbol.iterator]),
                ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    re["[object " + t + "]"] = t.toLowerCase()
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
                        var r, o, a, s, l, c, d, h, f = t && t.ownerDocument, g = t ? t.nodeType : 9;
                        if (n = n || [],
                            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                            return n;
                        if (!i && ((t ? t.ownerDocument || t : M) !== _ && D(t),
                            t = t || _,
                            j)) {
                            if (11 !== g && (c = ve.exec(e)))
                                if (r = c[1]) {
                                    if (9 === g) {
                                        if (!(a = t.getElementById(r)))
                                            return n;
                                        if (a.id === r)
                                            return n.push(a),
                                                n
                                    } else if (f && (a = f.getElementById(r)) && R(t, a) && a.id === r)
                                        return n.push(a),
                                            n
                                } else {
                                    if (c[2])
                                        return Q.apply(n, t.getElementsByTagName(e)),
                                            n;
                                    if ((r = c[3]) && k.getElementsByClassName && t.getElementsByClassName)
                                        return Q.apply(n, t.getElementsByClassName(r)),
                                            n
                                }
                            if (k.qsa && !W[e + " "] && (!O || !O.test(e))) {
                                if (1 !== g)
                                    f = t,
                                        h = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = q),
                                        d = S(e),
                                        o = d.length,
                                        l = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--;)
                                        d[o] = l + " " + p(d[o]);
                                    h = d.join(","),
                                        f = be.test(e) && u(t.parentNode) || t
                                }
                                if (h)
                                    try {
                                        return Q.apply(n, f.querySelectorAll(h)),
                                            n
                                    } catch (m) { } finally {
                                        s === q && t.removeAttribute("id")
                                    }
                            }
                        }
                        return L(e.replace(se, "$1"), t, n, i)
                    }
                    function n() {
                        function e(n, i) {
                            return t.push(n + " ") > w.cacheLength && delete e[t.shift()],
                                e[n + " "] = i
                        }
                        var t = [];
                        return e
                    }
                    function i(e) {
                        return e[q] = !0,
                            e
                    }
                    function r(e) {
                        var t = _.createElement("div");
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
                        for (var n = e.split("|"), i = n.length; i--;)
                            w.attrHandle[n[i]] = t
                    }
                    function a(e, t) {
                        var n = t && e
                            , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
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
                                    for (var r, o = e([], n.length, t), a = o.length; a--;)
                                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                                })
                        })
                    }
                    function u(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e
                    }
                    function d() { }
                    function p(e) {
                        for (var t = 0, n = e.length, i = ""; n > t; t++)
                            i += e[t].value;
                        return i
                    }
                    function h(e, t, n) {
                        var i = t.dir
                            , r = n && "parentNode" === i
                            , o = I++;
                        return t.first ? function (t, n, o) {
                            for (; t = t[i];)
                                if (1 === t.nodeType || r)
                                    return e(t, n, o)
                        }
                            : function (t, n, a) {
                                var s, l, c, u = [B, o];
                                if (a) {
                                    for (; t = t[i];)
                                        if ((1 === t.nodeType || r) && e(t, n, a))
                                            return !0
                                } else
                                    for (; t = t[i];)
                                        if (1 === t.nodeType || r) {
                                            if (c = t[q] || (t[q] = {}),
                                                l = c[t.uniqueID] || (c[t.uniqueID] = {}),
                                                (s = l[i]) && s[0] === B && s[1] === o)
                                                return u[2] = s[2];
                                            if (l[i] = u,
                                                u[2] = e(t, n, a))
                                                return !0
                                        }
                            }
                    }
                    function f(e) {
                        return e.length > 1 ? function (t, n, i) {
                            for (var r = e.length; r--;)
                                if (!e[r](t, n, i))
                                    return !1;
                            return !0
                        }
                            : e[0]
                    }
                    function g(e, n, i) {
                        for (var r = 0, o = n.length; o > r; r++)
                            t(e, n[r], i);
                        return i
                    }
                    function m(e, t, n, i, r) {
                        for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)
                            (o = e[s]) && (n && !n(o, i, r) || (a.push(o),
                                c && t.push(s)));
                        return a
                    }
                    function v(e, t, n, r, o, a) {
                        return r && !r[q] && (r = v(r)),
                            o && !o[q] && (o = v(o, a)),
                            i(function (i, a, s, l) {
                                var c, u, d, p = [], h = [], f = a.length, v = i || g(t || "*", s.nodeType ? [s] : s, []), b = !e || !i && t ? v : m(v, p, e, s, l), y = n ? o || (i ? e : f || r) ? [] : a : b;
                                if (n && n(b, y, s, l),
                                    r)
                                    for (c = m(y, h),
                                        r(c, [], s, l),
                                        u = c.length; u--;)
                                        (d = c[u]) && (y[h[u]] = !(b[h[u]] = d));
                                if (i) {
                                    if (o || e) {
                                        if (o) {
                                            for (c = [],
                                                u = y.length; u--;)
                                                (d = y[u]) && c.push(b[u] = d);
                                            o(null, y = [], c, l)
                                        }
                                        for (u = y.length; u--;)
                                            (d = y[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                                    }
                                } else
                                    y = m(y === a ? y.splice(f, y.length) : y),
                                        o ? o(null, a, y, l) : Q.apply(a, y)
                            })
                    }
                    function b(e) {
                        for (var t, n, i, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = h(function (e) {
                            return e === t
                        }, a, !0), c = h(function (e) {
                            return ee(t, e) > -1
                        }, a, !0), u = [function (e, n, i) {
                            var r = !o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                            return t = null,
                                r
                        }
                        ]; r > s; s++)
                            if (n = w.relative[e[s].type])
                                u = [h(f(u), n)];
                            else {
                                if (n = w.filter[e[s].type].apply(null, e[s].matches),
                                    n[q]) {
                                    for (i = ++s; r > i && !w.relative[e[i].type]; i++)
                                        ;
                                    return v(s > 1 && f(u), s > 1 && p(e.slice(0, s - 1).concat({
                                        value: " " === e[s - 2].type ? "*" : ""
                                    })).replace(se, "$1"), n, i > s && b(e.slice(s, i)), r > i && b(e = e.slice(i)), r > i && p(e))
                                }
                                u.push(n)
                            }
                        return f(u)
                    }
                    function y(e, n) {
                        var r = n.length > 0
                            , o = e.length > 0
                            , a = function (i, a, s, l, c) {
                                var u, d, p, h = 0, f = "0", g = i && [], v = [], b = A, y = i || o && w.find.TAG("*", c), x = B += null == b ? 1 : Math.random() || .1, k = y.length;
                                for (c && (A = a === _ || a || c); f !== k && null != (u = y[f]); f++) {
                                    if (o && u) {
                                        for (d = 0,
                                            a || u.ownerDocument === _ || (D(u),
                                                s = !j); p = e[d++];)
                                            if (p(u, a || _, s)) {
                                                l.push(u);
                                                break
                                            }
                                        c && (B = x)
                                    }
                                    r && ((u = !p && u) && h--,
                                        i && g.push(u))
                                }
                                if (h += f,
                                    r && f !== h) {
                                    for (d = 0; p = n[d++];)
                                        p(g, v, a, s);
                                    if (i) {
                                        if (h > 0)
                                            for (; f--;)
                                                g[f] || v[f] || (v[f] = J.call(l));
                                        v = m(v)
                                    }
                                    Q.apply(l, v),
                                        c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                                }
                                return c && (B = x,
                                    A = b),
                                    g
                            };
                        return r ? i(a) : a
                    }
                    var x, k, w, T, E, S, C, L, A, N, $, D, _, H, j, O, P, z, R, q = "sizzle" + 1 * new Date, M = e.document, B = 0, I = 0, F = n(), V = n(), W = n(), U = function (e, t) {
                        return e === t && ($ = !0),
                            0
                    }, X = 1 << 31, G = {}.hasOwnProperty, Y = [], J = Y.pop, K = Y.push, Q = Y.push, Z = Y.slice, ee = function (e, t) {
                        for (var n = 0, i = e.length; i > n; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(oe), pe = new RegExp("^" + ie + "$"), he = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, fe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, ye = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), ke = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, we = function () {
                        D()
                    };
                    try {
                        Q.apply(Y = Z.call(M.childNodes), M.childNodes),
                            Y[M.childNodes.length].nodeType
                    } catch (Te) {
                        Q = {
                            apply: Y.length ? function (e, t) {
                                K.apply(e, Z.call(t))
                            }
                                : function (e, t) {
                                    for (var n = e.length, i = 0; e[n++] = t[i++];)
                                        ;
                                    e.length = n - 1
                                }
                        }
                    }
                    k = t.support = {},
                        E = t.isXML = function (e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        }
                        ,
                        D = t.setDocument = function (e) {
                            var t, n, i = e ? e.ownerDocument || e : M;
                            return i !== _ && 9 === i.nodeType && i.documentElement ? (_ = i,
                                H = _.documentElement,
                                j = !E(_),
                                (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
                                k.attributes = r(function (e) {
                                    return e.className = "i",
                                        !e.getAttribute("className")
                                }),
                                k.getElementsByTagName = r(function (e) {
                                    return e.appendChild(_.createComment("")),
                                        !e.getElementsByTagName("*").length
                                }),
                                k.getElementsByClassName = me.test(_.getElementsByClassName),
                                k.getById = r(function (e) {
                                    return H.appendChild(e).id = q,
                                        !_.getElementsByName || !_.getElementsByName(q).length
                                }),
                                k.getById ? (w.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && j) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }
                                    ,
                                    w.filter.ID = function (e) {
                                        var t = e.replace(xe, ke);
                                        return function (e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }
                                ) : (delete w.find.ID,
                                    w.filter.ID = function (e) {
                                        var t = e.replace(xe, ke);
                                        return function (e) {
                                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }
                                    ),
                                w.find.TAG = k.getElementsByTagName ? function (e, t) {
                                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0
                                }
                                    : function (e, t) {
                                        var n, i = [], r = 0, o = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; n = o[r++];)
                                                1 === n.nodeType && i.push(n);
                                            return i
                                        }
                                        return o
                                    }
                                ,
                                w.find.CLASS = k.getElementsByClassName && function (e, t) {
                                    return "undefined" != typeof t.getElementsByClassName && j ? t.getElementsByClassName(e) : void 0
                                }
                                ,
                                P = [],
                                O = [],
                                (k.qsa = me.test(_.querySelectorAll)) && (r(function (e) {
                                    H.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"),
                                        e.querySelectorAll("[id~=" + q + "-]").length || O.push("~="),
                                        e.querySelectorAll(":checked").length || O.push(":checked"),
                                        e.querySelectorAll("a#" + q + "+*").length || O.push(".#.+[+~]")
                                }),
                                    r(function (e) {
                                        var t = _.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="),
                                            e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            O.push(",.*:")
                                    })),
                                (k.matchesSelector = me.test(z = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function (e) {
                                    k.disconnectedMatch = z.call(e, "div"),
                                        z.call(e, "[s!='']:x"),
                                        P.push("!=", oe)
                                }),
                                O = O.length && new RegExp(O.join("|")),
                                P = P.length && new RegExp(P.join("|")),
                                t = me.test(H.compareDocumentPosition),
                                R = t || me.test(H.contains) ? function (e, t) {
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
                                        return $ = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                        1 & n || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === M && R(M, e) ? -1 : t === _ || t.ownerDocument === M && R(M, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                                }
                                    : function (e, t) {
                                        if (e === t)
                                            return $ = !0,
                                                0;
                                        var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], l = [t];
                                        if (!r || !o)
                                            return e === _ ? -1 : t === _ ? 1 : r ? -1 : o ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                                        if (r === o)
                                            return a(e, t);
                                        for (n = e; n = n.parentNode;)
                                            s.unshift(n);
                                        for (n = t; n = n.parentNode;)
                                            l.unshift(n);
                                        for (; s[i] === l[i];)
                                            i++;
                                        return i ? a(s[i], l[i]) : s[i] === M ? -1 : l[i] === M ? 1 : 0
                                    }
                                ,
                                _) : _
                        }
                        ,
                        t.matches = function (e, n) {
                            return t(e, null, null, n)
                        }
                        ,
                        t.matchesSelector = function (e, n) {
                            if ((e.ownerDocument || e) !== _ && D(e),
                                n = n.replace(ue, "='$1']"),
                                k.matchesSelector && j && !W[n + " "] && (!P || !P.test(n)) && (!O || !O.test(n)))
                                try {
                                    var i = z.call(e, n);
                                    if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return i
                                } catch (r) { }
                            return t(n, _, null, [e]).length > 0
                        }
                        ,
                        t.contains = function (e, t) {
                            return (e.ownerDocument || e) !== _ && D(e),
                                R(e, t)
                        }
                        ,
                        t.attr = function (e, t) {
                            (e.ownerDocument || e) !== _ && D(e);
                            var n = w.attrHandle[t.toLowerCase()]
                                , i = n && G.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
                            return void 0 !== i ? i : k.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        }
                        ,
                        t.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        t.uniqueSort = function (e) {
                            var t, n = [], i = 0, r = 0;
                            if ($ = !k.detectDuplicates,
                                N = !k.sortStable && e.slice(0),
                                e.sort(U),
                                $) {
                                for (; t = e[r++];)
                                    t === e[r] && (i = n.push(r));
                                for (; i--;)
                                    e.splice(n[i], 1)
                            }
                            return N = null,
                                e
                        }
                        ,
                        T = t.getText = function (e) {
                            var t, n = "", i = 0, r = e.nodeType;
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += T(e)
                                } else if (3 === r || 4 === r)
                                    return e.nodeValue
                            } else
                                for (; t = e[i++];)
                                    n += T(t);
                            return n
                        }
                        ,
                        w = t.selectors = {
                            cacheLength: 50,
                            createPseudo: i,
                            match: he,
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
                                    return e[1] = e[1].replace(xe, ke),
                                        e[3] = (e[3] || e[4] || e[5] || "").replace(xe, ke),
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
                                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                        e[2] = n.slice(0, t)),
                                        e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(xe, ke).toLowerCase();
                                    return "*" === e ? function () {
                                        return !0
                                    }
                                        : function (e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                },
                                CLASS: function (e) {
                                    var t = F[e + " "];
                                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && F(e, function (e) {
                                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function (e, n, i) {
                                    return function (r) {
                                        var o = t.attr(r, e);
                                        return null == o ? "!=" === n : n ? (o += "",
                                            "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                                    }
                                },
                                CHILD: function (e, t, n, i, r) {
                                    var o = "nth" !== e.slice(0, 3)
                                        , a = "last" !== e.slice(-4)
                                        , s = "of-type" === t;
                                    return 1 === i && 0 === r ? function (e) {
                                        return !!e.parentNode
                                    }
                                        : function (t, n, l) {
                                            var c, u, d, p, h, f, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), b = !l && !s, y = !1;
                                            if (m) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (p = t; p = p[g];)
                                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                                return !1;
                                                        f = g = "only" === e && !f && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (f = [a ? m.firstChild : m.lastChild],
                                                    a && b) {
                                                    for (p = m,
                                                        d = p[q] || (p[q] = {}),
                                                        u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                                        c = u[e] || [],
                                                        h = c[0] === B && c[1],
                                                        y = h && c[2],
                                                        p = h && m.childNodes[h]; p = ++h && p && p[g] || (y = h = 0) || f.pop();)
                                                        if (1 === p.nodeType && ++y && p === t) {
                                                            u[e] = [B, h, y];
                                                            break
                                                        }
                                                } else if (b && (p = t,
                                                    d = p[q] || (p[q] = {}),
                                                    u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                                    c = u[e] || [],
                                                    h = c[0] === B && c[1],
                                                    y = h),
                                                    y === !1)
                                                    for (; (p = ++h && p && p[g] || (y = h = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (b && (d = p[q] || (p[q] = {}),
                                                        u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                                        u[e] = [B, y]),
                                                        p !== t));)
                                                        ;
                                                return y -= r,
                                                    y === i || y % i === 0 && y / i >= 0
                                            }
                                        }
                                },
                                PSEUDO: function (e, n) {
                                    var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return o[q] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                                        w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                            for (var i, r = o(e, n), a = r.length; a--;)
                                                i = ee(e, r[a]),
                                                    e[i] = !(t[i] = r[a])
                                        }) : function (e) {
                                            return o(e, 0, r)
                                        }
                                    ) : o
                                }
                            },
                            pseudos: {
                                not: i(function (e) {
                                    var t = []
                                        , n = []
                                        , r = C(e.replace(se, "$1"));
                                    return r[q] ? i(function (e, t, n, i) {
                                        for (var o, a = r(e, null, i, []), s = e.length; s--;)
                                            (o = a[s]) && (e[s] = !(t[s] = o))
                                    }) : function (e, i, o) {
                                        return t[0] = e,
                                            r(t, null, o, n),
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
                                    return e = e.replace(xe, ke),
                                        function (t) {
                                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: i(function (e) {
                                    return pe.test(e || "") || t.error("unsupported lang: " + e),
                                        e = e.replace(xe, ke).toLowerCase(),
                                        function (t) {
                                            var n;
                                            do
                                                if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
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
                                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                                    return !w.pseudos.empty(e)
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
                        w.pseudos.nth = w.pseudos.eq;
                    for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        w.pseudos[x] = s(x);
                    for (x in {
                        submit: !0,
                        reset: !0
                    })
                        w.pseudos[x] = l(x);
                    return d.prototype = w.filters = w.pseudos,
                        w.setFilters = new d,
                        S = t.tokenize = function (e, n) {
                            var i, r, o, a, s, l, c, u = V[e + " "];
                            if (u)
                                return n ? 0 : u.slice(0);
                            for (s = e,
                                l = [],
                                c = w.preFilter; s;) {
                                i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                                    l.push(o = [])),
                                    i = !1,
                                    (r = ce.exec(s)) && (i = r.shift(),
                                        o.push({
                                            value: i,
                                            type: r[0].replace(se, " ")
                                        }),
                                        s = s.slice(i.length));
                                for (a in w.filter)
                                    !(r = he[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(),
                                        o.push({
                                            value: i,
                                            type: a,
                                            matches: r
                                        }),
                                        s = s.slice(i.length));
                                if (!i)
                                    break
                            }
                            return n ? s.length : s ? t.error(e) : V(e, l).slice(0)
                        }
                        ,
                        C = t.compile = function (e, t) {
                            var n, i = [], r = [], o = W[e + " "];
                            if (!o) {
                                for (t || (t = S(e)),
                                    n = t.length; n--;)
                                    o = b(t[n]),
                                        o[q] ? i.push(o) : r.push(o);
                                o = W(e, y(r, i)),
                                    o.selector = e
                            }
                            return o
                        }
                        ,
                        L = t.select = function (e, t, n, i) {
                            var r, o, a, s, l, c = "function" == typeof e && e, d = !i && S(e = c.selector || e);
                            if (n = n || [],
                                1 === d.length) {
                                if (o = d[0] = d[0].slice(0),
                                    o.length > 2 && "ID" === (a = o[0]).type && k.getById && 9 === t.nodeType && j && w.relative[o[1].type]) {
                                    if (t = (w.find.ID(a.matches[0].replace(xe, ke), t) || [])[0],
                                        !t)
                                        return n;
                                    c && (t = t.parentNode),
                                        e = e.slice(o.shift().value.length)
                                }
                                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                                    !w.relative[s = a.type]);)
                                    if ((l = w.find[s]) && (i = l(a.matches[0].replace(xe, ke), be.test(o[0].type) && u(t.parentNode) || t))) {
                                        if (o.splice(r, 1),
                                            e = i.length && p(o),
                                            !e)
                                            return Q.apply(n, i),
                                                n;
                                        break
                                    }
                            }
                            return (c || C(e, d))(i, t, !j, n, !t || be.test(e) && u(t.parentNode) || t),
                                n
                        }
                        ,
                        k.sortStable = q.split("").sort(U).join("") === q,
                        k.detectDuplicates = !!$,
                        D(),
                        k.sortDetached = r(function (e) {
                            return 1 & e.compareDocumentPosition(_.createElement("div"))
                        }),
                        r(function (e) {
                            return e.innerHTML = "<a href='#'></a>",
                                "#" === e.firstChild.getAttribute("href")
                        }) || o("type|href|height|width", function (e, t, n) {
                            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }),
                        k.attributes && r(function (e) {
                            return e.innerHTML = "<input/>",
                                e.firstChild.setAttribute("value", ""),
                                "" === e.firstChild.getAttribute("value")
                        }) || o("value", function (e, t, n) {
                            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                        }),
                        r(function (e) {
                            return null == e.getAttribute("disabled")
                        }) || o(te, function (e, t, n) {
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
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && ce(e).is(n))
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
                , be = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                , ye = /^.[^:#\[\.,]*$/;
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
                        var t, n = this.length, i = [], r = this;
                        if ("string" != typeof e)
                            return this.pushStack(ce(e).filter(function () {
                                for (t = 0; n > t; t++)
                                    if (ce.contains(r[t], this))
                                        return !0
                            }));
                        for (t = 0; n > t; t++)
                            ce.find(e, r[t], i);
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
            var xe, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, we = ce.fn.init = function (e, t, n) {
                var i, r;
                if (!e)
                    return this;
                if (n = n || xe,
                    "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e),
                        !i || !i[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof ce ? t[0] : t,
                            ce.merge(this, ce.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                            be.test(i[1]) && ce.isPlainObject(t))
                            for (i in t)
                                ce.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return r = Z.getElementById(i[2]),
                        r && r.parentNode && (this.length = 1,
                            this[0] = r),
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
            we.prototype = ce.fn,
                xe = ce(Z);
            var Te = /^(?:parents|prev(?:Until|All))/
                , Ee = {
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
                    for (var n, i = 0, r = this.length, o = [], a = ve.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; r > i; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? ce.uniqueSort(o) : o)
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
                        var r = ce.map(this, t, n);
                        return "Until" !== e.slice(-5) && (i = n),
                            i && "string" == typeof i && (r = ce.filter(i, r)),
                            this.length > 1 && (Ee[e] || ce.uniqueSort(r),
                                Te.test(e) && r.reverse()),
                            this.pushStack(r)
                    }
                });
            var Se = /\S+/g;
            ce.Callbacks = function (e) {
                e = "string" == typeof e ? c(e) : ce.extend({}, e);
                var t, n, i, r, o = [], a = [], s = -1, l = function () {
                    for (r = e.once,
                        i = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length;)
                            o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length,
                                n = !1);
                    e.memory || (n = !1),
                        t = !1,
                        r && (o = n ? [] : "")
                }, u = {
                    add: function () {
                        return o && (n && !t && (s = o.length - 1,
                            a.push(n)),
                            function i(t) {
                                ce.each(t, function (t, n) {
                                    ce.isFunction(n) ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== ce.type(n) && i(n)
                                })
                            }(arguments),
                            n && !t && l()),
                            this
                    },
                    remove: function () {
                        return ce.each(arguments, function (e, t) {
                            for (var n; (n = ce.inArray(t, o, n)) > -1;)
                                o.splice(n, 1),
                                    s >= n && s--
                        }),
                            this
                    },
                    has: function (e) {
                        return e ? ce.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function () {
                        return o && (o = []),
                            this
                    },
                    disable: function () {
                        return r = a = [],
                            o = n = "",
                            this
                    },
                    disabled: function () {
                        return !o
                    },
                    lock: function () {
                        return r = a = [],
                            n || (o = n = ""),
                            this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (e, n) {
                        return r || (n = n || [],
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
                                    return r.done(arguments).fail(arguments),
                                        this
                                },
                                then: function () {
                                    var e = arguments;
                                    return ce.Deferred(function (n) {
                                        ce.each(t, function (t, o) {
                                            var a = ce.isFunction(e[t]) && e[t];
                                            r[o[1]](function () {
                                                var e = a && a.apply(this, arguments);
                                                e && ce.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                            })
                                        }),
                                            e = null
                                    }).promise()
                                },
                                promise: function (e) {
                                    return null != e ? ce.extend(e, i) : i
                                }
                            }
                            , r = {};
                        return i.pipe = i.then,
                            ce.each(t, function (e, o) {
                                var a = o[2]
                                    , s = o[3];
                                i[o[1]] = a.add,
                                    s && a.add(function () {
                                        n = s
                                    }, t[1 ^ e][2].disable, t[2][2].lock),
                                    r[o[0]] = function () {
                                        return r[o[0] + "With"](this === r ? i : this, arguments),
                                            this
                                    }
                                    ,
                                    r[o[0] + "With"] = a.fireWith
                            }),
                            i.promise(r),
                            e && e.call(r, r),
                            r
                    },
                    when: function (e) {
                        var t, n, i, r = 0, o = ee.call(arguments), a = o.length, s = 1 !== a || e && ce.isFunction(e.promise) ? a : 0, l = 1 === s ? e : ce.Deferred(), c = function (e, n, i) {
                            return function (r) {
                                n[e] = this,
                                    i[e] = arguments.length > 1 ? ee.call(arguments) : r,
                                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                            }
                        };
                        if (a > 1)
                            for (t = new Array(a),
                                n = new Array(a),
                                i = new Array(a); a > r; r++)
                                o[r] && ce.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(l.reject) : --s;
                        return s || l.resolveWith(i, o),
                            l.promise()
                    }
                });
            var Ce;
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
                            e !== !0 && --ce.readyWait > 0 || (Ce.resolveWith(Z, [ce]),
                                ce.fn.triggerHandler && (ce(Z).triggerHandler("ready"),
                                    ce(Z).off("ready"))))
                    }
                }),
                ce.ready.promise = function (e) {
                    return Ce || (Ce = ce.Deferred(),
                        "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(ce.ready) : (Z.addEventListener("DOMContentLoaded", u),
                            n.addEventListener("load", u))),
                        Ce.promise(e)
                }
                ,
                ce.ready.promise();
            var Le = function (e, t, n, i, r, o, a) {
                var s = 0
                    , l = e.length
                    , c = null == n;
                if ("object" === ce.type(n)) {
                    r = !0;
                    for (s in n)
                        Le(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0,
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
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            }
                , Ae = function (e) {
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
                        if (!Ae(e))
                            return {};
                        var t = e[this.expando];
                        return t || (t = {},
                            Ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))),
                            t
                    },
                    set: function (e, t, n) {
                        var i, r = this.cache(e);
                        if ("string" == typeof t)
                            r[t] = n;
                        else
                            for (i in t)
                                r[i] = t[i];
                        return r
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
                        var n, i, r, o = e[this.expando];
                        if (void 0 !== o) {
                            if (void 0 === t)
                                this.register(e);
                            else {
                                ce.isArray(t) ? i = t.concat(t.map(ce.camelCase)) : (r = ce.camelCase(t),
                                    t in o ? i = [t, r] : (i = r,
                                        i = i in o ? [i] : i.match(Se) || [])),
                                    n = i.length;
                                for (; n--;)
                                    delete o[i[n]]
                            }
                            (void 0 === t || ce.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !ce.isEmptyObject(t)
                    }
                };
            var Ne = new d
                , $e = new d
                , De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , _e = /[A-Z]/g;
            ce.extend({
                hasData: function (e) {
                    return $e.hasData(e) || Ne.hasData(e)
                },
                data: function (e, t, n) {
                    return $e.access(e, t, n)
                },
                removeData: function (e, t) {
                    $e.remove(e, t)
                },
                _data: function (e, t, n) {
                    return Ne.access(e, t, n)
                },
                _removeData: function (e, t) {
                    Ne.remove(e, t)
                }
            }),
                ce.fn.extend({
                    data: function (e, t) {
                        var n, i, r, o = this[0], a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (r = $e.get(o),
                                1 === o.nodeType && !Ne.get(o, "hasDataAttrs"))) {
                                for (n = a.length; n--;)
                                    a[n] && (i = a[n].name,
                                        0 === i.indexOf("data-") && (i = ce.camelCase(i.slice(5)),
                                            p(o, i, r[i])));
                                Ne.set(o, "hasDataAttrs", !0)
                            }
                            return r
                        }
                        return "object" == typeof e ? this.each(function () {
                            $e.set(this, e)
                        }) : Le(this, function (t) {
                            var n, i;
                            if (o && void 0 === t) {
                                if (n = $e.get(o, e) || $e.get(o, e.replace(_e, "-$&").toLowerCase()),
                                    void 0 !== n)
                                    return n;
                                if (i = ce.camelCase(e),
                                    n = $e.get(o, i),
                                    void 0 !== n)
                                    return n;
                                if (n = p(o, i, void 0),
                                    void 0 !== n)
                                    return n
                            } else
                                i = ce.camelCase(e),
                                    this.each(function () {
                                        var n = $e.get(this, i);
                                        $e.set(this, i, t),
                                            e.indexOf("-") > -1 && void 0 !== n && $e.set(this, e, t)
                                    })
                        }, null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            $e.remove(this, e)
                        })
                    }
                }),
                ce.extend({
                    queue: function (e, t, n) {
                        var i;
                        return e ? (t = (t || "fx") + "queue",
                            i = Ne.get(e, t),
                            n && (!i || ce.isArray(n) ? i = Ne.access(e, t, ce.makeArray(n)) : i.push(n)),
                            i || []) : void 0
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = ce.queue(e, t)
                            , i = n.length
                            , r = n.shift()
                            , o = ce._queueHooks(e, t)
                            , a = function () {
                                ce.dequeue(e, t)
                            };
                        "inprogress" === r && (r = n.shift(),
                            i--),
                            r && ("fx" === t && n.unshift("inprogress"),
                                delete o.stop,
                                r.call(e, a, o)),
                            !i && o && o.empty.fire()
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return Ne.get(e, n) || Ne.access(e, n, {
                            empty: ce.Callbacks("once memory").add(function () {
                                Ne.remove(e, [t + "queue", n])
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
                        var n, i = 1, r = ce.Deferred(), o = this, a = this.length, s = function () {
                            --i || r.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                            e = void 0),
                            e = e || "fx"; a--;)
                            n = Ne.get(o[a], e + "queueHooks"),
                                n && n.empty && (i++,
                                    n.empty.add(s));
                        return s(),
                            r.promise(t)
                    }
                });
            var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , je = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i")
                , Oe = ["Top", "Right", "Bottom", "Left"]
                , Pe = function (e, t) {
                    return e = t || e,
                        "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
                }
                , ze = /^(?:checkbox|radio)$/i
                , Re = /<([\w:-]+)/
                , qe = /^$|\/(?:java|ecma)script/i
                , Me = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Me.optgroup = Me.option,
                Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead,
                Me.th = Me.td;
            var Be = /<|&#?\w+;/;
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
                , Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                , Ve = /^([^.]*)(?:\.(.+)|)/;
            ce.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o, a, s, l, c, u, d, p, h, f, g, m = Ne.get(e);
                    if (m)
                        for (n.handler && (o = n,
                            n = o.handler,
                            r = o.selector),
                            n.guid || (n.guid = ce.guid++),
                            (l = m.events) || (l = m.events = {}),
                            (a = m.handle) || (a = m.handle = function (t) {
                                return "undefined" != typeof ce && ce.event.triggered !== t.type ? ce.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            t = (t || "").match(Se) || [""],
                            c = t.length; c--;)
                            s = Ve.exec(t[c]) || [],
                                h = g = s[1],
                                f = (s[2] || "").split(".").sort(),
                                h && (d = ce.event.special[h] || {},
                                    h = (r ? d.delegateType : d.bindType) || h,
                                    d = ce.event.special[h] || {},
                                    u = ce.extend({
                                        type: h,
                                        origType: g,
                                        data: i,
                                        handler: n,
                                        guid: n.guid,
                                        selector: r,
                                        needsContext: r && ce.expr.match.needsContext.test(r),
                                        namespace: f.join(".")
                                    }, o),
                                    (p = l[h]) || (p = l[h] = [],
                                        p.delegateCount = 0,
                                        d.setup && d.setup.call(e, i, f, a) !== !1 || e.addEventListener && e.addEventListener(h, a)),
                                    d.add && (d.add.call(e, u),
                                        u.handler.guid || (u.handler.guid = n.guid)),
                                    r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                                    ce.event.global[h] = !0)
                },
                remove: function (e, t, n, i, r) {
                    var o, a, s, l, c, u, d, p, h, f, g, m = Ne.hasData(e) && Ne.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(Se) || [""],
                            c = t.length; c--;)
                            if (s = Ve.exec(t[c]) || [],
                                h = g = s[1],
                                f = (s[2] || "").split(".").sort(),
                                h) {
                                for (d = ce.event.special[h] || {},
                                    h = (i ? d.delegateType : d.bindType) || h,
                                    p = l[h] || [],
                                    s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    a = o = p.length; o--;)
                                    u = p[o],
                                        !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1),
                                            u.selector && p.delegateCount--,
                                            d.remove && d.remove.call(e, u));
                                a && !p.length && (d.teardown && d.teardown.call(e, f, m.handle) !== !1 || ce.removeEvent(e, h, m.handle),
                                    delete l[h])
                            } else
                                for (h in l)
                                    ce.event.remove(e, h + t[c], n, i, !0);
                        ce.isEmptyObject(l) && Ne.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = ce.event.fix(e);
                    var t, n, i, r, o, a = [], s = ee.call(arguments), l = (Ne.get(this, "events") || {})[e.type] || [], c = ce.event.special[e.type] || {};
                    if (s[0] = e,
                        e.delegateTarget = this,
                        !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (a = ce.event.handlers.call(this, e, l),
                            t = 0; (r = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = r.elem,
                                n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)
                                e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                                    e.data = o.data,
                                    i = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s),
                                    void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                                        e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function (e, t) {
                    var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
                    if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                                for (i = [],
                                    n = 0; s > n; n++)
                                    o = t[n],
                                        r = o.selector + " ",
                                        void 0 === i[r] && (i[r] = o.needsContext ? ce(r, this).index(l) > -1 : ce.find(r, this, null, [l]).length),
                                        i[r] && i.push(o);
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
                        var n, i, r, o = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z,
                            i = n.documentElement,
                            r = n.body,
                            e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0),
                            e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                            e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                            e
                    }
                },
                fix: function (e) {
                    if (e[ce.expando])
                        return e;
                    var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
                    for (a || (this.fixHooks[r] = a = Fe.test(r) ? this.mouseHooks : Ie.test(r) ? this.keyHooks : {}),
                        i = a.props ? this.props.concat(a.props) : this.props,
                        e = new ce.Event(o),
                        t = i.length; t--;)
                        n = i[t],
                            e[n] = o[n];
                    return e.target || (e.target = Z),
                        3 === e.target.nodeType && (e.target = e.target.parentNode),
                        a.filter ? a.filter(e, o) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            return this !== y() && this.focus ? (this.focus(),
                                !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === y() && this.blur ? (this.blur(),
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
                        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : b) : this.type = e,
                        t && ce.extend(this, t),
                        this.timeStamp = e && e.timeStamp || ce.now(),
                        void (this[ce.expando] = !0)) : new ce.Event(e, t)
                }
                ,
                ce.Event.prototype = {
                    constructor: ce.Event,
                    isDefaultPrevented: b,
                    isPropagationStopped: b,
                    isImmediatePropagationStopped: b,
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
                            var n, i = this, r = e.relatedTarget, o = e.handleObj;
                            return r && (r === i || ce.contains(i, r)) || (e.type = o.origType,
                                n = o.handler.apply(this, arguments),
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
                        var i, r;
                        if (e && e.preventDefault && e.handleObj)
                            return i = e.handleObj,
                                ce(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                                this;
                        if ("object" == typeof e) {
                            for (r in e)
                                this.off(r, t, e[r]);
                            return this
                        }
                        return t !== !1 && "function" != typeof t || (n = t,
                            t = void 0),
                            n === !1 && (n = b),
                            this.each(function () {
                                ce.event.remove(this, e, n, t)
                            })
                    }
                });
            var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                , Ue = /<script|<style|<link/i
                , Xe = /checked\s*(?:[^=]|=\s*.checked.)/i
                , Ge = /^true\/(.*)/
                , Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ce.extend({
                htmlPrefilter: function (e) {
                    return e.replace(We, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var i, r, o, a, s = e.cloneNode(!0), l = ce.contains(e.ownerDocument, e);
                    if (!(se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                        for (a = f(s),
                            o = f(e),
                            i = 0,
                            r = o.length; r > i; i++)
                            S(o[i], a[i]);
                    if (t)
                        if (n)
                            for (o = o || f(e),
                                a = a || f(s),
                                i = 0,
                                r = o.length; r > i; i++)
                                E(o[i], a[i]);
                        else
                            E(e, s);
                    return a = f(s, "script"),
                        a.length > 0 && g(a, !l && f(e, "script")),
                        s
                },
                cleanData: function (e) {
                    for (var t, n, i, r = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Ae(n)) {
                            if (t = n[Ne.expando]) {
                                if (t.events)
                                    for (i in t.events)
                                        r[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, t.handle);
                                n[Ne.expando] = void 0
                            }
                            n[$e.expando] && (n[$e.expando] = void 0)
                        }
                }
            }),
                ce.fn.extend({
                    domManip: C,
                    detach: function (e) {
                        return L(this, e, !0)
                    },
                    remove: function (e) {
                        return L(this, e)
                    },
                    text: function (e) {
                        return Le(this, function (e) {
                            return void 0 === e ? ce.text(this) : this.empty().each(function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function () {
                        return C(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = k(this, e);
                                t.appendChild(e)
                            }
                        })
                    },
                    prepend: function () {
                        return C(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = k(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function () {
                        return C(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function () {
                        return C(this, arguments, function (e) {
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
                        return Le(this, function (e) {
                            var t = this[0] || {}
                                , n = 0
                                , i = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Ue.test(e) && !Me[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = ce.htmlPrefilter(e);
                                try {
                                    for (; i > n; n++)
                                        t = this[n] || {},
                                            1 === t.nodeType && (ce.cleanData(f(t, !1)),
                                                t.innerHTML = e);
                                    t = 0
                                } catch (r) { }
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function () {
                        var e = [];
                        return C(this, arguments, function (t) {
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
                        for (var n, i = [], r = ce(e), o = r.length - 1, a = 0; o >= a; a++)
                            n = a === o ? this : this.clone(!0),
                                ce(r[a])[t](n),
                                ne.apply(i, n.get());
                        return this.pushStack(i)
                    }
                });
            var Je, Ke = {
                HTML: "block",
                BODY: "block"
            }, Qe = /^margin/, Ze = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"), et = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                    t.getComputedStyle(e)
            }, tt = function (e, t, n, i) {
                var r, o, a = {};
                for (o in t)
                    a[o] = e.style[o],
                        e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t)
                    e.style[o] = a[o];
                return r
            }, nt = Z.documentElement;
            !function () {
                function e() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        s.innerHTML = "",
                        nt.appendChild(a);
                    var e = n.getComputedStyle(s);
                    t = "1%" !== e.top,
                        o = "2px" === e.marginLeft,
                        i = "4px" === e.width,
                        s.style.marginRight = "50%",
                        r = "4px" === e.marginRight,
                        nt.removeChild(a)
                }
                var t, i, r, o, a = Z.createElement("div"), s = Z.createElement("div");
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
                                r
                        },
                        reliableMarginLeft: function () {
                            return null == i && e(),
                                o
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
                , rt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                , ot = {
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
                                var n = $(e, "opacity");
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
                        var r, o, a, s = ce.camelCase(t), l = e.style;
                        return t = ce.cssProps[s] || (ce.cssProps[s] = _(s) || s),
                            a = ce.cssHooks[t] || ce.cssHooks[s],
                            void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n,
                                "string" === o && (r = je.exec(n)) && r[1] && (n = h(e, t, r),
                                    o = "number"),
                                null != n && n === n && ("number" === o && (n += r && r[3] || (ce.cssNumber[s] ? "" : "px")),
                                    se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                    a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)),
                                void 0)
                    }
                },
                css: function (e, t, n, i) {
                    var r, o, a, s = ce.camelCase(t);
                    return t = ce.cssProps[s] || (ce.cssProps[s] = _(s) || s),
                        a = ce.cssHooks[t] || ce.cssHooks[s],
                        a && "get" in a && (r = a.get(e, !0, n)),
                        void 0 === r && (r = $(e, t, i)),
                        "normal" === r && t in ot && (r = ot[t]),
                        "" === n || n ? (o = parseFloat(r),
                            n === !0 || isFinite(o) ? o || 0 : r) : r
                }
            }),
                ce.each(["height", "width"], function (e, t) {
                    ce.cssHooks[t] = {
                        get: function (e, n, i) {
                            return n ? it.test(ce.css(e, "display")) && 0 === e.offsetWidth ? tt(e, rt, function () {
                                return O(e, t, i)
                            }) : O(e, t, i) : void 0
                        },
                        set: function (e, n, i) {
                            var r, o = i && et(e), a = i && j(e, t, i, "border-box" === ce.css(e, "boxSizing", !1, o), o);
                            return a && (r = je.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                                n = ce.css(e, t)),
                                H(e, n, a)
                        }
                    }
                }),
                ce.cssHooks.marginLeft = D(se.reliableMarginLeft, function (e, t) {
                    return t ? (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                        marginLeft: 0
                    }, function () {
                        return e.getBoundingClientRect().left
                    })) + "px" : void 0
                }),
                ce.cssHooks.marginRight = D(se.reliableMarginRight, function (e, t) {
                    return t ? tt(e, {
                        display: "inline-block"
                    }, $, [e, "marginRight"]) : void 0
                }),
                ce.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (e, t) {
                    ce.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                                r[e + Oe[i] + t] = o[i] || o[i - 2] || o[0];
                            return r
                        }
                    },
                        Qe.test(e) || (ce.cssHooks[e + t].set = H)
                }),
                ce.fn.extend({
                    css: function (e, t) {
                        return Le(this, function (e, t, n) {
                            var i, r, o = {}, a = 0;
                            if (ce.isArray(t)) {
                                for (i = et(e),
                                    r = t.length; r > a; a++)
                                    o[t[a]] = ce.css(e, t[a], !1, i);
                                return o
                            }
                            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
                        }, e, t, arguments.length > 1)
                    },
                    show: function () {
                        return P(this, !0)
                    },
                    hide: function () {
                        return P(this)
                    },
                    toggle: function (e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                            Pe(this) ? ce(this).show() : ce(this).hide()
                        })
                    }
                }),
                ce.Tween = z,
                z.prototype = {
                    constructor: z,
                    init: function (e, t, n, i, r, o) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = r || ce.easing._default,
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = i,
                            this.unit = o || (ce.cssNumber[n] ? "" : "px")
                    },
                    cur: function () {
                        var e = z.propHooks[this.prop];
                        return e && e.get ? e.get(this) : z.propHooks._default.get(this)
                    },
                    run: function (e) {
                        var t, n = z.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                            this.now = (this.end - this.start) * t + this.start,
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : z.propHooks._default.set(this),
                            this
                    }
                },
                z.prototype.init.prototype = z.prototype,
                z.propHooks = {
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
                z.propHooks.scrollTop = z.propHooks.scrollLeft = {
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
                ce.fx = z.prototype.init,
                ce.fx.step = {};
            var lt, ct, ut = /^(?:toggle|show|hide)$/, dt = /queueHooks$/;
            ce.Animation = ce.extend(F, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return h(n.elem, e, je.exec(t), n),
                            n
                    }
                    ]
                },
                tweener: function (e, t) {
                    ce.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.match(Se);
                    for (var n, i = 0, r = e.length; r > i; i++)
                        n = e[i],
                            F.tweeners[n] = F.tweeners[n] || [],
                            F.tweeners[n].unshift(t)
                },
                prefilters: [B],
                prefilter: function (e, t) {
                    t ? F.prefilters.unshift(e) : F.prefilters.push(e)
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
                        return this.filter(Pe).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function (e, t, n, i) {
                        var r = ce.isEmptyObject(e)
                            , o = ce.speed(t, n, i)
                            , a = function () {
                                var t = F(this, ce.extend({}, e), o);
                                (r || Ne.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a,
                            r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
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
                                    , r = null != e && e + "queueHooks"
                                    , o = ce.timers
                                    , a = Ne.get(this);
                                if (r)
                                    a[r] && a[r].stop && i(a[r]);
                                else
                                    for (r in a)
                                        a[r] && a[r].stop && dt.test(r) && i(a[r]);
                                for (r = o.length; r--;)
                                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                                        t = !1,
                                        o.splice(r, 1));
                                !t && n || ce.dequeue(this, e)
                            })
                    },
                    finish: function (e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function () {
                                var t, n = Ne.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = ce.timers, a = i ? i.length : 0;
                                for (n.finish = !0,
                                    ce.queue(this, e, []),
                                    r && r.stop && r.stop.call(this, !0),
                                    t = o.length; t--;)
                                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                        o.splice(t, 1));
                                for (t = 0; a > t; t++)
                                    i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                ce.each(["toggle", "show", "hide"], function (e, t) {
                    var n = ce.fn[t];
                    ce.fn[t] = function (e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r)
                    }
                }),
                ce.each({
                    slideDown: q("show"),
                    slideUp: q("hide"),
                    slideToggle: q("toggle"),
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
                            var r = n.setTimeout(t, e);
                            i.stop = function () {
                                n.clearTimeout(r)
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
            var pt, ht = ce.expr.attrHandle;
            ce.fn.extend({
                attr: function (e, t) {
                    return Le(this, ce.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        ce.removeAttr(this, e)
                    })
                }
            }),
                ce.extend({
                    attr: function (e, t, n) {
                        var i, r, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (t = t.toLowerCase(),
                                r = ce.attrHooks[t] || (ce.expr.match.bool.test(t) ? pt : void 0)),
                                void 0 !== n ? null === n ? void ce.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                                    n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ce.find.attr(e, t),
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
                        var n, i, r = 0, o = t && t.match(Se);
                        if (o && 1 === e.nodeType)
                            for (; n = o[r++];)
                                i = ce.propFix[n] || n,
                                    ce.expr.match.bool.test(n) && (e[i] = !1),
                                    e.removeAttribute(n)
                    }
                }),
                pt = {
                    set: function (e, t, n) {
                        return t === !1 ? ce.removeAttr(e, n) : e.setAttribute(n, n),
                            n
                    }
                },
                ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = ht[t] || ce.find.attr;
                    ht[t] = function (e, t, i) {
                        var r, o;
                        return i || (o = ht[t],
                            ht[t] = r,
                            r = null != n(e, t, i) ? t.toLowerCase() : null,
                            ht[t] = o),
                            r
                    }
                });
            var ft = /^(?:input|select|textarea|button)$/i
                , gt = /^(?:a|area)$/i;
            ce.fn.extend({
                prop: function (e, t) {
                    return Le(this, ce.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[ce.propFix[e] || e]
                    })
                }
            }),
                ce.extend({
                    prop: function (e, t, n) {
                        var i, r, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t,
                                r = ce.propHooks[t]),
                                void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
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
                    var t, n, i, r, o, a, s, l = 0;
                    if (ce.isFunction(e))
                        return this.each(function (t) {
                            ce(this).addClass(e.call(this, t, V(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(Se) || []; n = this[l++];)
                            if (r = V(n),
                                i = 1 === n.nodeType && (" " + r + " ").replace(mt, " ")) {
                                for (a = 0; o = t[a++];)
                                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                s = ce.trim(i),
                                    r !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, i, r, o, a, s, l = 0;
                    if (ce.isFunction(e))
                        return this.each(function (t) {
                            ce(this).removeClass(e.call(this, t, V(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Se) || []; n = this[l++];)
                            if (r = V(n),
                                i = 1 === n.nodeType && (" " + r + " ").replace(mt, " ")) {
                                for (a = 0; o = t[a++];)
                                    for (; i.indexOf(" " + o + " ") > -1;)
                                        i = i.replace(" " + o + " ", " ");
                                s = ce.trim(i),
                                    r !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ce.isFunction(e) ? this.each(function (n) {
                        ce(this).toggleClass(e.call(this, n, V(this), t), t)
                    }) : this.each(function () {
                        var t, i, r, o;
                        if ("string" === n)
                            for (i = 0,
                                r = ce(this),
                                o = e.match(Se) || []; t = o[i++];)
                                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = V(this),
                                t && Ne.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ne.get(this, "__className__") || ""))
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
                , bt = /[\x20\t\r\n\f]+/g;
            ce.fn.extend({
                val: function (e) {
                    var t, n, i, r = this[0];
                    {
                        if (arguments.length)
                            return i = ce.isFunction(e),
                                this.each(function (n) {
                                    var r;
                                    1 === this.nodeType && (r = i ? e.call(this, n, ce(this).val()) : e,
                                        null == r ? r = "" : "number" == typeof r ? r += "" : ce.isArray(r) && (r = ce.map(r, function (e) {
                                            return null == e ? "" : e + ""
                                        })),
                                        t = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()],
                                        t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                                });
                        if (r)
                            return t = ce.valHooks[r.type] || ce.valHooks[r.nodeName.toLowerCase()],
                                t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                                    "string" == typeof n ? n.replace(vt, "") : null == n ? "" : n)
                    }
                }
            }),
                ce.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = ce.find.attr(e, "value");
                                return null != t ? t : ce.trim(ce.text(e)).replace(bt, " ")
                            }
                        },
                        select: {
                            get: function (e) {
                                for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                                    if (n = i[l],
                                        (n.selected || l === r) && (se.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ce.nodeName(n.parentNode, "optgroup"))) {
                                        if (t = ce(n).val(),
                                            o)
                                            return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function (e, t) {
                                for (var n, i, r = e.options, o = ce.makeArray(t), a = r.length; a--;)
                                    i = r[a],
                                        (i.selected = ce.inArray(ce.valHooks.option.get(i), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                    o
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
            var yt = /^(?:focusinfocus|focusoutblur)$/;
            ce.extend(ce.event, {
                trigger: function (e, t, i, r) {
                    var o, a, s, l, c, u, d, p = [i || Z], h = ae.call(e, "type") ? e.type : e, f = ae.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = s = i = i || Z,
                        3 !== i.nodeType && 8 !== i.nodeType && !yt.test(h + ce.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."),
                            h = f.shift(),
                            f.sort()),
                            c = h.indexOf(":") < 0 && "on" + h,
                            e = e[ce.expando] ? e : new ce.Event(h, "object" == typeof e && e),
                            e.isTrigger = r ? 2 : 3,
                            e.namespace = f.join("."),
                            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            e.result = void 0,
                            e.target || (e.target = i),
                            t = null == t ? [e] : ce.makeArray(t, [e]),
                            d = ce.event.special[h] || {},
                            r || !d.trigger || d.trigger.apply(i, t) !== !1)) {
                        if (!r && !d.noBubble && !ce.isWindow(i)) {
                            for (l = d.delegateType || h,
                                yt.test(l + h) || (a = a.parentNode); a; a = a.parentNode)
                                p.push(a),
                                    s = a;
                            s === (i.ownerDocument || Z) && p.push(s.defaultView || s.parentWindow || n)
                        }
                        for (o = 0; (a = p[o++]) && !e.isPropagationStopped();)
                            e.type = o > 1 ? l : d.bindType || h,
                                u = (Ne.get(a, "events") || {})[e.type] && Ne.get(a, "handle"),
                                u && u.apply(a, t),
                                u = c && a[c],
                                u && u.apply && Ae(a) && (e.result = u.apply(a, t),
                                    e.result === !1 && e.preventDefault());
                        return e.type = h,
                            r || e.isDefaultPrevented() || d._default && d._default.apply(p.pop(), t) !== !1 || !Ae(i) || c && ce.isFunction(i[h]) && !ce.isWindow(i) && (s = i[c],
                                s && (i[c] = null),
                                ce.event.triggered = h,
                                i[h](),
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
                                , r = Ne.access(i, t);
                            r || i.addEventListener(e, n, !0),
                                Ne.access(i, t, (r || 0) + 1)
                        },
                        teardown: function () {
                            var i = this.ownerDocument || this
                                , r = Ne.access(i, t) - 1;
                            r ? Ne.access(i, t, r) : (i.removeEventListener(e, n, !0),
                                Ne.remove(i, t))
                        }
                    }
                });
            var xt = n.location
                , kt = ce.now()
                , wt = /\?/;
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
                , Et = /([?&])_=[^&]*/
                , St = /^(.*?):[ \t]*([^\r\n]*)$/gm
                , Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                , Lt = /^(?:GET|HEAD)$/
                , At = /^\/\//
                , Nt = {}
                , $t = {}
                , Dt = "*/".concat("*")
                , _t = Z.createElement("a");
            _t.href = xt.href,
                ce.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: xt.href,
                        type: "GET",
                        isLocal: Ct.test(xt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Dt,
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
                        return t ? X(X(e, ce.ajaxSettings), t) : X(ce.ajaxSettings, e)
                    },
                    ajaxPrefilter: W(Nt),
                    ajaxTransport: W($t),
                    ajax: function (e, t) {
                        function i(e, t, i, s) {
                            var c, d, b, y, k, T = t;
                            2 !== x && (x = 2,
                                l && n.clearTimeout(l),
                                r = void 0,
                                a = s || "",
                                w.readyState = e > 0 ? 4 : 0,
                                c = e >= 200 && 300 > e || 304 === e,
                                i && (y = G(p, w, i)),
                                y = Y(p, y, w, c),
                                c ? (p.ifModified && (k = w.getResponseHeader("Last-Modified"),
                                    k && (ce.lastModified[o] = k),
                                    k = w.getResponseHeader("etag"),
                                    k && (ce.etag[o] = k)),
                                    204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state,
                                        d = y.data,
                                        b = y.error,
                                        c = !b)) : (b = T,
                                            !e && T || (T = "error",
                                                0 > e && (e = 0))),
                                w.status = e,
                                w.statusText = (t || T) + "",
                                c ? g.resolveWith(h, [d, T, w]) : g.rejectWith(h, [w, T, b]),
                                w.statusCode(v),
                                v = void 0,
                                u && f.trigger(c ? "ajaxSuccess" : "ajaxError", [w, p, c ? d : b]),
                                m.fireWith(h, [w, T]),
                                u && (f.trigger("ajaxComplete", [w, p]),
                                    --ce.active || ce.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var r, o, a, s, l, c, u, d, p = ce.ajaxSetup({}, t), h = p.context || p, f = p.context && (h.nodeType || h.jquery) ? ce(h) : ce.event, g = ce.Deferred(), m = ce.Callbacks("once memory"), v = p.statusCode || {}, b = {}, y = {}, x = 0, k = "canceled", w = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === x) {
                                    if (!s)
                                        for (s = {}; t = St.exec(a);)
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
                                return x || (e = y[n] = y[n] || e,
                                    b[e] = t),
                                    this
                            },
                            overrideMimeType: function (e) {
                                return x || (p.mimeType = e),
                                    this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > x)
                                        for (t in e)
                                            v[t] = [v[t], e[t]];
                                    else
                                        w.always(e[w.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || k;
                                return r && r.abort(t),
                                    i(0, t),
                                    this
                            }
                        };
                        if (g.promise(w).complete = m.add,
                            w.success = w.done,
                            w.error = w.fail,
                            p.url = ((e || p.url || xt.href) + "").replace(Tt, "").replace(At, xt.protocol + "//"),
                            p.type = t.method || t.type || p.method || p.type,
                            p.dataTypes = ce.trim(p.dataType || "*").toLowerCase().match(Se) || [""],
                            null == p.crossDomain) {
                            c = Z.createElement("a");
                            try {
                                c.href = p.url,
                                    c.href = c.href,
                                    p.crossDomain = _t.protocol + "//" + _t.host != c.protocol + "//" + c.host
                            } catch (T) {
                                p.crossDomain = !0
                            }
                        }
                        if (p.data && p.processData && "string" != typeof p.data && (p.data = ce.param(p.data, p.traditional)),
                            U(Nt, p, t, w),
                            2 === x)
                            return w;
                        u = ce.event && p.global,
                            u && 0 === ce.active++ && ce.event.trigger("ajaxStart"),
                            p.type = p.type.toUpperCase(),
                            p.hasContent = !Lt.test(p.type),
                            o = p.url,
                            p.hasContent || (p.data && (o = p.url += (wt.test(o) ? "&" : "?") + p.data,
                                delete p.data),
                                p.cache === !1 && (p.url = Et.test(o) ? o.replace(Et, "$1_=" + kt++) : o + (wt.test(o) ? "&" : "?") + "_=" + kt++)),
                            p.ifModified && (ce.lastModified[o] && w.setRequestHeader("If-Modified-Since", ce.lastModified[o]),
                                ce.etag[o] && w.setRequestHeader("If-None-Match", ce.etag[o])),
                            (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", p.contentType),
                            w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : p.accepts["*"]);
                        for (d in p.headers)
                            w.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (p.beforeSend.call(h, w, p) === !1 || 2 === x))
                            return w.abort();
                        k = "abort";
                        for (d in {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            w[d](p[d]);
                        if (r = U($t, p, t, w)) {
                            if (w.readyState = 1,
                                u && f.trigger("ajaxSend", [w, p]),
                                2 === x)
                                return w;
                            p.async && p.timeout > 0 && (l = n.setTimeout(function () {
                                w.abort("timeout")
                            }, p.timeout));
                            try {
                                x = 1,
                                    r.send(b, i)
                            } catch (T) {
                                if (!(2 > x))
                                    throw T;
                                i(-1, T)
                            }
                        } else
                            i(-1, "No Transport");
                        return w
                    },
                    getJSON: function (e, t, n) {
                        return ce.get(e, t, n, "json")
                    },
                    getScript: function (e, t) {
                        return ce.get(e, void 0, t, "script")
                    }
                }),
                ce.each(["get", "post"], function (e, t) {
                    ce[t] = function (e, n, i, r) {
                        return ce.isFunction(n) && (r = r || i,
                            i = n,
                            n = void 0),
                            ce.ajax(ce.extend({
                                url: e,
                                type: t,
                                dataType: r,
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
            var Ht = /%20/g
                , jt = /\[\]$/
                , Ot = /\r?\n/g
                , Pt = /^(?:submit|button|image|reset|file)$/i
                , zt = /^(?:input|select|textarea|keygen)/i;
            ce.param = function (e, t) {
                var n, i = [], r = function (e, t) {
                    t = ce.isFunction(t) ? t() : null == t ? "" : t,
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = ce.ajaxSettings && ce.ajaxSettings.traditional),
                    ce.isArray(e) || e.jquery && !ce.isPlainObject(e))
                    ce.each(e, function () {
                        r(this.name, this.value)
                    });
                else
                    for (n in e)
                        J(n, e[n], t, r);
                return i.join("&").replace(Ht, "+")
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
                            return this.name && !ce(this).is(":disabled") && zt.test(this.nodeName) && !Pt.test(e) && (this.checked || !ze.test(e))
                        }).map(function (e, t) {
                            var n = ce(this).val();
                            return null == n ? null : ce.isArray(n) ? ce.map(n, function (e) {
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
                ce.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) { }
                }
                ;
            var Rt = {
                0: 200,
                1223: 204
            }
                , qt = ce.ajaxSettings.xhr();
            se.cors = !!qt && "withCredentials" in qt,
                se.ajax = qt = !!qt,
                ce.ajaxTransport(function (e) {
                    var t, i;
                    return se.cors || qt && !e.crossDomain ? {
                        send: function (r, o) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                for (a in e.xhrFields)
                                    s[a] = e.xhrFields[a];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                                e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                            for (a in r)
                                s.setRequestHeader(a, r[a]);
                            t = function (e) {
                                return function () {
                                    t && (t = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                                        "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Rt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
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
                            send: function (i, r) {
                                t = ce("<script>").prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function (e) {
                                    t.remove(),
                                        n = null,
                                        e && r("error" === e.type ? 404 : 200, e.type)
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
            var Mt = []
                , Bt = /(=)\?(?=&|$)|\?\?/;
            ce.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Mt.pop() || ce.expando + "_" + kt++;
                    return this[e] = !0,
                        e
                }
            }),
                ce.ajaxPrefilter("json jsonp", function (e, t, i) {
                    var r, o, a, s = e.jsonp !== !1 && (Bt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(e.data) && "data");
                    return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ce.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        s ? e[s] = e[s].replace(Bt, "$1" + r) : e.jsonp !== !1 && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        e.converters["script json"] = function () {
                            return a || ce.error(r + " was not called"),
                                a[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = n[r],
                        n[r] = function () {
                            a = arguments
                        }
                        ,
                        i.always(function () {
                            void 0 === o ? ce(n).removeProp(r) : n[r] = o,
                                e[r] && (e.jsonpCallback = t.jsonpCallback,
                                    Mt.push(r)),
                                a && ce.isFunction(o) && o(a[0]),
                                a = o = void 0
                        }),
                        "script") : void 0
                }),
                ce.parseHTML = function (e, t, n) {
                    if (!e || "string" != typeof e)
                        return null;
                    "boolean" == typeof t && (n = t,
                        t = !1),
                        t = t || Z;
                    var i = be.exec(e)
                        , r = !n && [];
                    return i ? [t.createElement(i[1])] : (i = m([e], t, r),
                        r && r.length && ce(r).remove(),
                        ce.merge([], i.childNodes))
                }
                ;
            var It = ce.fn.load;
            ce.fn.load = function (e, t, n) {
                if ("string" != typeof e && It)
                    return It.apply(this, arguments);
                var i, r, o, a = this, s = e.indexOf(" ");
                return s > -1 && (i = ce.trim(e.slice(s)),
                    e = e.slice(0, s)),
                    ce.isFunction(t) ? (n = t,
                        t = void 0) : t && "object" == typeof t && (r = "POST"),
                    a.length > 0 && ce.ajax({
                        url: e,
                        type: r || "GET",
                        dataType: "html",
                        data: t
                    }).done(function (e) {
                        o = arguments,
                            a.html(i ? ce("<div>").append(ce.parseHTML(e)).find(i) : e)
                    }).always(n && function (e, t) {
                        a.each(function () {
                            n.apply(this, o || [e.responseText, t, e])
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
                        var i, r, o, a, s, l, c, u = ce.css(e, "position"), d = ce(e), p = {};
                        "static" === u && (e.style.position = "relative"),
                            s = d.offset(),
                            o = ce.css(e, "top"),
                            l = ce.css(e, "left"),
                            c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1,
                            c ? (i = d.position(),
                                a = i.top,
                                r = i.left) : (a = parseFloat(o) || 0,
                                    r = parseFloat(l) || 0),
                            ce.isFunction(t) && (t = t.call(e, n, ce.extend({}, s))),
                            null != t.top && (p.top = t.top - s.top + a),
                            null != t.left && (p.left = t.left - s.left + r),
                            "using" in t ? t.using.call(e, p) : d.css(p)
                    }
                },
                ce.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function (t) {
                                ce.offset.setOffset(this, e, t)
                            });
                        var t, n, i = this[0], r = {
                            top: 0,
                            left: 0
                        }, o = i && i.ownerDocument;
                        if (o)
                            return t = o.documentElement,
                                ce.contains(t, i) ? (r = i.getBoundingClientRect(),
                                    n = K(o),
                                {
                                    top: r.top + n.pageYOffset - t.clientTop,
                                    left: r.left + n.pageXOffset - t.clientLeft
                                }) : r
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
                        return Le(this, function (e, i, r) {
                            var o = K(e);
                            return void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                        }, e, i, arguments.length)
                    }
                }),
                ce.each(["top", "left"], function (e, t) {
                    ce.cssHooks[t] = D(se.pixelPosition, function (e, n) {
                        return n ? (n = $(e, t),
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
                        ce.fn[i] = function (i, r) {
                            var o = arguments.length && (n || "boolean" != typeof i)
                                , a = n || (i === !0 || r === !0 ? "margin" : "border");
                            return Le(this, function (t, n, i) {
                                var r;
                                return ce.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ce.css(t, n, a) : ce.style(t, n, i, a)
                            }, t, o ? i : void 0, o, null)
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
                r = function () {
                    return ce
                }
                    .apply(t, i),
                !(void 0 !== r && (e.exports = r));
            var Ft = n.jQuery
                , Vt = n.$;
            return ce.noConflict = function (e) {
                return n.$ === ce && (n.$ = Vt),
                    e && n.jQuery === ce && (n.jQuery = Ft),
                    ce
            }
                ,
                o || (n.jQuery = n.$ = ce),
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
        (function (t, i) {
            if (n(6),
                "undefined" == typeof t)
                throw new Error("ComboBox's JavaScript requires jQuery");
            var r = {
                CHANGE: "change",
                VALUE_SELECT: "valueSelect"
            }
                , o = function (e, t) {
                    this.$select = i('<select aria-label="' + t.ariaLabel + '" class="combobox"></select>'),
                        this.options = t;
                    for (var n = 0; n < t.listOptions.length; n++) {
                        var o = t.listOptions[n]
                            , a = i('<option value="' + o.value + '" aria-label="' + o.ariaLabel + '">' + o.htmlText + "</option>");
                        n === t.selectedIndex && a.prop("selected", !0),
                            this.$select.append(a)
                    }
                    this.selectedValue = this.getSelectedValue(),
                        this.$select.change(function (e) {
                            var t = this.getSelectedValue();
                            t !== this.selectedValue && (this.selectedValue = t,
                                i(this).trigger(r.VALUE_SELECT, t))
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
                o.Event = r,
                e.exports = o
        }
        ).call(t, n(3), n(3))
    }
    , function (e, t, n) {
        var i = n(7);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(9)(i, {});
        i.locals && (e.exports = i.locals)
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
                    for (var i = {}, r = 0; r < this.length; r++) {
                        var o = this[r][0];
                        "number" == typeof o && (i[o] = !0)
                    }
                    for (r = 0; r < t.length; r++) {
                        var a = t[r];
                        "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                            e.push(a))
                    }
                }
                ,
                e
        }
    }
    , function (e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n]
                    , r = h[i.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++)
                        r.parts[o](i.parts[o]);
                    for (; o < i.parts.length; o++)
                        r.parts.push(c(i.parts[o], t))
                } else {
                    for (var a = [], o = 0; o < i.parts.length; o++)
                        a.push(c(i.parts[o], t));
                    h[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function r(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var r = e[i]
                    , o = r[0]
                    , a = r[1]
                    , s = r[2]
                    , l = r[3]
                    , c = {
                        css: a,
                        media: s,
                        sourceMap: l
                    };
                n[o] ? n[o].parts.push(c) : t.push(n[o] = {
                    id: o,
                    parts: [c]
                })
            }
            return t
        }
        function o(e, t) {
            var n = m()
                , i = y[y.length - 1];
            if ("top" === e.insertAt)
                i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                    y.push(t);
            else {
                if ("bottom" !== e.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function a(e) {
            e.parentNode.removeChild(e);
            var t = y.indexOf(e);
            t >= 0 && y.splice(t, 1)
        }
        function s(e) {
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
        function c(e, t) {
            var n, i, r;
            if (t.singleton) {
                var o = b++;
                n = v || (v = s(t)),
                    i = u.bind(null, n, o, !1),
                    r = u.bind(null, n, o, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t),
                    i = p.bind(null, n),
                    r = function () {
                        a(n),
                            n.href && URL.revokeObjectURL(n.href)
                    }
                ) : (n = s(t),
                    i = d.bind(null, n),
                    r = function () {
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
                        r()
                }
        }
        function u(e, t, n, i) {
            var r = n ? "" : i.css;
            if (e.styleSheet)
                e.styleSheet.cssText = x(t, r);
            else {
                var o = document.createTextNode(r)
                    , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                    a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
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
        function p(e, t) {
            var n = t.css
                , i = t.sourceMap;
            i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var r = new Blob([n], {
                type: "text/css"
            })
                , o = e.href;
            e.href = URL.createObjectURL(r),
                o && URL.revokeObjectURL(o)
        }
        var h = {}
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
            , b = 0
            , y = [];
        e.exports = function (e, t) {
            t = t || {},
                "undefined" == typeof t.singleton && (t.singleton = g()),
                "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = r(e);
            return i(n, t),
                function (e) {
                    for (var o = [], a = 0; a < n.length; a++) {
                        var s = n[a]
                            , l = h[s.id];
                        l.refs--,
                            o.push(l)
                    }
                    if (e) {
                        var c = r(e);
                        i(c, t)
                    }
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a];
                        if (0 === l.refs) {
                            for (var u = 0; u < l.parts.length; u++)
                                l.parts[u]();
                            delete h[l.id]
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
        (function (t, i) {
            function r(e) {
                return "undefined" != typeof e.step && ("undefined" == typeof e.ticks || "undefined" == typeof e.ticks.step || e.ticks.step < e.step) && ("undefined" == typeof e.ticks && (e.ticks = {}),
                    e.ticks.step = e.step),
                    e
            }
            function o(e) {
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
                        , r = e.clientY;
                    t.setAnimationEnable(!1),
                        t.updateSize();
                    var o, a = i(e.target).hasClass("cg-slider-handle-right");
                    o = a ? t.$rightHandle : t.$leftHandle,
                        o.focus();
                    var c = parseInt(o.css("left"))
                        , u = -1 == o.css("bottom").indexOf("%") ? parseInt(o.css("bottom")) : parseFloat(o.css("bottom")) * t.options.pixelMax / 100;
                    isNaN(c) && (c = 0),
                        isNaN(u) && (u = 0),
                        t.startDragValue = t.getValue();
                    var d = {
                        $handle: o,
                        sliderInstance: t,
                        startClientX: n,
                        startClientY: r,
                        startElemX: c,
                        startElemY: u
                    };
                    i(document).on("mousemove" + y.EVENT_CLASS + " touchmove" + y.EVENT_CLASS, d, s),
                        i(document).on("mouseup" + y.EVENT_CLASS + " touchend" + y.EVENT_CLASS, d, l)
                }
            }
            function s(e) {
                e.preventDefault(),
                    e.stopPropagation(),
                    v(e);
                var t = i(e.data.$handle).hasClass("cg-slider-handle-right")
                    , n = e.data.sliderInstance
                    , r = n.options.isVertical ? e.data.startElemY - e.clientY + e.data.startClientY : e.data.startElemX + e.clientX - e.data.startClientX;
                return n.onDrag || (n.onDrag = !0),
                    t ? n.setValue(h(r, n.options), !1) : n.setValue([h(r, n.options), n.value[1]], !1),
                    JSON.stringify(n.startDragValue) != JSON.stringify(n.getValue()) && (n.changedOnDrag || (n.changedOnDrag = !0,
                        i(n).trigger(y.START_CHANGE))),
                    !1
            }
            function l(e) {
                var t = e.data.sliderInstance;
                i(document).off("mousemove" + y.EVENT_CLASS + " touchmove" + y.EVENT_CLASS),
                    i(document).off("mouseup" + y.EVENT_CLASS + " touchend" + y.EVENT_CLASS),
                    t.startDragValue && (t.changedOnDrag && i(t).trigger(y.STOP_CHANGE, [t.getValue()]),
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
                i(t).trigger(y.START_CHANGE),
                    t.updateSize();
                var n = t.options.isVertical ? h(t.options.pixelMax - e.pageY + t.$clickArea.offset().top, t.options) : h(e.pageX - t.$clickArea.offset().left, t.options);
                t.options.isRange ? n > t.value[1] ? t.setValue([t.value[0], n]) : n < t.value[0] ? t.setValue([n, t.value[1]]) : Math.abs(n - t.value[0]) > Math.abs(n - t.value[1]) ? t.setValue([t.value[0], n]) : t.setValue([n, t.value[1]]) : t.setValue(n),
                    i(t).trigger(y.STOP_CHANGE, [t.getValue()])
            }
            function u(e) {
                var t = e.data
                    , n = i(e.target).hasClass("cg-slider-handle-right");
                if (t.options.enable) {
                    var r;
                    switch (e.keyCode) {
                        case w.HOME:
                        case w.PAGE_DOWN:
                            r = n ? t.options.min : [t.options.min, t.value[1]];
                            break;
                        case w.END:
                        case w.PAGE_UP:
                            r = n ? t.options.max : [t.options.max, t.value[1]];
                            break;
                        case w.UP:
                        case w.RIGHT:
                            r = n ? t.value[1] + t.options.step : [t.value[0] + t.options.step, t.value[1]];
                            break;
                        case w.DOWN:
                        case w.LEFT:
                            r = n ? t.value[1] - t.options.step : [t.value[0] - t.options.step, t.value[1]]
                    }
                    "undefined" == typeof r || isNaN(r) && (isNaN(r[0]) || isNaN(r[1])) || (t.changedOnDrag || (t.changedOnDrag = !0,
                        i(t).trigger(y.START_CHANGE),
                        i(e.target).on("keyup" + y.EVENT_CLASS, t, d)),
                        t.setValue(r),
                        e.preventDefault())
                }
            }
            function d(e) {
                var t = e.data;
                t.changedOnDrag && (i(t).trigger(y.STOP_CHANGE, [t.getValue()]),
                    t.changedOnDrag = !1),
                    i(e.target).off("keyup" + y.EVENT_CLASS)
            }
            function p(e) {
                var t = -1
                    , n = (1 + e + "").split(".");
                return 2 == n.length && (t = n[1].length),
                    t
            }
            function h(e, t) {
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
                var n = p(t.step);
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
            function b(e) {
                var t, n = arguments;
                if (1 == n.length && "string" == typeof n[0]) {
                    if (t = i(this[0]).data("competentum.slider"),
                        !t)
                        throw new Error("Slider is not initialized.");
                    return t.getOption(n[0])
                }
                return this.each(function () {
                    var r = i(this);
                    if (t = r.data("competentum.slider"))
                        if (1 == n.length && "object" == typeof n[0])
                            t.setOptions(n[0]);
                        else {
                            if (2 != n.length || "string" != typeof n[0])
                                throw new Error("Slider: wrong count or type of arguments.");
                            t.setOption(n[0], n[1])
                        }
                    else
                        t = new T(this, e),
                            r.data("competentum.slider", t)
                })
            }
            if (n(11),
                "undefined" == typeof t)
                throw new Error("Slider's JavaScript requires jQuery");
            var y = {
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
                , k = {
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
                , w = {
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
                        r(t),
                        n.options = i.extend(!0, {}, k, t),
                        o(n.options),
                        n.snapIntervalPrecision = p(n.options.step),
                        n.options.isVertical && n.$domElement.addClass("cg-slider-vertical"),
                        n.$rootElement = i('<div class="cg-slider-controlBar">	                        <div class="cg-slider-alignmentTable">	                            <div class="cg-slider-alignmentCell">	                                <div class="cg-slider-bg">	                                    <div class="cg-slider-progress"></div>	                                </div>	                            </div>	                        </div>	                        <div class="cg-slider-handle cg-slider-handle-left" tabindex="0" role="slider" 	                        aria-label="" aria-valuetext="0" aria-valuenow="0" 	                        aria-valuemin="' + n.options.min + '" aria-valuemax="' + n.options.max + '"></div>	                        <div class="cg-slider-handle cg-slider-handle-right" tabindex="0" role="slider" 	                        aria-label="" aria-valuetext="0" aria-valuenow="0" 	                        aria-valuemin="' + n.options.min + '" aria-valuemax="' + n.options.max + '"></div>	                    </div>').appendTo(e),
                        n.setAnimationEnable(n.options.enableAnimation),
                        i(window).on("resize", function () {
                            n.updateSliderPosition()
                        }),
                        i(n).on(y.START_CHANGE, function () {
                            n.$domElement.trigger(y.START_CHANGE),
                                n.options.onStartChange()
                        }).on(y.CHANGE, function (e, t) {
                            n.$domElement.trigger(y.CHANGE, [t]),
                                n.options.onChange(t)
                        }).on(y.STOP_CHANGE, function (e, t) {
                            n.$domElement.trigger(y.STOP_CHANGE, [t]),
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
                    var r = this;
                    "array" != i.type(e) && (e = [r.value[0], e]);
                    var o = !1;
                    if (r.options.enableAnimation && r.$rootElement.data("animation")) {
                        var a = Math.max(Math.abs(f(e[0], r.options) - f(r.value[0], r.options)), Math.abs(f(e[1], r.options) - f(r.value[1], r.options)));
                        (t === !1 || a < r.options.minAnimationDistance) && (r.setAnimationEnable(!1),
                            o = !0)
                    }
                    e[0] = m(e[0], r.options),
                        e[1] = m(e[1], r.options),
                        r.options.isRange ? e[0] == r.value[0] ? e[1] = Math.max(e[1], r.value[0] + r.options.step) : e[0] = Math.min(e[0], e[1] - r.options.step) : e[0] = r.options.min,
                        (JSON.stringify(r.value) != JSON.stringify(e) || n) && (r.value = e,
                            r.updateTooltipValues(),
                            r.updateSliderPosition(),
                            r.$leftHandle.attr("aria-valuetext", e[0]),
                            r.$rightHandle.attr("aria-valuetext", e[1]),
                            r.$leftHandle.attr("aria-valuenow", e[0]),
                            r.$rightHandle.attr("aria-valuenow", e[1]),
                            i(r).trigger(y.CHANGE, [r.getValue()])),
                        o && r.setAnimationEnable(!0)
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
                            , r = 0
                            , o = t.min;
                        do {
                            var a = {
                                $domElement: i('<div class="cg-slider-tick"></div>').prependTo(e.$staticElement)
                            };
                            a.$domElement.addClass("cg-slider-tick-" + t.ticks.position),
                                t.isVertical ? a.$domElement.css("bottom", g(o, t) + "%") : a.$domElement.css("left", g(o, t) + "%"),
                                t.ticks.withLabels && (a.$label = i('<div class="cg-slider-tick-label">' + t.ticks.labelFormatter(o) + "</div>").appendTo(a.$domElement),
                                    n = Math.max(n, a.$label.width())),
                                e.ticks.push(a),
                                o += t.ticks.step
                        } while (o <= t.max); r = e.ticks[0].$label.height(),
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
            var E = i.fn.slider;
            i.fn.slider = b,
                i.fn.slider.Constructor = T;
            var S = i.fn.val;
            i.fn.val = function (e, t) {
                var n = i(this)
                    , r = n.data("competentum.slider");
                return "undefined" != typeof r ? "undefined" != typeof e ? (r.setValue(e, t),
                    n) : r.getValue() : S.apply(this, arguments)
            }
                ,
                i.fn.slider.noConflict = function () {
                    return i.fn.slider = E,
                        this
                }
                ,
                T.Event = y,
                T.TicksPosition = x,
                e.exports = T
        }
        ).call(t, n(3), n(3))
    }
    , function (e, t, n) {
        var i = n(12);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(9)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(8)(),
            t.push([e.id, '.cg-slider-controlBar{display:inline-block;vertical-align:middle;position:relative;height:28px}.cg-slider-vertical .cg-slider-controlBar{height:100%;width:28px}.cg-slider-alignmentTable{display:table;height:100%;width:100%;vertical-align:middle;table-layout:fixed}.cg-slider-alignmentCell{display:table-cell;width:100%;height:100%;vertical-align:middle}.cg-slider-bg{width:100%;height:4px;box-sizing:border-box;-ms-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;border:none;background:#aaa;position:relative;margin:auto}.cg-slider-vertical .cg-slider-bg{width:4px;height:100%}.cg-slider-progress{position:absolute;height:100%;background:#2196f3}.cg-slider-vertical .cg-slider-progress{width:100%;height:auto}.cg-slider-handle{position:absolute;cursor:pointer;left:0;top:50%;margin:-6px;width:12px;height:12px;background-color:#2196f3;border-radius:50%}.cg-slider-vertical .cg-slider-handle{left:50%;bottom:0;top:auto}.cg-slider-handle:after{content:"";position:absolute;left:-4px;right:-4px;bottom:-4px;top:-4px;border-radius:50%}.cg-slider-handle-tooltip{display:none;color:#fff;cursor:default;z-index:100;font-size:12px;text-align:center;padding-left:3px;padding-right:3px;line-height:22px;height:22px;min-width:16px;position:absolute;top:-24px;background-color:#2196f3;border-radius:10px}.cg-slider-vertical .cg-slider-handle-tooltip{top:auto;margin-bottom:-10px;margin-left:17px;left:50%}.cg-slider-handle-tooltip:after{content:"";width:0;height:0;position:absolute;left:50%;bottom:-5px;margin-left:-7px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:8px solid #2196f3}.cg-slider-vertical .cg-slider-handle-tooltip:after{content:"";width:0;height:0;position:absolute;top:50%;left:-5px;margin-top:-7px;border-right:8px solid #2196f3;border-bottom:7px solid transparent;border-top:7px solid transparent}.cg-slider-handle:focus{outline:none}.cg-slider-handle:focus:after{content:"";position:absolute;left:-4px;right:-4px;bottom:-4px;top:-4px;border-radius:50%;background-color:rgba(33,150,243,.3)}.cg-slider-handle:active:after,.cg-slider-handle:hover:after{content:"";position:absolute;left:-4px;right:-4px;bottom:-4px;top:-4px;border-radius:50%;background-color:#2196f3}.cg-slider-handle.disable,.cg-slider-handle.disable:active,.cg-slider-handle.disable:hover{cursor:default;opacity:.3}.cg-slider-controlBar[animation=on] .cg-slider-progress{transition:left .5s ease-in-out,width .5s ease-in-out}.cg-slider-vertical .cg-slider-controlBar[animation=on] .cg-slider-progress{transition:bottom .5s ease-in-out,height .5s ease-in-out}.cg-slider-controlBar[animation=on] .cg-slider-handle,.cg-slider-controlBar[animation=on] .cg-slider-handle-tooltip{transition:left .5s ease-in-out}.cg-slider-vertical .cg-slider-controlBar[animation=on] .cg-slider-handle,.cg-slider-vertical .cg-slider-controlBar[animation=on] .cg-slider-handle-tooltip{transition:bottom .5s ease-in-out}.cg-slider-bg.disable,.cg-slider-bg.disable:active,.cg-slider-bg.disable:hover{cursor:default;opacity:.3}.cg-slider-tick{position:absolute;width:2px;margin-left:-1px;height:10px;background-color:#aaa}.cg-slider-vertical .cg-slider-tick{margin-left:0;margin-bottom:-1px;width:10px;height:2px}.cg-slider-tick-bottom{top:0}.cg-slider-tick-top{bottom:0}.cg-slider-tick-left{right:0}.cg-slider-tick-right{left:0}.cg-slider-tick-label{position:absolute;font-size:12px}.cg-slider-tick-bottom .cg-slider-tick-label{text-align:center;top:12px}.cg-slider-tick-top .cg-slider-tick-label{text-align:center;bottom:12px}.cg-slider-tick-left .cg-slider-tick-label{padding-top:1px;right:12px}.cg-slider-tick-right .cg-slider-tick-label{padding-top:1px;left:12px}.cg-slider-with-labels-bottom{margin-bottom:15px}.cg-slider-with-labels-top{margin-top:15px}.cg-slider-with-labels-left{margin-left:40px}.cg-slider-with-labels-right{margin-right:40px}', ""])
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
        var i = n(15);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(9)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(8)(),
            t.push([e.id, ".applet{width:800px;margin:0 auto}.applet .controls_additional{text-align:left}.applet .propagation{margin-top:-7px}.applet .controls{margin:-20px -30px 20px -10px}.controls button{width:25%}.applet .propagation p{display:inline-block;margin:5px 0}.applet .propagation .checkboxes{display:inline-block}.applet .checkboxes .checkbox1,.applet .checkboxes .checkbox2,.applet .checkboxes .checkbox3{display:inline-block;margin-left:50px}.applet .checkbox{outline:2px solid transparent}.applet .checkbox:focus{outline:2px dotted #000}.applet .checkboxes label{font-size:80%;margin-left:5px}.applet .simulation .slider{display:inline-block;margin-left:150px}.applet .simulation p{display:inline-block}.applet .simulation .slider p{margin:10px}.applet .simulation .slider .body{width:70px;display:inline-block}", ""])
    }
    , function (e, t, n) {
        var i = n(17);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(9)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(8)(),
            t.push([e.id, ".visualisation{background-color:#f3f3f3;padding:20px 30px 20px 10px;display:inline-block}.visualisation .node:first-child{margin-left:20px}.applet .visualisation .link,.visualisation .node{display:inline-block}.visualisation .link{position:relative;bottom:50px}.visualisation .node{height:310px;width:70px;vertical-align:bottom}.visualisation .node .buffer{padding:0 3px}.visualisation .node .underbuffer{padding:5px 1px 0;margin:5px 0;border:1px solid #000}.buffer .internal,.buffer .receive,.buffer .transmit{height:200px;width:60px;display:table-cell;padding:0 3px;vertical-align:bottom;line-height:10px}.buffer .internal.nondisplay .kbit,.buffer .receive.nondisplay .kbit,.buffer .transmit.nondisplay .kbit{display:none}.buffer .char{margin-top:10px;text-align:center;margin-bottom:2px;font-weight:700}.receive .kbit.init,.underbuffer .receive{background-color:#d90000}.internal .kbit.init,.underbuffer .internal{background-color:#18185d}.transmit .kbit.init,.underbuffer .transmit{background-color:green}.underbuffer .internal,.underbuffer .receive,.underbuffer .transmit{width:12px;height:40px;display:inline-block;margin:0 5px}.link .kbit,.node .kbit{width:10px;height:3px;border:1px solid #000;display:inline-block}.link .on{height:15px}.link .off,.link .on{width:75px;display:inline-block}.link .off{height:5px;margin:5px 0;background-color:#2aaeeb}.link .container.link-off .on,.link .container.link-on .off{display:none}.link .kbit.first{background-color:blue}.link .kbit.other{background-color:#2aaeeb}.link .kbit{margin:5px 3px}.link .kbit:first-of-type{margin-left:4px}.legend,.link .label{text-align:center}.legend,.link .label,.time{font-size:90%;font-weight:700}.time{padding-left:200px;color:blue}.device-name{text-align:center;font-size:80%;color:blue;font-weight:700}.legend span{border:1px solid #000;padding:1px 5px}.legend div{margin:3px}", ""]);
    }
    , function (e, t, n) {
        var i = n(19);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(9)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(8)(),
            t.push([e.id, ".combocontrols{min-width:650px;max-width:800px}.combocontrols .message,.combocontrols .packet{min-width:325px;max-width:395px}.combobox{margin-left:20px;min-width:50px}.combocontrols>div{display:inline-block;text-align:center}.combocontrols>div>p{margin:0;text-align:left}.cb_list{border-bottom:1px solid #adadad}.combocontrols{margin-bottom:7px;text-align:left}.combocontrols .message,.combocontrols .packet{display:inline-block}", ""])
    }
    , function (e, t, n) {
        var i = n(21);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(9)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(8)(),
            t.push([e.id, "body{font-family:Arial,sans-serif}.header,h1{color:#101027;font-size:200%;font-weight:400;margin:.67em 0}.focusable,canvas{border:3px solid transparent}.focusable:focus,button:focus,canvas:focus{outline:none;border:3px dotted #000}.text,p{font-size:100%;margin:1em 0}button{font-size:80%;height:25px;background:linear-gradient(#fff,#f0f0f0);border:1px solid #adadad;box-sizing:border-box}button:disabled{background:#d3d3d3;border:1px solid #bcbcbc}button::-moz-focus-inner{border:0}.navigation{width:0;height:0;padding:0;margin:0;overflow:hidden}", ""])
    }
    , function (e, t) {
        e.exports = {
            MessageComboBox: {
                listOptions: [{
                    htmlText: "1",
                    ariaLabel: "1",
                    value: "1"
                }, {
                    htmlText: "2",
                    ariaLabel: "2",
                    value: "2"
                }, {
                    htmlText: "3",
                    ariaLabel: "3",
                    value: "3"
                }, {
                    htmlText: "4",
                    ariaLabel: "4",
                    value: "4"
                }, {
                    htmlText: "5",
                    ariaLabel: "5",
                    value: "5"
                }, {
                    htmlText: "6",
                    ariaLabel: "6",
                    value: "6"
                }, {
                    htmlText: "7",
                    ariaLabel: "7",
                    value: "7"
                }, {
                    htmlText: "8",
                    ariaLabel: "8",
                    value: "8"
                }, {
                    htmlText: "9",
                    ariaLabel: "9",
                    value: "9"
                }, {
                    htmlText: "10",
                    ariaLabel: "10",
                    value: "10"
                }, {
                    htmlText: "11",
                    ariaLabel: "11",
                    value: "11"
                }, {
                    htmlText: "12",
                    ariaLabel: "12",
                    value: "12"
                }, {
                    htmlText: "13",
                    ariaLabel: "13",
                    value: "13"
                }, {
                    htmlText: "14",
                    ariaLabel: "14",
                    value: "14"
                }, {
                    htmlText: "15",
                    ariaLabel: "15",
                    value: "15"
                }, {
                    htmlText: "16",
                    ariaLabel: "16",
                    value: "16"
                }],
                selectedIndex: 15,
                label: "报文大小 (kbits):",
                ariaLabel: "Message Size in kilobits"
            },
            PacketComboBox: {
                listOptions: [{
                    htmlText: "1",
                    ariaLabel: "1",
                    value: "1"
                }, {
                    htmlText: "2",
                    ariaLabel: "2",
                    value: "2"
                }, {
                    htmlText: "3",
                    ariaLabel: "3",
                    value: "3"
                }, {
                    htmlText: "4",
                    ariaLabel: "4",
                    value: "4"
                }, {
                    htmlText: "5",
                    ariaLabel: "5",
                    value: "5"
                }, {
                    htmlText: "6",
                    ariaLabel: "6",
                    value: "6"
                }, {
                    htmlText: "7",
                    ariaLabel: "7",
                    value: "7"
                }, {
                    htmlText: "8",
                    ariaLabel: "8",
                    value: "8"
                }, {
                    htmlText: "9",
                    ariaLabel: "9",
                    value: "9"
                }, {
                    htmlText: "10",
                    ariaLabel: "10",
                    value: "10"
                }, {
                    htmlText: "11",
                    ariaLabel: "11",
                    value: "11"
                }, {
                    htmlText: "12",
                    ariaLabel: "12",
                    value: "12"
                }, {
                    htmlText: "13",
                    ariaLabel: "13",
                    value: "13"
                }, {
                    htmlText: "14",
                    ariaLabel: "14",
                    value: "14"
                }, {
                    htmlText: "15",
                    ariaLabel: "15",
                    value: "15"
                }, {
                    htmlText: "16",
                    ariaLabel: "16",
                    value: "16"
                }],
                selectedIndex: 4,
                label: "包大小 (kbits):",
                ariaLabel: "Package Size in kilobits"
            }
        }
    }
    , function (e, t) {
        e.exports = {
            texts: [{
                selector: ".applet .controls_additional",
                text: "* 对于报文交换，将数据包大小设置为报文大小。",
                alt: ""
            }, {
                selector: ".applet .propagation p",
                text: "可选的传播延迟：",
                alt: ""
            }, {
                selector: ".applet .propagation .checkboxes .checkbox1 label",
                text: "L1",
                alt: "设置可选的传播延迟为 L1"
            }, {
                selector: ".applet .propagation .checkboxes .checkbox2 label",
                text: "L2",
                alt: "设置可选的传播延迟为 L2"
            }, {
                selector: ".applet .propagation .checkboxes .checkbox3 label",
                text: "L3",
                alt: "设置可选的传播延迟为 L3"
            }, {
                selector: ".applet .simulation p",
                text: "模拟速度：",
                alt: ""
            }, {
                selector: ".applet .simulation .slider .before",
                text: "慢",
                alt: ""
            }, {
                selector: ".applet .simulation .slider .after",
                text: "快",
                alt: ""
            }, {
                selector: ".applet .controls .start",
                text: "开始",
                alt: "开始。按下可运行模拟并更新下方的活动。"
            }, {
                selector: ".applet .controls .pause",
                text: "暂停",
                alt: "暂停。按下可暂停模拟并获取当前模拟状态。"
            }, {
                selector: ".applet .controls .resume",
                text: "恢复",
                alt: "恢复。按继续模拟。"
            }, {
                selector: ".applet .controls .stop",
                text: "停止",
                alt: "停止。按下可完全停止并重置模拟。"
            }],
            ada: {
                navigation: "In this interactive animation, you will see why packet switching can have a smaller end to end delay than message switching. There is a scheme showing four nodes: a source, two intermediate store and forward switches and a destination node setting various parameters. These nodes are labeled A, B, C and D respectively. With the interactive animation, you can simulate data transmission between them. The message size in kilobits and the packet size in kilobits can be selected in the controls above the scheme. The nodes are connected with the solid line segments, labeled L 1, L 2 and L 3. Each of these links has a transmission rate of 4 kilobit per second. There are three corresponding checkboxes below the message and packet size pickers, to set optional propagation delay for each of these links. You can also set the simulation speed via slider. The said controls are placed above the scheme with the nodes. In addition, there are 4 more buttons to control the simulation process. Start, Pause, Resume and Stop. In the scheme below, empty rectangular shapes represent the four nodes. There are also 3 kinds of smaller rectangular shapes, representing the receive buffer, the internal buffer and the transmit buffer, placed in these nodes. Node A, which is the source, contains the internal buffer and the transmit buffer. Node D, which is the destination, contains the receive buffer and the internal buffer. Nodes B and C, which are the intermediate store and forward switches, contain the buffers of all three kinds. The size of each buffer is shown with the respective number of small rectangles, stored in two columns on top of the nodes A and, B and in 3 columns on top of the nodes B and C. Each such rectangle represents 1 kilobit of data, so the height of the respective columns representing the size of the buffers, depends in the message and the packet size. The message size affects the internal buffer, while the packet size affects the receive buffer and the transmission buffer.",
                slider: "Set the simulation speed.",
                animation1: "When you press Start, the rectangles are grouped into one packet in the source's transmit buffer. ",
                animation2a: "For all the nodes, the buffer sizes are set to {{message_size}}. As the simulation begins, the small rectangles representing the source's transmit buffer are filled with color. This means, the packet is big enough to contain the whole message at once. Then the small rectangles are emptied one by one, and as they are emptied, the pieces of the receive buffer of the first switch are filled with color. This shows the packet being transmitted to the first switch, where it must be stored before it can be forwarded. In the same manner, the packet then continues through the second switch towards the destination, where the data first appears in the receive buffer, and then stored in the internal buffer. ",
                animation2b: "For all nodes, the internal buffer size is set to {{message_size}} and the receive buffer and the transmit buffer sizes are set to {{packet_size}}. As the simulation begins, the small rectangles representing the source's transmit buffer are filled with color. The packet is not big enough to contain the whole message at once, though. {{dif}} out of {{message_size}} rectangles representing the source's internal buffer are filled with color in the beginning. The source’s transmit buffer is emptied one by one kilobit, and the corresponding small rectangles are cleared. At the same time, the receive buffer of the node B gets the data, and the corresponding small rectangles are filled with color. When the first packet is gone to the node B, the transmit buffer is filled again with another {{packet_size}} kilobits of data. If the size of the remaining data is less than the transmit buffer capacity, the last packet formed is actually less than {{packet_size}} kilobits. Each packet is transmitted to the first switch, where it must be stored before it can be forwarded. In the same manner, the packet then continues through the second switch towards the destination. ",
                animation3: "The link between the nodes {{node_1}} and {{node_2}}, which is labeled {{L_number}}, is now shown with the dashed line instead of the solid one. It actually consists of the 4 small rectangles, since the transmission rate is 4 kilobits per second. Before getting to the next node, the data first goes through these rectangles and they are filled with color respectively. The first piece of each packet is highlighted additionally. ",
                animation4: "The links {{L_number1}} and {{L_number2}} remain the solid lines, for no propagation delay is set. ",
                animation5: "The same with the link {{L_number1}}. The link {{L_number2}} remains as a solid line, for no propagation delay is set. ",
                animation6: "The same with the link {{L_number1}} and the link {{L_number2}}. ",
                pause1: "The simulation is paused now with the time elapsed equal to {{num}} seconds. ",
                pause2: "The source node contains {{internal}} kilobits of data in its internal buffer and {{transmit}} kilobits in the transmit buffer. ",
                pause2b: "The buffers of the source node are empty. ",
                pause3a: "The node B contains {{receive}}, {{internal}}, {{transmit}} kilobits of data in its receive buffer, internal buffer and transmit buffer respectively. ",
                pause3b: "The buffers of the first switch are empty. ",
                pause4: "The node C contains {{receive}}, {{internal}}, {{transmit}} kilobits of data in its receive buffer, internal buffer and transmit buffer respectively. ",
                pause4a: "The buffers of the second switch are empty. ",
                pause5a: "Finally, the destination node contains {{receive}} kilobits of data in its receive buffer and {{internal}} kilobits in the internal buffer. ",
                pause5b: "The buffers of the destination node are empty yet. ",
                pause6: "{{num}} out of 4 rectangles in the {{order}} link contain data. ",
                pause7: "Press Resume button to continue. ",
                stop1: "The simulation is stopped now with the time elapsed equal to {{num}} seconds. ",
                stop2: "The destination node contains {{num}} kilobits of data in its internal buffer. All the buffers in the other nodes are empty. ",
                stop3: "Press Start button to start over. ",
                fullStop: "The simulation is finished now with the time elapsed equal to {{num}} seconds. "
            }
        }
    }
    , function (e, t) {
        e.exports = `
    <div class="content">
        <h1>报文分段</h1>
        <p>
            通过这个交互式动画，您将看到为什么分组交换比报文交换具有更小的端到端延迟。
            在这个交互式动画中有四个节点：源（节点A）、目的地（节点B）和两个中间的存储—转发交换机。
            从源发送的每个包必须在到达目的地之前通过三个链路进行传输。
            每个链路的传输速率为 4k bps，可选的传输延迟为1秒。
        </p>
        <p>
            每个小矩形代表 1k bit 的数据。
            当您按“开始”时，矩形被分组到源的传输缓冲区中的一个包中。
            数据包被传输到第一个交换机，在转发之前必须将其存储在第一个交换机上。
            然后数据包继续向目的地发送。
        </p>
        <p>
            要模拟报文交换，请将数据包大小设置为报文大小。
            要模拟分组交换，请将数据包大小设置为小于报文大小。
            要测试链路传播延迟的影响，请选中可选的传播延迟的相应框。
            强烈建议您分析计算端到端延迟，然后使用交互式动画验证计算结果。
        </p>
        <p id="navigation" class="navigation"></p>
        <div class="applet">
            <div class="combocontrols size">
                <div class="message"></div>
                <div class="packet"></div>
            </div>
            <p class="controls_additional"></p>
            <div class="propagation">
                <p></p>
                <div class="checkboxes">
                    <div class="checkbox1">
                        <input type="checkbox" class="checkbox" id="applet_message_segmentation_checkbox1" data-id="L1">
                        <label for="applet_message_segmentation_checkbox1"></label>
                    </div>
                    <div class="checkbox2">
                        <input type="checkbox" class="checkbox" id="applet_message_segmentation_checkbox2" data-id="L2">
                        <label for="applet_message_segmentation_checkbox2"></label>
                    </div>
                    <div class="checkbox3">
                        <input type="checkbox" class="checkbox" id="applet_message_segmentation_checkbox3" data-id="L3">
                        <label for="applet_message_segmentation_checkbox3"></label>
                    </div>
                </div>
            </div>
            <div class="simulation">
                <p></p>
                <div class="slider">
                    <p class="before"></p>
                    <div class="body"></div>
                    <p class="after"></p>
                </div>
            </div>
            <div class="visualisation">
                <div class="controls">
                    <button class="start"></button>
                    <button class="pause"></button>
                    <button class="resume"></button>
                    <button class="stop"></button>
                </div>
                <div class="time">
                    <p>已用时间：<span>0.0</span></p>
                </div>
                <div class="view graphic">
                    <img class="graphic" style="margin: 0; padding: 0" />
                </div>
                <div class="legend">
                    <div>每个矩形代表1kbit的数据。</div>
                    <div>
                        <span>R：接收缓冲区    B：内部缓冲区    T：传输缓冲区</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    , function (e, t, n) {
        var i = (n(26),
            n(28),
            n(30))
            , r = n(31)
            , o = n(32)
            , a = .25
            , s = function () {
                this.kbits = [],
                    this.simulation_speed = 1,
                    this.simulation_time = 0,
                    this.device_order = ["A", "L1", "B", "L2", "C", "L3", "D"],
                    this.network_device = {
                        A: new r(this.message_size, this.package_size, "A<br>source"),
                        L1: new o(!1, 1),
                        B: new r(this.message_size, this.package_size, "B"),
                        L2: new o(!1, 2),
                        C: new r(this.message_size, this.package_size, "C"),
                        L3: new o(!1, 3),
                        D: new r(this.message_size, this.package_size, "D<br>destination")
                    },
                    this.network_device.A.first = !0,
                    this.network_device.D.last = !0,
                    this._status = "notRun"
            };
        s.prototype = {
            NOTRUN: "notRun",
            RUNNED: "runned",
            PAUSED: "paused",
            STOPPED: "stopped",
            ENDED: "ended",
            get status() {
                return this._status
            },
            set status(e) {
                e !== this.NOTRUN && e !== this.RUNNED && e !== this.PAUSED && e !== this.ENDED && e !== this.STOPPED || (this._status = e)
            },
            is_end: function () {
                return this.network_device.D.buffer.length > 0 ? this.network_device.D.buffer[this.network_device.D.buffer.length - 1].finish : !1
            },
            setInitialState: function () {
                this.simulation_time = 0;
                var e;
                for (e = 0; e < this.device_order.length; e++)
                    this.network_device[this.device_order[e]].clear();
                var t = [];
                for (e = 0; e < this.message_size; e++) {
                    var n = new i;
                    e % this.package_size === 0 && (n.first = !0),
                        t.push(n)
                }
                t[t.length - 1].finish = !0,
                    this.network_device.A.buffer = t
            },
            setMessageSize: function (e) {
                this.message_size = e,
                    this.network_device.A.messageSize = e,
                    this.network_device.B.messageSize = e,
                    this.network_device.C.messageSize = e,
                    this.network_device.D.messageSize = e
            },
            setPacketSize: function (e) {
                this.package_size = e,
                    this.network_device.A.packetSize = e,
                    this.network_device.B.packetSize = e,
                    this.network_device.C.packetSize = e,
                    this.network_device.D.packetSize = e
            },
            nextStep: function () {
                this.simulation_time += a;
                for (var e, t = 0; t < this.device_order.length; t++)
                    this.network_device[this.device_order[t]].push(e),
                        e = null,
                        e = this.network_device[this.device_order[t]].pop()
            }
        },
            e.exports = s
    }
    , function (e, t, n) {
        (function (t) {
            var i = n(4)
                , r = i(n(27))
                , o = function (e) {
                    this.model = e,
                        this.node = r.querySelector("div").cloneNode(!0),
                        this.$receive = t(this.node).find(".buffer .receive"),
                        this.$internal = t(this.node).find(".buffer .internal"),
                        this.$transmit = t(this.node).find(".buffer .transmit"),
                        t(this.node).find(".device-name").html(e.name),
                        this.model.first && t(this.node).find(".underbuffer .receive").css("background", "none"),
                        this.model.last && t(this.node).find(".underbuffer .transmit").css("background", "none")
                };
            o.prototype = {
                SOURCE: "source",
                DESTINATION: "destination",
                MIDDDLE: "middle",
                addKbit: function (e) {
                    t('<div class="kbit"></div>');
                    t('<div class="kbit"></div>').insertBefore(e.find(".char"))
                },
                updateState: function () {
                    this.$receive.find(".kbit").remove(),
                        this.$internal.find(".kbit").remove(),
                        this.$transmit.find(".kbit").remove();
                    for (var e = 0; e < this.model.packetSize; e++)
                        this.addKbit(this.$receive),
                            this.addKbit(this.$transmit);
                    for (var t = 0; t < this.model.messageSize; t++)
                        this.addKbit(this.$internal)
                },
                draw: function () {
                    this.updateState();
                    var e;
                    0 === this.model.receive.length ? this.$receive.addClass("nondisplay") : this.$receive.removeClass("nondisplay"),
                        0 === this.model.transmit.length ? this.$transmit.addClass("nondisplay") : this.$transmit.removeClass("nondisplay");
                    var t = this.$receive.find(".kbit")
                        , n = this.$internal.find(".kbit")
                        , i = this.$transmit.find(".kbit");
                    for (t.removeClass("init"),
                        n.removeClass("init"),
                        i.removeClass("init"),
                        e = t.length - 1,
                        j = 0; e >= 0; e--,
                        j++)
                        this.model.receive[j] && t.filter(":nth-child(" + (e + 1) + ")").addClass("init");
                    for (e = n.length - 1,
                        j = 0; e >= 0; e--,
                        j++)
                        this.model.buffer[j] && n.filter(":nth-child(" + (e + 1) + ")").addClass("init");
                    for (e = i.length - 1,
                        j = 0; e >= 0; e--,
                        j++)
                        this.model.transmit[j] && i.filter(":nth-child(" + (e + 1) + ")").addClass("init")
                }
            },
                e.exports = o
        }
        ).call(t, n(3))
    }
    , function (e, t) {
        e.exports = '<div class="node">\r\n  <div class="buffer">\r\n    <div class="receive nondisplay">\r\n      <div class="kbit"></div>\r\n      <div class="kbit init"></div>\r\n      <div class="kbit init"></div>\r\n      <div class="char">R</div>\r\n    </div>\r\n    <div class="internal">\r\n      <div class="kbit"></div>\r\n      <div class="kbit init"></div>\r\n      <div class="char">B</div>\r\n    </div>\r\n    <div class="transmit">\r\n      <div class="kbit"></div>\r\n      <div class="kbit init"></div>\r\n      <div class="char">T</div>\r\n    </div>\r\n  </div>\r\n  <div class="underbuffer">\r\n    <div class="receive"></div>\r\n    <div class="internal"></div>\r\n    <div class="transmit"></div>\r\n  </div>\r\n  <div class="device-name">\r\n    A<br>Source\r\n  </div>\r\n</div>\r\n'
    }
    , function (e, t, n) {
        (function (t) {
            var i = n(4)
                , r = i(n(29))
                , o = function (e) {
                    this.model = e,
                        this.node = r.querySelector("div").cloneNode(!0),
                        this.$container = t(this.node).find(".container"),
                        this.$kbit = t(this.node).find(".kbit"),
                        t(this.node).find(".label").text("L" + e.level),
                        this.size = 16
                };
            o.prototype = {
                draw: function () {
                    if (this.model.active ? (this.$container.addClass("link-on"),
                        this.$container.removeClass("link-off")) : (this.$container.addClass("link-off"),
                            this.$container.removeClass("link-on")),
                        this.$container.hasClass("link-on"))
                        for (var e = this.$kbit.length - 1, t = 0; t < this.$kbit.length; t++)
                            this.model.kbits[e - t] ? this.model.kbits[e - t].first ? (this.$kbit[t].classList.add("first"),
                                this.$kbit[t].classList.remove("other")) : (this.$kbit[t].classList.add("other"),
                                    this.$kbit[t].classList.remove("first")) : (this.$kbit[t].classList.remove("first"),
                                        this.$kbit[t].classList.remove("other"))
                }
            },
                e.exports = o
        }
        ).call(t, n(3))
    }
    , function (e, t) {
        e.exports = '<div class="link">\r\n  <div class="container link-on">\r\n    <div class="on">\r\n      <div class="kbit"></div>\r\n      <div class="kbit"></div>\r\n      <div class="kbit"></div>\r\n      <div class="kbit"></div>\r\n    </div>\r\n    <div class="off">\r\n    </div>\r\n    <div class="label">L1</div>\r\n  </div>\r\n</div>\r\n'
    }
    , function (e, t) {
        var n = function () {
            this.first = !1,
                this.finish = !1
        };
        e.exports = n
    }
    , function (e, t, n) {
        var i = n(26)
            , r = function (e) {
                return e.reduce(function (e, t) {
                    return t ? e + 1 : e
                }, 0)
            }
            , o = function (e, t, n) {
                this.first = e || !1,
                    this.last = t || !1,
                    this.name = n,
                    this.moved = !1,
                    this._packetSize = 5,
                    this._messageSize = 16,
                    this.viewClass = i,
                    this.clear()
            };
        o.prototype = {
            clear: function () {
                this.receive = [],
                    this.buffer = [],
                    this.transmit = []
            },
            set messageSize(e) {
                this._messageSize = e
            },
            get messageSize() {
                return this._messageSize
            },
            set packetSize(e) {
                this._packetSize = e
            },
            get packetSize() {
                return this._packetSize
            },
            get receiveBufferAmount() {
                return r(this.receive)
            },
            get internalBufferAmount() {
                return r(this.buffer)
            },
            get transmitBufferAmount() {
                return r(this.transmit)
            },
            get isEmpty() {
                return 0 === this.receive.length && 0 === this.buffer.length && 0 === this.transmit.length
            },
            moveBufToTr: function (e) {
                for (var t = 0; this.buffer.length > 0 && e > t;)
                    this.transmit.push(this.buffer.shift()),
                        t++
            },
            moveRcToTr: function (e) {
                for (var t = 0; this.receive.length > 0 && e > t;)
                    this.transmit.push(this.receive.shift()),
                        t++
            },
            moveRcToBuf: function (e) {
                for (var t = 0; this.receive.length > 0 && e > t;)
                    this.buffer.push(this.receive.shift()),
                        t++
            },
            pushMiddle: function (e) {
                null !== e && this.receive.push(e),
                    0 !== this.transmit.length || this.moved || (this.receive.length === this.packetSize || this.receive.length > 0 && this.receive[this.receive.length - 1].finish) && (this.moveRcToTr(this.receive.length),
                        this.moved = !0)
            },
            pushLast: function (e) {
                null !== e && this.receive.push(e),
                    this.receive.length > 0 && (this.receive.length === this.packetSize || this.receive[this.receive.length - 1].finish) && this.moveRcToBuf(this.receive.length)
            },
            push: function (e) {
                this.last ? this.pushLast(e) : this.first || this.pushMiddle(e)
            },
            pop: function () {
                return this.moved ? (this.moved = !1,
                    null) : this.first ? this.popFirst() : this.last ? null : this.popMiddle()
            },
            popFirst: function () {
                return 0 !== this.transmit.length && 1 !== this.transmit.length || this.moveBufToTr(this.packetSize),
                    this.transmit.length > 0 ? this.transmit.shift() : null
            },
            popMiddle: function () {
                var e = null;
                return this.transmit.length > 0 && (e = this.transmit.shift()),
                    0 === this.transmit.length && (this.receive.length === this.packetSize || this.receive.length > 0 && this.receive[this.receive.length - 1].finish) && this.moveRcToTr(this.receive.length),
                    e
            }
        },
            e.exports = o
    }
    , function (e, t, n) {
        var i = n(28)
            , r = function (e, t) {
                this.active = e || !1,
                    this.level = t,
                    this.viewClass = i,
                    this.active ? this.kbits = [null, null, null, null] : this.kbit = null
            };
        r.prototype = {
            clear: function () {
                this.kbits = [null, null, null, null],
                    this.kbit = null
            },
            push: function (e) {
                this.active ? this.kbits.push(e) : this.kbit = e
            },
            pop: function () {
                if (this.active)
                    return this.kbits.shift();
                var e = this.kbit;
                return this.kbit = null,
                    e
            },
            get amount() {
                return this.kbits.reduce(function (e, t) {
                    return t ? e + 1 : e
                }, 0)
            }
        },
            e.exports = r
    }
]);
