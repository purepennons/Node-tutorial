var moduleExport = function() {
	this.foo = function() {
		return '[foo] I come from moule.exports!';
	};

	this.bar = function() {
		return '[bar] I come from moule.exports!';
	};
};

module.exports = moduleExport;