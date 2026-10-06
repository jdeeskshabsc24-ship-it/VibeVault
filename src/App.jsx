import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Favorites from './pages/Favorites'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="eyebrow">ABOUT VIBEVAULT</p>

        <h1>
          Music that
          <span> feels like you.</span>
        </h1>

        <p className="about-intro">
          VibeVault is a music discovery space built around one simple idea:
          the right song can change your entire mood.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Discover your sound</h2>
          <p>
            Explore songs based on your mood, search for your favorite artists,
            and find music that fits exactly how you feel.
          </p>
        </div>

        <div className="about-card">
          <h2>Save what you love</h2>
          <p>
            Found something special? Save it to your personal collection and
            come back to your favorite songs whenever you want.
          </p>
        </div>

        <div className="about-card">
          <h2>Your mood. Your music.</h2>
          <p>
            From romantic and chill moments to energetic and party vibes,
            VibeVault helps you find the soundtrack for every moment.
          </p>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (songId) => {
    setFavorites((current) =>
      current.includes(songId)
        ? current.filter((id) => id !== songId)
        : [...current, songId]
    )
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/explore"
          element={
            <Explore
              favorites={favorites}
              onFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onFavorite={toggleFavorite}
            />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App