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