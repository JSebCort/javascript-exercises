const removeFromArray = function() {
    let newArr = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        if(newArr.includes(arguments[i])){
            let index = newArr.indexOf(arguments[i]);
            newArr.splice(index,1);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
