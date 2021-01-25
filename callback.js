function asyncDivision(dividend, divisor, cb){
    setTimeout(() => {
        let err;

        if(isNaN(dividend) && isNaN(divisor)){
            err = 'One of dividend or divisor is not a number';
            cb(err, null)
        }

        if(divisor === 0){
            err = 'Divided by zero';
            cb(err, null);
        }

        const quotient = Number(dividend) / Number(divisor);
        cb(null, quotient);
    }, 2000);
}

asyncDivision(14, 2, (err, result) => {
    if(err){
        throw new Error(err);
    }
    console.log(err, result);
});

console.log('This should run before the asyncDivision returns its result.');