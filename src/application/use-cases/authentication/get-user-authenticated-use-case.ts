import type { AuthenticationGateway } from '@/domain/authentication'

export class GetUserAuthenticatedUseCase {
  constructor(private service: AuthenticationGateway) {}

  async execute(): Promise<null> {
    const currentUser = await this.service.getUser()

    await new Promise(resolve => setTimeout(resolve, 1000))

    if (!currentUser) {
      throw new Error('User not authenticated')
    }
    return null
  }
}
