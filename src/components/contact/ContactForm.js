import React, { useState } from "react";
import "./ContactForm.scss";
import { ScrollToTop } from "../../helpers";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Love by Goga - narudzba",
    replyTo: "@",
    accessKey: "7b71d672-5e11-44ec-a1c8-d11d88ff36be",
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
        setContact({ ...contact, name: "", email: "", message: "" });
        return setResponse({
          type: "success",
          message: "Hvala Vam sto ste me kontaktirali.",
        });
        // reset values
      } else {
        return setResponse({
          type: "error",
          message: "Greska! Molimo Vas pokusajte ponovo.",
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      // setResponse({
      //   type: "error",
      //   message: "Greska! Molimo Vas pokusajte ponovo.",
      // });
    }
  };

  return (
    <ScrollToTop>
      <section className="section">
        {/*  <div className={response.message !== "" ? "is-hidden" : "columns"}>*/}
        <div className="contact-form">
          <h2 className="contact-form-title">POŠALJITE NAM UPIT</h2>
          <form method="post" onSubmit={handleSubmit} id="form">
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
                <input type="hidden" name="subject" onChange={handleChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">Poruka</label>
              <div className="control">
                <textarea
                  value={contact.message}
                  className="textarea"
                  placeholder="Vaša narudžba .."
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
                  Pošalji
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </ScrollToTop>
  );
}

export default ContactForm;
