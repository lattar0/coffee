import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  AdditionalInfoContainer,
  BaseOrderInfoContainer,
  HeaderContainer,
  InformationContainer,
  OrderInfoContainer,
  SucessContainer,
} from './styles'

import illustrationSuccessImage from '../../assets/illustration-success.svg'

export function Success() {
  return (
    <SucessContainer>
      <InformationContainer>
        <HeaderContainer>
          <strong>Uhu! Pedido confirmado</strong>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeaderContainer>

        <OrderInfoContainer>
          <BaseOrderInfoContainer backgroundIconColor="purple">
            <i>
              <MapPin weight="fill" />
            </i>
            <AdditionalInfoContainer>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </AdditionalInfoContainer>
          </BaseOrderInfoContainer>
          <BaseOrderInfoContainer backgroundIconColor="yellow">
            <i>
              <Clock weight="fill" />
            </i>
            <AdditionalInfoContainer>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </AdditionalInfoContainer>
          </BaseOrderInfoContainer>
          <BaseOrderInfoContainer backgroundIconColor="orange">
            <i>
              <CurrencyDollar weight="fill" />
            </i>
            <AdditionalInfoContainer>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </AdditionalInfoContainer>
          </BaseOrderInfoContainer>
        </OrderInfoContainer>
      </InformationContainer>

      <img src={illustrationSuccessImage} alt="Sucesso" />
    </SucessContainer>
  )
}
