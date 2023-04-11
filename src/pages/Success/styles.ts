import styled from 'styled-components'

export const SucessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  gap: 6.375rem;

  img {
    margin-bottom: -0.8rem;
  }
`

export const InformationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`

export const HeaderContainer = styled.div`
  strong {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const SectionInfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
`

export const OrderInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border-radius: 6px 32px;
  border: 1px solid transparent;
`

const BACKGROUND_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  orange: 'yellow-dark',
} as const

interface BackgroundProps {
  backgroundIconColor: keyof typeof BACKGROUND_COLORS
}

export const BaseOrderInfoContainer = styled.div<BackgroundProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-right: 5.75rem;

  i {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.white};
    border-radius: 999px;
    background: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundIconColor]]};
  }
`

export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
