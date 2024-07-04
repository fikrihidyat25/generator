import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import foto4 from '../img/foto4.png';

function Conten2() {
    
    const pustaka = `
node -v
npm -v
`;
   

    return (
        <div className="conten-container" >
            <div className="judul pt-5 my-5 text-center border-bottom" id="Conten">
                <h1 className="display-5 fw-bold my-5">Tutorial Instalasi Node.js</h1>
                <div className="col-lg-8 mx-auto">
                    <p className="lead mb-2 text-black p-3 text-start">
                    Node.js adalah runtime JavaScript yang memungkinkan Anda menjalankan kode JavaScript di luar browser. 
                    Ini sangat berguna untuk pengembangan backend dan berbagai jenis aplikasi. Dalam tutorial ini, kita akan membahas cara menginstal Node.
                    js di sistem operasi yang berbeda.
                    </p>
                    <h3 className="h31 fw-bold text-start">1. Mengunduh Node.js</h3>
                    <p className="p1 text-start">
                    <ol>
                        <li>Buka situs resmi Node.js.</li>
                        <li>Anda akan melihat dua versi yang tersedia: LTS (Long Term Support) dan Current. Untuk stabilitas, disarankan memilih versi LTS.</li>
                        <li>Klik tombol "LTS" untuk mengunduh installer Node.js.</li>
                    </ol>
                    </p>
                    <h3 className="h31 fw-bold text-start">2. Instalasi di Windows</h3>
                    <p className="p1 text-start">
                    <ol>
                        <li>Setelah unduhan selesai, buka file installer (.msi) yang telah diunduh.</li>
                        <li>Ikuti instruksi di layar untuk menyelesaikan proses instalasi. Biarkan pengaturan default kecuali Anda memiliki kebutuhan khusus.</li>
                        <li>Pada layar "Tools for Native Modules", pilih untuk menginstal juga "Chocolatey" dan "Tools for Native Modules" untuk mengelola pustaka yang membutuhkan kompiler C++.</li>
                    </ol>
                    </p>
                    
                    <h3 className="h31 fw-bold text-start">Verifikasi Instalasi</h3>
                    <p className="p1 text-start">
                    Setelah instalasi selesai, pastikan Node.js dan npm terinstal dengan benar dengan menjalankan perintah berikut di terminal:
                    <SyntaxHighlighter
                        language="bash"
                        style={dark}
                        className="code-block text-start"
                        customStyle={{
                            maxWidth: '45%',
                            overflowX: 'auto',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            backgroundColor: '#343a40',
                            color: '#fff',
                            border: 'none',
                            padding: '1em'
                        }}
                    >
                        {pustaka.trim()}
                    </SyntaxHighlighter>
                    Outputnya harus menunjukkan versi Node.js dan npm terisntal dapat di cek di terminal cmd atau vscode anda
                    lebih lanjut anda bisa cek <a href='https://nodejs.org/en/learn/getting-started/how-to-install-nodejs'target='_blank'>disini</a>
                    </p>
                    </div>
                </div>
            </div>
       
    );
}

export default Conten2;
