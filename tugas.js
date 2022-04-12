console.log('Nama  : Ahmad Farid Noor Mahbub');
console.log('Umur  : 25');
console.log('Pendidikan Terakhir : S1');
console.log('Pemrograman yang pernah dipelajari   :PHP');


// var : tipe data yang global dan dapat berubah rubah nilainya 
// let : tipe data yang tidak bersifat global (hanya dapat digunakan dalam fungsi tsb) namun masih bisa dirubah nilainya
// const : tipe data yang tidak bersifat global, dan datanya fixed (nilainya tetap dan tidak dapat berubah)

var index = 8;

if(index%2==0){
    console.log("genap");
}
else{
    console.log("ganjil");
}

var harga = 2000;
if (harga > 0 && harga < 10000){
    console.log("Murah");
}
else if(harga > 10000 && harga < 25000){
    console.log("Sedang")
}
else {
    console.log("Mahal")
}

for(var i=10; i<=15; i++){
    console.log(i);
}

var i=10;
while(i<=15){
    console.log(i);
    i++;
}

var i=10;
do{
    console.log(i);
    i++;
}
while(i<=15)

function parameterJarak{
    var biaya = 0;
    if(jarak <= 2){
        biaya = 5000
    }
    else {
        biaya = 5000 + (jarak - 2) * 3000
    }
}


