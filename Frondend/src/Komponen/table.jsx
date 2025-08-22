import { useState } from "react";
import { useEffect } from "react";

export default function MyTable(){
const [dataSiswa, setDataSiswa] = useState([]);

  

function handleDelete(id) {
  fetch(`http://localhost:3000/siswa/${id}`, {
    method: 'DELETE',
  })
}

useEffect(() => {


  fetch('http://localhost:3000/siswa')
    .then(response => response.json())
    .then(data => {
      setDataSiswa(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

    return (
    
      <div>
            <h2> List data</h2>
            <p>ini adalah data list data yang telah anda masukan</p>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Kode</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Jurusan</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      dataSiswa.map((siswa) => (
                        <tr key={siswa.kode_siswa} scope="row">
                            <td>{siswa.kode_siswa}</td>
                            <td>{siswa.nama_siswa}</td>
                            <td>{siswa.alamat_siswa}</td>
                            <td>{siswa.tanggal_siswa}</td>
                            <td>{siswa.jurusan_siswa}</td>
                            <td> 
                                <button >Edit</button>
                                <form onClick={() => handleDelete(siswa.kode_siswa)}><button type="button" className="btn btn-outline-danger">Delete</button></form>
                            </td>
                        </tr>   
                      ))
                    }</tbody>
            </table>
    </div>

  );
}






