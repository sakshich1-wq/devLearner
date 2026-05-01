import { Share2, Mail, MessageSquare, Verified } from 'lucide-react';

export default function Contact() {
  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start py-12">
      <section className="space-y-12">
        <header className="space-y-4">
          <span className="text-[10px] font-bold text-primary tracking-widest uppercase">GET IN TOUCH</span>
          <h1 className="text-5xl font-display font-black text-on-surface">Say Hello!</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Have a question about a tutorial or just want to chat about web design? I'm always excited to connect with fellow learners.
          </p>
        </header>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm shadow-blue-500/5">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="name">FULL NAME</label>
                <input 
                  id="name"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans placeholder:text-slate-400"
                  placeholder="Your Name" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="email">EMAIL ADDRESS</label>
                <input 
                  id="email"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans placeholder:text-slate-400"
                  placeholder="alex@school.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="message">YOUR MESSAGE</label>
              <textarea 
                id="message"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans placeholder:text-slate-400 resize-none" 
                placeholder="Tell me what's on your mind..." 
                rows={5}
              />
            </div>
            <button className="chunky-button w-full md:w-fit px-12 py-4 bg-primary text-on-primary font-bold rounded-xl transition-all hover:bg-primary-container active:scale-95">
              Send Message
            </button>
          </form>
        </div>

        <div className="relative w-full h-80 overflow-hidden rounded-2xl group mt-8">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
            alt="Office space"
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
          />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-primary/10 shadow-lg">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">OFFICE HOURS</p>
            <p className="text-xl font-display font-bold text-on-background">Mon — Fri, 9am - 5pm</p>
          </div>
        </div>
      </section>

      <aside className="space-y-8 sticky top-24">
        <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-display font-bold mb-2">Connect Socially</h2>
          <p className="text-sm text-on-surface-variant mb-6">Follow the journey and get daily coding tips!</p>
          <div className="flex flex-col gap-3">
            {[
              { name: 'Twitter', icon: Share2 },
              { name: 'Threads', icon: Mail },
              { name: 'Discord', icon: MessageSquare },
            ].map((social) => (
              <a 
                key={social.name}
                href="#" 
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <social.icon className="w-5 h-5 text-primary" />
                <span className="font-sans font-medium text-on-background">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-tertiary-container/10 p-6 rounded-2xl border-l-4 border-tertiary">
          <div className="flex items-center gap-3 mb-3 text-tertiary">
            <Verified className="w-5 h-5 fill-tertiary text-on-tertiary-container" />
            <h3 className="font-display font-bold text-sm">Response Time</h3>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            I usually respond within 24 hours. Hang tight, friend!
          </p>
        </div>
      </aside>
    </div>
  );
}
