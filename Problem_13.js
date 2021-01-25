// palindrom    --------------------------------------------------
function checkPalindrom(string){
    let regEx = new RegExp(string, 'i');
    //let status = string.split('').reverse().join('');
    let status = "";
    for(let i = string.length - 1; i >= 0; i --){
        status = status + string[i];
    }
    
    if(regEx.test(status) === true){
        console.log("Palindrom");
    }else{
        console.log("Bukan Palindrom");
    }
}
checkPalindrom("Malam");


// reverse words    --------------------------------------------------
let words = "Saya Belajar Javascript";

/*
let showReverse = "";
for(let i = (words.split(" ").length - 1); i >= 0; i--){
    showReverse = showReverse + words.split(" ")[i] + " ";
}
console.log(showReverse);
*/

let stringArray = [''];
let i;
let j = 0;
for(i = 0; i < words.length; i++){
    if(words.charAt(i) == " "){
        j++;
        stringArray.push('');
    }else{
        stringArray[j] = stringArray[j] + words.charAt(i);
    }
}

let showResult = "";
for(let counterIndex = (stringArray.length - 1); counterIndex >= 0; counterIndex--){
    showResult = showResult + stringArray[counterIndex] + " ";
}
console.log(showResult);