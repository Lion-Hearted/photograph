var signNum;
var telType="手机号码";
var telType2="短信";
var passwordType=[/[a-z]+/,/[A-Z]+/,/[0-9]+/];
var countNum;
var interval;
$(function(){
	$('#sign_type').change(signType);
	tel();
})
function signType(){
		signNum=$('#sign_type').val();
		if(signNum==1){
			telType="邮箱地址";
			telType2="邮箱"
			$('.input_text1').attr({
				'placeholder':'请输入邮箱地址',
				'type':'email'
				});
			$('#btn').val('获取邮箱验证码')
		}
		else{
			telType="手机号码";
			telType2="短信";
			$('.input_text1').attr('placeholder','请输入11位手机号码');
			$('#btn').val('获取短信验证码');
		}
}
function tel(){
	var passWord
	$('.tel').blur(function(){
		$('<span></span>').addClass('createSpan').appendTo($(this).parent());
	});
	$('.input_text1 ').blur(function(){
		if(/^1[0-9]{10}$/.test($(this).val())||/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(this).val())){
			$(this).parent().children('.createSpan').css({
				'background':'url(images/对.png) no-repeat 0 3px',
				'color':'green',
				'right':'-95px'
				}).addClass('createSpan').html(telType+'正确');
		}
		else {
			$(this).parent().children('.createSpan').css({
				'background':'url(images/错.png) no-repeat 0 3px'
				}).addClass('createSpan').html('请输入正确的'+telType);
			$(this).css({
				'border':'1px solid red'	
			});
		}
	});
	$('.input_text2').blur(function(){
		if(!/^\d[0-9]{4}\d$/.test($(this).val())){
			$(this).parent().children('.createSpan').css({
				'background':'url(images/错.png) no-repeat 0 3px'
			}).html('验证码错误');
			$(this).css({
				'border':'1px solid red'
			});
		}
		else{
			$(this).parent().children('.createSpan').css({
				'background':'url(images/对.png) no-repeat 0 3px',
				'color':'green',
				'right':'-95px'
			}).html('验证码正确');
		}
			
	});
	$('.userName').blur(function(){
		if($(this).val()==null||$(this).val()==''){
			$(this).parent().children('.createSpan').css({
				'background':'url(images/错.png) no-repeat 0 3px'
			}).html('用户名不能为空');
			$(this).css({
				'border':'1px solid red'	
			});
		}
		else if(/^\d/.test($(this).val())){
			$(this).parent().children('.createSpan').css({
				'background':'url(images/错.png) no-repeat 0 3px'
			}).html('用户名不能数字开头');
			$(this).css({
				'border':'1px solid red'	
			});
		}
		else if(/\s/.test($(this).val())){
			$(this).parent().children('.createSpan').css({
				'background':'url(images/错.png) no-repeat 0 3px'
			}).html('用户名不能包含空格');
			$(this).css({
				'border':'1px solid red'	
			});
		}
		else{
			$(this).parent().children('.createSpan').css({
				'background':'url(images/对.png) no-repeat 0 3px',
				'color':'green',
				'right':'-95px'
			}).html('用户名正确');
		}
	});
	$('.password').blur(function(){
		$('.form .password_strong:nth-child(1)').css('right','-50px');
		var thisVal=0;
		if(/\s/.test($(this).val())||!/^.{6,16}$/.test($(this).val())){
			$(this).parent().children('.createSpan').css({
				'background':'url(images/错.png) no-repeat 0 13px',
				'width':'170px',
				'height':'50px',
				'top':'5px'
			}).html('请设置6-16位字符密码且不包含空格');
			$(this).css({
				'border':'1px solid red'	
			});
		}
		else{
			$("<span class='one'></span><span class='two'></span><span class='three'></span>").addClass('password_strong').appendTo($(this).parent());
			if(/^[a-z]+$/.test($(this).val())||/^[A-Z]+$/.test($(this).val())||/^[0-9]+$/.test($(this).val())){
				$('.password_strong').eq(0).css('background-position','left -214px').html('弱');
			}
			else {
				for(var i=0;i<passwordType.length;i++){
					if(passwordType[i].test($(this).val()))
						thisVal++;
				}
				switch(thisVal){
					case 2:
						$('.password_strong').eq(0).css('background-position','left -67px');
						$('.password_strong').eq(1).css('background-position','left -67px').html('中');
					break;
					case 3:
						$('.password_strong').eq(0).css('background-position','left -135px');
						$('.password_strong').eq(1).css('background-position','left -135px');
						$('.password_strong').eq(2).css('background-position','left -135px').html('强');
					break;
				}
			}
			passWord=$(this).val();
//			alert(passWord);
		}
	});
	$('.password_confirm').blur(function(){
		if(passWord==$(this).val()){
			$(this).parent().children('.createSpan').css({
				'background':'url(images/对.png) no-repeat 0 3px',
				'color':'green',
				'right':'-95px'
			}).html('密码一致');
		}
		else{
			$(this).parent().children('.createSpan').css({
				'background':'url(images/错.png) no-repeat 0 3px'
			}).html('密码不一致');
			$(this).css({
				'border':'1px solid red'	
			});
		}
		
	});
	$('#btn').bind('click',function(){
		if($(this).val()!='获取'+telType2+'验证码'){
			return false;
		}
		countNum=60;
		$(this).css({
			'background':'#269ABC',
			'cursor':'default',
			'outline':'none'
		});
		interval=setInterval('countDown();',1000);
	});
	$('.tel').focus(function(){
		$(this).css('border',"1px solid #aaa");
		$(this).parent().children('.createSpan').remove();
		$(this).parent().children('.password_strong').remove();
	})
}
function countDown(){
	countNum--;
	$('#btn').val(countNum+'s后再获取');
	if(countNum<=0){
		clearInterval(interval);
		$('#btn').css({
			'background':'',
			'cursor':'pointer'
		});
		$('#btn').val('获取'+telType2+'验证码');
	}
			
}
