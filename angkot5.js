for (var noAngkot = 1; noAngkot <= 10; noAngkot++) {
    if (noAngkot < 7) {
        console.log('Angkot No. ' + noAngkot + 'Sedang baik');
    } else if (noAngkot == 8 || noAngkot == 10) {
        console.log('Angkot No. ' + noAngkot + 'sedang lemburan');
    } else {
        console.log('Angkot No. ' + noAngkot + 'sedang tidak baik');
    }
}