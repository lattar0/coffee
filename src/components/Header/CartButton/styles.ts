import styled from 'styled-components'
import { BaseButton } from '../styles'

export const CartContainer = styled(BaseButton)`
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
  position: relative;
`

export const Counter = styled.span`
  display: flex;
  border-radius: 999px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  font-size: 75%;
  line-height: 1.3;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  padding: 0.25rem 0.5rem;
  position: absolute;
  top: -0.7rem;
  right: -0.7rem;
`
