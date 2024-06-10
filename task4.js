// Mengurutkan bilangan dengan angka 0 sebagai pemisah

const divideAndSort = function (angka) {

    let strAngka = angka+''
    let ba, bb = 0
    
    let hasil1 = ''
    
    for (let i = 0; i <= strAngka.length; i++){
        // let data = []
        if (strAngka[i] === '0' || i == strAngka.length) {
            ba = i
            let temp = []
            for (bb; bb < ba; bb++) {
                temp = [...temp, +strAngka[bb]]
            }
            // Urutkan hasil filter
            for (let j = 0; j < temp.length - 1; j++) {
                for (let k = 0; k < temp.length - 1 - j; j++) {
                    if (temp[k] > temp[k + 1]) {
                        let result = temp[k];
                        temp[k] = temp[k + 1];
                        temp[k + 1] = result;
                    }
                }
            }
            ba = bb + 1
            bb = bb + 1
            hasil1 = [...hasil1, temp]
        }
    }
    
    let hasil2 = ''
    for (let l = 0; l < hasil1.length; l++) {
        for (let m = 0; m < hasil1[l].length; m++) {
            hasil2 += hasil1[l][m]
        }
    }
    
    let hasil3 = +hasil2
    
    console.log(hasil3)
    console.log(typeof hasil3)
}

divideAndSort(32410650978)