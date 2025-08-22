const express = require('express')
const db = require('./db');
const app = express()
const port = 3000
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hey there! hallo dunia')
})

app.post("/siswa", (req, res) => {
  console.log('Received data:', req.body);
  const { kode,nama, alamat, tanggal, jurusan } = req.body;
  const sql = "INSERT INTO tb_siswa (kode_siswa, nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [kode, nama, alamat, tanggal, jurusan], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, kode, nama, alamat, tanggal, jurusan });
  });
});

app.get("/siswa", (req, res) => {
  const sql = "SELECT * FROM tb_siswa";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.patch("/siswa/:id", (req, res) => {
  const { id } = req.params;
  const { nama, alamat, tanggal, jurusan } = req.body;

  const sql = "UPDATE tb_siswa SET nama_siswa = ?, alamat_siswa = ?, tanggal_siswa = ?, jurusan_siswa = ? WHERE kode_siswa = ?";
  db.query(sql, [nama, alamat, tanggal, jurusan, id], (err, result) => {
    if (err) throw err;
    res.json({ id, nama, alamat, tanggal, jurusan });
  });
}); 

app.delete("/siswa/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM tb_siswa WHERE kode_siswa = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json({ id });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
