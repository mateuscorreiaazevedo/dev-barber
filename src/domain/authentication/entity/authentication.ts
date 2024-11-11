export interface AuthenticationInterface {
  token: string
}

export class Authentication {
  constructor(private readonly authentication: AuthenticationInterface) {}

  get token(): string {
    return this.authentication.token
  }
}
