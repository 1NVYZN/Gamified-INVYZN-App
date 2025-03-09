import { Outlet, NavLink } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'

const Layout = () => {
  const { user } = useUser();
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-surface py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-heading font-bold text-primary">INVYZN</h1>
            <div className="level-badge bg-gradient-to-r from-primary to-secondary ml-4">
              {user.level}
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <NavItem to="/dashboard">Dashboard</NavItem>
              <NavItem to="/skills">Skills</NavItem>
              <NavItem to="/challenges">Challenges</NavItem>
              <NavItem to="/resources">Resources</NavItem>
              <NavItem to="/community">Community</NavItem>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <span className="font-medium">{user.name}</span>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-surface py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>INVYZN &copy; {new Date().getFullYear()} - Envision Your Greatest Self</p>
        </div>
      </footer>
      
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface py-2 px-4 shadow-lg">
        <ul className="flex justify-between">
          <MobileNavItem to="/dashboard" icon="📊" />
          <MobileNavItem to="/skills" icon="🧠" />
          <MobileNavItem to="/challenges" icon="🏆" />
          <MobileNavItem to="/resources" icon="📚" />
          <MobileNavItem to="/community" icon="👥" />
        </ul>
      </nav>
    </div>
  )
}

const NavItem = ({ to, children }) => (
  <li>
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive 
          ? "text-primary font-medium" 
          : "text-gray-300 hover:text-white transition-colors"
      }
    >
      {children}
    </NavLink>
  </li>
)

const MobileNavItem = ({ to, icon }) => (
  <li>
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive 
          ? "text-primary text-xl block py-1" 
          : "text-gray-400 text-xl block py-1"
      }
    >
      {icon}
    </NavLink>
  </li>
)

export default Layout
