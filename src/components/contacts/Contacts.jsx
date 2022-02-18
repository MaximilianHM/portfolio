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
      <h2>Get in touch</h2>
      <div className="container">
        <div className="left">
          <a href="https://www.linkedin.com/in/maximilianhm/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/MaximilianHM">
            <AiOutlineGithub />
          </a>
          <a
            href="assets/2022.01 - Maximilian H. Mayer - CV.pdf"
            // download="Maximilian Haut Mayer"
            target="_blank"
          >
            <HiOutlineDocumentDownload />
            CV download
          </a>
        </div>
        <div className="right">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="message" />

            {message && <span>Thanks, I'll reply ASAP :) </span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
