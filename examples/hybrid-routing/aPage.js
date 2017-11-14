module.exports = function () {
	require.ensure([], () => {
		const vendorA = require("./vendorA");
		const vendorB = require("./vendorB");
		vendorA();
		vendorB();
	});
	return "This is page A.";
};
