//图片上传工具
rbk.imgfile = function(){};

//继承cmp
rbk.imgfile.prototype = new rbk.cmp();

rbk.imgfile.prototype.defCls = ''; 

//组件默认标签
rbk.imgfile.prototype.defHtmlTag = '<div class="rbk-imgfile"></div>';
				
rbk.imgfile.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	if($(me.dom).find('img').size()!=0){
		var imgsrc = new Array;
		$(me.dom).find('img').each(function(){
			imgsrc.push($(this).attr('src'))
			$(this).remove()
		})
	}
	me.add('<div class="rbk-subtitle">上传图片</div>');
	me.add('<div class="rbk-filepanel rbk-cmp"><div class="rbk-uploadbtn"></div></div>');
	if(!!imgsrc){
		var panel = me.down('cmp');
		for(var i = 0;i<imgsrc.length;i++){
			panel.add('<img class="rbk-imgfileitem" src="'+imgsrc[i]+'"/>');
		}
	}
};

rbk.imgfile.prototype.bindClick = function(fn){
	var me = this;
	if($.isFunction(fn)){
		var size = $(me.dom).attr('size');
		$(me.dom).find('.rbk-uploadbtn').on('tap',function(){
			if(!rbk.isEmpty(size)&&$(me.dom).find('.rbk-filepanel img').size()<size){
				fn(me)
			}else if(rbk.isEmpty(size)){
				fn(me)
			}else{
				alert('上传图片不能超过'+size+'张')
			}
		})
	}
}

rbk.imgfile.prototype.preItemBindClickFunc = function(itemCmp) {};

rbk.imgfile.prototype.bindItemClick = function(clickFunc) {
	if (!$.isFunction(clickFunc)) return;
	this.preItemBindClickFunc = clickFunc;
};

rbk.imgfile.prototype.addImg = function(url){
	var me = this;
	if(!!url){
		me.down('cmp').add('<img class="rbk-imgfileitem" src="'+url+'"/>');
	}
}

rbk.imgfile.prototype.setSize = function(count){
	var me = this;
	if(!!count){
		$(me.dom).attr('size',count);
	}
}

rbk.imgfile.prototype.getVal = function(){
	var me = this;
	var list = new Array;
	$(me.dom).find('.rbk-filepanel img').each(function(){
		list.push($(this).attr('src'))
	})
	return list;
}
