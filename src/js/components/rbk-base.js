(function($) {
	$.init = function(options) {
		rbk.pageInfo();
	};
})(jQuery);
/**框架命名空间*/
var rbk = {};
//样式标识前缀
rbk.suffix = 'rbk-';
/*****************ns基础方法*******start******/
rbk.ready = function(readyCallback) {
	var opt = {};
	opt.firstTime = false;
	var tempFun = function() {
		rbk.init();
		readyCallback && readyCallback(opt);
		$('.rbk-content').show();
		
	};

	if (!!window.plus) {
		tempFun();
	} else {
		opt.firstTime = true;
		//$.plusReady(tempFun);
		window.onload = tempFun;
	}
	
};

rbk.getAppMsg = function(fn){
	if (!$.isFunction(fn)) return;
	window.getJson = fn;
}
/**
 * 标签选择器
 * 
 * @param {Object} selector
 * @returns {cmpObj} 返回一个组件对象 
 */
rbk.getCmp = function(selector) {
	return rbk.getDownCmp(selector);
};

rbk.curView = null;
rbk.getView = function() {
	if (rbk.curView == null) {
		rbk.curView = new rbk.view;
	}
	return rbk.curView;
};

//函数 接口辅助相关方法
rbk.implInterface = function(classType, interfaceObj) {
	if (interfaceObj == null || rbk.isEmpty(interfaceObj.interfaceName)) {
		throw '接口未申明或接口名称未定义';
	}
	if (classType.prototype.interfaces == null) {
		classType.prototype.interfaces = {};
	}

	classType.prototype.interfaces[interfaceObj.interfaceName] = interfaceObj;
};
//函数 判断是否实现指定接口
rbk.hasInterface = function(classObj, interfaceObj) {
		if (classObj == null || interfaceObj == null || rbk.isEmpty(interfaceObj.interfaceName)) {
			return false;
		}
		if (classObj.interfaces == null) {
			classObj.interfaces = {};
		}
		return classObj.interfaces[interfaceObj.interfaceName] == interfaceObj;
	}
//唯一guid
rbk.guid = function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	var code = function() {
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	}
	return code().toUpperCase();
};
//获取唯一编号
rbk.guid_ = function() {
     function s4() {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }

     var code = function() {
          return 'f'+s4() + s4() + '_' + s4() + '_' + s4() + '_' +
               s4() + '_' + s4() + s4() + s4();
     }
     return code().toUpperCase();
};
//字符串格式化
rbk.format = function(str, args) {
	if (arguments.length > 1) {
		var result = str;
		if (arguments.length == 2 && typeof(args) == "object") {
			for (var key in args) {
				var reg = new RegExp("({" + key + "})", "g");
				result = result.replace(reg, args[key]);
			}
			/*var pattern =new RegExp("({.*?})","g");
			var keyArray = result.match(pattern);
			for(var i=0;i<keyArray.length;i++){
				var key = keyArray[i];
				key = key.replace(/\{/,"");
				key = key.replace(/\}/,"");
				var reg = new RegExp("({" + key + "})", "g");
				var value = args[key];
				if(rbk.isEmpty(value)){
					value = '';
				}
				result = result.replace(reg, value);
			}*/
			/*for (var key in args) {
				var reg = new RegExp("({" + key + "})", "g");
				result = result.replace(reg, args[key]);
			}*/
		} else {
			for (var i = 1; i < arguments.length; i++) {
				if (arguments[i] == undefined) {
					return "";
				} else {
					var reg = new RegExp("({[" + (i - 1) + "]})", "g");
					result = result.replace(reg, arguments[i]);
				}
			}
		}
		return result;
	} else {
		return str;
	}
};
rbk.pageInfo = function(){
	var h = $(window).height()
	if(rbk.platform.getPlatform().platform == "native"){
		$('.rbk-content').css('padding-top','0px');
		$('.rbk-titlebar').css('display','none');
		if(rbk.isNotEmpty($('.rbk-scroll'))){
			$('.rbk-scroll').css('height',h);
		}
	}else{
		if(rbk.isNotEmpty($('.rbk-scroll'))){
			$('.rbk-scroll').css('height',h-44);
			$('.rbk-scroll').css('top',44);
			$('.rbk-scroll>.rbk-content').css('padding-top','0px');
		}
	}
}
rbk.titleClose = function(){
	var h = $(window).height();
	$('.rbk-content').css('padding-top','0px');
	$('.rbk-titlebar').hide();
	if(rbk.isNotEmpty($('.rbk-scroll'))){
		$('.rbk-scroll').css('height',h);
	}
	if(rbk.isNotEmpty($('.rbk-floortab'))){
		$('.rbk-floortab').find('.rbk-segmented-control').css('height',h);
		$('.rbk-floortab').find('.rbk-content-padded').css('height',h).css('top','0px');
	}
	
}
rbk.colToArr = function(collection) {
	var ary = [];
	for (var i = 0, len = collection.length; i < len; i++) {
		ary.push(collection[i]);
	}
	return ary;
};
/**
 * json继承函数
 * 
 * @param {Object} 结果对象
 * @param {Object} 订制参数
 * @param {Object} 默认参数
 */
rbk.applyJson = function(object, config, defaults) {
	if (rbk.isEmpty(object)) {
		object = {};
	}
	if (defaults) {
		object = rbk.applyJson(object, defaults);
	}

	if (object && config && typeof config === 'object') {
		var i, j, k;

		for (i in config) {
			if (typeof config[i] === 'object') {
				object[i] = rbk.applyJson(object[i], config[i]);
			} else {
				object[i] = config[i];
			}
		}
	}

	return object;
};
/**
 * 判断是否为空/未定义
 * 
 * @param {Object} value
 * @param {Boolean} allowEmptyString 是否允许空字符串
 * @returns {Boolean} 
 */
rbk.isEmpty = function(value, allowEmptyString) {
	return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || ($.isArray(value) && value.length === 0);
};
rbk.isNotEmpty = function(value, allowEmptyString) {
	return !rbk.isEmpty(value, allowEmptyString);
};
/**
 * cookie操作
 */
rbk.cookie = {
	get: function(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg))
			return unescape(arr[2]);
		else
			return null;
	},
	del: function(name, value, time) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = rbk.cookie.get(name);
		if (cval != null) {
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}
	},
	set: function(name, value, time) {
		if (rbk.isEmpty(time)) {
			time = 'd30';
		}
		var strsec = rbk.cookie.getTime(time);
		var exp = new Date();
		exp.setTime(exp.getTime() + strsec * 1);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	},

	//这是有设定过期时间的使用示例: 
	//s20是代表20秒 
	//h是指小时，如12小时则是:h12 
	//d是天数，30天则:d30 
	getTime: function(str) {
		var str1 = str.substring(1, str.length) * 1;
		var str2 = str.substring(0, 1);
		if (str2 == "s") {
			return str1 * 1000;
		} else if (str2 == "h") {
			return str1 * 60 * 60 * 1000;
		} else if (str2 == "d") {
			return str1 * 24 * 60 * 60 * 1000;
		}
	}
};
rbk.sessionStorage = {
	get:function(key){
		return sessionStorage.getItem(key);
	},
	set:function(key,value){
		sessionStorage.setItem(key,value);
	},
	del:function(key){
		sessionStorage.removeItem(key);
	}
}
/*****************rbk基础方法*******end******/



/*****************rbk接口*******start******/
//与 form 挂钩的组件接口
var iFormCmp = {
	//属性 接口名称 不用继承
	interfaceName: 'iFormCmp',
	//默认from绑定组件结构
	defFormCmpHtml: '',
	//标签名称
	labelName: function() {},
	//函数 布局
	doLayout: function(container, jsonData) {},
	//函数 设置值
	setVal: function(data) {},
	//函数 重置值
	getVal: function() {},
	//函数 重置值
	resetVal: function() {},
	//是否强调
	emphasis: function() {}
};
//组件布局绑定接口接口
var iBindLayoutCmp = {
	//属性 接口名称 不用继承
	interfaceName: 'iBindLayoutCmp',
	doLayout: function(jsonData) {}
};
//模板接口
var iTpl = {
	interfaceName: 'iTpl',
	defTplTag: ''
}
/*****************rbk接口*******start******/


/*****************dom的壳对象*******start******/
rbk.domShell = function(dom) {
	this.dom = dom;
};

//属性 对应的dom对象
rbk.domShell.prototype.dom = null;

/**
 * 功能与jquery的css类似
 * 1.name value 两个参数的重载,如果只有name则返回样式值
 * 2.json对象参数的重载
*/
rbk.domShell.prototype.css = function() {
	if ((typeof arguments[0]) == 'string') {
		if (arguments.length == 2) {
			this.dom.style[arguments[0]] = arguments[1];
		} else {
			return this.dom.style[arguments[0]];
		}
	} else if ((typeof arguments[0]) == 'object') {
		for (var key in arguments[0]) {
			this.dom.style[key] = arguments[0][key];
		}
	}
};
/**
 * 增加样式名
 * 1.样式名className重载
 * 2.样式名数组重载
 */
rbk.domShell.prototype.setClass = function() {
	var me = this;
	if ($.isArray(arguments[0])) {
		$.each(arguments[0], function(index, e) {
			if (me.existClass(e)) {
				return;
			}
			me.dom.classList.add(e);
		});
	} else {
		if (me.existClass(arguments[0])) {
			return;
		}
		me.dom.classList.add(arguments[0]);
	}
}
/**
 * 删除样式名
 * 1.样式名className重载
 * 2.样式名数组重载
 */
rbk.domShell.prototype.removeClass = function() {
	if ((typeof arguments[0]) == 'string') {
		this.dom.classList.remove(arguments[0]);
	} else if ($.isArray(arguments[0])) {
		var me = this;
		$.each(arguments[0], function(index, e) {
			me.dom.classList.remove(e);
		});
	}
}
/**
 * 切换样式名
 * 1.样式名className重载
 * 2.样式名数组重载
 */
rbk.domShell.prototype.toggleClass = function() {
	if ((typeof arguments[0]) == 'string') {
		this.dom.classList.toggle(arguments[0]);
	} else if ($.isArray(arguments[0])) {
		$.each(arguments[0], function(index, e) {
			this.dom.classList.toggle(e);
		});
	}
}
/**
 * 是否存在样式名
 * @returns {Boolean}
 */
rbk.domShell.prototype.existClass = function(className) {
	return this.dom.classList.contains(className);
};

//重载1 name,value 如果value为null就删除属性
//重载2 json 对象
//重载3 name 返回值
rbk.domShell.prototype.attr = function() {
	if(this.dom == null) return;
	if ((typeof arguments[0]) == 'string') {
		if (arguments.length == 2) {
			if(arguments[1] == null){
				this.dom.removeAttribute(arguments[0]);
			}else{
				this.dom.setAttribute(arguments[0], arguments[1]);
			}
		} else {
			return this.dom.getAttribute(arguments[0]);
		}
	} else if ((typeof arguments[0]) == 'object') {
		for (var key in arguments[0]) {
			this.attr(key, arguments[0][key]);
		}
	}
};

/**
 * 向左靠齐
 */
rbk.domShell.prototype.pullLeft = function() {
	var me = this;
	me.removeClass('rbk-pull-right');
	me.setClass('rbk-pull-left');
}

/**
 * 向右靠齐
 */
rbk.domShell.prototype.pullRight = function() {
	var me = this;
	me.removeClass('rbk-pull-left');
	me.setClass('rbk-pull-right');
}

/**
 * 隐藏dom标签
 * 传false时候隐藏标签
 */
rbk.domShell.prototype.visible = function() {
	var me = this;
	if (arguments.length > 0) {
		me.css('display', arguments[0] ? '' : 'none');
	}
	return me.css('display');
};
/**
 * 函数 标签名称标识 
*/
rbk.domShell.prototype.name = function() {
	if (arguments.length > 0) {
		this.dom.setAttribute('name', arguments[0]);
	}
	return this.dom.getAttribute('name');
};
/**
 * 函数  标签id  get/set
 */
rbk.domShell.prototype.id = function() {
	if (arguments.length > 0) {
		this.dom.id = arguments[0];
	}
	return this.dom.id;
};
/**
 * 标签组件文本  get/set
 */
rbk.domShell.prototype.text = function() {
	var me = this;
	var textNode = null;
	for (var i = 0; i < me.dom.childNodes.length; i++) {
		var cNode = me.dom.childNodes[i];
		if (cNode.nodeType == 3) {
			textNode = cNode;
			break;
		}
	}
	if (textNode == null) {
		textNode = document.createTextNode('');
		me.dom.appendChild(textNode);
	}
	if (arguments.length > 0) {
		textNode.data = arguments[0];
	}
	return textNode.data.trim();
};
/**
 * value操作  get/set
 */
rbk.domShell.prototype.val = function() {
	if (arguments.length > 0) {
		this.dom.value = arguments[0];
	}
	return this.dom.value;
};
rbk.domShell.prototype.offset = function(){
	/*if (arguments.length > 0) {
		this.dom.value = arguments[0];
	}*/
	return {top: this.dom.offsetTop, left: this.dom.offsetLeft};
}

/**
 * 在子标签后面追加标签 返回dom数组
 * 1.字符串参数重载
 * 2.HTMLElement 参数重载
 */
rbk.domShell.prototype.appendChild = function(html) {
	var me = this;
	if (typeof(html) == 'string') {
		var nodes = rbk.strToHtmlDom(html);
		var newNodes = [];
		$.each(nodes, function(index, e) {
			newNodes.push(me.dom.appendChild(e));
			e.parentNode = me.dom;
		});
		return newNodes;
	} else if (html instanceof HTMLElement) {
		return me.dom.appendChild(html);
	}
};
/**
 * 在第一个子标签前面插入标签
 * 1.字符串参数重载
 * 2.HTMLElement 参数重载
 */
rbk.domShell.prototype.insertBefore = function(html) {
	var me = this;
	if (me.dom.childNodes.length == 0) {
		return me.appendChild(html);
	} else {
		if (typeof(html) == 'string') {
			var nodes = rbk.strToHtmlDom(html);
			nodes = nodes.reverse();
			var newNodes = [];
			$.each(nodes, function(index, e) {
				newNodes.push(me.dom.insertBefore(e, me.dom.firstChild));
			});
			return newNodes;
		} else if (html instanceof HTMLElement) {
			return me.dom.insertBefore(html, me.dom.firstChild);
		}
	}
};
/**
 * 删除自身节点
 */
rbk.domShell.prototype.removeSelf = function() {
	var me = this;
	if (rbk.isEmpty(me.dom) || !me.dom.parentNode) return;
	me.dom.parentNode.removeChild(me.dom);
};
/**
 * 情空所有子dom 
 */
rbk.domShell.prototype.removeAll = function() {
	while (this.dom.hasChildNodes()) {
		var tdom = this.dom.firstChild;
		var objRef = rbk.getObjRef(tdom);
		if (objRef != null) {
			objRef.removeAll();
			objRef.dispose();
			delete objRef;
		}
		this.dom.removeChild(tdom);
	}
}

rbk.domShell.prototype.preBindClick = null;
/**
 * 绑定点击事件
 * 
 * callback(cmp对象)
 * @param {fn} callback
 */
rbk.domShell.prototype.bindClick = function(callback) {
	var me = this;
	var medom = $(me.dom);
	if(typeof($(me.dom).attr("disabled"))=='undefined'){
		medom.on('touchstart',function(){
			medom.addClass("rbk-btnactive");
		})
		var newEvent = function() {
			if(medom.hasClass("rbk-btnactive")){
				medom.removeClass("rbk-btnactive");
				$.isFunction(callback) && callback(me);
			}
		}
		
		medom.on('tap touchend', newEvent);
		medom.on('touchmove',function(){
			medom.removeClass("rbk-btnactive");
		})
		
		if ($.isFunction(me.preBindClick)) {
			medom.on('tap touchend', me.preBindClick);
		}
		me.preBindClick = newEvent;
	}
};

/**
 * 清除资源节点
 */
rbk.domShell.prototype.dispose = function() {
	rbk.delObjRef(this.dom);
	$(this.dom).bind('tap', this.preBindClick);
	this.dom = null;
};
/*****************dom的壳对象*******end******/


/*****************rbk组件基类*******start******/
//基础组件构造函数
rbk.cmp = function() {};
//继承rbk.domShell
rbk.cmp.prototype = new rbk.domShell();

//继承domShell
//属性 组件类型名
rbk.cmp.prototype.ctype = 'cmp';
//属性 组件默认样式
rbk.cmp.prototype.defCls = '';
//组件默认标签
rbk.cmp.prototype.defHtmlTag = '<div class="rbk-cmp"></div>';
//等dom和ctype绑定后的初始化调用 
rbk.cmp.prototype.init = function() {

};

//函数 获取$的操作对象
rbk.cmp.prototype.get$Obj = function() {
	return $('', this.dom);
};
//函数 重新构造标签
rbk.cmp.prototype.reStructHtmlTag = function() {
	var me = this;
	var realClsStr = me.defCls;
	var roleName = me.getRoleName();
	if(!rbk.isEmpty(roleName) && !rbk.isEmpty(me.roles) && !rbk.isEmpty(me.roles[roleName])){
		realClsStr = me.roles[roleName];
	}
	var realClses = [];
	if (!rbk.isEmpty(realClsStr)) {
		realClses = realClsStr.split(/\s+/);
	}
	$.each(realClses, function(index, e) {
		me.dom.classList.remove(e);
		me.dom.classList.add(e);
	});
};

rbk.cmp.prototype.roles = {};
/**
 * 获得样式角色名称
 */
rbk.cmp.prototype.getRoleName = function(){
	return this.attr('rbk-role');
}

/**
 * 获得或设置是否为模板控件
 */
rbk.cmp.prototype.tpl = function(){
	var me = this;
	if(arguments.length>0){
		if(arguments[0]){
			me.attr('tpl','tpl');
		}else{
			me.attr('tpl',null);
		}
	}
	return me.attr('tpl') == 'tpl';
};
/**
 * 获得子组件
 * 
 * direct 节点是否直接属于当前控件节点 默认true 否则 获取所有控件
 * ctype 控件类型字符串  默认为空 所有cmp
 */
rbk.cmp.prototype.childCmps = function(direct,ctype) {
	if(rbk.isEmpty(direct)){
		direct = true;
	}
	var me = this;
	var childCmps = [];
	
	var getCldCmps = function(dom){
		$.each(dom.childNodes, function(index, e) {
			if (e.nodeType != 1) return;
			var cmp = rbk.domToCmp(e);
			if (cmp != null) {
				if(!rbk.isEmpty(ctype) && ctype!='cmp'){
					if(cmp.ctype == ctype){
						childCmps.push(cmp);
					}
				}else{
					childCmps.push(cmp);
				}
			}
			if(!direct) {
				getCldCmps(e);
			}
		});
	};
	getCldCmps(me.dom);
	return childCmps;
};
//向父级方向查找
rbk.cmp.prototype.up = function(selector) {
	var me = this;
	if (rbk.isEmpty(selector)) {
		selector = '*[class*="' + rbk.suffix + '"]';
	}
	if (rbk.isCtype(selector)) {
		var clsName = rbk.suffix + selector;
		selector = '*[class*="' + clsName + '"]'
	}
	var doms = $(selector);
	var parent = me.dom.parentNode;
	while (parent) {
		for (var j = 0; j < doms.length; j++) {
			if (parent == doms[j] && rbk.getDomCtype(parent) != null) {
				return rbk.domToCmp(parent);
			}
		}
		parent = parent.parentNode;
	}
	return null;
};
//向子级方向查找
rbk.cmp.prototype.down = function(selector) {
	return rbk.getDownCmp(selector, this.dom);
};
//向同一级后方向查找
rbk.cmp.prototype.next = function(selector) {
	var me = this;
	if (rbk.isEmpty(selector)) {
		selector = '*[class*="' + rbk.suffix + '"]';
	}
	if (rbk.isCtype(selector)) {
		var clsName = rbk.suffix + selector;
		selector = '*[class*="' + clsName + '"]'
	}
	var doms = $(selector);
	var next = me.dom.nextSibling;
	while (next) {
		if (next.nodeType == 1) {
			for (var j = 0; j < doms.length; j++) {
				if (next == doms[j] && rbk.getDomCtype(next) != null) {
					return rbk.domToCmp(next);
				}
			}
		}
		next = next.nextSibling;
	}
	return null;
};
//向同一级前方向查找
rbk.cmp.prototype.pre = function(selector) {
	var me = this;
	if (rbk.isEmpty(selector)) {
		selector = '*[class*="' + rbk.suffix + '"]';
	}
	if (rbk.isCtype(selector)) {
		var clsName = rbk.suffix + selector;
		selector = '*[class*="' + clsName + '"]'
	}
	var doms = $(selector);
	var pre = me.dom.previousSibling;
	while (pre) {
		if (pre.nodeType == 1) {
			for (var j = 0; j < doms.length; j++) {
				if (pre == doms[j] && rbk.getDomCtype(pre) != null) {
					return rbk.domToCmp(pre);
				}
			}
		}
		pre = pre.previousSibling;
	}
	return null;
};

//添加组件 cmp: 组件标签字符串 支持多个标签
//返回组件的数组对象
rbk.cmp.prototype.add = function(cmpStr) {
	var me = this;
	var doms = me.appendChild(cmpStr);
	var cmps = [];
	$.each(doms, function(index, dom) {
		var cmp = rbk.domToCmp(dom);
		if (cmp == null) return;
		cmp.reStructHtmlTag();
		cmps.push(cmp);
	});
	return cmps;
}
rbk.cmp.prototype.addBefore = function(cmpStr) {
	var me = this;
	var doms = me.insertBefore(cmpStr);
	var cmps = [];
	$.each(doms, function(index, dom) {
		var cmp = rbk.domToCmp(dom);
		if (cmp == null) return;
		cmp.reStructHtmlTag();
		cmps.push(cmp);
	});
	return cmps;
}

//控件是否禁用
rbk.cmp.prototype.disabled = function(){
	var me = this;
	if(arguments.length>0){
		if(arguments[0]){
			me.setClass('rbk-disabled');
		}else{
			me.removeClass('rbk-disabled');
		}
	}
	return me.existClass('rbk-disabled');
}

//清除资源
rbk.cmp.prototype.dispose = function() {
	this.ctype = '';
	this.raw = '';
	//清除基类资源
	rbk.domShell.prototype.dispose.call(this);
};
/*****************rbk继承组件类*******end******/



/*****************私有方法  不可见******start******/
(function initPrivFunc() {
	rbk.init = function() {
		$.init();
		
		//重构组件样式
		rbk.reStructHtmlTag();
		
		//重构节点跳转链接
		rbk.restructDomNavUrl();
	};
	rbk.createCmpObj = function(ctype) {
		try {
			var cmp = eval(rbk.format('new rbk.{0}()', ctype));
			cmp.ctype = ctype;
			return cmp;
		} catch (e) {
			throw rbk.format('创建组件[{0}]对象异常:{1}', ctype, e);
		}
	};
	//把指定组件标记的dom转化成组件对象
	rbk.domToCmp = function(dom, ctype) {
		if (rbk.isEmpty(ctype)) {
			ctype = rbk.getDomCtype(dom);
		}
		if (rbk.isEmpty(ctype)) return null;
		var objRef = rbk.getObjRef(dom);
		if (!rbk.isEmpty(objRef)) {
			return objRef;
		}
		var cmp = rbk.createCmpObj(ctype);
		cmp.dom = dom;
		cmp.init();

		//如果是模板不要内存引用
		if(!cmp.tpl()){
			rbk.setObjRef(cmp);
		}

		return cmp;
	};
	//dom转化成domShell
	rbk.domToShell = function(dom) {
		var obj = rbk.getObjRef(dom);
		if (!rbk.isEmpty(obj)) {
			//存在内存映射后  cmp和shell相互变化的问题
			return obj;
		}
		obj = rbk.domToCmp(dom);
		if(obj) return obj;
		obj = new rbk.domShell(dom);
		rbk.setObjRef(obj);
		return obj;
	};
	//获得dom的ctype名字
	rbk.getDomCtype = function(dom) {
		var clsList = dom.classList;
		for (var i = 0; i < clsList.length; i++) {
			var cls = clsList[i];
			if (cls.indexOf(rbk.suffix) < 0) continue;
			var ctype = cls.substr(rbk.suffix.length, cls.length - rbk.suffix.length);
			if (rbk.isCtype(ctype)) {
				return ctype;
			}
		}
		return null;
	};
	//重构组件标签
	rbk.reStructHtmlTag = function(dom){
		var allDoms = $('*[class*="' + rbk.suffix + '"]',dom);
		for (var i = 0; i < allDoms.length; i++) {
			var dom = allDoms[i];
			var cmp = rbk.domToCmp(dom);
			if (cmp == null) continue;
			cmp.reStructHtmlTag();
		}
	};
	//重构节点的导航  如果dom未指定 就是全局查找替换
	rbk.restructDomNavUrl = function(dom){
		var allDoms = $('*[navurl]',dom);
		$.each(allDoms,function(index,e){
			var domShell = rbk.domToShell(e);
			var url = domShell.attr('navurl');
			if(rbk.isEmpty(url)) return;
			//排除是模板的标签
			if(domShell.attr('tpl') == 'tpl') return;
			//把导航转化成事件后  删除导航标识
			domShell.attr('navurl',null);
			$(domShell.dom).bind('tap',function(){
				var view = new rbk.view();
				view.open(url);
			});
		});
	};
	//是否为cType名称
	rbk.isCtype = function(name) {
		if (rbk.isEmpty(name)) return false;
		try {
			if ($.isFunction(eval(rbk.format('rbk.{0}', name)))) return true;
			return false;
		} catch (e) {
			return false;
		}
	};
	//************组件内存管理*****start************
	rbk.cmpMemonry = {};
	//设置dom对象内存引用
	rbk.setObjRef = function(obj) {
		var guid = rbk.guid().toLowerCase();
		obj.dom.setAttribute('docuniqueid', guid);
		rbk.cmpMemonry[guid] = obj;
	};
	//获取dom对象内存引用
	rbk.getObjRef = function(dom) {
		if (dom.nodeType != 1) return null;
		var guid = dom.getAttribute('docuniqueid');
		if (rbk.isEmpty(guid)) return null;
		return rbk.cmpMemonry[guid];
	};
	//删除dom对象内存引用
	rbk.delObjRef = function(dom) {
		if (dom.nodeType != 1 || dom == null) return;
		var guid = dom.getAttribute('docuniqueid');
		dom.removeAttribute('docuniqueid');
		if (rbk.isEmpty(guid)) return;
		rbk.cmpMemonry[guid] = null;
	};
	//清除指定范围内的对象内存引用
	rbk.clearAllObjRef = function(dom){
		var allDoms = $('*[docuniqueid]',dom);
		for (var i = 0; i < allDoms.length; i++) {
			rbk.delObjRef(allDoms[i]);
		}
	};
	//************组件内存管理*****end************
	rbk.strToHtmlDom = function(htmlStr) {
		var div = document.createElement('div');
		div.innerHTML = htmlStr;
		delete div;
		return rbk.colToArr(div.childNodes);
	};
	rbk.getDownCmp = function(selector, parentDom) {
		if (rbk.isEmpty(selector)) {
			selector = '*[class*="' + rbk.suffix + '"]';
		}
		if (rbk.isCtype(selector)) {
			var ctype = selector;
			var clsName = rbk.suffix + ctype;
			var doms = $('*[class*="' + clsName + '"]', parentDom);
			if (doms.length == 0) return null;
			return rbk.domToCmp(doms[0], ctype);
		} else {
			var doms = $(selector, parentDom);
			if (doms.length == 0) return null;
			for (var i = 0; i < doms.length; i++) {
				var cmp = rbk.domToCmp(doms[i]);
				if (cmp != null) return cmp;
			}
			return null;
		}
	};
})();
/*****************私有方法 不可见*******end******/
/**
 * Popovers
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} name
 * @param {type} undefined
 * @returns {undefined}
 */
(function($) {

	var CLASS_POPOVER = 'rbk-popover';
	var CLASS_POPOVER_ARROW = 'rbk-popover-arrow';
	var CLASS_ACTION_POPOVER = 'rbk-popover-action';
	var CLASS_BACKDROP = 'rbk-backdrop';
	var CLASS_BAR_POPOVER = 'rbk-bar-popover';
	var CLASS_BAR_BACKDROP = 'rbk-bar-backdrop';
	var CLASS_ACTION_BACKDROP = 'rbk-backdrop-action';
	var CLASS_ACTIVE = 'rbk-active';
	var CLASS_BOTTOM = 'rbk-bottom';
	
	var handle = function(event, target) {
		if (target.tagName === 'A' && target.hash) {
			$.targets._popover = document.getElementById(target.hash.replace('#', ''));
			if ($.targets._popover && $.targets._popover.classList.contains(CLASS_POPOVER)) {
				return target;
			} else {
				$.targets._popover = null;
			}
		}
		return false;
	};

	var fixedPopoverScroll = function(isPopoverScroll) {
	};
	var onPopoverShown = function(e) {
		this.removeEventListener('webkitTransitionEnd', onPopoverShown);
		this.addEventListener('touchmove', $.preventDefault);
	}
	var onPopoverHidden = function(e) {
		setStyle(this,'none');
		this.removeEventListener('webkitTransitionEnd', onPopoverHidden);
		this.removeEventListener('touchmove', $.preventDefault);
		fixedPopoverScroll(false);
	};

	var backdrop = (function() {
		var element = document.createElement('div');
		element.classList.add(CLASS_BACKDROP);
		element.addEventListener('touchmove', $.preventDefault);
		element.addEventListener('tap', function(e) {
			var popover = $.targets._popover;
			if (popover) {
				popover.addEventListener('webkitTransitionEnd', onPopoverHidden);
				popover.classList.remove(CLASS_ACTIVE);
				removeBackdrop(popover);
				document.body.setAttribute('style', ''); //webkitTransitionEnd有时候不触发？
			}
		});

		return element;
	}());
	var removeBackdrop = function(popover) {
		backdrop.setAttribute('style', 'opacity:0');
		$.targets.popover = $.targets._popover = null; //reset
		setTimeout(function() {
			if (!popover.classList.contains(CLASS_ACTIVE) && backdrop.parentNode && backdrop.parentNode === document.body) {
				document.body.removeChild(backdrop);
			}
		}, 350);
	};
	window.addEventListener('tap', function(e) {
		if (!$.targets.popover) {
			return;
		}
		var toggle = false;
		var target = e.target;
		for (; target && target !== document; target = target.parentNode) {
			if (target === $.targets.popover) {
				toggle = true;
			}
		}
		if (toggle) {
			e.detail.gesture.preventDefault(); //fixed hashchange
			togglePopover($.targets._popover, $.targets.popover);
		}

	});

	var togglePopover = function(popover, anchor) {
		//remove一遍，以免来回快速切换，导致webkitTransitionEnd不触发，无法remove
		popover.removeEventListener('webkitTransitionEnd', onPopoverShown);
		popover.removeEventListener('webkitTransitionEnd', onPopoverHidden);
		backdrop.classList.remove(CLASS_BAR_BACKDROP);
		backdrop.classList.remove(CLASS_ACTION_BACKDROP);
		var _popover = document.querySelector('.rbk-popover.rbk-active');
		if (_popover) {
			_popover.addEventListener('webkitTransitionEnd', onPopoverHidden);
			_popover.classList.remove(CLASS_ACTIVE);
			//同一个弹出则直接返回，解决同一个popover的toggle
			if (popover === _popover) {
				removeBackdrop(_popover);
				return;
			}
		}
		var isActionSheet = false;
		if (popover.classList.contains(CLASS_BAR_POPOVER) || popover.classList.contains(CLASS_ACTION_POPOVER)) { //navBar
			if (popover.classList.contains(CLASS_ACTION_POPOVER)) {
				isActionSheet = true;
				backdrop.classList.add(CLASS_ACTION_BACKDROP);
			} else {
				backdrop.classList.add(CLASS_BAR_BACKDROP);
			}
		}
		setStyle(popover, 'block'); //actionsheet transform
		popover.offsetHeight;
		popover.classList.add(CLASS_ACTIVE);
		backdrop.setAttribute('style', '');
		document.body.appendChild(backdrop);
		fixedPopoverScroll(true);
		calPosition(popover, anchor, isActionSheet); //position
		backdrop.classList.add(CLASS_ACTIVE);
		popover.addEventListener('webkitTransitionEnd', onPopoverShown);
	};
	var setStyle = function(popover, display, top, left) {
		var style = popover.style;
		if (typeof display !== 'undefined')
			style.display = display;
		if (typeof top !== 'undefined')
			style.top = top + 'px';
		if (typeof left !== 'undefined')
			style.left = left + 'px';
	};
	var calPosition = function(popover, anchor, isActionSheet) {
		if (!popover || !anchor) {
			return;
		}
		var wWidth = window.innerWidth;
		var wHeight = window.innerHeight;

		var pWidth = popover.offsetWidth;
		var pHeight = popover.offsetHeight;
		if (isActionSheet) { //actionsheet
			setStyle(popover, 'block', (wHeight - pHeight + window.pageYOffset), (wWidth - pWidth) / 2)
			return;
		}
		var aWidth = anchor.offsetWidth;
		var aHeight = anchor.offsetHeight;
		var offset = $.offset(anchor);

		var arrow = popover.querySelector('.' + CLASS_POPOVER_ARROW);
		if (!arrow) {
			arrow = document.createElement('div');
			arrow.className = CLASS_POPOVER_ARROW;
			popover.appendChild(arrow);
		}
		var arrowSize = arrow && arrow.offsetWidth / 2 || 0;



		var pTop = 0;
		var pLeft = 0;
		var diff = 0;
		var arrowLeft = 0;
		var defaultPadding = popover.classList.contains(CLASS_ACTION_POPOVER) ? 0 : 5;

		var position = 'top';
		if ((pHeight + arrowSize) < (offset.top - window.pageYOffset)) { //top
			pTop = offset.top - pHeight - arrowSize;
		} else if ((pHeight + arrowSize) < (wHeight - (offset.top - window.pageYOffset) - aHeight)) { //bottom
			position = 'bottom';
			pTop = offset.top + aHeight + arrowSize;
		} else { //middle
			position = 'middle';
			pTop = Math.max((wHeight - pHeight) / 2 + window.pageYOffset, 0);
			pLeft = Math.max((wWidth - pWidth) / 2 + window.pageXOffset, 0);
		}
		if (position === 'top' || position === 'bottom') {
			pLeft = aWidth / 2 + offset.left - pWidth / 2;
			diff = pLeft;
			if (pLeft < defaultPadding) pLeft = defaultPadding;
			if (pLeft + pWidth > wWidth) pLeft = wWidth - pWidth - defaultPadding;

			if (arrow) {
				if (position === 'top') {
					arrow.classList.add(CLASS_BOTTOM);
				} else {
					arrow.classList.remove(CLASS_BOTTOM);
				}
				diff = diff - pLeft;
				arrowLeft = (pWidth / 2 - arrowSize / 2 + diff);
				arrowLeft = Math.max(Math.min(arrowLeft, pWidth - arrowSize * 2 - 6), 6);
				arrow.setAttribute('style', 'left:' + arrowLeft + 'px');
			}
		} else if (position === 'middle') {
			arrow.setAttribute('style', 'display:none');
		}
		setStyle(popover, 'block', pTop, pLeft);
	};

	$.createMask = function(callback) {
		var element = document.createElement('div');
		element.classList.add(CLASS_BACKDROP);
		element.addEventListener('touchmove', $.preventDefault);
		element.addEventListener('tap', function() {
			mask.close();
		});
		var mask = [element];
		mask._show = false;
		mask.show = function() {
			mask._show = true;
			element.setAttribute('style', 'opacity:1');
			document.body.appendChild(element);
			return mask;
		};
		mask._remove = function() {
			if (mask._show) {
				mask._show = false;
				element.setAttribute('style', 'opacity:0');
				setTimeout(function() {
					document.body.removeChild(element);
				}, 350);
			}
			return mask;
		};
		mask.close = function() {
			if (callback) {
				if (callback() !== false) {
					mask._remove();
				}
			} else {
				mask._remove();
			}
		};
		return mask;
	};
	$.fn.popover = function() {
		var args = arguments;
		this.each(function() {
			$.targets._popover = this;
			if (args[0] === 'show' || args[0] === 'hide' || args[0] === 'toggle') {
				togglePopover(this, args[1]);
			}
		});
	};
})(jQuery);
//tap事件定义
(function(){
	$(document).on("touchstart", function(e) {
	    var $target = $(e.target);
	    if(!$target.hasClass("disable") && typeof($target.attr("disabled"))=="undefined") $target.data("isMoved", 0);
	});
	$(document).on("touchmove", function(e) {
	    var $target = $(e.target);
	    if(!$target.hasClass("disable") && typeof($target.attr("disabled"))=="undefined") $target.data("isMoved", 1);
	});
	$(document).on("touchend", function(e) {
	    var $target = $(e.target);
	    if(!$target.hasClass("disable") && typeof($target.attr("disabled"))=="undefined" && $target.data("isMoved") == 0) $target.trigger("tap");
	});
})(jQuery);
