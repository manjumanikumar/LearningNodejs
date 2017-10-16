var maxTime = 100;

var evenDoubler = function(v, callback){
    
};

var handleResults = function(err, results, time){
    if(err){
        console.log("ERROR: " + err.message);
    } else{
        console.log("The results are: " + results + "(" + time + "ms)");
    }
};

evenDoubler(2, handleResults);
evenDoubler(3, handleResults);
console.log("-----------------");