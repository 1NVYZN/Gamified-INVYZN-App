import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SkillTree from './pages/SkillTree'
import Challenges from './pages/Challenges'
import Resources from './pages/Resources'
import Community from './pages/Community'
import Landing from './pages/Landing'
import Layout from './components/Layout'
import { UserProvider } from './context/UserContext'

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
