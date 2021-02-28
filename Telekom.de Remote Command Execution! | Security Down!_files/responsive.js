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
		
		//remove img height and width attributes for better responsiveness
		$('img').each(function(){
			$(this).removeAttr('width')
			$(this).removeAttr('height');
		});
		
		//responsive drop-down < == top nav
		$("<select />").appendTo("#top-navigation");
		$("<option />", {
		   "selected": "selected",
		   "value" : "",
		   "text" : responsiveLocalize.text
		}).appendTo("#top-navigation select");
		$("#top-navigation a").each(function() {
		 var el = $(this);
		 $("<option />", {
			 "value" : el.attr("href"),
			 "text" : el.text()
		 }).appendTo("#top-navigation select");
		});
		
		//remove options with # symbol for value
		$("#top-navigation option").each(function() {
			var navOption = $(this);
			
			if( navOption.val() == '#' ) {
				navOption.remove();
			}
		});
		
		//open link
		$("#top-navigation select").change(function() {
		  window.location = $(this).find("option:selected").val();
		});

		
		
		//responsive drop-down <== main nav
		$("<select />").appendTo("#navigation");
		$("<option />", {
		   "selected": "selected",
		   "value" : "",
		   "text" : responsiveLocalize.text
		}).appendTo("#navigation select");
		$("#navigation a").each(function() {
		 var el = $(this);
		 $("<option />", {
			 "value"   : el.attr("href"),
			 "text"    : el.text()
		 }).appendTo("#navigation select");
		});
		
		//remove options with # symbol for value
		$("#navigation option").each(function() {
			var navOption = $(this);
			
			if( navOption.val() == '#' ) {
				navOption.remove();
			}
		});
		
		//open link
		$("#navigation select").change(function() {
		  window.location = $(this).find("option:selected").val();
		});

		//uniform
		$(function(){
       		 $("#navigation select").uniform();
			 $("#top-navigation select").uniform();
      	});
		
		//fitvids
		$(".fitvids-container").fitVids();
	
	}); // END doc ready
}); // END function

}
/*
     FILE ARCHIVED ON 07:46:04 Feb 25, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:43:29 Jan 20, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 57.101 (4)
  exclusion.robots: 0.218
  load_resource: 16.772
  RedisCDXSource: 6.176
  CDXLines.iter: 21.506 (3)
  LoadShardBlock: 52.274 (3)
  esindex: 0.011
  exclusion.robots.policy: 0.203
  captures_list: 83.147
*/