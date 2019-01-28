// Object Literal
var mhs1 = {
    nama: "Rizky Anfasa F M",
    umur: 20,
    ips: [3.00, 2.5, 4.0],
    alamat: {
        kota: "Kudus",
        jalan: "Merak"
    },
};

var mhs2 = {
    nama: "Budiman",
    umur: 50,
    ips: [1.00, 2.5, 2.0],
    alamat: {
        kota: "Cilacap",
        jalan: "Merbabu"
    },
};

// Function Declaration

function buatObjectMahasiswa(nama, nim, umur, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.umur = umur;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Riki', '20160140032', 20, 'TI');

// Constructor

function Mahasiswa(nama, nim, umur, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.umur = umur;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Messi', '20160140032', 30, 'TI')