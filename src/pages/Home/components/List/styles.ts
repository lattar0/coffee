import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 3.375rem;

  margin-bottom: 6rem;

  > strong {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    text-align: left;
  }
`

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 0 10rem;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  flex-flow: wrap;
`
