export function RepositoryItem(props) {
  return (
    <ul>
      <li>
        <p>{props.repository.name ?? 'default'}</p>
        <p>{props.repository.description}</p>
        <a href={props.repository.link}>Acessar repositório</a>
      </li>
    </ul>
  );
}
