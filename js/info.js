
(function(){
	document.addEventListener('DOMContentLoaded', function(){
		
		$(".banner").unslider({
			fluid: true,
			dots: true
		});
		$(".banner li img").load(function(){
			$(".banner").height($(this).height());
		});
		
		var countdownInterval = setInterval(countdownRefresh, 1000);
//		$(".index > dl > dd .invest").each(function(i, n){
//			$(this).click(function(){
//				return $(this).hasClass("invest_available");
//			});
//		});
		countdownRefresh();
		function countdownRefresh(){
			$(".index > dl > dd").each(function(i, n){
				refreshProjectItem(n);
			});
		}

		function refreshProjectItem(n){
			var n1 = n;
			var n=$(n);
			
			var invest = n.find(".invest");
			var process = n.find(".process");
			var tips = n.find("h4");
			var now =new Date();
			var beginDate = new Date(n.data("beginDate"));
			var endDate = new Date(n.data("endDate"));
			var totalAmount = parseFloat(n.data("totalAmount"));
			var remainAmount = parseFloat(n.data("remainAmount"));
			var amountPercent = Math.floor(((totalAmount - remainAmount) / totalAmount) * 100);
			invest.removeClass("invest_available");
			invest.removeClass("invest_unavailable");
			$("div", process).stop();
			$("div", process).animate({width: amountPercent + "%"}, 1000, "easeOutQuart");
			
			tips.text("");
			tips.append("已完成<spen style='color:#f85757;'>"+amountPercent+"%</spen>");
			if(amountPercent >= 100){
				n.find("a").text("已满额");
			}else{
				n.find("a").text("开始赚钱");
			}
		}
	})
}).call(this);




function dh(){
	var wan = Number($("#wan").val());
	var yuan = Number($("#yuan").val());
	var wan_show = Number($("#wan_show").text());
	var yuan_show = Number($("#yuan_show").text());
	if(wan>yuan){
		if(yuan_show<yuan){
			yuan_show = yuan_show+11;
			$("#yuan_show").text(yuan_show);
			$("#wan_show").text(yuan_show);
			setTimeout("dh()",1);

		}else{
			$("#wan_show").text(wan);
			$("#yuan_show").text(yuan);
		}
	}else{
		if(wan_show<wan){
			wan_show = wan_show+11;
			$("#yuan_show").text(wan_show);
			$("#wan_show").text(wan_show);
			setTimeout("dh()",1);

		}else{
			$("#wan_show").text(wan);
			$("#yuan_show").text(yuan);
		}
	}
	
}

