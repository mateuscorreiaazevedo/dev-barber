import type { PropsWithChildren } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ContainerStyled } from './styles'

export function Container({ children }: PropsWithChildren) {
  const { top } = useSafeAreaInsets()

  return <ContainerStyled paddingTop={top}>{children}</ContainerStyled>
}
