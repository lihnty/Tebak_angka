var angkaRahasia = Math.floor(Math.random() * 10) + 1;

var kesempatan = 3;

while(kesempatan > 0) {
    var tebakan = prompt('Tebak angka antara 1 sampai 10. Anda memiliki ' + kesempatan + ' kesempatan:');

    if(isNaN(tebakan)) {
        alert('Input bukan angka, silakan masukkan angka antara 1 sampai 10.');
    } else {
        tebakan = Number(tebakan);

        if(tebakan === angkaRahasia) {
            alert('Tebakan Anda benar!');
            break; 
        } else {
            kesempatan--; 
            if(kesempatan > 0) {
                alert('Tebakan Anda salah! Coba lagi.');
            } else {
                alert('Tebakan Anda salah! Kesempatan Anda habis. Angka yang benar adalah ' + angkaRahasia);
            }
        }
    }
}
