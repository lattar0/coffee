import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { ActionsContainer, CounterContainer } from './styles'
export function Counter() {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)
  return (
    <ActionsContainer>
      <CounterContainer>
        <button
          onClick={() => {
            if (coffeeQuantity === 0) return
            setCoffeeQuantity((state) => state - 1)
          }}
          type="button"
        >
          <Minus size={14} />
        </button>
        <span>{coffeeQuantity}</span>
        <button
          onClick={() => setCoffeeQuantity((state) => state + 1)}
          type="button"
        >
          <Plus size={14} />
        </button>
      </CounterContainer>

      <button type="button">
        <ShoppingCart weight="fill" />
      </button>
    </ActionsContainer>
  )
}
