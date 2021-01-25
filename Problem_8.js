const cekHariKerja = (day) => {
    var newDay = day.toLowerCase();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === newDay;
            });
            if(cek){
                resolve(cek);
            }else{
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
}

// then catch
cekHariKerja('Senin')
    .then(() => {
        return cekHariKerja('Senin');
    })
    .then((cek) => {
        console.log('(then catch) Hari ini adalah hari kerja');
    })
    .catch((err) => console.log(err));

// try catch
const runningCekHariKerja = async function(){
    try{
        const c = await cekHariKerja('senin');
        console.log('(try catch) Hari ini adalah hari kerja');
    }catch(err){
        console.log(err);
    }
}
runningCekHariKerja();