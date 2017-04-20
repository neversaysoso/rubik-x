//表单
rbk.form = function(){};

//继承cmp
rbk.form.prototype = new rbk.cmp();

//实现formCmp接口
rbk.implInterface(rbk.form,iFormCmp);

rbk.form.prototype.defCls = 'rbk-input-group rbk-table-view rbk-grid-9'; 

rbk.form.prototype.defHtmlTag = '<div class="rbk-form"></div>';

rbk.form.prototype.roles = {
	card:'rbk-input-group rbk-table-view rbk-grid-9 rbk-card'
};

//设置布局
rbk.form.prototype.doLayout = function (jsonArr) {
    var me = this;
    $.each(jsonArr, function (index, e) {
        if (rbk.isEmpty(e.id)) return;
        var cmp = me.down('#' + e.id);
        var container = me;
        if (cmp == null) {
	        cmp = rbk.createCmpObj(e.ctype);
	        if(!rbk.isEmpty(e.ctnCmpID)){
	        	container = me.down('#' + e.ctnCmpID);
	        }
        }else{
        	container = cmp.up();
        }
        if(!rbk.hasInterface(cmp,iFormCmp)) return;
        cmp.doLayout(container,e);
        
        if(typeof e.disabled != 'undefined'){
        	if(cmp.dom.getElementsByTagName("input").length!=0){
        		var input = cmp.dom.getElementsByTagName("input")[0];
        		input.setAttribute("disabled","disabled");
        	}
        }
        if(typeof e.timetext != 'undefined'){
        	if(cmp.dom.getElementsByTagName("input").length!=0){
        		var input = cmp.dom.getElementsByTagName("input")[0];
        		input.setAttribute("readonly","readonly");
        		$(input).addClass('rbk-timetext');
        		if (rbk.platform.getPlatform().platform == "native") {
        			$(input).bind('tap',function(d){
	        			rbk.platform.dateSelector(function(me){
	        				$(input).val(me.date);
						},$(input).val());
	        		})
        		}else{
        			var currYear = (new Date()).getFullYear();	
					var opt={};
					opt.date = {preset : 'date'};
					opt.datetime = {preset : 'datetime'};
					opt.time = {preset : 'time'};
					opt.default = {
						theme: 'android-ics light', //皮肤样式
				        display: 'modal', //显示方式 
				        mode: 'scroller', //日期选择模式
						dateFormat: 'yyyy-mm-dd',
						lang: 'zh',
						showNow: true,
						nowText: "今天",
						endYear: currYear+10
					};
					var date = $.extend(opt['date'], opt['default'])
				  	$(input).mobiscroll(date);
        		}
        	}
        }
        if(typeof e.clocktext != 'undefined'){
        	if(cmp.dom.getElementsByTagName("input").length!=0){
        		var input = cmp.dom.getElementsByTagName("input")[0];
        		input.setAttribute("readonly","readonly");
        		$(input).addClass('rbk-timetext');
        		if (rbk.platform.getPlatform().platform == "native") {
        			$(input).bind('tap',function(d){
	        			rbk.platform.timeSelector(function(me){
	        				$(input).val(me.time);
						},$(input).val());
	        		})
        		}else{
        			var currYear = (new Date()).getFullYear();	
					var opt={};
					opt.date = {preset : 'date'};
					opt.datetime = {preset : 'datetime'};
					opt.time = {preset : 'time'};
					opt.default = {
						theme: 'android-ics light', //皮肤样式
				        display: 'modal', //显示方式 
				        mode: 'scroller', //日期选择模式
						dateFormat: 'yyyy-mm-dd',
						lang: 'zh',
						showNow: true,
						nowText: "现在",
						endYear: currYear+10
					};
					var optTime = $.extend(opt['time'], opt['default']);
		   	 		$(input).mobiscroll(optTime).time(optTime);
        		}
        	}
        }
        if(typeof e.color != 'undefined'){
        	if(rbk.isNotEmpty($(cmp.dom).find('.color-gray'))){
        		$(cmp.dom).find('.color-gray').css('color',e.color);
        	}
        	if(rbk.isNotEmpty($(cmp.dom).find('.rbk-input-clear'))){
        		$(cmp.dom).find('.rbk-input-clear').css('color',e.color);
        	}
        }
        if(typeof e.readonly != 'undefined'){
        	if(cmp.dom.getElementsByTagName("input").length!=0){
        		var input = cmp.dom.getElementsByTagName("input")[0];
        		input.setAttribute("readonly","readonly");
        	}
        }
        if(typeof e.psd != 'undefined'){
        	if(cmp.dom.getElementsByTagName("input").length!=0){
        		var input = cmp.dom.getElementsByTagName("input")[0];
        		$(input).attr('type','password')
        	}
        }
        if(typeof e.placeholder != 'undefined'){
        	if(cmp.dom.getElementsByTagName("input").length!=0){
        		var input = cmp.dom.getElementsByTagName("input")[0];
        		input.setAttribute("placeholder",e.placeholder);
        	}else if(cmp.dom.getElementsByTagName("textarea").length!=0){
        		var textarea = cmp.dom.getElementsByTagName("textarea")[0];
        		textarea.setAttribute("placeholder",e.placeholder);
        	}
        }
        if(typeof e.labelName != 'undefined'){
        	cmp.labelName(e.labelName);
        }
        if(typeof e.defValue != 'undefined'){
        	cmp.setVal(e.defValue);
        }
        if(typeof e.hasCode != 'undefined'){
        	var codeDiv = '<div class="rbk-btn rbk-code-input"></div>';
        	cmp.setClass("rbk-hascode");
        	cmp.appendChild(codeDiv);
        	if (rbk.platform.getPlatform().platform == "native") {
	        	$(cmp.dom).find('.rbk-code-input').on('tap',function(){
	        		rbk.platform.QRCodeScanning(function(me){
	        			var input = cmp.dom.getElementsByTagName("input")[0];
	        			$(input).val(me.code);
	        		})
	        	})
        	}
        }
        if(typeof e.hasImg != 'undefined'){
        	cmp.setClass("rbk-hasimg");
        	if(e.hasImg=='head'){
        		cmp.setClass("rbk-headtext");
        	}else if(e.hasImg=='code'){
        		cmp.setClass("rbk-codetext");
        	}else if(e.hasImg=='phone'){
        		cmp.setClass("rbk-phonetext");
        	}else if(e.hasImg=='password'){
        		cmp.setClass("rbk-passwordtext");
        	}
        }
        if(typeof e.hasBtn != 'undefined'){
        	var codeDiv = '<div class="rbk-btn">'+e.hasBtn+'</div>';
        	cmp.setClass("rbk-hasbtn");
        	if(rbk.isEmpty($('.rbk-btn',cmp.dom)[0])){
        		cmp.appendChild(codeDiv);
        	}
        }
        if(typeof e.codeLabel != 'undefined'){
        	var codeDiv = '<div class="rbk-btn">'+e.codeLabel+'</div>';
        	cmp.setClass("rbk-codelabel");
        	if(rbk.isEmpty($('.rbk-btn',cmp.dom)[0])){
        		cmp.appendChild(codeDiv);
        	}
        }
    });
};
rbk.form.prototype.setVal = function (valJson) {
	var me = this;
    for(var key in valJson){
         var cmp = me.down('#' + key);
        if (cmp == null) continue;
        if(!rbk.hasInterface(cmp,iFormCmp)) continue;
        cmp.setVal(valJson[key]);
    }
};
rbk.form.prototype.getVal = function () {
    var domList = this.getAllFormCmp();
    var inputVal = {};
    for(var j=0;j<domList.length;j++){
    	if(rbk.hasInterface(domList[j], iFormCmp))
    		inputVal[domList[j].id()] = domList[j].getVal();
    }
    return inputVal;
};
rbk.form.prototype.resetVal = function () {
    var input = $('input',this.dom)[0];
    input.value == '';
};

//获得所有form控件
rbk.form.prototype.getAllFormCmp = function(){
	return this.childCmps(false);
};

rbk.form.prototype.bindBtnClick = function(id,fn){
	if(!!$('#'+id)&&$.isFunction(fn)){
		$('#'+id).find('.rbk-btn').bind('tap',function(){
			fn($(this));
		})
	}
}
