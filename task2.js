// Reverse kalimat

const reverseKalimat = function (kalimat) {
    let hasil = ''
    let bb = 0
    
    for (let i = 0; i <= kalimat.length; i++) {
        if (kalimat[i] == ' ' || i== kalimat.length) {
            let ba = i
            let temp = ''
            for ( bb; bb < ba; bb++) {
                temp += kalimat[bb]
            }
            hasil = temp + (hasil ? ' ' + hasil : hasil)
            bb = bb + 1
            }
    }
    console.log(hasil)
}

reverseKalimat('saya belajar javascript')