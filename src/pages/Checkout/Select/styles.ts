import styled from 'styled-components'

export const SelectContainer = styled.button`
  display: flex;
  border: 0;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  &:checked {
    background: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme.purple};
  }
`
