import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdknodja");

  return (
    <div className="contact-area section-padding my-5 mx-5 p-5" id='2'>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <div className="container">
        <div className="section-title text-center">
          <h1>Saran dan Masukan</h1>
          <p>Tulis dan kirimkan kementar anda</p>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="contact">
              <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div className="form-group col-md-12">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" disabled={state.submitting} className="btn btn-contact-bg" title="Submit Your Message!">
                      Send Message
                    </button>
                  </div>
                </div>
                {state.succeeded && <p>Thanks for joining!</p>}
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="single_address">
              <i className="fa fa-map-marker"></i>
              <h4>Alamat</h4>
              <p>Padang, Indonesia</p>
            </div>
            <div className="single_address">
              <i className="fa fa-envelope"></i>
              <h4>Email</h4>
              <p>2022610031.fikri@2022610031</p>
            </div>
            <div className="single_address">
              <i className="fa fa-phone"></i>
              <h4>No.telp</h4>
              <p>(+62)8238x96a8a</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
