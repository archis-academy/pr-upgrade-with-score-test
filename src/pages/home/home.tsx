import { useRef } from "react";
import Hero from "../../components/hero/Hero";
import SignupForm from "../../components/signup/SignupForm";

function Home() {
  const signupFormRef = useRef<HTMLElement>(null);

  const handleScrollToSignup = () => {
    signupFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Hero onCtaClick={handleScrollToSignup} />
      <SignupForm ref={signupFormRef} />
    </main>
  );
}

export default Home;
