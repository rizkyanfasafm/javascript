var tanya = true;

while (tanya) {
    var pilihanUser = prompt('pilih gajah,semut, atau orang');

    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    var hasil = '';
    if (pilihanUser == comp) {
        hasil = 'Seri';
    } else if (pilihanUser == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (pilihanUser == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (pilihanUser == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    }

    alert('Kamu milih ' + pilihanUser + ' dan komputer milih ' + comp + ' hasilnya kamu ' + hasil);
    tanya = confirm('Mau main lagi?');
}

alert('Terima Kasih sudah bermain');