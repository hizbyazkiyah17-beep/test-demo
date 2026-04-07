const sum = require('./sum');

test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test ('menambahkan dua angka dengan benar', () => {
    // Arrage 
    const angka1 = 5;
    const angka2 = 10;
    const hasilEkspetasi = 15;

    // Act
    const hasilAktual = sum(angka1, angka2);

    // Assert
    expect(hasilAktual).toBe(hasilEkspetasi);
});

