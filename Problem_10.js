/*
2 program promise
*/

// promise 1    --------------------------------------------------
let membuatJanji = new Promise(
    (resolve, reject) => {
        resolve("Ketemu di UPI");
        //reject(new Error("Ketemu di UNPAD"));
    }
);
membuatJanji
    .then((result) => { 
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// promise 2    --------------------------------------------------
// dapatkan angka
const ambilAngka = (angkaAwal, angkaAkhir) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            if(isNaN(angkaAwal) || isNaN(angkaAkhir)){
                err = "Input bukan angka";
                reject(err);
            }else{
                resolve(true);
            }
        });
    }
);
// operasi penambahan
const operatorTambah = (angkaAwal, angkaAkhir) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            let hasilTambah = angkaAwal + angkaAkhir;
            resolve(hasilTambah);
        }, 1000);
    }
)
// operasi pengurangan
const operatorKurang = (angkaAwal, angkaAkhir) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            let hasilKurang = angkaAwal - angkaAkhir;
            resolve(hasilKurang);
        }, 2000);
    }
)
// operasi perkalian
const operatorKali = (angkaAwal, angkaAkhir) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            let hasilKali = angkaAwal * angkaAkhir;
            resolve(hasilKali);
        }, 3000);
    }
)
// operasi pembagian
const operatorBagi = (angkaAwal, angkaAkhir) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            let hasilBagi = angkaAwal / angkaAkhir;
            resolve(hasilBagi);
        }, 4000);
    }
)

let inputSatu = 10;
let inputDua = 5;
ambilAngka(inputSatu, inputDua)
    // promise penambahan
    .then(() => {
        return operatorTambah(inputSatu, inputDua);
    })
    .then(hasilTambah => {
        console.log(hasilTambah);
        return hasilTambah;
    })
    // promise pengurangan
    .then(() => {
        return operatorKurang(inputSatu, inputDua);
    })
    .then(hasilKurang => {
        console.log(hasilKurang);
        return hasilKurang;
    })
    // promise perkalian
    .then(() => {
        return operatorKali(inputSatu, inputDua);
    })
    .then(hasilKali => {
        console.log(hasilKali);
        return hasilKali;
    })
    // promise pembagian
    .then(() => {
        return operatorBagi(inputSatu, inputDua);
    })
    .then(hasilBagi => {
        console.log(hasilBagi);
        return hasilBagi;
    })
    .catch((err) => console.log(err));