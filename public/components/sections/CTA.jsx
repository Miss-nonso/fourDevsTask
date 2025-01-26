import React from "react";

const CTA = () => {
  return (
    <section className="cta">
      <h2 className="cta-header">Let’s Build Something Great Together</h2>
      <form className="cta-form">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="cta-input"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="cta-input"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="cta-input"
          />{" "}
        </div>

        <div className="mb-4">
          <label htmlFor="service" className="block text-sm font-medium mb-2">
            Service of Interest
          </label>
          <select id="service" name="service" className="cta-input">
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            className="cta-input"
          ></textarea>
        </div>

        <button type="submit" className="cta-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default CTA;
