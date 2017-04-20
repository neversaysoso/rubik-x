//数据列表
rbk.imgslider = function() {};

//继承cmp
rbk.imgslider.prototype = new rbk.cmp();

//继承布局绑定接口
rbk.implInterface(rbk.imgslider, iBindLayoutCmp);

rbk.imgslider.prototype.defCls = 'rbk-slider';

rbk.imgslider.prototype.defHtmlTag = '<div class="rbk-imgslider"></div>';

rbk.imgslider.prototype.roles = {
	notext: 'rbk-slider rbk-slider-notext'
};

rbk.imgslider.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
    if (rbk.isEmpty(this.getImgContainerShell())) {
        this.appendChild('<div class="rbk-slider-group"></div>');
    }
    if (rbk.isEmpty(this.getImgIndicatorShell())) {
        this.appendChild('<div class="rbk-slider-indicator rbk-text-right"></div>');
    }
    this.refresh();
};

//获得图片容器壳
rbk.imgslider.prototype.getImgContainerShell = function(){
	var doms = $('div[class*=rbk-slider-group]', this.dom);
	if (doms.length == 0) return null;
	return rbk.domToShell(doms[0]);
};

//获得图片切换标识器容器壳
rbk.imgslider.prototype.getImgIndicatorShell = function(){
	var doms = $('div[class*=rbk-slider-indicator]', this.dom);
	if (doms.length == 0) return null;
	return rbk.domToShell(doms[0]);
};


rbk.imgslider.prototype.itemRender = function(temTplStr, itemJson) {
	return rbk.format(temTplStr, itemJson);
};

rbk.imgslider.prototype.doLayout = function(dataJsonArr) {
	var me = this;
	if (!$.isArray(dataJsonArr)) {
		throw 'dataJsonArr必须是数组对象';
	}
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(childCmps[i].ctype != 'imgslditem' || !childCmps[i].tpl() || !rbk.hasInterface(childCmps[i],iTpl)) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.imgslditem.prototype.defTplTag;
	} else {
		itemTplStr = itemTpl.dom.outerHTML.toString();
		itemTpl.removeSelf();
		itemTpl.dispose();
		delete itemTpl;
	}
	
	var imgCtn = me.getImgContainerShell();
	var indicatorCtn = me.getImgIndicatorShell();
	$.each(dataJsonArr, function(index, e) {
		var oldCmp = null;
		if(!rbk.isEmpty(e.id)){
			oldCmp = me.down('#' + e.id);
		}
		if(oldCmp != null) return;
		var iCmp = rbk.domToCmp(imgCtn.appendChild(me.itemRender(itemTplStr, e))[0], 'imgslditem');
		iCmp.tpl(false);
		if(!rbk.isEmpty(e.id)){
			iCmp.id(e.id);
		}
		iCmp.reStructHtmlTag();
		iCmp.raw = e;
		indicatorCtn.appendChild('<div class="rbk-indicator"></div>');
	});
	//延迟一下不然会有bug
	window.setTimeout(function(){
		me.refresh();
	},100);
};

rbk.imgslider.prototype.goto = function(index){
	var me = this;
	if(rbk.isEmpty(index)){
		index = 0;
	}
	
	var slider = $(this.dom).slider();
	slider && slider.gotoItem(index);
};

//是否可以循环
rbk.imgslider.prototype.canLoop = function(){
	var me = this;
	var ctn = me.getImgContainerShell();
	if(arguments.length>0){
		ctn.removeClass('rbk-slider-loop');
		var loopDoms = $('div[class*=rbk-slider-item-duplicate]',ctn.dom);
		$.each(loopDoms,function(index,e){
			var shell = rbk.domToShell(e);
			shell.removeSelf();
		});
		if(arguments[0]){
			ctn.setClass('rbk-slider-loop');
		    var cldCmps = me.childCmps(false,'imgslditem');
		    if(cldCmps.length == 0) return;
		    var firstCmp = cldCmps[0];
		    var lastCmp = cldCmps[cldCmps.length - 1];

		    var loopLastCmp = rbk.domToShell(ctn.appendChild(firstCmp.dom.outerHTML)[0]);
		    loopLastCmp.setClass('rbk-slider-item-duplicate');
		    
		    var loopFirstCmp = rbk.domToShell(ctn.insertBefore(lastCmp.dom.outerHTML)[0]);
		    loopFirstCmp.setClass('rbk-slider-item-duplicate');
		}
		me.refresh();
	}else{
		return ctn.existClass('rbk-slider-loop');
	}
};

rbk.imgslider.prototype.refresh = function(){
	var me = this;
	me.goto(0);
	var indicatorCtn = me.getImgIndicatorShell();
	var indies = $('div[class*=rbk-indicator]',indicatorCtn.dom);
	if(indies.length>0){
		rbk.domToShell(indies[0]).setClass('rbk-active');
	}
};

//interval 切换间隔毫秒数 默认3000
rbk.imgslider.prototype.auto = function(interval){
	if(rbk.isEmpty(interval)){
		interval = 3000;
	}
	this.refresh();
	$(this.dom).slider({interval: interval});
}
