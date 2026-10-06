import { Heart, Play } from 'lucide-react'

function SongCard({ song, isFavorite, onFavorite }) {
  return (
    <article className="song-card">
      <div className="album-art">
        <span>{song.emoji}</span>

        <button className="play-button">
          <Play size={18} fill="currentColor" />
        </button>
      </div>

      <div className="song-info">
        <div>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>

        <button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => onFavorite(song.id)}
          aria-label="Add to favorites"
        >
          <Heart
            size={20}
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      <div className="song-meta">
        <span>{song.mood}</span>
        <span>{song.genre}</span>
      </div>
    </article>
  )
}

export default SongCard