var mathfun = require("./mathfun");

var processdata = function(err, results, time){
    if(err){
        console.log("ERROR: "+err.message);
        
    }else{
        console.log("Result is: "+results +"("+time+")"+"ms");
    }
};

for(var i=0;i<10;i++){
    console.log("parameter called with "+ i);
    mathfun.evenDoubler(i,processdata);
}
console.log("----------------------------------");
console.log("To demostate if the variable is visible"+mathfun.foo);
console.log("To demonstrate if the variable is not visible "+mathfun.maxTime);
