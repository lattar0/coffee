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
  AddressFormSeparator,
  BaseCardContainer,
  BillingOptionsContainer,
  CheckoutContainer,
  CoffeeCard,
  CoffeeSelectedContainer,
  DetailsContainer,
  InfoContainer,
  Label,
  SmallButton,
} from './styles'
import { Select } from './Select'

import { Input } from '../../components/Input'
import { Counter } from '../../components/Counter'

export function Checkout() {
  return (
    <CheckoutContainer>
      <BaseCardContainer>
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
            <Input size="normal" placeholder="CEP" />
            <Input placeholder="Rua" />
            <AddressFormSeparator>
              <Input size="normal" placeholder="Número" />
              <Input placeholder="Complemento" isOptional={true} />
            </AddressFormSeparator>
            <AddressFormSeparator>
              <Input size="normal" placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input size="small" placeholder="UF" />
            </AddressFormSeparator>
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
      </BaseCardContainer>

      <BaseCardContainer>
        <h1>Cafés selecionados</h1>
        <CoffeeSelectedContainer>
          <InfoContainer>
            <img src={`/coffees/chocolate-quente.svg`} alt="" />
            <DetailsContainer>
              <span>Expresso Tradicional</span>
              <ActionsContainer>
                <Counter />
                <SmallButton />
              </ActionsContainer>
            </DetailsContainer>
          </InfoContainer>
        </CoffeeSelectedContainer>
      </BaseCardContainer>
    </CheckoutContainer>
  )
}
