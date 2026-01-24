import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="brand">Honoured Consult Ltd</div>
        <h1 className="title">Study Abroad & Career Guidance</h1>
        <p className="subtitle">
          Personalized counseling, university admissions support, and visa guidance
          for ambitious students.
        </p>
        <div className="actions">
          <button className="primary">Book a Consultation</button>
          <button className="secondary">View Services</button>
        </div>
      </header>

      <section className="highlights">
        <div className="highlight">
          <h3>Trusted Advisors</h3>
          <p>Expert counselors with proven admission and visa success stories.</p>
        </div>
        <div className="highlight">
          <h3>Global Destinations</h3>
          <p>University pathways across Europe, North America, and Asia.</p>
        </div>
        <div className="highlight">
          <h3>End-to-End Support</h3>
          <p>From profile review to pre-departure, we handle every step.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Honoured Consult Ltd • Professional Education Consulting</p>
      </footer>
    </div>
  )
}

export default App
