!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).ConfettiGenerator = t()
}(this, function () {
    "use strict";
    return function (e) {
        var i = {
            target: "confetti-holder",
            max: 80,
            size: 1,
            animate: !0,
            respawn: !0,
            props: ["circle", "square", "triangle", "line"],
            colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
            clock: 25,
            interval: null,
            rotate: !1,
            start_from_edge: !1,
            width: window.innerWidth,
            height: window.innerHeight
        };
        e && (e.target && (i.target = e.target), e.max && (i.max = e.max), e.size && (i.size = e.size), null != e.animate && (i.animate = e.animate), null != e.respawn && (i.respawn = e.respawn), e.props && (i.props = e.props), e.colors && (i.colors = e.colors), e.clock && (i.clock = e.clock), null != e.start_from_edge && (i.start_from_edge = e.start_from_edge), e.width && (i.width = e.width), e.height && (i.height = e.height), null != e.rotate && (i.rotate = e.rotate));
        var t = document.getElementById(i.target), a = t.getContext("2d"), r = [];

        function o(e, t) {
            e = e || 1;
            var r = Math.random() * e;
            return t ? Math.floor(r) : r
        }

        var n = i.props.reduce(function (e, t) {
            return e + (t.weight || 1)
        }, 0);

        function s() {
            var e = i.props[function () {
                for (var e = Math.random() * n, t = 0; t < i.props.length; ++t) {
                    var r = i.props[t].weight || 1;
                    if (e < r) return t;
                    e -= r
                }
            }()];
            return {
                prop: e.type ? e.type : e,
                x: o(i.width),
                y: i.start_from_edge ? i.clock < 0 ? parseFloat(i.height) + 10 : -10 : o(i.height),
                src: e.src,
                radius: o(4) + 1,
                size: e.size,
                rotate: i.rotate,
                line: Math.floor(o(65) - 30),
                angles: [o(10, !0) + 2, o(10, !0) + 2, o(10, !0) + 2, o(10, !0) + 2],
                color: i.colors[o(i.colors.length, !0)],
                rotation: o(360, !0) * Math.PI / 180,
                speed: o(i.clock / 7) + i.clock / 30
            }
        }

        function l(e) {
            if (e) switch (a.fillStyle = a.strokeStyle = "rgba(" + e.color + ", " + (3 < e.radius ? .8 : .4) + ")", a.beginPath(), e.prop) {
                case"circle":
                    a.moveTo(e.x, e.y), a.arc(e.x, e.y, e.radius * i.size, 0, 2 * Math.PI, !0), a.fill();
                    break;
                case"triangle":
                    a.moveTo(e.x, e.y), a.lineTo(e.x + e.angles[0] * i.size, e.y + e.angles[1] * i.size), a.lineTo(e.x + e.angles[2] * i.size, e.y + e.angles[3] * i.size), a.closePath(), a.fill();
                    break;
                case"line":
                    a.moveTo(e.x, e.y), a.lineTo(e.x + e.line * i.size, e.y + 5 * e.radius), a.lineWidth = 2 * i.size, a.stroke();
                    break;
                case"square":
                    a.save(), a.translate(e.x + 15, e.y + 5), a.rotate(e.rotation), a.fillRect(-15 * i.size, -5 * i.size, 15 * i.size, 5 * i.size), a.restore();
                    break;
                case"svg":
                    a.save();
                    var t = new window.Image;
                    t.src = e.src;
                    var r = e.size || 15;
                    a.translate(e.x + r / 2, e.y + r / 2), e.rotate && a.rotate(e.rotation), a.drawImage(t, -r / 2 * i.size, -r / 2 * i.size, r * i.size, r * i.size), a.restore()
            }
        }

        function c() {
            i.animate = !1, clearInterval(i.interval), requestAnimationFrame(function () {
                a.clearRect(0, 0, t.width, t.height);
                var e = t.width;
                t.width = 1, t.width = e
            })
        }

        return {
            render: function () {
                t.width = i.width, t.height = i.height, r = [];
                for (var e = 0; e < i.max; e++) r.push(s());
                return requestAnimationFrame(function e() {
                    for (var t in a.clearRect(0, 0, i.width, i.height), r) l(r[t]);
                    !function () {
                        for (var e = 0; e < i.max; e++) {
                            var t = r[e];
                            t && (i.animate && (t.y += t.speed), t.rotate && (t.rotation += t.speed / 35), (0 <= t.speed && i.height < t.y || t.speed < 0 && t.y < 0) && (i.respawn ? (r[e] = t, r[e].x = o(i.width, !0), r[e].y = t.speed < 0 ? parseFloat(i.height) : -10) : r[e] = void 0))
                        }
                        r.every(function (e) {
                            return void 0 === e
                        }) && c()
                    }(), i.animate && requestAnimationFrame(e)
                })
            }, clear: c
        }
    }
});
