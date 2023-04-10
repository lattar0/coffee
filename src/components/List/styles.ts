import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > strong {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    text-align: left;
  }
`

export const CoffeeListContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 10rem;

  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  background: ${({ theme }) => theme['base-card']};

  border-radius: 6px 32px;

  max-width: 256px;
  height: 100%;
`

export const InformationCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    border-radius: 999px;
    font-weight: 700;
    margin-bottom: 1.25rem;
  }

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
  gap: 0.375rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  background-color: antiquewhite;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: 25%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme['base-button']};
      color: ${({ theme }) => theme.purple};
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
      padding: 0.5rem;
      cursor: pointer;
    }

    span {
      border: 0;
      background: ${({ theme }) => theme['base-button']};
      color: ${({ theme }) => theme.purple};
      text-align: center;
      max-width: 50%;
      padding: 0.5rem 0;
    }
  }

  button {
    border: 0;
    cursor: pointer;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: ${({ theme }) => theme['purple-dark']};
    color: ${({ theme }) => theme.white};
    padding: 0.5rem;
  }
`
