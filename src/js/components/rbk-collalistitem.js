//列表项
rbk.collalistitem = function(){};

//继承
rbk.collalistitem.prototype = new rbk.cmp();

rbk.collalistitem.prototype.defCls = 'rbk-table-view-cell rbk-collapse'; 

rbk.collalistitem.prototype.roles = {
	fixedlist:'rbk-table-view-cell rbk-collapse rbk-fixedlist'
};

//组件默认标签
rbk.collalistitem.prototype.defHtmlTag = '<div class="rbk-collalistitem"></div>';

rbk.collalistitem.prototype.defTplTag = '<div class="rbk-collalistitem" text="{text}"></div>';

rbk.collalistitem.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	if($('a[class*="rbk-navigate-right"]', this.dom).length == 0){
		this.insertBefore('<a class="rbk-navigate-right"></a>');
	}
	this.text(this.attr('text'));
	
	//比如给子容器添加 rbk-table-view rbk-table-view-chevron 才有效
	if($('div',this.dom).length>0){
		var shell = rbk.domToShell($('div',this.dom)[0]);
		shell.setClass('rbk-table-view-chevron');
		shell.setClass('rbk-table-view');
	}
	$(this.dom).children(".rbk-navigate-right").bind('tap',function(){
		if($(this).parent().hasClass("rbk-active")){
			$(this).parent().removeClass("rbk-active");
		}else{
			$(this).parent().siblings().removeClass("rbk-active");
			$(this).parent().addClass("rbk-active")
		}
	})
};

rbk.collalistitem.prototype.text = function () {
	if (arguments.length > 0) {
		$('a[class*="rbk-navigate-right"]', this.dom)[0].innerText = arguments[0];
	}
	return $('a[class*="rbk-navigate-right"]', this.dom)[0].innerText;
};