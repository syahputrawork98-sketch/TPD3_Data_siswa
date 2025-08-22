CREATE DATABASE if NOT EXISTS db_data_siswa;

RENAME DATABASE data_siswa TO db_data_siswa;

DROP DATABASE IF EXISTS data_siswa;
USE db_data_siswa;

CREATE TABLE IF NOT EXISTS tb_siswa (
    kode_siswa INT AUTO_INCREMENT PRIMARY KEY,
    nama_siswa VARCHAR(100) NOT NULL,
    alamat_siswa VARCHAR(150) NOT NULL,
    tanggal_siswa DATE NOT NULL,
    jurusan_siswa VARCHAR(100) NOT NULL
);

INSERT INTO tb_siswa (nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa) VALUES
('John Doe', '123 Main St', '2005-01-15', 'Matematika'),
('Jane Smith', '456 Elm St', '2005-02-20', 'Fisika'),
('Sam Brown', '789 Oak St', '2005-03-10', 'Biologi');


