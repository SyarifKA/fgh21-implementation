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
            for (let i = 0; i < temp.length - 1; i++) {
                for (let j = 0; j < temp.length - 1 - i; j++) {
                    if (temp[j] > temp[j + 1]) {
                        let result = temp[j];
                        temp[j] = temp[j + 1];
                        temp[j + 1] = result;
                    }
                }
            }
            ba = bb + 1
            bb = bb + 1
            hasil1 = [...hasil1, temp]
        }
    }
    
    let hasil2 = ''
    for (let i = 0; i < hasil1.length; i++) {
        for (let j = 0; j < hasil1[i].length; j++) {
            hasil2 += hasil1[i][j]
        }
    }
    
    let hasil3 = +hasil2
    
    console.log(hasil3)
    console.log(typeof hasil3)
}

divideAndSort(32410650978)