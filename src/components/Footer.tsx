import { Rocket, Smile } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t mt-12 bg-slate-50 border-slate-200">
      <div className="py-12 px-6 max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-bold text-slate-900 text-xl tracking-tight">DevLearner</span>
          <p className="text-xs text-slate-500 font-sans">© 2024 DevLearner. Built for curious minds.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-sans text-slate-500">
          <a href="#" className="hover:text-primary hover:underline decoration-secondary-container decoration-2 transition-all">Privacy</a>
          <a href="#" className="hover:text-primary hover:underline decoration-secondary-container decoration-2 transition-all">Terms</a>
          <a href="#" className="hover:text-primary hover:underline decoration-secondary-container decoration-2 transition-all">GitHub</a>
          <a href="#" className="hover:text-primary hover:underline decoration-secondary-container decoration-2 transition-all">Discord</a>
        </div>

        <div className="flex gap-4">
          <div className="p-2 bg-white rounded-full border border-slate-200 hover:scale-110 transition-transform cursor-pointer shadow-sm">
            <Smile className="w-4 h-4 text-slate-600" />
          </div>
          <div className="p-2 bg-white rounded-full border border-slate-200 hover:scale-110 transition-transform cursor-pointer shadow-sm">
            <Rocket className="w-4 h-4 text-slate-600" />
          </div>
        </div>
      </div>
    </footer>
  );
}
