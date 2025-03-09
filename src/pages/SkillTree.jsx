import { motion } from 'framer-motion'
import { useUser } from '../context/UserContext.jsx'

const SkillTree = () => {
  const { user, updateSkill } = useUser();
  
  const handleSkillAction = (skill, action) => {
    // In a real app, this would trigger a specific skill-building activity
    // For now, we'll just update the skill progress
    updateSkill(skill, 10);
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-8">Skill Tree</h1>
        
        <div className="grid gap-8">
          {Object.entries(user.skills).map(([skillName, data]) => (
            <SkillSection 
              key={skillName}
              name={skillName}
              level={data.level}
              progress={data.progress}
              onAction={(action) => handleSkillAction(skillName, action)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const SkillSection = ({ name, level, progress, onAction }) => {
  const skillInfo = getSkillInfo(name);
  
  return (
    <div className="game-card">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${skillInfo.bgColor}`}>
            {skillInfo.icon}
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-heading font-bold capitalize">{name}</h2>
            <span className="level-badge bg-gray-700">
              Lvl {level}
            </span>
          </div>
          
          <p className="text-gray-400 mb-2">{skillInfo.description}</p>
          
          <div className="flex items-center gap-3">
            <div className="progress-bar flex-grow">
              <div 
                className={`progress-fill ${skillInfo.progressColor}`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-xs whitespace-nowrap">{progress}% to level {level + 1}</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {skillInfo.actions.map((action, index) => (
          <div key={index} className="bg-surface border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
            <h3 className="font-medium mb-2">{action.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{action.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-primary">+{action.xp} XP</span>
              <button 
                onClick={() => onAction(action.id)}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-3 rounded transition-colors"
              >
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function getSkillInfo(skill) {
  const skills = {
    mindset: {
      icon: '🧠',
      description: 'Develop a growth mindset and mental resilience',
      bgColor: 'bg-primary/20',
      progressColor: 'bg-primary',
      actions: [
        {
          id: 'mindset-meditation',
          title: 'Daily Meditation',
          description: 'Practice mindfulness meditation for 10 minutes',
          xp: 15
        },
        {
          id: 'mindset-gratitude',
          title: 'Gratitude Journal',
          description: "Write down 3 things you're grateful for today",
          xp: 10
        },
        {
          id: 'mindset-affirmation',
          title: 'Positive Affirmations',
          description: 'Create and repeat personal affirmations',
          xp: 10
        }
      ]
    },
    fitness: {
      icon: '💪',
      description: 'Build strength, endurance, and healthy habits',
      bgColor: 'bg-success/20',
      progressColor: 'bg-success',
      actions: [
        {
          id: 'fitness-workout',
          title: 'Workout Session',
          description: 'Complete a 30-minute strength training workout',
          xp: 25
        },
        {
          id: 'fitness-cardio',
          title: 'Cardio Session',
          description: 'Complete a 20-minute cardio session',
          xp: 20
        },
        {
          id: 'fitness-nutrition',
          title: 'Meal Prep',
          description: 'Prepare healthy meals for the next 3 days',
          xp: 15
        }
      ]
    },
    productivity: {
      icon: '⏱️',
      description: 'Master your time and increase your output',
      bgColor: 'bg-warning/20',
      progressColor: 'bg-warning',
      actions: [
        {
          id: 'productivity-pomodoro',
          title: 'Pomodoro Session',
          description: 'Complete 4 pomodoro cycles on an important task',
          xp: 20
        },
        {
          id: 'productivity-planning',
          title: 'Daily Planning',
          description: 'Plan your day with the top 3 priorities',
          xp: 10
        },
        {
          id: 'productivity-nodistractions',
          title: 'Deep Work',
          description: 'Work for 1 hour with no distractions',
          xp: 25
        }
      ]
    },
    relationships: {
      icon: '👥',
      description: 'Build meaningful connections and social skills',
      bgColor: 'bg-accent/20',
      progressColor: 'bg-accent',
      actions: [
        {
          id: 'relationships-conversation',
          title: 'Meaningful Conversation',
          description: 'Have a deep conversation with someone you care about',
          xp: 15
        },
        {
          id: 'relationships-network',
          title: 'Networking',
          description: 'Reach out to someone new in your field',
          xp: 20
        },
        {
          id: 'relationships-listen',
          title: 'Active Listening',
          description: 'Practice active listening in a conversation',
          xp: 10
        }
      ]
    },
    finance: {
      icon: '💰',
      description: 'Build wealth and financial intelligence',
      bgColor: 'bg-secondary/20',
      progressColor: 'bg-secondary',
      actions: [
        {
          id: 'finance-budget',
          title: 'Budget Review',
          description: 'Review and update your monthly budget',
          xp: 15
        },
        {
          id: 'finance-save',
          title: 'Saving Challenge',
          description: 'Transfer money to your savings account',
          xp: 20
        },
        {
          id: 'finance-learn',
          title: 'Financial Education',
          description: 'Learn about a new financial concept',
          xp: 10
        }
      ]
    }
  };
  
  return skills[skill] || {};
}

export default SkillTree
