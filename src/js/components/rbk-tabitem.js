//选项卡页
rbk.tabitem = function(){};

//继承
rbk.tabitem.prototype = new rbk.cmp();

/**继承iTpl模板接口*/
rbk.implInterface(rbk.tabitem, iTpl);

rbk.tabitem.prototype.defCls = 'rbk-control-content'; 

rbk.tabitem.prototype.defHtmlTag = '<div class="rbk-tabitem"></div>';

rbk.tabitem.prototype.defTplTag = '<div class="rbk-tabitem" text="{text}"></div>';

rbk.tabitem.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	
//	var tab = me.getTab();
//	if(tab == null){
//		throw 'tabitem必须在tab内';
//	}
}


rbk.tabitem.prototype.getTab = function(){
	return this.up('tab');
};


//选项卡 页头名称
rbk.tabitem.prototype.text = function(){
	var me = this;
	if(arguments.length>0){
		me.attr('text',arguments[0]);
	}
	return me.attr('text');
};
