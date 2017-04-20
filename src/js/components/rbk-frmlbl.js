//form标签
rbk.frmlbl = function(){};

//继承cmp
rbk.frmlbl.prototype = new rbk.cmp();

//实现formCmp接口
rbk.implInterface(rbk.frmlbl,iFormCmp);

rbk.frmlbl.prototype.defCls = 'rbk-table-view-cell'; 

rbk.frmlbl.prototype.reStructHtmlTag = function () {
	var me = this;
    rbk.cmp.prototype.reStructHtmlTag.call(this);
    if ($('label', this.dom).length == 0) {
        var lbl = document.createElement('label');
        this.dom.appendChild(lbl);
    }
    $('label', me.dom)[0].innerText = $('label', me.dom)[0].innerText;
    
    if ($('span', this.dom).length == 0) {
    	this.appendChild('<span class="color-gray"></span>');
    }
};


rbk.frmlbl.prototype.defHtmlTag = '<div class="rbk-frmlbl"></div>';

rbk.frmlbl.prototype.labelName = function () {
    if (arguments.length > 0) {
        $('label', this.dom)[0].innerText = arguments[0];
    }
    var str = $('label', this.dom)[0].innerText;
    return str.substring(0,str.length-2);
};
//设置布局
rbk.frmlbl.prototype.doLayout = function (container,jsonData) {
	var me = this;
    if(me.dom == null){
    	me.dom = container.appendChild(me.defHtmlTag)[0];
    	rbk.setObjRef(me);
    	me.id(jsonData.id);
    }
    me.reStructHtmlTag();
};
rbk.frmlbl.prototype.valFormat = '{value}';
rbk.frmlbl.prototype.setVal = function (val) {
	var me = this;
	if(rbk.isEmpty(me.valFormat)){
		me.valFormat = '{value}';
	}
	
	var textShell = rbk.domToShell($('span',me.dom)[0]);
	
    textShell.text(rbk.format(me.valFormat,{value:val}));
};
rbk.frmlbl.prototype.getVal = function () {
	var me = this;
	/*if(rbk.isEmpty(me.valTpl)){
		me.valTpl = '{value}';
	}
	var pattern = me.valTpl;
	pattern = pattern.replace('{value}','([\\s\\S]+?)');
	var re =new RegExp(pattern);*/
	
	var textShell = rbk.domToShell($('span',me.dom)[0]);
	//var ret = re.exec(textShell.text());
    //return ret[1];
    return textShell.text();
};
rbk.frmlbl.prototype.resetVal = function () {
    this.text('');
};