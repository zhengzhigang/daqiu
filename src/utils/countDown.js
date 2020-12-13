var countDown = (function () {
    var defaultOptions = {
        precision: 1000,
        format: function (value) {
            return value
        }
    }
    var count = {
        options: defaultOptions,
        callback: null,
        interval: true,
        restTime: 0,
        offset: {},
        _timer: function (func, delay) {
            var self = this

            setTimeout(function () {
                if (self.interval) {
                    self.restTime -= self.options.precision
                    self.restTime = Math.max(self.restTime, 0)
                    func()
                    self._timer(func, delay)
                }
            }, delay)
        },
        _create: function (restTime, options, callback) {
            if (arguments === undefined) {
                return
            }

            this.restTime = restTime
            this.callback = callback

            if (typeof options === 'function') {
                this.callback = options
            } else {
                this.options = Object.assign({}, defaultOptions, options)
            }
        },
        _format: function () {
            var day = Math.floor(this.restTime / 60 / 60 / 1000 / 24)
            var hours = Math.floor(this.restTime / 60 / 60 / 1000) % 24
            var minutes = Math.floor(this.restTime / 60 / 1000) % 60
            var seconds = Math.floor(this.restTime / 1000) % 60
            var milliSeconds = this.restTime % 1000

            this.offset = {
                time: this.restTime,
                day: this.options.format(day),
                hours: this.options.format(hours),
                minutes: this.options.format(minutes),
                seconds: this.options.format(seconds),
                milliSeconds: this.options.format(milliSeconds)
            }
        },
        init: function () {
            console.log('init', this)
            var args = Array.prototype.slice.apply(arguments)
            this._create.apply(this, args)

            var self = this
            var precision = this.options.precision

            if (self.restTime <= 0) {
                return
            }

            this.update()
            this._timer(function () {
                self.update()

                // 超时停止
                if (self.restTime <= 0) {
                    self.remove()
                }
            }, precision)

            return this
        },
        update: function () {
            this._format()
            this.callback(this.offset)
        },
        remove: function () {
            this.interval = false
        },
    }

    return function () {
        var args = Array.prototype.slice.apply(arguments)
        var foo = Object.create(count)

        return foo.init.apply(foo, args)
    }
})()

export default countDown
