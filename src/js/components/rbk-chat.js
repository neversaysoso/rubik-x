window.tobottom = function(){
	myScroll.refresh();
	myScroll.scrollTo(0, myScroll.maxScrollY, 0)
}
//聊天窗口
rbk.chat = function() {};

//继承cmp
rbk.chat.prototype = new rbk.cmp();

//继承布局绑定接口
rbk.implInterface(rbk.chat, iBindLayoutCmp);

rbk.chat.prototype.defCls = '';

rbk.chat.prototype.defHtmlTag = '<div class="rbk-chat"></div>';

rbk.chat.prototype.reStructHtmlTag = function() {
	var minh = $(window).height()-59;
	if(rbk.isNotEmpty($(this.dom).html())){
		var html = $(this.dom).html();
		$(this.dom).html('');
		this.add('<div class="rbk-scroll" style="height:'+minh+'px;"><div class="chat-scroll rbk-cmp"><div class="preAddMsg rbk-cmp">'+html+'</div></div></div>');
	}else{
		this.add('<div class="rbk-scroll" style="height:'+minh+'px;"><div class="chat-scroll rbk-cmp"><div class="preAddMsg rbk-cmp"></div></div></div>');
	}
	this.add('<div class="rbk-chatform"></div>');
	setTimeout(function(){
		$('.chat-scroll').css('padding-bottom', 20);
		tobottom();
	})
	setTimeout(function(){
		tobottom();
	},500)
	rbk.cmp.prototype.reStructHtmlTag.call(this);
}

//必须放回html字符串
rbk.chat.prototype.itemRender = function(temTplStr, itemJson) {
	return rbk.format(temTplStr, itemJson);
};

//设置列表像
rbk.chat.prototype.doLayout = function(eArr) {
	var me = this;
	
	if (!$.isArray(eArr)) {
		throw 'eArr必须是数组对象';
	}
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(childCmps[i].ctype != 'chatitem' || !childCmps[i].tpl() || !rbk.hasInterface(childCmps[i],iTpl)) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.chatitem.prototype.defTplTag;
	} else {
		itemTplStr = itemTpl.dom.outerHTML.toString();
		itemTpl.removeSelf();
		itemTpl.dispose();
		delete itemTpl;
	}
	$.each(eArr, function(index, e) {
		var oldCmp = null;
		var iCmp = rbk.domToCmp(me.down('scroll').down('cmp').down('cmp').appendChild(me.itemRender(itemTplStr, e))[0], 'chatitem');
		if(!rbk.isEmpty( e.id)){
			oldCmp = me.down('#' + e.id);
		}
		if(!rbk.isEmpty(e.type)&&e.type=='self'){
			iCmp.setClass('rbk-chatself');
		}
		if(!rbk.isEmpty(e.type)&&e.type=='system'){
			iCmp.setClass('rbk-chatsystem');
		}
		if(!rbk.isEmpty(e.imgurl)){
			$(iCmp.dom).find('.rbk-chattext').html('<img src="'+e.imgurl+'">');
			setTimeout(function(){
				tobottom();
			},50)
		}
		if(rbk.isEmpty(e.time)){
			$(iCmp.dom).find('.rbk-chattime').hide();
		}
		
		if(oldCmp != null) return;
		
		iCmp.tpl(false);
		if(!rbk.isEmpty(e.id)){
			iCmp.id(e.id);
		}
		iCmp.reStructHtmlTag();
		iCmp.raw = e;
	});
	tobottom();
};

//设置列表像
rbk.chat.prototype.doLayoutBefore = function(eArr) {
	var me = this;
	
	if (!$.isArray(eArr)) {
		throw 'eArr必须是数组对象';
	}
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(childCmps[i].ctype != 'chatitem' || !childCmps[i].tpl() || !rbk.hasInterface(childCmps[i],iTpl)) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.chatitem.prototype.defTplTag;
	} else {
		itemTplStr = itemTpl.dom.outerHTML.toString();
		itemTpl.removeSelf();
		itemTpl.dispose();
		delete itemTpl;
	}
	eArr = eArr.reverse();
	$.each(eArr, function(index, e) {
		var oldCmp = null;
		var iCmp = rbk.domToCmp(me.down('scroll').down('cmp').down('cmp').insertBefore(me.itemRender(itemTplStr, e))[0], 'chatitem');
		if(!rbk.isEmpty( e.id)){
			oldCmp = me.down('#' + e.id);
		}
		if(!rbk.isEmpty(e.type)&&e.type=='self'){
			iCmp.setClass('rbk-chatself');
		}
		if(!rbk.isEmpty(e.type)&&e.type=='system'){
			iCmp.setClass('rbk-chatsystem');
		}
		if(!rbk.isEmpty(e.imgurl)){
			$(iCmp.dom).find('.rbk-chattext').html('<img src="'+e.imgurl+'">');
			setTimeout(function(){
				myScroll.refresh();
			},50)
		}
		if(rbk.isEmpty(e.time)){
			$(iCmp.dom).find('.rbk-chattime').hide();
		}
		
		if(oldCmp != null) return;
		
		iCmp.tpl(false);
		if(!rbk.isEmpty(e.id)){
			iCmp.id(e.id);
		}
		iCmp.reStructHtmlTag();
		iCmp.raw = e;
	});
	myScroll.refresh();
};

rbk.chat.prototype.addMsg = function(e){
	var isjson = typeof(e) == "object" && Object.prototype.toString.call(e).toLowerCase() == "[object object]" && !e.length;
	if(!isjson){
    	throw 'dataJson必须是对象';
    }
	var oldCmp = null;
	var me = this;
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(childCmps[i].ctype != 'chatitem' || !childCmps[i].tpl() || !rbk.hasInterface(childCmps[i],iTpl)) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.chatitem.prototype.defTplTag;
	} else {
		itemTplStr = itemTpl.dom.outerHTML.toString();
		itemTpl.removeSelf();
		itemTpl.dispose();
		delete itemTpl;
	}
	var iCmp = rbk.domToCmp(me.down('scroll').down('cmp').down('cmp').appendChild(me.itemRender(itemTplStr, e))[0], 'chatitem');
	if(!rbk.isEmpty(e.id)){
		oldCmp = me.down('#' + e.id);
	}
	if(!rbk.isEmpty(e.type)&&e.type=='self'){
		iCmp.setClass('rbk-chatself');
	}
	if(!rbk.isEmpty(e.type)&&e.type=='system'){
		iCmp.setClass('rbk-chatsystem');
	}
	if(!rbk.isEmpty(e.imgurl)){
		$(iCmp.dom).find('.rbk-chattext').html('<img src="'+e.imgurl+'">');
		setTimeout(function(){
			tobottom();
		},500)
	}
	if(rbk.isEmpty(e.time)){
		$(iCmp.dom).find('.rbk-chattime').hide();
	}
	if(oldCmp != null) return;
	iCmp.tpl(false);
	if(!rbk.isEmpty(e.id)){
		iCmp.id(e.id);
	}
	iCmp.reStructHtmlTag();
	iCmp.raw = e;
	tobottom();
}

rbk.chat.prototype.addBeforeMsg = function(e){
	var isjson = typeof(e) == "object" && Object.prototype.toString.call(e).toLowerCase() == "[object object]" && !e.length;
	if(!isjson){
    	throw 'dataJson必须是对象';
    }
	var oldCmp = null;
	var me = this;
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(childCmps[i].ctype != 'chatitem' || !childCmps[i].tpl() || !rbk.hasInterface(childCmps[i],iTpl)) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.chatitem.prototype.defTplTag;
	} else {
		itemTplStr = itemTpl.dom.outerHTML.toString();
		itemTpl.removeSelf();
		itemTpl.dispose();
		delete itemTpl;
	}
	var iCmp = rbk.domToCmp(me.down('scroll').down('cmp').down('cmp').insertBefore(me.itemRender(itemTplStr, e))[0], 'chatitem');
	if(!rbk.isEmpty(e.id)){
		oldCmp = me.down('#' + e.id);
	}
	if(!rbk.isEmpty(e.type)&&e.type=='self'){
		iCmp.setClass('rbk-chatself');
	}
	if(!rbk.isEmpty(e.type)&&e.type=='system'){
		iCmp.setClass('rbk-chatsystem');
	}
	if(!rbk.isEmpty(e.imgurl)){
		$(iCmp.dom).find('.rbk-chattext').html('<img src="'+e.imgurl+'">');
		setTimeout(function(){
			myScroll.refresh();
		},500)
	}
	if(rbk.isEmpty(e.time)){
		$(iCmp.dom).find('.rbk-chattime').hide();
	}
	if(oldCmp != null) return;
	iCmp.tpl(false);
	if(!rbk.isEmpty(e.id)){
		iCmp.id(e.id);
	}
	iCmp.reStructHtmlTag();
	iCmp.raw = e;
	myScroll.refresh();
}

rbk.chat.prototype.bindMsgFunc = function(name,imgurl,fn){
	var me = this;
	var formdom = me.down('chatform').dom;
	$(formdom).find('.rbk-pass').bind('click',function(){
		var value = $(formdom).find('input[type=text]').val();
		if(value==''||$.trim(value)==''){
			alert('请输入内容');
			return;
		};
		me.addMsg({
			type:'self',
			name:name,
			headImg:imgurl,
			text:value
		});
		if ($.isFunction(fn(value))){
			fn.call(fn(value));
		}
		$(formdom).find('input[type=text]').val('');
	})
}
rbk.chat.prototype.bindOffeFunc = function(offername,offerimg,id,fn){
	var me = this;
	var formdom = me.down('chatform').dom;
	$(formdom).find('.rbk-chatformbottom').append('<div id="'+id+'" class="rbk-chatoffer"><img src="'+offerimg+'"><div>'+offername+'</div><div>')
	if ($.isFunction(fn)){
		$('#'+id).bind('click',function(){
			fn.call(fn);
		})
	}
}
rbk.chat.prototype.preMsgBindClickFunc = function(itemCmp) {};
rbk.chat.prototype.preHeadBindClickFunc = function(itemCmp) {};

rbk.chat.prototype.bindMsgClick = function(clickFunc) {
	if (!$.isFunction(clickFunc)) return;
	this.preMsgBindClickFunc = clickFunc;
};
rbk.chat.prototype.bindHeadClick = function(clickFunc) {
	if (!$.isFunction(clickFunc)) return;
	this.preHeadBindClickFunc = clickFunc;
}
rbk.chat.prototype.title = function(titleMsg){
	document.title = titleMsg;
}
