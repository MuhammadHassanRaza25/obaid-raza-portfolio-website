import { motion } from "framer-motion";

const ENTRIES = [
  {
    title: "The Future of Design Systems",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&q=80",
    readTime: "5 min read",
    date: "Mar 12, 2026",
  },
  {
    title: "Building with Intention",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80",
    readTime: "8 min read",
    date: "Feb 28, 2026",
  },
  {
    title: "Motion as a Language",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
    readTime: "6 min read",
    date: "Feb 14, 2026",
  },
  {
    title: "Craft in the Digital Age",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=200&q=80",
    readTime: "4 min read",
    date: "Jan 30, 2026",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
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
                Journal
              </span>
            </div>
            <h2 className="mb-3 text-3xl text-text-primary md:text-4xl lg:text-5xl">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              Essays and reflections on design, technology, and creative
              practice.
            </p>
          </div>

          <button
            type="button"
            className="group relative hidden rounded-full px-6 py-3 text-sm text-text-primary md:inline-flex"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100 accent-gradient" />
            <span className="relative flex items-center gap-2 rounded-full bg-bg px-2">
              View all <span>→</span>
            </span>
          </button>
        </motion.div>

        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, i) => (
            <motion.a
              key={entry.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:gap-6 sm:rounded-full"
            >
              <img
                src={entry.image}
                alt=""
                className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
              />
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-medium text-text-primary sm:text-base">
                  {entry.title}
                </h3>
                <p className="text-xs text-muted sm:text-sm">{entry.readTime}</p>
              </div>
              <span className="hidden shrink-0 text-xs text-muted sm:block">
                {entry.date}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
