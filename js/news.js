$(function(){
	itemHover();
	$('.navbar .active').find('a').css('background','rgba(8,8,8,.2)');
	onscroll=function(){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>=470){
			$('nav').css('background','#222');
			$('.navbar .active').find('a').css('background','#080808');
		}
		else{
			$('nav').css({'background':'rgba(34,34,34,.2)','border':'rgba(34,34,34,.2)'});
			$('.navbar .active').find('a').css('background','rgba(8,8,8,.2)');
		}
	}
	$('.banner .smallImg').hover(function(){
		var num=$(this).attr('dataNum');
//		alert(num);
		$('.banner .banner-carousel').css('transform','translateX(-'+20*num+'%)');
	},function(){
		
	})
})
function itemHover(){
	$('.hoverObjs').mouseenter(function(){
		$('<div></div>').css({
			'background':'url(images/guest-img-bg1.png',
			'background-size':'100%',
			'width':$(this).width()+'px',
			'height':$(this).height()+'px'
		}).addClass('createDiv').appendTo($(this));
	});
	$('.hoverObjs').mouseleave(function(){
		$('.createDiv').remove();
	})
}
