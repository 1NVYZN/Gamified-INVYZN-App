import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import SkillTree from './pages/SkillTree.jsx'
import Challenges from './pages/Challenges.jsx'
import Resources from './pages/Resources.jsx'
import Community from './pages/Community.jsx'
import Landing from './pages/Landing.jsx'
import Layout from './components/Layout.jsx'
import { UserProvider } from './context/UserContext.jsx'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skills" element={<SkillTree />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App
