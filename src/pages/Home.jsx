function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="eyebrow">YOUR MUSIC. YOUR MOOD.</p>

        <h1>
          Find your vibe.
          <br />
          Find your music.
        </h1>

        <p className="hero-text">
          Discover songs that match exactly how you feel.
        </p>

        <button className="explore-button">
          Explore Music
        </button>
      </section>

      <section className="mood-section">
        <h2>What's your mood today?</h2>

        <div className="mood-grid">
          <button>🥰 Romantic</button>
          <button>🌧️ Sad</button>
          <button>😌 Chill</button>
          <button>⚡ Energetic</button>
          <button>🔥 Party</button>
        </div>
      </section>
    </main>
  )
}

export default Home