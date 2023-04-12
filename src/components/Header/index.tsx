import { HeaderContainer, NavigationContainer } from './styles'
import coffeLogo from '../../assets/coffee-logo.svg'
import { LocationButton } from './LocationButton'
import { CartButton } from './CartButton'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={coffeLogo} alt="" />
      </NavLink>

      <NavigationContainer>
        <LocationButton />

        <NavLink to="/checkout" title="Carrinho">
          <CartButton />
        </NavLink>
      </NavigationContainer>
    </HeaderContainer>
  )
}
