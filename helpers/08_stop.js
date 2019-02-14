module.exports = function(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	->	Show at which step we are on.
		//
		console.info("Stopping");

		//
		//	->	Move to the next chain.
		//
		return resolve(container);

	});
};
