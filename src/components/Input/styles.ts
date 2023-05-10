import styled from 'styled-components'

const INPUT_SIZES = {
  small: '10%',
  normal: '12.5rem',
  auto: '100%',
} as const

interface SizeProps {
  size: keyof typeof INPUT_SIZES
}

export const InputContainer = styled.div<SizeProps>`
  max-width: ${({ size }) => INPUT_SIZES[size]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme['base-input']};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['base-button']};
  padding: 0.75rem;

  input {
    width: 100%;
    background: transparent;
  }

  span {
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.75rem;
    font-style: italic;
  }
`
