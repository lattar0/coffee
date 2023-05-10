import {
  BuyContainer,
  Container,
  InformationCoffeeContainer,
  TypeContainer,
  ValueContainer,
} from './styles'

import { formatMoney } from '../../../../../../utils/formatMoney'
import { Counter } from '../../../../../../components/Counter'

export interface Coffee {
  image: string
  name: string
  description: string
  type: string[]
  price: number
}

interface ICoffeeProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: ICoffeeProps) {
  return (
    <Container>
      <InformationCoffeeContainer>
        <img
          src={`/coffees/${coffee.image}`}
          alt="Um xícara de café expresso visto de cima"
        />

        <TypeContainer>
          {coffee.type.map((type, index) => (
            <span key={index}>{type}</span>
          ))}
        </TypeContainer>

        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>
      </InformationCoffeeContainer>

      <BuyContainer>
        <ValueContainer>
          <span>R$</span>
          <strong>{formatMoney(coffee.price)}</strong>
        </ValueContainer>

        <Counter />
      </BuyContainer>
    </Container>
  )
}
