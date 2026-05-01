import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CodeBlock from '../components/CodeBlock';
import ExerciseCard from '../components/ExerciseCard';
import { CATEGORIES, POSTS } from '../constants';
import { motion } from 'motion/react';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);
  const posts = POSTS.filter((p) => p.category.toLowerCase() === slug);

  if (!category) return <div>Category not found</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <article className="flex-1 space-y-12">
        <header className="space-y-6">
          <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-widest">
            {category.name}
          </div>
          <h1 className="text-5xl font-display font-black text-on-surface leading-tight">
            {posts[0]?.title || category.name}
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            {posts[0]?.excerpt || category.description}
          </p>
        </header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-96 overflow-hidden rounded-2xl shadow-sm border border-slate-100"
        >
          <img 
            src={posts[0]?.image} 
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <section className="space-y-8 font-sans">
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold">What is it?</h2>
            <p className="text-on-surface-variant leading-relaxed">
              {posts[0]?.content}
            </p>
          </div>

          {slug === 'html' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { tag: '<html>', desc: 'The root element that wraps all content.' },
                { tag: '<head>', desc: 'Contains meta-info like title and links.' },
                { tag: '<body>', desc: 'Where the visible content lives!' },
                { tag: '<h1>', desc: 'Headings for your text segments.' }
              ].map((item) => (
                <div key={item.tag} className="p-6 bg-white rounded-xl shadow-sm border border-slate-50 hover:border-primary/20 transition-all">
                  <span className="text-primary font-bold font-mono">{item.tag}</span>
                  <p className="mt-2 text-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">Example Code</h3>
            {slug === 'html' && (
              <CodeBlock 
                code={`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>I'm learning to code.</p>
  </body>
</html>`} 
                filename="index.html"
              />
            )}
            {slug === 'css' && (
              <CodeBlock 
                code={`h1 {
  color: #0058BE;
  font-family: 'Plus Jakarta Sans';
}

.cool-button {
  background-color: #FED01B;
  border-radius: 8px;
  padding: 10px 20px;
}`} 
                filename="styles.css"
                language="css"
              />
            )}
            {slug === 'js' && (
              <CodeBlock 
                code={`let greeting = "Hello Learner!";

function sayHello() {
  alert(greeting);
}

// Click the button to run me!
sayHello();`} 
                filename="magic.js"
                language="javascript"
              />
            )}
          </div>

          <ExerciseCard 
            question={
              slug === 'html' ? 'How do you create a level 1 heading in HTML?' :
              slug === 'css' ? 'Which property changes the color of text?' :
              'What function shows a pop-up in the browser?'
            }
            correctAnswer={
              slug === 'html' ? '<h1>' :
              slug === 'css' ? 'color' :
              'alert'
            }
            points={posts[0]?.xp || 50}
            placeholder="Type your answer..."
          />
        </section>
      </article>

      <Sidebar />
    </div>
  );
}
