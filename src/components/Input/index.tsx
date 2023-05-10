import { InputContainer } from './styles'

export interface InputProps {
  isOptional?: boolean
  placeholder: string
  size?: 'small' | 'normal' | 'auto'
}

export function Input({
  isOptional = false,
  placeholder,
  size = 'auto',
}: InputProps) {
  return (
    <InputContainer size={size}>
      <input placeholder={placeholder} />

      {isOptional && <span>Opcional</span>}
    </InputContainer>
  )
}
