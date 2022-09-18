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