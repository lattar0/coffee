import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10rem;

  img {
    height: 3rem;
  }
`

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;

  border: 0;

  cursor: pointer;
`
