//子标题
rbk.subtitle = function(){};

//继承cmp
rbk.subtitle.prototype = new rbk.cmp();

rbk.subtitle.prototype.defCls = 'rbk-table-view-divider'; 

rbk.subtitle.prototype.defHtmlTag = '<div class="rbk-subtitle"></div>';

rbk.subtitle.prototype.roles = {
	leftcolor:'rbk-table-view-divider rbk-leftcolor'
};

rbk.subtitle.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	if($(me.dom).hasClass('rbk-leftcolor')){
		if($(me.dom).html()!=''){
			var h = $(me.dom).html();
			$(me.dom).html('<span class="rbk-subspan">'+h+'</span>');
		}
	}
};