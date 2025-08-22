

export default function MyForm(){

  function inputdata(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    

    try {
      fetch('http://localhost:3000/siswa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    alert("Data Berhasil Terkirim");
    } catch (error) {
      console.error('Error:', error);
      
    }
  }

  return (
    <div>
     <form method="POST" onSubmit={inputdata}>
        <label htmlFor="kode">Kode:</label>
        <input type="text" name="kode" placeholder="121205" /><br />

        <label htmlFor="nama">Nama:</label>
        <input type="text" name="nama" placeholder="Doni" /><br />

        <label htmlFor="alamat">Alamat:</label>
        <textarea name="alamat" placeholder="Nama jalanya "></textarea><br />

        <label htmlFor="tanggal">Tanggal:</label>
        <input type="date" name="tanggal" placeholder="12-05-2005" /><br />

        <label htmlFor="jurusan">Jurusan:</label>
        <select id="cars" name="jurusan">
          <option value="RPL">Rekayasa Perangkat Lunak</option>
          <option value="TKJ">Teknik Komputer Jaringan</option>
          <option value="Tetrans">Teknik Transmisi</option>
          <option value="TP4">Penyiaran & Broadcasting</option>
        </select>

        {/* <input type="text" name="message" placeholder="Hello!" /><br /> */}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}






