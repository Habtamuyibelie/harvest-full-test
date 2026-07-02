import Link from "next/link";
import Image from "next/image";
import { ListChecks, BookOpen, CalendarDays, HandHeart, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="text-parchment">

      {/* ── HERO with Ken Burns animated background ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">

        {/* Animated background image */}
        <div className="absolute inset-0 z-0">
          <div className="hero-bg absolute inset-0 scale-110">
            <Image
              src="/images/building.jpg"
              alt="Harvest Church of God Ethiopia"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Single-tone brand overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-gold inline-block" />
              Harvest Church of God · Addis Ababa
            </p>
            <p className="font-display text-2xl text-gold/90 mb-4 tracking-wide">
              መከር የእግዚአብሔር ቤተ-ክርስቲያን ኢትዮጲያ
            </p>
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl leading-[1.02] mb-6">
              Sown in faith,
              <br />
              <span className="grad-text italic">gathered</span>{" "}
              <span className="text-parchment">in love.</span>
            </h1>
            <p className="text-lg text-parchment/70 max-w-md mb-10 leading-relaxed">
              A community of believers planted in Ethiopia, growing together
              through worship, the Word, and worthy service to our neighbors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red to-red/80 px-7 py-3.5 text-base font-bold text-parchment shadow-xl shadow-red/30 hover:shadow-red/50 transition-all"
              >
                Our Story
              </Link>
              <Link
                href="/sermons"
                className="inline-flex items-center gap-2 rounded-full border border-parchment/30 px-7 py-3.5 text-base font-semibold text-parchment hover:border-gold hover:text-gold backdrop-blur-sm transition-all"
              >
                <Play size={14} strokeWidth={2} className="fill-current" />
                Watch a Sermon
              </Link>
            </div>
          </div>

          {/* Quote card */}
          <div className="hidden lg:flex justify-end">
            <div className="glass rounded-2xl p-8 max-w-sm">
              <svg className="mb-4 text-gold" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"/>
              </svg>
              <p className="font-display text-xl italic text-parchment leading-relaxed mb-4">
                Whatever you do, do it heartily, as to the Lord.
              </p>
              <p className="text-gold font-semibold text-sm tracking-wide">— Colossians 3:23</p>
              <hr className="divider-grad mt-6" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-parchment/40">
          <span className="text-[0.65rem] tracking-widest uppercase">Scroll</span>
          <span className="block h-8 w-px bg-gradient-to-b from-parchment/40 to-transparent" />
        </div>
      </section>

      {/* ── Service times strip ── */}
      <div className="relative z-10">
        <hr className="divider-grad" />
        <div className="bg-surface/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap gap-x-12 gap-y-2 justify-center text-[0.85rem] font-body">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <strong className="text-gold">Sunday Worship</strong>
              <span className="text-parchment/60">9:00 & 11:30 AM</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              <strong className="text-blue" style={{color:"#6B9BF5"}}>Wednesday Bible Study</strong>
              <span className="text-parchment/60">6:00 PM</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              <strong className="text-red" style={{color:"#EE6B6E"}}>Friday Prayer</strong>
              <span className="text-parchment/60">5:30 PM</span>
            </span>
          </div>
        </div>
        <hr className="divider-grad" />
      </div>

      {/* ── Mission / Vision ── */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-8">
        {[
          {
            tag: "Our Mission",
            title: "Making disciples who love God and serve Ethiopia.",
            body: "We lead people into a growing relationship with Jesus Christ and equip them to serve their families, churches, and communities.",
            accent: "from-gold to-gold/30",
          },
          {
            tag: "Our Vision",
            title: "A harvest of transformed lives in every region.",
            body: "Congregations rooted in the Word, marked by genuine love, actively bringing hope, healing, and opportunity to every corner of Ethiopia.",
            accent: "from-blue to-blue/30",
          },
        ].map((c) => (
          <div key={c.tag} className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-gold/20 transition-colors">
            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${c.accent}`} />
            <p className="eyebrow mb-3">{c.tag}</p>
            <h2 className="font-display text-2xl xl:text-3xl text-parchment mb-4">{c.title}</h2>
            <p className="text-parchment/65 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </section>

      {/* ── Programs ── */}
      <section className="bg-surface/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow mb-2 flex items-center gap-2"><ListChecks size={13} strokeWidth={2.4} /> Church Programs</p>
          <h2 className="font-display text-4xl text-parchment mb-12">Ways to grow with us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "📖", title: "Sunday School", desc: "Foundations of faith for every age group, every Sunday." },
              { icon: "✝️", title: "Youth Fellowship", desc: "A community for teens and young adults to grow and connect." },
              { icon: "🏡", title: "Marriage & Family", desc: "Counseling and workshops strengthening homes." },
              { icon: "🌍", title: "Outreach & Missions", desc: "Serving Addis Ababa and beyond with practical love." },
            ].map((p) => (
              <div key={p.title} className="glass rounded-2xl p-6 group hover:border-red/30 transition-all hover:-translate-y-1">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="font-display text-lg text-parchment mb-2">{p.title}</h3>
                <p className="text-sm text-parchment/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/programs" className="text-gold font-semibold hover:text-gold/80 flex items-center gap-2 w-fit">
              View all programs <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sermons ── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-2 flex items-center gap-2"><BookOpen size={13} strokeWidth={2.4} /> Latest Sermons</p>
            <h2 className="font-display text-4xl text-parchment">Recent messages</h2>
          </div>
          <Link href="/sermons" className="text-gold font-semibold hover:text-gold/80 flex items-center gap-1">Browse all →</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: "Rooted and Fruitful", speaker: "Pastor Daniel Tesfaye", date: "June 21, 2026" },
            { title: "The Harvest is Plenty", speaker: "Pastor Hanna Bekele", date: "June 14, 2026" },
            { title: "Living Water", speaker: "Pastor Daniel Tesfaye", date: "June 7, 2026" },
          ].map((s) => (
            <div key={s.title} className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-surfaceUp to-blueDark mb-4 relative overflow-hidden rounded-xl border border-hairline/[0.07]">
                <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-blue/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="h-14 w-14 rounded-full border-2 border-hairline/30 flex items-center justify-center bg-hairline/10 backdrop-blur group-hover:scale-110 transition-transform">
                    <Play size={18} strokeWidth={2} className="text-parchment fill-parchment" />
                  </span>
                </div>
              </div>
              <h3 className="font-display text-lg text-parchment group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-sm text-parchment/50">{s.speaker} · {s.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Events ── */}
      <section className="bg-surface/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow mb-2 flex items-center gap-2"><CalendarDays size={13} strokeWidth={2.4} /> Upcoming Events</p>
          <h2 className="font-display text-4xl text-parchment mb-12">Join us this season</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { day: "12", month: "JUL", title: "Annual Harvest Festival", time: "10:00 AM — Main Hall" },
              { day: "19", month: "JUL", title: "Youth Camp Retreat", time: "Full Day — Debre Zeit" },
              { day: "02", month: "AUG", title: "Community Outreach Day", time: "8:00 AM — Bole District" },
            ].map((e) => (
              <div key={e.title} className="glass rounded-2xl p-6 flex gap-5 items-start hover:border-gold/20 transition-colors group">
                <div className="text-center shrink-0 bg-gradient-to-b from-gold/20 to-gold/5 rounded-xl px-4 py-3 border border-gold/20">
                  <p className="font-display text-3xl text-gold leading-none">{e.day}</p>
                  <p className="text-xs tracking-widest text-parchment/50 mt-1">{e.month}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-parchment mb-1 group-hover:text-gold transition-colors">{e.title}</h3>
                  <p className="text-sm text-parchment/55">{e.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/events" className="text-gold font-semibold hover:text-gold/80 flex items-center gap-2 w-fit">
              See full calendar <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Give CTA ── */}
      <section className="relative overflow-hidden py-28 text-center">
        <div className="absolute inset-0 hero-veil" />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2"><HandHeart size={13} strokeWidth={2.4} /> Give</p>
          <h2 className="font-display text-4xl sm:text-5xl text-parchment mb-5">
            Your generosity<br /><span className="grad-text">grows the harvest.</span>
          </h2>
          <p className="text-parchment/60 mb-10 leading-relaxed">
            Every gift supports our ministries, missions, and the families we serve across Ethiopia.
          </p>
          <Link
            href="/donate"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red to-red/80 px-10 py-4 text-lg font-bold text-parchment shadow-xl shadow-red/30 hover:shadow-red/50 transition-all"
          >
            <HandHeart size={16} strokeWidth={2} />
            Give Now
          </Link>
        </div>
      </section>

    </div>
  );
}
