import './'

const PROJECTS = [
  {
    title: 'Project One',
    description:
      'A scalable software application designed to solve a real-world business problem with a focus on performance, maintainability, and clean architecture.',

    media: {
      type: 'image',
      src: '/projects/project-1.png',
      alt: 'Project One screenshot',
    },

    points: [
      'Designed and developed the application using a modular architecture.',
      'Implemented REST APIs for communication between frontend and backend services.',
      'Improved application performance through optimized data processing.',
      'Implemented validation, exception handling, and reusable components.',
    ],

    technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'AWS'],

    github: '#',
    demo: '#',
  },

  {
    title: 'Project Two',
    description:
      'An automation-focused application built to reduce repetitive manual tasks and improve the reliability of software testing workflows.',

    media: {
      type: 'video',
      src: '/projects/project-2.mp4',
    },

    points: [
      'Developed automated workflows for repetitive testing activities.',
      'Created reusable automation components using Selenium.',
      'Implemented test execution and reporting capabilities.',
      'Reduced manual effort and improved consistency of test execution.',
    ],

    technologies: ['Java', 'Selenium', 'TestNG', 'Maven', 'Jenkins'],

    github: '#',
    demo: '#',
  },

  {
    title: 'Project Three',
    description:
      'A web-based application focused on providing a responsive and intuitive user experience while maintaining a clean and scalable codebase.',

    media: {
      type: 'image',
      src: '/projects/project-3.png',
      alt: 'Project Three screenshot',
    },

    points: [
      'Built a responsive user interface for desktop and mobile devices.',
      'Created reusable React components to improve maintainability.',
      'Integrated frontend components with backend REST APIs.',
      'Implemented clean navigation and structured application state.',
    ],

    technologies: ['React', 'JavaScript', 'CSS', 'REST API'],

    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">

        <div className="projects__header">
          <span className="projects__eyebrow">
            What I've Built
          </span>

          <h2 className="projects__title">
            Featured <span>Projects</span>
          </h2>

          <p className="projects__subtitle">
            A collection of projects where I applied software engineering,
            automation, and problem-solving skills to build practical solutions.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <article className="project-card" key={project.title}>

              {/* Media */}
              <div className="project-card__media">
                {project.media.type === 'video' ? (
                  <video
                    className="project-card__video"
                    src={project.media.src}
                    controls
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    className="project-card__image"
                    src={project.media.src}
                    alt={project.media.alt}
                  />
                )}
              </div>

              {/* Content */}
              <div className="project-card__content">

                <span className="project-card__number">
                  0{index + 1}
                </span>

                <h3 className="project-card__title">
                  {project.title}
                </h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                {/* Bullet Points */}
                <ul className="project-card__points">
                  {project.points.map((point) => (
                    <li key={point}>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-card__actions">
                  <a
                    href={project.github}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    className="project-card__link project-card__link--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}