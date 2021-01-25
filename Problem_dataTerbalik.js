const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("String pertama = ", function(inputSatu){
    rl.question("String kedua =  ", function(inputDua){
        rl.question("String ketiga = ", function(inputTiga){

            tulisan = [inputSatu, inputDua, inputTiga];
            console.log(tulisan[2], tulisan[1], tulisan[0]);
            
            // ========== //

            let i;
            for(i = 2; i >= 0; i--){
                let tulisanBaru = [i];
            }

            rl.close();
        });
    });
});


rl.on("close", function(){
    process.exit(0);
});
