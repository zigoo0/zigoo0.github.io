var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function($){
	$(document).ready(function(){
		
		//scroll to top
		$('a[href=#top]').on('click', function(){
			$('html, body').animate({scrollTop:0}, 'normal');
			return false;
		});
		
		//animate comments scroll
		$(".comment-scroll a").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 'normal');
		});
		
		// superFish
		$("ul.sf-menu").superfish({ 
			autoArrows: true,
			animation:  {opacity:'show', height:'show'}
		});
		
		// Toggle
		$(".prth-toggle-wrap .toggle_container").hide();
		var $toggle_trigger = $('.prth-toggle-wrap h3');
		
		$($toggle_trigger).click(function(){
			var $toggle_icon = $(this).find("span");
			$(this).toggleClass("active").next().slideToggle("fast");
			
			if($(this).hasClass('active')){
				$toggle_icon.removeClass("prth-icon-plus-sign").addClass("prth-icon-minus-sign");
			} else {
				$toggle_icon.removeClass("prth-icon-minus-sign").addClass("prth-icon-plus-sign");
			}
				
			return false; //Prevent the browser jump to the link anchor
		});
					
		// UI tabs
		$( ".tab-shortcode" ).tabs({fx:{opacity: "toggle", duration:'fast'}});
		
		// UI accordion
		$( ".prth-accordion" ).accordion({autoHeight: false});
		$(".prth-accordion").accordion("option", "icons",
        { 'header': 'prth-icon-plus-sign', 'headerSelected': 'prth-icon-minus-sign' });
		
	
	}); // END doc ready
}); // END function

jQuery(function($){
	$(window).load(function() {
		
	//equal heights for portfolio entries to avoid float issues
		$.fn.eqHeights = function() {
		var el = $(this);
		if (el.length > 0 && !el.data('eqHeights')) {
			$(window).bind('resize.eqHeights', function() {
				el.eqHeights();
			});
			el.data('eqHeights', true);
		}
			return el.each(function() {
				var curHighest = 0;
				$(this).children('.portfolio-post').each(function() {
					var el = $(this),
						elHeight = el.height('auto').height();
					if (elHeight > curHighest) {
						curHighest = elHeight;
					}
				}).height(curHighest);
			});
		};
		$('.portfolio-content').eqHeights();
		
	}); // END window ready
}); // END function

}
/*
     FILE ARCHIVED ON 23:16:32 Jan 21, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:39:11 Jan 20, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 198.207
  exclusion.robots: 0.12
  exclusion.robots.policy: 0.11
  RedisCDXSource: 19.954
  esindex: 0.01
  LoadShardBlock: 148.045 (3)
  PetaboxLoader3.datanode: 201.493 (5)
  CDXLines.iter: 26.778 (3)
  PetaboxLoader3.resolve: 342.863 (3)
  load_resource: 451.826 (2)
*/