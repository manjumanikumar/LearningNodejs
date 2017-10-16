var Resource = require("./resource");

var r = new Resource(4);

r.on('start', function(){
    console.log("I've started the loop");
});

r.on('data',function(d){
    console.log("The data is "+d);
});

r.on('end',function(t){
    console.log("The end of the file "+t)
})