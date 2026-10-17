import './Contact.css'
import emailjs  from '@emailjs/browser'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(
        'service_0oql4nb',
        'template_g41r0bf',
        e.target,
        '_3TeEBaivNymLVCge'
    ).then( () => {
        alert("Message Sent Successfully")
        e.target.reset()
    })
    .catch((error) => {
         console.error('Failed to send email:', error)
         alert('Failed to send message. Please try again.')
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__info">
          <span className="contact__badge">Get In Touch</span>
          <h2 className="contact__title">
            Let’s build something <span>great together</span>
          </h2>
          <p className="contact__description">
            Whether you have a question about backend architecture, want to collaborate on a microservice project, or just want to connect—feel free to reach out!
          </p>

          <div className="contact__details">
            <div className="contact__detail-item">
              <span className="contact__detail-label">Email</span>
              <a href="mailto:charlemaro@example.com" className="contact__detail-value">
                charlemaro7@gmail.com
              </a>
            </div>
            <div className="contact__detail-item">
              <span className="contact__detail-label">Location</span>
              <span className="contact__detail-value">India</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name" className="contact__label">Name</label>
            <input
              type="text"
              id="name"
              name='name'
              required
              placeholder="Your name"
              className="contact__input"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email" className="contact__label">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              required
              placeholder="your.email@example.com"
              className="contact__input"
            />
          </div>

          <select id="subject" name="subject" required className="contact__input">
               <option value="">Select a topic</option>
               <option value="Job Opportunity">Job Opportunity</option>
               <option value="Project">Project</option>
               <option value="Collaboration">Collaboration</option>
               <option value="General Inquiry">General Inquiry</option>
           </select>

          <div className="contact__field">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea
              id="message"
              name='message'
              rows={5}
              required
              placeholder="Write the Context....."
              className="contact__input contact__textarea"
            />
          </div>

          <button type="submit" className="btn btn--primary contact__submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}