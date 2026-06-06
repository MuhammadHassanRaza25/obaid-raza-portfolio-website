import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    title: "Automotive Motion",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Urban Architecture",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Human Perspective",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
];

export default function SelectedWorks() {
  return (
    <section id="works" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Selected Work
              </span>
            </div>
            <h2 className="mb-3 text-3xl text-text-primary md:text-4xl lg:text-5xl">
              Featured{" "}
              <span className="font-display italic">projects</span>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              A selection of projects I&apos;ve worked on, from concept to
              launch.
            </p>
          </div>

          <Link
            to="/work"
            className="group relative hidden rounded-full px-6 py-3 text-sm text-text-primary md:inline-flex"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100 accent-gradient" />
            <span className="relative flex items-center gap-2 rounded-full bg-bg px-2">
              View all work <span>→</span>
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${project.span} ${project.aspect}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="halftone-overlay absolute inset-0" />
              <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
                <span className="group/pill relative rounded-full px-6 py-3 text-sm">
                  <span className="absolute inset-[-2px] rounded-full accent-gradient" />
                  <span className="relative flex items-center gap-1 rounded-full bg-white px-4 py-2 text-bg">
                    View —{" "}
                    <span className="font-display italic">{project.title}</span>
                  </span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
