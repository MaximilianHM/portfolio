import "./Contacts.scss";
import { useState } from "react";

function Contacts() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="assets/shake.svg" alt="backgorund" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Leave your message here"></textarea>
          <button type="submit">Send</button>
          {message && <span>Tahnks, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  );
}

export default Contacts;
