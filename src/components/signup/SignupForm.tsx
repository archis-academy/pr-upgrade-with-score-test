import React, { useState } from "react";
import "./SignupForm.scss";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      //   TODO: Backend Integration
      console.log(`Email submitted: ${email}`);
      setMessage(`Thank you for signing up, ${email}!`);
      setEmail("");
    }
  };

  return (
    <section id="signup-form" className="signup-form">
      <div className="container">
        <h2 className="signup-form__title">Be the First to Know</h2>
        <form className="signup-form__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="signup-form__input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="signup-form__button">
            Sign Up
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default SignupForm;
