import { useState } from 'react'
import { Search } from 'lucide-react'
import SongCard from '../components/SongCard'

export const songs = [
  {
    id: 1,
    title: 'Midnight Dreams',
    artist: 'Luna',
    mood: 'Chill',
    genre: 'Pop',
    emoji: '🌙',
  },
  {
    id: 2,
    title: 'Electric Hearts',
    artist: 'Nova',
    mood: 'Energetic',
    genre: 'Dance',
    emoji: '⚡',
  },
  {
    id: 3,
    title: 'Golden Hour',
    artist: 'Ari',
    mood: 'Romantic',
    genre: 'R&B',
    emoji: '🌅',
  },
  {
    id: 4,
    title: 'Rainy Letters',
    artist: 'Mia',
    mood: 'Sad',
    genre: 'Indie',
    emoji: '🌧️',
  },
  {
    id: 5,
    title: 'Neon Nights',
    artist: 'Kai',
    mood: 'Party',
    genre: 'Electronic',
    emoji: '🔥',
  },
  {
    id: 6,
    title: 'Ocean Eyes',
    artist: 'Skye',
    mood: 'Chill',
    genre: 'Indie',
    emoji: '🌊',
  },
]

function Explore({ favorites, onFavorite }) {
  const [search, setSearch] = useState('')
  const [selectedMood, setSelectedMood] = useState('All')

  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())

    const matchesMood =
      selectedMood === 'All' || song.mood === selectedMood

    return matchesSearch && matchesMood
  })

  const moods = ['All', 'Romantic', 'Sad', 'Chill', 'Energetic', 'Party']

  return (
    <main className="explore-page">
      <section className="explore-header">
        <p className="eyebrow">DISCOVER YOUR SOUND</p>

        <h1>Explore Music</h1>

        <p>
          Search through songs and find something that matches your mood.
        </p>

        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search by song or artist..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </section>

      <section className="filter-section">
        <div className="filter-row">
          {moods.map((mood) => (
            <button
              key={mood}
              className={selectedMood === mood ? 'filter active' : 'filter'}
              onClick={() => setSelectedMood(mood)}
            >
              {mood}
            </button>
          ))}
        </div>
      </section>

      <section className="songs-section">
        <div className="section-heading">
          <h2>Featured Songs</h2>
          <span>{filteredSongs.length} songs</span>
        </div>

        <div className="song-grid">
          {filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              isFavorite={favorites.includes(song.id)}
              onFavorite={onFavorite}
            />
          ))}
        </div>

        {filteredSongs.length === 0 && (
          <div className="empty-state">
            <h3>No songs found</h3>
            <p>Try another song, artist or mood.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Explore