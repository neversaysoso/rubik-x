//内容容器控件
rbk.content = function(){};

//继承cmp
rbk.content.prototype = new rbk.cmp();

rbk.content.prototype.defCls = 'rbk-content  rbk-content-padded'; 

rbk.content.prototype.defHtmlTag = '<div class="rbk-content"></div>';

rbk.content.prototype.reStructHtmlTag = function() {
	var me = this;
	if(!!this.attr("tpl")){
		me.attr('tpl',null);
	}
};
rbk.content.prototype.changeBk = function(color){
	$('body').css("background",color);
}
