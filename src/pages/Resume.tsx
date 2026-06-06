import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Resume() {
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
            Resume
          </h1>
          <p className="max-w-md text-muted">
            Michael Smith — Creative technologist with 20+ years of experience
            building digital products and leading design teams.
          </p>
        </div>
      </main>
    </>
  );
}
