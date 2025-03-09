import { useState } from 'react'
import { motion } from 'framer-motion'

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-8">Community</h1>
        
        <div className="flex border-b border-gray-700 mb-6">
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'discussions' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => setActiveTab('discussions')}
          >
            Discussions
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'success' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => setActiveTab('success')}
          >
            Success Stories
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'accountability' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => setActiveTab('accountability')}
          >
            Accountability
          </button>
        </div>
        
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-heading font-bold">Recent Discussions</h2>
              <button className="btn-primary">New Post</button>
            </div>
            
            {discussions.map((discussion) => (
              <DiscussionCard key={discussion.id} discussion={discussion} />
            ))}
          </div>
        )}
        
        {activeTab === 'success' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-heading font-bold">Success Stories</h2>
              <button className="btn-primary">Share Your Story</button>
            </div>
            
            {successStories.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
        
        {activeTab === 'accountability' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-heading font-bold">Accountability Groups</h2>
              <button className="btn-primary">Join Group</button>
            </div>
            
            {accountabilityGroups.map((group) => (
              <AccountabilityGroupCard key={group.id} group={group} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

const DiscussionCard = ({ discussion }) => {
  return (
    <div className="game-card">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 hidden md:block">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium">
            {discussion.author.substring(0, 2).toUpperCase()}
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h3 className="text-lg font-medium">{discussion.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{discussion.category}</span>
              <span>•</span>
              <span>{discussion.date}</span>
            </div>
          </div>
          
          <p className="text-gray-400 mb-4">{discussion.preview}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <span>👍</span> {discussion.likes}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <span>💬</span> {discussion.comments}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">By</span>
              <span className="font-medium">{discussion.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessStoryCard = ({ story }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="game-card">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 hidden md:block">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium">
            {story.author.substring(0, 2).toUpperCase()}
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h3 className="text-lg font-medium">{story.title}</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-success">Success Story</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">{story.date}</span>
            </div>
          </div>
          
          <p className="text-gray-400 mb-4">
            {expanded ? story.content : `${story.content.substring(0, 200)}...`}
          </p>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-primary text-sm hover:underline"
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">By</span>
              <span className="font-medium">{story.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccountabilityGroupCard = ({ group }) => {
  return (
    <div className="game-card">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
            {group.icon}
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
            <h3 className="text-xl fontt-medium">{group.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                {group.members} members
              </span>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                {group.focus}
              </span>
            </div>
          </div>
          
          <p className="text-gray-400 mb-4">{group.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              {[...Array(Math.min(5, group.members))].map((_, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface flex items-center justify-center text-xs font-medium"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              {group.members > 5 && (
                <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface flex items-center justify-center text-xs font-medium">
                  +{group.members - 5}
                </div>
              )}
            </div>
            
            <button className="btn-secondary text-sm">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const discussions = [
  {
    id: 1,
    title: 'How to stay consistent with meditation?',
    category: 'Mindset',
    author: 'Michael',
    date: '2 days ago',
    preview: 'I've been trying to build a meditation habit for the past month but I keep falling off after a few days. Any tips on how to make it stick?',
    likes: 24,
    comments: 18
  },
  {
    id: 2,
    title: 'Best books for developing discipline?',
    category: 'Productivity',
    author: 'Jason',
    date: '5 days ago',
    preview: 'Looking for book recommendations that have actually helped you build discipline and follow through with your goals. What's worked for you?',
    likes: 42,
    comments: 31
  },
  {
    id: 3,
    title: 'How to balance social life with self-improvement?',
    category: 'Relationships',
    author: 'David',
    date: '1 week ago',
    preview: 'I find myself either going all-in on my goals and neglecting friends, or socializing too much and dropping my habits. How do you find balance?',
    likes: 37,
    comments: 29
  },
  {
    id: 4,
    title: 'Meal prep strategies for busy schedules',
    category: 'Fitness',
    author: 'Chris',
    date: '1 week ago',
    preview: 'I work long hours and struggle to eat healthy. Looking for efficient meal prep strategies that don't take up an entire Sunday.',
    likes: 19,
    comments: 22
  }
];

const successStories = [
  {
    id: 1,
    title: 'From Procrastinator to Productive: My 90-Day Transformation',
    author: 'Thomas',
    date: '2 weeks ago',
    content: 'Three months ago, I was the king of procrastination. I'd start projects with enthusiasm but never finish them. My room was a mess, my fitness goals were just dreams, and my career was stagnant. I joined INVYZN as a last resort, honestly not expecting much.\n\nThe game-like structure made all the difference. Breaking down big goals into daily challenges made them approachable. The XP system gave me that little dopamine hit that kept me coming back. I started with small wins - making my bed every day, then a 10-minute workout, then gradually building a morning routine.\n\nFast forward 90 days: I've lost 15 pounds, received a promotion at work, and most importantly, developed the confidence that I can actually follow through on my commitments. The mindset modules helped me recognize my self-sabotaging patterns and replace them with empowering beliefs.\n\nIf you're on the fence about committing to this program, just give it 30 days of genuine effort. The community support alone is worth it. Thanks to everyone who encouraged me along the way!'
  },
  {
    id: 2,
    title: 'How I Overcame Social Anxiety Through Systematic Challenges',
    author: 'Kevin',
    date: '1 month ago',
    content: 'I used to be terrified of social interactions. Ordering coffee would make my heart race. Networking events? Forget about it. I'd make excuses to avoid any situation where I might have to talk to strangers.\n\nWhen I found the Relationships skill tree in INVYZN, I decided to tackle this head-on. I started with the smallest challenges - making eye contact with baristas, then progressing to striking up conversations with store clerks. Each small win gave me confidence for the next challenge.\n\nThe program's structured approach helped me see social skills as exactly that - skills that can be learned and improved, not fixed personality traits. The community here provided a safe space to practice and get feedback.\n\nSix months later, I've given a presentation to 50+ people at work, organized a local meetup group, and even asked someone out on a date (she said yes!). I still get nervous sometimes, but now I have the tools to push through it.\n\nFor anyone struggling with social anxiety, know that systematic exposure combined with the right mindset work can truly change your life. Take it one small challenge at a time.'
  },
  {
    id: 3,
    title: 'From Financial Mess to Financial Freedom',
    author: 'Marcus',
    date: '3 months ago',
    content: 'At 23, I was $15,000 in credit card debt with no savings and terrible spending habits. I was living paycheck to paycheck despite having a decent income. Money would burn a hole in my pocket, and I had no concept of delayed gratification.\n\nThe Finance module in INVYZN completely changed my relationship with money. I started tracking every dollar, created my first budget, and set up automatic transfers to savings. The challenges helped me identify emotional spending triggers and develop healthier coping mechanisms.\n\nThe most powerful shift was in my mindset. I stopped seeing budgeting as restrictive and started viewing it as a tool for freedom. The community accountability was crucial - knowing others were checking in on my progress kept me honest.\n\nToday, 18 months later, I'm debt-free with a 6-month emergency fund and investing regularly. I've developed the discipline to say no to immediate pleasures for long-term gains. Financial stress used to keep me up at night; now I sleep soundly knowing I'm in control of my money, not the other way around.\n\nIf you're struggling financially, start with small habits and be patient with yourself. Financial transformation doesn't happen overnight, but consistent small actions compound dramatically over time.'
  }
];

const accountabilityGroups = [
  {
    id: 1,
    name: 'Morning Routine Masters',
    icon: '🌅',
    members: 28,
    focus: 'Productivity',
    description: 'A group dedicated to building and maintaining powerful morning routines. Members check in daily with their morning wins and challenges.'
  },
  {
    id: 2,
    name: 'Fitness Fundamentals',
    icon: '💪',
    members: 42,
    focus: 'Fitness',
    description: 'For those committed to consistent exercise and healthy nutrition. Weekly check-ins, workout sharing, and nutrition support.'
  },
  {
    id: 3,
    name: 'Mindfulness Practitioners',
    icon: '🧘‍♂️',
    members: 19,
    focus: 'Mindset',
    description: 'Daily meditation and mindfulness practice group. Members support each other in building consistent mental wellness habits.'
  },
  {
    id: 4,
    name: 'Financial Freedom Seekers',
    icon: '💰',
    members: 31,
    focus: 'Finance',
    description: 'A group focused on budgeting, saving, investing, and developing healthy money habits. Monthly financial goal setting and reviews.'
  }
];

export default Community
