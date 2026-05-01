import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Palette, Zap, Award, Stars } from 'lucide-react';
import { CATEGORIES, POSTS } from '../constants';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest">
            Explorer Academy
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-black text-on-surface leading-tight">
            Welcome to <span className="text-primary">Web Design</span>!
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl">
            Web design is like having a superpower. It lets you <strong>build your own world!</strong> Learn how to create websites that share your ideas with everyone.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/category/html" className="bg-primary text-on-primary font-bold px-8 py-4 rounded-xl chunky-button hover:bg-primary-container transition-all active:scale-95">
              Get Started
            </Link>
            <button className="bg-secondary-container text-on-secondary-container font-bold px-8 py-4 rounded-xl chunky-button hover:opacity-90 transition-all active:scale-95">
              View Projects
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
            alt="Child learning to code"
            className="relative rounded-2xl shadow-xl w-full object-cover aspect-video"
          />
        </motion.div>
      </section>

      {/* Start Your Adventure */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-display font-bold">Start Your Adventure</h2>
          <div className="h-1 flex-1 mx-8 bg-slate-100 rounded-full hidden sm:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all group"
            >
              <div className={`w-16 h-16 ${cat.bgColor} ${cat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon === 'html' && <Code2 className="w-8 h-8" />}
                {cat.icon === 'css' && <Palette className="w-8 h-8" />}
                {cat.icon === 'javascript' && <Zap className="w-8 h-8" />}
              </div>
              <h3 className="text-2xl font-bold mb-3">{cat.name}</h3>
              <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                {cat.description}
              </p>
              <Link to={`/category/${cat.slug}`} className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn {cat.name.split(' ')[0]} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Tutorials */}
      <section className="pb-12">
        <h2 className="text-3xl font-display font-bold mb-12">Top Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POSTS.map((post) => (
            <Link 
              key={post.id} 
              to={`/category/${post.category.toLowerCase()}`}
              className={`bg-white rounded-2xl border-l-[6px] shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all ${
                post.category === 'HTML' ? 'border-tertiary' : 
                post.category === 'CSS' ? 'border-primary' : 'border-secondary-container'
              }`}
            >
              <div className="h-48">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    post.level === 'Beginner' ? 'bg-tertiary/10 text-tertiary' : 'bg-primary/10 text-primary'
                  }`}>
                    {post.level}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold">{post.title}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className={`flex items-center gap-1.5 font-bold ${
                    post.category === 'HTML' ? 'text-tertiary' : 'text-primary'
                  }`}>
                    {post.category === 'HTML' ? <Award className="w-4 h-4" /> : <Stars className="w-4 h-4" />}
                    +{post.xp} XP
                  </span>
                  <span className="text-primary font-bold text-sm">Read Story</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
