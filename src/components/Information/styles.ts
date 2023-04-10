import styled from 'styled-components'

export const InformationContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  align-items: center;
  justify-content: center;
  padding: 5.75rem 10rem;
  background-image: url('src/assets/splash-section-background.svg');
  background-position: center;
`
export const InformationTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
  }
`
export const AsideInformationContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`
export const ItemsListContainer = styled.ul`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
`

const BACKGROUND_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface BackgroundProps {
  backgroundIconColor: keyof typeof BACKGROUND_COLORS
}

export const ItemContainer = styled.li<BackgroundProps>`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;

  svg {
    color: ${(props) => props.theme.white};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundIconColor]]};
    border-radius: 999px;
  }
`
