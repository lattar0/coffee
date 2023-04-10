import { HeaderContainer, NavigationContainer } from './styles'
import coffeLogo from '../../assets/coffee-logo.svg'
import { LocationButton } from './LocationButton'
import { CartButton } from './CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeLogo} alt="" />

      <NavigationContainer>
        <LocationButton />
        <CartButton />
      </NavigationContainer>
    </HeaderContainer>
  )
}
