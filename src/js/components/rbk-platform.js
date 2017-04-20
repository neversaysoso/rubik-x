//Rubik-X 运行环境
rbk.platform = {
	/**
	 * 判断客户端环境
	 */
	getPlatform: function() {
		var agent = navigator.userAgent.toLowerCase();
		var a = {
			platform: 'other',
			version: '1.0'
		};
	    if (agent.indexOf("rubikui") != -1) {     
	        a = {
				platform: 'native',
				version: '1.0'
			};
	    }
		return a;
	},
	//控件基础调用类
	callPlugin: function(pluginName, methodName, params, callBack) {
		if(rbk.isNotEmpty(RbJSBridge)){
			RbJSBridge.call(pluginName, methodName, params, callBack);
		}else{
			var dataSet = new Object();
			dataSet.plugin = pluginName;
			dataSet.method = methodName;
			if (rbk.isNotEmpty(params))
				dataSet.params = params;
			if (rbk.isNotEmpty(callBack)) {
				var a = rbk.guid_();
				window[a] = callBack;
				dataSet.callback = a;
			}
			var result = "rubik-x:" + encodeURI(JSON.stringify(dataSet), "utf-8");
			
			var _setResultIframe = doc.createElement('iframe');
	        _setResultIframe.id = '_RbJSBridge_SetResult';
	        _setResultIframe.style.display = 'none';
	        doc.documentElement.appendChild(_setResultIframe);
	        _setResultIframe.src = result;
	        
	        setTimeout(function(){
	        	$('#_RbJSBridge_SetResult').remove();
	        })
		}
	},
	/**
	 * 跨域的ajax支持
	 * options 参数
	 * options.url 请求的地址
	 * options.timeout 超时时间，默认50000
	 * options.type 请求类型，默认GET
	 * options.dataType 默认json，可选xml，html，script，text
	 * options.data 数据，Object或者string
	 * options.header http头，object
	 * options.success 成功回调
	 *    data：服务器返回的响应数据，类型可以是json对象、xml对象、字符串等
	 * options.error 失败回调
	 *    type：错误描述，类型是String，可取值除了'null'外，其它可能值："timeout", "error", "abort", "parsererror"
	 * options.callback 无论成功失败都会调用
	 */
	ajax: function(options) {
		var opt = {
			timeout: 50000,
			type: "GET",
			dataType: "json"
		};
		opt = rbk.applyJson({}, options, opt);
		if (rbk.isNotEmpty(obj.success) || rbk.isNotEmpty(obj.error)) {
			var callAll = options.callback;
			options.callback = function(d) {
				if (d.R == 200 && d.alert_status && rbk.isNotEmpty(obj.success)) {
					obj.success.call(obj.success, d.data);
				} else if (d.R != 200 && rbk.isNotEmpty(obj.error)) {
					obj.error.call(obj.error, d.msg);
				}
				if (rbk.isNotEmpty(callAll)) {
					callAll.call(callAll, d);
				}
			};
		}
		rbk.platform.callPlugin("AppBasicPlugins", "PluginNetworkArrayArgu", opt, callBack);
	},
	/**
	 * 等待展示框
	 */
	loadingDialogShow: function(callBack) {
		rbk.platform.callPlugin("ReactPlugins", "PluginLoadingDialogShowArrayArgu", null, callBack);
	},
	/**
	 * 等待框消失
	 */
	loadingDialogDismiss: function(callBack) {
		rbk.platform.callPlugin("ReactPlugins", "PluginLoadingDialogDismissArrayArgu", null, callBack);
	},
	/**
	 * 确认弹窗，参数事例：{"title":"标题","content":"内容","button":"按钮文字"}
	 * @param title 标题
	 * @param content 内容
	 * @param btn 按钮类型
	 */
	alertDialogConfirmShow: function(title, content, btn, callBack) {
		var params = {
			"title": title,
			"content": content,
			"button": btn
		};
		rbk.platform.callPlugin("ReactPlugins", "PluginAlertDialogConfirmShowArrayArgu", params, callBack);
	},
	/**
	 * 标题内容确定取消选择样式弹框
	 * @param title 标题
	 * @param content 内容
	 * @param left_button 左侧按钮文字
	 * @param right_button 右侧按钮文字
	 */
	alertDialogSelectBoxShow: function(obj) {
		var params = {
			"title": "提示",
			"content": "您确认？",
			"left_button": "确认",
			"right_button": "取消"
		};
		params = rbk.applyJson({}, obj, params);
		if (rbk.isNotEmpty(obj.callBackLeft) || rbk.isNotEmpty(obj.callBackRight)) {
			var callAll = params.callback;
			params.callback = function(d) {
				if (d.R == 200 && d.alert_status && rbk.isNotEmpty(obj.callBackLeft)) {
					obj.callBackLeft.call(obj.callBackLeft);
				} else if (d.R == 200 && rbk.isNotEmpty(obj.callBackRight)) {
					obj.callBackRight.call(obj.callBackRight);
				}
				if (rbk.isNotEmpty(callAll)) {
					callAll.call(callAll, d);
				}
			};
		}
		rbk.platform.callPlugin("ReactPlugins", "PluginAlertDialogSelectBoxShowArrayArgu", params, params.callback);
	},
	/**
	 * 扫码控件
	 */
	QRCodeScanning: function(callBack,obj) {
		if (rbk.platform.getPlatform().platform == "native") {
			rbk.platform.callPlugin("NativeFunctionPlugins", "PluginQRCodeScanningArrayArgu", null, callBack);
		}else if(rbk.platform.getPlatform().platform == "weixin"){
			if(!!obj){
				wx.config({
				    debug: false,
				    appId: obj.appId,
				    timestamp: obj.timestamp,
				    nonceStr: obj.nonceStr,
				    signature: obj.signature,
				    jsApiList: [
				      'scanQRCode'
				    ]
				});
				wx.ready(function(){
					if(!!callBack){
						wx.scanQRCode({
						    needResult: 1,
						    desc: 'scanQRCode desc',
						    success: callBack
						});
					}else{
						wx.scanQRCode();
					}
				})
			}
		}
	},
	
	/**
	 * 拍照组件
	 */

	accessCamera: function(callBack) {
		rbk.platform.callPlugin("NativeFunctionPlugins", "PluginAccessCameraArgu", null, callBack);
	},
	
	/**
	 * 相册组件
	 */

	accessGallery: function(callBack) {
		rbk.platform.callPlugin("NativeFunctionPlugins", "PluginAccessGalleryArgu", null, callBack);
	},
	
	/**
	 * 日期选择器组件
	 */

	dateSelector: function(callBack,d) {
		d = d ? d : '';
		rbk.platform.callPlugin("NativeFunctionPlugins", "PluginDateSelectorArrayArgu", {"date":d}, callBack);
	},

	/**
	 * 时间选择器组件
	 */

	timeSelector: function(callBack,t) {
		t = t ? t : '';
		rbk.platform.callPlugin("NativeFunctionPlugins", "PluginTimeSelectorArrayArgu", {"time":t}, callBack);
	},

	goBack: function(callBack) {
		rbk.platform.callPlugin("NativeFunctionPlugins", "PluginGoBackArgu", null, callBack);
	},
	goHome: function(callBack) {
		rbk.platform.callPlugin("NativeFunctionPlugins", "PluginGoHomeArgu", null, callBack);
	},
	closeWebView: function(callBack) {
		rbk.platform.callPlugin("NativeFunctionPlugins", "PluginCloseWebViewArrayArgu", null, callBack);
	},
	getClientType: function(callBack) {
		rbk.platform.callPlugin("NativeFunctionPlugins", "PluginGetClientTypeArrayArgu", null, callBack);
	},
	/**
	 * 获取用户openID
	 */

	getUserOpenID: function(callBack) {
		rbk.platform.callPlugin("AppBasicPlugins", "PluginGetUserOpenIDArrayArgu", null, callBack);
	},
	
	titleBar: function(params,callBack) {
		if(rbk.platform.getPlatform().platform == "native"){
			if(rbk.isNotEmpty(params.rightList)){
				for(var i = 0;i<params.rightList.length;i++){
					var a = rbk.guid_();
					window[a] = params.rightList[i].callback;
					params.rightList[i].callback = a;
				}
			}
			rbk.platform.callPlugin("AppBasicPlugins", "PluginTitleBarArgu", params, callBack);
		}
	},
	
	/**
	 * 微信支付
	 */

	WXPay: function(obj) {
		if(rbk.platform.getPlatform().platform == "native"){
			var params = {
				"prepayid":"",
				"noncestr":"",
				"appid":"",
				"package":"", 
				"partnerid":"", 
				"timestamp":"",
				"sign":""
			};
			params = rbk.applyJson({}, obj, params);
			params.callBack = function(d) {
				if (d.R == 200 && d.code == 0) {
					obj.callBackSuccess.call(obj.callBackSuccess);
				} else if (d.R == 200 && d.code == -1) {
					obj.callBackFail.call(obj.callBackFail);
				} else if(d.R == 200 && d.code == -2){
					obj.callBackCancel.call(obj.callBackCancel);
				} else if(d.R == 200 && d.code == 100){
					obj.NotInstalled.call(obj.NotInstalled);
				} else if(d.R == 200 && d.code == 101){
					obj.NotRegisted.call(obj.NotRegisted);
				}
			};
			rbk.platform.callPlugin("AppBasicPlugins", "PluginWXPayArrayArgu", params, params.callBack);
		}else if(rbk.platform.getPlatform().platform == "weixin"){
			WeixinJSBridge.invoke(
		       	'getBrandWCPayRequest', {
		           	"appId":obj.appId,
		           	"timeStamp":obj.timeStamp,  
		           	"nonceStr":obj.nonceStr,   
		           	"package":obj.package,
		           	"signType":obj.signType,
		           	"paySign":obj.paySign
		       	},
		       	function(res){
		           	if(res.err_msg == "get_brand_wcpay_request：ok" ) {
		           		obj.callBackSuccess.call(obj.callBackSuccess);
		           	}else if(res.err_msg == "get_brand_wcpay_request：fail"){
		           		obj.callBackFail.call(obj.callBackFail);
		           	}else if(res.err_msg == "get_brand_wcpay_request：cancel"){
		           		obj.callBackCancel.call(obj.callBackCancel);
		           	}
		       	}
		   	); 
		}
	},
	aliPay: function(obj){
		if(rbk.platform.getPlatform().platform == "native"){
			var params = {
				"sign":""
			};
			params = rbk.applyJson({}, obj, params);
			params.callBack = function(d) {
				if (d.R == 200 && d.code == 0) {
					obj.callBackSuccess.call(obj.callBackSuccess);
				} else if (d.R == 200 && d.code == -1) {
					obj.callBackFail.call(obj.callBackFail);
				} else if(d.R == 200 && d.code == 1){
					obj.callBackCancel.call(obj.callDoing);
				} 
			};
			rbk.platform.callPlugin("AppBasicPlugins", "PluginAliPayArrayArgu", params, params.callBack);
		}else{
			var params = {
				"_input_charset":"",//字符集
				"sign":"",//签名
				"body":"",//订单描述
				"it_b_pay":"", //超时时间
				"total_fee":"", //付款金额
				"subject":"",//订单名称
				"service":"",//请求api
				"notify_url":"",//通知页面路径
				"show_url":"",//商品展示地址
				"seller_id":"",//收款支付账号
				"partner":"",//合作者身份ID
				"out_trade_no":"",//商户订单号
				"payment_type":"",//支付类型，1为支付
				"return_url":"",//返回网页路径
				"sign_type":""//签名类型
			};
			params = rbk.applyJson({}, obj, params);
			var newform = '<form id="alipay" name="alipay" action="https://mapi.alipay.com/gateway.do?_input_charset=UTF-8" method="get">';
			$.each(params, function (n, value) {
				if(rbk.isNotEmpty(value)){
					newform+='<input type="hidden" id="'+n+'" name="'+n+'" value="'+value+'"/>';
				}
	       	});
			newform+='</form>';
			$('body').append(newform);
			document.forms['alipay'].submit();
		}
	}
};
//系统方法重写
window.alert = function(m,callBack) {
	if (rbk.platform.getPlatform().platform == "native") {
		if(rbk.isEmpty(callBack)){
			rbk.platform.alertDialogConfirmShow("提示", m, "确认");
		}else{
			var params = {
				"title": "提示",
				"content": m,
				"button": "确认"
			};
			rbk.platform.callPlugin("ReactPlugins", "PluginAlertDialogConfirmShowArrayArgu", params, callBack);
		}
	} else {
		var isjson = typeof(m) == "object" && Object.prototype.toString.call(m).toLowerCase() == "[object object]" && !m.length; 
		if(isjson){
			var m = JSON.stringify(m);
		}
		if(rbk.isEmpty(callBack)){
			rbklayer.open({
				title:'提示',
			    btn: ['确定'],
			    shadeClose: false,
			    content: m
			});
		}else{
			rbklayer.open({
				title:'提示',
			    btn: ['确定'],
			    content: m,
			    shadeClose: false,
			    yes:function(){
			    	rbklayer.closeAll();
			    	callBack();
			    }
			});
		}
	}
};
//微信bug 无法使用alert
window.myAlert = function(m,callBack) {
	if (rbk.platform.getPlatform().platform == "native") {
		if(rbk.isEmpty(callBack)){
			rbk.platform.alertDialogConfirmShow("提示", m, "确认");
		}else{
			var params = {
				"title": "提示",
				"content": m,
				"button": "确认"
			};
			rbk.platform.callPlugin("ReactPlugins", "PluginAlertDialogConfirmShowArrayArgu", params, callBack);
		}
	} else {
		var isjson = typeof(m) == "object" && Object.prototype.toString.call(m).toLowerCase() == "[object object]" && !m.length; 
		if(isjson){
			var m = JSON.stringify(m);
		}
		if(rbk.isEmpty(callBack)){
			rbklayer.open({
				title:'提示',
			    btn: ['确定'],
			    shadeClose: false,
			    content: m
			});
		}else{
			rbklayer.open({
				title:'提示',
			    btn: ['确定'],
			    content: m,
			    shadeClose: false,
			    yes:function(){
			    	rbklayer.closeAll();
			    	callBack();
			    }
			});
		}
	}
};
window.confirm = function(m,callBack){
	if (rbk.platform.getPlatform().platform == "native") {
		rbk.platform.alertDialogSelectBoxShow({
			"title": "提示",
			"content": m,
			"left_button":"确认",
			"right_button":"取消",
			callBackLeft: callBack
		});
	} else {
		var isjson = typeof(m) == "object" && Object.prototype.toString.call(m).toLowerCase() == "[object object]" && !m.length; 
		if(isjson){
			var m = JSON.stringify(m);
		}
		if($.isFunction(callBack)){
			rbklayer.open({
				title:'提示',
			    btn: ['确定','取消'],
			    content: m,
				shadeClose: false,
			    yes:function(){
			    	rbklayer.closeAll();
			    	callBack();
			    }
			});
		}
		
	}
};
window.load=function(opt){
	if (rbk.platform.getPlatform().platform == "native") {
		rbk.platform.loadingDialogShow();
	} else {
		var obj = {
			type: 2,
			shadeClose: false
		}
		if(!!opt){
			for(var i in opt){
				obj[i] = opt[i];
			}
		}
		rbklayer.open(obj);
	}
};
window.loadClose=function(){
	if (rbk.platform.getPlatform().platform == "native") {
		rbk.platform.loadingDialogDismiss();
	} else {
		rbklayer.closeAll();
	}
};
