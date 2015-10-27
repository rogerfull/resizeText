# resizeText
Resize any text on DOM.

With it you can resize any text on DOM.

Just call the function "$.fn.resizeText() and pass to it four( 4 ) arguments like this:

<i>$.fn.resizeText( totalClicks, size, elements, increase( i ) or decrease( d ) );</i>

<b>$.fn.resizeText( 5, 5, 'h3, .myDiv, #myDiv2, a, p', 'i' );</b> // Do this to increase a text.<br />
<b>$.fn.resizeText( 5, 5, 'h3, .myDiv, #myDiv2, a, p', 'd' );</b> // Do this to decrease a text.

1) The first argument to be supplied is "total clicks" that you want to; *** <br />
2) The second argument is the size in pixels that you want that text resizes;<br />
3) Put elements that you want to. Put as many as you want separated by comma;<br />
4) The final argument is where you'll say to the function if you want increase 'i' or decrease 'd' a text.<br />

*** If you to put "ZERO( 0 )" you will increase or decrease the text infinitely.<br /><br />
 Example: $.fn.resizeText( <b>0</b>, 5, 'h3, .myDiv, #myDiv2, a, p', 'i' ); // This will increase the text infinitely!<br />
 Example: $.fn.resizeText( <b>0</b>, 5, 'h3, .myDiv, #myDiv2, a, p', 'd' ); // This will decrease the text infinitely!
 
 Live preview and download:
 
 http://smallguiti.com/apps/resizetext/
 
 
