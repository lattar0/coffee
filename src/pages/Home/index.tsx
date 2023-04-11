import { Information } from './components/Information'
import { List } from './components/List'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Information />
      <List />
    </HomeContainer>
  )
}
