(function(){
	if (window.RbJSBridge) {
        return;
    };
	
	var _setResultIframe,
		_setResultQueueRunning = false,
		_setResultQueue = [];
	
	function guid_() {
	     function s4() {
	          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	     }
	     var code = function() {
	          return 'f'+s4() + s4() + '_' + s4() + '_' + s4() + '_' +
	               s4() + '_' + s4() + s4() + s4();
	     }
	     return code().toUpperCase();
	};
	
	function _createQueueReadyIframe(doc){
		_setResultIframe = doc.createElement('iframe');
        _setResultIframe.id = '_RbJSBridge_SetResult';
        _setResultIframe.style.display = 'none';
        doc.documentElement.appendChild(_setResultIframe);
	};
	
	function _call(pluginName, methodName, params, callBack){
		var dataSet = new Object();
		dataSet.plugin = pluginName;
		dataSet.method = methodName;
		if (!!params)
			dataSet.params = params;
		if (!!callBack) {
			var a = guid_();
			window[a] = callBack;
			dataSet.callback = a;
		}
		var result = "rubik-x:" + encodeURI(JSON.stringify(dataSet), "utf-8");
		_setResultValue(result);
	};
	
	function _setResultValue(result){
		_setResultQueue.push(result);
        if (!_setResultQueueRunning) {
            _continueSetResult();
        }
	};
	
	function _continueSetResult(){
		var result = _setResultQueue.shift();
		if (result === undefined){
			_setResultQueueRunning = false;
		}else{
			_setResultQueueRunning = true;
			_setResultIframe.src = result;
			setTimeout(function(){
				_continueSetResult();
			});
		}
	};
	
	var _RbJSBridge = {
		call: _call,
		continueSetResult: _continueSetResult
	};
	
	Object.defineProperty(window, 'RbJSBridge', {
	    value: _RbJSBridge,
	    writeable: false
	});
	
	var doc = document;
	_createQueueReadyIframe(doc);
})()