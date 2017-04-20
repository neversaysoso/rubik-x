//文本框
rbk.frmtxt = function(){};

//继承cmp
rbk.frmtxt.prototype = new rbk.cmp();

//实现formCmp接口
rbk.implInterface(rbk.frmtxt,iFormCmp);

rbk.frmtxt.prototype.defCls = 'rbk-input-row'; 

rbk.frmtxt.prototype.defHtmlTag = '<div class="rbk-frmtxt"></div>';

/**样式角色*/
rbk.frmtxt.prototype.roles = {
	outline:'rbk-table-view-cell rbk-grid-9 rbk-outline'
};

rbk.frmtxt.prototype.reStructHtmlTag = function () {
	var me = this;
    rbk.cmp.prototype.reStructHtmlTag.call(this);
    if ($('label', this.dom).length == 0) {
        var lbl = document.createElement('label');
        me.insertBefore(lbl);
    }
    $('label', this.dom)[0].innerText = $('label', this.dom)[0].innerText;
    if ($('input', this.dom).length == 0) {
        me.appendChild('<input type="text" class="rbk-input-clear"/>');
    }
};
//是否有清楚按钮
rbk.frmtxt.prototype.hasClearBtn = function(){
	var me = this;
	var inputDomShell = rbk.domToShell($('input', this.dom)[0]);
	if(arguments.length>0){
		if(arguments[0]){
			inputDomShell.setClass('rbk-input-clear');
		}else{
			inputDomShell.removeClass('rbk-input-clear');
		}
		return arguments[0];
	}
	return inputDomShell.existClass('rbk-input-clear');
};


rbk.frmtxt.prototype.labelName = function () {
    if (arguments.length > 0) {
        $('label', this.dom)[0].innerText = arguments[0];
    }
    var str = $('label', this.dom)[0].innerText;
    return str.substring(0,str.length-2);
};
//设置布局
rbk.frmtxt.prototype.doLayout = function (container,jsonData) {
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
rbk.frmtxt.prototype.setVal = function (val) {
    var input = $('input',this.dom)[0];
    input.value = val;
};
rbk.frmtxt.prototype.getVal = function () {
    var input = $('input',this.dom)[0];
    return input.value;
};
rbk.frmtxt.prototype.resetVal = function () {
    var input = $('input',this.dom)[0];
    input.value == '';
};