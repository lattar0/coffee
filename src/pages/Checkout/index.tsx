import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  ActionsContainer,
  AddressFormContainer,
  BillingOptionsContainer,
  CheckoutContainer,
  CoffeeCard,
  CoffeeSelectedContainer,
  Counter,
  DetailsContainer,
  InfoContainer,
  Label,
  OrderFormContainer,
  SelectedCoffeesContainer,
  SmallButton,
} from './styles'
import { Select } from './Select'

import coffeeImg from '../../assets/coffees/expresso.svg'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderFormContainer>
        <h1>Complete seu pedido</h1>
        <CoffeeCard>
          <Label backgroundIconColor="yellow">
            <MapPinLine size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Label>

          <AddressFormContainer>
            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <input placeholder="Número" />
            <input placeholder="Complemento" />
            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <input placeholder="UF" />
          </AddressFormContainer>
        </CoffeeCard>

        <CoffeeCard>
          <Label backgroundIconColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Label>

          <BillingOptionsContainer>
            <Select>
              <CreditCard />
              <span>CARTÃO DE CRÉDITO</span>
            </Select>
            <Select>
              <Bank />
              <span>CARTÃO DE DÉBITO</span>
            </Select>
            <Select>
              <Money />
              <span>DINHEIRO</span>
            </Select>
          </BillingOptionsContainer>
        </CoffeeCard>
      </OrderFormContainer>

      <SelectedCoffeesContainer>
        <CoffeeSelectedContainer>
          <InfoContainer>
            <img src={coffeeImg} alt="" />
            <DetailsContainer>
              <span>Expresso Tradicional</span>
              <ActionsContainer>
                <Counter />
                <SmallButton />
              </ActionsContainer>
            </DetailsContainer>
          </InfoContainer>
        </CoffeeSelectedContainer>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
