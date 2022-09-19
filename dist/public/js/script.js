
const CONFIG = {"VERSION":"20220918","PROJECT_NAME":"ewill-interview"};

// > akaiUI
const akaiUI = (function(window, jQuery) {
    if (!window.jQuery) { throw new Error("requires jQuery") }

    let $ = window.jQuery;

    let breakpoints = {
        "xxs": 0,
        "xs": 375,
        "sm": 576,
        "md": 768,
        "lg": 1024,
        "xl": 1280,
        "xxl": 1366,
        "uxl": 1680
    };

    let mqUp = {
        "xxs": window.matchMedia("(min-width: " + breakpoints.xxs + "px)"),
        "xs": window.matchMedia("(min-width: " + breakpoints.xs + "px)"),
        "sm": window.matchMedia("(min-width: " + breakpoints.sm + "px)"),
        "md": window.matchMedia("(min-width: " + breakpoints.md + "px)"),
        "lg": window.matchMedia("(min-width: " + breakpoints.lg + "px)"),
        "xl": window.matchMedia("(min-width: " + breakpoints.xl + "px)"),
        "xxl": window.matchMedia("(min-width: " + breakpoints.xxl + "px)"),
        "uxl": window.matchMedia("(min-width: " + breakpoints.uxl + "px)"),
    };


    let mqDown = {
        "xxs": window.matchMedia("(max-width: " + breakpoints.xs + "px)"),
        "xs": window.matchMedia("(max-width: " + breakpoints.sm + "px)"),
        "sm": window.matchMedia("(max-width: " + breakpoints.md + "px)"),
        "md": window.matchMedia("(max-width: " + breakpoints.lg + "px)"),
        "lg": window.matchMedia("(max-width: " + breakpoints.xl + "px)"),
        "xl": window.matchMedia("(max-width: " + breakpoints.xxl + "px)"),
        "xxl": window.matchMedia("(max-width: " + breakpoints.uxl + "px)"),
        // "uxl" : window.matchMedia("(max-width: "+breakpoints.+"px)"),
    };


    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }


    // https://medium.com/@mingjunlu/lazy-loading-images-via-the-intersection-observer-api-72da50a884b7
    if ('loading' in HTMLImageElement.prototype) {
        // 支援原生 lazy loading
        console.log('支援原生 lazy loading!!');
    } else {
        // 不支援，改用其他備案
    }


    return {
/**
 * ---------------------------------------------------------------------------------
 * >> .init()
 */

init() {
    const _ = this;
    $("body").addClass('js-loading-ok');
    _.scrolling();

    gsap.registerPlugin(ScrollTrigger);

    $(".site_nav-item").click(function(event) {
        _.mmenu().close($("body"));
    });
},

/**
 * ---------------------------------------------------------------------------------
 * >> .customElement()
 */

customElement() {

    /*
    class listPagination extends HTMLElement {
        constructor() {
            // Always call super first in constructor
            super();
            // Element functionality written in here
        }
    }
    customElements.define('list-pagination', listPagination);


    class TextBlock extends HTMLElement {
        constructor() {
            // Always call super first in constructor
            super();
            // Element functionality written in here
            // this.style.padding = "40px";
        }
    }
    customElements.define('text-block', TextBlock);

    class moduleTabs extends HTMLElement {
        constructor() {
            // Always call super first in constructor
            super();
            // Element functionality written in here
            // this.style.padding = "40px";
        }
    }
    customElements.define('module-tabs', moduleTabs);

    // 輸入框
    class moduleField extends HTMLElement {
        constructor() {
            // Always call super first in constructor
            super();
            let $this_input = $(this).find('input');
            $this_input.focus(function(event) {

                let $this_parent = $(this).parents("module-field");
                $this_parent.addClass("js-focus");
            });
            $this_input.focusout(function() {
                let $this_parent = $(this).parents("module-field");
                $this_parent.removeClass("js-focus");
            });
        }
    }
    customElements.define('module-field', moduleField);

    // 開合內容
    class moduleAccordion extends HTMLElement {
        constructor() {
            // Always call super first in constructor
            super();
            let $ctrl = $(this).find('.accordion-ctrl');
            $ctrl.append($('<div class="ctrl-icon"></div>'));
            $ctrl.click(function(event) {
                let $item = $(this).parents(".accordion-item");
                $(".accordion-item").removeClass('js-open');
                if (!$item.hasClass('js-open')) {
                    $item.addClass('js-open');
                }
                else {
                    $item.removeClass('js-open');
                }
            });
            // $ctrl.append($("<div/>", {class: "ctrl-icon"}));
        }
    }
    customElements.define('module-accordion', moduleAccordion);
    */

    return {
        modCard: function() {
            // 卡片
            class moduleCard extends HTMLElement {
                constructor() {
                    // Always call super first in constructor
                    super();
                    $(this).css({
                        'display': "block"
                    });
                    // Element functionality written in here
                    $(this).hover(function() {
                        $(this).addClass('js-hover');
                    }, function() {
                        $(this).removeClass('js-hover');
                    });
                }
            }
            customElements.define('module-card', moduleCard);
        }
    }


},
/**
 * ---------------------------------------------------------------------------------
 * >> .icon()
 */

icon() {
    $("[data-drawicon]").each(function(i, elm) {
        let url = $(elm).data('drawicon');

        try {
            Snap.load(url, function (f) {
                let _svg = f.node;

                $(elm).append($("<div/>", {class: 'svgicon'}).append(_svg));


            });
        }
        catch (e) {
            console.log(e);
        }

    });
},
/**
 * ---------------------------------------------------------------------------------
 * >> .scrolling()
 */

scrolling() {
    const _ = this;
    $(window).scroll(function(event) {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 100) {
            $("body").addClass('js-scrolling');
        }else {
            $("body").removeClass('js-scrolling');
        }
    });

},
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

/**
 * ---------------------------------------------------------------------------------
 * >> .openSearch(el)
 */

openSearch(el) {
    const _ = this;
    console.log(el);
    let $this_parent = $(el).parents(".site_search");

    $("body").toggleClass('js-open-search');
},



/**
 * ---------------------------------------------------------------------------------
 * >> .accToogle(el)
 */

accToogle(el) {
    const _ = this;
    const $el = $(el);
    function toogle(el, target) {
        let $this_parent = el.parents(target);
        $this_parent.toggleClass('js-open');
    }
    return {
        onclick: function(){
            toogle($el, "[data-acctoogle]");
        },

        mbrAside: function(){
            $(".aside-item.js-highlight").append($("<div>", {
                class: "aside-item-mask",
            })).click(function(){
                toogle($(this), "[data-acctoogle]");
            });
        },

        blogType: function() {
            $(".blog_type-item.js-highlight").append($("<div>", {
                class: "blog_type-item-mask",
            })).click(function(){
                toogle($(this), "[data-acctoogle]");
            });
        },

        faqType: function() {
            $(".faq_type-item.js-highlight").append($("<div>", {
                class: "faq_type-item-mask",
            })).click(function(){
                toogle($(this), "[data-acctoogle]");
            });
        },

        tab: function() {
            $(".juliArt_tab-ctrl-selector").click(function(){
                toogle($(this), "[data-acctoogle]");
            });
        }
    }
},
/**
 * ---------------------------------------------------------------------------------
 * >> .selectStyled()
 */

selectStyled() {
    const _ = this;

    return {

        base: function() {
            // 原始ＨＴＭＬ結構
            // <module-field class="{{PROJECT_NAME}}_field">
            //     <div class="{{PROJECT_NAME}}_select">
            //         <select name="" id="" class="{{PROJECT_NAME}}_select-select">
            //             <option value="a1">a1</option>
            //             <option value="a2">a2</option>
            //             <option value="a3">a3</option>
            //         </select>
            //     </div>
            // </module-field>
            var set = {
                field: `${CONFIG.PROJECT_NAME}_field`,
                wrap: `${CONFIG.PROJECT_NAME}_select`,
                select: `${CONFIG.PROJECT_NAME}_select-select`,
                styled: `${CONFIG.PROJECT_NAME}_select-styled`,

                list: `${CONFIG.PROJECT_NAME}_select-list`,
                item: `${CONFIG.PROJECT_NAME}_select-item`,
                cssClass: 'js-open',
                selectedClass: 'js-selected',
                hasSelected: 'js-hasSelected'
            }
            return set;
        },

        init: function() {
            const _ = this;

            if (!$.browser.mobile) {
                // console.log("not mobile");
                _.styled();
            } else {
                // console.log("mobile");
                $("select").each(function(index, el) {
                    $(this).wrap('<div class="extra-wrapper"></div>');
                });
                $("select").change(function(event) {
                    $(this).addClass('js-hasSelected');
                });
            }
        },

        styled: function() {

            const _ = this;
            var el = _.base();

            $(`.${el.wrap}:not(.js-waiting-load-data)`).each(function(i, elm) {
                var $this = $(elm),
                    numberOfOptions = $this.find('option').length;

                $this_field = $this.parents(`.${el.field}`);

                // <select class="${CONFIG.PROJECT_NAME}_select-select">
                var $select_tag = $this.find(`.${el.select}`);
                // <select> 隱藏
                $select_tag.addClass('js-hidden');
                
                // 加上文字div，並給內容
                $this.append($('<div>', {
                    class: `${el.styled}`
                }));
                let $styled_txt = $this.find(`.${el.styled}`);
                $styled_txt.text($this.find('option').eq(0).text());


                // 加上list的div
                $this_field.append($('<div>', {
                    class: `${el.list}`
                }));
                let $list = $this_field.find(`.${el.list}`);
                $list.append($('<ul />', {
                    'class': 'lis-n',
                }));



                for (var i = 0; i < numberOfOptions; i++) {
                    $('<li />', {
                        'class': el.item,
                        'text': $this.find('option').eq(i).text(),
                        'rel': $this.find('option').eq(i).val()
                    }).appendTo($list.find('ul'));
                }

                var $list_items = $list.find('li');

                // 點select框
                $styled_txt.click(function(e) {
                    e.stopPropagation();

                    $(`.js-open div.${el.styled}`).not(this).each(function() {
                        $(this).parents(`.${el.wrap}`).removeClass(el.cssClass);
                    });
                    $(this).parents(`.${el.wrap}`).toggleClass(el.cssClass);

                });

                // 點下拉選項
                $list_items.click(function(e) {
                    e.stopPropagation();
                    let select_val = $(this).attr('rel');

                    $styled_txt.text($(this).text()).parents(`.${el.wrap}`).removeClass(el.cssClass);
                    if (select_val == '') {
                        $styled_txt.removeClass(el.hasSelected);
                    } else {
                        $styled_txt.addClass(el.hasSelected);
                    }

                    $list_items.removeClass(el.selectedClass);
                    $(this).addClass(el.selectedClass);

                    $select_tag.val(select_val);

                    // if () {}
                    console.log();
                    $this.find('option').removeAttr('selected');
                    $this.find('option[value="'+select_val+'"]').attr("selected", 1);


                    if ($this_field.hasClass('error')) {
                        $this_field.removeClass('error').find('label.error').remove();
                    }
                });

                $(document).click(function() {
                    $styled_txt.parent().removeClass(el.cssClass);
                    // $list.removeClass(el.cssClass);
                });

            });
        }
    }

},
/**
 * ---------------------------------------------------------------------------------
 * >> .highlight(navItem, name)
 */

highlight(navItem, name) {
    const _ = this;
    $(navItem).each(function(index, el) {
        if ($(el).data('highlight') == name) {
            $(el).addClass('js-highlight');
        }
    });
},
/**
 * ---------------------------------------------------------------------------------
 * >> .tabs()
 */

tabs: function (elm) {
   const name = `${CONFIG.PROJECT_NAME}_tab`;
   // console.log(name);
   const $this = $(elm);
   const $thisTab = $this.parents(`.${name}`).addClass('tab_run');

   const $ctrl = $thisTab.find(`.${name}-ctrl`);
   console.log($ctrl);
   const $ctrl_selector = $thisTab.find(`.${name}-ctrl-selector`);
   const $content = $thisTab.find(`.${name}-content`);
   const $content_inner = $thisTab.find(`.${name}-content-inner`);

   const type = $this.data("type");
   // console.log(type);

   if (!$this.hasClass("js-active")) {
      $ctrl_selector.removeClass("js-active");
      $this.addClass("js-active");

      $content_inner.removeClass("js-show");
      $(`#tabCnt-${type}`).addClass("js-show");
   }


   if ($(name).length) {
      const simplebar = new SimpleBar($(`.${name}-content-inner.js-show .simplebar_block`)[0]);
   }

   // if ($ctrl.hasClass('js-open')) {
      // $ctrl.toggleClass('js-open');
   // }

},
/**
 * ---------------------------------------------------------------------------------
 * >> .pdtaside()
 */

pdtaside() {
    const _ = this;



    function resize() {
        console.log(mqDown.md.matches);
        if (!mqDown.md.matches) {
            $(".pdtaside[data-acctoogle]").addClass('js-open');
        }
        else {
            $(".pdtaside[data-acctoogle]").removeClass('js-open');
        }
    }

    resize();
    $(window).resize(function(){
        resize();
    });

},
    }
}(window, jQuery));


$(function() {
    $("body").addClass('js-loading-ok');
});