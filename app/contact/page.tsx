"use client";
import { useState } from "react";
import { Phone as PhoneIcon, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"err">("idle");
  const [errMsg, setErrMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) { setErrMsg(json.error || "Error"); setStatus("err"); return; }
      setStatus("ok"); setForm({ name: "", email: "", message: "" });
    } catch { setErrMsg("Network error. Please try again."); setStatus("err"); }
  };

  return (
    <div className="text-parchment min-h-screen">
      <section className="relative overflow-hidden py-28 text-center">
        <div className="absolute inset-0 hero-veil" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-3 flex items-center justify-center gap-2"><PhoneIcon size={13}/> Contact Us</p>
          <p className="font-display text-xl text-gold/80 mb-3">መከር የእግዚአብሔር ቤተ-ክርስቲያን ኢትዮጲያ</p>
          <h1 className="font-display text-4xl sm:text-5xl text-white">We'd love to <span className="grad-text">hear from you.</span></h1>
        </div>
      </section>
      <hr className="divider-grad opacity-60" />
      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="eyebrow mb-4">Visit, Call, or Write</p>
          {[
            { icon: <MapPin size={16}/>, label: "Address", value: "Bole Road, Addis Ababa, Ethiopia" },
            { icon: <PhoneIcon size={16}/>, label: "Phone", value: "+251 91 234 5678" },
            { icon: <Mail size={16}/>, label: "Email", value: "info@harvestchurchethiopia.org" },
          ].map(i => (
            <div key={i.label} className="glass rounded-xl p-4 flex gap-3 items-start">
              <span className="text-gold mt-0.5">{i.icon}</span>
              <div>
                <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-0.5">{i.label}</p>
                <p className="text-sm" style={{color:"var(--text)"}}>{i.value}</p>
              </div>
            </div>
          ))}
          <div className="glass rounded-xl p-4 flex gap-3 items-start">
            <span className="text-gold mt-0.5"><Clock size={16}/></span>
            <div>
              <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">Service Times</p>
              {["Sunday — 9:00 & 11:30 AM","Wednesday — 6:00 PM Bible Study","Friday — 5:30 PM Prayer"].map(t=>(
                <p key={t} className="text-sm" style={{color:"var(--text-muted)"}}>{t}</p>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="glass rounded-2xl p-8 space-y-5">
          {status==="ok" && <div className="rounded-xl bg-green/10 border border-green/30 p-4 text-sm text-green">✅ Message sent! We'll get back to you soon.</div>}
          {status==="err" && <div className="rounded-xl bg-red/10 border border-red/30 p-4 text-sm text-red">❌ {errMsg}</div>}
          {[{id:"name",label:"Full name",type:"text",ph:"Your name"},{id:"email",label:"Email",type:"email",ph:"you@example.com"}].map(f=>(
            <div key={f.id}>
              <label className="block text-sm font-semibold mb-1.5" style={{color:"var(--text-muted)"}} htmlFor={f.id}>{f.label}</label>
              <input id={f.id} type={f.type} placeholder={f.ph} required value={form[f.id as keyof typeof form]}
                onChange={e=>setForm(p=>({...p,[f.id]:e.target.value}))}
                className="w-full rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none border"
                style={{background:"var(--bg)",color:"var(--text)",borderColor:"var(--border)"}} />
            </div>
          ))}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{color:"var(--text-muted)"}} htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="How can we help?" required value={form.message}
              onChange={e=>setForm(p=>({...p,message:e.target.value}))}
              className="w-full rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none border"
              style={{background:"var(--bg)",color:"var(--text)",borderColor:"var(--border)"}} />
          </div>
          <button type="submit" disabled={status==="sending"}
            className="btn-shine w-full flex items-center justify-center rounded-full bg-gradient-to-r from-red to-red/80 px-6 py-3.5 font-bold text-white shadow-lg shadow-red/30 hover:shadow-red/50 transition-all disabled:opacity-50">
            {status==="sending"?"Sending…":"Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
}
