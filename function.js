function volumeKubus(angkaPertama, angkaKedua) {
    var total, kubusSatu, kubusDua;

    kubusSatu = angkaPertama * angkaPertama * angkaPertama;
    kubusDua = angkaKedua * angkaKedua * angkaKedua;

    total = kubusSatu + kubusDua;

    return total;
}

var a = prompt('masukkan angka pertama');
var b = prompt('masukkan angka kedua');
alert(volumeKubus(a, b));