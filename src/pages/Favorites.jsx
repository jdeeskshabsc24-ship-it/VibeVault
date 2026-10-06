import { Heart } from 'lucide-react'
import SongCard from '../components/SongCard'
import { songs } from './Explore'

function Favorites({ favorites, onFavorite }) {
  const favoriteSongs = songs.filter((song) =>
    favorites.includes(song.id)
  )

  return (
    <main className="favorites-page">
      <section className="favorites-header">
        <p className="eyebrow">YOUR PERSONAL COLLECTION</p>

        <h1>My Favorites</h1>

        <p>
          The songs you've saved because they feel like you.
        </p>
      </section>

      <section className="favorites-content">
        {favoriteSongs.length > 0 ? (
          <>
            <div className="section-heading">
              <h2>Your Collection</h2>
              <span>{favoriteSongs.length} songs</span>
            </div>

            <div className="song-grid">
              {favoriteSongs.map((song) => (
                <SongCard
                  key={song.id}
                  song={song}
                  isFavorite={true}
                  onFavorite={onFavorite}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="favorites-empty">
            <div className="empty-icon">
              <Heart size={32} />
            </div>

            <h2>Your collection is waiting</h2>

            <p>
              Tap the heart on any song in Explore to save it here.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Favorites