import './About.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about" id="about-me">
      <div className="about__container">
        <div className="about__image-wrapper">
          <div className="about__image-backdrop" />
          <img
            className="about__photo"
            src="/portrait-placeholder.jpg"
            alt="J Charle Maro"
          />
        </div>

        <div className="about__content">
          <span className="about__badge">About Me</span>
          <h2 className="about__title">
            Crafting Scalable Backends & <span>Reliable Systems</span>
          </h2>
          <p className="about__description">
            I am a software engineer focused on building robust, high-performance backends and distributed systems. 
            My expertise revolves around microservice architecture, asynchronous messaging, and end-to-end automation testing.
          </p>

          <div className="about__highlights">
            <div className="about__highlight-item">
              <span className="about__highlight-number">01</span>
              <div>
                <h3 className="about__highlight-title">Backend Engineering</h3>
                <p className="about__highlight-text">
                  Designing scalable Java & Spring Boot microservices with strong core patterns.
                </p>
              </div>
            </div>

            <div className="about__highlight-item">
              <span className="about__highlight-number">02</span>
              <div>
                <h3 className="about__highlight-title">Event-Driven Design</h3>
                <p className="about__highlight-text">
                  Building high-throughput streaming platforms using Apache Kafka.
                </p>
              </div>
            </div>

            <div className="about__highlight-item">
              <span className="about__highlight-number">03</span>
              <div>
                <h3 className="about__highlight-title">Platform Integration</h3>
                <p className="about__highlight-text">
                  Integrating external platforms and APIs to create unified workflows, including defect synchronization across ClickUp, Azure DevOps, and Jira.
                </p>
              </div>
            </div>

            <div className="about__highlight-item">
              <span className="about__highlight-number">04</span>
              <div>
                <h3 className="about__highlight-title">Test Automation</h3>
                <p className="about__highlight-text">
                  Implementing parallel execution and multi-platform automation frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="about__actions">
            <Link to="/experience" className="btn btn--primary">View My Work</Link>
          </div>
        </div>
      </div>
    </section>
  )
}