import styled from 'styled-components'

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  width: 4.5rem;

  button {
    border: 0;
    cursor: pointer;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme['purple-dark']};
    color: ${({ theme }) => theme.white};
    padding: 0.5rem;
    border-radius: 6px;
  }
`
export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.25rem;

  padding: 0.5rem;

  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${({ theme }) => theme.purple};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  span {
    color: ${({ theme }) => theme['base-title']};
  }
`
