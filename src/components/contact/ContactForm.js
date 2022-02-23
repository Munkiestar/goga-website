import React from "react";
import { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Love by Goga - narudzba",
    replyTo: "@",
    accessKey: "c7215b8d-4a7c-4d12-9908-c348c23aed1e",
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Hvala Vam sto ste me kontaktirali.",
        });
        // reset values
        setContact({ ...contact, name: "", email: "", message: "" });
      } else {
        setResponse({
          type: "error",
          message: "Greska! Molimo Vas pokusajte ponovo.",
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "Greska! Molimo Vas pokusajte ponovo.",
      });
    }
  };

  return (
    <section className="section">
      <div className="columns">
        <div className="column" />
        <div className="column  is-two-thirds">
          <div className={response.message !== "" ? "is-hidden" : "columns"}>
            <div className="contact-form">
              <h2 className="contact-form-title">POŠALJITE NAM UPIT</h2>
              <form method="post" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Vaše ime i prezime</label>
                  <div className="control">
                    <input
                      value={contact.name}
                      className="input"
                      type="text"
                      placeholder="Ime"
                      name="name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">E-mail</label>
                  <div className="control">
                    <input
                      value={contact.email}
                      className="input"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="field" style={{ display: "none" }}>
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      type="text"
                      name="honeypot"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <input
                      type="hidden"
                      name="subject"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Poruka</label>
                  <div className="control">
                    <textarea
                      value={contact.message}
                      className="textarea"
                      placeholder="Vasa narudzba .."
                      name="message"
                      onChange={handleChange}
                      required
                      rows="5"
                      cols="30"
                    />
                  </div>
                </div>

                {/*      error submit  */}
                <div
                  className={
                    response.type === "error"
                      ? "tile box notification is-danger"
                      : "is-hidden"
                  }
                >
                  <p className="error">{response.message}</p>
                </div>

                {/*      success submit  */}
                <div
                  className={
                    response.type === "success"
                      ? "tile box notification is-primary"
                      : "is-hidden"
                  }
                >
                  <p className="success">{response.message}</p>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="btn" type="submit">
                      Posalji
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="column" />
      </div>
    </section>
  );
}

export default ContactForm;
