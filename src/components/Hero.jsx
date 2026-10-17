import './Hero.css'
import Stats from './Stats.jsx'
import Contact from './Contact.jsx'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
   const navigate = useNavigate()
  return (
    <section className="hero" id='home'>
      <div className="hero__copy">
        <span className="hero__badge">Hi! I'm Charle Maro J</span>

        <h1 className="hero__title">
          Software <span>Developer</span>
        </h1>

        <p className="hero__text">
          I build code that works when it counts and scales when it matters. Passioned about clean architecture, seamless automation, and turning complex problem statements into elegant, high-performing software.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary"
          onClick= {() => navigate('/Contact')}
          >Hire Me</button>
          <button className="btn btn--ghost"
          onClick={() => {
                const link = document.createElement('a')
                link.href = '/Charle-Maro-J-Resume.pdf'
                link.download = 'Charle-Maro-J-Resume.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}>
                Download CV
                </button>
        </div>

        <Stats />
      </div>

      <div className="hero__portrait">
        <span className="hero__portrait-name">
          Charle<br />Maro J
        </span>
        {/* Replace src with your own photo in src/assets */}
        <img
          className="hero__portrait-photo"
          src="/portrait-placeholder.jpg"
          alt="Portrait of Mitchell Hancock"
        />
      </div>
    </section>
  )
}
