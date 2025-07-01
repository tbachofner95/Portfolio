import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thanks! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
