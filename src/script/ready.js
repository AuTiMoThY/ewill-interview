$(function() {
    akaiUI.init();

    const showreelSwiper = new Swiper(".showreel-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            976: {
              slidesPerView: 2,
            }
            , 1280: {
              slidesPerView: 3,
            }
        }
    });

    const section = gsap.utils.toArray(".page_section-anchor");

    section.forEach((sec, index) => {
        // console.log(index);
        gsap.to(sec, {
            scrollTrigger: {
                trigger: sec,
                start: "top center",
                end: "bottom center",
                scrub: true,
                // markers: true,
                toggleClass:  "js-highlight",
                onEnter: ({progress, direction, isActive}) => {
                    const anchor = $(".page_section-anchor.js-highlight").attr('id');
                    // console.log(progress, direction, isActive);
                    $(`.fixed_anchor-item`).removeClass('js-highlight');
                    $(`.fixed_anchor-item[data-anchor=${anchor}]`).addClass('js-highlight');
                },
                onEnterBack: ({progress, direction, isActive}) => {
                    const anchor = $(".page_section-anchor.js-highlight").attr('id');
                    // console.log(progress, direction, isActive);
                    $(`.fixed_anchor-item`).removeClass('js-highlight');
                    $(`.fixed_anchor-item[data-anchor=${anchor}]`).addClass('js-highlight');
                },
            }
        })
    });

    // https://greensock.com/forums/topic/28654-add-class-to-anchor-link-active-div/
    // https://greensock.com/forums/topic/27683-scrolltrigger-pinned-sections-and-anchors-links/
    // https://greensock.com/forums/topic/24511-anchor-link-that-scrolls-to-end-of-timeline-attached-to-scrollbar/
    const anchorLinks = gsap.utils.toArray(".fixed_anchor-item-link");
    anchorLinks.forEach((link, i) => {

        link.addEventListener("click", e => {
            e.preventDefault();

            const target = document.querySelector(link.hash);
            const targetOffsetTop = target.offsetTop;
            gsap.to(window, {scrollTo: targetOffsetTop});
        });
    });
    const navLinks = gsap.utils.toArray(".site_nav-item-link");
    navLinks.forEach((link, i) => {

        link.addEventListener("click", e => {
            e.preventDefault();

            const target = document.querySelector(link.hash);
            const targetOffsetTop = target.offsetTop;
            gsap.to(window, {scrollTo: targetOffsetTop});
        });
    });


    gsap.fromTo('#aboutusRow1Pic',{
        y: '-=10%'
    }, {
        y: '+=20%',
        // zIndex: 99,
        scrollTrigger: {
            id: 'aboutusRow1Pic',
            trigger: '#aboutusRow1',
            start: 'top center',
            end: 'bottom',
            // markers: true,
            scrub: true,
        }
    });
    gsap.fromTo('#aboutusRow2Pic',{
        y: '-=10%'
    }, {
        y: '+=20%',
        // zIndex: 99,
        scrollTrigger: {
            id: 'aboutusRow2Pic',
            trigger: '#aboutusRow2',
            start: 'top center',
            end: 'bottom',
            // markers: true,
            scrub: true,
        }
    });
});