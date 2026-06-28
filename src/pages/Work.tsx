import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Work() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg px-6 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text-primary"
          >
            ← Back home
          </Link>
          <h1 className="mb-4 font-display text-5xl italic text-text-primary md:text-7xl">
            Here Is My All Work
          </h1>
          <p className="max-w-md text-muted">
            A collection of Logos, Banners, Posters & Youtube Thumbnail Designs.
          </p>
        </div>
      </main>
    </>
  );
}
