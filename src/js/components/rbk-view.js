//页面对象 不继承cmp
rbk.view = function() {};
/**
 **
 */
rbk.view.prototype.getViewId = function(url){
	if(rbk.isEmpty(url)) return null;
	var firstArr = url.split(/[\?\#]/);
	var secArr = firstArr[0].split('/');
	return secArr[secArr.length - 1];
};

rbk.view.prototype.getHostUrl = function(){
	return location.protocol + '//' + window.location.host;
};

//打开新窗体  extraArgsJson 格外参数对象
rbk.view.prototype.open = function(url,extraArgsJson){
	if(rbk.isEmpty(url)) return;
	extraArgsJson = extraArgsJson||{};
	extraArgsJson.preUrl = location.href;
	var id = this.getViewId(url);
	if(!rbk.isEmpty(id)){
		rbk.cookie.set(id,'e=' + JSON.stringify(extraArgsJson));
	}
	location.href = url;
};

//回退
rbk.view.prototype.back = function(){
	var preurl = this.getExtra('preUrl');
	console.log(preurl);
	var id = this.getViewId(location.href);
	if(!rbk.isEmpty(id)){
		rbk.cookie.del(id);
	}
	if(rbk.isEmpty(preurl)){
		history.back();
		return;
	}
	location.href = preurl;
};

//获得传递的额外参数
rbk.view.prototype.getExtra = function(key) {
	var id = this.getViewId(location.href);
	if(rbk.isEmpty(id)) return null;
	var extraStr = rbk.cookie.get(id);
	if(rbk.isEmpty(extraStr)) return null;
	var extras = eval(extraStr);
	return extras[key];
};
