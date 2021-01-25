const p1 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      reject('error 1');
    }, 1000);
  })
}

const p2 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      reject('error 2');
    }, 1000);
  })
}


// async function ini nilai baliknya adalah Promise
// yang resolve dengan nilai 'ERROR'
const run = async function() {
  // error bisa dihandel pake catch
  const b = await p1().catch(err => console.log(err))

  // atau try-catch
  try{
    const c = await p2();
  }catch(err){
    console.log(err);
    return 'ERROR';
  }

  console.log('selesai');
  return 'DONE';

}

run().then( res => console.log(res));