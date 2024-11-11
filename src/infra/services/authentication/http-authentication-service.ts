import type { AuthenticationGateway } from '@/domain/authentication'
import AsyncStorage from '@react-native-async-storage/async-storage'

export class HttpAuthenticationService implements AuthenticationGateway {
  async getUser(): Promise<null> {
    const token = await AsyncStorage.getItem('token')

    if (!token) {
      throw new Error('No token available')
    }

    return null
  }
}
