document.addEventListener("DOMContentLoaded", function() {
    const kurangButton = document.getElementById("kurang");
    const tambahButton = document.getElementById("Tambah");

    const kurang2Button = document.getElementById("kurang2");
    const tambah2Button = document.getElementById("Tambah2");

    const kurang3Button = document.getElementById("kurang3");
    const tambah3Button = document.getElementById("Tambah3");

    const kurang4Button = document.getElementById("kurang4");
    const tambah4Button = document.getElementById("Tambah4");

    const kurang5Button = document.getElementById("kurang5");
    const tambah5Button = document.getElementById("Tambah5");

    const kurang6Button = document.getElementById("kurang6");
    const tambah6Button = document.getElementById("Tambah6");

    const qtyInput = document.getElementById("qty");
    const qtyInput2 = document.getElementById("qty2");
    const qtyInput3 = document.getElementById("qty3");
    const qtyInput4 = document.getElementById("qty4");
    const qtyInput5 = document.getElementById("qty5");
    const qtyInput6 = document.getElementById("qty6");

    const addCartButton = document.getElementById("add");
    const add2CartButton = document.getElementById("add2");
    const add3CartButton = document.getElementById("add3");
    const add4CartButton = document.getElementById("add4");
    const add5CartButton = document.getElementById("add5");
    const add6CartButton = document.getElementById("add6");
                    
    const myCartTable = document.querySelector(".table tbody");
    const totalPembelianCell = document.querySelector(".table tbody tr:nth-child(1) td:last-child");
    const pajakCell = document.querySelector(".table tbody tr:nth-child(2) td:last-child");
    const totalBayarCell = document.querySelector(".table tbody tr:nth-child(3) td:last-child");
  
    let totalPembelian = 0;
    const pajakRate = 0.11;
  
    kurangButton.addEventListener("click", function() {
      if (qtyInput.value > 1) {
        qtyInput.value--;
      }
    });
  
    tambahButton.addEventListener("click", function() {
      qtyInput.value++;
    });
 
    kurang2Button.addEventListener("click", function() {
      if (qtyInput2.value > 1) {
        qtyInput2.value--;
      }
    });
  
    tambah2Button.addEventListener("click", function() {
      qtyInput2.value++;
    });
    
    kurang3Button.addEventListener("click", function() {
      if (qtyInput3.value > 1) {
        qtyInput3.value--;
      }
    });
  
    tambah3Button.addEventListener("click", function() {
      qtyInput3.value++;
    });
    
    kurang4Button.addEventListener("click", function() {
      if (qtyInput4.value > 1) {
        qtyInput4.value--;
      }
    });
  
    tambah4Button.addEventListener("click", function() {
      qtyInput4.value++;
    });
    
    kurang5Button.addEventListener("click", function() {
      if (qtyInput5.value > 1) {
        qtyInput5.value--;
      }
    });
  
    tambah5Button.addEventListener("click", function() {
      qtyInput5.value++;
    });

    kurang6Button.addEventListener("click", function() {
      if (qtyInput6.value > 1) {
        qtyInput6.value--;
      }
    });
  
    tambah6Button.addEventListener("click", function() {
      qtyInput6.value++;
    });

    addCartButton.addEventListener("click", function() {
      const selectedBarang = barang.find(item => item.id === "1"); // Change the ID accordingly
      const namaBarang = selectedBarang.nama;
      const hargaBarang = selectedBarang.price;
      const jumlah = parseInt(qtyInput.value);
  
      totalPembelian += hargaBarang * jumlah;
  
      totalPembelianCell.textContent = formatCurrency(totalPembelian);
      pajakCell.textContent = formatCurrency(totalPembelian * pajakRate);
      totalBayarCell.textContent = formatCurrency(totalPembelian + (totalPembelian * pajakRate));
  
      const cartRow = document.createElement("tr");
      cartRow.innerHTML = `
        <th scope="row">
          <img src="./gambar/gambar1.jpg" alt="Product Image" width="50">
        </th>
        <td>${namaBarang}</td>
        <td>${jumlah}</td>
      `;
  
      myCartTable.appendChild(cartRow);
    });

    add2CartButton.addEventListener("click", function() {
      const selectedBarang = barang.find(item => item.id === "2"); // Change the ID accordingly
      const namaBarang = selectedBarang.nama;
      const hargaBarang = selectedBarang.price;
      const jumlah = parseInt(qtyInput2.value);
  
      totalPembelian += hargaBarang * jumlah;
  
      totalPembelianCell.textContent = formatCurrency(totalPembelian);
      pajakCell.textContent = formatCurrency(totalPembelian * pajakRate);
      totalBayarCell.textContent = formatCurrency(totalPembelian + (totalPembelian * pajakRate));
  
      const cartRow = document.createElement("tr");
      cartRow.innerHTML = `
        <th scope="row">
          <img src="./gambar/gambar1.jpg" alt="Product Image" width="50">
        </th>
        <td>${namaBarang}</td>
        <td>${jumlah}</td>
      `;
  
      myCartTable.appendChild(cartRow);
    });

    add3CartButton.addEventListener("click", function() {
      const selectedBarang = barang.find(item => item.id === "3"); // Change the ID accordingly
      const namaBarang = selectedBarang.nama;
      const hargaBarang = selectedBarang.price;
      const jumlah = parseInt(qtyInput3.value);
  
      totalPembelian += hargaBarang * jumlah;
  
      totalPembelianCell.textContent = formatCurrency(totalPembelian);
      pajakCell.textContent = formatCurrency(totalPembelian * pajakRate);
      totalBayarCell.textContent = formatCurrency(totalPembelian + (totalPembelian * pajakRate));
  
      const cartRow = document.createElement("tr");
      cartRow.innerHTML = `
        <th scope="row">
          <img src="./gambar/gambar1.jpg" alt="Product Image" width="50">
        </th>
        <td>${namaBarang}</td>
        <td>${jumlah}</td>
      `;
  
      myCartTable.appendChild(cartRow);
    });

    add4CartButton.addEventListener("click", function() {
      const selectedBarang = barang.find(item => item.id === "4"); // Change the ID accordingly
      const namaBarang = selectedBarang.nama;
      const hargaBarang = selectedBarang.price;
      const jumlah = parseInt(qtyInput4.value);
  
      totalPembelian += hargaBarang * jumlah;
  
      totalPembelianCell.textContent = formatCurrency(totalPembelian);
      pajakCell.textContent = formatCurrency(totalPembelian * pajakRate);
      totalBayarCell.textContent = formatCurrency(totalPembelian + (totalPembelian * pajakRate));
  
      const cartRow = document.createElement("tr");
      cartRow.innerHTML = `
        <th scope="row">
          <img src="./gambar/gambar1.jpg" alt="Product Image" width="50">
        </th>
        <td>${namaBarang}</td>
        <td>${jumlah}</td>
      `;
  
      myCartTable.appendChild(cartRow);
    });

    add5CartButton.addEventListener("click", function() {
      const selectedBarang = barang.find(item => item.id === "5"); // Change the ID accordingly
      const namaBarang = selectedBarang.nama;
      const hargaBarang = selectedBarang.price;
      const jumlah = parseInt(qtyInput5.value);
  
      totalPembelian += hargaBarang * jumlah;
  
      totalPembelianCell.textContent = formatCurrency(totalPembelian);
      pajakCell.textContent = formatCurrency(totalPembelian * pajakRate);
      totalBayarCell.textContent = formatCurrency(totalPembelian + (totalPembelian * pajakRate));
  
      const cartRow = document.createElement("tr");
      cartRow.innerHTML = `
        <th scope="row">
          <img src="./gambar/gambar1.jpg" alt="Product Image" width="50">
        </th>
        <td>${namaBarang}</td>
        <td>${jumlah}</td>
      `;
  
      myCartTable.appendChild(cartRow);
    });

    add6CartButton.addEventListener("click", function() {
      const selectedBarang = barang.find(item => item.id === "6"); // Change the ID accordingly
      const namaBarang = selectedBarang.nama;
      const hargaBarang = selectedBarang.price;
      const jumlah = parseInt(qtyInput6.value);
  
      totalPembelian += hargaBarang * jumlah;
  
      totalPembelianCell.textContent = formatCurrency(totalPembelian);
      pajakCell.textContent = formatCurrency(totalPembelian * pajakRate);
      totalBayarCell.textContent = formatCurrency(totalPembelian + (totalPembelian * pajakRate));
  
      const cartRow = document.createElement("tr");
      cartRow.innerHTML = `
        <th scope="row">
          <img src="./gambar/gambar1.jpg" alt="Product Image" width="50">
        </th>
        <td>${namaBarang}</td>
        <td>${jumlah}</td>
      `;
  
      myCartTable.appendChild(cartRow);
    });
  
    // Helper function to format currency
    function formatCurrency(amount) {
      return "Rp " + amount.toLocaleString("id-ID");
    }
  
    const barang = [
      {
        "id": "1",
        "nama": "Jeruk",
        "price": 10000. 
      },
      {
        "id": "2",
        "nama": "Apel",
        "price": 20000
      },
      {
        "id": "3",
        "nama": "Nangka",
        "price": 30000
      },
      {
        "id": "4",
        "nama": "Rambutan",
        "price": 40000
      },
      {
        "id": "5",
        "nama": "Durian",
        "price": 50000
      },
      {
        "id": "6",
        "nama": "Leci",
        "price": 60000
      },
    ];
  });