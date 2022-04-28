/* Enabling support for new HTML5 tags for IE6, IE7 and IE8 */
if(navigator.appName == 'Microsoft Internet Explorer' ){
	if( ( navigator.userAgent.indexOf('MSIE 6.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 7.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 8.0') >= 0 ) ){
		document.createElement('header')
		document.createElement('nav')
		document.createElement('section')
		document.createElement('aside')
		document.createElement('footer')
		document.createElement('article')
		document.createElement('hgroup')
		document.createElement('figure')
		document.createElement('figcaption')
		document.createElement('video')
	}
}
/* Enabling support for new HTML5 tags for IE6, IE7 and IE8 */


;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea')
			.focus(function(){if(this.value==this.defaultValue){this.value=''}})
				.blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
		if (window.PIE) {$('.gradient, .rounded, .shadow').each(function() {PIE.attach(this);});}
		
		//For iebelow7,9//
		if(navigator.appName == 'Microsoft Internet Explorer' ){
		   if( ( navigator.userAgent.indexOf('MSIE 7.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 8.0') >= 0 )){
			$('body').addClass('iebelow9')
		  }
		}
		

		// Styled dropdown and browse
		
		$('div.styled-dropdown').each(function(){
			var $_this = $(this)
			$_this.find('> select').css({'opacity' : 0 })
			$_this.find('div.dropdown-styler > div').html( $_this.find( 'select option:selected').text())

			$_this.find('> select').change(function(){
				$_this.find('div.dropdown-styler > div').html( $_this.find(":selected").text() )
			})
		})

		
		
		$("div.mobi-nav").click(function(){
			$("div.main-nav").slideToggle( 500, function(){
					$('div.main-nav > ul > li').find(' > ul').hide()					
			});			
		});// JavaScript Document
		
			
		//Custom styled checkbox calling
		styledCheckBox()
		
		
		
	}); //End Document Ready


	// end initiateCarouselSlider()
	$(window).load(function(){		
		if ( $('#visitSlider').length == 0 ) return false			
		$('#visitSlider').flexslider({
				animation: "slide",
				slideshow: true,
				directionNav: false,
				controlNav: true,
				useCSS: false,
				slideshowSpeed: 7000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
				animationSpeed: 1200, 
				start: function(slider){
					$('body').removeClass('loading');
				}
				,
				animationLoop: true,
				after: function(slider) {
				/* auto-restart player if paused after action */
				if (!slider.playing) {
					slider.play();
				}
			}
		})
	});		// JavaScript Document 

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})




function styledCheckBox(){
	$("input[type=checkbox].styled-checkbox").wrap('<div class="styled-check-Items"></div>')
	$(".styled-check-Items").append('<em></em>')

	$(".styled-check-Items em").each(function(i){
		
		// Find for required css properties of the checkbox to be applied to the upper wrap

		$(this).parent().css({'float' : $("input[type=checkbox].styled-checkbox").eq(i).css('float')})
		$(this).parent().css({'clear' : $("input[type=checkbox].styled-checkbox").eq(i).css('clear')})
		
		
		if( $(this).parent().css('float') == 'left' ){
			if( $("input[type=checkbox].styled-checkbox").eq(i).css('margin-right') == 'auto' || $("input[type=checkbox].styled-checkbox").eq(i).css('margin-right') == '3px' ) $(this).parent().css({marginRight : '3px'})
			else $(this).parent().css({marginRight : parseInt($("input[type=checkbox].styled-checkbox").eq(i).css('margin-right'))+3+'px'})
		}
		
		if( $(this).parent().css('float') == 'right' ){
			if( $("input[type=checkbox].styled-checkbox").eq(i).css('margin-left') == 'auto' || $("input[type=checkbox].styled-checkbox").eq(i).css('margin-left') == '3px' ) $(this).parent().css({marginLeft : '3px'})
			else $(this).parent().css({marginLeft : parseInt($("input[type=checkbox].styled-checkbox").eq(i).css('margin-left'))+3+'px'})
		}
		
		
		$("input[type=checkbox].styled-checkbox").eq(i).css({ 'position' : 'absolute', 'z-index' : 1, 'left' : '-99999px', 'top' : '0px' });
		
		
		if( $("input[type=checkbox].styled-checkbox").eq(i).attr('checked') ){
			$(this).css({'background-position':'0 -100px'})
		}
		else {
			$(this).css({'background-position':'0 0'})
		}
		
		// When click completed
		$(this).click(function(){
			if( $("input[type=checkbox].styled-checkbox").eq(i).attr('checked') ){
				$("input[type=checkbox].styled-checkbox").eq(i).attr('checked', false )
				$(this).css({'background-position':'0 0px'})
			}
			else {
				$("input[type=checkbox].styled-checkbox").eq(i).attr('checked',true)
				$(this).css({'background-position':'0 -100px'})
			}
		})
		
		$(this).parent().parent().find('span').click(function(){
			$(this).parent().find('em').click()
		
		})

	})
}
})(jQuery)

