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