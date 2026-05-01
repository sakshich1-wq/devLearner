import { useState } from 'react';
import { Edit3, CheckCircle, Stars } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExerciseCardProps {
  question: string;
  correctAnswer: string;
  points: number;
  placeholder?: string;
}

export default function ExerciseCard({ question, correctAnswer, points, placeholder }: ExerciseCardProps) {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const checkAnswer = () => {
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setStatus('correct');
    } else {
      setStatus('wrong');
    }
  };

  return (
    <div className="exercise-card bg-white p-8 rounded-xl space-y-6 my-12 relative overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="bg-tertiary-container text-on-tertiary-container p-2 rounded-lg">
          <Edit3 className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-display text-on-surface">Practice: Your Turn!</h3>
      </div>
      
      <p className="text-on-surface-variant font-medium">
        {question}
      </p>

      <div className="space-y-4">
        <input 
          type="text"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setStatus('idle');
          }}
          className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
            status === 'correct' ? 'border-tertiary bg-tertiary/5' : 
            status === 'wrong' ? 'border-error bg-error/5' : 
            'border-slate-200 focus:border-primary'
          }`}
          placeholder={placeholder || "Type your answer here..."}
        />
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-tertiary font-bold">
            <Stars className="w-5 h-5 fill-tertiary" />
            <span className="text-xs uppercase tracking-wider">REWARD: {points} XP</span>
          </div>
          
          <button 
            onClick={checkAnswer}
            disabled={status === 'correct'}
            className={`chunky-button px-8 py-3 rounded-lg font-bold transition-all ${
              status === 'correct' 
                ? 'bg-tertiary text-on-tertiary cursor-default' 
                : 'bg-primary text-on-primary hover:bg-primary-container active:scale-95'
            }`}
          >
            {status === 'correct' ? 'Great Job!' : 'Check Answer'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {status === 'correct' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 text-tertiary"
          >
            <CheckCircle className="w-12 h-12" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
