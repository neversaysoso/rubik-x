//数据列表
rbk.list = function() {};

//继承cmp
rbk.list.prototype = new rbk.cmp();

//继承布局绑定接口
rbk.implInterface(rbk.list, iBindLayoutCmp);

rbk.list.prototype.defCls = 'rbk-table-view';

rbk.list.prototype.defHtmlTag = '<div class="rbk-list"></div>';

rbk.list.prototype.roles = {
	cardlist:'rbk-list rbk-table-view rbk-card',
	circle:'rbk-list rbk-table-view rbk-circlelist'
};

rbk.list.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
}

//列表项呈现定义方法
//必须放回html字符串
rbk.list.prototype.itemRender = function(temTplStr, itemJson) {
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

//设置列表像
rbk.list.prototype.doLayout = function(dataJsonArr) {
	var me = this;
	if (!$.isArray(dataJsonArr)) {
		throw 'dataJsonArr必须是数组对象';
	}
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(childCmps[i].ctype != 'listitem' || !childCmps[i].tpl() || !rbk.hasInterface(childCmps[i],iTpl)) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.listitem.prototype.defTplTag;
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
		var iCmp = rbk.domToCmp(me.appendChild(me.itemRender(itemTplStr, e))[0], 'listitem');
		iCmp.tpl(false);
		if(!rbk.isEmpty(e.id)){
			iCmp.id(e.id);
		}
		iCmp.reStructHtmlTag();
		iCmp.raw = e;
	})
};

rbk.list.prototype.preItemBindClickFunc = function(itemCmp) {};
//列表点击事件clickFunc(itemCmp)
rbk.list.prototype.bindItemClick = function(clickFunc) {
	if (!$.isFunction(clickFunc)) return;
	this.preItemBindClickFunc = clickFunc;
};