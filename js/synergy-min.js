!function($){jQuery(document).ready(function(){jQuery(".dropdown-toggle").click(function(){var e=jQuery(this).attr("href");jQuery(location).attr("href",e)})}),jQuery(document).ready(function(){function e(){"none"!==jQuery(".main-menu-block").css("display")?jQuery("ul.menu.nav li.dropdown").hover(function(){jQuery(this).addClass("open"),jQuery(this).find(".dropdown-menu").stop(!0,!0).delay(200).fadeIn(200)},function(){jQuery(this).find(".dropdown-menu").stop(!0,!0).delay(200).fadeOut(200),jQuery("body").trigger("click")}):jQuery(".mean-nav>.menu-level-1").find("ul > li > a").removeAttr("data-toggle")}e(),jQuery(window).resize(e),jQuery(".menu.nav .dropdown-menu").wrapInner("<div class='container'></div>")}),jQuery(document).ready(function(){jQuery("#edit-search-api-views-fulltext").attr("placeholder"," Search all products").css("color:#8dc63f;")})}(jQuery);