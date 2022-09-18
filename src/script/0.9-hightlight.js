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