define(function(require,exports,module){
	
	var CONF = require("./logitch.conf.js");
	
	var _log = console.log;
	console.level = CONF.level;
	console.log = function(param){
		if(this.level == "info"){
			_log(param);
		}
	};
	
	function Logitch(){};
	
	module.exports = Logitch;
	
	//改变当前window的日志输出级别
	Logitch.prototype.level = function(level){
		console.level = level;
	};
});