import { Link } from 'react-router-dom'
import { Heart, Music2 } from 'lucide-react'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Music2 size={24} />
        <span>VibeVault</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/favorites">
          <Heart size={18} />
          Favorites
        </Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar