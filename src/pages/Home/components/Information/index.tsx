import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import {
  AsideInformationContainer,
  InformationContainer,
  InformationTitleContainer,
  ItemContainer,
  ItemsListContainer,
} from './styles'
import splashImage from '../../../../assets/coffee-splash.svg'

export function Information() {
  return (
    <InformationContainer>
      <AsideInformationContainer>
        <InformationTitleContainer>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </InformationTitleContainer>

        <ItemsListContainer>
          <ItemContainer backgroundIconColor="orange">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </ItemContainer>

          <ItemContainer backgroundIconColor="gray">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </ItemContainer>

          <ItemContainer backgroundIconColor="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </ItemContainer>

          <ItemContainer backgroundIconColor="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </ItemContainer>
        </ItemsListContainer>
      </AsideInformationContainer>

      <img
        src={splashImage}
        alt="Um copo de café com a marca Coffee Delivery impresso,
          encima de uma forma geometrica amarela, com vários tipos
          de cafés espalhados por ela."
      />
    </InformationContainer>
  )
}
