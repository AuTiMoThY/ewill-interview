
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