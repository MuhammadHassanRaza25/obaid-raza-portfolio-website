import { useEffect, useRef } from "react";
import gsap from "gsap";
import HLSVideo from "./HLSVideo";

const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
];

export default function ContactFooter() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const marqueeText = Array(10)
    .fill("BUILDING THE FUTURE • ")
    .join("");

  return (
    <footer id="contact" className="relative overflow-hidden bg-bg pt-16 md:pt-20 pb-8 md:pb-12">
      <div className="absolute inset-0">
        <HLSVideo flipped />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden py-8 md:py-12">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            <span className="px-4 font-display text-4xl italic text-text-primary/20 md:text-6xl lg:text-7xl">
              {marqueeText}
            </span>
            <span
              className="px-4 font-display text-4xl italic text-text-primary/20 md:text-6xl lg:text-7xl"
              aria-hidden
            >
              {marqueeText}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center px-6 py-12 md:py-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">
            Get in touch
          </p>
          <h2 className="mb-8 text-center font-display text-4xl italic text-text-primary md:text-6xl lg:text-7xl">
            Let&apos;s create something
            <br />
            extraordinary together
          </h2>
          <a
            href="mailto:hello@michaelsmith.com"
            className="group relative rounded-full px-10 py-4 text-sm text-text-primary"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100 accent-gradient" />
            <span className="relative rounded-full bg-surface px-6 py-2 backdrop-blur-md">
              hello@michaelsmith.com ↗
            </span>
          </a>
        </div>

        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 border-t border-stroke/50 px-6 py-8 md:flex-row md:px-10 lg:px-16">
          <div className="flex flex-wrap justify-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for projects
          </div>
        </div>
      </div>
    </footer>
  );
}
