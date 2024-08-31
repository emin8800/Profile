import "./contact.css";
import React from 'react';
import ReactDOM from 'react-dom';

function Contact() {
  return (
    <>
      <div className="container2" id="contact">
        <main className="content2">
          <section className="about">
            <h2>Services</h2>
            <form action="" className="forms">
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder="Name" />

              <label htmlFor="">Your Email</label>
              <input type="email" placeholder="email" />

              <textarea name="" id="" placeholder="Meluamt..."></textarea>

              <h3>Phone:</h3>
              <p>+994515966841</p>

              <h3>Email:</h3>
              <p>hesenovemin58@gmail.com</p>

              <h3>Location</h3>
              <p>Sumqayit seher</p>

              <button type="sybmit">Send message</button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default Contact;
