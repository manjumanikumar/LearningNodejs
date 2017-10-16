var os = require("os");

var toMb = function(f){
    return(Math.round((f/1024/1024)*100/100));
}

console.log("Host :" +os.hostname());
console.log("Free Memory:" +toMb(os.freemem()) + "out of :" +toMb(os.totalmem()));
console.log("Load average :" +os.loadavg());
