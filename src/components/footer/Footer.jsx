import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
    return (
        <footer className="text-center" style={{ backgroundColor: '#7564e5' }}>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container p-1 ">
                <section className="mb-1">
                    
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#dd4b39' }}
                        href='mailto:2022610031.fikri@itp.ac.id'
                        role="button"
                        target='_blank'
                    >
                        <i className="fa fa-envelope"></i>
                    </a>

                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="https://www.instagram.com/nickfikri0?igsh=NTc4MTIwNjQ2YQ=="
                        role="button"
                        target='_blank'
                    >
                        <i className="fa fa-instagram"></i>
                    </a>


                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#333333' }}
                        href="https://github.com/fikrihidyat25"
                        role="button"
                        target='_blank'
                    >
                        <i className="fa fa-github"></i>
                    </a>
                </section>
            </div>

            <div className="text-center p-3" >
                © 2024 Copyright
            </div>
        </footer>
    );
}

export default Footer;
