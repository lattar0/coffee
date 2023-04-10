import { MapPin } from 'phosphor-react'
import { LocationContainer, LocationInformation } from './styles'

export function LocationButton() {
  return (
    <LocationContainer>
      <MapPin size={20} weight="fill" />

      <LocationInformation>
        <span>Fortaleza, </span>
        <span>CE</span>
      </LocationInformation>
    </LocationContainer>
  )
}
