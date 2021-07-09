
(function ($) {
    /*load图关闭*/
    $.fn.jm_load = function (opt) {
        var _that = this;
        var defaults = {
            style: '--ani_load', //获取的style样式
            times: 2000,    //默认时间
            danwei: 'ms',     //默认单位
        }
        defaults = { ...defaults, ...opt }  //替换默认参数

        var str = $("body").css(defaults.style);
        if (str) {
            str = str.trim();
            var last_str = str.substr(str.length - 1, 1);
            var other_str = str.substr(0, str.length - 1);
            var end = '';
            if (last_str == 's') {

                if (other_str.substr(other_str.length - 1, 1) == 'm') {
                    end = other_str.substr(0, other_str.length - 1);
                    end = end - 0;
                    if (!isNaN(end)) {
                        defaults.times = end;
                    }
                } else {
                    end = other_str - 0;

                    if (!isNaN(end)) {
                        defaults.times = end * 1000;
                    }
                }
            }
        } else {
            $("body").css(defaults.style, defaults.times + defaults.danwei);
        }

        setTimeout(function () {
            _that.addClass("loading");
        }, defaults.times)
    }
})(jQuery);