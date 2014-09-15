$(function(){
	var form = $(".member_register form");
	var mobile_input = $("input[name='mobile']", form);
	var password_input = $("input[name='password']", form);
	var invitor_input = $("input[name='invitor']", form);
	var verify_code_input = $("input[name='verifyCode']", form);
	var verify_code_countdown = 0;
	var verify_code_btns = $(".verify_code_btns", form);
	var verify_code_message = $(".verify_code_message", form);
	var agree_input = $("input[name='agree']", form);
	var button = $("button", form);
	setInterval(function(){
		if(verify_code_countdown > 0)
		{
			verify_code_btns.hide();
			verify_code_message.show();
			$("td", verify_code_message).text(verify_code_countdown + "秒后可以重新获取");
			verify_code_countdown --;
		}
		else
		{
			verify_code_btns.show();
			verify_code_message.hide();
		}
	}, 1000);
	$(".sms", form).click(function(){
		if(mobile_input.val() == "")
		{
			alert("请输入手机号码");
			mobile_input.focus();
			return false;
		}
		if(!$.isMobile(mobile_input.val()))
		{
			alert("请输入正确的手机号码");
			mobile_input.focus();
			return false;
		}
		var smsUrl = $("#smsUrl").val();
		$.ajax({
			url: smsUrl,
			data: {mobile: mobile_input.val()},
			type: "POST"
		}).done(function(data) {
			var result = $.parseJSON(data);
			if(result.success == 1)
			{
				$("#serverVerifyCode").val(result.VerifyCode);
				verify_code_countdown = 120;
			}
			else
			{
				alert("发送不成功，请稍后重试");
			}
		});
	});
	$(".tel", form).click(function(){
		if(mobile_input.val() == "")
		{
			alert("请输入手机号码");
			mobile_input.focus();
			return false;
		}
		if(!$.isMobile(mobile_input.val()))
		{
			alert("请输入正确的手机号码");
			mobile_input.focus();
			return false;
		}
		$.ajax({
			url: smsUrl,
			data: {mobile: mobile_input.val()},
			type: "POST"
		}).done(function(data) {
			var result = $.parseJSON(data);
			if(result.success == 1)
			{
				verify_code_countdown = 120;
			}
			else
			{
				alert("发送不成功，请稍后重试");
			}
		});
	});
	$("div", password_input.parent()).click(function(){
		var btn = $(this);
		var input = $("input", btn.parent());
		if(btn.text() == "显示")
		{
			btn.text("隐藏");
			input.attr("type", "text");
		}
		else
		{
			btn.text("显示");
			input.attr("type", "password");
		}
	});
	form.submit(function(){
		try
		{
			if(mobile_input.val() == "")
			{
				alert("请输入手机号码");
				mobile_input.focus();
				return false;
			}
			if(!$.isMobile(mobile_input.val()))
			{
				alert("请输入正确的手机号码");
				mobile_input.focus();
				return false;
			}
			if(password_input.val() == "")
			{
				alert("请输入密码");
				password_input.focus();
				return false;
			}
			if(password_input.val().length < 8 && password_input.val().length < 20)
			{
				alert("密码的长度不能小于8位，且不大于20位");
				password_input.focus();
				return false;
			}
			if(invitor_input.val().length > 0 && !$.isMobile(invitor_input.val()))
			{
				alert("请输入正确的推荐人手机号码");
				invitor_input.focus();
				return false;
			}
			if(verify_code_input.val() == "")
			{
				alert("请输入验证码");
				verify_code_input.focus();
				return false;
			}
			if(!agree_input.is(":checked"))
			{
				alert("请阅读《PPmoney平台服务条款》，并同意相关条款");
				agree_input.focus();
				return false;
			}
			if(button.text() == "处理中")
			{
				return false;
			}
			button.text("处理中");
			var memberRegisterSuccess = $("#memberRegisterSuccess").val();
			var memberRegisterCodeFail = $("#memberRegisterCodeFail").val();
			var memberRegisterFail = $("#memberRegisterFail").val();
			var memberRegisterFail2 = $("#memberRegisterFail2").val();
			form.ajaxSubmit({
				success: function(data){
					try
					{
						data = $.parseJSON(data);
						if(data.success == 1)
						{
							var mobiles = $("#mobile").val();
							var text_mm = $("#text_mm").val();
							var datass = {'mobile':mobiles,'password':text_mm};
							var urlss = $("#loginUrl").val();
							alert("urlss.urlss:"+urlss);
							$.post(urlss,datass,function(result){
								if(result!="null"){
									var jsons = $.parseJSON(result);
									if(jsons.Result.Status == 1)
									{
										var memberinfoUrl = $("#memberinfoUrl").val();
										location.href = memberinfoUrl;
									}
									else
									{
										alert(jsons.Message);
									}
								}else{
									alert("网络不给力，登陆失败了！");
								}
							});
							//location.href = memberRegisterSuccess;
						}
						else if(data.success == 2)
						{
							alert("data.success:"+data.success);
							location.href = memberRegisterCodeFail;
						}else if(data.success == 3){
							alert("data.success:"+data.success);
							location.href = memberRegisterFail;
						}else{
							alert("data.success:"+data.success);
							location.href = memberRegisterFail2;
						}
					}
					catch(e)
					{
						location.href = memberRegisterFail;
					}
					$("button", form).text("确认");
				}
			});
		}
		catch(e)
		{
			alert(e.message);
		}
		return false;
	});
});

function ckxq(){
	var myDate = new Date();
	var dates = myDate.getMilliseconds();
	location.href = "http://appdownload.ppmoney.com/activity/1.html?datas="+dates;
}