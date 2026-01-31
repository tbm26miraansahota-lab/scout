import miraanImg from "../assets/founders/miraan.jpeg";
import romilImg from "../assets/founders/romil.jpeg";

function FounderCard({
  name,
  role,
  blurb,
  img,
  highlight,
}: {
  name: string;
  role: string;
  blurb: string;
  img: string;
  highlight: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(163,230,53,0.12)]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Photo */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-charcoal-800 to-charcoal-900">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="relative p-6 text-center">
        <div className="text-xl font-bold text-white">{name}</div>
        <div className="mt-1 text-sm font-semibold text-orange-400">{role}</div>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{blurb}</p>
        <span className="mt-4 inline-block rounded-full bg-charcoal-800 px-3 py-1 text-xs font-semibold text-lime-400 border border-lime-400/20">
          {highlight}
        </span>
      </div>
    </div>
  );
}

export function FoundersSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24" id="team">
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 border border-lime-400/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-400 mb-4">
          Meet Us
        </span>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          A Team of <span className="text-orange-400">Football Fanatics</span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-white/70">
          We combine strategic planning, consultative sales and operations expertise with an obsession for the beautiful game.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FounderCard
          name="Romil Gulia"
          role="Co-Founder & Operations Lead"
          blurb="Operations & strategy leader with a decade of experience scaling logistics and research organisations. At Shivshambhu Coal Carriers he built a 140+ person team, boosted productivity by 30% and delivered multi-crore cost savings. An engineer and Executive Master's alum (Cambridge JBS), now pursuing a PGP at Masters' Union."
          img={romilImg}
          highlight="Operational Strategist"
        />
        <FounderCard
          name="Miraan Singh Sahota"
          role="Co-Founder & Growth Lead"
          blurb="Sales & growth specialist recognised for generating over $150K in revenue at Best Buy and driving successful launches of flagship tech products. Awarded the Pankaj Bansal Scholarship at Masters' Union and previously on the Dean's List at University of the Fraser Valley. Focuses on market adoption, partnerships and revenue for ScoutX."
          img={miraanImg}
          highlight="Growth Architect"
        />
      </div>
    </section>
  );
}