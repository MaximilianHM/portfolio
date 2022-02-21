import "./Contacts.scss";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function Contacts() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_fu23az3",
        "template_fklwcpp",
        form.current,
        "user_dvt9YPs6x3qz7mVtTk7bd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contacts" id="contacts">
      <h1>Contacts</h1>
      <div className="container">
        <div className="left">
          <h2>Check my social Media Media and my CV</h2>
          <div className="leftContainer">
            <div className="linkedIn">
              <a
                href="https://www.linkedin.com/in/maximilianhm/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>

            <div className="gitHub">
              <a
                href="https://github.com/MaximilianHM"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub />
              </a>
            </div>
            <div className="cvLink">
              <a
                href="assets/2022.01 - Maximilian H. Mayer - CV.pdf"
                // download="Maximilian Haut Mayer"
                target="_blank"
              >
                <HiOutlineDocumentDownload />
              </a>
              <a
                href="assets/2022.01 - Maximilian H. Mayer - CV.pdf"
                // download="Maximilian Haut Mayer"
                target="_blank"
              >
                CV download
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <form ref={form} onSubmit={sendEmail}>
            <h2>Send me an e-mail</h2>
            <input
              className="name"
              placeholder="Name"
              type="text"
              name="name"
            />
            <input
              className="email"
              placeholder="E-mail"
              type="email"
              name="email"
            />

            <textarea
              type="text"
              placeholder="Write me a message :)"
              name="message"
            />
            <input className="buttonSubmit" type="submit" value="Send" />

            {message && (
              <div className="replyMessage">
                <span>Thanks, I'll reply ASAP :) </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
