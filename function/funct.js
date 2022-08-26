function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}
console.log(kali(tambah(2, 3), tambah(2, 3)));
console.log(tambah(8, 7));

//golobal / window scope
var a = 2;
function test() {
  var a = 10;
  console.log(window.a);
}

test();
