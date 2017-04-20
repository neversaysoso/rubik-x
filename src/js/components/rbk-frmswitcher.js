rbk.frmswitcher = function(){};

//继承cmp
rbk.frmswitcher.prototype = new rbk.cmp();

//实现formCmp接口
rbk.implInterface(rbk.frmswitcher,iFormCmp);

rbk.frmswitcher.prototype.defCls = 'rbk-input-row'; 

rbk.frmswitcher.prototype.reStructHtmlTag = function () {
	var me = this;
    rbk.cmp.prototype.reStructHtmlTag.call(this);
    if ($('label', this.dom).length == 0) {
        var lbl = document.createElement('label');
        me.insertBefore(lbl);
    }
    this.labelName(this.labelName());
    
    var switcher = me.down('switcher');
    if (switcher == null) {
        me.add(rbk.switcher.prototype.defHtmlTag);
    }
};

rbk.frmswitcher.prototype.defHtmlTag = '<div class="rbk-frmswitcher"></div>';

rbk.frmswitcher.prototype.labelName = function () {
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
rbk.frmswitcher.prototype.doLayout = function (container,jsonData) {
	var me = this;
    if(me.dom == null){
    	me.dom = container.appendChild(me.defHtmlTag)[0];
    	rbk.setObjRef(me);
    	me.id(jsonData.id);
    }
    me.reStructHtmlTag();
};
rbk.frmswitcher.prototype.setVal = function (val) {
    var switcher = this.down('switcher');
    switcher.switch(val);
};
rbk.frmswitcher.prototype.getVal = function () {
    var switcher = this.down('switcher');
    return switcher.switch();
};
rbk.frmswitcher.prototype.resetVal = function () {
    var switcher = this.down('switcher');
    switcher.setVal(false);
};