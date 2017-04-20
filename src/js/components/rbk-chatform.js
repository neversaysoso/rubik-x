//列表项
rbk.chatform = function() {};

//继承
rbk.chatform.prototype = new rbk.cmp();

/**继承iTpl模板接口*/
rbk.implInterface(rbk.chatform, iTpl);

rbk.chatform.prototype.defCls = '';

rbk.chatform.prototype.defHtmlTag = '<div class="rbk-chatform"></div>';

rbk.chatform.prototype.defTplTag = '<div class="rbk-chatform"></div>';

rbk.chatform.prototype.reStructHtmlTag = function() {
	var me = this;
	me.add('<div class="rbk-chatformtext"><input type="text"><div class="rbk-btn rbk-pass">发送</div><div class="rbk-btn rbk-bsk"></div></div>');
	me.add('<div class="rbk-chatformbottom"></div>');
	var mybtm = $(me.dom).find('.rbk-chatformbottom');
	$(me.dom).find('.rbk-bsk').bind('click',function(){
		if(mybtm.css('display')=='none'){
			mybtm.show();
			var h = $('.rbk-chatform').height();
			$('.chat-scroll').css('padding-bottom', h-39);
			tobottom();
		}else{
			mybtm.hide();
			$('.chat-scroll').css('padding-bottom', 20);
			tobottom();
		}
	})
	$(me.dom).find('input[type=text]').focus(function(){
		mybtm.hide();
		$('.chat-scroll').css('padding-bottom', 20);
		tobottom();
		$('.rbk-chatform').css('position','relative');
	});
	$(me.dom).find('input[type=text]').blur(function(){
		$('.chat-scroll').css('padding-bottom', 20);
		tobottom();
		$('.rbk-chatform').css('position','fixed');
	})
	
}