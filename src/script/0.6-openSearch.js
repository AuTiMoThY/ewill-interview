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


