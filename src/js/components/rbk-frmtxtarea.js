//文本框
rbk.frmtxtarea = function(){};

//继承cmp
rbk.frmtxtarea.prototype = new rbk.cmp();

//实现formCmp接口
rbk.implInterface(rbk.frmtxtarea,iFormCmp);

rbk.frmtxtarea.prototype.defCls = 'rbk-table-view-cell'; 

rbk.frmtxtarea.prototype.defHtmlTag = '<div class="rbk-frmtxtarea"></div>';

/**样式角色*/
rbk.frmtxtarea.prototype.roles = {
	outline:'rbk-table-view-cell rbk-grid-9 rbk-outline'
};

rbk.frmtxtarea.prototype.reStructHtmlTag = function () {
	var me = this;
    rbk.cmp.prototype.reStructHtmlTag.call(this);
    if ($('label', this.dom).length == 0) {
        var lbl = document.createElement('label');
        me.insertBefore(lbl);
    }
    $('label', this.dom)[0].innerText = $('label', this.dom)[0].innerText;
    if ($('textarea', this.dom).length == 0) {
        me.appendChild('<textarea class="rbk-textarea-clear"></textarea>');
    }
};

rbk.frmtxtarea.prototype.labelName = function () {
    if (arguments.length > 0) {
        $('label', this.dom)[0].innerText = arguments[0];
    }
    var str = $('label', this.dom)[0].innerText;
    return str.substring(0,str.length-2);
};
//设置布局
rbk.frmtxtarea.prototype.doLayout = function (container,jsonData) {
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
};
rbk.frmtxtarea.prototype.setVal = function (val) {
    var textarea = $('textarea',this.dom)[0];
    textarea.value = val;
};
rbk.frmtxtarea.prototype.getVal = function () {
    var textarea = $('textarea',this.dom)[0];
    return textarea.value;
};
rbk.frmtxtarea.prototype.resetVal = function () {
    var textarea = $('textarea',this.dom)[0];
    textarea.value == '';
};