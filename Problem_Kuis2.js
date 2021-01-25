function reversePyramid(input){
    let spasi = '';
    for(let i = input; i >= 1; i--){
        for(let j = input; j >= i; j--){
            spasi = spasi + ' ';
        }
        for(let k = i; k >= 1; k--){
            spasi = spasi + '*';
        }
        for(let l = i; l > 1; l--){
            spasi = spasi + '*';
        }
        console.log(spasi);
        spasi = '';
    }
}

reversePyramid(3);