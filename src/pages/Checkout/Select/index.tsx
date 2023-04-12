import { ReactNode } from 'react'
import { SelectContainer } from './styles'

export function Select({ children }: { children: ReactNode }) {
  return <SelectContainer>{children}</SelectContainer>
}
