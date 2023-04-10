import { ShoppingCart } from 'phosphor-react'
import { CartContainer, Counter } from './styles'

export function CartButton() {
  return (
    <CartContainer>
      <ShoppingCart size={20} weight="fill" />
      <Counter>3</Counter>
    </CartContainer>
  )
}
