var http = require("http");

var opt = {
    host : 'www.pluralsight.com',
    port : 80,
    path : '/',
    method : 'GET'
};

var req = http.get(opt, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

