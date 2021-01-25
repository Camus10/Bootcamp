/*
promo ARKAFOOD5
    ketentuan memesan minimal 50 ribu mendapat diskon 50% dengan maksimal potongan harga 50 ribu
promo DITRAKTIRDEMY 
    ketentuan memesan minimal 25 ribu mendapat diskon 60% dengan maksimal potongan harga 30 ribu
tidak ada promo
    false

2 km pertama dikenakan tarif 5 ribu
    1 km selanjutnya dikenakan penambahan 3 ribu
beberapa restaurant dikenakan pajak 5% dari harga makanan yang dipesan (true) dan tidak dikenakan pajak (false)
*/

function arkFood(Harga, Voucher, Jarak, Pajak){
    
    let statusDiskon;
    let tempTotal;
    if(Voucher == 'ARKAFOOD5'){
        if(Harga >= 50000){
            statusDiskon = Harga * (50/100);
            if(statusDiskon > 50000){
                statusDiskon = 50000;
                tempTotal = Harga - statusDiskon;
                console.log(`Harga      : ${Harga}`);
                console.log(`Potongan   : ${tempTotal}`);
            }else{
                tempTotal = Harga - statusDiskon;
                console.log(`Harga      : ${Harga}`);
                console.log(`Potongan   : ${tempTotal}`);
            } 
        }
    }else if(Voucher == 'DITRAKTIRDEMY'){
        if(Harga >= 25000){
            statusDiskon = Harga * (60/100);
            if(statusDiskon > 30000){
                statusDiskon = 30000;
                tempTotal = Harga - statusDiskon;
                console.log(`Harga      : ${Harga}`);
                console.log(`Potongan   : ${tempTotal}`);
            }else{
                tempTotal = Harga - statusDiskon;
                console.log(`Harga      : ${Harga}`);
                console.log(`Potongan   : ${tempTotal}`);
            } 
        }
    }else{
        tempTotal = Harga;
        console.log(`Harga      : ${Harga}`);
        console.log(`Potongan   : ${tempTotal}`);
    }

    let statusTarif = 5000;
    let biayaTarif;
    if(Jarak > 2){
        Jarak = Jarak - 2;
        Jarak = Jarak * 3000;
        biayaTarif = Jarak + statusTarif;
        console.log(`Jarak      : ${biayaTarif}`);
    }
    if(Jarak <= 2){
        biayaTarif = statusTarif;
        console.log(`Jarak      : ${biayaTarif}`);
    }

    let statusPajak;
    if(Pajak == true){
        statusPajak = Harga * (5/100);
        console.log(`Pajak      : ${statusPajak}`);
    }else{
        statusPajak = 0;
        console.log(`Pajak      : ${statusPajak}`);
    }

    let subTotal = tempTotal + Jarak + statusPajak;
    console.log(`Sub Total  : ${subTotal}`);

}

// arkFood(harga, voucher, jarak, pajak);
arkFood(75000, 'ARKAFOOD5', 5, true);