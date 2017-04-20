//form标签
rbk.frmact = function(){};

//继承cmp
rbk.frmact.prototype = new rbk.cmp();

//实现formCmp接口
rbk.implInterface(rbk.frmact,iFormCmp);

rbk.frmact.prototype.defCls = 'rbk-table-view-cell'; 

rbk.frmact.prototype.reStructHtmlTag = function () {
	var me = this;
    rbk.cmp.prototype.reStructHtmlTag.call(this);
    if ($('label', this.dom).length == 0) {
        var lbl = document.createElement('label');
        this.dom.appendChild(lbl);
    }
    $('label', me.dom)[0].innerText = $('label', me.dom)[0].innerText;
    
    if ($('span', this.dom).length == 0) {
    	this.appendChild('<span class="color-gray frmact"></span>');
    }
    var bk = '<div class="rbk-backdrop rbk-active rbk-backdrop-action"></div>';
};


rbk.frmact.prototype.defHtmlTag = '<div class="rbk-frmlbl"></div>';

rbk.frmact.prototype.labelName = function () {
    if (arguments.length > 0) {
        $('label', this.dom)[0].innerText = arguments[0];
    }
    var str = $('label', this.dom)[0].innerText;
    return str.substring(0,str.length-2);
};
//设置布局
rbk.frmact.prototype.doLayout = function (container,jsonData) {
	var me = this;
	var height = $(window).height();
    if(me.dom == null){
    	me.dom = container.appendChild(me.defHtmlTag)[0];
    	rbk.setObjRef(me);
    	me.id(jsonData.id);
    	me.data = jsonData;
    }
    me.reStructHtmlTag();
    var frmact = $(me.dom).find('.frmact');
    if(rbk.isNotEmpty($("#frm"+jsonData.id))){
    	$("#frm"+jsonData.id).remove();
    }
    var body = $('body');
    var html = '<div class="rbk-frmact" id="frm'+jsonData.id+'"><ul class="rbk-table-view">';
    for(var i in jsonData.options){
    	html += '<li class="rbk-table-view-cell" v="'+jsonData.options[i].value+'">'+jsonData.options[i].text+'</li>';
    }
    html += '</ul><ul class="rbk-table-view"><li class="rbk-table-view-cell disp">取消</li></ul></div>';
    var dom = body.append(html);
    
    var clsDoms = $('.rbk-table-view > .rbk-table-view-cell',$('#frm'+jsonData.id)[0]);
	$.each(clsDoms,function(index,e){
		rbk.domToShell(e).bindClick(function(shell){
			
		});
		$(e).bind('touchstart',function(){
			$(e).addClass('rbk-active');
		})
		$(e).bind('touchend',function(){
			$(e).removeClass('rbk-active');
		})
	});
	var frmact = $(me.dom).find('.frmact');
	if(frmact.html()==''){
		frmact.html('请选择');
	}
	frmact.on('tap',function(){
		$('body').css('overflow','hidden').css('height',height);
		$('#frm'+jsonData.id).addClass('rbk-active');
		$(':focus').blur();
		if(rbk.isEmpty($('#bk'+jsonData.id)[0])){
			body.append('<div id="bk'+jsonData.id+'" class="rbk-backdrop rbk-backdrop-action rbk-active"></div>');
		}
		$('#bk'+jsonData.id).bind('tap',function(){
			$('body').css('overflow','auto').css('height','auto');
			$('#frm'+jsonData.id).removeClass('rbk-active');
			$(this).css('opacity',0);
			setTimeout(function(){
				$('#bk'+jsonData.id).remove();
			},400)
		})
	})
	$('#frm'+jsonData.id).find('.disp').on('tap',function(){
		$('body').css('overflow','auto').css('height','auto');
		$('#frm'+jsonData.id).removeClass('rbk-active');
		$('#bk'+jsonData.id).css('opacity',0);
		setTimeout(function(){
			$('#bk'+jsonData.id).remove();
		},400)
	})
	$('#frm'+jsonData.id).find('.rbk-table-view-cell').not('.disp').on('tap',function(){
		frmact.html($(this).html());
		frmact.attr("value",$(this).attr('v'));
		$('body').css('overflow','auto').css('height','auto');
		$('#frm'+jsonData.id).removeClass('rbk-active');
		$('#bk'+jsonData.id).css('opacity',0);
		setTimeout(function(){
			$('#bk'+jsonData.id).remove();
		},400)
	})
};

rbk.frmact.prototype.setVal = function (val) {
	var me = this;
	var frmact = $(me.dom).find('.frmact');
	var t,v;
	if(typeof(val)=="object"){
		t = val.text;
		v = val.value;
	}else if(typeof(val)=="string"||typeof(val)=="number"){
		for(var i in me.data.options){
	    	if(me.data.options[i].value==val){
	    		t = me.data.options[i].text;
				v = me.data.options[i].value;
	    	}
	    }
	}
	frmact.html(t);
	frmact.attr('value',v);
};
rbk.frmact.prototype.getVal = function () {
	var me = this;
	var frmact = $(me.dom).find('.frmact');
	return frmact.attr('value');
};
rbk.frmact.prototype.resetVal = function () {
    var me = this;
	var frmact = $(me.dom).find('.frmact');
	frmact.attr('value','');
	frmact.html('请选择');
};