// Mengurutkan bilangan dengan angka 0 sebagai pemisah

// const divideAndSort = function () {
    
// }

let angka = 748303187
let strAngka = angka+''
let ba, bb = 0

let hasil = ''

for (let i = 0; i <= strAngka.length; i++){
    if (strAngka[i] === '0' || i == strAngka.length) {
        ba = i
        let temp = []
        for (bb; bb < ba; bb++) {
            temp = [...temp, +strAngka[bb]]
        }

        console.log(temp)
        ba = bb + 1
        bb = bb + 1
        hasil += temp

    }
}
console.log(hasil)

// let convered = +strAngka
// console.log(typeof convered)