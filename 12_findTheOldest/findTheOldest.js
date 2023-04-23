const findTheOldest = function(people) {
    let oldest = {name: 'test', years:0};
    people.forEach(person =>{
        if(!person.hasOwnProperty('yearOfDeath')){
            let age = new Date().getFullYear() - person.yearOfBirth;
            if(age > oldest.years){
                oldest = {name: person.name, years: age};
            }
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if(age > oldest.years){
            oldest = {name: person.name, years: age};
        }
    })
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;