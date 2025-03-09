import { useState } from 'react'
import { motion } from 'framer-motion'
import { useUser } from '../context/UserContext.jsx'

const Challenges = () => {
  const { user, completeChallenge } = useUser();
  const [activeTab, setActiveTab] = useState('daily');
  
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-heading font-bold">Challenges</h1>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Completed:</span>
            <span className="text-xl font-bold">{user.completedChallenges}</span>
          </div>
        </div>
        
        <div className="flex border-b border-gray-700 mb-6">
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'daily' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => setActiveTab('daily')}
          >
            Daily
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'weekly' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => setActiveTab('weekly')}
          >
            Weekly
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'monthly' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </button>
        </div>
        
        {activeTab === 'daily' && (
          <div className="grid gap-6">
            {dailyChallenges.map((challenge) => (
              <ChallengeCard 
                key={challenge.id}
                challenge={challenge}
                onComplete={completeChallenge}
              />
            ))}
          </div>
        )}
        
        {activeTab === 'weekly' && (
          <div className="grid gap-6">
            {weeklyChallenges.map((challenge) => (
              <ChallengeCard 
                key={challenge.id}
                challenge={challenge}
                onComplete={completeChallenge}
              />
            ))}
          </div>
        )}
        
        {activeTab === 'monthly' && (
          <div className="grid gap-6">
            {monthlyChallenges.map((challenge) => (
              <ChallengeCard 
                key={challenge.id}
                challenge={challenge}
                onComplete={completeChallenge}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

const ChallengeCard = ({ challenge, onComplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  
  const handleComplete = () => {
    if (!isCompleted) {
      setIsCompleted(true);
      onComplete();
    }
  };
  
  return (
    <div className={`game-card ${isCompleted ? 'opacity-60' : ''}`}>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${getCategoryColor(challenge.category)}`}>
            {getCategoryIcon(challenge.category)}
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
            <h2 className="text-xl font-medium">{challenge.title}</h2>
            <div className="flex items-center gap-2">
              <span className="text-primary text-sm">+{challenge.xp} XP</span>
              <span className="text-gray-500">•</span>
              <span className={`text-sm ${getCategoryTextColor(challenge.category)}`}>{challenge.category}</span>
            </div>
          </div>
          
          <p className="text-gray-400 mb-4">{challenge.description}</p>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {challenge.steps.map((step, index) => (
                <span key={index} className="bg-surface border border-gray-700 text-sm px-3 py-1 rounded-full">
                  {step}
                </span>
              ))}
            </div>
            
            <button 
              onClick={handleComplete}
              disabled={isCompleted}
              className={`btn-primary whitespace-nowrap ${isCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isCompleted ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function getCategoryColor(category) {
  const colors = {
    'Mindset': 'bg-primary/20',
    'Fitness': 'bg-success/20',
    'Productivity': 'bg-warning/20',
    'Relationships': 'bg-accent/20',
    'Finance': 'bg-secondary/20'
  };
  
  return colors[category] || 'bg-gray-700';
}

function getCategoryTextColor(category) {
  const colors = {
    'Mindset': 'text-primary',
    'Fitness': 'text-success',
    'Productivity': 'text-warning',
    'Relationships': 'text-accent',
    'Finance': 'text-secondary'
  };
  
  return colors[category] || 'text-gray-400';
}

function getCategoryIcon(category) {
  const icons = {
    'Mindset': '🧠',
    'Fitness': '💪',
    'Productivity': '⏱️',
    'Relationships': '👥',
    'Finance': '💰'
  };
  
  return icons[category] || '🎯';
}

const dailyChallenges = [
  {
    id: 'd1',
    title: 'Morning Meditation',
    description: 'Start your day with 10 minutes of focused meditation to clear your mind and set positive intentions.',
    category: 'Mindset',
    xp: 15,
    steps: ['10 minutes', 'Morning', 'Focused breathing']
  },
  {
    id: 'd2',
    title: 'Read 20 Pages',
    description: 'Read at least 20 pages from a non-fiction book to expand your knowledge and perspective.',
    category: 'Mindset',
    xp: 20,
    steps: ['Non-fiction', '20 pages', 'Take notes']
  },
  {
    id: 'd3',
    title: 'Workout Session',
    description: 'Complete a 30-minute workout session focusing on strength, cardio, or flexibility.',
    category: 'Fitness',
    xp: 25,
    steps: ['30 minutes', 'Any exercise', 'Push yourself']
  },
  {
    id: 'd4',
    title: 'Gratitude Journal',
    description: 'Write down three things you're grateful for today to cultivate a positive mindset.',
    category: 'Mindset',
    xp: 10,
    steps: ['3 items', 'Be specific', 'Feel gratitude']
  }
];

const weeklyChallenges = [
  {
    id: 'w1',
    title: 'Digital Detox',
    description: 'Spend one day this week with minimal screen time outside of work/school requirements.',
    category: 'Mindset',
    xp: 50,
    steps: ['Full day', 'No social media', 'Limited phone use']
  },
  {
    id: 'w2',
    title: 'Meal Prep Sunday',
    description: 'Prepare healthy meals for at least 3 days of the upcoming week.',
    category: 'Fitness',
    xp: 40,
    steps: ['3+ days', 'Balanced nutrition', 'Portion control']
  },
  {
    id: 'w3',
    title: 'Reach Out',
    description: 'Contact someone you haven't spoken to in a while and have a meaningful conversation.',
    category: 'Relationships',
    xp: 30,
    steps: ['Old friend/family', 'Deep conversation', 'Active listening']
  },
  {
    id: 'w4',
    title: 'Budget Review',
    description: 'Review your spending for the week and identify areas for improvement.',
    category: 'Finance',
    xp: 35,
    steps: ['Track expenses', 'Categorize spending', 'Set goals']
  }
];

const monthlyChallenges = [
  {
    id: 'm1',
    title: '30-Day Habit Builder',
    description: 'Choose one positive habit and perform it every day for 30 days straight.',
    category: 'Productivity',
    xp: 100,
    steps: ['Choose habit', 'Daily consistency', 'Track progress']
  },
  {
    id: 'm2',
    title: 'Skill Acquisition',
    description: 'Spend at least 10 hours this month learning a new skill that interests you.',
    category: 'Mindset',
    xp: 80,
    steps: ['10+ hours', 'Structured learning', 'Practice']
  },
  {
    id: 'm3',
    title: 'Savings Challenge',
    description: 'Save a predetermined amount of money this month beyond your regular savings.',
    category: 'Finance',
    xp: 75,
    steps: ['Set target', 'Cut expenses', 'Automate if possible']
  },
  {
    id: 'm4',
    title: 'Fitness Milestone',
    description: 'Set and achieve a specific fitness goal this month (distance, weight, etc.).',
    category: 'Fitness',
    xp: 90,
    steps: ['Specific goal', 'Training plan', 'Track progress']
  }
];

export default Challenges
