const MTK = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const IPA = 69;

let amountScore = [MTK, bahasaIndonesia, bahasaInggris, IPA];
let i;
let sumScore = 0;
for(i = 0; i < amountScore.length; i++){
    sumScore = sumScore + amountScore[i];
}
let averageScore = sumScore / amountScore.length;
console.log("Rata-rata = " + averageScore);

if((MTK != null) && (bahasaIndonesia != null) && (bahasaInggris != null) && (IPA != null)){
    if(averageScore >= 90){
        console.log("Grade A");
    }else if(averageScore >= 80){
        console.log("Grade B");
    }else if(averageScore >= 70){
        console.log("Grade C");
    }else if(averageScore >= 60){
        console.log("Grade D");
    }else{
        console.log("Grade E");
    }
}else{
    console.log("Nilai harus lengkap terlebih dahulu");
}