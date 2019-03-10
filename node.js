function Tab($tab) {
    this.init($tab)
    this.bind()
}
Tab.prototype = {
    init: function ($tab) {
        this.$tab = $tab
        this.$mod = this.$tab.find('.header > .tab')
        this.index = 0
    },
    bind: function () {
        var _this = this
        this.$mod.on('click', function () {
            _this.index = $(this).index()
            _this.change()
        })
    },
    change: function () {
        this.$mod.eq(this.index).addClass('active').siblings().removeClass('active')
        this.$mod.parents('.mod-tab')
            .find('.panel')
            .eq(this.index)
            .addClass('active')
            .siblings()
            .removeClass('active')
    }
}
var Tab1 = new Tab($('.mod-tab').eq(0))
var Tab2 = new Tab($('.mod-tab').eq(1))


