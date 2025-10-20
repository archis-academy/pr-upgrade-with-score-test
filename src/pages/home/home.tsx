import { useRef } from "react";
import Hero from "../../components/hero/Hero";
import SignupForm from "../../components/signup/SignupForm";
import Footer from "@/components/Footer/Footer";

function Home() {
  const signupFormRef = useRef<HTMLElement>(null);

  const handleScrollToSignup = () => {
    signupFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Hero
        onCtaClick={handleScrollToSignup}
        title="Product Launch 2025"
        subtitle="Discover the next generation of innovation. Sign up for exclusive updates!"
        ctaText="Learn More & Sign Up"
      />
      <SignupForm ref={signupFormRef} />
      <Footer />
    </main>
  );
}

export default Home;
