rbk.star = function(){};

//继承cmp
rbk.star.prototype = new rbk.cmp();

rbk.star.prototype.defCls = ''; 

//组件默认标签
rbk.star.prototype.defHtmlTag = '<div class="rbk-star"></div>';

rbk.star.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	if(rbk.isNotEmpty(me.attr('label'))&&rbk.isNotEmpty(me.attr('max'))){
		var label = me.attr('label');
		var max = me.attr('max');
		me.add('<label>'+label+'</label>');
		var h = '<div class="rbk-starlist">';
		for(var i = 0;i<max;i++){
			h += '<span class="icon-star star'+i+'" v="'+i+'"></span>'
		}
		h += '</div>'
		me.add(h);
		$(me.dom).on('tap','.icon-star',function(){
			var st = parseInt($(this).attr('v'))+1;
			$(me.dom).attr('step',st);
		})
	}
};
rbk.star.prototype.getVal = function(){
	var me = this;
	return me.attr('step');
}
