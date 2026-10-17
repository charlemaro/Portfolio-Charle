import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Home', target: '/' },
  { label: 'About', target: '/about' },
  { label: 'Experience', target: '/experience' },
  { label: 'Contact', target: '/contact' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <svg className="navbar__logo-mark" viewBox="0 0 36 36" width="32" height="32" fill="none">
          <path
            d="M 26 8 C 21 3, 11 3, 6 10 C 2 16, 2 20, 6 26 C 10 32, 17 33, 22 31"
            stroke="url(#purple-grad)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M 22 31 C 25 29.5, 27 27, 27 24"
            stroke="url(#orange-grad)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A2BE2" />
              <stop offset="100%" stopColor="#6A0DAD" />
            </linearGradient>
            <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
          </defs>
        </svg>
        <span className="navbar__logo-text">Charle</span>
      </div>

      <nav className="navbar__links">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.target
          return (
            <Link
              key={item.label}
              to={item.target}
              className={isActive ? 'is-active' : ''}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <a href="https://www.linkedin.com/in/charlemaro/"
       className="navbar__cta"
        target="_blank"
        rel="noopener noreferrer"
        >
        Let's Chat
      </a>
    </header>
  )
}