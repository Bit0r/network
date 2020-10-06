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
}(function (e) {
    for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t))
            switch (typeof e[t]) {
                case "function":
                    break;
                case "object":
                    e[t] = function (t) {
                        var n = t.slice(1)
                            , i = e[t[0]];
                        return function (e, t, r) {
                            i.apply(this, [e, t, r].concat(n))
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
        var i = n(2)
            , r = n(19);
        new i(new r)
    }
    , function (e, t, n) {
        (function (t) {
            var i = n(4);
            n(5),
                n(9);
            var r = n(11)
                , o = n(14)
                , s = n(15)
                , a = n(16)
                , u = n(17)
                , l = i(n(18))
                , c = {
                    width: 100,
                    height: 140,
                    stroke: 3,
                    padding: 7
                }
                , f = {
                    width: c.width,
                    height: 40,
                    margin: 15
                }
                , d = {
                    width: 280,
                    height: 10
                }
                , h = {
                    width: 220,
                    height: 60
                }
                , p = 20
                , g = 14
                , m = g + 4
                , v = " KB"
                , y = {
                    min: 1,
                    max: 7,
                    "default": 4
                }
                , b = {
                    start: "开始",
                    pause: "暂停",
                    resume: "恢复"
                }
                , x = "数据被消费者消耗"
                , w = function (e, n, i) {
                    var o = t('<div class="text">' + e.ariaLabel + "</div>");
                    n.append(o);
                    var s = new r(o, e);
                    return t(s).on(r.Event.VALUE_SELECT, i),
                        s
                }
                , T = function (e) {
                    var t = (e - 2 * c.width - d.width) / 2 - c.stroke
                        , n = c.stroke + m
                        , i = c.width / 2 + c.stroke
                        , r = 2 * c.stroke + c.width + t + (d.width - c.stroke - h.width) / 2 + h.width / 4
                        , o = r + h.width / 2;
                    return {
                        hosts: [{
                            outside: {
                                x: c.stroke + t,
                                y: n,
                                width: c.width + c.stroke,
                                height: c.height + c.stroke,
                                centerX: t + i,
                                text: "Host A"
                            },
                            inside: {
                                x: i + t,
                                y: c.padding + 2 * c.stroke + m,
                                width: c.width / 2 - c.padding,
                                height: c.height - 2 * c.padding - c.stroke
                            },
                            buffer: {
                                x: c.stroke + t,
                                y: n + c.height + c.stroke + f.margin,
                                width: f.width + c.stroke,
                                height: f.height + c.stroke
                            }
                        }, {
                            outside: {
                                x: c.width + d.width + c.stroke + t,
                                y: n,
                                width: c.width + c.stroke,
                                height: c.height + c.stroke,
                                centerX: t + i + c.width + d.width,
                                text: "Host B"
                            },
                            inside: {
                                x: i + c.width + d.width + t,
                                y: c.padding + 2 * c.stroke + m,
                                width: c.width / 2 - c.padding,
                                height: c.height - 2 * c.padding - c.stroke
                            },
                            buffer: {
                                x: c.stroke + c.width + d.width + t,
                                y: n + c.height + c.stroke + f.margin,
                                width: f.width + c.stroke,
                                height: f.height + c.stroke
                            }
                        }],
                        cable: {
                            x: 2 * c.stroke + c.width + t,
                            y: n + c.height + c.stroke + f.margin + f.height / 2 - d.height / 2,
                            width: d.width - c.stroke,
                            height: d.height + c.stroke
                        },
                        messageBox: {
                            x: 2 * c.stroke + c.width + t + (d.width - c.stroke - h.width) / 2,
                            ySend: n + c.height + f.margin - h.height,
                            yRecieve: n + c.height + c.stroke + f.margin + f.height + 2 * c.stroke,
                            centerX: 2 * c.stroke + c.width + t + (d.width - c.stroke - h.width) / 2 + h.width / 2,
                            beginCenterX: r,
                            endCenterX: o,
                            width: h.width + c.stroke,
                            height: h.height
                        }
                    }
                }
                , k = function (e, t) {
                    var n = "";
                    return n = 0 !== e ? 1024 * e + (t ? " bytes" : "") : t ? "1 byte" : "0"
                }
                , S = function (e) {
                    this.model = e,
                        this.node = l.querySelector("div").cloneNode(!0),
                        this.$node = t(this.node),
                        this.canvas = this.node.querySelector("canvas"),
                        this.$canvas = t(this.canvas).find("p"),
                        this.$graphic = this.$node.find(".graphic"),
                        this.ctx = this.canvas.getContext("2d"),
                        this.ctx.font = g + "px Arial, sans-serif",
                        this.rects = T(this.canvas.width),
                        this.speed = y["default"],
                        this.isPlaying = !1,
                        this.currentPosition = 0,
                        this.voice = new o(5),
                        document.body.appendChild(this.node),
                        this.$startButtonNode = this.$node.find("._start"),
                        this.$startButtonNode.click(this.start.bind(this)),
                        this.$node.find("._reset").click(this.reset.bind(this)),
                        this.$node.find("._faster").click(function () {
                            this.speed < y.max && this.speed++
                        }
                            .bind(this)),
                        this.$node.find("._slower").click(function () {
                            this.speed > y.min && this.speed--
                        }
                            .bind(this)),
                        this.$node.find(".applet").attr("aria-label", s.navigation);
                    var n = [function (t, n) {
                        e.setFileSize(n),
                            this.reset()
                    }
                        , function (t, n) {
                            e.setBufferSize(n),
                                this.reset()
                        }
                    ]
                        , i = this.$node.find(".comboboxes");
                    a.forEach(function (e, t) {
                        w(e, i, n[t].bind(this))
                    }, this),
                        this.update(),
                        this.updateAnimationAltText()
                };
            S.prototype.update = function () {
                this.clear(),
                    this.drawBackground()
            }
                ,
                S.prototype.step = function (e) {
                    this.currentPosition = e,
                        !this.isPlaying || this.isReset || this.model.isFinished() ? this.model.isFinished() && (this.update(),
                            window.setTimeout(this.reset.bind(this), 2e3)) : (this.update(),
                                requestAnimationFrame(this.step.bind(this, this.transmissionAnimation(e))))
                }
                ,
                S.prototype.start = function () {
                    this.isPlaying ? (this.isPlaying = !1,
                        this.updateStartButton("resume"),
                        this.step.bind(this),
                        this.updatePausedAnimationAltText()) : (this.isPlaying = !0,
                            this.updateStartButton("pause"),
                            this.updateAnimationAltText(),
                            this.isAnimationInProcess ? this.step(this.currentPosition) : (this.isReset = !1,
                                this.model.canSend = !0,
                                this.model.sendInProgress = !0,
                                this.model.fullSendBuffer(),
                                this.update(),
                                window.setTimeout(this.step.bind(this, 0), 1e3)))
                }
                ,
                S.prototype.drawHost = function (e) {
                    var t = this.rects.hosts[e];
                    this.ctx.textAlign = "center",
                        this.ctx.fillStyle = u.black,
                        this.ctx.fillText(t.outside.text, t.outside.centerX, g),
                        this.ctx.strokeStyle = u.black,
                        this.ctx.lineWidth = c.stroke,
                        this.ctx.strokeRect(t.outside.x, t.outside.y, t.outside.width, t.outside.height),
                        this.ctx.strokeRect(t.buffer.x, t.buffer.y, t.buffer.width, t.buffer.height),
                        this.ctx.lineWidth = 1,
                        this.ctx.strokeRect(t.inside.x, t.inside.y, t.inside.width, t.inside.height)
                }
                ,
                S.prototype.drawCable = function () {
                    this.ctx.strokeStyle = u.black,
                        this.ctx.lineWidth = c.stroke,
                        this.ctx.strokeRect(this.rects.cable.x, this.rects.cable.y, this.rects.cable.width, this.rects.cable.height)
                }
                ,
                S.prototype.drawMessageBoxes = function () {
                    var e, t = "", n = "";
                    this.model.sendInProgress && (t = k(this.model.requestedData, !0),
                        n = "SEQ = " + k(this.model.getRecievedAmount()),
                        e = this.rects.messageBox.ySend),
                        this.model.receiveInProgress && (t = "ACK = " + k(this.model.getRecievedAmount()),
                            n = "WIN = " + k(this.model.requestedData),
                            e = this.rects.messageBox.yRecieve),
                        this.drawMessageBox(e, t, n)
                }
                ,
                S.prototype.drawMessageBox = function (e, t, n) {
                    var i = e + (h.height + g) / 2;
                    this.ctx.textAlign = "center",
                        this.ctx.fillStyle = u.black,
                        this.ctx.fillText(t, this.rects.messageBox.beginCenterX, i),
                        this.ctx.fillText(n, this.rects.messageBox.endCenterX, i),
                        this.ctx.strokeStyle = u.black,
                        this.ctx.lineWidth = c.stroke,
                        this.ctx.strokeRect(this.rects.messageBox.x, e, this.rects.messageBox.width, this.rects.messageBox.height),
                        this.ctx.beginPath(),
                        this.ctx.moveTo(this.rects.messageBox.centerX, e),
                        this.ctx.lineTo(this.rects.messageBox.centerX, e + h.height),
                        this.ctx.stroke()
                }
                ,
                S.prototype.drawConsumedText = function () {
                    this.ctx.textAlign = "center",
                        this.ctx.fillStyle = u.red,
                        this.ctx.fillText(x, this.rects.messageBox.centerX, this.rects.hosts[0].outside.y + g / 2)
                }
                ,
                S.prototype.colorBuffer = function (e) {
                    var t = 0 === e ? this.model.getSendBufferPart() : this.model.getRecieveBufferPart();
                    if (0 != t) {
                        var n = this.rects.hosts[e];
                        this.ctx.fillStyle = u.blue,
                            this.ctx.fillRect(n.buffer.x, n.buffer.y, n.buffer.width * t, n.buffer.height)
                    }
                }
                ,
                S.prototype.colorInsideHost = function (e) {
                    var t = 0 === e ? this.model.getSendInsidePart() : this.model.getReceiveInsidePart()
                        , n = this.rects.hosts[e]
                        , i = 0
                        , r = 0
                        , o = n.inside.y + n.inside.height;
                    0 != t && (i = n.inside.height * t,
                        r = (this.model.fileSize * t).toFixed(0),
                        o = n.inside.y + n.inside.height - i),
                        this.ctx.fillStyle = u.blue,
                        this.ctx.textAlign = "right",
                        this.ctx.fillText(r + v, n.outside.centerX - 5, o + g / 2 - c.stroke),
                        this.ctx.fillRect(n.inside.x, o, n.inside.width, i)
                }
                ,
                S.prototype.drawBackground = function () {
                    this.drawHost(0),
                        this.drawHost(1),
                        this.drawCable(),
                        this.colorBuffer(0),
                        this.colorBuffer(1),
                        this.colorInsideHost(0),
                        this.colorInsideHost(1),
                        this.drawMessageBoxes(),
                        this.model.justConsumed && this.drawConsumedText()
                }
                ,
                S.prototype.clear = function () {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
                ,
                S.prototype.transmissionAnimation = function (e) {
                    if (void 0 != e) {
                        var t = 0;
                        return this.model.sendInProgress && !this.model.finished ? t = this.sendAnimation(e) : this.model.receiveInProgress && (t = this.recieveAnimation(e)),
                            t
                    }
                }
                ,
                S.prototype.sendAnimation = function (e) {
                    e = e || this.rects.cable.x,
                        this.isAnimationInProcess = !0,
                        this.model.send(),
                        e < this.rects.hosts[1].outside.x - p ? this.isPlaying && (e += this.speed) : (this.isAnimationInProcess = !1,
                            this.model.finishSend());
                    var t = e + c.stroke / 2
                        , n = this.rects.cable.y + c.stroke / 2
                        , i = this.rects.cable.height - c.stroke
                        , r = t + p >= this.rects.hosts[1].outside.x ? t + p - this.rects.hosts[1].outside.x : 0;
                    return this.ctx.fillStyle = u.blue,
                        this.ctx.fillRect(t, n, p - r, i),
                        e
                }
                ,
                S.prototype.recieveAnimation = function (e) {
                    e = e || this.rects.hosts[1].outside.x,
                        this.isAnimationInProcess = !0,
                        e > this.rects.cable.x + p ? this.isPlaying && (e -= this.speed) : (this.isAnimationInProcess = !1,
                            this.model.finishReceive());
                    var t = e + c.stroke / 2 - p
                        , n = this.rects.cable.y + c.stroke / 2
                        , i = this.rects.cable.height - c.stroke
                        , r = t <= this.rects.cable.x ? this.rects.cable.x - t : 0;
                    return this.ctx.fillStyle = u.red,
                        this.ctx.fillRect(t + r, n, p, i),
                        e
                }
                ,
                S.prototype.reset = function () {
                    this.isReset = !0,
                        this.updateStartButton("start"),
                        this.isPlaying = !1,
                        this.isAnimationInProcess = !1,
                        this.currentPosition = 0,
                        this.speed = y["default"],
                        this.model.reset(),
                        this.updateAnimationAltText(),
                        this.update()
                }
                ,
                S.prototype.updateStartButton = function (e) {
                    this.$startButtonNode.text(b[e]),
                        this.$startButtonNode.attr("aria-label", s.buttons[e])
                }
                ,
                S.prototype.updateAnimationAltText = function () {
                    var e = s.animation
                        , t = e.initial
                        , n = this.model.isBufferSmall() ? e.smallBuffer : e.bigBuffer;
                    n = n.replace(e.placeholders.fileSize, this.model.fileSize),
                        n = n.replace(e.placeholders.bufferSize, this.model.bufferSize),
                        this.$canvas.text(t + n),
                        this.$graphic.attr("aria-label", t + n)
                }
                ,
                S.prototype.updatePausedAnimationAltText = function () {
                    var e = s.animation
                        , t = e.stop
                        , n = this.model.sendInProgress ? e.send : e.recieve
                        , i = this.model.fileSize * this.model.getSendInsidePart()
                        , r = this.model.getRecievedAmount();
                    t = t.replace(e.placeholders.fileSize, this.model.fileSize),
                        t = t.replace(e.placeholders.bufferSize, this.model.bufferSize),
                        t = t.replace(e.placeholders.hostAData, i),
                        t = t.replace(e.placeholders.sendBuffer, this.model.sendBuffer),
                        t = t.replace(e.placeholders.hostBData, this.model.consumedData),
                        t = t.replace(e.placeholders.receiveBuffer, this.model.receiveBuffer),
                        n = n.replace(e.placeholders.packetSize, this.model.requestedData),
                        n = n.replace(e.placeholders.seq, r),
                        n = n.replace(e.placeholders.ack, r),
                        this.voice.speak(t + n)
                }
                ,
                e.exports = S
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
            function s(e) {
                var t = !!e && "length" in e && e.length
                    , n = le.type(e);
                return "function" === n || le.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }
            function a(e, t, n) {
                if (le.isFunction(t))
                    return le.grep(e, function (e, i) {
                        return !!t.call(e, i, e) !== n
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
                    return ie.call(t, e) > -1 !== n
                })
            }
            function u(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;)
                    ;
                return e
            }
            function l(e) {
                var t = {};
                return le.each(e.match(Ce) || [], function (e, n) {
                    t[n] = !0
                }),
                    t
            }
            function c() {
                Z.removeEventListener("DOMContentLoaded", c),
                    n.removeEventListener("load", c),
                    le.ready()
            }
            function f() {
                this.expando = le.expando + f.uid++
            }
            function d(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(Le, "-$&").toLowerCase(),
                        n = e.getAttribute(i),
                        "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Be.test(n) ? le.parseJSON(n) : n
                        } catch (r) { }
                        je.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function h(e, t, n, i) {
                var r, o = 1, s = 20, a = i ? function () {
                    return i.cur()
                }
                    : function () {
                        return le.css(e, t, "")
                    }
                    , u = a(), l = n && n[3] || (le.cssNumber[t] ? "" : "px"), c = (le.cssNumber[t] || "px" !== l && +u) && qe.exec(le.css(e, t));
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
                    r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    i && (i.unit = l,
                        i.start = c,
                        i.end = r)),
                    r
            }
            function p(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], n) : n
            }
            function g(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"))
            }
            function m(e, t, n, i, r) {
                for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], h = 0, m = e.length; m > h; h++)
                    if (o = e[h],
                        o || 0 === o)
                        if ("object" === le.type(o))
                            le.merge(d, o.nodeType ? [o] : o);
                        else if ($e.test(o)) {
                            for (s = s || f.appendChild(t.createElement("div")),
                                a = (Ie.exec(o) || ["", ""])[1].toLowerCase(),
                                u = Fe[a] || Fe._default,
                                s.innerHTML = u[1] + le.htmlPrefilter(o) + u[2],
                                c = u[0]; c--;)
                                s = s.lastChild;
                            le.merge(d, s.childNodes),
                                s = f.firstChild,
                                s.textContent = ""
                        } else
                            d.push(t.createTextNode(o));
                for (f.textContent = "",
                    h = 0; o = d[h++];)
                    if (i && le.inArray(o, i) > -1)
                        r && r.push(o);
                    else if (l = le.contains(o.ownerDocument, o),
                        s = p(f.appendChild(o), "script"),
                        l && g(s),
                        n)
                        for (c = 0; o = s[c++];)
                            Oe.test(o.type || "") && n.push(o);
                return f
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
            function x(e, t, n, i, r, o) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n,
                        n = void 0);
                    for (a in t)
                        x(e, a, n, i, t[a], o);
                    return e
                }
                if (null == i && null == r ? (r = n,
                    i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
                        i = void 0) : (r = i,
                            i = n,
                            n = void 0)),
                    r === !1)
                    r = y;
                else if (!r)
                    return e;
                return 1 === o && (s = r,
                    r = function (e) {
                        return le().off(e),
                            s.apply(this, arguments)
                    }
                    ,
                    r.guid = s.guid || (s.guid = le.guid++)),
                    e.each(function () {
                        le.event.add(this, t, r, i, n)
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
                var t = Ke.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function S(e, t) {
                var n, i, r, o, s, a, u, l;
                if (1 === t.nodeType) {
                    if (De.hasData(e) && (o = De.access(e),
                        s = De.set(t, o),
                        l = o.events)) {
                        delete s.handle,
                            s.events = {};
                        for (r in l)
                            for (n = 0,
                                i = l[r].length; i > n; n++)
                                le.event.add(t, r, l[r][n])
                    }
                    je.hasData(e) && (a = je.access(e),
                        u = le.extend({}, a),
                        je.set(t, u))
                }
            }
            function C(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function A(e, t, n, i) {
                t = te.apply([], t);
                var r, o, s, a, u, l, c = 0, f = e.length, d = f - 1, h = t[0], g = le.isFunction(h);
                if (g || f > 1 && "string" == typeof h && !ae.checkClone && Ve.test(h))
                    return e.each(function (r) {
                        var o = e.eq(r);
                        g && (t[0] = h.call(this, r, o.html())),
                            A(o, t, n, i)
                    });
                if (f && (r = m(t, e[0].ownerDocument, !1, e, i),
                    o = r.firstChild,
                    1 === r.childNodes.length && (r = o),
                    o || i)) {
                    for (s = le.map(p(r, "script"), T),
                        a = s.length; f > c; c++)
                        u = r,
                            c !== d && (u = le.clone(u, !0, !0),
                                a && le.merge(s, p(u, "script"))),
                            n.call(e[c], u, c);
                    if (a)
                        for (l = s[s.length - 1].ownerDocument,
                            le.map(s, k),
                            c = 0; a > c; c++)
                            u = s[c],
                                Oe.test(u.type || "") && !De.access(u, "globalEval") && le.contains(l, u) && (u.src ? le._evalUrl && le._evalUrl(u.src) : le.globalEval(u.textContent.replace(Ye, "")))
                }
                return e
            }
            function E(e, t, n) {
                for (var i, r = t ? le.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                    n || 1 !== i.nodeType || le.cleanData(p(i)),
                        i.parentNode && (n && le.contains(i.ownerDocument, i) && g(p(i, "script")),
                            i.parentNode.removeChild(i));
                return e
            }
            function N(e, t) {
                var n = le(t.createElement(e)).appendTo(t.body)
                    , i = le.css(n[0], "display");
                return n.detach(),
                    i
            }
            function D(e) {
                var t = Z
                    , n = Qe[e];
                return n || (n = N(e, t),
                    "none" !== n && n || (Ge = (Ge || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                        t = Ge[0].contentDocument,
                        t.write(),
                        t.close(),
                        n = N(e, t),
                        Ge.detach()),
                    Qe[e] = n),
                    n
            }
            function j(e, t, n) {
                var i, r, o, s, a = e.style;
                return n = n || et(e),
                    s = n ? n.getPropertyValue(t) || n[t] : void 0,
                    "" !== s && void 0 !== s || le.contains(e.ownerDocument, e) || (s = le.style(e, t)),
                    n && !ae.pixelMarginRight() && Ze.test(s) && Je.test(t) && (i = a.width,
                        r = a.minWidth,
                        o = a.maxWidth,
                        a.minWidth = a.maxWidth = a.width = s,
                        s = n.width,
                        a.width = i,
                        a.minWidth = r,
                        a.maxWidth = o),
                    void 0 !== s ? s + "" : s
            }
            function B(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function L(e) {
                if (e in at)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--;)
                    if (e = st[n] + t,
                        e in at)
                        return e
            }
            function P(e, t, n) {
                var i = qe.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function q(e, t, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
                    "margin" === n && (s += le.css(e, n + He[o], !0, r)),
                        i ? ("content" === n && (s -= le.css(e, "padding" + He[o], !0, r)),
                            "margin" !== n && (s -= le.css(e, "border" + He[o] + "Width", !0, r))) : (s += le.css(e, "padding" + He[o], !0, r),
                                "padding" !== n && (s += le.css(e, "border" + He[o] + "Width", !0, r)));
                return s
            }
            function H(e, t, n) {
                var i = !0
                    , r = "width" === t ? e.offsetWidth : e.offsetHeight
                    , o = et(e)
                    , s = "border-box" === le.css(e, "boxSizing", !1, o);
                if (0 >= r || null == r) {
                    if (r = j(e, t, o),
                        (0 > r || null == r) && (r = e.style[t]),
                        Ze.test(r))
                        return r;
                    i = s && (ae.boxSizingReliable() || r === e.style[t]),
                        r = parseFloat(r) || 0
                }
                return r + q(e, t, n || (s ? "border" : "content"), i, o) + "px"
            }
            function R(e, t) {
                for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)
                    i = e[s],
                        i.style && (o[s] = De.get(i, "olddisplay"),
                            n = i.style.display,
                            t ? (o[s] || "none" !== n || (i.style.display = ""),
                                "" === i.style.display && Re(i) && (o[s] = De.access(i, "olddisplay", D(i.nodeName)))) : (r = Re(i),
                                    "none" === n && r || De.set(i, "olddisplay", r ? n : le.css(i, "display"))));
                for (s = 0; a > s; s++)
                    i = e[s],
                        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
                return e
            }
            function z(e, t, n, i, r) {
                return new z.prototype.init(e, t, n, i, r)
            }
            function I() {
                return n.setTimeout(function () {
                    ut = void 0
                }),
                    ut = le.now()
            }
            function O(e, t) {
                var n, i = 0, r = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                    n = He[i],
                        r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e),
                    r
            }
            function F(e, t, n) {
                for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                    if (i = r[o].call(n, t, e))
                        return i
            }
            function $(e, t, n) {
                var i, r, o, s, a, u, l, c, f = this, d = {}, h = e.style, p = e.nodeType && Re(e), g = De.get(e, "fxshow");
                n.queue || (a = le._queueHooks(e, "fx"),
                    null == a.unqueued && (a.unqueued = 0,
                        u = a.empty.fire,
                        a.empty.fire = function () {
                            a.unqueued || u()
                        }
                    ),
                    a.unqueued++,
                    f.always(function () {
                        f.always(function () {
                            a.unqueued--,
                                le.queue(e, "fx").length || a.empty.fire()
                        })
                    })),
                    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                        l = le.css(e, "display"),
                        c = "none" === l ? De.get(e, "olddisplay") || D(e.nodeName) : l,
                        "inline" === c && "none" === le.css(e, "float") && (h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                        f.always(function () {
                            h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                        }));
                for (i in t)
                    if (r = t[i],
                        ct.exec(r)) {
                        if (delete t[i],
                            o = o || "toggle" === r,
                            r === (p ? "hide" : "show")) {
                            if ("show" !== r || !g || void 0 === g[i])
                                continue;
                            p = !0
                        }
                        d[i] = g && g[i] || le.style(e, i)
                    } else
                        l = void 0;
                if (le.isEmptyObject(d))
                    "inline" === ("none" === l ? D(e.nodeName) : l) && (h.display = l);
                else {
                    g ? "hidden" in g && (p = g.hidden) : g = De.access(e, "fxshow", {}),
                        o && (g.hidden = !p),
                        p ? le(e).show() : f.done(function () {
                            le(e).hide()
                        }),
                        f.done(function () {
                            var t;
                            De.remove(e, "fxshow");
                            for (t in d)
                                le.style(e, t, d[t])
                        });
                    for (i in d)
                        s = F(p ? g[i] : 0, i, f),
                            i in g || (g[i] = s.start,
                                p && (s.end = s.start,
                                    s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function M(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (i = le.camelCase(n),
                        r = t[i],
                        o = e[n],
                        le.isArray(o) && (r = o[1],
                            o = e[n] = o[0]),
                        n !== i && (e[i] = o,
                            delete e[n]),
                        s = le.cssHooks[i],
                        s && "expand" in s) {
                        o = s.expand(o),
                            delete e[i];
                        for (n in o)
                            n in e || (e[n] = o[n],
                                t[n] = r)
                    } else
                        t[i] = r
            }
            function W(e, t, n) {
                var i, r, o = 0, s = W.prefilters.length, a = le.Deferred().always(function () {
                    delete u.elem
                }), u = function () {
                    if (r)
                        return !1;
                    for (var t = ut || I(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++)
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
                        var i = le.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i),
                            i
                    },
                    stop: function (t) {
                        var n = 0
                            , i = t ? l.tweens.length : 0;
                        if (r)
                            return this;
                        for (r = !0; i > n; n++)
                            l.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [l, 1, 0]),
                            a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                            this
                    }
                }), c = l.props;
                for (M(c, l.opts.specialEasing); s > o; o++)
                    if (i = W.prefilters[o].call(l, e, c, l.opts))
                        return le.isFunction(i.stop) && (le._queueHooks(l.elem, l.opts.queue).stop = le.proxy(i.stop, i)),
                            i;
                return le.map(c, F, l),
                    le.isFunction(l.opts.start) && l.opts.start.call(e, l),
                    le.fx.timer(le.extend(u, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })),
                    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            function _(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function X(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t,
                        t = "*");
                    var i, r = 0, o = t.toLowerCase().match(Ce) || [];
                    if (le.isFunction(n))
                        for (; i = o[r++];)
                            "+" === i[0] ? (i = i.slice(1) || "*",
                                (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function U(e, t, n, i) {
                function r(a) {
                    var u;
                    return o[a] = !0,
                        le.each(e[a] || [], function (e, a) {
                            var l = a(t, n, i);
                            return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                                r(l),
                                !1)
                        }),
                        u
                }
                var o = {}
                    , s = e === jt;
                return r(t.dataTypes[0]) || !o["*"] && r("*")
            }
            function V(e, t) {
                var n, i, r = le.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && le.extend(!0, e, i),
                    e
            }
            function K(e, t, n) {
                for (var i, r, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];)
                    u.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (r in a)
                        if (a[r] && a[r].test(i)) {
                            u.unshift(r);
                            break
                        }
                if (u[0] in n)
                    o = u[0];
                else {
                    for (r in n) {
                        if (!u[0] || e.converters[r + " " + u[0]]) {
                            o = r;
                            break
                        }
                        s || (s = r)
                    }
                    o = o || s
                }
                return o ? (o !== u[0] && u.unshift(o),
                    n[o]) : void 0
            }
            function Y(e, t, n, i) {
                var r, o, s, a, u, l = {}, c = e.dataTypes.slice();
                if (c[1])
                    for (s in e.converters)
                        l[s.toLowerCase()] = e.converters[s];
                for (o = c.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                        if ("*" === o)
                            o = u;
                        else if ("*" !== u && u !== o) {
                            if (s = l[u + " " + o] || l["* " + o],
                                !s)
                                for (r in l)
                                    if (a = r.split(" "),
                                        a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                        s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0],
                                            c.unshift(a[1]));
                                        break
                                    }
                            if (s !== !0)
                                if (s && e["throws"])
                                    t = s(t);
                                else
                                    try {
                                        t = s(t)
                                    } catch (f) {
                                        return {
                                            state: "parsererror",
                                            error: s ? f : "No conversion from " + u + " to " + o
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function G(e, t, n, i) {
                var r;
                if (le.isArray(t))
                    le.each(t, function (t, r) {
                        n || qt.test(e) ? i(e, r) : G(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                    });
                else if (n || "object" !== le.type(t))
                    i(e, t);
                else
                    for (r in t)
                        G(e + "[" + r + "]", t[r], n, i)
            }
            function Q(e) {
                return le.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var J = []
                , Z = n.document
                , ee = J.slice
                , te = J.concat
                , ne = J.push
                , ie = J.indexOf
                , re = {}
                , oe = re.toString
                , se = re.hasOwnProperty
                , ae = {}
                , ue = "2.2.4"
                , le = function (e, t) {
                    return new le.fn.init(e, t)
                }
                , ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                , fe = /^-ms-/
                , de = /-([\da-z])/gi
                , he = function (e, t) {
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
                sort: J.sort,
                splice: J.splice
            },
                le.extend = le.fn.extend = function () {
                    var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
                    for ("boolean" == typeof s && (l = s,
                        s = arguments[a] || {},
                        a++),
                        "object" == typeof s || le.isFunction(s) || (s = {}),
                        a === u && (s = this,
                            a--); u > a; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                n = s[t],
                                    i = e[t],
                                    s !== i && (l && i && (le.isPlainObject(i) || (r = le.isArray(i))) ? (r ? (r = !1,
                                        o = n && le.isArray(n) ? n : []) : o = n && le.isPlainObject(n) ? n : {},
                                        s[t] = le.extend(l, o, i)) : void 0 !== i && (s[t] = i));
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
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[oe.call(e)] || "object" : typeof e
                    },
                    globalEval: function (e) {
                        var t, n = eval;
                        e = le.trim(e),
                            e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
                                t.text = e,
                                Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                    },
                    camelCase: function (e) {
                        return e.replace(fe, "ms-").replace(de, he)
                    },
                    nodeName: function (e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function (e, t) {
                        var n, i = 0;
                        if (s(e))
                            for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++)
                                ;
                        else
                            for (i in e)
                                if (t.call(e[i], i, e[i]) === !1)
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
                        return null == t ? -1 : ie.call(t, e, n)
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, i = 0, r = e.length; n > i; i++)
                            e[r++] = t[i];
                        return e.length = r,
                            e
                    },
                    grep: function (e, t, n) {
                        for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++)
                            i = !t(e[o], o),
                                i !== a && r.push(e[o]);
                        return r
                    },
                    map: function (e, t, n) {
                        var i, r, o = 0, a = [];
                        if (s(e))
                            for (i = e.length; i > o; o++)
                                r = t(e[o], o, n),
                                    null != r && a.push(r);
                        else
                            for (o in e)
                                r = t(e[o], o, n),
                                    null != r && a.push(r);
                        return te.apply([], a)
                    },
                    guid: 1,
                    proxy: function (e, t) {
                        var n, i, r;
                        return "string" == typeof t && (n = e[t],
                            t = e,
                            e = n),
                            le.isFunction(e) ? (i = ee.call(arguments, 2),
                                r = function () {
                                    return e.apply(t || this, i.concat(ee.call(arguments)))
                                }
                                ,
                                r.guid = e.guid = e.guid || le.guid++,
                                r) : void 0
                    },
                    now: Date.now,
                    support: ae
                }),
                "function" == typeof Symbol && (le.fn[Symbol.iterator] = J[Symbol.iterator]),
                le.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    re["[object " + t + "]"] = t.toLowerCase()
                });
            var pe = /*!
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
                        var r, o, s, a, u, l, f, h, p = t && t.ownerDocument, g = t ? t.nodeType : 9;
                        if (n = n || [],
                            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                            return n;
                        if (!i && ((t ? t.ownerDocument || t : F) !== L && B(t),
                            t = t || L,
                            q)) {
                            if (11 !== g && (l = ve.exec(e)))
                                if (r = l[1]) {
                                    if (9 === g) {
                                        if (!(s = t.getElementById(r)))
                                            return n;
                                        if (s.id === r)
                                            return n.push(s),
                                                n
                                    } else if (p && (s = p.getElementById(r)) && I(t, s) && s.id === r)
                                        return n.push(s),
                                            n
                                } else {
                                    if (l[2])
                                        return J.apply(n, t.getElementsByTagName(e)),
                                            n;
                                    if ((r = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                                        return J.apply(n, t.getElementsByClassName(r)),
                                            n
                                }
                            if (w.qsa && !X[e + " "] && (!H || !H.test(e))) {
                                if (1 !== g)
                                    p = t,
                                        h = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = O),
                                        f = C(e),
                                        o = f.length,
                                        u = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;)
                                        f[o] = u + " " + d(f[o]);
                                    h = f.join(","),
                                        p = ye.test(e) && c(t.parentNode) || t
                                }
                                if (h)
                                    try {
                                        return J.apply(n, p.querySelectorAll(h)),
                                            n
                                    } catch (m) { } finally {
                                        a === O && t.removeAttribute("id")
                                    }
                            }
                        }
                        return E(e.replace(ae, "$1"), t, n, i)
                    }
                    function n() {
                        function e(n, i) {
                            return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                                e[n + " "] = i
                        }
                        var t = [];
                        return e
                    }
                    function i(e) {
                        return e[O] = !0,
                            e
                    }
                    function r(e) {
                        var t = L.createElement("div");
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
                            T.attrHandle[n[i]] = t
                    }
                    function s(e, t) {
                        var n = t && e
                            , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                        if (i)
                            return i;
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
                        return i(function (t) {
                            return t = +t,
                                i(function (n, i) {
                                    for (var r, o = e([], n.length, t), s = o.length; s--;)
                                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                                })
                        })
                    }
                    function c(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e
                    }
                    function f() { }
                    function d(e) {
                        for (var t = 0, n = e.length, i = ""; n > t; t++)
                            i += e[t].value;
                        return i
                    }
                    function h(e, t, n) {
                        var i = t.dir
                            , r = n && "parentNode" === i
                            , o = M++;
                        return t.first ? function (t, n, o) {
                            for (; t = t[i];)
                                if (1 === t.nodeType || r)
                                    return e(t, n, o)
                        }
                            : function (t, n, s) {
                                var a, u, l, c = [$, o];
                                if (s) {
                                    for (; t = t[i];)
                                        if ((1 === t.nodeType || r) && e(t, n, s))
                                            return !0
                                } else
                                    for (; t = t[i];)
                                        if (1 === t.nodeType || r) {
                                            if (l = t[O] || (t[O] = {}),
                                                u = l[t.uniqueID] || (l[t.uniqueID] = {}),
                                                (a = u[i]) && a[0] === $ && a[1] === o)
                                                return c[2] = a[2];
                                            if (u[i] = c,
                                                c[2] = e(t, n, s))
                                                return !0
                                        }
                            }
                    }
                    function p(e) {
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
                        for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
                            (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                                l && t.push(a)));
                        return s
                    }
                    function v(e, t, n, r, o, s) {
                        return r && !r[O] && (r = v(r)),
                            o && !o[O] && (o = v(o, s)),
                            i(function (i, s, a, u) {
                                var l, c, f, d = [], h = [], p = s.length, v = i || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? v : m(v, d, e, a, u), b = n ? o || (i ? e : p || r) ? [] : s : y;
                                if (n && n(y, b, a, u),
                                    r)
                                    for (l = m(b, h),
                                        r(l, [], a, u),
                                        c = l.length; c--;)
                                        (f = l[c]) && (b[h[c]] = !(y[h[c]] = f));
                                if (i) {
                                    if (o || e) {
                                        if (o) {
                                            for (l = [],
                                                c = b.length; c--;)
                                                (f = b[c]) && l.push(y[c] = f);
                                            o(null, b = [], l, u)
                                        }
                                        for (c = b.length; c--;)
                                            (f = b[c]) && (l = o ? ee(i, f) : d[c]) > -1 && (i[l] = !(s[l] = f))
                                    }
                                } else
                                    b = m(b === s ? b.splice(p, b.length) : b),
                                        o ? o(null, s, b, u) : J.apply(s, b)
                            })
                    }
                    function y(e) {
                        for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = h(function (e) {
                            return e === t
                        }, s, !0), l = h(function (e) {
                            return ee(t, e) > -1
                        }, s, !0), c = [function (e, n, i) {
                            var r = !o && (i || n !== N) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));
                            return t = null,
                                r
                        }
                        ]; r > a; a++)
                            if (n = T.relative[e[a].type])
                                c = [h(p(c), n)];
                            else {
                                if (n = T.filter[e[a].type].apply(null, e[a].matches),
                                    n[O]) {
                                    for (i = ++a; r > i && !T.relative[e[i].type]; i++)
                                        ;
                                    return v(a > 1 && p(c), a > 1 && d(e.slice(0, a - 1).concat({
                                        value: " " === e[a - 2].type ? "*" : ""
                                    })).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && d(e))
                                }
                                c.push(n)
                            }
                        return p(c)
                    }
                    function b(e, n) {
                        var r = n.length > 0
                            , o = e.length > 0
                            , s = function (i, s, a, u, l) {
                                var c, f, d, h = 0, p = "0", g = i && [], v = [], y = N, b = i || o && T.find.TAG("*", l), x = $ += null == y ? 1 : Math.random() || .1, w = b.length;
                                for (l && (N = s === L || s || l); p !== w && null != (c = b[p]); p++) {
                                    if (o && c) {
                                        for (f = 0,
                                            s || c.ownerDocument === L || (B(c),
                                                a = !q); d = e[f++];)
                                            if (d(c, s || L, a)) {
                                                u.push(c);
                                                break
                                            }
                                        l && ($ = x)
                                    }
                                    r && ((c = !d && c) && h--,
                                        i && g.push(c))
                                }
                                if (h += p,
                                    r && p !== h) {
                                    for (f = 0; d = n[f++];)
                                        d(g, v, s, a);
                                    if (i) {
                                        if (h > 0)
                                            for (; p--;)
                                                g[p] || v[p] || (v[p] = G.call(u));
                                        v = m(v)
                                    }
                                    J.apply(u, v),
                                        l && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                                }
                                return l && ($ = x,
                                    N = y),
                                    g
                            };
                        return r ? i(s) : s
                    }
                    var x, w, T, k, S, C, A, E, N, D, j, B, L, P, q, H, R, z, I, O = "sizzle" + 1 * new Date, F = e.document, $ = 0, M = 0, W = n(), _ = n(), X = n(), U = function (e, t) {
                        return e === t && (j = !0),
                            0
                    }, V = 1 << 31, K = {}.hasOwnProperty, Y = [], G = Y.pop, Q = Y.push, J = Y.push, Z = Y.slice, ee = function (e, t) {
                        for (var n = 0, i = e.length; i > n; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), de = new RegExp("^" + ie + "$"), he = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, pe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, Te = function () {
                        B()
                    };
                    try {
                        J.apply(Y = Z.call(F.childNodes), F.childNodes),
                            Y[F.childNodes.length].nodeType
                    } catch (ke) {
                        J = {
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
                        S = t.isXML = function (e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        }
                        ,
                        B = t.setDocument = function (e) {
                            var t, n, i = e ? e.ownerDocument || e : F;
                            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i,
                                P = L.documentElement,
                                q = !S(L),
                                (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                                w.attributes = r(function (e) {
                                    return e.className = "i",
                                        !e.getAttribute("className")
                                }),
                                w.getElementsByTagName = r(function (e) {
                                    return e.appendChild(L.createComment("")),
                                        !e.getElementsByTagName("*").length
                                }),
                                w.getElementsByClassName = me.test(L.getElementsByClassName),
                                w.getById = r(function (e) {
                                    return P.appendChild(e).id = O,
                                        !L.getElementsByName || !L.getElementsByName(O).length
                                }),
                                w.getById ? (T.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && q) {
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
                                        var n, i = [], r = 0, o = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; n = o[r++];)
                                                1 === n.nodeType && i.push(n);
                                            return i
                                        }
                                        return o
                                    }
                                ,
                                T.find.CLASS = w.getElementsByClassName && function (e, t) {
                                    return "undefined" != typeof t.getElementsByClassName && q ? t.getElementsByClassName(e) : void 0
                                }
                                ,
                                R = [],
                                H = [],
                                (w.qsa = me.test(L.querySelectorAll)) && (r(function (e) {
                                    P.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"),
                                        e.querySelectorAll("[id~=" + O + "-]").length || H.push("~="),
                                        e.querySelectorAll(":checked").length || H.push(":checked"),
                                        e.querySelectorAll("a#" + O + "+*").length || H.push(".#.+[+~]")
                                }),
                                    r(function (e) {
                                        var t = L.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="),
                                            e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            H.push(",.*:")
                                    })),
                                (w.matchesSelector = me.test(z = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function (e) {
                                    w.disconnectedMatch = z.call(e, "div"),
                                        z.call(e, "[s!='']:x"),
                                        R.push("!=", oe)
                                }),
                                H = H.length && new RegExp(H.join("|")),
                                R = R.length && new RegExp(R.join("|")),
                                t = me.test(P.compareDocumentPosition),
                                I = t || me.test(P.contains) ? function (e, t) {
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
                                        return j = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === F && I(F, e) ? -1 : t === L || t.ownerDocument === F && I(F, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                                }
                                    : function (e, t) {
                                        if (e === t)
                                            return j = !0,
                                                0;
                                        var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], u = [t];
                                        if (!r || !o)
                                            return e === L ? -1 : t === L ? 1 : r ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                                        if (r === o)
                                            return s(e, t);
                                        for (n = e; n = n.parentNode;)
                                            a.unshift(n);
                                        for (n = t; n = n.parentNode;)
                                            u.unshift(n);
                                        for (; a[i] === u[i];)
                                            i++;
                                        return i ? s(a[i], u[i]) : a[i] === F ? -1 : u[i] === F ? 1 : 0
                                    }
                                ,
                                L) : L
                        }
                        ,
                        t.matches = function (e, n) {
                            return t(e, null, null, n)
                        }
                        ,
                        t.matchesSelector = function (e, n) {
                            if ((e.ownerDocument || e) !== L && B(e),
                                n = n.replace(ce, "='$1']"),
                                w.matchesSelector && q && !X[n + " "] && (!R || !R.test(n)) && (!H || !H.test(n)))
                                try {
                                    var i = z.call(e, n);
                                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return i
                                } catch (r) { }
                            return t(n, L, null, [e]).length > 0
                        }
                        ,
                        t.contains = function (e, t) {
                            return (e.ownerDocument || e) !== L && B(e),
                                I(e, t)
                        }
                        ,
                        t.attr = function (e, t) {
                            (e.ownerDocument || e) !== L && B(e);
                            var n = T.attrHandle[t.toLowerCase()]
                                , i = n && K.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                            return void 0 !== i ? i : w.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        }
                        ,
                        t.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        t.uniqueSort = function (e) {
                            var t, n = [], i = 0, r = 0;
                            if (j = !w.detectDuplicates,
                                D = !w.sortStable && e.slice(0),
                                e.sort(U),
                                j) {
                                for (; t = e[r++];)
                                    t === e[r] && (i = n.push(r));
                                for (; i--;)
                                    e.splice(n[i], 1)
                            }
                            return D = null,
                                e
                        }
                        ,
                        k = t.getText = function (e) {
                            var t, n = "", i = 0, r = e.nodeType;
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += k(e)
                                } else if (3 === r || 4 === r)
                                    return e.nodeValue
                            } else
                                for (; t = e[i++];)
                                    n += k(t);
                            return n
                        }
                        ,
                        T = t.selectors = {
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
                                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
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
                                    return function (r) {
                                        var o = t.attr(r, e);
                                        return null == o ? "!=" === n : n ? (o += "",
                                            "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                                    }
                                },
                                CHILD: function (e, t, n, i, r) {
                                    var o = "nth" !== e.slice(0, 3)
                                        , s = "last" !== e.slice(-4)
                                        , a = "of-type" === t;
                                    return 1 === i && 0 === r ? function (e) {
                                        return !!e.parentNode
                                    }
                                        : function (t, n, u) {
                                            var l, c, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a, b = !1;
                                            if (m) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (d = t; d = d[g];)
                                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                                return !1;
                                                        p = g = "only" === e && !p && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (p = [s ? m.firstChild : m.lastChild],
                                                    s && y) {
                                                    for (d = m,
                                                        f = d[O] || (d[O] = {}),
                                                        c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                                        l = c[e] || [],
                                                        h = l[0] === $ && l[1],
                                                        b = h && l[2],
                                                        d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                                        if (1 === d.nodeType && ++b && d === t) {
                                                            c[e] = [$, h, b];
                                                            break
                                                        }
                                                } else if (y && (d = t,
                                                    f = d[O] || (d[O] = {}),
                                                    c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                                    l = c[e] || [],
                                                    h = l[0] === $ && l[1],
                                                    b = h),
                                                    b === !1)
                                                    for (; (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[O] || (d[O] = {}),
                                                        c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                                        c[e] = [$, b]),
                                                        d !== t));)
                                                        ;
                                                return b -= r,
                                                    b === i || b % i === 0 && b / i >= 0
                                            }
                                        }
                                },
                                PSEUDO: function (e, n) {
                                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return o[O] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                                        T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                            for (var i, r = o(e, n), s = r.length; s--;)
                                                i = ee(e, r[s]),
                                                    e[i] = !(t[i] = r[s])
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
                                        , r = A(e.replace(ae, "$1"));
                                    return r[O] ? i(function (e, t, n, i) {
                                        for (var o, s = r(e, null, i, []), a = e.length; a--;)
                                            (o = s[a]) && (e[a] = !(t[a] = o))
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
                                    return e = e.replace(xe, we),
                                        function (t) {
                                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: i(function (e) {
                                    return de.test(e || "") || t.error("unsupported lang: " + e),
                                        e = e.replace(xe, we).toLowerCase(),
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
                                    return e === P
                                },
                                focus: function (e) {
                                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                                    return pe.test(e.nodeName)
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
                                    for (var i = 0 > n ? n + t : n; --i >= 0;)
                                        e.push(i);
                                    return e
                                }),
                                gt: l(function (e, t, n) {
                                    for (var i = 0 > n ? n + t : n; ++i < t;)
                                        e.push(i);
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
                    return f.prototype = T.filters = T.pseudos,
                        T.setFilters = new f,
                        C = t.tokenize = function (e, n) {
                            var i, r, o, s, a, u, l, c = _[e + " "];
                            if (c)
                                return n ? 0 : c.slice(0);
                            for (a = e,
                                u = [],
                                l = T.preFilter; a;) {
                                i && !(r = ue.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                                    u.push(o = [])),
                                    i = !1,
                                    (r = le.exec(a)) && (i = r.shift(),
                                        o.push({
                                            value: i,
                                            type: r[0].replace(ae, " ")
                                        }),
                                        a = a.slice(i.length));
                                for (s in T.filter)
                                    !(r = he[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(),
                                        o.push({
                                            value: i,
                                            type: s,
                                            matches: r
                                        }),
                                        a = a.slice(i.length));
                                if (!i)
                                    break
                            }
                            return n ? a.length : a ? t.error(e) : _(e, u).slice(0)
                        }
                        ,
                        A = t.compile = function (e, t) {
                            var n, i = [], r = [], o = X[e + " "];
                            if (!o) {
                                for (t || (t = C(e)),
                                    n = t.length; n--;)
                                    o = y(t[n]),
                                        o[O] ? i.push(o) : r.push(o);
                                o = X(e, b(r, i)),
                                    o.selector = e
                            }
                            return o
                        }
                        ,
                        E = t.select = function (e, t, n, i) {
                            var r, o, s, a, u, l = "function" == typeof e && e, f = !i && C(e = l.selector || e);
                            if (n = n || [],
                                1 === f.length) {
                                if (o = f[0] = f[0].slice(0),
                                    o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && q && T.relative[o[1].type]) {
                                    if (t = (T.find.ID(s.matches[0].replace(xe, we), t) || [])[0],
                                        !t)
                                        return n;
                                    l && (t = t.parentNode),
                                        e = e.slice(o.shift().value.length)
                                }
                                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                                    !T.relative[a = s.type]);)
                                    if ((u = T.find[a]) && (i = u(s.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                                        if (o.splice(r, 1),
                                            e = i.length && d(o),
                                            !e)
                                            return J.apply(n, i),
                                                n;
                                        break
                                    }
                            }
                            return (l || A(e, f))(i, t, !q, n, !t || ye.test(e) && c(t.parentNode) || t),
                                n
                        }
                        ,
                        w.sortStable = O.split("").sort(U).join("") === O,
                        w.detectDuplicates = !!j,
                        B(),
                        w.sortDetached = r(function (e) {
                            return 1 & e.compareDocumentPosition(L.createElement("div"))
                        }),
                        r(function (e) {
                            return e.innerHTML = "<a href='#'></a>",
                                "#" === e.firstChild.getAttribute("href")
                        }) || o("type|href|height|width", function (e, t, n) {
                            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }),
                        w.attributes && r(function (e) {
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
            le.find = pe,
                le.expr = pe.selectors,
                le.expr[":"] = le.expr.pseudos,
                le.uniqueSort = le.unique = pe.uniqueSort,
                le.text = pe.getText,
                le.isXMLDoc = pe.isXML,
                le.contains = pe.contains;
            var ge = function (e, t, n) {
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && le(e).is(n))
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
                , ve = le.expr.match.needsContext
                , ye = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                , be = /^.[^:#\[\.,]*$/;
            le.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType ? le.find.matchesSelector(i, e) ? [i] : [] : le.find.matches(e, le.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
            }
                ,
                le.fn.extend({
                    find: function (e) {
                        var t, n = this.length, i = [], r = this;
                        if ("string" != typeof e)
                            return this.pushStack(le(e).filter(function () {
                                for (t = 0; n > t; t++)
                                    if (le.contains(r[t], this))
                                        return !0
                            }));
                        for (t = 0; n > t; t++)
                            le.find(e, r[t], i);
                        return i = this.pushStack(n > 1 ? le.unique(i) : i),
                            i.selector = this.selector ? this.selector + " " + e : e,
                            i
                    },
                    filter: function (e) {
                        return this.pushStack(a(this, e || [], !1))
                    },
                    not: function (e) {
                        return this.pushStack(a(this, e || [], !0))
                    },
                    is: function (e) {
                        return !!a(this, "string" == typeof e && ve.test(e) ? le(e) : e || [], !1).length
                    }
                });
            var xe, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Te = le.fn.init = function (e, t, n) {
                var i, r;
                if (!e)
                    return this;
                if (n = n || xe,
                    "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : we.exec(e),
                        !i || !i[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof le ? t[0] : t,
                            le.merge(this, le.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                            ye.test(i[1]) && le.isPlainObject(t))
                            for (i in t)
                                le.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
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
                    this) : le.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector,
                        this.context = e.context),
                        le.makeArray(e, this))
            }
                ;
            Te.prototype = le.fn,
                xe = le(Z);
            var ke = /^(?:parents|prev(?:Until|All))/
                , Se = {
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
                    for (var n, i = 0, r = this.length, o = [], s = ve.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; r > i; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? le.uniqueSort(o) : o)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? ie.call(le(e), this[0]) : ie.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
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
                        return me((e.parentNode || {}).firstChild, e)
                    },
                    children: function (e) {
                        return me(e.firstChild)
                    },
                    contents: function (e) {
                        return e.contentDocument || le.merge([], e.childNodes)
                    }
                }, function (e, t) {
                    le.fn[e] = function (n, i) {
                        var r = le.map(this, t, n);
                        return "Until" !== e.slice(-5) && (i = n),
                            i && "string" == typeof i && (r = le.filter(i, r)),
                            this.length > 1 && (Se[e] || le.uniqueSort(r),
                                ke.test(e) && r.reverse()),
                            this.pushStack(r)
                    }
                });
            var Ce = /\S+/g;
            le.Callbacks = function (e) {
                e = "string" == typeof e ? l(e) : le.extend({}, e);
                var t, n, i, r, o = [], s = [], a = -1, u = function () {
                    for (r = e.once,
                        i = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < o.length;)
                            o[a].apply(n[0], n[1]) === !1 && e.stopOnFalse && (a = o.length,
                                n = !1);
                    e.memory || (n = !1),
                        t = !1,
                        r && (o = n ? [] : "")
                }, c = {
                    add: function () {
                        return o && (n && !t && (a = o.length - 1,
                            s.push(n)),
                            function i(t) {
                                le.each(t, function (t, n) {
                                    le.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== le.type(n) && i(n)
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
                        return r = s = [],
                            o = n = "",
                            this
                    },
                    disabled: function () {
                        return !o
                    },
                    lock: function () {
                        return r = s = [],
                            n || (o = n = ""),
                            this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (e, n) {
                        return r || (n = n || [],
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
                        return !!i
                    }
                };
                return c
            }
                ,
                le.extend({
                    Deferred: function (e) {
                        var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]]
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
                                    return le.Deferred(function (n) {
                                        le.each(t, function (t, o) {
                                            var s = le.isFunction(e[t]) && e[t];
                                            r[o[1]](function () {
                                                var e = s && s.apply(this, arguments);
                                                e && le.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                            })
                                        }),
                                            e = null
                                    }).promise()
                                },
                                promise: function (e) {
                                    return null != e ? le.extend(e, i) : i
                                }
                            }
                            , r = {};
                        return i.pipe = i.then,
                            le.each(t, function (e, o) {
                                var s = o[2]
                                    , a = o[3];
                                i[o[1]] = s.add,
                                    a && s.add(function () {
                                        n = a
                                    }, t[1 ^ e][2].disable, t[2][2].lock),
                                    r[o[0]] = function () {
                                        return r[o[0] + "With"](this === r ? i : this, arguments),
                                            this
                                    }
                                    ,
                                    r[o[0] + "With"] = s.fireWith
                            }),
                            i.promise(r),
                            e && e.call(r, r),
                            r
                    },
                    when: function (e) {
                        var t, n, i, r = 0, o = ee.call(arguments), s = o.length, a = 1 !== s || e && le.isFunction(e.promise) ? s : 0, u = 1 === a ? e : le.Deferred(), l = function (e, n, i) {
                            return function (r) {
                                n[e] = this,
                                    i[e] = arguments.length > 1 ? ee.call(arguments) : r,
                                    i === t ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                            }
                        };
                        if (s > 1)
                            for (t = new Array(s),
                                n = new Array(s),
                                i = new Array(s); s > r; r++)
                                o[r] && le.isFunction(o[r].promise) ? o[r].promise().progress(l(r, n, t)).done(l(r, i, o)).fail(u.reject) : --a;
                        return a || u.resolveWith(i, o),
                            u.promise()
                    }
                });
            var Ae;
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
                            e !== !0 && --le.readyWait > 0 || (Ae.resolveWith(Z, [le]),
                                le.fn.triggerHandler && (le(Z).triggerHandler("ready"),
                                    le(Z).off("ready"))))
                    }
                }),
                le.ready.promise = function (e) {
                    return Ae || (Ae = le.Deferred(),
                        "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(le.ready) : (Z.addEventListener("DOMContentLoaded", c),
                            n.addEventListener("load", c))),
                        Ae.promise(e)
                }
                ,
                le.ready.promise();
            var Ee = function (e, t, n, i, r, o, s) {
                var a = 0
                    , u = e.length
                    , l = null == n;
                if ("object" === le.type(n)) {
                    r = !0;
                    for (a in n)
                        Ee(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0,
                    le.isFunction(i) || (s = !0),
                    l && (s ? (t.call(e, i),
                        t = null) : (l = t,
                            t = function (e, t, n) {
                                return l.call(le(e), n)
                            }
                        )),
                    t))
                    for (; u > a; a++)
                        t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
            }
                , Ne = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            f.uid = 1,
                f.prototype = {
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
                            void 0 !== i ? i : this.get(e, le.camelCase(t))) : (this.set(e, t, n),
                                void 0 !== n ? n : t)
                    },
                    remove: function (e, t) {
                        var n, i, r, o = e[this.expando];
                        if (void 0 !== o) {
                            if (void 0 === t)
                                this.register(e);
                            else {
                                le.isArray(t) ? i = t.concat(t.map(le.camelCase)) : (r = le.camelCase(t),
                                    t in o ? i = [t, r] : (i = r,
                                        i = i in o ? [i] : i.match(Ce) || [])),
                                    n = i.length;
                                for (; n--;)
                                    delete o[i[n]]
                            }
                            (void 0 === t || le.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !le.isEmptyObject(t)
                    }
                };
            var De = new f
                , je = new f
                , Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , Le = /[A-Z]/g;
            le.extend({
                hasData: function (e) {
                    return je.hasData(e) || De.hasData(e)
                },
                data: function (e, t, n) {
                    return je.access(e, t, n)
                },
                removeData: function (e, t) {
                    je.remove(e, t)
                },
                _data: function (e, t, n) {
                    return De.access(e, t, n)
                },
                _removeData: function (e, t) {
                    De.remove(e, t)
                }
            }),
                le.fn.extend({
                    data: function (e, t) {
                        var n, i, r, o = this[0], s = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (r = je.get(o),
                                1 === o.nodeType && !De.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--;)
                                    s[n] && (i = s[n].name,
                                        0 === i.indexOf("data-") && (i = le.camelCase(i.slice(5)),
                                            d(o, i, r[i])));
                                De.set(o, "hasDataAttrs", !0)
                            }
                            return r
                        }
                        return "object" == typeof e ? this.each(function () {
                            je.set(this, e)
                        }) : Ee(this, function (t) {
                            var n, i;
                            if (o && void 0 === t) {
                                if (n = je.get(o, e) || je.get(o, e.replace(Le, "-$&").toLowerCase()),
                                    void 0 !== n)
                                    return n;
                                if (i = le.camelCase(e),
                                    n = je.get(o, i),
                                    void 0 !== n)
                                    return n;
                                if (n = d(o, i, void 0),
                                    void 0 !== n)
                                    return n
                            } else
                                i = le.camelCase(e),
                                    this.each(function () {
                                        var n = je.get(this, i);
                                        je.set(this, i, t),
                                            e.indexOf("-") > -1 && void 0 !== n && je.set(this, e, t)
                                    })
                        }, null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            je.remove(this, e)
                        })
                    }
                }),
                le.extend({
                    queue: function (e, t, n) {
                        var i;
                        return e ? (t = (t || "fx") + "queue",
                            i = De.get(e, t),
                            n && (!i || le.isArray(n) ? i = De.access(e, t, le.makeArray(n)) : i.push(n)),
                            i || []) : void 0
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = le.queue(e, t)
                            , i = n.length
                            , r = n.shift()
                            , o = le._queueHooks(e, t)
                            , s = function () {
                                le.dequeue(e, t)
                            };
                        "inprogress" === r && (r = n.shift(),
                            i--),
                            r && ("fx" === t && n.unshift("inprogress"),
                                delete o.stop,
                                r.call(e, s, o)),
                            !i && o && o.empty.fire()
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return De.get(e, n) || De.access(e, n, {
                            empty: le.Callbacks("once memory").add(function () {
                                De.remove(e, [t + "queue", n])
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
                        var n, i = 1, r = le.Deferred(), o = this, s = this.length, a = function () {
                            --i || r.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                            e = void 0),
                            e = e || "fx"; s--;)
                            n = De.get(o[s], e + "queueHooks"),
                                n && n.empty && (i++,
                                    n.empty.add(a));
                        return a(),
                            r.promise(t)
                    }
                });
            var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , qe = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i")
                , He = ["Top", "Right", "Bottom", "Left"]
                , Re = function (e, t) {
                    return e = t || e,
                        "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
                }
                , ze = /^(?:checkbox|radio)$/i
                , Ie = /<([\w:-]+)/
                , Oe = /^$|\/(?:java|ecma)script/i
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
            var $e = /<|&#?\w+;/;
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
            var Me = /^key/
                , We = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                , _e = /^([^.]*)(?:\.(.+)|)/;
            le.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o, s, a, u, l, c, f, d, h, p, g, m = De.get(e);
                    if (m)
                        for (n.handler && (o = n,
                            n = o.handler,
                            r = o.selector),
                            n.guid || (n.guid = le.guid++),
                            (u = m.events) || (u = m.events = {}),
                            (s = m.handle) || (s = m.handle = function (t) {
                                return "undefined" != typeof le && le.event.triggered !== t.type ? le.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            t = (t || "").match(Ce) || [""],
                            l = t.length; l--;)
                            a = _e.exec(t[l]) || [],
                                h = g = a[1],
                                p = (a[2] || "").split(".").sort(),
                                h && (f = le.event.special[h] || {},
                                    h = (r ? f.delegateType : f.bindType) || h,
                                    f = le.event.special[h] || {},
                                    c = le.extend({
                                        type: h,
                                        origType: g,
                                        data: i,
                                        handler: n,
                                        guid: n.guid,
                                        selector: r,
                                        needsContext: r && le.expr.match.needsContext.test(r),
                                        namespace: p.join(".")
                                    }, o),
                                    (d = u[h]) || (d = u[h] = [],
                                        d.delegateCount = 0,
                                        f.setup && f.setup.call(e, i, p, s) !== !1 || e.addEventListener && e.addEventListener(h, s)),
                                    f.add && (f.add.call(e, c),
                                        c.handler.guid || (c.handler.guid = n.guid)),
                                    r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                                    le.event.global[h] = !0)
                },
                remove: function (e, t, n, i, r) {
                    var o, s, a, u, l, c, f, d, h, p, g, m = De.hasData(e) && De.get(e);
                    if (m && (u = m.events)) {
                        for (t = (t || "").match(Ce) || [""],
                            l = t.length; l--;)
                            if (a = _e.exec(t[l]) || [],
                                h = g = a[1],
                                p = (a[2] || "").split(".").sort(),
                                h) {
                                for (f = le.event.special[h] || {},
                                    h = (i ? f.delegateType : f.bindType) || h,
                                    d = u[h] || [],
                                    a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    s = o = d.length; o--;)
                                    c = d[o],
                                        !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1),
                                            c.selector && d.delegateCount--,
                                            f.remove && f.remove.call(e, c));
                                s && !d.length && (f.teardown && f.teardown.call(e, p, m.handle) !== !1 || le.removeEvent(e, h, m.handle),
                                    delete u[h])
                            } else
                                for (h in u)
                                    le.event.remove(e, h + t[l], n, i, !0);
                        le.isEmptyObject(u) && De.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = le.event.fix(e);
                    var t, n, i, r, o, s = [], a = ee.call(arguments), u = (De.get(this, "events") || {})[e.type] || [], l = le.event.special[e.type] || {};
                    if (a[0] = e,
                        e.delegateTarget = this,
                        !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (s = le.event.handlers.call(this, e, u),
                            t = 0; (r = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = r.elem,
                                n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)
                                e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                                    e.data = o.data,
                                    i = ((le.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a),
                                    void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                                        e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function (e, t) {
                    var n, i, r, o, s = [], a = t.delegateCount, u = e.target;
                    if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                                for (i = [],
                                    n = 0; a > n; n++)
                                    o = t[n],
                                        r = o.selector + " ",
                                        void 0 === i[r] && (i[r] = o.needsContext ? le(r, this).index(u) > -1 : le.find(r, this, null, [u]).length),
                                        i[r] && i.push(o);
                                i.length && s.push({
                                    elem: u,
                                    handlers: i
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
                    if (e[le.expando])
                        return e;
                    var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
                    for (s || (this.fixHooks[r] = s = We.test(r) ? this.mouseHooks : Me.test(r) ? this.keyHooks : {}),
                        i = s.props ? this.props.concat(s.props) : this.props,
                        e = new le.Event(o),
                        t = i.length; t--;)
                        n = i[t],
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
                        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : y) : this.type = e,
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
                            var n, i = this, r = e.relatedTarget, o = e.handleObj;
                            return r && (r === i || le.contains(i, r)) || (e.type = o.origType,
                                n = o.handler.apply(this, arguments),
                                e.type = t),
                                n
                        }
                    }
                }),
                le.fn.extend({
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
                                le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                                this;
                        if ("object" == typeof e) {
                            for (r in e)
                                this.off(r, t, e[r]);
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
            var Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                , Ue = /<script|<style|<link/i
                , Ve = /checked\s*(?:[^=]|=\s*.checked.)/i
                , Ke = /^true\/(.*)/
                , Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            le.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Xe, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var i, r, o, s, a = e.cloneNode(!0), u = le.contains(e.ownerDocument, e);
                    if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                        for (s = p(a),
                            o = p(e),
                            i = 0,
                            r = o.length; r > i; i++)
                            C(o[i], s[i]);
                    if (t)
                        if (n)
                            for (o = o || p(e),
                                s = s || p(a),
                                i = 0,
                                r = o.length; r > i; i++)
                                S(o[i], s[i]);
                        else
                            S(e, a);
                    return s = p(a, "script"),
                        s.length > 0 && g(s, !u && p(e, "script")),
                        a
                },
                cleanData: function (e) {
                    for (var t, n, i, r = le.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Ne(n)) {
                            if (t = n[De.expando]) {
                                if (t.events)
                                    for (i in t.events)
                                        r[i] ? le.event.remove(n, i) : le.removeEvent(n, i, t.handle);
                                n[De.expando] = void 0
                            }
                            n[je.expando] && (n[je.expando] = void 0)
                        }
                }
            }),
                le.fn.extend({
                    domManip: A,
                    detach: function (e) {
                        return E(this, e, !0)
                    },
                    remove: function (e) {
                        return E(this, e)
                    },
                    text: function (e) {
                        return Ee(this, function (e) {
                            return void 0 === e ? le.text(this) : this.empty().each(function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function () {
                        return A(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = w(this, e);
                                t.appendChild(e)
                            }
                        })
                    },
                    prepend: function () {
                        return A(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = w(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function () {
                        return A(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function () {
                        return A(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (le.cleanData(p(e, !1)),
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
                        return Ee(this, function (e) {
                            var t = this[0] || {}
                                , n = 0
                                , i = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Ue.test(e) && !Fe[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = le.htmlPrefilter(e);
                                try {
                                    for (; i > n; n++)
                                        t = this[n] || {},
                                            1 === t.nodeType && (le.cleanData(p(t, !1)),
                                                t.innerHTML = e);
                                    t = 0
                                } catch (r) { }
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function () {
                        var e = [];
                        return A(this, arguments, function (t) {
                            var n = this.parentNode;
                            le.inArray(this, e) < 0 && (le.cleanData(p(this)),
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
                        for (var n, i = [], r = le(e), o = r.length - 1, s = 0; o >= s; s++)
                            n = s === o ? this : this.clone(!0),
                                le(r[s])[t](n),
                                ne.apply(i, n.get());
                        return this.pushStack(i)
                    }
                });
            var Ge, Qe = {
                HTML: "block",
                BODY: "block"
            }, Je = /^margin/, Ze = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"), et = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                    t.getComputedStyle(e)
            }, tt = function (e, t, n, i) {
                var r, o, s = {};
                for (o in t)
                    s[o] = e.style[o],
                        e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t)
                    e.style[o] = s[o];
                return r
            }, nt = Z.documentElement;
            !function () {
                function e() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        a.innerHTML = "",
                        nt.appendChild(s);
                    var e = n.getComputedStyle(a);
                    t = "1%" !== e.top,
                        o = "2px" === e.marginLeft,
                        i = "4px" === e.width,
                        a.style.marginRight = "50%",
                        r = "4px" === e.marginRight,
                        nt.removeChild(s)
                }
                var t, i, r, o, s = Z.createElement("div"), a = Z.createElement("div");
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
                , st = ["Webkit", "O", "Moz", "ms"]
                , at = Z.createElement("div").style;
            le.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = j(e, "opacity");
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
                        var r, o, s, a = le.camelCase(t), u = e.style;
                        return t = le.cssProps[a] || (le.cssProps[a] = L(a) || a),
                            s = le.cssHooks[t] || le.cssHooks[a],
                            void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : (o = typeof n,
                                "string" === o && (r = qe.exec(n)) && r[1] && (n = h(e, t, r),
                                    o = "number"),
                                null != n && n === n && ("number" === o && (n += r && r[3] || (le.cssNumber[a] ? "" : "px")),
                                    ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                    s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u[t] = n)),
                                void 0)
                    }
                },
                css: function (e, t, n, i) {
                    var r, o, s, a = le.camelCase(t);
                    return t = le.cssProps[a] || (le.cssProps[a] = L(a) || a),
                        s = le.cssHooks[t] || le.cssHooks[a],
                        s && "get" in s && (r = s.get(e, !0, n)),
                        void 0 === r && (r = j(e, t, i)),
                        "normal" === r && t in ot && (r = ot[t]),
                        "" === n || n ? (o = parseFloat(r),
                            n === !0 || isFinite(o) ? o || 0 : r) : r
                }
            }),
                le.each(["height", "width"], function (e, t) {
                    le.cssHooks[t] = {
                        get: function (e, n, i) {
                            return n ? it.test(le.css(e, "display")) && 0 === e.offsetWidth ? tt(e, rt, function () {
                                return H(e, t, i)
                            }) : H(e, t, i) : void 0
                        },
                        set: function (e, n, i) {
                            var r, o = i && et(e), s = i && q(e, t, i, "border-box" === le.css(e, "boxSizing", !1, o), o);
                            return s && (r = qe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                                n = le.css(e, t)),
                                P(e, n, s)
                        }
                    }
                }),
                le.cssHooks.marginLeft = B(ae.reliableMarginLeft, function (e, t) {
                    return t ? (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                        marginLeft: 0
                    }, function () {
                        return e.getBoundingClientRect().left
                    })) + "px" : void 0
                }),
                le.cssHooks.marginRight = B(ae.reliableMarginRight, function (e, t) {
                    return t ? tt(e, {
                        display: "inline-block"
                    }, j, [e, "marginRight"]) : void 0
                }),
                le.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (e, t) {
                    le.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                                r[e + He[i] + t] = o[i] || o[i - 2] || o[0];
                            return r
                        }
                    },
                        Je.test(e) || (le.cssHooks[e + t].set = P)
                }),
                le.fn.extend({
                    css: function (e, t) {
                        return Ee(this, function (e, t, n) {
                            var i, r, o = {}, s = 0;
                            if (le.isArray(t)) {
                                for (i = et(e),
                                    r = t.length; r > s; s++)
                                    o[t[s]] = le.css(e, t[s], !1, i);
                                return o
                            }
                            return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
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
                            Re(this) ? le(this).show() : le(this).hide()
                        })
                    }
                }),
                le.Tween = z,
                z.prototype = {
                    constructor: z,
                    init: function (e, t, n, i, r, o) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = r || le.easing._default,
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = i,
                            this.unit = o || (le.cssNumber[n] ? "" : "px")
                    },
                    cur: function () {
                        var e = z.propHooks[this.prop];
                        return e && e.get ? e.get(this) : z.propHooks._default.get(this)
                    },
                    run: function (e) {
                        var t, n = z.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
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
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = le.css(e.elem, e.prop, ""),
                                t && "auto" !== t ? t : 0)
                        },
                        set: function (e) {
                            le.fx.step[e.prop] ? le.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[le.cssProps[e.prop]] && !le.cssHooks[e.prop] ? e.elem[e.prop] = e.now : le.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                z.propHooks.scrollTop = z.propHooks.scrollLeft = {
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
                le.fx = z.prototype.init,
                le.fx.step = {};
            var ut, lt, ct = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
            le.Animation = le.extend(W, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return h(n.elem, e, qe.exec(t), n),
                            n
                    }
                    ]
                },
                tweener: function (e, t) {
                    le.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.match(Ce);
                    for (var n, i = 0, r = e.length; r > i; i++)
                        n = e[i],
                            W.tweeners[n] = W.tweeners[n] || [],
                            W.tweeners[n].unshift(t)
                },
                prefilters: [$],
                prefilter: function (e, t) {
                    t ? W.prefilters.unshift(e) : W.prefilters.push(e)
                }
            }),
                le.speed = function (e, t, n) {
                    var i = e && "object" == typeof e ? le.extend({}, e) : {
                        complete: n || !n && t || le.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !le.isFunction(t) && t
                    };
                    return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default,
                        null != i.queue && i.queue !== !0 || (i.queue = "fx"),
                        i.old = i.complete,
                        i.complete = function () {
                            le.isFunction(i.old) && i.old.call(this),
                                i.queue && le.dequeue(this, i.queue)
                        }
                        ,
                        i
                }
                ,
                le.fn.extend({
                    fadeTo: function (e, t, n, i) {
                        return this.filter(Re).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function (e, t, n, i) {
                        var r = le.isEmptyObject(e)
                            , o = le.speed(t, n, i)
                            , s = function () {
                                var t = W(this, le.extend({}, e), o);
                                (r || De.get(this, "finish")) && t.stop(!0)
                            };
                        return s.finish = s,
                            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
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
                                    , o = le.timers
                                    , s = De.get(this);
                                if (r)
                                    s[r] && s[r].stop && i(s[r]);
                                else
                                    for (r in s)
                                        s[r] && s[r].stop && ft.test(r) && i(s[r]);
                                for (r = o.length; r--;)
                                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                                        t = !1,
                                        o.splice(r, 1));
                                !t && n || le.dequeue(this, e)
                            })
                    },
                    finish: function (e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function () {
                                var t, n = De.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = le.timers, s = i ? i.length : 0;
                                for (n.finish = !0,
                                    le.queue(this, e, []),
                                    r && r.stop && r.stop.call(this, !0),
                                    t = o.length; t--;)
                                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                        o.splice(t, 1));
                                for (t = 0; s > t; t++)
                                    i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                le.each(["toggle", "show", "hide"], function (e, t) {
                    var n = le.fn[t];
                    le.fn[t] = function (e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, r)
                    }
                }),
                le.each({
                    slideDown: O("show"),
                    slideUp: O("hide"),
                    slideToggle: O("toggle"),
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
                    le.fn[e] = function (e, n, i) {
                        return this.animate(t, e, n, i)
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
                        ae.checkOn = "" !== e.value,
                        ae.optSelected = n.selected,
                        t.disabled = !0,
                        ae.optDisabled = !n.disabled,
                        e = Z.createElement("input"),
                        e.value = "t",
                        e.type = "radio",
                        ae.radioValue = "t" === e.value
                }();
            var dt, ht = le.expr.attrHandle;
            le.fn.extend({
                attr: function (e, t) {
                    return Ee(this, le.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        le.removeAttr(this, e)
                    })
                }
            }),
                le.extend({
                    attr: function (e, t, n) {
                        var i, r, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return "undefined" == typeof e.getAttribute ? le.prop(e, t, n) : (1 === o && le.isXMLDoc(e) || (t = t.toLowerCase(),
                                r = le.attrHooks[t] || (le.expr.match.bool.test(t) ? dt : void 0)),
                                void 0 !== n ? null === n ? void le.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                                    n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = le.find.attr(e, t),
                                        null == i ? void 0 : i))
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
                        var n, i, r = 0, o = t && t.match(Ce);
                        if (o && 1 === e.nodeType)
                            for (; n = o[r++];)
                                i = le.propFix[n] || n,
                                    le.expr.match.bool.test(n) && (e[i] = !1),
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
                    var n = ht[t] || le.find.attr;
                    ht[t] = function (e, t, i) {
                        var r, o;
                        return i || (o = ht[t],
                            ht[t] = r,
                            r = null != n(e, t, i) ? t.toLowerCase() : null,
                            ht[t] = o),
                            r
                    }
                });
            var pt = /^(?:input|select|textarea|button)$/i
                , gt = /^(?:a|area)$/i;
            le.fn.extend({
                prop: function (e, t) {
                    return Ee(this, le.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[le.propFix[e] || e]
                    })
                }
            }),
                le.extend({
                    prop: function (e, t, n) {
                        var i, r, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && le.isXMLDoc(e) || (t = le.propFix[t] || t,
                                r = le.propHooks[t]),
                                void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = le.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : pt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
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
            var mt = /[\t\r\n\f]/g;
            le.fn.extend({
                addClass: function (e) {
                    var t, n, i, r, o, s, a, u = 0;
                    if (le.isFunction(e))
                        return this.each(function (t) {
                            le(this).addClass(e.call(this, t, _(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(Ce) || []; n = this[u++];)
                            if (r = _(n),
                                i = 1 === n.nodeType && (" " + r + " ").replace(mt, " ")) {
                                for (s = 0; o = t[s++];)
                                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                a = le.trim(i),
                                    r !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, i, r, o, s, a, u = 0;
                    if (le.isFunction(e))
                        return this.each(function (t) {
                            le(this).removeClass(e.call(this, t, _(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Ce) || []; n = this[u++];)
                            if (r = _(n),
                                i = 1 === n.nodeType && (" " + r + " ").replace(mt, " ")) {
                                for (s = 0; o = t[s++];)
                                    for (; i.indexOf(" " + o + " ") > -1;)
                                        i = i.replace(" " + o + " ", " ");
                                a = le.trim(i),
                                    r !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function (n) {
                        le(this).toggleClass(e.call(this, n, _(this), t), t)
                    }) : this.each(function () {
                        var t, i, r, o;
                        if ("string" === n)
                            for (i = 0,
                                r = le(this),
                                o = e.match(Ce) || []; t = o[i++];)
                                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = _(this),
                                t && De.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : De.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + _(n) + " ").replace(mt, " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var vt = /\r/g
                , yt = /[\x20\t\r\n\f]+/g;
            le.fn.extend({
                val: function (e) {
                    var t, n, i, r = this[0];
                    {
                        if (arguments.length)
                            return i = le.isFunction(e),
                                this.each(function (n) {
                                    var r;
                                    1 === this.nodeType && (r = i ? e.call(this, n, le(this).val()) : e,
                                        null == r ? r = "" : "number" == typeof r ? r += "" : le.isArray(r) && (r = le.map(r, function (e) {
                                            return null == e ? "" : e + ""
                                        })),
                                        t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()],
                                        t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                                });
                        if (r)
                            return t = le.valHooks[r.type] || le.valHooks[r.nodeName.toLowerCase()],
                                t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                                    "string" == typeof n ? n.replace(vt, "") : null == n ? "" : n)
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
                                for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
                                    if (n = i[u],
                                        (n.selected || u === r) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                                        if (t = le(n).val(),
                                            o)
                                            return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function (e, t) {
                                for (var n, i, r = e.options, o = le.makeArray(t), s = r.length; s--;)
                                    i = r[s],
                                        (i.selected = le.inArray(le.valHooks.option.get(i), o) > -1) && (n = !0);
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
                trigger: function (e, t, i, r) {
                    var o, s, a, u, l, c, f, d = [i || Z], h = se.call(e, "type") ? e.type : e, p = se.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = a = i = i || Z,
                        3 !== i.nodeType && 8 !== i.nodeType && !bt.test(h + le.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."),
                            h = p.shift(),
                            p.sort()),
                            l = h.indexOf(":") < 0 && "on" + h,
                            e = e[le.expando] ? e : new le.Event(h, "object" == typeof e && e),
                            e.isTrigger = r ? 2 : 3,
                            e.namespace = p.join("."),
                            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            e.result = void 0,
                            e.target || (e.target = i),
                            t = null == t ? [e] : le.makeArray(t, [e]),
                            f = le.event.special[h] || {},
                            r || !f.trigger || f.trigger.apply(i, t) !== !1)) {
                        if (!r && !f.noBubble && !le.isWindow(i)) {
                            for (u = f.delegateType || h,
                                bt.test(u + h) || (s = s.parentNode); s; s = s.parentNode)
                                d.push(s),
                                    a = s;
                            a === (i.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || n)
                        }
                        for (o = 0; (s = d[o++]) && !e.isPropagationStopped();)
                            e.type = o > 1 ? u : f.bindType || h,
                                c = (De.get(s, "events") || {})[e.type] && De.get(s, "handle"),
                                c && c.apply(s, t),
                                c = l && s[l],
                                c && c.apply && Ne(s) && (e.result = c.apply(s, t),
                                    e.result === !1 && e.preventDefault());
                        return e.type = h,
                            r || e.isDefaultPrevented() || f._default && f._default.apply(d.pop(), t) !== !1 || !Ne(i) || l && le.isFunction(i[h]) && !le.isWindow(i) && (a = i[l],
                                a && (i[l] = null),
                                le.event.triggered = h,
                                i[h](),
                                le.event.triggered = void 0,
                                a && (i[l] = a)),
                            e.result
                    }
                },
                simulate: function (e, t, n) {
                    var i = le.extend(new le.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    le.event.trigger(i, null, t)
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
                            var i = this.ownerDocument || this
                                , r = De.access(i, t);
                            r || i.addEventListener(e, n, !0),
                                De.access(i, t, (r || 0) + 1)
                        },
                        teardown: function () {
                            var i = this.ownerDocument || this
                                , r = De.access(i, t) - 1;
                            r ? De.access(i, t, r) : (i.removeEventListener(e, n, !0),
                                De.remove(i, t))
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
                    } catch (i) {
                        t = void 0
                    }
                    return t && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e),
                        t
                }
                ;
            var kt = /#.*$/
                , St = /([?&])_=[^&]*/
                , Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm
                , At = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                , Et = /^(?:GET|HEAD)$/
                , Nt = /^\/\//
                , Dt = {}
                , jt = {}
                , Bt = "*/".concat("*")
                , Lt = Z.createElement("a");
            Lt.href = xt.href,
                le.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: xt.href,
                        type: "GET",
                        isLocal: At.test(xt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Bt,
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
                        return t ? V(V(e, le.ajaxSettings), t) : V(le.ajaxSettings, e)
                    },
                    ajaxPrefilter: X(Dt),
                    ajaxTransport: X(jt),
                    ajax: function (e, t) {
                        function i(e, t, i, a) {
                            var l, f, y, b, w, k = t;
                            2 !== x && (x = 2,
                                u && n.clearTimeout(u),
                                r = void 0,
                                s = a || "",
                                T.readyState = e > 0 ? 4 : 0,
                                l = e >= 200 && 300 > e || 304 === e,
                                i && (b = K(d, T, i)),
                                b = Y(d, b, T, l),
                                l ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"),
                                    w && (le.lastModified[o] = w),
                                    w = T.getResponseHeader("etag"),
                                    w && (le.etag[o] = w)),
                                    204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state,
                                        f = b.data,
                                        y = b.error,
                                        l = !y)) : (y = k,
                                            !e && k || (k = "error",
                                                0 > e && (e = 0))),
                                T.status = e,
                                T.statusText = (t || k) + "",
                                l ? g.resolveWith(h, [f, k, T]) : g.rejectWith(h, [T, k, y]),
                                T.statusCode(v),
                                v = void 0,
                                c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [T, d, l ? f : y]),
                                m.fireWith(h, [T, k]),
                                c && (p.trigger("ajaxComplete", [T, d]),
                                    --le.active || le.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var r, o, s, a, u, l, c, f, d = le.ajaxSetup({}, t), h = d.context || d, p = d.context && (h.nodeType || h.jquery) ? le(h) : le.event, g = le.Deferred(), m = le.Callbacks("once memory"), v = d.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === x) {
                                    if (!a)
                                        for (a = {}; t = Ct.exec(s);)
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
                                            v[t] = [v[t], e[t]];
                                    else
                                        T.always(e[T.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || w;
                                return r && r.abort(t),
                                    i(0, t),
                                    this
                            }
                        };
                        if (g.promise(T).complete = m.add,
                            T.success = T.done,
                            T.error = T.fail,
                            d.url = ((e || d.url || xt.href) + "").replace(kt, "").replace(Nt, xt.protocol + "//"),
                            d.type = t.method || t.type || d.method || d.type,
                            d.dataTypes = le.trim(d.dataType || "*").toLowerCase().match(Ce) || [""],
                            null == d.crossDomain) {
                            l = Z.createElement("a");
                            try {
                                l.href = d.url,
                                    l.href = l.href,
                                    d.crossDomain = Lt.protocol + "//" + Lt.host != l.protocol + "//" + l.host
                            } catch (k) {
                                d.crossDomain = !0
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = le.param(d.data, d.traditional)),
                            U(Dt, d, t, T),
                            2 === x)
                            return T;
                        c = le.event && d.global,
                            c && 0 === le.active++ && le.event.trigger("ajaxStart"),
                            d.type = d.type.toUpperCase(),
                            d.hasContent = !Et.test(d.type),
                            o = d.url,
                            d.hasContent || (d.data && (o = d.url += (Tt.test(o) ? "&" : "?") + d.data,
                                delete d.data),
                                d.cache === !1 && (d.url = St.test(o) ? o.replace(St, "$1_=" + wt++) : o + (Tt.test(o) ? "&" : "?") + "_=" + wt++)),
                            d.ifModified && (le.lastModified[o] && T.setRequestHeader("If-Modified-Since", le.lastModified[o]),
                                le.etag[o] && T.setRequestHeader("If-None-Match", le.etag[o])),
                            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType),
                            T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : d.accepts["*"]);
                        for (f in d.headers)
                            T.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (d.beforeSend.call(h, T, d) === !1 || 2 === x))
                            return T.abort();
                        w = "abort";
                        for (f in {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            T[f](d[f]);
                        if (r = U(jt, d, t, T)) {
                            if (T.readyState = 1,
                                c && p.trigger("ajaxSend", [T, d]),
                                2 === x)
                                return T;
                            d.async && d.timeout > 0 && (u = n.setTimeout(function () {
                                T.abort("timeout")
                            }, d.timeout));
                            try {
                                x = 1,
                                    r.send(y, i)
                            } catch (k) {
                                if (!(2 > x))
                                    throw k;
                                i(-1, k)
                            }
                        } else
                            i(-1, "No Transport");
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
                    le[t] = function (e, n, i, r) {
                        return le.isFunction(n) && (r = r || i,
                            i = n,
                            n = void 0),
                            le.ajax(le.extend({
                                url: e,
                                type: t,
                                dataType: r,
                                data: n,
                                success: i
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
            var Pt = /%20/g
                , qt = /\[\]$/
                , Ht = /\r?\n/g
                , Rt = /^(?:submit|button|image|reset|file)$/i
                , zt = /^(?:input|select|textarea|keygen)/i;
            le.param = function (e, t) {
                var n, i = [], r = function (e, t) {
                    t = le.isFunction(t) ? t() : null == t ? "" : t,
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional),
                    le.isArray(e) || e.jquery && !le.isPlainObject(e))
                    le.each(e, function () {
                        r(this.name, this.value)
                    });
                else
                    for (n in e)
                        G(n, e[n], t, r);
                return i.join("&").replace(Pt, "+")
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
                            return this.name && !le(this).is(":disabled") && zt.test(this.nodeName) && !Rt.test(e) && (this.checked || !ze.test(e))
                        }).map(function (e, t) {
                            var n = le(this).val();
                            return null == n ? null : le.isArray(n) ? le.map(n, function (e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Ht, "\r\n")
                                }
                            }) : {
                                    name: t.name,
                                    value: n.replace(Ht, "\r\n")
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
                , Ot = le.ajaxSettings.xhr();
            ae.cors = !!Ot && "withCredentials" in Ot,
                ae.ajax = Ot = !!Ot,
                le.ajaxTransport(function (e) {
                    var t, i;
                    return ae.cors || Ot && !e.crossDomain ? {
                        send: function (r, o) {
                            var s, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                for (s in e.xhrFields)
                                    a[s] = e.xhrFields[s];
                            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                                e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                            for (s in r)
                                a.setRequestHeader(s, r[s]);
                            t = function (e) {
                                return function () {
                                    t && (t = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                                text: a.responseText
                                            }, a.getAllResponseHeaders()))
                                }
                            }
                                ,
                                a.onload = t(),
                                i = a.onerror = t("error"),
                                void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                                    4 === a.readyState && n.setTimeout(function () {
                                        t && i()
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
                            send: function (i, r) {
                                t = le("<script>").prop({
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
            var Ft = []
                , $t = /(=)\?(?=&|$)|\?\?/;
            le.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Ft.pop() || le.expando + "_" + wt++;
                    return this[e] = !0,
                        e
                }
            }),
                le.ajaxPrefilter("json jsonp", function (e, t, i) {
                    var r, o, s, a = e.jsonp !== !1 && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
                    return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        a ? e[a] = e[a].replace($t, "$1" + r) : e.jsonp !== !1 && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        e.converters["script json"] = function () {
                            return s || le.error(r + " was not called"),
                                s[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = n[r],
                        n[r] = function () {
                            s = arguments
                        }
                        ,
                        i.always(function () {
                            void 0 === o ? le(n).removeProp(r) : n[r] = o,
                                e[r] && (e.jsonpCallback = t.jsonpCallback,
                                    Ft.push(r)),
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
                    var i = ye.exec(e)
                        , r = !n && [];
                    return i ? [t.createElement(i[1])] : (i = m([e], t, r),
                        r && r.length && le(r).remove(),
                        le.merge([], i.childNodes))
                }
                ;
            var Mt = le.fn.load;
            le.fn.load = function (e, t, n) {
                if ("string" != typeof e && Mt)
                    return Mt.apply(this, arguments);
                var i, r, o, s = this, a = e.indexOf(" ");
                return a > -1 && (i = le.trim(e.slice(a)),
                    e = e.slice(0, a)),
                    le.isFunction(t) ? (n = t,
                        t = void 0) : t && "object" == typeof t && (r = "POST"),
                    s.length > 0 && le.ajax({
                        url: e,
                        type: r || "GET",
                        dataType: "html",
                        data: t
                    }).done(function (e) {
                        o = arguments,
                            s.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e)
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
                        var i, r, o, s, a, u, l, c = le.css(e, "position"), f = le(e), d = {};
                        "static" === c && (e.style.position = "relative"),
                            a = f.offset(),
                            o = le.css(e, "top"),
                            u = le.css(e, "left"),
                            l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                            l ? (i = f.position(),
                                s = i.top,
                                r = i.left) : (s = parseFloat(o) || 0,
                                    r = parseFloat(u) || 0),
                            le.isFunction(t) && (t = t.call(e, n, le.extend({}, a))),
                            null != t.top && (d.top = t.top - a.top + s),
                            null != t.left && (d.left = t.left - a.left + r),
                            "using" in t ? t.using.call(e, d) : f.css(d)
                    }
                },
                le.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function (t) {
                                le.offset.setOffset(this, e, t)
                            });
                        var t, n, i = this[0], r = {
                            top: 0,
                            left: 0
                        }, o = i && i.ownerDocument;
                        if (o)
                            return t = o.documentElement,
                                le.contains(t, i) ? (r = i.getBoundingClientRect(),
                                    n = Q(o),
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
                            return "fixed" === le.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                                t = this.offset(),
                                le.nodeName(e[0], "html") || (i = e.offset()),
                                i.top += le.css(e[0], "borderTopWidth", !0),
                                i.left += le.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - i.top - le.css(n, "marginTop", !0),
                                left: t.left - i.left - le.css(n, "marginLeft", !0)
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
                    le.fn[e] = function (i) {
                        return Ee(this, function (e, i, r) {
                            var o = Q(e);
                            return void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                        }, e, i, arguments.length)
                    }
                }),
                le.each(["top", "left"], function (e, t) {
                    le.cssHooks[t] = B(ae.pixelPosition, function (e, n) {
                        return n ? (n = j(e, t),
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
                    }, function (n, i) {
                        le.fn[i] = function (i, r) {
                            var o = arguments.length && (n || "boolean" != typeof i)
                                , s = n || (i === !0 || r === !0 ? "margin" : "border");
                            return Ee(this, function (t, n, i) {
                                var r;
                                return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? le.css(t, n, s) : le.style(t, n, i, s)
                            }, t, o ? i : void 0, o, null)
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
                le.fn.andSelf = le.fn.addBack,
                i = [],
                r = function () {
                    return le
                }
                    .apply(t, i),
                !(void 0 !== r && (e.exports = r));
            var Wt = n.jQuery
                , _t = n.$;
            return le.noConflict = function (e) {
                return n.$ === le && (n.$ = _t),
                    e && n.jQuery === le && (n.jQuery = Wt),
                    le
            }
                ,
                o || (n.jQuery = n.$ = le),
                le
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
    , [20, 6], function (e, t, n) {
        t = e.exports = n(7)(),
            t.push([e.id, ".applet{min-width:870px}.applet .buttons{min-width:280px}.applet .canvas{min-width:420px}.canvas{padding:5px}.applet .buttons button{width:90px;margin:0 5px}.comboboxes{width:250px;display:inline-block;vertical-align:top}.combobox{display:inline-block;float:right;width:100px;margin-left:10px;vertical-align:middle}.notes ol{padding-left:20px}.notes li{margin-bottom:10px}", ""])
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
                        var s = t[r];
                        "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
                            e.push(s))
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
                        r.parts.push(l(i.parts[o], t))
                } else {
                    for (var s = [], o = 0; o < i.parts.length; o++)
                        s.push(l(i.parts[o], t));
                    h[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function r(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var r = e[i]
                    , o = r[0]
                    , s = r[1]
                    , a = r[2]
                    , u = r[3]
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
            var n, i, r;
            if (t.singleton) {
                var o = y++;
                n = v || (v = a(t)),
                    i = c.bind(null, n, o, !1),
                    r = c.bind(null, n, o, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(t),
                    i = d.bind(null, n),
                    r = function () {
                        s(n),
                            n.href && URL.revokeObjectURL(n.href)
                    }
                ) : (n = a(t),
                    i = f.bind(null, n),
                    r = function () {
                        s(n)
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
        function c(e, t, n, i) {
            var r = n ? "" : i.css;
            if (e.styleSheet)
                e.styleSheet.cssText = x(t, r);
            else {
                var o = document.createTextNode(r)
                    , s = e.childNodes;
                s[t] && e.removeChild(s[t]),
                    s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
            }
        }
        function f(e, t) {
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
        function d(e, t) {
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
            , p = function (e) {
                var t;
                return function () {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)),
                        t
                }
            }
            , g = p(function () {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            })
            , m = p(function () {
                return document.head || document.getElementsByTagName("head")[0]
            })
            , v = null
            , y = 0
            , b = [];
        e.exports = function (e, t) {
            t = t || {},
                "undefined" == typeof t.singleton && (t.singleton = g()),
                "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = r(e);
            return i(n, t),
                function (e) {
                    for (var o = [], s = 0; s < n.length; s++) {
                        var a = n[s]
                            , u = h[a.id];
                        u.refs--,
                            o.push(u)
                    }
                    if (e) {
                        var l = r(e);
                        i(l, t)
                    }
                    for (var s = 0; s < o.length; s++) {
                        var u = o[s];
                        if (0 === u.refs) {
                            for (var c = 0; c < u.parts.length; c++)
                                u.parts[c]();
                            delete h[u.id]
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
    , [20, 10], function (e, t, n) {
        t = e.exports = n(7)(),
            t.push([e.id, "body{font-family:Arial,sans-serif}.header,h1{color:#101027;font-size:200%;font-weight:400;margin:.67em 0}.focusable,canvas{border:3px solid transparent}.focusable:focus,button:focus,canvas:focus{outline:none;border:3px dotted #000}.text,p{font-size:100%;margin:1em 0}button{font-size:80%;height:25px;background:linear-gradient(#fff,#f0f0f0);border:1px solid #adadad;box-sizing:border-box}button:disabled{background:#d3d3d3;border:1px solid #bcbcbc}button::-moz-focus-inner{border:0}.navigation{width:0;height:0;padding:0;margin:0;overflow:hidden}", ""])
    }
    , function (e, t, n) {
        (function (t, i) {
            if (n(12),
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
                            , s = i('<option value="' + o.value + '" aria-label="' + o.ariaLabel + '">' + o.htmlText + "</option>");
                        n === t.selectedIndex && s.prop("selected", !0),
                            this.$select.append(s)
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
        var i = n(13);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(8)(i, {});
        i.locals && (e.exports = i.locals)
    }
    , function (e, t, n) {
        t = e.exports = n(7)(),
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
        ).call(t, n(3))
    }
    , function (e, t) {
        var n = {
            fileSize: "%fileSize%",
            bufferSize: "%bufferSize%",
            hostAData: "%hostAData%",
            hostBData: "%hostBData%",
            hostAbuffer: "%hostAbuffer%",
            hostBbuffer: "%hostBbuffer%",
            sendBuffer: "%sendBuffer%",
            receiveBuffer: "%receiveBuffer%",
            packetSize: "%packetSize%",
            ack: "%ack%",
            seq: "%seq%",
            win: "%win%"
        };
        e.exports = {
            navigation: "With this interactive animation, which animates the interaction between the sending application, the T, C, P send buffer, the T, C, P, receive buffer, and the receiving application, you will examine the TCP flow control. There are 4 navigation buttons at the top of the page. The Start button initiates the animation. Then it turns into Stop button, which you can press to pause the animation at any moment. When the animation is paused, this button turns into Resume button. There are two buttons to change the transmission speed, the Faster and Slower buttons, and the Reset button to stop the simulation completely. This button removes rolls back what has been transmitted, and you can then press the Start button to start over.There are the two parameters listed below. The first one is the File size that can be 4 kilobytes, 8 kilobytes or 16 kilobytes. The second one is the Buffer size that can be 2, 4 or 8 kilobytes. Below the controls, there is a scheme of the two hosts connected with a transmission line. Host A is located on the left. It is shown as a vertical rectangular shape with a solid bold border. The sending application is placed inside it, as another vertical rectangular shape, drawn with a thinner line. The T, C, P send buffer is placed below the Host A. It is shown as a horizontal rectangular shape with a solid bold border. Similarly, the Host B is drawn on the right, with its receiving application inside and the T, C, P, receive buffer below. The two buffers are connected by a transmission line, shown as a long horizontal rectangular shape. The receiving application reads chunks of bytes at random times. When the receive buffer becomes full, the TCP receiver advertises a receive window of 0. As described in the text, the sender then continues to send segments with one byte of data.",
            buttons: {
                start: "Start. Press to update the animation below.",
                pause: "Pause. Press to pause the animation at any moment.",
                resume: "Pause. Press to resume the animation."
            },
            animation: {
                placeholders: n,
                initial: "When you press Start, the rectangles are grouped into one packet in the source's transmit buffer. ",
                smallBuffer: "At the very first moment, the sending application in the Host A is filled with color, which means it contains data, and is labeled as " + n.fileSize + " kilobytes. The receiving application is empty and is labeled zero kilobytes. As the simulation begins, the data gets to the T, C, P send buffer, which is filled with color in order to show that. At the same time, the colored area of the sending application becomes " + n.bufferSize + " kilobyte less. Then the send buffer is emptied, and the data represented by a small rectangular shape of the same color goes through the transmission channel to the T, C, P, receive buffer. As the data reaches the receive buffer, it is filled with color, and the acknowledgment together with the receive window size is sent back to the Host A. When the Host A receives an acknowledgment with receive window size equal to zero, it sends a packet with one byte of data. It is assumed for simplicity, that the receiver does not consume this one byte, but the receiver sends the acknowledgment and the window size in response. If the Host A receives an acknowledgment with WIN different from zero, it sends a packet of size of the receive window. The receiving application of the Host B consumes data in 2 kilobyte chunks at random times. As it gets the data, the respective rectangular shape is gradually filled with color, and the T, C, P receive buffer is partly emptied. When the receiving application has consumed a chunk of data, the receive window size gets 2 kilobytes bigger that it was. When the Host A sends another packet of data, receive window size gets smaller. The animation stops when the receiving application has consumed all the data. ",
                bigBuffer: "At the very first moment, the sending application in the Host A is filled with color and is labeled as " + n.fileSize + ". As the simulation begins, the data first gets into the T, C, P send buffer, which is because of this filled with color. Then the send buffer is emptied, and the data represented by a small rectangular shape of the same color goes through the transmission channel to the T, C, P, receive buffer. As the data reaches the receive buffer, it is filled with color, and the acknowledgment with WIN equals zero is sent back to the Host A. The receiving application of the Host B then consumes data in 2 kilobyte chunks at random times. As it gets the data, the respective rectangular shape is gradually filled with color, and the T, C, P receive buffer is emptied in the same manner. The animation stops when the receiving application has consumed all the data.",
                stop: "The simulation is paused now. The file size is " + n.fileSize + " kilobyte, the buffer size is " + n.bufferSize + " kilobyte. At this point, the Host A contains " + n.hostAData + " kilobyte of data. The T, C, P send buffer contains " + n.sendBuffer + " kilobyte of data. The Host B contains " + n.hostBData + " kilobyte of data. The T, C, P receive buffer contains " + n.receiveBuffer + " kilobyte of data. ",
                send: "A packet of size " + n.packetSize + " kilobyte is sent from the Host A to the Host B. The whole sequence size is " + n.seq + " kilobyte. ",
                recieve: "An acknowledgement of " + n.ack + " kilobyte is sent from the Host B to the Host A, together with the receive window size " + n.win + " kilobyte. "
            }
        }
    }
    , function (e, t) {
        e.exports = [{
            listOptions: [{
                htmlText: "4 Kbytes",
                ariaLabel: "4 Kilobytes",
                value: 0
            }, {
                htmlText: "8 Kbytes",
                ariaLabel: "8 Kilobytes",
                value: 1
            }, {
                htmlText: "16 Kbytes",
                ariaLabel: "16 Kilobytes",
                value: 2
            }],
            selectedIndex: 0,
            ariaLabel: "文件大小"
        }, {
            listOptions: [{
                htmlText: "2 Kbytes",
                ariaLabel: "2 Kilobytes",
                value: 0
            }, {
                htmlText: "4 Kbytes",
                ariaLabel: "4 Kilobytes",
                value: 1
            }, {
                htmlText: "8 Kbytes",
                ariaLabel: "8 Kilobytes",
                value: 2
            }],
            selectedIndex: 0,
            ariaLabel: "缓冲区大小"
        }]
    }
    , function (e, t) {
        e.exports = {
            black: "#000000",
            red: "#C80A17",
            blue: "#0000E6"
        }
    }
    , function (e, t) {
        e.exports = `
    <div class="content">
        <h1>流量控制</h1>
        <p>
            此交互式动画显示发送应用程序、TCP发送缓冲区、TCP接收缓冲区和接收应用程序之间的交互。
            接收应用程序在随机时刻读取字节块。当接收缓冲区变满时，TCP接收方通告其接收窗口为0。
            如书中所述，发送方随后继续发送带有一个字节数据的报文段。
        </p>
        <div class="applet" title="Application">
            <div class="buttons">
                <button tabindex="0" class="_start">开始</button>
                <button tabindex="0" class="_faster">更快</button>
                <button tabindex="0" class="_slower">更慢</button>
                <button tabindex="0" class="_reset">重置</button>
            </div>
            <div class="comboboxes"></div>
            <div class="canvas">
                <img class="graphic" style="margin: 0; padding: 0" />
                <canvas width="600" height="300"></canvas>
            </div>
        </div>
        <div class="notes text">
            <strong>注意：</strong>
            <ol>
                <li>主机B在随机时间消耗2K byte块中的数据。</li>
                <li>
                    当主机A收到WIN=0的通知时，主机A发送一个包含一个字节数据的包。
                    为了简单起见，假设这一个字节不被接收方使用。
                </li>
            </ol>
        </div>
    </div>`
    }
    , function (e, t) {
        var n = [4, 8, 16]
            , i = [2, 4, 8]
            , r = 2
            , o = function () {
                this.setBufferSize(),
                    this.setFileSize(),
                    this.reset()
            };
        o.prototype.setFileSize = function (e) {
            this.fileSize = n[e || 0]
        }
            ,
            o.prototype.setBufferSize = function (e) {
                this.bufferSize = i[e || 0]
            }
            ,
            o.prototype.fullSendBuffer = function () {
                if (0 === this.sendBuffer && 0 !== this.getSendInsidePart() && this.sentData < this.fileSize) {
                    var e = this.isBufferSmall() ? this.bufferSize : this.fileSize;
                    this.sentData += e,
                        this.sendBuffer = e
                }
            }
            ,
            o.prototype.emptySendBuffer = function () {
                this.sendBuffer -= this.requestedData
            }
            ,
            o.prototype.getRecievedAmount = function () {
                return this.receiveBuffer + this.consumedData
            }
            ,
            o.prototype.isAllSent = function () {
                return 0 === this.sendBuffer && this.sentData === this.fileSize
            }
            ,
            o.prototype.isAllRecieved = function () {
                return this.getRecievedAmount() === this.fileSize
            }
            ,
            o.prototype.isAllConsumed = function () {
                return 0 === this.receiveBuffer && this.consumedData === this.fileSize
            }
            ,
            o.prototype.getSendInsidePart = function () {
                return 1 - this.sentData / this.fileSize
            }
            ,
            o.prototype.isBufferSmall = function () {
                return this.bufferSize < this.fileSize
            }
            ,
            o.prototype.getReceiveInsidePart = function () {
                return this.consumedData / this.fileSize
            }
            ,
            o.prototype.getSendBufferPart = function () {
                return this.sendBuffer / this.bufferSize
            }
            ,
            o.prototype.getRecieveBufferPart = function () {
                return this.receiveBuffer / this.bufferSize
            }
            ,
            o.prototype.consume = function () {
                this.consumeTimout = window.setTimeout(function () {
                    this.consumedData !== this.fileSize && 0 !== this.receiveBuffer && (this.receiveBuffer -= r,
                        this.consumedData += r,
                        this.justConsumed = !0,
                        window.setTimeout(function () {
                            this.justConsumed = !1
                        }
                            .bind(this), 2e3),
                        0 != this.receiveBuffer && this.consume())
                }
                    .bind(this), 1e3 + 3e3 * Math.random())
            }
            ,
            o.prototype.finishSend = function () {
                this.sendInProgress = !1,
                    this.receiveInProgress = !0,
                    0 !== this.requestedData && (this.receiveBuffer += this.requestedData,
                        this.consume()),
                    !this.isAllRecieved() && this.receiveBuffer < this.bufferSize ? this.requestedData = r : this.requestedData = 0,
                    this.fullSendBuffer()
            }
            ,
            o.prototype.send = function () {
                this.canSend && 0 != this.requestedData && (this.emptySendBuffer(),
                    this.canSend = !1)
            }
            ,
            o.prototype.finishReceive = function () {
                this.sendInProgress = !0,
                    this.receiveInProgress = !1,
                    this.isAllSent() && this.isAllRecieved() ? (this.sendInProgress = !1,
                        this.finished = !0) : (this.canSend = !0,
                            this.send())
            }
            ,
            o.prototype.isFinished = function () {
                return this.finished && this.isAllConsumed()
            }
            ,
            o.prototype.reset = function () {
                this.canSend = !1,
                    this.sendInProgress = !1,
                    this.receiveInProgress = !1,
                    this.finished = !1,
                    this.justConsumed = !1,
                    this.requestedData = this.isBufferSmall() ? this.bufferSize : this.fileSize,
                    this.sentData = 0,
                    this.consumedData = 0,
                    this.sendBuffer = 0,
                    this.receiveBuffer = 0,
                    window.clearTimeout(this.consumeTimout)
            }
            ,
            e.exports = o
    }
    , function (e, t, n, i) {
        var r = n(i);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(8)(r, {});
        r.locals && (e.exports = r.locals)
    }
]));
