$(function(){
	$('.navbar .active').find('a').css('background','rgba(8,8,8,.2)');
	 $(".works .production").bind("mouseenter mouseleave",function(e) {
	 	
           var w = $(this).width();
           var h = $(this).height();
           var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
           var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
           var dir = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
           var eventType = e.type;
           if(e.type == 'mouseenter'){
           		var creO=$('<div></div>').addClass('create').appendTo($(this));
//         		alert($(this).attr('name'))
           		$('<h2></h2>').html($(this).attr('name')).appendTo(creO);
           		$('<h3></h3>').html($(this).attr('author')).appendTo(creO);
           		switch(dir){
           			case 0:creO.css({
           				'top':'-'+$(this).height()+'px',
           				'left':0
           			});break;
           			case 1:creO.css({
           				'top':0,
           				'left':$(this).width()+'px'
           			});break;
           			case 2:creO.css({
           				'top':$(this).height()+'px',
           				'left':0
           			});break;
           			case 3:creO.css({
           				'top':0,
           				'left':'-'+$(this).width()+'px'
           			});break;
           		};
           		creO.animate({
           			top:0,
           			left:0
           		},200).children().animate({opacity:1},1200);
//           console.log(dirName[dir]);
          }else{
//           console.log(dirName[dir]);
				var creO=$('.create');
				switch(dir){
           			case 0:creO.animate({
           				'top':'-'+$(this).height()+'px',
           				'left':0
           			},200,function(){
           				creO.remove();
           			});break;
           			case 1:creO.animate({
           				'top':0,
           				'left':$(this).width()+'px'
           			},200,function(){
           				creO.remove();
           			});break;
           			case 2:creO.animate({
           				'top':$(this).height()+'px',
           				'left':0
           			},200,function(){
           				creO.remove();
           			});break;
           			case 3:creO.animate({
           				'top':0,
           				'left':'-'+$(this).width()+'px'
           			},200,function(){
           				creO.remove();
           			});break;
           		};
//         		setTimeout("$('.create').remove()",1000);
          }
      });
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
//		if(scrollTop>=850&&scrollTop<=1200)
//			$('.icon_scroll>div').addClass('aaa');
//		else 
//			$('.icon_scroll>div').removeClass('aaa');
//		if(scrollTop>=1300&&scrollTop<=1700)
//			$('.index_style ul').addClass('aaa');
//		else
//			$('.index_style ul').removeClass('aaa');
		console.log(parseInt(scrollTop));
	};
})