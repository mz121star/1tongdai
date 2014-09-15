$(function(){
	isText_num();
	var imgs = $(".project_info .common_html img");
	var imageURL = $("#imageURL").val();
	for(var i=0; i<imgs.length; i++)
	{
		var img = $(imgs[i]);
		if(img.attr("src").indexOf("/") == 0)
		{
			img.attr("src", "http://www.ppmoney.com" + img.attr("src"));
		}
	}
	
	//intro
	var intro_p = $("#intro p");
	$(intro_p[1]).css('display','block');
	$(intro_p[1]).after("<a href='#xyza' id='intro_p_a1' style='font-size:12px;float:right;color:#aaaaaa;'><img src="+imageURL+" style='width:17px;height:17px;'/>&nbsp;&nbsp;</a><br>");
	$(intro_p[1]).click(function(){
		for(var i = 2 ; i < intro_p.length ; i++){
			var intro_p_css = $(intro_p[i]).css('display');
			if(intro_p_css=="block"){
				$(intro_p[i]).slideUp(1000);
				location.href = "#xyza";
			}else{
				$(intro_p[i]).slideDown(1000);
			}
		}
	});
	$("#intro").bind("click",function(e){ 
		var target = $(e.target); 
			if(target.closest("#intro_p_a1").length == 0&&target.closest(intro_p[1]).length == 0){ 
				for(var i = 2 ; i < intro_p.length ; i++){
					$(intro_p[i]).slideUp(1000);
				}
			} 
	});
	
	//zcbsta
	var zcbsta_p = $("#zcbsta p");
	$(zcbsta_p[0]).css('display','block');
	$(zcbsta_p[0]).after("<a href='#xyz' id='zcbsta_p_a' style='font-size:12px;float:right;color:#aaaaaa;'><img src="+imageURL+" style='width:17px;height:17px;'/>&nbsp;&nbsp;</a><br>");
	$(zcbsta_p[0]).click(function(){
			var prjImg_div = $("#prjImg div");
			for(var i = 0 ; i < prjImg_div.length ; i++){
				var prjImg_div_css = $(prjImg_div[i]).css('display');
				if(prjImg_div_css=="block"){
					$(prjImg_div[i]).slideUp(1000);
				}else{
					$(prjImg_div[i]).slideDown(1000);
				}
			}
	});
	$("#prjImg").click(function(){
		var prjImg_div = $("#prjImg div");
		for(var i = 0 ; i < prjImg_div.length ; i++){
			$(prjImg_div[i]).slideUp(1000);
		}
	});
	$("#zcbsta").bind("click",function(e){ 
		var target = $(e.target); 
			if(target.closest("#zcbsta_p_a").length == 0&&target.closest(zcbsta_p[0]).length == 0){ 
				var prjImg_div = $("#prjImg div");
				for(var i = 0 ; i < prjImg_div.length ; i++){
					$(prjImg_div[i]).slideUp(1000);
				}
			} 
	});
	
	
	//dbsta
	var dbsta_p = $("#dbsta p");
	$(dbsta_p[0]).css('display','block');
	$(dbsta_p[1]).css('display','block');
	$(dbsta_p[1]).after("<a href='#xyz' id='dbs_p_a1' style='font-size:12px;float:right;color:#aaaaaa;'><img src="+imageURL+" style='width:17px;height:17px;'/>&nbsp;&nbsp;</a><br>");
	$("#dbsta").click(function(){
		for(var i = 2 ; i < dbsta_p.length ; i++){
			var dbsta_p_css = $(dbsta_p[i]).css('display');
			if(dbsta_p_css=="block"){
				$(dbsta_p[i]).slideUp(1000);
			}else{
				$(dbsta_p[i]).slideDown(1000);
			}
		}
	});
	$("#dbsta").bind("click",function(e){ 
		var target = $(e.target); 
			if(target.closest("#dbs_p_a1").length == 0&&target.closest("#dbsta").length == 0){ 
				for(var i = 2 ; i < dbsta_p.length ; i++){
					$(dbsta_p[i]).slideUp(1000);
				}
			} 
	});
	
	
	//measure
	var measure_p = $("#measure p");
	$(measure_p[0]).css('display','block');
	$(measure_p[0]).after("<a href='#xyz' id='measure_p_a1' style='font-size:12px;float:right;color:#aaaaaa;'><img src="+imageURL+" style='width:17px;height:17px;'/>&nbsp;&nbsp;</a><br>");
	$("#measure").click(function(){
		for(var i = 1 ; i < measure_p.length ; i++){
			var measure_p_css = $(measure_p[i]).css('display');
			if(measure_p_css=="block"){
				$(measure_p[i]).slideUp(1000);
			}else{
				$(measure_p[i]).slideDown(1000);
			}
		}
	});
	$("#measure").bind("click",function(e){ 
		var target = $(e.target); 
			if(target.closest("#measure_p_a1").length == 0&&target.closest("#measure").length == 0){ 
				for(var i = 1 ; i < measure_p.length ; i++){
					$(measure_p[i]).slideUp(1000);
				}
			} 
	});
	
	
	//direct
	var direct_p = $("#direct p");
	$(direct_p[0]).before("<br><a href='#xyz' id='direct_p_a1' style='font-size:12px;float:right;color:#aaaaaa;'><img src="+imageURL+" style='width:17px;height:17px;'/>&nbsp;&nbsp;</a><br>");
	$("#direct").click(function(){
		for(var i = 0 ; i < direct_p.length ; i++){
			var direct_p_css = $(direct_p[i]).css('display');
			if(direct_p_css=="block"){
				$(direct_p[i]).slideUp(1000);
			}else{
				$(direct_p[i]).slideDown(1000);
			}
		}
	});
	$("#direct").bind("click",function(e){ 
		var target = $(e.target); 
			if(target.closest("#direct_p_a1").length == 0&&target.closest("#direct").length == 0){ 
				for(var i = 0 ; i < direct_p.length ; i++){
					$(direct_p[i]).slideUp(1000);
				}
			} 
	});
	
	
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest("#select_num").length == 0 && target.closest("#option").length == 0){ 
			$("#options").fadeOut();
			$("#option").fadeOut();
		} 
	});
	
	var RemainAmount = $("#RemainAmount").val();
	if(Number(RemainAmount)>0){
		$("#submit_a").css("display","block");
		$("#submit_b").css("display","none");
	}else{
		$("#submit_b").css("display","block");
		$("#submit_a").css("display","none");
	}
});

function tz_submit(){
	var RemainAmount = $("#RemainAmount").val();
	var isLogin = $("#isLogin").val();
	
	var couponId = $("#couponId").val();
	var text_num = $("#text_num").val();
	var projectId = $("#projectId").val();
	
	var loginURL = $("#loginURL").val();
	
	var maxAmount = $("#maxAmount").val();
	var applyUrl = $("#applyUrl").val();
	var applySuccessUrl = $("#applySuccessUrl").val();
	
	var isTbxy = $("#isTbxy").val();
	var isYhtl = $("#isYhtl").val();
	
	var projectApplyUrl = $("#projectApplyUrl").val();
	
	var projectId = $("#projectId").val();
	
	if(Number(RemainAmount)>0){
		if(isLogin=="true"){ 
			if(isTbxy=="true"&&isYhtl=="true"){
				if(Number(maxAmount)<100){
					alert("您的余额不足，请先充值！");
				}else{
					location.href = projectApplyUrl;
				}
			}else{
				alert("抱歉，请您同意《安稳盈投标协议》与《用户个人信息保护条例》再开始投资。");
			}
			
		}else{
				location.href = loginURL;
		}
	}else{
		alert("您投资的项目已满额！");
	}
	
}

function isText_num(){
	var thi = 10000;
	
	var Rate = Number($("#Rate").val()/100);
	var times = Number($("#showTime").val());
	
	
	var x = ((thi*Rate)/365)*times;
	x=x.toString();
	x=x.substring(0,x.indexOf(".")+3);
	$("#ygsy_text").text(x);
}

function tbxy_text(){
	location.href = "http://appdownload.ppmoney.com/article/awy_acticle.htm";
}

function yhtl_text(){
	location.href = "http://appdownload.ppmoney.com/article/user_article.htm";
}

function sg_div(){
	if($("#sg_table_div").css("display")=="block"){
		$("#sg_table_div").slideUp();
	}else{
		$("#sg_table_div").slideDown();
	}
}
