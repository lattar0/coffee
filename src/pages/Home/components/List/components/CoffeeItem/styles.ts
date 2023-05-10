import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  background: ${({ theme }) => theme['base-card']};
  flex: 1 0 21%;

  border-radius: 6px 32px;

  max-width: 256px;
  height: 100%;
`

export const InformationCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > strong {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
    line-break: auto;
    max-width: 85%;
  }

  > img {
    margin-top: -1.2rem;
    margin-bottom: 0.75rem;
  }
`

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.25rem;

  span {
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    border-radius: 999px;
    font-weight: 700;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
  }
`
export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 1.25rem;
  gap: 1.875rem;

  color: ${({ theme }) => theme['base-text']};

  strong {
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
  }

  span {
    font-size: 0.875rem;
  }
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
