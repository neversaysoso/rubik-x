//开关 构造函数
rbk.switcher = function(){};

//继承cmp
rbk.switcher.prototype = new rbk.cmp();

rbk.switcher.prototype.defCls = 'rbk-switch rbk-switch-blue';

rbk.switcher.prototype.defHtmlTag = '<div class="rbk-switcher"></div>';

rbk.switcher.prototype.roles = {
	greenmini : 'rbk-switch rbk-switch-green rbk-switch-mini'
};

//初始化函数
rbk.switcher.prototype.init = function() {
	var me = this;
	rbk.cmp.prototype.init.call(this);

	me.tapChangeCallback = function() {
		me.toggleClass('rbk-active');
		me.changeCallback && me.changeCallback(me);
	};

	//点击触发开关变化事件
	$(me.dom).bind("tap", me.tapChangeCallback);
};

rbk.switcher.prototype.reStructHtmlTag = function() {
	var me = this;
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	if ($('div[class=rbk-switch-handle]', this.dom).length == 0) {
		var div = document.createElement('div');
		div.setAttribute('class', 'rbk-switch-handle');
		this.dom.appendChild(div);
	}
};

rbk.switcher.prototype.tapChangeCallback = null;
rbk.switcher.prototype.changeCallback = null;
//值变化bind事件
rbk.switcher.prototype.bindChange = function(changeCallback) {
	var me = this;
	this.changeCallback = changeCallback;
};

//切换开关  
//switch(true/false)
rbk.switcher.prototype.switch = function() {
	var me = this;
	if (arguments.length > 0) {
		var curStat = me.switch();
		var on = arguments[0];
		if (on && !curStat) {
			me.setClass('rbk-active');
			me.changeCallback && me.changeCallback(me);
		} else if(!on &&　curStat) {
			me.removeClass('rbk-active');
			me.changeCallback && me.changeCallback(me);
		}
	}
	return this.existClass("rbk-active");
};

//清除资源
rbk.switcher.prototype.dispose = function() {
	//对象销毁后清空 事件
	this.dom.removeEventListener('tap', this.tapChangeCallback);
	rbk.cmp.prototype.dispose.call(this);
};

