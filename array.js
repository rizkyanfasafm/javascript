var mhs = ["Eko", "Andi", "Budi", "Irawan"];
var angka = [4, 8, 3, 1, 2, 3, 8, 0, 10, 5, 60, 30];


// Perulangan array
// for (var i = 0; i < mhs.length; i++) {
//     console.log('Mahasiswa ke- ' + (i + 1) + ' adalah ' + mhs[i]);
// }

// Join Array
// console.log(mhs.join(' '));

// Push and Pop
// mhs.push('Ridho', 'Riko');
// mhs.pop();

// Shift and Unshift
// mhs.unshift('Soleh');
// mhs.shift();

// Splice
// mhs.splice(indexKe, mauDiHapusBerapa, ItemYangDitambahkan);
// Jika mauDiHapusBerapa = 0 maka tidak ada yang di hapus
// mhs.splice(2, 0, 'Doddy');

// Slice
// mhs.Slice(awal,akhir);
// var mhs2 = mhs.slice(1, 4);
// console.log(mhs);
// console.log(mhs2);

// ForEach
// mhs.forEach(function (nama, mahasiswaKe) {
//     console.log('Mahasiswa Ke- ' + (mahasiswaKe + 1) + ' adalah ' + nama);
// })

// Atau

// var cetak = function (e) {
//     console.log(e);
// }

// mhs.forEach(cetak);

// MAP

// var mhs2 = mhs.map(function (nama) {
//     return nama;
// })

// console.log(mhs2.join('-'));

// Sort


// angka.sort(function (a, b) {
//     return a - b;
// });

// console.log(angka);

// Filter
// var angkaBaru = angka.filter(function (e) {
//     return e > 5;
// });
// // Disort paling kecil
// angkaBaru.sort(function (a, b) {
//     return a - b;
// });
// console.log(angkaBaru.join('-'));

// Find
var angkaBaruFind = angka.find(function (e) {
    return e > 5;
});

console.log(angkaBaruFind);