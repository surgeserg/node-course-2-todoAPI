function aLibrary() {
	const hello = 'Hello world!';

	function aMethod(callback) {

		console.log(hello);
	}

	return {
		aMethod
		}
};

aLibrary().aMethod();