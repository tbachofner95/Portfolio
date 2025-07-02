import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thanks! Your message has been sent.</p>
      ) : (
        <form
          action="https://formsubmit.co/trevorb718208@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          />
          {/* Optional hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://www.trevorbachofner.com/thank-you" />
          
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;

