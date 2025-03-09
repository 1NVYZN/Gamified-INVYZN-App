import { useState } from 'react'
import { motion } from 'framer-motion'

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);
  
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-8">Resources</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <CategoryButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'Mindset'} 
            onClick={() => setActiveCategory('Mindset')}
          >
            Mindset
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'Fitness'} 
            onClick={() => setActiveCategory('Fitness')}
          >
            Fitness
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'Productivity'} 
            onClick={() => setActiveCategory('Productivity')}
          >
            Productivity
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'Relationships'} 
            onClick={() => setActiveCategory('Relationships')}
          >
            Relationships
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'Finance'} 
            onClick={() => setActiveCategory('Finance')}
          >
            Finance
          </CategoryButton>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const CategoryButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active 
        ? 'bg-primary text-white' 
        : 'bg-surface text-gray-300 hover:bg-gray-700'
    }`}
  >
    {children}
  </button>
);

const ResourceCard = ({ resource }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="game-card flex flex-col h-full">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-sm px-3 py-1 rounded-full ${getCategoryStyle(resource.category)}`}>
          {resource.category}
        </span>
        <span className="text-xs text-gray-400">{resource.type}</span>
      </div>
      
      <h2 className="text-xl font-medium mb-2">{resource.title}</h2>
      
      <p className="text-gray-400 text-sm mb-4 flex-grow">
        {expanded ? resource.content : `${resource.content.substring(0, 120)}...`}
      </p>
      
      <div className="flex justify-between items-center mt-auto">
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-sm hover:underline"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
        
        {resource.link && (
          <a 
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors"
          >
            {resource.linkText || 'External Link'}
          </a>
        )}
      </div>
    </div>
  );
};

function getCategoryStyle(category) {
  const styles = {
    'Mindset': 'bg-primary/20 text-primary',
    'Fitness': 'bg-success/20 text-success',
    'Productivity': 'bg-warning/20 text-warning',
    'Relationships': 'bg-accent/20 text-accent',
    'Finance': 'bg-secondary/20 text-secondary'
  };
  
  return styles[category] || 'bg-gray-700 text-gray-300';
}

const resources = [
  {
    id: 1,
    title: 'The Power of Discipline',
    category: 'Mindset',
    type: 'Article',
    content: 'Discipline is the bridge between goals and accomplishment. This resource explores how to build unshakeable discipline in your daily life. Learn practical strategies to overcome procrastination, maintain consistency, and develop the mental fortitude needed to achieve your goals. Discipline isn't about punishment but rather about creating a structure that leads to freedom and achievement.',
    link: '#',
    linkText: 'Read Article'
  },
  {
    id: 2,
    title: 'Beginner Workout Plan',
    category: 'Fitness',
    type: 'Guide',
    content: 'A complete 4-week workout plan designed specifically for beginners. This plan includes detailed instructions for each exercise, proper form guidance, and a progressive structure that helps you build strength and endurance gradually. The workouts require minimal equipment and can be done at home or in a gym setting. Follow this plan consistently to establish a solid fitness foundation.',
    link: '#',
    linkText: 'View Plan'
  },
  {
    id: 3,
    title: 'Money Management Basics',
    category: 'Finance',
    type: 'Course',
    content: 'Essential financial skills every young man should master. This comprehensive guide covers budgeting, saving, investing, debt management, and building credit. Learn how to track expenses, create an emergency fund, understand compound interest, and make informed financial decisions. These fundamental skills will set you up for long-term financial success and independence.',
    link: '#',
    linkText: 'Start Course'
  },
  {
    id: 4,
    title: 'Deep Work: Rules for Focused Success',
    category: 'Productivity',
    type: 'Book Summary',
    content: 'A summary of Cal Newport's influential book on achieving profound focus and productivity. Learn the concept of deep work—the ability to focus without distraction on cognitively demanding tasks. Discover strategies to eliminate distractions, build concentration, and produce high-quality work in less time. This summary provides actionable techniques to implement deep work in your daily routine.',
    link: '#',
    linkText: 'Read Summary'
  },
  {
    id: 5,
    title: 'Building Authentic Connections',
    category: 'Relationships',
    type: 'Workshop',
    content: 'Learn how to develop meaningful relationships and improve your social skills. This workshop covers active listening, emotional intelligence, conflict resolution, and vulnerability. Discover how to move beyond surface-level interactions to create deep, authentic connections with others. These skills apply to friendships, romantic relationships, family dynamics, and professional networks.',
    link: '#',
    linkText: 'Join Workshop'
  },
  {
    id: 6,
    title: 'Morning Routine Masterclass',
    category: 'Productivity',
    type: 'Video Series',
    content: 'Design a powerful morning routine that sets you up for daily success. This video series explores the morning habits of high performers and helps you create a personalized routine that energizes your body, focuses your mind, and aligns your day with your goals. Learn how the first hour of your day can transform your productivity, mindset, and overall well-being.',
    link: '#',
    linkText: 'Watch Videos'
  },
  {
    id: 7,
    title: 'Mindfulness Meditation Guide',
    category: 'Mindset',
    type: 'Practice',
    content: 'A beginner-friendly approach to mindfulness meditation with guided sessions. This resource teaches you how to develop present-moment awareness, manage stress, and cultivate mental clarity. The guide includes different meditation techniques, breathing exercises, and tips for establishing a consistent practice. Regular mindfulness meditation can reduce anxiety, improve focus, and enhance emotional regulation.',
    link: '#',
    linkText: 'Start Practice'
  },
  {
    id: 8,
    title: 'Nutrition Fundamentals',
    category: 'Fitness',
    type: 'Guide',
    content: 'Understanding macronutrients, meal planning, and eating for energy and recovery. This comprehensive guide breaks down the basics of protein, carbohydrates, and fats, and explains how to balance them for your specific goals. Learn about portion control, meal timing, hydration, and how to make sustainable dietary changes that support your fitness journey and overall health.',
    link: '#',
    linkText: 'Read Guide'
  },
  {
    id: 9,
    title: 'Investing for Beginners',
    category: 'Finance',
    type: 'Course',
    content: 'Start building wealth with this straightforward introduction to investing. This course covers investment fundamentals, different asset classes, risk management, and long-term strategy. Learn about stocks, bonds, index funds, retirement accounts, and the power of compound interest. The material is presented in an accessible way that demystifies investing for those with no prior experience.',
    link: '#',
    linkText: 'Start Course'
  }
];

export default Resources
