rbk.frmsel = function(){};

//继承cmp
rbk.frmsel.prototype = new rbk.cmp();

//实现formCmp接口
rbk.implInterface(rbk.frmsel,iFormCmp);

rbk.frmsel.prototype.defCls = 'rbk-input-row'; 

rbk.frmsel.prototype.reStructHtmlTag = function () {
	var me = this;
    rbk.cmp.prototype.reStructHtmlTag.call(this);
    
    if ($('label', this.dom).length == 0) {
        var lbl = document.createElement('label');
        me.insertBefore(lbl);
    }
    this.labelName(this.labelName());
    
    var select = me.down('select');
    if (select == null) {
        me.add(rbk.select.prototype.defHtmlTag);
    }
};

rbk.frmsel.prototype.defHtmlTag = '<div class="rbk-frmsel"></div>';

rbk.frmsel.prototype.labelName = function () {
    if (arguments.length > 0) {
        $('label', this.dom)[0].innerText = arguments[0];
    }
    var str = $('label', this.dom)[0].innerText;
    if(str.indexOf(':') == str.length-1){
    	return str.substring(0,str.length-1);
    }else{
    	return str;
    }
};
//设置布局
rbk.frmsel.prototype.doLayout = function (container,jsonData) {
	var me = this;
    if(me.dom == null){
    	me.dom = container.appendChild(me.defHtmlTag)[0];
    	rbk.setObjRef(me);
    	me.id(jsonData.id);
    }
    me.reStructHtmlTag();
    me.down('select').bindData(jsonData.options);
};
rbk.frmsel.prototype.setVal = function (val) {
    var sel = this.down('select');
    sel.setVal(val);
};
rbk.frmsel.prototype.getVal = function () {
    var sel = this.down('select');
    return sel.getVal();
};
rbk.frmsel.prototype.resetVal = function () {
    var sel = this.down('select');
    sel.setVal(null);
};