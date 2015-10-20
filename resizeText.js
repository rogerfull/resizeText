/*

resizeText - jQuery plugin for resize any text on DOM.

*/

// tCliks == Total clicks.
// sTags == size of a tag in pixels.
// tNames == tags names on DOM, like 'p', 'span', 'div'. You can use ".yourClassName" or "#yourIdName" also.
// incDec == Increase / Decrease

(function($){

// Global variable
var counter = 0;
	
// BEGIN function resizeText
$.fn.resizeText = function( tClicks, sTags, tNames, incDec ){
   
	var clicks  = tClicks;
	var size    = sTags; // Size in pixels for each tag on DOM
	tNames.replace( / /g, '' ); // Remove any space between tags
	var tags    = new Array();
	tags.push( tNames );
	
	var id      = incDec;
	
	if( id == 'i' ){
	   $.fn.increase( clicks, size, tags );	
	}else if( id == 'd' ){
	   $.fn.decrease( clicks, size, tags );	
	}
	   
} // END function resizeText()
   
// BEGIN function increase()
$.fn.increase = function( clicks, size, tags ){
   if( counter < clicks ){
	   counter++;
			
	   for( var i = 0; i < tags.length; i++ ){ 
		   var t = $( tags[ i ] );
			   t.css({ fontSize: '+=' + size + 'px' });
		} 
   }else if( clicks == 0 ){ // Increase infinitely
		for( var o = 0; o < tags.length; o++ ){
		   var t = $( tags[ o ] );
			   t.css({ fontSize: '+=' + size + 'px' }); 	
		}
	}
					 		
} // END function increase()
	
//BEGIN function decrease()
$.fn.decrease = function( clicks, size, tags ){
	
   if( counter > ( tags.length - tags.length ) ){
	   counter--;
		for( var i = 0; i < tags.length; i++ ){
		   var t	= $( tags[ i ] );
			   t.css({ fontSize: '-=' + size + 'px' });
		}
	}else if( clicks == 0 ){ // Decrease infinitely
	   for( var o = 0; o < tags.length; o++ ){
		   var t = $( tags[ o ] );
			   t.css({ fontSize: '-=' + size + 'px' });	
		}
	}
		
}
// END function decrease()

})( jQuery );