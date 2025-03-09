import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold text-primary">INVYZN</h1>
          <Link to="/dashboard" className="btn-primary">Enter Game</Link>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
              Become The Greatest Version Of Yourself
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              INVYZN is where you learn to use the power of your mind to create the man you are meant to be. 
              Success begins with a vision. Envision how you see yourself in the future and use INVYZN's program to become exactly that.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="game-card"
            >
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Level Up Your Life</h3>
              <p className="text-gray-300 mb-4">
                INVYZN transforms personal development into an engaging game. Gain XP, level up skills, and unlock achievements as you grow.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Mindset</span>
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Fitness</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Productivity</span>
                <span className="bg-success/20 text-success px-3 py-1 rounded-full text-sm">Relationships</span>
                <span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-sm">Finance</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="game-card"
            >
              <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">For Young Men 18-24</h3>
              <p className="text-gray-300 mb-4">
                Specifically designed for young men who want to make a change in their lives and reach their maximum potential but don't know how.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span> Practical wisdom and knowledge
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span> Effective habits and routines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span> Community support and accountability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span> Actionable challenges and missions
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Link to="/dashboard" className="btn-secondary text-lg px-8 py-3">
              Start Your Journey
            </Link>
            <p className="mt-4 text-gray-400">
              Your transformation begins with a vision
            </p>
          </motion.div>
        </div>
      </main>
      
      <footer className="bg-surface py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>INVYZN &copy; {new Date().getFullYear()} - Envision Your Greatest Self</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
