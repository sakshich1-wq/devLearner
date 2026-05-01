import { History, TrendingUp, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-72 space-y-8">
      <div className="sticky top-24 space-y-6">
        <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-on-surface">Library</h4>
            <p className="text-xs text-slate-500">Explore Tutorials</p>
          </div>
          
          <nav className="flex flex-col gap-1">
            <button className="flex items-center gap-3 bg-primary/5 text-primary font-bold rounded-lg px-4 py-3 text-sm transition-all text-left">
              <History className="w-4 h-4" />
              Latest Posts
            </button>
            <button className="flex items-center gap-3 text-on-surface-variant hover:bg-primary/5 hover:text-primary rounded-lg px-4 py-3 text-sm transition-all text-left">
              <TrendingUp className="w-4 h-4" />
              Popular Topics
            </button>
          </nav>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="bg-secondary-container/20 p-4 rounded-xl border border-secondary-container/30">
              <div className="flex items-center gap-2 text-secondary font-bold text-xs mb-2 uppercase tracking-wider">
                <Info className="w-3.5 h-3.5" />
                Pro Tip
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Try using <code>console.log()</code> for debugging instead of <code>alert()</code> in larger projects!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">Popular Tags</h5>
          <div className="flex flex-wrap gap-2">
            {['Animations', 'Buttons', 'Colors', 'Layout', 'Interactivity'].map((tag) => (
              <span 
                key={tag}
                className="bg-white px-3 py-1.5 rounded-full text-xs border border-slate-100 hover:border-primary hover:text-primary cursor-pointer transition-all shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
