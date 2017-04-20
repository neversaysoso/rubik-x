//列表项
rbk.navlistitem = function(){};

//继承
rbk.navlistitem.prototype = new rbk.cmp();

/**继承iTpl模板接口*/
rbk.implInterface(rbk.navlistitem, iTpl);

rbk.navlistitem.prototype.defCls = 'rbk-table-view-cell';

rbk.navlistitem.prototype.defHtmlTag = '<div class="rbk-navlistitem"></div>';

rbk.navlistitem.prototype.defTplTag = '<div class="rbk-navlistitem" navurl="{url}">{text}</div>';

rbk.navlistitem.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	var navlist = rbk.domToCmp(me.dom.parentNode,'navlist');
	if(rbk.isEmpty(navlist)){
		throw 'navlistitem组件必须在navlist下';
	}
	if ($('a[class*="rbk-navigate-right"]', this.dom).length == 0) {
	    var tempHtmlStr = this.dom.innerHTML.toString();
	    this.removeAll();
		this.appendChild('<a class="rbk-navigate-right">' + tempHtmlStr + '</a>');
	}
	me.bindClick(function(){
		if(!rbk.isEmpty(navlist.preItemBindClickFunc)){
			navlist.preItemBindClickFunc(me);
		}
	});
	$(me.dom).bind('touchstart',function(){
		$(this).addClass("rbk-active");
	})
	$(me.dom).bind('touchend',function(){
		$(this).removeClass("rbk-active");
	})
	$(me.dom).on('touchmove',function(){
		$(this).removeClass("rbk-active");
	})
};






