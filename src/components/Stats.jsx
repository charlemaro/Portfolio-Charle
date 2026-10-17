import './Stats.css'

const STATS = [
  { value: '2+', label: 'Years Backend Experience' },
  { value: 'Microservices', label: 'Architecture' },
  { value: 'AWS', label: 'Cloud Experience' },
]

export default function Stats() {
  return (
    <dl className="stats">
      {STATS.map((stat) => (
        <div className="stats__item" key={stat.label}>
          <dt className="stats__value">{stat.value}</dt>``
          <dd className="stats__label">{stat.label}</dd>
        </div>
      ))}
    </dl>
  )
}
