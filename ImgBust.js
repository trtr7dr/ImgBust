
jQuery(function () {
     /**
     * Создание экземпляра ImgBust.
     *
     * @constructor
     * @param {string} elem - id картинки.
     * @param {array} urls - список картинок в порядке необходимого следования.
     * @param {number} speed - частота смены кадров в миллисекундах.
     */
    function ImgBust(elem, urls, speed) { // version 0.9

        if (!jQuery("*").is(jQuery(elem))) {
            console.error('ImgBust error: element ' + elem + ' not found');
            return false;
        }
        if (urls.length < 1) {
            console.error('ImgBust error: not found image urls');
            return false;
        }
        this.elem = jQuery(elem);
        this.urls = urls;
        this.len = urls.length;
        this.speed = speed;
        this.step = 0;
        this.flag = false;

        this.bust = function () {
            if (this.step === this.len - 1) {
                this.step = 0;
            }
            this.elem.attr('src', this.urls[this.step]);
            this.step++;
        };

        this.start = function () {
            var interval = setInterval(function (img_bust) {
                if (!this.flag) {
                    img_bust.bust();
                } else {
                    clearInterval(interval);
                }
            }, this.speed, this);
        };
    }
    // 
});
