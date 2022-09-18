/**
 * ---------------------------------------------------------------------------------
 * >> .mmenu()  手機版menu 動作
 */
mmenu(){
    return {
        init: function() {
            console.log("mmenu start");
            let _this = this;

            let $body = $("body");

            (!$body.hasClass("js-open-mobile-menu")) ? _this.open($body): _this.close($body);

            $(window).resize(function(event) {
                if (!mqDown.md.matches) {
                    _this.close($body);
                }
            });


        },

        // mmenu.open
        open: function(el) {
            // console.log('open');
            el.addClass("js-open-mobile-menu");
        },

        // mmenu.close
        close: function(el) {
            // console.log('close');
            el.removeClass("js-open-mobile-menu");
        }
    }
},
