rbk.dialog = {};

rbk.dialog.defTitle = 'Rubik';

//函数重载 
//alert(msg);
//alert(msg,callback);
//alert(msg,title);
//alert(msg,title,callback);
rbk.dialog.alert = function(){
	if(arguments.length == 0) return;
	var msg = arguments[0];
	var title = rbk.dialog.defTitle;
	var callback = function(){};
	if(arguments.length == 2){
		if($.isFunction(arguments[1])){
			callback = arguments[1];
		}else{
			title = arguments[1];
		}
	}else if(arguments.length == 3){
		title = arguments[1];
		callback = arguments[2];
	}
	$.alert(msg, title, callback);
};

//callback(true/false)
//函数重载
//yesNo(msg,callback);
//yesNo(msg,title,callback);
rbk.dialog.yesNo = function(){
	if(arguments.length < 2) return;
	var msg = arguments[0];
	var title = rbk.dialog.defTitle;
	var callback = function(){};
	if(arguments.length == 2){
		if($.isFunction(arguments[1])){
			callback = arguments[1];
		}else{
			title = arguments[1];
		}
	}else if(arguments.length == 3){
		title = arguments[1];
		callback = arguments[2];
	}
	var btnArray = ['否','是'];
	rbk.dialog.confirm(msg, title, btnArray, function(e) {
		if(!$.isFunction(callback)) return;
		if (e.index == 1) {
			callback(true);
		} else {
			callback(false);
		}
	})
};

//callback(true/false)
//函数重载
//okCancel(msg,callback);
//okCancel(msg,title,callback);
rbk.dialog.okCancel = function(){
	if(arguments.length < 2) return;
	var msg = arguments[0];
	var title = rbk.dialog.defTitle;
	var callback = function(){};
	if(arguments.length == 2){
		if($.isFunction(arguments[1])){
			callback = arguments[1];
		}else{
			title = arguments[1];
		}
	}else if(arguments.length == 3){
		title = arguments[1];
		callback = arguments[2];
	}
	var btnArray = ['取消','确定'];
	rbk.dialog.confirm(msg, title, btnArray, function(e) {
		if(!$.isFunction(callback)) return;
		if (e.index == 1) {
			callback(true);
		} else {
			callback(false);
		}
	})
};

//callback(index):index是btnTxts对应的索引
//confirm(msg,btnTxts,callback)
//confirm(msg,title,btnTxts,callback)
rbk.dialog.confirm = function(){
	if(arguments.length < 3) return;
	var msg = arguments[0];
	var title = rbk.dialog.defTitle;
	var btnTxts = [];
	var callback = function(){};
	if(arguments.length == 3){
		btnTxts = arguments[1];
		callback = arguments[2];
	}else{
		title = arguments[1];
		btnTxts = arguments[2];
		callback = arguments[3];
	}
	$.confirm(msg, title, btnTxts, callback);
};

//callback({index,value}):index是btnTxts对应的索引 value是输入信息
//prompt(msg,btnTxts,callback)
//prompt(msg,emptyTxt,btnTxts,callback)
//prompt(msg,title,emptyTxt,btnTxts,callback)
rbk.dialog.prompt = function(){
	if(arguments.length < 3) return;
	var msg = arguments[0];
	var title = rbk.dialog.defTitle;
	var btnTxts = [];
	var emptyTxt = '请输入';
	var callback = function(){};
	if(arguments.length == 3){
		btnTxts = arguments[1];
		callback = arguments[2];
	}else if(arguments.length == 4){
		emptyTxt = arguments[1];
		btnTxts = arguments[2];
		callback = arguments[3];
	}else{
		emptyTxt = arguments[1];
		title = arguments[2];
		btnTxts = arguments[3];
		callback = arguments[4];
	}
	$.prompt(msg,emptyTxt, title, btnTxts, callback);
};

rbk.dialog.toast = function(msg){
	$.toast(msg);
};



