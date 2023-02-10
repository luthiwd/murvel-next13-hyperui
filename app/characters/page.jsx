import {ListOfChars} from "./ListOfChars";
import {Search} from '../components/Search'

export default function CharactersPage () {
  return (
    <section>
      <Search ListOfChar={ListOfChars()}/>
      <ListOfChars />
    </section>
  )
}