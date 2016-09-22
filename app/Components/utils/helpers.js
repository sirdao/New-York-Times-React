// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');


 var helpers = {

 	runSearch: function(searchTerm){

 		return axios.post('/api/search', {term: searchTerm}).then(function(response){
 			console.log('axios works! : ' + response);
 		});

 	}



 };

 module.exports = helpers