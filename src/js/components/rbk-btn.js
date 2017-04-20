//按钮
rbk.btn = function(){};

//继承cmp
rbk.btn.prototype = new rbk.cmp();

rbk.btn.prototype.defCls = 'rbk-btn rbk-btn-primary rbk-btn-block'; 

/**组件默认html，动态创建时有用*/
rbk.btn.prototype.defHtmlTag = '<button class="rbk-btn"></button>';

/**样式角色*/
rbk.btn.prototype.roles = {
	outred:'rbk-btn rbk-btn-block rbk-btn-outlined',
	outgray:'rbk-btn rbk-btn-block rbk-btn-outlined rbk-gray',
	outnormal:'rbk-btn rbk-btn-block rbk-btn-outlined rbk-prm',
	red:'rbk-btn rbk-btn-red rbk-btn-block',
	orange:'rbk-btn rbk-btn-orange rbk-btn-block',
	yellow  :'rbk-btn rbk-btn-yellow rbk-btn-block',
	mini:'rbk-btn rbk-btn-primary',
	minired  :'rbk-btn rbk-btn-red',
	miniorange:'rbk-btn rbk-btn-orange',
	miniyellow  :'rbk-btn rbk-btn-yellow',
	minioutred:'rbk-btn rbk-btn-outlined',
	minioutgray:'rbk-btn rbk-btn-outlined rbk-gray',
	minioutnormal:'rbk-btn rbk-btn-outlined rbk-prm',
};

//block 块级模式属性  属性类型是 true/false
rbk.btn.prototype.block = function() {
	var me = this;
	if (arguments.length > 0) {
		var isBlock = arguments[0];
		if ((isBlock && !me.existClass('rbk-btn-block')) ||
			!isBlock && me.existClass('rbk-btn-block')) {
			me.toggleClass('rbk-btn-block');
		}
		return isBlock;
	} else {
		return me.existClass('rbk-btn-block');
	}
};

/**
 * 设置按钮图标
 * 
 * @param {String} iconCls
 * @param {Boolean} right
 */
rbk.btn.prototype.setIcon = function(iconCls,right){
	var me = this;
	var iconDoms = $('span[class*=rbk-icon]', this.dom);
	if (iconDoms.length != 0) {
		rbk.domToShell(iconDoms[0]).removeSelf();
		//iconDomShell = rbk.domToShell(me.appendChild('<span class="rbk-icon"><span>')[0]);
	}
	var iconDomShell = null;
	if(right){
		iconDomShell = rbk.domToShell(me.appendChild('<span class="rbk-icon"><span>')[0]);
	}else{
		iconDomShell = rbk.domToShell(me.insertBefore('<span class="rbk-icon"><span>')[0]);
	}
	iconDomShell.setClass(iconCls);
};
