var nums=0;
$(function(){
	active();
	bannerClick()
})
function shownext(e){
	var oBox=$('.banner .img')
	var aImgs=$('.banner .img img');
	var smallImg=$('.banner .right .after');
	smallImg.eq(nums).removeClass('active');
	if(e!==null||e!==undefined)
//		nums=e;
	if(nums==aImgs.length-1){
				nums=0;	
				oBox.css('transform',"translateX(0)");
				
				
		}else{
			nums++;
				oBox.css('transition','transform 1s');
				oBox.css('transform',"translateX("+-nums*30+"%)");
		}
		smallImg.eq(nums).addClass('active');
}
function active(){
	timmer=setInterval(shownext,3000);
}
function bannerClick(){
	$('.banner .right .small').bind('click',function(){
		clearInterval(timmer);
		var smallImg=$('.banner .right .after');
		var oBox=$('.banner .img')
		var a=$(this).attr('dataNum');
		smallImg.eq(nums).removeClass('active');
		nums=a;
//		alert(nums);
		oBox.css('transform',"translateX("+-nums*30+"%)");
		smallImg.eq(nums).addClass('active');
		setTimeout(active,2000)
	});
}
