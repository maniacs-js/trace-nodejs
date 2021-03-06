var cls = require('continuation-local-storage')

before(function () {
  this.ns = cls.createNamespace('app')
  require('@risingstack/trace/lib/instrumentations').create({
    agent: {
      bind: function (fn) {
        return this.ns.bind(fn)
      }.bind(this),
      getConfig: function () {
        return {
          whiteListHosts: []
        }
      },
      bindEmitter: function () {}
    },
    config: { }
  })
})
