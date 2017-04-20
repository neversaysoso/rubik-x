rbk.scroll = function() {};

//继承cmp
rbk.scroll.prototype = new rbk.cmp();

//继承布局绑定接口
rbk.implInterface(rbk.scroll, iBindLayoutCmp);

rbk.scroll.prototype.defCls = '';

rbk.scroll.prototype.defHtmlTag = '<div class="rbk-scroll"></div>';

var myScroll;

rbk.scroll.prototype.reStructHtmlTag = function() {
	document.ontouchmove = function(e){ e.preventDefault(); };
	myScroll = new IScroll('.rbk-scroll', {
		probeType: 3, 
		mouseWheel: true,
		preventDefault:false
	});
	setTimeout(function(){
		myScroll.refresh();
	});
}
rbk.scroll.prototype.scrollDown = function(fn,text){
	var me = this;
	var childs = me.dom.childNodes;
	
	if(rbk.isEmpty(text)){
		$(childs).prepend('<div class="scroller-pullDown"><span class="pull-down-msg">下拉刷新</span></div>');
	}else{
		$(childs).prepend('<div class="scroller-pullDown" text="'+text+'"><span class="pull-down-msg">'+text+'</span></div>');
	}
	
	var downIcon = $(me.dom).find(".scroller-pullDown");
	
	myScroll.on("scroll",function(){
		if(rbk.isEmpty(downIcon.attr('end'))){
			var y = this.y,maxY = this.maxScrollY - y,
			downHasClass = downIcon.hasClass("reverse_icon");
			if(y >= 60){
				!downHasClass && downIcon.addClass("reverse_icon");
				return "";
			}else if(y < 60 && y > 0){
				downHasClass && downIcon.removeClass("reverse_icon");
				return "";
			}
		}
	});
	
	myScroll.on("slideDown",function(){
		//当下拉，使得边界超出时，如果手指从屏幕移开，则会触发该事件
		if(rbk.isEmpty(downIcon.attr('end'))){
			if(this.y > 60){
				downIcon.find('.pull-down-msg').html('加载中...');
				downIcon.addClass("loading");
				downIcon.removeClass("reverse_icon");
				if($.isFunction(fn)){
					fn();
				}
			}
		}
	});
}
rbk.scroll.prototype.scrollDownEnd = function(text){
	var me = this;
	var downIcon = $(me.dom).find(".scroller-pullDown");
	if(rbk.isNotEmpty(downIcon)){
		downIcon.attr('end',true);
		downIcon.addClass('scrollend');
		if(rbk.isEmpty(text)){
			downIcon.html('无更多内容');
		}else{
			downIcon.html(text);
		}
	}
}
rbk.scroll.prototype.scrollUp = function(fn,text){
	var me = this;
	var childs = me.dom.childNodes;
	if(rbk.isEmpty(text)){
		$(childs).append('<div class="scroller-pullUp"><span class="pull-up-msg">上拉刷新</span></div>');
	}else{
		$(childs).append('<div class="scroller-pullUp" text="'+text+'"><span class="pull-up-msg">'+text+'</span></div>');
	}
	
	var upIcon = $(me.dom).find(".scroller-pullUp");
	
	myScroll.on("scroll",function(){
		if(rbk.isEmpty(upIcon.attr('end'))){
			var y = this.y,maxY = this.maxScrollY - y,
			upHasClass = upIcon.hasClass("reverse_icon");
			if(maxY >= 60){
				!upHasClass && upIcon.addClass("reverse_icon");
				return "";
			}else if(maxY < 60 && maxY >=0){
				upHasClass && upIcon.removeClass("reverse_icon");
				return "";
			}
		}
	});
	myScroll.on("slideUp",function(){
		//当下拉，使得边界超出时，如果手指从屏幕移开，则会触发该事件
		if(rbk.isEmpty(upIcon.attr('end'))){
			if(this.maxScrollY - this.y > 60){
				upIcon.find('.pull-up-msg').html('加载中...');
				upIcon.addClass("loading");
				upIcon.removeClass("reverse_icon");
				if($.isFunction(fn)){
					fn();
				}
			}
		}
	});
}
rbk.scroll.prototype.scrollUpEnd = function(text){
	var me = this;
	var upIcon = $(me.dom).find(".scroller-pullUp");
	if(rbk.isNotEmpty(upIcon)){
		upIcon.attr('end',true);
		upIcon.addClass('scrollend');
		if(rbk.isEmpty(text)){
			upIcon.html('无更多内容');
		}else{
			upIcon.html(text);
		}
	}
}
rbk.scroll.prototype.refresh = function(){
	var me = this;
	if(!!$(me.dom).find('.scroller-pullUp')){
		var upIcon = $(me.dom).find(".scroller-pullUp");
		upIcon.removeClass('loading');
		if(rbk.isEmpty(upIcon.attr('text'))){
			upIcon.find('.pull-up-msg').html('上拉刷新');
		}else{
			upIcon.find('.pull-up-msg').html(upIcon.attr('text'));
		}
	}
	if(!!$(me.dom).find('.scroller-pullDown')){
		var downIcon = $(me.dom).find(".scroller-pullDown");
		downIcon.removeClass('loading');
		if(rbk.isEmpty(downIcon.attr('text'))){
			downIcon.find('.pull-down-msg').html('下拉刷新');
		}else{
			downIcon.find('.pull-down-msg').html(downIcon.attr('text'));
		}
	}
	myScroll.refresh();
}
