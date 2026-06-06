import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=640&q=80",
    rotation: -6,
  },
  {
    image:
      "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=640&q=80",
    rotation: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=640&q=80",
    rotation: -3,
  },
  {
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339f3a6a0a?w=640&q=80",
    rotation: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c338ea42e?w=640&q=80",
    rotation: -4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1558591710-4bfb4a2ae7f5?w=640&q=80",
    rotation: 3,
  },
];

const leftColumn = ITEMS.filter((_, i) => i % 2 === 0);
const rightColumn = ITEMS.filter((_, i) => i % 2 === 1);

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    if (!section || !content || !leftCol || !rightCol) return;

    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: content,
      pinSpacing: false,
    });

    gsap.to(leftCol, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(rightCol, {
      y: 300,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      pinTrigger.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <>
      <section
        id="explorations"
        ref={sectionRef}
        className="relative min-h-[300vh] bg-bg"
      >
        <div
          ref={contentRef}
          className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Explorations
            </span>
            <span className="h-px w-8 bg-stroke" />
          </div>
          <h2 className="mb-4 text-3xl text-text-primary md:text-5xl lg:text-6xl">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <p className="mb-8 max-w-md text-sm text-muted md:text-base">
            Experimental visuals, motion studies, and creative explorations from
            the studio.
          </p>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full px-6 py-3 text-sm text-text-primary"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100 accent-gradient" />
            <span className="relative flex items-center gap-2 rounded-full bg-surface px-4 py-1">
              Dribbble <span>↗</span>
            </span>
          </a>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="grid w-full max-w-[1400px] grid-cols-2 gap-12 px-6 md:gap-40 md:px-10">
            <div ref={leftColRef} className="flex flex-col items-end gap-16 pt-32">
              {leftColumn.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(item.image)}
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                  className="pointer-events-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke transition-transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div ref={rightColRef} className="flex flex-col items-start gap-16 pt-64">
              {rightColumn.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(item.image)}
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                  className="pointer-events-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke transition-transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
          role="dialog"
          aria-modal
        >
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-full rounded-2xl object-contain"
          />
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-2xl text-text-primary"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
