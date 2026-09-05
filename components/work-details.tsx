export function WorkDetails({ name, items }: { name: string; items?: string[] }) {
  if (!items?.length) return null

  return (
    <details className="work-details">
      <summary>
        <span className="when-closed">View more</span>
        <span className="when-open">View less</span>
        <span className="sr-only"> about my work at {name}</span>
      </summary>
      <ul className="contribution-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </details>
  )
}
