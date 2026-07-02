import { CalendarDays } from "lucide-react";

export default function Events() {
  const events = [
    { day:"12", month:"JUL", title:"Annual Harvest Festival", time:"10:00 AM — Main Hall", desc:"A day of celebration, music, and thanksgiving for the year\'s blessings.", color:"gold" },
    { day:"19", month:"JUL", title:"Youth Camp Retreat", time:"Full Day — Debre Zeit", desc:"A weekend retreat for teens focused on worship, fellowship, and adventure.", color:"green" },
    { day:"02", month:"AUG", title:"Community Outreach Day", time:"8:00 AM — Bole District", desc:"Serving our neighbors through food distribution and home visits.", color:"red" },
    { day:"16", month:"AUG", title:"Marriage Enrichment Seminar", time:"9:00 AM — Fellowship Hall", desc:"A half-day seminar for couples on communication and connection.", color:"blue" },
    { day:"30", month:"AUG", title:"Baptism Sunday", time:"11:30 AM — Main Sanctuary", desc:"Celebrating new believers stepping into their faith publicly.", color:"gold" },
  ];
  const accent: Record<string,string> = { gold:"border-gold text-gold", green:"border-green text-green", red:"border-red text-red", blue:"border-blue" };
  return (
    <div className="text-parchment min-h-screen">
      <section className="relative overflow-hidden py-28 text-center">
        <div className="absolute inset-0 hero-veil" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-3 flex items-center justify-center gap-2">
            <CalendarDays size={13} strokeWidth={2.4} /> Events
          </p>
          <p className="font-display text-xl text-gold/80 mb-3">መከር የእግዚአብሔር ቤተ-ክርስቲያን ኢትዮጲያ</p>
          <h1 className="font-display text-4xl sm:text-5xl text-parchment">
            Gather with us <span className="grad-text">this season.</span>
          </h1>
        </div>
      </section>
      <hr className="divider-grad opacity-60" />
      <section className="mx-auto max-w-4xl px-6 py-20 space-y-5">
        {events.map((e) => (
          <div key={e.title} className="glass rounded-2xl p-6 flex gap-6 items-start hover:border-gold/20 transition-colors group">
            <div className={`text-center shrink-0 w-16 border-2 ${accent[e.color]} rounded-xl py-3`}>
              <p className="font-display text-3xl leading-none">{e.day}</p>
              <p className="text-[0.65rem] tracking-widest text-parchment/40 mt-1">{e.month}</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-parchment mb-1 group-hover:text-gold transition-colors">{e.title}</h2>
              <p className="text-[0.78rem] text-gold font-semibold mb-2">{e.time}</p>
              <p className="text-[0.88rem] text-parchment/60 leading-relaxed">{e.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
