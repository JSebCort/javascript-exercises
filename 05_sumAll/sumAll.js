const sumAll = function(int1, int2) {
    if(typeof(int1) != "number" || typeof(int2) != "number" || int1 < 0 || int2 < 0){
        return 'ERROR';
    }

    let sum = 0;
    
    let x = Object.values(arguments)
    x.sort((a,b) => a-b)
    
    for(let i = x[0]; i <= x[1]; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
