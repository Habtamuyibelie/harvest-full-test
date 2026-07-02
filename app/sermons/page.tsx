import Link from "next/link";

const sermons = [
  { title:"Rooted and Fruitful", speaker:"Pastor Daniel Tesfaye", date:"June 21, 2026", series:"Harvest Series" },
  { title:"The Harvest is Plenty", speaker:"Pastor Hanna Bekele", date:"June 14, 2026", series:"Harvest Series" },
  { title:"Living Water", speaker:"Pastor Daniel Tesfaye", date:"June 7, 2026", series:"John" },
  { title:"Bread of Life", speaker:"Pastor Yonas Alemu", date:"May 31, 2026", series:"John" },
  { title:"A Faith That Moves", speaker:"Pastor Hanna Bekele", date:"May 24, 2026", series:"Faith Foundations" },
  { title:"Built on the Rock", speaker:"Pastor Daniel Tesfaye", date:"May 17, 2026", series:"Faith Foundations" },
];

import { BookOpen, Play } from "lucide-react";

export default function Sermons() {
  return (
    <div className="text-parchment min-h-screen">
      <section className="relative overflow-hidden py-28 text-center">
        <div className="absolute inset-0 hero-veil" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-3 flex items-center justify-center gap-2">
            <BookOpen size={13} strokeWidth={2.4} /> Sermons
          </p>
          <p className="font-display text-xl text-gold/80 mb-3">መከር የእግዚአብሔር ቤተ-ክርስቲያን ኢትዮጲያ</p>
          <h1 className="font-display text-4xl sm:text-5xl text-parchment">
            Messages to <span className="grad-text">feed your faith.</span>
          </h1>
        </div>
      </section>
      <hr className="divider-grad opacity-60" />
      <section className="mx-auto max-w-7xl px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sermons.map((s) => (
          <div key={s.title} className="group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-surfaceUp to-blueDark mb-4 relative overflow-hidden rounded-xl border border-hairline/[0.07]">
              <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-blue/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="h-14 w-14 rounded-full border-2 border-hairline/30 flex items-center justify-center bg-hairline/10 backdrop-blur group-hover:scale-110 transition-transform">
                  <Play size={18} strokeWidth={2} className="text-parchment fill-parchment" />
                </span>
              </div>
              <span className="absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/20 text-gold border border-gold/30">{s.series}</span>
            </div>
            <h2 className="font-display text-lg text-parchment group-hover:text-gold transition-colors">{s.title}</h2>
            <p className="text-sm text-parchment/50">{s.speaker} · {s.date}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
