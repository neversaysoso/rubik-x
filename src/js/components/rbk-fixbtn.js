rbk.fixbtn = function(){};

//继承cmp
rbk.fixbtn.prototype = new rbk.cmp();

rbk.fixbtn.prototype.defCls = ''; 

//组件默认标签
rbk.fixbtn.prototype.defHtmlTag = '<div class="rbk-fixbtn"></div>';

/**样式角色*/
rbk.fixbtn.prototype.roles = {
	payfix:'rbk-payfix'
};

rbk.fixbtn.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	setTimeout(function(){
		var h = $(me.dom).height();
		$(me.dom).after("<div class='r-fixafter'></div>");
		$(".r-fixafter").css("height",h);
		if(rbk.isNotEmpty($('.rbk-shrinkpanel'))){
			var wh = $(window).height();
			if($('.rbk-titlebar').css('display')=='none'){
				$('.rbk-shrinkpanel .rbk-yymodelinfo>div').css('overflow','auto').css('max-height',wh-103-h);
			}else{
				$('.rbk-shrinkpanel .rbk-yymodelinfo>div').css('overflow','auto').css('max-height',wh-147-h);
			}
			
		}
	})
};