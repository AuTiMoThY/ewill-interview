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