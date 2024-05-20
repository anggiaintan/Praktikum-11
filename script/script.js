document.addEventListener("DOMContentLoaded", function() {
    // Populate the angkatan select dropdown
    const angkatanSelect = document.getElementById('angkatan');
    const currentYear = new Date().getFullYear();
    for (let year = 2010; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        angkatanSelect.appendChild(option);
    }
});

function kirimData() {
    // Get form values
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("NIM").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;
    var angkatan = document.getElementById("angkatan").value;
    var date = document.getElementById("date").value;

    // Display values in an alert
    alert(
        "Nama Mahasiswa: " + nama + "\n" +
        "NIM: " + nim + "\n" +
        "Peminatan: " + peminatan + "\n" +
        "Alamat: " + alamat + "\n" +
        "Angkatan: " + angkatan + "\n" +
        "Tanggal: " + date
    );
}
