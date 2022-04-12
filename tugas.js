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



function parameterJarak(jarak){
    var biaya = 0;
    var jarak =4;
    if(jarak <= 2){
        biaya = 5000
    }
    else {
        biaya = 5000 + (jarak - 2) * 3000
    }
    console.log(biaya)   
}


function triangle(n){
    let string = "";
    for (let i = n; i >= 0; i--) {
        for (let j = i; j > 0; j--) {
            string += "*";
        }
        string += "\n";
        }
    console.log(string);
}

triangle(5)


function square(n){
    let string = "";
    for(let i = 0; i < n; i++) { // external loop
        for(let j = 0; j < n; j++) { // internal loop
            if(i === 0 || i === n - 1) {
            string += "*";
            }
            else {
            if(j === 0 || j === n - 1) {
                string += "*";
            }
            else {
                string += " ";
            }
            }
        }
        // newline after each row
        string += "\n";
    }
        // printing the string
        console.log(string);
}

square(10)