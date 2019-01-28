// Membuat Object
// var a = 10;
// console.log();


// Cara 1
// function halo() {
//     console.log(this);
//     console.log('Halo');
// }
// this.halo();
// This mengembalikkan object global

// Cara 2 - Object Literal
// var obj = {
//     nama: 'Rizky',
//     umur: 30
// };
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// This mengembalikkan object yang bersangkutan

// Cara3 Constructor
function halo() {
    console.log(this);
    console.log('Halo');
}
var obj1 = new halo();
var obj2 = new halo();
// this mengembalikkan object yang baru