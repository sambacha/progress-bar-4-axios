!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = t(require('axios'));
  else if ('function' == typeof define && define.amd) define(['axios'], t);
  else {
    var n = 'object' == typeof exports ? t(require('axios')) : t(e.axios);
    for (var r in n) ('object' == typeof exports ? exports : e)[r] = n[r];
  }
})(window, function (e) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      e.exports = n(1);
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.loadProgressBar = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
            n = 0,
            i = function () {
              t.interceptors.request.use(function (e) {
                return (
                  s(e) &&
                    ((e.onDownloadProgress = u), (e.onUploadProgress = u), n++, r.default.start()),
                  e
                );
              });
            },
            a = function () {
              t.interceptors.response.use(
                function (e) {
                  return s(e.config) && 0 == --n && r.default.done(), e;
                },
                function (e) {
                  return 0 == --n && r.default.done(), Promise.reject(e);
                },
              );
            };
          r.default.configure(e), i(), a();
        }),
        n(2);
      var r = i(n(3)),
        o = i(n(4));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = function (e) {
          return void 0 === e.progressBar || e.progressBar;
        },
        u = function (e) {
          return r.default.inc(((t = e.loaded), (n = e.total), Math.floor(1 * t) / n));
          var t, n;
        };
    },
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      n.r(t);
      var r,
        o,
        i = { version: '0.2.0' },
        s = (i.settings = {
          minimum: 0.08,
          easing: 'linear',
          positionUsing: '',
          speed: 200,
          trickle: !0,
          trickleSpeed: 200,
          showSpinner: !0,
          barSelector: '[role="bar"]',
          spinnerSelector: '[role="spinner"]',
          parent: 'body',
          template:
            '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
        });
      function u(e, t, n) {
        return e < t ? t : e > n ? n : e;
      }
      function a(e) {
        return 100 * (-1 + e);
      }
      (i.configure = function (e) {
        var t, n;
        for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (s[t] = n);
        return this;
      }),
        (i.status = null),
        (i.set = function (e) {
          var t = i.isStarted();
          (e = u(e, s.minimum, 1)), (i.status = 1 === e ? null : e);
          var n = i.render(!t),
            r = n.querySelector(s.barSelector),
            o = s.speed,
            l = s.easing;
          return (
            c(function (t) {
              '' === s.positionUsing && (s.positionUsing = i.getPositioningCSS()),
                f(
                  r,
                  (function (e, t, n) {
                    var r;
                    return (
                      ((r =
                        'translate3d' === s.positionUsing
                          ? { transform: 'translate3d(' + a(e) + '%,0,0)' }
                          : 'translate' === s.positionUsing
                          ? { transform: 'translate(' + a(e) + '%,0)' }
                          : { 'margin-left': a(e) + '%' }).transition = 'all ' + t + 'ms ' + n),
                      r
                    );
                  })(e, o, l),
                ),
                1 === e
                  ? (f(n, { transition: 'none', opacity: 1 }),
                    setTimeout(function () {
                      f(n, { transition: 'all ' + o + 'ms linear', opacity: 0 }),
                        setTimeout(function () {
                          i.remove(), t();
                        }, o);
                    }, o))
                  : setTimeout(t, o);
            }),
            this
          );
        }),
        (i.isStarted = function () {
          return 'number' == typeof i.status;
        }),
        (i.start = function () {
          i.status || i.set(0);
          var e = function () {
            setTimeout(function () {
              i.status && (i.trickle(), e());
            }, s.trickleSpeed);
          };
          return s.trickle && e(), this;
        }),
        (i.done = function (e) {
          return e || i.status ? i.inc(0.3 + 0.5 * Math.random()).set(1) : this;
        }),
        (i.inc = function (e) {
          var t = i.status;
          return t
            ? t > 1
              ? void 0
              : ('number' != typeof e &&
                  (e =
                    t >= 0 && t < 0.2
                      ? 0.1
                      : t >= 0.2 && t < 0.5
                      ? 0.04
                      : t >= 0.5 && t < 0.8
                      ? 0.02
                      : t >= 0.8 && t < 0.99
                      ? 0.005
                      : 0),
                (t = u(t + e, 0, 0.994)),
                i.set(t))
            : i.start();
        }),
        (i.trickle = function () {
          return i.inc();
        }),
        (r = 0),
        (o = 0),
        (i.promise = function (e) {
          return e && 'resolved' !== e.state()
            ? (0 === o && i.start(),
              r++,
              o++,
              e.always(function () {
                0 == --o ? ((r = 0), i.done()) : i.set((r - o) / r);
              }),
              this)
            : this;
        }),
        (i.render = function (e) {
          if (i.isRendered()) return document.getElementById('nprogress');
          d(document.documentElement, 'nprogress-busy');
          var t = document.createElement('div');
          (t.id = 'nprogress'), (t.innerHTML = s.template);
          var n,
            r = t.querySelector(s.barSelector),
            o = e ? '-100' : a(i.status || 0),
            u = document.querySelector(s.parent);
          return (
            f(r, { transition: 'all 0 linear', transform: 'translate3d(' + o + '%,0,0)' }),
            s.showSpinner || ((n = t.querySelector(s.spinnerSelector)) && v(n)),
            u != document.body && d(u, 'nprogress-custom-parent'),
            u.appendChild(t),
            t
          );
        }),
        (i.remove = function () {
          p(document.documentElement, 'nprogress-busy'),
            p(document.querySelector(s.parent), 'nprogress-custom-parent');
          var e = document.getElementById('nprogress');
          e && v(e);
        }),
        (i.isRendered = function () {
          return !!document.getElementById('nprogress');
        }),
        (i.getPositioningCSS = function () {
          var e = document.body.style,
            t =
              'WebkitTransform' in e
                ? 'Webkit'
                : 'MozTransform' in e
                ? 'Moz'
                : 'msTransform' in e
                ? 'ms'
                : 'OTransform' in e
                ? 'O'
                : '';
          return t + 'Perspective' in e
            ? 'translate3d'
            : t + 'Transform' in e
            ? 'translate'
            : 'margin';
        });
      var c = (function () {
          var e = [];
          function t() {
            var n = e.shift();
            n && n(t);
          }
          return function (n) {
            e.push(n), 1 == e.length && t();
          };
        })(),
        f = (function () {
          var e = ['Webkit', 'O', 'Moz', 'ms'],
            t = {};
          function n(n, r, o) {
            var i;
            (i = (i = r).replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (e, t) {
              return t.toUpperCase();
            })),
              (r =
                t[i] ||
                (t[i] = (function (t) {
                  var n = document.body.style;
                  if (t in n) return t;
                  for (var r, o = e.length, i = t.charAt(0).toUpperCase() + t.slice(1); o--; )
                    if ((r = e[o] + i) in n) return r;
                  return t;
                })(i))),
              (n.style[r] = o);
          }
          return function (e, t) {
            var r,
              o,
              i = arguments;
            if (2 == i.length)
              for (r in t) void 0 !== (o = t[r]) && t.hasOwnProperty(r) && n(e, r, o);
            else n(e, i[1], i[2]);
          };
        })();
      function l(e, t) {
        return ('string' == typeof e ? e : m(e)).indexOf(' ' + t + ' ') >= 0;
      }
      function d(e, t) {
        var n = m(e),
          r = n + t;
        l(n, t) || (e.className = r.substring(1));
      }
      function p(e, t) {
        var n,
          r = m(e);
        l(e, t) &&
          ((n = r.replace(' ' + t + ' ', ' ')), (e.className = n.substring(1, n.length - 1)));
      }
      function m(e) {
        return (' ' + ((e && e.className) || '') + ' ').replace(/\s+/gi, ' ');
      }
      function v(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      t.default = i;
    },
    function (t, n) {
      t.exports = e;
    },
  ]);
});
