rbk.search = function(){};

//继承cmp
rbk.search.prototype = new rbk.cmp();

rbk.search.prototype.defCls = ''; 

//组件默认标签
rbk.search.prototype.defHtmlTag = '<div class="rbk-search"></div>';

rbk.search.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	var pl = !!me.attr('placeholder')?me.attr('placeholder'):'';
	var l = Math.floor(pl.replace(/[^\x00-\xff]/g, '**').length/2);
	me.attr('psize',l);
	me.add('<input class="rbk-searchinput" type="text" value="" placeholder="'+pl+'">');
	var input = $('input[type=text]',me.dom);
	input.focus(function(){
		$(me.dom).addClass('rbk-focus');
        $(me.dom).removeClass('rbk-hasv');
	})
	input.blur(function(){
        $(me.dom).removeClass('rbk-focus');
        var searchStr = input.val();
        if(searchStr!=''){
            $(me.dom).addClass('rbk-hasv');
        }
    })
	me.add('<span class="icon-xx"></span>');
	$('.icon-xx',me.dom).on('tap',function(){
		$(me.dom).removeClass('rbk-focus').removeClass('rbk-hasv');
		input.val('');
		input.blur();
		input.attr('disabled','disabled').css('opacity','1');
		setTimeout(function(){
			input.removeAttr('disabled');
		},300)
	})
};
rbk.search.prototype.onChange = function(fn){
	var me = this;
	var ispy = false;
	var input = $('input[type=text]',me.dom);
	input.on({
		input:function(){
			if(!ispy){
				fn(input);
			}
		},
		propertychange:function(){
			if(!ispy){
				fn(input);
			}
		},
		compositionstart:function(){
			ispy = true;
		},
		compositionend:function(){
			ispy = false;
		}
	});
	$('.icon-xx',me.dom).on('tap',function(){
		fn(input);
	});
}
