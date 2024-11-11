import { GetUserAuthenticatedUseCase } from '@/application/use-cases/authentication'
import { HttpAuthenticationService } from '@/infra/services'

const httpAuthenticationService = new HttpAuthenticationService()

export const authenticationFactory = {
  getUserAuthenticated: new GetUserAuthenticatedUseCase(httpAuthenticationService),
}
