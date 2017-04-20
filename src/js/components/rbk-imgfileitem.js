//列表项
rbk.imgfileitem = function() {};

//继承
rbk.imgfileitem.prototype = new rbk.cmp();

/**继承iTpl模板接口*/
rbk.implInterface(rbk.imgfileitem, iTpl);

rbk.imgfileitem.prototype.defCls = '';

rbk.imgfileitem.prototype.defHtmlTag = '<img class="rbk-imgfileitem"/>';

rbk.imgfileitem.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	me.raw = {
		url:$(me.dom).attr('src')
	};
	var imgfile = rbk.domToCmp(me.dom.parentNode.parentNode,'imgfile');
	me.bindClick(function(){
		if(!rbk.isEmpty(imgfile.preItemBindClickFunc)){
			imgfile.preItemBindClickFunc(me);
		}
	});
}