//导航列表
rbk.navlist = function(){};

//继承
rbk.navlist.prototype = new rbk.cmp();

//继承布局绑定接口
rbk.implInterface(rbk.navlist,iBindLayoutCmp);

rbk.navlist.prototype.defCls = 'rbk-table-view';

rbk.navlist.prototype.defHtmlTag = '<div class="rbk-navlist"></div>';

rbk.navlist.prototype.roles = {
	cardlist:'rbk-list rbk-table-view rbk-card',
	imglist:'rbk-list rbk-table-view rbk-imglist'
};

rbk.navlist.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
}

//列表项呈现定义方法
//必须放回html字符串
rbk.navlist.prototype.itemRender = function(temTplStr, itemJson) {
	var pattern =new RegExp("({.*?})","g");
	var keyArray = temTplStr.match(pattern);
	for(var i=0;i<keyArray.length;i++){
		var key = keyArray[i];
		key = key.replace(/\{/,"");
		key = key.replace(/\}/,"");
		var reg = new RegExp("({" + key + "})", "g");
		var value = itemJson[key];
		if(rbk.isEmpty(value)){
			value = '';
		}
		temTplStr = temTplStr.replace(reg, value);
	}
	return temTplStr;
};

//设置列表值
rbk.navlist.prototype.doLayout = function(dataJsonArr) {
	var me = this;
	if (!$.isArray(dataJsonArr)) {
		throw 'dataJsonArr必须是数组对象';
	}
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(childCmps[i].ctype != 'navlistitem' || !childCmps[i].tpl() || !rbk.hasInterface(childCmps[i],iTpl)) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.navlistitem.prototype.defTplTag;
	} else {
		itemTplStr = itemTpl.dom.outerHTML.toString();
		//itemTpl.removeSelf();
		itemTpl.dispose();
		delete itemTpl;
	}

	$.each(dataJsonArr, function(index, e) {

		var oldCmp = null;
		if(!rbk.isEmpty( e.id)){
			oldCmp = me.down('#' + e.id);
		}
		if(oldCmp != null) return;
		var iCmp = rbk.domToCmp(me.appendChild(me.itemRender(itemTplStr, e))[0], 'navlistitem');
		iCmp.tpl(false);
		if(!rbk.isEmpty(e.id)){
			iCmp.id(e.id);
		}
		iCmp.reStructHtmlTag();
		iCmp.raw = e;
	})
	rbk.restructDomNavUrl(me.dom);
};
rbk.navlist.prototype.preItemBindClickFunc = function(itemCmp) {};
//列表点击事件clickFunc(itemCmp)
rbk.navlist.prototype.bindItemClick = function(clickFunc) {
	if (!$.isFunction(clickFunc)) return;
	this.preItemBindClickFunc = clickFunc;
};