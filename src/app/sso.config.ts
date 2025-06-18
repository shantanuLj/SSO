import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {

  issuer: 'https://ssaasi.delta.com',
  redirectUri: 'http://localhost:9080/eas/ssovalidation.do',
  clientId: 'EVMEVCEVEP_EndeavorInternalWebAWS_OIDC_SI',
  dummyClientSecret: 'tv0pgKcsQHbMoOjYAxC4pbqcdeDc7mvvCpMASvj6V5xhzgROcj0MB66OEFtXGVI7',
  responseType: 'code',
  scope: 'openid email profile orginfo',
  showDebugInformation: true,
  customQueryParams: {
    pfidpadapterid: 'EVMEVCEVEP'
  },
};




// INT_CLIENT_ID=EVMEVCEVEP_EndeavorInternalWebAWS_OIDC_SI
// INT_CLIENT_SECRET=tv0pgKcsQHbMoOjYAxC4pbqcdeDc7mvvCpMASvj6V5xhzgROcj0MB66OEFtXGVI7

// redirect URL  = http://localhost:9080/eas/ssovalidation.do