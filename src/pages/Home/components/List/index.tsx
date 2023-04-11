import {
  ActionsContainer,
  BuyContainer,
  CoffeeItemContainer,
  CoffeeListContainer,
  InformationCoffeeContainer,
  ListContainer,
  ValueContainer,
} from './styles'

import coffeeImg from '../../../../assets/coffees/expresso.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function List() {
  return (
    <ListContainer>
      <strong>Nossos cafés</strong>

      <CoffeeListContainer>
        <CoffeeItemContainer>
          <InformationCoffeeContainer>
            <img
              src={coffeeImg}
              alt="Um xícara de café expresso visto de cima"
            />
            <span>TRADICIONAL</span>

            <strong>Expresso Tradicional</strong>
            <p>Expresso diluído, menos intenso que o tradicional</p>
          </InformationCoffeeContainer>
          <BuyContainer>
            <ValueContainer>
              <span>R$</span>
              <strong>5,00</strong>
            </ValueContainer>

            <ActionsContainer>
              <div>
                <button type="button">
                  <Minus size={14} />
                </button>
                <span>0</span>
                <button type="button">
                  <Plus size={14} />
                </button>
              </div>

              <button type="button">
                <ShoppingCart weight="fill" />
              </button>
            </ActionsContainer>
          </BuyContainer>
        </CoffeeItemContainer>
        <CoffeeItemContainer>
          <InformationCoffeeContainer>
            <img
              src={coffeeImg}
              alt="Um xícara de café expresso visto de cima"
            />
            <span>TRADICIONAL</span>

            <strong>Expresso Tradicional</strong>
            <p>Expresso diluído, menos intenso que o tradicional</p>
          </InformationCoffeeContainer>
          <BuyContainer>
            <ValueContainer>
              <span>R$</span>
              <strong>5,00</strong>
            </ValueContainer>

            <ActionsContainer>
              <div>
                <button type="button">
                  <Minus size={14} />
                </button>
                <span>0</span>
                <button type="button">
                  <Plus size={14} />
                </button>
              </div>

              <button type="button">
                <ShoppingCart weight="fill" />
              </button>
            </ActionsContainer>
          </BuyContainer>
        </CoffeeItemContainer>
        <CoffeeItemContainer>
          <InformationCoffeeContainer>
            <img
              src={coffeeImg}
              alt="Um xícara de café expresso visto de cima"
            />
            <span>TRADICIONAL</span>

            <strong>Expresso Tradicional</strong>
            <p>Expresso diluído, menos intenso que o tradicional</p>
          </InformationCoffeeContainer>
          <BuyContainer>
            <ValueContainer>
              <span>R$</span>
              <strong>5,00</strong>
            </ValueContainer>

            <ActionsContainer>
              <div>
                <button type="button">
                  <Minus size={14} />
                </button>
                <span>0</span>
                <button type="button">
                  <Plus size={14} />
                </button>
              </div>

              <button type="button">
                <ShoppingCart weight="fill" />
              </button>
            </ActionsContainer>
          </BuyContainer>
        </CoffeeItemContainer>
        <CoffeeItemContainer>
          <InformationCoffeeContainer>
            <img
              src={coffeeImg}
              alt="Um xícara de café expresso visto de cima"
            />
            <span>TRADICIONAL</span>

            <strong>Expresso Tradicional</strong>
            <p>Expresso diluído, menos intenso que o tradicional</p>
          </InformationCoffeeContainer>
          <BuyContainer>
            <ValueContainer>
              <span>R$</span>
              <strong>5,00</strong>
            </ValueContainer>

            <ActionsContainer>
              <div>
                <button type="button">
                  <Minus size={14} />
                </button>
                <span>0</span>
                <button type="button">
                  <Plus size={14} />
                </button>
              </div>

              <button type="button">
                <ShoppingCart weight="fill" />
              </button>
            </ActionsContainer>
          </BuyContainer>
        </CoffeeItemContainer>
      </CoffeeListContainer>
    </ListContainer>
  )
}
