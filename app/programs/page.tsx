import Link from "next/link";

const programs = [
  { icon:"📖", title:"Sunday School", time:"Sundays, 8:00 AM", desc:"Age-grouped Bible classes building a strong foundation of faith for children, teens, and adults." },
  { icon:"✝️", title:"Youth Fellowship", time:"Saturdays, 3:00 PM", desc:"A vibrant community where teens and young adults connect, worship, and grow in their walk with Christ." },
  { icon:"🏡", title:"Marriage & Family", time:"Monthly Workshops", desc:"Counseling, mentorship, and workshops to strengthen marriages and homes." },
  { icon:"🌍", title:"Outreach & Missions", time:"Ongoing", desc:"Food distribution, hospital visits, and community development across Addis Ababa." },
  { icon:"🎵", title:"Choir & Worship Arts", time:"Sundays, 3:00 PM", desc:"Rehearsals and training for vocalists, instrumentalists, and the technical worship team." },
  { icon:"🎓", title:"Discipleship Classes", time:"New cohorts quarterly", desc:"A structured path from new believer to mature, serving member of the church." },
  {
  icon: "📖",
  title: "Friday Evening Bible Study",
  time: "Every Friday • 6:30 PM",
  desc: "Join us each Friday evening as we study God's Word together, grow in faith, ask questions, and strengthen our relationship with Christ through interactive Bible teaching and fellowship."
},
];

import { ListChecks } from "lucide-react";

export default function Programs() {
  return (
    <div className="text-parchment min-h-screen">
      <section className="relative overflow-hidden py-28 text-center">
        <div className="absolute inset-0 hero-veil" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-3 flex items-center justify-center gap-2">
            <ListChecks size={13} strokeWidth={2.4} /> Church Programs
          </p>
          <p className="font-display text-xl text-gold/80 mb-3">የቤተ-ክርስቲያን ፕሮግራሞች</p>
          <h1 className="font-display text-4xl sm:text-5xl text-parchment">
            Ways to grow, serve, <span className="grad-text">and belong.</span>
          </h1>
        </div>
      </section>
      <hr className="divider-grad opacity-60" />
      <section className="mx-auto max-w-7xl px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map((p) => (
          <div key={p.title} className="glass rounded-2xl p-7 hover:border-gold/20 transition-all hover:-translate-y-1 group">
            <span className="text-4xl mb-4 block">{p.icon}</span>
            <h2 className="font-display text-xl text-parchment mb-1">{p.title}</h2>
            <p className="text-[0.78rem] text-gold font-semibold mb-3">{p.time}</p>
            <p className="text-[0.88rem] text-parchment/60 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
