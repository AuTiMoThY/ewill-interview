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