module.exports = function(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	->	Show at which step are we
		//
		console.log("Start");

		//
		//	->	Move to the next chain
		//
		return resolve(container)

	});
};