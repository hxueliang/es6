; (() => {
  'use strict'
  var e,
    o,
    n,
    t = {
      863: (e, o) => {
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = { name: 'hxl' })
      },
      935: (e, o) => {
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.fn1 = function () {
            console.log('fn1')
          }),
          (o.fn2 = function () {
            console.log('fn2')
          })
      }
    },
    f = {}
  function l(e) {
    if (f[e]) return f[e].exports
    var o = (f[e] = { exports: {} })
    return t[e](o, o.exports, l), o.exports
  }
  ; (o = (e = l(863)) && e.__esModule ? e : { default: e }),
    (n = l(935)),
    console.log(o.default),
    (0, n.fn1)(),
    (0, n.fn2)()
})()
