let arraysOfCute = [2, 25, 4, 14, 17, 30, 8]
let status1;
let status2;
function SeleksiNilai(nilaiAwal, nilaiAkhir, arraysOfCute){
    if((nilaiAwal < nilaiAkhir) === false){
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        status1 = false;
    }
    if((arraysOfCute.length <= 5) === true){
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        status2 = false
    }
    
    if(status1 === status2){
        for(var counter = 0; counter < arraysOfCute.length; counter++){
            if((arraysOfCute[counter] > nilaiAwal) && (arraysOfCute[counter] < nilaiAkhir)){
                console.log(arraysOfCute[counter]);
            }
        }
    }
}

SeleksiNilai(5, 20, arraysOfCute);