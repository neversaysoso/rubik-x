//复选框
rbk.radio = function(){};

//继承cmp
rbk.radio.prototype = new rbk.cmp();

rbk.radio.prototype.defCls = 'rbk-input-row rbk-radio rbk-left'; 

rbk.radio.prototype.defHtmlTag = '<div class="rbk-radio"></div>';

rbk.radio.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	if ($('label', this.dom).length == 0) {
		var lbl = document.createElement('label');
		lbl.innerText = '';
		this.dom.appendChild(lbl);
	}
	
	if ($('input[type=radio]', this.dom).length == 0) {
		var cb = document.createElement('input');
		cb.type = 'radio';
		if(me.attr('checked') == 'checked'){
			cb.setAttribute("checked","checked");
		}
		if(!!me.attr('name')){
			cb.setAttribute("name",me.attr('name'));
		}
		if(!!me.attr('value')){
			cb.setAttribute("value",me.attr('value'));
		}
		$('label', this.dom)[0].appendChild(cb);
	}
	if(!!me.attr('direct')){
		me.direct(me.attr('direct'));
	}
	me.bindClick(function(){
		 window.setTimeout(function(){
		 	me.checked(true);
		 })
	});
};

rbk.radio.prototype.getInputShell = function(){
	return rbk.domToShell($('input',this.dom)[0]);
};

/*
 * 控制选中属性
 */
rbk.radio.prototype.checked = function() {
	var radioShell = rbk.domToShell($('input', this.dom)[0]);
    if (arguments.length > 0) {
    	radioShell.dom.checked = arguments[0];
    }
	return radioShell.dom.checked;
};

rbk.radio.prototype.direct = function() {
	if (arguments.length > 0) {
		if ((arguments[0] == 'left' && !this.dom.classList.contains('rbk-left')) ||
			arguments[0] != 'left' && this.dom.classList.contains('rbk-left')) {
			this.dom.classList.toggle('rbk-left');
		}
		return arguments[0] == 'left';
	} else {
		return this.dom.classList.contains('rbk-left') ? 'left' : 'right';
	}
};