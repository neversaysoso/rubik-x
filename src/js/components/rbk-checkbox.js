//复选框
rbk.checkbox = function(){};

//继承cmp
rbk.checkbox.prototype = new rbk.cmp();

rbk.checkbox.prototype.defCls = 'rbk-input-row rbk-checkbox rbk-left'; 

//组件默认标签
rbk.checkbox.prototype.defHtmlTag = '<div class="rbk-checkbox"></div>';

rbk.checkbox.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	if ($('label', this.dom).length == 0) {
		var lbl = document.createElement('label');
		lbl.innerText = '';
		this.dom.appendChild(lbl);
	}
	if ($('input[type="checkbox"]', this.dom).length == 0) {
		var cb = document.createElement('input');
		cb.type = 'checkbox';
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
};
/*
 * 控制选中属性
 */
rbk.checkbox.prototype.checked = function() {
	if (arguments.length > 0) {
		$('input', this.dom)[0].checked = arguments[0];
	}
	return $('input', this.dom)[0].checked;
};


rbk.checkbox.prototype.preBindChange = null;
//值变化bind事件
rbk.checkbox.prototype.bindChange = function(callback) {
	var me = this;
	var newEvent = function() {
		$.isFunction(callback) && callback(me);
	}
	var ckDom = $('input[type="checkbox"]', me.dom)[0];
	ckDom.addEventListener('change', newEvent);
	if ($.isFunction(me.preBindChange)) {
		ckDom.removeEventListener('tap', me.preBindChange);
	}
	me.preBindChange = newEvent;
};

//checkbox labelName属性 
rbk.checkbox.prototype.text = function () {
	if (arguments.length > 0) {
		$('label', this.dom)[0].innerText = arguments[0];
	}
	return $('label', this.dom)[0].innerText;
};

//checkbox的方向 'left' 或 'right'
rbk.checkbox.prototype.direct = function() {
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