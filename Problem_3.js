const printSegitiga = 5;

let i;
let myStack = [];
for(i = 1; i <= printSegitiga; i++){
    myStack.push(i);
}

let hasil = "";
for(i = 0; i < myStack.length; i++){
    hasil = hasil + myStack[i];
}

const counter = myStack.length;
for(i = counter; i > 0; i--){
    console.log(hasil.substr(0, i));
}

/*
const printSegitiga = 5
let n = "" // variabel untuk menyimpan data

if (typeof printSegitiga !== "number") {//jika tipedata bukan number
    console.log("Data harus number")
}

for (let i = printSegitiga; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
        n += j + " "
    }
    n += "\n"
}
console.log(n)//print datanya
*/