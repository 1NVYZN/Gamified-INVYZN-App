import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Alex",
    level: 3,
    xp: 350,
    nextLevelXp: 500,
    skills: {
      mindset: { level: 2, progress: 65 },
      fitness: { level: 3, progress: 40 },
      productivity: { level: 1, progress: 90 },
      relationships: { level: 2, progress: 25 },
      finance: { level: 1, progress: 50 }
    },
    completedChallenges: 7,
    streak: 5
  });

  const addXP = (amount) => {
    setUser(prev => {
      const newXP = prev.xp + amount;
      let newLevel = prev.level;
      let nextLevelXP = prev.nextLevelXp;
      
      if (newXP >= nextLevelXP) {
        newLevel += 1;
        nextLevelXP = Math.floor(nextLevelXP * 1.5);
      }
      
      return {
        ...prev,
        xp: newXP,
        level: newLevel,
        nextLevelXp: nextLevelXP
      };
    });
  };

  const updateSkill = (skillName, progress) => {
    setUser(prev => {
      const updatedSkills = {...prev.skills};
      const skill = updatedSkills[skillName];
      
      skill.progress += progress;
      if (skill.progress >= 100) {
        skill.level += 1;
        skill.progress = 0;
        addXP(50); // Bonus XP for leveling up a skill
      }
      
      return {
        ...prev,
        skills: updatedSkills
      };
    });
  };

  const completeChallenge = () => {
    setUser(prev => ({
      ...prev,
      completedChallenges: prev.completedChallenges + 1
    }));
    addXP(25);
  };

  const value = {
    user,
    addXP,
    updateSkill,
    completeChallenge
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
