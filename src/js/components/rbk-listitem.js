//列表项
rbk.listitem = function() {};

//继承
rbk.listitem.prototype = new rbk.cmp();

/**继承iTpl模板接口*/
rbk.implInterface(rbk.listitem, iTpl);

rbk.listitem.prototype.defCls = 'rbk-table-view-cell';

rbk.listitem.prototype.defHtmlTag = '<div class="rbk-listitem"></div>';

rbk.listitem.prototype.defTplTag = '<div class="rbk-listitem">{text}</div>';

/**样式角色*/
rbk.listitem.prototype.roles = {
	twoline: 'rbk-table-view-cell'
};

rbk.listitem.prototype.reStructHtmlTag = function() {
	rbk.cmp.prototype.reStructHtmlTag.call(this);
	var me = this;
	var list = rbk.domToCmp(me.dom.parentNode,'list');
	if(me.getRoleName() == 'twoline'){
		me.dom.innerHTML = rbk.format('<span class="rbk-ellipsis-2">{0}</span>',me.dom.innerHTML);
	}
	me.bindClick(function(){
		if(!rbk.isEmpty(list.preItemBindClickFunc)){
			list.preItemBindClickFunc(me);
		}
	});
	$(me.dom).bind('touchstart',function(){
		$(this).addClass("rbk-active");
	})
	$(me.dom).bind('touchend',function(){
		$(this).removeClass("rbk-active");
	})
	$(me.dom).on('touchmove',function(){
		$(this).removeClass("rbk-active");
	})
	/*var startPosition, endPosition, deltaX, deltaY, moveLength;

    me.dom.addEventListener('touchstart', function (e) {
        var touch = e.touches[0];
        startPosition = {
            x: touch.pageX,
            y: touch.pageY
        }
    });
    me.dom.addEventListener('touchmove', function (e) {
        var touch = e.touches[0];
        endPosition = {
            x: touch.pageX,
            y: touch.pageY
        }
        deltaX = endPosition.x - startPosition.x;
        deltaY = endPosition.y - startPosition.y;
        moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
        if(moveLength>10){
        	$(this).removeClass("rbk-active");
        }
    });*/
}