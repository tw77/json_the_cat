const args = process.argv;

const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=' + args[2], (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === undefined) console.log(data.message);
  else if (data.length === 0) console.log('Sorry, requested breed not found.');
  else console.log(data[0].description);
});