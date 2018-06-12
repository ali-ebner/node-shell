const request = require('request');

module.exports = function(url){
	request(url, function (error, response, body) {
		if(error){
  			process.stdout.write('error:', error); // Print the error if one occurred
  		}
  		process.stdout.write('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		process.stdout.write('body:', body); // Print the HTML for the Google homepage.
});
}