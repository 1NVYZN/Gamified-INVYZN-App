import { motion } from 'framer-motion'
import { useUser } from '../context/UserContext.jsx'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useUser();
  
  const progressPercentage = (user.xp / user.nextLevelXp) * 100;
  
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-8">Your Journey</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="game-card">
            <h2 className="text-xl font-heading font-bold mb-2">Level {user.level}</h2>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-gray-400">XP: {user.xp}/{user.nextLevelXp}</span>
              <span className="text-xs text-primary">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill bg-gradient-to-r from-primary to-secondary" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="game-card">
            <h2 className="text-xl font-heading font-bold mb-2">Streak</h2>
            <div className="flex items-center gap-2">
              <span className="text-3xl text-warning">🔥</span>
              <span className="text-2xl font-bold">{user.streak} days</span>
            </div>
          </div>
          
          <div className="game-card">
            <h2 className="text-xl font-heading font-bold mb-2">Challenges</h2>
            <div className="flex items-center gap-2">
              <span className="text-3xl text-accent">🏆</span>
              <span className="text-2xl font-bold">{user.completedChallenges} completed</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-heading font-bold">Your Skills</h2>
            <Link to="/skills" className="text-primary hover:underline">View All</Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(user.skills).map(([skill, data]) => (
              <div key={skill} className="game-card">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium capitalize">{skill}</h3>
                  <span className="level-badge bg-gray-700">
                    {data.level}
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${getSkillColor(skill)}`}
                    style={{ width: `${data.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-heading font-bold">Daily Challenges</h2>
            <Link to="/challenges" className="text-primary hover:underline">View All</Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="game-card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Morning Meditation</h3>
                  <p className="text-gray-400 text-sm mb-4">Start your day with 10 minutes of focused meditation</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">+15 XP</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-success">Mindset</span>
                  </div>
                </div>
                <button className="btn-primary text-sm">Complete</button>
              </div>
            </div>
            
            <div className="game-card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Read 20 Pages</h3>
                  <p className="text-gray-400 text-sm mb-4">Read at least 20 pages from a non-fiction book</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">+20 XP</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-secondary">Knowledge</span>
                  </div>
                </div>
                <button className="btn-primary text-sm">Complete</button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-heading font-bold">Latest Resources</h2>
            <Link to="/resources" className="text-primary hover:underline">View All</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="game-card">
              <span className="text-xs text-gray-400 block mb-2">Mindset</span>
              <h3 className="text-lg font-medium mb-2">The Power of Discipline</h3>
              <p className="text-gray-400 text-sm mb-4">Learn how to build unshakeable discipline in your daily life</p>
              <Link to="/resources" className="text-primary text-sm hover:underline">Read More</Link>
            </div>
            
            <div className="game-card">
              <span className="text-xs text-gray-400 block mb-2">Fitness</span>
              <h3 className="text-lg font-medium mb-2">Beginner Workout Plan</h3>
              <p className="text-gray-400 text-sm mb-4">A complete 4-week workout plan for beginners</p>
              <Link to="/resources" className="text-primary text-sm hover:underline">Read More</Link>
            </div>
            
            <div className="game-card">
              <span className="text-xs text-gray-400 block mb-2">Finance</span>
              <h3 className="text-lg font-medium mb-2">Money Management Basics</h3>
              <p className="text-gray-400 text-sm mb-4">Essential financial skills every young man should master</p>
              <Link to="/resources" className="text-primary text-sm hover:underline">Read More</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function getSkillColor(skill) {
  const colors = {
    mindset: 'bg-primary',
    fitness: 'bg-success',
    productivity: 'bg-warning',
    relationships: 'bg-accent',
    finance: 'bg-secondary'
  };
  
  return colors[skill] || 'bg-primary';
}

export default Dashboard
