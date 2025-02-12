import React from 'react';
import { Link } from 'react-router-dom';
import HeaderRelawan from './HeaderLogin';
import Footer from '../components/Footer';
import proyek1 from '../assets/proyek1.png';
import kegiatan1 from '../assets/kegiatan1.png';

const DetailProyek = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderRelawan />
      <div className="container mx-auto p-8 pt-20">
        <Link to="/CariProyek" className="text-black text-3xl font-bold mb-4 inline-block">&larr; Kembali</Link>
        
        <div className="flex justify-center mb-4">
          <img
            src={proyek1}
            alt="Peduli Perubahan Iklim"
            className="rounded-lg w-full max-w-4xl h-auto object-cover" 
          />
        </div>

        <div className="border-b-2 border-gray-300 my-8"></div> 

        <div className="flex items-center mb-4">
          <img src={kegiatan1} alt="FYP Media" className="h-10 w-10 rounded-full mr-4"/>
          <div>
            <h2 className="text-xl font-bold">Peduli Perubahan Iklim</h2>
            <p className="text-gray-600">FYP Media</p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
            <p className="text-black mb-8 max-w-3xl">
              Perubahan iklim menjadi fenomena yang tidak bisa dihindari seiring berkembangnya zaman. Terus bertambahnya populasi manusia membuat perubahan iklim harus disikapi secara bijak. Maka penting untuk mengetahui ragam faktor dan cara mencegahnya.
            </p>
            <h3 className="text-xl font-bold mb-4">Detail Proyek</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Nama Proyek:</h4>
              <p>Peduli Perubahan Iklim</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Relawan Dibutuhkan:</h4>
              <p>20 Relawan</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Total Jam Kerja:</h4>
              <p>3 Jam</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Tugas Relawan:</h4>
              <ul className="list-disc list-inside">
                <li>Mengikuti kuliah kerja tepat waktu</li>
                <li>Mengambil kegiatan proyek sampai akhir</li>
                <li>Tertib dan teratur selama kegiatan</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Kriteria Relawan:</h4>
              <ul className="list-disc list-inside">
                <li>Memiliki semangat dalam dirinya</li>
                <li>Mampu bekerja sama</li>
                <li>Jujur dan bertanggung jawab</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Perlengkapan Relawan:</h4>
              <ul className="list-disc list-inside">
                <li>Membawa obat-obatan pribadi</li>
                <li>Membawa makanan ringan</li>
                <li>Membawa alat tulis dan catatan</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded-lg max-w-lg shadow-lg "> 
            <h3 className="text-xl font-bold mb-2 ">Open Recruitment: Mari Bergabung Jadi Tim Kami</h3>
            <div className="mb-4">
              <button className="bg-blue-500 text-white p-2 rounded-lg mr-2">Proyek</button>
              <button className="bg-blue-500 text-white p-2 rounded-lg mr-2">Pendidikan</button>
              <button className="bg-blue-500 text-white p-2 rounded-lg">Pengembangan Anak Muda</button>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Periode Proyek:</h4>
              <p>16 Mei - 25 Mei</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Lokasi:</h4>
              <p>Inspiration Factory Foundation Citywalk Sudirman, GF Jalan K.H. Mas Mansyur No.121 Karet Tengsin, Kec. Tanah Abang, Kota Jakarta Pusat</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Waktu:</h4>
              <p>09:00 - Selesai</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white p-2 rounded-lg">Daftar Relawan</button>
              <button className="bg-gray-500 text-white p-2 rounded-lg">Kontak Organisasi</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProyek;
