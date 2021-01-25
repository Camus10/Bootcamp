const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope' 
]

let newNames = [];
function searchName(parameterFinding, maximumArrays, callback){
    let regEx = new RegExp(parameterFinding, 'i');
    let i;
    
    for(i = 0; i < names.length; i++){
        if(regEx.test(names[i]) === true){
            newNames.push(names[i]); 
        }
    }
    callback(newNames.splice(0, maximumArrays));
}
function callback(sentence){
    console.log(sentence);
}

searchName("an", 3, callback);