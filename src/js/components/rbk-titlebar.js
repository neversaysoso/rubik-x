//标题导航
rbk.titlebar = function(){};

//继承cmp
rbk.titlebar.prototype = new rbk.cmp();

rbk.titlebar.prototype.defCls = 'rbk-bar rbk-bar-nav'; 

rbk.titlebar.prototype.defHtmlTag = '<div class="rbk-titlebar"></div>';

rbk.titlebar.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	//标题
	if ($('h1', this.dom).length == 0) {
		var h = document.createElement('h1');
		h.innerText = '标题';
		h.setAttribute('class', 'rbk-title');
		this.dom.appendChild(h);
	}
	//图标
	/*if ($('a', this.dom).length == 0) {
		var h = document.createElement('a');
		h.setAttribute('class', 'rbk-icon rbk-pull-left');
		this.dom.appendChild(h);
	}*/
	
	if(me.attr('canback') == 'true'){
		var text = me.attr('backtxt')?me.attr('backtxt'):"";
		me.canBack(true,true,text);
	}
	
	if(me.attr('canhome') == 'true'){
		var text = me.attr('hometxt')?me.attr('hometxt'):"";
		me.canHome(true,true,text);
	}
};

//标题 属性 参数:string类型
rbk.titlebar.prototype.title = function() {
	if (arguments.length > 0) {
		$('h1', this.dom)[0].innerText = arguments[0];
		document.title = arguments[0];
	}
	return $('h1', this.dom)[0].innerText;
};

//是否可以回退  参数:canBack:true/false text:string
//isCloseAction: 是否是否执行关闭按钮动作,默认不触发
rbk.titlebar.prototype.canBack = function(canBack, isCloseAction,text) {
	var me = this;
	text = text ? text : '';
	var backDoms = $('button[class*="rbk-btn-nav rbk-pull-left"]', me.dom);
	
	if (arguments.length > 0) {
		if (canBack && backDoms.length == 0) {
			var btnDom = me.insertBefore('<button class="rbk-btn rbk-btn-link rbk-btn-nav rbk-pull-left"><span class="rbk-icon rbk-icon-left-nav"></span>' + text + '</button>')[0];
			if (isCloseAction) {
				var btnShell = rbk.domToShell(btnDom);
				btnShell.bindClick(function(){
					rbk.getView().back();
				});
			}
		} else if (!canBack && backDoms.length > 0) {
			me.dom.removeChild(backDoms[0]);
			if (!isCloseAction) {
				var btnShell = rbk.domToShell(backDoms[0]);
				btnShell.bindClick(function(){});
			}
		}
		return canBack;
	}
	return backDoms.length > 0;
};

//
//rbk.titlebar.prototype.setIconClss = function(cls){
//	var backDoms = $('a[class*="rbk-icon-left-nav"]', me.dom);
//	if(backDoms.length == 0)
//  rbk.domToShell()
//}
//homeUrl 缺省值
rbk.titlebar.prototype.canHome = function(goHome,isCloseAction,text,homeUrl) {
	var me = this;
	text = text ? text : '';
	if(rbk.isEmpty(homeUrl)){ 
		homeUrl = rbk.getView().getHostUrl();
	}
	
	var homeDoms = $('button[class*="rbk-btn-nav rbk-pull-left"]', me.dom);
	
	if (arguments.length > 0) {
		if (goHome && homeDoms.length == 0) {
			var btnDom = me.insertBefore( 	
				'<button class="rbk-btn rbk-btn-link rbk-btn-nav rbk-pull-left"><span class="rbk-icon rbk-icon-home"></span>' + text + '</button>')[0];
			if (isCloseAction) {
				var btnShell = rbk.domToShell(btnDom);
				btnShell.bindClick(function(){
					rbk.getView().open(homeUrl);
				});
			}
		} else if (!goHome && homeDoms.length > 0) {
			me.dom.removeChild(homeDoms[0]);
			if (!isCloseAction) {
				var btnShell = rbk.domToShell(homeDoms[0]);
				btnShell.bindClick(function(){});
			}
		}
		return goHome;
	}
	return backDoms.length > 0;
};

//是否可以向前  参数:canBack:true/false text:string
rbk.titlebar.prototype.canGo = function(canGo, text) {
	var me = this;
	text = text ? text : '';
	var goDoms = $('button[class*="rbk-btn-nav rbk-pull-right"]', me.dom);
	if (arguments.length > 0) {
		if (canGo && goDoms.length == 0) {
			var btnDom = me.appendChild(
				'<button class="rbk-btn rbk-btn-link rbk-btn-nav rbk-pull-right">' + text + '<span class="rbk-icon rbk-icon-right-nav"></span></button>')[0];
		} else if (!canGo && goDoms.length > 0) {
			me.dom.removeChild(goDoms[0]);
		}
		return canGo;
	}
	return goDoms.length > 0;
};

rbk.titlebar.prototype.titleType = function(obj){
	if(rbk.platform.getPlatform().platform == "native"){
		rbk.platform.titleBar({
			"rightType":obj.rightType,
			"rightList":obj.rightList,
			"content":obj.content,
			"leftType":obj.leftType
		});
	}else{
		var me = this;
		var leftDoms = $('button[class*="rbk-btn-nav rbk-pull-left"]', me.dom)[0];
		var goDoms = $('button[class*="rbk-btn-nav rbk-pull-right"]', me.dom)[0];
		obj.text = obj.text ? obj.text : '';
		obj.url = obj.url ? obj.url : '';
		if(rbk.isNotEmpty(leftDoms)){
			$(leftDoms).remove();
		}
		if(rbk.isNotEmpty(goDoms)){
			$(goDoms).remove();
		}
		if(rbk.isNotEmpty(obj.leftType)){
			if(obj.leftType==1){
				var btnDom = me.insertBefore('<button class="rbk-btn rbk-btn-link rbk-btn-nav rbk-pull-left"><span class="rbk-icon rbk-icon-left-nav"></span>' + obj.text + '</button>')[0];
				var btnShell = rbk.domToShell(btnDom);
				btnShell.bindClick(function(){
					rbk.getView().back();
				});
			}else if(obj.leftType==2){
				var btnDom = me.insertBefore('<button class="rbk-btn rbk-btn-link rbk-btn-nav rbk-pull-left"><span class="rbk-icon rbk-icon-home"></span>' + obj.text + '</button>')[0];
				var btnShell = rbk.domToShell(btnDom);
				if(rbk.isNotEmpty(obj.url)){
					btnShell.bindClick(function(){
						rbk.getView().open(obj.url);
					});	
				}
			}
		}else{
			var btnDom = me.insertBefore('<button class="rbk-btn rbk-btn-link rbk-btn-nav rbk-pull-left"><span class="rbk-icon rbk-icon-left-nav"></span>' + obj.text + '</button>')[0];
			var btnShell = rbk.domToShell(btnDom);
			btnShell.bindClick(function(){
				rbk.getView().back();
			});
		}
		if(rbk.isNotEmpty(obj.rightType)){
			if (!$.isArray(obj.rightList)) {
				throw 'dataJsonArr必须是数组对象';
			}
			if(obj.rightType=='1'){
				var btnDom = me.appendChild('<button class="rbk-btn rbk-btn-link rbk-btn-nav rbk-pull-right">' + obj.content + '</button>')[0];
			}else if(obj.rightType=='2'){
				var btnDom = me.appendChild('<button class="rbk-btn rbk-btn-link rbk-btn-nav rbk-pull-right"><img src="' + obj.content + '"></button>')[0];
			}
			var btnShell = rbk.domToShell(btnDom);
			if(obj.rightList.length>1){
			
			}else{
				btnShell.bindClick(function(){
					obj.rightList[0].callback.call(obj.rightList[0].callback);
				});
			}
		}
	}
}
