import React, { useState, forwardRef } from "react";
import "./SignupForm.scss";

const SignupForm = forwardRef<HTMLElement>((_props, ref) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Reset message on new submission

    if (email) {
      try {
        // TODO: Backend Integration. Example API call:
        // const response = await fetch('/api/signup', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email }),
        // });
        // if (!response.ok) {
        //   throw new Error('Network response was not ok.');
        // }

        // On successful submission:
        setMessage(`Thank you for signing up, ${email}!`);
        setEmail("");
      } catch (error) {
        // On failed submission:
        setMessage("Signup failed. Please try again later.");
        console.error("Signup error:", error);
      }
    }
  };

  return (
    <section id="signup-form" className="signup-form" ref={ref}>
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
});

export default SignupForm;
