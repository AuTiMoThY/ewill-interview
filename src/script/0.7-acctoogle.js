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