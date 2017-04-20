//选项卡控件
rbk.tab = function(){};

//继承cmp
rbk.tab.prototype = new rbk.cmp();

rbk.tab.prototype.defCls = ''; 

rbk.tab.prototype.defHtmlTag = '<div class="rbk-tab"></div>';

rbk.tab.prototype.roles = {
	floortab:'rbk-tab rbk-floortab',
	datetab:'rbk-tab rbk-datetab',
	dragtab:'rbk-tab swiper-container'
};

rbk.tab.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	var tabitems = me.childCmps(true,'tabitem');
	var header = me.getTabHeaderShell();
	var content = me.getTabContentShell();
	
	$.each(tabitems,function(index,e){
		if(e.tpl()){
			rbk.clearAllObjRef(e.dom);
			return;
		}
		if(rbk.isEmpty(e.id())){
			e.id(rbk.guid());
		}
		var newHeaderDom = header.appendChild(
			rbk.format('<a class="rbk-control-item {active}" hrefs="#{id}"><span>{text}</span></a>',
			{id:e.id(),text:e.text(),active:(index == 0?'rbk-active':'')}))[0];
		var newHeaderShell = rbk.domToShell(newHeaderDom);
		newHeaderShell.bindClick(function(shell){
			if(!$(me.dom).hasClass("swiper-container")){
				var hrefs = shell.attr('hrefs');
				var tabItemID = hrefs.substring(1,hrefs.length);
				me.tabSelChangeCallback(me.down('#'+tabItemID));
				var medom = $(shell.dom)
				medom.addClass('rbk-active');
				medom.siblings().removeClass('rbk-active');
				var meId = medom.attr('hrefs').split('#')[1];
				
				$('#'+meId).addClass('rbk-active');
				$('#'+meId).siblings().removeClass('rbk-active');
			}
		});
	    rbk.clearAllObjRef(e.dom);
	    var itemHtml = e.dom.outerHTML.toString();
	    e.removeSelf();
	    e.dispose();
	    delete e;
	    var newItemCmp = rbk.domToCmp(content.appendChild(itemHtml)[0],'tabitem');
	    newItemCmp.reStructHtmlTag();
	    rbk.reStructHtmlTag(newItemCmp.dom);
	    rbk.restructDomNavUrl(newItemCmp.dom);
		if(index == 0){
			newItemCmp.setClass('rbk-active');
		}else{
			newItemCmp.removeClass('rbk-active');
		}
	});
	if($(me.dom).hasClass("rbk-floortab")){
		var height = $(window).height();
		if(rbk.platform.getPlatform().platform == "native"){
			$(me.dom).css('height',height);
			$(me.dom).find('.rbk-segmented-control').css('height',height);
			$(me.dom).find('.rbk-content-padded').css('height',height);
		}else{
			$(me.dom).css('height',height-44);
			$(me.dom).find('.rbk-segmented-control').css('height',height-44);
			$(me.dom).find('.rbk-content-padded').css('height',height-44).css('top','44px');
		}
		if(typeof($(me.dom).attr('logwidth'))!="undefined"){
			var logwidth = $(me.dom).attr('logwidth');
			if(logwidth!=''&&logwidth>25&&logwidth<75){
				$(me.dom).find('.rbk-segmented-control').css('width',logwidth+"%");
				$(me.dom).find('.rbk-content-padded').css('width',(100-logwidth)+"%");
				if(logwidth>35){
					$(me.dom).addClass('leftside');
				}
			}
		}
	}
	if($(me.dom).hasClass("rbk-datetab")){
		if($(me.dom).find('.rbk-control-item ').size()>7){
			$(me.dom).addClass('mosttab');
		}
	}
	if($(me.dom).hasClass("swiper-container")){
		$('.rbk-tabitem',me.dom).css('min-height',$(window).height()-110);
		var b = 0;
		$(me.dom).find('.rbk-content-padded').addClass('swiper-wrapper');
		$(me.dom).find('.rbk-content-padded>div').each(function(i){
			var n = i+1;
			$(this).removeClass('rbk-control-content').addClass('swiper-slide').addClass('slide'+n);
			b++;
		});
		if(b>3){
			$(me.dom).addClass('mosttab');
		}
		setTimeout(function(){
			var mySwiper = new Swiper(me.dom, {
			    speed:200,
			    autoHeight: true,
			    onSlideNextStart:function(e){
			    	var i = e.activeIndex;
			    	var w = $(window).width()/4;
			    	$($('.rbk-control-item')[i]).addClass('rbk-active').siblings('.rbk-control-item').removeClass('rbk-active');
					$('.rbk-segmented-control',this.dom).scrollLeft($('.rbk-segmented-control',this.dom)[0].scrollLeft+w);
			    },
			    onSlidePrevStart:function(e){
			    	var i = e.activeIndex;
			    	var w = $(window).width()/4;
			    	$($('.rbk-control-item')[i]).addClass('rbk-active').siblings('.rbk-control-item').removeClass('rbk-active');
			    	$('.rbk-segmented-control',this.dom).scrollLeft($('.rbk-segmented-control',this.dom)[0].scrollLeft-w);
			    }
			});
			$(me.dom).find('.rbk-control-item').each(function(i){
				var istap = true;
				$(this).on('touchmove',function(){
					istap = false;
				})
				$(this).on('touchend',function(){
					setTimeout(function(){
						istap = true;
					},3000)
				})
				$(this).on('tap',function(){
					if(istap){
						var pre = mySwiper.activeIndex;
						mySwiper.slideTo(i, 200, false);
						$(this).addClass('rbk-active').siblings('.rbk-control-item').removeClass('rbk-active');
						var now = mySwiper.activeIndex;
						var w = (now-pre)*$(window).width()/4;
						$('.rbk-segmented-control',this.dom).scrollLeft($('.rbk-segmented-control',this.dom)[0].scrollLeft+w);
					}
				})
			})
		})
	}
}

rbk.tab.prototype.getTabHeaderShell = function(){
	var me = this;
	var doms = $('div[class*=rbk-segmented-control]',me.dom);
	if(doms.length == 0){
		doms = me.insertBefore('<div class="rbk-segmented-control"></div>');
	}
	return rbk.domToShell(doms[0]);
};

rbk.tab.prototype.getTabContentShell = function(){
	var me = this;
	var doms = $('div[class*=rbk-content-padded]',me.dom);
	if(doms.length == 0){
		doms = me.appendChild('<div class="rbk-content-padded"></div>');
	}
	return rbk.domToShell(doms[0]);
};

rbk.tab.prototype.itemRender = function(temTplStr,itemJson) {
	return rbk.format(temTplStr,itemJson);
};


rbk.tab.prototype.doLayout = function(dataJsonArr) {
	var me = this;
	if (!$.isArray(dataJsonArr)) {
		throw 'dataJsonArr必须是数组对象';
	}
	var header = me.getTabHeaderShell();
	var content = me.getTabContentShell();
	
	var itemTpl = null;
	var childCmps = me.childCmps();
	for (var i = 0; i < childCmps.length; i++) {
		if(!childCmps[i].tpl()) continue;
		itemTpl = childCmps[i];
		break;
	}
	var itemTplStr = '';
	if (itemTpl == null) {
		itemTplStr = rbk.tabitem.prototype.defTplTag;
	} else {
		$(me.dom).addClass("rbk-ht")
		itemTplStr = itemTpl.dom.outerHTML.toString();
		itemTpl.removeSelf();
		itemTpl.dispose();
		delete itemTpl;
	}
	
	var cldcmps = me.childCmps(false,'tabitem');
	$.each(dataJsonArr, function(index, e) {
		var oldCmp = null;
		if(rbk.isEmpty(e.id)){
			e.id = rbk.guid();
		}
		oldCmp = me.down('#' + e.id);
		if(oldCmp != null) return;
		var iCmp = rbk.domToCmp(content.appendChild(me.itemRender(itemTplStr, e))[0], 'tabitem');
		iCmp.tpl(false);
		iCmp.reStructHtmlTag();
		iCmp.id(e.id);
		iCmp.raw = e;
		//添加选项卡头
		var newHeaderDom = header.appendChild(
			rbk.format('<a class="rbk-control-item" hrefs="#{id}"><span>{text}</span></a>',
			{id:e.id,text:e.text}))[0];
		var newHeaderShell = rbk.domToShell(newHeaderDom);
		newHeaderShell.bindClick(function(shell){
			if(!$(me.dom).hasClass("swiper-container")){
				var hrefs = shell.attr('hrefs');
				var tabItemID = hrefs.substring(1,hrefs.length);
				me.tabSelChangeCallback(me.down('#'+tabItemID));
				
				var medom = $(shell.dom)
				medom.addClass('rbk-active');
				medom.siblings().removeClass('rbk-active');
				var meId = medom.attr('hrefs').split('#')[1];
				
				$('#'+meId).addClass('rbk-active');
				$('#'+meId).siblings().removeClass('rbk-active');
			}
		});
		if(rbk.isCtype(e.cldCtype)){
			var cldCmp = iCmp.down(e.cldCtype);
			
		    if(cldCmp == null){
				var cldCmp = rbk.createCmpObj(e.cldCtype);
    			cldCmp.dom = iCmp.appendChild(cldCmp.defHtmlTag)[0];
    			cldCmp.reStructHtmlTag();
		    	rbk.setObjRef(cldCmp);
		        if(!rbk.hasInterface(cldCmp,iBindLayoutCmp)) return;
		    }
		    if(!rbk.hasInterface(cldCmp,iBindLayoutCmp)) return;
		    cldCmp.doLayout(e.data);
		    me.goto(0);
		}
	})
	if($(me.dom).hasClass("rbk-datetab")){
		if(dataJsonArr.length>7){
			$(me.dom).addClass('mosttab');
		}
	}
	if($(me.dom).hasClass("swiper-container")){
		$('.rbk-tabitem',me.dom).css('min-height',$(window).height()-110);
		var b = 0;
		$(me.dom).find('.rbk-content-padded').addClass('swiper-wrapper');
		$(me.dom).find('.rbk-content-padded>div').each(function(i){
			var n = i+1;
			$(this).removeClass('rbk-control-content').addClass('swiper-slide').addClass('slide'+n);
			b++;
		});
		if(b>3){
			$(me.dom).addClass('mosttab');
		}
		setTimeout(function(){
			var mySwiper = new Swiper(me.dom, {
			    speed:200,
			    autoHeight: true,
			    onSlideNextStart:function(e){
			    	var i = e.activeIndex;
			    	var w = $(window).width()/4;
			    	$($('.rbk-control-item')[i]).addClass('rbk-active').siblings('.rbk-control-item').removeClass('rbk-active');
					$('.rbk-segmented-control',this.dom).scrollLeft($('.rbk-segmented-control',this.dom)[0].scrollLeft+w);
			    },
			    onSlidePrevStart:function(e){
			    	var i = e.activeIndex;
			    	var w = $(window).width()/4;
			    	$($('.rbk-control-item')[i]).addClass('rbk-active').siblings('.rbk-control-item').removeClass('rbk-active');
			    	$('.rbk-segmented-control',this.dom).scrollLeft($('.rbk-segmented-control',this.dom)[0].scrollLeft-w);
			    }
			});
		})
	}
};

rbk.tab.prototype.goto = function(index){
	var me = this;
	$.each(this.childCmps(false,'tabitem'),function(i,e){
		var topShell = rbk.domToShell($('a[hrefs="#'+ e.id() +'"]',me.dom)[0]);
		if(index == i){
			e.setClass('rbk-active');
			topShell.setClass('rbk-active');
			
			me.tabSelChangeCallback(e);
		}else{
			e.removeClass('rbk-active');
			topShell.removeClass('rbk-active');	
		}
	})
}
rbk.tab.prototype.onChange = function(fn){
	var me = this;
	$(me.dom).find('.rbk-control-item').each(function(i){
		var e = rbk.domToCmp($(me.dom).find('.rbk-tabitem')[i]).down('list');
		if(rbk.isEmpty(e)){
			e = rbk.domToCmp($(me.dom).find('.rbk-tabitem')[i]).down('navlist');
		}
		$(this).on('tap',function(){
			fn(i,e);
		})
	})
}
rbk.tab.prototype.bindItemClick = function(fn){
	var me = this;
	var ht = $(me.dom).hasClass('rbk-ht');
	$(me.dom).find('.rbk-tabitem').each(function(i,es){
		var e = rbk.domToCmp(es).down('list');
		if(rbk.isEmpty(e)){
			e = rbk.domToCmp(es).down('navlist');
			if(rbk.isEmpty(e)) return;
			if(ht){
				$(e.dom).on('tap','.rbk-navlistitem',function(){
					fn(rbk.domToCmp(this));
				})
				return
			}
		}
		e.bindItemClick(fn);
	})
}
//选项卡回调事件属性
//回调的时候传回选中的tabitem
rbk.tab.prototype.tabSelChangeCallback = function(){};