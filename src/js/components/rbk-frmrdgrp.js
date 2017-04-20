//form标签
rbk.frmrdgrp = function(){};

//继承
rbk.frmrdgrp.prototype = new rbk.cmp();

//实现formCmp接口
rbk.implInterface(rbk.frmrdgrp,iFormCmp);

rbk.frmrdgrp.prototype.defCls = 'rbk-table-view-cell rbk-grid-9';

/**样式角色*/
rbk.frmrdgrp.prototype.roles = {
	outline:'rbk-table-view-cell rbk-grid-9 rbk-outline'
};

rbk.frmrdgrp.prototype.reStructHtmlTag = function () {
	var me = this;
    rbk.cmp.prototype.reStructHtmlTag.call(this);
    
    if ($('label', this.dom).length == 0) {
		var lbl = document.createElement('label');
		lbl.innerText = 'radio';
		this.dom.appendChild(lbl);
	}
    
    $('label', me.dom)[0].innerText = $('label', me.dom)[0].innerText;
};

rbk.frmrdgrp.prototype.defHtmlTag = '<div class="rbk-frmrdgrp"></div>';

rbk.frmrdgrp.prototype.labelName = function () {
    if (arguments.length > 0) {
        $('label', this.dom)[0].innerText = arguments[0];
    }
    var str = $('label', this.dom)[0].innerText;
    return str.substring(0,str.length-2);
};

//设置布局
rbk.frmrdgrp.prototype.doLayout = function (container,jsonData) {
	var me = this;
    if(me.dom == null){
    	me.dom = container.appendChild(me.defHtmlTag)[0];
    	rbk.setObjRef(me);
    	me.id(jsonData.id);
    	if(rbk.isNotEmpty(jsonData.role)) {
    		me.attr("rbk-role", jsonData.role);
    	}
    }
    me.reStructHtmlTag();
    if($.isArray(jsonData.options)){
    	var rdgp = '<div class="rbk-cmp"></div>';
    	me.add(rdgp);
    	$.each(jsonData.options,function(index,e){
    		var rd = me.down('cmp').add('<div class="rbk-radio"><label>'+e.name+'</label></div>')[0];
    		var shell = rd.getInputShell();
    		shell.name(jsonData.id + rd.ctype);
    		shell.val(e.val);
    	});
    }
};

rbk.frmrdgrp.prototype.setVal = function (val) {
	if(rbk.isEmpty(val)) return;
	var me = this;
	var childCmps = me.childCmps()[0].childCmps();
	$.each(childCmps,function(index,e){
		if(e.ctype != 'radio') return;
		var shell = e.getInputShell();
		if(shell.val() == val.toString()){
			e.checked(true);
			return false;
		}
	});
};

rbk.frmrdgrp.prototype.getVal = function () {
	var me = this;
	var childCmps = me.childCmps()[0].childCmps();
	var checked = null;
	$.each(childCmps,function(index,e){
		if(e.ctype != 'radio') return;
		if(e.checked()){
			checked = e.getInputShell().val();
		}
	});
	return checked;
};
rbk.frmrdgrp.prototype.resetVal = function () {
    this.text('');
};