export abstract class AuthenticationGateway {
  abstract getUser(): Promise<null>
}
