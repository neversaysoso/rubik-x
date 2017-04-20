rbk.actsheet = function(){};

//继承cmp
rbk.actsheet.prototype = new rbk.cmp();

rbk.actsheet.prototype.defCls = 'rbk-popover rbk-popover-action rbk-popover-bottom'; 

rbk.actsheet.prototype.defHtmlTag = '<div class="rbk-actsheet"></div>';

rbk.actsheet.prototype.roles = {
	fromtop:'rbk-popover rbk-popover-action rbk-popover-top'
};

rbk.actsheet.prototype.reStructHtmlTag = function() {
	var me = this;
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	if(this.up('content')){
		throw 'actsheet不能放在content里面';
	}
	var clsDoms = $('.rbk-table-view > .rbk-table-view-cell',this.dom);
	$.each(clsDoms,function(index,e){
		rbk.domToShell(e).bindClick(function(shell){
			me.switch();
			if(!$.isFunction(me.selCallback)) return;
			me.selCallback(shell);
		});
		$(e).bind('touchstart',function(){
			$(e).addClass('rbk-active');
		})
		$(e).bind('touchend',function(){
			$(e).removeClass('rbk-active');
		})
	});
};

//选择回调
rbk.actsheet.prototype.selCallback = function(shell){};

//actsheet显示或隐藏切换
rbk.actsheet.prototype.switch = function(){
	$(this.dom).popover('toggle');
}
