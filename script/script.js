function kirimData(){
    var nama = document.getElementById("nama").value
    var nim = document.getElementById("nim").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var alamat = document.getElementById("alamat").value

    alert(
        "Nama Mahasiswa: " + nama +
        "NIM: " + nim +
        "Peminatan: " + peminatan +
        "Alamat: " + alamat
    )
}