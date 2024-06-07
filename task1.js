// Deteksi palindrom

const deteksiPalindrome = function(kata){
    let hasil = ''
    
    for (let i = kata.length; i > 0; i--){
        hasil += kata[i-1]
    } 
    if (kata === hasil) {
        console.log('Palindrome')
    }
    return 
}

deteksiPalindrome('hahahah')