import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import gobookLogo from "@/assets/gobook-logo.png";
import stoneHouseImg from "@/assets/hero-stone-house.jpg";
import cliffVillaImg from "@/assets/hero-cliff-villa.jpg";
import woodenPorchImg from "@/assets/hero-wooden-porch.jpg";
import guidebookImg from "@/assets/guidebook-keys.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Coastal Register — Bulgarian Vacation Rentals" },
      {
        name: "description",
        content:
          "A curated catalog of Bulgarian vacation rentals. Browse homes, read reviews, and contact hosts directly — no booking fees, no middlemen.",
      },
      {
        property: "og:title",
        content: "The Coastal Register",
      },
      {
        property: "og:description",
        content:
          "A curated catalog of Bulgarian vacation rentals. Browse homes, read reviews, and contact hosts directly.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-paper text-ink font-sans selection:bg-accent/10 selection:text-accent">
      {/* Navigation */}
      <nav className="border-b border-ink/5">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <img
              src={gobookLogo}
              alt="gobook.me"
              className="h-14 w-auto"
            />
            <div className="hidden gap-6 text-sm font-medium text-ink/60 md:flex">
              <Link
                to="/"
                className="transition-colors hover:text-ink"
              >
                Archipelago
              </Link>
              <Link
                to="/"
                className="transition-colors hover:text-ink"
              >
                Traditional Stays
              </Link>
              <Link
                to="/"
                className="transition-colors hover:text-ink"
              >
                Regional Guide
              </Link>
            </div>
          </div>
          <Link
            to="/"
            className="rounded-full border border-ink/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-ink/5"
          >
            List your property
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-zinc-100/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Summer Edition 2024
              </span>
              <h1 className="font-serif text-5xl leading-none font-medium text-balance md:text-7xl">
                A tactile guide to{" "}
                <br className="hidden md:block" /> Bulgarian shores.
              </h1>
              <p className="max-w-[48ch] text-lg leading-relaxed text-ink/70 text-pretty">
                No automated bookings. No service fees. Just a direct line to
                the people who keep the keys to the coast's most storied homes.
              </p>
            </div>

            {/* Search Component */}
            <div className="flex max-w-3xl flex-col gap-2 rounded-2xl bg-white p-2 ring-1 ring-black/5 md:flex-row">
              <div className="flex flex-1 flex-col px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink/40">
                  Location
                </span>
                <input
                  type="text"
                  placeholder="Sozopol, Varvara..."
                  className="border-none bg-transparent p-0 text-sm placeholder:text-ink/30 focus:ring-0"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-ink/5 px-4 py-3 md:border-t-0 md:border-l">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink/40">
                  Housing Type
                </span>
                <select className="border-none bg-transparent p-0 text-sm focus:ring-0">
                  <option>Stone Houses</option>
                  <option>Fisherman Huts</option>
                  <option>Modern Villas</option>
                </select>
              </div>
              <button className="rounded-xl bg-ink px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800">
                Browse Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-baseline justify-between border-b border-ink/5 pb-4">
            <h2 className="font-serif text-3xl font-medium">Notable Stays</h2>
            <Link
              to="/"
              className="text-sm font-medium text-accent underline-offset-4 hover:underline decoration-accent/30"
            >
              View all 142 entries
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={stoneHouseImg}
                  alt="The Captain's Library — old stone house with ivy by the sea in Sozopol"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl">The Captain's Library</h3>
                  <p className="text-sm text-ink/50">Old Town, Sozopol</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <span className="text-accent">★</span>
                  <span>4.9</span>
                </div>
              </div>
              <p className="mt-2 text-sm font-medium">
                €120{" "}
                <span className="font-normal text-ink/40">/ night</span>
              </p>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={cliffVillaImg}
                  alt="Cliffside Monolith — minimalist white villa overlooking dark blue sea cliff in Tyulenovo"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl">Cliffside Monolith</h3>
                  <p className="text-sm text-ink/50">Tyulenovo Cliffs</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <span className="text-accent">★</span>
                  <span>5.0</span>
                </div>
              </div>
              <p className="mt-2 text-sm font-medium">
                €210{" "}
                <span className="font-normal text-ink/40">/ night</span>
              </p>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={woodenPorchImg}
                  alt="Wild Fig Orchard — rustic wooden porch with wild herbs drying and sea view in Sinemorets"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl">Wild Fig Orchard</h3>
                  <p className="text-sm text-ink/50">Sinemorets Village</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <span className="text-accent">★</span>
                  <span>4.8</span>
                </div>
              </div>
              <p className="mt-2 text-sm font-medium">
                €85{" "}
                <span className="font-normal text-ink/40">/ night</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ink py-24 text-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 md:grid-cols-2">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl leading-tight text-balance">
                Returning the human element to travel.
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <span className="font-serif text-3xl italic text-accent">01</span>
                  <div className="space-y-2">
                    <h4 className="font-medium">Browse the Curation</h4>
                    <p className="max-w-[40ch] text-sm text-zinc-400">
                      Every home in our register is visited by our local editors
                      to ensure authenticity and charm.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-serif text-3xl italic text-accent">02</span>
                  <div className="space-y-2">
                    <h4 className="font-medium">Reveal Direct Contact</h4>
                    <p className="max-w-[40ch] text-sm text-zinc-400">
                      We don't hide names behind booking engines. See the
                      host's verified email and phone number instantly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-serif text-3xl italic text-accent">03</span>
                  <div className="space-y-2">
                    <h4 className="font-medium">Arrange Your Visit</h4>
                    <p className="max-w-[40ch] text-sm text-zinc-400">
                      Speak directly with the owners to discuss dates, pets, or
                      special requests. No platform fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-white/5">
                <img
                  src={guidebookImg}
                  alt="Vintage travel guidebook and keys on a wooden table"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8 rounded-3xl bg-accent/5 p-12 text-center ring-1 ring-accent/10 md:p-20">
            <h2 className="mx-auto max-w-[20ch] font-serif text-4xl font-medium text-balance md:text-5xl">
              Do you preserve a piece of regional history?
            </h2>
            <p className="mx-auto max-w-[48ch] text-ink/60 text-pretty">
              If you own a unique rental on the Black Sea and value direct guest
              relationships over algorithmic matching, we would love to feature
              your home in the next volume.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/"
                className="rounded-xl bg-accent px-8 py-4 font-medium text-white ring-1 ring-accent transition-transform hover:brightness-110"
              >
                Submit your listing
              </Link>
              <Link
                to="/"
                className="px-8 py-4 font-medium text-ink transition-colors hover:bg-black/5"
              >
                How we verify hosts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/5 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-serif text-lg italic">
              The Coastal Register
            </span>
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">
              Independent Travel Almanac &copy; 2024
            </p>
          </div>
          <div className="flex gap-10 text-sm font-medium text-ink/60">
            <Link
              to="/"
              className="transition-colors hover:text-ink"
            >
              Terms of Use
            </Link>
            <Link
              to="/"
              className="transition-colors hover:text-ink"
            >
              Privacy
            </Link>
            <Link
              to="/"
              className="transition-colors hover:text-ink"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
