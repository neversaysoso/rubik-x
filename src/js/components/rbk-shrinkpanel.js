//图片上传工具
rbk.shrinkpanel = function(){};

//继承cmp
rbk.shrinkpanel.prototype = new rbk.cmp();

rbk.shrinkpanel.prototype.defCls = 'rbk-yyxz rbk-list rbk-table-view rbk-card'; 

rbk.shrinkpanel.prototype.roles = {
	noshrink:'rbk-yyxz rbk-list rbk-table-view rbk-card noshrink'
};


//组件默认标签
rbk.shrinkpanel.prototype.defHtmlTag = '<div class="rbk-shrinkpanel"></div>';
				
rbk.shrinkpanel.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	if(rbk.isNotEmpty($(me.dom).attr('text'))){
		if($(me.dom).hasClass('noshrink')){
			me.add('<div class="rbk-subtitle"><span class="icon-book1"></span>'+$(me.dom).attr('text')+'</div>')
		}else{
			me.add('<div class="rbk-subtitle">'+$(me.dom).attr('text')+'<button class="rbk-btn rbk-pull-right rbk-btn-yyxz" rbk-role="mini">展开</button></div>')
		}
		
	}else{
		throw '找不到title名称';
	}
	if(rbk.isNotEmpty($(me.dom).find('.rbk-panelcontent').html())){
		var html = $(me.dom).find('.rbk-panelcontent').html();
		$(me.dom).find('.rbk-panelcontent').remove();
		me.add('<div class="rbk-yymodelinfo rbk-listitem"><div>'+html+'</div></div>');
	}else{
		throw 'panel无内容';
	}
	$(me.dom).find('.rbk-btn-yyxz').on('tap',function(){
		$(this).toggleClass('rbk-active');
		$(this).text($(this).text() == '展开' ? '收起' : '展开');
		$(me.dom).find('.rbk-listitem').toggleClass('rbk-yymodelinfo');
	})
};