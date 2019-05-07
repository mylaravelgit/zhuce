$(document).ready(function(){

	// 新闻切换
	$('.newstab span').each(function(i){
		$(this).on('click',function(){
			$(this).addClass('curr').siblings().removeClass('curr');
			//$('.newscontainer .tab-box ').fadeOut(500);
			$('.newscontainer .tab-box ').eq(i).fadeIn(200).siblings().fadeOut(200);
			$('.scenes-toggle').eq(i).show().siblings('.scenes-toggle').hide();
			$('.redtext').eq(i).show().siblings('.redtext').hide();
		})
	})
	

	//验证手机号及公司名字
	//$('.search-button').click(function(){

	//	var Name = $('.sr input[name="companyname"]').val();
	//	var youNum = $('.sr input[name = "younumber"]').val();
	//	if(youNum != '' && Name != '')
	//	{
	//		var yes = /^1(3[0-9]|5[012356789]|7[35678]|8[012356789])\d{8}$/.test(youNum);
	//		if(yes){
	//			alert('您查询的' + Name + '已提交，请稍后！')
	//		}
	//		else{
	//			alert('手机号码填写有误');
	//		}
	//	}
	//	else{
	//		alert('输入手机号');
	//	}

	//})

	// 查询滚动
	var ulHeight = parseInt($('.scoll ul').height());
	var topNum = ulHeight - parseInt($('.scoll').height());
	// console.log(topNum);
	var scrollTop = 0;
	function moveTop(){
		if(scrollTop < -topNum){
			scrollTop = 0;
		} else {
			scrollTop -= 1;
		}
		$('.scoll ul').css('top',scrollTop);
	}
	sTimer = setInterval(moveTop,30);
	$('.scoll').mouseover(function(){
		clearInterval(sTimer);
	});
	$('.scoll').mouseout(function(){
		sTimer = setInterval(moveTop,30);
	});


	// 号码表切换
	$('.numbertab span').each(function(i){
		$(this).on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.numberlist').eq(i).show().siblings('.numberlist').hide();
		})
	})

	// 号码倒计时
	function double(n){
		if(n<10)
		{
			return '0'+ n;
		}
		else
		{
			return ''+ n;
		}
	}

	var myArry = new Array();
	function run(){
		var myDate = new Date();
		myArry[0] = double(23 - String(myDate.getHours()));
		myArry[1] = double(60 - String(myDate.getMinutes()));
		myArry[2] = double(60 - String(myDate.getSeconds()));
		for(var i in myArry)
		{
			$('.countdown').find('span').each(function(i){
				$(this).text(myArry[i]);
			})
		}
	}
	run();
	var timer = setInterval(run,1000);

	
	var num=0;
	var counts=30;
	function lave(){
		num = Math.round(Math.random() * 2);
		debugger;
		counts = counts - num;
		$('.daly-remain').text(counts);
		num ++;
	}

	function time(){
		var myDate = new Date();
	//	debugger;
		if (num <= counts && myDate.getMinutes()==0 && myDate.getSeconds()==0)
		{
			lave();
		}

		if(num >= counts && myDate.getHours() == 0)
		{
			num=0;
			lave();
		}
		// console.log(myDate.getMinutes() + "&" + myDate.getSeconds());
	}
	$('.daly-all').text(counts);
	var timer = setInterval(time,1000);


})