import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const BaseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  h1 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
  }
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 2.5rem;
  background: ${({ theme }) => theme['base-card']};
  gap: 2rem;
`

const BACKGROUND_COLORS = {
  yellow: 'yellow-dark',
  purple: 'purple',
} as const

interface BackgroundProps {
  backgroundIconColor: keyof typeof BACKGROUND_COLORS
}

export const Label = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundIconColor]]};
  }

  span {
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const AddressFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border: 0;
  }
`

export const AddressFormSeparator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.75rem;
`

export const SelectedCoffeesContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const CoffeeSelectedContainer = styled.div``

export const InfoContainer = styled.div``

export const DetailsContainer = styled.div``

export const ActionsContainer = styled.div``

export const Counter = styled.div``

export const SmallButton = styled.button``

export const BillingOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BillingOption = styled.div``
