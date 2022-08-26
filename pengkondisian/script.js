let jmlAngkot = 10;
let angkotBrop = 6;
let angkot = 1;

// latihan pengkondisian
for (let noAngkot = angkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBrop && noAngkot !== 5) {
    console.log(`Angkot No ${noAngkot} Beroperasi dengan baik`);
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log(`Angkot No ${noAngkot} Sedang lembur`);
  } else {
    console.log(`Angkot No ${noAngkot} Sedang tidak beroperasi`);
  }
}

// if(kodisi){aksi}else if(kodisi2){aksi2}else{aksi}
