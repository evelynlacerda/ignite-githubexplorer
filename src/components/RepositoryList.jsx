import { RepositoryItem } from "./RepositoryItem";

const repository = {
	name: 'Unform',
	description: 'Form in React',
	link: 'https://github.com/evelynlacerda/ignite-githubexplorer'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1 className="title">Repository List</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}
