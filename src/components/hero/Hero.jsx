import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import c1 from '../img/c1.png';

const Hero = () => {
  
  return (
    <>
      <div className="container-fluid my-5 mx-2 p-5"  >
        <div className="row p-5 pb-5 pe-lg-5 pt-lg-5 align-items-center rounded-5 border shadow-lg">
          <div className="col-lg-5 p-5 p-lg-5 pt-lg-5">
            <h1 className="display-5 fw-bold lh-5">
              Apa itu Node.js?
            </h1>
            <p className="lead" >
            
Node.js adalah sebuah platform runtime yang dibangun di atas mesin JavaScript V8 milik Chrome, yang memungkinkan Anda untuk menjalankan JavaScript di sisi server. Node.js dirancang untuk membangun aplikasi jaringan yang dapat diskalakan dan berperforma tinggi. Dengan model I/O non-blok yang berbasis event, Node.js sangat efisien dalam menangani banyak koneksi secara bersamaan.

Beberapa fitur utama Node.js meliputi:<br></br>
- sinkron dan Non-blok: Semua API di Node.js bersifat non-blok, artinya server berbasis Node.js tidak akan menunggu data kembali dari panggilan API. Hal ini menjadikan Node.js sangat efisien dan cepat.<br></br>
- Satu Thread: Node.js menggunakan model satu thread dengan event loop, yang memungkinkan untuk mengelola beberapa koneksi bersamaan tanpa overhead dari thread multithreading.<br></br>
- Ekosistem yang Kaya: Node.js memiliki ekosistem paket terbesar di dunia yang dikenal sebagai npm (Node Package Manager), yang menyediakan berbagai pustaka dan alat yang dapat digunakan untuk mengembangkan aplikasi secara cepat dan efisien.
            </p>
            <div className="d-grid gap-4 d-md-flex justify-content-md-start mb-5 mb-lg-5">
              <button type="button" className="btn btn-lg px-5 me-md-1 fw-bold" style={{ backgroundColor: '#7564e5' }}>
              <a className='text-light' href="https://nodejs.org" target="_blank" rel="noopener noreferrer ">Download Node.js</a>
              </button>
              <Link type="button" to="/Conten2" className="btn btn-outline-secondary btn-lg px-5" >
                Install Node.js
              </Link>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 p-5 overflow-hidden shadow-lg" >
            <img className="rounded-lg-3" src={c1} alt="" width="600" height="250" />
          </div>
        </div>
      </div>
      
    </>
  );
};


export default Hero;
