//选择器
rbk.select = function(){};

//继承cmp
rbk.select.prototype = new rbk.cmp();

rbk.select.prototype.defCls = 'rbk-btn'; 

rbk.select.prototype.defHtmlTag = '<div class="rbk-select"></div>';

rbk.select.prototype.picker = null;

rbk.select.prototype.init = function(){
	var me = this;
	me.text('请选择');
	$(me.dom).attr('id',rbk.guid);
	rbk.cmp.prototype.init.call(this);
	var panelBuffer = '<div class="rbk-poppicker" v="'+$(me.dom).attr('id')+'">'+
		'<div class="rbk-poppicker-header">'+
			'<button class="rbk-btn rbk-poppicker-btn-cancel"></button>'+
			'<button class="rbk-btn rbk-poppicker-btn-ok">完成</button>'+
			'<div class="rbk-poppicker-clear"></div>'+
		'</div>'+
		'<div class="rbk-poppicker-body">'+
		'</div>'+
	'</div>';
	$("body").append(panelBuffer);
	var poppicker = $(".rbk-poppicker[v="+$(me.dom).attr('id')+"]")
	var backgrp = '<div class="rbk-backdrop" v="'+$(me.dom).attr('id')+'"></div>'
	$("body").append(backgrp);
	var back = $('.rbk-backdrop[v='+$(me.dom).attr('id')+']')
	back.hide();
	var myScroll;
	$(me.dom).bind('tap',function(){
		$(':focus').blur();
		var height = $(window).height();
		$('body').css('overflow','hidden').css('height',height);
		poppicker.addClass('rbk-active');
		back.show();
		var val = me.getVal();
		if(!val){
			$($('[v='+$(me.dom).attr('id')+'] .rbk-poppicker-body .rbk-list .rbk-listitem')[0]).addClass('rbk-active')
		}else{
			var listitem = $('[v='+$(me.dom).attr('id')+'] .rbk-poppicker-body .rbk-list .rbk-listitem');
			for(var i=0;i<listitem.size();i++){
				if($(listitem[i]).attr('value')==val.value){
					$(listitem[i]).addClass('rbk-active');
					$(listitem[i]).siblings().removeClass('rbk-active');
				}
			}
		}
	});
	$('[v='+$(me.dom).attr('id')+'] .rbk-poppicker-btn-cancel').bind('tap',function(){
		poppicker.removeClass('rbk-active');
		setTimeout(function(){
			back.hide();
		},200);
		$('body').css('overflow','auto').css('height','auto');
	});
	$('[v='+$(me.dom).attr('id')+'] .rbk-poppicker-btn-ok').bind('tap',function(){
		var okitem = $('[v='+$(me.dom).attr('id')+'] .rbk-poppicker-body .rbk-list .rbk-listitem.rbk-active')[0];
		if(!!okitem){
			me.text($(okitem).html());
			poppicker.removeClass('rbk-active');
			setTimeout(function(){
				back.hide();
			},200);
			$('body').css('overflow','auto').css('height','auto');
			me.raw = {
				text:$(okitem).html(),
				value:$(okitem).attr("value")
			}
		}
	});
	back.bind('tap',function(){
		poppicker.removeClass('rbk-active');
		setTimeout(function(){
			back.hide();
		},200);
		$('body').css('overflow','auto').css('height','auto');
	});
	$('[v='+$(me.dom).attr('id')+'] .rbk-poppicker-body').append('<div class="rbk-list"></div>');
	
};

rbk.select.prototype.reStructHtmlTag = function () {
	var me = this;
    rbk.cmp.prototype.reStructHtmlTag.call(this);
    
	var iconDoms = $('span[class*=rbk-icon]', this.dom);
	if (iconDoms.length != 0) {
		rbk.domToShell(iconDoms[0]).removeSelf();
	}
	var iconDomShell = rbk.domToShell(me.appendChild('<span class="rbk-icon rbk-pull-right"><span>')[0]);
	iconDomShell.setClass('rbk-icon-arrowdown');
}

//重新定义点击事件
rbk.select.prototype.bindClick = function(callback){
	
} 

rbk.select.prototype.raw = null;

//return jsonRaw
rbk.select.prototype.getVal = function(){
	return this.raw;
};

rbk.select.prototype.setVal = function(jsonRaw){
	this.raw = jsonRaw;
	if(!rbk.isEmpty(this.raw)){
		this.text(this.raw.text);
	}else{
		this.text('');
	}
	
};


/**
 * json的text为显示名称，value为真实值
 * @param {Object} jsonDataArr
 */
rbk.select.prototype.bindData = function(jsonDataArr){
	var meid = $(this.dom).attr('id');
	
   	var list = $('[v='+meid+'] .rbk-poppicker-body .rbk-list');
  	for(var i=0;i<jsonDataArr.length;i++){
  		list.append('<div class="rbk-listitem" value="'+jsonDataArr[i].value+'">'+jsonDataArr[i].text+'</div>');
  	}
  	$('.rbk-poppicker-body .rbk-list .rbk-listitem').bind("tap",function(){
  		$(this).addClass('rbk-active');
  		$(this).siblings().removeClass("rbk-active");
  	})
};


