const request = require('request');
const fs = require('fs');

const domain = process.argv[2];
console.log(domain)
const path = process.argv[3];
console.log(path)

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});


