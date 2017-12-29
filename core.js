(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (FT7M) {
        if (!FT7M || !FT7M.length) return null;
        var bdy5D = window;
        for (var a = FT7M.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bdy5D = bdy5D[a[i]] = bdy5D[a[i]] || {}, i++);
        return bdy5D
    };
    NEJ.Q = function (bJ8B, FT7M) {
        bJ8B = bJ8B || NEJ.O;
        var br7k = FT7M.split(".");
        for (var i = 0, l = br7k.length; i < l; i++) {
            bJ8B = bJ8B[br7k[i]];
            if (!bJ8B) break
        }
        return bJ8B
    };
    NEJ.C = function () {
        var bxy0x = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bxF0x = function (D7w, bz8r) {
            for (var x in bz8r)
                if (D7w == bz8r[x]) return x;
            return null
        };
        var biP6J = {
                cx8p: 0,
                bl7e: 1,
                bD8v: 2,
                bW8O: 3,
                bL8D: 4,
                eZ9Q: 5,
                ke1x: 6,
                eD9u: 7
            },
            uV4Z = {
                cD8v: 0,
                bm7f: 1,
                bG8y: 2,
                cg8Y: 3,
                bR8J: 4,
                gC0x: 5,
                kZ1x: 6,
                gq9h: 7
            };
        return function () {
            var fK9B = function () {
                this.byk0x();
                return this.cx8p.apply(this, arguments)
            };
            fK9B.prototype.byk0x = NEJ.F;
            fK9B.prototype.cx8p = NEJ.F;
            fK9B.O7H = function (Db6V, byR1x) {
                if (bxy0x(Db6V)) return;
                if (byR1x == null || !!byR1x) NEJ.X(this, Db6V, bxy0x);
                this.cwY3x = Db6V;
                this.cs8k = Db6V.prototype;
                var bI8A = function () {};
                bI8A.prototype = Db6V.prototype;
                this.prototype = new bI8A;
                var Ha7T = this.prototype;
                Ha7T.constructor = this;
                var ck8c;
                for (var x in biP6J) {
                    ck8c = bxF0x(biP6J[x], uV4Z);
                    if (!ck8c || !this.cs8k[x]) continue;
                    Ha7T[x] = function (V7O) {
                        return function () {
                            this[V7O].apply(this, arguments)
                        }
                    }(ck8c)
                }
                var Fs7l = {};
                for (var x in uV4Z) {
                    ck8c = bxF0x(uV4Z[x], biP6J);
                    if (!ck8c || !this.cs8k[ck8c]) continue;
                    Fs7l[ck8c] = Db6V;
                    Ha7T[x] = function (V7O) {
                        return function () {
                            var o7h, bI8A = this.bfG5L[V7O],
                                bev5A = bI8A.prototype[V7O];
                            this.bfG5L[V7O] = bI8A.cwY3x || Db6V;
                            if (!!bev5A) o7h = bev5A.apply(this, arguments);
                            this.bfG5L[V7O] = Db6V;
                            return o7h
                        }
                    }(ck8c)
                }
                Ha7T.byk0x = function () {
                    this.bfG5L = NEJ.X({}, Fs7l)
                };
                Ha7T.cHU5Z = Ha7T.cD8v;
                return Ha7T
            };
            return fK9B
        }
    }();
    NEJ.X = function (gw0x, bS8K, dV9M) {
        if (!gw0x || !bS8K) return gw0x;
        dV9M = dV9M || NEJ.F;
        for (var x in bS8K) {
            if (bS8K.hasOwnProperty(x) && !dV9M(bS8K[x], x)) gw0x[x] = bS8K[x]
        }
        return gw0x
    };
    NEJ.EX = function (gw0x, bS8K) {
        if (!gw0x || !bS8K) return gw0x;
        for (var x in gw0x) {
            if (gw0x.hasOwnProperty(x) && bS8K[x] != null) gw0x[x] = bS8K[x]
        }
        return gw0x
    };
    var HN8F = Function.prototype;
    HN8F.eB9s = function (ly1x, xs4w) {
        var f = NEJ.F,
            xs4w = xs4w || f,
            ly1x = ly1x || f,
            dt8l = this;
        return function () {
            var d7e = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            ly1x(d7e);
            if (!d7e.stopped) {
                d7e.value = dt8l.apply(this, d7e.args);
                xs4w(d7e)
            }
            return d7e.value
        }
    };
    HN8F.g7b = function () {
        var bf7Y = arguments,
            gw0x = arguments[0],
            bpR8J = this;
        return function () {
            var xq4u = NEJ.R.slice.call(bf7Y, 1);
            NEJ.R.push.apply(xq4u, arguments);
            return bpR8J.apply(gw0x || window, xq4u)
        }
    };
    HN8F.ew9n = function () {
        var bf7Y = arguments,
            gw0x = NEJ.R.shift.call(bf7Y),
            bpR8J = this;
        return function () {
            NEJ.R.push.apply(arguments, bf7Y);
            return bpR8J.apply(gw0x || window, arguments)
        }
    };
    var HN8F = String.prototype;
    if (!HN8F.trim) {
        HN8F.trim = function () {
            var dh8Z = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(dh8Z, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        N7G = c7f("nej.p"),
        ub3x = window.navigator.platform,
        vn4r = window.navigator.userAgent;
    var lk1x = {
        mac: ub3x,
        win: ub3x,
        linux: ub3x,
        ipad: vn4r,
        ipod: vn4r,
        iphone: ub3x,
        android: vn4r
    };
    N7G.HP8H = lk1x;
    for (var x in lk1x) lk1x[x] = (new RegExp(x, "i")).test(lk1x[x]);
    lk1x.ios = lk1x.ipad || lk1x.iphone || lk1x.ipod;
    lk1x.tablet = lk1x.ipad;
    lk1x.desktop = lk1x.mac || lk1x.win || lk1x.linux && !lk1x.android;
    var is0x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    N7G.ds8k = is0x;
    if (/msie\s+(.*?);/i.test(vn4r) || /trident\/.+rv:([\d\.]+)/i.test(vn4r)) {
        is0x.engine = "trident";
        is0x.browser = "ie";
        is0x.version = RegExp.$1;
        is0x.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var mz1x = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        is0x.release = mz1x[document.documentMode] || mz1x[parseInt(is0x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(vn4r)) {
        is0x.engine = "webkit";
        is0x.release = RegExp.$1 || "";
        is0x.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(vn4r)) {
        is0x.engine = "gecko";
        is0x.release = RegExp.$1 || "";
        is0x.browser = "firefox";
        is0x.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(vn4r)) is0x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(vn4r)) {
        is0x.engine = "presto";
        is0x.release = RegExp.$1 || "";
        is0x.browser = "opera";
        is0x.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(vn4r)) is0x.version = RegExp.$1 || ""
    }
    if (is0x.browser == "unknow") {
        var mz1x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mz1x.length, V7O; i < l; i++) {
            V7O = mz1x[i] == "safari" ? "version" : mz1x[i];
            if ((new RegExp(V7O + "/(.*?)(?=\\s|$)", "i")).test(vn4r)) {
                is0x.browser = mz1x[i];
                is0x.version = RegExp.$1.trim();
                break
            }
        }
    }
    N7G.bzU1x = {};
    var beq5v = is0x.engine != "trident";
    N7G.nj1x = {
        gecko: is0x.engine != "gecko",
        webkit: is0x.engine != "webkit",
        presto: is0x.engine != "presto",
        trident0: beq5v || is0x.release > "2.0",
        trident1: beq5v || is0x.release < "6.0",
        trident2: beq5v || is0x.release > "3.0",
        trident: beq5v || is0x.release >= "6.0"
    }
})();
(function () {
    var it0x = NEJ.P("nej.c"),
        R7K = {};
    var bgp5u = function () {
        var dh8Z = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y7R) {
            Y7R = Y7R || "";
            if (dh8Z.test(Y7R)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var MQ9H = function () {
        var bAd1x = function (i7b, bz8r) {
            if (!i7b || !i7b.length) return;
            for (var i = 0, l = i7b.length, jK0x; i < l; i++) {
                jK0x = i7b[i];
                if (jK0x.indexOf("://") > 0) bz8r[bgp5u(jK0x)] = jK0x
            }
        };
        var bg7Z = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function (bS8K) {
            it0x.HS8K("root", bS8K.root || "/res/");
            var bqm9d, fT9K = it0x.B7u("root");
            for (var x in bg7Z) {
                bqm9d = bg7Z[x];
                it0x.HS8K(x, bS8K[bqm9d.name] || fT9K + bqm9d.dft)
            }
            var CP6J = bS8K.p_csrf;
            if (CP6J == !0) {
                CP6J = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            it0x.HS8K("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, CP6J));
            R7K.frames = {};
            bAd1x(bS8K.p_frame, R7K.frames);
            R7K.flashs = {};
            bAd1x(bS8K.p_flash, R7K.flashs)
        }
    }();
    it0x.HS8K = function (J7C, D7w) {
        R7K[J7C] = D7w
    };
    it0x.B7u = function (J7C) {
        return R7K[J7C]
    };
    it0x.cjL0x = function (Y7R) {
        var sz3x = bgp5u(Y7R);
        return R7K.frames[sz3x] || sz3x + "/res/nej_proxy_frame.html"
    };
    it0x.csE2x = function (Y7R) {
        return R7K.flashs[bgp5u(Y7R)]
    };
    MQ9H(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c7f = NEJ.P,
        N7G = c7f("nej.p"),
        it0x = c7f("nej.c"),
        bS8K = window.NEJ_CONF || NEJ.O;
    if (N7G.nj1x.trident) return;
    it0x.HS8K("storage.swf", bS8K.storage || it0x.B7u("root") + "nej_storage.swf");
    if (N7G.ds8k.release < "4.0") {
        it0x.HS8K("blank.png", bS8K.blank || it0x.B7u("root") + "nej_blank.gif")
    }
    var i7b = bS8K.xdr,
        gK0x = /^(https?:\/\/.*?)(?=\/|$)/i,
        ku1x = /[\/?=&]/i;
    var bAZ1x = function (Y7R) {
        return (gK0x.test(Y7R) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i7b && !!i7b.length)
        for (var i = i7b.length - 1, Y7R, J7C; i >= 0; i--) {
            Y7R = i7b[i];
            J7C = bAZ1x(Y7R);
            if (!!J7C) it0x.HS8K(J7C, Y7R)
        }
    it0x.cHG5L = function (Y7R) {
        var J7C = bAZ1x(Y7R);
        if (!J7C) {
            if (ku1x.test(Y7R)) {
                J7C = location.protocol + "//" + location.host
            } else if (Y7R.indexOf("://") < 0) {
                J7C = location.protocol + "//" + Y7R
            } else {
                J7C = Y7R
            }
        }
        return it0x.B7u(J7C) || J7C + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c7f = NEJ.P,
        it0x = c7f("nej.c"),
        N7G = c7f("nej.g"),
        gJ0x = +(new Date);
    N7G.cHC5H = 1e4 - gJ0x;
    N7G.bua9R = 10001 - gJ0x;
    N7G.cHB5G = 10002 - gJ0x;
    N7G.bBG1x = 10003 - gJ0x;
    N7G.bYx7q = 10004 - gJ0x;
    N7G.cHv5A = 10005 - gJ0x;
    N7G.bie6Y = 10006 - gJ0x;
    N7G.cel9c = 10007 - gJ0x;
    N7G.yg5l = "Content-Type";
    N7G.cHq5v = "text/plain";
    N7G.EK7D = "multipart/form-data";
    N7G.cil0x = "application/x-www-form-urlencoded";
    N7G.bkx6r = it0x.B7u("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c7f = NEJ.P,
        fx9o = NEJ.R,
        N7G = c7f("nej.p"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        be7X = c7f("nej.h");
    var kb1x = N7G.ds8k.prefix,
        bDQ2x = N7G.bzU1x,
        ckG0x = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        ckJ0x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        Nh9Y = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var MQ9H = function () {
        var sF3x = be7X.bFT2x();
        bDQ2x.css3d = !!sF3x && sF3x.m41 != null;
        var dh8Z = /-([a-z])/g;
        for (var x in Nh9Y) {
            Nh9Y[bFU2x(x)] = Nh9Y[x]
        }
    };
    var bFU2x = function () {
        var dh8Z = /-([a-z])/g;
        return function (V7O) {
            V7O = V7O || "";
            return V7O.replace(dh8Z, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bGh2x = function (V7O) {
        return (!bDQ2x.css3d ? ckG0x : ckJ0x)[V7O]
    };
    var bGz2x = function () {
        var dh8Z = /\s+/;
        return function (fK9B) {
            fK9B = (fK9B || "").trim();
            return !!fK9B ? fK9B.split(dh8Z) : null
        }
    }();
    var bdY5d = function (F7y, u7n, fK9B) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return;
        k7d.bd7W(bGz2x(fK9B), function (dZ9Q) {
            F7y.classList[u7n](dZ9Q)
        })
    };
    be7X.HV8N = function (i7b) {
        return fx9o.slice.call(i7b, 0)
    };
    be7X.bjx6r = function (F7y) {
        return be7X.HV8N(F7y.children)
    };
    be7X.bjO6I = function (F7y, fK9B) {
        return be7X.HV8N(F7y.getElementsByClassName(fK9B))
    };
    be7X.bjP6J = function (F7y, HW8O) {
        bdY5d(F7y, "add", HW8O)
    };
    be7X.bkd6X = function (F7y, HX8P) {
        bdY5d(F7y, "remove", HX8P)
    };
    be7X.Np9g = function (F7y, HX8P, HW8O) {
        bdY5d(F7y, "remove", HX8P);
        bdY5d(F7y, "add", HW8O)
    };
    be7X.bmV7O = function (F7y, fK9B) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return !1;
        var i7b = F7y.classList;
        if (!i7b || !i7b.length) return !1;
        return k7d.di8a(bGz2x(fK9B), function (dZ9Q) {
            return i7b.contains(dZ9Q)
        }) >= 0
    };
    be7X.bnO8G = function (F7y, dZ9Q) {};
    be7X.bov8n = function (F7y) {};
    be7X.boW8O = function (ge9V, on2x) {
        ge9V.selectionEnd = on2x.end || 0;
        ge9V.selectionStart = on2x.start || 0;
        ge9V.focus()
    };
    be7X.bqL9C = function (ge9V) {
        return {
            end: ge9V.selectionEnd,
            start: ge9V.selectionStart
        }
    };
    be7X.bri9Z = function () {
        var Ez7s = function (dZ9Q, d7e) {
            var F7y = h7a.W7P(d7e);
            if (!F7y.value) a6g.x7q(F7y, dZ9Q)
        };
        var HZ8R = function (dZ9Q, d7e) {
            a6g.y7r(h7a.W7P(d7e), dZ9Q)
        };
        return function (F7y, fl9c, dZ9Q) {
            if (fl9c == 1) {
                h7a.s7l(F7y, "blur", Ez7s.g7b(null, dZ9Q))
            }
            if (fl9c == 1 || fl9c == -1) {
                h7a.s7l(F7y, "focus", HZ8R.g7b(null, dZ9Q))
            }
        }
    }();
    be7X.bfH5M = function (G7z) {
        return (new XMLSerializer).serializeToString(G7z) || ""
    };
    be7X.bfQ5V = function (Cu6o) {
        var fT9K = (new DOMParser).parseFromString(Cu6o, "text/xml").documentElement;
        return fT9K.nodeName == "parsererror" ? null : fT9K
    };
    be7X.bgn5s = function (F7y) {};
    be7X.oi2x = function (F7y) {
        return null
    };
    be7X.bgs5x = function (F7y) {
        return null
    };
    be7X.bgw5B = function (dO9F) {};
    be7X.bhM6G = function () {
        var bf7Y = be7X.HV8N(arguments);
        bf7Y[0] = a6g.B7u(bf7Y[0]);
        if (!bf7Y[0]) return null;
        bf7Y[1] = (bf7Y[1] || "").toLowerCase();
        if (!bf7Y[1]) return null;
        return bf7Y
    };
    be7X.Ct6n = function () {
        var xd4h = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            jl0x = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var czo3x = function (u7n) {
            return (kb1x.evt || kb1x.pro) + u7n
        };
        return function () {
            var bf7Y = be7X.bhM6G.apply(be7X, arguments);
            if (!bf7Y) return;
            var bdR5W = jl0x[bf7Y[1]],
                bdQ5V = xd4h[bf7Y[1]];
            if (!!bdR5W) {
                bf7Y[4] = bf7Y[1];
                bf7Y[1] = czo3x(bdR5W)
            } else if (!!bdQ5V) {
                var V7O = "on" + bf7Y[1];
                if (!(V7O in bf7Y[0])) {
                    bf7Y[4] = bf7Y[1];
                    bf7Y[1] = bdQ5V
                }
            }
            return bf7Y
        }
    }();
    be7X.biQ6K = function () {
        var bf7Y = arguments;
        bf7Y[0].addEventListener(bf7Y[1], bf7Y[2], !!bf7Y[3])
    };
    be7X.bdO5T = function () {
        var bf7Y = arguments;
        bf7Y[0].removeEventListener(bf7Y[1], bf7Y[2], !!bf7Y[3])
    };
    be7X.bjh6b = function (F7y, u7n, e7d) {
        var d7e = document.createEvent("Event");
        d7e.initEvent(u7n, !0, !0);
        NEJ.X(d7e, e7d);
        F7y.dispatchEvent(d7e)
    };
    be7X.bFT2x = function () {
        var gK0x = /\((.*?)\)/,
            ku1x = /\s*,\s*/,
            i7b = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bdN5S = function (sF3x) {
            var im0x = {};
            if (gK0x.test(sF3x || "")) {
                k7d.bd7W(RegExp.$1.split(ku1x), function (D7w, r7k) {
                    im0x[i7b[r7k]] = D7w || ""
                })
            }
            return im0x
        };
        return function (sF3x) {
            if (!!window.CSSMatrix) return new CSSMatrix(sF3x);
            var V7O = kb1x.clz + "CSSMatrix";
            if (!!window[V7O]) return new window[V7O](sF3x || "");
            return bdN5S(sF3x)
        }
    }();
    be7X.bGJ2x = function () {
        var dh8Z = /\{(.*?)\}/g;
        return function (V7O, bz8r) {
            bz8r = bz8r || o;
            var or2x = bGh2x(V7O);
            return !or2x ? "" : or2x.replace(dh8Z, function ($1, $2) {
                var br7k = $2.split("|");
                return bz8r[br7k[0]] || br7k[1] || "0"
            })
        }
    }();
    be7X.bkE7x = function (F7y, V7O, D7w) {
        F7y.style[be7X.bGK2x(V7O)] = D7w
    };
    be7X.bGK2x = function () {
        var dh8Z = /^[a-z]/,
            bkJ7C = kb1x.css;
        var cAr4v = function (V7O) {
            return V7O.replace(dh8Z, function ($1) {
                return bkJ7C + $1.toUpperCase()
            })
        };
        return function (V7O) {
            V7O = bFU2x(V7O);
            var cAy4C = be7X.cAE4I(V7O, Nh9Y);
            return cAy4C ? cAr4v(V7O) : V7O
        }
    }();
    be7X.cAE4I = function () {
        var dh8Z = /^([a-z]+?)[A-Z]/;
        return function (V7O, bz8r) {
            if (!bz8r[V7O]) {
                if (dh8Z.test(V7O)) V7O = RegExp.$1
            }
            return !!bz8r[V7O]
        }
    }();
    be7X.cBQ4U = function () {
        var dh8Z = /\$<(.*?)>/gi,
            bkJ7C = "-" + kb1x.css.toLowerCase() + "-";
        return function (kh1x) {
            return kh1x.replace(dh8Z, function ($1, $2) {
                var eQ9H = $2,
                    br7k = eQ9H.split("|"),
                    or2x = bGh2x(br7k[0]);
                if (!!or2x) {
                    return be7X.bGJ2x(br7k[0], k7d.hv0x(br7k[1]))
                }
                return !be7X.cCf4j(eQ9H, Nh9Y) ? eQ9H : bkJ7C + eQ9H
            })
        }
    }();
    be7X.cCf4j = function (V7O, bz8r) {
        return !!bz8r[V7O]
    };
    be7X.bpq8i = function (ch8Z, kh1x) {
        ch8Z.textContent = kh1x
    };
    be7X.bqi9Z = function (ch8Z, kh1x) {
        var zN5S = ch8Z.sheet,
            bq7j = zN5S.cssRules.length;
        zN5S.insertRule(kh1x, bq7j);
        return zN5S.cssRules[bq7j]
    };
    be7X.cGn5s = function (F7y, e7d) {};
    be7X.bdB5G = function (bdA5F) {
        return (bdA5F || "").toLowerCase() != "transparent"
    };
    be7X.cCP4T = function (F7y) {};
    be7X.btl9c = function (F7y, V7O) {
        if (!!F7y.getAttribute) return F7y.getAttribute(V7O);
        return ""
    };
    be7X.bdz5E = function (eK9B) {
        a6g.cJ8B(eK9B)
    };
    MQ9H()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        N7G = c7f("nej.p"),
        be7X = c7f("nej.h");
    if (N7G.nj1x.trident0) return;
    var gJ0x = +(new Date);
    R7K = {};
    be7X.bnO8G = be7X.bnO8G.eB9s(function (d7e) {
        d7e.stopped = !0;
        var bf7Y = d7e.args,
            C7v = a6g.lv1x(bf7Y[0]),
            J7C = "hover-" + C7v;
        if (!C7v || !!R7K[J7C]) return;
        R7K[J7C] = !0;
        h7a.s7l(C7v, "mouseenter", a6g.y7r.g7b(a6g, C7v, bf7Y[1]));
        h7a.s7l(C7v, "mouseleave", a6g.x7q.g7b(a6g, C7v, bf7Y[1]))
    });
    be7X.bov8n = function () {
        var cGl5q = function () {};
        return be7X.bov8n.eB9s(function (d7e) {
            d7e.stopped = !0;
            var F7y = d7e.args[0],
                C7v = "fixed-" + a6g.lv1x(F7y);
            if (!!R7K[C7v]) return;
            var bg7Z = {};
            R7K[C7v] = bg7Z
        })
    }();
    be7X.bgn5s = be7X.bgn5s.eB9s(function (d7e) {
        d7e.stopped = !0;
        var F7y = d7e.args[0],
            ch8Z = F7y.style,
            bGY2x = a6g.oy2x();
        ch8Z.width = bGY2x.scrollWidth + "px";
        ch8Z.height = bGY2x.scrollHeight + "px"
    });
    be7X.oi2x = be7X.oi2x.eB9s(function (d7e) {
        d7e.stopped = !0;
        var F7y = d7e.args[0],
            kX1x = R7K[F7y.msk];
        if (!kX1x) {
            F7y.msk = gJ0x++;
            kX1x = a6g.dg8Y("iframe");
            kX1x.style.position = "absolute";
            R7K[F7y.msk] = kX1x
        }
        d7e.value = kX1x;
        var ch8Z = kX1x.style;
        ch8Z.top = (parseInt(a6g.df8X(F7y, "top")) || 0) + "px";
        ch8Z.left = (parseInt(a6g.df8X(F7y, "left")) || 0) + "px";
        ch8Z.width = F7y.offsetWidth + "px";
        ch8Z.height = F7y.offsetHeight + "px";
        F7y.insertAdjacentElement("beforeBegin", kX1x)
    });
    be7X.bgs5x = be7X.bgs5x.eB9s(function (d7e) {
        d7e.stopped = !0;
        var kX1x = R7K[d7e.args[0].msk];
        if (!!kX1x) a6g.mY1x(kX1x)
    })
})();
(function () {
    var c7f = NEJ.P,
        N7G = c7f("nej.p"),
        a6g = c7f("nej.e"),
        be7X = c7f("nej.h");
    if (N7G.nj1x.trident1) return;
    be7X.Ct6n = function () {
        var xd4h = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be7X.Ct6n.eB9s(function (d7e) {
            var bf7Y = be7X.bhM6G.apply(be7X, d7e.args);
            if (!bf7Y) {
                d7e.stopped = !0;
                return
            }
            var u7n = xd4h[bf7Y[1]];
            if (!!u7n && ("on" + u7n).toLowerCase() in bf7Y[0]) {
                bf7Y[4] = bf7Y[1];
                bf7Y[1] = u7n;
                d7e.stopped = !0;
                d7e.value = bf7Y
            }
        })
    }();
    be7X.bdB5G = function (bdA5F) {
        return !0
    };
    be7X.bdz5E = be7X.bdz5E.eB9s(function (d7e) {
        d7e.stopped = !0;
        var eK9B = d7e.args[0];
        a6g.ba7T(eK9B, "display", "none");
        try {
            eK9B.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        N7G = c7f("nej.p"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        be7X = c7f("nej.h"),
        bmb7U = {};
    if (N7G.nj1x.trident) return;
    be7X.HV8N = be7X.HV8N.eB9s(function (d7e) {
        d7e.stopped = !0;
        var i7b = d7e.args[0];
        if (!i7b) {
            d7e.value = null;
            return
        }
        var r7k = 0,
            o7h = [];
        while (!!i7b[r7k]) {
            o7h.push(i7b[r7k++])
        }
        d7e.value = o7h
    });
    be7X.bjx6r = be7X.bjx6r.eB9s(function (d7e) {
        d7e.stopped = !0;
        var br7k = [];
        k7d.bd7W(d7e.args[0].childNodes, function (f7c) {
            if (f7c.nodeType == 1) br7k.push(f7c)
        });
        d7e.value = br7k
    });
    be7X.bjO6I = be7X.bjO6I.eB9s(function (d7e) {
        var F7y = d7e.args[0];
        if (!!F7y.getElementsByClassName) return;
        d7e.stopped = !0;
        var o7h = [],
            Ny0x = new RegExp("(\\s|^)(?:" + d7e.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k7d.bd7W(F7y.getElementsByTagName("*"), function (f7c) {
            if (Ny0x.test(f7c.className)) o7h.push(f7c)
        });
        d7e.value = o7h
    });
    be7X.boW8O = be7X.boW8O.eB9s(function (d7e) {
        var ge9V = d7e.args[0],
            on2x = d7e.args[1];
        if (ge9V.selectionStart == null) {
            d7e.stopped = !0;
            var db8T = ge9V.createTextRange();
            db8T.collapse(!0);
            db8T.moveStart("character", on2x.start);
            db8T.moveEnd("character", on2x.end - on2x.start);
            db8T.select();
            ge9V.focus()
        }
    });
    be7X.bqL9C = be7X.bqL9C.eB9s(function (d7e) {
        var ge9V = d7e.args[0];
        ge9V.focus();
        if (ge9V.selectionStart == null) {
            d7e.stopped = !0;
            var bHg2x = document.selection.createRange();
            var bHh2x = ge9V.createTextRange();
            bHh2x.moveToBookmark(bHg2x.getBookmark());
            var bhQ6K = ge9V.createTextRange();
            bhQ6K.collapse(!0);
            bhQ6K.setEndPoint("EndToStart", bHh2x);
            var hz0x = bhQ6K.text.length;
            d7e.value = {
                start: hz0x,
                end: hz0x + bHg2x.text.length
            }
        }
    });
    be7X.bfH5M = be7X.bfH5M.eB9s(function (d7e) {
        if (!!window.XMLSerializer) return;
        d7e.stopped = !0;
        var F7y = d7e.args[0];
        d7e.value = F7y.xml != null ? F7y.xml : F7y.outHTML
    });
    be7X.bfQ5V = function () {
        var NG0x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bWo7h = function () {
            try {
                for (var i = 0, l = NG0x.length; i < l; i++) return new ActiveXObject(NG0x[i])
            } catch (ex) {
                return null
            }
        };
        return be7X.bfQ5V.eB9s(function (d7e) {
            if (!!window.DOMParser) return;
            d7e.stopped = !0;
            var nT2x = bWo7h();
            if (!!nT2x && nT2x.loadXML(d7e.args[0]) && !nT2x.parseError.errorCode) d7e.value = nT2x.documentElement
        })
    }();
    be7X.Ct6n = function () {
        var jl0x = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jl0x) bmb7U[jl0x[x]] = !0;
        var bYu7n = function (F7y, u7n) {
            if ("on" + u7n in F7y) return null;
            return jl0x[u7n] || ""
        };
        var bYC7v = function (u7n, dt8l) {
            var cK8C = dt8l;
            switch (u7n) {
            case "readystatechange":
                cK8C = function (d7e) {
                    var F7y = h7a.W7P(d7e) || this;
                    if (F7y.readyState == "loaded" || F7y.readyState == "complete") {
                        d7e.target = F7y;
                        dt8l.call(F7y, d7e)
                    }
                };
                break;
            case "propertychange":
                cK8C = function (d7e) {
                    var F7y = h7a.W7P(d7e) || this;
                    if ("value" in F7y && d7e.propertyName == "value") {
                        d7e.target = F7y;
                        dt8l.call(F7y, d7e)
                    }
                };
                break
            }
            return cK8C
        };
        return be7X.Ct6n.eB9s(function (d7e) {
            var bf7Y = be7X.bhM6G.apply(be7X, d7e.args);
            if (!bf7Y) {
                d7e.stopped = !0;
                return
            }
            var u7n = bYu7n(bf7Y[0], bf7Y[1]);
            if (!!u7n) {
                d7e.stopped = !0;
                bf7Y[4] = bf7Y[1];
                bf7Y[1] = u7n;
                if (!!bf7Y[2]) {
                    bf7Y[5] = bf7Y[2];
                    bf7Y[2] = bYC7v(bf7Y[1], bf7Y[2])
                }
                d7e.value = bf7Y
            }
        }, function (d7e) {
            var bf7Y = d7e.value;
            if (!bf7Y[0] || !k7d.gG0x(bf7Y[2])) return;
            if (!k7d.gG0x(bf7Y[5])) bf7Y[5] = bf7Y[2];
            bf7Y[2] = bf7Y[2].g7b(bf7Y[0])
        })
    }();
    be7X.biQ6K = be7X.biQ6K.eB9s(function (d7e) {
        var bf7Y = d7e.args;
        if (!!bmb7U[bf7Y[1]] || !document.addEventListener) {
            d7e.stopped = !0;
            bf7Y[0].attachEvent("on" + bf7Y[1], bf7Y[2])
        }
    });
    be7X.bdO5T = be7X.bdO5T.eB9s(function (d7e) {
        var bf7Y = d7e.args;
        if (!!bmb7U[bf7Y[1]] || !document.removeEventListener) {
            d7e.stopped = !0;
            bf7Y[0].detachEvent("on" + bf7Y[1], bf7Y[2])
        }
    });
    be7X.bjh6b = be7X.bjh6b.eB9s(function (d7e) {
        if (!document.createEvent) {
            d7e.stopped = !0;
            var bf7Y = d7e.args,
                bJt3x = document.createEventObject();
            NEJ.X(bJt3x, bf7Y[2]);
            try {
                bf7Y[0].fireEvent("on" + bf7Y[1], bJt3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be7X.bkE7x = be7X.bkE7x.eB9s(function (d7e) {
        var bf7Y = d7e.args,
            V7O = bf7Y[1].toLowerCase();
        if (V7O == "opacity" && !(V7O in document.body.style)) {
            bf7Y[1] = "filter";
            bf7Y[2] = "alpha(opacity=" + bf7Y[2] * 100 + ")"
        }
    });
    be7X.bpq8i = function () {
        var fo9f = 30;
        return be7X.bpq8i.eB9s(function (d7e) {
            var F7y = d7e.args[0];
            if (!F7y.styleSheet) return;
            d7e.stopped = !0;
            var kh1x = d7e.args[1];
            var i7b = document.styleSheets;
            if (i7b.length > fo9f) {
                F7y = i7b[fo9f];
                kh1x = F7y.cssText + kh1x
            } else {
                F7y = F7y.styleSheet
            }
            F7y.cssText = kh1x
        })
    }();
    be7X.bqi9Z = be7X.bqi9Z.eB9s(function (d7e) {
        var bf7Y = d7e.args,
            zN5S = bf7Y[0].sheet;
        if (!!zN5S) return;
        d7e.stopped = !0;
        var zN5S = bf7Y[0].styleSheet,
            bq7j = zN5S.rules.length,
            br7k = bf7Y[1].split(/[\{\}]/);
        zN5S.addRule(br7k[0], br7k[1], bq7j);
        d7e.value = zN5S.rules[bq7j]
    });
    be7X.bri9Z = function () {
        var Ez7s = function (dZ9Q, d7e) {
            a6g.x7q(h7a.W7P(d7e), dZ9Q)
        };
        return be7X.bri9Z.eB9s(function (d7e) {
            if (N7G.ds8k.release >= "4.0") return;
            var bf7Y = d7e.args;
            if (bf7Y[1] != 1) {
                h7a.s7l(bf7Y[0], "blur", Ez7s.g7b(null, bf7Y[2]));
                bf7Y[1] = -1
            }
        })
    }();
    be7X.bdB5G = function (bdA5F) {
        return !0
    };
    be7X.btl9c = be7X.btl9c.eB9s(function (d7e) {
        var bf7Y = d7e.args,
            f7c = (bf7Y[0].attributes || bb7U)[bf7Y[1]];
        if (!!f7c) {
            d7e.stopped = !0;
            d7e.value = f7c.value
        }
    }, function (d7e) {
        var bf7Y = d7e.args;
        if (bf7Y[1] == "maxlength" && d7e.value == 2147483647) d7e.value = ""
    });
    if (N7G.ds8k.release < 5) {
        be7X.bgw5B = function () {
            var eg9X, eK9B, jZ1x = [],
                bkc6W = "cb-" + +(new Date),
                bo7h = '<script>parent.nej.h["' + bkc6W + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bJA3x = function () {
                eg9X = window.clearTimeout(eg9X);
                if (!jZ1x.length) return;
                var dO9F = jZ1x.shift();
                try {
                    var wK4O = eK9B.contentWindow.document;
                    wK4O.open();
                    wK4O.write("<head><title>");
                    wK4O.write(document.title);
                    wK4O.write("</title>");
                    wK4O.write(bo7h.replace("#<HASH>", encodeURIComponent(dO9F)));
                    wK4O.write("</head><body></body>");
                    if (location.hostname != document.domain) wK4O.domain = document.domain;
                    wK4O.close();
                    be7X[bkc6W] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jZ1x.unshift(dO9F)
                }
                eg9X = window.setTimeout(bJA3x, 50)
            };
            return be7X.bgw5B.eB9s(function (d7e) {
                d7e.stopped = !0;
                var dO9F = d7e.args[0];
                if (!!be7X[bkc6W] || !eK9B && !dO9F) return;
                jZ1x.push(dO9F);
                if (!eK9B) eK9B = a6g.bdk4o();
                bJA3x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function () {
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        be7X = c7f("nej.h"),
        N7G = c7f("nej.p"),
        bdj4n = N7G.bzU1x;
    if (N7G.nj1x.gecko) return;
    var MQ9H = function () {
        bdj4n.css3d = bdj4n.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (iL0x, F7y) {
            if (!iL0x || !F7y) return;
            switch (iL0x) {
            case "beforeEnd":
                this.appendChild(F7y);
                return;
            case "beforeBegin":
                this.parentNode.insertBefore(F7y, this);
                return;
            case "afterBegin":
                !this.firstChild ? this.appendChild(F7y) : this.insertBefore(F7y, this.firstChild);
                return;
            case "afterEnd":
                !this.nextSibling ? this.parentNode.appendChild(F7y) : this.parentNode.insertBefore(F7y, this.nextSibling);
                return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bo7h) {
                this.textContent = bo7h
            })
        }
    };
    be7X.Ct6n = function () {
        var gK0x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be7X.Ct6n.eB9s(function (d7e) {
            var bf7Y = d7e.args;
            if (gK0x.test(bf7Y[1] || "")) {
                d7e.stopped = !0;
                d7e.value = bf7Y
            }
        })
    }();
    be7X.cCP4T = function () {
        var cah8Z = function (d7e) {
            h7a.bh7a(d7e);
            h7a.W7P(d7e).control.click()
        };
        return function (F7y) {
            h7a.s7l(F7y, "click", cah8Z)
        }
    }();
    MQ9H()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        be7X = c7f("nej.h");
    var bdh4l = function () {
        var mz1x = !!document.body.classList;
        return function () {
            return mz1x
        }
    }();
    var bJK3x = function () {
        var dh8Z = /\s+/g;
        return function (fK9B) {
            fK9B = (fK9B || "").trim();
            return !fK9B ? null : new RegExp("(\\s|^)(?:" + fK9B.replace(dh8Z, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be7X.Np9g = be7X.Np9g.eB9s(function (d7e) {
        if (bdh4l()) return;
        d7e.stopped = !0;
        var bf7Y = d7e.args,
            F7y = a6g.B7u(bf7Y[0]);
        if (!F7y || !bf7Y[1] && !bf7Y[2]) return;
        var fK9B = F7y.className || "";
        var HW8O = " " + (bf7Y[2] || ""),
            HX8P = bJK3x((bf7Y[1] || "") + HW8O);
        !!HX8P && (fK9B = fK9B.replace(HX8P, "$1"));
        F7y.className = (fK9B + HW8O).replace(/\s+/g, " ").trim()
    });
    be7X.bjP6J = be7X.bjP6J.eB9s(function (d7e) {
        if (bdh4l()) return;
        d7e.stopped = !0;
        var bf7Y = d7e.args;
        be7X.Np9g(bf7Y[0], "", bf7Y[1])
    });
    be7X.bkd6X = be7X.bkd6X.eB9s(function (d7e) {
        if (bdh4l()) return;
        d7e.stopped = !0;
        var bf7Y = d7e.args;
        be7X.Np9g(bf7Y[0], bf7Y[1], "")
    });
    be7X.bmV7O = be7X.bmV7O.eB9s(function (d7e) {
        if (bdh4l()) return;
        d7e.stopped = !0;
        var bf7Y = d7e.args,
            F7y = a6g.B7u(bf7Y[0]);
        if (!F7y) {
            d7e.value = !1;
            return
        }
        var dh8Z = bJK3x(bf7Y[1]);
        d7e.value = !dh8Z ? !1 : dh8Z.test(F7y.className || "")
    })
})();
(function () {
    var c7f = NEJ.P,
        N7G = c7f("nej.p"),
        be7X = c7f("nej.h");
    if (N7G.nj1x.webkit) return;
    be7X.bdB5G = function (bdA5F) {
        return !0
    }
})();
(function () {
    var c7f = NEJ.P,
        be7X = c7f("nej.h"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        cY8Q = c7f("nej.x"),
        R7K = {};
    var bKa3x = function (F7y) {
        F7y = a6g.B7u(F7y);
        if (!F7y || !R7K[F7y.id]) return;
        var bdf4j = !0,
            C7v = F7y.id;
        k7d.eC9t(R7K[C7v], function () {
            bdf4j = !1;
            return !0
        });
        if (bdf4j) delete R7K[C7v]
    };
    h7a.s7l = cY8Q.s7l = function () {
        var cbk8c = function () {
            var bf7Y = be7X.Ct6n.apply(be7X, arguments);
            if (!bf7Y || !bf7Y[2]) return;
            var uj4n = a6g.lv1x(bf7Y[0]),
                oZ2x = R7K[uj4n] || {};
            R7K[uj4n] = oZ2x;
            uj4n = bf7Y[4] || bf7Y[1];
            var BY6S = oZ2x[uj4n] || [];
            oZ2x[uj4n] = BY6S;
            BY6S.push({
                type: bf7Y[1],
                func: bf7Y[2],
                capt: !!bf7Y[3],
                sfun: bf7Y[5] || bf7Y[2]
            });
            return bf7Y.slice(0, 4)
        };
        return function () {
            var bf7Y = cbk8c.apply(null, arguments);
            if (!!bf7Y) be7X.biQ6K.apply(be7X, bf7Y);
            return this
        }
    }();
    h7a.mw1x = cY8Q.mw1x = function () {
        var cbN8F = function () {
            var xq4u = arguments,
                uj4n = a6g.lv1x(xq4u[0]),
                oZ2x = R7K[uj4n],
                u7n = (xq4u[1] || "").toLowerCase(),
                d7e = xq4u[2];
            if (!oZ2x || !u7n || !d7e) return;
            oZ2x = oZ2x[u7n];
            if (!oZ2x) return;
            var cbV8N = !!xq4u[3],
                r7k = k7d.di8a(oZ2x, function (jl0x) {
                    return d7e == jl0x.sfun && cbV8N == jl0x.capt
                });
            if (r7k < 0) return;
            var jl0x = oZ2x.splice(r7k, 1)[0];
            return !jl0x ? null : [a6g.B7u(uj4n), jl0x.type, jl0x.func, jl0x.capt]
        };
        return function () {
            var bf7Y = cbN8F.apply(null, arguments);
            if (!!bf7Y) {
                be7X.bdO5T.apply(be7X, bf7Y);
                bKa3x(bf7Y[0])
            }
            return this
        }
    }();
    h7a.hd0x = cY8Q.hd0x = function () {
        var bKH3x = function () {
            var xq4u = arguments,
                uj4n = a6g.lv1x(xq4u[0]),
                oZ2x = R7K[uj4n],
                BY6S = (xq4u[1] || "").toLowerCase();
            if (!oZ2x || !BY6S) return;
            var F7y = a6g.B7u(uj4n);
            k7d.no2x(oZ2x[BY6S], function (jl0x, r7k, i7b) {
                be7X.bdO5T(F7y, jl0x.type, jl0x.func, jl0x.capt);
                i7b.splice(r7k, 1)
            });
            delete oZ2x[BY6S]
        };
        var cdb8T = function (F7y) {
            F7y = a6g.B7u(F7y);
            if (!F7y) return;
            var C7v = F7y.id;
            k7d.eC9t(R7K[C7v], function (i7b, u7n) {
                bKH3x(C7v, u7n)
            });
            delete R7K[C7v]
        };
        return function (F7y, u7n) {
            !u7n ? cdb8T(F7y) : bKH3x(F7y, u7n);
            bKa3x(F7y);
            return this
        }
    }();
    h7a.W7P = function () {
        var btY9P;
        var Ih8Z = function (V7O, F7y) {
            var br7k = V7O.split(":");
            if (br7k.length > 1) {
                if (!btY9P) btY9P = {
                    c: a6g.bE8w,
                    d: a6g.t7m,
                    a: a6g.gh9Y
                };
                var Ii8a = btY9P[br7k[0]];
                if (!!Ii8a) return !!Ii8a(F7y, br7k[1]);
                V7O = br7k[1]
            }
            return !!a6g.gh9Y(F7y, V7O) || !!a6g.t7m(F7y, V7O) || a6g.bE8w(F7y, V7O)
        };
        return function (d7e) {
            if (!d7e) return null;
            var F7y = d7e.target || d7e.srcElement,
                dV9M = arguments[1];
            if (!dV9M) return F7y;
            if (k7d.fG9x(dV9M)) dV9M = Ih8Z.g7b(null, dV9M);
            if (k7d.gG0x(dV9M)) {
                while (F7y) {
                    if (!!dV9M(F7y)) return F7y;
                    F7y = F7y.parentNode
                }
                return null
            }
            return F7y
        }
    }();
    h7a.bh7a = function (d7e) {
        h7a.tr3x(d7e);
        h7a.cp8h(d7e);
        return this
    };
    h7a.tr3x = function (d7e) {
        if (!!d7e) {
            !!d7e.stopPropagation ? d7e.stopPropagation() : d7e.cancelBubble = !0
        }
        return this
    };
    h7a.cp8h = function (d7e) {
        if (!!d7e) {
            !!d7e.preventDefault ? d7e.preventDefault() : d7e.returnValue = !1
        }
        return this
    };
    h7a.cFK5P = function () {
        var qQ3x = !1;
        var cdn8f = function () {
            if (qQ3x) return;
            qQ3x = !0;
            h7a.s7l(document, "click", cdp8h, !0)
        };
        var cdp8h = function (d7e) {
            var F7y = h7a.W7P(d7e),
                cds8k = a6g.t7m(F7y, "stopped");
            if (cds8k == "true") {
                h7a.bh7a(d7e);
                a6g.t7m(F7y, "stopped", "false")
            }
        };
        return function (d7e) {
            if (!d7e) return;
            if (d7e.type == "click") {
                h7a.bh7a(d7e);
                return
            }
            cdn8f();
            a6g.t7m(h7a.W7P(d7e), "stopped", "true")
        }
    }();
    h7a.jB0x = function (d7e) {
        return d7e.pageX != null ? d7e.pageX : d7e.clientX + a6g.oy2x().scrollLeft
    };
    h7a.mf1x = function (d7e) {
        return d7e.pageY != null ? d7e.pageY : d7e.clientY + a6g.oy2x().scrollTop
    };
    h7a.z7s = cY8Q.z7s = function (F7y, u7n, e7d) {
        var bf7Y = be7X.Ct6n(F7y, u7n);
        if (!!bf7Y) be7X.bjh6b(bf7Y[0], bf7Y[1], e7d);
        return this
    };
    c7f("dbg").dumpEV = function () {
        return R7K
    };
    cY8Q.isChange = !0
})();
(function () {
    var o = !0,
        w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = {
                    toString: 1
                }, f).toString != m) p = function (a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function (a, f) {
                var c = 0,
                    b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {},
                        b = m.call(a) == "[object Function]",
                        d;
                    for (d in a)!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a)!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)!(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function (a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                f = f + L[e];
                                break;
                            default:
                                if (e < 32) {
                                    f = f + ("\\u00" + u(2, e.toString(16)));
                                    break
                                }
                                f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function (a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, A, j = function () {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                b++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                c = s ? a.charAt(b) : a[b];
                                b++;
                                return c;
                            case 34:
                                c = "@";
                                for (b++; b < f;) {
                                    e = a.charCodeAt(b);
                                    if (e < 32) j();
                                    else if (e == 92) {
                                        e = a.charCodeAt(++b);
                                        switch (e) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            c = c + N[e];
                                            b++;
                                            break;
                                        case 117:
                                            d = ++b;
                                            for (h = b + 4; b < h; b++) {
                                                e = a.charCodeAt(b);
                                                e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                            }
                                            c = c + M("0x" + a.slice(d, b));
                                            break;
                                        default:
                                            j()
                                        }
                                    } else {
                                        if (e == 34) break;
                                        e = a.charCodeAt(b);
                                        for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                        c = c + a.slice(d, b)
                                    }
                                }
                                if (a.charCodeAt(b) == 34) {
                                    b++;
                                    return c
                                }
                                j();
                            default:
                                d = b;
                                if (e == 45) {
                                    k = o;
                                    e = a.charCodeAt(++b)
                                }
                                if (e >= 48 && e <= 57) {
                                    for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                    if (a.charCodeAt(b) == 46) {
                                        for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                        h == b && j();
                                        b = h
                                    }
                                    e = a.charCodeAt(b);
                                    if (e == 101 || e == 69) {
                                        e = a.charCodeAt(++b);
                                        (e == 43 || e == 45) && b++;
                                        for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                        h == b && j();
                                        b = h
                                    }
                                    return +a.slice(d, b)
                                }
                                k && j();
                                if (a.slice(b, b + 4) == "true") {
                                    b = b + 4;
                                    return o
                                }
                                if (a.slice(b, b + 5) == "false") {
                                    b = b + 5;
                                    return false
                                }
                                if (a.slice(b, b + 4) == "null") {
                                    b = b + 4;
                                    return w
                                }
                                j()
                            }
                        }
                        return "$"
                    },
                    F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else j();
                                        (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function (a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function (a) {
                                I(d, a, c)
                            });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c7f = NEJ.P,
        N7G = c7f("nej.p");
    if (N7G.nj1x.trident0) return;
    JSON.parse = JSON.parse.eB9s(function (d7e) {
        var cI8A = d7e.args[0] || "";
        if (cI8A.length >= 5e5) {
            d7e.stopped = !0;
            d7e.value = eval("(" + cI8A + ")")
        }
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        em9d = c7f("nej.g"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        be7X = c7f("nej.h"),
        cY8Q = c7f("nej.x"),
        Ij8b, bhO6I = {},
        R7K = document.createDocumentFragment();
    a6g.lv1x = cY8Q.lv1x = function (F7y) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return;
        var C7v = !!F7y.id ? F7y.id : "auto-id-" + k7d.Oe0x(16);
        F7y.id = C7v;
        if (a6g.B7u(C7v) != F7y) bhO6I[C7v] = F7y;
        return C7v
    };
    a6g.B7u = cY8Q.B7u = function (F7y) {
        var f7c = bhO6I["" + F7y];
        if (!!f7c) return f7c;
        if (!k7d.fG9x(F7y) && !k7d.wg4k(F7y)) return F7y;
        return document.getElementById(F7y)
    };
    a6g.dk8c = cY8Q.dk8c = function (F7y, dZ9Q) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return null;
        var i7b = be7X.bjx6r(F7y);
        if (!!dZ9Q) k7d.no2x(i7b, function (f7c, r7k) {
            if (!a6g.bE8w(f7c, dZ9Q)) i7b.splice(r7k, 1)
        });
        return i7b
    };
    a6g.H7A = cY8Q.H7A = function (F7y, fK9B) {
        F7y = a6g.B7u(F7y);
        return !F7y ? null : be7X.bjO6I(F7y, fK9B.trim())
    };
    a6g.bKU3x = cY8Q.bKU3x = function (F7y) {
        F7y = a6g.B7u(F7y);
        if (!!F7y) {
            F7y = F7y.parentNode;
            while (!!F7y) {
                if (F7y.scrollHeight > F7y.clientHeight) break;
                F7y = F7y.parentNode
            }
            if (!!F7y) return F7y
        }
        var oZ2x = document.body.scrollHeight,
            BY6S = document.documentElement.scrollHeight;
        return BY6S >= oZ2x ? document.documentElement : document.body
    };
    a6g.oy2x = function () {
        var bKV3x = function (i7b) {
            var o7h = 0;
            k7d.bd7W(i7b, function (eE9v) {
                if (!eE9v) return;
                if (!o7h) {
                    o7h = eE9v
                } else {
                    o7h = Math.min(o7h, eE9v)
                }
            });
            return o7h
        };
        return function (wK4O) {
            var Il8d = wK4O || document,
                BC6w = Il8d.body,
                Bw6q = Il8d.documentElement,
                o7h = {
                    scrollTop: Math.max(BC6w.scrollTop, Bw6q.scrollTop),
                    scrollLeft: Math.max(BC6w.scrollLeft, Bw6q.scrollLeft),
                    clientWidth: bKV3x([BC6w.clientWidth, BC6w.offsetWidth, Bw6q.clientWidth, Bw6q.offsetWidth]),
                    clientHeight: bKV3x([BC6w.clientHeight, BC6w.offsetHeight, Bw6q.clientHeight, Bw6q.offsetHeight])
                };
            o7h.scrollWidth = Math.max(o7h.clientWidth, BC6w.scrollWidth, Bw6q.scrollWidth);
            o7h.scrollHeight = Math.max(o7h.clientHeight, BC6w.scrollHeight, Bw6q.scrollHeight);
            return o7h
        }
    }();
    a6g.cFD5I = function (fo9f, oV2x) {
        var o7h = NEJ.X({}, oV2x),
            bKW3x = fo9f.width / fo9f.height,
            bcG4K = oV2x.width / oV2x.height;
        if (bKW3x > bcG4K && oV2x.height > fo9f.height) {
            o7h.height = fo9f.height;
            o7h.width = o7h.height * bcG4K
        }
        if (bKW3x < bcG4K && oV2x.width > fo9f.width) {
            o7h.width = fo9f.width;
            o7h.height = o7h.width / bcG4K
        }
        return o7h
    };
    a6g.cFB5G = function () {
        var dh8Z = /\s+/;
        var vE4I = {
            left: function () {
                return 0
            }, center: function (hx0x, oV2x) {
                return (hx0x.width - oV2x.width) / 2
            }, right: function (hx0x, oV2x) {
                return hx0x.width - oV2x.width
            }, top: function () {
                return 0
            }, middle: function (hx0x, oV2x) {
                return (hx0x.height - oV2x.height) / 2
            }, bottom: function (hx0x, oV2x) {
                return hx0x.height - oV2x.height
            }
        };
        return function (hx0x, oV2x, nJ2x) {
            var o7h = {},
                br7k = (nJ2x || "").split(dh8Z),
                gx0x = vE4I[br7k[1]] || vE4I.middle,
                gS0x = vE4I[br7k[0]] || vE4I.center;
            o7h.top = gx0x(hx0x, oV2x);
            o7h.left = gS0x(hx0x, oV2x);
            return o7h
        }
    }();
    a6g.tN3x = cY8Q.tN3x = function (F7y, dZ9Q) {
        be7X.bnO8G(F7y, dZ9Q || a6g.t7m(F7y, "hover") || "js-hover");
        return this
    };
    a6g.Ip8h = cY8Q.Ip8h = function (F7y) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return;
        be7X.bov8n(F7y)
    };
    a6g.cdz8r = cY8Q.cdz8r = function () {
        var R7K = {},
            bKZ3x = 2;
        var cei9Z = function (C7v, dZ9Q, d7e) {
            R7K[C7v] = [h7a.jB0x(d7e), h7a.mf1x(d7e)];
            a6g.y7r(C7v, dZ9Q)
        };
        var cem9d = function (C7v, dZ9Q, d7e) {
            var bM8E = R7K[C7v];
            if (!k7d.eJ9A(bM8E)) return;
            var ceC9t = Math.abs(h7a.jB0x(d7e) - bM8E[0]),
                cga9R = Math.abs(h7a.mf1x(d7e) - bM8E[1]);
            if (ceC9t > bKZ3x || cga9R > bKZ3x) boI8A(C7v, dZ9Q)
        };
        var boI8A = function (C7v, dZ9Q) {
            if (k7d.eJ9A(R7K[C7v])) {
                R7K[C7v] = -1;
                a6g.x7q(C7v, dZ9Q)
            }
        };
        return function (F7y, dZ9Q) {
            var C7v = a6g.lv1x(F7y);
            if (!C7v || R7K[C7v] != null) return;
            R7K[C7v] = -1;
            dZ9Q = dZ9Q || a6g.t7m(C7v, "highlight") || "js-highlight";
            h7a.s7l(C7v, "touchstart", cei9Z.g7b(null, C7v, dZ9Q));
            h7a.s7l(document, "touchmove", cem9d.g7b(null, C7v, dZ9Q));
            h7a.s7l(document, "touchend", boI8A.g7b(null, C7v, dZ9Q));
            h7a.s7l(document, "touchcancel", boI8A.g7b(null, C7v, dZ9Q))
        }
    }();
    a6g.Bd6X = cY8Q.Bd6X = function () {
        var cgb9S = function (C7v, dZ9Q, ciR0x) {
            var F7y = a6g.B7u(C7v),
                d7e = {
                    clazz: dZ9Q,
                    target: F7y
                };
            if (a6g.bE8w(F7y, dZ9Q)) {
                d7e.toggled = !1;
                a6g.x7q(F7y, dZ9Q)
            } else {
                d7e.toggled = !0;
                a6g.y7r(F7y, dZ9Q)
            }
            ciR0x.call(null, d7e)
        };
        return function (F7y, e7d) {
            F7y = a6g.B7u(F7y);
            if (!!F7y) {
                var im0x = {
                    ontoggle: bs8k,
                    clazz: "js-toggle",
                    element: F7y.parentNode
                };
                if (k7d.fG9x(e7d)) {
                    var f7c = a6g.B7u(e7d);
                    !!f7c ? im0x.element = f7c : im0x.clazz = e7d
                } else {
                    NEJ.EX(im0x, e7d);
                    im0x.element = a6g.B7u(im0x.element)
                }
                var C7v = a6g.lv1x(im0x.element);
                h7a.s7l(F7y, "click", cgb9S.g7b(null, C7v, im0x.clazz, im0x.ontoggle || bs8k))
            }
            return this
        }
    }();
    a6g.mP1x = cY8Q.mP1x = function (F7y, e7d) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return;
        var fl9c = 0,
            dZ9Q = "js-focus";
        if (k7d.wg4k(e7d)) {
            fl9c = e7d
        } else if (k7d.fG9x(e7d)) {
            dZ9Q = e7d
        } else if (k7d.lw1x(e7d)) {
            fl9c = e7d.mode || fl9c;
            dZ9Q = e7d.clazz || dZ9Q
        }
        var D7w = parseInt(a6g.t7m(F7y, "mode"));
        if (!isNaN(D7w)) fl9c = D7w;
        D7w = a6g.t7m(F7y, "focus");
        if (!!D7w) dZ9Q = D7w;
        be7X.bri9Z(F7y, fl9c, dZ9Q);
        return this
    };
    a6g.dg8Y = function () {
        var bz8r = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function (fB9s, fK9B, bI8A) {
            var F7y = document.createElement(fB9s);
            NEJ.X(F7y, bz8r[fB9s.toLowerCase()]);
            if (!!fK9B) F7y.className = fK9B;
            bI8A = a6g.B7u(bI8A);
            if (!!bI8A) bI8A.appendChild(F7y);
            return F7y
        }
    }();
    a6g.bdk4o = function () {
        var ckz0x = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ckR0x = function (V7O) {
            V7O = V7O.trim();
            if (!V7O) return a6g.dg8Y("iframe");
            var eK9B;
            try {
                eK9B = document.createElement('<iframe name="' + V7O + '"></iframe>');
                eK9B.frameBorder = 0
            } catch (e) {
                eK9B = a6g.dg8Y("iframe");
                eK9B.name = V7O
            }
            return eK9B
        };
        return function (e7d) {
            e7d = e7d || bb7U;
            var eK9B = ckR0x(e7d.name || "");
            if (!e7d.visible) eK9B.style.display = "none";
            if (k7d.gG0x(e7d.onload)) h7a.s7l(eK9B, "load", function (d7e) {
                if (!eK9B.src) return;
                h7a.hd0x(eK9B, "load");
                e7d.onload(d7e)
            });
            var bI8A = e7d.parent;
            if (k7d.gG0x(bI8A)) {
                try {
                    bI8A(eK9B)
                } catch (e) {}
            } else {
                (a6g.B7u(bI8A) || document.body).appendChild(eK9B)
            }
            var cS8K = e7d.src || ckz0x();
            window.setTimeout(function () {
                eK9B.src = cS8K
            }, 0);
            return eK9B
        }
    }();
    a6g.cJ8B = cY8Q.cJ8B = function () {
        var bNW4a = function (xJ5O) {
            xJ5O.src = em9d.bkx6r
        };
        var bOw4A = function (eh9Y) {
            eh9Y.src = "about:blank"
        };
        return function (F7y, cml1x) {
            F7y = a6g.B7u(F7y);
            if (!F7y) return this;
            if (!cml1x) h7a.hd0x(F7y);
            delete bhO6I[F7y.id];
            var fB9s = F7y.tagName;
            if (fB9s == "IFRAME") {
                bOw4A(F7y)
            } else if (fB9s == "IMG") {
                bNW4a(F7y)
            } else if (!!F7y.getElementsByTagName) {
                k7d.bd7W(F7y.getElementsByTagName("img"), bNW4a);
                k7d.bd7W(F7y.getElementsByTagName("iframe"), bOw4A)
            }
            if (!!F7y.parentNode) {
                F7y.parentNode.removeChild(F7y)
            }
            return this
        }
    }();
    a6g.mY1x = cY8Q.mY1x = function (F7y) {
        F7y = a6g.B7u(F7y);
        if (!!F7y) R7K.appendChild(F7y);
        return this
    };
    a6g.bOO4S = cY8Q.bOO4S = function (F7y) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return;
        k7d.no2x(F7y.childNodes, function (f7c) {
            a6g.cJ8B(f7c)
        })
    };
    a6g.Iv8n = cY8Q.Iv8n = function () {
        var dZ9Q, gK0x = /\s+/;
        var cns1x = function () {
            if (!!dZ9Q) return;
            dZ9Q = a6g.tO3x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a6g.bOQ4U()
        };
        return function (F7y, e7d) {
            F7y = a6g.B7u(F7y);
            if (!F7y) return;
            cns1x();
            e7d = e7d || bb7U;
            var bI8A = F7y.parentNode;
            if (!a6g.bE8w(bI8A, dZ9Q)) {
                bI8A = a6g.dg8Y("span", dZ9Q);
                F7y.insertAdjacentElement("beforeBegin", bI8A);
                bI8A.appendChild(F7y)
            }
            var bOR4V = e7d.nid || "",
                f7c = a6g.H7A(bI8A, bOR4V || dZ9Q + "-show")[0];
            if (!f7c) {
                var dY9P = ((e7d.clazz || "") + " " + bOR4V).trim();
                dY9P = dZ9Q + "-show" + (!dY9P ? "" : " ") + dY9P;
                f7c = a6g.dg8Y(e7d.tag || "span", dY9P);
                bI8A.appendChild(f7c)
            }
            var dY9P = e7d.clazz;
            if (!!dY9P) {
                dY9P = (dY9P || "").trim().split(gK0x)[0] + "-parent";
                a6g.y7r(bI8A, dY9P)
            }
            return f7c
        }
    }();
    a6g.t7m = cY8Q.t7m = function () {
        var beN5S = {},
            fB9s = "data-",
            dh8Z = /\-(.{1})/gi;
        var Gd7W = function (F7y) {
            var C7v = a6g.lv1x(F7y);
            if (!!beN5S[C7v]) return;
            var bz8r = {};
            k7d.bd7W(F7y.attributes, function (f7c) {
                var J7C = f7c.nodeName;
                if (J7C.indexOf(fB9s) != 0) return;
                J7C = J7C.replace(fB9s, "").replace(dh8Z, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bz8r[J7C] = f7c.nodeValue || ""
            });
            beN5S[C7v] = bz8r
        };
        return function (F7y, J7C, D7w) {
            F7y = a6g.B7u(F7y);
            if (!F7y) return null;
            var bcn4r = F7y.dataset;
            if (!bcn4r) {
                Gd7W(F7y);
                bcn4r = beN5S[F7y.id]
            }
            if (D7w !== undefined) bcn4r[J7C] = D7w;
            return bcn4r[J7C]
        }
    }();
    a6g.gh9Y = cY8Q.gh9Y = function (F7y, V7O, D7w) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return "";
        if (D7w !== undefined && !!F7y.setAttribute) F7y.setAttribute(V7O, D7w);
        return be7X.btl9c(F7y, V7O)
    };
    a6g.nH2x = function (dT9K) {
        var rz3x = document.createElement("div");
        rz3x.innerHTML = dT9K;
        var i7b = a6g.dk8c(rz3x);
        return i7b.length > 1 ? rz3x : i7b[0]
    };
    a6g.cnH1x = cY8Q.cnH1x = function (F7y) {
        F7y = a6g.B7u(F7y);
        return !F7y ? "" : be7X.bfH5M(F7y)
    };
    a6g.bPb4f = function (Cu6o) {
        Cu6o = (Cu6o || "").trim();
        return !Cu6o ? null : be7X.bfQ5V(Cu6o)
    };
    a6g.cod1x = function (cG8y, u7n) {
        cG8y = cG8y || "";
        switch (u7n) {
        case "xml":
            cG8y = a6g.bPb4f(cG8y);
            break;
        case "json":
            try {
                cG8y = JSON.parse(cG8y)
            } catch (ex) {
                cG8y = null
            }
            break
        }
        return cG8y
    };
    a6g.hO0x = cY8Q.hO0x = function () {
        var coh1x = function (F7y) {
            return F7y == document.body || F7y == document.documentElement
        };
        return function (ea9R, nb1x) {
            ea9R = a6g.B7u(ea9R);
            if (!ea9R) return null;
            nb1x = a6g.B7u(nb1x) || null;
            var o7h = {
                    x: 0,
                    y: 0
                },
                bhJ6D, do8g, bci4m;
            while (!!ea9R && ea9R != nb1x) {
                bhJ6D = coh1x(ea9R);
                do8g = bhJ6D ? 0 : ea9R.scrollLeft;
                bci4m = parseInt(a6g.df8X(ea9R, "borderLeftWidth")) || 0;
                o7h.x += ea9R.offsetLeft + bci4m - do8g;
                do8g = bhJ6D ? 0 : ea9R.scrollTop;
                bci4m = parseInt(a6g.df8X(ea9R, "borderTopWidth")) || 0;
                o7h.y += ea9R.offsetTop + bci4m - do8g;
                ea9R = ea9R.offsetParent
            }
            return o7h
        }
    }();
    a6g.nn2x = cY8Q.nn2x = function (F7y) {
        var bi7b = a6g.hO0x(F7y);
        window.scrollTo(bi7b.x, bi7b.y);
        return this
    };
    a6g.cEv5A = function (sF3x) {
        sF3x = (sF3x || "").trim();
        return be7X.bFT2x(sF3x)
    };
    a6g.cok1x = cY8Q.cok1x = function (F7y, V7O, bz8r) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return this;
        var D7w = be7X.bGJ2x(V7O, bz8r);
        if (!D7w) return this;
        a6g.ba7T(F7y, "transform", D7w);
        return this
    };
    a6g.eY9P = cY8Q.eY9P = function (F7y, bz8r) {
        F7y = a6g.B7u(F7y);
        if (!!F7y) k7d.eC9t(bz8r, function (D7w, V7O) {
            a6g.ba7T(F7y, V7O, D7w)
        });
        return this
    };
    a6g.coo1x = cY8Q.coo1x = function (ge9V, e7d) {
        ge9V = a6g.B7u(ge9V);
        if (!ge9V) return {
            start: 0,
            end: 0
        };
        if (k7d.wg4k(e7d)) e7d = {
            start: e7d,
            end: e7d
        };
        if (e7d != null) {
            if (e7d.end == null) e7d.end = e7d.start || 0;
            be7X.boW8O(ge9V, e7d)
        } else {
            e7d = be7X.bqL9C(ge9V)
        }
        return e7d
    };
    a6g.ba7T = cY8Q.ba7T = function (F7y, V7O, D7w) {
        F7y = a6g.B7u(F7y);
        if (!!F7y) be7X.bkE7x(F7y, V7O, D7w);
        return this
    };
    a6g.df8X = cY8Q.df8X = function (F7y, V7O) {
        F7y = a6g.B7u(F7y);
        if (!F7y) return "";
        var hc0x = !window.getComputedStyle ? F7y.currentStyle || bb7U : window.getComputedStyle(F7y, null);
        return hc0x[be7X.bGK2x(V7O)] || ""
    };
    a6g.bPk4o = function () {
        var dh8Z = /[\s\r\n]+/gi;
        return function (ch8Z) {
            ch8Z = (ch8Z || "").trim().replace(dh8Z, " ");
            if (!ch8Z) return;
            var f7c = a6g.dg8Y("style");
            document.head.appendChild(f7c);
            be7X.bpq8i(f7c, be7X.cBQ4U(ch8Z));
            return f7c
        }
    }();
    a6g.bPl4p = function (yu5z) {
        try {
            yu5z = yu5z.trim();
            if (!!yu5z) return (new Function(yu5z))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a6g.tO3x = function () {
        var dh8Z = /#<.*?>/g,
            gJ0x = +(new Date);
        return function (kh1x) {
            if (!Ij8b) Ij8b = [];
            var fK9B = "auto-" + gJ0x++;
            Ij8b.push(kh1x.replace(dh8Z, fK9B));
            return fK9B
        }
    }();
    a6g.bOQ4U = function () {
        if (!!Ij8b) {
            a6g.bPk4o(Ij8b.join(""));
            Ij8b = null
        }
        return this
    };
    a6g.cEq5v = function (ch8Z, kh1x) {
        ch8Z = a6g.B7u(ch8Z);
        return !ch8Z ? null : be7X.bqi9Z(ch8Z, kh1x)
    };
    a6g.y7r = cY8Q.y7r = function () {
        be7X.bjP6J.apply(be7X, arguments);
        return this
    };
    a6g.x7q = cY8Q.x7q = function () {
        be7X.bkd6X.apply(be7X, arguments);
        return this
    };
    a6g.fb9S = cY8Q.fb9S = function () {
        be7X.Np9g.apply(be7X, arguments);
        return this
    };
    a6g.bE8w = cY8Q.bE8w = function () {
        return be7X.bmV7O.apply(be7X, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cY8Q.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fx9o = NEJ.R,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        be7X = c7f("nej.h"),
        k7d = c7f("nej.u");
    var Gx7q = function (j7c, u7n) {
        try {
            u7n = u7n.toLowerCase();
            if (j7c === null) return u7n == "null";
            if (j7c === undefined) return u7n == "undefined";
            return bb7U.toString.call(j7c).toLowerCase() == "[object " + u7n + "]"
        } catch (e) {
            return !1
        }
    };
    k7d.gG0x = function (j7c) {
        return Gx7q(j7c, "function")
    };
    k7d.fG9x = function (j7c) {
        return Gx7q(j7c, "string")
    };
    k7d.wg4k = function (j7c) {
        return Gx7q(j7c, "number")
    };
    k7d.cEj5o = function (j7c) {
        return Gx7q(j7c, "boolean")
    };
    k7d.GY7R = function (j7c) {
        return Gx7q(j7c, "date")
    };
    k7d.eJ9A = function (j7c) {
        return Gx7q(j7c, "array")
    };
    k7d.lw1x = function (j7c) {
        return Gx7q(j7c, "object")
    };
    k7d.fy9p = function () {
        var dh8Z = /[^\x00-\xfff]/g;
        return function (bo7h) {
            return ("" + (bo7h || "")).replace(dh8Z, "**").length
        }
    }();
    k7d.di8a = function (i7b, p7i) {
        var dV9M = k7d.gG0x(p7i) ? p7i : function (D7w) {
                return D7w === p7i
            },
            r7k = k7d.eC9t(i7b, dV9M);
        return r7k != null ? r7k : -1
    };
    k7d.cEe5j = function () {
        var bQd5i;
        var OS0x = function (i7b, oD2x, oA2x) {
            if (oD2x > oA2x) return -1;
            var DO6I = Math.ceil((oD2x + oA2x) / 2),
                o7h = bQd5i(i7b[DO6I], DO6I, i7b);
            if (o7h == 0) return DO6I;
            if (o7h < 0) return OS0x(i7b, oD2x, DO6I - 1);
            return OS0x(i7b, DO6I + 1, oA2x)
        };
        return function (i7b, Ii8a) {
            bQd5i = Ii8a || bs8k;
            return OS0x(i7b, 0, i7b.length - 1)
        }
    }();
    k7d.no2x = function (i7b, cK8C, P7I) {
        if (!i7b || !i7b.length || !k7d.gG0x(cK8C)) return null;
        for (var i = i7b.length - 1; i >= 0; i--)
            if (!!cK8C.call(P7I, i7b[i], i, i7b)) return i;
        return null
    };
    k7d.bd7W = function (i7b, cK8C, P7I) {
        if (!i7b || !i7b.length || !k7d.gG0x(cK8C)) return this;
        if (!!i7b.forEach) {
            i7b.forEach(cK8C, P7I);
            return this
        }
        for (var i = 0, l = i7b.length; i < l; i++) cK8C.call(P7I, i7b[i], i, i7b);
        return this
    };
    k7d.eC9t = function (i7b, cK8C, P7I) {
        if (!i7b || !k7d.gG0x(cK8C)) return null;
        if (i7b.length != null) {
            if (i7b.length > 0)
                for (var i = 0, l = i7b.length; i < l; i++)
                    if (!!cK8C.call(P7I, i7b[i], i, i7b)) return i
        }
        if (k7d.lw1x(i7b)) {
            for (var x in i7b)
                if (i7b.hasOwnProperty(x) && !!cK8C.call(P7I, i7b[x], x, i7b)) return x
        }
        return null
    };
    k7d.cqe1x = function (jg0x, cqP2x, e7d) {
        jg0x = jg0x || [];
        e7d = e7d || bb7U;
        var bQx5C = !!e7d.union,
            wy4C = !!e7d.begin,
            bbQ4U = e7d.compare,
            crm2x = bQx5C && wy4C ? k7d.no2x : k7d.bd7W;
        crm2x(cqP2x, function (p7i) {
            if (!!bbQ4U) bbQ4U = bbQ4U.ew9n(p7i);
            var r7k = k7d.di8a(jg0x, bbQ4U || p7i);
            if (r7k >= 0) jg0x.splice(r7k, 1);
            if (bQx5C) jg0x[wy4C ? "unshift" : "push"](p7i)
        });
        return jg0x
    };
    k7d.Fl7e = function (bz8r, bo7h) {
        if (!bz8r || !bo7h || !bo7h.replace) return bo7h || "";
        return bo7h.replace(bz8r.r, function ($1) {
            var o7h = bz8r[!bz8r.i ? $1.toLowerCase() : $1];
            return o7h != null ? o7h : $1
        })
    };
    k7d.dG9x = function () {
        var bz8r = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bo7h) {
            return k7d.Fl7e(bz8r, bo7h)
        }
    }();
    k7d.Ay5D = function () {
        var bz8r = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bo7h) {
            return k7d.Fl7e(bz8r, bo7h)
        }
    }();
    k7d.if0x = function () {
        var bz8r = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            crU2x = ["上午", "下午"],
            csn2x = ["A.M.", "P.M."],
            bpC8u = ["日", "一", "二", "三", "四", "五", "六"],
            ctA2x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cuc2x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var OU0x = function (gR0x) {
            gR0x = parseInt(gR0x) || 0;
            return (gR0x < 10 ? "0" : "") + gR0x
        };
        var cuw2x = function (pV2x) {
            return pV2x < 12 ? 0 : 1
        };
        return function (bA8s, IB8t, cuO2x) {
            if (!bA8s || !IB8t) return "";
            bA8s = k7d.bbD4H(bA8s);
            bz8r.yyyy = bA8s.getFullYear();
            bz8r.yy = ("" + bz8r.yyyy).substr(2);
            bz8r.M = bA8s.getMonth() + 1;
            bz8r.MM = OU0x(bz8r.M);
            bz8r.eM = cuc2x[bz8r.M - 1];
            bz8r.cM = ctA2x[bz8r.M - 1];
            bz8r.d = bA8s.getDate();
            bz8r.dd = OU0x(bz8r.d);
            bz8r.H = bA8s.getHours();
            bz8r.HH = OU0x(bz8r.H);
            bz8r.m = bA8s.getMinutes();
            bz8r.mm = OU0x(bz8r.m);
            bz8r.s = bA8s.getSeconds();
            bz8r.ss = OU0x(bz8r.s);
            bz8r.ms = bA8s.getMilliseconds();
            bz8r.w = bpC8u[bA8s.getDay()];
            var bSl6f = cuw2x(bz8r.H);
            bz8r.ct = crU2x[bSl6f];
            bz8r.et = csn2x[bSl6f];
            if (!!cuO2x) {
                bz8r.H = bz8r.H % 12
            }
            return k7d.Fl7e(bz8r, IB8t)
        }
    }();
    k7d.bbD4H = function (bA8s) {
        var da8S = bA8s;
        if (k7d.fG9x(bA8s)) da8S = new Date(Date.parse(bA8s));
        if (!k7d.GY7R(bA8s)) da8S = new Date(bA8s);
        return da8S
    };
    k7d.Ip8h = function (cxD3x, cyg3x) {
        return (new Number(cxD3x)).toFixed(cyg3x)
    };
    k7d.bte9V = function () {
        var gK0x = /([^\/:])\/.*$/,
            ku1x = /\/[^\/]+$/,
            HA7t = /[#\?]/,
            btt9k = location.href.split(/[?#]/)[0],
            sO3x = document.createElement("a");
        var btX9O = function (jE0x) {
            return (jE0x || "").indexOf("://") > 0
        };
        var bTI6C = function (jE0x) {
            return (jE0x || "").split(HA7t)[0].replace(ku1x, "/")
        };
        var cCs4w = function (jE0x, fT9K) {
            if (jE0x.indexOf("/") == 0) return fT9K.replace(gK0x, "$1") + jE0x;
            return bTI6C(fT9K) + jE0x
        };
        btt9k = bTI6C(btt9k);
        return function (jE0x, fT9K) {
            jE0x = (jE0x || "").trim();
            if (!btX9O(fT9K)) fT9K = btt9k;
            if (!jE0x) return fT9K;
            if (btX9O(jE0x)) return jE0x;
            jE0x = cCs4w(jE0x, fT9K);
            sO3x.href = jE0x;
            jE0x = sO3x.href;
            return btX9O(jE0x) ? jE0x : sO3x.getAttribute("href", 4)
        }
    }();
    k7d.cCu4y = function () {
        var dh8Z = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y7R) {
            if (dh8Z.test(Y7R || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k7d.bUI6C = function (G7z, im0x) {
        if (!G7z) return im0x;
        var V7O = G7z.tagName.toLowerCase(),
            i7b = a6g.dk8c(G7z);
        if (!i7b || !i7b.length) {
            im0x[V7O] = G7z.textContent || G7z.text || "";
            return im0x
        }
        var ck8c = {};
        im0x[V7O] = ck8c;
        k7d.bd7W(i7b, function (f7c) {
            k7d.bUI6C(f7c, ck8c)
        });
        return im0x
    };
    k7d.cDa4e = function (Cu6o) {
        try {
            return k7d.bUI6C(a6g.bPb4f(Cu6o), {})
        } catch (ex) {
            return null
        }
    };
    k7d.Pm0x = function (ib0x, Pt0x) {
        var im0x = {};
        k7d.bd7W((ib0x || "").split(Pt0x), function (V7O) {
            var bbt4x = V7O.split("=");
            if (!bbt4x || !bbt4x.length) return;
            var J7C = bbt4x.shift();
            if (!J7C) return;
            im0x[decodeURIComponent(J7C)] = decodeURIComponent(bbt4x.join("="))
        });
        return im0x
    };
    k7d.uX4b = function (gw0x, Pt0x, cCU4Y) {
        if (!gw0x) return "";
        var br7k = [];
        for (var x in gw0x) {
            br7k.push(encodeURIComponent(x) + "=" + (!!cCU4Y ? encodeURIComponent(gw0x[x]) : gw0x[x]))
        }
        return br7k.join(Pt0x || ",")
    };
    k7d.hv0x = function (bv8n) {
        return k7d.Pm0x(bv8n, "&")
    };
    k7d.cE8w = function (gw0x) {
        return k7d.uX4b(gw0x, "&", !0)
    };
    k7d.cCZ4d = function (gw0x) {
        return be7X.HV8N(gw0x)
    };
    k7d.cFH5M = function (i7b, dV9M) {
        var o7h = {};
        k7d.bd7W(i7b, function (p7i) {
            var J7C = p7i;
            if (!!dV9M) {
                J7C = dV9M(p7i)
            }
            o7h[J7C] = p7i
        });
        return o7h
    };
    k7d.cDb4f = function (gR0x, gc9T) {
        var cCS4W = ("" + gR0x).length,
            cCR4V = Math.max(1, parseInt(gc9T) || 0),
            do8g = cCR4V - cCS4W;
        if (do8g > 0) {
            gR0x = (new Array(do8g + 1)).join("0") + gR0x
        }
        return "" + gR0x
    };
    k7d.bbo4s = function (gw0x, V7O) {
        if (!k7d.eJ9A(V7O)) {
            try {
                delete gw0x[V7O]
            } catch (e) {
                gw0x[V7O] = undefined
            }
            return this
        }
        k7d.bd7W(V7O, k7d.bbo4s.g7b(k7d, gw0x));
        return this
    };
    k7d.Oe0x = function () {
        var bUH6B = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bq7j) {
            bq7j = bq7j || 10;
            var o7h = [];
            for (var i = 0, bUG6A; i < bq7j; ++i) {
                bUG6A = Math.floor(Math.random() * bUH6B.length);
                o7h.push(bUH6B.charAt(bUG6A))
            }
            return o7h.join("")
        }
    }();
    k7d.Ad5i = function (fF9w, fo9f) {
        return Math.floor(Math.random() * (fo9f - fF9w) + fF9w)
    };
    k7d.oh2x = function (bq7j) {
        bq7j = Math.max(0, Math.min(bq7j || 8, 30));
        var fF9w = Math.pow(10, bq7j - 1),
            fo9f = fF9w * 10;
        return k7d.Ad5i(fF9w, fo9f).toString()
    };
    k7d.bbn4r = function () {
        var gJ0x = +(new Date);
        return function () {
            return "" + gJ0x++
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fx9o = NEJ.R,
        bs8k = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        oG2x;
    if (!!N7G.cH8z) return;
    N7G.cH8z = NEJ.C();
    oG2x = N7G.cH8z.prototype;
    N7G.cH8z.A7t = function (e7d) {
        e7d = e7d || {};
        var cz8r = !!this.BD6x && this.BD6x.shift();
        if (!cz8r) {
            cz8r = new this(e7d);
            this.cCO4S = (this.cCO4S || 0) + 1
        }
        cz8r.bl7e(e7d);
        return cz8r
    };
    N7G.cH8z.T7M = function () {
        var Pw0x = function (p7i, r7k, i7b) {
            p7i.T7M();
            i7b.splice(r7k, 1)
        };
        return function (cz8r) {
            if (!cz8r) return null;
            if (!k7d.eJ9A(cz8r)) {
                if (!(cz8r instanceof this)) {
                    var fK9B = cz8r.constructor;
                    if (!!fK9B.T7M) fK9B.T7M(cz8r);
                    return null
                }
                if (cz8r == this.ff9W) delete this.ff9W;
                if (cz8r == this.Ae5j) delete this.Ae5j;
                cz8r.bD8v();
                if (!this.BD6x) this.BD6x = [];
                if (k7d.di8a(this.BD6x, cz8r) < 0) {
                    this.BD6x.push(cz8r)
                }
                return null
            }
            k7d.no2x(cz8r, Pw0x, this)
        }
    }();
    N7G.cH8z.gr9i = function (e7d) {
        e7d = e7d || {};
        if (!this.ff9W) this.ff9W = this.A7t(e7d);
        return this.ff9W
    };
    N7G.cH8z.bUF6z = function (e7d, rt3x) {
        e7d = e7d || {};
        if (!!rt3x && !!this.Ae5j) {
            this.Ae5j.T7M();
            delete this.Ae5j
        }
        if (!this.Ae5j) {
            this.Ae5j = this.A7t(e7d)
        } else {
            this.Ae5j.bl7e(e7d)
        }
        return this.Ae5j
    };
    oG2x.cx8p = function () {
        var gJ0x = +(new Date);
        return function () {
            this.id = gJ0x++;
            this.lW1x = {};
            this.bUE6y = {}
        }
    }();
    oG2x.bl7e = function (e7d) {
        this.bjI6C(e7d)
    };
    oG2x.bD8v = function () {
        this.hd0x();
        this.IJ8B()
    };
    oG2x.bX8P = function () {
        var gJ0x = +(new Date);
        var cCL4P = function (bf7Y) {
            if (!bf7Y || bf7Y.length < 3) return;
            this.bUE6y["de-" + gJ0x++] = bf7Y;
            h7a.s7l.apply(h7a, bf7Y)
        };
        return function (i7b) {
            k7d.bd7W(i7b, cCL4P, this)
        }
    }();
    oG2x.IJ8B = function () {
        var cCt4x = function (bf7Y, J7C, bz8r) {
            delete bz8r[J7C];
            h7a.mw1x.apply(h7a, bf7Y)
        };
        return function () {
            k7d.eC9t(this.bUE6y, cCt4x)
        }
    }();
    oG2x.cDf4j = function (dV9M) {
        dV9M = dV9M || bs8k;
        k7d.eC9t(this, function (DZ6T, J7C, bz8r) {
            if (!!DZ6T && !!DZ6T.T7M && !dV9M(DZ6T)) {
                delete bz8r[J7C];
                DZ6T.T7M()
            }
        })
    };
    oG2x.T7M = function () {
        this.constructor.T7M(this)
    };
    oG2x.bkb6V = function (u7n) {
        var d7e = this.lW1x[u7n.toLowerCase()];
        return !!d7e && d7e !== bs8k
    };
    oG2x.s7l = function (u7n, d7e) {
        this.xp4t.apply(this, arguments);
        return this
    };
    oG2x.mw1x = function (u7n, d7e) {
        var u7n = (u7n || "").toLowerCase(),
            ec9T = this.lW1x[u7n];
        if (!k7d.eJ9A(ec9T)) {
            if (ec9T == d7e) delete this.lW1x[u7n];
            return
        }
        k7d.no2x(ec9T, function (et9k, r7k, i7b) {
            if (et9k == d7e) i7b.splice(r7k, 1)
        })
    };
    oG2x.xp4t = function (u7n, d7e) {
        if (!!u7n && k7d.gG0x(d7e)) this.lW1x[u7n.toLowerCase()] = d7e;
        return this
    };
    oG2x.bjI6C = function () {
        var cCn4r = function (d7e, u7n) {
            this.xp4t(u7n, d7e)
        };
        return function (ec9T) {
            k7d.eC9t(ec9T, cCn4r, this);
            return this
        }
    }();
    oG2x.hd0x = function () {
        var bko6i = function (d7e, u7n) {
            this.hd0x(u7n)
        };
        return function (u7n) {
            var u7n = (u7n || "").toLowerCase();
            if (!!u7n) {
                delete this.lW1x[u7n]
            } else {
                k7d.eC9t(this.lW1x, bko6i, this)
            }
            return this
        }
    }();
    oG2x.bkp6j = function (u7n, d7e) {
        if (!u7n || !k7d.gG0x(d7e)) return this;
        u7n = u7n.toLowerCase();
        var ec9T = this.lW1x[u7n];
        if (!ec9T) {
            this.lW1x[u7n] = d7e;
            return this
        }
        if (!k7d.eJ9A(ec9T)) {
            this.lW1x[u7n] = [ec9T]
        }
        this.lW1x[u7n].push(d7e);
        return this
    };
    oG2x.z7s = function (u7n) {
        var d7e = this.lW1x[(u7n || "").toLowerCase()];
        if (!d7e) return this;
        var bf7Y = fx9o.slice.call(arguments, 1);
        if (!k7d.eJ9A(d7e)) return d7e.apply(this, bf7Y);
        k7d.bd7W(d7e, function (dt8l) {
            try {
                dt8l.apply(this, bf7Y)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N7G.bba4e = function () {
        var R7K = {};
        return function (C7v, fK9B, e7d) {
            var fj9a = fK9B.cCm4q;
            if (!fj9a) {
                fj9a = k7d.Oe0x(10);
                fK9B.cCm4q = fj9a
            }
            var J7C = C7v + "-" + fj9a,
                cz8r = R7K[J7C];
            if (!!e7d && !cz8r) {
                cz8r = fK9B.A7t(e7d);
                cz8r.T7M = cz8r.T7M.eB9s(function (d7e) {
                    delete R7K[J7C];
                    delete cz8r.T7M
                });
                R7K[J7C] = cz8r
            }
            return cz8r
        }
    }()
})();
(function () {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gy0x = function () {
        var da8S = new Date,
            cCl4p = +da8S,
            blH7A = 864e5;
        var cCj4n = function (V7O) {
            var rl3x = document.cookie,
                sx3x = "\\b" + V7O + "=",
                baW4a = rl3x.search(sx3x);
            if (baW4a < 0) return "";
            baW4a += sx3x.length - 2;
            var xm4q = rl3x.indexOf(";", baW4a);
            if (xm4q < 0) xm4q = rl3x.length;
            return rl3x.substring(baW4a, xm4q) || ""
        };
        return function (V7O, j7c) {
            if (j7c === undefined) return cCj4n(V7O);
            if (u.fG9x(j7c)) {
                if (!!j7c) {
                    document.cookie = V7O + "=" + j7c + ";";
                    return j7c
                }
                j7c = {
                    expires: -100
                }
            }
            j7c = j7c || o;
            var rl3x = V7O + "=" + (j7c.value || "") + ";";
            delete j7c.value;
            if (j7c.expires !== undefined) {
                da8S.setTime(cCl4p + j7c.expires * blH7A);
                j7c.expires = da8S.toGMTString()
            }
            rl3x += u.uX4b(j7c, ";");
            document.cookie = rl3x
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        it0x = c7f("nej.c"),
        em9d = c7f("nej.g"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        N7G = c7f("nej.ut.j"),
        k7d = c7f("nej.u"),
        b7g;
    if (!!N7G.IK8C) return;
    N7G.IK8C = NEJ.C();
    b7g = N7G.IK8C.O7H(I7B.cH8z);
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.pj2x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pj2x, e7d);
        var CP6J = it0x.B7u("csrf");
        if ((/^\/[^\/]/.test(this.pj2x.url) || this.pj2x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!CP6J.cookie && !!CP6J.param) {
            var bv8n = encodeURIComponent(CP6J.param) + "=" + encodeURIComponent(v7o.gy0x(CP6J.cookie) || ""),
                Pt0x = this.pj2x.url.indexOf("?") < 0 ? "?" : "&";
            this.pj2x.url += Pt0x + bv8n
        }
        this.baU4Y = e7d.headers || {};
        var bo7h = this.baU4Y[em9d.yg5l];
        if (bo7h == null) this.baU4Y[em9d.yg5l] = em9d.cil0x
    };
    b7g.bD8v = function () {
        this.bG8y();
        delete this.Af5k;
        delete this.pj2x;
        delete this.baU4Y
    };
    b7g.cCi4m = function (bo7h) {
        var bz8r = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pj2x.noescape) {
            return k7d.Fl7e(bz8r, bo7h)
        } else {
            return bo7h
        }
    };
    b7g.uT4X = function (d7e) {
        var ex9o = d7e.status;
        if (ex9o == -1) {
            this.z7s("onerror", {
                code: em9d.bBG1x,
                message: "请求[" + this.pj2x.url + "]超时！"
            });
            return
        }
        if (("" + ex9o).indexOf("2") != 0) {
            this.z7s("onerror", {
                data: ex9o,
                code: em9d.bie6Y,
                message: "服务器返回异常状态[" + ex9o + "]!",
                extData: d7e.result
            });
            return
        }
        this.z7s("onload", a6g.cod1x(this.cCi4m(d7e.result), this.pj2x.type))
    };
    b7g.co8g = bs8k;
    b7g.bpF8x = function (j7c) {
        var Y7R = this.pj2x.url;
        if (!Y7R) {
            this.z7s("onerror", {
                code: em9d.bua9R,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pj2x.data = j7c == null ? null : j7c;
            var d7e = {
                request: this.pj2x,
                headers: this.baU4Y
            };
            try {
                this.z7s("onbeforerequest", d7e)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.co8g(d7e)
        } catch (e) {
            this.z7s("onerror", {
                code: em9d.bie6Y,
                message: "请求[" + Y7R + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b7g.ks1x = bs8k
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        be7X = c7f("nej.h"),
        em9d = c7f("nej.g"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut.j"),
        R7K = {},
        PQ1x;
    if (!!N7G.baO4S) return;
    N7G.baO4S = NEJ.C();
    PQ1x = N7G.baO4S.O7H(N7G.IK8C);
    PQ1x.bD8v = function () {
        this.bG8y();
        window.clearTimeout(this.ed9U);
        delete this.ed9U;
        try {
            this.sk3x.onreadystatechange = bs8k;
            this.sk3x.abort()
        } catch (e) {}
        delete this.sk3x
    };
    PQ1x.co8g = function () {
        var cCh4l = function (D7w, J7C) {
            this.sk3x.setRequestHeader(J7C, D7w)
        };
        return function (e7d) {
            var gm9d = e7d.request,
                ph2x = e7d.headers;
            this.sk3x = be7X.bra9R();
            if (ph2x[em9d.yg5l] === em9d.EK7D) {
                delete ph2x[em9d.yg5l];
                this.sk3x.upload.onprogress = this.gv0x.g7b(this, 1);
                if (gm9d.data.tagName === "FORM") gm9d.data = new FormData(gm9d.data)
            }
            this.sk3x.onreadystatechange = this.gv0x.g7b(this, 2);
            if (gm9d.timeout != 0) {
                this.ed9U = window.setTimeout(this.gv0x.g7b(this, 3), gm9d.timeout)
            }
            this.sk3x.open(gm9d.method, gm9d.url, !gm9d.sync);
            k7d.eC9t(ph2x, cCh4l, this);
            if (!!this.pj2x.cookie && "withCredentials" in this.sk3x) this.sk3x.withCredentials = !0;
            this.sk3x.send(gm9d.data)
        }
    }();
    PQ1x.gv0x = function (u7n) {
        switch (u7n) {
        case 1:
            this.z7s("onuploading", arguments[1]);
            break;
        case 2:
            if (this.sk3x.readyState == 4) this.uT4X({
                status: this.sk3x.status,
                result: this.sk3x.responseText || ""
            });
            break;
        case 3:
            this.uT4X({
                status: -1
            });
            break
        }
    };
    PQ1x.ks1x = function () {
        this.uT4X({
            status: 0
        });
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var PT1x = {},
        baM4Q = [],
        bUv6p = /\s+/g,
        gJ0x = +(new Date),
        IL8D, bS8K, hE0x;
    var Eb6V = function () {
        var gK0x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            ku1x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            HA7t = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            btg9X = /^new\s+/,
            cCd4h = /['"]/;
        var cBZ4d = function (D7w) {
            if (gK0x.test(D7w)) return;
            D7w = D7w.split(".")[0].trim();
            if (!D7w || cCd4h.test(D7w)) return;
            D7w = D7w.replace(btg9X, "");
            try {
                if (HA7t.test(D7w)) return;
                hE0x[D7w] = 1
            } catch (e) {}
        };
        return function (bo7h) {
            bo7h = bo7h || "";
            if (!bo7h || gK0x.test(bo7h)) return;
            var br7k = bo7h.split(ku1x);
            for (var i = 0, l = br7k.length; i < l; i++) cBZ4d(br7k[i])
        }
    }();
    var cBY4c = function (dJ9A) {
        if (dJ9A[2] != "in") throw "bad for loop statement: " + dJ9A.join(" ");
        baM4Q.push(dJ9A[1]);
        Eb6V(dJ9A[3]);
        return "var __HASH__" + dJ9A[1] + " = " + dJ9A[3] + "," + dJ9A[1] + "," + dJ9A[1] + "_count=0;" + "if (!!__HASH__" + dJ9A[1] + ")" + "for(var " + dJ9A[1] + "_key in __HASH__" + dJ9A[1] + "){" + dJ9A[1] + " = __HASH__" + dJ9A[1] + "[" + dJ9A[1] + "_key];" + "if (typeof(" + dJ9A[1] + ')=="function") continue;' + dJ9A[1] + "_count++;"
    };
    var cBS4W = function () {
        var dJ9A = baM4Q[baM4Q.length - 1];
        return "}; if(!__HASH__" + dJ9A + "||!" + dJ9A + "_count){"
    };
    var cBP4T = function () {
        baM4Q.pop();
        return "};"
    };
    var cBO4S = function (dJ9A) {
        if (dJ9A[2] != "as") throw "bad for list loop statement: " + dJ9A.join(" ");
        var Qe1x = dJ9A[1].split("..");
        if (Qe1x.length > 1) {
            Eb6V(Qe1x[0]);
            Eb6V(Qe1x[1]);
            return "for(var " + dJ9A[3] + "," + dJ9A[3] + "_index=0," + dJ9A[3] + "_beg=" + Qe1x[0] + "," + dJ9A[3] + "_end=" + Qe1x[1] + "," + dJ9A[3] + "_length=parseInt(" + dJ9A[3] + "_end-" + dJ9A[3] + "_beg+1);" + dJ9A[3] + "_index<" + dJ9A[3] + "_length;" + dJ9A[3] + "_index++){" + dJ9A[3] + " = " + dJ9A[3] + "_beg+" + dJ9A[3] + "_index;"
        } else {
            Eb6V(dJ9A[1]);
            return "for(var __LIST__" + dJ9A[3] + " = " + dJ9A[1] + "," + dJ9A[3] + "," + dJ9A[3] + "_index=0," + dJ9A[3] + "_length=__LIST__" + dJ9A[3] + ".length;" + dJ9A[3] + "_index<" + dJ9A[3] + "_length;" + dJ9A[3] + "_index++){" + dJ9A[3] + " = __LIST__" + dJ9A[3] + "[" + dJ9A[3] + "_index];"
        }
    };
    var cBL4P = function (dJ9A) {
        if (!dJ9A || !dJ9A.length) return;
        dJ9A.shift();
        var V7O = dJ9A[0].split("(")[0];
        return "var " + V7O + " = function" + dJ9A.join("").replace(V7O, "") + "{var __OUT=[];"
    };
    var cBI4M = function (dJ9A) {
        if (!dJ9A[1]) throw "bad include statement: " + dJ9A.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var buF0x = function (kb1x, dJ9A) {
        Eb6V(dJ9A.slice(1).join(" "));
        return kb1x
    };
    var cBH4L = function (dJ9A) {
        return buF0x("if(", dJ9A)
    };
    var cBC4G = function (dJ9A) {
        return buF0x("}else if(", dJ9A)
    };
    var cBB4F = function (dJ9A) {
        return buF0x("var ", dJ9A)
    };
    bS8K = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cBH4L,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cBC4G,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cBY4c,
                pmin: 3
            },
            forelse: {
                pfix: cBS4W
            },
            "/for": {
                pfix: cBP4T
            },
            list: {
                pfix: cBO4S,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cBB4F,
                sfix: ";"
            },
            macro: {
                pfix: cBL4P
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function () {
                    IL8D = !0
                }
            },
            "/trim": {
                pfix: function () {
                    IL8D = null
                }
            },
            inline: {
                pfix: cBI4M,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function (kb1x) {
                return (kb1x || "") + "" + gJ0x
            }, "default": function (D7w, kg1x) {
                return D7w || kg1x
            }
        }
    };
    var cBy4C = function () {
        var cBx4B = /\\([\{\}])/g;
        return function (bo7h, jG0x) {
            bo7h = bo7h.replace(cBx4B, "$1");
            var dJ9A = bo7h.slice(1, -1).split(bUv6p),
                bg7Z = bS8K.def[dJ9A[0]];
            if (!bg7Z) {
                baz4D(bo7h, jG0x);
                return
            }
            if (!!bg7Z.pmin && bg7Z.pmin >= dJ9A.length) throw "Statement needs more parameters:" + bo7h;
            jG0x.push(!!bg7Z.pfix && typeof bg7Z.pfix != "string" ? bg7Z.pfix(dJ9A) : bg7Z.pfix || "");
            if (!!bg7Z.sfix) {
                if (dJ9A.length <= 1) {
                    if (!!bg7Z.pdft) jG0x.push(bg7Z.pdft)
                } else {
                    for (var i = 1, l = dJ9A.length; i < l; i++) {
                        if (i > 1) jG0x.push(" ");
                        jG0x.push(dJ9A[i])
                    }
                }
                jG0x.push(bg7Z.sfix)
            }
        }
    }();
    var bUm6g = function (IP8H, jG0x) {
        if (!IP8H || !IP8H.length) return;
        if (IP8H.length == 1) {
            var bfq5v = IP8H.pop();
            Eb6V(bfq5v);
            jG0x.push(bfq5v == "" ? '""' : bfq5v);
            return
        }
        var bfu5z = IP8H.pop().split(":");
        jG0x.push("__MDF['" + bfu5z.shift() + "'](");
        bUm6g(IP8H, jG0x);
        if (bfu5z.length > 0) {
            var bf7Y = bfu5z.join(":");
            Eb6V(bf7Y);
            jG0x.push("," + bf7Y)
        }
        jG0x.push(")")
    };
    var baz4D = function (bo7h, jG0x) {
        if (!bo7h) return;
        var xb4f = bo7h.split("\n");
        if (!xb4f || !xb4f.length) return;
        for (var i = 0, l = xb4f.length, hu0x; i < l; i++) {
            hu0x = xb4f[i];
            if (!!IL8D) {
                hu0x = hu0x.trim();
                if (!hu0x) continue
            }
            cBp4t(hu0x, jG0x);
            if (!!IL8D && i < l - 1) jG0x.push("__OUT.push('\\n');")
        }
    };
    var cBp4t = function () {
        var cBl4p = /\|\|/g,
            cBc4g = /#@@#/g;
        return function (bo7h, jG0x) {
            var Qr1x = "}",
                Qs1x = -1,
                bq7j = bo7h.length,
                wy4C, fR9I, IS8K, bai4m, Qz1x;
            while (Qs1x + Qr1x.length < bq7j) {
                wy4C = "${";
                fR9I = "}";
                IS8K = bo7h.indexOf(wy4C, Qs1x + Qr1x.length);
                if (IS8K < 0) break;
                if (bo7h.charAt(IS8K + 2) == "%") {
                    wy4C = "${%";
                    fR9I = "%}"
                }
                bai4m = bo7h.indexOf(fR9I, IS8K + wy4C.length);
                if (bai4m < 0) break;
                baf4j(bo7h.substring(Qs1x + Qr1x.length, IS8K), jG0x);
                Qz1x = bo7h.substring(IS8K + wy4C.length, bai4m).replace(cBl4p, "#@@#").split("|");
                for (var i = 0, l = Qz1x.length; i < l; Qz1x[i] = Qz1x[i].replace(cBc4g, "||"), i++);
                jG0x.push("__OUT.push(");
                bUm6g(Qz1x, jG0x);
                jG0x.push(");");
                Qr1x = fR9I;
                Qs1x = bai4m
            }
            baf4j(bo7h.substring(Qs1x + Qr1x.length), jG0x)
        }
    }();
    var baf4j = function () {
        var bz8r = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cBa4e = function (bo7h) {
            return (bo7h || "").replace(bz8r.r, function ($1) {
                return bz8r[$1] || $1
            })
        };
        return function (bo7h, jG0x) {
            if (!bo7h) return;
            jG0x.push("__OUT.push('" + cBa4e(bo7h) + "');")
        }
    }();
    var cAZ4d = function () {
        var cAY4c = /\t/g,
            cAX4b = /\n/g,
            cAT4X = /\r\n?/g;
        var bUd6X = function (bo7h, wy4C) {
            var r7k = bo7h.indexOf("}", wy4C + 1);
            while (bo7h.charAt(r7k - 1) == "\\") {
                r7k = bo7h.indexOf("}", r7k + 1)
            }
            return r7k
        };
        var cAO4S = function () {
            var br7k = [],
                GL7E = arguments[0];
            for (var x in GL7E) {
                x = (x || "").trim();
                if (!x) continue;
                br7k.push(x + "=$v('" + x + "')")
            }
            return br7k.length > 0 ? "var " + br7k.join(",") + ";" : ""
        };
        return function (bo7h) {
            hE0x = {};
            bo7h = bo7h.replace(cAT4X, "\n").replace(cAY4c, "    ");
            var rM3x = ["if(!__CTX) return '';", ""];
            rM3x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            rM3x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            rM3x.push("__OUT=[];");
            var GR7K = -1,
                bq7j = bo7h.length;
            var nc1x, IY8Q, QI1x, QQ1x, Ao5t, QS1x, bir6l, QU1x;
            while (GR7K + 1 < bq7j) {
                nc1x = GR7K;
                nc1x = bo7h.indexOf("{", nc1x + 1);
                while (nc1x >= 0) {
                    IY8Q = bUd6X(bo7h, nc1x);
                    QI1x = bo7h.substring(nc1x, IY8Q);
                    QQ1x = QI1x.match(bS8K.blk);
                    if (!!QQ1x) {
                        Ao5t = QQ1x[1].length + 1;
                        QS1x = bo7h.indexOf("}", nc1x + Ao5t);
                        if (QS1x >= 0) {
                            bir6l = QS1x - nc1x - Ao5t <= 0 ? "{/" + QQ1x[1] + "}" : QI1x.substr(Ao5t + 1);
                            Ao5t = bo7h.indexOf(bir6l, QS1x + 1);
                            if (Ao5t >= 0) {
                                baz4D(bo7h.substring(GR7K + 1, nc1x), rM3x);
                                QU1x = bo7h.substring(QS1x + 1, Ao5t);
                                switch (QQ1x[1]) {
                                case "cdata":
                                    baf4j(QU1x, rM3x);
                                    break;
                                case "minify":
                                    baf4j(QU1x.replace(cAX4b, " ").replace(bUv6p, " "), rM3x);
                                    break;
                                case "eval":
                                    if (!!QU1x) rM3x.push("__OUT.push((function(){" + QU1x + "})());");
                                    break
                                }
                                nc1x = GR7K = Ao5t + bir6l.length - 1
                            }
                        }
                    } else if (bo7h.charAt(nc1x - 1) != "$" && bo7h.charAt(nc1x - 1) != "\\" && QI1x.substr(QI1x.charAt(1) == "/" ? 2 : 1).search(bS8K.tag) == 0) {
                        break
                    }
                    nc1x = bo7h.indexOf("{", nc1x + 1)
                }
                if (nc1x < 0) break;
                IY8Q = bUd6X(bo7h, nc1x);
                if (IY8Q < 0) break;
                baz4D(bo7h.substring(GR7K + 1, nc1x), rM3x);
                cBy4C(bo7h.substring(nc1x, IY8Q + 1), rM3x);
                GR7K = IY8Q
            }
            baz4D(bo7h.substring(GR7K + 1), rM3x);
            rM3x.push(';return __OUT.join("");');
            rM3x[1] = cAO4S(hE0x);
            hE0x = null;
            return new Function("__CTX", "__MDF", rM3x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gJ0x
    };
    TrimPath.merge = function () {
        var QW1x = {};
        TrimPath.dump = function () {
            return {
                func: QW1x,
                text: PT1x
            }
        };
        return function (fj9a, j7c, jM0x) {
            try {
                j7c = j7c || {};
                if (!QW1x[fj9a] && !PT1x[fj9a]) return "";
                if (!QW1x[fj9a]) {
                    QW1x[fj9a] = cAZ4d(PT1x[fj9a]);
                    delete PT1x[fj9a]
                }
                if (!!jM0x) {
                    for (var x in bS8K.ext)
                        if (!jM0x[x]) jM0x[x] = bS8K.ext[x]
                }
                return QW1x[fj9a](j7c, jM0x || bS8K.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cAN4R = +(new Date);
        return function (bo7h, fj9a) {
            if (!bo7h) return "";
            fj9a = fj9a || "ck_" + cAN4R++;
            PT1x[fj9a] = bo7h;
            return fj9a
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        eu9l = {},
        bUc6W = {};
    a6g.Ja8S = TrimPath.seed;
    a6g.bZ8R = function () {
        var bUb6V = function (C7v) {
            return !a6g.iI0x ? "" : a6g.iI0x(C7v)
        };
        return function (fj9a, j7c, jM0x) {
            j7c = NEJ.X(NEJ.X({}, bUc6W), j7c);
            j7c.inline = bUb6V;
            jM0x = NEJ.X(NEJ.X({}, eu9l), jM0x);
            jM0x.rand = k7d.oh2x;
            jM0x.format = k7d.if0x;
            jM0x.escape = k7d.dG9x;
            jM0x.inline = bUb6V;
            return TrimPath.merge(fj9a, j7c, jM0x)
        }
    }();
    a6g.es9j = function (bo7h, cAK4O) {
        if (!bo7h) return "";
        var fj9a, F7y = a6g.B7u(bo7h);
        if (!!F7y) {
            fj9a = F7y.id;
            bo7h = F7y.value || F7y.innerText;
            if (!cAK4O) a6g.cJ8B(F7y)
        }
        return TrimPath.parse(bo7h, fj9a)
    };
    a6g.dI9z = function (bI8A, fj9a, j7c, jM0x) {
        bI8A = a6g.B7u(bI8A);
        if (!!bI8A) bI8A.innerHTML = a6g.bZ8R(fj9a, j7c, jM0x);
        return this
    };
    a6g.cDh4l = function (bz8r) {
        NEJ.X(eu9l, bz8r)
    };
    a6g.cAF4J = function (bz8r) {
        NEJ.X(bUc6W, bz8r)
    };
    c7f("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dv8n = NEJ.P("nej.p"),
        N7G = window,
        lk1x = dv8n.HP8H,
        bTX6R = lk1x.ipad || lk1x.iphone;
    if (!bTX6R && !!N7G.requestAnimationFrame && !!N7G.cancelRequestAnimationFrame) return;
    var kb1x = dv8n.ds8k.prefix.pro;
    if (!bTX6R && !!N7G[kb1x + "RequestAnimationFrame"] && !!N7G[kb1x + "CancelRequestAnimationFrame"]) {
        N7G.requestAnimationFrame = N7G[kb1x + "RequestAnimationFrame"];
        N7G.cancelRequestAnimationFrame = N7G[kb1x + "CancelRequestAnimationFrame"];
        return
    }
    var ZF3x = lk1x.desktop ? 80 : lk1x.ios ? 50 : 30;
    N7G.requestAnimationFrame = function (cK8C) {
        return window.setTimeout(function () {
            try {
                cK8C(+(new Date))
            } catch (ex) {}
        }, 1e3 / ZF3x)
    };
    N7G.cancelRequestAnimationFrame = function (C7v) {
        window.clearTimeout(C7v);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        k7d = c7f("nej.u"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        be7X = c7f("nej.h"),
        cY8Q = c7f("nej.x"),
        ZE3x = c7f("nej.ut.j.cb"),
        gi9Z;
    if (!!a6g.rG3x) return;
    a6g.rG3x = cY8Q.rG3x = function () {
        var R7K = {},
            gK0x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d7e) {
            var C7v = decodeURIComponent(d7e.target),
                u7n = d7e.type.toLowerCase();
            var dt8l = R7K[C7v + "-on" + u7n];
            if (!!dt8l) {
                try {
                    dt8l(d7e)
                } catch (e) {}
                return
            }
            var cN8F = R7K[C7v + "-tgt"];
            if (!!cN8F && gK0x.test(u7n)) {
                bTT6N(cN8F, d7e)
            }
        };
        var bki6c = function (e7d) {
            var bI8A = a6g.B7u(e7d.parent) || document.body,
                dT9K = a6g.bZ8R(gi9Z, e7d);
            bI8A.insertAdjacentHTML(!e7d.hidden ? "beforeEnd" : "afterBegin", dT9K)
        };
        var bTT6N = function (C7v, d7e) {
            var u7n = d7e.type.toLowerCase();
            requestAnimationFrame(function () {
                h7a.z7s(C7v, u7n)
            })
        };
        var cAx4B = function (hT0x) {
            return !!hT0x && !!hT0x.inited && !!hT0x.inited()
        };
        var Re1x = function (C7v) {
            var br7k = [document.embeds[C7v], a6g.B7u(C7v), document[C7v], window[C7v]],
                r7k = k7d.eC9t(br7k, cAx4B),
                hT0x = br7k[r7k],
                bku6o = C7v + "-count";
            R7K[bku6o]++;
            if (!!hT0x || R7K[bku6o] > 100) {
                R7K[C7v](hT0x);
                delete R7K[C7v];
                delete R7K[bku6o];
                return
            }
            window.setTimeout(Re1x.g7b(null, C7v), 300)
        };
        var cAw4A = function (e7d) {
            var C7v = e7d.id,
                cl8d = e7d.params;
            if (!cl8d) {
                cl8d = {};
                e7d.params = cl8d
            }
            var hE0x = cl8d.flashvars || "";
            hE0x += (!hE0x ? "" : "&") + ("id=" + C7v);
            if (!e7d.hidden && (!!e7d.target || be7X.bdB5G(cl8d.wmode))) {
                var hN0x = a6g.lv1x(e7d.target) || a6g.lv1x(e7d.parent),
                    ZA3x = k7d.bbn4r();
                ZE3x["cb" + ZA3x] = bTT6N.g7b(null, hN0x);
                hE0x += "&onevent=nej.ut.j.cb.cb" + ZA3x;
                R7K[C7v + "-tgt"] = hN0x
            }
            cl8d.flashvars = hE0x;
            k7d.eC9t(e7d, function (D7w, J7C) {
                if (k7d.gG0x(D7w) && J7C != "onready") {
                    R7K[C7v + "-" + J7C] = D7w
                }
            })
        };
        return function (e7d) {
            e7d = NEJ.X({}, e7d);
            if (!e7d.src) return;
            var C7v = "flash_" + k7d.bbn4r();
            e7d.id = C7v;
            cAw4A(e7d);
            bki6c(e7d);
            if (!e7d.onready) return;
            R7K[C7v] = e7d.onready;
            R7K[C7v + "-count"] = 0;
            Re1x(C7v)
        }
    }();
    gi9Z = a6g.es9j('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cY8Q.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        it0x = c7f("nej.c"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut.j"),
        ZE3x = c7f("nej.ut.j.cb"),
        R7K = {},
        gJ0x = +(new Date),
        bkK7D;
    if (!!N7G.blj7c) return;
    ZE3x["ld" + gJ0x] = function (J7C, cG8y) {
        var jY1x = R7K[J7C];
        if (!jY1x) return;
        delete R7K[J7C];
        jY1x.uT4X({
            status: 200,
            result: cG8y
        })
    };
    ZE3x["er" + gJ0x] = function (J7C, ex9o) {
        var jY1x = R7K[J7C];
        if (!jY1x) return;
        delete R7K[J7C];
        jY1x.uT4X({
            status: ex9o || 0
        })
    };
    N7G.blj7c = NEJ.C();
    bkK7D = N7G.blj7c.O7H(N7G.IK8C);
    bkK7D.co8g = function (e7d) {
        var hT0x = R7K.flash;
        if (k7d.eJ9A(hT0x)) {
            hT0x.push(this.co8g.g7b(this, e7d));
            return
        }
        if (!hT0x) {
            R7K.flash = [this.co8g.g7b(this, e7d)];
            a6g.rG3x({
                hidden: !0,
                src: it0x.B7u("ajax.swf"),
                onready: function (hT0x) {
                    if (!hT0x) return;
                    var i7b = R7K.flash;
                    R7K.flash = hT0x;
                    k7d.no2x(i7b, function (dt8l) {
                        try {
                            dt8l()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.Af5k = "swf-" + k7d.oh2x();
        R7K[this.Af5k] = this;
        var j7c = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e7d.request);
        j7c.key = this.Af5k;
        j7c.headers = e7d.headers;
        j7c.onerror = "nej.ut.j.cb.er" + gJ0x;
        j7c.onloaded = "nej.ut.j.cb.ld" + gJ0x;
        var bTS6M = it0x.csE2x(j7c.url);
        if (!!bTS6M) j7c.policyURL = bTS6M;
        hT0x.request(j7c)
    };
    bkK7D.ks1x = function () {
        delete R7K[this.Af5k];
        this.uT4X({
            status: 0
        });
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        be7X = c7f("nej.h");
    be7X.bTP6J = function () {
        var dh8Z = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (kN1x) {
            kN1x = kN1x || "";
            if (dh8Z.test(kN1x)) return RegExp.$1;
            return "*"
        }
    }();
    be7X.blR7K = function (j7c) {
        return j7c
    };
    be7X.blT7M = function (Zu3x, e7d) {
        if (!Zu3x.postMessage) return;
        e7d = e7d || bb7U;
        Zu3x.postMessage(be7X.blR7K(e7d.data), be7X.bTP6J(e7d.origin))
    }
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        b7g;
    if (!!N7G.fJ9A) return;
    N7G.fJ9A = NEJ.C();
    b7g = N7G.fJ9A.O7H(N7G.cH8z);
    b7g.cx8p = function () {
        this.S7L = {};
        this.cD8v()
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.Rm1x = a6g.B7u(e7d.element) || window;
        this.bTO6I(e7d.event);
        this.cAo4s();
        this.z7s("oninit")
    };
    b7g.bD8v = function () {
        var GW7P = function (D7w, J7C, bz8r) {
            if (!k7d.eJ9A(D7w)) {
                k7d.bbo4s(this.Rm1x, J7C)
            }
            delete bz8r[J7C]
        };
        return function () {
            this.bG8y();
            k7d.eC9t(this.S7L, GW7P, this);
            delete this.Rm1x
        }
    }();
    b7g.Zq3x = function (F7y, u7n) {
        F7y = a6g.B7u(F7y);
        return F7y == this.Rm1x && (!u7n || !!this.S7L["on" + u7n])
    };
    b7g.bTO6I = function (d7e) {
        if (k7d.fG9x(d7e)) {
            var V7O = "on" + d7e;
            if (!this.S7L[V7O]) {
                this.S7L[V7O] = this.cAk4o.g7b(this, d7e)
            }
            this.bTM6G(d7e);
            return
        }
        if (k7d.eJ9A(d7e)) {
            k7d.bd7W(d7e, this.bTO6I, this)
        }
    };
    b7g.bTM6G = function (u7n) {
        var d7e = "on" + u7n,
            dt8l = this.Rm1x[d7e],
            bTL6F = this.S7L[d7e];
        if (dt8l != bTL6F) {
            this.Zp3x(u7n);
            if (!!dt8l && dt8l != bs8k) this.bTJ6D(u7n, dt8l);
            this.Rm1x[d7e] = bTL6F
        }
    };
    b7g.bTJ6D = function (u7n, dt8l, czW4a) {
        var i7b = this.S7L[u7n];
        if (!i7b) {
            i7b = [];
            this.S7L[u7n] = i7b
        }
        if (k7d.gG0x(dt8l)) {
            !czW4a ? i7b.push(dt8l) : i7b.unshift(dt8l)
        }
    };
    b7g.Zp3x = function (u7n, dt8l) {
        var i7b = this.S7L[u7n];
        if (!i7b || !i7b.length) return;
        if (!dt8l) {
            delete this.S7L[u7n];
            return
        }
        k7d.no2x(i7b, function (D7w, r7k, Jh8Z) {
            if (dt8l === D7w) {
                Jh8Z.splice(r7k, 1);
                return !0
            }
        })
    };
    b7g.cAk4o = function (u7n, d7e) {
        d7e = d7e || {
            noargs: !0
        };
        d7e.type = u7n;
        this.z7s("ondispatch", d7e);
        if (!!d7e.stopped) return;
        k7d.bd7W(this.S7L[u7n], function (dt8l) {
            try {
                dt8l(d7e)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b7g.cAo4s = function () {
        var bpm8e = function (d7e) {
            var bf7Y = d7e.args,
                u7n = bf7Y[1].toLowerCase();
            if (this.Zq3x(bf7Y[0], u7n)) {
                d7e.stopped = !0;
                this.bTM6G(u7n);
                this.bTJ6D(u7n, bf7Y[2], bf7Y[3]);
                this.z7s("oneventadd", {
                    type: u7n,
                    listener: bf7Y[2]
                })
            }
        };
        var czV4Z = function (d7e) {
            var bf7Y = d7e.args,
                u7n = bf7Y[1].toLowerCase();
            if (this.Zq3x(bf7Y[0], u7n)) {
                d7e.stopped = !0;
                this.Zp3x(u7n, bf7Y[2])
            }
        };
        var bko6i = function (d7e) {
            var bf7Y = d7e.args,
                u7n = (bf7Y[1] || "").toLowerCase();
            if (this.Zq3x(bf7Y[0])) {
                if (!!u7n) {
                    this.Zp3x(u7n);
                    return
                }
                k7d.eC9t(this.S7L, function (D7w, J7C) {
                    if (k7d.eJ9A(D7w)) {
                        this.Zp3x(J7C)
                    }
                }, this)
            }
        };
        var czS4W = function (d7e) {
            var bf7Y = d7e.args,
                u7n = bf7Y[1].toLowerCase();
            if (this.Zq3x(bf7Y[0], u7n)) {
                d7e.stopped = !0;
                bf7Y[0]["on" + u7n].apply(bf7Y[0], bf7Y.slice(2))
            }
        };
        return function () {
            if (!!this.czQ4U) return;
            this.czQ4U = true;
            h7a.s7l = h7a.s7l.eB9s(bpm8e.g7b(this));
            h7a.mw1x = h7a.mw1x.eB9s(czV4Z.g7b(this));
            h7a.hd0x = h7a.hd0x.eB9s(bko6i.g7b(this));
            h7a.z7s = h7a.z7s.eB9s(czS4W.g7b(this))
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        N7G = c7f("nej.p"),
        be7X = c7f("nej.h"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut");
    if (N7G.nj1x.trident) return;
    if (!!window.postMessage) {
        be7X.blR7K = be7X.blR7K.eB9s(function (d7e) {
            d7e.stopped = !0;
            d7e.value = JSON.stringify(d7e.args[0])
        });
        return
    }
    var J7C = "MSG|",
        jZ1x = [];
    var czP4T = function () {
        var V7O = unescape(window.name || "").trim();
        if (!V7O || V7O.indexOf(J7C) != 0) return;
        window.name = "";
        var o7h = k7d.Pm0x(V7O.replace(J7C, ""), "|"),
            kN1x = (o7h.origin || "").toLowerCase();
        if (!!kN1x && kN1x != "*" && location.href.toLowerCase().indexOf(kN1x) != 0) return;
        h7a.z7s(window, "message", {
            data: JSON.parse(o7h.data || "null"),
            source: window.frames[o7h.self] || o7h.self,
            origin: be7X.bTP6J(o7h.ref || document.referrer)
        })
    };
    var czJ4N = function () {
        var Zf3x;
        var czI4M = function (bz8r, r7k, i7b) {
            if (k7d.di8a(Zf3x, bz8r.w) < 0) {
                Zf3x.push(bz8r.w);
                i7b.splice(r7k, 1);
                bz8r.w.name = bz8r.d
            }
        };
        return function () {
            Zf3x = [];
            k7d.no2x(jZ1x, czI4M);
            Zf3x = null
        }
    }();
    be7X.blT7M = function () {
        var czH4L = function (j7c) {
            var o7h = {};
            j7c = j7c || bb7U;
            o7h.origin = j7c.origin || "";
            o7h.ref = location.href;
            o7h.self = j7c.source;
            o7h.data = JSON.stringify(j7c.data);
            return J7C + k7d.uX4b(o7h, "|", !0)
        };
        return be7X.blT7M.eB9s(function (d7e) {
            d7e.stopped = !0;
            var bf7Y = d7e.args;
            jZ1x.unshift({
                w: bf7Y[0],
                d: escape(czH4L(bf7Y[1]))
            })
        })
    }();
    I7B.fJ9A.A7t({
        element: window,
        event: "message"
    });
    window.setInterval(czJ4N, 100);
    window.setInterval(czP4T, 20)
})();
(function () {
    var c7f = NEJ.P,
        be7X = c7f("nej.h"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j");
    v7o.czB4F = function () {
        var gL0x = window.name || "_parent",
            czA4E = {
                gx0x: window.top,
                gL0x: window,
                bI8A: window.parent
            };
        return function (cN8F, e7d) {
            if (typeof cN8F == "string") {
                cN8F = czA4E[cN8F] || window.frames[cN8F];
                if (!cN8F) return this
            }
            var j7c = NEJ.X({
                origin: "*",
                source: gL0x
            }, e7d);
            be7X.blT7M(cN8F, j7c);
            return this
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        it0x = c7f("nej.c"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        N7G = c7f("nej.ut.j"),
        R7K = {},
        Zb3x;
    if (!!N7G.bqV9M) return;
    N7G.bqV9M = NEJ.C();
    Zb3x = N7G.bqV9M.O7H(N7G.IK8C);
    Zb3x.cx8p = function () {
        var eV9M = "NEJ-AJAX-DATA:",
            Gd7W = !1;
        var brd9U = function (d7e) {
            var j7c = d7e.data;
            if (j7c.indexOf(eV9M) != 0) return;
            j7c = JSON.parse(j7c.replace(eV9M, ""));
            var jY1x = R7K[j7c.key];
            if (!jY1x) return;
            delete R7K[j7c.key];
            j7c.result = decodeURIComponent(j7c.result || "");
            jY1x.uT4X(j7c)
        };
        var brh9Y = function () {
            if (!Gd7W) {
                Gd7W = !0;
                h7a.s7l(window, "message", brd9U)
            }
        };
        return function () {
            this.cD8v();
            brh9Y()
        }
    }();
    Zb3x.co8g = function (e7d) {
        var gm9d = e7d.request,
            jY1x = it0x.cjL0x(gm9d.url),
            eh9Y = R7K[jY1x];
        if (k7d.eJ9A(eh9Y)) {
            eh9Y.push(this.co8g.g7b(this, e7d));
            return
        }
        if (!eh9Y) {
            R7K[jY1x] = [this.co8g.g7b(this, e7d)];
            a6g.bdk4o({
                src: jY1x,
                visible: !1,
                onload: function (d7e) {
                    var i7b = R7K[jY1x];
                    R7K[jY1x] = h7a.W7P(d7e).contentWindow;
                    k7d.no2x(i7b, function (dt8l) {
                        try {
                            dt8l()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.Af5k = "frm-" + k7d.oh2x();
        R7K[this.Af5k] = this;
        var j7c = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gm9d);
        j7c.key = this.Af5k;
        j7c.headers = e7d.headers;
        v7o.czB4F(R7K[jY1x], {
            data: j7c
        })
    };
    Zb3x.ks1x = function () {
        delete R7K[this.Af5k];
        this.uT4X({
            status: 0
        });
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        em9d = c7f("nej.g"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        N7G = c7f("nej.ut.j"),
        R7K = {},
        Jk8c;
    if (!!N7G.brw9n) return;
    N7G.brw9n = NEJ.C();
    Jk8c = N7G.brw9n.O7H(N7G.IK8C);
    Jk8c.cx8p = function () {
        var eV9M = "NEJ-UPLOAD-RESULT:",
            Gd7W = !1;
        var brd9U = function (d7e) {
            var j7c = d7e.data;
            if (j7c.indexOf(eV9M) != 0) return;
            j7c = JSON.parse(j7c.replace(eV9M, ""));
            var jY1x = R7K[j7c.key];
            if (!jY1x) return;
            delete R7K[j7c.key];
            jY1x.uT4X(decodeURIComponent(j7c.result))
        };
        var brh9Y = function () {
            if (!Gd7W) {
                Gd7W = !0;
                h7a.s7l(window, "message", brd9U)
            }
        };
        return function () {
            this.cD8v();
            brh9Y()
        }
    }();
    Jk8c.bD8v = function () {
        this.bG8y();
        a6g.cJ8B(this.brP9G);
        delete this.brP9G;
        window.clearTimeout(this.ed9U);
        delete this.ed9U
    };
    Jk8c.uT4X = function (cG8y) {
        var Q7J;
        try {
            Q7J = JSON.parse(cG8y);
            this.z7s("onload", Q7J)
        } catch (e) {
            this.z7s("onerror", {
                code: em9d.bYx7q,
                message: cG8y
            })
        }
    };
    Jk8c.co8g = function () {
        var czp3x = function () {
            var mx1x, cG8y;
            try {
                var mx1x = this.brP9G.contentWindow.document.body,
                    cG8y = mx1x.innerText || mx1x.textContent
            } catch (e) {
                return
            }
            this.uT4X(cG8y)
        };
        var bsu9l = function (Y7R, fl9c, rl3x) {
            v7o.bn7g(Y7R, {
                type: "json",
                method: "POST",
                cookie: rl3x,
                mode: parseInt(fl9c) || 0,
                onload: function (j7c) {
                    if (!this.ed9U) return;
                    this.z7s("onuploading", j7c);
                    this.ed9U = window.setTimeout(bsu9l.g7b(this, Y7R, fl9c, rl3x), 1e3)
                }.g7b(this),
                onerror: function (cb8T) {
                    if (!this.ed9U) return;
                    this.ed9U = window.setTimeout(bsu9l.g7b(this, Y7R, fl9c, rl3x), 1e3)
                }.g7b(this)
            })
        };
        return function (e7d) {
            var gm9d = e7d.request,
                ph2x = e7d.headers,
                fc9T = gm9d.data,
                V7O = "fom-" + k7d.oh2x();
            R7K[V7O] = this;
            fc9T.target = V7O;
            fc9T.method = "POST";
            fc9T.enctype = em9d.EK7D;
            fc9T.encoding = em9d.EK7D;
            var Y7R = fc9T.action || "",
                lE1x = Y7R.indexOf("?") <= 0 ? "?" : "&";
            fc9T.action = Y7R + lE1x + "_proxy_=form";
            this.brP9G = a6g.bdk4o({
                name: V7O,
                onload: function (d7e) {
                    var eh9Y = h7a.W7P(d7e);
                    h7a.s7l(eh9Y, "load", czp3x.g7b(this));
                    fc9T.submit();
                    var bTC6w = (fc9T.nej_query || bb7U).value;
                    if (!bTC6w) return;
                    var fl9c = (fc9T.nej_mode || bb7U).value,
                        rl3x = (fc9T.nej_cookie || bb7U).value == "true";
                    this.ed9U = window.setTimeout(bsu9l.g7b(this, bTC6w, fl9c, rl3x), 100)
                }.g7b(this)
            })
        }
    }();
    Jk8c.ks1x = function () {
        this.z7s("onerror", {
            code: em9d.cel9c,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        be7X = c7f("nej.h"),
        N7G = c7f("nej.ut.j");
    be7X.bra9R = function () {
        return new XMLHttpRequest
    };
    be7X.bti9Z = function (fl9c, YZ3x, e7d) {
        var bz8r = !!YZ3x ? {
            2: N7G.brw9n
        } : {
            2: N7G.bqV9M,
            3: N7G.blj7c
        };
        return (bz8r[fl9c] || N7G.baO4S).A7t(e7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        N7G = c7f("nej.p"),
        be7X = c7f("nej.h");
    if (N7G.nj1x.trident) return;
    be7X.bra9R = function () {
        var NG0x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var czj3x = function () {
            for (var i = 0, l = NG0x.length; i < l; i++) {
                try {
                    return new ActiveXObject(NG0x[i])
                } catch (e) {}
            }
            return null
        };
        return be7X.bra9R.eB9s(function (d7e) {
            if (!!window.XMLHttpRequest) return;
            d7e.stopped = !0;
            d7e.value = czj3x()
        })
    }();
    be7X.bti9Z = function () {
        var Fs7l = {
            0: 2,
            1: 3
        };
        return be7X.bti9Z.eB9s(function (d7e) {
            var bf7Y = d7e.args,
                fl9c = bf7Y[0] || 0;
            bf7Y[0] = !!bf7Y[1] ? 2 : Fs7l[fl9c] || fl9c
        })
    }()
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        be7X = c7f("nej.h"),
        em9d = c7f("nej.g"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        N7G = c7f("nej.ut.j"),
        of2x = {},
        Ih8Z = bs8k;
    v7o.ks1x = function (fj9a) {
        var R7K = of2x[fj9a];
        if (!R7K) return this;
        R7K.req.ks1x();
        return this
    };
    v7o.YY3x = function (dV9M) {
        Ih8Z = dV9M || bs8k;
        return this
    };
    v7o.bn7g = function () {
        var jA0x = (location.protocol + "//" + location.host).toLowerCase();
        var czf3x = function (Y7R) {
            var kN1x = k7d.cCu4y(Y7R);
            return !!kN1x && kN1x != jA0x
        };
        var cza3x = function (ph2x) {
            return (ph2x || bb7U)[em9d.yg5l] == em9d.EK7D
        };
        var cyZ3x = function (e7d) {
            var YZ3x = cza3x(e7d.headers);
            if (!czf3x(e7d.url) && !YZ3x) return N7G.baO4S.A7t(e7d);
            return be7X.bti9Z(e7d.mode, YZ3x, e7d)
        };
        var GW7P = function (fj9a) {
            var R7K = of2x[fj9a];
            if (!R7K) return;
            if (!!R7K.req) R7K.req.T7M();
            delete of2x[fj9a]
        };
        var bTB6v = function (fj9a, u7n) {
            var R7K = of2x[fj9a];
            if (!R7K) return;
            GW7P(fj9a);
            try {
                var d7e = {
                    type: u7n,
                    result: arguments[2]
                };
                Ih8Z(d7e);
                if (!d7e.stopped)(R7K[u7n] || bs8k)(d7e.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yB5G = function (fj9a, j7c) {
            bTB6v(fj9a, "onload", j7c)
        };
        var AE5J = function (fj9a, cb8T) {
            bTB6v(fj9a, "onerror", cb8T)
        };
        return function (Y7R, e7d) {
            e7d = e7d || {};
            var fj9a = k7d.oh2x(),
                R7K = {
                    onload: e7d.onload || bs8k,
                    onerror: e7d.onerror || bs8k
                };
            of2x[fj9a] = R7K;
            e7d.onload = yB5G.g7b(null, fj9a);
            e7d.onerror = AE5J.g7b(null, fj9a);
            if (!!e7d.query) {
                var lE1x = Y7R.indexOf("?") < 0 ? "?" : "&",
                    bv8n = e7d.query;
                if (k7d.lw1x(bv8n)) bv8n = k7d.cE8w(bv8n);
                if (!!bv8n) Y7R += lE1x + bv8n
            }
            e7d.url = Y7R;
            R7K.req = cyZ3x(e7d);
            R7K.req.bpF8x(e7d.data);
            return fj9a
        }
    }();
    v7o.gQ0x = function (fc9T, e7d) {
        var fr9i = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(fr9i, e7d);
        fr9i.data = fc9T;
        fr9i.method = "POST";
        fr9i.timeout = 0;
        fr9i.headers[em9d.yg5l] = em9d.EK7D;
        return v7o.bn7g(fc9T.action, fr9i)
    }
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        em9d = c7f("nej.g"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        N7G = c7f("nej.ut.j"),
        mn1x, gO0x = 6e4;
    if (!!N7G.Ry1x) return;
    N7G.Ry1x = NEJ.C();
    mn1x = N7G.Ry1x.O7H(I7B.cH8z);
    mn1x.cx8p = function () {
        this.cD8v();
        this.Rz1x = {
            onerror: this.cyT3x.g7b(this),
            onloaded: this.cyS3x.g7b(this)
        };
        if (!this.constructor.S7L) this.constructor.S7L = {
            loaded: {}
        }
    };
    mn1x.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.Jn8f = e7d.version;
        this.beG5L = e7d.timeout;
        this.Rz1x.version = this.Jn8f;
        this.Rz1x.timeout = this.beG5L
    };
    mn1x.bTz6t = function (J7C) {
        delete this.constructor.S7L[J7C]
    };
    mn1x.AH5M = function (J7C) {
        return this.constructor.S7L[J7C]
    };
    mn1x.bTy6s = function (J7C, j7c) {
        this.constructor.S7L[J7C] = j7c
    };
    mn1x.YN3x = bs8k;
    mn1x.bTx6r = function (gm9d) {
        h7a.hd0x(gm9d)
    };
    mn1x.bfF5K = function (gm9d) {
        gm9d.src = this.lB1x;
        document.head.appendChild(gm9d)
    };
    mn1x.AN5S = function () {
        var R7K = this.AH5M(this.lB1x);
        if (!R7K) return;
        window.clearTimeout(R7K.timer);
        this.bTx6r(R7K.request);
        delete R7K.bind;
        delete R7K.timer;
        delete R7K.request;
        this.bTz6t(this.lB1x);
        this.AH5M("loaded")[this.lB1x] = !0
    };
    mn1x.YG3x = function (V7O) {
        var R7K = this.AH5M(this.lB1x);
        if (!R7K) return;
        var i7b = R7K.bind;
        this.AN5S();
        if (!!i7b && i7b.length > 0) {
            var cz8r;
            while (i7b.length) {
                cz8r = i7b.shift();
                try {
                    cz8r.z7s(V7O, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cz8r.T7M()
            }
        }
    };
    mn1x.eI9z = function (cb8T) {
        this.YG3x("onerror", cb8T)
    };
    mn1x.bTu6o = function () {
        this.YG3x("onloaded")
    };
    mn1x.cyw3x = function (Y7R) {
        this.constructor.A7t(this.Rz1x).Jr8j(Y7R)
    };
    mn1x.bTq6k = function (cb8T) {
        var R7K = this.AH5M(this.wl4p);
        if (!R7K) return;
        if (!!cb8T) R7K.error++;
        R7K.loaded++;
        if (R7K.loaded < R7K.total) return;
        this.bTz6t(this.wl4p);
        this.z7s(R7K.error > 0 ? "onerror" : "onloaded")
    };
    mn1x.cyT3x = function (cb8T) {
        this.bTq6k(!0)
    };
    mn1x.cyS3x = function () {
        this.bTq6k()
    };
    mn1x.Jr8j = function (Y7R) {
        Y7R = k7d.bte9V(Y7R);
        if (!Y7R) {
            this.z7s("onerror", {
                code: em9d.bua9R,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.lB1x = Y7R;
        if (!!this.Jn8f) this.lB1x += (this.lB1x.indexOf("?") < 0 ? "?" : "&") + this.Jn8f;
        if (this.AH5M("loaded")[this.lB1x]) {
            try {
                this.z7s("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T7M();
            return this
        }
        var R7K = this.AH5M(this.lB1x),
            gm9d;
        if (!!R7K) {
            R7K.bind.unshift(this);
            R7K.timer = window.clearTimeout(R7K.timer)
        } else {
            gm9d = this.YN3x();
            R7K = {
                request: gm9d,
                bind: [this]
            };
            this.bTy6s(this.lB1x, R7K);
            h7a.s7l(gm9d, "load", this.bTu6o.g7b(this));
            h7a.s7l(gm9d, "error", this.eI9z.g7b(this, {
                code: em9d.bie6Y,
                message: "无法加载指定资源文件[" + this.lB1x + "]！"
            }))
        } if (this.beG5L != 0) R7K.timer = window.setTimeout(this.eI9z.g7b(this, {
            code: em9d.bBG1x,
            message: "指定资源文件[" + this.lB1x + "]载入超时！"
        }), this.beG5L || gO0x);
        if (!!gm9d) this.bfF5K(gm9d);
        this.z7s("onloading");
        return this
    };
    mn1x.bTp6j = function (i7b) {
        if (!i7b || !i7b.length) {
            this.z7s("onerror", {
                code: em9d.bua9R,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.wl4p = k7d.oh2x();
        var R7K = {
            error: 0,
            loaded: 0,
            total: i7b.length
        };
        this.bTy6s(this.wl4p, R7K);
        for (var i = 0, l = i7b.length; i < l; i++) {
            if (!i7b[i]) {
                R7K.total--;
                continue
            }
            this.cyw3x(i7b[i])
        }
        this.z7s("onloading");
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        be7X = c7f("nej.h"),
        N7G = c7f("nej.ut.j"),
        RK1x;
    if (!!N7G.bgu5z) return;
    N7G.bgu5z = NEJ.C();
    RK1x = N7G.bgu5z.O7H(N7G.Ry1x);
    RK1x.YN3x = function () {
        var eK9B = a6g.dg8Y("iframe");
        eK9B.width = 0;
        eK9B.height = 0;
        eK9B.style.display = "none";
        return eK9B
    };
    RK1x.bfF5K = function (gm9d) {
        gm9d.src = this.lB1x;
        document.body.appendChild(gm9d)
    };
    RK1x.eI9z = function (cb8T) {
        var eK9B = (this.AH5M(this.lB1x) || bb7U).request;
        this.YG3x("onerror", cb8T);
        be7X.bdz5E(eK9B)
    };
    RK1x.bTu6o = function () {
        var mx1x = null,
            eK9B = (this.AH5M(this.lB1x) || bb7U).request;
        try {
            mx1x = eK9B.contentWindow.document.body
        } catch (ex) {}
        this.YG3x("onloaded", mx1x);
        be7X.bdz5E(eK9B)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        N7G = c7f("nej.ut.j"),
        bgv5A;
    if (!!N7G.Yw3x) return;
    N7G.Yw3x = NEJ.C();
    bgv5A = N7G.Yw3x.O7H(N7G.Ry1x);
    bgv5A.YN3x = function () {
        return a6g.dg8Y("link")
    };
    bgv5A.bfF5K = function (gm9d) {
        gm9d.href = this.lB1x;
        document.head.appendChild(gm9d)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        N7G = c7f("nej.ut.j"),
        Yu3x;
    if (!!N7G.Yt3x) return;
    N7G.Yt3x = NEJ.C();
    Yu3x = N7G.Yt3x.O7H(N7G.Ry1x);
    Yu3x.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.bTn6h = e7d.async;
        this.bgO5T = e7d.charset;
        this.Rz1x.async = !1;
        this.Rz1x.charset = this.bgO5T
    };
    Yu3x.YN3x = function () {
        var gm9d = a6g.dg8Y("script");
        if (this.bTn6h != null) gm9d.async = !!this.bTn6h;
        if (this.bgO5T != null) gm9d.charset = this.bgO5T;
        return gm9d
    };
    Yu3x.bTx6r = function (gm9d) {
        a6g.cJ8B(gm9d)
    }
})();
(function () {
    var c7f = NEJ.P,
        v7o = c7f("nej.j"),
        N7G = c7f("nej.ut.j");
    v7o.cyj3x = function (Y7R, e7d) {
        N7G.Yt3x.A7t(e7d).Jr8j(Y7R);
        return this
    };
    v7o.cyi3x = function (i7b, e7d) {
        N7G.Yt3x.A7t(e7d).bTp6j(i7b);
        return this
    };
    v7o.cDn4r = function (Y7R, e7d) {
        N7G.Yw3x.A7t(e7d).Jr8j(Y7R);
        return this
    };
    v7o.cyf3x = function (i7b, e7d) {
        N7G.Yw3x.A7t(e7d).bTp6j(i7b);
        return this
    };
    v7o.bTm6g = function (Y7R, e7d) {
        N7G.bgu5z.A7t(e7d).Jr8j(Y7R);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        R7K = {},
        tv3x = +(new Date) + "-";
    a6g.cZ8R = function () {
        var cF8x = 0;
        var RL1x = function () {
            if (cF8x > 0) return;
            cF8x = 0;
            h7a.z7s(document, "templateready");
            h7a.hd0x(document, "templateready")
        };
        var Yq3x = function (ge9V, e7d) {
            var cS8K = a6g.t7m(ge9V, "src");
            if (!cS8K) return;
            e7d = e7d || bb7U;
            var fT9K = e7d.root;
            if (!fT9K) {
                fT9K = ge9V.ownerDocument.location.href
            } else {
                fT9K = k7d.bte9V(fT9K)
            }
            cS8K = cS8K.split(",");
            k7d.bd7W(cS8K, function (D7w, r7k, i7b) {
                i7b[r7k] = k7d.bte9V(D7w, fT9K)
            });
            return cS8K
        };
        var cyd3x = function (ge9V, e7d) {
            if (!ge9V) return;
            var cS8K = Yq3x(ge9V, e7d);
            if (!!cS8K) v7o.cyf3x(cS8K, {
                version: a6g.t7m(ge9V, "version")
            });
            a6g.bPk4o(ge9V.value)
        };
        var cxX3x = function (D7w) {
            cF8x--;
            a6g.bPl4p(D7w);
            RL1x()
        };
        var cxW3x = function (ge9V, e7d) {
            if (!ge9V) return;
            var cS8K = Yq3x(ge9V, e7d),
                eQ9H = ge9V.value;
            if (!!cS8K) {
                cF8x++;
                var e7d = {
                    version: a6g.t7m(ge9V, "version"),
                    onloaded: cxX3x.g7b(null, eQ9H)
                };
                window.setTimeout(v7o.cyi3x.g7b(v7o, cS8K, e7d), 0);
                return
            }
            a6g.bPl4p(eQ9H)
        };
        var cxV3x = function (mx1x) {
            cF8x--;
            a6g.cZ8R(mx1x);
            RL1x()
        };
        var cxU3x = function (ge9V, e7d) {
            if (!ge9V) return;
            var cS8K = Yq3x(ge9V, e7d)[0];
            if (!!cS8K) {
                cF8x++;
                var e7d = {
                    version: a6g.t7m(ge9V, "version"),
                    onloaded: cxV3x
                };
                window.setTimeout(v7o.bTm6g.g7b(v7o, cS8K, e7d), 0)
            }
        };
        var cxT3x = function (C7v, cG8y) {
            cF8x--;
            a6g.Jw8o(C7v, cG8y || "");
            RL1x()
        };
        var cxQ3x = function (ge9V, e7d) {
            if (!ge9V || !ge9V.id) return;
            var C7v = ge9V.id,
                cS8K = Yq3x(ge9V, e7d)[0];
            if (!!cS8K) {
                cF8x++;
                var Y7R = cS8K + (cS8K.indexOf("?") < 0 ? "?" : "&") + (a6g.t7m(ge9V, "version") || ""),
                    e7d = {
                        type: "text",
                        method: "GET",
                        onload: cxT3x.g7b(null, C7v)
                    };
                window.setTimeout(v7o.bn7g.g7b(v7o, Y7R, e7d), 0)
            }
        };
        var cxP3x = function (f7c, e7d) {
            var u7n = f7c.name.toLowerCase();
            switch (u7n) {
            case "jst":
                a6g.es9j(f7c, !0);
                return;
            case "txt":
                a6g.Jw8o(f7c.id, f7c.value || "");
                return;
            case "ntp":
                a6g.iu0x(f7c.value || "", f7c.id);
                return;
            case "js":
                cxW3x(f7c, e7d);
                return;
            case "css":
                cyd3x(f7c, e7d);
                return;
            case "html":
                cxU3x(f7c, e7d);
                return;
            case "res":
                cxQ3x(f7c, e7d);
                return
            }
        };
        I7B.fJ9A.A7t({
            element: document,
            event: "templateready",
            oneventadd: RL1x
        });
        return function (F7y, e7d) {
            F7y = a6g.B7u(F7y);
            if (!!F7y) {
                var i7b = F7y.tagName == "TEXTAREA" ? [F7y] : F7y.getElementsByTagName("textarea");
                k7d.bd7W(i7b, function (f7c) {
                    cxP3x(f7c, e7d)
                });
                a6g.cJ8B(F7y, !0)
            }
            RL1x();
            return this
        }
    }();
    a6g.Jw8o = function (J7C, D7w) {
        R7K[J7C] = D7w || "";
        return this
    };
    a6g.iI0x = function (J7C) {
        return R7K[J7C] || ""
    };
    a6g.iu0x = function (F7y, J7C) {
        J7C = J7C || k7d.oh2x();
        F7y = a6g.B7u(F7y) || F7y;
        a6g.Jw8o(tv3x + J7C, F7y);
        a6g.mY1x(F7y);
        return J7C
    };
    a6g.dy8q = function (J7C) {
        if (!J7C) return null;
        J7C = tv3x + J7C;
        var D7w = a6g.iI0x(J7C);
        if (!D7w) return null;
        if (k7d.fG9x(D7w)) {
            D7w = a6g.nH2x(D7w);
            a6g.Jw8o(J7C, D7w)
        }
        return D7w.cloneNode(!0)
    };
    a6g.AS6M = function () {
        var Ih8Z = function (D7w, J7C) {
            return J7C == "offset" || J7C == "limit"
        };
        return function (i7b, p7i, e7d) {
            var br7k = [];
            if (!i7b || !i7b.length || !p7i) return br7k;
            e7d = e7d || bb7U;
            var dr8j = i7b.length,
                jT1x = parseInt(e7d.offset) || 0,
                fR9I = Math.min(dr8j, jT1x + (parseInt(e7d.limit) || dr8j)),
                cq8i = {
                    total: i7b.length,
                    range: [jT1x, fR9I]
                };
            NEJ.X(cq8i, e7d, Ih8Z);
            for (var i = jT1x, cz8r; i < fR9I; i++) {
                cq8i.index = i;
                cq8i.data = i7b[i];
                cz8r = p7i.A7t(cq8i);
                var C7v = cz8r.FB7u();
                R7K[C7v] = cz8r;
                cz8r.T7M = cz8r.T7M.eB9s(function (C7v, cz8r) {
                    delete R7K[C7v];
                    delete cz8r.T7M
                }.g7b(null, C7v, cz8r));
                br7k.push(cz8r)
            }
            return br7k
        }
    }();
    a6g.bTd6X = function (C7v) {
        return R7K[C7v]
    };
    a6g.cDo4s = function (dY9P, e7d) {
        e7d = e7d || bb7U;
        a6g.cZ8R(e7d.tid || "template-box");
        h7a.s7l(document, "templateready", function () {
            dY9P.A7t().z7s("onshow", e7d)
        })
    };
    c7f("dbg").dumpTC = function () {
        return R7K
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        N7G = c7f("nej.ui"),
        b7g;
    if (!!N7G.ei9Z) return;
    N7G.ei9Z = NEJ.C();
    b7g = N7G.ei9Z.O7H(I7B.cH8z);
    b7g.cx8p = function () {
        this.cD8v();
        a6g.bOQ4U();
        this.ce8W();
        this.bW8O()
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.cxC3x(e7d.clazz);
        this.bTb6V(e7d.parent)
    };
    b7g.bD8v = function () {
        this.bG8y();
        this.bSZ6T();
        delete this.gg9X;
        a6g.mY1x(this.n7g);
        a6g.x7q(this.n7g, this.bjR6L);
        delete this.bjR6L
    };
    b7g.ce8W = bs8k;
    b7g.bW8O = function () {
        if (!this.cd8V) this.Jz8r();
        this.n7g = a6g.dy8q(this.cd8V);
        if (!this.n7g) this.n7g = a6g.dg8Y("div", this.mb1x);
        a6g.y7r(this.n7g, this.mb1x)
    };
    b7g.Jz8r = bs8k;
    b7g.cxC3x = function (dZ9Q) {
        this.bjR6L = dZ9Q || "";
        a6g.y7r(this.n7g, this.bjR6L)
    };
    b7g.cxx3x = function () {
        if (!this.mb1x) return;
        a6g.y7r(this.gg9X, this.mb1x + "-parent")
    };
    b7g.bSZ6T = function () {
        if (!this.mb1x) return;
        a6g.x7q(this.gg9X, this.mb1x + "-parent")
    };
    b7g.lQ1x = function () {
        return this.n7g
    };
    b7g.bTb6V = function (bI8A) {
        if (!this.n7g) return this;
        this.bSZ6T();
        if (k7d.gG0x(bI8A)) {
            this.gg9X = bI8A(this.n7g)
        } else {
            this.gg9X = a6g.B7u(bI8A);
            if (!!this.gg9X) this.gg9X.appendChild(this.n7g)
        }
        this.cxx3x();
        return this
    };
    b7g.L7E = function () {
        if (!this.gg9X || !this.n7g || this.n7g.parentNode == this.gg9X) return this;
        this.gg9X.appendChild(this.n7g);
        return this
    };
    b7g.bu8m = function () {
        a6g.mY1x(this.n7g);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        be7X = c7f("nej.h"),
        N7G = c7f("nej.ui"),
        vV4Z, bSW6Q;
    if (!!N7G.Sc1x) return;
    N7G.Sc1x = NEJ.C();
    vV4Z = N7G.Sc1x.O7H(N7G.ei9Z);
    bSW6Q = N7G.Sc1x.cs8k;
    vV4Z.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.xp4t("oncontentready", e7d.oncontentready || this.cxo3x.g7b(this));
        this.cxn3x = !!e7d.nohack;
        this.cxk3x = !!e7d.destroyable;
        this.JC8u(e7d.content)
    };
    vV4Z.bD8v = function () {
        this.z7s("onbeforerecycle");
        this.bG8y();
        this.XT3x();
        this.JC8u("");
        a6g.eY9P(this.n7g, {
            top: "",
            left: ""
        })
    };
    vV4Z.cxo3x = bs8k;
    vV4Z.JD8v = bs8k;
    vV4Z.XT3x = function () {
        a6g.mY1x(this.n7g);
        if (!!this.oi2x) {
            this.oi2x = be7X.bgs5x(this.n7g);
            delete this.oi2x
        }
    };
    vV4Z.JC8u = function (bo7h) {
        if (!this.n7g || !this.AW6Q || bo7h == null) return this;
        bo7h = bo7h || "";
        k7d.fG9x(bo7h) ? this.AW6Q.innerHTML = bo7h : this.AW6Q.appendChild(bo7h);
        this.z7s("oncontentready", this.AW6Q);
        return this
    };
    vV4Z.gF0x = function (bi7b) {
        var D7w = bi7b.top;
        if (D7w != null) {
            D7w += "px";
            a6g.ba7T(this.n7g, "top", D7w);
            a6g.ba7T(this.oi2x, "top", D7w)
        }
        var D7w = bi7b.left;
        if (D7w != null) {
            D7w += "px";
            a6g.ba7T(this.n7g, "left", D7w);
            a6g.ba7T(this.oi2x, "left", D7w)
        }
        return this
    };
    vV4Z.L7E = function () {
        a6g.ba7T(this.n7g, "visibility", "hidden");
        bSW6Q.L7E.apply(this, arguments);
        this.JD8v();
        a6g.ba7T(this.n7g, "visibility", "");
        if (!this.cxn3x) {
            this.oi2x = be7X.oi2x(this.n7g)
        }
        return this
    };
    vV4Z.bu8m = function () {
        this.cxk3x ? this.T7M() : this.XT3x();
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        k7d = c7f("nej.u"),
        a6g = c7f("nej.e"),
        N7G = c7f("nej.ui"),
        AX6R;
    if (!!N7G.XP3x) return;
    N7G.XP3x = NEJ.C();
    AX6R = N7G.XP3x.O7H(N7G.ei9Z);
    AX6R.bl7e = function (e7d) {
        this.So2x();
        this.bm7f(this.cxj3x(e7d));
        this.cc8U.onbeforerecycle = this.T7M.g7b(this);
        this.pb2x = this.blJ7C()
    };
    AX6R.bD8v = function () {
        this.z7s("onbeforerecycle");
        this.bG8y();
        delete this.cc8U;
        a6g.mY1x(this.n7g);
        var AZ6T = this.pb2x;
        if (!!AZ6T) {
            delete this.pb2x;
            AZ6T.T7M()
        }
    };
    AX6R.blJ7C = bs8k;
    AX6R.cxj3x = function (e7d) {
        var o7h = {};
        k7d.eC9t(e7d, function (p7i, J7C) {
            this.cc8U.hasOwnProperty(J7C) ? this.cc8U[J7C] = p7i : o7h[J7C] = p7i
        }, this);
        return o7h
    };
    AX6R.So2x = function () {
        this.cc8U = {
            clazz: "",
            parent: null,
            content: this.n7g,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    AX6R.L7E = function () {
        if (!!this.pb2x) this.pb2x.L7E();
        this.z7s("onaftershow");
        return this
    };
    AX6R.bu8m = function () {
        if (!!this.pb2x) this.pb2x.bu8m();
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        em9d = c7f("nej.g"),
        be7X = c7f("nej.h"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        N7G = c7f("nej.ui"),
        Sq2x, bSV6P;
    if (!!N7G.JE8w) return;
    var iZ0x = a6g.tO3x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + em9d.bkx6r + ");}");
    N7G.JE8w = NEJ.C();
    Sq2x = N7G.JE8w.O7H(N7G.ei9Z);
    bSV6P = N7G.JE8w.cs8k;
    Sq2x.bl7e = function (e7d) {
        this.bm7f(e7d);
        var bo7h = e7d.content || "&nbsp;";
        k7d.fG9x(bo7h) ? this.n7g.innerHTML = bo7h : this.n7g.appendChild(bo7h)
    };
    Sq2x.bD8v = function () {
        this.bG8y();
        this.n7g.innerHTML = "&nbsp;"
    };
    Sq2x.ce8W = function () {
        this.mb1x = iZ0x
    };
    Sq2x.L7E = function () {
        be7X.bgn5s(this.n7g);
        bSV6P.L7E.apply(this, arguments);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        N7G = c7f("nej.ut"),
        vP4T;
    if (!!N7G.vN4R) return;
    N7G.vN4R = NEJ.C();
    vP4T = N7G.vN4R.O7H(N7G.cH8z);
    vP4T.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.cxh3x = !!e7d.overflow;
        this.n7g = a6g.B7u(e7d.body);
        this.Bb6V = a6g.B7u(e7d.view) || a6g.bKU3x(this.n7g);
        this.bSU6O = a6g.B7u(e7d.mbar) || this.n7g;
        this.XE3x = parseInt(e7d.direction) || 0;
        if (!!e7d.isRelative) {
            this.n7g.style.position = "relative";
            this.bnf7Y = true;
            this.bnn7g()
        }
        this.bX8P([
            [document, "mouseup", this.bns7l.g7b(this)],
            [document, "mousemove", this.bnL7E.g7b(this)],
            [this.bSU6O, "mousedown", this.Sz2x.g7b(this)]
        ])
    };
    vP4T.bnn7g = function () {
        if (!!this.bnf7Y) {
            this.JH8z = a6g.hO0x(this.n7g, this.Bb6V);
            this.JH8z.x -= parseInt(a6g.df8X(this.n7g, "left")) || 0;
            this.JH8z.y -= parseInt(a6g.df8X(this.n7g, "top")) || 0
        }
    };
    vP4T.bD8v = function () {
        this.bG8y();
        delete this.n7g;
        delete this.bSU6O;
        delete this.Bb6V
    };
    vP4T.bnZ8R = function () {
        return {
            x: Math.max(this.Bb6V.clientWidth, this.Bb6V.scrollWidth) - this.n7g.offsetWidth,
            y: Math.max(this.Bb6V.clientHeight, this.Bb6V.scrollHeight) - this.n7g.offsetHeight
        }
    };
    vP4T.Sz2x = function (d7e) {
        h7a.bh7a(d7e);
        if (!!this.hP0x) return;
        this.hP0x = {
            x: h7a.jB0x(d7e),
            y: h7a.mf1x(d7e)
        };
        this.bSS6M = this.bnZ8R();
        this.z7s("ondragstart", d7e)
    };
    vP4T.bnL7E = function (d7e) {
        if (!this.hP0x) return;
        var bi7b = {
            x: h7a.jB0x(d7e),
            y: h7a.mf1x(d7e)
        };
        var py2x = bi7b.x - this.hP0x.x,
            pz2x = bi7b.y - this.hP0x.y,
            D7w = {
                top: (parseInt(a6g.df8X(this.n7g, "top")) || 0) + pz2x,
                left: (parseInt(a6g.df8X(this.n7g, "left")) || 0) + py2x
            };
        if (this.bnf7Y) {
            this.bnn7g();
            D7w.top = D7w.top + this.JH8z.y;
            D7w.left = D7w.left + this.JH8z.x
        }
        this.hP0x = bi7b;
        this.gF0x(D7w)
    };
    vP4T.bns7l = function (d7e) {
        if (!this.hP0x) return;
        delete this.bSS6M;
        delete this.hP0x;
        this.z7s("ondragend", this.boP8H())
    };
    vP4T.gF0x = function (d7e) {
        if (!this.cxh3x) {
            var bSR6L = this.bSS6M || this.bnZ8R();
            d7e.top = Math.min(bSR6L.y, Math.max(0, d7e.top));
            d7e.left = Math.min(bSR6L.x, Math.max(0, d7e.left))
        }
        var ch8Z = this.n7g.style;
        if (this.bnf7Y) {
            this.bnn7g();
            d7e.top = d7e.top - this.JH8z.y;
            d7e.left = d7e.left - this.JH8z.x
        }
        if (this.XE3x == 0 || this.XE3x == 2) ch8Z.top = d7e.top + "px";
        if (this.XE3x == 0 || this.XE3x == 1) ch8Z.left = d7e.left + "px";
        this.z7s("onchange", d7e);
        return this
    };
    vP4T.boP8H = function () {
        return {
            left: parseInt(a6g.df8X(this.n7g, "left")) || 0,
            top: parseInt(a6g.df8X(this.n7g, "top")) || 0
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = NEJ.P("nej.e"),
        h7a = NEJ.P("nej.v"),
        k7d = NEJ.P("nej.u"),
        I7B = NEJ.P("nej.ut"),
        N7G = NEJ.P("nej.ui"),
        iZ0x, gi9Z, b7g, K7D;
    if (!!N7G.XA3x) return;
    N7G.XA3x = NEJ.C();
    b7g = N7G.XA3x.O7H(N7G.Sc1x);
    K7D = N7G.XA3x.cs8k;
    b7g.cx8p = function () {
        this.se3x = {};
        this.kQ1x = {
            onchange: this.bnL7E.g7b(this)
        };
        this.cD8v()
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.cwZ3x(e7d.mask);
        this.cwV3x(e7d.align);
        this.Bg6a(e7d.title);
        if (!e7d.draggable) return;
        this.iX0x = I7B.vN4R.A7t(this.kQ1x)
    };
    b7g.bD8v = function () {
        this.bG8y();
        delete this.qN3x;
        delete this.SE2x;
        if (!!this.Bh6b) {
            this.Bh6b.T7M();
            delete this.Bh6b
        }
        if (!!this.iX0x) {
            this.iX0x.T7M();
            delete this.iX0x
        }
    };
    b7g.ce8W = function () {
        this.mb1x = iZ0x;
        this.cd8V = gi9Z
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var i7b = a6g.dk8c(this.n7g);
        this.AW6Q = i7b[1];
        this.kQ1x.mbar = i7b[0];
        this.kQ1x.body = this.n7g;
        h7a.s7l(i7b[2], "mousedown", this.cwU3x.g7b(this));
        h7a.s7l(this.kQ1x.mbar, "mousedown", this.Sz2x.g7b(this));
        this.bSP6J = a6g.dk8c(this.kQ1x.mbar)[0]
    };
    b7g.cwU3x = function (d7e) {
        h7a.bh7a(d7e);
        this.z7s("onclose", d7e);
        if (!d7e.stopped) {
            this.bu8m()
        }
    };
    b7g.Sz2x = function (d7e) {
        h7a.z7s(document, "click")
    };
    b7g.bnL7E = function (d7e) {
        if (!this.oi2x) return;
        a6g.eY9P(this.oi2x, {
            top: d7e.top + "px",
            left: d7e.left + "px"
        })
    };
    b7g.JD8v = function () {
        var et9k = [
                function () {
                    return 0
                },
                function (om2x, mB1x, bi7b, J7C) {
                    if (J7C == "top" && window.top != window.self) {
                        var Xw3x = 0,
                            Gj7c = 0;
                        if (top.g_topBarHeight) Xw3x = top.g_topBarHeight;
                        if (top.g_bottomBarShow && top.g_bottomBarHeight) Gj7c = top.g_bottomBarHeight;
                        if (om2x.top <= Xw3x) {
                            var brI9z = Math.max(0, (mB1x.height - (Xw3x - om2x.top) - Gj7c - bi7b.height) / 2);
                            return brI9z + Xw3x
                        } else {
                            var brI9z = Math.max(0, (mB1x.height - Gj7c - bi7b.height) / 2);
                            return brI9z + om2x.top
                        }
                    }
                    return Math.max(0, om2x[J7C] + (mB1x[io0x[J7C]] - bi7b[io0x[J7C]]) / 2)
                },
                function (om2x, mB1x, bi7b, J7C) {
                    return om2x[J7C] + (mB1x[io0x[J7C]] - bi7b[io0x[J7C]])
                }
            ],
            cwI3x = ["left", "top"],
            io0x = {
                left: "width",
                top: "height"
            };
        return function () {
            var D7w = {},
                ch8Z = this.n7g.style,
                jD0x = a6g.oy2x(),
                om2x = {
                    left: jD0x.scrollLeft,
                    top: jD0x.scrollTop
                },
                mB1x = {
                    width: jD0x.clientWidth,
                    height: jD0x.clientHeight
                },
                bi7b = {
                    width: this.n7g.offsetWidth,
                    height: this.n7g.offsetHeight
                },
                do8g = {
                    left: jD0x.clientWidth - this.n7g.offsetWidth,
                    top: jD0x.clientHeight - this.n7g.offsetHeight
                };
            k7d.bd7W(cwI3x, function (J7C, r7k) {
                var dt8l = et9k[this.qN3x[r7k]];
                if (!dt8l) return;
                D7w[J7C] = dt8l(om2x, mB1x, bi7b, J7C)
            }, this);
            this.gF0x(D7w)
        }
    }();
    b7g.cwH3x = function () {
        if (!this.Bh6b) {
            if (!this.SE2x) return;
            this.se3x.parent = this.gg9X;
            this.Bh6b = this.SE2x.A7t(this.se3x)
        }
        this.Bh6b.L7E()
    };
    b7g.XT3x = function () {
        if (!!this.Bh6b) this.Bh6b.bu8m();
        K7D.XT3x.apply(this, arguments)
    };
    b7g.cwZ3x = function (kX1x) {
        if (!!kX1x) {
            if (kX1x instanceof N7G.JE8w) {
                this.Bh6b = kX1x;
                return
            }
            if (k7d.gG0x(kX1x)) {
                this.SE2x = kX1x;
                return
            }
            this.SE2x = N7G.JE8w;
            if (k7d.fG9x(kX1x)) this.se3x.clazz = kX1x;
            return
        }
        this.SE2x = null
    };
    b7g.Bg6a = function (el9c, dT9K) {
        if (!!this.bSP6J) {
            var bev5A = !dT9K ? "innerText" : "innerHTML";
            this.bSP6J[bev5A] = el9c || "标题"
        }
        return this
    };
    b7g.cwV3x = function () {
        var dh8Z = /\s+/,
            cwF3x = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            cwE3x = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function (nJ2x) {
            this.qN3x = (nJ2x || "").split(dh8Z);
            var ck8c = cwF3x[this.qN3x[0]];
            if (ck8c == null) ck8c = 1;
            this.qN3x[0] = ck8c;
            var ck8c = cwE3x[this.qN3x[1]];
            if (ck8c == null) ck8c = 1;
            this.qN3x[1] = ck8c;
            return this
        }
    }();
    b7g.L7E = function () {
        K7D.L7E.apply(this, arguments);
        this.cwH3x();
        return this
    };
    iZ0x = a6g.tO3x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gi9Z = a6g.iu0x('<div class="' + iZ0x + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c7f = NEJ.P,
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ui"),
        bsy9p;
    if (!!N7G.Xv3x) return;
    N7G.Xv3x = NEJ.C();
    bsy9p = N7G.Xv3x.O7H(N7G.XP3x);
    bsy9p.blJ7C = function () {
        return N7G.XA3x.A7t(this.cc8U)
    };
    bsy9p.So2x = function () {
        N7G.Xv3x.cs8k.So2x.apply(this, arguments);
        this.cc8U.mask = null;
        this.cc8U.title = "标题";
        this.cc8U.align = "";
        this.cc8U.draggable = !1;
        this.cc8U.onclose = null
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        bc7V = c7f("nej.ui"),
        m7f = c7f("nm.l"),
        b7g, K7D;
    m7f.en9e = NEJ.C();
    b7g = m7f.en9e.O7H(bc7V.Xv3x);
    b7g.bl7e = function (e7d) {
        e7d.clazz = "m-layer z-show " + (e7d.clazz || "");
        e7d.nohack = true;
        e7d.draggable = true;
        this.bm7f(e7d)
    };
    b7g.dP9G = function (f7c, bH8z) {
        if (!f7c) return;
        a6g.ba7T(f7c, "display", !bH8z ? "none" : "");
        f7c.lastChild.innerText = bH8z || ""
    };
    b7g.dX9O = function (gH0x, cX8P, SG2x, SI2x) {
        var dY9P = "js-lock";
        if (cX8P === undefined) return a6g.bE8w(gH0x, dY9P);
        !cX8P ? a6g.x7q(gH0x, dY9P) : a6g.y7r(gH0x, dY9P);
        gH0x.firstChild.innerText = !cX8P ? SG2x : SI2x
    };
    m7f.en9e.L7E = function (e7d) {
        e7d = e7d || {};
        if (e7d.mask === undefined) e7d.mask = "m-mask";
        if (e7d.parent === undefined) e7d.parent = document.body;
        if (e7d.draggable === undefined) e7d.draggable = true;
        !!this.ff9W && this.ff9W.T7M();
        this.ff9W = this.A7t(e7d);
        this.ff9W.L7E(e7d);
        return this.ff9W
    };
    m7f.en9e.bu8m = function () {
        !!this.ff9W && this.ff9W.T7M()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        m7f = c7f("nm.l"),
        b7g, K7D;
    m7f.bud9U = NEJ.C();
    b7g = m7f.bud9U.O7H(m7f.en9e);
    K7D = m7f.bud9U.cs8k;
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        if (e7d.bubble === undefined) e7d.bubble = true;
        this.SK2x = e7d.bubble;
        this.qC2x = e7d.message || ""
    };
    b7g.ce8W = function () {
        this.cd8V = a6g.iu0x('<div class="lyct f-cb f-tc"></div>')
    };
    b7g.bW8O = function () {
        this.cg8Y();
        h7a.s7l(this.n7g, "click", this.cM8E.g7b(this))
    };
    b7g.cM8E = function (d7e) {
        var f7c = h7a.W7P(d7e, "d:action");
        if (!f7c) return;
        if (f7c.href) h7a.cp8h(d7e);
        if (a6g.t7m(f7c, "action") == "close") this.bu8m();
        if (this.SK2x === !1) h7a.tr3x(d7e);
        this.z7s("onaction", a6g.t7m(f7c, "action"))
    };
    b7g.L7E = function () {
        K7D.L7E.call(this);
        this.n7g.innerHTML = this.qC2x
    };
    var gJ0x = a6g.es9j('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l7e.mZ1x = function () {
        var eg9X;
        var cz8r;
        var bva0x = function (fp9g, U7N) {
            if (k7d.gG0x(fp9g, "function") && fp9g(U7N) != -1) cz8r.T7M()
        };
        var Bm6g = function () {
            !!cz8r && cz8r.bu8m()
        };
        return function (e7d) {
            clearTimeout(eg9X);
            e7d = e7d || {};
            e7d.title = e7d.title || "提示";
            e7d.clazz = e7d.clazz || "";
            e7d.parent = e7d.parent || document.body;
            e7d.buttons = e7d.buttons || [];
            e7d.message = a6g.bZ8R(gJ0x, e7d);
            e7d.onaction = bva0x.g7b(null, e7d.action);
            if (e7d.mask === undefined) e7d.mask = true;
            if (e7d.draggable === undefined) e7d.draggable = true;
            !!cz8r && cz8r.T7M();
            cz8r = m7f.bud9U.A7t(e7d);
            cz8r.L7E();
            if (e7d.autoclose) eg9X = setTimeout(Bm6g.g7b(null), 2e3);
            return cz8r
        }
    }();
    l7e.fq9h = function (e7d) {
        e7d = e7d || {};
        e7d.clazz = e7d.clazz || "m-layer-w1";
        e7d.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e7d.btntxt || "确定"
        }];
        var cz8r = l7e.mZ1x(e7d);
        return cz8r
    };
    l7e.hi0x = function (e7d) {
        e7d = e7d || {};
        e7d.clazz = e7d.clazz || "m-layer-w2";
        e7d.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e7d.btnok || "确定",
            style: e7d.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e7d.btncc || "取消",
            style: e7d.ccstyle || ""
        }];
        var cz8r = l7e.mZ1x(e7d);
        return cz8r
    }
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u");
    a6g.cwD3x = function () {
        var gK0x = /[\r\n]/gi,
            R7K = {};
        var cwC3x = function (cI8A) {
            return (cI8A || "").replace(gK0x, "aa").length
        };
        var bSL6F = function (C7v) {
            var bg7Z = R7K[C7v],
                bSK6E = a6g.B7u(C7v),
                qz2x = a6g.B7u(C7v + "-counter");
            if (!bSK6E || !bg7Z) return;
            var d7e = {
                input: bSK6E.value
            };
            d7e.length = bg7Z.onlength(d7e.input);
            d7e.delta = bg7Z.max - d7e.length;
            bg7Z.onchange(d7e);
            qz2x.innerHTML = d7e.value || "剩余" + d7e.delta + "个字"
        };
        return function (F7y, e7d) {
            var C7v = a6g.lv1x(F7y);
            if (!C7v || !!R7K[C7v]) return;
            var bg7Z = NEJ.X({}, e7d);
            bg7Z.onchange = bg7Z.onchange || bs8k;
            bg7Z.onlength = cwC3x;
            if (!bg7Z.max) {
                var bSJ6D = parseInt(a6g.gh9Y(C7v, "maxlength")),
                    bSI6C = parseInt(a6g.t7m(C7v, "maxLength"));
                bg7Z.max = bSJ6D || bSI6C || 100;
                if (!bSJ6D && !!bSI6C) bg7Z.onlength = k7d.fy9p
            }
            R7K[C7v] = bg7Z;
            h7a.s7l(C7v, "input", bSL6F.g7b(null, C7v));
            var f7c = a6g.Iv8n(C7v, {
                nid: bg7Z.nid || "js-counter",
                clazz: bg7Z.clazz
            });
            bg7Z.xid = C7v + "-counter";
            f7c.id = bg7Z.xid;
            bSL6F(C7v)
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        be7X = c7f("nej.h");
    be7X.beQ5V = function (F7y, dZ9Q) {}
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        N7G = c7f("nej.p"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        be7X = c7f("nej.h");
    if (N7G.nj1x.trident) return;
    be7X.beQ5V = function () {
        var R7K = {};
        var HZ8R = function (d7e) {
            var dm8e = h7a.W7P(d7e);
            if (!!dm8e.value) return;
            a6g.ba7T(a6g.Iv8n(dm8e), "display", "none")
        };
        var Ez7s = function (d7e) {
            var dm8e = h7a.W7P(d7e);
            if (!!dm8e.value) return;
            a6g.ba7T(a6g.Iv8n(dm8e), "display", "")
        };
        var cwx3x = function (dm8e, dZ9Q) {
            var C7v = a6g.lv1x(dm8e),
                iU0x = a6g.Iv8n(dm8e, {
                    tag: "label",
                    clazz: dZ9Q
                });
            iU0x.htmlFor = C7v;
            var cG8y = a6g.gh9Y(dm8e, "placeholder") || "";
            iU0x.innerText = cG8y == "null" ? "" : cG8y;
            var ci8a = dm8e.offsetHeight + "px";
            a6g.eY9P(iU0x, {
                left: 0,
                display: !dm8e.value ? "" : "none"
            })
        };
        return be7X.beQ5V.eB9s(function (d7e) {
            d7e.stopped = !0;
            var bf7Y = d7e.args,
                dm8e = a6g.B7u(bf7Y[0]);
            if (!!R7K[dm8e.id]) return;
            cwx3x(dm8e, bf7Y[1]);
            R7K[dm8e.id] = !0;
            h7a.s7l(dm8e, "blur", Ez7s.g7b(null));
            h7a.s7l(dm8e, "focus", HZ8R.g7b(null))
        })
    }()
})();
(function () {
    var c7f = NEJ.P,
        be7X = c7f("nej.h"),
        a6g = c7f("nej.e"),
        cY8Q = c7f("nej.x");
    a6g.gn9e = cY8Q.gn9e = function (F7y, dZ9Q) {
        be7X.beQ5V(F7y, a6g.t7m(F7y, "holder") || dZ9Q || "js-placeholder");
        return this
    };
    cY8Q.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        hL0x;
    if (!!N7G.SM2x) return;
    N7G.SM2x = NEJ.C();
    hL0x = N7G.SM2x.O7H(N7G.cH8z);
    hL0x.cx8p = function () {
        this.cD8v();
        this.EI7B = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    hL0x.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.gu9l = document.forms[e7d.form] || a6g.B7u(e7d.form);
        this.bX8P([
            [this.gu9l, "keypress", this.cwt3x.g7b(this)]
        ]);
        this.qC2x = e7d.message || {};
        this.qC2x.pass = this.qC2x.pass || "&nbsp;";
        var fl9c = this.qd2x(this.gu9l, "focusMode", 1);
        if (!isNaN(fl9c)) {
            this.bSG6A = {
                mode: fl9c,
                clazz: e7d.focus
            }
        }
        this.Bo6i = e7d.holder;
        this.EI7B.tp.clazz = "js-mhd " + (e7d.tip || "js-tip");
        this.EI7B.ok.clazz = "js-mhd " + (e7d.pass || "js-pass");
        this.EI7B.er.clazz = "js-mhd " + (e7d.error || "js-error");
        this.bSD6x = e7d.invalid || "js-invalid";
        this.cwo3x(e7d);
        this.gB0x();
        if (!!this.Bp6j) this.Bp6j.focus()
    };
    hL0x.bD8v = function () {
        this.bG8y();
        delete this.qC2x;
        delete this.Bp6j;
        delete this.Fc7V;
        delete this.gu9l;
        delete this.bSB6v;
        delete this.SP2x
    };
    hL0x.qd2x = function (f7c, vY4c, u7n) {
        var D7w = a6g.t7m(f7c, vY4c);
        switch (u7n) {
        case 1:
            return parseInt(D7w);
        case 2:
            return (D7w || "").toLowerCase() == "true";
        case 3:
            return this.bgx5C(D7w)
        }
        return D7w
    };
    hL0x.Bt6n = function (D7w, u7n) {
        if (u7n == "date") return this.bgx5C(D7w);
        return parseInt(D7w)
    };
    hL0x.Xm3x = function () {
        var ku1x = /^button|submit|reset|image|hidden|file$/i;
        return function (f7c) {
            f7c = this.B7u(f7c) || f7c;
            var u7n = f7c.type;
            return !!f7c.name && !ku1x.test(f7c.type || "")
        }
    }();
    hL0x.cwk3x = function () {
        var ku1x = /^hidden$/i;
        return function (f7c) {
            if (this.Xm3x(f7c)) return !0;
            f7c = this.B7u(f7c) || f7c;
            var u7n = f7c.type || "";
            return ku1x.test(u7n)
        }
    }();
    hL0x.bgx5C = function () {
        var dh8Z = /[-\/]/;
        var cwj3x = function (D7w) {
            if (!D7w) return "";
            D7w = D7w.split(dh8Z);
            D7w.push(D7w.shift());
            return D7w.join("/")
        };
        return function (D7w) {
            if ((D7w || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cwj3x(D7w))
        }
    }();
    hL0x.cwt3x = function (d7e) {
        if (d7e.keyCode != 13) return;
        this.z7s("onenter", d7e)
    };
    hL0x.cwi3x = function (C7v, V7O) {
        var rA3x = this.SP2x[V7O],
            D7w = this.qd2x(C7v, V7O);
        if (!D7w || !rA3x) return;
        this.Xk3x(C7v, rA3x);
        this.bho6i(C7v, V7O, D7w)
    };
    hL0x.cwb3x = function (C7v, V7O) {
        try {
            var bSx6r = this.qd2x(C7v, V7O);
            if (!bSx6r) return;
            var D7w = new RegExp(bSx6r);
            this.bho6i(C7v, V7O, D7w);
            this.Xk3x(C7v, this.SP2x[V7O])
        } catch (e) {}
    };
    hL0x.cvY3x = function (C7v, V7O) {
        var rA3x = this.SP2x[V7O];
        if (!!rA3x && this.qd2x(C7v, V7O, 2)) this.Xk3x(C7v, rA3x)
    };
    hL0x.bhE6y = function (C7v, V7O, D7w) {
        D7w = parseInt(D7w);
        if (isNaN(D7w)) return;
        this.bho6i(C7v, V7O, D7w);
        this.Xk3x(C7v, this.SP2x[V7O])
    };
    hL0x.bSv6p = function (C7v, V7O) {
        this.bhE6y(C7v, V7O, this.qd2x(C7v, V7O))
    };
    hL0x.bSt6n = function (C7v, V7O) {
        this.bhE6y(C7v, V7O, a6g.gh9Y(C7v, V7O))
    };
    hL0x.bSs6m = function (C7v, V7O, u7n) {
        var D7w = this.Bt6n(this.qd2x(C7v, V7O), this.qd2x(C7v, "type"));
        this.bhE6y(C7v, V7O, D7w)
    };
    hL0x.cvT3x = function () {
        var gK0x = /^input|textarea$/i;
        var HZ8R = function (d7e) {
            this.qh2x(h7a.W7P(d7e))
        };
        var Ez7s = function (d7e) {
            var f7c = h7a.W7P(d7e);
            if (!this.qd2x(f7c, "ignore", 2)) {
                this.bSr6l(f7c)
            }
        };
        return function (f7c) {
            if (this.qd2x(f7c, "autoFocus", 2)) this.Bp6j = f7c;
            var ql2x = a6g.gh9Y(f7c, "placeholder");
            if (!!ql2x && ql2x != "null") a6g.gn9e(f7c, this.Bo6i);
            if (!!this.bSG6A && gK0x.test(f7c.tagName)) a6g.mP1x(f7c, this.bSG6A);
            var C7v = a6g.lv1x(f7c);
            this.cvY3x(C7v, "required");
            this.cwi3x(C7v, "type");
            this.cwb3x(C7v, "pattern");
            this.bSt6n(C7v, "maxlength");
            this.bSt6n(C7v, "minlength");
            this.bSv6p(C7v, "maxLength");
            this.bSv6p(C7v, "minLength");
            this.bSs6m(C7v, "min");
            this.bSs6m(C7v, "max");
            var V7O = f7c.name;
            this.qC2x[V7O + "-tip"] = this.qd2x(f7c, "tip");
            this.qC2x[V7O + "-error"] = this.qd2x(f7c, "message");
            this.qh2x(f7c);
            var by8q = this.Fc7V[C7v],
                j7c = (by8q || bb7U).data || bb7U,
                Tf2x = this.qd2x(f7c, "counter", 2);
            if (Tf2x && (j7c.maxlength || j7c.maxLength)) {
                a6g.cwD3x(C7v, {
                    nid: this.EI7B.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!by8q && gK0x.test(f7c.tagName)) {
                this.bX8P([
                    [f7c, "focus", HZ8R.g7b(this)],
                    [f7c, "blur", Ez7s.g7b(this)]
                ])
            } else if (this.qd2x(f7c, "focus", 2)) {
                this.bX8P([
                    [f7c, "focus", HZ8R.g7b(this)]
                ])
            }
        }
    }();
    hL0x.cwo3x = function () {
        var Gk7d = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bgx5C(v))
            }
        };
        var cvO3x = {
            required: function (f7c) {
                var u7n = f7c.type,
                    cvN3x = !f7c.value,
                    cvM3x = (u7n == "checkbox" || u7n == "radio") && !f7c.checked;
                if (cvM3x || cvN3x) return -1
            }, type: function (f7c, e7d) {
                var dh8Z = this.bSB6v[e7d.type],
                    eQ9H = f7c.value.trim(),
                    cvG3x = !!dh8Z.test && !dh8Z.test(eQ9H),
                    cvC3x = k7d.gG0x(dh8Z) && !dh8Z.call(this, eQ9H);
                if (cvG3x || cvC3x) return -2
            }, pattern: function (f7c, e7d) {
                if (!e7d.pattern.test(f7c.value)) return -3
            }, maxlength: function (f7c, e7d) {
                if (f7c.value.length > e7d.maxlength) return -4
            }, minlength: function (f7c, e7d) {
                if (f7c.value.length < e7d.minlength) return -5
            }, maxLength: function (f7c, e7d) {
                if (k7d.fy9p(f7c.value) > e7d.maxLength) return -4
            }, minLength: function (f7c, e7d) {
                if (k7d.fy9p(f7c.value) < e7d.minLength) return -5
            }, min: function (f7c, e7d) {
                var gR0x = this.Bt6n(f7c.value, e7d.type);
                if (isNaN(gR0x) || gR0x < e7d.min) return -6
            }, max: function (f7c, e7d) {
                var gR0x = this.Bt6n(f7c.value, e7d.type);
                if (isNaN(gR0x) || gR0x > e7d.max) return -7
            }
        };
        return function (e7d) {
            this.bSB6v = NEJ.X(NEJ.X({}, Gk7d), e7d.type);
            this.SP2x = NEJ.X(NEJ.X({}, cvO3x), e7d.attr)
        }
    }();
    hL0x.Xk3x = function (C7v, yV5a) {
        if (!k7d.gG0x(yV5a)) return;
        var by8q = this.Fc7V[C7v];
        if (!by8q || !by8q.func) {
            by8q = by8q || {};
            by8q.func = [];
            this.Fc7V[C7v] = by8q
        }
        by8q.func.push(yV5a)
    };
    hL0x.bho6i = function (C7v, V7O, D7w) {
        if (!V7O) return;
        var by8q = this.Fc7V[C7v];
        if (!by8q || !by8q.data) {
            by8q = by8q || {};
            by8q.data = {};
            this.Fc7V[C7v] = by8q
        }
        by8q.data[V7O] = D7w
    };
    hL0x.bSr6l = function (f7c) {
        f7c = this.B7u(f7c) || f7c;
        var by8q = this.Fc7V[a6g.lv1x(f7c)];
        if (!f7c || !by8q || !this.Xm3x(f7c)) return !0;
        var o7h;
        k7d.eC9t(by8q.func, function (et9k) {
            o7h = et9k.call(this, f7c, by8q.data);
            return o7h != null
        }, this);
        if (o7h == null) {
            var d7e = {
                target: f7c,
                form: this.gu9l
            };
            this.z7s("oncheck", d7e);
            o7h = d7e.value
        }
        var d7e = {
            target: f7c,
            form: this.gu9l
        };
        if (o7h != null) {
            d7e.code = o7h;
            this.z7s("oninvalid", d7e);
            if (!d7e.stopped) {
                this.cvA3x(f7c, d7e.value || this.qC2x[f7c.name + o7h])
            }
        } else {
            this.z7s("onvalid", d7e);
            if (!d7e.stopped) this.cvz3x(f7c, d7e.value)
        }
        return o7h == null
    };
    hL0x.yT5Y = function () {
        var cvy3x = function (bdR5W, bdQ5V) {
            return bdR5W == bdQ5V ? "block" : "none"
        };
        var cvv3x = function (f7c, u7n, bH8z) {
            var ql2x = bSi6c.call(this, f7c, u7n);
            if (!ql2x && !!bH8z) ql2x = a6g.Iv8n(f7c, this.EI7B[u7n]);
            return ql2x
        };
        var bSi6c = function (f7c, u7n) {
            var ql2x;
            if (u7n == "tp") ql2x = a6g.B7u(f7c.name + "-tip");
            if (!ql2x) ql2x = a6g.H7A(f7c.parentNode, this.EI7B[u7n].nid)[0];
            return ql2x
        };
        return function (f7c, bH8z, u7n) {
            f7c = this.B7u(f7c) || f7c;
            if (!f7c) return;
            u7n == "er" ? a6g.y7r(f7c, this.bSD6x) : a6g.x7q(f7c, this.bSD6x);
            var ql2x = cvv3x.call(this, f7c, u7n, bH8z);
            if (!!ql2x && !!bH8z) ql2x.innerHTML = bH8z;
            k7d.eC9t(this.EI7B, function (D7w, J7C) {
                a6g.ba7T(bSi6c.call(this, f7c, J7C), "display", cvy3x(u7n, J7C))
            }, this)
        }
    }();
    hL0x.qh2x = function (f7c, bH8z) {
        this.yT5Y(f7c, bH8z || this.qC2x[f7c.name + "-tip"], "tp");
        return this
    };
    hL0x.cvz3x = function (f7c, bH8z) {
        this.yT5Y(f7c, bH8z || this.qC2x[f7c.name + "-pass"] || this.qC2x.pass, "ok");
        return this
    };
    hL0x.cvA3x = function (f7c, bH8z) {
        this.yT5Y(f7c, bH8z || this.qC2x[f7c.name + "-error"], "er");
        return this
    };
    hL0x.iO0x = function () {
        var gK0x = /^(?:radio|checkbox)$/i;
        var cvs3x = function (D7w) {
            return D7w == null ? "" : D7w
        };
        var bSg6a = function (D7w, f7c) {
            if (gK0x.test(f7c.type || "")) {
                f7c.checked = D7w == f7c.value
            } else {
                f7c.value = cvs3x(D7w)
            }
        };
        return function (V7O, D7w) {
            var f7c = this.B7u(V7O);
            if (!f7c) return this;
            if (f7c.tagName == "SELECT" || !f7c.length) {
                bSg6a(D7w, f7c)
            } else {
                k7d.bd7W(f7c, bSg6a.g7b(null, D7w))
            }
            return this
        }
    }();
    hL0x.B7u = function (V7O) {
        return this.gu9l.elements[V7O]
    };
    hL0x.cDr4v = function () {
        return this.gu9l
    };
    hL0x.WX3x = function () {
        var gK0x = /^radio|checkbox$/i,
            ku1x = /^number|date$/;
        var cvo3x = function (bz8r, f7c) {
            var V7O = f7c.name,
                D7w = f7c.value,
                by8q = bz8r[V7O],
                u7n = this.qd2x(f7c, "type");
            if (ku1x.test(u7n)) D7w = this.Bt6n(D7w, u7n);
            if (gK0x.test(f7c.type) && !f7c.checked) {
                D7w = this.qd2x(f7c, "value");
                if (!D7w) return
            }
            if (!!by8q) {
                if (!k7d.eJ9A(by8q)) {
                    by8q = [by8q];
                    bz8r[V7O] = by8q
                }
                by8q.push(D7w)
            } else {
                bz8r[V7O] = D7w
            }
        };
        return function () {
            var o7h = {};
            k7d.bd7W(this.gu9l.elements, function (f7c) {
                if (this.cwk3x(f7c)) cvo3x.call(this, o7h, f7c)
            }, this);
            return o7h
        }
    }();
    hL0x.JM8E = function () {
        var cvl3x = function (f7c) {
            if (this.Xm3x(f7c)) this.qh2x(f7c)
        };
        return function () {
            this.gu9l.reset();
            k7d.bd7W(this.gu9l.elements, cvl3x, this);
            return this
        }
    }();
    hL0x.cDt4x = function () {
        this.gu9l.submit();
        return this
    };
    hL0x.gB0x = function () {
        var cvj3x = function (f7c) {
            if (this.Xm3x(f7c)) this.cvT3x(f7c)
        };
        return function () {
            this.Fc7V = {};
            k7d.bd7W(this.gu9l.elements, cvj3x, this);
            return this
        }
    }();
    hL0x.cvi3x = function (f7c) {
        f7c = this.B7u(f7c) || f7c;
        if (!!f7c) return this.bSr6l(f7c);
        var o7h = !0;
        k7d.bd7W(this.gu9l.elements, function (f7c) {
            var ll1x = this.cvi3x(f7c);
            o7h = o7h && ll1x
        }, this);
        return o7h
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x"),
        m7f = c7f("nm.l"),
        b7g, K7D;
    m7f.WS3x = NEJ.C();
    b7g = m7f.WS3x.O7H(m7f.en9e);
    K7D = m7f.WS3x.cs8k;
    b7g.bW8O = function () {
        this.cg8Y();
        h7a.s7l(this.n7g, "click", this.cM8E.g7b(this));
        h7a.s7l(document, "mousewheel", this.BF6z.g7b(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.BF6z.g7b(this))
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        if (e7d.jst) {
            this.n7g.innerHTML = a6g.bZ8R(e7d.jst, e7d.data)
        } else if (e7d.ntp) {
            this.n7g.appendChild(a6g.dy8q(e7d.ntp))
        } else if (e7d.txt) {
            this.n7g.innerHTML = a6g.iI0x(e7d.txt)
        } else if (e7d.html) {
            this.n7g.innerHTML = e7d.html
        }
        var Tu2x = this.n7g.getElementsByTagName("form");
        if (Tu2x.length) {
            this.gu9l = I7B.SM2x.A7t({
                form: Tu2x[0]
            })
        }
        this.Dy6s = a6g.dk8c(this.n7g)[0]
    };
    b7g.bD8v = function () {
        this.z7s("ondestroy");
        this.bG8y();
        this.n7g.innerHTML = "";
        delete this.Dy6s
    };
    b7g.cM8E = function (d7e) {
        var f7c = h7a.W7P(d7e, "d:action"),
            j7c = this.gu9l ? this.gu9l.WX3x() : null,
            d7e = {
                action: a6g.t7m(f7c, "action")
            };
        if (j7c) d7e.data = j7c;
        if (d7e.action) {
            this.z7s("onaction", d7e);
            if (d7e.stopped) return;
            this.bu8m()
        }
    };
    b7g.BF6z = function (d7e) {
        if (!this.Dy6s) return;
        h7a.bh7a(d7e);
        var do8g = d7e.wheelDelta || -d7e.detail;
        this.Dy6s.scrollTop -= do8g
    };
    l7e.kk1x = function (e7d) {
        e7d.destroyable = e7d.destroyable || true;
        e7d.title = e7d.title || "提示";
        e7d.draggable = true;
        e7d.parent = e7d.parent || document.body;
        e7d.mask = e7d.mask || true;
        var AZ6T = m7f.WS3x.A7t(e7d);
        AZ6T.L7E();
        return AZ6T
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bSb6V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Ty2x = {},
        DD6x = {};
    for (var i = 0, l = bSb6V.length, c; i < l; i++) {
        c = bSb6V.charAt(i);
        Ty2x[i] = c;
        DD6x[c] = i
    }
    var cvg3x = function (iv0x) {
        var r7k = 0,
            c, o7h = [];
        while (r7k < iv0x.length) {
            c = iv0x[r7k];
            if (c < 128) {
                o7h.push(String.fromCharCode(c));
                r7k++
            } else if (c > 191 && c < 224) {
                o7h.push(String.fromCharCode((c & 31) << 6 | iv0x[r7k + 1] & 63));
                r7k += 2
            } else {
                o7h.push(String.fromCharCode((c & 15) << 12 | (iv0x[r7k + 1] & 63) << 6 | iv0x[r7k + 2] & 63));
                r7k += 3
            }
        }
        return o7h.join("")
    };
    var cvf3x = function () {
        var hu0x = /\r\n/g;
        return function (j7c) {
            j7c = j7c.replace(hu0x, "\n");
            var o7h = [],
                mz1x = String.fromCharCode(237);
            if (mz1x.charCodeAt(0) < 0)
                for (var i = 0, l = j7c.length, c; i < l; i++) {
                    c = j7c.charCodeAt(i);
                    c > 0 ? o7h.push(c) : o7h.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = j7c.length, c; i < l; i++) {
                        c = j7c.charCodeAt(i);
                        if (c < 128) o7h.push(c);
                        else if (c > 127 && c < 2048) o7h.push(c >> 6 | 192, c & 63 | 128);
                        else o7h.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return o7h
        }
    }();
    var JS8K = function (iv0x) {
        var r7k = 0,
            o7h = [],
            fl9c = iv0x.length % 3;
        if (fl9c == 1) iv0x.push(0, 0);
        if (fl9c == 2) iv0x.push(0);
        while (r7k < iv0x.length) {
            o7h.push(Ty2x[iv0x[r7k] >> 2], Ty2x[(iv0x[r7k] & 3) << 4 | iv0x[r7k + 1] >> 4], Ty2x[(iv0x[r7k + 1] & 15) << 2 | iv0x[r7k + 2] >> 6], Ty2x[iv0x[r7k + 2] & 63]);
            r7k += 3
        }
        if (fl9c == 1) o7h[o7h.length - 1] = o7h[o7h.length - 2] = "=";
        if (fl9c == 2) o7h[o7h.length - 1] = "=";
        return o7h.join("")
    };
    var bRZ6T = function () {
        var rt3x = /\n|\r|=/g;
        return function (j7c) {
            var r7k = 0,
                o7h = [];
            j7c = j7c.replace(rt3x, "");
            for (var i = 0, l = j7c.length; i < l; i += 4) o7h.push(DD6x[j7c.charAt(i)] << 2 | DD6x[j7c.charAt(i + 1)] >> 4, (DD6x[j7c.charAt(i + 1)] & 15) << 4 | DD6x[j7c.charAt(i + 2)] >> 2, (DD6x[j7c.charAt(i + 2)] & 3) << 6 | DD6x[j7c.charAt(i + 3)]);
            var bq7j = o7h.length,
                fl9c = j7c.length % 4;
            if (fl9c == 2) o7h = o7h.slice(0, bq7j - 2);
            if (fl9c == 3) o7h = o7h.slice(0, bq7j - 1);
            return o7h
        }
    }();
    p.cDv4z = function (j7c) {
        return cvg3x(bRZ6T(j7c))
    };
    p.cvb3x = function (j7c) {
        var iv0x = bRZ6T(j7c),
            dr8j = iv0x.length,
            it0x;
        var r7k = 0;
        while (it0x = iv0x[r7k]) {
            if (it0x > 128) {
                iv0x[r7k] = it0x - 256
            }
            r7k++
        }
        return iv0x
    };
    p.cuZ3x = function (j7c) {
        try {
            return window.btoa(j7c)
        } catch (ex) {
            return JS8K(cvf3x(j7c))
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        N7G = c7f("nej.p"),
        k7d = c7f("nej.u"),
        m7f = c7f("nm.l"),
        w7p = c7f("nm.w"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    m7f.bRX6R = NEJ.C();
    b7g = m7f.bRX6R.O7H(m7f.en9e);
    b7g.ce8W = function () {
        this.cd8V = "m-download-layer"
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var i7b = a6g.H7A(this.n7g, "j-flag");
        this.bkT7M = i7b[0];
        this.bkV7O = i7b[1];
        this.bRW6Q = i7b[2];
        v7o.bn7g("/client/version/get", {
            type: "json",
            onload: this.cuV3x.g7b(this)
        });
        if (N7G.HP8H.mac) {
            a6g.x7q(this.bkT7M.parentNode, "f-hide");
            a6g.y7r(this.bkV7O.parentNode, "f-hide");
            a6g.y7r(this.bRW6Q, "f-hide")
        } else {
            a6g.y7r(this.bkT7M.parentNode, "f-hide");
            a6g.x7q(this.bkV7O.parentNode, "f-hide");
            a6g.x7q(this.bRW6Q, "f-hide")
        }
    };
    b7g.bl7e = function (e7d) {
        e7d.clazz = " m-layer-down";
        e7d.parent = e7d.parent || document.body;
        e7d.title = "下载";
        e7d.draggable = !0;
        e7d.destroyalbe = !0;
        e7d.mask = true;
        this.bm7f(e7d);
        this.bX8P([
            [this.n7g, "click", this.bT8L.g7b(this)]
        ]);
        this.ey9p = TYPE_MAP[e7d.type];
        this.gY0x = e7d.id
    };
    b7g.bD8v = function () {
        this.bG8y()
    };
    b7g.BH6B = function () {
        this.bu8m()
    };
    b7g.Ev7o = function (d7e) {
        this.z7s("onok", D7w);
        this.bu8m()
    };
    b7g.bT8L = function (d7e) {
        var f7c = h7a.W7P(d7e, "d:action");
        switch (a6g.t7m(f7c, "action")) {
        case "download":
            this.bu8m();
            window.open(a6g.t7m(f7c, "src"));
            break;
        case "orpheus":
            this.bu8m();
            location.href = "orpheus://" + k7d.cuZ3x(JSON.stringify({
                type: this.ey9p,
                id: this.gY0x,
                cmd: "download"
            }));
            break
        }
    };
    b7g.cuV3x = function (d7e) {
        if ((d7e || bb7U).code == 200) {
            this.Jn8f = d7e.data;
            this.bkT7M.innerText = "V" + this.Jn8f.mac;
            this.bkV7O.innerText = "V" + this.Jn8f.pc
        }
    };
    l7e.JU8M = function (e7d) {
        m7f.bRX6R.A7t(e7d).L7E()
    }
})();
(function () {
    var c7f = NEJ.P,
        l7e = c7f("nm.x");
    var FullscreenApi = {};
    var apiMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l7e.EA7t = FullscreenApi
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        k7d = c7f("nej.u"),
        q7j = c7f("nm.d"),
        bS8K = {};
    q7j.B7u = function (J7C) {
        return bS8K[J7C]
    };
    q7j.na1x = function (J7C, bg7Z) {
        bS8K[J7C] = bg7Z
    };
    q7j.fe9V = function (j7c) {
        k7d.eC9t(j7c, function (p7i, J7C) {
            var bg7Z = bS8K[J7C] || {};
            NEJ.X(bg7Z, p7i);
            bS8K[J7C] = bg7Z
        })
    }
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        be7X = c7f("nej.h");
    be7X.Wx3x = function (J7C) {
        return localStorage.getItem(J7C)
    };
    be7X.Ww3x = function (J7C, D7w) {
        localStorage.setItem(J7C, D7w)
    };
    be7X.bmk7d = function (J7C) {
        localStorage.removeItem(J7C)
    };
    be7X.bml7e = function () {
        localStorage.clear()
    };
    be7X.cuU3x = function () {
        var o7h = [];
        for (var i = 0, l = localStorage.length; i < l; i++) o7h.push(localStorage.key(i));
        return o7h
    };
    be7X.bmz7s = function () {
        (document.onstorageready || bs8k)()
    };
    be7X.bmQ7J = function () {
        return !0
    }
})();
(function () {
    var c7f = NEJ.P,
        N7G = c7f("nej.p"),
        it0x = c7f("nej.c"),
        be7X = c7f("nej.h"),
        tu3x;
    if (N7G.nj1x.trident || !!window.localStorage) return;
    var cuT3x = function () {
        var rz3x, eg9X;
        var bki6c = function () {
            rz3x = document.createElement("div");
            NEJ.X(rz3x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rz3x);
            rz3x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + it0x.B7u("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Re1x = function () {
            eg9X = window.clearTimeout(eg9X);
            var hT0x = rz3x.getElementsByTagName("object")[0];
            if (!!hT0x.initStorage) {
                delete rz3x;
                tu3x = hT0x;
                tu3x.initStorage("nej-storage");
                (document.onstorageready || bs8k)();
                return
            }
            eg9X = window.setTimeout(Re1x, 500)
        };
        return function () {
            if (!!tu3x) return;
            bki6c();
            Re1x()
        }
    }();
    be7X.Wx3x = be7X.Wx3x.eB9s(function (d7e) {
        d7e.stopped = !0;
        if (!tu3x) return;
        d7e.value = tu3x.getItem(d7e.args[0])
    });
    be7X.Ww3x = be7X.Ww3x.eB9s(function (d7e) {
        d7e.stopped = !0;
        if (!tu3x) return;
        var bf7Y = d7e.args;
        tu3x.setItem(bf7Y[0], bf7Y[1])
    });
    be7X.bmk7d = be7X.bmk7d.eB9s(function (d7e) {
        d7e.stopped = !0;
        if (!tu3x) return;
        tu3x.removeItem(d7e.args[0])
    });
    be7X.bml7e = be7X.bml7e.eB9s(function (d7e) {
        d7e.stopped = !0;
        if (!!tu3x) tu3x.clear()
    });
    be7X.bmz7s = be7X.bmz7s.eB9s(function (d7e) {
        d7e.stopped = !0;
        cuT3x()
    });
    be7X.bmQ7J = be7X.bmQ7J.eB9s(function (d7e) {
        d7e.stopped = !0;
        d7e.value = !!tu3x
    })
})();
(function () {
    var c7f = NEJ.P,
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        be7X = c7f("nej.h"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        R7K = {};
    v7o.uW4a = function (J7C, D7w) {
        var bRV6P = JSON.stringify(D7w);
        try {
            be7X.Ww3x(J7C, bRV6P)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bRV6P != be7X.Wx3x(J7C)) R7K[J7C] = D7w;
        return this
    };
    v7o.sw3x = function (J7C) {
        var j7c = JSON.parse(be7X.Wx3x(J7C) || "null");
        return j7c == null ? R7K[J7C] : j7c
    };
    v7o.bRU6O = function (J7C, D7w) {
        var j7c = v7o.sw3x(J7C);
        if (j7c == null) {
            j7c = D7w;
            v7o.uW4a(J7C, j7c)
        }
        return j7c
    };
    v7o.JV8N = function (J7C) {
        delete R7K[J7C];
        be7X.bmk7d(J7C);
        return this
    };
    v7o.cDw4A = function () {
        var bnv7o = function (p7i, J7C, bz8r) {
            delete bz8r[J7C]
        };
        return function () {
            k7d.eC9t(R7K, bnv7o);
            be7X.bml7e();
            return this
        }
    }();
    v7o.cDx4B = function (o7h) {
        o7h = o7h || {};
        k7d.bd7W(be7X.cuU3x(), function (J7C) {
            o7h[J7C] = v7o.sw3x(J7C)
        });
        return o7h
    };
    I7B.fJ9A.A7t({
        element: document,
        event: "storageready",
        oneventadd: function () {
            if (be7X.bmQ7J()) {
                document.onstorageready()
            }
        }
    });
    var cuL2x = function () {
        var cuH2x = function (D7w, J7C, bz8r) {
            be7X.Ww3x(J7C, JSON.stringify(D7w));
            delete bz8r[J7C]
        };
        return function () {
            k7d.eC9t(R7K, cuH2x)
        }
    }();
    h7a.s7l(document, "storageready", cuL2x);
    be7X.bmz7s()
})();
(function () {
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        JW8O;
    if (!!N7G.bnM8E) return;
    N7G.bnM8E = NEJ.C();
    JW8O = N7G.bnM8E.O7H(N7G.cH8z);
    JW8O.cx8p = function () {
        var gJ0x = +(new Date),
            mR1x = "dat-" + gJ0x;
        return function () {
            this.cD8v();
            var R7K = this.constructor[mR1x];
            if (!R7K) {
                R7K = {};
                this.constructor[mR1x] = R7K
            }
            this.S7L = R7K
        }
    }();
    JW8O.B7u = function (J7C) {
        return this.S7L[J7C]
    };
    JW8O.na1x = function (J7C, D7w) {
        var nq2x = this.S7L[J7C];
        this.S7L[J7C] = D7w;
        h7a.z7s(localCache, "cachechange", {
            key: J7C,
            type: "set",
            oldValue: nq2x,
            newValue: D7w
        });
        return this
    };
    JW8O.cJ8B = function (J7C) {
        var nq2x = this.S7L[J7C];
        k7d.bbo4s(this.S7L, J7C);
        h7a.z7s(localCache, "cachechange", {
            key: J7C,
            type: "delete",
            oldValue: nq2x,
            newValue: undefined
        });
        return nq2x
    };
    JW8O.Wt3x = function (FT7M) {
        return NEJ.Q(this.S7L, FT7M)
    };
    window.localCache = N7G.bnM8E.A7t();
    N7G.fJ9A.A7t({
        element: localCache,
        event: "cachechange"
    })
})();
(function () {
    var c7f = NEJ.P,
        fx9o = NEJ.R,
        bs8k = NEJ.F,
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        N7G = c7f("nej.ut"),
        mR1x = "dat-" + +(new Date),
        ny2x;
    if (!!N7G.bof8X) return;
    N7G.bof8X = NEJ.C();
    ny2x = N7G.bof8X.O7H(N7G.cH8z);
    ny2x.cx8p = function () {
        this.cD8v();
        this.S7L = this.constructor[mR1x];
        if (!this.S7L) {
            this.S7L = {};
            this.S7L[mR1x + "-l"] = {};
            this.constructor[mR1x] = this.S7L
        }
    };
    ny2x.sh3x = function (J7C) {
        return this.S7L[J7C]
    };
    ny2x.qb2x = function (J7C, D7w) {
        this.S7L[J7C] = D7w
    };
    ny2x.ls1x = function (J7C, kg1x) {
        var j7c = this.sh3x(J7C);
        if (j7c == null) {
            j7c = kg1x;
            this.qb2x(J7C, j7c)
        }
        return j7c
    };
    ny2x.cuF2x = function (J7C) {
        if (J7C != null) {
            delete this.S7L[J7C];
            return
        }
        k7d.eC9t(this.S7L, function (p7i, J7C) {
            if (J7C == mR1x + "-l") return;
            this.cuF2x(J7C)
        }, this)
    };
    ny2x.cDz4D = function (J7C) {
        if (!!v7o.JV8N) return v7o.JV8N(J7C)
    };
    ny2x.cuB2x = function (J7C) {
        if (!!v7o.sw3x) return v7o.sw3x(J7C)
    };
    ny2x.cuA2x = function (J7C, D7w) {
        if (!!v7o.uW4a) v7o.uW4a(J7C, D7w)
    };
    ny2x.FE7x = function (J7C, kg1x) {
        var j7c = this.Ur2x(J7C);
        if (j7c == null) {
            j7c = kg1x;
            this.wr4v(J7C, j7c)
        }
        return j7c
    };
    ny2x.Ur2x = function (J7C) {
        var j7c = this.sh3x(J7C);
        if (j7c != null) return j7c;
        j7c = this.cuB2x(J7C);
        if (j7c != null) this.qb2x(J7C, j7c);
        return j7c
    };
    ny2x.wr4v = function (J7C, D7w) {
        this.cuA2x(J7C, D7w);
        this.qb2x(J7C, D7w)
    };
    ny2x.bRM6G = function (J7C) {
        if (J7C != null) {
            delete this.S7L[J7C];
            if (!!v7o.JV8N) v7o.JV8N(J7C);
            return
        }
        k7d.eC9t(this.S7L, function (p7i, J7C) {
            if (J7C == mR1x + "-l") return;
            this.bRM6G(J7C)
        }, this)
    };
    ny2x.cDA4E = function () {
        this.bRM6G();
        return this
    };
    ny2x.cDD4H = function (J7C) {
        var j7c = this.S7L[mR1x + "-l"];
        delete j7c[J7C]
    };
    ny2x.bpG8y = function (J7C) {
        var j7c = this.S7L[mR1x + "-l"],
            bf7Y = fx9o.slice.call(arguments, 1);
        k7d.bd7W(j7c[J7C], function (cK8C) {
            try {
                cK8C.apply(null, bf7Y)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j7c[J7C]
    };
    ny2x.bpP8H = function (J7C, cK8C) {
        cK8C = cK8C || bs8k;
        var i7b = this.S7L[mR1x + "-l"][J7C];
        if (!i7b) {
            i7b = [cK8C];
            this.S7L[mR1x + "-l"][J7C] = i7b;
            return !1
        }
        i7b.push(cK8C);
        return !0
    };
    ny2x.cuu2x = function (i7b, bi7b, gc9T) {
        if (!i7b) return !1;
        bi7b = parseInt(bi7b) || 0;
        gc9T = parseInt(gc9T) || 0;
        if (!gc9T) {
            if (!i7b.loaded) return !1;
            gc9T = i7b.length
        }
        if (!!i7b.loaded) gc9T = Math.min(gc9T, i7b.length - bi7b);
        for (var i = 0; i < gc9T; i++)
            if (!i7b[bi7b + i]) return !1;
        return !0
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        b7g, K7D;
    if (!!N7G.Uv2x) return;
    N7G.Uv2x = NEJ.C();
    b7g = N7G.Uv2x.O7H(N7G.bof8X);
    K7D = N7G.Uv2x.cs8k;
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.wl4p = e7d.key || "id";
        this.bk7d = e7d.data || bb7U;
        this.cus2x = !!e7d.autogc;
        this.cuq2x(e7d.id)
    };
    b7g.bD8v = function () {
        this.bG8y();
        if (!!this.ed9U) {
            this.bRJ6D()
        }
    };
    b7g.cuq2x = function (C7v) {
        var R7K;
        if (!!C7v) {
            R7K = this.S7L[C7v];
            if (!R7K) {
                R7K = {};
                this.S7L[C7v] = R7K
            }
        }
        R7K = R7K || this.S7L;
        R7K.hash = R7K.hash || {};
        this.Uz2x = R7K
    };
    b7g.bRJ6D = function () {
        this.ed9U = window.clearTimeout(this.ed9U);
        var bz8r = {};
        k7d.eC9t(this.Uz2x, function (i7b, J7C) {
            if (J7C == "hash") return;
            if (!k7d.eJ9A(i7b)) return;
            k7d.bd7W(i7b, function (p7i) {
                if (!p7i) return;
                bz8r[p7i[this.wl4p]] = !0
            }, this)
        }, this);
        k7d.eC9t(this.Wa3x(), function (p7i, C7v, dO9F) {
            if (!bz8r[C7v]) {
                delete dO9F[C7v]
            }
        })
    };
    b7g.cuo2x = function () {
        if (!!this.ed9U) {
            this.ed9U = window.clearTimeout(this.ed9U)
        }
        this.ed9U = window.setTimeout(this.bRJ6D.g7b(this), 150)
    };
    b7g.BV6P = function (p7i, VZ3x) {
        p7i = this.bRI6C(p7i, VZ3x) || p7i;
        if (!p7i) return null;
        var J7C = p7i[this.wl4p];
        if (J7C != null) {
            var id0x = this.Wa3x()[J7C];
            if (!!id0x) p7i = NEJ.X(id0x, p7i);
            this.Wa3x()[J7C] = p7i
        }
        delete p7i.bRF6z;
        return p7i
    };
    b7g.bRI6C = bs8k;
    b7g.brp9g = function (J7C, p7i) {
        if (!p7i) return;
        if (!k7d.eJ9A(p7i)) {
            var i7b = this.hD0x(J7C),
                p7i = this.BV6P(p7i, J7C);
            if (!!p7i) i7b.unshift(p7i);
            return
        }
        k7d.no2x(p7i, this.brp9g.g7b(this, J7C))
    };
    b7g.UD2x = function (J7C, cy8q) {
        var i7b = this.hD0x(J7C);
        i7b.length = Math.max(i7b.length, cy8q);
        this.brS9J(J7C);
        return this
    };
    b7g.kq1x = function (J7C) {
        return this.hD0x(J7C).length
    };
    b7g.brS9J = function (J7C, pg2x) {
        this.hD0x(J7C).loaded = pg2x != !1;
        return this
    };
    b7g.VW2x = function (J7C) {
        return !!this.hD0x(J7C).loaded
    };
    b7g.uu4y = function (J7C, i7b) {
        this.ut4x(J7C);
        this.bsL9C({
            key: J7C,
            offset: 0,
            limit: i7b.length + 1
        }, {
            list: i7b,
            total: i7b.length
        })
    };
    b7g.hD0x = function () {
        var Hc7V = function (J7C) {
            return (J7C || "") + (!J7C ? "" : "-") + "list"
        };
        return function (J7C) {
            var J7C = Hc7V(J7C),
                i7b = this.Uz2x[J7C];
            if (!i7b) {
                i7b = [];
                this.Uz2x[J7C] = i7b
            }
            return i7b
        }
    }();
    b7g.Wa3x = function () {
        var dO9F = this.Uz2x.hash;
        if (!dO9F) {
            dO9F = {};
            this.Uz2x.hash = dO9F
        }
        return dO9F
    };
    b7g.bsW9N = function () {
        var Hc7V = function (e7d) {
            return "r-" + e7d.key
        };
        return function (e7d) {
            var iQ0x = NEJ.X({}, e7d),
                nX2x = Hc7V(iQ0x);
            if (!this.bpP8H(nX2x, this.z7s.g7b(this))) {
                iQ0x.rkey = nX2x;
                iQ0x.onload = this.cuh2x.g7b(this, iQ0x);
                this.z7s("dopullrefresh", iQ0x)
            }
            return this
        }
    }();
    b7g.cuh2x = function (e7d, i7b) {
        this.brp9g(e7d.key, i7b);
        this.bpG8y(e7d.rkey, "onpullrefresh", e7d)
    };
    b7g.lK1x = function () {
        var Hc7V = function (e7d) {
            return "r-" + e7d.key + "-" + e7d.offset + "-" + e7d.limit
        };
        return function (e7d) {
            e7d = e7d || bb7U;
            var iQ0x = {
                    key: "" + e7d.key || "",
                    ext: e7d.ext || null,
                    data: e7d.data || null,
                    offset: parseInt(e7d.offset) || 0,
                    limit: parseInt(e7d.limit) || 0
                },
                i7b = this.hD0x(iQ0x.key);
            if (this.cuu2x(i7b, iQ0x.offset, iQ0x.limit)) {
                this.z7s("onlistload", iQ0x);
                return this
            }
            var nX2x = Hc7V(iQ0x);
            if (!this.bpP8H(nX2x, this.z7s.g7b(this))) {
                iQ0x.rkey = nX2x;
                iQ0x.onload = this.bsL9C.g7b(this, iQ0x);
                this.z7s("doloadlist", iQ0x)
            }
            return this
        }
    }();
    b7g.bsL9C = function () {
        var GW7P = function (p7i, r7k, i7b) {
            if (!!p7i) {
                return !0
            }
            i7b.splice(r7k, 1)
        };
        return function (e7d, o7h) {
            e7d = e7d || bb7U;
            var J7C = e7d.key,
                bi7b = e7d.offset,
                bRE6y = this.hD0x(J7C);
            var i7b = o7h || [];
            if (!k7d.eJ9A(i7b)) {
                i7b = o7h.result || o7h.list || [];
                var cy8q = parseInt(o7h.total);
                if (!isNaN(cy8q) || cy8q > i7b.length) {
                    this.UD2x(J7C, cy8q)
                }
            }
            k7d.bd7W(i7b, function (p7i, r7k) {
                bRE6y[bi7b + r7k] = this.BV6P(p7i, J7C)
            }, this);
            if (i7b.length < e7d.limit) {
                this.brS9J(J7C);
                k7d.no2x(bRE6y, GW7P)
            }
            this.bpG8y(e7d.rkey, "onlistload", e7d)
        }
    }();
    b7g.ut4x = function () {
        var GW7P = function (p7i, r7k, i7b) {
            i7b.splice(r7k, 1)
        };
        return function (J7C) {
            var i7b = this.hD0x(J7C);
            k7d.no2x(i7b, GW7P);
            this.brS9J(J7C, !1);
            if (this.cus2x) {
                this.cuo2x()
            }
            return this
        }
    }();
    b7g.bRD6x = function (p7i, VZ3x) {
        return !p7i.bRF6z
    };
    b7g.eH9y = function (C7v) {
        return this.Wa3x()[C7v]
    };
    b7g.cDJ4N = function (C7v) {
        var p7i = this.eH9y(C7v);
        if (!!p7i) p7i.bRF6z = !0
    };
    b7g.VU2x = function () {
        var Hc7V = function (e7d) {
            return "r-" + e7d.key + "-" + e7d.id
        };
        return function (e7d) {
            e7d = e7d || bb7U;
            var C7v = e7d[this.wl4p],
                iQ0x = {
                    id: C7v,
                    ext: e7d.ext,
                    data: e7d.data || {}, key: "" + e7d.key || ""
                };
            p7i = this.eH9y(C7v);
            iQ0x.data[this.wl4p] = C7v;
            if (!!p7i && this.bRD6x(p7i, iQ0x.key)) {
                this.z7s("onitemload", iQ0x);
                return this
            }
            var nX2x = Hc7V(iQ0x);
            if (!this.bpP8H(nX2x, this.z7s.g7b(this))) {
                iQ0x.rkey = nX2x;
                iQ0x.onload = this.cub2x.g7b(this, iQ0x);
                this.z7s("doloaditem", iQ0x)
            }
            return this
        }
    }();
    b7g.cub2x = function (e7d, p7i) {
        e7d = e7d || bb7U;
        this.BV6P(p7i, e7d.key);
        this.bpG8y(e7d.rkey, "onitemload", e7d)
    };
    b7g.jw0x = function (e7d) {
        e7d = NEJ.X({}, e7d);
        e7d.onload = this.zs5x.g7b(this, e7d);
        this.z7s("doadditem", e7d)
    };
    b7g.zs5x = function (e7d, p7i) {
        var J7C = e7d.key;
        p7i = this.BV6P(p7i, J7C);
        if (!!p7i) {
            var eV9M = 0,
                i7b = this.hD0x(J7C);
            if (!e7d.push) {
                eV9M = -1;
                var bi7b = e7d.offset || 0;
                i7b.splice(bi7b, 0, p7i)
            } else if (i7b.loaded) {
                eV9M = 1;
                i7b.push(p7i)
            } else {
                i7b.length++
            }
        }
        var d7e = {
            key: J7C,
            flag: eV9M,
            data: p7i,
            action: "add",
            ext: e7d.ext
        };
        this.z7s("onitemadd", d7e);
        return d7e
    };
    b7g.Kc8U = function (e7d) {
        e7d = NEJ.X({}, e7d);
        e7d.onload = this.buf9W.g7b(this, e7d);
        this.z7s("dodeleteitem", e7d)
    };
    b7g.buf9W = function (e7d, bRC6w) {
        var p7i, J7C = e7d.key;
        if (!!bRC6w) {
            p7i = this.eH9y(e7d.id) || null;
            var C7v = e7d.id,
                ctZ2x = this.wl4p,
                i7b = this.hD0x(J7C),
                r7k = k7d.di8a(i7b, function (id0x) {
                    return !!id0x && id0x[ctZ2x] == C7v
                });
            if (r7k >= 0) i7b.splice(r7k, 1)
        }
        var d7e = {
            key: J7C,
            data: p7i,
            action: "delete",
            ext: e7d.ext
        };
        this.z7s("onitemdelete", d7e);
        return d7e
    };
    b7g.VR2x = function (e7d) {
        e7d = NEJ.X({}, e7d);
        e7d.onload = this.ctY2x.g7b(this, e7d);
        this.z7s("doupdateitem", e7d)
    };
    b7g.ctY2x = function (e7d, p7i) {
        var J7C = e7d.key;
        if (!!p7i) p7i = this.BV6P(p7i, J7C);
        var d7e = {
            key: J7C,
            data: p7i,
            action: "update",
            ext: e7d.ext
        };
        this.z7s("onitemupdate", d7e);
        return d7e
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        b7g;
    if (!!N7G.buP0x) return;
    N7G.buP0x = NEJ.C();
    b7g = N7G.buP0x.O7H(N7G.Uv2x);
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.bjI6C({
            doloadlist: this.VQ2x.g7b(this),
            doloaditem: this.bve0x.g7b(this),
            doadditem: this.bRB6v.g7b(this),
            dodeleteitem: this.VP2x.g7b(this),
            doupdateitem: this.VO2x.g7b(this),
            dopullrefresh: this.bRA6u.g7b(this)
        })
    };
    b7g.VQ2x = bs8k;
    b7g.bRA6u = bs8k;
    b7g.bve0x = bs8k;
    b7g.bRB6v = bs8k;
    b7g.VP2x = bs8k;
    b7g.VO2x = bs8k
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        b7g, K7D;
    q7j.hG0x = NEJ.C();
    b7g = q7j.hG0x.O7H(I7B.buP0x);
    b7g.co8g = function () {
        var zg5l = location.protocol + "//" + location.host;
        var ctU2x = function (br7k, j7c) {
            var bz8r = {
                conf: {},
                data: {},
                urls: []
            };
            k7d.bd7W(br7k, function (J7C, r7k, i7b) {
                var bg7Z = q7j.B7u(J7C);
                if (!bg7Z) return;
                var bvV0x = bRz6t(bg7Z.url, j7c[J7C]);
                bz8r.urls.push(bvV0x);
                bz8r.conf[bvV0x] = bg7Z;
                bz8r.data[bvV0x] = JSON.stringify(j7c[J7C] == null ? "" : j7c[J7C])
            });
            return bz8r
        };
        var bRz6t = function (Y7R, j7c) {
            return Y7R.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j7c[$2] || $1
            })
        };
        var bRy6s = function (bg7Z, e7d, d7e) {
            h7a.z7s(window, "requesterror", d7e);
            if (!!d7e.stopped) return;
            var Cb6V = bg7Z.onerror || e7d.onerror;
            if (k7d.fG9x(Cb6V)) {
                this.z7s(Cb6V, d7e, e7d)
            } else {
                (Cb6V || bs8k).call(this, d7e, e7d)
            }
            var d7e = {
                result: d7e,
                option: e7d
            };
            this.z7s("onerror", d7e);
            if (!d7e.stopped)(bg7Z.onmessage || bs8k).call(this, d7e.result.code, d7e.result)
        };
        var bRx6r = function (Q7J, bg7Z, e7d) {
            var o7h = Q7J;
            if (k7d.gG0x(bg7Z.format)) {
                o7h = bg7Z.format.call(this, Q7J, e7d)
            }
            return o7h
        };
        var yB5G = function (Q7J, bg7Z, e7d, uV4Z) {
            if (k7d.gG0x(bg7Z.beforeload)) {
                bg7Z.beforeload.call(this, Q7J, e7d, bg7Z)
            }
            if (Q7J && Q7J.code != null && Q7J.code != 200) {
                bRy6s.call(this, bg7Z, e7d, {
                    key: e7d.key,
                    code: Q7J.code,
                    message: Q7J.message || "",
                    captchaId: Q7J.captchaId,
                    ext: Q7J
                });
                return
            }
            var o7h = Q7J;
            if (!uV4Z) {
                o7h = bRx6r.call(this, Q7J, bg7Z, e7d)
            } else if (k7d.gG0x(bg7Z.format)) {
                var bwG0x = [];
                k7d.bd7W(uV4Z.urls, function (Y7R) {
                    bwG0x.push(bRx6r.call(this, Q7J[Y7R], uV4Z.conf[Y7R], e7d))
                }, this);
                bwG0x.push(e7d);
                o7h = bg7Z.format.apply(this, bwG0x)
            }
            var ss3x = bg7Z.onload || e7d.onload,
                bRv6p = bg7Z.finaly || e7d.finaly || bs8k;
            if (k7d.fG9x(ss3x)) {
                bRv6p.call(this, this.z7s(ss3x, o7h), e7d)
            } else {
                bRv6p.call(this, (ss3x || bs8k).call(this, o7h), e7d)
            }
        };
        var AE5J = function (bg7Z, e7d, cb8T) {
            bRy6s.call(this, bg7Z, e7d, {
                key: e7d.key,
                code: cb8T.code || -1,
                message: cb8T.message || ""
            })
        };
        return function (bg7Z, e7d) {
            if (k7d.fG9x(bg7Z)) {
                bg7Z = q7j.B7u(bg7Z)
            }
            delete e7d.value;
            (bg7Z.filter || bs8k).call(this, e7d, bg7Z);
            var Q7J = e7d.value;
            if (!!Q7J) {
                yB5G.call(this, Q7J, bg7Z, e7d);
                return
            }
            var Y7R, j7c = e7d.data || bb7U,
                yR5W = {
                    cookie: !0,
                    type: bg7Z.rtype || "json",
                    method: bg7Z.type || "POST",
                    onerror: AE5J.g7b(this, bg7Z, e7d),
                    noescape: bg7Z.noescape
                };
            if (k7d.eJ9A(bg7Z.url)) {
                var uV4Z = ctU2x(bg7Z.url, j7c);
                Y7R = zg5l + "/api/batch";
                yR5W.data = k7d.cE8w(uV4Z.data);
                yR5W.onload = yB5G.ew9n(this, bg7Z, e7d, uV4Z);
                yR5W.headers = {
                    "batch-method": "POST"
                };
                delete uV4Z.data
            } else {
                var kb1x = bg7Z.url.indexOf(":") < 0 ? zg5l : "";
                Y7R = bRz6t(kb1x + bg7Z.url, j7c);
                yR5W.data = k7d.cE8w(e7d.data);
                yR5W.onload = yB5G.ew9n(this, bg7Z, e7d)
            } if (yR5W.method == "GET") yR5W.query = yR5W.data;
            return v7o.bn7g(Y7R, yR5W)
        }
    }();
    b7g.Ed6X = function () {
        var gK0x = /^get|list|pull$/i;
        return function (bRu6o, e7d) {
            var J7C = e7d.key,
                bg7Z = q7j.B7u(J7C.split("-")[0] + "-" + bRu6o);
            if (gK0x.test(bRu6o) && J7C.indexOf("post-") < 0) bg7Z.type = "GET";
            this.co8g(bg7Z, e7d)
        }
    }();
    b7g.cDK4O = function (J7C, i7b) {
        var cy8q = i7b.length;
        this.bsL9C({
            key: J7C,
            offset: 0,
            limit: cy8q + 1
        }, {
            list: i7b,
            total: cy8q
        })
    };
    b7g.VQ2x = function (e7d) {
        this.Ed6X("list", e7d)
    };
    b7g.bve0x = function (e7d) {
        this.Ed6X("get", e7d)
    };
    b7g.bRA6u = function (e7d) {
        this.Ed6X("pull", e7d)
    };
    b7g.bRB6v = function (e7d) {
        this.Ed6X("add", e7d)
    };
    b7g.VP2x = function (e7d) {
        this.Ed6X("del", e7d)
    };
    b7g.VO2x = function (e7d) {
        this.Ed6X("update", e7d)
    };
    b7g.ctF2x = function (p7i) {
        this.BV6P(p7i)
    };
    I7B.fJ9A.A7t({
        element: window,
        event: "requesterror"
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        bfp5u = {},
        b7g, K7D;
    var ui4m = function (o7h, e7d) {
        o7h.conf = e7d.conf;
        return o7h
    };
    q7j.fe9V({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function (Q7J, e7d) {
                return ui4m({
                    mv: Q7J
                }, e7d)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function (o7h, e7d) {
                if (!!o7h.songs && o7h.songs.length > 0) o7h.song = o7h.songs[0];
                else o7h.song = bfp5u;
                delete o7h.songs;
                return ui4m(o7h, e7d)
            }, filter: function (e7d) {
                e7d.data.ids = "[" + e7d.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: ui4m
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: ui4m
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function (o7h, e7d) {
                o7h.playlist = o7h.result;
                delete o7h.result;
                return ui4m(o7h, e7d)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: ui4m
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: ui4m
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: ui4m
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e7d) {
                var i7b = e7d.data.id.split("-");
                e7d.data.radioId = i7b[0];
                e7d.data.asc = i7b[1] == 2;
                e7d.data.limit = 1e3;
                delete e7d.data.id
            }, format: function (Q7J, e7d) {
                var ctE2x = {
                    id: e7d.data.radioId,
                    programs: Q7J.programs
                };
                return ui4m({
                    djradio: ctE2x
                }, e7d)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: ui4m
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e7d) {
                e7d.data.lv = 0;
                e7d.data.tv = 0
            }, format: function (o7h, e7d) {
                var wH4L = {
                    lyric: "",
                    nolyric: true
                };
                if (o7h.code == 200 && o7h.lrc && o7h.lrc.lyric) {
                    wH4L.lyric = o7h.lrc.lyric;
                    wH4L.nolyric = false
                } else {
                    wH4L.nolyric = true
                }
                return ui4m({
                    lyric: wH4L
                }, e7d)
            }
        }
    });
    q7j.wI4M = NEJ.C();
    b7g = q7j.wI4M.O7H(q7j.hG0x);
    b7g.ctD2x = function (u7n, cT8L) {
        return this.sh3x(this.VI2x(u7n, cT8L))
    };
    b7g.UT2x = function (u7n, cT8L, e7d) {
        e7d = e7d || {};
        var j7c = this.sh3x(this.VI2x(u7n, cT8L));
        if (j7c && (u7n != 13 && u7n != 19 || e7d.conf && e7d.conf.useCache)) {
            this.z7s("onresourceload", u7n, cT8L, j7c, e7d.conf);
            return
        }
        e7d.data = {
            id: cT8L
        };
        e7d.onload = this.ctC2x.g7b(this, u7n, cT8L);
        e7d.onerror = this.ctB2x.g7b(this, u7n, cT8L);
        this.co8g("res-" + this.Cd6X(u7n) + "-get", e7d)
    };
    b7g.ctC2x = function (u7n, cT8L, o7h) {
        var j7c = o7h[this.Cd6X(u7n)];
        this.qb2x(this.VI2x(u7n, cT8L), j7c);
        this.z7s("onresourceload", u7n, cT8L, j7c, o7h.conf)
    };
    b7g.ctB2x = function (u7n, cT8L, o7h, e7d) {
        if (o7h.code != 404) {
            this.z7s("onresourceerror", u7n, cT8L, o7h.code);
            return
        }
        this.qb2x(this.VI2x(u7n, cT8L), bfp5u);
        this.z7s("onresourceload", u7n, cT8L, bfp5u, e7d.conf)
    };
    b7g.cDL4P = function (u7n, e7d) {
        this.co8g("res-" + this.Cd6X(u7n) + "-play", e7d)
    };
    b7g.VI2x = function (u7n, cT8L) {
        return "res-" + this.Cd6X(u7n) + "-" + cT8L
    };
    b7g.Cd6X = function (u7n) {
        var bz8r = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz8r[u7n]
    };
    q7j.wI4M.Ke8W = function (u7n, cT8L) {
        if (!this.ff9W) this.ff9W = q7j.wI4M.A7t({});
        return this.ff9W.ctD2x(u7n, cT8L)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        bgf5k = /^[1-9][0-9]*$/,
        b7g, K7D;
    var LOCAL_LOG_KEY = "local-log";
    q7j.fe9V({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q7j.likes_id = NEJ.C();
    b7g = q7j.likes_id.O7H(q7j.hG0x);
    b7g.fu9l = function (U7N, bg7Z) {
        if (!U7N || !bg7Z) return;
        if (k7d.fG9x(bg7Z)) {
            try {
                bg7Z = JSON.parse(bg7Z)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a6g)
                }
            }
        }
        if (!k7d.lw1x(bg7Z)) return;
        this.co8g("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: U7N,
                    json: bg7Z
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U7N + ", json=" + JSON.stringify(bg7Z))
        }
    };
    b7g.VC2x = function (nI2x) {
        if (!k7d.eJ9A(nI2x)) return;
        this.co8g("bi-batch-log", {
            data: {
                logs: JSON.stringify(nI2x)
            }
        })
    };
    b7g.bRn6h = function (bg7Z) {
        if (!bg7Z || !bg7Z.type || !bg7Z.rid) return;
        var nP2x = bg7Z.type;
        if (bgf5k.test(nP2x)) {
            nP2x = this.Cd6X(nP2x)
        }
        if (!nP2x) return;
        if (nP2x == "playlist") nP2x = "list";
        this.fu9l("search", {
            type: nP2x,
            id: bg7Z.rid || null,
            keyword: bg7Z.keyword || null
        })
    };
    b7g.UX2x = function () {
        var cto2x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bg7Z) {
            if (!bg7Z || !bg7Z.type || !bg7Z.rid) return;
            if (bg7Z.play === undefined) bg7Z.play = true;
            var nP2x = bg7Z.type;
            if (bgf5k.test(nP2x)) {
                nP2x = this.Cd6X(nP2x)
            }
            if (!nP2x) return;
            if (nP2x == "playlist") nP2x = "list";
            var Q7J = {
                id: bg7Z.rid,
                type: nP2x
            };
            if (nP2x == "song" && bg7Z.source) {
                Q7J.source = this.bRl6f(bg7Z.source);
                if (!!bg7Z.sourceid) Q7J.sourceid = bg7Z.sourceid
            }
            this.fu9l(!bg7Z.play ? "addto" : "play", Q7J);
            if (nP2x == "song" && bg7Z.hash && bg7Z.hash.match(cto2x)) {
                this.fu9l(!bg7Z.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b7g.bgy5D = function (C7v, bA8s, ea9R, Fe7X) {
        var Q7J = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cth2x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q7J.id = C7v;
        Q7J.time = Math.round(bA8s);
        Q7J.end = k7d.fG9x(Fe7X) ? Fe7X : cth2x[Fe7X] || "";
        if (ea9R && ea9R.fid) {
            Q7J.source = this.bRl6f(ea9R.fid);
            Q7J.sourceId = ea9R.fdata
        }
        this.fu9l("play", Q7J)
    };
    b7g.bRj6d = function (u7n, cT8L) {
        if (!u7n || !cT8L) return;
        if (bgf5k.test(u7n)) u7n = this.Cd6X(u7n);
        if (u7n != "playlist" && u7n != "dj") return;
        var bg7Z = q7j.B7u("plus-" + u7n + "-count");
        if (!bg7Z) return !1;
        this.co8g(bg7Z, {
            data: {
                id: cT8L
            }
        });
        var R7K = this.ls1x("play-hist-" + u7n, []);
        if (k7d.di8a(R7K, cT8L) < 0) {
            R7K.push(cT8L);
            return !0
        }
        return !1
    };
    b7g.Cd6X = function (u7n) {
        var bz8r = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bz8r[u7n]
    };
    b7g.bRl6f = function (Kf8X) {
        var bz8r = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz8r[Kf8X]
    };
    b7g.bRh6b = function (hk0x) {
        var nI2x = this.FE7x(LOCAL_LOG_KEY, []);
        nI2x.unshift(hk0x);
        if (nI2x.length > 200) {
            nI2x.length = 200
        }
        this.wr4v(LOCAL_LOG_KEY, nI2x)
    };
    b7g.cta2x = function () {
        return this.Ur2x(LOCAL_LOG_KEY)
    };
    b7g.ej9a = function (Q7J) {
        this.fu9l("play", Q7J)
    };
    var bRf6Z = q7j.likes_id.gr9i();
    l7e.tc3x = function () {
        bRf6Z.fu9l.apply(bRf6Z, arguments)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        m7f = c7f("nm.l"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d");
    var FullscreenApi = l7e.EA7t || {};
    if (!q7j.wI4M) return;
    var R7K = q7j.wI4M.A7t({
        onresourceload: csW2x
    });
    var tX3x = q7j.likes_id.gr9i();

    function csW2x(u7n, cT8L, j7c, bg7Z) {
        var i7b = [];
        switch (parseInt(u7n)) {
        case 2:
            i7b = j7c;
            break;
        case 13:
            i7b = j7c.tracks;
            break;
        case 18:
            i7b.push(j7c);
            break;
        case 19:
            i7b = j7c.songs;
            break;
        case 21:
            if (j7c.mp && j7c.mp.fee && j7c.mp.pl <= 0) {
                l7e.Vl2x(j7c.data.id, j7c.mp.fee);
                return
            }
            break
        }
        if (l7e.Kg8Y(i7b, true, null, u7n == 19 ? {
            source: "album",
            sourceid: cT8L
        } : null) == 0) {
            return
        }
        l7e.fq9h({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bg7Z.message
        })
    }

    function csV2x(d7e, rY3x, yo5t, eu9l) {
        eu9l = eu9l || {};
        if (d7e.action == "ok") {
            if (yo5t) {
                location.dispatch2("/payfee?songId=" + yo5t)
            } else {
                location.dispatch2("/payfee?fee=" + rY3x || 1)
            }
            tX3x.fu9l("click", {
                type: "tobuyvip",
                name: "box",
                source: eu9l.source || "song",
                sourceid: eu9l.sourceid || yo5t || 0
            })
        } else if (d7e.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yo5t);
            tX3x.fu9l("click", {
                type: "tobuyone",
                name: "box",
                source: eu9l.source || "song",
                sourceid: eu9l.sourceid || yo5t || 0
            })
        }
    }

    function Vn2x(bH8z) {
        l7e.fq9h({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bH8z,
            btntxt: "知道了"
        })
    }

    function Vp2x(bH8z, Q7J) {
        Vn2x((Q7J || bb7U).toast || bH8z)
    }
    l7e.ir0x = function (bH8z, C7v, u7n, csU2x, bj7c) {
        bH8z = bH8z || "由于版权保护，您所在的地区暂时无法使用。";
        if (csU2x && bj7c && bj7c.privilege && bj7c.privilege.toast) {
            v7o.bn7g("/api/song/toast", {
                query: {
                    id: bj7c.id
                },
                type: "json",
                onload: Vp2x.g7b(this, bH8z),
                onerror: Vp2x.g7b(this, bH8z)
            })
        } else if (C7v && u7n) {
            R7K.UT2x(u7n, C7v, {
                conf: {
                    message: bH8z,
                    useCache: u7n != 18
                }
            })
        } else {
            Vn2x(bH8z)
        }
    };
    l7e.tW3x = function (rY3x, yo5t, u7n, eu9l, mS1x) {
        var bS8K, or2x = "m-popup-info",
            bia6U = "单首购买",
            bic6W = "马上去开通",
            cV8N = "唱片公司要求，当前歌曲须付费使用。",
            bRe6Y = true;
        try {
            bS8K = top.api.feeMessage || {}
        } catch (e) {
            bS8K = {}
        }
        if (rY3x == 1 || rY3x == 8 || rY3x == 16) {
            if (u7n == "song") {
                or2x = "m-popup-song-buy";
                cV8N = bS8K["vip2"] || cV8N;
                bic6W = bS8K["vip2button"] || "包月购买";
                bia6U = bS8K["vip2link"] || bia6U;
                if (mS1x && mS1x.flag !== undefined) {
                    var br7k = mS1x.flag.toString(2).split("");
                    if (parseInt(br7k.pop(), 10) == 1) {
                        bRe6Y = false
                    }
                }
            } else {
                cV8N = bS8K["vip"] || cV8N
            }
        } else if (rY3x == 4) {
            cV8N = bS8K["album"] || cV8N;
            bic6W = "立即订购"
        } else {
            cV8N = bS8K["unknow"] || cV8N
        }
        l7e.kk1x({
            clazz: "m-layer-w5",
            html: a6g.bZ8R(or2x, {
                songTxt: bia6U,
                tip: cV8N,
                oktext: bic6W,
                cctext: "以后再说",
                showSongText: bRe6Y
            }),
            onaction: csV2x.ew9n(null, rY3x, yo5t, eu9l)
        })
    };
    l7e.bRd6X = function (likes_id, gl9c) {
        l7e.hi0x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (u7n) {
                if (u7n == "ok") {
                    l7e.JU8M({
                        id: likes_id,
                        type: gl9c
                    })
                }
            }
        })
    };
    l7e.Vl2x = function (lu1x, rY3x) {
        var bS8K, cV8N = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bS8K = top.api.feeMessage || {}
        } catch (e) {
            bS8K = {}
        }
        if (rY3x == 1 || rY3x == 8) {
            cV8N = bS8K["vip"] || cV8N
        } else if (rY3x == 4) {
            cV8N = bS8K["album"] || cV8N
        } else {
            cV8N = bS8K["unknow"] || cV8N
        }
        return l7e.kk1x({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a6g.bZ8R("m-popup-info", {
                tip: cV8N,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function (d7e) {
                if (d7e.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + lu1x);
                    tX3x.fu9l("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: lu1x || 0
                    })
                }
            }
        })
    };
    l7e.Kg8Y = function () {
        function compareFee(csP2x, csO2x) {
            var bz8r = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bz8r[csP2x] || 0) - (bz8r[csO2x] || 0)
        }
        return function (i7b, cV8N, sq3x, eu9l) {
            sq3x = sq3x || {};
            var yV5a = [],
                Ki8a = {},
                bRc6W = 0,
                bRb6V = 0,
                Kl8d = null;
            if (!i7b || !i7b.length) return yV5a;
            k7d.bd7W(i7b, function (bj7c) {
                var fA9r = l7e.pB2x(bj7c);
                if (fA9r == 0) {
                    yV5a.push(bj7c)
                } else if (fA9r == 10) {
                    if (bj7c.privilege) {
                        bj7c.fee = bj7c.privilege.fee
                    }
                    if (compareFee(bj7c.fee, Ki8a.fee) > 0) {
                        Ki8a = bj7c
                    }
                } else if (fA9r == 11) {
                    ++bRc6W;
                    if (!sq3x.play) yV5a.push(bj7c)
                } else if (fA9r == 1e3) {
                    ++bRb6V;
                    if (!sq3x.download) yV5a.push(bj7c)
                } else if (fA9r == 100) {
                    Kl8d = bj7c
                }
            });
            if (yV5a.length == 0 && cV8N) {
                if (bRc6W == i7b.length) {
                    var ta3x = i7b[0].privilege || {};
                    if (ta3x.payed) {
                        l7e.ir0x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l7e.tW3x(ta3x.fee, null, null, eu9l)
                    }
                } else if (bRb6V == i7b.length) {
                    l7e.ir0x("因版权方要求，该歌曲不支持下载")
                } else if (Ki8a.id) {
                    l7e.tW3x(Ki8a.fee, Ki8a.id, null, eu9l, Ki8a.privilege)
                } else {
                    if (Kl8d && i7b.length == 1 && Kl8d.privilege && Kl8d.privilege.st < 0 && Kl8d.privilege.toast) {
                        l7e.ir0x(null, null, null, true, Kl8d)
                    } else {
                        l7e.ir0x()
                    }
                }
            }
            return yV5a
        }
    }();
    l7e.pB2x = function (bj7c) {
        if (!bj7c) return 0;
        var fA9r = bj7c.privilege;
        if (bj7c.program) return 0;
        if (window.GAbroad) return 100;
        if (fA9r) {
            if (fA9r.st != null && fA9r.st < 0) {
                return 100
            }
            if (fA9r.fee > 0 && fA9r.fee != 8 && fA9r.payed == 0 && fA9r.pl <= 0) return 10;
            if (fA9r.fee == 16) return 11;
            if ((fA9r.fee == 0 || fA9r.payed) && fA9r.pl > 0 && fA9r.dl == 0) return 1e3;
            if (fA9r.pl == 0 && fA9r.dl == 0) return 100;
            return 0
        } else {
            var ex9o = bj7c.status != null ? bj7c.status : bj7c.st != null ? bj7c.st : 0;
            if (bj7c.status >= 0) return 0;
            if (bj7c.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        fx9o = NEJ.R,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        w7p = c7f("nm.w"),
        b7g;
    if (!!w7p.bRa6U) return;
    var ck8c = ~ [];
    ck8c = {
        bQY6S: ++ck8c,
        csH2x: (![] + "")[ck8c],
        kc1x: ++ck8c,
        Kq8i: (![] + "")[ck8c],
        VB2x: (ck8c[ck8c] + "")[ck8c],
        bQU6O: ++ck8c,
        cDM4Q: ({} + "")[ck8c],
        csb2x: (ck8c[ck8c] + "")[ck8c],
        csa2x: (![] + "")[ck8c],
        UQ2x: ++ck8c,
        VJ2x: (!"" + "")[ck8c],
        cDP4T: ++ck8c,
        Ch6b: ++ck8c,
        bQK6E: ({} + "")[ck8c],
        wQ4U: ++ck8c,
        crI2x: ++ck8c,
        cDQ4U: ++ck8c,
        cDR4V: ++ck8c
    };
    ck8c.Kv8n = (ck8c.Kv8n = ck8c + "")[ck8c.Ch6b] + (ck8c.Kw8o = ck8c.Kv8n[ck8c.kc1x]) + (ck8c.VX2x = (ck8c.Dh6b + "")[ck8c.kc1x]) + (!ck8c + "")[ck8c.UQ2x] + (ck8c.Dj6d = ck8c.Kv8n[ck8c.wQ4U]) + (ck8c.Dh6b = (!"" + "")[ck8c.kc1x]) + (crE2x = (!"" + "")[ck8c.bQU6O]) + ck8c.Kv8n[ck8c.Ch6b] + ck8c.Dj6d + ck8c.Kw8o + ck8c.Dh6b;
    ck8c.VX2x = ck8c.Dh6b + (!"" + "")[ck8c.UQ2x] + ck8c.Dj6d + crE2x + ck8c.Dh6b + ck8c.VX2x;
    ck8c.Dh6b = ck8c.bQY6S[ck8c.Kv8n][ck8c.Kv8n];
    w7p.bRa6U = ck8c
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        N7G = c7f("nej.ui"),
        b7g;
    if (!!N7G.VY3x) return;
    var iZ0x = a6g.tO3x(".#<uispace>{position:absolute;background:#fff;}");
    N7G.VY3x = NEJ.C();
    b7g = N7G.VY3x.O7H(N7G.Sc1x);
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.bX8P([
            [document, "click", this.sW3x.g7b(this)]
        ]);
        this.crz2x = !!e7d.nostop;
        this.bQC5H = {
            top: e7d.top,
            left: e7d.left
        }
    };
    b7g.bD8v = function () {
        delete this.xI5N;
        delete this.bkz6t;
        delete this.qN3x;
        delete this.bQB5G;
        delete this.Wb3x;
        delete this.bQC5H;
        this.bG8y()
    };
    b7g.ce8W = function () {
        this.mb1x = iZ0x
    };
    b7g.bW8O = function () {
        this.cg8Y();
        this.AW6Q = this.n7g;
        h7a.s7l(this.n7g, "click", this.crt2x.g7b(this))
    };
    b7g.sW3x = function (d7e) {
        if (d7e.button != 2) this.bu8m()
    };
    b7g.crt2x = function (d7e) {
        if (this.crz2x) return;
        h7a.tr3x(d7e);
        var F7y = h7a.W7P(d7e);
        if (F7y.tagName == "A") h7a.cp8h(d7e)
    };
    b7g.crq2x = function () {
        var dh8Z = /\s+/i;
        return function (nJ2x) {
            nJ2x = (nJ2x || "").trim().toLowerCase().split(dh8Z);
            nJ2x[0] = nJ2x[0] || "bottom";
            nJ2x[1] = nJ2x[1] || "left";
            this.qN3x = nJ2x
        }
    }();
    b7g.crn2x = function (nJ2x) {
        var o7h = {},
            nm2x = this.bkz6t,
            cDS4W = a6g.oy2x(),
            cA8s = this.n7g.offsetWidth,
            ci8a = this.n7g.offsetHeight;
        switch (nJ2x[0]) {
        case "top":
            o7h.top = nm2x.top - ci8a;
            o7h.left = nJ2x[1] == "right" ? nm2x.left + nm2x.width - cA8s : nm2x.left;
            break;
        case "left":
            o7h.left = nm2x.left - cA8s;
            o7h.top = nJ2x[1] == "bottom" ? nm2x.top + nm2x.height - ci8a : nm2x.top;
            break;
        case "right":
            o7h.left = nm2x.left + nm2x.width;
            o7h.top = nJ2x[1] == "bottom" ? nm2x.top + nm2x.height - ci8a : nm2x.top;
            break;
        default:
            o7h.top = nm2x.top + nm2x.height;
            o7h.left = nJ2x[1] == "right" ? nm2x.left + nm2x.width - cA8s : nm2x.left;
            break
        }
        return o7h
    };
    b7g.JD8v = function () {
        if (!this.bQB5G) {
            this.gF0x(this.bQC5H);
            return
        }
        if (!!this.Wb3x) {
            this.gF0x(this.xI5N);
            return
        }
        if (!!this.bkz6t) this.gF0x(this.crn2x(this.qN3x))
    };
    b7g.crd2x = function (F7y, do8g, d7e) {
        do8g = do8g || bb7U;
        var bQt5y = a6g.oy2x(),
            cY8Q = h7a.jB0x(d7e) + (do8g.left || 0),
            hB0x = h7a.mf1x(d7e) + (do8g.top || 0),
            cA8s = F7y.offsetWidth + (do8g.right || 0),
            ci8a = F7y.offsetHeight + (do8g.bottom || 0),
            Kx8p = bQt5y.scrollWidth,
            blo7h = bQt5y.scrollHeight,
            blp7i = cY8Q + cA8s,
            blq7j = hB0x + ci8a;
        switch (this.qN3x[0]) {
        case "top":
            hB0x = blq7j > blo7h ? hB0x - ci8a : hB0x;
            if (this.qN3x[1] == "right") {
                cY8Q = cY8Q - cA8s < 0 ? 0 : cY8Q - cA8s
            } else {
                cY8Q = blp7i > Kx8p ? Kx8p - cA8s : cY8Q
            }
            break;
        case "left":
            cY8Q = blp7i > Kx8p ? Kx8p - cA8s : cY8Q;
            if (this.qN3x[1] == "top") {
                hB0x = blq7j > blo7h ? hB0x - ci8a : hB0x
            } else {
                hB0x = hB0x - ci8a < 0 ? hB0x : hB0x - ci8a
            }
            break;
        case "right":
            cY8Q = cY8Q - cA8s < 0 ? 0 : cY8Q - cA8s;
            if (this.qN3x[1] == "top") {
                hB0x = blq7j > blo7h ? hB0x - ci8a : hB0x
            } else {
                hB0x = hB0x - ci8a < 0 ? hB0x : hB0x - ci8a
            }
            break;
        default:
            hB0x = hB0x - ci8a < 0 ? hB0x : hB0x - ci8a;
            if (this.qN3x[1] == "left") {
                cY8Q = blp7i > Kx8p ? Kx8p - cA8s : cY8Q
            } else {
                cY8Q = cY8Q - cA8s < 0 ? 0 : cY8Q - cA8s
            }
            break
        }
        return {
            top: hB0x,
            left: cY8Q
        }
    };
    b7g.blt7m = function () {
        var cqQ2x = function (F7y, do8g) {
            F7y = a6g.B7u(F7y);
            if (!F7y) return;
            do8g = do8g || bb7U;
            var bi7b = a6g.hO0x(F7y);
            return {
                top: bi7b.y - (do8g.top || 0),
                left: bi7b.x - (do8g.left || 0),
                width: F7y.offsetWidth + (do8g.right || 0),
                height: F7y.offsetHeight + (do8g.bottom || 0)
            }
        };
        return function (e7d) {
            e7d = e7d || bb7U;
            this.Wb3x = e7d.event;
            this.crq2x(e7d.align);
            if (!!this.Wb3x) this.xI5N = this.crd2x(e7d.target, e7d.delta, this.Wb3x);
            this.bkz6t = cqQ2x(e7d.target, e7d.delta);
            this.bQB5G = !!e7d.fitable;
            this.L7E();
            return this
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ui"),
        b7g, K7D;
    if (!!N7G.Cl6f) return;
    N7G.Cl6f = NEJ.C();
    b7g = N7G.Cl6f.O7H(N7G.XP3x);
    K7D = N7G.Cl6f.cs8k;
    N7G.Cl6f.cDU5Z = function () {
        var cqO2x = function (d7e, C7v, fK9B, ka1x, Ut2x) {
            var cz8r, J7C = C7v + "-i",
                R7K = fK9B.zi5n,
                bQq5v = !!ka1x.noclear,
                bQp5u = !!ka1x.toggled;
            if (k7d.gG0x(ka1x.onbeforeclick)) {
                var Wh3x = ka1x.noclear,
                    cqE2x = ka1x.toggled;
                try {
                    ka1x.onbeforeclick(ka1x)
                } catch (e) {}
                bQq5v = !!ka1x.noclear;
                bQp5u = !!ka1x.toggled;
                ka1x.toggled = cqE2x;
                ka1x.noclear = Wh3x
            }
            var DZ6T = R7K[J7C];
            if (bQp5u && !!DZ6T) {
                DZ6T.bu8m();
                return
            }
            h7a.bh7a(d7e);
            if (!bQq5v) {
                h7a.z7s(document, "click");
                cz8r = fK9B.A7t(ka1x)
            } else {
                cz8r = fK9B.bUF6z(ka1x, !0)
            }
            R7K[J7C] = cz8r;
            cz8r.xp4t("onbeforerecycle", function () {
                delete R7K[J7C]
            });
            cz8r.blt7m(Ut2x)
        };
        return function (f7c, e7d) {
            f7c = a6g.B7u(f7c);
            if (!f7c) return this;
            if (!this.zi5n) this.zi5n = {};
            var C7v = a6g.lv1x(f7c);
            if (!!this.zi5n[C7v]) return this;
            e7d = NEJ.X({}, e7d);
            var Ut2x = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e7d);
            Ut2x.target = C7v;
            e7d.destroyable = !0;
            if (!e7d.fixed) {
                Ut2x.fitable = !0;
                e7d.parent = document.body
            }
            this.zi5n[C7v] = [C7v, e7d.event || "click", cqO2x.ew9n(null, C7v, this, e7d, Ut2x)];
            h7a.s7l.apply(h7a, this.zi5n[C7v]);
            return this
        }
    }();
    N7G.Cl6f.cDX5c = function (f7c) {
        if (!this.zi5n) return this;
        var C7v = a6g.lv1x(f7c),
            d7e = this.zi5n[C7v];
        if (!d7e) return this;
        delete this.zi5n[C7v];
        h7a.mw1x.apply(h7a, d7e);
        var cz8r = this.zi5n[C7v + "-i"];
        if (!!cz8r) cz8r.bu8m();
        return this
    };
    b7g.blJ7C = function () {
        return N7G.VY3x.A7t(this.cc8U)
    };
    b7g.So2x = function () {
        K7D.So2x.apply(this, arguments);
        this.cc8U.top = null;
        this.cc8U.left = null;
        this.cc8U.nostop = !1
    };
    b7g.blt7m = function (e7d) {
        if (!!this.pb2x) this.pb2x.blt7m(e7d);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bc7V = c7f("nej.ui"),
        m7f = c7f("nm.l"),
        b7g, K7D;
    m7f.blX7Q = NEJ.C();
    b7g = m7f.blX7Q.O7H(bc7V.Cl6f);
    b7g.bl7e = function (e7d) {
        e7d.nohack = true;
        this.bm7f(e7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        m7f = c7f("nm.l"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    var FullscreenApi = l7e.EA7t || {};
    m7f.Z7S = NEJ.C();
    b7g = m7f.Z7S.O7H(m7f.blX7Q);
    K7D = m7f.Z7S.cs8k;
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.ey9p = e7d.type || 1
    };
    b7g.bW8O = function () {
        this.cg8Y();
        this.n7g = a6g.nH2x(this.cqy2x());
        var i7b = a6g.dk8c(this.n7g);
        this.qY3x = i7b[0];
        this.cv8n = i7b[1]
    };
    b7g.cqy2x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b7g.JD8v = function () {
        var D7w = {},
            ch8Z = this.n7g.style,
            jD0x = a6g.oy2x(),
            om2x = {
                left: jD0x.scrollLeft,
                top: jD0x.scrollTop
            },
            do8g = {
                left: jD0x.clientWidth - this.n7g.offsetWidth,
                top: jD0x.clientHeight - this.n7g.offsetHeight
            };
        D7w.top = Math.max(0, om2x.top + do8g.top / 2);
        D7w.left = Math.max(0, om2x.left + do8g.left / 2);
        this.pb2x.gF0x(D7w)
    };
    b7g.L7E = function (e7d) {
        K7D.L7E.call(this);
        this.JD8v();
        this.ey9p == 1 ? a6g.fb9S(this.qY3x, "u-icn-32", "u-icn-31") : a6g.fb9S(this.qY3x, "u-icn-31", "u-icn-32");
        this.cv8n.innerHTML = e7d.tip || ""
    };
    window.g_showTipCard = m7f.Z7S.L7E = function () {
        var eg9X;
        return function (e7d) {
            clearTimeout(eg9X);
            if (e7d.parent === undefined) e7d.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e7d.autoclose === undefined) e7d.autoclose = true;
            e7d.clazz = "m-sysmsg";
            !!this.ff9W && this.ff9W.T7M();
            this.ff9W = this.A7t(e7d);
            this.ff9W.L7E(e7d);
            if (e7d.autoclose) eg9X = setTimeout(this.bu8m.g7b(this), 2e3)
        }.g7b(m7f.Z7S)
    }();
    m7f.Z7S.bu8m = function () {
        !!this.ff9W && this.ff9W.bu8m()
    }
})();
(function () {
    var c7f = NEJ.P,
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v7o.bn7g = v7o.bn7g.eB9s(function (d7e) {
            e7d = d7e.args[1];
            e7d.query = e7d.query || {};
            if (k7d.fG9x(e7d.query)) e7d.query = k7d.hv0x(e7d.query);
            e7d.query.ref = "mail"
        })
    }
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        fx9o = NEJ.R,
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        m7f = c7f("nm.l"),
        J7C = "playlist-tracks_",
        b7g;
    q7j.fe9V({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function (Q7J, e7d) {
                this.cqx2x(Q7J.playlist);
                return {
                    total: 0,
                    list: fx9o
                }
            }, onerror: function () {
                this.z7s("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function (Q7J, e7d) {
                var nu2x = Q7J.playlist;
                nu2x.creator = GUser;
                nu2x.isHost = !0;
                nu2x.typeFlag = "playlist";
                return nu2x
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.ig0x, "listchange", d7e)
            }, onmessage: function () {
                var mv1x = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cm8e) {
                    m7f.Z7S.L7E({
                        tip: mv1x[cm8e] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function (e7d) {
                e7d.id = e7d.data.pid
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.ig0x, "listchange", d7e)
            }, onmessage: function () {
                var mv1x = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cm8e) {
                    m7f.Z7S.L7E({
                        tip: mv1x[cm8e] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function (e7d) {
                var eu9l = e7d.ext || {};
                e7d.ext = NEJ.X(eu9l, e7d.data);
                e7d.data = {
                    id: e7d.ext.id
                }
            }, format: function (Q7J, e7d) {
                m7f.Z7S.L7E({
                    tip: "收藏成功" + (Q7J.point > 0 ? ' 获得<em class="s-fc6">' + Q7J.point + "积分</em>" : "")
                });
                var p7i = e7d.ext;
                p7i.subscribedCount++;
                return p7i
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.cqw2x, "listchange", d7e);
                h7a.z7s(q7j.cqw2x, "itemchange", {
                    attr: "subscribedCount",
                    data: d7e.data
                })
            }, onmessage: function () {
                var mv1x = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function (cm8e) {
                    m7f.Z7S.L7E({
                        type: 2,
                        tip: mv1x[cm8e] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function (e7d) {
                e7d.id = e7d.data.id = e7d.data.pid
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.ig0x, "listchange", d7e)
            }, onmessage: function () {
                var mv1x = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cm8e) {
                    m7f.Z7S.L7E({
                        tip: mv1x[cm8e],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e7d) {
                var j7c = e7d.data,
                    Wm3x = {};
                Wm3x["playlist-update-name"] = {
                    id: j7c.id,
                    name: j7c.name
                };
                Wm3x["playlist-update-tag"] = {
                    id: j7c.id,
                    tags: j7c.tags.join(";")
                };
                Wm3x["playlist-update-desc"] = {
                    id: j7c.id,
                    desc: j7c.description
                };
                e7d.data = Wm3x;
                e7d.ext = j7c
            }, format: function (V7O, qZ3x, Uo2x, e7d) {
                if (V7O.code == 200 && qZ3x.code == 200 && Uo2x.code == 200) {
                    e7d.ext.allSuccess = true;
                    m7f.Z7S.L7E({
                        tip: "保存成功"
                    })
                } else if (V7O.code == 407 || qZ3x.code == 407 || Uo2x.code == 407) {
                    e7d.ext.allSuccess = false;
                    m7f.Z7S.L7E({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e7d.ext.allSuccess = false;
                    m7f.Z7S.L7E({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eH9y(e7d.ext.id)
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.ig0x, "listchange", d7e)
            }, onmessage: function (cm8e) {
                m7f.Z7S.L7E({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function (Q7J, e7d) {
                var p7i = this.eH9y(e7d.ext.id);
                if (Q7J.code == 200) p7i.name = e7d.ext.name;
                return Q7J
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function (Q7J, e7d) {
                var p7i = this.eH9y(e7d.ext.id);
                if (Q7J.code == 200) p7i.tags = e7d.ext.tags;
                return Q7J
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function (Q7J, e7d) {
                var p7i = this.eH9y(e7d.ext.id);
                if (Q7J.code == 200) p7i.description = e7d.ext.description;
                return Q7J
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function (e7d) {
                e7d.url = e7d.data.url;
                delete e7d.data.url
            }, format: function (Q7J, e7d) {
                m7f.Z7S.L7E({
                    tip: "保存成功"
                });
                var p7i = this.eH9y(e7d.data.id);
                p7i.coverImgUrl = e7d.url;
                e7d.ext = p7i;
                return p7i
            }, onmessage: function (cm8e) {
                m7f.Z7S.L7E({
                    type: 2,
                    tip: "保存失败"
                })
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.ig0x, "itemchange", {
                    attr: "coverImgUrl",
                    data: e7d.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function (Q7J, e7d) {
                var nu2x = this.eH9y(e7d.data.id);
                if (!nu2x) return;
                nu2x.playCount++;
                h7a.z7s(q7j.ig0x, "itemchange", {
                    attr: "playcount",
                    data: nu2x
                })
            }
        }
    });
    q7j.ig0x = NEJ.C();
    b7g = q7j.ig0x.O7H(q7j.hG0x);
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.bQk5p = function () {
        var dn8f = GUser.userId;
        this.lK1x({
            limit: 1001,
            key: "playlist_my-" + dn8f,
            data: {
                offset: 0,
                limit: 1001,
                uid: dn8f
            }
        })
    };
    b7g.cqx2x = function (i7b) {
        var dn8f = GUser.userId,
            iN0x = [],
            bQj5o = [];
        k7d.bd7W(i7b, function (p7i) {
            p7i.typeFlag = "playlist";
            if (p7i.creator && p7i.creator.userId == dn8f) {
                if (p7i.specialType == 5) p7i.name = "我喜欢的音乐";
                p7i.isHost = !0;
                iN0x.push(p7i)
            } else {
                bQj5o.push(p7i)
            }
        });
        this.uu4y("playlist_new-" + dn8f, iN0x);
        this.uu4y("playlist_fav-" + dn8f, bQj5o)
    };
    b7g.cqo1x = function (j7c) {
        this.co8g("playlist-update-cover", {
            data: j7c
        })
    };
    b7g.cDY5d = function () {
        var Uk2x = this.cqk1x.B7u("host-plist");
        if (Uk2x.length == 0) {
            return
        }
        if (Uk2x.length == 1 && Uk2x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Uk2x.length; i < len; i++) {
            var p7i = Uk2x[i];
            if (p7i.trackCount > 0) return p7i.id
        }
        return this.cqk1x.B7u("host-plist")[0].id
    };
    b7g.cqj1x = function (C7v) {
        if (GUser && GUser.userId > 0) {
            this.co8g("playlist-upcount", {
                data: {
                    id: C7v
                }
            })
        }
    };
    b7g.EB7u = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b7g.cDZ5e = function () {
        return GUser.userId
    };
    b7g.EH7A = function (p7i) {
        if (p7i.userId == GUser.userId && p7i.specialType == 5) p7i.name = "我喜欢的音乐";
        h7a.z7s(this.constructor, "itemchange", {
            data: this.BV6P(p7i)
        });
        return p7i
    };
    I7B.fJ9A.A7t({
        element: q7j.ig0x,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function () {
    var c7f = NEJ.P,
        fx9o = NEJ.R,
        bs8k = NEJ.F,
        bb7U = NEJ.O,
        I7B = c7f("nej.ut"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        m7f = c7f("nm.l"),
        b7g, K7D;
    q7j.fe9V({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function (Q7J) {
                return Q7J.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e7d) {
                e7d.data.limit = 1e3;
                delete e7d.data.id
            }, format: function (Q7J, e7d) {
                var bQf5k = [],
                    pl2x = Q7J.programs;
                if (pl2x) {
                    for (var i = 0, l = pl2x.length; i < l; i++) {
                        if (pl2x[i].programFeeType < 10 || pl2x[i].buyed) {
                            bQf5k.push(pl2x[i])
                        }
                    }
                }
                return bQf5k
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function (Q7J, e7d) {
                return Q7J.programs
            }, onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function (e7d) {
                e7d.ext = e7d.data;
                e7d.data = {
                    id: e7d.ext.id
                };
                e7d.id = e7d.data.id
            }, format: function (Q7J, e7d) {
                m7f.Z7S.L7E({
                    tip: "收藏成功"
                });
                var p7i = e7d.ext;
                p7i.subscribedCount++;
                p7i.subscribed = !0;
                return p7i
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.qk2x, "listchange", d7e)
            }, onmessage: function () {
                var mv1x = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function (cm8e) {
                    m7f.Z7S.L7E({
                        type: 2,
                        tip: mv1x[cm8e] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.qk2x, "listchange", d7e)
            }, onmessage: function () {
                var mv1x = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function (cm8e) {
                    l7e.bnQ8I({
                        txt: mv1x[cm8e] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function (e7d) {
                var p7i = this.eH9y(e7d.data.id) || bb7U;
                e7d.ext = (p7i.listenerCount || 0) + 1
            }, format: function (Q7J, e7d) {
                var p7i = this.eH9y(e7d.data.id);
                if (!!p7i) {
                    p7i.listenerCount = Math.max(e7d.ext, p7i.listenerCount || 0)
                }
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.qk2x, "itemchange", {
                    attr: "playCount",
                    data: this.eH9y(e7d.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function (e7d) {
                e7d.data = {
                    threadId: "A_DJ_1_" + e7d.id
                }
            }, format: function (Q7J, e7d) {
                var p7i = e7d.ext.data || this.eH9y(e7d.id);
                p7i.liked = true;
                p7i.likedCount++;
                e7d.ext.data = p7i;
                try {
                    top.player.setLike(p7i)
                } catch (e) {}
                return p7i
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.qk2x, "itemchange", {
                    attr: "likedCount",
                    data: e7d.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function (e7d) {
                e7d.data = {
                    threadId: "A_DJ_1_" + e7d.id
                }
            }, format: function (Q7J, e7d) {
                var p7i = e7d.ext.data || this.eH9y(e7d.id);
                p7i.liked = false;
                p7i.likedCount--;
                e7d.ext.data = p7i;
                try {
                    top.player.setLike(p7i)
                } catch (e) {}
                return p7i
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.qk2x, "itemchange", {
                    attr: "likedCount",
                    data: e7d.ext.data
                })
            }
        }
    });
    q7j.qk2x = NEJ.C();
    b7g = q7j.qk2x.O7H(q7j.hG0x);
    b7g.cEa5f = function () {
        var dn8f = GUser.userId;
        this.lK1x({
            limit: 1001,
            key: "program_fav-" + dn8f,
            data: {
                offset: 0,
                limit: 1e3,
                uid: dn8f
            }
        })
    };
    b7g.cEb5g = function (dc8U) {
        var pk2x = dc8U[this.wl4p];
        l7e.cqd1x(4, function (R7K) {
            R7K.uu4y("track_program-" + pk2x, dc8U.songs)
        });
        delete dc8U.songs;
        var bN8F = dc8U.mainSong;
        l7e.cqd1x(4, function (R7K) {
            R7K.uu4y("track_program_main-" + pk2x, !bN8F ? [] : [bN8F])
        });
        dc8U.mainSong = (bN8F || bb7U).id
    };
    b7g.cEc5h = function (C7v) {
        var dc8U = this.eH9y(C7v),
            dn8f = localCache.Wt3x("host.profile.userId");
        return !!dc8U && dc8U.dj.userId == dn8f
    };
    b7g.cEd5i = function (C7v) {
        return !1
    };
    b7g.EH7A = function (p7i) {
        h7a.z7s(this.constructor, "itemchange", {
            attr: "detail",
            data: this.BV6P(p7i)
        });
        return p7i
    };
    b7g.cqj1x = function (C7v) {
        this.co8g("program-update-count", {
            data: {
                id: C7v
            }
        })
    };
    l7e.bQc5h = function (e7d) {
        var R7K = q7j.qk2x.A7t({
            onitemadd: function () {
                (e7d.onsuccess || bs8k)()
            }, onerror: function () {
                (e7d.onerror || bs8k)()
            }
        });
        if (e7d.data.liked) {
            R7K.vd4h(e7d.data)
        } else {
            R7K.pf2x(e7d.data)
        }
    };
    b7g.pf2x = function (dc8U) {
        if (!l7e.gW0x()) return;
        var cq8i = {
            ext: {}
        };
        if (k7d.lw1x(dc8U)) {
            cq8i.id = dc8U.id;
            cq8i.ext.data = dc8U
        } else {
            cq8i.id = dc8U
        }
        this.co8g("program-like", cq8i)
    };
    b7g.vd4h = function (dc8U) {
        if (!l7e.gW0x()) return;
        var cq8i = {
            ext: {}
        };
        if (k7d.lw1x(dc8U)) {
            cq8i.id = dc8U.id;
            cq8i.ext.data = dc8U
        } else {
            cq8i.id = dc8U
        }
        this.co8g("program-unlike", cq8i)
    };
    I7B.fJ9A.A7t({
        element: q7j.qk2x,
        event: ["listchange", "itemchange"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        fx9o = NEJ.R,
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        m7f = c7f("nm.l"),
        l7e = c7f("nm.x"),
        J7C = "playlist-tracks_",
        l7e = c7f("nm.x"),
        b7g;
    q7j.fe9V({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function (e7d) {
                e7d.data.c = JSON.stringify([{
                    id: e7d.data.id
                }])
            }, format: function (Q7J, e7d) {
                var bj7c = l7e.Fd7W(Q7J.songs[0]);
                bj7c.privilege = Q7J.privileges[0];
                return bj7c
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function (e7d) {
                e7d.data.n = 1e3
            }, format: function (Q7J, e7d) {
                var hw0x = [];
                this.sM3x.EH7A(Q7J.playlist);
                k7d.bd7W(Q7J.playlist.tracks, function (bN8F, r7k) {
                    var bQb5g = l7e.Fd7W(bN8F);
                    bQb5g.privilege = Q7J.privileges[r7k];
                    hw0x.push(bQb5g)
                }, this);
                return hw0x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function (Q7J, e7d) {
                var hw0x = [];
                k7d.bd7W(Q7J.songs, function (bj7c) {
                    hw0x.push(l7e.Fd7W(bj7c))
                });
                return hw0x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e7d) {
                var bz8r = {},
                    j7c = e7d.data,
                    cpW1x = this.hD0x(e7d.key) || [];
                Fj7c = [];
                k7d.bd7W(cpW1x, function (bN8F) {
                    var C7v = k7d.lw1x(bN8F) ? bN8F.id : bN8F;
                    bz8r[C7v] = true
                });
                e7d.ext = [];
                k7d.bd7W(j7c.tracks, function (bN8F) {
                    var C7v = k7d.lw1x(bN8F) ? bN8F.id : bN8F;
                    if (!bz8r[C7v]) {
                        Fj7c.push(C7v);
                        bz8r[C7v] = true;
                        e7d.ext.push(bN8F)
                    }
                });
                j7c.trackIds = JSON.stringify(Fj7c);
                j7c.op = "add";
                if (!Fj7c.length) {
                    e7d.value = {
                        code: 502
                    }
                }
            }, format: function (Q7J, e7d) {
                m7f.Z7S.L7E({
                    tip: "已添加至歌单"
                });
                var nu2x = this.sM3x.eH9y(e7d.data.pid);
                if (!!Q7J.coverImgUrl) nu2x.coverImgUrl = Q7J.coverImgUrl;
                k7d.no2x(e7d.ext, function (bN8F) {
                    this.zs5x(e7d, k7d.lw1x(bN8F) ? bN8F : null);
                    if (!!nu2x) nu2x.trackCount++
                }, this);
                h7a.z7s(q7j.ig0x, "itemchange", {
                    data: nu2x || {}, cmd: "add"
                });
                this.z7s("onaddsuccess");
                return null
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.xc4g, "listchange", {
                    key: e7d.key,
                    action: "refresh"
                });
                var pk2x = e7d.data.pid,
                    cy8q = this.kq1x(e7d.key)
            }, onmessage: function () {
                var mv1x = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function (cm8e) {
                    setTimeout(function () {
                        m7f.Z7S.L7E({
                            tip: mv1x[cm8e] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e7d) {
                var j7c = e7d.data;
                e7d.ext = j7c.trackIds;
                j7c.trackIds = JSON.stringify(j7c.trackIds);
                j7c.op = "del"
            }, format: function (Q7J, e7d) {
                var nu2x = this.sM3x.eH9y(e7d.data.pid);
                k7d.bd7W(e7d.ext, function (C7v) {
                    this.buf9W({
                        id: C7v,
                        key: "track_playlist-" + e7d.data.pid
                    }, !0);
                    if (!!nu2x) nu2x.trackCount = Math.max(0, nu2x.trackCount - 1)
                }, this);
                h7a.z7s(q7j.ig0x, "itemchange", {
                    data: nu2x || {}, cmd: "del"
                });
                return null
            }, finaly: function (d7e, e7d) {
                h7a.z7s(q7j.xc4g, "listchange", {
                    key: e7d.key,
                    action: "refresh"
                })
            }, onmessage: function (cm8e) {
                l7e.bnQ8I({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function (Q7J, e7d) {
                return this.bQa5f.EH7A(Q7J.program).songs
            }, onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function (Q7J, e7d) {
                var i7b = [];
                if (e7d.data.type == -1) {
                    if (Q7J.weekData && Q7J.weekData.length) {
                        e7d.data.type = 1
                    } else {
                        e7d.data.type = 0
                    }
                }
                if (e7d.data.type == 1) {
                    i7b = this.bPZ4d(Q7J.weekData)
                } else {
                    i7b = this.bPZ4d(Q7J.allData)
                }
                return i7b
            }, onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function (Q7J, e7d) {
                var nI2x = [],
                    i7b = Q7J.recommend || [];
                k7d.bd7W(i7b, function (bj7c, r7k) {
                    nI2x.push({
                        action: "recommendimpress",
                        json: {
                            alg: bj7c.alg,
                            scene: "user-song",
                            position: r7k,
                            id: bj7c.id
                        }
                    })
                });
                this.kI1x.VC2x(nI2x);
                e7d.limit = i7b.length;
                return i7b
            }, onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e7d) {
                e7d.data.lv = 0;
                e7d.data.tv = 0
            }, format: function (o7h, e7d) {
                return o7h
            }, onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q7j.xc4g = NEJ.C();
    b7g = q7j.xc4g.O7H(q7j.hG0x);
    b7g.cx8p = function () {
        this.cD8v();
        this.sM3x = q7j.ig0x.A7t();
        this.bQa5f = q7j.qk2x.A7t();
        this.kI1x = q7j.likes_id.A7t()
    };
    b7g.bPZ4d = function (i7b) {
        var o7h = [],
            fo9f = 0;
        k7d.bd7W(i7b, function (p7i, r7k) {
            var bj7c = l7e.Fd7W(p7i.song);
            if (r7k == 0) {
                fo9f = p7i.score
            }
            bj7c.max = fo9f;
            bj7c.playCount = p7i.playCount;
            bj7c.score = p7i.score;
            o7h.push(bj7c)
        });
        return o7h
    };
    I7B.fJ9A.A7t({
        element: q7j.xc4g,
        event: ["listchange"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        cW8O = c7f("nm.pc");
    var bpL8D = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var rE3x = function (bS8K) {
        var zg5l = "orpheus://orpheus";
        if (GEnvType == "local") zg5l = "http://igame.163.com";
        window.top.postMessage(JSON.stringify(bS8K), zg5l)
    };
    var cpT1x = function (mg1x) {
        var kN1x = "http://" + location.host + "/",
            TU2x = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dN9E = TU2x.exec(mg1x);
        if (!dN9E) return cpR1x(mg1x);
        var gl9c = dN9E[2],
            likes_id = dN9E[3],
            dn8f = dN9E[4] || "",
            jj0x = "";
        switch (gl9c) {
        case "album":
            jj0x = "#/m/album/comment/?rid=" + bpL8D[gl9c] + likes_id + "&id=" + likes_id;
            break;
        case "playlist":
            jj0x = "#/m/playlist/comment/?rid=" + bpL8D[gl9c] + likes_id + "&id=" + likes_id;
            break;
        case "song":
        case "dj":
        case "program":
            jj0x = "#/m/song?rid=" + bpL8D[gl9c] + likes_id;
            break;
        case "event":
            jj0x = "#/m/friend/event/?id=" + likes_id + "&uid=" + dn8f;
            break;
        case "user/home":
            jj0x = "#/m/personal/?uid=" + likes_id;
            break;
        case "mv":
            jj0x = "#/m2/mv/?id=" + likes_id;
            break;
        case "activity":
            jj0x = "#/m/friend/activity?id=" + likes_id;
            break;
        case "video":
            jj0x = "#/m2/mv/?id=" + likes_id + "&type=1";
            break;
        default:
            jj0x = "#/m/" + gl9c + "/?id=" + likes_id
        }
        return kN1x + jj0x
    };
    var cpR1x = function (mg1x) {
        var cpO1x = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dN9E = cpO1x.exec(mg1x);
        if (dN9E) return "http://v.youku.com/v_show/id_" + dN9E[1];
        return mg1x
    };
    cW8O.ej9a = function (gl9c, likes_id) {
        rE3x({
            name: "play",
            args: {
                type: gl9c,
                id: likes_id
            }
        })
    };
    cW8O.fC9t = function () {
        rE3x({
            name: "pause"
        })
    };
    cW8O.Cr6l = function (mg1x) {
        rE3x({
            name: "open",
            args: {
                link: cpT1x(mg1x)
            }
        })
    };
    cW8O.lj1x = function (gl9c, likes_id) {
        rE3x({
            name: "share",
            args: {
                type: gl9c,
                id: likes_id
            }
        })
    };
    cW8O.bPX4b = function (gl9c, likes_id) {
        rE3x({
            name: "comment",
            args: {
                type: gl9c,
                id: likes_id
            }
        })
    };
    cW8O.cpM1x = function () {
        rE3x({
            name: "init"
        })
    };
    cW8O.TP2x = function (ci8a) {
        rE3x({
            name: "setHeight",
            args: {
                height: ci8a
            }
        })
    };
    cW8O.jv0x = function (bH8z, X7Q) {
        rE3x({
            name: "toast",
            args: {
                message: bH8z || "",
                state: X7Q
            }
        })
    };
    cW8O.TO2x = function (mg1x) {
        rE3x({
            name: "login",
            args: {
                link: mg1x
            }
        })
    };
    cW8O.bPW4a = function (Cs6m) {
        rE3x({
            name: "topbar",
            args: {
                show: !!Cs6m
            }
        })
    };
    cW8O.cpG1x = function (by8q) {
        rE3x({
            name: "refreshtopbar",
            args: {
                info: by8q
            }
        })
    };
    cW8O.cpC1x = function (br7k, r7k) {
        rE3x({
            name: "big",
            args: {
                arr: br7k,
                index: r7k
            }
        })
    };
    cW8O.JU8M = function (cw8o) {
        rE3x({
            name: "download",
            args: {
                img: cw8o
            }
        })
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                    case a[19]:
                        k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                    case a[16]:
                        k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                    case a[541]:
                        k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {})();
(function () {
    var bPO4S;
    var uE4I = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cpt1x = 0;
    var bPM4Q = 0;
    var bPL4P = 1;
    var bPK4O = 0;
    var bsi9Z = "";
    var bPJ4N = "";
    var bPI4M = "";
    var WF3x = "";
    var WH3x = "";
    var bsB9s = "";
    var bPH4L = 0;
    var bPG4K = "";
    var KG8y = "";
    var GI7B = 0;
    var bsP9G = ntes_get_domain();
    var bsQ9H = null;
    var cEh5m = "//analytics.163.com";
    var cpi1x = function () {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bsP9G
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bsP9G
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bsP9G
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cph1x = 0;
    var TD2x = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * TD2x))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << TD2x) - 1;
        for (var b = 0; b < d.length * TD2x; b += TD2x) {
            c[b >> 5] |= (d.charCodeAt(b / TD2x) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cph1x ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        WF3x = "-";
        bsB9s = "-";
        WH3x = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            WF3x = b.width + "x" + b.height;
            bsB9s = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                WF3x = f.width + "x" + f.height
            }
        } if (a.language) {
            WH3x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                WH3x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bPH4L = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cEi5n(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cpi1x;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bPO4S;
        bsi9Z = escape(a || document.location);
        bPJ4N = escape(m || document.title);
        bPI4M = l === true ? "" : escape(l || document.referrer);
        bPG4K = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bsQ9H == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bsQ9H = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bsi9Z.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bsQ9H) {
                uE4I = fetch_visitor_hash();
                bPM4Q = 1;
                ntes_set_cookie_long("_ntes_nnid", uE4I + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uE4I)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uE4I = h.substr(0, o);
            GI7B = h.substr(o + 1, p - o - 1);
            if (GI7B == 0) {
                GI7B = (new Date).getTime();
                f = true
            }
            if (!uE4I) {
                uE4I = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uE4I + "," + GI7B);
                ntes_set_cookie_long("_ntes_nuid", uE4I)
            }
            if (GI7B != 0 && b - GI7B > 365 * 86400 * 1e3) {
                GI7B = 0;
                ntes_set_cookie_long("_ntes_nnid", uE4I + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uE4I)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        KG8y = c("P_INFO", "P_OINFO");
        KG8y = KG8y ? KG8y.substr(0, KG8y.indexOf("|")) : "";
        bPK4O = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uE4I, "&_nvtm=", cpt1x, "&_nvsf=", bPL4P, "&_nvfi=", bPM4Q, "&_nlag=", WH3x, "&_nlmf=", bPH4L, "&_nres=", WF3x, "&_nscd=", bsB9s, "&_nstm=", bPK4O, "&_nurl=", bsi9Z, "&_ntit=", bPJ4N, "&_nref=", bPI4M, "&_nfla=", bPG4K, "&_nssn=", KG8y, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bPL4P = 0;
        neteaseTracker.callback = null
    }
    bPO4S = "iad";
    neteaseTracker()
})();
(function () {})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {},
        l = d.lib = {},
        s = function () {},
        t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            }, create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            }, init: function () {}, mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            }, clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            }, toString: function (a) {
                return (a || v).stringify(this)
            }, concat: function (a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            }, clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            }, clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            }, random: function (a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            }, parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            }, parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            }, parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this.j7c = new r.init;
                this.bPA4E = 0
            }, WM3x: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this.j7c.concat(a);
                this.bPA4E += a.sigBytes
            }, CC6w: function (a) {
                var c = this.j7c,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bPE4I, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.bPz4D(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            }, clone: function () {
                var a = t.clone.call(this);
                a.j7c = this.j7c.clone();
                return a
            }, bPE4I: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.btK9B()
        }, update: function (a) {
            this.WM3x(a);
            this.CC6w();
            return this
        }, finalize: function (a) {
            a && this.WM3x(a);
            return this.WV3x()
        }, blockSize: 16,
        btu9l: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, coX1x: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bz8r;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length,
                s = this.bz8r,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        }, bz8r: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        btK9B: function () {
            this.dO9F = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bPz4D: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dO9F.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, WV3x: function () {
            var b = this.j7c,
                n = b.words,
                a = 8 * this.bPA4E,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.CC6w();
            b = this.dO9F;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dO9F = this.dO9F.clone();
            return b
        }
    });
    t.MD5 = v.btu9l(r);
    t.HmacMD5 = v.coX1x(r)
})(Math);
(function () {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function (d) {
                this.cfg = this.cfg.extend(d)
            }, compute: function (d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
                return this.create(this.btQ9H, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.coU1x, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bPx4B = e;
                this.J7C = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.btK9B()
            }, process: function (e) {
                this.WM3x(e);
                return this.CC6w()
            }, finalize: function (e) {
                e && this.WM3x(e);
                return this.WV3x()
            }, keySize: 4,
            ivSize: 4,
            btQ9H: 1,
            coU1x: 2,
            btu9l: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        WV3x: function () {
            return this.CC6w(!0)
        }, blockSize: 1
    });
    var b = p.mode = {},
        x = function (e, a, b) {
            var c = this.bPv4z;
            c ? this.bPv4z = u : c = this.bPt4x;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
                return this.Encryptor.create(e, a)
            }, createDecryptor: function (e, a) {
                return this.Decryptor.create(e, a)
            }, init: function (e, a) {
                this.bPs4w = e;
                this.bPv4z = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bPs4w,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bPt4x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bPs4w,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bPt4x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function () {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.bPx4B == this.btQ9H) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bPE4I = 1;
            this.fl9c = c.call(a, this, b && b.words)
        }, bPz4D: function (a, b) {
            this.fl9c.processBlock(a, b)
        }, WV3x: function () {
            var a = this.cfg.padding;
            if (this.bPx4B == this.btQ9H) {
                a.pad(this.j7c, this.blockSize);
                var b = this.CC6w(!0)
            } else b = this.CC6w(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function (a) {
                this.mixIn(a)
            }, toString: function (a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            }, parse: function (a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            }, decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.bdN5S(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            }, bdN5S: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            }, decrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.bdN5S(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            btK9B: function () {
                for (var a = this.J7C, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cos1x = d + 6) + 1), e = this.coq1x = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.cob1x = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            }, encryptBlock: function (a, b) {
                this.bPn4r(a, b, this.coq1x, t, r, w, v, l)
            }, decryptBlock: function (a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bPn4r(a, c, this.cob1x, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            }, bPn4r: function (a, b, c, d, e, j, l, f) {
                for (var m = this.cos1x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            }, keySize: 8
        });
    u.AES = p.btu9l(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);)++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c7f = NEJ.P,
        em9d = c7f("nej.g"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        Tg2x = c7f("nm.x.ek");
    Tg2x.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Tg2x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c7f = NEJ.P,
        em9d = c7f("nej.g"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        Tg2x = c7f("nm.x.ek"),
        l7e = c7f("nm.x");
    if (v7o.bn7g.redefine) return;
    window.GEnc = true;
    var buv0x = function (coa1x) {
        var o7h = [];
        k7d.bd7W(coa1x, function (cnX1x) {
            o7h.push(Tg2x.emj[cnX1x])
        });
        return o7h.join("")
    };
    var cnS1x = v7o.bn7g;
    v7o.bn7g = function (Y7R, e7d) {
        var j7c = {},
            e7d = NEJ.X({}, e7d),
            lE1x = Y7R.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y7R) && !(e7d.headers && e7d.headers[em9d.yg5l] == em9d.EK7D) && !e7d.noEnc) {
            if (lE1x != -1) {
                j7c = k7d.hv0x(Y7R.substring(lE1x + 1));
                Y7R = Y7R.substring(0, lE1x)
            }
            if (e7d.query) {
                j7c = NEJ.X(j7c, k7d.fG9x(e7d.query) ? k7d.hv0x(e7d.query) : e7d.query)
            }
            if (e7d.data) {
                j7c = NEJ.X(j7c, k7d.fG9x(e7d.data) ? k7d.hv0x(e7d.data) : e7d.data)
            }
            j7c["csrf_token"] = v7o.gy0x("__csrf");
            Y7R = Y7R.replace("api", "weapi");
            e7d.method = "post";
            delete e7d.query;
            var bPc4g = window.asrsea(JSON.stringify(j7c), buv0x(["流泪", "强"]), buv0x(Tg2x.md), buv0x(["爱心", "女孩", "惊恐", "大笑"]));
            e7d.data = k7d.cE8w({
                params: bPc4g.encText,
                encSecKey: bPc4g.encSecKey
            })
        }
        cnS1x(Y7R, e7d)
    };
    v7o.bn7g.redefine = true
})();
(function () {
    window.setTimeout(function () {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function (tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        } if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function () {})();
(function () {})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        dv8n = c7f("nej.p"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        dC8u = c7f("nm.u"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        m7f = c7f("nm.l"),
        cW8O = c7f("nm.pc"),
        buT0x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j7c = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        },
        cnO1x = function () {
            if (h7a && h7a.z7s) {
                h7a.dispatchEventalias = h7a.z7s
            }
        };
    cnO1x();
    l7e.bvb0x = function (bN8F) {
        if (!bN8F || bN8F.copyrightId === undefined || !!bN8F.program) return false;
        if (window.GAbroad) {
            bN8F.fee = 0;
            return true
        }
        if (bN8F.status < 0) return true;
        var Tb2x;
        if (typeof GCopyrights !== "undefined") Tb2x = GCopyrights;
        try {
            if (!Tb2x && !!top.GCopyrights) Tb2x = top.GCopyrights
        } catch (e) {}
        if (Tb2x) {
            var r7k = k7d.di8a(Tb2x, bN8F.copyrightId);
            if (r7k >= 0) return true
        }
        return false
    };
    l7e.bvg0x = function () {
        var CO6I = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            xd4h = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            cnE1x = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var cnD1x = function (J7C, j7c, SY2x) {
            switch (J7C) {
            case "event":
                j7c = j7c.split("|");
                return "/event?id=" + j7c[0] + "&uid=" + j7c[1];
            case "searchsong":
            case "searchlyric":
                var u7n = J7C == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(j7c) + "&type=" + u7n;
            case "toplist":
                return "/discover/toplist?id=" + j7c + "&_hash=songlist-" + SY2x;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + SY2x;;
            case "record":
                j7c = j7c.split("|");
                return "/user/songs/rank?id=" + j7c[0] + "&cat=" + j7c[1];
                break;
            default:
                return "/" + J7C + "?id=" + j7c + "&_hash=songlist-" + SY2x
            }
        };
        return function (ea9R, SY2x) {
            if (!ea9R) return null;
            var Kf8X = ea9R.fid || (ea9R.type != 18 ? ea9R.type : null),
                bvy0x = ea9R.fdata || ea9R.rid,
                bOU4Y = ea9R.page || ea9R.fhref;
            var J7C = xd4h[Kf8X];
            if (!J7C) {
                var xZ5e = (bOU4Y || "").match(CO6I);
                if (xZ5e) J7C = xZ5e[1]
            }
            if (!J7C) return null;
            return {
                title: cnE1x[J7C],
                link: !xd4h[Kf8X] ? bOU4Y : cnD1x(J7C, bvy0x, SY2x),
                fid: Kf8X,
                fdata: bvy0x
            }
        }
    }();
    l7e.Xf3x = function (kg1x) {
        var dp8h = kg1x;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp8h = GUser;
        return dp8h
    };
    l7e.gW0x = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l7e.KN8F = function () {
        var CO6I = /#(.*?)$/;
        return function (gx0x) {
            var jA0x = gx0x === false ? location : top.location;
            return CO6I.test(jA0x.href) ? RegExp.$1 : ""
        }
    }();
    l7e.CS6M = function () {
        var CT6N = a6g.dg8Y("audio"),
            cnm1x = CT6N.canPlayType && CT6N.canPlayType("audio/mpeg");
        if (cnm1x) return 2;
        var cng1x = l7e.bwp0x().supported;
        if (cng1x) return 1;
        return 0
    };
    l7e.bwp0x = function () {
        var gw0x, bws0x = !1,
            bwt0x = "";
        if (dv8n.ds8k.browser == "ie") {
            try {
                gw0x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gw0x = null
            }
            if (gw0x) {
                bws0x = !0;
                bwt0x = gw0x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gw0x = navigator.plugins["Shockwave Flash"];
                if (gw0x) {
                    bws0x = !0;
                    bwt0x = gw0x.description
                }
            }
        }
        return {
            supported: bws0x,
            version: bwt0x
        }
    };
    l7e.ru3x = function () {
        return "网易云音乐"
    };
    l7e.cnf1x = function () {
        return j7c
    };
    l7e.bOK4O = function (cG8y) {
        var C7v = j7c[cG8y];
        return C7v == null ? "" : buT0x.replace("{ID}", C7v)
    };
    l7e.xj4n = function (bo7h, dY9P, CU6O) {
        if (!bo7h) return "";
        if (!!CU6O) {
            bo7h = l7e.cnb1x(bo7h)
        }
        return l7e.Xj3x(l7e.cna1x(bo7h, dY9P))
    };
    l7e.Xq3x = function () {
        var TU2x = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            beV5a = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            cmZ1x = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            },
            cmY1x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cmT1x = function (dH9y, bfr5w) {
            dH9y = KT8L(dH9y);
            if (!!bfr5w) {
                dH9y = dH9y.replace(TU2x.MLINE, "\n\n").replace(TU2x.LING, "</br>")
            }
            dH9y = l7e.Xj3x(dH9y);
            return dH9y
        };
        var KT8L = function (bo7h) {
            return k7d.Fl7e(cmZ1x, bo7h)
        };
        return function (dH9y, e7d, dB8t) {
            e7d = e7d || {};
            dB8t = dB8t || {};
            dB8t.actHash = {};
            var cmO1x = !!e7d.parseLink,
                cmN1x = !!e7d.parseAct,
                cmM1x = e7d.linkTpl || beV5a.LINK,
                cmL1x = e7d.atTpl || beV5a.AT,
                cmK1x = e7d.atUrl || "/user/home?nickname=",
                cmI1x = e7d.actTpl || beV5a.ACT,
                bfr5w = !!e7d.keepSpace,
                bfJ5O = e7d.linkKlass || "s-fc7";
            cEK5P = e7d.actBiJson || "";
            if (!dH9y) return "";
            dH9y = dH9y.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lF1x = cmY1x[cmO1x + 2 * cmN1x],
                dh8Z = TU2x[lF1x],
                br7k = null,
                mc1x = null,
                gt9k = 0,
                cEL5Q = "",
                cEM5R = "";
            var pS2x = [];
            dh8Z.lastIndex = 0;
            while (br7k = dh8Z.exec(dH9y)) {
                var dN9E = {
                    html: "",
                    before: br7k.index - 1,
                    after: br7k.index + br7k[0].length
                };
                if (br7k[1]) {
                    var mc1x = br7k[2].replace(/[^\x00-\xff]/g, "**");
                    if (mc1x.length < 4 || mc1x.length > 32) {} else {
                        var Ea6U = a6g.es9j(cmL1x);
                        dN9E.html = a6g.bZ8R(Ea6U, {
                            value: KT8L(br7k[2]),
                            url: encodeURI(cmK1x + br7k[2]),
                            klass: bfJ5O
                        });
                        pS2x.push(dN9E)
                    }
                } else if (br7k.length > 8 && br7k[4]) {
                    var Ea6U = a6g.es9j(cmM1x);
                    dN9E.html = a6g.bZ8R(Ea6U, {
                        value: KT8L(br7k[4]),
                        url: br7k[4],
                        klass: bfJ5O
                    });
                    pS2x.push(dN9E)
                } else {
                    var bOB4F = lF1x == "ACT_NOLINK" ? 4 : 9;
                    var Ea6U = a6g.es9j(cmI1x);
                    dN9E.html = a6g.bZ8R(Ea6U, {
                        value: KT8L(br7k[bOB4F]),
                        klass: bfJ5O
                    });
                    pS2x.push(dN9E);
                    dB8t.actHash[br7k[bOB4F].slice(1, -1)] = true
                }
            }
            var bgd5i = pS2x.length,
                kg1x = {
                    before: dH9y.length - 1,
                    after: 0
                },
                bge5j = "";
            for (var i = 0; i <= bgd5i; i++) {
                var hz0x, fR9I;
                hz0x = (pS2x[i - 1] || kg1x).after;
                fR9I = (pS2x[i] || kg1x).before;
                if (fR9I >= hz0x && hz0x >= 0 && fR9I <= dH9y.length - 1) {
                    bge5j += cmT1x(dH9y.substring(hz0x, fR9I + 1), bfr5w)
                }
                if (pS2x[i]) {
                    bge5j += pS2x[i].html
                }
            }
            return bge5j
        }
    }();
    l7e.cnb1x = function () {
        var dh8Z = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bo7h) {
            return (bo7h || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dh8Z, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l7e.cna1x = function () {
        var dh8Z = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var et9k = function (mc1x, dY9P) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(mc1x) + '" class="' + (dY9P || "") + '">@' + mc1x + "</a>"
        };
        return function (bo7h, dY9P) {
            return (bo7h || "").replace(dh8Z, function ($0, $1) {
                return et9k($1, dY9P)
            })
        }
    }();
    l7e.Xj3x = function () {
        var dh8Z = /\[(.*?)\]/g;
        return function (bo7h) {
            return (bo7h || "").replace(dh8Z, function ($1, $2) {
                var Y7R = l7e.bOK4O($2);
                return !Y7R ? $1 : '<img src="' + Y7R + '"/>'
            })
        }
    }();
    l7e.Bd6X = function (F7y, dY9P) {
        a6g.bE8w(F7y, dY9P) ? a6g.x7q(F7y, dY9P) : a6g.y7r(F7y, dY9P)
    };
    l7e.KW8O = function (cN8F, kN1x) {
        cN8F = a6g.B7u(cN8F);
        kN1x = a6g.B7u(kN1x);
        if (!cN8F || !kN1x) return !1;
        for (kN1x = kN1x.parentNode; !!kN1x && kN1x != cN8F; kN1x = kN1x.parentNode);
        return kN1x == cN8F
    };
    l7e.lg1x = function () {
        var bOA4E = function (gR0x) {
            return (gR0x < 10 ? "0" : "") + gR0x
        };
        return function (kO1x) {
            kO1x = parseInt(kO1x) || 0;
            if (!kO1x) return "00:00";
            var yb5g = Math.floor(kO1x % 60),
                cme1x = Math.floor(kO1x / 60);
            return bOA4E(cme1x) + ":" + bOA4E(yb5g)
        }
    }();
    l7e.zw5B = function (fO9F, xr4v) {
        if (!fO9F || fO9F.length == 0) return "";
        xr4v = xr4v || "/";
        var br7k = [];
        for (var i = fO9F.length - 1; i >= 0; i--) {
            br7k.unshift(fO9F[i].name)
        }
        return br7k.join(xr4v)
    };
    l7e.rV3x = function () {
        var Sk1x = function (ic0x, dY9P, cN8F, XU3x) {
            var et9k = XU3x ? l7e.bgB5G : k7d.dG9x;
            if (!ic0x || !ic0x.name) return "";
            if (!ic0x.id) return '<span class="' + dY9P + '">' + et9k(ic0x.name) + "</span>";
            return "<a" + (cN8F ? ' target="_blank"' : "") + ' class="' + dY9P + '" href="/artist?id=' + ic0x.id + '" hidefocus="true">' + et9k(ic0x.name) + "</a>"
        };
        return function (fO9F, V7O, xr4v, cN8F, bOy4C, XU3x) {
            if (!fO9F || !fO9F.length) return "";
            xr4v = xr4v || "/";
            V7O = V7O || "";
            Lc8U = "";
            var el9c = [];
            for (var i = 0, i7b = [], tf3x = [], fH9y; i < fO9F.length; ++i) {
                el9c.push(fO9F[i].name);
                if (!fO9F[i] || fO9F[i].id <= 0) {
                    tf3x.push(fO9F[i]);
                    continue
                }
                if (k7d.gG0x(V7O)) {
                    fH9y = V7O(fO9F[i])
                } else {
                    fH9y = Sk1x(fO9F[i], V7O, cN8F, XU3x)
                } if (fH9y && bOy4C && fO9F[i].tns && fO9F[i].tns.length > 0) {
                    Lc8U = k7d.dG9x(fO9F[i].tns[0]);
                    fH9y += '<span class="s-fc8" title="' + Lc8U + '"> - (' + Lc8U + ")</span>"
                }!!fH9y && i7b.push(fH9y)
            }
            for (var i = 0, fH9y; i < tf3x.length; ++i) {
                if (k7d.gG0x(V7O)) {
                    fH9y = V7O(tf3x[i])
                } else {
                    fH9y = Sk1x(tf3x[i], V7O, cN8F, XU3x)
                } if (fH9y && bOy4C && tf3x[i].tns && tf3x[i].tns.length > 0) {
                    Lc8U = k7d.dG9x(tf3x[i].tns[0]);
                    fH9y += '<span class="s-fc8" title="' + Lc8U + '"> - (' + Lc8U + ")</span>"
                }!!fH9y && i7b.push(fH9y)
            }
            return '<span title="' + el9c.join(xr4v) + '">' + i7b.join(xr4v) + "</span>"
        }
    }();
    l7e.xS5X = function (fz9q, pv2x) {
        pv2x = pv2x || "86";
        return !!fz9q && (pv2x == "86" ? /^\d{11}$/ : /^\d+$/).test(fz9q)
    };
    l7e.cEN5S = function (fz9q) {
        if (!l7e.xS5X(fz9q)) return fz9q;
        return fz9q.substring(0, 3) + "****" + fz9q.substr(7)
    };
    l7e.jL0x = function () {
        var dh8Z = /^\s+$/g;
        return function (ib0x) {
            return !ib0x || dh8Z.test(ib0x)
        }
    }();
    l7e.Sh1x = function () {
        var bhm6g = /[^\x00-\xfff]/g;
        return function (ib0x) {
            var clW1x = ib0x.match(bhm6g) || [],
                dr8j = clW1x.length;
            return ib0x.length + dr8j
        }
    }();
    l7e.CZ6T = function () {
        var bhm6g = /[^\x00-\xfff]/;
        return function (ib0x, eE9v) {
            for (var i = 0, len = ib0x.length; i < len && eE9v > 0; i++) {
                if (bhm6g.test(ib0x.charAt(i))) {
                    eE9v -= 2;
                    if (eE9v < 0) {
                        break
                    }
                } else {
                    eE9v -= 1
                }
            }
            return ib0x.substring(0, i)
        }
    }();
    l7e.Dc6W = function (ib0x, eE9v, Tf2x) {
        eE9v = eE9v || 10;
        Tf2x = Tf2x || nej.p.ds8k.engine == "trident" && parseInt(nej.p.ds8k.release) < 5;
        if (Tf2x && l7e.Sh1x(ib0x) > eE9v) {
            return l7e.CZ6T(ib0x, eE9v) + "..."
        } else {
            return ib0x
        }
    };
    l7e.bOj4n = function (f7c) {
        return f7c === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f7c.type || f7c.href || ~f7c.tabIndex)
    };
    l7e.clK0x = function (d7e, cN8F) {
        if (!d7e || !cN8F) return !0;
        var f7c, u7n = d7e.type.toLowerCase();
        if (u7n == "mouseout") {
            f7c = d7e.relatedTarget || d7e.toElement
        } else if (u7n == "mouseover") {
            f7c = d7e.relatedTarget || d7e.fromElement
        }
        return !f7c || f7c !== cN8F && !l7e.KW8O(cN8F, f7c)
    };
    l7e.tN3x = function () {
        R7K = {};
        return function (f7c, dZ9Q) {
            var C7v = a6g.lv1x(f7c),
                J7C = "hover-" + C7v;
            if (!dZ9Q || !C7v || !!R7K[J7C]) return;
            R7K[J7C] = !0;
            h7a.s7l(C7v, "mouseover", function () {
                var bhw6q = a6g.H7A(f7c, "hshow") || [];
                var bhx6r = a6g.H7A(f7c, "icn-dislike") || [];
                a6g.y7r(C7v, "z-hover");
                a6g.ba7T(bhw6q[0], "display", "block");
                a6g.ba7T(bhx6r[0], "display", "block")
            });
            h7a.s7l(C7v, "mouseout", function () {
                var bhw6q = a6g.H7A(f7c, "hshow") || [];
                var bhx6r = a6g.H7A(f7c, "icn-dislike") || [];
                a6g.x7q(C7v, "z-hover");
                a6g.ba7T(bhw6q[0], "display", "none");
                a6g.ba7T(bhx6r[0], "display", "none")
            })
        }
    }();
    l7e.bOf4j = function () {
        var bz8r = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (ib0x) {
            return k7d.Fl7e(bz8r, ib0x)
        }
    }();
    l7e.yI5N = function (bA8s) {
        if (k7d.GY7R(bA8s)) bA8s = bA8s.getTime();
        var eR9I = new Date,
            kj1x = eR9I.getTime() - bA8s;
        if (kj1x <= 6e4) return "刚刚";
        var nx2x = eR9I.getHours() * 36e5 + eR9I.getMinutes() * 6e4 + eR9I.getSeconds() * 1e3;
        if (kj1x <= nx2x) {
            if (kj1x < 36e5) {
                var EY7R = Math.floor(kj1x / 6e4);
                return EY7R + "分钟前"
            }
            return k7d.if0x(bA8s, "HH:mm")
        } else {
            if (kj1x < nx2x + 864e5) {
                return "昨天" + k7d.if0x(bA8s, "HH:mm")
            } else {
                var gI0x = eR9I.getFullYear(),
                    Se1x = new Date(gI0x, 0, 1);
                var nx2x = eR9I.getTime() - Se1x.getTime();
                if (kj1x < nx2x) {
                    return k7d.if0x(bA8s, "M月d日 HH:mm")
                }
                return k7d.if0x(bA8s, "yyyy年M月d日")
            }
        }
    };
    l7e.clD0x = function (bA8s) {
        if (k7d.GY7R(bA8s)) bA8s = bA8s.getTime();
        var eR9I = new Date,
            kj1x = eR9I.getTime() - bA8s;
        var nx2x = eR9I.getHours() * 36e5 + eR9I.getMinutes() * 6e4 + eR9I.getSeconds() * 1e3;
        if (kj1x <= nx2x) {
            return "今天" + k7d.if0x(bA8s, "HH:mm")
        } else {
            if (kj1x < nx2x + 864e5) {
                return "昨天" + k7d.if0x(bA8s, "HH:mm")
            } else {
                return k7d.if0x(bA8s, "yy-MM-dd HH:mm")
            }
        }
    };
    l7e.clC0x = function (bA8s) {
        if (k7d.GY7R(bA8s)) bA8s = bA8s.getTime();
        var eR9I = new Date,
            kj1x = eR9I.getTime() - bA8s;
        if (kj1x <= 6e4) return "刚刚";
        var nx2x = eR9I.getHours() * 36e5 + eR9I.getMinutes() * 6e4 + eR9I.getSeconds() * 1e3;
        if (kj1x <= nx2x) {
            if (kj1x < 36e5) {
                var EY7R = Math.floor(kj1x / 6e4);
                return EY7R + "分钟前"
            }
            return k7d.if0x(bA8s, "HH:mm")
        } else {
            if (kj1x < nx2x + 864e5) {
                return "昨天" + k7d.if0x(bA8s, "HH:mm")
            } else if (kj1x < nx2x + 864e5 * 6) {
                var gI0x = eR9I.getFullYear(),
                    Se1x = new Date(gI0x, 0, 1);
                var nx2x = eR9I.getTime() - Se1x.getTime();
                if (kj1x < nx2x) {
                    return k7d.if0x(bA8s, "M月d日 HH:mm")
                }
                return k7d.if0x(bA8s, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l7e.XX3x = function () {
        var dh8Z = /\{(.*?)\}/gi;
        return function (or2x, j7c) {
            return (or2x || "").replace(dh8Z, function ($1, $2) {
                var D7w = j7c[$2];
                return D7w == null ? $1 : D7w
            })
        }
    }();
    l7e.fe9V = function () {
        var bf7Y = Array.prototype.slice.call(arguments, 0),
            or2x = bf7Y.shift();
        if (or2x) {
            return or2x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bf7Y.length ? bf7Y[$2] : $1
            })
        }
        return ""
    };
    l7e.Ld8V = function (i7b, dY9P, kb1x) {
        return "";
        kb1x = kb1x || " - ";
        if (i7b && i7b.length) {
            return kb1x + (!!dY9P ? '<span class="' + dY9P + '">' + i7b[0] + "</span>" : i7b[0])
        }
        return ""
    };
    l7e.bOe4i = function () {
        if (window.getSelection) {
            var sl3x = window.getSelection();
            if (sl3x && sl3x.focusNode && sl3x.focusNode.tagName) {
                var AY6S = a6g.dk8c(sl3x.focusNode);
                for (var i = 0, zh5m; i < AY6S.length; ++i) {
                    zh5m = AY6S[i].tagName;
                    if (!zh5m) continue;
                    zh5m = zh5m.toLowerCase();
                    if (zh5m == "textarea" || zh5m == "input") return !0
                }
            }
        } else if (document.selection) {
            var db8T = document.selection.createRange();
            if (db8T) {
                var f7c = db8T.parentElement();
                if (f7c && f7c.tagName) {
                    var zh5m = f7c.tagName.toLowerCase();
                    if (zh5m == "textarea" || zh5m == "input") return !0
                }
            }
        }
        return !1
    };
    l7e.Dd6X = function (fE9v) {
        if (/^[A-Z]\:\\/i.test(fE9v)) {
            fE9v = fE9v.split("\\")
        } else {
            fE9v = fE9v.split("/")
        }
        fE9v = fE9v[fE9v.length - 1];
        return fE9v
    };
    l7e.clx0x = function () {
        var Gk7d = [13, 17, 34, 19, 18, 21];
        return function (C7v) {
            var br7k = (C7v || "").split("_");
            return {
                type: Gk7d[br7k[2]] || -1,
                id: br7k[3] || ""
            }
        }
    }();
    l7e.bOb4f = function (gw0x) {
        if (!gw0x) {
            return true
        }
        for (var k in gw0x) {
            return false
        }
        return true
    };
    l7e.biv6p = function (dp8h) {
        if (!dp8h) {
            return ""
        }
        if (4 == dp8h.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp8h.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp8h.expertTags && dp8h.expertTags.length || !l7e.bOb4f(dp8h.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l7e.RY1x = function (hH0x) {
        if (!hH0x) return "";
        var dr8j = hH0x.length,
            ik0x = [];
        ik0x[0] = dr8j / 3 | 0;
        ik0x[1] = ik0x[0] + ((dr8j - ik0x[0]) / 2 | 0);
        return hH0x.substring(0, ik0x[0]) + hH0x.substring(ik0x[0], ik0x[1]).replace(/\d/g, "*") + hH0x.substring(ik0x[1], dr8j)
    };
    l7e.cEO5T = function (r7k, cy8q) {
        return (r7k % cy8q + cy8q) % cy8q
    };
    l7e.biG6A = function () {
        var Gk7d = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function (C7v) {
            var br7k = (C7v || "").split("_"),
                o7h = {
                    type: Gk7d[br7k[2]] || -1,
                    id: br7k[3] || ""
                };
            if (o7h.type == "event") {
                o7h.uid = br7k[4] || "";
                return "/" + o7h.type + "?id=" + o7h.id + "&uid=" + o7h.uid
            }
            return "/" + o7h.type + "?id=" + o7h.id
        }
    }();
    l7e.biJ6D = function () {
        var Gk7d = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function (C7v) {
            var br7k = (C7v || "").split("_");
            return Gk7d[br7k[2]] || "资源"
        }
    }();
    l7e.clu0x = function (bv8n) {
        var qs = bv8n.length > 0 ? bv8n.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l7e.biM6G = function (nD2x, RU1x) {
        var Yj3x = 0,
            ex9o = new Array;
        k7d.bd7W(nD2x, function (Y7R, r7k) {
            var cw8o = a6g.dg8Y("img");
            cw8o.src = Y7R;
            h7a.s7l(cw8o, "load", function (r7k, d7e) {
                ex9o[r7k] = 1;
                Yj3x++;
                if (Yj3x == nD2x.length) RU1x(nD2x, ex9o)
            }.g7b(this, r7k));
            h7a.s7l(cw8o, "error", function (d7e, r7k) {
                ex9o[r7k] = 0;
                Yj3x++;
                if (Yj3x == nD2x.length) RU1x(nD2x, ex9o)
            }.g7b(this, r7k))
        })
    };
    l7e.Lj9a = function (i7b, dV9M) {
        var o7h = [];
        k7d.bd7W(i7b, function (p7i, r7k, P7I) {
            o7h.push(dV9M(p7i, r7k, P7I))
        });
        return o7h
    };
    l7e.YY3x = function (i7b, dV9M, P7I) {
        var o7h = [];
        k7d.bd7W(i7b, function (p7i, r7k) {
            if (dV9M.call(P7I, p7i, r7k, i7b)) {
                o7h.push(p7i)
            }
        });
        return o7h
    };
    l7e.bOa4e = function (bo7h) {
        return k7d.dG9x((bo7h || "").replace(/\s{2,}/g, " ").trim())
    };
    l7e.biV6P = function (bj7c) {
        if (bj7c.transNames && bj7c.transNames.length) {
            return bj7c.transNames[0]
        } else if (bj7c.alias && bj7c.alias.length) {
            return bj7c.alias[0]
        }
    };
    l7e.biZ6T = function (Uo2x) {
        if (Uo2x) {
            return Uo2x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l7e.bjb6V = function (f7c) {
        var f7c = a6g.B7u(f7c),
            cG8y = f7c && f7c.getElementsByTagName("textarea")[0],
            J7C = a6g.t7m(f7c, "key"),
            bjd6X = a6g.t7m(f7c, "simple") == "1",
            clr0x = a6g.t7m(f7c, "pvnamed") == "1",
            clo0x = q7j.xc4g.gr9i();
        if (!(f7c && cG8y && J7C)) return;
        var YE3x, bjm6g, YM3x;
        YE3x = a6g.H7A(a6g.B7u("m-playlist"), "j-img");
        k7d.bd7W(YE3x, function (iT0x) {
            if (!YM3x && a6g.t7m(iT0x, "key")) {
                YM3x = a6g.t7m(iT0x, "key");
                iT0x.removeAttribute("data-key")
            }
        });
        YE3x = a6g.H7A(a6g.B7u("m-playlist"), "m-info");
        k7d.bd7W(YE3x, function (iT0x) {
            if (!bjm6g && iT0x.id && iT0x.id.indexOf("auto-id-") == 0) {
                bjm6g = iT0x.id.slice(8, 12)
            }
        });
        var D7w = cG8y.value || cG8y.defaultValue;
        if (YM3x) {
            D7w = decodeURIComponent(k7d.cln0x(D7w, "param=" + bjm6g + YM3x))
        }
        D7w = JSON.parse(D7w);
        if (clr0x) {
            l7e.clm0x(D7w)
        }
        if (bjd6X) {
            D7w = l7e.Fd7W(D7w)
        }
        clo0x.uu4y(J7C, D7w);
        f7c.innerHTML = "";
        return J7C
    };
    l7e.clk0x = function (qf2x) {
        if (!qf2x.onbeforelistload) {
            qf2x.onbeforelistload = function (d7e) {
                d7e.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!qf2x.onemptylist) {
            qf2x.onemptylist = function (d7e) {
                d7e.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (qf2x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return qf2x
    };
    l7e.clm0x = function (hw0x) {
        k7d.bd7W(hw0x, function (bN8F) {
            bN8F.privilege = bN8F.pv;
            delete bN8F.pv
        })
    };
    l7e.Fd7W = function (il0x) {
        if (k7d.eJ9A(il0x)) {
            var dB8t = [];
            k7d.bd7W(il0x, function (bjd6X) {
                dB8t.push(bNX4b(bjd6X))
            });
            return dB8t
        } else {
            return bNX4b(il0x)
        }

        function bNX4b(il0x) {
            if (!il0x) return null;
            var dB8t = {
                album: il0x.al,
                alias: il0x.alia || il0x.ala || [],
                artists: il0x.ar || [],
                commentThreadId: "R_SO_4_" + il0x.id,
                copyrightId: il0x.cp || 0,
                duration: il0x.dt || 0,
                id: il0x.id,
                mvid: il0x.mv || 0,
                name: il0x.name || "",
                cd: il0x.cd,
                position: il0x.no || 0,
                ringtone: il0x.rt,
                rtUrl: il0x.rtUrl,
                status: il0x.st || 0,
                pstatus: il0x.pst || 0,
                fee: il0x.fee || 0,
                version: il0x.v || 0,
                eq: il0x.eq,
                songType: il0x.t || 0,
                mst: il0x.mst,
                score: il0x.pop || 0,
                ftype: il0x.ftype,
                rtUrls: il0x.rtUrls,
                transNames: il0x.tns,
                privilege: il0x.privilege,
                lyrics: il0x.lyrics
            };
            return dB8t
        }
    };
    l7e.cEP5U = function () {
        var f7c = a6g.nH2x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f7c);
        h7a.s7l(f7c, "click", function (d7e) {
            h7a.bh7a(d7e);
            a6g.cJ8B(f7c)
        })
    };
    l7e.iA0x = function (cF8x) {
        if (cF8x < 1e5) {
            return cF8x
        } else if (cF8x < 1e8) {
            return Math.floor(cF8x / 1e3) / 10 + "万"
        } else {
            return Math.floor(cF8x / 1e7) / 10 + "亿"
        }
    };
    l7e.uC4G = function (cF8x, cG8y) {
        return "<i>" + (cF8x ? "(" + cF8x + ")" : cG8y) + "</i>"
    };
    l7e.bNV4Z = function (u7n, hW0x) {
        var e7d = {};
        if (!k7d.lw1x(hW0x)) {
            return e7d
        }
        switch (parseInt(u7n)) {
        case 17:
            e7d.title = hW0x.name;
            e7d.author = (hW0x.radio || []).name;
            e7d.picUrl = hW0x.coverUrl;
            e7d.category = hW0x.radio.category;
            break;
        case 19:
            e7d.title = hW0x.name;
            e7d.author = l7e.zw5B(hW0x.artists);
            e7d.authors = l7e.zw5B(hW0x.artists, " / ");
            e7d.picUrl = hW0x.picUrl;
            break;
        case 13:
            e7d.title = hW0x.name;
            e7d.author = (hW0x.creator || []).nickname;
            e7d.picUrl = hW0x.coverImgUrl;
            break;
        case 18:
            e7d.title = hW0x.name;
            e7d.author = l7e.zw5B(hW0x.artists);
            e7d.picUrl = (hW0x.album || []).picUrl;
            break;
        case 20:
            e7d.title = hW0x.name;
            e7d.author = "";
            e7d.picUrl = hW0x.img1v1Url;
            break;
        case 21:
            e7d.title = hW0x.name;
            e7d.author = hW0x.artistName;
            e7d.authors = l7e.zw5B(hW0x.artists, " / ");
            e7d.picUrl = hW0x.newCover || hW0x.cover;
            break;
        case 70:
            e7d.title = hW0x.name;
            e7d.author = (hW0x.dj || []).nickname;
            e7d.picUrl = hW0x.picUrl;
            e7d.category = hW0x.category;
            break;
        default:
            break
        }
        return e7d
    };
    l7e.bNR4V = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l7e.YU3x = function (et9k, nG2x, e7d) {
        var bJ8B, bf7Y, o7h;
        var gO0x = null;
        var uY4c = 0;
        if (!e7d) e7d = {};
        var zY5d = function () {
            uY4c = e7d.leading === false ? 0 : +(new Date);
            gO0x = null;
            o7h = et9k.apply(bJ8B, bf7Y);
            if (!gO0x) bJ8B = bf7Y = null
        };
        return function () {
            var eR9I = +(new Date);
            if (!uY4c && e7d.leading === false) uY4c = eR9I;
            var Gs7l = nG2x - (eR9I - uY4c);
            bJ8B = this;
            bf7Y = arguments;
            if (Gs7l <= 0 || Gs7l > nG2x) {
                if (gO0x) {
                    clearTimeout(gO0x);
                    gO0x = null
                }
                uY4c = eR9I;
                o7h = et9k.apply(bJ8B, bf7Y);
                if (!gO0x) bJ8B = bf7Y = null
            } else if (!gO0x && e7d.trailing !== false) {
                gO0x = setTimeout(zY5d, Gs7l)
            }
            return o7h
        }
    };
    l7e.Lp9g = function (et9k, nG2x, op2x) {
        var gO0x, bf7Y, bJ8B, CR6L, o7h;
        var zY5d = function () {
            var gt9k = new Date - CR6L;
            if (gt9k < nG2x && gt9k >= 0) {
                gO0x = setTimeout(zY5d, nG2x - gt9k)
            } else {
                gO0x = null;
                if (!op2x) {
                    o7h = et9k.apply(bJ8B, bf7Y);
                    if (!gO0x) bJ8B = bf7Y = null
                }
            }
        };
        return function () {
            bJ8B = this;
            bf7Y = arguments;
            CR6L = new Date;
            var Ro1x = op2x && !gO0x;
            if (!gO0x) gO0x = setTimeout(zY5d, nG2x);
            if (Ro1x) {
                o7h = et9k.apply(bJ8B, bf7Y);
                bJ8B = bf7Y = null
            }
            return o7h
        }
    };
    l7e.Rn1x = function (f7c, hn0x) {
        if (f7c) {
            var f7c = f7c.firstElementChild;
            if (f7c) {
                f7c.firstElementChild && (f7c = f7c.firstElementChild);
                f7c.setAttribute("xlink:href", "/style/pc/svg/" + hn0x)
            }
        }
    };
    l7e.bNP4T = function (el9c) {
        if (!el9c || !el9c.length) {
            return
        }
        el9c = /^#(.+?)#$/.exec(el9c)[1];
        el9c = el9c.replace(/\s/g, " ");
        v7o.bn7g("/api/act/detail", {
            type: "json",
            method: "post",
            data: k7d.cE8w({
                actname: el9c
            }),
            onload: function (Q7J) {
                if (!Q7J || Q7J.code != 200 || !Q7J.act) {
                    m7f.Z7S.L7E({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q7J.act.actId)
                }
            }, onerror: function (cb8T) {
                m7f.Z7S.L7E({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l7e.ckP0x = function (el9c) {
        if (!el9c || !el9c.length) {
            return
        }
        var Rl1x = location.host;
        el9c = /^#(.+?)#$/.exec(el9c)[1];
        el9c = el9c.replace(/\s/g, " ");
        v7o.bn7g("/api/act/detail", {
            type: "json",
            method: "post",
            data: k7d.cE8w({
                actname: el9c
            }),
            onload: function (Q7J) {
                if (!Q7J || Q7J.code != 200 || !Q7J.act) {
                    cW8O.jv0x("该话题暂未创建")
                } else {
                    cW8O.Cr6l(Rl1x + "/activity?id=" + Q7J.act.actId)
                }
            }, onerror: function (cb8T) {
                cW8O.jv0x("操作失败，请稍后再试")
            }
        })
    };
    l7e.bkt6n = function (yC5H, rn3x) {
        if (!yC5H || !rn3x) return false;
        if (yC5H == rn3x) return true;
        return l7e.bkt6n(yC5H, rn3x.parentNode)
    };
    a6g.cC8u = function (bI8A, jb0x) {
        if (!bI8A) return null;
        if (!jb0x) return bI8A.firstChild;
        return a6g.H7A(bI8A, jb0x)[0]
    };
    l7e.bNN4R = function (ib0x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ib0x)
    };
    l7e.bNM4Q = function (ib0x, Ri1x) {
        Ri1x = Ri1x || "86";
        if (Ri1x == "86") return /^\d{11}$/.test(ib0x);
        return /^\d+$/.test(ib0x)
    };
    l7e.cES5X = function (tQ3x) {
        if (!tQ3x) {
            return "0b"
        }
        var ckF0x = ["Bytes", "KB", "MB", "GB"];
        var bc7V = Math.floor(Math.log(tQ3x) / Math.log(1024));
        return (tQ3x / Math.pow(1024, Math.floor(bc7V))).toFixed(bc7V == 1 ? 0 : 1) + ckF0x[bc7V]
    };
    l7e.bNI4M = function (dH9y, fo9f, ckB0x) {
        if (!dH9y) return dH9y;
        var dr8j = k7d.fy9p(dH9y);
        if (dr8j <= fo9f) return dH9y;
        var bkP7I = dr8j - dH9y.length,
            bkR7K = dH9y.length - bkP7I;
        var fF9w = Math.ceil(fo9f / 2),
            ckx0x = fo9f,
            bNF4J = 0;
        if (bkP7I < fF9w) fF9w = fo9f - bkP7I;
        if (bkR7K < fo9f) fo9f = bkR7K + Math.ceil((fo9f - bkR7K) / 2);
        while (fF9w <= fo9f) {
            bNF4J = k7d.fy9p(dH9y.substr(0, fF9w));
            var bkW7P = ckx0x - bNF4J;
            if (bkW7P == 0) break;
            if (bkW7P == 1) {
                var ckt0x = k7d.fy9p(dH9y.charAt(fF9w));
                if (ckt0x == 1) {
                    fF9w++;
                    break
                } else {
                    break
                }
            }
            fF9w += Math.floor(bkW7P / 2)
        }
        return dH9y.substr(0, fF9w) + (!!ckB0x ? "" : "...")
    };
    l7e.ckp0x = function (bq7j) {
        bq7j = bq7j || 10;
        var cI8A = "";
        for (var i = 0; i < bq7j; i++) {
            cI8A += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cI8A
    };
    var cke0x = /([A-Za-z0-9 \.\-\(\)\!\?])/,
        ckd0x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        ckc0x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bNA4E = function (cjT0x) {
        var bq7j = k7d.Ad5i(1, 5),
            cjP0x = Math.random() < .5,
            iN0x = "";
        if (cjT0x) {
            if (cjP0x) {
                while (bq7j >= 0) {
                    iN0x += ckc0x[k7d.Ad5i(0, 500)];
                    bq7j--
                }
            } else {
                iN0x = l7e.ckp0x(bq7j)
            }
        } else {
            iN0x = k7d.Oe0x(bq7j)
        }
        return '<div class="soil">' + iN0x + "</div>"
    };
    l7e.bgB5G = function (ep9g) {
        ep9g = k7d.Ay5D(ep9g);
        try {
            var bq7j = ep9g.length,
                r7k = k7d.Ad5i(1, bq7j - 1);
            while (r7k < bq7j) {
                if (ckd0x.test(ep9g.charAt(r7k))) {
                    return k7d.dG9x(ep9g.slice(0, r7k)) + bNA4E(true) + k7d.dG9x(ep9g.slice(r7k))
                } else if (cke0x.test(ep9g.charAt(r7k))) {
                    return k7d.dG9x(ep9g.slice(0, r7k)) + bNA4E() + k7d.dG9x(ep9g.slice(r7k))
                } else {
                    r7k++
                }
            }
            return k7d.dG9x(ep9g)
        } catch (e) {
            return k7d.dG9x(ep9g)
        }
    };
    l7e.ZK3x = function (lo1x, mO1x) {
        return "//nos.netease.com/" + lo1x + "/" + mO1x
    };
    l7e.cjM0x = function (fE9v) {
        var dN9E = /(.+)(\.[^\.]+$)/.exec(fE9v);
        return dN9E ? {
            filename: dN9E[1],
            suffix: dN9E[2]
        } : {
            filename: fE9v || "",
            suffix: ""
        }
    };
    l7e.bNu4y = function (br7k, cjH0x) {
        var dB8t = [];
        k7d.bd7W(br7k, function (id0x) {
            dB8t.push(cjH0x(id0x))
        });
        return dB8t
    };
    var cjD0x = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l7e.bNs4w = function (yF5K) {
        var j7c = NEJ.X({}, yF5K);
        k7d.eC9t(yF5K, function (p7i, J7C) {
            var bNr4v = cjD0x[J7C];
            if (bNr4v) {
                j7c[bNr4v] = p7i
            }
        });
        var QV1x = yF5K.creator || [];
        if (!k7d.eJ9A(QV1x)) {
            QV1x = [QV1x]
        }
        if (QV1x) {
            j7c.artists = [];
            k7d.bd7W(QV1x, function (p7i) {
                j7c.artists.push({
                    name: p7i.nickname || p7i.userName,
                    id: p7i.userId
                })
            })
        }
        if (!!yF5K.aliaName) {
            j7c.alias = [yF5K.aliaName]
        }
        if (!!yF5K.transName) {
            j7c.transNames = [yF5K.transName]
        }
        return j7c
    };
    l7e.cjx0x = function (Y7R) {
        return (Y7R || "").replace(/^https?:/, "")
    };
    l7e.EH7A = function (cI8A) {
        if (!k7d.fG9x(cI8A)) return cI8A;
        var dB8t = null;
        try {
            dB8t = JSON.parse(cI8A)
        } catch (_e) {}
        return dB8t
    };
    var cjw0x = '<span class="s-fc7 f-tdn">${value}</span>';
    l7e.cjv0x = function (cG8y, sG3x, e7d) {
        e7d = e7d || {};
        if (!sG3x) {
            return k7d.dG9x(cG8y)
        }
        cG8y = k7d.Ay5D(cG8y);
        var pS2x = [],
            br7k = null,
            Ny0x = new RegExp(l7e.bOf4j(sG3x), "gi"),
            or2x = e7d.tpl || cjw0x;
        while (br7k = Ny0x.exec(cG8y)) {
            var dN9E = {
                html: "",
                before: br7k.index - 1,
                after: br7k.index + br7k[0].length
            };
            var Ea6U = a6g.es9j(or2x);
            dN9E.html = a6g.bZ8R(Ea6U, {
                value: k7d.dG9x(br7k[0])
            });
            pS2x.push(dN9E)
        }
        var bgd5i = pS2x.length,
            kg1x = {
                before: cG8y.length - 1,
                after: 0
            },
            dB8t = "";
        for (var i = 0; i <= bgd5i; i++) {
            var hz0x, fR9I;
            hz0x = (pS2x[i - 1] || kg1x).after;
            fR9I = (pS2x[i] || kg1x).before;
            if (fR9I >= hz0x && hz0x >= 0 && fR9I <= cG8y.length - 1) {
                dB8t += k7d.dG9x(cG8y.substring(hz0x, fR9I + 1))
            }
            if (pS2x[i]) {
                dB8t += pS2x[i].html
            }
        }
        return dB8t
    }
})();
(function () {
    var k7d = NEJ.P("nej.u");

    function cjt0x() {
        var Cy6s = function (jr0x) {
            if (jr0x < -128) {
                return Cy6s(128 - (-128 - jr0x))
            } else if (jr0x >= -128 && jr0x <= 127) {
                return jr0x
            } else if (jr0x > 127) {
                return Cy6s(-129 + jr0x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cjr0x = function (jr0x, bi7b) {
            return Cy6s(jr0x + bi7b)
        };
        var cjl0x = function (ZP4T, bmg7Z) {
            if (ZP4T == null) {
                return null
            }
            if (bmg7Z == null) {
                return ZP4T
            }
            var qK3x = [];
            var cjh0x = bmg7Z.length;
            for (var i = 0, bq7j = ZP4T.length; i < bq7j; i++) {
                qK3x[i] = cjr0x(ZP4T[i], bmg7Z[i % cjh0x])
            }
            return qK3x
        };
        var cjd0x = function (ZT4X) {
            if (ZT4X == null) {
                return ZT4X
            }
            var qK3x = [];
            var cjc0x = ZT4X.length;
            for (var i = 0, bq7j = cjc0x; i < bq7j; i++) {
                qK3x[i] = Cy6s(0 - ZT4X[i])
            }
            return qK3x
        };
        var cjb0x = function (bmE7x, QM1x) {
            bmE7x = Cy6s(bmE7x);
            QM1x = Cy6s(QM1x);
            return Cy6s(bmE7x ^ QM1x)
        };
        var bNl4p = function (QL1x, bmT7M) {
            if (QL1x == null || bmT7M == null || QL1x.length != bmT7M.length) {
                return QL1x
            }
            var qK3x = [];
            var ciX0x = QL1x.length;
            for (var i = 0, bq7j = ciX0x; i < bq7j; i++) {
                qK3x[i] = cjb0x(QL1x[i], bmT7M[i])
            }
            return qK3x
        };
        var bNk4o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var ciV0x = function (dv8n) {
            var Lz9q = [];
            Lz9q.push(bNk4o[dv8n >>> 4 & 15]);
            Lz9q.push(bNk4o[dv8n & 15]);
            return Lz9q.join("")
        };
        var bNh4l = function (tQ3x) {
            var bq7j = tQ3x.length;
            if (tQ3x == null || bq7j < 0) {
                return new String("")
            }
            var Lz9q = [];
            for (var i = 0; i < bq7j; i++) {
                Lz9q.push(ciV0x(tQ3x[i]))
            }
            return Lz9q.join("")
        };
        var bNg4k = function (ZW4a) {
            if (ZW4a == null || ZW4a.length == 0) {
                return ZW4a
            }
            var bng7Z = new String(ZW4a);
            var qK3x = [];
            var bq7j = bng7Z.length / 2;
            var bi7b = 0;
            for (var i = 0; i < bq7j; i++) {
                var oA2x = parseInt(bng7Z.charAt(bi7b++), 16) << 4;
                var oD2x = parseInt(bng7Z.charAt(bi7b++), 16);
                qK3x[i] = Cy6s(oA2x + oD2x)
            }
            return qK3x
        };
        var bNf4j = function (cI8A) {
            if (cI8A == null || cI8A == undefined) {
                return cI8A
            }
            var QE1x = encodeURIComponent(cI8A);
            var tQ3x = [];
            var bNe4i = QE1x.length;
            for (var i = 0; i < bNe4i; i++) {
                if (QE1x.charAt(i) == "%") {
                    if (i + 2 < bNe4i) {
                        tQ3x.push(bNg4k(QE1x.charAt(++i) + "" + QE1x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    tQ3x.push(QE1x.charCodeAt(i))
                }
            }
            return tQ3x
        };
        var ciJ0x = function (xa4e) {
            var bc7V = 0;
            bc7V += (xa4e[0] & 255) << 24;
            bc7V += (xa4e[1] & 255) << 16;
            bc7V += (xa4e[2] & 255) << 8;
            bc7V += xa4e[3] & 255;
            return bc7V
        };
        var cEW5b = function (bc7V) {
            var xa4e = [];
            xa4e[0] = bc7V >>> 24 & 255;
            xa4e[1] = bc7V >>> 16 & 255;
            xa4e[2] = bc7V >>> 8 & 255;
            xa4e[3] = bc7V & 255;
            return xa4e
        };
        var ciH0x = function (cS8K, bnx7q, bq7j) {
            var dB8t = [];
            if (cS8K == null || cS8K.length == 0) {
                return dB8t
            }
            if (cS8K.length < bq7j) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq7j; i++) {
                dB8t[i] = cS8K[bnx7q + i]
            }
            return dB8t
        };
        var bny7r = function (cS8K, bnx7q, rs3x, ciG0x, bq7j) {
            if (cS8K == null || cS8K.length == 0) {
                return rs3x
            }
            if (rs3x == null) {
                throw new Error("1004")
            }
            if (cS8K.length < bq7j) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq7j; i++) {
                rs3x[ciG0x + i] = cS8K[bnx7q + i]
            }
            return rs3x
        };
        var ciF0x = function (bq7j) {
            var br7k = [];
            for (var i = 0; i < bq7j; i++) {
                br7k[i] = 0
            }
            return br7k
        };
        var ciE0x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var LE9v = 64;
        var bal4p = 64;
        var bNd4h = 4;
        var cit0x = function (rf3x) {
            var bMZ4d = [];
            if (rf3x == null || rf3x == undefined || rf3x.length == 0) {
                return ciF0x(bal4p)
            }
            if (rf3x.length >= bal4p) {
                return ciH0x(rf3x, 0, bal4p)
            } else {
                for (var i = 0; i < bal4p; i++) {
                    bMZ4d[i] = rf3x[i % rf3x.length]
                }
            }
            return bMZ4d
        };
        var ciq0x = function (baA4E) {
            if (baA4E == null || baA4E.length % LE9v != 0) {
                throw new Error("1005")
            }
            var bod8V = [];
            var bi7b = 0;
            var cip0x = baA4E.length / LE9v;
            for (var i = 0; i < cip0x; i++) {
                bod8V[i] = [];
                for (var j = 0; j < LE9v; j++) {
                    bod8V[i][j] = baA4E[bi7b++]
                }
            }
            return bod8V
        };
        var cio0x = function (bMX4b) {
            var oA2x = bMX4b >>> 4 & 15;
            var oD2x = bMX4b & 15;
            var bi7b = oA2x * 16 + oD2x;
            return ciE0x[bi7b]
        };
        var bMW4a = function (bou8m) {
            if (bou8m == null) {
                return null
            }
            var bMV4Z = [];
            for (var i = 0, bq7j = bou8m.length; i < bq7j; i++) {
                bMV4Z[i] = cio0x(bou8m[i])
            }
            return bMV4Z
        };
        var bMT4X = function (LL9C, rf3x) {
            if (LL9C == null) {
                return null
            }
            if (LL9C.length == 0) {
                return []
            }
            if (LL9C.length % LE9v != 0) {
                throw new Error("1005")
            }
            rf3x = cit0x(rf3x);
            var boE8w = rf3x;
            var boF8x = ciq0x(LL9C);
            var PZ1x = [];
            var cii0x = boF8x.length;
            for (var i = 0; i < cii0x; i++) {
                var boJ8B = bMW4a(boF8x[i]);
                boJ8B = bMW4a(boJ8B);
                var boK8C = bNl4p(boJ8B, boE8w);
                var cih0x = cjl0x(boK8C, cjd0x(boE8w));
                boK8C = bNl4p(cih0x, rf3x);
                bny7r(boK8C, 0, PZ1x, i * LE9v, LE9v);
                boE8w = boF8x[i]
            }
            var bMR4V = [];
            bny7r(PZ1x, PZ1x.length - bNd4h, bMR4V, 0, bNd4h);
            var bq7j = ciJ0x(bMR4V);
            if (bq7j > PZ1x.length) {
                throw new Error("1006")
            }
            var qK3x = [];
            bny7r(PZ1x, 0, qK3x, 0, bq7j);
            return qK3x
        };
        var chU0x = function (baV4Z, J7C) {
            if (baV4Z == null) {
                return null
            }
            var bMO4S = new String(baV4Z);
            if (bMO4S.length == 0) {
                return []
            }
            var LL9C = bNg4k(bMO4S);
            if (J7C == null || J7C == undefined) {
                throw new Error("1007")
            }
            var rf3x = bNf4j(J7C);
            return bMT4X(LL9C, rf3x)
        };
        this.chS0x = function (baV4Z, J7C) {
            var bpn8f = chU0x(baV4Z, J7C);
            var Es7l = new String(bNh4l(bpn8f));
            var zL5Q = [];
            var bpr8j = Es7l.length / 2;
            var bi7b = 0;
            for (var i = 0; i < bpr8j; i++) {
                zL5Q.push("%");
                zL5Q.push(Es7l.charAt(bi7b++));
                zL5Q.push(Es7l.charAt(bi7b++))
            }
            return zL5Q.join("")
        };
        k7d.cln0x = function (bpv8n, J7C) {
            return k7d.clikes_id(k7d.cvb3x(bpv8n), J7C)
        };
        k7d.clikes_id = function (bpv8n, J7C) {
            var bpn8f = bMT4X(bpv8n, bNf4j(J7C));
            var Es7l = new String(bNh4l(bpn8f));
            var zL5Q = [];
            var bpr8j = Es7l.length / 2;
            var bi7b = 0;
            for (var i = 0; i < bpr8j; i++) {
                zL5Q.push("%");
                zL5Q.push(Es7l.charAt(bi7b++));
                zL5Q.push(Es7l.charAt(bi7b++))
            }
            return zL5Q.join("")
        }
    }
    window.settmusic = (new cjt0x).chS0x
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        J7C = "Search-tracks_",
        b7g;
    q7j.fe9V({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function (Q7J) {
                return Q7J
            }, onerror: function (Q7J, e7d) {
                if (Q7J.code == 407) {
                    e7d.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function (e7d, bg7Z) {
                window.log && window.log("searchkeywordclient", {
                    type: this.chQ0x(parseInt(e7d.data.type)) || "suggest",
                    keyword: e7d.data.s,
                    offset: e7d.offset
                })
            }, format: function (Q7J, e7d) {
                if (Q7J.abroad) {
                    try {
                        Q7J.result = JSON.parse(decodeURIComponent(settmusic(Q7J.result, q7j.sk)))
                    } catch (e) {}
                }
                Q7J.result = Q7J.result || {};
                var i7b, cy8q, hQ0x = [],
                    pw2x = e7d.data.s || "",
                    gc9T = e7d.data.limit,
                    u7n = parseInt(e7d.data.type) || 1,
                    o7h = Q7J.result;
                switch (u7n) {
                case 1:
                    i7b = this.bMN4R(o7h.songs, e7d.data.hlpretag, e7d.data.hlposttag);
                    cy8q = o7h.songCount;
                    break;
                case 10:
                    i7b = o7h.albums;
                    cy8q = o7h.albumCount;
                    break;
                case 100:
                    i7b = o7h.artists;
                    cy8q = o7h.artistCount;
                    break;
                case 1e3:
                    i7b = o7h.playlists;
                    cy8q = o7h.playlistCount;
                    break;
                case 1002:
                    i7b = o7h.userprofiles;
                    cy8q = o7h.userprofileCount;
                    break;
                case 1004:
                    i7b = o7h.mvs;
                    cy8q = o7h.mvCount;
                    break;
                case 1014:
                    i7b = l7e.bNu4y(o7h.videos, l7e.bNs4w);
                    cy8q = o7h.videoCount;
                    break;
                case 1006:
                    i7b = this.bMN4R(o7h.songs, e7d.data.hlpretag, e7d.data.hlposttag);
                    cy8q = o7h.songCount;
                    break;
                case 1009:
                    var qT3x = o7h.djRadios;
                    if (!!qT3x) {
                        k7d.bd7W(qT3x, function (D7w, r7k, chO0x) {
                            D7w.xid = D7w.id;
                            D7w.id = D7w.id + "_rad"
                        });
                        if (qT3x.length) {
                            this.uu4y("radio_search-" + e7d.data.s, qT3x)
                        }
                    }
                    cy8q = Math.min(o7h.djprogramCount, 500);
                    i7b = o7h.djprograms || [];
                    if (e7d.data.isPub) {
                        k7d.no2x(qT3x, function (D7w, r7k, chO0x) {
                            D7w.stype = 1;
                            i7b.unshift(D7w)
                        });
                        cy8q = Math.min(i7b.length, 500)
                    }
                    break
                }
                this.z7s("onsearchload", Q7J);
                if (i7b && i7b.length) {
                    for (var i = 0; i < gc9T; i++) {
                        if (i < i7b.length) {
                            hQ0x.push(i7b[i])
                        } else {
                            hQ0x.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cy8q || 0, pw2x.length < 3 ? 500 : 5e3),
                    list: hQ0x
                }
            }, onerror: function (Q7J, e7d) {
                e7d.onload(e7d, []);
                if (k7d.gG0x(e7d.onerror)) {
                    e7d.onerror(Q7J)
                }
            }
        }
    });
    q7j.EC7v = NEJ.C();
    b7g = q7j.EC7v.O7H(q7j.hG0x);
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.chL0x = function (J7C, e7d) {
        if (!J7C) return;
        if (!!this.bMK4O) v7o.ks1x(this.bMK4O);
        this.bMK4O = this.co8g("search-suggest", NEJ.X({
            data: {
                s: J7C,
                limit: 8
            }
        }, e7d))
    };
    b7g.chJ0x = function (J7C, e7d) {
        if (!J7C) return;
        this.co8g("search-multimatch", NEJ.X({
            data: {
                s: J7C
            }
        }, e7d))
    };
    b7g.bMN4R = function () {
        var chI0x = function (hu0x, bMI4M, bMH4L) {
            var chE0x = hu0x.match(new RegExp(bMI4M + "(.+?)" + bMH4L, "gi")),
                cF8x = 0;
            k7d.bd7W(chE0x, function (p7i) {
                cF8x += p7i.replace(new RegExp(bMI4M, "g"), "").replace(new RegExp(bMH4L, "g"), "").length
            });
            return cF8x
        };
        return function (jt0x, chD0x, chC0x) {
            var bMG4K = [];
            k7d.bd7W(jt0x, function (bj7c, bc7V) {
                bj7c = l7e.Fd7W(bj7c);
                var baY4c = bj7c.lyrics || [],
                    dr8j = baY4c.length,
                    jT1x = 0,
                    cy8q = 4,
                    baZ4d = {
                        l: 0,
                        v: 0
                    },
                    bqN9E;
                if (dr8j > 4) {
                    k7d.bd7W(baY4c, function (hu0x, r7k) {
                        var bMF4J = chI0x(hu0x, chD0x, chC0x);
                        if (bMF4J > baZ4d.v) {
                            baZ4d.v = bMF4J;
                            baZ4d.l = r7k
                        }
                    });
                    jT1x = baZ4d.l;
                    jT1x = Math.max(jT1x, 0);
                    bqN9E = dr8j - jT1x - 4;
                    if (bqN9E < 0) jT1x += bqN9E;
                    bj7c.lrcAbstractEnd = jT1x + cy8q - 1
                } else {
                    bj7c.lrcAbstractEnd = dr8j - 1
                }
                bj7c.lrcAbstractStart = jT1x;
                bj7c.indexId = (baY4c && baY4c.length ? "L" : "NL") + bj7c.id;
                bMG4K.push(bj7c)
            });
            return bMG4K
        }
    }();
    b7g.chQ0x = function (u7n) {
        switch (u7n) {
        case 1:
            return "song";
            break;
        case 100:
            return "artist";
            break;
        case 10:
            return "album";
            break;
        case 1004:
            return "mv";
            break;
        case 1014:
            return "video";
            break;
        case 1006:
            return "lyric";
            break;
        case 1e3:
            return "list";
            break;
        case 1009:
            return "djradio";
            break;
        case 1002:
            return "user";
            break;
        default:
            return "suggest";
            break
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        E7x = c7f("nm.m"),
        m7f = c7f("nm.l"),
        dw8o = c7f("nm.i"),
        M7F = c7f("nm.m.sch"),
        b7g, K7D;
    var bbe4i = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M7F.PC0x = NEJ.C();
    b7g = M7F.PC0x.O7H(I7B.cH8z);
    b7g.cx8p = function (f7c) {
        this.cD8v();
        this.bW8O(f7c);
        this.S7L = q7j.EC7v.gr9i()
    };
    b7g.bW8O = function (f7c) {
        this.n7g = f7c;
        var i7b = a6g.H7A(f7c, "j-flag");
        this.eS9J = i7b[0];
        this.brj9a = i7b[1];
        this.cr8j = i7b[2];
        this.mW1x = i7b[3];
        h7a.s7l(this.eS9J, "input", this.gk9b.g7b(this));
        h7a.s7l(this.eS9J, "keyup", this.gk9b.g7b(this));
        h7a.s7l(this.eS9J, "focus", this.gN0x.g7b(this));
        h7a.s7l(this.brj9a, "click", this.gN0x.g7b(this));
        h7a.s7l(this.eS9J, "blur", this.brA9r.g7b(this));
        h7a.s7l(this.cr8j, "click", this.bbf4j.g7b(this));
        h7a.s7l(this.n7g, "keydown", this.brE9v.g7b(this));
        h7a.s7l(this.n7g, "keypress", this.bbh4l.g7b(this));
        h7a.s7l(this.mW1x, "mouseover", this.Py0x.g7b(this));
        h7a.s7l(this.mW1x, "mouseout", this.Py0x.g7b(this));
        if (this.eS9J.value) {
            this.eS9J.value = ""
        }
        if (this.eS9J.style.opacity != null) {
            this.eS9J.style.opacity = 1
        }
    };
    b7g.gk9b = function (d7e) {
        if (d7e.type == "keyup" && d7e.keyCode == 8 || d7e.keyCode == 46) {
            this.Fi7b()
        } else if (d7e.type == "input" || d7e.type == "propertychange") {
            setTimeout(this.Fi7b.g7b(this), 0)
        }
    };
    b7g.gN0x = function () {
        this.yk5p(this.brj9a, !1);
        a6g.y7r(this.n7g, "m-srch-fcs");
        this.eS9J.focus();
        this.Fi7b();
        a6g.y7r((a6g.H7A("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b7g.brA9r = function () {
        if (!this.eS9J.value) {
            this.yk5p(this.brj9a, !0)
        }
        var Fk7d = a6g.H7A(this.mW1x, "slt");
        if (this.bbk4o(this.mW1x) && Fk7d.length > 0 && a6g.t7m(Fk7d[0], "type")) {
            var hn0x = Fk7d[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hn0x)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eS9J.value
                })
            }
            this.bsf9W(Fk7d[0].href)
        }
        this.yk5p(this.mW1x, !1);
        a6g.x7q(this.n7g, "m-srch-fcs")
    };
    b7g.yk5p = function (f7c, ml1x) {
        a6g.ba7T(f7c, "display", !ml1x ? "none" : "")
    };
    b7g.bbk4o = function (f7c) {
        return a6g.df8X(f7c, "display") != "none"
    };
    b7g.Fi7b = function () {
        var chz0x = function (ib0x) {
            ib0x = k7d.Ay5D(ib0x);
            var eE9v = this.n7g.clientWidth > 250 ? 41 : 17;
            if (l7e.Sh1x(ib0x) > eE9v) {
                ib0x = l7e.CZ6T(ib0x, eE9v) + "..."
            }
            return k7d.dG9x(ib0x)
        };
        var bbm4q = function (o7h) {
            return o7h.songs && o7h.songs.length || o7h.albums && o7h.albums.length || o7h.artists && o7h.artists.length || o7h.playlists && o7h.playlists.length
        };
        var ss3x = function (sG3x, d7e) {
            if (!l7e.bOj4n(this.eS9J) || l7e.jL0x(this.eS9J.value)) {
                this.yk5p(this.mW1x, !1);
                return
            }
            d7e.keyword = k7d.dG9x(sG3x);
            var dT9K = a6g.bZ8R("m-search-suggest", d7e, {
                    mark: l7e.cjv0x.ew9n(this, sG3x),
                    cutStr: chz0x.g7b(this)
                }),
                tb3x = d7e.result.order;
            this.mW1x.innerHTML = dT9K;
            this.yk5p(this.mW1x, bbm4q(d7e.result) ? !0 : !1);
            if (!!tb3x && !!tb3x.length && bbe4i[tb3x[0]]) {
                this.bsl9c = {
                    keyword: sG3x,
                    type: bbe4i[tb3x[0]]
                }
            }
        };
        var chy0x = function () {
            this.yk5p(this.mW1x, !1);
            return
        };
        return function () {
            var D7w = this.eS9J.value;
            if (l7e.jL0x(D7w)) {
                this.yk5p(this.mW1x, !1);
                return
            }
            this.S7L.chL0x(D7w, {
                onload: ss3x.g7b(this, D7w),
                onForbidden: chy0x.g7b(this)
            })
        }
    }();
    b7g.bbh4l = function (d7e) {
        if (d7e.keyCode != 13) return;
        var Fk7d = a6g.H7A(this.mW1x, "slt");
        if (this.bbk4o(this.mW1x) && Fk7d.length > 0) {
            this.bsf9W(Fk7d[0].href);
            this.yk5p(this.mW1x, !1);
            return
        }
        this.bbf4j();
        this.yk5p(this.mW1x, !1)
    };
    b7g.brE9v = function (d7e) {
        if (!this.bbk4o(this.mW1x)) return;
        var i7b = a6g.H7A(this.mW1x, "xtag"),
            dr8j = i7b.length,
            r7k = k7d.di8a(i7b, function (p7i) {
                return a6g.bE8w(p7i, "slt")
            });
        switch (d7e.keyCode) {
        case 38:
            if (r7k >= 0) a6g.x7q(i7b[r7k], "slt");
            a6g.y7r(i7b[r7k <= 0 ? dr8j - 1 : r7k - 1], "slt");
            break;
        case 40:
            if (r7k >= 0) a6g.x7q(i7b[r7k], "slt");
            a6g.y7r(i7b[(r7k + 1) % dr8j], "slt");
            break
        }
    };
    b7g.Py0x = function (d7e) {
        if (!this.bbk4o(this.mW1x)) return;
        var Pv0x, F7y = h7a.W7P(d7e),
            i7b = a6g.H7A(this.mW1x, "xtag");
        if (F7y.tagName.toLowerCase() == "a") Pv0x = F7y;
        else if (F7y.parentNode.tagName.toLowerCase() == "a") Pv0x = F7y.parentNode;
        if (!Pv0x) return;
        k7d.bd7W(i7b, function (p7i) {
            a6g.x7q(p7i, "slt");
            a6g.t7m(p7i, "type", "")
        });
        if (d7e.type == "mouseout") return;
        a6g.y7r(Pv0x, "slt");
        a6g.t7m(Pv0x, "type", "mouse")
    };
    b7g.bbf4j = function () {
        var dO9F = location.hash,
            r7k = dO9F.indexOf("?"),
            bv8n = k7d.hv0x(dO9F.substring(r7k + 1));
        bv8n.s = this.eS9J.value;
        if (l7e.jL0x(bv8n.s)) return;
        if (!bv8n.type && this.bsl9c && this.bsl9c.keyword == bv8n.s) {
            bv8n.type = this.bsl9c.type
        }
        this.bsf9W("/search/#/?" + k7d.cE8w(bv8n));
        this.eS9J.blur()
    };
    b7g.bsf9W = function (Y7R) {
        if (location.dispatch2) {
            location.dispatch2(Y7R)
        } else {
            location.href = Y7R
        }
    };
    M7F.PC0x.chx0x = function () {
        var i7b = a6g.H7A(document.body, "j-suggest");
        k7d.bd7W(i7b, function (p7i) {
            new M7F.PC0x(p7i)
        })
    };
    M7F.PC0x.chx0x()
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        b7g;
    q7j.fe9V({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function (Q7J) {
                return {
                    total: Q7J.size || 0,
                    list: Q7J.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function (Q7J) {
                return {
                    total: Q7J.size || 0,
                    list: Q7J.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function (Q7J) {
                return Q7J.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function (Q7J, e7d) {
                if (e7d.offset == 0) {
                    var pG2x = Q7J.data[0];
                    this.z7s("onfirstload", pG2x);
                    Q7J.data.splice(0, 1);
                    return Q7J.data
                } else {
                    return Q7J.data
                }
            }
        }
    });
    q7j.Fx7q = NEJ.C();
    b7g = q7j.Fx7q.O7H(q7j.hG0x);
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.bsD9u = function () {
        var tv3x = "LOCAL_FLAG";
        return function (u7n, chw0x) {
            var j7c = this.FE7x(tv3x, {});
            if (j7c[u7n]) {
                return true
            } else {
                if (!chw0x) {
                    j7c[u7n] = true;
                    this.wr4v(tv3x, j7c)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        bsG9x;
    if (!!N7G.nW2x) return;
    N7G.nW2x = NEJ.C();
    bsG9x = N7G.nW2x.O7H(N7G.cH8z);
    bsG9x.bl7e = function () {
        var chv0x = function (d7e) {
            d7e.matched = d7e.source == d7e.target
        };
        return function (e7d) {
            e7d.oncheck = e7d.oncheck || chv0x;
            this.bm7f(e7d);
            this.bU8M = e7d.list;
            this.ji0x = e7d.dataset || "id";
            this.kR1x = e7d.selected || "js-selected"
        }
    }();
    bsG9x.nF2x = function (D7w) {
        var F7y, d7e = {
            target: D7w
        };
        k7d.bd7W(this.bU8M, function (f7c) {
            delete d7e.matched;
            d7e.source = a6g.t7m(f7c, this.ji0x);
            this.z7s("oncheck", d7e);
            if (!d7e.matched) {
                a6g.x7q(f7c, this.kR1x)
            } else {
                F7y = f7c;
                a6g.y7r(f7c, this.kR1x)
            }
        }, this);
        return F7y
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        N7G = c7f("nej.ut"),
        pN2x;
    if (!!N7G.de8W) return;
    N7G.de8W = NEJ.C();
    pN2x = N7G.de8W.O7H(N7G.cH8z);
    pN2x.cx8p = function () {
        this.iV0x = {};
        this.cD8v();
        this.bL8D()
    };
    pN2x.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.btc9T = e7d.umi || "";
        this.BZ6T = e7d.dispatcher;
        this.LU9L = e7d.composite || bb7U;
        this.bjI6C({
            onshow: this.eZ9Q.g7b(this),
            onhide: this.ke1x.g7b(this),
            onrefresh: this.eD9u.g7b(this),
            onmessage: this.qG2x.g7b(this),
            onbeforehide: this.chs9j.g7b(this)
        })
    };
    pN2x.bD8v = function () {
        delete this.btc9T;
        this.iV0x = {};
        this.bG8y()
    };
    pN2x.um4q = function (d7e) {
        if (!!d7e) d7e.stopped = !0
    };
    pN2x.bL8D = bs8k;
    pN2x.eZ9Q = bs8k;
    pN2x.ke1x = bs8k;
    pN2x.eD9u = bs8k;
    pN2x.qG2x = bs8k;
    pN2x.chs9j = bs8k;
    pN2x.nB2x = function (nb1x, bH8z, fl9c) {
        this.BZ6T.btp9g({
            to: nb1x,
            mode: fl9c || 0,
            data: bH8z,
            from: this.btc9T
        })
    };
    pN2x.cFa5f = function (u7n, j7c) {
        this.BZ6T.BX6R(u7n, {
            from: this.btc9T,
            data: j7c
        })
    };
    pN2x.cFc5h = function () {
        this.BZ6T.mq1x.apply(this.BZ6T, arguments)
    };
    pN2x.cho9f = function () {
        return this.iV0x
    };
    a6g.bbw4A = function () {
        if (!!window.dispatcher) {
            dispatcher.bMC4G.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bs8k = NEJ.F,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        zt5y;
    if (!!N7G.dx8p) return;
    N7G.dx8p = NEJ.C();
    zt5y = N7G.dx8p.O7H(N7G.de8W);
    zt5y.chk9b = function (e7d) {
        var bI8A;
        if (!bI8A) {
            var j7c = e7d.input || bb7U;
            bI8A = a6g.B7u(j7c.parent)
        }
        if (!bI8A) {
            var j7c = e7d.data || bb7U;
            bI8A = a6g.B7u(j7c.parent)
        }
        if (!bI8A) {
            bI8A = a6g.B7u(e7d.parent)
        }
        return bI8A
    };
    zt5y.eZ9Q = function (e7d) {
        var bI8A = this.chk9b(e7d);
        if (!!bI8A && !!this.n7g) bI8A.appendChild(this.n7g);
        this.gC0x(e7d);
        this.bMA4E("onshow", e7d);
        this.eD9u(e7d)
    };
    zt5y.eD9u = function (e7d) {
        this.gq9h(e7d);
        this.bMA4E("onrefresh", e7d)
    };
    zt5y.ke1x = function () {
        this.kZ1x();
        this.chi9Z();
        a6g.mY1x(this.n7g)
    };
    zt5y.bMz4D = function () {
        var gK0x = /^onshow|onrefresh|delay$/;
        return function (cj8b) {
            return gK0x.test(cj8b)
        }
    }();
    zt5y.bMy4C = bs8k;
    zt5y.bMA4E = function () {
        var bMx4B = function (bv8n, e7d, cj8b, pk2x) {
            if (this.bMz4D(pk2x)) return;
            if (!!bv8n) cj8b += (cj8b.indexOf("?") > 1 ? "&" : "?") + bv8n;
            var dm8e = this.bMy4C(pk2x, e7d) || {};
            dm8e.location = e7d;
            dm8e.parent = this.iV0x[pk2x];
            this.BZ6T.iz0x(cj8b, {
                input: dm8e
            })
        };
        return function (u7n, e7d) {
            if (!e7d.nodelay) {
                if (!!this.LU9L.delay) return;
                var bMw4A = this.LU9L[u7n] || bb7U;
                if (bMw4A.delay) return
            }
            var bv8n = k7d.cE8w(e7d.param) || "";
            if (u7n == "onrefresh") {
                k7d.eC9t(this.LU9L, bMx4B.g7b(this, bv8n, e7d))
            }
            k7d.eC9t(bMw4A, bMx4B.g7b(this, bv8n, e7d))
        }
    }();
    zt5y.chi9Z = function () {
        var Bm6g = function (cj8b, pk2x) {
            if (!this.bMz4D(pk2x)) this.BZ6T.bu8m(cj8b)
        };
        return function () {
            k7d.eC9t(this.LU9L, Bm6g, this);
            k7d.eC9t(this.LU9L.onshow, Bm6g, this);
            k7d.eC9t(this.LU9L.onrefresh, Bm6g, this)
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        E7x = c7f("nm.m"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        b7g, K7D;
    E7x.Pe0x = NEJ.C();
    b7g = E7x.Pe0x.O7H(I7B.cH8z);
    b7g.cx8p = function () {
        this.cD8v();
        this.n7g = a6g.B7u("g-topbar");
        var i7b = a6g.H7A(this.n7g, "j-tflag");
        this.bur0x = i7b[0];
        this.Gv7o = i7b[1];
        this.bMt4x = i7b[2];
        this.buB0x = i7b[3];
        this.cgZ9Q = I7B.nW2x.A7t({
            list: this.bur0x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.buG0x = I7B.nW2x.A7t({
            list: this.buB0x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX8P([
            [this.n7g, "click", this.Pc0x.g7b(this)],
            [this.Gv7o, "click", this.cM8E.g7b(this)],
            [this.Gv7o, "mouseout", this.bMs4w.g7b(this, 0)],
            [this.Gv7o, "mouseover", this.bMs4w.g7b(this, 1)]
        ]);
        window.scrollTopbar = this.cgX9O.g7b(this);
        window.matchNav = this.bMr4v.g7b(this);
        window.polling = this.uy4C.g7b(this);
        this.buZ0x = q7j.Fx7q.A7t();
        this.cgU9L();
        this.LY9P();
        var bv8n = k7d.hv0x(location.href.split("?")[1]) || {};
        if (bv8n.market) {
            a6g.B7u("topbar-download-link").href = "/download?market=" + bv8n.market
        }
        var bvd0x = a6g.H7A(this.n7g, "j-showoff");
        if (bvd0x && !this.buZ0x.bsD9u("newMvSearch")) {
            a6g.x7q(bvd0x[0], "f-hide");
            window.setTimeout(function () {
                a6g.y7r(bvd0x[0], "f-hide")
            }, 5e3)
        }
    };
    b7g.uy4C = function (d7e) {
        var dO9F = l7e.KN8F();
        if (!/^\/msg/.test(dO9F)) {
            var ww4A = 0;
            ww4A += d7e.comment;
            ww4A += d7e.forward;
            ww4A += d7e.msg;
            ww4A += d7e.notice;
            if (ww4A > 0) {
                ww4A = ww4A > 99 ? "99+" : ww4A;
                this.OT0x.innerText = ww4A;
                this.Md9U.innerText = ww4A;
                a6g.x7q(this.OT0x, "f-hide");
                a6g.x7q(this.Md9U, "f-hide");
                this.bbY4c = true
            } else {
                a6g.y7r(this.OT0x, "f-hide");
                a6g.y7r(this.Md9U, "f-hide");
                this.bbY4c = false
            }
            var eT9K = "/at";
            if (d7e.notice) eT9K = "/notify";
            if (d7e.comment) eT9K = "/comment";
            if (d7e.msg > 0) eT9K = "/private";
            if (d7e.forward > 0) eT9K = "/at";
            this.Md9U.parentNode.href = "/msg/#" + eT9K
        } else {
            this.Md9U.parentNode.href = "javascript:;";
            a6g.y7r(this.OT0x, "f-hide");
            a6g.y7r(this.Md9U, "f-hide");
            this.bbY4c = false
        }
        var i7b = a6g.H7A(this.bur0x, "j-t");
        if (!/^\/friend/.test(dO9F)) {
            if (i7b && i7b.length) {
                a6g.ba7T(i7b[0], "display", d7e.event > 0 ? "" : "none")
            }
        } else {
            a6g.ba7T(i7b[0], "display", "none")
        }
    };
    b7g.cM8E = function (d7e) {
        var f7c = h7a.W7P(d7e, "d:action");
        if (f7c) {
            switch (a6g.t7m(f7c, "action")) {
            case "login":
                h7a.cp8h(d7e);
                var u7n = a6g.t7m(f7c, "type");
                if (u7n) {
                    if (u7n == "sina" || u7n == "tencent") top.open(f7c.href);
                    else top.login(u7n == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h7a.cp8h(d7e);
                top.logout();
                break;
            case "viewStore":
                if (!this.buZ0x.bsD9u("storeNew")) {
                    a6g.y7r(this.cFe5j, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.buZ0x.bsD9u("levelNew")) {
                    a6g.y7r(this.cFg5l, "f-vhide")
                }
                break
            }
        }
    };
    b7g.Pc0x = function (d7e) {
        var f7c = h7a.W7P(d7e, "d:action");
        if (!f7c) return;
        var U7N = a6g.t7m(f7c, "action");
        switch (U7N) {
        case "bilog":
            var bvt0x = a6g.t7m(f7c, "logAction"),
                bvw0x = a6g.t7m(f7c, "logJson");
            window.log(bvt0x, bvw0x);
            break
        }
    };
    b7g.bMs4w = function (Mg9X, d7e) {
        if (this.bvz0x) {
            this.bvz0x.style.display = !Mg9X ? "none" : "";
            (Mg9X || !this.bbY4c ? a6g.y7r : a6g.x7q).call(window, this.OT0x, "f-hide")
        }
    };
    b7g.cgX9O = function (gj9a) {
        a6g.ba7T(this.n7g, "top", -gj9a + "px")
    };
    b7g.bMr4v = function (eT9K, cgP9G) {
        this.cgZ9Q.nF2x(eT9K);
        if (eT9K == "discover") {
            a6g.y7r(this.bMt4x, "f-hide");
            a6g.x7q(this.buB0x, "f-hide");
            window.g_topBarHeight = 105;
            this.buG0x.nF2x(cgP9G)
        } else {
            a6g.x7q(this.bMt4x, "f-hide");
            a6g.y7r(this.buB0x, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b7g.cgU9L = function () {
        var eh9Y = a6g.B7u("g_iframe");
        if (!eh9Y) return;
        var gx0x = eh9Y.contentWindow.document.getElementById("g_top");
        this.bMr4v(a6g.t7m(gx0x, "module"), a6g.t7m(gx0x, "sub"))
    };
    var bcc4g = {},
        bMl4p = /\/\/\w+/,
        cgJ9A = {
            avatarUrl: function (a, b) {
                a = a || "";
                b = b || "";
                return a.replace(bMl4p, "") !== b.replace(bMl4p, "")
            }, userId: true,
            nickname: true,
            reward: true,
            topic: true,
            djStatus: true
        };
    b7g.cgG9x = function (bcj4n) {
        var ob2x = k7d.di8a(cgJ9A, function (D7w, J7C) {
            if (k7d.gG0x(D7w)) {
                return D7w(bcj4n[J7C], bcc4g[J7C])
            } else {
                return bcj4n[J7C] !== bcc4g[J7C]
            }
        });
        bcc4g = bcj4n;
        return bcj4n[ob2x]
    };
    b7g.LY9P = function () {
        var dp8h = GUser || {},
            cgF9w = GUserAcc || {};
        if (dp8h && dp8h.userId) {
            var bMi4m = NEJ.X(dp8h, cgF9w);
            if (this.cgG9x(bMi4m)) {
                a6g.dI9z(this.Gv7o, "m-topbar-user-login", bMi4m)
            }
        } else {
            bcc4g = {};
            this.Gv7o.innerHTML = a6g.iI0x("m-topbar-user-unlogin");
            var i7b = a6g.H7A(this.bur0x, "j-t");
            a6g.ba7T(i7b[0], "display", "none")
        }
        a6g.x7q(this.Gv7o, "f-hide");
        this.bbY4c = false;
        var i7b = a6g.H7A(this.Gv7o, "j-uflag");
        if (dp8h && dp8h.userId) {
            this.OT0x = i7b.shift();
            this.bvz0x = i7b.shift();
            this.Md9U = i7b.shift()
        } else {
            this.bvz0x = i7b.shift()
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        b7g, K7D;
    q7j.fe9V({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function (Q7J) {
                h7a.z7s(q7j.to3x, "message", Q7J)
            }
        }
    });
    q7j.to3x = NEJ.C();
    b7g = q7j.to3x.O7H(q7j.hG0x);
    b7g.bck4o = function () {
        this.co8g("polling-get", {})
    };
    b7g.uI4M = function () {
        var eg9X;
        return function () {
            if (!!eg9X) return;
            eg9X = window.setInterval(this.bck4o.g7b(this), 1e5);
            this.bck4o()
        }
    }();
    I7B.fJ9A.A7t({
        event: "message",
        element: q7j.to3x
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
            }
        }
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
            case "error":
                var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                    adv = packet.advice ? indexOf(advice, packet.advice) : "";
                if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                break;
            case "message":
                if (packet.data !== "") data = packet.data;
                break;
            case "event":
                var ev = {
                    name: packet.name
                };
                if (packet.args && packet.args.length) {
                    ev.args = packet.args
                }
                data = JSON.stringify(ev);
                break;
            case "json":
                data = JSON.stringify(packet.data);
                break;
            case "connect":
                if (packet.qs) data = packet.qs;
                break;
            case "ack":
                data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
            case "error":
                var pieces = data.split("+");
                packet.reason = reasons[pieces[0]] || "";
                packet.advice = advice[pieces[1]] || "";
                break;
            case "message":
                packet.data = data || "";
                break;
            case "event":
                try {
                    var opts = JSON.parse(data);
                    packet.name = opts.name;
                    packet.args = opts.args
                } catch (e) {}
                packet.args = packet.args || [];
                break;
            case "json":
                try {
                    packet.data = JSON.parse(data)
                } catch (e) {}
                break;
            case "connect":
                packet.qs = data || "";
                break;
            case "ack":
                var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                if (pieces) {
                    packet.ackId = pieces[1];
                    packet.args = [];
                    if (pieces[3]) {
                        try {
                            packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                        } catch (e) {}
                    }
                }
                break;
            case "disconnect":
            case "heartbeat":
                break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function (fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
            case "connect":
                this.$emit("connect");
                break;
            case "disconnect":
                if (this.name === "") {
                    this.socket.onDisconnect(packet.reason || "booted")
                } else {
                    this.$emit("disconnect", packet.reason)
                }
                break;
            case "message":
            case "json":
                var params = ["message", packet.data];
                if (packet.ack == "data") {
                    params.push(ack)
                } else if (packet.ack) {
                    this.packet({
                        type: "ack",
                        ackId: packet.id
                    })
                }
                this.$emit.apply(this, params);
                break;
            case "event":
                var params = [packet.name].concat(packet.args);
                if (packet.ack == "data") params.push(ack);
                this.$emit.apply(this, params);
                break;
            case "ack":
                if (this.acks[packet.ackId]) {
                    this.acks[packet.ackId].apply(this, packet.args);
                    delete this.acks[packet.ackId]
                }
                break;
            case "error":
                if (packet.advice) {
                    this.socket.onError(packet)
                } else {
                    if (packet.reason == "unauthorized") {
                        this.$emit("connect_failed", packet.reason)
                    } else {
                        this.$emit("error", packet.reason)
                    }
                }
                break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this,
                args = arguments;
            WebSocket.bcp4t(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this,
                args = arguments;
            WebSocket.bcp4t(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.OC0x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bwv0x();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    } if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                }, getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            } if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                }, switchOffAutoHideShow: function () {
                    m = false
                }, ua: M,
                getFlashPlayerVersion: function () {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                }, hasFlashPlayerVersion: F,
                createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                }, showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                }, removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                }, createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                }, addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                }, expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {}, error: function () {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gY0x = WebSocket.cgC9t++;
            WebSocket.bMh4l[self.gY0x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lW1x = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.bcp4t(function () {
                    WebSocket.qa2x.create(self.gY0x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.qa2x.send(this.gY0x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.qa2x.close(this.gY0x)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.lW1x)) {
                this.lW1x[type] = []
            }
            this.lW1x[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.lW1x)) return;
            var events = this.lW1x[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.lW1x[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cgz9q = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bMg4k(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bMg4k("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cgu9l("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bMg4k = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.cgu9l = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.qa2x = null;
        WebSocket.bMh4l = {};
        WebSocket.OC0x = [];
        WebSocket.cgC9t = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.bcp4t(function () {
                WebSocket.qa2x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bwv0x = function () {
            if (WebSocket.qa2x) return;
            if (WebSocket.cgt9k) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cgt9k
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cgs9j()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cFi5n = function () {
            setTimeout(function () {
                WebSocket.qa2x = document.getElementById("webSocketFlash");
                WebSocket.qa2x.setCallerUrl(location.href);
                WebSocket.qa2x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.OC0x.length; ++i) {
                    WebSocket.OC0x[i]()
                }
                WebSocket.OC0x = []
            }, 0)
        };
        WebSocket.cFk5p = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.qa2x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bMh4l[events[i].webSocketId].cgz9q(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cFm5r = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dP9G = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.bcp4t = function (task) {
            if (WebSocket.qa2x) {
                task()
            } else {
                WebSocket.OC0x.push(task)
            }
        };
        WebSocket.cgs9j = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bwv0x()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bwv0x()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c7f = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c7f(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c7f = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.ec9T) this.ec9T = {};
        this.bMc4g = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.ec9T || !this.ec9T.error || isArray(this.ec9T.error) && !this.ec9T.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.ec9T) return false;
        var handler = this.ec9T[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                var l = arguments.length;
                var args = new Array(l - 1);
                for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.ec9T) this.ec9T = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.ec9T[type]) {
            this.ec9T[type] = listener
        } else if (isArray(this.ec9T[type])) {
            this.ec9T[type].push(listener)
        } else {
            this.ec9T[type] = [this.ec9T[type], listener]
        } if (isArray(this.ec9T[type]) && !this.ec9T[type].warned) {
            var m;
            if (this.bMc4g !== undefined) {
                m = this.bMc4g
            } else {
                m = defaultMaxListeners
            } if (m && m > 0 && this.ec9T[type].length > m) {
                this.ec9T[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ec9T[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.ec9T || !this.ec9T[type]) return this;
        var list = this.ec9T[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.ec9T[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.ec9T = {};
            return this
        }
        var events = this.ec9T && this.ec9T[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.ec9T[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.ec9T) this.ec9T = {};
        if (!this.ec9T[type]) this.ec9T[type] = [];
        if (!isArray(this.ec9T[type])) {
            this.ec9T[type] = [this.ec9T[type]]
        }
        return this.ec9T[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        l7e = c7f("nm.x"),
        dC8u = c7f("nm.u"),
        q7j = c7f("nm.d"),
        OA0x = c7f("pomelo"),
        X7Q = 0,
        b7g, K7D;
    q7j.fe9V({
        "polling-init": {
            url: "/api/push/init",
            format: function (Q7J) {
                X7Q = 2;
                var tq3x = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    j7c = Q7J.account || bb7U,
                    dn8f = GUser.userId;
                OA0x.init(tq3x.host, tq3x.port, true, this.cgg9X.g7b(this, {
                    user: dn8f,
                    nonce: j7c.nonce,
                    domain: tq3x.domain,
                    productKey: tq3x.key,
                    signature: j7c.signature,
                    expire_time: j7c.expireTime
                }))
            }, onerror: function () {
                return this.beU5Z()
            }
        }
    });
    q7j.BK6E = NEJ.C();
    b7g = q7j.BK6E.O7H(q7j.hG0x);
    b7g.cx8p = function () {
        var qQ3x = !1;
        return function (e7d) {
            if (!qQ3x) {
                qQ3x = !0
            }
            this.cD8v(e7d);
            OA0x.on("specify", this.qG2x.g7b(this));
            OA0x.on("broadcast", this.qG2x.g7b(this))
        }
    }();
    b7g.qG2x = function (d7e) {
        k7d.bd7W(d7e, function (bH8z) {
            h7a.z7s(q7j.BK6E, "message", bH8z)
        }, this)
    };
    b7g.beU5Z = function () {
        var bA8s = 500;
        return function () {
            X7Q = 0;
            OA0x.disconnect();
            if (bA8s > 6e4) bA8s = 500;
            bA8s *= 2
        }
    }();
    b7g.cgg9X = function (e7d, cb8T) {
        if (!!cb8T) {
            return this.beU5Z()
        }
        X7Q = 3;
        OA0x.registerAndBind(e7d, function (o7h) {
            if (o7h.code != 200) {
                return this.beU5Z()
            }
            X7Q = 4
        }.g7b(this))
    };
    b7g.cFo5t = function () {
        dC8u.cfS9J.gr9i().cFp5u()
    };
    b7g.cFq5v = function () {
        dC8u.cfS9J.gr9i().cFr5w()
    };
    b7g.bfk5p = function () {
        var qQ3x = !1;
        return function () {
            if (qQ3x) return;
            qQ3x = !0;
            this.co8g("polling-init", {})
        }
    }();
    I7B.fJ9A.A7t({
        event: "message",
        element: q7j.BK6E
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        dv8n = c7f("nej.p"),
        k7d = c7f("nej.u"),
        m7f = c7f("nm.l"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        cW8O = c7f("api"),
        b7g, K7D;
    var gi9Z = a6g.iu0x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    m7f.bfn5s = NEJ.C();
    b7g = m7f.bfn5s.O7H(m7f.en9e);
    K7D = m7f.bfn5s.cs8k;
    b7g.bl7e = function (e7d) {
        e7d.title = "意见反馈";
        this.bm7f(e7d)
    };
    b7g.ce8W = function () {
        this.cd8V = gi9Z
    };
    b7g.bW8O = function () {
        this.cg8Y();
        this.hy0x = {};
        var Mk9b = a6g.H7A;
        var HI7B = h7a.s7l;
        this.hy0x.submit_btn = Mk9b(this.n7g, "u-btn2")[0];
        this.hy0x.cancle_btn = Mk9b(this.n7g, "u-btn2")[1];
        this.hy0x.prompt_msg = Mk9b(this.n7g, "u-err")[0];
        this.hy0x.zs = Mk9b(this.n7g, "zs")[0];
        a6g.ba7T(this.hy0x.zs, "display", "none");
        this.hy0x.fb_txt = Mk9b(this.n7g, "u-txt")[0];
        this.hy0x.contact = Mk9b(this.n7g, "u-txt")[1];
        a6g.gn9e(this.hy0x.fb_txt, "holder");
        a6g.gn9e(this.hy0x.contact, "holder");
        if (a6g.bE8w(this.hy0x.fb_txt.parentNode, "holder-parent")) {
            a6g.ba7T(this.hy0x.fb_txt.parentNode, "display", "block")
        }
        if (a6g.bE8w(this.hy0x.contact.parentNode, "holder-parent")) {
            a6g.ba7T(this.hy0x.contact.parentNode, "display", "block")
        }
        HI7B(this.hy0x.submit_btn, "click", this.cfP9G.g7b(this));
        HI7B(this.hy0x.cancle_btn, "click", this.cfO9F.g7b(this));
        HI7B(this.hy0x.prompt_msg, "msgShow", this.cfK9B.g7b(this));
        HI7B(this.hy0x.fb_txt, "keyup", this.uU4Y.g7b(this));
        HI7B(this.hy0x.fb_txt, "input", this.fN9E.g7b(this));
        HI7B(this.hy0x.contact, "keyup", this.cfJ9A.g7b(this));
        HI7B(this.hy0x.contact, "input", this.bLT4X.g7b(this));
        this.kI1x = q7j.likes_id.A7t()
    };
    b7g.cfP9G = function (d7e) {
        h7a.bh7a(d7e);
        if (this.cO8G()) return;
        var bo7h = this.hy0x.fb_txt.value.trim();
        var bq7j = bo7h.length;
        var e7d = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bLS4W = this.hy0x.contact.value.trim();
        var bcC4G = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l7e.bwp0x(),
            contact: bLS4W
        };
        var j7c = {
                content: bo7h,
                client: "web",
                xInfo: JSON.stringify(bcC4G)
            },
            nI2x = this.kI1x.cta2x();
        if (nI2x && nI2x.length) {
            j7c.log = nI2x.join("\n")
        }
        if (bq7j == 0) {
            this.hy0x.prompt_msg.innerHTML = "反馈内容不能为空";
            a6g.ba7T(this.hy0x.prompt_msg, "display", "block");
            return
        }
        if (bLS4W.length > 100) {
            this.hy0x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a6g.ba7T(this.hy0x.prompt_msg, "display", "block");
            return
        }
        this.cO8G(true);
        e7d.data = k7d.cE8w(j7c);
        e7d.onload = this.cfz9q.g7b(this);
        e7d.onerror = this.iY0x.g7b(this);
        v7o.bn7g("/api/feedback/web", e7d)
    };
    b7g.fN9E = function (d7e) {
        var bq7j = this.hy0x.fb_txt.value.trim().length;
        if (bq7j > 0) a6g.ba7T(this.hy0x.prompt_msg, "display", "none");
        dv8n.ds8k.browser == "ie" && dv8n.ds8k.version < "7.0" ? setTimeout(this.gk9b.g7b(this), 0) : this.gk9b()
    };
    b7g.uU4Y = function (d7e) {
        if (d7e.keyCode === 8) this.gk9b()
    };
    b7g.gk9b = function () {
        var bq7j = this.hy0x.fb_txt.value.trim().length;
        this.hy0x.zs.innerHTML = !bq7j ? "0/140" : bq7j + "/140"
    };
    b7g.bLT4X = function (d7e) {
        var bq7j = this.hy0x.contact.value.trim().length;
        if (bq7j > 0) a6g.ba7T(this.hy0x.prompt_msg, "display", "none")
    };
    b7g.cfJ9A = function (d7e) {
        if (d7e.keyCode === 8) this.bLT4X()
    };
    b7g.cfO9F = function (d7e) {
        h7a.cp8h(d7e);
        this.bu8m()
    };
    b7g.cfK9B = function (d7e) {
        var f7c = h7a.W7P(d7e);
        f7c.innerHTML = "请输入反馈内容"
    };
    b7g.cFs5x = function (cFt5y) {
        var f7c = h7a.W7P(d7e);
        f7c.innerHTML = ""
    };
    b7g.cfz9q = function (o7h) {
        this.cO8G(false);
        this.bu8m();
        m7f.Z7S.L7E({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b7g.iY0x = function (o7h) {
        this.cO8G(false);
        m7f.Z7S.L7E({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b7g.cO8G = function (cX8P) {
        return this.dX9O(this.hy0x.submit_btn, cX8P, "发送意见", "发送中...")
    };
    b7g.L7E = function () {
        K7D.L7E.call(this);
        this.cO8G(false);
        this.hy0x.fb_txt.value = "";
        this.hy0x.contact.value = "";
        a6g.ba7T(this.hy0x.prompt_msg, "display", "none");
        this.gk9b()
    };
    l7e.cfu9l = function (e7d) {
        e7d = e7d || {};
        if (e7d.title === undefined) e7d.title = "意见反馈";
        m7f.bfn5s.L7E(e7d)
    };
    cW8O.feedback = l7e.feedback = l7e.cfu9l
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        N7G = c7f("nej.ui"),
        b7g;
    if (!!N7G.yA5F) return;
    N7G.yA5F = NEJ.C();
    b7g = N7G.yA5F.O7H(N7G.ei9Z);
    b7g.cx8p = function () {
        this.gY0x = this.bLM4Q();
        this.cD8v()
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.ct8l = e7d.index;
        this.gA0x = e7d.total;
        this.ht0x = e7d.range;
        this.gB0x(e7d.data)
    };
    b7g.bD8v = function () {
        this.bG8y();
        delete this.bk7d;
        delete this.ct8l;
        delete this.gA0x;
        delete this.ht0x
    };
    b7g.iy0x = bs8k;
    b7g.bLM4Q = function () {
        var gJ0x = +(new Date);
        return function () {
            return "itm-" + ++gJ0x
        }
    }();
    b7g.FB7u = function () {
        return this.gY0x
    };
    b7g.ie0x = function () {
        return this.bk7d
    };
    b7g.gB0x = function (j7c) {
        this.bk7d = j7c || {};
        this.iy0x(this.bk7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        N7G = c7f("nej.ui"),
        b7g, K7D;
    if (!!N7G.vh4l) return;
    N7G.vh4l = NEJ.C();
    b7g = N7G.vh4l.O7H(N7G.yA5F);
    K7D = N7G.vh4l.cs8k;
    b7g.bl7e = function (e7d) {
        this.cfq9h = e7d.pkey || "id";
        this.bm7f(e7d)
    };
    b7g.DC6w = function (j7c) {
        this.z7s("ondelete", {
            ext: j7c,
            id: this.FB7u(),
            data: this.ie0x(),
            body: this.lQ1x()
        })
    };
    b7g.tz3x = function (j7c) {
        this.z7s("onupdate", {
            ext: j7c,
            id: this.FB7u(),
            data: this.ie0x(),
            body: this.lQ1x()
        })
    };
    b7g.gB0x = function (j7c) {
        K7D.gB0x.apply(this, arguments);
        this.gY0x = this.bk7d[this.cfq9h] || this.bLM4Q()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fx9o = NEJ.R,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ui"),
        b7g, iZ0x, bgj5o;
    if (!!N7G.bgk5p) return;
    N7G.bgk5p = NEJ.C();
    b7g = N7G.bgk5p.O7H(N7G.ei9Z);
    b7g.bl7e = function (e7d) {
        this.bda4e = NEJ.X({}, e7d);
        this.fP9G = NEJ.X({}, e7d);
        delete this.bda4e.onchange;
        this.fP9G.onchange = this.fY9P.g7b(this);
        this.bm7f(e7d);
        this.cfm9d({
            number: e7d.number,
            label: e7d.label || bb7U
        })
    };
    b7g.bD8v = function () {
        this.bG8y();
        if (!!this.lp1x) {
            this.lp1x.T7M();
            delete this.lp1x
        }
        delete this.bda4e;
        delete this.fP9G;
        this.cfk9b();
        this.n7g.innerHTML = "&nbsp;"
    };
    b7g.ce8W = function () {
        this.mb1x = iZ0x
    };
    b7g.cfm9d = function (j7c) {
        a6g.dI9z(this.n7g, bgj5o, j7c);
        var gJ0x = a6g.Ja8S();
        this.fP9G.list = a6g.H7A(this.n7g, "js-i-" + gJ0x);
        this.fP9G.pbtn = (a6g.H7A(this.n7g, "js-p-" + gJ0x) || fx9o)[0];
        this.fP9G.nbtn = (a6g.H7A(this.n7g, "js-n-" + gJ0x) || fx9o)[0]
    };
    b7g.bW8O = function () {
        this.cg8Y()
    };
    b7g.cFu5z = function (j7c) {
        return a6g.bZ8R(bgj5o, j7c)
    };
    b7g.fY9P = function (d7e) {
        if (this.NN0x) return;
        var r7k = d7e.index,
            cy8q = d7e.total;
        this.NN0x = !0;
        this.NM0x(r7k, cy8q);
        k7d.bd7W(this.bde4i, function (tC3x) {
            tC3x.NM0x(r7k, cy8q)
        });
        this.NN0x = !1;
        this.z7s("onchange", d7e)
    };
    b7g.g7b = function (bI8A) {
        bI8A = a6g.B7u(bI8A);
        if (!bI8A) return this;
        var cq8i = NEJ.X({}, this.bda4e);
        cq8i.parent = bI8A;
        cq8i.index = this.tD3x();
        cq8i.total = this.kq1x();
        var tC3x = this.constructor.A7t(cq8i);
        tC3x.xp4t("onchange", this.fP9G.onchange);
        if (!this.bde4i) this.bde4i = [];
        this.bde4i.push(tC3x);
        return this
    };
    b7g.cfk9b = function () {
        var bnv7o = function (tC3x, r7k, i7b) {
            tC3x.T7M();
            i7b.splice(r7k, 1)
        };
        return function () {
            k7d.no2x(this.bde4i, bnv7o)
        }
    }();
    b7g.kU1x = function (r7k) {
        if (!this.lp1x) return;
        this.lp1x.kU1x(r7k)
    };
    b7g.tD3x = function () {
        if (!this.lp1x) return 1;
        return this.lp1x.tD3x()
    };
    b7g.kq1x = function () {
        if (!this.lp1x) return 1;
        return this.lp1x.kq1x()
    };
    b7g.NM0x = function (r7k, cy8q) {
        if (!this.lp1x) return;
        this.lp1x.NM0x(r7k, cy8q)
    };
    b7g.bgE5J = function (cy8q) {
        if (!this.lp1x) return;
        this.lp1x.bgE5J(cy8q)
    };
    iZ0x = a6g.tO3x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bgj5o = a6g.es9j('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        N7G = c7f("nej.ut"),
        b7g;
    if (!!N7G.bdg4k) return;
    N7G.bdg4k = NEJ.C();
    b7g = N7G.bdg4k.O7H(N7G.cH8z);
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.bdn4r = e7d.pbtn;
        this.cr8j = e7d.nbtn;
        this.bdp4t = e7d.sbtn;
        this.bdr5w = e7d.ebtn;
        this.ji0x = e7d.event || "click";
        this.kR1x = e7d.selected || "js-selected";
        this.nK2x = e7d.disabled || "js-disabled";
        this.cfg9X(e7d.list);
        this.NM0x(e7d.index || 1, e7d.total || 1)
    };
    b7g.bD8v = function () {
        this.bG8y();
        delete this.bU8M;
        delete this.ji0x;
        delete this.bdn4r;
        delete this.cr8j;
        delete this.bdp4t;
        delete this.bdr5w;
        delete this.bLJ4N;
        delete this.gA0x;
        delete this.ct8l;
        delete this.kR1x;
        delete this.nK2x
    };
    b7g.cfg9X = function () {
        var bgY6S = function (f7c) {
            this.bU8M.push(f7c);
            this.bX8P([
                [f7c, this.ji0x, this.cu8m.ew9n(this, 0)]
            ])
        };
        return function (i7b) {
            this.bU8M = [];
            this.bX8P([
                [this.bdn4r, "click", this.cu8m.ew9n(this, -1)],
                [this.cr8j, "click", this.cu8m.ew9n(this, 1)],
                [this.bdp4t, "click", this.cu8m.ew9n(this, -2)],
                [this.bdr5w, "click", this.cu8m.ew9n(this, 2)]
            ]);
            k7d.bd7W(i7b, bgY6S, this)
        }
    }();
    b7g.Ee6Y = function (f7c, r7k) {
        if (r7k == null) {
            f7c.innerText = "";
            a6g.ba7T(f7c, "display", "none");
            a6g.x7q(f7c, this.kR1x)
        } else {
            f7c.innerText = r7k;
            a6g.ba7T(f7c, "display", "");
            r7k == this.ct8l ? a6g.y7r(f7c, this.kR1x) : a6g.x7q(f7c, this.kR1x)
        }
    };
    b7g.bhd6X = function () {
        if (this.ct8l <= 1) {
            a6g.y7r(this.bdn4r, this.nK2x);
            a6g.y7r(this.bdp4t, this.nK2x)
        } else {
            a6g.x7q(this.bdn4r, this.nK2x);
            a6g.x7q(this.bdp4t, this.nK2x)
        } if (this.ct8l >= this.gA0x) {
            a6g.y7r(this.cr8j, this.nK2x);
            a6g.y7r(this.bdr5w, this.nK2x)
        } else {
            a6g.x7q(this.cr8j, this.nK2x);
            a6g.x7q(this.bdr5w, this.nK2x)
        }
    };
    b7g.bdt5y = bs8k;
    b7g.bhg6a = function () {
        this.bdt5y();
        this.bhd6X();
        this.z7s("onchange", {
            last: this.bLJ4N,
            total: this.gA0x,
            index: this.ct8l,
            ext: this.bhi6c
        })
    };
    b7g.bLI3x = function (r7k) {
        r7k = parseInt(r7k);
        if (isNaN(r7k) || this.gA0x == null) return !1;
        r7k = Math.max(1, Math.min(r7k, this.gA0x));
        this.bLJ4N = this.ct8l;
        this.ct8l = r7k;
        return !0
    };
    b7g.bhk6e = function (cy8q) {
        cy8q = parseInt(cy8q);
        if (isNaN(cy8q) || cy8q < 1) return !1;
        this.gA0x = cy8q;
        return !0
    };
    b7g.cu8m = function (d7e, eV9M) {
        h7a.cp8h(d7e);
        var F7y = h7a.W7P(d7e);
        if (!F7y || a6g.bE8w(F7y, this.kR1x) || a6g.bE8w(F7y, this.nK2x)) return;
        var r7k = F7y.innerText;
        switch (eV9M) {
        case 1:
        case -1:
            r7k = this.ct8l + eV9M;
            break;
        case 2:
            r7k = this.gA0x;
            break;
        case -2:
            r7k = 1;
            break
        }
        this.kU1x(r7k)
    };
    b7g.tD3x = function () {
        return this.ct8l
    };
    b7g.kU1x = function (r7k) {
        var ceX9O = this.ct8l;
        this.bLI3x(r7k);
        if (ceX9O != this.ct8l) this.bhg6a();
        return this
    };
    b7g.kq1x = function () {
        return this.gA0x
    };
    b7g.UD2x = function (cy8q) {
        if (this.bhk6e(cy8q) && this.ct8l != null) {
            this.ct8l = 1;
            this.bhg6a()
        }
        return this
    };
    b7g.bgE5J = function (cy8q) {
        if (this.bhk6e(cy8q)) {
            this.bdt5y();
            this.bhd6X()
        }
        return this
    };
    b7g.NM0x = function (r7k, cy8q) {
        if (!this.bhk6e(cy8q) || !this.bLI3x(r7k)) return this;
        this.bhg6a();
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        cY8Q = c7f("nej.x"),
        N7G = c7f("nej.ut"),
        b7g;
    if (!!N7G.ND0x) return;
    N7G.ND0x = NEJ.C();
    b7g = N7G.ND0x.O7H(N7G.bdg4k);
    b7g.cx8p = function () {
        this.cD8v();
        var f7c = a6g.dg8Y("span", "zdot");
        f7c.innerText = "...";
        this.bdu5z = [f7c.cloneNode(true), f7c]
    };
    b7g.bD8v = function () {
        this.bG8y();
        this.bLF3x()
    };
    b7g.bLF3x = function () {
        a6g.mY1x(this.bdu5z[0]);
        a6g.mY1x(this.bdu5z[1])
    };
    b7g.bdt5y = function () {
        this.bhi6c = {
            last: !1,
            first: !1,
            list: this.bU8M
        };
        this.bLF3x();
        this.Ee6Y(this.bU8M[0], 1);
        var bM8E = 1,
            bq7j = this.bU8M.length;
        if (this.gA0x < bq7j) {
            for (var qp2x; bM8E < bq7j; bM8E++) {
                qp2x = bM8E + 1;
                this.Ee6Y(this.bU8M[bM8E], qp2x > this.gA0x ? null : qp2x)
            }
            return
        }
        if (this.ct8l > 1) {
            var cF8x = Math.floor((bq7j - 2) / 2),
                ceP9G = this.gA0x - bq7j + 2,
                hz0x = Math.max(2, this.ct8l - cF8x);
            if (this.gA0x >= bq7j) {
                hz0x = Math.min(hz0x, ceP9G)
            }
            if (hz0x > 2) {
                this.bU8M[0].insertAdjacentElement("afterEnd", this.bdu5z[0]);
                this.bhi6c.first = !0
            }
            for (var r7k;; bM8E++) {
                r7k = hz0x + bM8E - 1;
                if (r7k > this.ct8l) break;
                this.Ee6Y(this.bU8M[bM8E], r7k)
            }
        }
        if (this.ct8l < this.gA0x) {
            var r7k, hz0x = this.ct8l + 1;
            for (var i = 0, l = bq7j - 2;; i++, bM8E++) {
                r7k = hz0x + i;
                if (bM8E > l || r7k > this.gA0x) break;
                this.Ee6Y(this.bU8M[bM8E], r7k)
            }
            if (r7k < this.gA0x) {
                this.bU8M[bM8E].insertAdjacentElement("beforeBegin", this.bdu5z[1]);
                this.bhi6c.last = !0
            }
            if (r7k <= this.gA0x) {
                this.Ee6Y(this.bU8M[bM8E++], this.gA0x)
            }
        }
        for (; bM8E < bq7j; bM8E++) {
            this.Ee6Y(this.bU8M[bM8E])
        }
    };
    a6g.ceN9E = cY8Q.ceN9E = function (bI8A, e7d) {
        var C7v = a6g.lv1x(bI8A);
        if (!C7v) return null;
        if (!N7G.bba4e(C7v, N7G.ND0x)) {
            e7d = e7d || {};
            var i7b = !e7d.clazz ? a6g.dk8c(C7v) : a6g.H7A(C7v, e7d.clazz);
            e7d.pbtn = i7b.shift();
            e7d.nbtn = i7b.pop();
            e7d.list = i7b;
            delete e7d.clazz
        }
        return N7G.bba4e(C7v, N7G.ND0x, e7d || bb7U)
    };
    cY8Q.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fx9o = NEJ.R,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        N7G = c7f("nej.ui"),
        b7g, K7D, gi9Z;
    if (!!N7G.NA0x) return;
    N7G.NA0x = NEJ.C();
    b7g = N7G.NA0x.O7H(N7G.bgk5p);
    K7D = N7G.NA0x.cs8k;
    b7g.bl7e = function (e7d) {
        e7d.number = parseInt(e7d.number) || 9;
        this.bm7f(e7d);
        this.lp1x = I7B.ND0x.A7t(this.fP9G)
    };
    b7g.fY9P = function (d7e) {
        if (!!this.bda4e.noend) {
            var bLB3x = d7e.ext || bb7U,
                i7b = bLB3x.list || fx9o;
            if (bLB3x.last) {
                a6g.ba7T(i7b[i7b.length - 1], "display", "none")
            }
        }
        K7D.fY9P.apply(this, arguments)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        bc7V = c7f("nej.ui"),
        N7G = c7f("nej.ut"),
        b7g;
    if (!!N7G.bdx5C) return;
    N7G.bdx5C = NEJ.C();
    b7g = N7G.bdx5C.O7H(N7G.cH8z);
    b7g.bl7e = function (e7d) {
        this.jq0x = {};
        this.bm7f(e7d);
        this.ii0x = a6g.B7u(e7d.parent);
        this.fd9U = {
            parent: this.ii0x
        };
        this.pd2x = parseInt(e7d.limit) || 10;
        this.zO5T = parseInt(e7d.first) || this.pd2x;
        this.ceL9C(e7d.item);
        this.ceK9B(e7d.cache || bb7U);
        this.ceI9z(e7d.pager || bb7U);
        this.gB0x()
    };
    b7g.bD8v = function () {
        this.z7s("onbeforerecycle");
        this.Nu9l();
        this.bG8y();
        if (this.jq0x.clear) {
            this.S7L.ut4x(this.jq0x.key)
        }
        this.S7L.T7M();
        if (!!this.jo0x) {
            this.jo0x.T7M();
            delete this.jo0x
        }
        delete this.bLz3x;
        delete this.fP9G;
        delete this.bdH5M;
        delete this.S7L;
        delete this.ii0x;
        delete this.Ns9j;
        delete this.fd9U;
        delete this.jq0x
    };
    b7g.bLy3x = function () {
        var dh8Z = /\{(.*?)\}/gi,
            ceB9s = function (or2x, j7c) {
                return (or2x || "{id}{seed}").replace(dh8Z, function ($1, $2) {
                    var D7w = j7c[$2];
                    return D7w == null ? $1 : D7w
                })
            };
        return function (C7v) {
            var J7C = ceB9s(this.fd9U.jstIdTempalte, {
                id: C7v,
                seed: a6g.Ja8S()
            });
            if (!this.fd9U.jstIdType) {
                return a6g.B7u(J7C)
            } else if (this.fd9U.jstIdType == 1) {
                return (a6g.H7A(this.ii0x, J7C) || [])[0]
            }
        }
    }();
    b7g.Bk6e = function (bM8E, bi7b, gc9T, bq7j) {
        var o7h = {
            index: 1,
            total: 1
        };
        if (bi7b >= bM8E) {
            o7h.index = Math.floor((bi7b - bM8E) / gc9T) + 2
        }
        if (bq7j > bM8E) {
            o7h.total = Math.ceil((bq7j - bM8E) / gc9T) + 1
        }
        return o7h
    };
    b7g.bLx3x = function (J7C) {
        delete this.Ns9j;
        this.MA9r = J7C;
        this.bX8P([
            [this.ii0x, "click", this.cez9q.g7b(this)]
        ])
    };
    b7g.ceL9C = function (p7i) {
        if (k7d.fG9x(p7i)) {
            this.bLx3x(p7i);
            return
        }
        NEJ.X(this.fd9U, p7i);
        var dY9P = this.fd9U.klass;
        delete this.fd9U.klass;
        if (k7d.fG9x(dY9P)) {
            this.bLx3x(dY9P);
            return
        }
        delete this.MA9r;
        this.Ns9j = dY9P;
        this.fd9U.ondelete = this.z7s.g7b(this, "ondelete");
        this.fd9U.onupdate = this.z7s.g7b(this, "onupdate")
    };
    b7g.ceK9B = function (R7K) {
        var dY9P = R7K.klass,
            ka1x = NEJ.X({}, R7K);
        this.jq0x.key = ka1x.lkey;
        this.jq0x.data = ka1x.data || {};
        this.jq0x.clear = !!ka1x.clear;
        this.fd9U.pkey = ka1x.key || "id";
        ka1x.onlistload = this.bin6h.g7b(this);
        ka1x.onpullrefresh = this.cey9p.g7b(this);
        if (!!dY9P && "onlistchange" in dY9P) {
            this.bX8P([
                [dY9P, "listchange", this.bip6j.g7b(this)]
            ])
        } else {
            ka1x.onitemadd = this.bdX5c.g7b(this);
            ka1x.onitemdelete = this.bdZ5e.g7b(this);
            ka1x.onitemupdate = this.bLw3x.g7b(this)
        }
        this.S7L = (dY9P || N7G.Uv2x).A7t(ka1x);
        if (R7K.total != null) {
            this.S7L.UD2x(this.jq0x.key, R7K.total)
        }
        if (!!R7K.list) {
            this.S7L.uu4y(this.jq0x.key, R7K.list)
        }
    };
    b7g.ceI9z = function (tC3x) {
        this.bLz3x = tC3x.klass || bc7V.NA0x;
        this.fP9G = NEJ.X({}, tC3x);
        if (k7d.eJ9A(tC3x.parent)) {
            this.fP9G.parent = tC3x.parent[0];
            this.Ng9X = tC3x.parent.slice(1);
            if (!this.Ng9X || !this.Ng9X.length) {
                delete this.Ng9X
            }
        }
        delete this.fP9G.klass
    };
    b7g.Nu9l = function () {
        var gK0x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z7s("onbeforelistclear", {
                parent: this.ii0x
            });
            if (!!this.fL9C && this.fL9C.length > 0) {
                this.fL9C = this.Ns9j.T7M(this.fL9C);
                delete this.fL9C
            }
            if (gK0x.test(this.ii0x.tagName)) {
                a6g.bOO4S(this.ii0x)
            } else {
                this.ii0x.innerHTML = ""
            }
        }
    }();
    b7g.biw6q = function (beb5g) {
        if (!!this.fP9G.fixed) return;
        a6g.ba7T(this.fP9G.parent, "display", beb5g);
        k7d.bd7W(this.Ng9X, function (bI8A) {
            a6g.ba7T(bI8A, "display", beb5g)
        }, this)
    };
    b7g.biz6t = function () {
        var r7k = this.fP9G.index || 1;
        delete this.fP9G.index;
        if (!!this.jo0x) {
            r7k = this.jo0x.tD3x()
        }
        this.Be6Y({
            last: r7k,
            index: r7k
        })
    };
    b7g.Be6Y = function (d7e) {
        this.z7s("onpagechange", d7e)
    };
    b7g.bLv3x = function (bi7b) {
        this.jq0x.offset = bi7b;
        this.VQ2x()
    };
    b7g.bLu3x = function (e7d) {
        return e7d
    };
    b7g.VQ2x = function () {
        this.Nd9U();
        var j7c = this.jq0x.data;
        j7c.offset = this.jq0x.offset;
        var pG2x = j7c.offset == 0;
        j7c.total = pG2x;
        this.jq0x.limit = pG2x ? this.zO5T : this.pd2x;
        j7c.limit = this.jq0x.limit;
        this.S7L.lK1x(this.bLu3x(NEJ.X({}, this.jq0x)))
    };
    b7g.bin6h = function (e7d) {
        if (e7d.key != this.jq0x.key || e7d.offset != this.jq0x.offset) return;
        this.bed5i();
        var i7b = this.S7L.hD0x(e7d.key);
        if (!i7b || !i7b.length) {
            this.biH6B();
            return
        }
        var gc9T = e7d.limit,
            bi7b = e7d.offset;
        if (this.biI6C(i7b, bi7b, gc9T)) return;
        this.z7s("onbeforelistrender", {
            list: i7b,
            offset: bi7b,
            parent: this.ii0x
        });
        if (!!this.MA9r) {
            this.fd9U.xlist = i7b;
            this.fd9U.beg = bi7b;
            this.fd9U.end = Math.min(i7b.length, bi7b + gc9T) - 1;
            this.fd9U.act = "list";
            var dT9K = a6g.bZ8R(this.MA9r, this.fd9U);
            this.Nb9S(dT9K)
        } else {
            this.fd9U.limit = gc9T;
            this.fd9U.offset = bi7b;
            var ho0x = a6g.AS6M(i7b, this.Ns9j, this.fd9U);
            this.Na9R(ho0x)
        }
        this.z7s("onafterlistrender", {
            list: i7b,
            offset: bi7b,
            parent: this.ii0x
        })
    };
    b7g.cey9p = function (e7d) {
        if (!this.bdH5M) return;
        delete this.bdH5M;
        this.bed5i("onafterpullrefresh");
        this.gB0x()
    };
    b7g.bLs3x = function (r7k, cy8q) {
        if (!!this.jo0x) {
            var xm4q = this.jo0x.tD3x(),
                cep9g = this.jo0x.kq1x();
            if (xm4q > cy8q || cy8q != cep9g) {
                this.jo0x.T7M();
                delete this.jo0x;
                this.Be6Y({
                    last: xm4q,
                    index: Math.min(r7k, cy8q)
                });
                return !0
            }
        } else {
            this.fP9G.index = r7k;
            this.fP9G.total = cy8q;
            this.jo0x = this.bLz3x.A7t(this.fP9G);
            this.jo0x.xp4t("onchange", this.Be6Y.g7b(this));
            k7d.bd7W(this.Ng9X, function (bI8A) {
                this.jo0x.g7b(bI8A)
            }, this)
        }
    };
    b7g.bei5n = function () {
        var gJ0x = +(new Date);
        return function (j7c) {
            var C7v = j7c[this.fd9U.pkey];
            if (!C7v) {
                j7c["dirty-data"] = !0;
                j7c[this.fd9U.pkey] = "dirty-" + gJ0x++
            }
            return j7c
        }
    }();
    b7g.bej5o = function (j7c) {
        var C7v = j7c[this.fd9U.pkey];
        if (!!j7c["dirty-data"]) {
            delete j7c["dirty-data"];
            delete j7c[this.fd9U.pkey]
        }
        return C7v
    };
    b7g.bel5q = function () {
        var ceo9f = function (kL1x, mx1x) {
            this.ii0x.insertAdjacentElement(kL1x, mx1x)
        };
        return function (kL1x, j7c) {
            var Jh8Z = [j7c];
            if (!!this.MA9r) {
                this.fd9U.xlist = Jh8Z;
                this.fd9U.beg = 0;
                this.fd9U.end = 0;
                this.fd9U.act = "add";
                this.Nb9S(a6g.bZ8R(this.MA9r, this.fd9U), kL1x)
            } else {
                this.fd9U.limit = 1;
                this.fd9U.offset = 0;
                this.fd9U.parent = ceo9f.g7b(this, kL1x);
                var ho0x = a6g.AS6M(Jh8Z, this.Ns9j, this.fd9U);
                this.fd9U.parent = this.ii0x;
                this.Na9R(ho0x)
            }
        }
    }();
    b7g.Nd9U = bs8k;
    b7g.bed5i = function (V7O) {
        var d7e = {
            parent: this.ii0x
        };
        this.z7s(V7O || "onafterlistload", d7e);
        if (!d7e.stopped) {
            a6g.mY1x(this.cv8n)
        }
    };
    b7g.biI6C = bs8k;
    b7g.ben5s = function (bH8z, kL1x) {
        if (k7d.fG9x(bH8z)) {
            if (!this.cv8n) this.cv8n = a6g.dg8Y("div");
            this.cv8n.innerHTML = bH8z
        } else {
            this.cv8n = bH8z
        }
        this.ii0x.insertAdjacentElement(kL1x || "beforeEnd", this.cv8n)
    };
    b7g.yT5Y = function (V7O, kg1x, kL1x) {
        var d7e = {
            parent: this.ii0x
        };
        this.z7s(V7O, d7e);
        if (!d7e.stopped) {
            this.ben5s(d7e.value || kg1x, kL1x)
        }
    };
    b7g.biH6B = bs8k;
    b7g.Nb9S = bs8k;
    b7g.Na9R = bs8k;
    b7g.cez9q = function () {
        var gK0x = /^(?:delete|update)$/;
        return function (d7e) {
            var f7c = h7a.W7P(d7e, "d:action");
            if (!f7c) return;
            var U7N = a6g.t7m(f7c, "action");
            if (!gK0x.test(U7N)) return;
            var C7v = a6g.t7m(f7c, "id");
            if (!C7v) return;
            var p7i = this.S7L.eH9y(C7v);
            if (!p7i) return;
            h7a.bh7a(d7e);
            this.z7s("on" + U7N, {
                data: p7i,
                id: p7i[this.fd9U.pkey],
                body: a6g.B7u(this.bLy3x(C7v))
            })
        }
    }();
    b7g.bdX5c = bs8k;
    b7g.VP2x = function (d7e) {
        var j7c = d7e.data || {},
            e7d = {
                data: j7c,
                key: this.jq0x.key,
                id: j7c[this.fd9U.pkey]
            };
        this.z7s("onbeforedelete", e7d);
        this.S7L.Kc8U(e7d)
    };
    b7g.bdZ5e = bs8k;
    b7g.VO2x = function (d7e) {
        var j7c = d7e.data || {},
            e7d = {
                data: j7c,
                key: this.jq0x.key
            };
        this.z7s("onbeforeupdate", e7d);
        this.S7L.VR2x(e7d)
    };
    b7g.bLw3x = function (d7e) {
        this.MR9I(d7e, "onafterupdate");
        if (d7e.stopped) return;
        var C7v = d7e.data[this.fd9U.pkey];
        if (!!this.fL9C) {
            var p7i = a6g.bTd6X(C7v);
            if (!!p7i) p7i.gB0x(d7e.data)
        } else {
            var f7c = a6g.B7u(C7v + "" + a6g.Ja8S());
            if (!f7c) return;
            var i7b = this.S7L.hD0x(d7e.key),
                r7k = k7d.di8a(i7b, d7e.data);
            if (r7k < 0) return;
            this.fd9U.list = i7b;
            this.fd9U.beg = r7k;
            this.fd9U.end = r7k;
            this.fd9U.act = "update";
            var dT9K = a6g.bZ8R(this.MA9r, this.fd9U);
            f7c.insertAdjacentHTML("afterEnd", dT9K);
            a6g.cJ8B(f7c)
        }
    };
    b7g.MR9I = function (d7e, V7O) {
        var p7i = d7e.data;
        if (!p7i || p7i[this.fd9U.pkey] == null) {
            this.z7s("onerror", d7e);
            d7e.stopped = !0
        }
        if (!d7e.stopped) {
            this.z7s(V7O, d7e)
        }
    };
    b7g.bje6Y = bs8k;
    b7g.bjf6Z = bs8k;
    b7g.bip6j = function (d7e) {
        if (d7e.key != this.jq0x.key) return;
        switch (d7e.action) {
        case "add":
            this.bdX5c(d7e);
            break;
        case "delete":
            this.bdZ5e(d7e);
            break;
        case "update":
            this.bLw3x(d7e);
            break;
        case "refresh":
            this.gB0x();
            break;
        case "unshift":
            this.bjf6Z(d7e.offset, d7e.limit);
            break;
        case "append":
            this.bje6Y(d7e.offset, d7e.limit);
            break
        }
    };
    b7g.pu2x = function (p7i) {
        this.VO2x({
            data: p7i
        })
    };
    b7g.my1x = function (p7i) {
        this.VP2x({
            data: p7i
        })
    };
    b7g.tM3x = function (p7i) {
        this.S7L.jw0x({
            data: p7i,
            key: this.jq0x.key
        })
    };
    b7g.tK3x = function () {
        return this.S7L
    };
    b7g.bjo6i = function (j7c) {
        this.bel5q("afterBegin", this.bei5n(j7c));
        return this.bej5o(j7c)
    };
    b7g.bLr3x = function (j7c) {
        this.bel5q("beforeEnd", this.bei5n(j7c));
        return this.bej5o(j7c)
    };
    b7g.gB0x = function () {
        this.Nu9l();
        this.biz6t()
    };
    b7g.cFx5C = function () {
        this.S7L.ut4x(this.jq0x.key);
        this.gB0x()
    };
    b7g.bsW9N = function () {
        if (!!this.bdH5M) return;
        this.bdH5M = !0;
        this.yT5Y("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.S7L.bsW9N({
            key: this.jq0x.key,
            data: this.jq0x.data
        })
    };
    b7g.kq1x = function () {
        return this.S7L.kq1x(this.jq0x.key)
    };
    b7g.bLq3x = function () {
        return this.jo0x
    };
    b7g.VW2x = function () {
        return this.S7L.VW2x(this.jq0x.key)
    };
    b7g.cek9b = function () {
        return this.fL9C
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fx9o = NEJ.R,
        k7d = c7f("nej.u"),
        a6g = c7f("nej.e"),
        N7G = c7f("nej.ut"),
        b7g, K7D;
    if (!!N7G.kx1x) return;
    N7G.kx1x = NEJ.C();
    b7g = N7G.kx1x.O7H(N7G.bdx5C);
    K7D = N7G.kx1x.cs8k;
    b7g.Bk6e = function (bi7b, bq7j) {
        return K7D.Bk6e.call(this, this.zO5T, bi7b, this.pd2x, bq7j)
    };
    b7g.bjC6w = function (r7k) {
        var bi7b = 0;
        if (r7k > 1) bi7b = this.zO5T + (r7k - 2) * this.pd2x;
        return bi7b
    };
    b7g.Be6Y = function (d7e) {
        K7D.Be6Y.apply(this, arguments);
        if (!d7e.stopped) {
            this.bLv3x(this.bjC6w(d7e.index))
        }
    };
    b7g.Nd9U = function () {
        this.Nu9l();
        this.yT5Y("onbeforelistload", "列表加载中...")
    };
    b7g.bed5i = function () {
        K7D.bed5i.apply(this, arguments);
        this.Nu9l()
    };
    b7g.biI6C = function (i7b, bi7b, gc9T) {
        var by8q = this.Bk6e(bi7b, i7b.length);
        if (this.bLs3x(by8q.index, by8q.total)) return !0;
        this.biw6q(by8q.total > 1 ? "" : "none")
    };
    b7g.biH6B = function () {
        this.yT5Y("onemptylist", "没有列表数据！")
    };
    b7g.ben5s = function (bH8z, kL1x) {
        if (!kL1x && k7d.fG9x(bH8z)) {
            this.ii0x.innerHTML = bH8z;
            return
        }
        K7D.ben5s.apply(this, arguments)
    };
    b7g.Nb9S = function (dT9K) {
        this.ii0x.innerHTML = dT9K
    };
    b7g.Na9R = function (ho0x) {
        this.fL9C = ho0x
    };
    b7g.bdX5c = function (d7e) {
        this.MR9I(d7e, "onafteradd");
        if (!d7e.stopped) this.gB0x()
    };
    b7g.bdZ5e = function (d7e) {
        this.MR9I(d7e, "onafterdelete");
        if (!d7e.stopped) this.gB0x()
    };
    b7g.bje6Y = function (bi7b, gc9T) {
        var r7k = 1;
        if (!!this.jo0x) {
            r7k = this.jo0x.tD3x()
        }
        var jT1x = this.bjC6w(r7k),
            fR9I = jT1x + (r7k > 1 ? this.pd2x : this.zO5T);
        if (bi7b >= fR9I && !!this.jo0x) {
            var by8q = this.Bk6e(0, this.kq1x());
            this.jo0x.bgE5J(by8q.total);
            this.biw6q(by8q.total > 1 ? "" : "none")
        } else {
            this.gB0x()
        }
    };
    b7g.bjf6Z = function (bi7b, gc9T) {
        var r7k = 1;
        if (!!this.jo0x) {
            r7k = this.jo0x.tD3x()
        }
        var jT1x = this.bjC6w(r7k),
            by8q = this.Bk6e(jT1x, this.kq1x());
        this.Be6Y({
            last: r7k,
            index: by8q.index
        })
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        w7p = c7f("nm.w"),
        fo9f = 40,
        b7g, K7D;
    w7p.bew5B = NEJ.C();
    b7g = w7p.bew5B.O7H(I7B.cH8z);
    K7D = w7p.bew5B.cs8k;
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.MJ9A = e7d.inputer;
        this.bjG6A = e7d.tipper;
        this.bX8P([
            [this.MJ9A, "input", this.fN9E.g7b(this)]
        ])
    };
    b7g.bD8v = function () {
        this.bG8y();
        this.MC9t(null, null)
    };
    b7g.fN9E = function (d7e) {
        if (d7e && d7e.type == "keyup" && (d7e.keyCode != 8 || d7e.keyCode != 68)) return;
        var V7O = this.MJ9A.value,
            cFy5D;
        if (l7e.Sh1x(V7O) > fo9f) {
            this.MJ9A.value = l7e.CZ6T(V7O, fo9f);
            this.MC9t("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g7b(this))
        } else if (V7O.indexOf("#") >= 0 || V7O.indexOf("@") >= 0) {
            this.MC9t("歌单名不能包含字符“@”和“#”！")
        } else {
            this.MC9t(null, null);
            this.z7s("onchange", {
                value: V7O
            })
        }
    };
    b7g.ceh9Y = function () {
        this.fN9E()
    };
    b7g.MC9t = function () {
        var C7v = 0;
        return function (dH9y, bLp3x) {
            if (!!C7v) window.clearTimeout(C7v);
            if (!dH9y) {
                a6g.y7r(this.bjG6A, "f-vhide");
                this.bLo3x = !1;
                return
            }
            this.bjG6A.innerHTML = '<i class="u-icn u-icn-25"></i>' + dH9y;
            a6g.x7q(this.bjG6A, "f-vhide");
            this.bLo3x = !0;
            if (k7d.gG0x(bLp3x)) C7v = window.setTimeout(function () {
                this.MC9t(null, null);
                bLp3x()
            }.g7b(this), 1e3)
        }
    }();
    b7g.bLn3x = function () {
        if (this.bLo3x) return !1;
        if (l7e.jL0x(this.MJ9A.value)) {
            this.MC9t("歌单名不能为空");
            return !1
        }
        return !0
    };
    b7g.fS9J = function () {
        return this.MJ9A.value
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        m7f = c7f("nm.l"),
        w7p = c7f("nm.w"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    m7f.bes5x = NEJ.C();
    b7g = m7f.bes5x.O7H(m7f.en9e);
    K7D = m7f.bes5x.cs8k;
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var i7b = a6g.H7A(this.n7g, "j-flag");
        this.bdJ5O = {
            inputer: i7b[0],
            tipper: i7b[1]
        };
        this.iE0x = {
            onerror: this.bLm3x.g7b(this),
            onitemadd: this.bLm3x.g7b(this)
        };
        this.lG1x = i7b[2];
        h7a.s7l(i7b[2], "click", this.FK7D.g7b(this));
        h7a.s7l(i7b[3], "click", this.BH6B.g7b(this));
        h7a.s7l(this.n7g, "keypress", this.bLl3x.g7b(this))
    };
    b7g.ce8W = function () {
        this.cd8V = "m-wgt-create"
    };
    b7g.bl7e = function (e7d) {
        e7d.clazz = " m-layer-w2";
        e7d.parent = e7d.parent || document.body;
        e7d.title = "新建歌单";
        e7d.draggable = !0;
        e7d.destroyalbe = !0;
        e7d.mask = true;
        this.bm7f(e7d);
        this.bdJ5O.inputer.value = e7d.name || "";
        this.va4e = w7p.bew5B.A7t(this.bdJ5O);
        this.va4e.ceh9Y();
        this.S7L = q7j.ig0x.A7t(this.iE0x);
        setTimeout(function () {
            this.bdJ5O.inputer.focus()
        }.g7b(this), 0)
    };
    b7g.bD8v = function () {
        this.bG8y();
        if (this.va4e) {
            this.va4e.T7M();
            delete this.va4e
        }
        this.tt3x(!1);
        this.bdJ5O.inputer.value = ""
    };
    b7g.tt3x = function (NP0x) {
        this.oN2x = NP0x;
        if (NP0x) {
            this.lG1x.innerHTML = "<i>新建中...</i>";
            a6g.y7r(this.lG1x, "u-btn2-dis")
        } else {
            this.lG1x.innerHTML = "<i>新 建</i>";
            a6g.x7q(this.lG1x, "u-btn2-dis")
        }
    };
    b7g.FK7D = function () {
        if (this.oN2x || !this.va4e.bLn3x()) return;
        var cq8i = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.va4e.fS9J()
            },
            offset: 1
        };
        this.S7L.jw0x(cq8i);
        this.tt3x(!0)
    };
    b7g.bLm3x = function (d7e) {
        var cm8e = (d7e.result || bb7U).code;
        if (!cm8e) {
            this.z7s("onsuccess", d7e.data)
        } else {
            this.z7s("onerror", d7e)
        }
        this.bu8m()
    };
    b7g.BH6B = function () {
        this.bu8m()
    };
    b7g.bLl3x = function (d7e) {
        if (d7e.keyCode == 13) this.FK7D()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        m7f = c7f("nm.l"),
        b7g, K7D;
    m7f.bkg6a = NEJ.C();
    b7g = m7f.bkg6a.O7H(m7f.en9e);
    K7D = m7f.bkg6a.cs8k;
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var i7b = a6g.H7A(this.n7g, "j-flag");
        this.iC0x = {
            limit: 301,
            parent: i7b[1],
            cache: {
                klass: q7j.ig0x,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bkm6g.g7b(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l7e.Dc6W,
                escape: k7d.dG9x
            }
        };
        this.iE0x = {
            onsuccess: this.bdd4h.g7b(this),
            onerror: this.eI9z.g7b(this)
        };
        h7a.s7l(i7b[0], "click", this.FK7D.g7b(this));
        h7a.s7l(i7b[1], "click", this.lA1x.g7b(this))
    };
    b7g.ce8W = function () {
        this.cd8V = "m-wgt-subscribe"
    };
    b7g.bl7e = function (e7d) {
        e7d.parent = e7d.parent || document.body;
        e7d.clazz = " m-layer-w2";
        e7d.title = "添加到歌单";
        e7d.draggable = !0;
        e7d.mask = !0;
        this.bm7f(e7d);
        this.bdc4g = (e7d.tracks || []).reverse();
        this.iC0x.item.size = this.bdc4g.length;
        this.iE0x.name = e7d.name || "";
        this.bLk3x = q7j.xc4g.A7t({
            onaddsuccess: this.AL5Q.g7b(this)
        });
        this.sM3x = q7j.ig0x.A7t({
            onlistload: this.cea9R.g7b(this)
        });
        this.sM3x.bQk5p();
        k7d.bd7W(this.bdc4g, function (p7i, r7k, i7b) {
            if (!k7d.lw1x(p7i)) {
                i7b[r7k] = this.bLk3x.eH9y(p7i) || p7i
            }
        }, this)
    };
    b7g.cea9R = function () {
        if (this.dK9B) this.dK9B.T7M();
        this.dK9B = I7B.kx1x.A7t(this.iC0x)
    };
    b7g.FK7D = function () {
        this.bu8m();
        if (this.FX7Q) this.FX7Q.T7M();
        this.FX7Q = m7f.bes5x.A7t(this.iE0x);
        this.FX7Q.L7E()
    };
    b7g.lA1x = function () {
        var cdZ9Q = function (f7c) {
            while (f7c && f7c != document) {
                if (f7c.tagName.toLowerCase() == "li") {
                    return f7c
                }
                f7c = f7c.parentNode
            }
        };
        return function (d7e) {
            h7a.cp8h(d7e);
            var F7y = h7a.W7P(d7e),
                Mu9l = cdZ9Q(F7y);
            if (!!Mu9l && !a6g.bE8w(Mu9l, "dis")) {
                this.bdd4h({
                    id: a6g.t7m(Mu9l, "id")
                })
            }
        }
    }();
    b7g.bdd4h = function (d7e) {
        var C7v = d7e.id;
        if (!C7v || !this.bdc4g.length) return;
        this.bLk3x.jw0x({
            key: "track_playlist-" + C7v,
            data: {
                tracks: this.bdc4g,
                pid: C7v
            }
        });
        this.bu8m()
    };
    b7g.AL5Q = function () {
        this.z7s("onsuccess");
        m7f.Z7S.L7E({
            tip: "收藏成功"
        })
    };
    b7g.eI9z = function (d7e) {
        this.bu8m();
        this.z7s("onerror", d7e);
        var cV8N = "收藏失败";
        switch (d7e.code) {
        case 405:
            cV8N = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cV8N = "歌单数量超过限制";
            break;
        case 502:
            cV8N = "歌曲已经存在"
        }
        m7f.Z7S.L7E({
            tip: cV8N,
            type: 2
        })
    };
    b7g.bkm6g = function () {
        this.bu8m();
        m7f.Z7S.L7E({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l7e.mq1x = function (e7d) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        m7f.bkg6a.L7E(e7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        dv8n = c7f("nej.p"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x");
    var bky6s, pg2x, Y7R = decodeURIComponent(location.href),
        jY1x = /.+(https?:\/\/.+\/proxy.html)/.test(Y7R) ? RegExp.$1 : "";
    if (!!jY1x) {
        v7o.uW4a("mail_proxy_url", jY1x)
    } else {
        jY1x = v7o.sw3x("mail_proxy_url") || "about:blank"
    }
    bky6s = a6g.bdk4o({
        src: jY1x,
        onload: function () {
            pg2x = true
        }
    });
    var bLj3x = function () {
        v7o.gy0x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cdX9O = function () {
        if (dv8n.ds8k.browser == "ie" && parseInt(dv8n.ds8k.version) < 9) {
            l7e.fq9h({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l7e.Mr9i = function (u7n, C7v, U7N) {
        if (!cdX9O()) return;
        bLj3x();
        if (U7N == "stop") {
            if (!pg2x) throw "proxy not loaded";
            bLj3x();
            bky6s.contentWindow.location.replace(jY1x + "#" + k7d.cE8w({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bky6s.contentWindow.location.replace(jY1x + "#" + k7d.cE8w({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u7n,
                    id: C7v,
                    s: +(new Date),
                    action: U7N
                })
            }))
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x"),
        m7f = c7f("nm.l"),
        q7j = c7f("nm.d");
    var kI1x = q7j.likes_id.A7t();
    var oP2x = q7j.xc4g.A7t({
        onlistload: cdU9L,
        onitemload: cdT9K,
        onerror: eI9z
    });
    var Gf7Y = q7j.qk2x.A7t({
        onlistload: cdS9J,
        onitemload: cdR9I,
        onerror: eI9z
    });
    var bLg3x = {};

    function wu4y(d7e) {
        var f7c = h7a.W7P(d7e, "d:resAction"),
            U7N = a6g.t7m(f7c, "resAction");
        if (f7c && (U7N == "play" || U7N == "addto")) {
            var u7n = parseInt(a6g.t7m(f7c, "resType"));
            bLf3x({
                action: U7N,
                type: u7n,
                id: a6g.t7m(f7c, "resId"),
                from: a6g.t7m(f7c, "resFrom"),
                data: a6g.t7m(f7c, "resData"),
                order: a6g.t7m(f7c, "resOrder"),
                node: f7c
            });
            if (u7n != 13) bLe3x(f7c)
        }
    }

    function bLf3x(bS8K) {
        var U7N = bS8K.action,
            u7n = bS8K.type,
            C7v = bS8K.id,
            ea9R = bS8K.from,
            j7c = bS8K.data,
            tb3x = bS8K.order,
            e7d = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: C7v
                },
                ext: {
                    id: C7v,
                    action: U7N,
                    type: u7n,
                    from: ea9R,
                    data: j7c,
                    node: bS8K.node
                }
            };
        if (U7N != "play" && U7N != "addto" || !u7n) return;
        if (window.GRef && GRef == "mail") {
            l7e.Mr9i(u7n, C7v, U7N);
            return
        }
        switch (u7n) {
        case 13:
            e7d.key = "track_playlist-" + C7v;
            oP2x.lK1x(e7d);
            break;
        case 17:
            e7d.key = "program";
            e7d.id = C7v;
            Gf7Y.VU2x(e7d);
            if (U7N == "play") {
                v7o.bn7g("/api/dj/program/listen", {
                    query: {
                        id: C7v
                    }
                })
            }
            break;
        case 18:
            e7d.key = "track";
            e7d.id = C7v;
            oP2x.VU2x(e7d);
            break;
        case 19:
            e7d.key = "track_album-" + C7v;
            oP2x.lK1x(e7d);
            break;
        case 24:
            e7d.key = "track_day";
            oP2x.lK1x(e7d);
            break;
        case 2:
            e7d.key = "track_artist_top-" + C7v;
            oP2x.lK1x(e7d);
            break;
        case 70:
            e7d.key = "program_djradio-" + C7v + "-" + tb3x;
            e7d.data.radioId = C7v;
            e7d.data.asc = tb3x == 2;
            Gf7Y.lK1x(e7d);
            break
        }
    }

    function bLd3x(i7b) {
        var o7h = [];
        k7d.bd7W(i7b, function (p7i) {
            if (p7i.mainSong) {
                p7i.mainSong.program = p7i;
                o7h.push(p7i.mainSong);
                p7i.localupdatetime = +(new Date);
                oP2x.ctF2x(p7i.mainSong);
                p7i.mainTrackId = p7i.mainSong.id;
                delete p7i.mainSong
            } else {
                var bLc3x = oP2x.eH9y(p7i.mainTrackId);
                bLc3x && o7h.push(bLc3x)
            }
        });
        return o7h
    }

    function bcz4D(i7b, e7d) {
        var rt3x = e7d.action == "play" && e7d.type != 17 && e7d.type != 18,
            fV9M = e7d.action == "play";
        if (!i7b.length) return;
        if (e7d.type == 19) {
            i7b = l7e.Kg8Y(i7b, true, {
                play: true
            }, {
                source: "album",
                sourceid: e7d.id
            })
        } else {
            i7b = l7e.Kg8Y(i7b, true, {
                play: true
            })
        }
        k7d.bd7W(i7b, function (p7i) {
            p7i.source = l7e.bvg0x({
                fid: e7d.from,
                fdata: e7d.data,
                type: e7d.type,
                rid: e7d.id
            }, p7i.id)
        });
        top.player.addTo(i7b, rt3x, fV9M);
        kI1x.UX2x({
            rid: e7d.id,
            type: e7d.type,
            hash: l7e.KN8F(),
            play: fV9M,
            source: e7d.from,
            sourceid: e7d.data
        })
    }

    function cdU9L(d7e) {
        var eu9l = d7e.ext || {};
        i7b = oP2x.hD0x(d7e.key);
        bcz4D(i7b, eu9l);
        if (eu9l.type == 13 && eu9l.action == "play" && i7b && i7b.length > 0) {
            bLe3x(eu9l.node);
            v7o.bn7g("/api/playlist/update/playcount", {
                query: {
                    id: eu9l.id
                }
            })
        }
    }

    function cdT9K(d7e) {
        var i7b = [oP2x.eH9y(d7e.id)],
            bj7c = i7b[0],
            rd3x = l7e.pB2x(bj7c),
            ta3x = bj7c.privilege || {};
        if (rd3x == 10) {
            l7e.tW3x(ta3x.fee || bj7c.fee, bj7c.id, "song", null, ta3x)
        } else if (rd3x == 100) {
            l7e.ir0x(null, null, null, true, bj7c)
        } else if (rd3x == 11) {
            l7e.bRd6X(bj7c.id, 18)
        } else {
            bcz4D(i7b, d7e.ext)
        }
    }

    function cdS9J(d7e) {
        var i7b = bLd3x(Gf7Y.hD0x(d7e.key));
        bcz4D(i7b, d7e.ext)
    }

    function cdR9I(d7e) {
        var i7b = bLd3x([Gf7Y.eH9y(d7e.id)]);
        bcz4D(i7b, d7e.ext)
    }

    function eI9z() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bLe3x(f7c) {
        var u7n = a6g.t7m(f7c, "resType"),
            C7v = a6g.t7m(f7c, "resId"),
            J7C = u7n + "-" + C7v;
        if (bLg3x[J7C]) return;
        var bLb3x = a6g.B7u("play-count"),
            bkZ7S = a6g.H7A(f7c.parentNode, "nb"),
            OE0x = null;
        if (bLb3x) {
            OE0x = bLb3x
        } else {
            OE0x = !!bkZ7S && !!bkZ7S[0] ? bkZ7S[0] : null
        } if (OE0x) {
            var cF8x = OE0x.innerHTML;
            if (/^\d+$/.test(cF8x)) {
                OE0x.innerText = +cF8x + 1
            }
            bLg3x[J7C] = true
        }
    }
    l7e.cdK8C = function (f7c) {
        h7a.s7l(f7c || document.body, "click", wu4y.g7b(this))
    };
    l7e.cdJ8B = function (U7N, u7n, C7v) {
        bLf3x({
            action: U7N,
            type: u7n,
            id: C7v
        })
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    q7j.fe9V({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function (o7h, e7d) {
                this.cdI8A(o7h, e7d)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function (o7h, e7d) {
                this.z7s("onshareall", e7d.result)
            }, onerror: function (o7h, e7d) {
                this.z7s("onshareall", e7d.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function (o7h, e7d) {
                e7d.options.picUrl = o7h.picUrl;
                this.bLa3x(e7d.options, e7d.result)
            }, onerror: function (o7h, e7d) {
                this.z7s("onshareall", e7d.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function (Q7J, e7d) {
                this.qb2x("vid_info-" + e7d.data.nosKey, Q7J);
                return Q7J
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function (e7d) {}, format: function (o7h, e7d) {
                e7d.data = e7d.data2;
                this.co8g("share-all", e7d)
            }, onerror: "onshareerror"
        }
    });
    q7j.blg7Z = NEJ.C();
    b7g = q7j.blg7Z.O7H(q7j.hG0x);
    b7g.cdG8y = function () {
        var ur4v = function (Q7J, e7d) {
            e7d.times++;
            if (e7d.times > 10) {
                this.z7s("onvinfoerror", e7d.key, Q7J)
            } else {
                setTimeout(et9k.g7b(this, e7d), e7d.times * 1e3)
            }
        };
        var yH5M = function (Q7J, e7d) {
            this.z7s("onvinfo", e7d.key, Q7J)
        };
        var et9k = function (e7d) {
            var Y7R = e7d.url;
            v7o.bn7g(Y7R + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: yH5M.ew9n(this, e7d),
                onerror: ur4v.ew9n(this, e7d)
            })
        };
        return function (e7d) {
            e7d.times = 0;
            et9k.call(this, e7d)
        }
    }();
    b7g.cFz5E = function () {
        var GA7t;
        var ur4v = function (Q7J, e7d) {
            if (Q7J.code > 0) {
                clearInterval(this.GB7u);
                this.z7s("onviderror", e7d.data.nosKey)
            }
        };
        var yH5M = function (J7C, Q7J) {
            if (Q7J.vid && Q7J.covers) {
                clearInterval(this.GB7u);
                this.z7s("onvid", J7C, Q7J)
            }
        };
        var et9k = function (e7d) {
            if (+(new Date) - GA7t > 60 * 60 * 1e3) {
                clearInterval(this.GB7u);
                this.z7s("onviderror", e7d.data.nosKey);
                return
            }
            e7d.onload = yH5M.g7b(this, e7d.data.nosKey);
            e7d.onerror = ur4v.g7b(this);
            this.co8g("vid-get", e7d)
        };
        return function (e7d) {
            if (!e7d || !e7d.data) return;
            GA7t = +(new Date);
            this.GB7u = clearInterval(this.GB7u);
            this.GB7u = setInterval(et9k.g7b(this, e7d), 1e4);
            et9k.apply(this, arguments)
        }
    }();
    b7g.cdE8w = function () {
        this.GB7u = clearInterval(this.GB7u)
    };
    b7g.cdI8A = function (o7h, oe2x) {
        if (o7h.event && oe2x.snsTypes) {
            if (oe2x.pics) {
                var bKY3x = [];
                for (var i = 0, len = oe2x.pics.length; i < len; i++) {
                    bKY3x[i] = oe2x.pics[i].originId
                }
                this.co8g("share_img_compound", {
                    data: {
                        picIds: bKY3x.join(",")
                    },
                    options: oe2x,
                    result: o7h
                })
            } else {
                oe2x.picUrl = oe2x.picUrl;
                this.bLa3x(oe2x, o7h)
            }
        } else {
            this.z7s("onshareall", o7h)
        }
        var tX3x = q7j.likes_id.A7t();
        tX3x.fu9l(oe2x.isPub ? "pubevent" : "shareevent", {
            id: o7h.id
        })
    };
    b7g.bLa3x = function (oe2x, o7h) {
        var cq8i = {},
            d7e = o7h.event || {};
        cq8i.eventid = d7e.id;
        cq8i.eventtype = d7e.type;
        oe2x.picUrl && (cq8i.picUrl = oe2x.picUrl);
        cq8i.snsTypes = oe2x.snsTypes;
        cq8i.msg = oe2x.data.msg || "";
        cq8i.type = oe2x.data.type;
        oe2x.data.id && (cq8i.id = oe2x.data.id);
        if (cq8i.eventtype == 41) {
            var Q7J = l7e.EH7A(d7e.json);
            cq8i.eventtype = 39;
            if (cq8i.msg) {
                cq8i.msg += "  "
            }
            cq8i.msg += "分享" + Q7J.video.creator.nickname + "的视频《" + Q7J.video.title + "》";
            delete cq8i.id
        }
        this.co8g("share-sns", {
            data: cq8i,
            result: o7h
        })
    };
    b7g.cdC8u = function (e7d) {
        var j7c = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k7d.oh2x(5)
        };
        j7c = NEJ.EX(j7c, e7d);
        if (j7c.id < 0) {
            delete j7c.id;
            j7c.type = "noresource"
        }
        if (!j7c.threadId) {
            delete j7c.threadId
        }
        if (!j7c.actId) {
            delete j7c.actId
        }
        if (!j7c.pics) {
            delete j7c.pics
        } else {
            j7c.pics = JSON.stringify(j7c.pics)
        }
        this.co8g("share-all", {
            data: j7c,
            snsTypes: e7d.snsTypes,
            picUrl: e7d.picUrl,
            pics: e7d.pics,
            isPub: e7d.isPub
        })
    };
    b7g.cdB8t = function (e7d) {
        this.co8g("share-private", e7d)
    };
    b7g.cdA8s = function (e7d) {
        this.co8g("video-submit", e7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    var cdy8q = {
        40: !0
    };
    q7j.fe9V({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function (e7d) {
                e7d.data.getcounts = true;
                e7d.data.pagesize = e7d.data.limit;
                if (e7d.data.offset == 0) {
                    e7d.data.lasttime = -1
                }
                delete e7d.data.offset
            }, format: function (Q7J, e7d) {
                Q7J.event = l7e.YY3x(Q7J.event, function (p7i, r7k) {
                    return !cdy8q[p7i.type]
                });
                this.cdx8p(Q7J.event);
                e7d.data.lasttime = Q7J.lasttime;
                if (Q7J.event.length) {
                    Q7J.event.length = e7d.limit
                }
                return {
                    list: Q7J.event,
                    total: Q7J.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function (Q7J, e7d) {
                return {
                    list: Q7J.events,
                    total: Q7J.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function (e7d) {
                e7d.data.pagesize = 20
            }, format: function (Q7J, e7d) {
                return Q7J.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function (e7d) {
                if (e7d.data.offset == 0) {
                    e7d.data.time = -1
                }
                delete e7d.data.offset;
                e7d.data.getcounts = true
            }, format: function (Q7J, e7d) {
                e7d.data.time = Q7J.lasttime;
                var i7b = Q7J.events;
                if (Q7J.more && i7b.length < e7d.data.limit) {
                    i7b = this.Me9V(i7b, e7d.data.limit)
                }
                return {
                    list: i7b,
                    total: Q7J.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function (o7h, e7d) {
                o7h.conf = e7d.conf;
                return o7h
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function (e7d, bg7Z) {
                if (e7d.like) {
                    if (e7d.comment) {
                        bg7Z.url = "/api/v1/comment/like"
                    } else {
                        bg7Z.url = "/api/resource/like"
                    }
                    bg7Z.onload = "oneventlike";
                    bg7Z.onerror = "oneventlikeerr"
                } else {
                    if (e7d.comment) {
                        bg7Z.url = "/api/v1/comment/unlike"
                    } else {
                        bg7Z.url = "/api/resource/unlike"
                    }
                    bg7Z.onload = "oneventunlike";
                    bg7Z.onerror = "oneventunlikeerr"
                }
            }, format: function (o7h, e7d) {
                o7h.eid = e7d.eid;
                o7h.origin = e7d.origin;
                o7h.ext = e7d.ext;
                return o7h
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function (o7h, e7d) {
                o7h.id = e7d.data.id;
                return o7h
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function (e7d, bg7Z) {
                if (e7d.data.type == "nointer") {
                    bg7Z.url = "/api/event/rcmd/reject"
                } else if (e7d.data.transcoding) {
                    bg7Z.url = "/api/event/video/transcoding/delete"
                } else {
                    bg7Z.url = "/api/event/delete"
                }
            }, format: function (o7h, e7d) {
                o7h.id = e7d.data.id;
                return o7h
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function (o7h, e7d) {
                o7h.id = e7d.data.id;
                return o7h
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function (e7d) {
                e7d.data.lasttime = e7d.data.lasttime || -1;
                e7d.data.pagesize = e7d.data.limit;
                e7d.data.getcounts = true;
                delete e7d.data.offset
            }, format: function (Q7J, e7d) {
                e7d.data.lasttime = Q7J.lasttime;
                var i7b = Q7J.events;
                if (Q7J.more) i7b = this.Me9V(i7b, e7d.data.pagesize);
                return {
                    list: i7b,
                    total: Q7J.size
                }
            }, onerror: "onlisterror"
        }
    });
    q7j.yN5S = NEJ.C();
    b7g = q7j.yN5S.O7H(q7j.hG0x);
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.blD7w = function (u7n, cT8L) {
        return u7n + "-" + cT8L
    };
    b7g.cFE5J = function (e7d) {
        this.co8g("ievent-get", e7d)
    };
    b7g.cFF5K = function (e7d) {
        this.co8g("ievent-new-get", e7d)
    };
    b7g.cIp5u = function (e7d) {
        this.co8g("ievent-user-get", e7d)
    };
    b7g.cFI5N = function (u7n, cT8L) {
        return this.sh3x(this.blD7w(u7n, cT8L))
    };
    b7g.cFJ5O = function (LZ9Q, e7d) {
        if (!LZ9Q || !LZ9Q.length) return;
        e7d = e7d || {};
        var bz8r = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, Fj7c = [], bKS3x = [], j7c; i < LZ9Q.length; ++i) {
            j7c = LZ9Q[i];
            j7c = this.sh3x(this.blD7w(j7c.type, j7c.id));
            if (!j7c) {
                Fj7c.push(LZ9Q[i].id);
                bKS3x.push(bz8r[LZ9Q[i].type] || 0)
            }
        }
        if (!Fj7c.length) {
            this.z7s("oneventresload", e7d.conf);
            return
        }
        e7d.data = {
            ids: JSON.stringify(Fj7c),
            types: JSON.stringify(bKS3x)
        };
        e7d.onload = this.cdl8d.g7b(this);
        this.co8g("ievent-res-get", e7d)
    };
    b7g.cdl8d = function (o7h) {
        if (o7h.code != 200) {
            this.z7s("oneventreserror", o7h.code);
            return
        }
        var bz8r = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i7b = o7h.results; i < i7b.length; ++i) {
            this.qb2x(this.blD7w(bz8r[i7b[i].type], i7b[i].id), i7b[i])
        }
        this.z7s("oneventresload", o7h.conf)
    };
    b7g.bKR3x = function (j7c) {
        var J7C = "event-list";
        this.brp9g(J7C, j7c);
        this.z7s("onitemadd", {
            key: J7C,
            action: "add",
            data: j7c,
            flag: -1
        })
    };
    b7g.pf2x = function (e7d) {
        this.co8g("ievent-like", e7d)
    };
    b7g.my1x = function (e7d) {
        this.co8g("ievent-delete", e7d)
    };
    b7g.Me9V = function (i7b, gc9T) {
        for (var i = i7b.length; i < gc9T; i++) i7b.push(null);
        return i7b
    };
    b7g.cdx8p = function (i7b) {
        var o7h = [];
        if (!i7b || !i7b.length) return;
        k7d.bd7W(i7b, function (d7e) {
            d7e.biData = this.bKQ3x(d7e)
        }, this)
    };
    b7g.bKQ3x = function () {
        var bbe4i = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            cdf8X = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d7e) {
            var Q7J = {
                id: d7e.id,
                sourceid: d7e.user.userId,
                alg: d7e.rcmdInfo ? d7e.rcmdInfo.alg : null,
                contentType: bbe4i[d7e.type] || (k7d.di8a(cdf8X, d7e.type) != -1 ? "user_event" : "other")
            };
            return Q7J
        }
    }();
    b7g.GV7O = function (cdc8U, d7e) {
        var Q7J = this.bKQ3x(d7e);
        Q7J.actionType = cdc8U;
        if (window.log) log("eventclick", Q7J)
    };
    b7g.cFL5Q = function (e7d) {
        this.co8g("event_latest-list", e7d)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
            return a + b & 4294967295
        },
        hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "",
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.sg3x += contents;
        this.bq7j += contents.length;
        var length = this.sg3x.length,
            i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dO9F, md5blk(this.sg3x.substring(i - 64, i)))
        }
        this.sg3x = this.sg3x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.sg3x,
            length = buff.length,
            i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oF2x(tail, length);
        ret = hex(this.dO9F);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.sg3x = "";
        this.bq7j = 0;
        this.dO9F = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {
            buff: this.sg3x,
            length: this.bq7j,
            hash: this.dO9F
        }
    };
    SparkMD5.prototype.setState = function (state) {
        this.sg3x = state.buff;
        this.bq7j = state.length;
        this.dO9F = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dO9F;
        delete this.sg3x;
        delete this.bq7j
    };
    SparkMD5.prototype.oF2x = function (tail, length) {
        var i = length,
            tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dO9F, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq7j * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dO9F, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.sg3x.buffer, arr, true),
            length = buff.length,
            i;
        this.bq7j += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dO9F, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.sg3x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.sg3x,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oF2x(tail, length);
        ret = hex(this.dO9F);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.sg3x = new Uint8Array(0);
        this.bq7j = 0;
        this.dO9F = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.oF2x = SparkMD5.prototype.oF2x;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        em9d = c7f("nej.g"),
        k7d = c7f("nej.u"),
        fH9y = c7f("nej.n"),
        I7B = c7f("nej.ut"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        jx0x = c7f("nm.x.nos"),
        w7p = c7f("nm.w");
    var ccZ8R = 1024 * 256,
        ccV8N = 1024 * 1024 * 2,
        qM3x = {
            TOKEN_ERROR: -100,
            DNS_ERROR: -101
        },
        bKJ3x = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bs8k,
        rj3x = {
            MD5_DONE: .2,
            TOKEN_GET: .22,
            DNS_GET: .24,
            UPLOADED: 1
        },
        jH0x = {
            AUDIO: "audio",
            IMAGE: "image",
            TXT: "txt",
            RAR: "rar",
            OTHER: "other",
            VIDEO: "video"
        };
    var of2x = {};
    var tX3x = q7j.likes_id.A7t();
    jx0x.cFM5R = function () {
        return jH0x
    };
    var ccL8D = function () {
        return k7d.oh2x(6) + +(new Date)
    };
    var LS9J = function (iH0x, e7d) {
        if (!of2x[e7d.taskId]) {
            return
        }(e7d.onuploading || bs8k).call(this, iH0x)
    };
    var bmN7G = function (R7K) {
        var ccK8C = R7K.md5,
            cU8M = R7K.file,
            ccJ8B = ccK8C + cU8M.size;
        return "nos_file_hash_" + ccJ8B
    };
    var ccI8A = function (R7K) {
        var J7C = bmN7G(R7K),
            j7c = v7o.bRU6O(J7C, "{}");
        try {
            j7c = JSON.parse(j7c)
        } catch (e) {
            j7c = {}
        }
        return j7c
    };
    var ccF8x = function (R7K, e7d) {
        if (!R7K.md5) {
            return
        }
        var J7C = bmN7G(R7K),
            j7c = v7o.bRU6O(J7C, "{}");
        try {
            j7c = JSON.parse(j7c)
        } catch (e) {
            j7c = {}
        }
        NEJ.X(j7c, e7d);
        v7o.uW4a(J7C, JSON.stringify(j7c))
    };
    var ccD8v = function (R7K) {
        var J7C = bmN7G(R7K);
        v7o.JV8N(J7C)
    };
    var ccC8u = function (R7K, fp9g) {
        var Y7R = R7K.urls[Math.min(R7K.urlIndex, R7K.urls.length - 1)],
            cU8M = R7K.file,
            lo1x = R7K.bucket,
            mO1x = R7K.objectKey,
            eL9C = R7K.token,
            bJ8B = R7K.context,
            ph2x = {},
            PV1x = bKJ3x.call(cU8M, R7K.beg, R7K.end),
            bv8n = {
                offset: R7K.beg,
                complete: R7K.lastChunk || false,
                version: "1.0"
            };
        if (bJ8B) {
            bv8n.context = bJ8B
        }
        ph2x["x-nos-token"] = eL9C;
        ph2x[em9d.yg5l] = cU8M.type;
        R7K.reqId = v7o.bn7g(Y7R + "/" + lo1x + "/" + mO1x, {
            type: "json",
            method: "POST",
            headers: ph2x,
            query: bv8n,
            data: PV1x,
            onload: fp9g.onload,
            onerror: fp9g.onerror
        })
    };
    var ccz8r = function (o7h, R7K, e7d) {
        o7h = {
            code: 200,
            fileName: e7d.file.name,
            size: e7d.file.size,
            type: e7d.file.type,
            bucket: R7K.bucket,
            docId: R7K.docId,
            objectKey: R7K.objectKey,
            url: "//nos.netease.com/" + R7K.bucket + "/" + R7K.objectKey
        };
        ccD8v(R7K);
        if (!of2x[e7d.taskId]) {
            return
        }
        delete of2x[e7d.taskId];
        tX3x.fu9l("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(o7h)
        });
        (e7d.onsuccess || bs8k).call(this, o7h)
    };
    var ccy8q = function (o7h, e7d) {
        (e7d.onerror || bs8k).call(this, o7h)
    };
    var ccu8m = function (o7h, R7K, e7d) {
        R7K.context = o7h.context;
        R7K.beg = o7h.offset;
        var iH0x = R7K.beg / R7K.file.size;
        ccF8x(R7K, {
            bucket: R7K.bucket,
            objectKey: R7K.objectKey,
            token: R7K.token,
            context: R7K.context,
            beg: R7K.beg,
            updateTime: +(new Date)
        });
        iH0x = rj3x.DNS_GET + (rj3x.UPLOADED - rj3x.DNS_GET) * iH0x;
        LS9J(iH0x, e7d);
        if (R7K.lastChunk) {
            ccz8r(o7h, R7K, e7d)
        } else {
            baJ4N(R7K, e7d)
        }
    };
    var ccr8j = function (o7h, R7K, e7d) {
        tX3x.fu9l("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o7h.data,
            body: o7h.extData,
            ext: JSON.stringify(R7K),
            timging: +(new Date) - R7K.chuckUploadStartTime
        });
        if (R7K.urlIndex < Math.max(R7K.urls.length - 1, 5)) {
            R7K.urlIndex++;
            baJ4N(R7K, e7d)
        } else {
            ccy8q(o7h, e7d)
        }
    };
    var baJ4N = function (R7K, e7d) {
        if (!R7K || R7K.step == -1) {
            return
        }
        R7K.end = R7K.beg + ccZ8R;
        if (R7K.end >= R7K.file.size) {
            R7K.end = R7K.file.size;
            R7K.lastChunk = true
        }
        R7K.chuckUploadStartTime = +(new Date);
        ccC8u(R7K, {
            onload: ccu8m.ew9n(this, R7K, e7d),
            onerror: ccr8j.ew9n(this, R7K, e7d)
        })
    };
    var ccq8i = function (o7h, R7K, e7d) {
        R7K.beg = o7h.offset;
        var iH0x = R7K.beg / R7K.file.size;
        iH0x = rj3x.DNS_GET + (rj3x.UPLOADED - rj3x.DNS_GET) * iH0x;
        LS9J(iH0x, e7d);
        baJ4N(R7K, e7d)
    };
    var ccp8h = function (o7h, R7K, e7d) {
        R7K.beg = 0;
        delete R7K.context;
        bnl7e(R7K, e7d)
    };
    var bKC3x = function (Qf1x, R7K, e7d) {
        R7K.lastChunk = false;
        R7K.urls = Qf1x;
        R7K.urlIndex = 0;
        LS9J(rj3x.DNS_GET, e7d);
        if (R7K.fromExist) {
            delete R7K.fromExist;
            var Y7R = R7K.urls[Math.min(R7K.urlIndex, R7K.urls.length - 1)],
                lo1x = R7K.bucket,
                mO1x = R7K.objectKey,
                eL9C = R7K.token,
                bJ8B = R7K.context,
                ph2x = {},
                bv8n = {
                    context: bJ8B,
                    version: "1.0"
                };
            ph2x["x-nos-token"] = eL9C;
            R7K.reqId = v7o.bn7g(Y7R + "/" + lo1x + "/" + mO1x + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: ph2x,
                query: bv8n,
                onload: ccq8i.ew9n(this, R7K, e7d),
                onerror: ccp8h.ew9n(this, R7K, e7d)
            })
        } else {
            R7K.beg = 0;
            baJ4N(R7K, e7d)
        }
    };
    var cck8c = function (o7h, R7K, e7d) {
        o7h.code = qM3x.DNS_ERROR;
        (e7d.onerror || bs8k).call(this, o7h)
    };
    var bKz3x = function (j7c, e7d) {
        var o7h = j7c.result || {},
            lo1x = o7h.bucket,
            mO1x = o7h.objectKey,
            eL9C = o7h.token,
            R7K = of2x[e7d.taskId];
        if (!lo1x || !mO1x || !eL9C || !R7K) {
            o7h.code = qM3x.TOKEN_ERROR;
            (e7d.onerror || bs8k).call(this, o7h);
            return
        }
        R7K.bucket = lo1x;
        R7K.objectKey = mO1x;
        R7K.docId = o7h.docId;
        R7K.token = eL9C;
        LS9J(rj3x.TOKEN_GET, e7d);
        if (location.protocol == "https:") {
            bKC3x(["//nosup-hz1.127.net"], R7K, e7d)
        } else {
            R7K.reqId = jx0x.cci8a({
                bucket: lo1x,
                onload: bKC3x.ew9n(this, R7K, e7d),
                onerror: cck8c.ew9n(this, R7K, e7d)
            })
        }
        R7K.step = 1
    };
    var cch8Z = function (o7h, e7d) {
        o7h.code = qM3x.TOKEN_ERROR;
        (e7d.onerror || bs8k).call(this, o7h)
    };
    var bnl7e = function (R7K, e7d) {
        var cU8M = e7d.file,
            ft9k = cU8M.name || "",
            eu9l = ft9k.split(".").pop();
        jx0x.bak4o(NEJ.X({
            filename: ft9k,
            ext: eu9l,
            onload: bKz3x.ew9n(this, e7d),
            onerror: cch8Z.ew9n(this, e7d)
        }, e7d, function (p7i) {
            return k7d.gG0x(p7i) || k7d.lw1x(p7i)
        }))
    };
    var ccf8X = function (R7K, e7d) {
        if (!R7K || R7K.step == -1) {
            return
        }
        R7K.md5 = R7K.spark.end();
        var LD9u = ccI8A(R7K) || {},
            lo1x = LD9u.bucket,
            mO1x = LD9u.objectKey,
            eL9C = LD9u.token;
        if (!lo1x || !mO1x || !eL9C) {
            bnl7e(R7K, e7d)
        } else {
            R7K.context = LD9u.context;
            R7K.beg = LD9u.beg;
            R7K.fromExist = true;
            bKz3x({
                result: LD9u
            }, e7d)
        }
    };
    var cce8W = function (Dn6h, R7K, e7d) {
        if (!R7K || R7K.step == -1) {
            return
        }
        R7K.beg = R7K.end;
        var iH0x = R7K.beg / R7K.file.size;
        iH0x = 0 + rj3x.MD5_DONE * iH0x;
        LS9J(iH0x, e7d);
        R7K.spark.append(Dn6h.result);
        if (R7K.lastChunk) {
            ccf8X(R7K, e7d)
        } else {
            bKx3x(R7K, e7d)
        }
    };
    var ccc8U = function (o7h, R7K, e7d) {
        R7K.md5 = "";
        bnl7e(R7K, e7d)
    };
    var bKx3x = function (R7K, e7d) {
        if (!R7K || R7K.step == -1) {
            return
        }
        R7K.end = R7K.beg + ccV8N;
        if (R7K.end >= R7K.file.size) {
            R7K.end = R7K.file.size;
            R7K.lastChunk = true
        }
        var Dn6h = new FileReader;
        Dn6h.onload = cce8W.g7b(this, Dn6h, R7K, e7d);
        Dn6h.onerror = ccc8U.g7b(this, Dn6h, R7K, e7d);
        Dn6h.readAsArrayBuffer(bKJ3x.call(R7K.file, R7K.beg, R7K.end))
    };
    jx0x.gQ0x = function (e7d) {
        var cU8M = e7d.file,
            ft9k = cU8M.name || "",
            eu9l = ft9k.split(".").pop(),
            Dp6j = ccL8D();
        e7d.taskId = Dp6j;
        of2x[Dp6j] = {
            step: 0
        };
        LS9J(0, e7d);
        var R7K = of2x[Dp6j];
        R7K.id = Dp6j;
        R7K.file = cU8M;
        R7K.beg = 0;
        R7K.lastChunk = false;
        R7K.spark = new SparkMD5.ArrayBuffer;
        var ccb8T = e7d.onerror || bs8k;
        e7d.onerror = function () {
            if (!of2x[Dp6j]) {
                return
            }
            delete of2x[Dp6j];
            ccb8T.apply(this, arguments)
        };
        tX3x.fu9l("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bKx3x(R7K, e7d);
        return Dp6j
    };
    jx0x.ks1x = function (C7v) {
        var R7K = of2x[C7v];
        if (R7K) {
            if (R7K.step == 0) {
                delete of2x[C7v]
            } else {
                R7K.step = -1;
                if (R7K.reqId) {
                    v7o.ks1x(R7K.reqId)
                }
                delete of2x[C7v]
            }
        }
    };
    jx0x.bak4o = function () {
        var yB5G = function (o7h, e7d) {
            (e7d.onload || bs8k).call(this, o7h)
        };
        var AE5J = function (o7h, e7d) {
            (e7d.onerror || bs8k).call(this, o7h)
        };
        var bKw3x = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function (e7d) {
            var bah4l = e7d.returnBody || bKw3x;
            if (k7d.lw1x(bah4l)) {
                try {
                    JSON.stringify(bah4l)
                } catch (e) {
                    bah4l = bKw3x
                }
            }
            return v7o.bn7g("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e7d.filename || "",
                    ext: e7d.ext || "",
                    type: e7d.type || jH0x.OTHER,
                    bucket: e7d.bucket || "",
                    local: e7d.local || false,
                    nos_product: e7d.nosProduct || 0,
                    return_body: bah4l
                },
                onload: yB5G.ew9n(this, e7d),
                onerror: AE5J.ew9n(this, e7d)
            })
        }
    }();
    jx0x.cci8a = function () {
        var cbZ8R = "//wanproxy.127.net/lbs";
        var yB5G = function (o7h, e7d) {
            if (o7h.lbs) {}
            var Qf1x = o7h.upload;
            if (!Qf1x || !Qf1x.length) {
                AE5J(o7h, e7d)
            }(e7d.onload || bs8k).call(this, Qf1x)
        };
        var AE5J = function (o7h, e7d) {
            (e7d.onerror || bs8k).call(this, o7h)
        };
        return function (e7d) {
            var lo1x = e7d.bucket;
            return v7o.bn7g(cbZ8R, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: lo1x
                },
                onload: yB5G.ew9n(this, e7d),
                onerror: AE5J.ew9n(this, e7d)
            })
        }
    }();
    jx0x.ZV4Z = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        ca8S = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        jx0x = c7f("nm.x.nos"),
        E7x = c7f("nm.m"),
        m7f = c7f("nm.l"),
        w7p = c7f("nm.w"),
        b7g, K7D;
    var gi9Z = a6g.iu0x('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w7p.bKv3x = NEJ.C();
    b7g = w7p.bKv3x.O7H(bC8u.ei9Z);
    b7g.ce8W = function () {
        this.cd8V = gi9Z
    };
    b7g.bW8O = function () {
        this.cg8Y();
        this.bF8x = this.n7g;
        this.hK0x = a6g.H7A(this.n7g, "j-file")[0];
        h7a.s7l(this.hK0x, "change", this.rJ3x.g7b(this))
    };
    b7g.bl7e = function (e7d) {
        e7d = e7d || {};
        this.bm7f(e7d);
        this.hK0x.accept = e7d.accept || "*";
        this.xk4o = e7d
    };
    b7g.ZD3x = function () {
        return a6g.lv1x(this.hK0x)
    };
    b7g.rJ3x = function (d7e) {
        if (this.hK0x.value == "") return;
        var kE1x = this.hK0x.value.split("\\"),
            ft9k = kE1x.length > 0 ? kE1x[kE1x.length - 1] : kE1x[0],
            ox2x = (this.hK0x.files || [{}])[0];
        var cl8d = {
            files: this.hK0x.files,
            filename: ft9k,
            size: ox2x.size,
            cancelUpload: false
        };
        this.z7s("onchange", cl8d);
        if (cl8d.cancelUpload) {
            this.hK0x.value = "";
            return
        }
        if (cl8d.stopped) {
            return
        }
        this.Rr1x()
    };
    b7g.Rr1x = function () {
        if (this.hK0x.value == "") return;
        var kE1x = this.hK0x.value.split("\\"),
            ft9k = kE1x.length > 0 ? kE1x[kE1x.length - 1] : kE1x[0],
            eu9l = (ft9k.split(".") || []).pop(),
            ox2x = (this.hK0x.files || [{}])[0],
            DF6z = (ox2x.type || "").split("/").shift();
        if (ox2x.size > 100 * 1024 * 1024) {
            return this.mV1x("onerror", {
                code: -200
            })
        }
        this.z7s("onuploading", 0);
        this.bKu3x = jx0x.bak4o(NEJ.X({
            onload: this.Rs1x.ew9n(this, ft9k),
            onerror: this.mV1x.g7b(this)
        }, this.xk4o, function (p7i) {
            return k7d.gG0x(p7i) || k7d.lw1x(p7i)
        }))
    };
    b7g.Rs1x = function (bP8H, ft9k) {
        var o7h = bP8H.result || {},
            lo1x = o7h.bucket,
            mO1x = o7h.objectKey,
            eL9C = o7h.token;
        if (!lo1x || !mO1x || !eL9C) {
            bP8H.code = -100;
            this.mV1x.call(this, bP8H);
            return
        }
        var ox2x = (this.hK0x.files || [{}])[0];
        var hQ0x = a6g.dk8c(this.bF8x);
        hQ0x[0].value = mO1x;
        hQ0x[1].value = eL9C;
        if (ox2x.type && ox2x.type.indexOf("audio") == 0) {
            hQ0x[3].value = "audio/mpeg"
        } else {
            hQ0x[3].value = ox2x.type || ""
        }
        this.bF8x.action = "//nos.netease.com/" + lo1x;
        this.DK6E = o7h;
        this.qs2x = ft9k;
        this.z7s("onuploading", .2);
        this.gQ0x()
    };
    b7g.gQ0x = function () {
        this.bKu3x = v7o.gQ0x(this.bF8x, {
            type: "json",
            onload: this.vG4K.g7b(this),
            onerror: this.mV1x.g7b(this),
            onuploading: this.Za3x.g7b(this)
        })
    };
    b7g.ks1x = function () {
        v7o.ks1x(this.bKu3x);
        this.bF8x.reset()
    };
    b7g.vG4K = function (bP8H) {
        var eL9C = this.DK6E,
            ft9k = this.qs2x,
            ox2x = (this.hK0x.files || [{}])[0],
            kg1x = {
                code: 200,
                fileName: ft9k,
                size: ox2x.size,
                bucket: eL9C.bucket,
                docId: eL9C.docId,
                objectKey: eL9C.objectKey,
                url: "//nos.netease.com/" + eL9C.bucket + "/" + eL9C.objectKey
            };
        if (!bP8H) {
            bP8H = kg1x
        }
        if (!bP8H.code || bP8H.code == 200) {
            this.z7s("onsuccess", NEJ.X(kg1x, bP8H))
        } else {
            this.z7s("onerror", bP8H)
        }
        this.bF8x.reset()
    };
    b7g.mV1x = function (bP8H) {
        this.z7s("onerror", bP8H);
        this.bF8x.reset()
    };
    b7g.Za3x = function (iH0x) {
        this.z7s("onuploading", .2 + iH0x.loaded / iH0x.total * .8)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        ca8S = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        jx0x = c7f("nm.x.nos"),
        E7x = c7f("nm.m"),
        m7f = c7f("nm.l"),
        w7p = c7f("nm.w"),
        b7g, K7D;
    w7p.Rw1x = NEJ.C();
    b7g = w7p.Rw1x.O7H(ca8S.cH8z);
    b7g.bl7e = function (e7d) {
        e7d = e7d || {};
        this.bm7f(e7d);
        this.Yo3x = w7p.bKv3x.A7t(NEJ.X({
            parent: e7d.parent,
            onchange: this.rJ3x.g7b(this),
            onuploading: this.z7s.g7b(this, "onuploading"),
            onsuccess: this.z7s.g7b(this, "onsuccess"),
            onerror: this.z7s.g7b(this, "onerror")
        }, e7d, function (p7i) {
            return k7d.gG0x(p7i) || k7d.lw1x(p7i)
        }));
        if (e7d.multiple && jx0x.ZV4Z()) {
            a6g.gh9Y(this.Yo3x.ZD3x(), "multiple", true)
        }
        this.xk4o = e7d
    };
    b7g.rJ3x = function (e7d) {
        var ft9k = e7d.filename,
            eu9l = (ft9k.split(".") || []).pop();
        this.bKr3x = (e7d.files || [{}])[0];
        this.z7s("onchange", e7d);
        if (jx0x.ZV4Z() && !e7d.stopped && !e7d.cancelUpload) {
            this.Rr1x(true);
            e7d.stopped = true
        }
    };
    b7g.ZD3x = function () {
        return this.Yo3x.ZD3x()
    };
    b7g.cbP8H = function () {
        return this.bKr3x
    };
    b7g.Rr1x = function (eV9M, cU8M) {
        cU8M = cU8M || this.bKr3x;
        if (jx0x.ZV4Z()) {
            this.bKq3x = jx0x.gQ0x(NEJ.X({
                file: cU8M,
                local: this.xk4o.bucket && this.xk4o.bucket.length,
                onuploading: this.z7s.g7b(this, "onuploading"),
                onsuccess: this.z7s.g7b(this, "onsuccess"),
                onerror: this.z7s.g7b(this, "onerror")
            }, this.xk4o, function (p7i) {
                return k7d.gG0x(p7i) || k7d.lw1x(p7i)
            }));
            return this.bKq3x
        } else if (!eV9M) {
            this.Yo3x.Rr1x()
        }
    };
    b7g.ks1x = function (C7v) {
        C7v = C7v || this.bKq3x;
        if (C7v) {
            jx0x.ks1x(C7v)
        }
        this.Yo3x.ks1x()
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        em9d = c7f("nej.g"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        fH9y = c7f("nej.n"),
        I7B = c7f("nej.ut"),
        bc7V = c7f("nej.ui"),
        w7p = c7f("nm.w"),
        m7f = c7f("nm.l"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        M7F = c7f("nm.x.f"),
        jx0x = c7f("nm.x.nos"),
        b7g, K7D, boX8P = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        },
        boY8Q = 5 * 1024 * 1024,
        cFP5U = 80,
        bKp3x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w7p.bKo3x = NEJ.C();
    b7g = w7p.bKo3x.O7H(I7B.vN4R);
    b7g.bnZ8R = function () {
        return {
            x: this.Bb6V.clientWidth - this.n7g.offsetWidth,
            y: this.Bb6V.clientHeight - this.n7g.offsetHeight
        }
    };
    w7p.bpi8a = NEJ.C();
    b7g = w7p.bpi8a.O7H(bc7V.ei9Z);
    b7g.ce8W = function () {
        this.cd8V = "m-xwgt-share-upload"
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var i7b = a6g.H7A(this.n7g, "j-flag");
        this.XW3x = i7b.shift();
        this.Lb8T = i7b.shift();
        this.Sm2x = i7b.shift();
        this.bKn3x = {
            onchange: this.bKm3x.ew9n(this, 0),
            onerror: this.eI9z.g7b(this),
            onsuccess: this.tZ3x.g7b(this),
            multiple: true,
            parent: this.Lb8T,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bps8k = {
            onchange: this.bKm3x.ew9n(this, 1),
            onerror: this.eI9z.g7b(this),
            onsuccess: this.tZ3x.g7b(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cbH8z = w7p.Rw1x.A7t(this.bKn3x)
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.bps8k.parent = e7d.button;
        this.KV8N && this.KV8N.T7M();
        this.KV8N = w7p.Rw1x.A7t(this.bps8k);
        this.n7g.style.display = "none";
        if (!!this.fa9R) {
            for (var i = this.fa9R.length - 1; i >= 0; i--) {
                a6g.cJ8B(this.fa9R[i].element, false);
                if (this.fa9R[i].dragger) this.fa9R[i].dragger.T7M()
            }
        }
        this.fa9R = [];
        if (this.Ah5m) {
            clearTimeout(this.Ah5m)
        }
        this.Xt3x(0);
        this.SJ2x = 0;
        this.bX8P([
            [this.bKn3x.parent, "click", this.bKl3x.g7b(this)],
            [this.bps8k.parent, "click", this.bKl3x.g7b(this)]
        ])
    };
    b7g.bD8v = function () {
        h7a.hd0x(this.sK3x, "click");
        if (!!this.fa9R) {
            for (var i = this.fa9R.length - 1; i >= 0; i--) {
                a6g.cJ8B(this.fa9R[i].element, false);
                if (this.fa9R[i].dragger) this.fa9R[i].dragger.T7M()
            }
        }
        this.fa9R = [];
        if (this.Ah5m) {
            clearTimeout(this.Ah5m)
        }
        this.Ah5m = 0;
        this.KV8N && this.KV8N.T7M();
        delete this.KV8N;
        this.bG8y()
    };
    b7g.bKl3x = function (d7e) {
        if (!jx0x.ZV4Z() && this.fa9R.doing) {
            h7a.bh7a(d7e)
        }
    };
    b7g.bKm3x = function (e7d, r7k) {
        var nz2x = e7d.files,
            iG0x;
        e7d.stopped = true;
        if (!nz2x) {
            if (e7d.filename) {
                nz2x = [{
                    name: e7d.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = nz2x.length; i < len; i++) {
            if (!bKp3x.test(nz2x[i].name)) {
                this.bpM8E({
                    path: nz2x[i].name,
                    index: r7k,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (nz2x[i].size > boY8Q) {
                this.bpN8F(-3);
                this.bpM8E({
                    path: nz2x[i].name,
                    index: r7k,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpM8E({
                    path: nz2x[i].name,
                    file: nz2x[i],
                    index: r7k,
                    status: 0
                })
            }
        }
    };
    b7g.bpM8E = function (sR3x) {
        if (this.fa9R.length >= 9) {
            this.bpN8F(-10, 3e3, this.bKk3x.g7b(this));
            return
        }
        this.cbB8t(sR3x);
        this.fa9R.push(sR3x);
        if (!!this.fa9R.length) {
            this.n7g.style.display = ""
        }
        if (this.fa9R.length >= 9) {
            this.Lb8T.style.display = "none"
        } else {
            this.Lb8T.style.display = ""
        }
        this.KP8H()
    };
    b7g.KP8H = function () {
        var bpX8P = -1,
            bKh3x = 0;
        for (var i = 0, l = this.fa9R.length; i < l; i++) {
            if (this.fa9R[i].status == 1) {
                return
            }
            if (this.fa9R[i].status == 0 && bpX8P < 0) {
                bpX8P = i
            }
            if (this.fa9R[i].status == 2 || this.fa9R[i].status < 0) {
                bKh3x++
            }
        }
        var p7i = this.fa9R[bpX8P];
        if (p7i) {
            (p7i.index == 0 ? this.cbH8z : this.KV8N).Rr1x(false, p7i.file);
            p7i.status = 1;
            this.fa9R.doing = p7i;
            this.z7s("onstartupload", {})
        } else if (bKh3x == this.fa9R.length) {
            this.z7s("onfinishupload", {})
        }
    };
    b7g.bpZ8R = function () {
        return this.fa9R.doing || {}
    };
    b7g.eI9z = function (d7e) {
        var sR3x = this.bpZ8R();
        sR3x.status = -4;
        sR3x.fail = "上传<br>失败";
        this.bKg3x(sR3x);
        this.fa9R.doing = null;
        this.KP8H()
    };
    b7g.tZ3x = function (d7e) {
        var sR3x = this.bpZ8R(),
            dN9E = d7e.fileName.match(bKp3x);
        sR3x.picUrl = d7e.url;
        v7o.bn7g("/upload/event/img/v1", {
            query: {
                imgid: d7e.docId,
                format: dN9E[1]
            },
            type: "json",
            onload: this.bKf3x.g7b(this),
            onerror: this.bKf3x.g7b(this)
        })
    };
    b7g.bKf3x = function (d7e) {
        if (d7e && d7e.code == 200 && d7e.picInfo) {
            var sR3x = this.bpZ8R();
            sR3x.status = 2;
            var by8q = NEJ.X({}, d7e.picInfo);
            by8q.originId = by8q.originIdStr;
            by8q.squareId = by8q.squareIdStr;
            by8q.rectangleId = by8q.rectangleIdStr;
            by8q.pcSquareId = by8q.pcSquareIdStr;
            by8q.pcRectangleId = by8q.pcRectangleIdStr;
            by8q.originJpgId = by8q.originJpgIdStr || by8q.originJpgId;
            sR3x.picInfo = by8q;
            this.bKg3x(sR3x);
            this.fa9R.doing = null;
            this.KP8H()
        } else {
            this.eI9z(d7e)
        }
    };
    b7g.bpN8F = function (r7k, kO1x, fp9g) {
        if (this.SJ2x < r7k) {
            return
        }
        if (this.Ah5m) {
            clearTimeout(this.Ah5m);
            this.Ah5m = 0
        }
        if (kO1x) {
            this.Sm2x.innerText = boX8P[r7k * 1];
            this.SJ2x = r7k;
            this.Ah5m = setTimeout(this.Xt3x.g7b(this, r7k, fp9g), kO1x)
        } else {
            this.Sm2x.innerText = boX8P[r7k];
            this.SJ2x = r7k
        }
        this.Sm2x.style.display = ""
    };
    b7g.Xt3x = function (r7k, fp9g) {
        if (r7k && this.SJ2x !== r7k) {
            return
        }
        this.SJ2x = 0;
        this.Sm2x.innerText = boX8P[0];
        this.Sm2x.style.display = "none";
        fp9g && fp9g()
    };
    b7g.cbB8t = function (cU8M) {
        var j7c = {};
        if (cU8M.fail) {
            j7c.fail = cU8M.fail
        }
        var dT9K = a6g.bZ8R("m-xwgt-share-upload-preview", j7c);
        cU8M.element = a6g.nH2x(dT9K);
        h7a.s7l(a6g.H7A(cU8M.element, "del")[0], "mousedown", this.cbo8g.g7b(this, cU8M), false);
        this.XW3x.insertBefore(cU8M.element, this.XW3x.lastElementChild);
        cU8M.dragger = w7p.bKo3x.A7t({
            view: this.XW3x.parentNode,
            body: cU8M.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Sz2x.g7b(this, cU8M),
            onchange: this.cbn8f.g7b(this, cU8M),
            ondragend: this.bns7l.g7b(this, cU8M)
        })
    };
    b7g.bKg3x = function (cU8M) {
        if (!cU8M || !cU8M.element) {
            return false
        }
        var j7c = {};
        if (cU8M.fail) {
            j7c.fail = cU8M.fail
        } else {
            j7c.url = cU8M.picUrl
        }
        a6g.y7r(cU8M.element, "z-fail");
        cU8M.element.firstChild.outerHTML = a6g.bZ8R("m-xwgt-share-upload-preview-img", j7c)
    };
    b7g.Sz2x = function (p7i, kL1x) {
        a6g.y7r(p7i.element, "z-sel")
    };
    b7g.cbn8f = function (p7i, kL1x) {
        var cFQ5V, gt9k = this.fa9R.length - 1,
            ob2x;
        for (var i = gt9k; i >= 0; i--) {
            a6g.x7q(this.fa9R[i].element, "z-jump");
            if (this.fa9R[i] == p7i) {
                ob2x = i
            } else {
                a6g.eY9P(this.fa9R[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var ST2x = {
            x: 46 + 92 * (ob2x % 5) + kL1x.left,
            y: 46 + 92 * (ob2x / 5 >> 0) + kL1x.top
        };
        var bqo9f = ST2x.x / 92 >> 0,
            bqt9k = ST2x.y / 92 >> 0,
            yY5d = Math.max(0, Math.min(gt9k, bqt9k * 5 + bqo9f));
        if (yY5d == ob2x) {
            return
        }
        var cbj8b = yY5d < ob2x;
        for (var i = Math.min(yY5d, ob2x); i <= Math.max(yY5d, ob2x); i++) {
            if (i !== ob2x) {
                var bKb3x = i % 5;
                if (cbj8b) {
                    if (bKb3x == 4) {
                        a6g.eY9P(this.fa9R[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a6g.eY9P(this.fa9R[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bKb3x == 0) {
                        a6g.eY9P(this.fa9R[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a6g.eY9P(this.fa9R[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b7g.bns7l = function (p7i, kL1x) {
        var cFR5W, gt9k = this.fa9R.length - 1,
            ob2x;
        for (var i = gt9k; i >= 0; i--) {
            a6g.eY9P(this.fa9R[i].element, {
                left: "",
                top: ""
            });
            if (this.fa9R[i] == p7i) {
                ob2x = i
            }
        }
        a6g.x7q(p7i.element, "z-sel");
        var ST2x = {
            x: 46 + 92 * (ob2x % 5) + kL1x.left,
            y: 46 + 92 * (ob2x / 5 >> 0) + kL1x.top
        };
        var bqo9f = ST2x.x / 92 >> 0,
            bqt9k = ST2x.y / 92 >> 0,
            yY5d = Math.max(0, Math.min(gt9k, bqt9k * 5 + bqo9f));
        if (yY5d == ob2x) {
            return
        }
        this.XW3x.insertBefore(p7i.element, (this.fa9R[yY5d + (yY5d > ob2x ? 1 : 0)] || {}).element || this.Lb8T);
        this.fa9R.splice(ob2x, 1);
        this.fa9R.splice(yY5d, 0, p7i)
    };
    b7g.cbo8g = function (p7i, d7e) {
        a6g.cJ8B(p7i.element, false);
        if (p7i.dragger) p7i.dragger.T7M();
        delete p7i.dragger;
        var r7k = -1;
        for (var i = this.fa9R.length - 1; i >= 0; i--) {
            if (this.fa9R[i] == p7i) {
                r7k = i;
                break
            }
        }
        this.fa9R.splice(r7k, r7k >= 0 ? 1 : 0);
        delete p7i;
        if (this.fa9R.length >= 9) {
            this.Lb8T.style.display = "none"
        } else {
            this.Lb8T.style.display = ""
        } if (!this.fa9R.length) {
            this.n7g.style.display = "none";
            this.Xt3x(0)
        } else {
            this.bKk3x()
        } if (this.fa9R.doing == p7i) {
            this.fa9R.doing = null
        }
        this.KP8H()
    };
    b7g.bKk3x = function () {
        var bJZ3x = false;
        for (var i = 0, len = this.fa9R.length; i < len; i++) {
            if (this.fa9R[i].status == -3) {
                bJZ3x = true
            }
        }
        if (bJZ3x) {
            this.bpN8F(-3)
        } else {
            this.Xt3x(-3)
        }
    };
    b7g.SV2x = function () {
        var dB8t = [];
        for (var i = this.fa9R.length - 1; i >= 0; i--) {
            if (this.fa9R[i].status == 2) {
                dB8t.unshift(this.fa9R[i].picInfo)
            }
        }
        return dB8t
    };
    I7B.fJ9A.A7t({
        element: w7p.bpi8a,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fx9o = NEJ.R,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        bc7V = c7f("nej.ui"),
        N7G = c7f("nej.ut"),
        b7g, K7D;
    if (!!N7G.mU1x) return;
    N7G.mU1x = NEJ.C();
    b7g = N7G.mU1x.O7H(N7G.bdx5C);
    K7D = N7G.mU1x.cs8k;
    b7g.bl7e = function (e7d) {
        this.cbd8V(e7d.more);
        this.Et7m = a6g.B7u(e7d.sbody);
        this.cbc8U = e7d.fixScrollPosition;
        this.bX8P([
            [this.Et7m, "scroll", this.cbb8T.g7b(this)]
        ]);
        var do8g = e7d.delta;
        if (do8g == null) do8g = 30;
        this.TK2x = Math.max(0, do8g);
        var cF8x = parseInt(e7d.count) || 0;
        this.jC0x = Math.max(0, cF8x);
        var gR0x = parseInt(e7d.number) || 0;
        if (gR0x > 1 && gR0x <= cF8x) {
            this.Bt6n = gR0x
        }
        this.bm7f(e7d)
    };
    b7g.bD8v = function () {
        this.bG8y();
        delete this.AD5I;
        delete this.Et7m;
        delete this.tj3x;
        delete this.WA3x
    };
    b7g.Bk6e = function (bi7b, bq7j) {
        var bM8E = this.zO5T + (this.jC0x - 1) * this.pd2x,
            gc9T = this.jC0x * this.pd2x;
        return K7D.Bk6e.call(this, bM8E, bi7b, gc9T, bq7j)
    };
    b7g.cbd8V = function (Wu3x) {
        this.AD5I = a6g.B7u(Wu3x);
        this.bX8P([
            [this.AD5I, "click", this.oI2x.g7b(this)]
        ])
    };
    b7g.brn9e = function (F7y) {
        F7y = F7y || {};
        if (this.tj3x || !F7y) return;
        if (!F7y.scrollHeight) F7y = a6g.oy2x();
        var bi7b = a6g.hO0x(this.ii0x, this.cbc8U ? F7y : null),
            do8g = bi7b.y + this.ii0x.offsetHeight - F7y.scrollTop - F7y.clientHeight,
            bro9f = F7y.scrollHeight <= F7y.clientHeight;
        if (do8g <= this.TK2x || bro9f && !this.tj3x) {
            this.oI2x()
        }
    };
    b7g.cbb8T = function (d7e) {
        if (this.tj3x) return;
        this.brn9e(h7a.W7P(d7e))
    };
    b7g.Be6Y = function (d7e) {
        K7D.Be6Y.apply(this, arguments);
        if (!d7e.stopped) {
            this.Nu9l();
            var bi7b = 0;
            if (d7e.index > 1) {
                bi7b = this.zO5T + ((d7e.index - 1) * this.jC0x - 1) * this.pd2x
            }
            this.hP0x = bi7b;
            this.oI2x()
        }
    };
    b7g.bLu3x = function (e7d) {
        if (!!this.Bt6n) {
            var do8g = e7d.offset > 0 ? this.pd2x : this.zO5T,
                gc9T = do8g + this.pd2x * (this.Bt6n - 1);
            this.hP0x = e7d.offset + gc9T;
            e7d.data.limit = gc9T;
            e7d.limit = gc9T;
            delete this.Bt6n
        }
        return e7d
    };
    b7g.bin6h = function (e7d) {
        delete this.WA3x;
        K7D.bin6h.apply(this, arguments);
        this.bJX3x()
    };
    b7g.bip6j = function (d7e) {
        if (d7e.key != this.jq0x.key) return;
        switch (d7e.action) {
        case "refresh":
        case "append":
            delete this.WA3x;
            break
        }
        K7D.bip6j.apply(this, arguments)
    };
    b7g.Nd9U = function () {
        this.yT5Y("onbeforelistload", "列表加载中...");
        a6g.ba7T(this.AD5I, "display", "none")
    };
    b7g.biI6C = function (i7b, bi7b, gc9T) {
        var bq7j = i7b.length,
            brs9j = i7b.loaded ? bi7b + gc9T >= bq7j : bi7b + gc9T > bq7j;
        this.hP0x = Math.min(this.hP0x, bq7j);
        a6g.ba7T(this.AD5I, "display", brs9j ? "none" : "");
        if (brs9j) this.tj3x = !0;
        if (this.jC0x > 0) {
            var by8q = this.Bk6e(bi7b, i7b.length);
            if (this.bLs3x(by8q.index, by8q.total)) return !0;
            var do8g = this.zO5T - this.pd2x,
                gR0x = this.jC0x * this.pd2x;
            this.tj3x = (bi7b + gc9T - do8g) % gR0x == 0 || brs9j;
            a6g.ba7T(this.AD5I, "display", this.tj3x ? "none" : "");
            this.biw6q(this.tj3x && by8q.total > 1 ? "" : "none")
        }
    };
    b7g.biH6B = function () {
        this.hP0x = 0;
        this.tj3x = !0;
        this.yT5Y("onemptylist", "没有列表数据！")
    };
    b7g.Nb9S = function (dT9K, kL1x) {
        this.ii0x.insertAdjacentHTML(kL1x || "beforeEnd", dT9K)
    };
    b7g.Na9R = function (ho0x) {
        this.fL9C = this.fL9C || [];
        if (k7d.eJ9A(ho0x)) {
            fx9o.push.apply(this.fL9C, ho0x)
        } else {
            this.fL9C.push(ho0x)
        }
    };
    b7g.bdX5c = function (d7e) {
        a6g.mY1x(this.cv8n);
        this.MR9I(d7e, "onafteradd");
        var eV9M = d7e.flag;
        if (d7e.stopped || !eV9M) return;
        if (this.jC0x > 0) {
            this.biz6t();
            return
        }
        this.hP0x += 1;
        eV9M == -1 ? this.bjo6i(d7e.data) : this.bLr3x(d7e.data)
    };
    b7g.bdZ5e = function (d7e) {
        this.MR9I(d7e, "onafterdelete");
        if (d7e.stopped) return;
        if (this.jC0x > 0) {
            this.biz6t();
            return
        }
        var C7v = d7e.data[this.fd9U.pkey];
        if (!!this.fL9C) {
            var p7i = a6g.bTd6X(C7v),
                r7k = k7d.di8a(this.fL9C, p7i);
            if (r7k >= 0) {
                this.fL9C.splice(r7k, 1);
                this.hP0x -= 1
            }
            if (!!p7i) p7i.T7M()
        } else {
            var f7c = a6g.B7u(this.bLy3x(C7v));
            if (!!f7c) this.hP0x -= 1;
            a6g.cJ8B(f7c)
        } if (this.hP0x <= 0) this.oI2x()
    };
    b7g.bje6Y = function (bi7b, gc9T) {
        if (bi7b != this.hP0x) return;
        if (this.VW2x()) {
            this.tj3x = !1;
            this.bJX3x()
        }
    };
    b7g.bjf6Z = function (bi7b, gc9T) {
        if (bi7b != 0) return;
        var Jh8Z = this.S7L.hD0x(this.jq0x.key);
        for (var i = gc9T - 1; i >= 0; i--) {
            this.bjo6i(Jh8Z[i])
        }
    };
    b7g.bJX3x = function () {
        var F7y = this.Et7m;
        if (!F7y || this.tj3x) return;
        this.brn9e(this.Et7m)
    };
    b7g.gB0x = function () {
        delete this.tj3x;
        K7D.gB0x.apply(this, arguments)
    };
    b7g.oI2x = function () {
        if (!!this.WA3x) return;
        this.WA3x = !0;
        var bi7b = this.hP0x;
        this.hP0x += bi7b == 0 ? this.zO5T : this.pd2x;
        this.bLv3x(bi7b)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        cY8Q = c7f("nej.x"),
        N7G = c7f("nej.ut"),
        b7g;
    if (!!N7G.EE7x) return;
    N7G.EE7x = NEJ.C();
    b7g = N7G.EE7x.O7H(N7G.cH8z);
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.ji0x = e7d.event || "click";
        this.kR1x = e7d.selected || "js-selected";
        this.nK2x = e7d.disabled || "js-disabled";
        this.bJT3x = !!e7d.inverse;
        this.caP8H(e7d.list);
        this.UF2x(e7d.index || 0)
    };
    b7g.bD8v = function () {
        var caN8F = function (f7c) {
            this.brC9t(f7c, !1)
        };
        return function () {
            this.bG8y();
            k7d.bd7W(this.bU8M, caN8F, this);
            delete this.bU8M;
            delete this.ji0x;
            delete this.ct8l;
            delete this.nK2x;
            delete this.kR1x;
            delete this.bJT3x
        }
    }();
    b7g.caP8H = function () {
        var bgY6S = function (p7i) {
            if (!p7i) return;
            this.bU8M.push(p7i);
            var r7k = this.bU8M.length - 1,
                dt8l = this.brD9u[r7k];
            if (!dt8l) {
                dt8l = this.UF2x.g7b(this, r7k);
                this.brD9u[r7k] = dt8l
            }
            this.bX8P([
                [p7i, this.ji0x, dt8l]
            ])
        };
        return function (i7b) {
            this.bU8M = [];
            if (!this.brD9u) this.brD9u = [];
            k7d.bd7W(i7b, bgY6S, this)
        }
    }();
    b7g.brC9t = function (F7y, caJ8B) {
        !!caJ8B && !this.bJT3x ? a6g.y7r(F7y, this.kR1x) : a6g.x7q(F7y, this.kR1x)
    };
    b7g.UF2x = function (r7k, UU2x, j7c) {
        var F7y = this.bU8M[r7k];
        if (UU2x != !0 && (r7k == this.ct8l || !F7y || a6g.bE8w(F7y, this.nK2x))) {
            h7a.cp8h(arguments[1]);
            return this
        }
        var d7e = {
            index: r7k,
            last: this.ct8l,
            list: this.lK1x(),
            data: j7c || a6g.t7m(F7y, "value")
        };
        this.ct8l = r7k;
        F7y = this.bU8M[d7e.last];
        if (!!F7y) this.brC9t(F7y, !1);
        F7y = this.bU8M[this.ct8l];
        this.brC9t(F7y, !0);
        this.z7s("onchange", d7e);
        if (!d7e.nostop) h7a.cp8h(arguments[1]);
        return this
    };
    b7g.tD3x = function () {
        return this.ct8l
    };
    b7g.lK1x = function () {
        return this.bU8M
    };
    a6g.caG8y = cY8Q.caG8y = function (bI8A, e7d) {
        var C7v = a6g.lv1x(bI8A);
        if (!C7v) return null;
        if (!N7G.bba4e(C7v, N7G.EE7x)) {
            e7d = e7d || {};
            e7d.list = !e7d.clazz ? a6g.dk8c(C7v) : a6g.H7A(C7v, e7d.clazz);
            delete e7d.clazz
        }
        return N7G.bba4e(C7v, N7G.EE7x, e7d || bb7U)
    };
    cY8Q.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        l7e = c7f("nm.x");
    var SETTING_KEY = "player-setting";
    var nv2x = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nv2x = v7o.sw3x(SETTING_KEY) || nv2x;
    l7e.brR9I = function () {
        return nv2x
    };
    l7e.EL7E = function (EM7F) {
        if (EM7F) {
            nv2x = EM7F;
            v7o.uW4a(SETTING_KEY, EM7F)
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        hk0x = c7f("nm.w.player.log");
    var kI1x = q7j.likes_id.A7t();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var md1x = function (u7n, bH8z, rd3x) {
        var cG8y = l7e.fe9V("{0} {1} {2}", k7d.if0x(new Date, "yyyy-MM-dd HH:mm:ss"), u7n, bH8z);
        if (rd3x == LogLevel.ERROR) {
            kI1x.fu9l("playerror", {
                message: bH8z
            })
        }
        if (rd3x >= LogLevel.INFO) {
            kI1x.bRh6b(cG8y)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cG8y)
        }
    };
    hk0x.cf8X = function () {
        md1x("PLAY_ERROR", l7e.fe9V.apply(null, arguments), LogLevel.ERROR)
    };
    hk0x.pK2x = function () {
        md1x("PLAY_INFO", l7e.fe9V.apply(null, arguments), LogLevel.INFO)
    };
    hk0x.cFS5X = function () {
        md1x("PLAY_DEBUG", l7e.fe9V.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        w7p = c7f("nm.w"),
        fp9g = c7f("flash.cb");
    var ec9T = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var ER7K, Vv2x, vr4v;
    w7p.caA8s = function (u7n, cK8C) {
        if (u7n != "flash") {
            if (!ER7K) {
                ER7K = a6g.dg8Y("audio");
                k7d.bd7W(ec9T, function (u7n) {
                    h7a.s7l(ER7K, u7n, onMediaCallBack)
                })
            }
            if (ER7K && ER7K.canPlayType && ER7K.canPlayType("audio/mpeg")) {
                cK8C(new MediaWrap("audio"));
                return
            }
        }
        if (!Vv2x) {
            a6g.rG3x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function (hT0x) {
                    Vv2x = hT0x;
                    k7d.bd7W(ec9T, function (u7n) {
                        fp9g[u7n] = onMediaCallBack;
                        Vv2x.addCallback(u7n, "flash.cb." + u7n)
                    });
                    cK8C(new MediaWrap("flash"))
                }.g7b(this)
            })
        } else {
            cK8C(new MediaWrap("flash"))
        }
    };

    function MediaWrap(EV7O) {
        var gP0x;
        I7B.fJ9A.A7t({
            element: this,
            event: ec9T.concat(["interrupt", "recover"])
        });
        gP0x = EV7O == "audio" ? ER7K : Vv2x;
        this.type = EV7O;
        this.destroy = function () {};
        this.setSrc = function (Y7R) {
            if (vr4v != this) {
                var gt9k = vr4v;
                if (gt9k) {
                    gt9k.interrupt()
                }
                vr4v = this
            }
            if (EV7O == "flash") {
                gP0x.setSrc(Y7R)
            } else {
                gP0x.src = Y7R
            }
        };
        this.play = function () {
            if (vr4v != this) {
                var gt9k = vr4v;
                if (gt9k) {
                    gt9k.interrupt();
                    vr4v = this;
                    this.recover()
                } else {
                    vr4v = this
                }
            }
            if (EV7O == "flash") {
                gP0x.as_play()
            } else {
                gP0x.play()
            }
        };
        this.pause = function () {
            if (vr4v != this) return;
            if (EV7O == "flash") {
                gP0x.as_pause()
            } else {
                gP0x.pause()
            }
        };
        this.load = function () {
            if (vr4v != this) return;
            if (EV7O == "flash") {
                gP0x.as_load()
            } else {
                gP0x.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function () {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function () {
            return gP0x
        };
        var ov2x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k7d.bd7W(ov2x, function (V7O) {
            var Vh2x = "get" + V7O,
                Vk2x = "set" + V7O;
            if (EV7O == "flash") {
                if (!this[Vh2x]) {
                    this[Vh2x] = function () {
                        return gP0x[Vh2x]()
                    }
                }
                if (!this[Vk2x]) {
                    this[Vk2x] = function (value) {
                        gP0x[Vk2x](value)
                    }
                }
            } else {
                var bJJ3x = V7O.slice(0, 1).toLowerCase() + V7O.slice(1);
                if (!this[Vh2x]) {
                    this[Vh2x] = function () {
                        return gP0x[bJJ3x]
                    }
                }
                if (!this[Vk2x]) {
                    this[Vk2x] = function (value) {
                        gP0x[bJJ3x] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d7e) {
        if (vr4v) {
            h7a.z7s(vr4v, d7e.type, d7e)
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        dv8n = c7f("nej.p"),
        w7p = c7f("nm.w"),
        l7e = c7f("nm.x"),
        hk0x = c7f("nm.w.player.log"),
        b7g;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bJI3x = false;
    w7p.fM9D = NEJ.C();
    b7g = w7p.fM9D.O7H(I7B.cH8z);
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.cL8D = {};
        this.Vt2x(e7d.media);
        v7o.bn7g("/api/cdns", {
            type: "json",
            onload: function (d7e) {
                if (d7e.code) {
                    this.qL3x = d7e.data
                }
            }.g7b(this)
        })
    };
    b7g.bD8v = function () {
        this.bG8y();
        delete this.cL8D
    };
    b7g.ZX4b = function (bj7c) {
        if (!bj7c) return;
        var wE4I = this.cL8D.volume;
        if (this.dS9J) {
            this.dS9J.pause()
        }
        this.cL8D = {
            time: 0,
            id: bj7c.id,
            duration: bj7c.duration / 1e3,
            play: this.cL8D.play,
            stalledRetryCount: 0
        };
        if (wE4I != null) {
            this.cL8D.volume = wE4I
        }
        this.cL8D.loadState = LoadState.LOAD_START;
        this.bJH3x(bj7c.id);
        hk0x.pK2x("play song id: {0}", bj7c.id)
    };
    b7g.ej9a = function () {
        if (this.cL8D.error) {
            this.cL8D.error = null;
            if (this.cL8D.error == ErrorType.INFO_GET_ERR || this.bJG3x()) {
                this.bJF3x()
            } else {
                this.UE2x()
            }
        } else {
            if (this.dS9J) {
                this.dS9J.play()
            }
        }
        this.cL8D.play = true;
        this.pC2x("play")
    };
    b7g.fC9t = function () {
        if (this.dS9J) {
            this.dS9J.pause()
        }
        this.cL8D.play = false;
        this.pC2x("pause")
    };
    b7g.oS2x = function (bA8s) {
        if (this.dS9J) {
            this.dS9J.setCurrentTime(bA8s)
        }
        this.cL8D.time = bA8s;
        hk0x.pK2x("seek to: {0}", bA8s)
    };
    b7g.btf9W = function () {
        return this.cL8D.duration || 0
    };
    b7g.vD4H = function () {
        return !!this.cL8D.play
    };
    b7g.mQ1x = function (Uu2x) {
        this.cL8D.volume = Uu2x;
        if (this.dS9J) {
            this.dS9J.setVolume(Uu2x)
        }
    };
    b7g.Wr3x = function () {
        return this.cL8D.time
    };
    b7g.Vt2x = function (u7n) {
        w7p.caA8s(u7n, function (gP0x) {
            this.dS9J = gP0x;
            hk0x.pK2x("media loaded: {0}", gP0x.type);
            this.bX8P([
                [this.dS9J, "loadedmetadata", this.cau8m.g7b(this)],
                [this.dS9J, "ended", this.caq8i.g7b(this)],
                [this.dS9J, "waiting", this.zx5C.g7b(this)],
                [this.dS9J, "play", this.vu4y.g7b(this)],
                [this.dS9J, "pause", this.btv9m.g7b(this)],
                [this.dS9J, "playing", this.Uh2x.g7b(this)],
                [this.dS9J, "timeupdate", this.cal8d.g7b(this)],
                [this.dS9J, "progress", this.tF3x.g7b(this)],
                [this.dS9J, "stalled", this.btD9u.g7b(this)],
                [this.dS9J, "interrupt", this.fC9t.g7b(this)],
                [this.dS9J, "recover", this.cak8c.g7b(this)],
                [this.dS9J, "error", this.eI9z.g7b(this)]
            ]);
            if (this.cL8D) {
                if (this.cL8D.loadState == LoadState.LOAD_START || this.cL8D.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.btI9z();
                    if (this.cL8D.volume != null) {
                        this.dS9J.setVolume(this.cL8D.volume)
                    }
                }
            }
        }.g7b(this))
    };
    b7g.cai8a = function (u7n) {
        this.IJ8B();
        this.dS9J.destroy();
        this.cL8D.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zx5C();
        this.Vt2x(u7n);
        hk0x.pK2x("switch media")
    };
    b7g.cFW5b = function () {
        return this.dS9J
    };
    b7g.bJH3x = function () {
        this.zx5C();
        v7o.bn7g("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cL8D.id]),
                br: DEFAULT_BR
            },
            onload: this.bJz3x.g7b(this),
            onerror: this.bJz3x.g7b(this)
        })
    };
    b7g.bJz3x = function (d7e) {
        if (d7e.code == 200 && d7e.data && d7e.data.length) {
            var by8q = d7e.data[0];
            if (!by8q.url) {
                this.cL8D.error = ErrorType.INFO_GET_ERR;
                this.pC2x("error", {
                    code: this.cL8D.error
                });
                return
            }
            this.cL8D.playUrl = by8q.url;
            this.cL8D.expireTime = (new Date).getTime() + by8q.expi * 1e3;
            this.btI9z()
        } else {
            this.cL8D.error = ErrorType.INFO_GET_ERR;
            this.pC2x("error", {
                code: this.cL8D.error
            });
            hk0x.cf8X("info load error")
        }
    };
    b7g.btI9z = function () {
        if (this.dS9J) {
            var Y7R = this.cL8D.playUrl;
            if (this.cL8D.time > 0 && (this.cL8D.loadState == LoadState.IN_RE_GET_URL || this.cL8D.loadState == LoadState.IN_RE_GET_URL)) {
                Y7R += "#t=" + this.cL8D.time
            }
            this.dS9J.setSrc(Y7R);
            hk0x.pK2x("load mp3: {0},loadState: {1}.", Y7R, this.cL8D.loadState)
        }
    };
    b7g.bJy3x = function () {
        if (/#t=(\d+)$/.test(this.dS9J.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b7g.UE2x = function () {
        var bA8s = parseInt(this.cL8D.time) || 0,
            cab8T = this.bJy3x();
        if (bA8s === cab8T) {
            this.dS9J.load()
        } else {
            this.dS9J.setSrc(this.cL8D.playUrl + "#t=" + bA8s)
        }
        this.cL8D.loadState = LoadState.IN_RELOAD;
        this.zx5C();
        hk0x.pK2x("reload from: {0}", bA8s)
    };
    b7g.bJF3x = function () {
        this.cL8D.loadState = LoadState.IN_RE_GET_URL;
        this.bJH3x()
    };
    b7g.bJx3x = function () {
        var sz3x = getHost(this.cL8D.playUrl);
        if (sz3x) {
            for (var i = 0; i < this.qL3x.length; i++) {
                var ik0x = this.qL3x[i] || [],
                    r7k = ik0x.indexOf(sz3x);
                if (r7k >= 0 && ik0x.length > 1) {
                    return ik0x[(r7k + 1) % ik0x.length]
                }
            }
        }

        function getHost(Y7R) {
            if (CDN_HOST_REG.test(Y7R)) return RegExp.$1
        }
    };
    b7g.bZZ8R = function () {
        this.cL8D.playUrl = this.cL8D.playUrl.replace(CDN_HOST_REG, this.bJx3x());
        this.cL8D.loadState = LoadState.IN_SWITCH_CDN;
        this.btI9z();
        this.zx5C()
    };
    b7g.cau8m = function () {
        if (this.cL8D.loadState == LoadState.LOAD_START) {
            this.cL8D.loadState = LoadState.LOADED_META;
            if (this.dS9J.type == "audio") {
                this.cL8D.duration = this.dS9J.getDuration()
            }
            this.pC2x("loadedmeta", {
                duration: this.cL8D.duration
            })
        } else {
            this.cL8D.loadState = LoadState.LOADED_META
        } if (this.cL8D.play) {
            this.dS9J.play()
        } else {
            this.dS9J.pause()
        } if (this.cL8D.time && parseInt(this.cL8D.time) != this.bJy3x()) {
            this.dS9J.setCurrentTime(this.cL8D.time)
        }
        this.JQ8I();
        this.Uh2x();
        bJI3x = true;
        hk0x.pK2x("loaded meta")
    };
    b7g.caq8i = function () {
        this.cL8D.ended = true;
        this.pC2x("ended")
    };
    b7g.zx5C = function () {
        if (!this.cL8D.waiting) {
            this.cL8D.waiting = true;
            this.cL8D.waitTimestamp = +(new Date);
            this.pC2x("waiting")
        }
    };
    b7g.Uh2x = function () {
        this.cL8D.waiting = false;
        this.cL8D.waitTimestamp = 0;
        this.pC2x("playing")
    };
    b7g.vu4y = function () {
        this.pC2x("play")
    };
    b7g.btv9m = function () {
        this.pC2x("pause")
    };
    b7g.cal8d = function () {
        if (this.cL8D.loadState != LoadState.LOADED_META) return;
        var bA8s = this.dS9J.getCurrentTime();
        if (this.cL8D.waiting && bA8s > this.cL8D.time) {
            this.Uh2x()
        }
        this.cL8D.time = bA8s;
        this.pC2x("timeupdate", {
            time: this.cL8D.time,
            duration: this.cL8D.duration
        })
    };
    b7g.tF3x = function (d7e) {
        if (this.cL8D.loadState != LoadState.LOADED_META) return;
        var o7h = {};
        if (d7e.data) {
            o7h.total = d7e.data.total;
            o7h.loaded = d7e.data.loaded
        } else {
            var yX5c = this.dS9J.getBuffered(),
                bA8s = this.dS9J.getCurrentTime(),
                pg2x = 0;
            for (var i = 0; i < yX5c.length; i++) {
                if (bA8s > yX5c.start(i) && bA8s < yX5c.end(i)) {
                    pg2x = yX5c.end(i);
                    break
                }
            }
            o7h.total = this.cL8D.duration;
            o7h.loaded = Math.min(pg2x, o7h.total)
        }
        this.pC2x("progress", o7h)
    };
    b7g.JQ8I = function () {
        if (this.cL8D.retry) {
            clearTimeout(this.cL8D.retry.tid);
            this.cL8D.retry = null
        }
    };
    b7g.eI9z = function () {
        var cb8T = this.dS9J.getError();
        hk0x.cf8X("media error code: {0}, netState: {1}", cb8T.code, this.dS9J.getNetworkState());
        if (cb8T.code == MediaError.MEDIA_ERR_NETWORK || cb8T.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var EM7F = l7e.brR9I();
            if (!this.cL8D.retry) {
                this.cL8D.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cL8D.retry.tid)
            } if (this.cL8D.retry.level == RetryLevel.NONE) {
                if (this.bJG3x()) {
                    this.cL8D.retry.level = RetryLevel.GET_URL;
                    this.bJF3x();
                    hk0x.pK2x("Url expired, get url.")
                } else {
                    this.cL8D.retry.level = RetryLevel.RELOAD;
                    this.cL8D.retry.tid = setTimeout(this.UE2x.g7b(this), 3e3);
                    hk0x.pK2x("Reload mp3 3s later.")
                }
            } else if (this.cL8D.retry.level == RetryLevel.GET_URL) {
                this.cL8D.retry.level = RetryLevel.RELOAD;
                this.cL8D.retry.tid = setTimeout(this.UE2x.g7b(this), 3e3);
                hk0x.pK2x("Reload mp3 3s later.")
            } else if (this.cL8D.retry.level == RetryLevel.RELOAD) {
                this.cL8D.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bJx3x()) {
                    this.cL8D.retry.tid = setTimeout(this.bZZ8R.g7b(this), 5e3);
                    hk0x.pK2x("Switch CDN 5s later.")
                } else {
                    this.cL8D.retry.tid = setTimeout(this.UE2x.g7b(this), 5e3);
                    hk0x.pK2x("Reload mp3 5s later.")
                }
            } else if (!bJI3x && this.dS9J.type == "audio" && !EM7F.useFlash && !dv8n.HP8H.mac && l7e.bwp0x().supported) {
                EM7F.useFlash = true;
                l7e.EL7E(EM7F);
                this.cai8a("flash")
            } else {
                this.JQ8I();
                this.fC9t();
                this.cL8D.error = ErrorType.NET_ERR;
                this.pC2x("error", {
                    code: this.cL8D.error
                });
                hk0x.cf8X("error can not retry.")
            }
        } else {
            this.JQ8I();
            this.fC9t();
            this.cL8D.error = ErrorType.UNKNOWN_ERR;
            this.pC2x("error", {
                code: this.cL8D.error
            });
            hk0x.cf8X("error can not retry.")
        }
    };
    b7g.btD9u = function () {
        var hN0x = 0,
            bJw3x = 5e3;
        return function () {
            this.zx5C();
            clearTimeout(hN0x);
            setTimeout(function () {
                var eR9I = +(new Date);
                if (this.cL8D.waiting && eR9I - this.cL8D.waitTimestamp >= bJw3x && this.cL8D.stalledRetryCount < MAX_STALLED_RETRY) {
                    hk0x.pK2x("stalled too long retry.");
                    this.cL8D.stalledRetryCount++;
                    this.UE2x()
                }
            }.g7b(this), bJw3x);
            hk0x.pK2x("stalled")
        }
    }();
    b7g.bJG3x = function () {
        var eR9I = +(new Date);
        return eR9I > this.cL8D.expireTime
    };
    b7g.cak8c = function () {
        var bA8s = parseInt(this.cL8D.time) || 0;
        this.dS9J.setSrc(this.cL8D.playUrl + "#t=" + bA8s);
        this.cL8D.loadState = LoadState.IN_RELOAD;
        this.zx5C();
        hk0x.pK2x("recover from: {0}", bA8s)
    };
    b7g.pC2x = function (U7N, j7c) {
        h7a.z7s(w7p.fM9D, "playaction", {
            action: U7N,
            data: j7c || {}
        })
    };
    I7B.fJ9A.A7t({
        element: w7p.fM9D,
        event: ["playaction"]
    })
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        w7p = c7f("nm.w"),
        b7g;
    w7p.FH7A = NEJ.C();
    b7g = w7p.FH7A.O7H(w7p.fM9D);
    K7D = w7p.FH7A.cs8k;
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.bZT8L = function (bN8F) {
        this.ZX4b(bN8F);
        this.ej9a()
    };
    b7g.bug9X = function () {
        this.fC9t()
    };
    b7g.wu4y = function (d7e) {
        if (d7e.action == "play") {
            this.fC9t()
        }
    };
    b7g.pC2x = function (U7N, j7c) {
        h7a.z7s(w7p.FH7A, "tmpplayaction", {
            action: U7N,
            data: j7c || {}, tmp: true
        })
    };
    b7g.ty3x = function () {
        return this.cL8D
    };
    I7B.fJ9A.A7t({
        element: w7p.FH7A,
        event: ["tmpplayaction"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        fH9y = c7f("nej.n"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        bc7V = c7f("nej.ui"),
        w7p = c7f("nm.w"),
        m7f = c7f("nm.l"),
        kM1x = c7f("nm.c"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D, Xy3x = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var bul0x = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    w7p.bun0x = NEJ.C();
    b7g = w7p.bun0x.O7H(bc7V.ei9Z);
    b7g.cx8p = function (e7d) {
        this.cD8v(e7d);
        var i7b = a6g.H7A(this.n7g, "j-flag");
        this.cFX5c = i7b.shift();
        this.bZN8F = i7b.shift();
        this.JF8x = i7b.shift();
        this.bus0x = i7b.shift();
        this.buu0x = [i7b.shift(), i7b.shift(), i7b.shift(), i7b.shift(), i7b.shift(), i7b.shift()];
        this.XY3x = i7b.shift();
        this.bJr3x = i7b.shift();
        this.rS3x = {
            list: this.buu0x,
            selected: "z-curr",
            onchange: this.bJq3x.g7b(this)
        };
        h7a.s7l(this.JF8x, "input", this.Ym3x.g7b(this));
        h7a.s7l(this.JF8x, "propertychange", this.Ym3x.g7b(this));
        h7a.s7l(this.JF8x, "keyup", this.Ym3x.g7b(this));
        h7a.s7l(this.bZN8F, "click", this.Ym3x.g7b(this));
        h7a.s7l(this.XY3x, "click", this.cM8E.g7b(this));
        h7a.s7l(this.bJr3x, "click", function () {
            this.z7s("oncancel", {})
        }.g7b(this));
        this.S7L = q7j.EC7v.gr9i();
        this.RM1x = top.nm.w.FH7A.gr9i();
        I7B.fJ9A.A7t({
            element: top.nm.w.FH7A,
            event: ["tmpplayaction"]
        });
        this.se3x = {
            limit: 100,
            offset: 0,
            parent: this.XY3x,
            onbeforelistload: this.qU3x.g7b(this)
        };
        q7j.sk = "fuck" + a6g.t7m(this.bus0x, "xname") + "458";
        h7a.s7l(top.nm.w.FH7A, "tmpplayaction", this.wu4y.g7b(this))
    };
    b7g.ce8W = function () {
        this.cd8V = "m-xwgt-publish-search"
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        if (!!this.BL6F) {
            this.BL6F.T7M();
            delete this.BL6F
        }
        this.rS3x.index = bul0x[e7d.type || "song"];
        this.BL6F = I7B.EE7x.A7t(this.rS3x);
        this.JF8x.value = "";
        this.JF8x.focus();
        this.uN4R = "";
        this.cGa5f = 0;
        if (e7d.showMV == true) {
            this.buu0x[bul0x["mv"]].parentNode.style.display = "";
            a6g.y7r(this.bus0x, "srchtab-1")
        } else {
            this.buu0x[bul0x["mv"]].parentNode.style.display = "none";
            a6g.x7q(this.bus0x, "srchtab-1")
        } if (!!this.dK9B) {
            this.dK9B = this.dK9B.T7M()
        }
        if (e7d.hideBack) {
            a6g.y7r(this.bJr3x.parentNode, "f-hide")
        }
    };
    b7g.bD8v = function () {
        this.RM1x.bug9X();
        this.bG8y()
    };
    b7g.Ym3x = function () {
        var value = this.JF8x.value.trim();
        if (value && value.length) {
            if (value != this.uN4R) {
                this.uN4R = value;
                this.bJq3x({
                    index: this.BL6F.tD3x()
                })
            }
        } else {
            if (this.dK9B) {
                this.dK9B = this.dK9B.T7M()
            }
        }
        this.uN4R = value
    };
    b7g.cM8E = function () {
        var bZI8A = function (F7y) {
                return a6g.bE8w(F7y, "sitm") || a6g.bE8w(F7y, "itm") || a6g.bE8w(F7y, "mv-item")
            },
            bZF8x = function (F7y) {
                return a6g.bE8w(F7y, "ply")
            },
            bJo3x = function () {
                m7f.Z7S.L7E({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            },
            bZA8s = function () {
                m7f.Z7S.L7E({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            },
            buU0x = function (bj7c) {
                if (bj7c && bj7c.privilege && bj7c.privilege.toast) {
                    v7o.bn7g("/api/song/toast", {
                        query: {
                            id: bj7c.id
                        },
                        type: "json",
                        onload: Vp2x.g7b(this),
                        onerror: Vp2x.g7b(this)
                    })
                } else {
                    Vn2x()
                }
            },
            Vp2x = function (Q7J) {
                Vn2x((Q7J || bb7U).toast)
            },
            Vn2x = function (bH8z) {
                m7f.Z7S.L7E({
                    type: 2,
                    tip: bH8z || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function (d7e) {
            var FY7R = h7a.W7P(d7e, bZF8x),
                i7b = h7a.W7P(d7e, bZI8A),
                ex9o = this.RM1x.ty3x();
            if (!!i7b) {
                h7a.bh7a(d7e);
                this.RD1x = a6g.t7m(i7b, "id");
                this.RC1x = a6g.t7m(i7b, "type");
                if (this.RC1x == 18) {
                    var bN8F = this.S7L.eH9y(this.RD1x),
                        rd3x = l7e.pB2x(bN8F);
                    if (!FY7R) {
                        if (rd3x == 10) {
                            bJo3x();
                            return
                        } else if (rd3x == 100) {
                            buU0x(bN8F);
                            return
                        }
                    } else {
                        if (rd3x == 10) {
                            bJo3x();
                            return
                        } else if (rd3x == 100) {
                            buU0x(bN8F);
                            return
                        } else if (rd3x == 11) {
                            bZA8s();
                            return
                        } else {
                            a6g.x7q(this.BR6L, "z-pause z-loading");
                            if (FY7R == this.BR6L && ex9o.play && !ex9o.ended) {
                                this.RM1x.bug9X()
                            } else {
                                this.BR6L = FY7R;
                                this.RM1x.bZT8L(bN8F)
                            }
                            return
                        }
                    }
                } else if (this.RC1x == 70) {
                    if (a6g.bE8w(i7b, "z-noprogram")) {
                        m7f.Z7S.L7E({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.bZw8o()
            }
        }
    }();
    b7g.bZw8o = function () {
        var hW0x = this.S7L.eH9y(this.RD1x),
            tm3x = l7e.bNV4Z(this.RC1x, hW0x);
        tm3x.title = tm3x.title || "";
        tm3x.author = tm3x.author || "";
        tm3x.picUrl = tm3x.picUrl || "";
        tm3x.authors = tm3x.authors || "";
        if (this.RC1x == 70) {
            this.RD1x = this.RD1x.slice(0, -4)
        }
        this.z7s("onfinish", {
            id: this.RD1x,
            type: this.RC1x,
            data: tm3x
        })
    };
    b7g.wu4y = function (d7e) {
        var j7c = d7e.data;
        if (!this.BR6L) {
            return
        }
        switch (d7e.action) {
        case "play":
            a6g.fb9S(this.BR6L, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a6g.x7q(this.BR6L, "z-pause z-loading");
            break;
        case "error":
            m7f.Z7S.L7E({
                type: 2,
                tip: "试听遇到问题，播放失败"
            });
            a6g.x7q(this.BR6L, "z-pause z-loading");
            break;
        case "playing":
            a6g.fb9S(this.BR6L, "z-loading", "z-pause");
            break;
        case "waiting":
            a6g.fb9S(this.BR6L, "z-pause", "z-loading");
            break
        }
    };
    b7g.bZv8n = function (d7e) {
        if (d7e.result.code == 407) {
            this.XY3x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.XY3x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b7g.bJq3x = function (d7e) {
        if (!this.uN4R || d7e.index < 0 || d7e.index > 5) {
            return
        }
        this.RM1x.bug9X();
        var bg7Z = Xy3x[d7e.index],
            e7d = NEJ.X({}, this.se3x);
        e7d.cache = {
            klass: q7j.EC7v,
            clear: true,
            onerror: this.bZv8n.g7b(this)
        };
        e7d.cache.lkey = "search-publish-" + bg7Z.type + "-" + this.uN4R;
        e7d.item = {
            klass: bg7Z.item,
            getRestrictLevel: l7e.pB2x,
            dur2time: l7e.lg1x
        };
        if (!e7d.cache.data) {
            e7d.cache.data = {}
        }
        e7d.cache.data.s = this.uN4R;
        e7d.cache.data.type = bg7Z.type;
        e7d.cache.data.isPub = true;
        if (bg7Z.type == 1) {
            e7d.cache.data.hlpretag = '<span class="s-fc7">';
            e7d.cache.data.hlposttag = "</span>"
        }
        e7d.onemptylist = this.bZu8m.g7b(this, this.uN4R);
        if (!!this.Gg7Z) this.S7L.ut4x(this.Gg7Z);
        if (!!this.dK9B) {
            this.dK9B = this.dK9B.T7M()
        }
        this.dK9B = I7B.mU1x.A7t(e7d);
        this.Gg7Z = e7d.cache.lkey
    };
    b7g.qU3x = function (d7e) {
        d7e.value = a6g.iI0x("m-publish-search-loading")
    };
    b7g.bZu8m = function (J7C, d7e) {
        a6g.dI9z(d7e.parent, "m-publish-emtpy-message", {
            key: J7C
        });
        d7e.stopped = true
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        dv8n = c7f("nej.p"),
        v7o = c7f("nej.j"),
        ca8S = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        w7p = c7f("nm.w"),
        b7g, K7D;
    var bZs8k = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w7p.Gi7b = NEJ.C();
    b7g = w7p.Gi7b.O7H(bC8u.ei9Z);
    var gi9Z = a6g.es9j("m-wgt-receiverInput");
    var bZr8j = a6g.es9j("m-wgt-receiverList");
    var iZ0x = a6g.tO3x(bZs8k);
    var bZn7g = a6g.es9j('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b7g.cx8p = function (e7d) {
        this.bk7d = [];
        this.wz4D = e7d.receiver || null;
        this.bZl7e = e7d.unique || false;
        this.nt2x = e7d.err;
        this.bJg3x(this.bJf3x, e7d.uid);
        this.cD8v(e7d)
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.Rf1x();
        this.Rd1x();
        this.ZI3x();
        if (e7d.receiver) this.bvN0x(e7d.receiver.nickname, e7d.receiver.userId);
        a6g.ba7T(this.Bo6i, "display", "block");
        a6g.ba7T(this.bvT0x, "cursor", "text");
        a6g.ba7T(this.Bo6i, "cursor", "text")
    };
    b7g.ce8W = function () {
        var j7c = this.bJe3x();
        this.cd8V = a6g.iu0x(a6g.bZ8R(gi9Z, {
            receiver: this.wz4D,
            users: j7c
        }));
        this.mb1x = iZ0x
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var bQ8I = a6g.H7A(this.n7g, "j-flag");
        var ho0x = a6g.H7A(this.n7g, "j-item");
        this.bvT0x = bQ8I[0];
        this.bJd3x = bQ8I[1];
        this.ee9V = bQ8I[2];
        this.Bo6i = bQ8I[3];
        this.Vq2x = bQ8I[4];
        this.bwd0x = bQ8I[5];
        this.fL9C = ho0x;
        a6g.y7r(this.fL9C[0], "j-selected");
        h7a.s7l(this.ee9V, "keyup", this.bwf0x.g7b(this));
        h7a.s7l(this.ee9V, "keydown", this.QD1x.g7b(this));
        h7a.s7l(this.ee9V, "focus", this.lb1x.g7b(this));
        h7a.s7l(this.Vq2x, "click", this.bZa7T.g7b(this));
        h7a.s7l(this.bvT0x, "click", this.bYZ7S.g7b(this));
        h7a.s7l(document.body, "click", this.ot2x.g7b(this));
        h7a.s7l(this.ee9V, "input", this.fN9E.g7b(this));
        h7a.s7l(this.ee9V, "blur", this.oa2x.g7b(this))
    };
    b7g.bD8v = function (e7d) {
        h7a.mw1x(document.body, "click", this.ot2x.g7b(this));
        this.bG8y();
        this.ZI3x();
        this.bYX7Q();
        this.ot2x()
    };
    b7g.bwf0x = function (d7e) {
        h7a.bh7a(d7e);
        var jN0x = d7e.keyCode || d7e.which;
        var bo7h = this.ee9V.value;
        var bq7j = this.fL9C.length;
        var ro3x = a6g.H7A(this.n7g, "j-selected")[0];
        switch (jN0x) {
        case 13:
            var lf1x = a6g.gh9Y(ro3x, "data-username");
            var ij0x = a6g.gh9Y(ro3x, "data-userId");
            this.bvN0x(lf1x, ij0x);
            this.ot2x();
            this.ee9V.value = "";
            break;
        case 38:
            var r7k = a6g.gh9Y(ro3x, "data-index") - 1 < 0 ? bq7j - 1 : a6g.gh9Y(ro3x, "data-index") - 1;
            a6g.x7q(ro3x, "j-selected");
            a6g.y7r(this.fL9C[r7k], "j-selected");
            break;
        case 40:
            var r7k = parseInt(a6g.gh9Y(ro3x, "data-index")) + 1 >= bq7j ? 0 : parseInt(a6g.gh9Y(ro3x, "data-index")) + 1;
            a6g.x7q(ro3x, "j-selected");
            a6g.y7r(this.fL9C[r7k], "j-selected");
            break;
        default:
            this.wZ4d()
        }
    };
    b7g.QD1x = function (d7e) {
        var jN0x = d7e.keyCode || d7e.which;
        var bo7h = this.ee9V.value;
        var r7k = a6g.H7A(this.n7g, "j-receiver").length - 1;
        if (jN0x === 8 && bo7h === "") this.bYW7P(r7k)
    };
    b7g.fN9E = function (d7e) {
        var bo7h = this.ee9V.value;
        if (bo7h.length > 10) {
            this.ee9V.value = bo7h.substring(0, 10);
            return
        }
        dv8n.ds8k.browser == "ie" && dv8n.ds8k.version < "7.0" ? setTimeout(this.bwI0x.g7b(this), 0) : this.bwI0x();
        this.Rd1x()
    };
    b7g.lb1x = function () {
        if (this.bk7d[0]) this.wZ4d();
        else this.bJg3x(this.bYN7G);
        a6g.ba7T(this.Bo6i, "display", "none")
    };
    b7g.oa2x = function () {
        var bq7j = a6g.H7A(this.n7g, "j-receiver").length;
        if (this.ee9V.value.trim() == "" && bq7j <= 0) a6g.ba7T(this.Bo6i, "display", "block")
    };
    b7g.bvN0x = function (lf1x, ij0x) {
        var IT8L = this.Qt1x();
        if (IT8L.length >= 10) {
            this.dP9G();
            return
        }
        var bc7V;
        for (bc7V = 0; bc7V < IT8L.length; bc7V++) {
            if (IT8L[bc7V] == ij0x) {
                this.ot2x();
                return
            }
        }
        if (!lf1x || !ij0x) return;
        var f7c = a6g.dy8q(a6g.iu0x(a6g.bZ8R(bZn7g, {
            username: lf1x,
            userId: ij0x
        })));
        var bI8A = this.bJd3x.parentNode;
        if (this.bZl7e) {
            this.ZI3x()
        }
        bI8A.insertBefore(f7c, this.bJd3x);
        this.ee9V.value = "";
        var bq7j = a6g.H7A(this.n7g, "j-receiver").length;
        if (bq7j > 1) a6g.ba7T(this.Bo6i, "display", "none");
        this.bwI0x();
        this.Rd1x()
    };
    b7g.ZI3x = function () {
        var Qn1x = a6g.H7A(this.n7g, "j-receiver");
        var bc7V;
        if (Qn1x.length > 0) {
            for (bc7V = 0; bc7V < Qn1x.length; bc7V++) {
                a6g.cJ8B(Qn1x[bc7V], false)
            }
        }
    };
    b7g.bYX7Q = function () {
        this.ee9V.value = ""
    };
    b7g.bYW7P = function (r7k) {
        this.dP9G(!0);
        var Qn1x = a6g.H7A(this.n7g, "j-receiver");
        a6g.cJ8B(Qn1x[r7k], false);
        this.Rd1x()
    };
    b7g.wZ4d = function () {
        var bo7h = this.ee9V.value;
        var bv8n = bo7h.trim().toLowerCase();
        var j7c;
        bv8n = bv8n.replace(/\[/g, "\\[");
        bv8n = bv8n.replace(/\]/g, "\\]");
        j7c = this.bJe3x(bv8n);
        this.bYM7F(j7c)
    };
    b7g.ot2x = function (d7e) {
        a6g.ba7T(this.Vq2x, "display", "none")
    };
    b7g.dP9G = function (fr9i) {
        if (fr9i && this.nt2x) {
            a6g.ba7T(this.nt2x, "display", "none");
            return
        }
        if (this.nt2x) a6g.ba7T(this.nt2x, "display", "block")
    };
    b7g.bZa7T = function (d7e) {
        h7a.cp8h(d7e);
        var bO8G = d7e.target || d7e.srcElement;
        if (a6g.bE8w(bO8G, "j-flag")) return;
        var bI8A = bO8G.nodeName.toLowerCase() == "a" ? bO8G.parentNode : bO8G.parentNode.parentNode;
        var lf1x = a6g.gh9Y(bI8A, "data-username");
        var ij0x = a6g.gh9Y(bI8A, "data-userId");
        this.bvN0x(lf1x, ij0x);
        this.ot2x();
        a6g.ba7T(this.Bo6i, "display", "none")
    };
    b7g.bYZ7S = function (d7e) {
        h7a.bh7a(d7e);
        var bO8G = d7e.target || d7e.srcElement;
        if (a6g.bE8w(bO8G.parentNode, "j-receiver")) {
            a6g.cJ8B(bO8G.parentNode, false);
            this.dP9G(!0);
            this.Rd1x()
        } else this.ee9V.focus()
    };
    b7g.bwI0x = function () {
        this.bwd0x.innerHTML = this.ee9V.value;
        var cA8s = this.bwd0x.offsetWidth + 2;
        a6g.ba7T(this.ee9V, "width", cA8s + "px")
    };
    b7g.Rd1x = function () {
        var baw4A = a6g.hO0x(this.ee9V, this.n7g).y;
        var bIX3x = Math.floor((baw4A - 8) / 27);
        if (bIX3x < 0) return;
        a6g.ba7T(this.bvT0x, "height", 19 + bIX3x * 29 + "px")
    };
    b7g.Rf1x = function () {
        var qc2x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qc2x.length; i++) {
            a6g.ba7T(this.bwd0x, qc2x[i], a6g.df8X(this.ee9V, qc2x[i]))
        }
    };
    b7g.bJg3x = function (cK8C, C7v) {
        var dn8f = C7v ? C7v : window.GUser.userId;
        var Y7R = "/api/user/getfollows/" + dn8f;
        var gm9d = v7o.bn7g(Y7R, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cK8C.g7b(this),
            onerror: function (j7c) {
                this.bk7d = []
            }, onbeforerequest: function (j7c) {}
        })
    };
    b7g.bJf3x = function (j7c) {
        this.bk7d = JSON.parse(j7c).follow || [];
        var C7v = GUser.userId;
        for (var i = 0; i < this.bk7d.length; i++) {
            if (this.bk7d[i].userId == C7v) {
                this.bk7d.splice(i, 1);
                continue
            }
            this.bk7d[i].avatarUrl = this.bk7d[i].avatarUrl + "?param=30y30"
        }
    };
    b7g.bYN7G = function (j7c) {
        if (this.bk7d[0]) return;
        this.bJf3x(j7c);
        this.wZ4d()
    };
    b7g.bJe3x = function (bv8n) {
        var bv8n = bv8n ? bv8n : "";
        this.bk7d = this.bk7d[0] ? this.bk7d : [];
        var bq7j = this.bk7d.length;
        var Qc1x = this.Qt1x();
        var sH3x = [];
        var PO0x, Px0x, beS5X;
        if (!this.bk7d[0]) return sH3x;
        for (var bc7V = 0; bc7V < bq7j; bc7V++) {
            beS5X = false;
            for (var v7o = 0; v7o < Qc1x.length; v7o++) {
                if (this.bk7d[bc7V].userId == Qc1x[v7o]) {
                    beS5X = true;
                    break
                }
            }
            if (beS5X) continue;
            PO0x = this.bk7d[bc7V].nickname.toLowerCase().search(bv8n);
            Px0x = this.bk7d[bc7V].py ? this.bk7d[bc7V].py.toLowerCase().search(bv8n) : -1;
            if (PO0x !== -1 || Px0x != -1) sH3x.push(this.bk7d[bc7V])
        }
        return sH3x
    };
    b7g.bYM7F = function (j7c) {
        a6g.dI9z(this.Vq2x, bZr8j, {
            users: j7c
        });
        a6g.y7r(a6g.H7A(this.n7g, "j-item")[0], "j-selected");
        this.fL9C = a6g.H7A(this.n7g, "j-item");
        a6g.ba7T(this.Vq2x, "display", "block")
    };
    b7g.Qt1x = function () {
        var sH3x = a6g.H7A(this.n7g, "j-receiver") || [];
        var ij0x = [];
        for (var i = 0; i < sH3x.length; i++) {
            ij0x.push(a6g.gh9Y(sH3x[i], "data-id"))
        }
        return ij0x
    };
    b7g.cGd5i = function () {
        var ij0x = this.Qt1x();
        var sH3x = [];
        for (var i = 0; i < ij0x.length; i++) {
            for (var j = 0; j < this.bk7d.length; j++) {
                if (ij0x[i] == this.bk7d[j].userId) sH3x.push(this.bk7d[j])
            }
        }
        return sH3x
    };
    b7g.bYz7s = function () {
        this.ZI3x()
    };
    w7p.Gi7b.L7E = function (e7d) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            m7f.pi2x.L7E({
                title: "登录"
            });
            return
        }
        e7d = e7d || {};
        if (e7d.parent === undefined) e7d.parent = document.body;
        !!this.ff9W && this.ff9W.T7M();
        this.ff9W = this.A7t(e7d)
    };
    w7p.Gi7b.bu8m = function () {
        !!this.ff9W && this.ff9W.T7M()
    };
    w7p.Gi7b.GU7N = function () {
        return this.ot2x()
    };
    w7p.Gi7b.cGe5j = function () {
        return this.wZ4d()
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        l7e = c7f("nm.x"),
        m7f = c7f("nm.l"),
        b7g, K7D;
    m7f.IC8u = NEJ.C();
    b7g = m7f.IC8u.O7H(m7f.blX7Q);
    K7D = m7f.IC8u.cs8k;
    b7g.bl7e = function () {
        var GX7Q;
        var bYr7k = function (D7w, J7C) {
            GX7Q = GX7Q || [];
            if (J7C != "18") GX7Q.push({
                key: J7C,
                value: D7w
            })
        };
        return function (e7d) {
            this.bm7f(e7d);
            if (e7d.upwards) {
                a6g.y7r(this.n7g, "m-emts-up")
            } else {
                a6g.x7q(this.n7g, "m-emts-up")
            } if (e7d.rightwards) {
                a6g.y7r(this.n7g, "m-emts-right")
            } else {
                a6g.x7q(this.n7g, "m-emts-right")
            } if (!GX7Q) {
                var bz8r = l7e.cnf1x();
                k7d.eC9t(bz8r, bYr7k)
            }
            var bq7j = GX7Q.length;
            GX7Q.splice(bq7j - 2, 0, {
                key: "18",
                value: "186"
            });
            this.bbW4a = GX7Q;
            this.bYp7i = !!e7d.autoHide
        }
    }();
    b7g.ce8W = function () {
        this.cd8V = "ntp-portrait"
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var i7b = a6g.H7A(this.n7g, "j-flag");
        this.bK8C = i7b[0];
        this.bYi7b = i7b[1];
        this.bYh7a = i7b[2];
        this.bYg7Z = i7b[3];
        h7a.s7l(this.bK8C, "click", this.xO5T.g7b(this));
        h7a.s7l(this.bYi7b, "click", this.Hd7W.g7b(this, 1));
        h7a.s7l(this.bYg7Z, "click", this.Hd7W.g7b(this, 2))
    };
    b7g.bfs5x = function (r7k) {
        this.bcf4j = r7k;
        var bi7b = (r7k - 1) * 50;
        var i7b = this.bbW4a.slice(bi7b, Math.min(bi7b + 50, this.bbW4a.length));
        this.bK8C.innerHTML = a6g.bZ8R("jst-portrait", {
            plist: i7b
        }, {
            purl: l7e.bOK4O
        });
        this.bYh7a.innerText = r7k + "/" + Math.ceil(this.bbW4a.length / 50)
    };
    b7g.Hd7W = function (r7k) {
        var bYe7X = Math.ceil(this.bbW4a.length / 50);
        if (r7k == 1 && this.bcf4j == 1 || r7k == 2 && this.bcf4j == bYe7X) return;
        r7k == 1 ? this.bfs5x(this.bcf4j - 1) : this.bfs5x(this.bcf4j + 1)
    };
    b7g.xO5T = function (d7e) {
        var F7y = h7a.W7P(d7e, "d:text");
        if (!F7y) return;
        var d7e = {
            url: a6g.t7m(F7y, "url"),
            text: a6g.t7m(F7y, "text")
        };
        this.z7s("onselect", d7e);
        if (this.bYp7i && !d7e.stopped) {
            this.bu8m()
        }
    };
    b7g.L7E = function () {
        K7D.L7E.call(this);
        this.bfs5x(1)
    }
})();
(function () {
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        dv8n = c7f("nej.p"),
        be7X = c7f("nej.h"),
        I7B = c7f("nej.ut"),
        ku1x = /^[#?]+/,
        HA7t = /#(.*?)$/,
        xN5S = window,
        bfw5B = !history.pushState || dv8n.HP8H.android || !history.auto;
    var bcu4y = function (Y7R, bfz5E) {
        xN5S.history[!bfz5E ? "pushState" : "replaceState"](null, document.title, Y7R)
    };
    var bcB4F = function () {
        return location.parse(xN5S.location.href)
    };
    bcu4y = bcu4y.eB9s(function (d7e) {
        if (!bfw5B) return;
        var bf7Y = d7e.args;
        d7e.stopped = !0;
        Y7R = bf7Y[0].replace(ku1x, "");
        !bf7Y[1] ? xN5S.location.hash = Y7R : xN5S.location.replace("#" + Y7R)
    });
    bcB4F = bcB4F.eB9s(function (d7e) {
        if (!bfw5B) return;
        d7e.stopped = !0;
        var dO9F = HA7t.test(xN5S.location.href) ? RegExp.$1 : "";
        d7e.value = location.parse(dO9F.replace(ku1x, ""))
    });
    location.redirect = function (Y7R, bfz5E) {
        bcu4y(Y7R, bfz5E);
        return this
    };
    location.active = function () {
        var eg9X, Y7R, jA0x, cX8P, RU1x;
        var bfC5H = function (hn0x) {
            if (!!cX8P) {
                cX8P = !1;
                return
            }
            var d7e = {
                oldValue: jA0x,
                newValue: bcB4F()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h7a.z7s(location, "beforeurlchange", d7e);
                if (d7e.stopped) {
                    if (!!jA0x) {
                        cX8P = !0;
                        bcu4y(jA0x.href, !0)
                    }
                    return
                }
            }
            Y7R = xN5S.location.href;
            jA0x = d7e.newValue;
            h7a.z7s(location, "urlchange", jA0x);
            be7X.bgw5B(jA0x.href)
        };
        var bIF3x = function () {
            if (Y7R != xN5S.location.href) bfC5H();
            eg9X = requestAnimationFrame(bIF3x)
        };
        return function (bJ8B) {
            if (!!RU1x) return this;
            RU1x = !0;
            xN5S = bJ8B || window;
            if (bfw5B && "onhashchange" in window && dv8n.nj1x.trident2) {
                h7a.s7l(xN5S, "hashchange", bfC5H);
                bfC5H()
            } else if (!eg9X) {
                eg9X = requestAnimationFrame(bIF3x)
            }
            return this
        }
    }();
    location.parse = function () {
        var gK0x = /^https?:\/\/.*?\//i,
            ku1x = /[?#]/;
        return function (Y7R) {
            var o7h = {
                href: Y7R
            };
            Y7R = (Y7R || "").replace(gK0x, "/").split(ku1x);
            var cF8x = 1;
            if (Y7R[0] == "/" && (Y7R[1] || "").indexOf("/") == 0) cF8x = 2;
            o7h.path = Y7R.splice(0, cF8x).join("?");
            o7h.query = k7d.hv0x(Y7R.join("&"));
            return o7h
        }
    }();
    location.same = function (Y7R) {
        return bcB4F().href == Y7R
    };
    I7B.fJ9A.A7t({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        go9f = c7f("nm.ut");
    go9f.vw4A = function (ep9g) {
        var he0x = {
            text: "",
            start: 0,
            end: 0
        };
        if (ep9g.setSelectionRange) {
            he0x.start = ep9g.selectionStart;
            he0x.end = ep9g.selectionEnd;
            he0x.text = he0x.start != he0x.end ? ep9g.value.substring(he0x.start, he0x.end) : ""
        } else if (document.selection) {
            var i, bcM4Q = document.selection.createRange(),
                xA5F = document.body.createTextRange();
            xA5F.moveToElementText(ep9g);
            he0x.text = bcM4Q.text;
            he0x.bookmark = bcM4Q.getBookmark();
            for (i = 0; xA5F.compareEndPoints("StartToStart", bcM4Q) < 0 && bcM4Q.moveStart("character", -1) !== 0; i++) {
                if (ep9g.value.charAt(i) == "\n") {
                    i++
                }
            }
            he0x.start = i;
            he0x.end = he0x.text.length + he0x.start
        }
        return he0x
    };
    go9f.bcR4V = function (ep9g, he0x) {
        var xA5F;
        if (!he0x) {
            he0x = {
                text: "",
                start: 0,
                end: 0
            }
        }
        ep9g.focus();
        if (ep9g.setSelectionRange) {
            ep9g.setSelectionRange(he0x.start, he0x.end)
        } else if (ep9g.createTextRange) {
            xA5F = ep9g.createTextRange();
            if (ep9g.value.length === he0x.start) {
                xA5F.collapse(false);
                xA5F.select()
            } else {
                xA5F.moveToBookmark(he0x.bookmark);
                xA5F.select()
            }
        }
    };
    go9f.HY8Q = function (ep9g, he0x, cG8y) {
        var he0x = he0x || {
            text: "",
            start: 0,
            end: 0
        };
        var bfL5Q, bIE3x, xA5F, Nm9d, bID3x, bIC3x, Hu7n;
        this.bcR4V(ep9g, he0x);
        if (ep9g.setSelectionRange) {
            bfL5Q = ep9g.value;
            bIE3x = bfL5Q.substring(0, he0x.start) + cG8y + bfL5Q.substring(he0x.end);
            bID3x = bIC3x = he0x.start + cG8y.length;
            Hu7n = ep9g.scrollTop;
            ep9g.value = bIE3x;
            if (ep9g.scrollTop != Hu7n) {
                ep9g.scrollTop = Hu7n
            }
            ep9g.setSelectionRange(bID3x, bIC3x)
        } else if (ep9g.createTextRange) {
            Nm9d = document.selection.createRange();
            Nm9d.text = cG8y;
            Nm9d.setEndPoint("StartToEnd", Nm9d);
            Nm9d.select()
        }
        h7a.z7s(ep9g, "keyup")
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        dv8n = c7f("nej.p"),
        k7d = c7f("nej.u"),
        ca8S = c7f("nej.ut"),
        w7p = c7f("nm.w"),
        go9f = c7f("nm.ut"),
        b7g;
    w7p.bIB3x = NEJ.C();
    b7g = w7p.bIB3x.O7H(ca8S.cH8z);
    b7g.cx8p = function (e7d) {
        this.cD8v(e7d)
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.gp9g = e7d.txt;
        this.Hx7q = e7d.sgtsContainer;
        this.bIy3x = e7d.sgtsList[0];
        this.bep5u = e7d.sgtsItem;
        this.oE2x = e7d.rangeData;
        this.HQ8I = e7d.atIndex;
        a6g.y7r(this.bep5u[0], "selected-item");
        this.MO9F()
    };
    b7g.bD8v = function () {
        this.bG8y();
        h7a.mw1x(document.body, "keyup", this.bIx3x.g7b(this));
        h7a.mw1x(document.body, "click", this.bIw3x.g7b(this))
    };
    b7g.MO9F = function () {
        this.bX8P([
            [document.body, "keyup", this.bIx3x.g7b(this)],
            [document.body, "click", this.bIw3x.g7b(this)],
            [this.gp9g, "keydown", this.bIu3x.g7b(this)],
            [this.gp9g, "keypress", this.bIu3x.g7b(this)],
            [this.bIy3x, "click", this.bIt3x.g7b(this)],
            [this.bIy3x, "mouseover", this.HF7y.g7b(this)]
        ])
    };
    b7g.HF7y = function (d7e) {
        var bO8G = h7a.W7P(d7e);
        var p7i = a6g.H7A(this.Hx7q, "selected-item");
        if (a6g.bE8w(bO8G, "j-sgt")) {
            a6g.x7q(p7i[0], "selected-item");
            a6g.y7r(bO8G, "selected-item")
        }
    };
    b7g.bIx3x = function (d7e) {
        var p7i = a6g.H7A(this.Hx7q, "selected-item");
        var bq7j = this.bep5u.length;
        var jN0x = d7e.keyCode || d7e.which;
        var r7k, j7c;
        switch (jN0x) {
        case 38:
            r7k = a6g.gh9Y(p7i[0], "data-index") - 1 < 0 ? bq7j - 1 : a6g.gh9Y(p7i[0], "data-index") - 1;
            a6g.x7q(p7i[0], "selected-item");
            a6g.y7r(this.bep5u[r7k], "selected-item");
            break;
        case 40:
            r7k = parseInt(a6g.gh9Y(p7i[0], "data-index")) + 1 >= bq7j ? 0 : parseInt(a6g.gh9Y(p7i[0], "data-index")) + 1;
            a6g.x7q(p7i[0], "selected-item");
            a6g.y7r(this.bep5u[r7k], "selected-item");
            break;
        case 13:
            this.bIt3x(d7e);
            break;
        case 27:
            this.ot2x();
            break;
        case 32:
            var bo7h = this.gp9g.value;
            var r7k = go9f.vw4A(this.gp9g);
            if (bo7h.charAt(r7k.start - 1) !== " ") return;
            this.ot2x();
            break
        }
    };
    b7g.bIu3x = function (d7e) {
        var jN0x = d7e.keyCode || d7e.which;
        if (jN0x === 13 || jN0x === 38 || jN0x === 40) {
            h7a.cp8h(d7e);
            d7e.keyCode = 0;
            d7e.which = 0;
            d7e.returnvalue = false
        }
    };
    b7g.bIw3x = function (d7e) {
        var bO8G = d7e.target || d7e.srcElement;
        if (bO8G === this.gp9g) return;
        this.ot2x()
    };
    b7g.bIt3x = function (d7e) {
        h7a.bh7a(d7e);
        var p7i = a6g.H7A(this.Hx7q, "selected-item")[0];
        var ro3x = d7e.target || d7e.srcElement;
        var u7n = d7e.type;
        if (a6g.bE8w(ro3x, "lst")) return;
        if (u7n == "click") {
            a6g.x7q(p7i, "selected-item");
            a6g.y7r(ro3x, "selected-item")
        } else ro3x = p7i;
        var j7c = ro3x.innerHTML + " ";
        this.ot2x();
        var he0x = this.oE2x;
        he0x.start = this.HQ8I + 1;
        if (dv8n.ds8k.browser == "ie" && dv8n.ds8k.version < "9.0") {
            this.gp9g.value = this.gp9g.value.substring(0, he0x.start) + this.gp9g.value.substring(he0x.end, this.gp9g.value.length);
            he0x.end = he0x.start
        }
        go9f.HY8Q(this.gp9g, he0x, j7c);
        h7a.z7s(this.gp9g, "keyup")
    };
    b7g.ot2x = function (d7e) {
        if (!!this.Hx7q) a6g.ba7T(this.Hx7q, "display", "none");
        this.T7M()
    };
    b7g.wZ4d = function (d7e) {
        if (!!this.Hx7q) a6g.ba7T(this.Hx7q, "display", "block")
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        w7p = c7f("nm.w"),
        ca8S = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        b7g;
    var bXB7u = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bXA7t = a6g.es9j("m-wgt-atlist");
    var iZ0x = a6g.tO3x(bXB7u);
    w7p.bIq3x = NEJ.C();
    b7g = w7p.bIq3x.O7H(bC8u.ei9Z);
    b7g.cx8p = function (e7d) {
        this.fP9G = {};
        this.cD8v()
    };
    b7g.bl7e = function (e7d) {
        this.fP9G.txt = a6g.B7u(e7d.target);
        this.fP9G.data = e7d.data;
        this.fP9G.offset = e7d.offset;
        this.fP9G.rangeData = e7d.rangeData;
        this.fP9G.atIndex = e7d.atIndex;
        this.bXv7o(e7d);
        this.bm7f(e7d);
        this.fP9G.sgtsContainer = this.n7g;
        this.fP9G.sgtsList = a6g.H7A(this.n7g, "lst");
        this.fP9G.sgtsItem = a6g.H7A(this.n7g, "f-thide");
        this.JM8E(e7d);
        this.bXr7k = w7p.bIB3x.A7t(this.fP9G)
    };
    b7g.bD8v = function (e7d) {
        this.bG8y();
        this.bXr7k.T7M()
    };
    b7g.ce8W = function () {
        this.mb1x = iZ0x
    };
    b7g.bW8O = function () {
        this.cg8Y()
    };
    b7g.bXv7o = function (e7d) {
        this.n7g = a6g.dy8q(a6g.iu0x(a6g.bZ8R(bXA7t, e7d.data)))
    };
    b7g.JM8E = function (e7d) {
        var bIi3x = a6g.H7A(this.n7g, "selected-item")[0];
        if (bIi3x) a6g.x7q(bIi3x, "selected-item");
        var cY8Q = e7d.offset.x + "px";
        var hB0x = e7d.offset.y + "px";
        a6g.ba7T(this.n7g, "left", cY8Q);
        a6g.ba7T(this.n7g, "top", hB0x)
    }
})();
(function () {
    var c7f = NEJ.P,
        v7o = c7f("nej.j"),
        go9f = c7f("nm.ut");
    go9f.bIh3x = function (bo7h) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dh8Z = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var LJ9A = bo7h.match(dh8Z) || [];
        for (var bc7V = 0; bc7V < LJ9A.length; bc7V++) {
            LJ9A[bc7V] = LJ9A[bc7V].split("@")[1]
        }
        LJ9A = LJ9A.reverse();
        var ij0x = GUser.userId;
        var bXf7Y = v7o.sw3x("mentioners" + ij0x) || [];
        var jV1x = LJ9A.concat(bXf7Y);
        if (jV1x.length > 10) jV1x = jV1x.slice(0, 10);
        v7o.uW4a("mentioners" + ij0x, jV1x)
    };
    go9f.bXe7X = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var ij0x = GUser.userId;
        return v7o.sw3x("mentioners" + ij0x) || []
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        dv8n = c7f("nej.p"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        ca8S = c7f("nej.ut"),
        w7p = c7f("nm.w"),
        go9f = c7f("nm.ut"),
        l7e = c7f("nm.x"),
        b7g;
    var FullscreenApi = l7e.EA7t || {};
    w7p.bIg3x = NEJ.C();
    b7g = w7p.bIg3x.O7H(ca8S.cH8z);
    b7g.cx8p = function (e7d) {
        this.cD8v(e7d);
        this.bIf3x()
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.gp9g = e7d.txt;
        this.n7g = e7d.body;
        this.bId3x = e7d.before;
        this.NN0x = e7d.flag;
        this.bWX7Q = e7d.after;
        this.ra3x = [];
        if (dv8n.ds8k.browser != "ie") {
            setTimeout(function () {
                this.mh1x()
            }.g7b(this), 0)
        }
        this.MO9F()
    };
    b7g.bD8v = function () {
        this.bG8y();
        if (this.ux4B) this.ux4B.T7M();
        delete this.ux4B
    };
    b7g.MO9F = function () {
        this.bX8P([
            [this.gp9g, "keyup", this.bIb3x.g7b(this, this.gp9g)],
            [this.gp9g, "click", this.bIb3x.g7b(this, this.gp9g)],
            [this.gp9g, "focus", this.mh1x.g7b(this)]
        ])
    };
    b7g.mh1x = function (d7e) {
        this.oE2x = go9f.vw4A(this.gp9g)
    };
    b7g.bIf3x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var dn8f = window.GUser.userId;
        var Y7R = "/api/user/getfollows/" + dn8f;
        var gm9d = v7o.bn7g(Y7R, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j7c) {
                window.GFollowers = JSON.parse(j7c).follow
            }.g7b(this),
            onerror: function (j7c) {}, onbeforerequest: function (j7c) {}
        })
    };
    b7g.bHV3x = function (index) {
        var D7w = this.gp9g.value,
            bi7b, bgG5L, bgH5M, Nl9c;
        this.bId3x.innerHTML = k7d.dG9x(D7w.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mz1x = a6g.H7A(this.bId3x, "j-test");
        for (var bc7V = 0; bc7V < mz1x.length; bc7V++) {
            mz1x[bc7V].innerText = " "
        }
        this.NN0x.innerHTML = D7w.charAt(index);
        this.bWX7Q.innerHTML = k7d.dG9x(D7w.substr(index + 1, D7w.length));
        Nl9c = parseInt(a6g.df8X(this.gp9g, "lineHeight"));
        a6g.ba7T(this.n7g, "display", "block");
        bgG5L = a6g.hO0x(this.NN0x, this.n7g);
        bgH5M = a6g.hO0x(this.gp9g);
        a6g.ba7T(this.n7g, "display", "none");
        var cY8Q = bgG5L.x + bgH5M.x;
        var hB0x = bgG5L.y + bgH5M.y + Nl9c;
        bi7b = {
            x: cY8Q,
            y: hB0x
        };
        this.bWL7E(bi7b)
    };
    b7g.bIb3x = function (ep9g, d7e) {
        h7a.cp8h(d7e);
        var ep9g = ep9g;
        var D7w = ep9g.value;
        var bq7j = D7w.length;
        var r7k = go9f.vw4A(ep9g).start;
        var bHS3x = 0;
        var jN0x = d7e.keyCode || d7e.which;
        var jV1x;
        this.oE2x = go9f.vw4A(ep9g);
        var bHR3x = false;
        for (var i = 1; i < 20; i++) {
            jV1x = r7k - i;
            if (D7w.charAt(jV1x) === " ") break;
            if (D7w.charAt(jV1x) === "@") {
                bHR3x = true;
                this.HQ8I = bHS3x = jV1x;
                break
            }
        }
        if (bHR3x && d7e.shiftKey === false && jN0x !== 38 && jN0x !== 40) {
            if (jN0x !== 27 && jN0x !== 13) {
                this.ux4B ? this.ux4B.T7M() : null;
                this.bHV3x(bHS3x)
            }
        } else if (jN0x !== 38 && jN0x !== 40 && d7e.keyCode !== 32) {
            this.ux4B ? this.ux4B.T7M() : null
        }
    };
    b7g.bWL7E = function (bi7b) {
        var bi7b = bi7b;
        var j7c = this.vb4f();
        var e7d = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi7b,
            data: j7c,
            target: this.gp9g,
            rangeData: this.oE2x,
            atIndex: this.HQ8I
        };
        this.ux4B ? this.ux4B.T7M() : null;
        this.ux4B = w7p.bIq3x.A7t(e7d)
    };
    b7g.vb4f = function () {
        var bWH7A = go9f.vw4A(this.gp9g).start;
        var bWG7z = this.HQ8I + 1;
        var bHQ3x = go9f.bXe7X() || [];
        var bHP3x = [];
        var bv8n = this.gp9g.value.substring(bWG7z, bWH7A).toLowerCase();
        bv8n = bv8n.replace(/\[/g, "\\[");
        bv8n = bv8n.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.ra3x = window.GFollowers[0] ? window.GFollowers : []
        } else this.ra3x = []; if (!this.ra3x[0]) this.bIf3x();
        for (var bc7V = 0; bc7V < bHQ3x.length; bc7V++) {
            for (var v7o = 0; v7o < this.ra3x.length; v7o++) {
                if (this.ra3x[v7o].nickname == bHQ3x[bc7V]) bHP3x.push(this.ra3x[v7o])
            }
        }
        this.ra3x = k7d.cqe1x(this.ra3x, bHP3x, {
            union: true,
            begin: true
        });
        var bWD7w = this.ra3x.length;
        var bdD5I = [];
        var PO0x, Px0x;
        if (!this.ra3x[0]) return {
            suggests: bdD5I
        };
        for (var i = 0; i < bWD7w; i++) {
            PO0x = this.ra3x[i].nickname.toLowerCase().search(bv8n);
            Px0x = this.ra3x[i].py ? this.ra3x[i].py.toLowerCase().search(bv8n) : -1;
            if (PO0x !== -1 || Px0x != -1) bdD5I.push(this.ra3x[i]);
            if (bdD5I.length === 10) break
        }
        return {
            suggests: bdD5I
        }
    };
    b7g.NB0x = function () {
        var he0x = this.oE2x || {
            text: "",
            start: 0,
            end: 0
        };
        h7a.z7s(this.gp9g, "focus");
        go9f.HY8Q(this.gp9g, he0x, "@");
        this.oE2x = go9f.vw4A(this.gp9g);
        this.HQ8I = he0x.start;
        this.bHV3x(this.HQ8I)
    };
    b7g.GU7N = function () {
        if (this.ux4B) this.ux4B.T7M()
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        w7p = c7f("nm.w"),
        ca8S = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        b7g;
    var bWC7v = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bWB7u = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gi9Z = a6g.iu0x(bWB7u);
    var iZ0x = a6g.tO3x(bWC7v);
    w7p.NT0x = NEJ.C();
    b7g = w7p.NT0x.O7H(bC8u.ei9Z);
    b7g.cx8p = function (e7d) {
        this.fP9G = {};
        this.cD8v()
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d);
        this.fP9G.txt = a6g.B7u(e7d.target);
        this.Rf1x();
        this.NV0x = w7p.bIg3x.A7t(this.fP9G)
    };
    b7g.bD8v = function (e7d) {
        this.bG8y();
        this.NV0x.T7M()
    };
    b7g.ce8W = function () {
        this.cd8V = gi9Z;
        this.mb1x = iZ0x
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var i7b = a6g.dk8c(a6g.B7u(this.n7g));
        this.fP9G.body = this.n7g;
        this.fP9G.before = i7b[0];
        this.fP9G.flag = i7b[1];
        this.fP9G.after = i7b[2]
    };
    b7g.Rf1x = function () {
        var qc2x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qc2x.length; i++) {
            if (qc2x[i] === "width" && a6g.df8X(this.fP9G.txt, qc2x[i]) == "100%") {
                var bWA7t = this.fP9G.txt.offsetWidth;
                if (!bWA7t) {
                    setTimeout(function () {
                        a6g.ba7T(this.n7g, qc2x[i], this.fP9G.txt.offsetWidth + "px")
                    }.g7b(this), 300)
                } else {
                    a6g.ba7T(this.n7g, qc2x[i], this.fP9G.txt.offsetWidth + "px")
                }
                continue
            }
            a6g.ba7T(this.n7g, qc2x[i], a6g.df8X(this.fP9G.txt, qc2x[i]))
        }
    };
    b7g.NB0x = function () {
        this.NV0x.NB0x()
    };
    b7g.GU7N = function () {
        this.NV0x.GU7N()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        fx9o = NEJ.R,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        kM1x = c7f("nm.c"),
        R7K = {},
        b7g;
    if (!!kM1x.bhl6f) return;
    kM1x.bhl6f = NEJ.C();
    b7g = kM1x.bhl6f.O7H(I7B.cH8z);
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d)
    };
    b7g.bD8v = function () {
        this.bG8y()
    };
    b7g.Hp7i = function (fj9a, cK8C, bcN4R) {
        if (R7K[fj9a]) {
            this.hf0x("register commonJST[" + fj9a + "] duplicate");
            return
        }
        if (!k7d.gG0x(cK8C)) {
            cK8C = ctl.comJST.bWy7r(fj9a, cK8C, bcN4R)
        }
        R7K[fj9a] = cK8C
    };
    b7g.bWw7p = function (bcD4H) {
        if (k7d.eJ9A(bcD4H)) {
            k7d.bd7W(bcD4H, function (p7i) {
                ctl.comJST.Hp7i.apply(this, p7i)
            }, this)
        } else if (k7d.lw1x(bcD4H)) {
            k7d.eC9t(bcD4H, function (eQ9H, J7C) {
                ctl.comJST.Hp7i(J7C, eQ9H)
            })
        }
    };
    b7g.bWy7r = function (fj9a, vz4D, bcN4R) {
        vz4D = vz4D || {};
        NEJ.X(vz4D, {
            comJST: this.ni1x
        });
        if (vz4D.resetDataName && !k7d.eJ9A(vz4D.resetDataName)) {
            vz4D.resetDataName = [vz4D.resetDataName]
        }
        return function () {
            var j7c = arguments[0],
                jM0x = arguments[1];
            if (vz4D.resetDataName) {
                var jV1x = {};
                for (var i = 0, ii = vz4D.resetDataName.length; i < ii; i++) {
                    jV1x[vz4D.resetDataName[i]] = arguments[i]
                }
                j7c = jV1x;
                jM0x = arguments[ii]
            }
            NEJ.X(j7c, vz4D, dV9M);
            if (bcN4R) {
                jM0x = jM0x || {};
                NEJ.X(jM0x, bcN4R)
            }
            return a6g.bZ8R(fj9a, j7c, jM0x)
        }
    };
    b7g.ni1x = function (fj9a) {
        if (!R7K[fj9a]) {
            this.hf0x("commonJST[" + fj9a + "] is unregister");
            return ""
        } else {
            return R7K[fj9a].apply(null, fx9o.slice.call(arguments, 1))
        }
    };
    b7g.dump = function () {
        return R7K
    };
    b7g.hf0x = function (bWu7n) {
        if (console && console.log) {
            console.log(bWu7n)
        }
    };
    var dV9M = function (eQ9H, J7C) {
        return J7C == "resetDataName"
    };
    c7f("ctl").comJST = kM1x.bhl6f.gr9i();
    a6g.cAF4J({
        comJST: c7f("ctl").comJST.ni1x
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bs8k = NEJ.F,
        fx9o = NEJ.R,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        kM1x = c7f("nm.c"),
        l7e = c7f("nm.x"),
        R7K = {},
        b7g;
    if (!!kM1x.bhz6t) return;
    kM1x.bhz6t = NEJ.C();
    b7g = kM1x.bhz6t.O7H(I7B.cH8z);
    b7g.cx8p = function () {
        this.cD8v();
        var e7d = {
            "com-mv-artists": function (fO9F, dZ9Q, Ow0x, bhB6v) {
                return a6g.bZ8R("com-mv-artists", {
                    artists: fO9F,
                    clazz: dZ9Q,
                    boxClazz: bhB6v,
                    mark: Ow0x || function (cI8A) {
                        return cI8A
                    }, escape: k7d.dG9x,
                    comJST: ctl.comJST.ni1x
                })
            }, "com-album-artists": function (fO9F, dZ9Q, Ow0x, bhB6v) {
                return a6g.bZ8R("com-album-artists", {
                    artists: fO9F,
                    clazz: dZ9Q,
                    boxClazz: bhB6v,
                    mark: Ow0x || function (cI8A) {
                        return cI8A
                    }, escape: k7d.dG9x,
                    comJST: ctl.comJST.ni1x
                })
            }, "com-artists-title": {
                resetDataName: ["artists"],
                escape: k7d.dG9x
            }, "com-user-type": function (dp8h, dZ9Q, ly1x, xs4w, bHK3x) {
                return a6g.bZ8R("com-user-type", {
                    x: dp8h,
                    clazz: dZ9Q || "",
                    clazz2: typeof bHK3x == "undefined" ? "icn" : bHK3x,
                    before: ly1x || "",
                    after: xs4w || "",
                    isEmptyObject: l7e.bOb4f
                })
            }
        };
        for (var C7v in e7d) {
            ctl.comJST.Hp7i(C7v, e7d[C7v])
        }
    };
    b7g.bl7e = function (e7d) {
        this.bm7f(e7d)
    };
    b7g.bD8v = function () {
        this.bG8y()
    };
    c7f("ctl").comJSTUtil = kM1x.bhz6t.gr9i()
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        dv8n = c7f("nej.p"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        w7p = c7f("nm.w"),
        go9f = c7f("nm.ut"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        m7f = c7f("nm.l"),
        bhF6z = [2, 3],
        dY9P = ["sn", "db"],
        b7g, K7D, bWr7k = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video",
            41: "cloudvideo"
        },
        bcs4w = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频",
            cloudvideo: "视频"
        },
        bHH3x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        },
        bWl7e = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        Hb7U = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        },
        FullscreenApi = l7e.EA7t || {};
    m7f.pJ2x = NEJ.C();
    b7g = m7f.pJ2x.O7H(m7f.en9e);
    K7D = m7f.pJ2x.cs8k;
    b7g.bl7e = function (e7d) {
        if (e7d.onclose === undefined) {
            e7d.onclose = this.bHF3x.g7b(this)
        }
        this.bm7f(e7d);
        this.CD6x = e7d.isPub;
        this.jF0x = e7d.rid || -1;
        this.ey9p = e7d.type || -1;
        this.bhT6N = e7d.purl;
        this.OZ0x = e7d.name || "";
        this.Pf0x = e7d.author || "";
        this.bhX6R = e7d.authors || "";
        this.bbB4F = e7d.actId;
        this.bbs4w = e7d.actName;
        this.bHB3x = e7d.title;
        this.bbi4m = {};
        this.bWf7Y = e7d.mesg || "";
        this.bWe7X = e7d.placeholder || "说点什么吧";
        this.bih6b = e7d.hideTip;
        this.bWb7U = e7d.videoJumpUrl;
        var i7b, eR9I = +(new Date);
        try {
            i7b = top.localCache.B7u("user") || {}
        } catch (e) {
            i7b = {}
        }
        for (var i = 0, i7b = i7b.bindings || [], eL9C; i < i7b.length; ++i) {
            eL9C = !i7b[i].tokenJsonStr ? null : JSON.parse(i7b[i].tokenJsonStr);
            if (!eL9C || eL9C.expires_in === undefined) continue;
            var baG4K = parseInt(eL9C.expires_in),
                baF4J = parseInt(i7b[i].refreshTime),
                bVZ7S = (baG4K + baF4J) * 1e3 - 5 * 60 * 1e3;
            if (bVZ7S > eR9I) this.bbi4m[i7b[i].type] = !0
        }
        this.wz4D = w7p.Gi7b.A7t({
            parent: this.bax4B,
            err: this.bHy3x
        });
        if (this.hA0x) {
            this.hA0x.T7M()
        }
        this.hA0x = w7p.NT0x.A7t({
            parent: document.body,
            target: this.ev9m
        });
        if (this.ey9p == 24 || this.ey9p == 21 || this.ey9p == 41 || this.GG7z()) {
            this.ya5f.style.display = "none"
        } else {
            this.ya5f.style.display = "";
            this.oC2x = w7p.bpi8a.A7t({
                parent: this.bix6r,
                button: this.ya5f,
                onstartupload: this.bHw3x.g7b(this, true),
                onfinishupload: this.bHw3x.g7b(this, false)
            })
        } if (this.GG7z()) {
            this.pn2x.innerText = "";
            a6g.y7r(this.pn2x, "info-video");
            a6g.y7r(this.biA6u, "f-hide")
        } else {
            a6g.x7q(this.biA6u, "f-hide")
        }
    };
    b7g.bD8v = function () {
        this.bG8y();
        if (this.wz4D) {
            this.wz4D.T7M();
            delete this.wz4D
        }
        if (this.hA0x) {
            this.hA0x.T7M();
            delete this.hA0x
        }
        if (this.oC2x) {
            this.oC2x.T7M();
            delete this.oC2x
        }
        if (this.ms1x) {
            this.ms1x.T7M();
            delete this.ms1x
        }
    };
    b7g.ce8W = function () {
        this.cd8V = "m-wgt-sharewin"
    };
    b7g.bW8O = function () {
        this.cg8Y();
        this.bHu3x = a6g.dk8c(this.n7g)[0];
        var bt8l = a6g.H7A(this.n7g, "j-flag");
        this.rg3x = bt8l.shift();
        this.bHy3x = bt8l.shift();
        this.bax4B = bt8l.shift();
        this.ev9m = bt8l.shift();
        this.pn2x = bt8l.shift();
        this.biF6z = bt8l.shift();
        this.bVQ7J = bt8l.shift();
        this.ya5f = bt8l.shift();
        this.cv8n = bt8l.shift();
        this.bix6r = bt8l.shift();
        this.Ca6U = bt8l.shift();
        this.cGh5m = bt8l.shift();
        this.biA6u = bt8l.shift();
        this.ek9b = bt8l.shift();
        this.Zs3x = a6g.H7A(this.biA6u, "j-t");
        this.BL6F = I7B.EE7x.A7t({
            list: a6g.dk8c(this.rg3x),
            selected: "z-slt",
            onchange: this.biL6F.g7b(this)
        });
        if (dv8n.ds8k.browser == "ie" && dv8n.ds8k.version < "8.0") {
            a6g.ba7T(this.bax4B, "position", "relative");
            a6g.ba7T(this.bax4B, "zIndex", "10")
        }
        h7a.s7l(window, "snsbind", this.Rp1x.g7b(this));
        h7a.s7l(this.ev9m, "input", this.fN9E.g7b(this));
        h7a.s7l(this.ev9m, "keyup", this.uU4Y.g7b(this));
        h7a.s7l(this.n7g, "click", this.cM8E.g7b(this));
        this.S7L = q7j.blg7Z.A7t();
        this.S7L.s7l("onshareall", this.Zk3x.g7b(this, 0));
        this.S7L.s7l("onshareerror", this.iY0x.g7b(this));
        this.S7L.s7l("onshareprivate", this.Zk3x.g7b(this, 1));
        this.Zj3x = q7j.yN5S.A7t();
        this.hf0x = q7j.likes_id.A7t();
        try {
            this.Rv1x = top.api.sharePermission
        } catch (e) {}
        if (!this.Rv1x) {
            this.Rv1x = Hb7U;
            v7o.bn7g("/api/event/user/permission", {
                type: "json",
                onload: function (d7e) {
                    if (d7e.code == 200) {
                        this.Rv1x = NEJ.EX(Hb7U, d7e)
                    }
                }.g7b(this)
            })
        }
    };
    b7g.biL6F = function (d7e) {
        d7e.index == 0 ? a6g.x7q(this.bHu3x, "m-plshare") : a6g.y7r(this.bHu3x, "m-plshare");
        this.bax4B.style.display = d7e.index == 0 ? "none" : "";
        this.bVQ7J.style.display = d7e.index == 0 ? "" : "none";
        this.ya5f.style.display = d7e.index == 0 ? "" : "none";
        if (this.ey9p == 24 || this.ey9p == 21) {
            this.ya5f.style.display = "none"
        }
        this.bHy3x.style.display = "none";
        this.ev9m.value = "";
        this.cf8X();
        this.Gh7a();
        if (d7e.index == 0) {
            var cA8s = a6g.df8X(this.ev9m, "width");
            if (cA8s == "auto" || !cA8s) {
                return
            } else {
                if (this.hA0x) {
                    this.hA0x.T7M()
                }
                this.hA0x = w7p.NT0x.A7t({
                    parent: document.body,
                    target: this.ev9m
                })
            }
            this.bix6r.style.display = ""
        } else {
            if (this.hA0x) {
                this.hA0x.T7M();
                delete this.hA0x
            }
            this.bix6r.style.display = "none"
        }
    };
    b7g.cM8E = function (d7e) {
        var f7c = h7a.W7P(d7e, "d:action");
        if (!f7c) return;
        if (a6g.t7m(f7c, "action") == "search") {
            h7a.cp8h(d7e)
        } else if (a6g.t7m(f7c, "default") === undefined) {
            h7a.cp8h(d7e)
        }
        switch (a6g.t7m(f7c, "action")) {
        case "txt":
            this.mh1x();
            break;
        case "search":
            if (this.GG7z()) {
                top.location.href = this.bWb7U
            } else if (this.CD6x && this.ey9p != 24) {
                if (this.ms1x) {
                    this.ms1x.T7M()
                }
                this.ms1x = w7p.bun0x.A7t({
                    parent: this.n7g.parentNode,
                    onfinish: this.biR6L.g7b(this),
                    oncancel: this.bVM7F.g7b(this)
                });
                this.biT6N = true;
                this.n7g.style.display = "none";
                this.Gc7V(this.jF0x < 0 ? "添加音乐" : "更换音乐")
            }
            break;
        case "at":
            h7a.tr3x(d7e);
            !!this.hl0x && this.hl0x.bu8m();
            this.hA0x.NB0x();
            this.gk9b();
            break;
        case "emot":
            h7a.tr3x(d7e);
            !!this.hA0x && this.hA0x.GU7N();
            if (!this.hl0x) {
                this.hl0x = m7f.IC8u.A7t({
                    parent: this.biF6z
                });
                this.hl0x.s7l("onselect", this.xO5T.g7b(this))
            }
            this.hl0x.L7E();
            break;
        case "upload":
            break;
        case "sns":
            h7a.bh7a(d7e);
            var biX6R, bv8n, u7n = a6g.t7m(f7c, "type");
            if (!this.bbi4m[u7n]) {
                biX6R = f7c.href.split("?");
                bv8n = k7d.hv0x(biX6R[1]);
                bv8n["csrf_token"] = v7o.gy0x("__csrf");
                top.open(biX6R[0] + "?" + k7d.cE8w(bv8n));
                return
            }
            var bz8r = {
                2: "sn",
                3: "db",
                4: "rr"
            };
            l7e.Bd6X(f7c, "u-slg-" + bz8r[u7n] + "-gray");
            break;
        case "close":
            !!this.hl0x && this.hl0x.bu8m();
            this.bHF3x();
            break;
        case "share":
            h7a.bh7a(d7e);
            if (this.GG7z()) {
                if (!a6g.bE8w(f7c, "u-btn2-2-dis")) {
                    this.bVL7E()
                }
            } else if (a6g.bE8w(f7c, "u-btn2-2-dis")) {
                if (!this.Rv1x.pubEventWithoutResource && this.jF0x < 0) {
                    this.bVJ7C()
                } else {}
            } else if (this.jF0x < 0 && !this.ev9m.value && this.oC2x && this.oC2x.SV2x().length == 0) {
                m7f.Z7S.L7E({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.bVH7A()
            }
            break
        }
    };
    b7g.bVJ7C = function () {
        var tp3x = 0,
            bjc6W = function () {
                if (tp3x % 2) {
                    a6g.x7q(this.pn2x, "z-show")
                } else {
                    a6g.y7r(this.pn2x, "z-show")
                }
                tp3x++;
                if (tp3x > 5) {
                    clearInterval(eg9X)
                }
            },
            eg9X;
        return function () {
            tp3x = 0;
            clearInterval(eg9X);
            eg9X = setInterval(bjc6W.g7b(this), 200)
        }
    }();
    b7g.Rp1x = function (o7h) {
        o7h = o7h.result;
        this.bbi4m[o7h.type] = !0;
        var r7k = k7d.di8a(bhF6z, o7h.type),
            ch8Z = "u-slg-" + dY9P[r7k] + "-gray";
        a6g.x7q(this.Zs3x[r7k], ch8Z)
    };
    b7g.biR6L = function (by8q) {
        var j7c = by8q.data;
        this.jF0x = by8q.id;
        this.ey9p = by8q.type;
        this.n7g.style.display = "";
        this.Gc7V(this.bHB3x);
        this.ms1x && this.ms1x.T7M();
        this.biT6N = false;
        this.bhT6N = j7c.picUrl;
        this.OZ0x = j7c.title || "";
        this.Pf0x = j7c.author || "";
        this.bhX6R = j7c.authors || "";
        this.bVG7z();
        this.Yy3x()
    };
    b7g.bVM7F = function () {
        this.ms1x && this.ms1x.T7M();
        this.n7g.style.display = "";
        this.Gc7V(this.bHB3x);
        this.biT6N = false;
        this.Yy3x()
    };
    b7g.xO5T = function (d7e) {
        var bo7h = "[" + d7e.text + "]";
        go9f.HY8Q(this.ev9m, this.oE2x, bo7h);
        this.gk9b()
    };
    b7g.fN9E = function (d7e) {
        dv8n.ds8k.browser == "ie" && dv8n.ds8k.version < "7.0" ? setTimeout(this.gk9b.g7b(this), 0) : this.gk9b()
    };
    b7g.uU4Y = function (d7e) {
        this.mh1x();
        if (d7e.keyCode == 8) this.gk9b()
    };
    b7g.gk9b = function () {
        this.mh1x();
        this.Gh7a()
    };
    b7g.Gh7a = function () {
        var bq7j = Math.ceil(k7d.fy9p(this.ev9m.value.trim()) / 2);
        this.cv8n.innerText = 140 - bq7j;
        bq7j > 140 ? a6g.fb9S(this.cv8n, "s-fc4", "s-fc6") : a6g.fb9S(this.cv8n, "s-fc6", "s-fc4")
    };
    b7g.bVH7A = function () {
        if (this.cO8G()) return;
        if (k7d.fy9p(this.ev9m.value.trim()) > 280) {
            this.cf8X("字数超过140个字符");
            return
        }
        var u7n = this.BL6F.tD3x(),
            j7c;
        if (u7n == 0) {
            for (var i = 0, Js8k = []; i < this.Zs3x.length; ++i) {
                if (!a6g.bE8w(this.Zs3x[i], "u-slg-" + dY9P[i] + "-gray")) Js8k.push(bhF6z[i])
            }
            this.cO8G(!0);
            j7c = {
                id: this.jF0x,
                msg: this.ev9m.value.trim(),
                type: this.Yp3x(this.ey9p),
                picUrl: this.bhT6N,
                snsTypes: Js8k.join(","),
                isPub: this.CD6x
            };
            if (this.bbB4F > 0) {
                j7c.actId = this.bbB4F;
                if (this.bbs4w) {
                    j7c.msg = "#" + this.bbs4w + "#" + j7c.msg
                }
            }
            var nN2x = this.oC2x && this.oC2x.SV2x();
            if (nN2x && nN2x.length) {
                j7c.pics = nN2x
            }
            this.S7L.cdC8u(j7c)
        } else {
            var sH3x = this.wz4D.Qt1x();
            if (sH3x.length <= 0) {
                this.cf8X("请至少选择一位好友");
                return
            }
            this.S7L.cdB8t({
                data: {
                    id: this.jF0x,
                    msg: this.ev9m.value.trim(),
                    type: this.Yp3x(this.ey9p == 41 ? 39 : this.ey9p),
                    userIds: "[" + sH3x.join(",") + "]"
                }
            })
        }
    };
    b7g.bVL7E = function () {
        if (this.cO8G()) {
            return
        }
        this.hf0x.fu9l("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k7d.fy9p(this.ev9m.value.trim()) > 280) {
            this.cf8X("字数超过140个字符");
            return
        }
        this.cO8G(!0);
        var j7c = {
                msg: this.ev9m.value.trim() || "",
                type: "video"
            },
            bVF7y = {
                videoId: this.jF0x
            };
        if (this.bbB4F > 0) {
            j7c.actId = this.bbB4F;
            if (this.bbs4w) {
                j7c.msg = "#" + this.bbs4w + "#" + j7c.msg
            }
        }
        j7c.videoinfo = JSON.stringify(bVF7y);
        this.S7L.cdA8s({
            data: {
                videoId: this.jF0x,
                commit: true
            },
            data2: j7c,
            snsTypes: ""
        })
    };
    b7g.Zk3x = function (u7n, o7h) {
        this.cO8G(!1);
        this.bu8m();
        if (!this.bih6b) {
            if (this.GG7z()) {
                m7f.Z7S.L7E({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                m7f.Z7S.L7E({
                    tip: "分享成功" + (o7h.point > 0 ? ' 获得<em class="s-fc6">' + o7h.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h7a.z7s(m7f.pJ2x, "sharesuccess", {
            isPrivate: u7n,
            rid: this.jF0x,
            rtype: this.ey9p,
            data: o7h.event
        });
        this.z7s("onshare")
    };
    b7g.iY0x = function (o7h) {
        this.cO8G(!1);
        var bH8z = "分享失败";
        if (o7h.code) {
            switch (o7h.code) {
            case 404:
                bH8z = "分享的资源不存在";
                break;
            case 407:
                bH8z = "输入内容包含有关键字";
                break;
            case 408:
                bH8z = "分享太快了，过会再分享吧";
                break;
            case 315:
                bH8z = o7h.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l7e.fq9h({
                    clazz: "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.cf8X(bH8z)
    };
    b7g.mh1x = function () {
        this.oE2x = go9f.vw4A(this.ev9m)
    };
    b7g.cf8X = function (bH8z) {
        this.dP9G(this.ek9b, bH8z)
    };
    b7g.cO8G = function (cX8P) {
        return this.dX9O(this.Ca6U, cX8P, "分享", "分享中...")
    };
    b7g.Yp3x = function (jr0x) {
        return bWr7k[jr0x] || ""
    };
    b7g.bVD7w = function () {
        var ep9g, uZ4d = this.Yp3x(this.ey9p);
        this.pn2x.style.display = "";
        if (this.jF0x < 0) {
            this.pn2x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.OZ0x) {
                this.pn2x.style.display = "none";
                return
            }
            var Ye3x = this.CD6x && this.ey9p != 24;
            ep9g = (bcs4w[uZ4d] ? bcs4w[uZ4d] + "：" : "") + this.OZ0x + (bHH3x[uZ4d] || " ") + (uZ4d == "mv" || uZ4d == "album" ? this.bhX6R || this.Pf0x : this.Pf0x);
            a6g.dI9z(this.pn2x, "m-xwgt-share-infobar", {
                canChange: Ye3x,
                info: ep9g
            });
            if (Ye3x) {
                a6g.x7q(this.pn2x, "z-dis")
            } else {
                a6g.y7r(this.pn2x, "z-dis")
            }
        }
        a6g.x7q(this.pn2x, "info-video")
    };
    b7g.bVG7z = function () {
        var uZ4d = this.Yp3x(this.ey9p),
            ep9g = (bcs4w[uZ4d] ? bcs4w[uZ4d] + "：" : "") + this.OZ0x + (bHH3x[uZ4d] || " ") + (uZ4d == "mv" || uZ4d == "album" ? this.bhX6R || this.Pf0x : this.Pf0x);
        Ye3x = this.CD6x && this.ey9p != 24;
        if (this.GG7z()) {} else {
            a6g.x7q(this.pn2x, "info-video");
            a6g.dI9z(this.pn2x, "m-xwgt-share-infobar", {
                canChange: Ye3x,
                isPub: this.CD6x,
                info: ep9g
            })
        }
    };
    b7g.bVC7v = function () {
        var Jy8q = this.ev9m.value;
        if (this.CD6x) {
            if (!!this.biT6N) {
                return !!Jy8q && !!Jy8q.length || !!this.oC2x && this.oC2x.SV2x().length > 0
            } else {
                return !(this.jF0x < 0) || !!Jy8q && !!Jy8q.length || !!this.oC2x && this.oC2x.SV2x().length > 0
            }
        } else {
            return !!Jy8q && !!Jy8q.length || !!this.oC2x && this.oC2x.SV2x().length > 0
        }
    };
    b7g.Yy3x = function () {
        var bHn2x = false;
        if (!this.CD6x || this.Rv1x.pubEventWithoutResource || !(this.jF0x < 0)) {
            bHn2x = true
        }
        if (bHn2x) {
            a6g.x7q(this.Ca6U, "u-btn2-2-dis")
        } else {
            a6g.y7r(this.Ca6U, "u-btn2-2-dis")
        }
    };
    b7g.bHw3x = function (bjs6m) {
        if (bjs6m) {
            a6g.y7r(this.Ca6U, "u-btn2-2-dis")
        } else {
            this.Yy3x()
        }
    };
    b7g.bHF3x = function (d7e) {
        if (d7e) {
            d7e.stopped = true
        }
        if (this.bVC7v()) {
            l7e.hi0x({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (U7N) {
                    if (U7N == "ok") {
                        this.z7s("forceclose", {});
                        this.bu8m();
                        h7a.z7s(m7f.pJ2x, "shareclose", {})
                    }
                }.g7b(this)
            })
        } else {
            this.z7s("forceclose", {});
            this.bu8m();
            h7a.z7s(m7f.pJ2x, "shareclose", {})
        }
    };
    b7g.Gc7V = function (el9c, dT9K) {
        this.pb2x.Bg6a(el9c, dT9K)
    };
    b7g.Yc3x = function (u7n) {
        this.hf0x.fu9l("page", {
            type: u7n
        })
    };
    b7g.GG7z = function () {
        return this.ey9p == 39
    };
    b7g.L7E = function () {
        var bVA7t = function (p7i, r7k) {
            var ch8Z = "u-slg-" + dY9P[r7k] + "-gray";
            !this.bbi4m[bhF6z[r7k]] ? a6g.y7r(p7i, ch8Z) : a6g.x7q(p7i, ch8Z)
        };
        return function () {
            K7D.L7E.call(this);
            this.n7g.style.display = "";
            this.cf8X();
            this.cO8G(!1);
            this.BL6F.UF2x(0);
            this.ev9m.focus();
            this.ev9m.value = this.bWf7Y || "";
            this.ev9m.placeholder = this.bWe7X || "";
            if (!this.GG7z()) {
                this.bVD7w()
            } else {
                a6g.y7r(this.pn2x, "info-video");
                a6g.dI9z(this.pn2x, "m-xwgt-share-videobar", {
                    title: this.OZ0x,
                    picUrl: this.bhT6N
                })
            }
            this.gk9b();
            this.wz4D.bYz7s();
            k7d.bd7W(this.Zs3x, bVA7t, this);
            this.mh1x();
            if (this.CD6x) {
                this.rg3x.style.display = "none"
            } else {
                this.rg3x.style.display = ""
            }
            this.Yy3x()
        }
    }();
    b7g.bu8m = function (d7e) {
        K7D.bu8m.call(this);
        !!this.hl0x && this.hl0x.bu8m();
        if (this.wz4D) {
            this.wz4D.T7M();
            delete this.wz4D
        }
        if (this.hA0x) {
            this.hA0x.T7M();
            delete this.hA0x
        }
        if (this.oC2x) {
            this.oC2x.T7M();
            delete this.oC2x
        }
        if (this.bHm2x) {
            this.bHm2x = this.bHm2x.T7M()
        }
        if (this.ms1x) {
            this.ms1x.T7M();
            delete this.ms1x
        }
    };
    l7e.lj1x = function (e7d) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e7d.title === undefined) {
            e7d.title = "分享"
        }
        if (e7d.actId && e7d.type != 39) {
            var u7n = bWl7e[e7d.resourceType],
                bV8N = e7d.resourceJson,
                hW0x;
            if (k7d.fG9x(bV8N)) {
                try {
                    bV8N = JSON.parse(bV8N)
                } catch (e) {}
            }
            if (u7n) {
                hW0x = l7e.bNV4Z(u7n, bV8N);
                e7d.name = hW0x.title;
                e7d.author = hW0x.author;
                e7d.picUrl = hW0x.picUrl;
                e7d.type = u7n;
                e7d.rid = (bV8N || []).id
            }
        }
        m7f.pJ2x.L7E(e7d)
    };
    I7B.fJ9A.A7t({
        element: m7f.pJ2x,
        event: ["sharesuccess", "shareclose"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        m7f = c7f("nm.l"),
        w7p = c7f("nm.w"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    m7f.XV3x = NEJ.C();
    b7g = m7f.XV3x.O7H(m7f.en9e);
    K7D = m7f.XV3x.cs8k;
    b7g.cx8p = function () {
        this.cD8v()
    };
    b7g.bW8O = function () {
        this.cg8Y();
        var i7b = a6g.H7A(this.n7g, "j-flag");
        h7a.s7l(i7b[0], "click", this.Ev7o.g7b(this))
    };
    b7g.ce8W = function () {
        this.cd8V = "m-import-ok"
    };
    b7g.bl7e = function (e7d) {
        e7d.parent = e7d.parent || document.body;
        e7d.title = "歌曲同步完成";
        this.bm7f(e7d)
    };
    b7g.bD8v = function () {
        this.bG8y()
    };
    b7g.Ev7o = function (d7e) {
        this.bu8m();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b7g.BH6B = function () {
        this.bu8m()
    };
    b7g.bLl3x = function (d7e) {
        if (d7e.keyCode == 13) this.FK7D()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        N7G = c7f("nej.p"),
        k7d = c7f("nej.u"),
        m7f = c7f("nm.l"),
        w7p = c7f("nm.w"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    m7f.bHl2x = NEJ.C();
    b7g = m7f.bHl2x.O7H(m7f.en9e);
    b7g.ce8W = function () {
        this.cd8V = "m-programtips-layer"
    };
    b7g.bW8O = function () {
        this.cg8Y();
        this.bU8M = a6g.H7A(this.n7g, "j-flag")
    };
    b7g.bl7e = function (e7d) {
        e7d.clazz = " m-layer-programtips";
        e7d.parent = e7d.parent || document.body;
        e7d.title = "付费内容提示";
        e7d.draggable = !0;
        e7d.destroyalbe = !0;
        e7d.mask = true;
        this.bm7f(e7d);
        this.gY0x = e7d.id;
        this.bVx7q = e7d.radiotype;
        this.lB1x = location.protocol + "//" + (this.bjE6y() || "music.163.com") + "/m/" + this.bVx7q + "?id=" + this.gY0x;
        this.bVw7p()
    };
    b7g.bD8v = function () {
        this.bG8y()
    };
    b7g.BH6B = function () {
        this.bu8m()
    };
    b7g.Ev7o = function (d7e) {
        this.z7s("onok", D7w);
        this.bu8m()
    };
    l7e.bHk2x = function (e7d) {
        m7f.bHl2x.A7t(e7d).L7E()
    };
    b7g.bVw7p = function () {
        v7o.bn7g("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k7d.cE8w({
                url: this.lB1x,
                size: 180
            }),
            onload: function (j7c) {
                if (j7c.code == 200) {
                    this.bVs7l(j7c.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g7b(this)
        })
    };
    b7g.bjE6y = function () {
        var Rl1x = location.host;
        if (Rl1x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b7g.bVs7l = function (jJ0x) {
        this.bU8M[0].style.backgroundImage = "url(" + jJ0x + ")"
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        dv8n = c7f("nej.p"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        E7x = c7f("nm.m"),
        m7f = c7f("nm.l"),
        M7F = c7f("nm.m.f"),
        b7g, K7D;
    E7x.de8W = NEJ.C();
    b7g = E7x.de8W.O7H(I7B.dx8p);
    b7g.bL8D = function () {
        var qQ3x = !1;
        return function () {
            if (qQ3x) return;
            qQ3x = !0;
            this.bR8J();
            if (top == self) {
                return
            }
            this.tx3x = a6g.B7u("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bHi2x()
            }
            I7B.fJ9A.A7t({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX8P([
                [window, "scroll", this.BA6u.g7b(this)],
                [document, "keyup", this.bVo7h.g7b(this)],
                [document.body, "click", this.sW3x.g7b(this)],
                [document, "mouseup", this.bVn7g.g7b(this)],
                [this.tx3x, "click", this.Tx2x.g7b(this)],
                [q7j.to3x, "message", this.uy4C.g7b(this)]
            ]);
            l7e.cdK8C(document.body);
            this.BA6u();
            if (this.Bz6t !== false && typeof GUser !== "undefined" && GUser.userId > 0) q7j.to3x.gr9i().uI4M();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dv8n.ds8k.browser == "ie" && parseInt(dv8n.ds8k.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hc0x = top.player.getPlaying();
                    if (hc0x && hc0x.track && hc0x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hc0x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.ze5j.g7b(this);
            this.km1x = q7j.likes_id.A7t();
            window.log = this.md1x.g7b(this);
            var sx3x = location.search;
            if (sx3x) {
                var bv8n = sx3x.substr(sx3x.indexOf("?") + 1),
                    gw0x = k7d.hv0x(bv8n);
                if (gw0x && gw0x["_hash"]) location.hash = gw0x["_hash"]
            }
        }
    }();
    b7g.bVo7h = function (d7e) {
        var f7c = h7a.W7P(d7e);
        try {
            if (d7e.keyCode == 80 && l7e.bOe4i() || ["textarea", "input"].indexOf(f7c.tagName.toLowerCase()) >= 0) return;
            h7a.z7s(top.document, "keyup", {
                ctrlKey: d7e.ctrlKey,
                keyCode: d7e.keyCode
            })
        } catch (e) {}
    };
    b7g.sW3x = function (d7e) {
        var f7c = h7a.W7P(d7e);
        if (f7c && f7c.tagName == "INPUT") return;
        var f7c = h7a.W7P(d7e, "d:pid");
        if (f7c) {
            h7a.cp8h(d7e);
            var pk2x = a6g.t7m(f7c, "pid"),
                Bv6p = a6g.t7m(f7c, "ptype"),
                U7N = a6g.t7m(f7c, "action") || "play";
            switch (U7N) {
            case "subscribe":
                l7e.mq1x({
                    tracks: [pk2x]
                });
                break
            }
        }
        f7c = h7a.W7P(d7e, "d:resAction");
        if (f7c && f7c.className.indexOf("-dis") == -1) {
            var cT8L = a6g.t7m(f7c, "resId"),
                u7n = a6g.t7m(f7c, "resType"),
                bjU6O = a6g.t7m(f7c, "resRadiotype"),
                bjV6P = a6g.t7m(f7c, "resRadioid"),
                ea9R = a6g.t7m(f7c, "resFrom"),
                j7c = a6g.t7m(f7c, "resData"),
                U7N = a6g.t7m(f7c, "resAction"),
                buU0x = a6g.t7m(f7c, "resCopyright"),
                WB3x = a6g.t7m(f7c, "resAuditstatus");
            if (U7N != "log" && U7N != "bilog") h7a.cp8h(d7e);
            switch (U7N) {
            case "log":
                j7c = (j7c || "").split("|");
                if (!!j7c[0]) {
                    var bg7Z = {
                        id: cT8L,
                        alg: j7c[2] || "itembased",
                        scene: j7c[3],
                        position: j7c[1] || 0
                    };
                    if (!!j7c[4]) bg7Z.srcid = j7c[4];
                    window.log(j7c[0], bg7Z)
                }
                break;
            case "bilog":
                var bvt0x = a6g.t7m(f7c, "logAction"),
                    bvw0x = a6g.t7m(f7c, "logJson");
                window.log(bvt0x, bvw0x);
                break;
            case "share":
                if (WB3x && WB3x == 1) {
                    l7e.ir0x("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cT8L, u7n, a6g.t7m(f7c, "resPic"), a6g.t7m(f7c, "resName"), a6g.t7m(f7c, "resAuthor"), a6g.t7m(f7c, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (u7n == 18) {
                    var rd3x = a6g.t7m(f7c, "resLevel"),
                        rY3x = a6g.t7m(f7c, "resFee");
                    if (rd3x == 10) {
                        l7e.tW3x(rY3x, cT8L, "song");
                        break
                    }
                    l7e.mq1x({
                        tracks: [cT8L]
                    })
                }
                break;
            case "download":
                l7e.JU8M({
                    id: cT8L,
                    type: u7n
                });
                break;
            case "programtips":
                if (WB3x && WB3x == 1) {
                    l7e.ir0x("由于版权问题，该节目暂时无法分享。")
                } else {
                    l7e.bHk2x({
                        id: bjV6P,
                        radiotype: bjU6O
                    })
                }
                break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d7e)
        } catch (e) {}
    };
    b7g.bVn7g = function (d7e) {
        try {
            h7a.z7s(top.document, "mouseup")
        } catch (e) {}
    };
    b7g.BA6u = function () {
        var bVm7f = function () {
            var ci8a = window.innerHeight;
            if (!k7d.wg4k(ci8a)) ci8a = (document.documentElement || document.body).clientHeight;
            return ci8a
        };
        return function (d7e) {
            if (!this.tx3x) return;
            var Wy3x = bVm7f(),
                gj9a = document.documentElement.scrollTop || document.body.scrollTop;
            a6g.ba7T(this.tx3x, "display", gj9a > 0 ? "" : "none");
            if (dv8n.ds8k.browser == "ie" && dv8n.ds8k.version < "7.0") {
                var gx0x = Math.min(document.body.clientHeight, Wy3x + gj9a) - 204;
                a6g.ba7T(this.tx3x, "top", gx0x + "px")
            }
        }
    }();
    b7g.Tx2x = function (d7e) {
        h7a.cp8h(d7e);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b7g.ze5j = function () {
        var bka6U = function (d7e) {
            h7a.z7s(window, "share", d7e)
        };
        return function (cT8L, u7n, zp5u, V7O, Fw7p, Fr7k) {
            l7e.lj1x({
                rid: cT8L,
                type: u7n,
                purl: zp5u,
                name: V7O,
                author: Fw7p,
                authors: Fr7k,
                onshare: bka6U.g7b(this)
            })
        }
    }();
    b7g.md1x = function (U7N, bg7Z) {
        try {
            top.log(U7N, bg7Z)
        } catch (e) {
            if (U7N.indexOf("new|") == 0) {
                return this.km1x.fu9l(U7N.slice(4), bg7Z)
            }
            switch (U7N) {
            case "play":
                this.km1x.ej9a(bg7Z);
                break;
            case "search":
                this.km1x.bRn6h(bg7Z);
                break;
            default:
                this.km1x.fu9l(U7N, bg7Z)
            }
        }
    };
    b7g.bHi2x = function () {
        var Wp3x, bkf6Z = false,
            br7k = [45, 60];
        var bVl7e = function (bH8z) {
            if (bH8z.title != "MailBoxImport") return;
            var Q7J = JSON.parse(bH8z.content || "null") || bb7U;
            if (Q7J.status == 10) {
                m7f.XV3x.A7t().L7E();
                window.clearTimeout(Wp3x)
            }
        };
        var ss3x = function (d7e) {
            if (d7e.code == 200) {
                if (d7e.status == 1) {
                    h7a.s7l(q7j.BK6E, "message", bVl7e.g7b(this));
                    q7j.BK6E.A7t().bfk5p();
                    bkf6Z = true
                } else {
                    if (bkf6Z) {
                        if (d7e.status == 10) {
                            m7f.XV3x.A7t().L7E();
                            h7a.hd0x(q7j.BK6E, "message");
                            window.clearTimeout(Wp3x);
                            bkf6Z = false
                        }
                    } else {
                        window.clearTimeout(Wp3x)
                    }
                }
            }
        };
        return function () {
            var tJ3x = br7k.shift() * 1e3;
            v7o.bn7g("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: ss3x.g7b(this)
            });
            if (tJ3x) {
                Wp3x = window.setTimeout(arguments.callee, tJ3x)
            }
        }
    }();
    b7g.uy4C = function (d7e) {
        try {
            top.polling(d7e)
        } catch (e) {}
    }
})()