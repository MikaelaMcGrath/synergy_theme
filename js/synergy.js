(function ($) {

  jQuery( document ).ready(function() {
  
    jQuery('.dropdown-toggle').click(function(){
       var url = jQuery(this).attr("href"); 
       jQuery(location).attr('href', url);
    });
  }); 

    jQuery(document).ready(function () {

    checkSize();

    // run test on resize of the window
    jQuery(window).resize(checkSize);

    //jQuery( ".menu.nav .dropdown-menu" ).wrapInner( "<div class='container'></div>" );

    
function checkSize(){
    if (jQuery(".main-menu-block").css("display") !== "none" ){
      jQuery('ul.menu.nav li.dropdown').hover(function() {
      
        jQuery(this).addClass( "open" );


        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);}, function() {
           jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);  
         
           jQuery("body").trigger("click");
      
        });


    } else {
       jQuery('.mean-nav>.menu-level-1').find('ul > li > a').removeAttr('data-toggle');

    }
}

});
    jQuery( document ).ready(function() {
      jQuery('#edit-search-api-views-fulltext').addClass('placeholder').attr('placeholder', '\uf002   Search all products');
    });
    jQuery( document ).ready(function() {
      jQuery('.view-id-documents.view-display-id-block').find('.file > a').addClass('btn btn-secondary');
    });
    jQuery( document ).ready(function() {
      jQuery('.view-id-members_map.view-display-id-block').find('.views-field-field-geofield-distance span:contains("0.00km")').text('');
    });
    
 })(jQuery);