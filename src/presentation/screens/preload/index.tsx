import { LoadingIcon, PreloadContainer } from './styles'

import { authenticationFactory } from '@/main/factories'
import type { RootStackParamList } from '@/presentation/navigation'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import type { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import BarberLogo from '../../assets/barber.svg'

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

export default function PreloadScreen() {
  const { navigate } = useNavigation<NavigationProps>()

  const getCurrentUser = async () => {
    try {
      await authenticationFactory.getUserAuthenticated.execute()
      return null
    } catch (_e) {
      navigate('signIn')
      return null
    }
  }

  const { data: _ } = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
  })

  return (
    <PreloadContainer>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size={'large'} color={'#fff'} />
    </PreloadContainer>
  )
}
