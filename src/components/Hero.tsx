import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HLSVideo from "./HLSVideo";

const ROLES = ["Graphic Designer", "Video Editor", "Creative Designer", "Graphic Design Expert"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".name-reveal", { opacity: 0, y: 50, duration: 1.2, delay: 0.1 });
      tl.from(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20, duration: 1, stagger: 0.1 },
        0.3,
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <HLSVideo />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <h1 className="mt-32 name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          Muhammad Obaid Raza{" "}
        </h1>

        <p className="blur-in mb-12 text-sm text-muted md:text-base">
          A{" "}
          <span
            key={roleIndex}
            className="animate-role-fade-in inline-block font-display italic text-text-primary"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Pakistan.
        </p>

        <p className="blur-in mx-auto mb-12 max-w-md text-sm text-muted md:text-base">
          Designing seamless digital interactions by focusing on the unique
          nuances which bring systems to life.
        </p>

        <div className="blur-in inline-flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={scrollToWorks}
            className="group relative rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-transform hover:scale-105 hover:bg-bg hover:text-text-primary"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100 accent-gradient" />
            <span className="relative">See Works</span>
          </button>

          <button
            type="button"
            onClick={scrollToContact}
            className="group relative rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-transform hover:scale-105 hover:border-transparent"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100 accent-gradient" />
            <span className="relative">Reach out...</span>
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          SCROLL
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <div className="absolute left-0 top-0 h-1/2 w-full accent-gradient animate-scroll-down" />
        </div>
      </div> */}
    </section>
  );
}
