// var angka = parseInt(prompt("Masukan angka "));

// switch (angka) {
//   case 1:
//     alert("anda memasukan angka 1");
//     break;
//   case 2:
//     alert("anda memasukan angka 2");
//     break;
//   case 3:
//     alert("anda memasukan angka 3");
//     break;
//   default:
//     alert("angka yang anda masukan salah");
//     break;
// }

var s = "";
for (i = 0; i < 5; i++) {
  for (j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);
