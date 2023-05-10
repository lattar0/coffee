import { coffees } from '../../../../data/coffees'
import { CoffeeItem } from './components/CoffeeItem'
import { CoffeeListContainer, ListContainer } from './styles'

export function List() {
  return (
    <ListContainer>
      <strong>Nossos cafés</strong>

      <CoffeeListContainer>
        {coffees.map((coffee, index) => (
          <CoffeeItem key={index} coffee={coffee} />
        ))}
      </CoffeeListContainer>
    </ListContainer>
  )
}
