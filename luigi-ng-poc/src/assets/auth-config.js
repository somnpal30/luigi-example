import OpenIdConnect from '@luigi-project/plugin-auth-oidc';

export default async function authz() {
  return {
    use: 'openIdConnect',
    openIdConnect: {
      idpProvider: OpenIdConnect,
      authority: 'http://localhost:8080/auth/realms/angular/protocol/openid-connect/auth',
      logoutUrl: 'http://localhost:8080/auth/realms/angular/protocol/openid-connect/logout',
      scope: 'openid',
      client_id: 'angular-app'
    }
  }
}
