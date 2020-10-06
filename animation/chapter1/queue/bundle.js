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
        (function (e) {
            function t() {
                this.length = 0,
                    this.emissionRate = 0,
                    this.transmissionRate = 0,
                    this.currentDropped = 0,
                    this.time = 0,
                    this.emissionTime = 0,
                    this.dropperOpen = !0,
                    this.colorCount = 0,
                    this.droppedCount = 0,
                    this.allCount = 0,
                    this.comboxes = [],
                    e(".startButton").click(function () {
                        this.start()
                    }
                        .bind(this)),
                    e(".resetButton").click(function () {
                        this.reset(),
                            f.speak("Animation was stopped and reset.")
                    }
                        .bind(this)),
                    this.dropper = e(".dropper"),
                    this.queueEl = e(".queueEl"),
                    this.node = i.querySelector("div.container"),
                    this.$node = e("#emissionRateCombo");
                var t = e("<div></div>");
                this.$node.append(t);
                var n = new o(t, h);
                e(n).on(o.Event.VALUE_SELECT, function (e) { }),
                    this.$node.append(n),
                    this.comboxes.push(n),
                    this.$node = e("#transmissionRateCombo");
                var t = e("<div></div>");
                this.$node.append(t);
                var n = new o(t, g);
                e(n).on(o.Event.VALUE_SELECT, function (e) { }),
                    this.$node.append(n),
                    this.comboxes.push(n),
                    this.updateselect()
            }
            n(3),
                n(7);
            var r = n(9)
                , i = r(n(10))
                , o = n(11)
                , s = n(14);
            document.body.appendChild(i.querySelector("div").cloneNode(!0));
            var a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                , u = ["blue", "red", "green", "gray", "magenta", "black", "pink"]
                , l = []
                , c = []
                , p = []
                , d = ""
                , f = new s(5)
                , h = {
                    listOptions: [{
                        htmlText: "500 packet/s",
                        ariaLabel: "500 packets per second",
                        value: "500"
                    }, {
                        htmlText: "350 packet/s",
                        ariaLabel: "350 packets per second",
                        value: "350"
                    }],
                    selectedIndex: 0,
                    prompt: void 0,
                    ariaLabel: "Emission rate"
                }
                , g = {
                    listOptions: [{
                        htmlText: "1000 packet/s",
                        ariaLabel: "1000 packets per second",
                        value: "1000"
                    }, {
                        htmlText: "500 packet/s",
                        ariaLabel: "500 packets per second",
                        value: "500"
                    }, {
                        htmlText: "350 packet/s",
                        ariaLabel: "350 packets per second",
                        value: "350"
                    }],
                    selectedIndex: 0,
                    prompt: void 0,
                    ariaLabel: "Transmission rate"
                }
                , v = function () {
                    new t
                };
            t.prototype.updateselect = function () {
                this.emissionRate = this.comboxes[0].getSelectedValue(),
                    this.transmissionRate = this.comboxes[1].getSelectedValue(),
                    d = this.emissionRate >= this.transmissionRate ? "The packets represented by small rectangles of different colors appear almost regularly on the left edge of the transmission channel and start moving to the right quickly. As they reach the center, the square shape is painted with the respective color for some time, and then turns back to blank. Very soon, the packets start arriving to the router quicker than it is possible to process them. Therefore, packets are put in a queue. There are 10 cells in the buffer, which are filled with the same colors as the rectangles representing the packets put in a queue. The square shape now is painted not with the colors for the new arriving rectangles, but with colors of the packets taken from the buffer. After that, the place in a queue is cleared. The longer lasts the transmission, the bigger gets the queue, until all the 10 cells of the buffer are filled with packets. Now, the new arriving packets are literally dropped: as they reach the center of the transmission channel, they do not get into the buffer unless there is a free cell." : "The packets represented by small rectangles of different colors appear almost regularly on the left edge of the transmission channel and start moving to the right. As they reach the center, the square shape is painted with the respective color for a moment, and then turns back to blank. The packets then continue moving through the transmission channel and disappear at its right edge. "
            }
                ,
                t.prototype.start = function () {
                    this.reset(),
                        this.updateselect(),
                        this.emissionTime = .5,
                        f.speak(d);
                    var t = "<div class='packet' id='packet" + l.length + " '></div>";
                    e("#senderChanel").append(t);
                    var n = e(".packet");
                    l.push(n[l.length]);
                    var r = 20;
                    e(".dropped").text(this.droppedCount + "packets dropped out of " + this.allCount + "."),
                        e(l[0]).width(r),
                        e(l[0]).css({
                            "margin-left": -20,
                            background: u[0]
                        }),
                        this.timerId = setInterval(function () {
                            for (var t = 0; t < l.length; t++) {
                                var n = e(l[t]).css("margin-left").slice(0, e(l[t]).css("margin-left").length - 2);
                                if (82 > n)
                                    e(l[t]).css({
                                        "margin-left": "+=1"
                                    });
                                else if (this.allCount++,
                                    e(".droppedText").text(this.droppedCount + " packets dropped out of " + this.allCount + "."),
                                    this.dropperOpen && 0 == this.currentDropped)
                                    this.dropper.css("background-color", e(l[t]).css("background-color")),
                                        this.currentDropped++,
                                        this.dropperOpen = !1,
                                        e(l[t]).remove(),
                                        l.splice(t, 1);
                                else
                                    for (var r = 9; r >= 0; r--) {
                                        if (0 == a[r]) {
                                            e(this.queueEl[r]).css("background-color", e(l[t]).css("background-color")),
                                                a[r] = e(l[t]).css("background-color"),
                                                e(l[t]).remove(),
                                                l.splice(t, 1);
                                            break
                                        }
                                        if (0 == r) {
                                            var i = "<div class='droppedPacket' ></div>";
                                            e(".simulation").append(i);
                                            var o = e(".droppedPacket");
                                            p.push(o[p.length]),
                                                e(p[p.length - 1]).css("background-color", e(l[t]).css("background-color")),
                                                e(l[t]).remove(),
                                                l.splice(t, 1);
                                            break
                                        }
                                    }
                            }
                            for (var t = 0; t < p.length; t++)
                                e(p[t]).css("margin-top").slice(0, e(p[t]).css("margin-top").length - 2) < 50 ? e(p[t]).css("margin-top", "+=0.5") : "none" !== e(p[t]).css("display") && (this.droppedCount++,
                                    e(p[t]).css("display", "none"),
                                    e(".droppedText").text(this.droppedCount + " packets dropped out of " + this.allCount + "."));
                            for (var t = 0; t < c.length; t++)
                                e(c[t]).css("margin-left", "+=1");
                            if (this.currentDropped > 0 && (this.currentDropped++,
                                this.currentDropped > 15e3 / this.transmissionRate)) {
                                this.dropperOpen = !0,
                                    this.currentDropped = 0;
                                var i = "<div class='outPacket' ></div>";
                                e("#outChanel").prepend(i);
                                var o = e(".outPacket");
                                if (c.push(o[0]),
                                    e(o[0]).css({
                                        "margin-left": -20,
                                        background: this.dropper.css("background-color")
                                    }),
                                    this.dropper.css("background-color", "white"),
                                    0 !== a[9]) {
                                    this.dropperOpen = !1,
                                        this.dropper.css("background-color", a[9]),
                                        this.currentDropped++;
                                    for (var r = 9; r >= 1; r--)
                                        0 !== a[r - 1] ? (e(this.queueEl[r]).css("background-color", a[r - 1]),
                                            a[r] = a[r - 1]) : (e(this.queueEl[r]).css("background-color", "white"),
                                                a[r] = 0);
                                    0 !== a[0] && (e(this.queueEl[r]).css("background-color", "white"),
                                        a[r] = 0)
                                }
                            }
                            if (1 * this.time > this.emissionTime && e(l[0]).css("margin-left").slice(0, e(l[0]).css("margin-left").length - 2) > 0) {
                                this.colorCount++;
                                var i = "<div class='packet' id='packet" + l.length + " '></div>";
                                e("#senderChanel").prepend(i);
                                var o = e(".packet");
                                l.push(o[0]),
                                    e(o[0]).css("margin-left", -20),
                                    e(o[0]).css("background", u[this.colorCount % 7]),
                                    this.emissionTime += .2 + 70 / this.emissionRate * Math.random()
                            }
                            this.time = (1 * this.time + .01).toFixed(2),
                                e(".time").text(this.time + "0 mses")
                        }
                            .bind(this), 50)
                }
                ,
                t.prototype.reset = function () {
                    this.time = 0,
                        e(".time").text("0.000 mses"),
                        clearInterval(this.timerId),
                        e("div.packet").remove(),
                        e("div.outPacket").remove(),
                        e("div.droppedPacket").remove(),
                        l = [],
                        c = [],
                        p = [];
                    for (var t = 9; t >= 0; t--)
                        e(this.queueEl[t]).css("background", "white");
                    this.emissionTime = 0,
                        this.currentDropped = 0,
                        this.dropperOpen = !0,
                        e(".dropper").css("background", "white"),
                        a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        this.droppedCount = 0,
                        this.allCount = 0,
                        e(".droppedText").text(this.droppedCount + " packets dropped out of " + this.allCount + ".")
                }
                ,
                window.onload = v()
        }
        ).call(t, n(2))
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
                    , n = le.type(e);
                return "function" === n || le.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }
            function a(e, t, n) {
                if (le.isFunction(t))
                    return le.grep(e, function (e, r) {
                        return !!t.call(e, r, e) !== n
                    });
                if (t.nodeType)
                    return le.grep(e, function (e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (be.test(t))
                        return le.filter(t, e, n);
                    t = le.filter(t, e)
                }
                return le.grep(e, function (e) {
                    return re.call(t, e) > -1 !== n
                })
            }
            function u(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;)
                    ;
                return e
            }
            function l(e) {
                var t = {};
                return le.each(e.match(Ee) || [], function (e, n) {
                    t[n] = !0
                }),
                    t
            }
            function c() {
                Z.removeEventListener("DOMContentLoaded", c),
                    n.removeEventListener("load", c),
                    le.ready()
            }
            function p() {
                this.expando = le.expando + p.uid++
            }
            function d(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(je, "-$&").toLowerCase(),
                        n = e.getAttribute(r),
                        "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : De.test(n) ? le.parseJSON(n) : n
                        } catch (i) { }
                        Le.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function f(e, t, n, r) {
                var i, o = 1, s = 20, a = r ? function () {
                    return r.cur()
                }
                    : function () {
                        return le.css(e, t, "")
                    }
                    , u = a(), l = n && n[3] || (le.cssNumber[t] ? "" : "px"), c = (le.cssNumber[t] || "px" !== l && +u) && Oe.exec(le.css(e, t));
                if (c && c[3] !== l) {
                    l = l || c[3],
                        n = n || [],
                        c = +u || 1;
                    do
                        o = o || ".5",
                            c /= o,
                            le.style(e, t, c + l);
                    while (o !== (o = a() / u) && 1 !== o && --s)
                }
                return n && (c = +c || +u || 0,
                    i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = l,
                        r.start = c,
                        r.end = i)),
                    i
            }
            function h(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], n) : n
            }
            function g(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    Ae.set(e[n], "globalEval", !t || Ae.get(t[n], "globalEval"))
            }
            function v(e, t, n, r, i) {
                for (var o, s, a, u, l, c, p = t.createDocumentFragment(), d = [], f = 0, v = e.length; v > f; f++)
                    if (o = e[f],
                        o || 0 === o)
                        if ("object" === le.type(o))
                            le.merge(d, o.nodeType ? [o] : o);
                        else if (Be.test(o)) {
                            for (s = s || p.appendChild(t.createElement("div")),
                                a = (Ie.exec(o) || ["", ""])[1].toLowerCase(),
                                u = $e[a] || $e._default,
                                s.innerHTML = u[1] + le.htmlPrefilter(o) + u[2],
                                c = u[0]; c--;)
                                s = s.lastChild;
                            le.merge(d, s.childNodes),
                                s = p.firstChild,
                                s.textContent = ""
                        } else
                            d.push(t.createTextNode(o));
                for (p.textContent = "",
                    f = 0; o = d[f++];)
                    if (r && le.inArray(o, r) > -1)
                        i && i.push(o);
                    else if (l = le.contains(o.ownerDocument, o),
                        s = h(p.appendChild(o), "script"),
                        l && g(s),
                        n)
                        for (c = 0; o = s[c++];)
                            Me.test(o.type || "") && n.push(o);
                return p
            }
            function m() {
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
                        return le().off(e),
                            s.apply(this, arguments)
                    }
                    ,
                    i.guid = s.guid || (s.guid = le.guid++)),
                    e.each(function () {
                        le.event.add(this, t, i, r, n)
                    })
            }
            function w(e, t) {
                return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function T(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
            }
            function k(e) {
                var t = Ye.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function C(e, t) {
                var n, r, i, o, s, a, u, l;
                if (1 === t.nodeType) {
                    if (Ae.hasData(e) && (o = Ae.access(e),
                        s = Ae.set(t, o),
                        l = o.events)) {
                        delete s.handle,
                            s.events = {};
                        for (i in l)
                            for (n = 0,
                                r = l[i].length; r > n; n++)
                                le.event.add(t, i, l[i][n])
                    }
                    Le.hasData(e) && (a = Le.access(e),
                        u = le.extend({}, a),
                        Le.set(t, u))
                }
            }
            function E(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function S(e, t, n, r) {
                t = te.apply([], t);
                var i, o, s, a, u, l, c = 0, p = e.length, d = p - 1, f = t[0], g = le.isFunction(f);
                if (g || p > 1 && "string" == typeof f && !ae.checkClone && Xe.test(f))
                    return e.each(function (i) {
                        var o = e.eq(i);
                        g && (t[0] = f.call(this, i, o.html())),
                            S(o, t, n, r)
                    });
                if (p && (i = v(t, e[0].ownerDocument, !1, e, r),
                    o = i.firstChild,
                    1 === i.childNodes.length && (i = o),
                    o || r)) {
                    for (s = le.map(h(i, "script"), T),
                        a = s.length; p > c; c++)
                        u = i,
                            c !== d && (u = le.clone(u, !0, !0),
                                a && le.merge(s, h(u, "script"))),
                            n.call(e[c], u, c);
                    if (a)
                        for (l = s[s.length - 1].ownerDocument,
                            le.map(s, k),
                            c = 0; a > c; c++)
                            u = s[c],
                                Me.test(u.type || "") && !Ae.access(u, "globalEval") && le.contains(l, u) && (u.src ? le._evalUrl && le._evalUrl(u.src) : le.globalEval(u.textContent.replace(Ge, "")))
                }
                return e
            }
            function q(e, t, n) {
                for (var r, i = t ? le.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                    n || 1 !== r.nodeType || le.cleanData(h(r)),
                        r.parentNode && (n && le.contains(r.ownerDocument, r) && g(h(r, "script")),
                            r.parentNode.removeChild(r));
                return e
            }
            function N(e, t) {
                var n = le(t.createElement(e)).appendTo(t.body)
                    , r = le.css(n[0], "display");
                return n.detach(),
                    r
            }
            function A(e) {
                var t = Z
                    , n = Je[e];
                return n || (n = N(e, t),
                    "none" !== n && n || (Qe = (Qe || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                        t = Qe[0].contentDocument,
                        t.write(),
                        t.close(),
                        n = N(e, t),
                        Qe.detach()),
                    Je[e] = n),
                    n
            }
            function L(e, t, n) {
                var r, i, o, s, a = e.style;
                return n = n || et(e),
                    s = n ? n.getPropertyValue(t) || n[t] : void 0,
                    "" !== s && void 0 !== s || le.contains(e.ownerDocument, e) || (s = le.style(e, t)),
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
            function D(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function j(e) {
                if (e in at)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--;)
                    if (e = st[n] + t,
                        e in at)
                        return e
            }
            function H(e, t, n) {
                var r = Oe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function O(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
                    "margin" === n && (s += le.css(e, n + Re[o], !0, i)),
                        r ? ("content" === n && (s -= le.css(e, "padding" + Re[o], !0, i)),
                            "margin" !== n && (s -= le.css(e, "border" + Re[o] + "Width", !0, i))) : (s += le.css(e, "padding" + Re[o], !0, i),
                                "padding" !== n && (s += le.css(e, "border" + Re[o] + "Width", !0, i)));
                return s
            }
            function R(e, t, n) {
                var r = !0
                    , i = "width" === t ? e.offsetWidth : e.offsetHeight
                    , o = et(e)
                    , s = "border-box" === le.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = L(e, t, o),
                        (0 > i || null == i) && (i = e.style[t]),
                        Ze.test(i))
                        return i;
                    r = s && (ae.boxSizingReliable() || i === e.style[t]),
                        i = parseFloat(i) || 0
                }
                return i + O(e, t, n || (s ? "border" : "content"), r, o) + "px"
            }
            function P(e, t) {
                for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
                    r = e[s],
                        r.style && (o[s] = Ae.get(r, "olddisplay"),
                            n = r.style.display,
                            t ? (o[s] || "none" !== n || (r.style.display = ""),
                                "" === r.style.display && Pe(r) && (o[s] = Ae.access(r, "olddisplay", A(r.nodeName)))) : (i = Pe(r),
                                    "none" === n && i || Ae.set(r, "olddisplay", i ? n : le.css(r, "display"))));
                for (s = 0; a > s; s++)
                    r = e[s],
                        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
                return e
            }
            function F(e, t, n, r, i) {
                return new F.prototype.init(e, t, n, r, i)
            }
            function I() {
                return n.setTimeout(function () {
                    ut = void 0
                }),
                    ut = le.now()
            }
            function M(e, t) {
                var n, r = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > r; r += 2 - t)
                    n = Re[r],
                        i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e),
                    i
            }
            function $(e, t, n) {
                for (var r, i = (_.tweeners[t] || []).concat(_.tweeners["*"]), o = 0, s = i.length; s > o; o++)
                    if (r = i[o].call(n, t, e))
                        return r
            }
            function B(e, t, n) {
                var r, i, o, s, a, u, l, c, p = this, d = {}, f = e.style, h = e.nodeType && Pe(e), g = Ae.get(e, "fxshow");
                n.queue || (a = le._queueHooks(e, "fx"),
                    null == a.unqueued && (a.unqueued = 0,
                        u = a.empty.fire,
                        a.empty.fire = function () {
                            a.unqueued || u()
                        }
                    ),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--,
                                le.queue(e, "fx").length || a.empty.fire()
                        })
                    })),
                    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                        l = le.css(e, "display"),
                        c = "none" === l ? Ae.get(e, "olddisplay") || A(e.nodeName) : l,
                        "inline" === c && "none" === le.css(e, "float") && (f.display = "inline-block")),
                    n.overflow && (f.overflow = "hidden",
                        p.always(function () {
                            f.overflow = n.overflow[0],
                                f.overflowX = n.overflow[1],
                                f.overflowY = n.overflow[2]
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
                        d[r] = g && g[r] || le.style(e, r)
                    } else
                        l = void 0;
                if (le.isEmptyObject(d))
                    "inline" === ("none" === l ? A(e.nodeName) : l) && (f.display = l);
                else {
                    g ? "hidden" in g && (h = g.hidden) : g = Ae.access(e, "fxshow", {}),
                        o && (g.hidden = !h),
                        h ? le(e).show() : p.done(function () {
                            le(e).hide()
                        }),
                        p.done(function () {
                            var t;
                            Ae.remove(e, "fxshow");
                            for (t in d)
                                le.style(e, t, d[t])
                        });
                    for (r in d)
                        s = $(h ? g[r] : 0, r, p),
                            r in g || (g[r] = s.start,
                                h && (s.end = s.start,
                                    s.start = "width" === r || "height" === r ? 1 : 0))
                }
            }
            function W(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (r = le.camelCase(n),
                        i = t[r],
                        o = e[n],
                        le.isArray(o) && (i = o[1],
                            o = e[n] = o[0]),
                        n !== r && (e[r] = o,
                            delete e[n]),
                        s = le.cssHooks[r],
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
                var r, i, o = 0, s = _.prefilters.length, a = le.Deferred().always(function () {
                    delete u.elem
                }), u = function () {
                    if (i)
                        return !1;
                    for (var t = ut || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++)
                        l.tweens[s].run(o);
                    return a.notifyWith(e, [l, o, n]),
                        1 > o && u ? n : (a.resolveWith(e, [l]),
                            !1)
                }, l = a.promise({
                    elem: e,
                    props: le.extend({}, t),
                    opts: le.extend(!0, {
                        specialEasing: {},
                        easing: le.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ut || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = le.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r),
                            r
                    },
                    stop: function (t) {
                        var n = 0
                            , r = t ? l.tweens.length : 0;
                        if (i)
                            return this;
                        for (i = !0; r > n; n++)
                            l.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [l, 1, 0]),
                            a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                            this
                    }
                }), c = l.props;
                for (W(c, l.opts.specialEasing); s > o; o++)
                    if (r = _.prefilters[o].call(l, e, c, l.opts))
                        return le.isFunction(r.stop) && (le._queueHooks(l.elem, l.opts.queue).stop = le.proxy(r.stop, r)),
                            r;
                return le.map(c, $, l),
                    le.isFunction(l.opts.start) && l.opts.start.call(e, l),
                    le.fx.timer(le.extend(u, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })),
                    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            function z(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function U(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t,
                        t = "*");
                    var r, i = 0, o = t.toLowerCase().match(Ee) || [];
                    if (le.isFunction(n))
                        for (; r = o[i++];)
                            "+" === r[0] ? (r = r.slice(1) || "*",
                                (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function V(e, t, n, r) {
                function i(a) {
                    var u;
                    return o[a] = !0,
                        le.each(e[a] || [], function (e, a) {
                            var l = a(t, n, r);
                            return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                                i(l),
                                !1)
                        }),
                        u
                }
                var o = {}
                    , s = e === Lt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }
            function X(e, t) {
                var n, r, i = le.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && le.extend(!0, e, r),
                    e
            }
            function Y(e, t, n) {
                for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];)
                    u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in a)
                        if (a[i] && a[i].test(r)) {
                            u.unshift(i);
                            break
                        }
                if (u[0] in n)
                    o = u[0];
                else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        s || (s = i)
                    }
                    o = o || s
                }
                return o ? (o !== u[0] && u.unshift(o),
                    n[o]) : void 0
            }
            function G(e, t, n, r) {
                var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
                if (c[1])
                    for (s in e.converters)
                        l[s.toLowerCase()] = e.converters[s];
                for (o = c.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                        if ("*" === o)
                            o = u;
                        else if ("*" !== u && u !== o) {
                            if (s = l[u + " " + o] || l["* " + o],
                                !s)
                                for (i in l)
                                    if (a = i.split(" "),
                                        a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0],
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
                                            error: s ? p : "No conversion from " + u + " to " + o
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function Q(e, t, n, r) {
                var i;
                if (le.isArray(t))
                    le.each(t, function (t, i) {
                        n || Ot.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                    });
                else if (n || "object" !== le.type(t))
                    r(e, t);
                else
                    for (i in t)
                        Q(e + "[" + i + "]", t[i], n, r)
            }
            function J(e) {
                return le.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
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
                , ue = "2.2.4"
                , le = function (e, t) {
                    return new le.fn.init(e, t)
                }
                , ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                , pe = /^-ms-/
                , de = /-([\da-z])/gi
                , fe = function (e, t) {
                    return t.toUpperCase()
                };
            le.fn = le.prototype = {
                jquery: ue,
                constructor: le,
                selector: "",
                length: 0,
                toArray: function () {
                    return ee.call(this)
                },
                get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : ee.call(this)
                },
                pushStack: function (e) {
                    var t = le.merge(this.constructor(), e);
                    return t.prevObject = this,
                        t.context = this.context,
                        t
                },
                each: function (e) {
                    return le.each(this, e)
                },
                map: function (e) {
                    return this.pushStack(le.map(this, function (t, n) {
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
                le.extend = le.fn.extend = function () {
                    var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
                    for ("boolean" == typeof s && (l = s,
                        s = arguments[a] || {},
                        a++),
                        "object" == typeof s || le.isFunction(s) || (s = {}),
                        a === u && (s = this,
                            a--); u > a; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                n = s[t],
                                    r = e[t],
                                    s !== r && (l && r && (le.isPlainObject(r) || (i = le.isArray(r))) ? (i ? (i = !1,
                                        o = n && le.isArray(n) ? n : []) : o = n && le.isPlainObject(n) ? n : {},
                                        s[t] = le.extend(l, o, r)) : void 0 !== r && (s[t] = r));
                    return s
                }
                ,
                le.extend({
                    expando: "jQuery" + (ue + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e)
                    },
                    noop: function () { },
                    isFunction: function (e) {
                        return "function" === le.type(e)
                    },
                    isArray: Array.isArray,
                    isWindow: function (e) {
                        return null != e && e === e.window
                    },
                    isNumeric: function (e) {
                        var t = e && e.toString();
                        return !le.isArray(e) && t - parseFloat(t) + 1 >= 0
                    },
                    isPlainObject: function (e) {
                        var t;
                        if ("object" !== le.type(e) || e.nodeType || le.isWindow(e))
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
                        e = le.trim(e),
                            e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
                                t.text = e,
                                Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                    },
                    camelCase: function (e) {
                        return e.replace(pe, "ms-").replace(de, fe)
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
                        return null != e && (s(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)),
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
                            le.isFunction(e) ? (r = ee.call(arguments, 2),
                                i = function () {
                                    return e.apply(t || this, r.concat(ee.call(arguments)))
                                }
                                ,
                                i.guid = e.guid = e.guid || le.guid++,
                                i) : void 0
                    },
                    now: Date.now,
                    support: ae
                }),
                "function" == typeof Symbol && (le.fn[Symbol.iterator] = K[Symbol.iterator]),
                le.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
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
                        var i, o, s, a, u, l, p, f, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
                        if (n = n || [],
                            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                            return n;
                        if (!r && ((t ? t.ownerDocument || t : $) !== j && D(t),
                            t = t || j,
                            O)) {
                            if (11 !== g && (l = me.exec(e)))
                                if (i = l[1]) {
                                    if (9 === g) {
                                        if (!(s = t.getElementById(i)))
                                            return n;
                                        if (s.id === i)
                                            return n.push(s),
                                                n
                                    } else if (h && (s = h.getElementById(i)) && I(t, s) && s.id === i)
                                        return n.push(s),
                                            n
                                } else {
                                    if (l[2])
                                        return K.apply(n, t.getElementsByTagName(e)),
                                            n;
                                    if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                                        return K.apply(n, t.getElementsByClassName(i)),
                                            n
                                }
                            if (w.qsa && !U[e + " "] && (!R || !R.test(e))) {
                                if (1 !== g)
                                    h = t,
                                        f = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = M),
                                        p = E(e),
                                        o = p.length,
                                        u = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;)
                                        p[o] = u + " " + d(p[o]);
                                    f = p.join(","),
                                        h = ye.test(e) && c(t.parentNode) || t
                                }
                                if (f)
                                    try {
                                        return K.apply(n, h.querySelectorAll(f)),
                                            n
                                    } catch (v) { } finally {
                                        a === M && t.removeAttribute("id")
                                    }
                            }
                        }
                        return q(e.replace(ae, "$1"), t, n, r)
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
                        return e[M] = !0,
                            e
                    }
                    function i(e) {
                        var t = j.createElement("div");
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
                    function u(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function l(e) {
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
                    function d(e) {
                        for (var t = 0, n = e.length, r = ""; n > t; t++)
                            r += e[t].value;
                        return r
                    }
                    function f(e, t, n) {
                        var r = t.dir
                            , i = n && "parentNode" === r
                            , o = W++;
                        return t.first ? function (t, n, o) {
                            for (; t = t[r];)
                                if (1 === t.nodeType || i)
                                    return e(t, n, o)
                        }
                            : function (t, n, s) {
                                var a, u, l, c = [B, o];
                                if (s) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || i) && e(t, n, s))
                                            return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || i) {
                                            if (l = t[M] || (t[M] = {}),
                                                u = l[t.uniqueID] || (l[t.uniqueID] = {}),
                                                (a = u[r]) && a[0] === B && a[1] === o)
                                                return c[2] = a[2];
                                            if (u[r] = c,
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
                    function v(e, t, n, r, i) {
                        for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
                            (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                                l && t.push(a)));
                        return s
                    }
                    function m(e, t, n, i, o, s) {
                        return i && !i[M] && (i = m(i)),
                            o && !o[M] && (o = m(o, s)),
                            r(function (r, s, a, u) {
                                var l, c, p, d = [], f = [], h = s.length, m = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? m : v(m, d, e, a, u), b = n ? o || (r ? e : h || i) ? [] : s : y;
                                if (n && n(y, b, a, u),
                                    i)
                                    for (l = v(b, f),
                                        i(l, [], a, u),
                                        c = l.length; c--;)
                                        (p = l[c]) && (b[f[c]] = !(y[f[c]] = p));
                                if (r) {
                                    if (o || e) {
                                        if (o) {
                                            for (l = [],
                                                c = b.length; c--;)
                                                (p = b[c]) && l.push(y[c] = p);
                                            o(null, b = [], l, u)
                                        }
                                        for (c = b.length; c--;)
                                            (p = b[c]) && (l = o ? ee(r, p) : d[c]) > -1 && (r[l] = !(s[l] = p))
                                    }
                                } else
                                    b = v(b === s ? b.splice(h, b.length) : b),
                                        o ? o(null, s, b, u) : K.apply(s, b)
                            })
                    }
                    function y(e) {
                        for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = f(function (e) {
                            return e === t
                        }, s, !0), l = f(function (e) {
                            return ee(t, e) > -1
                        }, s, !0), c = [function (e, n, r) {
                            var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return t = null,
                                i
                        }
                        ]; i > a; a++)
                            if (n = T.relative[e[a].type])
                                c = [f(h(c), n)];
                            else {
                                if (n = T.filter[e[a].type].apply(null, e[a].matches),
                                    n[M]) {
                                    for (r = ++a; i > r && !T.relative[e[r].type]; r++)
                                        ;
                                    return m(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({
                                        value: " " === e[a - 2].type ? "*" : ""
                                    })).replace(ae, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                                }
                                c.push(n)
                            }
                        return h(c)
                    }
                    function b(e, n) {
                        var i = n.length > 0
                            , o = e.length > 0
                            , s = function (r, s, a, u, l) {
                                var c, p, d, f = 0, h = "0", g = r && [], m = [], y = N, b = r || o && T.find.TAG("*", l), x = B += null == y ? 1 : Math.random() || .1, w = b.length;
                                for (l && (N = s === j || s || l); h !== w && null != (c = b[h]); h++) {
                                    if (o && c) {
                                        for (p = 0,
                                            s || c.ownerDocument === j || (D(c),
                                                a = !O); d = e[p++];)
                                            if (d(c, s || j, a)) {
                                                u.push(c);
                                                break
                                            }
                                        l && (B = x)
                                    }
                                    i && ((c = !d && c) && f--,
                                        r && g.push(c))
                                }
                                if (f += h,
                                    i && h !== f) {
                                    for (p = 0; d = n[p++];)
                                        d(g, m, s, a);
                                    if (r) {
                                        if (f > 0)
                                            for (; h--;)
                                                g[h] || m[h] || (m[h] = Q.call(u));
                                        m = v(m)
                                    }
                                    K.apply(u, m),
                                        l && !r && m.length > 0 && f + n.length > 1 && t.uniqueSort(u)
                                }
                                return l && (B = x,
                                    N = y),
                                    g
                            };
                        return i ? r(s) : s
                    }
                    var x, w, T, k, C, E, S, q, N, A, L, D, j, H, O, R, P, F, I, M = "sizzle" + 1 * new Date, $ = e.document, B = 0, W = 0, _ = n(), z = n(), U = n(), V = function (e, t) {
                        return e === t && (L = !0),
                            0
                    }, X = 1 << 31, Y = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, ee = function (e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(oe), de = new RegExp("^" + re + "$"), fe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re + "|[*])"),
                        ATTR: new RegExp("^" + ie),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, Te = function () {
                        D()
                    };
                    try {
                        K.apply(G = Z.call($.childNodes), $.childNodes),
                            G[$.childNodes.length].nodeType
                    } catch (ke) {
                        K = {
                            apply: G.length ? function (e, t) {
                                J.apply(e, Z.call(t))
                            }
                                : function (e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];)
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
                        D = t.setDocument = function (e) {
                            var t, n, r = e ? e.ownerDocument || e : $;
                            return r !== j && 9 === r.nodeType && r.documentElement ? (j = r,
                                H = j.documentElement,
                                O = !C(j),
                                (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                                w.attributes = i(function (e) {
                                    return e.className = "i",
                                        !e.getAttribute("className")
                                }),
                                w.getElementsByTagName = i(function (e) {
                                    return e.appendChild(j.createComment("")),
                                        !e.getElementsByTagName("*").length
                                }),
                                w.getElementsByClassName = ve.test(j.getElementsByClassName),
                                w.getById = i(function (e) {
                                    return H.appendChild(e).id = M,
                                        !j.getElementsByName || !j.getElementsByName(M).length
                                }),
                                w.getById ? (T.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && O) {
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
                                    return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
                                }
                                ,
                                P = [],
                                R = [],
                                (w.qsa = ve.test(j.querySelectorAll)) && (i(function (e) {
                                    H.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"),
                                        e.querySelectorAll("[id~=" + M + "-]").length || R.push("~="),
                                        e.querySelectorAll(":checked").length || R.push(":checked"),
                                        e.querySelectorAll("a#" + M + "+*").length || R.push(".#.+[+~]")
                                }),
                                    i(function (e) {
                                        var t = j.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="),
                                            e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            R.push(",.*:")
                                    })),
                                (w.matchesSelector = ve.test(F = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
                                    w.disconnectedMatch = F.call(e, "div"),
                                        F.call(e, "[s!='']:x"),
                                        P.push("!=", oe)
                                }),
                                R = R.length && new RegExp(R.join("|")),
                                P = P.length && new RegExp(P.join("|")),
                                t = ve.test(H.compareDocumentPosition),
                                I = t || ve.test(H.contains) ? function (e, t) {
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
                                V = t ? function (e, t) {
                                    if (e === t)
                                        return L = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === $ && I($, e) ? -1 : t === j || t.ownerDocument === $ && I($, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                                }
                                    : function (e, t) {
                                        if (e === t)
                                            return L = !0,
                                                0;
                                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], u = [t];
                                        if (!i || !o)
                                            return e === j ? -1 : t === j ? 1 : i ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                                        if (i === o)
                                            return s(e, t);
                                        for (n = e; n = n.parentNode;)
                                            a.unshift(n);
                                        for (n = t; n = n.parentNode;)
                                            u.unshift(n);
                                        for (; a[r] === u[r];)
                                            r++;
                                        return r ? s(a[r], u[r]) : a[r] === $ ? -1 : u[r] === $ ? 1 : 0
                                    }
                                ,
                                j) : j
                        }
                        ,
                        t.matches = function (e, n) {
                            return t(e, null, null, n)
                        }
                        ,
                        t.matchesSelector = function (e, n) {
                            if ((e.ownerDocument || e) !== j && D(e),
                                n = n.replace(ce, "='$1']"),
                                w.matchesSelector && O && !U[n + " "] && (!P || !P.test(n)) && (!R || !R.test(n)))
                                try {
                                    var r = F.call(e, n);
                                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return r
                                } catch (i) { }
                            return t(n, j, null, [e]).length > 0
                        }
                        ,
                        t.contains = function (e, t) {
                            return (e.ownerDocument || e) !== j && D(e),
                                I(e, t)
                        }
                        ,
                        t.attr = function (e, t) {
                            (e.ownerDocument || e) !== j && D(e);
                            var n = T.attrHandle[t.toLowerCase()]
                                , r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }
                        ,
                        t.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        t.uniqueSort = function (e) {
                            var t, n = [], r = 0, i = 0;
                            if (L = !w.detectDuplicates,
                                A = !w.sortStable && e.slice(0),
                                e.sort(V),
                                L) {
                                for (; t = e[i++];)
                                    t === e[i] && (r = n.push(i));
                                for (; r--;)
                                    e.splice(n[r], 1)
                            }
                            return A = null,
                                e
                        }
                        ,
                        k = t.getText = function (e) {
                            var t, n = "", r = 0, i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += k(e)
                                } else if (3 === i || 4 === i)
                                    return e.nodeValue
                            } else
                                for (; t = e[r++];)
                                    n += k(t);
                            return n
                        }
                        ,
                        T = t.selectors = {
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
                                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
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
                                        : function (t, n, u) {
                                            var l, c, p, d, f, h, g = o !== s ? "nextSibling" : "previousSibling", v = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !u && !a, b = !1;
                                            if (v) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (d = t; d = d[g];)
                                                            if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)
                                                                return !1;
                                                        h = g = "only" === e && !h && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (h = [s ? v.firstChild : v.lastChild],
                                                    s && y) {
                                                    for (d = v,
                                                        p = d[M] || (d[M] = {}),
                                                        c = p[d.uniqueID] || (p[d.uniqueID] = {}),
                                                        l = c[e] || [],
                                                        f = l[0] === B && l[1],
                                                        b = f && l[2],
                                                        d = f && v.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || h.pop();)
                                                        if (1 === d.nodeType && ++b && d === t) {
                                                            c[e] = [B, f, b];
                                                            break
                                                        }
                                                } else if (y && (d = t,
                                                    p = d[M] || (d[M] = {}),
                                                    c = p[d.uniqueID] || (p[d.uniqueID] = {}),
                                                    l = c[e] || [],
                                                    f = l[0] === B && l[1],
                                                    b = f),
                                                    b === !1)
                                                    for (; (d = ++f && d && d[g] || (b = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && (p = d[M] || (d[M] = {}),
                                                        c = p[d.uniqueID] || (p[d.uniqueID] = {}),
                                                        c[e] = [B, b]),
                                                        d !== t));)
                                                        ;
                                                return b -= i,
                                                    b === r || b % r === 0 && b / r >= 0
                                            }
                                        }
                                },
                                PSEUDO: function (e, n) {
                                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
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
                                        , i = S(e.replace(ae, "$1"));
                                    return i[M] ? r(function (e, t, n, r) {
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
                                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: r(function (e) {
                                    return de.test(e || "") || t.error("unsupported lang: " + e),
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
                                    return e === H
                                },
                                focus: function (e) {
                                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                                first: l(function () {
                                    return [0]
                                }),
                                last: l(function (e, t) {
                                    return [t - 1]
                                }),
                                eq: l(function (e, t, n) {
                                    return [0 > n ? n + t : n]
                                }),
                                even: l(function (e, t) {
                                    for (var n = 0; t > n; n += 2)
                                        e.push(n);
                                    return e
                                }),
                                odd: l(function (e, t) {
                                    for (var n = 1; t > n; n += 2)
                                        e.push(n);
                                    return e
                                }),
                                lt: l(function (e, t, n) {
                                    for (var r = 0 > n ? n + t : n; --r >= 0;)
                                        e.push(r);
                                    return e
                                }),
                                gt: l(function (e, t, n) {
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
                        T.pseudos[x] = u(x);
                    return p.prototype = T.filters = T.pseudos,
                        T.setFilters = new p,
                        E = t.tokenize = function (e, n) {
                            var r, i, o, s, a, u, l, c = z[e + " "];
                            if (c)
                                return n ? 0 : c.slice(0);
                            for (a = e,
                                u = [],
                                l = T.preFilter; a;) {
                                r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                                    u.push(o = [])),
                                    r = !1,
                                    (i = le.exec(a)) && (r = i.shift(),
                                        o.push({
                                            value: r,
                                            type: i[0].replace(ae, " ")
                                        }),
                                        a = a.slice(r.length));
                                for (s in T.filter)
                                    !(i = fe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(),
                                        o.push({
                                            value: r,
                                            type: s,
                                            matches: i
                                        }),
                                        a = a.slice(r.length));
                                if (!r)
                                    break
                            }
                            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
                        }
                        ,
                        S = t.compile = function (e, t) {
                            var n, r = [], i = [], o = U[e + " "];
                            if (!o) {
                                for (t || (t = E(e)),
                                    n = t.length; n--;)
                                    o = y(t[n]),
                                        o[M] ? r.push(o) : i.push(o);
                                o = U(e, b(i, r)),
                                    o.selector = e
                            }
                            return o
                        }
                        ,
                        q = t.select = function (e, t, n, r) {
                            var i, o, s, a, u, l = "function" == typeof e && e, p = !r && E(e = l.selector || e);
                            if (n = n || [],
                                1 === p.length) {
                                if (o = p[0] = p[0].slice(0),
                                    o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                                    if (t = (T.find.ID(s.matches[0].replace(xe, we), t) || [])[0],
                                        !t)
                                        return n;
                                    l && (t = t.parentNode),
                                        e = e.slice(o.shift().value.length)
                                }
                                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                                    !T.relative[a = s.type]);)
                                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                                        if (o.splice(i, 1),
                                            e = r.length && d(o),
                                            !e)
                                            return K.apply(n, r),
                                                n;
                                        break
                                    }
                            }
                            return (l || S(e, p))(r, t, !O, n, !t || ye.test(e) && c(t.parentNode) || t),
                                n
                        }
                        ,
                        w.sortStable = M.split("").sort(V).join("") === M,
                        w.detectDuplicates = !!L,
                        D(),
                        w.sortDetached = i(function (e) {
                            return 1 & e.compareDocumentPosition(j.createElement("div"))
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
            le.find = he,
                le.expr = he.selectors,
                le.expr[":"] = le.expr.pseudos,
                le.uniqueSort = le.unique = he.uniqueSort,
                le.text = he.getText,
                le.isXMLDoc = he.isXML,
                le.contains = he.contains;
            var ge = function (e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && le(e).is(n))
                            break;
                        r.push(e)
                    }
                return r
            }
                , ve = function (e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                , me = le.expr.match.needsContext
                , ye = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                , be = /^.[^:#\[\.,]*$/;
            le.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? le.find.matchesSelector(r, e) ? [r] : [] : le.find.matches(e, le.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
            }
                ,
                le.fn.extend({
                    find: function (e) {
                        var t, n = this.length, r = [], i = this;
                        if ("string" != typeof e)
                            return this.pushStack(le(e).filter(function () {
                                for (t = 0; n > t; t++)
                                    if (le.contains(i[t], this))
                                        return !0
                            }));
                        for (t = 0; n > t; t++)
                            le.find(e, i[t], r);
                        return r = this.pushStack(n > 1 ? le.unique(r) : r),
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
                        return !!a(this, "string" == typeof e && me.test(e) ? le(e) : e || [], !1).length
                    }
                });
            var xe, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Te = le.fn.init = function (e, t, n) {
                var r, i;
                if (!e)
                    return this;
                if (n = n || xe,
                    "string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : we.exec(e),
                        !r || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof le ? t[0] : t,
                            le.merge(this, le.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                            ye.test(r[1]) && le.isPlainObject(t))
                            for (r in t)
                                le.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
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
                    this) : le.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector,
                        this.context = e.context),
                        le.makeArray(e, this))
            }
                ;
            Te.prototype = le.fn,
                xe = le(Z);
            var ke = /^(?:parents|prev(?:Until|All))/
                , Ce = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            le.fn.extend({
                has: function (e) {
                    var t = le(e, this)
                        , n = t.length;
                    return this.filter(function () {
                        for (var e = 0; n > e; e++)
                            if (le.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function (e, t) {
                    for (var n, r = 0, i = this.length, o = [], s = me.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; i > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? le.uniqueSort(o) : o)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? re.call(le(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(le.uniqueSort(le.merge(this.get(), le(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
                le.each({
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
                        return u(e, "nextSibling")
                    },
                    prev: function (e) {
                        return u(e, "previousSibling")
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
                        return ve((e.parentNode || {}).firstChild, e)
                    },
                    children: function (e) {
                        return ve(e.firstChild)
                    },
                    contents: function (e) {
                        return e.contentDocument || le.merge([], e.childNodes)
                    }
                }, function (e, t) {
                    le.fn[e] = function (n, r) {
                        var i = le.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n),
                            r && "string" == typeof r && (i = le.filter(r, i)),
                            this.length > 1 && (Ce[e] || le.uniqueSort(i),
                                ke.test(e) && i.reverse()),
                            this.pushStack(i)
                    }
                });
            var Ee = /\S+/g;
            le.Callbacks = function (e) {
                e = "string" == typeof e ? l(e) : le.extend({}, e);
                var t, n, r, i, o = [], s = [], a = -1, u = function () {
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
                                le.each(t, function (t, n) {
                                    le.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== le.type(n) && r(n)
                                })
                            }(arguments),
                            n && !t && u()),
                            this
                    },
                    remove: function () {
                        return le.each(arguments, function (e, t) {
                            for (var n; (n = le.inArray(t, o, n)) > -1;)
                                o.splice(n, 1),
                                    a >= n && a--
                        }),
                            this
                    },
                    has: function (e) {
                        return e ? le.inArray(e, o) > -1 : o.length > 0
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
                            t || u()),
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
                le.extend({
                    Deferred: function (e) {
                        var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]]
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
                                    return le.Deferred(function (n) {
                                        le.each(t, function (t, o) {
                                            var s = le.isFunction(e[t]) && e[t];
                                            i[o[1]](function () {
                                                var e = s && s.apply(this, arguments);
                                                e && le.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                            })
                                        }),
                                            e = null
                                    }).promise()
                                },
                                promise: function (e) {
                                    return null != e ? le.extend(e, r) : r
                                }
                            }
                            , i = {};
                        return r.pipe = r.then,
                            le.each(t, function (e, o) {
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
                        var t, n, r, i = 0, o = ee.call(arguments), s = o.length, a = 1 !== s || e && le.isFunction(e.promise) ? s : 0, u = 1 === a ? e : le.Deferred(), l = function (e, n, r) {
                            return function (i) {
                                n[e] = this,
                                    r[e] = arguments.length > 1 ? ee.call(arguments) : i,
                                    r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                            }
                        };
                        if (s > 1)
                            for (t = new Array(s),
                                n = new Array(s),
                                r = new Array(s); s > i; i++)
                                o[i] && le.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
                        return a || u.resolveWith(r, o),
                            u.promise()
                    }
                });
            var Se;
            le.fn.ready = function (e) {
                return le.ready.promise().done(e),
                    this
            }
                ,
                le.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (e) {
                        e ? le.readyWait++ : le.ready(!0)
                    },
                    ready: function (e) {
                        (e === !0 ? --le.readyWait : le.isReady) || (le.isReady = !0,
                            e !== !0 && --le.readyWait > 0 || (Se.resolveWith(Z, [le]),
                                le.fn.triggerHandler && (le(Z).triggerHandler("ready"),
                                    le(Z).off("ready"))))
                    }
                }),
                le.ready.promise = function (e) {
                    return Se || (Se = le.Deferred(),
                        "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(le.ready) : (Z.addEventListener("DOMContentLoaded", c),
                            n.addEventListener("load", c))),
                        Se.promise(e)
                }
                ,
                le.ready.promise();
            var qe = function (e, t, n, r, i, o, s) {
                var a = 0
                    , u = e.length
                    , l = null == n;
                if ("object" === le.type(n)) {
                    i = !0;
                    for (a in n)
                        qe(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== r && (i = !0,
                    le.isFunction(r) || (s = !0),
                    l && (s ? (t.call(e, r),
                        t = null) : (l = t,
                            t = function (e, t, n) {
                                return l.call(le(e), n)
                            }
                        )),
                    t))
                    for (; u > a; a++)
                        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            }
                , Ne = function (e) {
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
                            void 0 !== r ? r : this.get(e, le.camelCase(t))) : (this.set(e, t, n),
                                void 0 !== n ? n : t)
                    },
                    remove: function (e, t) {
                        var n, r, i, o = e[this.expando];
                        if (void 0 !== o) {
                            if (void 0 === t)
                                this.register(e);
                            else {
                                le.isArray(t) ? r = t.concat(t.map(le.camelCase)) : (i = le.camelCase(t),
                                    t in o ? r = [t, i] : (r = i,
                                        r = r in o ? [r] : r.match(Ee) || [])),
                                    n = r.length;
                                for (; n--;)
                                    delete o[r[n]]
                            }
                            (void 0 === t || le.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !le.isEmptyObject(t)
                    }
                };
            var Ae = new p
                , Le = new p
                , De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , je = /[A-Z]/g;
            le.extend({
                hasData: function (e) {
                    return Le.hasData(e) || Ae.hasData(e)
                },
                data: function (e, t, n) {
                    return Le.access(e, t, n)
                },
                removeData: function (e, t) {
                    Le.remove(e, t)
                },
                _data: function (e, t, n) {
                    return Ae.access(e, t, n)
                },
                _removeData: function (e, t) {
                    Ae.remove(e, t)
                }
            }),
                le.fn.extend({
                    data: function (e, t) {
                        var n, r, i, o = this[0], s = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = Le.get(o),
                                1 === o.nodeType && !Ae.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--;)
                                    s[n] && (r = s[n].name,
                                        0 === r.indexOf("data-") && (r = le.camelCase(r.slice(5)),
                                            d(o, r, i[r])));
                                Ae.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each(function () {
                            Le.set(this, e)
                        }) : qe(this, function (t) {
                            var n, r;
                            if (o && void 0 === t) {
                                if (n = Le.get(o, e) || Le.get(o, e.replace(je, "-$&").toLowerCase()),
                                    void 0 !== n)
                                    return n;
                                if (r = le.camelCase(e),
                                    n = Le.get(o, r),
                                    void 0 !== n)
                                    return n;
                                if (n = d(o, r, void 0),
                                    void 0 !== n)
                                    return n
                            } else
                                r = le.camelCase(e),
                                    this.each(function () {
                                        var n = Le.get(this, r);
                                        Le.set(this, r, t),
                                            e.indexOf("-") > -1 && void 0 !== n && Le.set(this, e, t)
                                    })
                        }, null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            Le.remove(this, e)
                        })
                    }
                }),
                le.extend({
                    queue: function (e, t, n) {
                        var r;
                        return e ? (t = (t || "fx") + "queue",
                            r = Ae.get(e, t),
                            n && (!r || le.isArray(n) ? r = Ae.access(e, t, le.makeArray(n)) : r.push(n)),
                            r || []) : void 0
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = le.queue(e, t)
                            , r = n.length
                            , i = n.shift()
                            , o = le._queueHooks(e, t)
                            , s = function () {
                                le.dequeue(e, t)
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
                        return Ae.get(e, n) || Ae.access(e, n, {
                            empty: le.Callbacks("once memory").add(function () {
                                Ae.remove(e, [t + "queue", n])
                            })
                        })
                    }
                }),
                le.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                            e = "fx",
                            n--),
                            arguments.length < n ? le.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                                var n = le.queue(this, e, t);
                                le._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== n[0] && le.dequeue(this, e)
                            })
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            le.dequeue(this, e)
                        })
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function (e, t) {
                        var n, r = 1, i = le.Deferred(), o = this, s = this.length, a = function () {
                            --r || i.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                            e = void 0),
                            e = e || "fx"; s--;)
                            n = Ae.get(o[s], e + "queueHooks"),
                                n && n.empty && (r++,
                                    n.empty.add(a));
                        return a(),
                            i.promise(t)
                    }
                });
            var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , Oe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i")
                , Re = ["Top", "Right", "Bottom", "Left"]
                , Pe = function (e, t) {
                    return e = t || e,
                        "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
                }
                , Fe = /^(?:checkbox|radio)$/i
                , Ie = /<([\w:-]+)/
                , Me = /^$|\/(?:java|ecma)script/i
                , $e = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            $e.optgroup = $e.option,
                $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead,
                $e.th = $e.td;
            var Be = /<|&#?\w+;/;
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
                , ze = /^([^.]*)(?:\.(.+)|)/;
            le.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o, s, a, u, l, c, p, d, f, h, g, v = Ae.get(e);
                    if (v)
                        for (n.handler && (o = n,
                            n = o.handler,
                            i = o.selector),
                            n.guid || (n.guid = le.guid++),
                            (u = v.events) || (u = v.events = {}),
                            (s = v.handle) || (s = v.handle = function (t) {
                                return "undefined" != typeof le && le.event.triggered !== t.type ? le.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            t = (t || "").match(Ee) || [""],
                            l = t.length; l--;)
                            a = ze.exec(t[l]) || [],
                                f = g = a[1],
                                h = (a[2] || "").split(".").sort(),
                                f && (p = le.event.special[f] || {},
                                    f = (i ? p.delegateType : p.bindType) || f,
                                    p = le.event.special[f] || {},
                                    c = le.extend({
                                        type: f,
                                        origType: g,
                                        data: r,
                                        handler: n,
                                        guid: n.guid,
                                        selector: i,
                                        needsContext: i && le.expr.match.needsContext.test(i),
                                        namespace: h.join(".")
                                    }, o),
                                    (d = u[f]) || (d = u[f] = [],
                                        d.delegateCount = 0,
                                        p.setup && p.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)),
                                    p.add && (p.add.call(e, c),
                                        c.handler.guid || (c.handler.guid = n.guid)),
                                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                                    le.event.global[f] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var o, s, a, u, l, c, p, d, f, h, g, v = Ae.hasData(e) && Ae.get(e);
                    if (v && (u = v.events)) {
                        for (t = (t || "").match(Ee) || [""],
                            l = t.length; l--;)
                            if (a = ze.exec(t[l]) || [],
                                f = g = a[1],
                                h = (a[2] || "").split(".").sort(),
                                f) {
                                for (p = le.event.special[f] || {},
                                    f = (r ? p.delegateType : p.bindType) || f,
                                    d = u[f] || [],
                                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    s = o = d.length; o--;)
                                    c = d[o],
                                        !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                                            c.selector && d.delegateCount--,
                                            p.remove && p.remove.call(e, c));
                                s && !d.length && (p.teardown && p.teardown.call(e, h, v.handle) !== !1 || le.removeEvent(e, f, v.handle),
                                    delete u[f])
                            } else
                                for (f in u)
                                    le.event.remove(e, f + t[l], n, r, !0);
                        le.isEmptyObject(u) && Ae.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = le.event.fix(e);
                    var t, n, r, i, o, s = [], a = ee.call(arguments), u = (Ae.get(this, "events") || {})[e.type] || [], l = le.event.special[e.type] || {};
                    if (a[0] = e,
                        e.delegateTarget = this,
                        !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (s = le.event.handlers.call(this, e, u),
                            t = 0; (i = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem,
                                n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)
                                e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                                    e.data = o.data,
                                    r = ((le.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                                    void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                                        e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
                    if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                                for (r = [],
                                    n = 0; a > n; n++)
                                    o = t[n],
                                        i = o.selector + " ",
                                        void 0 === r[i] && (r[i] = o.needsContext ? le(i, this).index(u) > -1 : le.find(i, this, null, [u]).length),
                                        r[i] && r.push(o);
                                r.length && s.push({
                                    elem: u,
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
                    if (e[le.expando])
                        return e;
                    var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
                    for (s || (this.fixHooks[i] = s = _e.test(i) ? this.mouseHooks : We.test(i) ? this.keyHooks : {}),
                        r = s.props ? this.props.concat(s.props) : this.props,
                        e = new le.Event(o),
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
                            return "checkbox" === this.type && this.click && le.nodeName(this, "input") ? (this.click(),
                                !1) : void 0
                        },
                        _default: function (e) {
                            return le.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
                le.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                le.Event = function (e, t) {
                    return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e,
                        this.type = e.type,
                        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? m : y) : this.type = e,
                        t && le.extend(this, t),
                        this.timeStamp = e && e.timeStamp || le.now(),
                        void (this[le.expando] = !0)) : new le.Event(e, t)
                }
                ,
                le.Event.prototype = {
                    constructor: le.Event,
                    isDefaultPrevented: y,
                    isPropagationStopped: y,
                    isImmediatePropagationStopped: y,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = m,
                            e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        this.isPropagationStopped = m,
                            e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = m,
                            e && !this.isSimulated && e.stopImmediatePropagation(),
                            this.stopPropagation()
                    }
                },
                le.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function (e, t) {
                    le.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n, r = this, i = e.relatedTarget, o = e.handleObj;
                            return i && (i === r || le.contains(r, i)) || (e.type = o.origType,
                                n = o.handler.apply(this, arguments),
                                e.type = t),
                                n
                        }
                    }
                }),
                le.fn.extend({
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
                                le(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
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
                                le.event.remove(this, e, n, t)
                            })
                    }
                });
            var Ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                , Ve = /<script|<style|<link/i
                , Xe = /checked\s*(?:[^=]|=\s*.checked.)/i
                , Ye = /^true\/(.*)/
                , Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            le.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Ue, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var r, i, o, s, a = e.cloneNode(!0), u = le.contains(e.ownerDocument, e);
                    if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                        for (s = h(a),
                            o = h(e),
                            r = 0,
                            i = o.length; i > r; r++)
                            E(o[r], s[r]);
                    if (t)
                        if (n)
                            for (o = o || h(e),
                                s = s || h(a),
                                r = 0,
                                i = o.length; i > r; r++)
                                C(o[r], s[r]);
                        else
                            C(e, a);
                    return s = h(a, "script"),
                        s.length > 0 && g(s, !u && h(e, "script")),
                        a
                },
                cleanData: function (e) {
                    for (var t, n, r, i = le.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Ne(n)) {
                            if (t = n[Ae.expando]) {
                                if (t.events)
                                    for (r in t.events)
                                        i[r] ? le.event.remove(n, r) : le.removeEvent(n, r, t.handle);
                                n[Ae.expando] = void 0
                            }
                            n[Le.expando] && (n[Le.expando] = void 0)
                        }
                }
            }),
                le.fn.extend({
                    domManip: S,
                    detach: function (e) {
                        return q(this, e, !0)
                    },
                    remove: function (e) {
                        return q(this, e)
                    },
                    text: function (e) {
                        return qe(this, function (e) {
                            return void 0 === e ? le.text(this) : this.empty().each(function () {
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
                            1 === e.nodeType && (le.cleanData(h(e, !1)),
                                e.textContent = "");
                        return this
                    },
                    clone: function (e, t) {
                        return e = null == e ? !1 : e,
                            t = null == t ? e : t,
                            this.map(function () {
                                return le.clone(this, e, t)
                            })
                    },
                    html: function (e) {
                        return qe(this, function (e) {
                            var t = this[0] || {}
                                , n = 0
                                , r = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Ve.test(e) && !$e[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = le.htmlPrefilter(e);
                                try {
                                    for (; r > n; n++)
                                        t = this[n] || {},
                                            1 === t.nodeType && (le.cleanData(h(t, !1)),
                                                t.innerHTML = e);
                                    t = 0
                                } catch (i) { }
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function () {
                        var e = [];
                        return S(this, arguments, function (t) {
                            var n = this.parentNode;
                            le.inArray(this, e) < 0 && (le.cleanData(h(this)),
                                n && n.replaceChild(t, this))
                        }, e)
                    }
                }),
                le.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function (e, t) {
                    le.fn[e] = function (e) {
                        for (var n, r = [], i = le(e), o = i.length - 1, s = 0; o >= s; s++)
                            n = s === o ? this : this.clone(!0),
                                le(i[s])[t](n),
                                ne.apply(r, n.get());
                        return this.pushStack(r)
                    }
                });
            var Qe, Je = {
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
                    le.extend(ae, {
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
            le.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = L(e, "opacity");
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
                        var i, o, s, a = le.camelCase(t), u = e.style;
                        return t = le.cssProps[a] || (le.cssProps[a] = j(a) || a),
                            s = le.cssHooks[t] || le.cssHooks[a],
                            void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n,
                                "string" === o && (i = Oe.exec(n)) && i[1] && (n = f(e, t, i),
                                    o = "number"),
                                null != n && n === n && ("number" === o && (n += i && i[3] || (le.cssNumber[a] ? "" : "px")),
                                    ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                    s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)),
                                void 0)
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, s, a = le.camelCase(t);
                    return t = le.cssProps[a] || (le.cssProps[a] = j(a) || a),
                        s = le.cssHooks[t] || le.cssHooks[a],
                        s && "get" in s && (i = s.get(e, !0, n)),
                        void 0 === i && (i = L(e, t, r)),
                        "normal" === i && t in ot && (i = ot[t]),
                        "" === n || n ? (o = parseFloat(i),
                            n === !0 || isFinite(o) ? o || 0 : i) : i
                }
            }),
                le.each(["height", "width"], function (e, t) {
                    le.cssHooks[t] = {
                        get: function (e, n, r) {
                            return n ? rt.test(le.css(e, "display")) && 0 === e.offsetWidth ? tt(e, it, function () {
                                return R(e, t, r)
                            }) : R(e, t, r) : void 0
                        },
                        set: function (e, n, r) {
                            var i, o = r && et(e), s = r && O(e, t, r, "border-box" === le.css(e, "boxSizing", !1, o), o);
                            return s && (i = Oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                                n = le.css(e, t)),
                                H(e, n, s)
                        }
                    }
                }),
                le.cssHooks.marginLeft = D(ae.reliableMarginLeft, function (e, t) {
                    return t ? (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                        marginLeft: 0
                    }, function () {
                        return e.getBoundingClientRect().left
                    })) + "px" : void 0
                }),
                le.cssHooks.marginRight = D(ae.reliableMarginRight, function (e, t) {
                    return t ? tt(e, {
                        display: "inline-block"
                    }, L, [e, "marginRight"]) : void 0
                }),
                le.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (e, t) {
                    le.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                                i[e + Re[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    },
                        Ke.test(e) || (le.cssHooks[e + t].set = H)
                }),
                le.fn.extend({
                    css: function (e, t) {
                        return qe(this, function (e, t, n) {
                            var r, i, o = {}, s = 0;
                            if (le.isArray(t)) {
                                for (r = et(e),
                                    i = t.length; i > s; s++)
                                    o[t[s]] = le.css(e, t[s], !1, r);
                                return o
                            }
                            return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
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
                            Pe(this) ? le(this).show() : le(this).hide()
                        })
                    }
                }),
                le.Tween = F,
                F.prototype = {
                    constructor: F,
                    init: function (e, t, n, r, i, o) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = i || le.easing._default,
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = r,
                            this.unit = o || (le.cssNumber[n] ? "" : "px")
                    },
                    cur: function () {
                        var e = F.propHooks[this.prop];
                        return e && e.get ? e.get(this) : F.propHooks._default.get(this)
                    },
                    run: function (e) {
                        var t, n = F.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                            this.now = (this.end - this.start) * t + this.start,
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : F.propHooks._default.set(this),
                            this
                    }
                },
                F.prototype.init.prototype = F.prototype,
                F.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = le.css(e.elem, e.prop, ""),
                                t && "auto" !== t ? t : 0)
                        },
                        set: function (e) {
                            le.fx.step[e.prop] ? le.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[le.cssProps[e.prop]] && !le.cssHooks[e.prop] ? e.elem[e.prop] = e.now : le.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                le.easing = {
                    linear: function (e) {
                        return e
                    },
                    swing: function (e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                le.fx = F.prototype.init,
                le.fx.step = {};
            var ut, lt, ct = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
            le.Animation = le.extend(_, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return f(n.elem, e, Oe.exec(t), n),
                            n
                    }
                    ]
                },
                tweener: function (e, t) {
                    le.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.match(Ee);
                    for (var n, r = 0, i = e.length; i > r; r++)
                        n = e[r],
                            _.tweeners[n] = _.tweeners[n] || [],
                            _.tweeners[n].unshift(t)
                },
                prefilters: [B],
                prefilter: function (e, t) {
                    t ? _.prefilters.unshift(e) : _.prefilters.push(e)
                }
            }),
                le.speed = function (e, t, n) {
                    var r = e && "object" == typeof e ? le.extend({}, e) : {
                        complete: n || !n && t || le.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !le.isFunction(t) && t
                    };
                    return r.duration = le.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in le.fx.speeds ? le.fx.speeds[r.duration] : le.fx.speeds._default,
                        null != r.queue && r.queue !== !0 || (r.queue = "fx"),
                        r.old = r.complete,
                        r.complete = function () {
                            le.isFunction(r.old) && r.old.call(this),
                                r.queue && le.dequeue(this, r.queue)
                        }
                        ,
                        r
                }
                ,
                le.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(Pe).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function (e, t, n, r) {
                        var i = le.isEmptyObject(e)
                            , o = le.speed(t, n, r)
                            , s = function () {
                                var t = _(this, le.extend({}, e), o);
                                (i || Ae.get(this, "finish")) && t.stop(!0)
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
                                    , o = le.timers
                                    , s = Ae.get(this);
                                if (i)
                                    s[i] && s[i].stop && r(s[i]);
                                else
                                    for (i in s)
                                        s[i] && s[i].stop && pt.test(i) && r(s[i]);
                                for (i = o.length; i--;)
                                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                        t = !1,
                                        o.splice(i, 1));
                                !t && n || le.dequeue(this, e)
                            })
                    },
                    finish: function (e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function () {
                                var t, n = Ae.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = le.timers, s = r ? r.length : 0;
                                for (n.finish = !0,
                                    le.queue(this, e, []),
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
                le.each(["toggle", "show", "hide"], function (e, t) {
                    var n = le.fn[t];
                    le.fn[t] = function (e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, r, i)
                    }
                }),
                le.each({
                    slideDown: M("show"),
                    slideUp: M("hide"),
                    slideToggle: M("toggle"),
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
                    le.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }),
                le.timers = [],
                le.fx.tick = function () {
                    var e, t = 0, n = le.timers;
                    for (ut = le.now(); t < n.length; t++)
                        e = n[t],
                            e() || n[t] !== e || n.splice(t--, 1);
                    n.length || le.fx.stop(),
                        ut = void 0
                }
                ,
                le.fx.timer = function (e) {
                    le.timers.push(e),
                        e() ? le.fx.start() : le.timers.pop()
                }
                ,
                le.fx.interval = 13,
                le.fx.start = function () {
                    lt || (lt = n.setInterval(le.fx.tick, le.fx.interval))
                }
                ,
                le.fx.stop = function () {
                    n.clearInterval(lt),
                        lt = null
                }
                ,
                le.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                le.fn.delay = function (e, t) {
                    return e = le.fx ? le.fx.speeds[e] || e : e,
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
            var dt, ft = le.expr.attrHandle;
            le.fn.extend({
                attr: function (e, t) {
                    return qe(this, le.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        le.removeAttr(this, e)
                    })
                }
            }),
                le.extend({
                    attr: function (e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return "undefined" == typeof e.getAttribute ? le.prop(e, t, n) : (1 === o && le.isXMLDoc(e) || (t = t.toLowerCase(),
                                i = le.attrHooks[t] || (le.expr.match.bool.test(t) ? dt : void 0)),
                                void 0 !== n ? null === n ? void le.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                                    n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = le.find.attr(e, t),
                                        null == r ? void 0 : r))
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!ae.radioValue && "radio" === t && le.nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                        n && (e.value = n),
                                        t
                                }
                            }
                        }
                    },
                    removeAttr: function (e, t) {
                        var n, r, i = 0, o = t && t.match(Ee);
                        if (o && 1 === e.nodeType)
                            for (; n = o[i++];)
                                r = le.propFix[n] || n,
                                    le.expr.match.bool.test(n) && (e[r] = !1),
                                    e.removeAttribute(n)
                    }
                }),
                dt = {
                    set: function (e, t, n) {
                        return t === !1 ? le.removeAttr(e, n) : e.setAttribute(n, n),
                            n
                    }
                },
                le.each(le.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = ft[t] || le.find.attr;
                    ft[t] = function (e, t, r) {
                        var i, o;
                        return r || (o = ft[t],
                            ft[t] = i,
                            i = null != n(e, t, r) ? t.toLowerCase() : null,
                            ft[t] = o),
                            i
                    }
                });
            var ht = /^(?:input|select|textarea|button)$/i
                , gt = /^(?:a|area)$/i;
            le.fn.extend({
                prop: function (e, t) {
                    return qe(this, le.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[le.propFix[e] || e]
                    })
                }
            }),
                le.extend({
                    prop: function (e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && le.isXMLDoc(e) || (t = le.propFix[t] || t,
                                i = le.propHooks[t]),
                                void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = le.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    }
                }),
                ae.optSelected || (le.propHooks.selected = {
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
                le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    le.propFix[this.toLowerCase()] = this
                });
            var vt = /[\t\r\n\f]/g;
            le.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, o, s, a, u = 0;
                    if (le.isFunction(e))
                        return this.each(function (t) {
                            le(this).addClass(e.call(this, t, z(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(Ee) || []; n = this[u++];)
                            if (i = z(n),
                                r = 1 === n.nodeType && (" " + i + " ").replace(vt, " ")) {
                                for (s = 0; o = t[s++];)
                                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                a = le.trim(r),
                                    i !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, r, i, o, s, a, u = 0;
                    if (le.isFunction(e))
                        return this.each(function (t) {
                            le(this).removeClass(e.call(this, t, z(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Ee) || []; n = this[u++];)
                            if (i = z(n),
                                r = 1 === n.nodeType && (" " + i + " ").replace(vt, " ")) {
                                for (s = 0; o = t[s++];)
                                    for (; r.indexOf(" " + o + " ") > -1;)
                                        r = r.replace(" " + o + " ", " ");
                                a = le.trim(r),
                                    i !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function (n) {
                        le(this).toggleClass(e.call(this, n, z(this), t), t)
                    }) : this.each(function () {
                        var t, r, i, o;
                        if ("string" === n)
                            for (r = 0,
                                i = le(this),
                                o = e.match(Ee) || []; t = o[r++];)
                                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = z(this),
                                t && Ae.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ae.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + z(n) + " ").replace(vt, " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var mt = /\r/g
                , yt = /[\x20\t\r\n\f]+/g;
            le.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    {
                        if (arguments.length)
                            return r = le.isFunction(e),
                                this.each(function (n) {
                                    var i;
                                    1 === this.nodeType && (i = r ? e.call(this, n, le(this).val()) : e,
                                        null == i ? i = "" : "number" == typeof i ? i += "" : le.isArray(i) && (i = le.map(i, function (e) {
                                            return null == e ? "" : e + ""
                                        })),
                                        t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()],
                                        t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                                });
                        if (i)
                            return t = le.valHooks[i.type] || le.valHooks[i.nodeName.toLowerCase()],
                                t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                                    "string" == typeof n ? n.replace(mt, "") : null == n ? "" : n)
                    }
                }
            }),
                le.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = le.find.attr(e, "value");
                                return null != t ? t : le.trim(le.text(e)).replace(yt, " ")
                            }
                        },
                        select: {
                            get: function (e) {
                                for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                                    if (n = r[u],
                                        (n.selected || u === i) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                                        if (t = le(n).val(),
                                            o)
                                            return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function (e, t) {
                                for (var n, r, i = e.options, o = le.makeArray(t), s = i.length; s--;)
                                    r = i[s],
                                        (r.selected = le.inArray(le.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                    o
                            }
                        }
                    }
                }),
                le.each(["radio", "checkbox"], function () {
                    le.valHooks[this] = {
                        set: function (e, t) {
                            return le.isArray(t) ? e.checked = le.inArray(le(e).val(), t) > -1 : void 0
                        }
                    },
                        ae.checkOn || (le.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        }
                        )
                });
            var bt = /^(?:focusinfocus|focusoutblur)$/;
            le.extend(le.event, {
                trigger: function (e, t, r, i) {
                    var o, s, a, u, l, c, p, d = [r || Z], f = se.call(e, "type") ? e.type : e, h = se.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = a = r = r || Z,
                        3 !== r.nodeType && 8 !== r.nodeType && !bt.test(f + le.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."),
                            f = h.shift(),
                            h.sort()),
                            l = f.indexOf(":") < 0 && "on" + f,
                            e = e[le.expando] ? e : new le.Event(f, "object" == typeof e && e),
                            e.isTrigger = i ? 2 : 3,
                            e.namespace = h.join("."),
                            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            e.result = void 0,
                            e.target || (e.target = r),
                            t = null == t ? [e] : le.makeArray(t, [e]),
                            p = le.event.special[f] || {},
                            i || !p.trigger || p.trigger.apply(r, t) !== !1)) {
                        if (!i && !p.noBubble && !le.isWindow(r)) {
                            for (u = p.delegateType || f,
                                bt.test(u + f) || (s = s.parentNode); s; s = s.parentNode)
                                d.push(s),
                                    a = s;
                            a === (r.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || n)
                        }
                        for (o = 0; (s = d[o++]) && !e.isPropagationStopped();)
                            e.type = o > 1 ? u : p.bindType || f,
                                c = (Ae.get(s, "events") || {})[e.type] && Ae.get(s, "handle"),
                                c && c.apply(s, t),
                                c = l && s[l],
                                c && c.apply && Ne(s) && (e.result = c.apply(s, t),
                                    e.result === !1 && e.preventDefault());
                        return e.type = f,
                            i || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), t) !== !1 || !Ne(r) || l && le.isFunction(r[f]) && !le.isWindow(r) && (a = r[l],
                                a && (r[l] = null),
                                le.event.triggered = f,
                                r[f](),
                                le.event.triggered = void 0,
                                a && (r[l] = a)),
                            e.result
                    }
                },
                simulate: function (e, t, n) {
                    var r = le.extend(new le.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    le.event.trigger(r, null, t)
                }
            }),
                le.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            le.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        return n ? le.event.trigger(e, t, n, !0) : void 0
                    }
                }),
                le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                    le.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }),
                le.fn.extend({
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                ae.focusin = "onfocusin" in n,
                ae.focusin || le.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function (e, t) {
                    var n = function (e) {
                        le.event.simulate(t, e.target, le.event.fix(e))
                    };
                    le.event.special[t] = {
                        setup: function () {
                            var r = this.ownerDocument || this
                                , i = Ae.access(r, t);
                            i || r.addEventListener(e, n, !0),
                                Ae.access(r, t, (i || 0) + 1)
                        },
                        teardown: function () {
                            var r = this.ownerDocument || this
                                , i = Ae.access(r, t) - 1;
                            i ? Ae.access(r, t, i) : (r.removeEventListener(e, n, !0),
                                Ae.remove(r, t))
                        }
                    }
                });
            var xt = n.location
                , wt = le.now()
                , Tt = /\?/;
            le.parseJSON = function (e) {
                return JSON.parse(e + "")
            }
                ,
                le.parseXML = function (e) {
                    var t;
                    if (!e || "string" != typeof e)
                        return null;
                    try {
                        t = (new n.DOMParser).parseFromString(e, "text/xml")
                    } catch (r) {
                        t = void 0
                    }
                    return t && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e),
                        t
                }
                ;
            var kt = /#.*$/
                , Ct = /([?&])_=[^&]*/
                , Et = /^(.*?):[ \t]*([^\r\n]*)$/gm
                , St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                , qt = /^(?:GET|HEAD)$/
                , Nt = /^\/\//
                , At = {}
                , Lt = {}
                , Dt = "*/".concat("*")
                , jt = Z.createElement("a");
            jt.href = xt.href,
                le.extend({
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
                            "text json": le.parseJSON,
                            "text xml": le.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function (e, t) {
                        return t ? X(X(e, le.ajaxSettings), t) : X(le.ajaxSettings, e)
                    },
                    ajaxPrefilter: U(At),
                    ajaxTransport: U(Lt),
                    ajax: function (e, t) {
                        function r(e, t, r, a) {
                            var l, p, y, b, w, k = t;
                            2 !== x && (x = 2,
                                u && n.clearTimeout(u),
                                i = void 0,
                                s = a || "",
                                T.readyState = e > 0 ? 4 : 0,
                                l = e >= 200 && 300 > e || 304 === e,
                                r && (b = Y(d, T, r)),
                                b = G(d, b, T, l),
                                l ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"),
                                    w && (le.lastModified[o] = w),
                                    w = T.getResponseHeader("etag"),
                                    w && (le.etag[o] = w)),
                                    204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state,
                                        p = b.data,
                                        y = b.error,
                                        l = !y)) : (y = k,
                                            !e && k || (k = "error",
                                                0 > e && (e = 0))),
                                T.status = e,
                                T.statusText = (t || k) + "",
                                l ? g.resolveWith(f, [p, k, T]) : g.rejectWith(f, [T, k, y]),
                                T.statusCode(m),
                                m = void 0,
                                c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, d, l ? p : y]),
                                v.fireWith(f, [T, k]),
                                c && (h.trigger("ajaxComplete", [T, d]),
                                    --le.active || le.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var i, o, s, a, u, l, c, p, d = le.ajaxSetup({}, t), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? le(f) : le.event, g = le.Deferred(), v = le.Callbacks("once memory"), m = d.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === x) {
                                    if (!a)
                                        for (a = {}; t = Et.exec(s);)
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
                                return x || (d.mimeType = e),
                                    this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > x)
                                        for (t in e)
                                            m[t] = [m[t], e[t]];
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
                        if (g.promise(T).complete = v.add,
                            T.success = T.done,
                            T.error = T.fail,
                            d.url = ((e || d.url || xt.href) + "").replace(kt, "").replace(Nt, xt.protocol + "//"),
                            d.type = t.method || t.type || d.method || d.type,
                            d.dataTypes = le.trim(d.dataType || "*").toLowerCase().match(Ee) || [""],
                            null == d.crossDomain) {
                            l = Z.createElement("a");
                            try {
                                l.href = d.url,
                                    l.href = l.href,
                                    d.crossDomain = jt.protocol + "//" + jt.host != l.protocol + "//" + l.host
                            } catch (k) {
                                d.crossDomain = !0
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = le.param(d.data, d.traditional)),
                            V(At, d, t, T),
                            2 === x)
                            return T;
                        c = le.event && d.global,
                            c && 0 === le.active++ && le.event.trigger("ajaxStart"),
                            d.type = d.type.toUpperCase(),
                            d.hasContent = !qt.test(d.type),
                            o = d.url,
                            d.hasContent || (d.data && (o = d.url += (Tt.test(o) ? "&" : "?") + d.data,
                                delete d.data),
                                d.cache === !1 && (d.url = Ct.test(o) ? o.replace(Ct, "$1_=" + wt++) : o + (Tt.test(o) ? "&" : "?") + "_=" + wt++)),
                            d.ifModified && (le.lastModified[o] && T.setRequestHeader("If-Modified-Since", le.lastModified[o]),
                                le.etag[o] && T.setRequestHeader("If-None-Match", le.etag[o])),
                            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType),
                            T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : d.accepts["*"]);
                        for (p in d.headers)
                            T.setRequestHeader(p, d.headers[p]);
                        if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === x))
                            return T.abort();
                        w = "abort";
                        for (p in {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            T[p](d[p]);
                        if (i = V(Lt, d, t, T)) {
                            if (T.readyState = 1,
                                c && h.trigger("ajaxSend", [T, d]),
                                2 === x)
                                return T;
                            d.async && d.timeout > 0 && (u = n.setTimeout(function () {
                                T.abort("timeout")
                            }, d.timeout));
                            try {
                                x = 1,
                                    i.send(y, r)
                            } catch (k) {
                                if (!(2 > x))
                                    throw k;
                                r(-1, k)
                            }
                        } else
                            r(-1, "No Transport");
                        return T
                    },
                    getJSON: function (e, t, n) {
                        return le.get(e, t, n, "json")
                    },
                    getScript: function (e, t) {
                        return le.get(e, void 0, t, "script")
                    }
                }),
                le.each(["get", "post"], function (e, t) {
                    le[t] = function (e, n, r, i) {
                        return le.isFunction(n) && (i = i || r,
                            r = n,
                            n = void 0),
                            le.ajax(le.extend({
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r
                            }, le.isPlainObject(e) && e))
                    }
                }),
                le._evalUrl = function (e) {
                    return le.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }
                ,
                le.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return le.isFunction(e) ? this.each(function (t) {
                            le(this).wrapAll(e.call(this, t))
                        }) : (this[0] && (t = le(e, this[0].ownerDocument).eq(0).clone(!0),
                            this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function () {
                                for (var e = this; e.firstElementChild;)
                                    e = e.firstElementChild;
                                return e
                            }).append(this)),
                            this)
                    },
                    wrapInner: function (e) {
                        return le.isFunction(e) ? this.each(function (t) {
                            le(this).wrapInner(e.call(this, t))
                        }) : this.each(function () {
                            var t = le(this)
                                , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function (e) {
                        var t = le.isFunction(e);
                        return this.each(function (n) {
                            le(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function () {
                        return this.parent().each(function () {
                            le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }),
                le.expr.filters.hidden = function (e) {
                    return !le.expr.filters.visible(e)
                }
                ,
                le.expr.filters.visible = function (e) {
                    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
                }
                ;
            var Ht = /%20/g
                , Ot = /\[\]$/
                , Rt = /\r?\n/g
                , Pt = /^(?:submit|button|image|reset|file)$/i
                , Ft = /^(?:input|select|textarea|keygen)/i;
            le.param = function (e, t) {
                var n, r = [], i = function (e, t) {
                    t = le.isFunction(t) ? t() : null == t ? "" : t,
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional),
                    le.isArray(e) || e.jquery && !le.isPlainObject(e))
                    le.each(e, function () {
                        i(this.name, this.value)
                    });
                else
                    for (n in e)
                        Q(n, e[n], t, i);
                return r.join("&").replace(Ht, "+")
            }
                ,
                le.fn.extend({
                    serialize: function () {
                        return le.param(this.serializeArray())
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = le.prop(this, "elements");
                            return e ? le.makeArray(e) : this
                        }).filter(function () {
                            var e = this.type;
                            return this.name && !le(this).is(":disabled") && Ft.test(this.nodeName) && !Pt.test(e) && (this.checked || !Fe.test(e))
                        }).map(function (e, t) {
                            var n = le(this).val();
                            return null == n ? null : le.isArray(n) ? le.map(n, function (e) {
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
                le.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) { }
                }
                ;
            var It = {
                0: 200,
                1223: 204
            }
                , Mt = le.ajaxSettings.xhr();
            ae.cors = !!Mt && "withCredentials" in Mt,
                ae.ajax = Mt = !!Mt,
                le.ajaxTransport(function (e) {
                    var t, r;
                    return ae.cors || Mt && !e.crossDomain ? {
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
                                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
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
                            } catch (u) {
                                if (t)
                                    throw u
                            }
                        },
                        abort: function () {
                            t && t()
                        }
                    } : void 0
                }),
                le.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function (e) {
                            return le.globalEval(e),
                                e
                        }
                    }
                }),
                le.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1),
                        e.crossDomain && (e.type = "GET")
                }),
                le.ajaxTransport("script", function (e) {
                    if (e.crossDomain) {
                        var t, n;
                        return {
                            send: function (r, i) {
                                t = le("<script>").prop({
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
            var $t = []
                , Bt = /(=)\?(?=&|$)|\?\?/;
            le.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = $t.pop() || le.expando + "_" + wt++;
                    return this[e] = !0,
                        e
                }
            }),
                le.ajaxPrefilter("json jsonp", function (e, t, r) {
                    var i, o, s, a = e.jsonp !== !1 && (Bt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(e.data) && "data");
                    return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        a ? e[a] = e[a].replace(Bt, "$1" + i) : e.jsonp !== !1 && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                        e.converters["script json"] = function () {
                            return s || le.error(i + " was not called"),
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
                            void 0 === o ? le(n).removeProp(i) : n[i] = o,
                                e[i] && (e.jsonpCallback = t.jsonpCallback,
                                    $t.push(i)),
                                s && le.isFunction(o) && o(s[0]),
                                s = o = void 0
                        }),
                        "script") : void 0
                }),
                le.parseHTML = function (e, t, n) {
                    if (!e || "string" != typeof e)
                        return null;
                    "boolean" == typeof t && (n = t,
                        t = !1),
                        t = t || Z;
                    var r = ye.exec(e)
                        , i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = v([e], t, i),
                        i && i.length && le(i).remove(),
                        le.merge([], r.childNodes))
                }
                ;
            var Wt = le.fn.load;
            le.fn.load = function (e, t, n) {
                if ("string" != typeof e && Wt)
                    return Wt.apply(this, arguments);
                var r, i, o, s = this, a = e.indexOf(" ");
                return a > -1 && (r = le.trim(e.slice(a)),
                    e = e.slice(0, a)),
                    le.isFunction(t) ? (n = t,
                        t = void 0) : t && "object" == typeof t && (i = "POST"),
                    s.length > 0 && le.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done(function (e) {
                        o = arguments,
                            s.html(r ? le("<div>").append(le.parseHTML(e)).find(r) : e)
                    }).always(n && function (e, t) {
                        s.each(function () {
                            n.apply(this, o || [e.responseText, t, e])
                        })
                    }
                    ),
                    this
            }
                ,
                le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    le.fn[t] = function (e) {
                        return this.on(t, e)
                    }
                }),
                le.expr.filters.animated = function (e) {
                    return le.grep(le.timers, function (t) {
                        return e === t.elem
                    }).length
                }
                ,
                le.offset = {
                    setOffset: function (e, t, n) {
                        var r, i, o, s, a, u, l, c = le.css(e, "position"), p = le(e), d = {};
                        "static" === c && (e.style.position = "relative"),
                            a = p.offset(),
                            o = le.css(e, "top"),
                            u = le.css(e, "left"),
                            l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                            l ? (r = p.position(),
                                s = r.top,
                                i = r.left) : (s = parseFloat(o) || 0,
                                    i = parseFloat(u) || 0),
                            le.isFunction(t) && (t = t.call(e, n, le.extend({}, a))),
                            null != t.top && (d.top = t.top - a.top + s),
                            null != t.left && (d.left = t.left - a.left + i),
                            "using" in t ? t.using.call(e, d) : p.css(d)
                    }
                },
                le.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function (t) {
                                le.offset.setOffset(this, e, t)
                            });
                        var t, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        }, o = r && r.ownerDocument;
                        if (o)
                            return t = o.documentElement,
                                le.contains(t, r) ? (i = r.getBoundingClientRect(),
                                    n = J(o),
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
                            return "fixed" === le.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                                t = this.offset(),
                                le.nodeName(e[0], "html") || (r = e.offset()),
                                r.top += le.css(e[0], "borderTopWidth", !0),
                                r.left += le.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - r.top - le.css(n, "marginTop", !0),
                                left: t.left - r.left - le.css(n, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === le.css(e, "position");)
                                e = e.offsetParent;
                            return e || nt
                        })
                    }
                }),
                le.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function (e, t) {
                    var n = "pageYOffset" === t;
                    le.fn[e] = function (r) {
                        return qe(this, function (e, r, i) {
                            var o = J(e);
                            return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                        }, e, r, arguments.length)
                    }
                }),
                le.each(["top", "left"], function (e, t) {
                    le.cssHooks[t] = D(ae.pixelPosition, function (e, n) {
                        return n ? (n = L(e, t),
                            Ze.test(n) ? le(e).position()[t] + "px" : n) : void 0
                    })
                }),
                le.each({
                    Height: "height",
                    Width: "width"
                }, function (e, t) {
                    le.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function (n, r) {
                        le.fn[r] = function (r, i) {
                            var o = arguments.length && (n || "boolean" != typeof r)
                                , s = n || (r === !0 || i === !0 ? "margin" : "border");
                            return qe(this, function (t, n, r) {
                                var i;
                                return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? le.css(t, n, s) : le.style(t, n, r, s)
                            }, t, o ? r : void 0, o, null)
                        }
                    })
                }),
                le.fn.extend({
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
                le.fn.andSelf = le.fn.addBack,
                r = [],
                i = function () {
                    return le
                }
                    .apply(t, r),
                !(void 0 !== i && (e.exports = i));
            var _t = n.jQuery
                , zt = n.$;
            return le.noConflict = function (e) {
                return n.$ === le && (n.$ = zt),
                    e && n.jQuery === le && (n.jQuery = _t),
                    le
            }
                ,
                o || (n.jQuery = n.$ = le),
                le
        })
    }
    , [15, 4], function (e, t, n) {
        t = e.exports = n(5)(),
            t.push([e.id, ".container{min-width:600px;height:300px;max-width:700px;position:relative;box-sizing:border-box;margin-left:50px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.startButton{margin-right:4px}.resetButton,.startButton{float:left;margin-left:4px}.combobox{float:left;margin-right:5px;width:110px}button{width:70px}.comboboxLabel{float:left;margin-right:10px;font-size:80%;line-height:25px;height:25px}.simulation{margin:20px}.point,.simulation{display:inline-block}.point{width:40px;height:40px;background:blue;border-radius:5px}.propagationSpeed{margin:0 auto;text-align:center;margin-top:-14px}.time{display:inline-block}.droppedText,.time{font-size:80%;color:purple}.droppedText{display:block}.queue{display:inline-block;float:left}.queueEl{width:10px;height:60px}.dropper,.queueEl{display:inline-block;border:1px solid #000;margin-left:-1px}.dropper{float:left;width:40px;height:35px;margin-top:13px}.chanel{width:190px;height:15px;border:1px solid #000;margin-top:23.5px;margin-left:-1px;overflow:hidden}.chanel,.packet{display:inline-block;float:left}.outPacket,.packet{width:20px;background-color:red;height:15.5px;margin-top:0;margin-left:-20px}.droppedPacket,.outPacket{float:left;display:inline-block}.droppedPacket{width:15.5px;background-color:red;height:15.5px;margin-top:41px;margin-left:-360px}", ""])
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
                    , i = f[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++)
                        i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++)
                        i.parts.push(l(r.parts[o], t))
                } else {
                    for (var s = [], o = 0; o < r.parts.length; o++)
                        s.push(l(r.parts[o], t));
                    f[r.id] = {
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
                    , u = i[3]
                    , l = {
                        css: s,
                        media: a,
                        sourceMap: u
                    };
                n[o] ? n[o].parts.push(l) : t.push(n[o] = {
                    id: o,
                    parts: [l]
                })
            }
            return t
        }
        function o(e, t) {
            var n = v()
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
        function u(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet",
                o(e, t),
                t
        }
        function l(e, t) {
            var n, r, i;
            if (t.singleton) {
                var o = y++;
                n = m || (m = a(t)),
                    r = c.bind(null, n, o, !1),
                    i = c.bind(null, n, o, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(t),
                    r = d.bind(null, n),
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
        function d(e, t) {
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
            , v = h(function () {
                return document.head || document.getElementsByTagName("head")[0]
            })
            , m = null
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
                            , u = f[a.id];
                        u.refs--,
                            o.push(u)
                    }
                    if (e) {
                        var l = i(e);
                        r(l, t)
                    }
                    for (var s = 0; s < o.length; s++) {
                        var u = o[s];
                        if (0 === u.refs) {
                            for (var c = 0; c < u.parts.length; c++)
                                u.parts[c]();
                            delete f[u.id]
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
    , [15, 8], function (e, t, n) {
        t = e.exports = n(5)(),
            t.push([e.id, "body{font-family:Arial,sans-serif}.header,h1{color:#101027;font-size:200%;font-weight:400;margin:.67em 0}.focusable,canvas{border:3px solid transparent}.focusable:focus,button:focus,canvas:focus{outline:none;border:3px dotted #000}.text,p{font-size:100%;margin:1em 0}button{font-size:80%;height:25px;background:linear-gradient(#fff,#f0f0f0);border:1px solid #adadad;box-sizing:border-box}button:disabled{background:#d3d3d3;border:1px solid #bcbcbc}button::-moz-focus-inner{border:0}.navigation{width:0;height:0;padding:0;margin:0;overflow:hidden}", ""])
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
    , function (e, t) {
        e.exports = `
    <div>
        <h1>排队与丢失</h1>
        <p>
            正如我们在第一章中了解到的，端到端延迟中最复杂和最有趣的部分是排队延迟。
            在这个交互式动画中，您可以指定数据包到达率和链路传输速度。
            然后您将看到数据包到达并排队等待服务。
            当队列变满时，您将看到队列溢出——即数据包丢失。
        </p>
        <p>
            一个特别有趣的情况是当发送速率和传输速率相同时，例如当两者都是 500 packets/sec 时。
            如果让交互式动画运行很长时间，最终将看到队列填满并溢出。
            实际上，当两个速率相同（即ρ=1）时，队列会无限制地增长（随机到达时间），如本文所述。
        </p>
        <p id="navigation" class="navigation">
            在这个交互式动画中，您可以探索排队延迟，它是端到端延迟的一个组成部分。
            您可以改变组合框显示的两个参数。
            第一个位于左侧，设置发送速率，可以是每秒350或500个数据包。
            另一个位于右侧，设置传输速度，可以等于每秒350、500或1000个数据包。
            两个按钮位于这些组合框旁边。
            “开始”按钮启动下面的动画。当您单击此按钮时，它和参数选择器都被禁用，您可以查看下面的系统发生了什么。
            “重置”按钮停止动画并启用参数选择器和开始按钮。
            该系统位于下方。一个细长的水平矩形代表一个传输通道。
            它被一个更宽的正方形分成两半，代表一个路由器，另一个更宽的矩形放在它旁边的左边，由10个部分组成，代表可能的队列容量。
            下面的计数器显示总时间（毫秒）和丢弃的数据包数。
        </p>
        <div class="container">
            <div class="comboboxLabel" id="emissionRate">发送速率</div>
            <div class="combobox" id="emissionRateCombo"> </div>
            <div class="comboboxLabel" id="transmission">传输速率</div>
            <div class="combobox" id="transmissionRateCombo"> </div>
            <div class="startButton"> <button>开始</button> </div>
            <div class="resetButton"> <button>重置</button> </div>
            <br>
            <div class="simulation">
                <div class="chanel" id="senderChanel"></div>
                <div class="queue">
                    <div class="queueEl" id="queueEl_1"></div>
                    <div class="queueEl" id="queueEl_2"></div>
                    <div class="queueEl" id="queueEl_3"></div>
                    <div class="queueEl" id="queueEl_4"></div>
                    <div class="queueEl" id="queueEl_5"></div>
                    <div class="queueEl" id="queueEl_6"></div>
                    <div class="queueEl" id="queueEl_7"></div>
                    <div class="queueEl" id="queueEl_8"></div>
                    <div class="queueEl" id="queueEl_9"></div>
                    <div class="queueEl" id="queueEl_10"></div>
                </div>
                <div class="dropper"></div>
                <div class="chanel" id="outChanel"></div>
            </div>
            <div class="aboutAnimation">
                <div class="time">0.000 msec</div>
                <div class="droppedText">0 packets dropped out of 0.</div>
            </div>
        </div>
    </div>`
    }
    , function (e, t, n) {
        (function (t, r) {
            if (n(12),
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
        ).call(t, n(2), n(2))
    }
    , function (e, t, n) {
        var r = n(13);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(6)(r, {});
        r.locals && (e.exports = r.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(5)(),
            t.push([e.id, ".combobox{height:25px;font-size:90%}.combobox:focus{outline:none;border:3px dotted #000}", ""])
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
        ).call(t, n(2))
    }
    , function (e, t, n, r) {
        var i = n(r);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(6)(i, {});
        i.locals && (e.exports = i.locals)
    }
]));
