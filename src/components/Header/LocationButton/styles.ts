import styled from 'styled-components'
import { BaseButton } from '../styles'

export const LocationContainer = styled(BaseButton)`
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const LocationInformation = styled.div`
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`
