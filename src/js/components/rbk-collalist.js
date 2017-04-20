//折叠面板
rbk.collalist = function(){};

//继承
rbk.collalist.prototype = new rbk.cmp();

rbk.collalist.prototype.reStructHtmlTag = function() {
	var me = this;
	rbk.cmp.prototype.reStructHtmlTag.call(this);
};

rbk.collalist.prototype.defCls = 'rbk-table-view rbk-table-view-chevron'; 

//组件默认标签
rbk.collalist.prototype.defHtmlTag = '<div class="rbk-collalist"></div>';

rbk.collalist.prototype.roles = {
	clock:'rbk-collalist rbk-table-view rbk-table-view-chevron rbk-clocklist'
};

//列表项呈现定义方法
//必须放回html字符串
rbk.collalist.prototype.itemRender = function(temTplStr,itemJson) {
	return rbk.format(temTplStr,itemJson);
};

//设置列表像
rbk.collalist.prototype.doLayout = function(dataJsonArr) {
	var me = this;
	if (!$.isArray(dataJsonArr)) {
		throw 'dataJsonArr必须是数组对象';
	}
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(childCmps[i].ctype != 'collalistitem' || !childCmps[i].tpl()) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.collalistitem.prototype.defTplTag;
	} else {
		itemTplStr = itemTpl.dom.outerHTML.toString();
		itemTpl.removeSelf();
		itemTpl.dispose();
		delete itemTpl;
	}
	$.each(dataJsonArr, function(index, e) {
		var oldCmp = null;
		if(!rbk.isEmpty( e.id)){
			oldCmp = me.down('#' + e.id);
		}
		if(oldCmp != null) return;
		var iCmp = rbk.domToCmp(me.appendChild(me.itemRender(itemTplStr, e))[0], 'collalistitem');
		iCmp.reStructHtmlTag();
		iCmp.tpl(false);
		if(!rbk.isEmpty(e.id)){
			iCmp.id(e.id);
		}
		iCmp.raw = e;
		
		if(!rbk.isEmpty(e.cldCtype) && rbk.isCtype(e.cldCtype)){
			var cldCmp = iCmp.down(e.cldCtype);
		    if(cldCmp == null){
				var cldCmp = rbk.createCmpObj(e.cldCtype);
    			cldCmp.dom = iCmp.appendChild(cldCmp.defHtmlTag)[0];
    			cldCmp.reStructHtmlTag();
    			cldCmp.setClass('rbk-table-view-chevron');
		    	rbk.setObjRef(cldCmp);
		    }
		    if(!rbk.hasInterface(cldCmp,iBindLayoutCmp)) return;
		    cldCmp.doLayout(e.clsData);
		}
	});
};
