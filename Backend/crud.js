app.post("/siswa", (req, res) => {
  const { nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa } = req.body;
  const sql = "INSERT INTO siswa (nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa) VALUES (?, ?, ?, ?)";
  db.query(sql, [nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa });
  });
});


app.get("/siswa", (req, res) => {
  const sql = "SELECT * FROM siswa";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
