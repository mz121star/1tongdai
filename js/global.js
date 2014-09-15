$.fixImageSize = function(img, type)
{
	var showeds = new Array();
	var parent = img;
	do
	{
		if(parent.css("display") == "none")
		{
			parent.show();
			showeds.push(parent);
		}
		parent = parent.parent();
	}
	while(parent.parent().length != 0)
	
	var p = 1;
	if(type == 0)
	{
		if(img.parent().width() < img.width() || img.parent().height() < img.height())
		{
			p = Math.min(img.parent().width() / img.width(), img.parent().height() / img.height());
		}
	}
	else if(type == 1)
	{
		p = Math.max(img.parent().width() / img.width(), img.parent().height() / img.height());
	}
	else if(type == 2)
	{
		p = Math.min(img.parent().width() / img.width(), img.parent().height() / img.height());
	}
	var width = img.width();
	var height = img.height();
	img.width(width * p);
	img.height(height * p);
	img.css("marginTop", -(img.height() - img.parent().height()) / 2);
	img.css("marginLeft", -(img.width() - img.parent().width()) / 2);
	
	for(var i=0; i<showeds.length; i++)
	{
		showeds[i].hide();
	}
}

$.isEmail = function(value)
{
	return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
}

$.isMobile = function(value)
{
	return /^[1][3,5,8][0-9]{9}$/.test(value);
}

$.topMessage = function(content, link, autoClose)
{
//	var page_title = $(".page_title");
	var page_title = $("");
	var span = $("<span>");
	span.append(content);
	var close = $("<a>").addClass("close").appendTo(span);
	close.click(function(){
		span.css({zIndex: -1});
		span.stop();
		span.animate({marginTop: -span.height()}, 1000, "easeOutQuart", function(){
			span.remove();
		});
		$.fixPageMain();
	});
	span.prependTo(page_title);
	span.css({marginTop: -span.height() + "px"});
	span.stop();
	span.animate({marginTop: 0}, 1000, "easeOutQuart");
	$.fixPageMain();
}

$.fixPageMain = function()
{
	var page_title = $(".page_title");
	var page_main = $(".page_main");
	if(!page_main.data("originalPaddingTop"))
	{
		page_main.data("originalPaddingTop", parseInt(page_main.css("paddingTop")))
	}
	var originalPaddingTop = page_main.data("originalPaddingTop");
	var spans = $("span", page_title);
	var paddingTop = 0;
	for(var i=0; i<spans.length; i++)
	{
		if($(spans[i]).css("zIndex") != -1)
		{
			paddingTop += $(spans[i]).height();
		}
	}
	paddingTop += originalPaddingTop;
	page_main.stop();
	page_main.animate({paddingTop: paddingTop}, 1000, "easeOutQuart");
}

$(function(){
	$(".common_html").html($(".common_html").text());
	$.topMessage("<a href=\"ppmoney.htm\"><img src=\"images/Iphone.png\" height=\"20\"> 下载PP理财安卓客户端</a>");
});