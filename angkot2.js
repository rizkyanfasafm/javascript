var jmlhAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + 'beroperasi dengan baik');
    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlhAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + 'tidak beroperasi dengan baik');
}