import { Search } from '../components/Search'

export default function CharactersLayout ({ children }) {
  return (
    <div>
      <Search />
      {children}
    </div>
  )
}