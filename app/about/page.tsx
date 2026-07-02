import Image from "next/image";
import { Info } from "lucide-react";

export default function About() {
  return (
    <div className="text-parchment">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 hero-veil" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow mb-3 flex items-center justify-center gap-2">
            <Info size={13} strokeWidth={2.4} /> About Us
          </p>
          <p className="font-display text-xl text-gold/80 mb-3">
            መከር የእግዚአብሔር ቤተ-ክርስቲያን ኢትዮጲያ
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-parchment">
            Planted in Ethiopia,<br /><span className="grad-text">growing for God's glory.</span>
          </h1>
        </div>
      </section>

      <hr className="divider-grad opacity-60" />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-parchment/65 leading-relaxed text-lg">
          Harvest Church of God Ethiopia began with a small gathering of believers in Addis Ababa committed to prayer, the study of Scripture, and serving one another. Over the years, that gathering has grown into a multi-generational church family devoted to worship, discipleship, and outreach across the region.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="bg-surface/60 py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          {[
            { label: "Mission", accent: "from-gold to-gold/20", title: "Making disciples who love God and serve Ethiopia.", body: "We are committed to leading people into a growing relationship with Jesus Christ, building strong families, and equipping believers to serve their communities with excellence and love." },
            { label: "Vision", accent: "from-blue to-blue/20", title: "A harvest of transformed lives in every region.", body: "We envision a movement of congregations rooted in the Word, marked by genuine love, and actively bringing hope, healing, and opportunity to every corner of Ethiopia." },
          ].map(c => (
            <div key={c.label} className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${c.accent}`} />
              <p className="eyebrow mb-3">{c.label}</p>
              <h2 className="font-display text-2xl text-parchment mb-4">{c.title}</h2>
              <p className="text-parchment/60 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="eyebrow mb-2">What We Believe</p>
        <h2 className="font-display text-3xl text-parchment mb-10">Our core values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "📖", title: "Scripture", desc: "The Bible is our final authority for faith and life." },
            { icon: "🙏", title: "Prayer", desc: "We depend on God through consistent, fervent prayer." },
            { icon: "🤝", title: "Community", desc: "We grow best together, bearing one another's burdens." },
            { icon: "🌍", title: "Service", desc: "We follow Christ by serving our city and nation." },
          ].map(v => (
            <div key={v.title} className="glass rounded-2xl p-6 hover:border-gold/20 transition-colors">
              <span className="text-3xl mb-3 block">{v.icon}</span>
              <h3 className="font-display text-lg text-parchment mb-2">{v.title}</h3>
              <p className="text-sm text-parchment/55 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-surface/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow mb-2">Leadership</p>
          <h2 className="font-display text-3xl text-parchment mb-10">Our pastors</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Pastor Daniel Tesfaye", role: "Senior Pastor" },
              { name: "Pastor Hanna Bekele", role: "Associate Pastor" },
              { name: "Pastor Yonas Alemu", role: "Youth Pastor" },
            ].map(p => (
              <div key={p.name} className="glass rounded-2xl overflow-hidden">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue/30 to-surfaceUp">
                  <Image src="/images/logo.jpg" alt={p.name} fill className="object-cover opacity-10" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-parchment">{p.name}</h3>
                  <p className="text-sm text-gold">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
