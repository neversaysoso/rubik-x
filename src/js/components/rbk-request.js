/**
 * 依赖rbk-base.js, rbk-platform.js
 * 暂时只有jsonp能支持get的跨域请求
 */
rbk.request = {
	//默认参数
	defOptions: {
		/*默认超时时间  */
		timeout: 50000,
		type: "POST",
		dataType: "jsonp"
	},
	/*
	 * name 请求映射名称
	 * url  请求地址
	 *
	 * options 格外参数
	 * options.timeout 请求超时时间，默认50000
	 * options.header  http头
	 * options.type    请求类型，默认使用 "POST"
	 * options.dataName 请求参数名，默认使用requestData
	 * options.dataType 请求类型，默认jsonp
	 * 
	 * commonData 默认请求参数
	 */
	reg: function(name, url, options, commonData) {
		if (!rbk.isEmpty(rbk.request[name])) {
			throw rbk.format('请求映射名{0}已经存在', name);
		}
		/**
		 * obj 请求相关参数
		 * obj.data 请求数据
		 * obj.beforeSend 发送前
		 * obj.success  请求成功后回调
		 * obj.error    请求出错回调
		 */
		rbk.request[name] = function(obj) {
			rbk.platform.loadingDialogShow();
			var opt = {};
			rbk.applyJson(opt, options, rbk.request.defOptions);
			var trueData = rbk.applyJson(commonData, obj);
			$.ajax(url, {
				data: obj.data,
				dataType: opt.dataType,
				timeout: opt.timeout,
				type: opt.type,
				beforeSend: function(xhr) {
					if (rbk.isNotEmpty(opt.header)) {
						for (var a in opt.header) {
							xhr.setRequestHeader(a, opt.header[a]);
						}
					}
				},
				success: function(data) {
					rbk.platform.loadingDialogDismiss();
					if($.isFunction(obj.success))
						obj.success.call(obj, data);
				},
				error: function(xhr, type, errorThrown) {
					rbk.platform.loadingDialogDismiss();
					if($.isFunction(obj.error))
						obj.error.call(obj, xhr, type, errorThrown);
				}
			});
		};
	}
};