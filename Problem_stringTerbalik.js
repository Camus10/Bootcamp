const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Masukkan inputannya = ", function namaTerbalik(tulisan){
    let inputannya = tulisan;
    let hasil = "";

    for(let i = tulisan.length - 1; i >= 0; i --){
        hasil = hasil + inputannya[i];
    }

    console.log(hasil);
    rl.close();
});

rl.on("close", function namaTerbalik(tulisan){
    process.exit(0);
});