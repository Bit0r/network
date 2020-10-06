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
        n(2),
            n(9);
        var i = n(12)
            , r = i(n(13))
            , o = n(14)
            , s = n(15)
            , a = n(18)
            , u = n(23);
        new u(new a(!0), new s(r, o))
    }
    , [29, 3], function (e, t, n) {
        t = e.exports = n(4)(),
            t.push([e.id, ".illustration .image{width:350px;height:350px;background:url(" + n(5) + ") top/contain no-repeat}.illustration{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.illustration .legend{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;padding-left:40px}.illustration div{margin:5px 0}.illustration p{display:inline-block;vertical-align:bottom}.illustration .legend div:before{content:'';width:60px;height:60px;margin-right:5px;display:inline-block}.ap:before{background:url(" + n(6) + ") 50%/contain no-repeat}.ms:before{background:url(" + n(7) + ") 50%/contain no-repeat}.applet{width:800px;-ms-flex-direction:column;flex-direction:column}.applet,.row{display:-ms-flexbox;display:flex}.row{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.row button{width:110px;height:30px;margin-right:5px;font-size:100%}.applet table{border-collapse:collapse;text-align:center;margin:5px 0}.applet table tr{border-bottom:3px solid #363636;border-top:3px solid #363636}.applet table td{padding:0}.applet table button{height:100%;width:100%;font-size:100%}.applet table div,.applet table tr,.applet table tr:not(:nth-child(1)) td{box-sizing:border-box;height:60px}.applet table div{position:relative;bottom:180px}.applet table tr:nth-child(1){background:#aaa;height:30px}.applet table td:nth-child(1){width:110px;background:#aaa}.applet table td:nth-child(2){width:400px}.applet table td:nth-child(3),.applet table td:nth-child(4){background:#aaa;width:80px}h2{font-size:110%;margin:10px 0 0}h3{font-size:100%;text-align:center}.legend{display:-ms-flexbox;display:flex;width:470px;-ms-flex-pack:justify;justify-content:space-between}.legend p:before{content:'';width:15px;height:15px;margin-right:5px;display:inline-block}.frames{-ms-flex-positive:2;flex-grow:2}.frames p:nth-child(2):before{background:#2952ff}.frames p:nth-child(3):before{background:#00008b}.frames p:nth-child(4):before{background:#8b474a}.frames p:nth-child(5):before{background:#350000}.frames p:nth-child(7):before{background:#bebebe}.carrier p:nth-child(2):before{background:green}.carrier p:nth-child(3):before{background:red}.carrier p:nth-child(4):before{background:gold}.graphic{margin:0;width:0;padding:0;height:0;overflow:hidden}", ""])
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
        e.exports = n.p + "37f73227dae0c46811f6e1d8a5d33e9c.png"
    }
    , function (e, t, n) {
        e.exports = n.p + "50e028a53223a8a9ee3e39d8f95102f1.png"
    }
    , function (e, t, n) {
        e.exports = n.p + "0a752ee79b1fc7ee5b24d7f184a95c92.png"
    }
    , function (e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n]
                    , r = p[i.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++)
                        r.parts[o](i.parts[o]);
                    for (; o < i.parts.length; o++)
                        r.parts.push(l(i.parts[o], t))
                } else {
                    for (var s = [], o = 0; o < i.parts.length; o++)
                        s.push(l(i.parts[o], t));
                    p[i.id] = {
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
            var n = g()
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
        var p = {}
            , h = function (e) {
                var t;
                return function () {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)),
                        t
                }
            }
            , m = h(function () {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            })
            , g = h(function () {
                return document.head || document.getElementsByTagName("head")[0]
            })
            , v = null
            , y = 0
            , b = [];
        e.exports = function (e, t) {
            t = t || {},
                "undefined" == typeof t.singleton && (t.singleton = m()),
                "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = r(e);
            return i(n, t),
                function (e) {
                    for (var o = [], s = 0; s < n.length; s++) {
                        var a = n[s]
                            , u = p[a.id];
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
                            delete p[u.id]
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
    , [29, 10], function (e, t, n) {
        t = e.exports = n(4)(),
            t.push([e.id, ".illustration .image{width:600px;height:500px;background:url(" + n(11) + ") top/contain no-repeat}", ""])
    }
    , function (e, t, n) {
        e.exports = n.p + "c29c2410e72f7135b957618e1fa643ad.png"
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
    <div class="content">
        <div tabindex="0" class="navigation"></div>
        <h1>802.11 CSMA/CA <strong>有</strong>隐藏终端</h1>
        <p>
            接入点监听所有站点。
            站点可以监听到接入点，但监听不到任何其他站点。
        </p>
        <div class="illustration">
            <img class="graphic" />
            <div class="image"></div>
            <div class="legend">
                <div class="ap">
                    <p>接入点</p>
                </div>
                <div class="ms">
                    <p>移动站点</p>
                </div>
            </div>
        </div>
        <p>
            有一个接入点和三个移动站点。
            要操作动画，首先单击“开始”。
            然后，只要希望该站点发送帧，请单击该站点的按钮。
        </p>
        <div class="applet">
            <div class="row">
                <button tabindex="0" class="_reset">重置</button>
                <button tabindex="0" class="_play">开始</button>
                <span class="_status">模拟准备就绪</span>
            </div>
            <table>
                <tr>
                    <td>发送帧</td>
                    <td></td>
                    <td>队列</td>
                    <td>回退</td>
                </tr>
                <tr>
                    <td>
                        <button tabindex="0" class="_station">站点1</button>
                    </td>
                    <td> </td>
                    <td class="_queue">0</td>
                    <td class="_backoff">0</td>
                </tr>
                <tr>
                    <td>
                        <button tabindex="0" class="_station">站点2</button>
                    </td>
                    <td></td>
                    <td class="_queue">0</td>
                    <td class="_backoff">0</td>
                </tr>
                <tr>
                    <td>
                        <button tabindex="0" class="_station">站点3</button>
                    </td>
                    <td></td>
                    <td class="_queue">0</td>
                    <td class="_backoff">0</td>
                </tr>
                <tr>
                    <td>接入点</td>
                    <td>
                        <div>
                            <canvas width="400" height="234"></canvas>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <h2>图例</h2>
        <div class="legend">
            <div class="frames">
                <h3>帧类型</h3>
                <p>RTS</p>
                <p>CTS</p>
                <p>数据帧</p>
                <p>ACK</p>
                <hr>
                <p>计数值</p>
            </div>
            <div class="carrier">
                <h3>载波侦听</h3>
                <p>媒介空闲</p>
                <p>媒介正忙</p>
                <p>NAV：媒介被认为繁忙</p>
            </div>
        </div>
    </div>`
    }
    , function (e, t) {
        e.exports = {
            navigation: "In this interactive animation, there is one access point and three mobile stations. In this version, the mobile stations cannot hear each other's transmissions. By clicking on a station button, you instruct the station to emit a frame. Each station uses the CSMA/CA protocol. The interactive animation will show the RTS/CTS sequence, the NAV, collisions, and the countdowns. The simulation model looks like a table with Reset, Start/Pause buttons on the top and Station 1, Station 2, Station 3 buttons on the left. When you press Start, the interactive animation shows Carrier sensing Status for each Station and frame types for each station and for the Access point. The number of transmissions that are in Queue and Back Off are shown on the right for each Station. Press Start button to begin. Press Pause to stop the simulation and walk thought the model to hear the legend description for the Stations and the Access Point. To set all the values back to 0, press the Reset button. ",
            illustration: "This figure shows the Access Point and three mobile stations. The Access point is a wireless base station in the center. Station 1 is a smartphone on the upper left, Station 2 is a smartphone on the upper right, and Station 3 is a smartphone below. Four circles of equal radii are drawn with their centers in the corresponding stations. Only the Access point is positioned in the intersection of all four circles and the stations lie in the circle centered around the Access point. Neither one of the stations lie in a circle centered around the other stations. ",
            buttons: {
                voice: {
                    station: "Station %s button pressed. ",
                    reset: "Reset button pressed. ",
                    start: "Start button pressed. "
                },
                label: {
                    start: "Start. Press to enable station buttons and begin simulation. When you press Start, the interactive animation shows Carrier sensing Status for each Station and frame types for each station and for the Access point. ",
                    pause: "Pause. Press to stop the simulation and walk thought the model to hear the legend description for the Stations and the Access Point.",
                    resume: "Resume. Press to continue simulation. "
                }
            },
            animation: {
                "default": "Up to this moment, ",
                station: "Station %s has %s transmissions in Queue and %s of Back Off transmissions. ",
                legend: "The legend is ",
                step: "Step %s. ",
                mobile: "Station %s ",
                base: "The Access Point ",
                conjunction: "and ",
                status: {
                    carrier: ["is medium free. ", "is medium busy. ", "is NAV Medium considered busy. "],
                    mobile: ["", "has RTS type frame ", "has Data type frame ", "has Countdown type frame "],
                    base: ["", "has CTS type frame. ", "has ACK type frame. "]
                }
            }
        }
    }
    , function (e, t, n) {
        n(16);
        var i = 240
            , r = 400
            , o = 3
            , s = i / 4
            , a = 10
            , u = 35
            , l = 5
            , c = s - 2 * o - a
            , f = c - l - u
            , d = {
                "default": "模拟准备就绪",
                play: "模拟正在运行",
                pause: "模拟已暂停"
            }
            , p = {
                start: "开始",
                pause: "暂停",
                resume: "恢复"
            }
            , h = {
                carrier: ["green", "red", "gold"],
                mobile: ["", "#2952ff", "#8b474a", "#bebebe"],
                base: ["", "darkblue", "#350000"]
            }
            , m = function (e, t, n) {
                e.textContent = t,
                    n && e.setAttribute("aria-label", n)
            }
            , g = function (e, t) {
                e && (e.textContent = t)
            }
            , v = function (e) {
                for (var t = 0; t < e.length; t++)
                    g(e[t], 0)
            }
            , y = function (e, t) {
                for (var n = 0; n < e.length; n++)
                    e[n].disabled = t,
                        e[n].setAttribute("aria-disabled", t)
            }
            , b = function (e, t) {
                this.history = [],
                    this.buttonsAria = t.buttons.label;
                var n = e.querySelector("div").cloneNode(!0);
                this.ctx = n.querySelector("canvas").getContext("2d"),
                    this.animationId = -1,
                    this.nodes = {
                        buttons: {
                            reset: n.querySelector("._reset"),
                            play: n.querySelector("._play"),
                            stations: n.querySelectorAll("._station")
                        },
                        labels: {
                            status: n.querySelector("._status"),
                            queue: n.querySelectorAll("._queue"),
                            backoff: n.querySelectorAll("._backoff")
                        }
                    },
                    n.querySelector(".navigation").setAttribute("aria-label", t.navigation),
                    n.querySelector(".graphic").setAttribute("aria-label", t.illustration),
                    y(this.nodes.buttons.stations, !0),
                    m(this.nodes.buttons.play, p.start, this.buttonsAria.start),
                    document.body.appendChild(n)
            };
        b.prototype.draw = function (e) {
            var t = e.history[0].stations.length;
            this.clearCanvas();
            for (var n = 0; n < e.history.length; n++) {
                for (var i = 0; t > i; i++) {
                    var r = e.history[n].stations[i];
                    this.ctx.fillStyle = h.carrier[r.carrierStatus],
                        this.ctx.fillRect(n, s * i + c, 1, a),
                        "" !== h.mobile[r.frameType] && (this.ctx.fillStyle = h.mobile[r.frameType],
                            this.ctx.fillRect(n, s * i + f, 1, u))
                }
                var o = e.history[n].accessPoint;
                "" !== h.base[o] && (this.ctx.fillStyle = h.base[o],
                    this.ctx.fillRect(n, 3 * s + f, 1, u))
            }
        }
            ,
            b.prototype.play = function (e) {
                this.animate(e),
                    m(this.nodes.buttons.play, p.pause, this.buttonsAria.pause),
                    y(this.nodes.buttons.stations, !1),
                    this.nodes.labels.status.textContent = d.play
            }
            ,
            b.prototype.pause = function () {
                m(this.nodes.buttons.play, p.resume, this.buttonsAria.resume),
                    y(this.nodes.buttons.stations, !0),
                    this.nodes.labels.status.textContent = d.pause
            }
            ,
            b.prototype.reset = function () {
                cancelAnimationFrame(this.animationId),
                    this.clearCanvas(),
                    y(this.nodes.buttons.stations, !0),
                    m(this.nodes.buttons.play, p.start, this.buttonsAria.start),
                    v(this.nodes.labels.queue),
                    v(this.nodes.labels.backoff),
                    this.nodes.labels.status.textContent = d["default"]
            }
            ,
            b.prototype.emitFrame = function (e, t) {
                this.updateQueueValue(e.queue(t), t)
            }
            ,
            b.prototype.updateQueueValue = function (e, t) {
                g(this.nodes.labels.queue[t], e)
            }
            ,
            b.prototype.updateBackoffValue = function (e, t) {
                g(this.nodes.labels.backoff[t], e)
            }
            ,
            b.prototype.clearCanvas = function () {
                this.ctx.clearRect(0, 0, r, i)
            }
            ,
            b.prototype.animate = function (e) {
                e.isPlaying && (e.step(),
                    this.draw(e),
                    this.animationId = requestAnimationFrame(this.animate.bind(this, e)))
            }
            ,
            e.exports = b
    }
    , [29, 17], function (e, t, n) {
        t = e.exports = n(4)(),
            t.push([e.id, "body{font-family:Arial,sans-serif}.header,h1{color:#101027;font-size:200%;font-weight:400;margin:.67em 0}.focusable,canvas{border:3px solid transparent}.focusable:focus,button:focus,canvas:focus{outline:none;border:3px dotted #000}.text,p{font-size:100%;margin:1em 0}button{font-size:80%;height:25px;background:linear-gradient(#fff,#f0f0f0);border:1px solid #adadad;box-sizing:border-box}button:disabled{background:#d3d3d3;border:1px solid #bcbcbc}button::-moz-focus-inner{border:0}.navigation{width:0;height:0;padding:0;margin:0;overflow:hidden}", ""])
    }
    , function (e, t, n) {
        var i = n(19)
            , r = n(22)
            , o = 3
            , s = function (e) {
                dispatchEvent(new CustomEvent("QUEUE_CHANGED", {
                    detail: {
                        index: e.id,
                        value: e.packetToSend
                    }
                }))
            }
            , a = function (e) {
                dispatchEvent(new CustomEvent("BACKOFF_CHANGED", {
                    detail: {
                        index: e.id,
                        value: e.backoffValue
                    }
                }))
            }
            , u = {
                time: 0,
                tick: function () {
                    this.time++
                },
                now: function () {
                    return this.time
                },
                reset: function () {
                    this.time = 0
                }
            }
            , l = function (e) {
                this.isPlaying = !1,
                    this.history = [],
                    this.maxHistory = 400,
                    this.BS = new r(0, u),
                    this.MS = [];
                for (var t = 0; o > t; t++)
                    this.MS.push(new i(t, u));
                var n = e ? [] : this.MS.slice(0);
                n.push(this.BS);
                for (var t = 0; o > t; t++) {
                    var s = n.slice(0);
                    e && s.push(this.MS[t]),
                        this.MS[t].myChannel.visibleTerminals = s
                }
                this.BS.myChannel.visibleTerminals = this.MS
            };
        l.prototype.queue = function (e) {
            return ++this.MS[e].packetToSend
        }
            ,
            l.prototype.reset = function () {
                this.isPlaying = !1,
                    this.history = [],
                    u.reset();
                for (var e = 0; o > e; e++)
                    this.MS[e].reset();
                this.BS.reset()
            }
            ,
            l.prototype.getCurrentState = function () {
                for (var e = {
                    accessPoint: this.BS.getColorIndex(),
                    stations: []
                }, t = 0; t < this.MS.length; t++) {
                    var n = this.MS[t];
                    e.stations.push({
                        carrierStatus: n.getChannelColorIndex(),
                        frameType: n.getColorIndex()
                    })
                }
                return e
            }
            ,
            l.prototype.step = function () {
                var e = this.history.unshift(this.getCurrentState());
                e > this.maxHistory && this.history.splice(e - 1, 1),
                    u.tick(),
                    this.BS.myChannel.update();
                for (var t = 0; o > t; t++)
                    this.MS[t].myChannel.update();
                this.BS.update();
                for (var t = 0; o > t; t++)
                    this.MS[t].update(),
                        s(this.MS[t]),
                        a(this.MS[t])
            }
            ,
            e.exports = l
    }
    , function (e, t, n) {
        var i = n(20)
            , r = n(21)
            , o = function (e, t) {
                this.id = e,
                    this.timer = t,
                    this.myChannel = new i(this),
                    this.stateChangeTime = this.timer.now(),
                    this.packetToSend = 0,
                    this.backoffValue = 0,
                    this.CWorder = 3,
                    this.nav = 0,
                    this.changeState(0)
            };
        o.prototype = {
            changeState: function (e) {
                this.state = e,
                    this.stateChangeTime = this.timer.now(),
                    2 === e && 0 === this.backoffValue && this.changeState(3),
                    0 === e && (this.CWorder = 3),
                    3 === e && (this.emmitedPacket = new r(this, 1)),
                    7 === e && (this.emmitedPacket = new r(this, 3))
            },
            reset: function () {
                this.stateChangeTime = this.timer.now(),
                    this.packetToSend = 0,
                    this.backoffValue = 0,
                    this.CWorder = 3,
                    this.nav = 0,
                    this.changeState(0),
                    this.myChannel.busy = !1,
                    this.emmitedPacket = null
            },
            BEB: function () {
                this.backoffValue = 1 << this.CWorder,
                    this.backoffValue = Math.round(Math.random() * this.backoffValue),
                    ++this.CWorder
            },
            activeAction: function () {
                switch (this.state) {
                    case 0:
                        if (this.packetToSend <= 0)
                            break;
                        (this.myChannel.busy || this.nav > 0) && this.BEB(),
                            this.changeState(1);
                        break;
                    case 1:
                        if (this.elapsedTime(5)) {
                            this.changeState(2);
                            break
                        }
                        if (!this.myChannel.busy && this.nav <= 0)
                            break;
                        this.changeState(1);
                        break;
                    case 2:
                        if (this.elapsedTime(5) && (--this.backoffValue,
                            this.changeState(2)),
                            !this.myChannel.busy && this.nav <= 0)
                            break;
                        this.changeState(1);
                        break;
                    case 3:
                        if (!this.elapsedTime(15))
                            break;
                        this.myChannel.receptionAction(this.emmitedPacket),
                            this.emmitedPacket = null,
                            this.changeState(4);
                        break;
                    case 4:
                        if (!this.elapsedTime(3))
                            break;
                        this.changeState(5);
                        break;
                    case 5:
                        if (!this.elapsedTime(16))
                            break;
                        this.BEB(),
                            this.changeState(1);
                        break;
                    case 6:
                        if (!this.elapsedTime(3))
                            break;
                        this.changeState(7);
                        break;
                    case 7:
                        if (!this.elapsedTime(60))
                            break;
                        this.myChannel.receptionAction(this.emmitedPacket),
                            this.emmitedPacket = null,
                            this.changeState(8);
                        break;
                    case 8:
                        if (!this.elapsedTime(3))
                            break;
                        this.changeState(9);
                        break;
                    case 9:
                        if (!this.elapsedTime(11))
                            break;
                        this.BEB(),
                            this.changeState(1)
                }
            },
            receptionAction: function (e) {
                switch (this.state) {
                    case 0:
                    case 1:
                        if (e.getCorrupted(this) || e.nav <= this.nav)
                            break;
                        this.nav = e.nav;
                        break;
                    case 5:
                        if (!e.getCorrupted(this) && e.owner.id === this.id && 2 === e.type) {
                            this.changeState(6);
                            break
                        }
                        this.BEB(),
                            this.changeState(1);
                        break;
                    case 9:
                        if (!e.getCorrupted(this) && e.owner.id === this.id && 4 === e.type) {
                            if (--this.packetToSend,
                                this.packetToSend > 0) {
                                this.CWorder = 3,
                                    this.BEB(),
                                    this.changeState(1);
                                break
                            }
                            this.changeState(0);
                            break
                        }
                        this.BEB(),
                            this.changeState(1)
                }
            },
            getColorIndex: function () {
                var e = 0;
                return 3 === this.state && (e = 1),
                    7 === this.state && (e = 2),
                    2 === this.state && (e = 3),
                    e
            },
            getChannelColorIndex: function () {
                return this.nav > 0 ? 2 : this.myChannel.busy ? 1 : 0
            },
            emmiting: function () {
                return 3 === this.state || 7 === this.state
            },
            elapsedTime: function (e) {
                return this.timer.now() >= this.stateChangeTime + e
            },
            update: function () {
                --this.nav,
                    this.nav < 0 && (this.nav = 0),
                    this.activeAction()
            }
        },
            e.exports = o
    }
    , function (e, t) {
        var n = function (e) {
            this.owner = e,
                this.visibleTerminals = [],
                this.busy = !1
        };
        n.prototype = {
            countSenders: function () {
                for (var e = 0, t = 0; t < this.visibleTerminals.length;)
                    this.visibleTerminals[t].emmiting() && ++e,
                        ++t;
                return e
            },
            receptionAction: function (e) {
                for (var t = 0; t < this.visibleTerminals.length;)
                    this.visibleTerminals[t].receptionAction(e),
                        ++t
            },
            update: function () {
                var e = this.countSenders();
                if (this.busy = e > 0,
                    e > 1)
                    for (var t = 0; t < this.visibleTerminals.length;)
                        this.visibleTerminals[t].emmiting() && this.visibleTerminals[t].emmitedPacket.setCorrupted(this.owner),
                            ++t
            }
        },
            e.exports = n
    }
    , function (e, t) {
        var n = function (e, t) {
            this.owner = e,
                this.type = t,
                this.corrupted = [],
                this.nav = [0, 94, 76][this.type] || 0
        };
        n.prototype = {
            getCorrupted: function (e) {
                for (var t = 0; t < this.corrupted.length; t++)
                    if (this.corrupted[t].id === e.id)
                        return !0;
                return !1
            },
            setCorrupted: function (e) {
                this.getCorrupted(e) || this.corrupted.push(e)
            }
        },
            e.exports = n
    }
    , function (e, t, n) {
        var i = n(20)
            , r = n(21)
            , o = function (e, t) {
                this.id = e,
                    this.timer = t,
                    this.myChannel = new i(this),
                    this.stateChangeTime = this.timer.now(),
                    this.curSender = null,
                    this.changeState(0)
            };
        o.prototype = {
            changeState: function (e) {
                this.state = e,
                    this.stateChangeTime = this.timer.now(),
                    2 === e && (this.emmitedPacket = new r(this.curSender, 2)),
                    6 === e && (this.emmitedPacket = new r(this.curSender, 4))
            },
            elapsedTime: function (e) {
                return this.timer.now() >= this.stateChangeTime + e
            },
            activeAction: function () {
                switch (this.state) {
                    case 1:
                        if (!this.elapsedTime(3))
                            break;
                        this.changeState(2);
                        break;
                    case 2:
                        if (!this.elapsedTime(15))
                            break;
                        this.myChannel.receptionAction(this.emmitedPacket),
                            this.emmitedPacket = null,
                            this.changeState(3);
                        break;
                    case 3:
                        if (!this.elapsedTime(3))
                            break;
                        this.changeState(4);
                        break;
                    case 4:
                        if (!this.elapsedTime(61))
                            break;
                        this.changeState(0);
                        break;
                    case 5:
                        if (!this.elapsedTime(3))
                            break;
                        this.changeState(6);
                        break;
                    case 6:
                        if (!this.elapsedTime(10))
                            break;
                        this.myChannel.receptionAction(this.emmitedPacket),
                            this.emmitedPacket = null,
                            this.changeState(0)
                }
            },
            reset: function () {
                this.stateChangeTime = this.timer.now(),
                    this.changeState(0),
                    this.myChannel.busy = !1,
                    this.emmitedPacket = null
            },
            getColorIndex: function () {
                var e = 0;
                return 2 === this.state && (e = 1),
                    6 === this.state && (e = 2),
                    e
            },
            receptionAction: function (e) {
                switch (this.state) {
                    case 0:
                        if (e.getCorrupted(this) || 1 != e.type)
                            break;
                        this.curSender = e.owner,
                            this.changeState(1);
                        break;
                    case 4:
                        if (!e.getCorrupted(this) && e.owner.id === this.curSender.id && 3 === e.type) {
                            this.changeState(5);
                            break
                        }
                        this.curSender = null,
                            this.changeState(0)
                }
            },
            emmiting: function () {
                return 6 === this.state || 2 === this.state
            },
            update: function () {
                this.activeAction()
            }
        },
            e.exports = o
    }
    , function (e, t, n) {
        n(24);
        var i = n(25)
            , r = function (e, t) {
                t.nodes.buttons.play.addEventListener("click", function () {
                    e.isPlaying ? (e.isPlaying = !1,
                        t.pause(),
                        i.readOutAnimationText(e)) : (e.isPlaying = !0,
                            t.play(e),
                            i.readOutStartButtonText())
                }),
                    t.nodes.buttons.reset.addEventListener("click", function () {
                        e.reset(),
                            t.reset(),
                            i.readOutResetButtonText()
                    });
                for (var n = 0; n < t.nodes.buttons.stations.length; n++)
                    t.nodes.buttons.stations[n].addEventListener("click", function (n) {
                        t.emitFrame(e, n),
                            i.readOutStationButtonText(e.MS[n])
                    }
                        .bind(this, n));
                addEventListener("BACKOFF_CHANGED", function (e) {
                    var n = e.detail;
                    n && t.updateBackoffValue(n.value, n.index)
                }),
                    addEventListener("QUEUE_CHANGED", function (e) {
                        var n = e.detail;
                        n && t.updateQueueValue(n.value, n.index)
                    })
            };
        e.exports = r
    }
    , function (e, t) {
        !function () {
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                    n
            }
            return "function" == typeof window.CustomEvent ? !1 : (e.prototype = window.Event.prototype,
                void (window.CustomEvent = e))
        }()
    }
    , function (e, t, n) {
        var i = n(26)
            , r = n(27)
            , o = i.animation.status
            , s = i.animation.conjunction
            , a = function (e, t) {
                if (e.accessPoint !== t.accessPoint)
                    return !0;
                for (var n = 0; n < e.stations.length; n++)
                    if (e.stations[n].frameType !== t.stations[n].frameType && 0 !== t.stations[n].frameType)
                        return !0;
                return !1
            }
            , u = function (e) {
                var t = i.animation.station.replace("%s", e.id + 1).replace("%s", e.packetToSend).replace("%s", e.backoffValue);
                return t
            }
            , l = function (e, t) {
                for (var n = i.animation.step.replace("%s", t), r = 0; r < e.stations.length; r++) {
                    var a = o.mobile[e.stations[r].frameType]
                        , u = o.carrier[e.stations[r].carrierStatus];
                    n += i.animation.mobile.replace("%s", r + 1),
                        "" !== a && (n += a + s),
                        n += u
                }
                var l = o.base[e.accessPoint];
                return "" !== l && (n += i.animation.base + l),
                    n
            }
            , c = function () {
                this.voice = new r(10)
            };
        c.prototype = {
            readOutStationText: function (e) {
                this.voice.speak(u(e))
            },
            readOutAnimationText: function (e) {
                for (var t = i.animation["default"], n = 0; n < e.MS.length; n++)
                    t += u(e.MS[n]);
                this.voice.speak(t),
                    this.voice.speak(i.animation.legend);
                for (var r = e.history.length - 1, o = l(e.history[r], 1), n = r, s = 1; n > 0; n--) {
                    var c = e.history[n]
                        , f = e.history[n - 1];
                    a(c, f) && (o += l(f, ++s))
                }
                this.voice.speak(o)
            },
            readOutStationButtonText: function (e) {
                var t = i.buttons.voice.station.replace("%s", e.id + 1);
                this.voice.speak(t)
            },
            readOutStartButtonText: function () {
                this.voice.speak(i.buttons.voice.start)
            },
            readOutResetButtonText: function () {
                this.voice.speak(i.buttons.voice.reset)
            }
        },
            e.exports = new c
    }
    , function (e, t) {
        e.exports = {
            navigation: "In this interactive animation, there is one access point and three mobile stations. By clicking on a station button, you instruct the station to emit a frame. Each station uses the CSMA/CA protocol. The interactive animation will show the RTS/CTS sequence, the NAV, collisions, and the countdowns. In this version, all of the stations can hear each other's transmissions. The simulation model looks like a table with Reset, Start/Pause buttons on the top and Station 1, Station 2, Station 3 buttons on the left. When you press Start, the interactive animation shows Carrier sensing Status for each Station and frame types for each station and for the Access point. The number of transmissions that are in Queue and Back Off are shown on the right for each Station. Press Start button to begin. Press Pause to stop the simulation and walk thought the model to hear the legend description for the Stations and the Access Point. To set all the values back to 0, press the Reset button. ",
            illustration: "This figure shows the Access Point and three mobile stations. The Access point is wireless base station in the center. Station 1 is a smartphone on the upper left, Station 2 is a smartphone on the upper right, and Station 3 is a smartphone below. Four circles of equal radii are drawn with their centers in the corresponding stations. It is noticeable that all three stations and access point are positioned in the intersection of all four circles. ",
            buttons: {
                voice: {
                    station: "Station %s button pressed. ",
                    reset: "Reset button pressed. ",
                    start: "Start button pressed. "
                },
                label: {
                    start: "Start. Press to enable station buttons and begin simulation. When you press Start, the interactive animation shows Carrier sensing Status for each Station and frame types for each station and for the Access point. ",
                    pause: "Pause. Press to stop the simulation and walk thought the model to hear the legend description for the Stations and the Access Point.",
                    resume: "Resume. Press to continue simulation. "
                }
            },
            animation: {
                "default": "Up to this moment, ",
                station: "Station %s has %s transmissions in Queue and %s of Back Off transmissions. ",
                legend: "The legend is ",
                step: "Step %s. ",
                mobile: "Station %s ",
                base: "The Access Point ",
                conjunction: "and ",
                status: {
                    carrier: ["is medium free. ", "is medium busy. ", "is NAV Medium considered busy. "],
                    mobile: ["", "has RTS type frame ", "has Data type frame ", "has Countdown type frame "],
                    base: ["", "has CTS type frame. ", "has ACK type frame. "]
                }
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
        ).call(t, n(28))
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
                return le.each(e.match(ke) || [], function (e, n) {
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
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : qe.test(n) ? le.parseJSON(n) : n
                        } catch (r) { }
                        De.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function p(e, t, n, i) {
                var r, o = 1, s = 20, a = i ? function () {
                    return i.cur()
                }
                    : function () {
                        return le.css(e, t, "")
                    }
                    , u = a(), l = n && n[3] || (le.cssNumber[t] ? "" : "px"), c = (le.cssNumber[t] || "px" !== l && +u) && He.exec(le.css(e, t));
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
            function h(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], n) : n
            }
            function m(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    je.set(e[n], "globalEval", !t || je.get(t[n], "globalEval"))
            }
            function g(e, t, n, i, r) {
                for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, g = e.length; g > p; p++)
                    if (o = e[p],
                        o || 0 === o)
                        if ("object" === le.type(o))
                            le.merge(d, o.nodeType ? [o] : o);
                        else if (We.test(o)) {
                            for (s = s || f.appendChild(t.createElement("div")),
                                a = (Be.exec(o) || ["", ""])[1].toLowerCase(),
                                u = Ie[a] || Ie._default,
                                s.innerHTML = u[1] + le.htmlPrefilter(o) + u[2],
                                c = u[0]; c--;)
                                s = s.lastChild;
                            le.merge(d, s.childNodes),
                                s = f.firstChild,
                                s.textContent = ""
                        } else
                            d.push(t.createTextNode(o));
                for (f.textContent = "",
                    p = 0; o = d[p++];)
                    if (i && le.inArray(o, i) > -1)
                        r && r.push(o);
                    else if (l = le.contains(o.ownerDocument, o),
                        s = h(f.appendChild(o), "script"),
                        l && m(s),
                        n)
                        for (c = 0; o = s[c++];)
                            Fe.test(o.type || "") && n.push(o);
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
            function S(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
            }
            function T(e) {
                var t = Qe.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function C(e, t) {
                var n, i, r, o, s, a, u, l;
                if (1 === t.nodeType) {
                    if (je.hasData(e) && (o = je.access(e),
                        s = je.set(t, o),
                        l = o.events)) {
                        delete s.handle,
                            s.events = {};
                        for (r in l)
                            for (n = 0,
                                i = l[r].length; i > n; n++)
                                le.event.add(t, r, l[r][n])
                    }
                    De.hasData(e) && (a = De.access(e),
                        u = le.extend({}, a),
                        De.set(t, u))
                }
            }
            function k(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function A(e, t, n, i) {
                t = te.apply([], t);
                var r, o, s, a, u, l, c = 0, f = e.length, d = f - 1, p = t[0], m = le.isFunction(p);
                if (m || f > 1 && "string" == typeof p && !ae.checkClone && Xe.test(p))
                    return e.each(function (r) {
                        var o = e.eq(r);
                        m && (t[0] = p.call(this, r, o.html())),
                            A(o, t, n, i)
                    });
                if (f && (r = g(t, e[0].ownerDocument, !1, e, i),
                    o = r.firstChild,
                    1 === r.childNodes.length && (r = o),
                    o || i)) {
                    for (s = le.map(h(r, "script"), S),
                        a = s.length; f > c; c++)
                        u = r,
                            c !== d && (u = le.clone(u, !0, !0),
                                a && le.merge(s, h(u, "script"))),
                            n.call(e[c], u, c);
                    if (a)
                        for (l = s[s.length - 1].ownerDocument,
                            le.map(s, T),
                            c = 0; a > c; c++)
                            u = s[c],
                                Fe.test(u.type || "") && !je.access(u, "globalEval") && le.contains(l, u) && (u.src ? le._evalUrl && le._evalUrl(u.src) : le.globalEval(u.textContent.replace(Ge, "")))
                }
                return e
            }
            function E(e, t, n) {
                for (var i, r = t ? le.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                    n || 1 !== i.nodeType || le.cleanData(h(i)),
                        i.parentNode && (n && le.contains(i.ownerDocument, i) && m(h(i, "script")),
                            i.parentNode.removeChild(i));
                return e
            }
            function N(e, t) {
                var n = le(t.createElement(e)).appendTo(t.body)
                    , i = le.css(n[0], "display");
                return n.detach(),
                    i
            }
            function j(e) {
                var t = Z
                    , n = Ke[e];
                return n || (n = N(e, t),
                    "none" !== n && n || (Ye = (Ye || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                        t = Ye[0].contentDocument,
                        t.write(),
                        t.close(),
                        n = N(e, t),
                        Ye.detach()),
                    Ke[e] = n),
                    n
            }
            function D(e, t, n) {
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
            function q(e, t) {
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
                var i = He.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function H(e, t, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
                    "margin" === n && (s += le.css(e, n + Oe[o], !0, r)),
                        i ? ("content" === n && (s -= le.css(e, "padding" + Oe[o], !0, r)),
                            "margin" !== n && (s -= le.css(e, "border" + Oe[o] + "Width", !0, r))) : (s += le.css(e, "padding" + Oe[o], !0, r),
                                "padding" !== n && (s += le.css(e, "border" + Oe[o] + "Width", !0, r)));
                return s
            }
            function O(e, t, n) {
                var i = !0
                    , r = "width" === t ? e.offsetWidth : e.offsetHeight
                    , o = et(e)
                    , s = "border-box" === le.css(e, "boxSizing", !1, o);
                if (0 >= r || null == r) {
                    if (r = D(e, t, o),
                        (0 > r || null == r) && (r = e.style[t]),
                        Ze.test(r))
                        return r;
                    i = s && (ae.boxSizingReliable() || r === e.style[t]),
                        r = parseFloat(r) || 0
                }
                return r + H(e, t, n || (s ? "border" : "content"), i, o) + "px"
            }
            function R(e, t) {
                for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)
                    i = e[s],
                        i.style && (o[s] = je.get(i, "olddisplay"),
                            n = i.style.display,
                            t ? (o[s] || "none" !== n || (i.style.display = ""),
                                "" === i.style.display && Re(i) && (o[s] = je.access(i, "olddisplay", j(i.nodeName)))) : (r = Re(i),
                                    "none" === n && r || je.set(i, "olddisplay", r ? n : le.css(i, "display"))));
                for (s = 0; a > s; s++)
                    i = e[s],
                        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
                return e
            }
            function M(e, t, n, i, r) {
                return new M.prototype.init(e, t, n, i, r)
            }
            function B() {
                return n.setTimeout(function () {
                    ut = void 0
                }),
                    ut = le.now()
            }
            function F(e, t) {
                var n, i = 0, r = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                    n = Oe[i],
                        r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e),
                    r
            }
            function I(e, t, n) {
                for (var i, r = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                    if (i = r[o].call(n, t, e))
                        return i
            }
            function W(e, t, n) {
                var i, r, o, s, a, u, l, c, f = this, d = {}, p = e.style, h = e.nodeType && Re(e), m = je.get(e, "fxshow");
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
                    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                        l = le.css(e, "display"),
                        c = "none" === l ? je.get(e, "olddisplay") || j(e.nodeName) : l,
                        "inline" === c && "none" === le.css(e, "float") && (p.display = "inline-block")),
                    n.overflow && (p.overflow = "hidden",
                        f.always(function () {
                            p.overflow = n.overflow[0],
                                p.overflowX = n.overflow[1],
                                p.overflowY = n.overflow[2]
                        }));
                for (i in t)
                    if (r = t[i],
                        ct.exec(r)) {
                        if (delete t[i],
                            o = o || "toggle" === r,
                            r === (h ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i])
                                continue;
                            h = !0
                        }
                        d[i] = m && m[i] || le.style(e, i)
                    } else
                        l = void 0;
                if (le.isEmptyObject(d))
                    "inline" === ("none" === l ? j(e.nodeName) : l) && (p.display = l);
                else {
                    m ? "hidden" in m && (h = m.hidden) : m = je.access(e, "fxshow", {}),
                        o && (m.hidden = !h),
                        h ? le(e).show() : f.done(function () {
                            le(e).hide()
                        }),
                        f.done(function () {
                            var t;
                            je.remove(e, "fxshow");
                            for (t in d)
                                le.style(e, t, d[t])
                        });
                    for (i in d)
                        s = I(h ? m[i] : 0, i, f),
                            i in m || (m[i] = s.start,
                                h && (s.end = s.start,
                                    s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function _(e, t) {
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
            function $(e, t, n) {
                var i, r, o = 0, s = $.prefilters.length, a = le.Deferred().always(function () {
                    delete u.elem
                }), u = function () {
                    if (r)
                        return !1;
                    for (var t = ut || B(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++)
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
                    startTime: ut || B(),
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
                for (_(c, l.opts.specialEasing); s > o; o++)
                    if (i = $.prefilters[o].call(l, e, c, l.opts))
                        return le.isFunction(i.stop) && (le._queueHooks(l.elem, l.opts.queue).stop = le.proxy(i.stop, i)),
                            i;
                return le.map(c, I, l),
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
                    var i, r = 0, o = t.toLowerCase().match(ke) || [];
                    if (le.isFunction(n))
                        for (; i = o[r++];)
                            "+" === i[0] ? (i = i.slice(1) || "*",
                                (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function V(e, t, n, i) {
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
                    , s = e === Dt;
                return r(t.dataTypes[0]) || !o["*"] && r("*")
            }
            function X(e, t) {
                var n, i, r = le.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && le.extend(!0, e, i),
                    e
            }
            function Q(e, t, n) {
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
            function G(e, t, n, i) {
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
            function Y(e, t, n, i) {
                var r;
                if (le.isArray(t))
                    le.each(t, function (t, r) {
                        n || Ht.test(e) ? i(e, r) : Y(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                    });
                else if (n || "object" !== le.type(t))
                    i(e, t);
                else
                    for (r in t)
                        Y(e + "[" + r + "]", t[r], n, i)
            }
            function K(e) {
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
                , pe = function (e, t) {
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
                        return e.replace(fe, "ms-").replace(de, pe)
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
                    function t(e, t, n, i) {
                        var r, o, s, a, u, l, f, p, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
                        if (n = n || [],
                            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                            return n;
                        if (!i && ((t ? t.ownerDocument || t : I) !== L && q(t),
                            t = t || L,
                            H)) {
                            if (11 !== m && (l = ve.exec(e)))
                                if (r = l[1]) {
                                    if (9 === m) {
                                        if (!(s = t.getElementById(r)))
                                            return n;
                                        if (s.id === r)
                                            return n.push(s),
                                                n
                                    } else if (h && (s = h.getElementById(r)) && B(t, s) && s.id === r)
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
                            if (w.qsa && !U[e + " "] && (!O || !O.test(e))) {
                                if (1 !== m)
                                    h = t,
                                        p = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = F),
                                        f = k(e),
                                        o = f.length,
                                        u = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;)
                                        f[o] = u + " " + d(f[o]);
                                    p = f.join(","),
                                        h = ye.test(e) && c(t.parentNode) || t
                                }
                                if (p)
                                    try {
                                        return J.apply(n, h.querySelectorAll(p)),
                                            n
                                    } catch (g) { } finally {
                                        a === F && t.removeAttribute("id")
                                    }
                            }
                        }
                        return E(e.replace(ae, "$1"), t, n, i)
                    }
                    function n() {
                        function e(n, i) {
                            return t.push(n + " ") > S.cacheLength && delete e[t.shift()],
                                e[n + " "] = i
                        }
                        var t = [];
                        return e
                    }
                    function i(e) {
                        return e[F] = !0,
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
                            S.attrHandle[n[i]] = t
                    }
                    function s(e, t) {
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
                    function p(e, t, n) {
                        var i = t.dir
                            , r = n && "parentNode" === i
                            , o = _++;
                        return t.first ? function (t, n, o) {
                            for (; t = t[i];)
                                if (1 === t.nodeType || r)
                                    return e(t, n, o)
                        }
                            : function (t, n, s) {
                                var a, u, l, c = [W, o];
                                if (s) {
                                    for (; t = t[i];)
                                        if ((1 === t.nodeType || r) && e(t, n, s))
                                            return !0
                                } else
                                    for (; t = t[i];)
                                        if (1 === t.nodeType || r) {
                                            if (l = t[F] || (t[F] = {}),
                                                u = l[t.uniqueID] || (l[t.uniqueID] = {}),
                                                (a = u[i]) && a[0] === W && a[1] === o)
                                                return c[2] = a[2];
                                            if (u[i] = c,
                                                c[2] = e(t, n, s))
                                                return !0
                                        }
                            }
                    }
                    function h(e) {
                        return e.length > 1 ? function (t, n, i) {
                            for (var r = e.length; r--;)
                                if (!e[r](t, n, i))
                                    return !1;
                            return !0
                        }
                            : e[0]
                    }
                    function m(e, n, i) {
                        for (var r = 0, o = n.length; o > r; r++)
                            t(e, n[r], i);
                        return i
                    }
                    function g(e, t, n, i, r) {
                        for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
                            (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                                l && t.push(a)));
                        return s
                    }
                    function v(e, t, n, r, o, s) {
                        return r && !r[F] && (r = v(r)),
                            o && !o[F] && (o = v(o, s)),
                            i(function (i, s, a, u) {
                                var l, c, f, d = [], p = [], h = s.length, v = i || m(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? v : g(v, d, e, a, u), b = n ? o || (i ? e : h || r) ? [] : s : y;
                                if (n && n(y, b, a, u),
                                    r)
                                    for (l = g(b, p),
                                        r(l, [], a, u),
                                        c = l.length; c--;)
                                        (f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
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
                                    b = g(b === s ? b.splice(h, b.length) : b),
                                        o ? o(null, s, b, u) : J.apply(s, b)
                            })
                    }
                    function y(e) {
                        for (var t, n, i, r = e.length, o = S.relative[e[0].type], s = o || S.relative[" "], a = o ? 1 : 0, u = p(function (e) {
                            return e === t
                        }, s, !0), l = p(function (e) {
                            return ee(t, e) > -1
                        }, s, !0), c = [function (e, n, i) {
                            var r = !o && (i || n !== N) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));
                            return t = null,
                                r
                        }
                        ]; r > a; a++)
                            if (n = S.relative[e[a].type])
                                c = [p(h(c), n)];
                            else {
                                if (n = S.filter[e[a].type].apply(null, e[a].matches),
                                    n[F]) {
                                    for (i = ++a; r > i && !S.relative[e[i].type]; i++)
                                        ;
                                    return v(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({
                                        value: " " === e[a - 2].type ? "*" : ""
                                    })).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && d(e))
                                }
                                c.push(n)
                            }
                        return h(c)
                    }
                    function b(e, n) {
                        var r = n.length > 0
                            , o = e.length > 0
                            , s = function (i, s, a, u, l) {
                                var c, f, d, p = 0, h = "0", m = i && [], v = [], y = N, b = i || o && S.find.TAG("*", l), x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                                for (l && (N = s === L || s || l); h !== w && null != (c = b[h]); h++) {
                                    if (o && c) {
                                        for (f = 0,
                                            s || c.ownerDocument === L || (q(c),
                                                a = !H); d = e[f++];)
                                            if (d(c, s || L, a)) {
                                                u.push(c);
                                                break
                                            }
                                        l && (W = x)
                                    }
                                    r && ((c = !d && c) && p--,
                                        i && m.push(c))
                                }
                                if (p += h,
                                    r && h !== p) {
                                    for (f = 0; d = n[f++];)
                                        d(m, v, s, a);
                                    if (i) {
                                        if (p > 0)
                                            for (; h--;)
                                                m[h] || v[h] || (v[h] = Y.call(u));
                                        v = g(v)
                                    }
                                    J.apply(u, v),
                                        l && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                                }
                                return l && (W = x,
                                    N = y),
                                    m
                            };
                        return r ? i(s) : s
                    }
                    var x, w, S, T, C, k, A, E, N, j, D, q, L, P, H, O, R, M, B, F = "sizzle" + 1 * new Date, I = e.document, W = 0, _ = 0, $ = n(), z = n(), U = n(), V = function (e, t) {
                        return e === t && (D = !0),
                            0
                    }, X = 1 << 31, Q = {}.hasOwnProperty, G = [], Y = G.pop, K = G.push, J = G.push, Z = G.slice, ee = function (e, t) {
                        for (var n = 0, i = e.length; i > n; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), de = new RegExp("^" + ie + "$"), pe = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, Se = function () {
                        q()
                    };
                    try {
                        J.apply(G = Z.call(I.childNodes), I.childNodes),
                            G[I.childNodes.length].nodeType
                    } catch (Te) {
                        J = {
                            apply: G.length ? function (e, t) {
                                K.apply(e, Z.call(t))
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
                        q = t.setDocument = function (e) {
                            var t, n, i = e ? e.ownerDocument || e : I;
                            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i,
                                P = L.documentElement,
                                H = !C(L),
                                (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)),
                                w.attributes = r(function (e) {
                                    return e.className = "i",
                                        !e.getAttribute("className")
                                }),
                                w.getElementsByTagName = r(function (e) {
                                    return e.appendChild(L.createComment("")),
                                        !e.getElementsByTagName("*").length
                                }),
                                w.getElementsByClassName = ge.test(L.getElementsByClassName),
                                w.getById = r(function (e) {
                                    return P.appendChild(e).id = F,
                                        !L.getElementsByName || !L.getElementsByName(F).length
                                }),
                                w.getById ? (S.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && H) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }
                                    ,
                                    S.filter.ID = function (e) {
                                        var t = e.replace(xe, we);
                                        return function (e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }
                                ) : (delete S.find.ID,
                                    S.filter.ID = function (e) {
                                        var t = e.replace(xe, we);
                                        return function (e) {
                                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }
                                    ),
                                S.find.TAG = w.getElementsByTagName ? function (e, t) {
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
                                S.find.CLASS = w.getElementsByClassName && function (e, t) {
                                    return "undefined" != typeof t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
                                }
                                ,
                                R = [],
                                O = [],
                                (w.qsa = ge.test(L.querySelectorAll)) && (r(function (e) {
                                    P.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"),
                                        e.querySelectorAll("[id~=" + F + "-]").length || O.push("~="),
                                        e.querySelectorAll(":checked").length || O.push(":checked"),
                                        e.querySelectorAll("a#" + F + "+*").length || O.push(".#.+[+~]")
                                }),
                                    r(function (e) {
                                        var t = L.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="),
                                            e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            O.push(",.*:")
                                    })),
                                (w.matchesSelector = ge.test(M = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function (e) {
                                    w.disconnectedMatch = M.call(e, "div"),
                                        M.call(e, "[s!='']:x"),
                                        R.push("!=", oe)
                                }),
                                O = O.length && new RegExp(O.join("|")),
                                R = R.length && new RegExp(R.join("|")),
                                t = ge.test(P.compareDocumentPosition),
                                B = t || ge.test(P.contains) ? function (e, t) {
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
                                V = t ? function (e, t) {
                                    if (e === t)
                                        return D = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === I && B(I, e) ? -1 : t === L || t.ownerDocument === I && B(I, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                                }
                                    : function (e, t) {
                                        if (e === t)
                                            return D = !0,
                                                0;
                                        var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], u = [t];
                                        if (!r || !o)
                                            return e === L ? -1 : t === L ? 1 : r ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                                        if (r === o)
                                            return s(e, t);
                                        for (n = e; n = n.parentNode;)
                                            a.unshift(n);
                                        for (n = t; n = n.parentNode;)
                                            u.unshift(n);
                                        for (; a[i] === u[i];)
                                            i++;
                                        return i ? s(a[i], u[i]) : a[i] === I ? -1 : u[i] === I ? 1 : 0
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
                            if ((e.ownerDocument || e) !== L && q(e),
                                n = n.replace(ce, "='$1']"),
                                w.matchesSelector && H && !U[n + " "] && (!R || !R.test(n)) && (!O || !O.test(n)))
                                try {
                                    var i = M.call(e, n);
                                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return i
                                } catch (r) { }
                            return t(n, L, null, [e]).length > 0
                        }
                        ,
                        t.contains = function (e, t) {
                            return (e.ownerDocument || e) !== L && q(e),
                                B(e, t)
                        }
                        ,
                        t.attr = function (e, t) {
                            (e.ownerDocument || e) !== L && q(e);
                            var n = S.attrHandle[t.toLowerCase()]
                                , i = n && Q.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                            return void 0 !== i ? i : w.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        }
                        ,
                        t.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        t.uniqueSort = function (e) {
                            var t, n = [], i = 0, r = 0;
                            if (D = !w.detectDuplicates,
                                j = !w.sortStable && e.slice(0),
                                e.sort(V),
                                D) {
                                for (; t = e[r++];)
                                    t === e[r] && (i = n.push(r));
                                for (; i--;)
                                    e.splice(n[i], 1)
                            }
                            return j = null,
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
                        S = t.selectors = {
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
                                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
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
                                    var t = $[e + " "];
                                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function (e) {
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
                                            var l, c, f, d, p, h, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a, b = !1;
                                            if (g) {
                                                if (o) {
                                                    for (; m;) {
                                                        for (d = t; d = d[m];)
                                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                                return !1;
                                                        h = m = "only" === e && !h && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (h = [s ? g.firstChild : g.lastChild],
                                                    s && y) {
                                                    for (d = g,
                                                        f = d[F] || (d[F] = {}),
                                                        c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                                        l = c[e] || [],
                                                        p = l[0] === W && l[1],
                                                        b = p && l[2],
                                                        d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                                        if (1 === d.nodeType && ++b && d === t) {
                                                            c[e] = [W, p, b];
                                                            break
                                                        }
                                                } else if (y && (d = t,
                                                    f = d[F] || (d[F] = {}),
                                                    c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                                    l = c[e] || [],
                                                    p = l[0] === W && l[1],
                                                    b = p),
                                                    b === !1)
                                                    for (; (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[F] || (d[F] = {}),
                                                        c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                                        c[e] = [W, b]),
                                                        d !== t));)
                                                        ;
                                                return b -= r,
                                                    b === i || b % i === 0 && b / i >= 0
                                            }
                                        }
                                },
                                PSEUDO: function (e, n) {
                                    var r, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                                        S.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
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
                                    return r[F] ? i(function (e, t, n, i) {
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
                                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: i(function (e) {
                                    return de.test(e || "") || t.error("unsupported lang: " + e),
                                        e = e.replace(xe, we).toLowerCase(),
                                        function (t) {
                                            var n;
                                            do
                                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
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
                                    return !S.pseudos.empty(e)
                                },
                                header: function (e) {
                                    return me.test(e.nodeName)
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
                        S.pseudos.nth = S.pseudos.eq;
                    for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        S.pseudos[x] = a(x);
                    for (x in {
                        submit: !0,
                        reset: !0
                    })
                        S.pseudos[x] = u(x);
                    return f.prototype = S.filters = S.pseudos,
                        S.setFilters = new f,
                        k = t.tokenize = function (e, n) {
                            var i, r, o, s, a, u, l, c = z[e + " "];
                            if (c)
                                return n ? 0 : c.slice(0);
                            for (a = e,
                                u = [],
                                l = S.preFilter; a;) {
                                i && !(r = ue.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                                    u.push(o = [])),
                                    i = !1,
                                    (r = le.exec(a)) && (i = r.shift(),
                                        o.push({
                                            value: i,
                                            type: r[0].replace(ae, " ")
                                        }),
                                        a = a.slice(i.length));
                                for (s in S.filter)
                                    !(r = pe[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(),
                                        o.push({
                                            value: i,
                                            type: s,
                                            matches: r
                                        }),
                                        a = a.slice(i.length));
                                if (!i)
                                    break
                            }
                            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
                        }
                        ,
                        A = t.compile = function (e, t) {
                            var n, i = [], r = [], o = U[e + " "];
                            if (!o) {
                                for (t || (t = k(e)),
                                    n = t.length; n--;)
                                    o = y(t[n]),
                                        o[F] ? i.push(o) : r.push(o);
                                o = U(e, b(r, i)),
                                    o.selector = e
                            }
                            return o
                        }
                        ,
                        E = t.select = function (e, t, n, i) {
                            var r, o, s, a, u, l = "function" == typeof e && e, f = !i && k(e = l.selector || e);
                            if (n = n || [],
                                1 === f.length) {
                                if (o = f[0] = f[0].slice(0),
                                    o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && H && S.relative[o[1].type]) {
                                    if (t = (S.find.ID(s.matches[0].replace(xe, we), t) || [])[0],
                                        !t)
                                        return n;
                                    l && (t = t.parentNode),
                                        e = e.slice(o.shift().value.length)
                                }
                                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                                    !S.relative[a = s.type]);)
                                    if ((u = S.find[a]) && (i = u(s.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                                        if (o.splice(r, 1),
                                            e = i.length && d(o),
                                            !e)
                                            return J.apply(n, i),
                                                n;
                                        break
                                    }
                            }
                            return (l || A(e, f))(i, t, !H, n, !t || ye.test(e) && c(t.parentNode) || t),
                                n
                        }
                        ,
                        w.sortStable = F.split("").sort(V).join("") === F,
                        w.detectDuplicates = !!D,
                        q(),
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
            le.find = he,
                le.expr = he.selectors,
                le.expr[":"] = le.expr.pseudos,
                le.uniqueSort = le.unique = he.uniqueSort,
                le.text = he.getText,
                le.isXMLDoc = he.isXML,
                le.contains = he.contains;
            var me = function (e, t, n) {
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && le(e).is(n))
                            break;
                        i.push(e)
                    }
                return i
            }
                , ge = function (e, t) {
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
            var xe, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Se = le.fn.init = function (e, t, n) {
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
            Se.prototype = le.fn,
                xe = le(Z);
            var Te = /^(?:parents|prev(?:Until|All))/
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
                        return me(e, "parentNode")
                    },
                    parentsUntil: function (e, t, n) {
                        return me(e, "parentNode", n)
                    },
                    next: function (e) {
                        return u(e, "nextSibling")
                    },
                    prev: function (e) {
                        return u(e, "previousSibling")
                    },
                    nextAll: function (e) {
                        return me(e, "nextSibling")
                    },
                    prevAll: function (e) {
                        return me(e, "previousSibling")
                    },
                    nextUntil: function (e, t, n) {
                        return me(e, "nextSibling", n)
                    },
                    prevUntil: function (e, t, n) {
                        return me(e, "previousSibling", n)
                    },
                    siblings: function (e) {
                        return ge((e.parentNode || {}).firstChild, e)
                    },
                    children: function (e) {
                        return ge(e.firstChild)
                    },
                    contents: function (e) {
                        return e.contentDocument || le.merge([], e.childNodes)
                    }
                }, function (e, t) {
                    le.fn[e] = function (n, i) {
                        var r = le.map(this, t, n);
                        return "Until" !== e.slice(-5) && (i = n),
                            i && "string" == typeof i && (r = le.filter(i, r)),
                            this.length > 1 && (Ce[e] || le.uniqueSort(r),
                                Te.test(e) && r.reverse()),
                            this.pushStack(r)
                    }
                });
            var ke = /\S+/g;
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
                                        i = i in o ? [i] : i.match(ke) || [])),
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
            var je = new f
                , De = new f
                , qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , Le = /[A-Z]/g;
            le.extend({
                hasData: function (e) {
                    return De.hasData(e) || je.hasData(e)
                },
                data: function (e, t, n) {
                    return De.access(e, t, n)
                },
                removeData: function (e, t) {
                    De.remove(e, t)
                },
                _data: function (e, t, n) {
                    return je.access(e, t, n)
                },
                _removeData: function (e, t) {
                    je.remove(e, t)
                }
            }),
                le.fn.extend({
                    data: function (e, t) {
                        var n, i, r, o = this[0], s = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (r = De.get(o),
                                1 === o.nodeType && !je.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--;)
                                    s[n] && (i = s[n].name,
                                        0 === i.indexOf("data-") && (i = le.camelCase(i.slice(5)),
                                            d(o, i, r[i])));
                                je.set(o, "hasDataAttrs", !0)
                            }
                            return r
                        }
                        return "object" == typeof e ? this.each(function () {
                            De.set(this, e)
                        }) : Ee(this, function (t) {
                            var n, i;
                            if (o && void 0 === t) {
                                if (n = De.get(o, e) || De.get(o, e.replace(Le, "-$&").toLowerCase()),
                                    void 0 !== n)
                                    return n;
                                if (i = le.camelCase(e),
                                    n = De.get(o, i),
                                    void 0 !== n)
                                    return n;
                                if (n = d(o, i, void 0),
                                    void 0 !== n)
                                    return n
                            } else
                                i = le.camelCase(e),
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
                le.extend({
                    queue: function (e, t, n) {
                        var i;
                        return e ? (t = (t || "fx") + "queue",
                            i = je.get(e, t),
                            n && (!i || le.isArray(n) ? i = je.access(e, t, le.makeArray(n)) : i.push(n)),
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
                        return je.get(e, n) || je.access(e, n, {
                            empty: le.Callbacks("once memory").add(function () {
                                je.remove(e, [t + "queue", n])
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
                            n = je.get(o[s], e + "queueHooks"),
                                n && n.empty && (i++,
                                    n.empty.add(a));
                        return a(),
                            r.promise(t)
                    }
                });
            var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , He = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i")
                , Oe = ["Top", "Right", "Bottom", "Left"]
                , Re = function (e, t) {
                    return e = t || e,
                        "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
                }
                , Me = /^(?:checkbox|radio)$/i
                , Be = /<([\w:-]+)/
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
            var We = /<|&#?\w+;/;
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
            var _e = /^key/
                , $e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                , ze = /^([^.]*)(?:\.(.+)|)/;
            le.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o, s, a, u, l, c, f, d, p, h, m, g = je.get(e);
                    if (g)
                        for (n.handler && (o = n,
                            n = o.handler,
                            r = o.selector),
                            n.guid || (n.guid = le.guid++),
                            (u = g.events) || (u = g.events = {}),
                            (s = g.handle) || (s = g.handle = function (t) {
                                return "undefined" != typeof le && le.event.triggered !== t.type ? le.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            t = (t || "").match(ke) || [""],
                            l = t.length; l--;)
                            a = ze.exec(t[l]) || [],
                                p = m = a[1],
                                h = (a[2] || "").split(".").sort(),
                                p && (f = le.event.special[p] || {},
                                    p = (r ? f.delegateType : f.bindType) || p,
                                    f = le.event.special[p] || {},
                                    c = le.extend({
                                        type: p,
                                        origType: m,
                                        data: i,
                                        handler: n,
                                        guid: n.guid,
                                        selector: r,
                                        needsContext: r && le.expr.match.needsContext.test(r),
                                        namespace: h.join(".")
                                    }, o),
                                    (d = u[p]) || (d = u[p] = [],
                                        d.delegateCount = 0,
                                        f.setup && f.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s)),
                                    f.add && (f.add.call(e, c),
                                        c.handler.guid || (c.handler.guid = n.guid)),
                                    r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                                    le.event.global[p] = !0)
                },
                remove: function (e, t, n, i, r) {
                    var o, s, a, u, l, c, f, d, p, h, m, g = je.hasData(e) && je.get(e);
                    if (g && (u = g.events)) {
                        for (t = (t || "").match(ke) || [""],
                            l = t.length; l--;)
                            if (a = ze.exec(t[l]) || [],
                                p = m = a[1],
                                h = (a[2] || "").split(".").sort(),
                                p) {
                                for (f = le.event.special[p] || {},
                                    p = (i ? f.delegateType : f.bindType) || p,
                                    d = u[p] || [],
                                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    s = o = d.length; o--;)
                                    c = d[o],
                                        !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1),
                                            c.selector && d.delegateCount--,
                                            f.remove && f.remove.call(e, c));
                                s && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || le.removeEvent(e, p, g.handle),
                                    delete u[p])
                            } else
                                for (p in u)
                                    le.event.remove(e, p + t[l], n, i, !0);
                        le.isEmptyObject(u) && je.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = le.event.fix(e);
                    var t, n, i, r, o, s = [], a = ee.call(arguments), u = (je.get(this, "events") || {})[e.type] || [], l = le.event.special[e.type] || {};
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
                    for (s || (this.fixHooks[r] = s = $e.test(r) ? this.mouseHooks : _e.test(r) ? this.keyHooks : {}),
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
            var Ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                , Ve = /<script|<style|<link/i
                , Xe = /checked\s*(?:[^=]|=\s*.checked.)/i
                , Qe = /^true\/(.*)/
                , Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            le.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Ue, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var i, r, o, s, a = e.cloneNode(!0), u = le.contains(e.ownerDocument, e);
                    if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                        for (s = h(a),
                            o = h(e),
                            i = 0,
                            r = o.length; r > i; i++)
                            k(o[i], s[i]);
                    if (t)
                        if (n)
                            for (o = o || h(e),
                                s = s || h(a),
                                i = 0,
                                r = o.length; r > i; i++)
                                C(o[i], s[i]);
                        else
                            C(e, a);
                    return s = h(a, "script"),
                        s.length > 0 && m(s, !u && h(e, "script")),
                        a
                },
                cleanData: function (e) {
                    for (var t, n, i, r = le.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Ne(n)) {
                            if (t = n[je.expando]) {
                                if (t.events)
                                    for (i in t.events)
                                        r[i] ? le.event.remove(n, i) : le.removeEvent(n, i, t.handle);
                                n[je.expando] = void 0
                            }
                            n[De.expando] && (n[De.expando] = void 0)
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
                        return Ee(this, function (e) {
                            var t = this[0] || {}
                                , n = 0
                                , i = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Ve.test(e) && !Ie[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = le.htmlPrefilter(e);
                                try {
                                    for (; i > n; n++)
                                        t = this[n] || {},
                                            1 === t.nodeType && (le.cleanData(h(t, !1)),
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
                        for (var n, i = [], r = le(e), o = r.length - 1, s = 0; o >= s; s++)
                            n = s === o ? this : this.clone(!0),
                                le(r[s])[t](n),
                                ne.apply(i, n.get());
                        return this.pushStack(i)
                    }
                });
            var Ye, Ke = {
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
                        var r, o, s, a = le.camelCase(t), u = e.style;
                        return t = le.cssProps[a] || (le.cssProps[a] = L(a) || a),
                            s = le.cssHooks[t] || le.cssHooks[a],
                            void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : (o = typeof n,
                                "string" === o && (r = He.exec(n)) && r[1] && (n = p(e, t, r),
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
                        void 0 === r && (r = D(e, t, i)),
                        "normal" === r && t in ot && (r = ot[t]),
                        "" === n || n ? (o = parseFloat(r),
                            n === !0 || isFinite(o) ? o || 0 : r) : r
                }
            }),
                le.each(["height", "width"], function (e, t) {
                    le.cssHooks[t] = {
                        get: function (e, n, i) {
                            return n ? it.test(le.css(e, "display")) && 0 === e.offsetWidth ? tt(e, rt, function () {
                                return O(e, t, i)
                            }) : O(e, t, i) : void 0
                        },
                        set: function (e, n, i) {
                            var r, o = i && et(e), s = i && H(e, t, i, "border-box" === le.css(e, "boxSizing", !1, o), o);
                            return s && (r = He.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                                n = le.css(e, t)),
                                P(e, n, s)
                        }
                    }
                }),
                le.cssHooks.marginLeft = q(ae.reliableMarginLeft, function (e, t) {
                    return t ? (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                        marginLeft: 0
                    }, function () {
                        return e.getBoundingClientRect().left
                    })) + "px" : void 0
                }),
                le.cssHooks.marginRight = q(ae.reliableMarginRight, function (e, t) {
                    return t ? tt(e, {
                        display: "inline-block"
                    }, D, [e, "marginRight"]) : void 0
                }),
                le.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (e, t) {
                    le.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                                r[e + Oe[i] + t] = o[i] || o[i - 2] || o[0];
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
                le.Tween = M,
                M.prototype = {
                    constructor: M,
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
                        var e = M.propHooks[this.prop];
                        return e && e.get ? e.get(this) : M.propHooks._default.get(this)
                    },
                    run: function (e) {
                        var t, n = M.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
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
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = le.css(e.elem, e.prop, ""),
                                t && "auto" !== t ? t : 0)
                        },
                        set: function (e) {
                            le.fx.step[e.prop] ? le.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[le.cssProps[e.prop]] && !le.cssHooks[e.prop] ? e.elem[e.prop] = e.now : le.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                M.propHooks.scrollTop = M.propHooks.scrollLeft = {
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
                le.fx = M.prototype.init,
                le.fx.step = {};
            var ut, lt, ct = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
            le.Animation = le.extend($, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return p(n.elem, e, He.exec(t), n),
                            n
                    }
                    ]
                },
                tweener: function (e, t) {
                    le.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.match(ke);
                    for (var n, i = 0, r = e.length; r > i; i++)
                        n = e[i],
                            $.tweeners[n] = $.tweeners[n] || [],
                            $.tweeners[n].unshift(t)
                },
                prefilters: [W],
                prefilter: function (e, t) {
                    t ? $.prefilters.unshift(e) : $.prefilters.push(e)
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
                                var t = $(this, le.extend({}, e), o);
                                (r || je.get(this, "finish")) && t.stop(!0)
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
                                    , s = je.get(this);
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
                                var t, n = je.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = le.timers, s = i ? i.length : 0;
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
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
                    }
                }),
                le.each({
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
            var dt, pt = le.expr.attrHandle;
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
                        var n, i, r = 0, o = t && t.match(ke);
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
                    var n = pt[t] || le.find.attr;
                    pt[t] = function (e, t, i) {
                        var r, o;
                        return i || (o = pt[t],
                            pt[t] = r,
                            r = null != n(e, t, i) ? t.toLowerCase() : null,
                            pt[t] = o),
                            r
                    }
                });
            var ht = /^(?:input|select|textarea|button)$/i
                , mt = /^(?:a|area)$/i;
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
                                return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
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
            var gt = /[\t\r\n\f]/g;
            le.fn.extend({
                addClass: function (e) {
                    var t, n, i, r, o, s, a, u = 0;
                    if (le.isFunction(e))
                        return this.each(function (t) {
                            le(this).addClass(e.call(this, t, z(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(ke) || []; n = this[u++];)
                            if (r = z(n),
                                i = 1 === n.nodeType && (" " + r + " ").replace(gt, " ")) {
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
                            le(this).removeClass(e.call(this, t, z(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(ke) || []; n = this[u++];)
                            if (r = z(n),
                                i = 1 === n.nodeType && (" " + r + " ").replace(gt, " ")) {
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
                        le(this).toggleClass(e.call(this, n, z(this), t), t)
                    }) : this.each(function () {
                        var t, i, r, o;
                        if ("string" === n)
                            for (i = 0,
                                r = le(this),
                                o = e.match(ke) || []; t = o[i++];)
                                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = z(this),
                                t && je.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : je.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + z(n) + " ").replace(gt, " ").indexOf(t) > -1)
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
                    var o, s, a, u, l, c, f, d = [i || Z], p = se.call(e, "type") ? e.type : e, h = se.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = a = i = i || Z,
                        3 !== i.nodeType && 8 !== i.nodeType && !bt.test(p + le.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
                            p = h.shift(),
                            h.sort()),
                            l = p.indexOf(":") < 0 && "on" + p,
                            e = e[le.expando] ? e : new le.Event(p, "object" == typeof e && e),
                            e.isTrigger = r ? 2 : 3,
                            e.namespace = h.join("."),
                            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            e.result = void 0,
                            e.target || (e.target = i),
                            t = null == t ? [e] : le.makeArray(t, [e]),
                            f = le.event.special[p] || {},
                            r || !f.trigger || f.trigger.apply(i, t) !== !1)) {
                        if (!r && !f.noBubble && !le.isWindow(i)) {
                            for (u = f.delegateType || p,
                                bt.test(u + p) || (s = s.parentNode); s; s = s.parentNode)
                                d.push(s),
                                    a = s;
                            a === (i.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || n)
                        }
                        for (o = 0; (s = d[o++]) && !e.isPropagationStopped();)
                            e.type = o > 1 ? u : f.bindType || p,
                                c = (je.get(s, "events") || {})[e.type] && je.get(s, "handle"),
                                c && c.apply(s, t),
                                c = l && s[l],
                                c && c.apply && Ne(s) && (e.result = c.apply(s, t),
                                    e.result === !1 && e.preventDefault());
                        return e.type = p,
                            r || e.isDefaultPrevented() || f._default && f._default.apply(d.pop(), t) !== !1 || !Ne(i) || l && le.isFunction(i[p]) && !le.isWindow(i) && (a = i[l],
                                a && (i[l] = null),
                                le.event.triggered = p,
                                i[p](),
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
                                , r = je.access(i, t);
                            r || i.addEventListener(e, n, !0),
                                je.access(i, t, (r || 0) + 1)
                        },
                        teardown: function () {
                            var i = this.ownerDocument || this
                                , r = je.access(i, t) - 1;
                            r ? je.access(i, t, r) : (i.removeEventListener(e, n, !0),
                                je.remove(i, t))
                        }
                    }
                });
            var xt = n.location
                , wt = le.now()
                , St = /\?/;
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
            var Tt = /#.*$/
                , Ct = /([?&])_=[^&]*/
                , kt = /^(.*?):[ \t]*([^\r\n]*)$/gm
                , At = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                , Et = /^(?:GET|HEAD)$/
                , Nt = /^\/\//
                , jt = {}
                , Dt = {}
                , qt = "*/".concat("*")
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
                            "*": qt,
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
                    ajaxPrefilter: U(jt),
                    ajaxTransport: U(Dt),
                    ajax: function (e, t) {
                        function i(e, t, i, a) {
                            var l, f, y, b, w, T = t;
                            2 !== x && (x = 2,
                                u && n.clearTimeout(u),
                                r = void 0,
                                s = a || "",
                                S.readyState = e > 0 ? 4 : 0,
                                l = e >= 200 && 300 > e || 304 === e,
                                i && (b = Q(d, S, i)),
                                b = G(d, b, S, l),
                                l ? (d.ifModified && (w = S.getResponseHeader("Last-Modified"),
                                    w && (le.lastModified[o] = w),
                                    w = S.getResponseHeader("etag"),
                                    w && (le.etag[o] = w)),
                                    204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                                        f = b.data,
                                        y = b.error,
                                        l = !y)) : (y = T,
                                            !e && T || (T = "error",
                                                0 > e && (e = 0))),
                                S.status = e,
                                S.statusText = (t || T) + "",
                                l ? m.resolveWith(p, [f, T, S]) : m.rejectWith(p, [S, T, y]),
                                S.statusCode(v),
                                v = void 0,
                                c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [S, d, l ? f : y]),
                                g.fireWith(p, [S, T]),
                                c && (h.trigger("ajaxComplete", [S, d]),
                                    --le.active || le.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var r, o, s, a, u, l, c, f, d = le.ajaxSetup({}, t), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? le(p) : le.event, m = le.Deferred(), g = le.Callbacks("once memory"), v = d.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", S = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === x) {
                                    if (!a)
                                        for (a = {}; t = kt.exec(s);)
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
                                        S.always(e[S.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || w;
                                return r && r.abort(t),
                                    i(0, t),
                                    this
                            }
                        };
                        if (m.promise(S).complete = g.add,
                            S.success = S.done,
                            S.error = S.fail,
                            d.url = ((e || d.url || xt.href) + "").replace(Tt, "").replace(Nt, xt.protocol + "//"),
                            d.type = t.method || t.type || d.method || d.type,
                            d.dataTypes = le.trim(d.dataType || "*").toLowerCase().match(ke) || [""],
                            null == d.crossDomain) {
                            l = Z.createElement("a");
                            try {
                                l.href = d.url,
                                    l.href = l.href,
                                    d.crossDomain = Lt.protocol + "//" + Lt.host != l.protocol + "//" + l.host
                            } catch (T) {
                                d.crossDomain = !0
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = le.param(d.data, d.traditional)),
                            V(jt, d, t, S),
                            2 === x)
                            return S;
                        c = le.event && d.global,
                            c && 0 === le.active++ && le.event.trigger("ajaxStart"),
                            d.type = d.type.toUpperCase(),
                            d.hasContent = !Et.test(d.type),
                            o = d.url,
                            d.hasContent || (d.data && (o = d.url += (St.test(o) ? "&" : "?") + d.data,
                                delete d.data),
                                d.cache === !1 && (d.url = Ct.test(o) ? o.replace(Ct, "$1_=" + wt++) : o + (St.test(o) ? "&" : "?") + "_=" + wt++)),
                            d.ifModified && (le.lastModified[o] && S.setRequestHeader("If-Modified-Since", le.lastModified[o]),
                                le.etag[o] && S.setRequestHeader("If-None-Match", le.etag[o])),
                            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && S.setRequestHeader("Content-Type", d.contentType),
                            S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : d.accepts["*"]);
                        for (f in d.headers)
                            S.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (d.beforeSend.call(p, S, d) === !1 || 2 === x))
                            return S.abort();
                        w = "abort";
                        for (f in {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            S[f](d[f]);
                        if (r = V(Dt, d, t, S)) {
                            if (S.readyState = 1,
                                c && h.trigger("ajaxSend", [S, d]),
                                2 === x)
                                return S;
                            d.async && d.timeout > 0 && (u = n.setTimeout(function () {
                                S.abort("timeout")
                            }, d.timeout));
                            try {
                                x = 1,
                                    r.send(y, i)
                            } catch (T) {
                                if (!(2 > x))
                                    throw T;
                                i(-1, T)
                            }
                        } else
                            i(-1, "No Transport");
                        return S
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
                , Ht = /\[\]$/
                , Ot = /\r?\n/g
                , Rt = /^(?:submit|button|image|reset|file)$/i
                , Mt = /^(?:input|select|textarea|keygen)/i;
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
                        Y(n, e[n], t, r);
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
                            return this.name && !le(this).is(":disabled") && Mt.test(this.nodeName) && !Rt.test(e) && (this.checked || !Me.test(e))
                        }).map(function (e, t) {
                            var n = le(this).val();
                            return null == n ? null : le.isArray(n) ? le.map(n, function (e) {
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
                le.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) { }
                }
                ;
            var Bt = {
                0: 200,
                1223: 204
            }
                , Ft = le.ajaxSettings.xhr();
            ae.cors = !!Ft && "withCredentials" in Ft,
                ae.ajax = Ft = !!Ft,
                le.ajaxTransport(function (e) {
                    var t, i;
                    return ae.cors || Ft && !e.crossDomain ? {
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
                                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Bt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
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
            var It = []
                , Wt = /(=)\?(?=&|$)|\?\?/;
            le.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = It.pop() || le.expando + "_" + wt++;
                    return this[e] = !0,
                        e
                }
            }),
                le.ajaxPrefilter("json jsonp", function (e, t, i) {
                    var r, o, s, a = e.jsonp !== !1 && (Wt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(e.data) && "data");
                    return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        a ? e[a] = e[a].replace(Wt, "$1" + r) : e.jsonp !== !1 && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
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
                                    It.push(r)),
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
                    return i ? [t.createElement(i[1])] : (i = g([e], t, r),
                        r && r.length && le(r).remove(),
                        le.merge([], i.childNodes))
                }
                ;
            var _t = le.fn.load;
            le.fn.load = function (e, t, n) {
                if ("string" != typeof e && _t)
                    return _t.apply(this, arguments);
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
                            var o = K(e);
                            return void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                        }, e, i, arguments.length)
                    }
                }),
                le.each(["top", "left"], function (e, t) {
                    le.cssHooks[t] = q(ae.pixelPosition, function (e, n) {
                        return n ? (n = D(e, t),
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
            var $t = n.jQuery
                , zt = n.$;
            return le.noConflict = function (e) {
                return n.$ === le && (n.$ = zt),
                    e && n.jQuery === le && (n.jQuery = $t),
                    le
            }
                ,
                o || (n.jQuery = n.$ = le),
                le
        })
    }
    , function (e, t, n, i) {
        var r = n(i);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(8)(r, {});
        r.locals && (e.exports = r.locals)
    }
]));
