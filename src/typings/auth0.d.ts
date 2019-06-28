interface AuthenticationClientConstructorOptions {
    domain: string
    clientId?: string
    clientSecret?: string
  }
  
  interface GetProfileResponse {
    sub: string
    blocked: boolean
    created_at: number
    email: string
    email_verified: boolean
    identities: [
      {
        connection: string
        isSocial: boolean
        provider: string
        user_id: string
      }
    ]
    last_ip: string
    last_login: number
    logins_count: number
    name: string
    nickname: string
    phone_number: string
    phoe_verified: boolean
    picture: string
    updated_at: number
    user_id: string
    username: string
    app_metadata: { phone_verified?: boolean }
  }
  
  interface AuthenticationClient {
    new (options: AuthenticationClientConstructorOptions): AuthenticationClient
    getProfile(accessToken: string): Promise<GetProfileResponse | string>
    requestSMSCode(data: { phone_number: string }): Promise<void>
    requestEmailCode(data: { email: string }): Promise<void>
    passwordGrant(data: {
      username: string
      password: string
      realm?: string
      scope?: string
    }): Promise<{
      id_token: string
      access_token: string
      token_type: string
    }>
    getToken(data: {
      username: string
      password: string
      realm?: string
      scope?: string
    }): Promise<{
      id_token: string
      access_token: string
      refresh_token: string
      token_type: string
    }>
    refreshToken2(data: {
      refresh_token: string
      realm?: string
      scope?: string
    }): Promise<{
      id_token: string
      access_token: string
      token_type: string
    }>
  }
  
  // ManagementClient
  interface ManagementClientConstructorOptions {
    domain: string
    clientId?: string
    clientSecret?: string
    scope?: string
  }
  
  interface Auth0User {
    phone_number: string
    user_id: string
    nickname: string
  
    created_at: string
    user_metadata: { name: string; phone: string }
    last_ip: string
    last_login: string
    logins_count: number
  }
  
  interface ManagementClient {
    new (options: ManagementClientConstructorOptions): ManagementClient
    getUser(data: { id: string }): Promise<Auth0User>
    updateAppMetadata(params: { id: string }, metadata: any): Promise<Auth0User>
  }
  
  declare module 'auth0' {
    export var AuthenticationClient: AuthenticationClient
    export var ManagementClient: ManagementClient
  }
  