//列表项
rbk.chatitem = function() {};

//继承
rbk.chatitem.prototype = new rbk.cmp();

/**继承iTpl模板接口*/
rbk.implInterface(rbk.chatitem, iTpl);

rbk.chatitem.prototype.defCls = '';

rbk.chatitem.prototype.defHtmlTag = '<div class="rbk-chatitem"></div>';

rbk.chatitem.prototype.defTplTag = '<div class="rbk-chatitem">'+
				'<div class="rbk-chattime"><div><span>{time}</span></div></div>'+
				'<img class="rbk-chathead" src="{headImg}">'+
				'<div class="rbk-chatname">{name}</div>'+
				'<div class="rbk-chattext">{text}</div></div>';

rbk.chatitem.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	
	chat = rbk.domToCmp(me.dom.parentNode.parentNode.parentNode.parentNode,'chat');
	
	$(me.dom).find('.rbk-chattext').on('tap',function(){
		if(!rbk.isEmpty(chat.preMsgBindClickFunc)){
			chat.preMsgBindClickFunc(me);
		}
	});
	
	$(me.dom).find('.rbk-chathead').on('tap',function(){
		if(!rbk.isEmpty(chat.preHeadBindClickFunc)){
			chat.preHeadBindClickFunc(me);
		}
	});
}