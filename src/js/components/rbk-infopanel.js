rbk.infopanel = function(){};

//继承cmp
rbk.infopanel.prototype = new rbk.cmp();

rbk.infopanel.prototype.defCls = ''; 

rbk.infopanel.prototype.roles = {
	color:'rbk-infopanelcolor'
};
//组件默认标签
rbk.infopanel.prototype.defHtmlTag = '<div class="rbk-infopanel"></div>';
				
rbk.infopanel.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	
};