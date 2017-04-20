rbk.openbox = function(){};

//继承cmp
rbk.openbox.prototype = new rbk.cmp();

rbk.openbox.prototype.defCls = ''; 

//组件默认标签
rbk.openbox.prototype.defHtmlTag = '<div class="rbk-openbox"></div>';

/**样式角色*/
rbk.openbox.prototype.roles = {
	
};

rbk.openbox.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	var t = me.attr('text');
	var box = $(me.dom).find('.showbox');
	box.append("<span class='openboxbtn'>"+t+"</span>");
	var p = t.length*14+30;
	box.css('padding-right',p);
	box.find('.openboxbtn').on('click',function(){
		$(me.dom).toggleClass('active');
	});
};