 var ie;
if(!+[1,]){ie="isIE"};

// IE placeholder
if(ie=="isIE"){
(function($) {
    $.fn.placeholder = function(options) {
        var opts = $.extend({}, $.fn.placeholder.defaults, options);
        var isIE = document.all ? true : false;
        return this.each(function() {
            var _this = this,
                placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
            if (isIE) {
                _this.setAttribute("value", placeholderValue);
                _this.onfocus = function() {
                    $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                };
                _this.onblur = function() {
                    $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                };
            }
        });
    };
})(jQuery);
    $('.chaxun input').placeholder();
}
 
var arr = ["北京五八信息技术有限公司", "广东居众装饰设计工程有限公司", "上海乐有家房产交易有限公司", "北京好孕妈妈教育咨询有限公司", "深圳健美信息科技有限公司", "武汉东宏达投资发展有限公司", "上海玉雪投资咨询有限公司", "北京世纪清鸿科技有限公司", "上海永轩房地产经纪有限公司", "南京合顺联科技有限公司", "北京一诺金达商贸有限责任公司", "广州鑫盛世信息咨询有限公司", "北京富力天成房地产经纪有限公司", "上海舜寅投资管理有限公司"];
var arr2 = ["正常", "正常", "地址异常", "税务异常", "地址异常", "正常", "工商异常", "税务异常", "正常", "地址异常", "正常", "地址异常", "工商异常", "税务异常"];
    
    
$(function(){
    $(".gszs-nr-6-div").hover(function(){
    	$(this).css("background","rgba(0,0,0,0.4)");
   		$(this).animate({"padding-top":"30px"},300);
		$(this).find(".gszs-nr-6-p2").stop(true,false).animate({"height":"2px"},300);
		$(this).find(".gszs-nr-6-p3").stop(true,false).animate({"height":"25px"},300);
           },function(){
        $(this).css("background","rgba(0,0,0,0)");
		$(this).animate({"padding-top":"50px"},300);
		$(this).find(".gszs-nr-6-p2").stop(true,false).animate({"height":"0px"},300);
		$(this).find(".gszs-nr-6-p3").stop(true,false).animate({"height":"0px"},300);
            });
        });
        
$(document).ready(function () {
        var a="";
	for(var i=0;i<arr.length;i++){
		var phone = arr[i];
   				var mphone =phone.substring(0,3);
   				var lphone = phone.substring(phone.length-8,phone.length);
   				$(".gundong-span1").html( mphone+"***"+lphone);
 				
		 a+="<li><span class='gundong-span'>查询：</span><span class='gundong-span1'>（"+mphone+"***"+lphone+"）</span><span class='gundong-span2'>"+arr2[i]+"</span></li>";
	};
	$(".list6").html(a);
   
   
    $(".gundong-span2").each(function(){
      	var yc=$(this).html();
   		var yc2=yc.substring(yc.length-2,yc.length);
   		if(yc2=="异常"){$(this).addClass("yc");}else{
   		 	$(this).addClass("zc");
   		 }
    });
    
    $(".gszs-nr-anniu div").click(function(){
    	var index = $(".gszs-nr-anniu div").index(this);
    	var element =$(".gszs-nr-nr").children("div").eq(index);
    	$(this).addClass("gszs-nr-anniu1");
    	$(this).siblings().removeClass("gszs-nr-anniu1");
    	$(element).css("display","block");
    	$(element).siblings().css("display","none");
    });
    
   
    	$(".gszs-nr-3-all li").each(function(){
    		var a=$(this).find("div").height();
    		var b=$(this).height();
    		$(this).css("padding-top",b/2-a/2);
    	})

});