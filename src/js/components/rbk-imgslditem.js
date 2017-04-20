//数据列表
rbk.imgslditem = function() {};

//继承cmp
rbk.imgslditem.prototype = new rbk.cmp();

/**继承iTpl模板接口*/
rbk.implInterface(rbk.imgslditem, iTpl);

rbk.imgslditem.prototype.defCls = 'rbk-slider-item';

rbk.imgslditem.prototype.defHtmlTag = '<div class="rbk-imgslider"></div>';

rbk.imgslditem.prototype.defTplTag = '<div class="rbk-imgslditem"><a href="{url}"><img src="{img}"></a><p class="rbk-slider-title">{text}</p></div>';



