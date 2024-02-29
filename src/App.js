import React from 'react'

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Add your description here.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Add your projects here.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Add your contact information here.</p>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  )
}

export default App
