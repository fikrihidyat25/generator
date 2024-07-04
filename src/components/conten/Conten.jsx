import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import foto4 from '../img/foto4.png';
import './conten.css';

function Conten() {
    const membuat = `
mkdir qr-code-generator 
cd qr-code-generator`;
    const inisialisasi = `
npm init -y`;
    const pustaka = `
npm install inquirer qr-image`;
    const codeUtama = `
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    { message: "Masukkan URL:", name: "URL" }
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
    console.log(\`QR code untuk URL: \${url} telah dihasilkan dan disimpan sebagai qr_code.png\`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt tidak dapat ditampilkan di lingkungan ini.");
    } else {
      console.error("Terjadi kesalahan:", error);
    }
  });
`;
    const run = `npx babel-node index.js`;
    const run1 = `npm install @babel/core @babel/cli @babel/preset-env @babel/node`;
    const struktur = `qr-code-generator/
├── node_modules/
├── package.json
└── index.js`;

    return (
        <div className="conten-container" >
            <div className="judul pt-5 my-5 text-center border-bottom" id="Conten">
                <h1 className="display-5 fw-bold my-5">Tutorial QR Code Generator</h1>
                <div className="col-lg-8 mx-auto">
                    <p className="lead mb-2 text-black p-3 text-start">
                        Dalam tutorial ini, kita akan membahas cara membuat generator kode QR sederhana menggunakan Node.js. Kode QR adalah cara yang praktis untuk menyimpan informasi seperti URL, teks, atau data lainnya yang dapat dipindai dengan kamera ponsel.
                        Kami akan menggunakan beberapa pustaka Node.js populer seperti inquirer dan qr-image.
                    </p>
                    <h3 className="h31 fw-bold text-start">Instalasi Node.js dan npm</h3>
                    <p className="p1 text-start">
                        Pastikan Anda telah menginstal Node.js dan npm (Node Package Manager) di sistem Anda. Jika belum,
                        Anda dapat mengunduh dan menginstalnya dari Tombol Download situs resmi Node.js
                    </p>
                    <h3 className="h31 fw-bold text-start">Membuat Proyek Baru</h3>
                    <p className="p1 text-start">
                        Buat direktori baru untuk proyek Anda dan navigasi ke direktori tersebut:
                    </p>
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
                        {membuat.trim()}
                    </SyntaxHighlighter>
                    <h3 className="h31 fw-bold text-start">Inisialisasi Proyek dengan npm</h3>
                    <p className="p1 text-start">
                        Inisialisasi proyek Anda dengan npm:
                    </p>
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
                        {inisialisasi.trim()}
                    </SyntaxHighlighter>
                    <h3 className="h31 fw-bold text-start">Instal Pustaka yang Dibutuhkan</h3>
                    <p className="p1 text-start">
                        Instal pustaka inquirer dan qr-image:
                    </p>
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
                    <h3 className="h31 fw-bold text-start">Menulis Kode untuk Generator QR Code</h3>
                    <p className="p1 text-start">
                        Buat file baru bernama index.js dan tambahkan kode berikut:
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
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
                        {codeUtama.trim()}
                    </SyntaxHighlighter>
                    <h3 className="h31 fw-bold text-start">Menjalankan Kode</h3>
                    <p className="p1 text-start">
                        Untuk menjalankan kode ini, gunakan perintah berikut:
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
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
                        {run.trim()}
                    </SyntaxHighlighter>
                    <p className="p1 text-start">
                        Jika Anda belum menginstal Babel, Anda bisa menginstalnya dengan perintah berikut:
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
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
                        {run1.trim()}
                    </SyntaxHighlighter>
                    <h3 className="h31 fw-bold text-start">Struktur Direktori Proyek</h3>
                    <p className="p1 text-start">
                        Proyek Anda seharusnya memiliki struktur direktori sebagai berikut:
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
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
                        {struktur.trim()}
                    </SyntaxHighlighter>
                    <p className="p1 text-start">
                        Jika berhasil maka tampilan pada terminal vscode akan seperti gambar dibawah:
                    </p>
                    <p className="lead mb-4 text-start">
                        Anda telah berhasil membuat generator QR Code sederhana menggunakan Node.js. Anda dapat mengembangkan proyek ini lebih lanjut dengan menambahkan
                        fitur-fitur lain seperti menyimpan QR Code dalam format lain atau mengintegrasikan dengan aplikasi web.
                    </p>
                    <div className="overflow-hidden" style={{ maxHeight: '45vh' }}>
                        <div className="container px-5">
                            <img src={foto4} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="990" height="600" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conten;
