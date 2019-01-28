function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (penumpang.length == 0) {
            console.log('Angkot masih kosong');
            return false;
        } else {
            for (var i = 0; i < penumpang.length; i++) {
                if (namaPenumpang == penumpang[i]) {
                    penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }
            }
            console.log('Maaf penumpang yang anda maksud tidak ada');
            return this.penumpang;
        }
    }
}

var angkot1 = new Angkot('Rizky', ['Kudus', 'Semarang'], [], 0);