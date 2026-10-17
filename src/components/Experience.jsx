import './Experience.css'

const EXPERIENCES = [
  {
    role: 'Nlp Development',
    company: 'FireFlink',
    duration: '2025',

    description:
      'Developing scalable backend services and automation solutions while contributing to application architecture, reliability, and continuous improvement.',

    media: {
      type: 'video',
      src: './experience/NlpCallableComponent.mp4',
      alt: 'Software development work',
    },

    contributions: [
      'Designed and developed scalable backend services using Java and Spring Boot.',
      'Implemented REST APIs and integrated services with MongoDB and external systems.',
      'Developed arounf 500+ reusable Selenium automation components to reduce repetitive testing effort for the end users.',
      'Improved application reliability through validation, exception handling, and optimized workflows.',
      'Collaborated with cross-functional teams to analyze requirements and deliver maintainable solutions, translating user needs into practical platform features.',
    ],

    technologies: [
      'Java',
      'Spring Boot',
      'MongoDB',
      'Selenium',
      'AWS',
    ],
  },

  {
    role: 'MicroService and Platform Integration',
    company: 'Fireflink',
    duration: '2026',

    description:
      'Integrated multiple third-party defect management platforms with the product through their APIs, enabling users to seamlessly raise and manage defects from within the platform without switching between different tools.',

    media: {
      type: 'image',
      src: '/experience/Integrations.png',
    },

    contributions: [
      'Integrated Jira, ClickUp, and Azure DevOps through their REST APIs, enabling seamless defect creation from the platform.',
      'Implemented API-based request and response handling, including authentication, payload construction, and response processing for external platforms.',
      'Developed reusable integration components to support defect-raising workflows across multiple third-party platforms.',
      'Streamlined defect management workflows, reducing manual effort and enabling users to create defects directly from test execution results.',
    ],

    technologies: [
      'Spring Boot',
      'WebClient',
      'Feign Client Calls',
      'REST APIs',
    ],
  },
   {
    role: 'Excel Integration',
    company: 'Fireflink',
    duration: '2025',

    description:
      'Enhanced the platform with file-based data integration and reporting capabilities, enabling users to work with structured test data across multiple formats and generate Excel-based reports directly from the platform.',

    media: {
      type: 'image',
      src: '/experience/files.png',
    },

    contributions: [
      'Integrated Excel and CSV file handling, enabling users to import and utilize external data within platform workflows',
      'Implemented data-driven workflow support, allowing test scenarios to dynamically consume data from uploaded files.',
      'Developed Excel report generation logic, enabling automated generation of structured execution and test reports.',
      'Built reusable file-processing components, simplifying data ingestion and reporting while improving maintainability across platform workflows.',
    ],

    technologies: [
      'Java',
      'Apache POI',
      'Feign Client Calls',
      'Maven',
    ],
  }
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">

        {/* Header */}
        <div className="experience__header">
          <span className="experience__eyebrow">
            Professional Journey
          </span>

          <h2 className="experience__title">
            Experience <span>&amp; Contributions</span>
          </h2>

          <p className="experience__subtitle">
            A look at my professional experience, technical contributions,
            and the solutions I have worked on throughout my software
            development journey.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="experience__grid">

          {EXPERIENCES.map((experience, index) => (
            <article
              className="experience-card"
              key={`${experience.company}-${experience.role}`}
            >

              {/* Media */}
              <div className="experience-card__media">
                {experience.media.type === 'video' ? (
                  <video
                    className="experience-card__video"
                    src={experience.media.src}
                    controls
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    className="experience-card__image"
                    src={experience.media.src}
                    alt={experience.media.alt}
                  />
                )}
              </div>

              {/* Content */}
              <div className="experience-card__content">

                <div className="experience-card__top">
                  <span className="experience-card__number">
                    0{index + 1}
                  </span>

                  <span className="experience-card__duration">
                    {experience.duration}
                  </span>
                </div>

                <h3 className="experience-card__role">
                  {experience.role}
                </h3>

                <p className="experience-card__company">
                  {experience.company}
                </p>

                <p className="experience-card__description">
                  {experience.description}
                </p>

                {/* Contributions */}
                <div className="experience-card__section">
                  <h4>Contributions</h4>

                  <ul className="experience-card__contributions">
                    {experience.contributions.map((contribution) => (
                      <li key={contribution}>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="experience-card__technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  )
}