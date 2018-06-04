(function () {
    "use strict";
    var app = {
        initialize: function () {
            this.litera();
            this.search();
            this.mobileMenu();
            this.itemHover();
        },
        litera: function () {
            jQuery('.logo-litera').each(function () {
                var ths = jQuery(this);
                ths.html(ths.html().replace('O', '<span>O</span>'))
            });
        },
        search: function () {
            var s = jQuery('.search'),
                sf = jQuery('.search-field'),
                sw = jQuery('.search-wrap');
            s.click(function () {
                sf.stop().slideToggle();
                sf.find('input[type=text]').focus();
                jQuery(document).keyup(function (e) {
                    if (e.keyCode === 27) sf.slideUp();
                }).click(function () {
                    sf.slideUp();
                });
                sw.click(function (e) {
                    e.stopPropagation();
                });
            })
        },
        mobileMenu: function () {
            var tl  = jQuery('.top-line'),
                tm  = jQuery('.top-menu'),
                mmb = jQuery('.mobile-menu-button');
            tl.after('<div class="mobile-menu d-lg-none"></div>');
            tm.clone().appendTo('.mobile-menu');
            mmb.click(function () {
                jQuery('.mobile-menu').stop().slideToggle();
            });
        },
        itemHover: function () {
            jQuery('.col-item').hover(function () {
                var th = jQuery(this),
                    lnk = th.closest('.col-item').find('h4 a');
                lnk.addClass('hover')
            }, function () {
                jQuery(this).closest('.col-item').find('h4 a').removeClass('hover')
            })
        }
    };
    jQuery(document).ready(function () {
        app.initialize();
    });

}());
