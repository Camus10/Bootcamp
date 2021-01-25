function divideAndSort(parameterInteger){
    let newInt = ("" + parameterInteger).split("0");
    console.log(newInt);let array = [];
    let tempArray = [];
    let sortedTempArray = [];
    let getOutput = [];
    var i;
    var j;
    for(i = 0; i < newInt.length; i++){
        array[i] = newInt[i];
        tempArray[i] = Array.from(array[i]);
        sortedTempArray[i] = tempArray[i].sort((a, b) => {
            return a - b;
        });
    getOutput.push(sortedTempArray[i].join(""));
    }
    
    console.log(getOutput.join(""));
}
divideAndSort(5956560159466056);

/*
function divideAndSort(parameterInteger){
    let newParameterInteger = parameterInteger.toString();
    let stringArray = [''];
    let i;
    let j = 0;
    let sortedTempArray = [];
    let newStringArray = [];

    for(i = 0; i < newParameterInteger.length; i++){
        if(newParameterInteger.charAt(i) == 0){
            j++;
            stringArray.push('');
        }else{
            stringArray[j] += newParameterInteger.charAt(i);
            newStringArray[j] = Array.from(stringArray[j]);
            sortedTempArray[j] = newStringArray[j].sort((a, b) => {
                return a - b;
            });
        }
    }
    
    let compileAll = sortedTempArray.map(x => x);
    console.log(compileAll.toString().replace(/,/g, ""));
}
divideAndSort(5956560159466056);
*/