const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2], (error, response, body) => {
    if (error) callback(error, null);
    const data = JSON.parse(body);
    if (data.length === 0) callback(null, 'Sorry, requested breed not found.');
    if (data.length > 0) callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };