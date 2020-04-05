import { UserAgentApplication, AuthenticationParameters } from 'msal';
import { BearerTokenFetchClient, FetchOptions, isUrlAbsolute } from '@pnp/common';
import { Providers, ProviderState } from '@microsoft/mgt';


export const msalAuthConfig = {
	authority: "https://login.microsoftonline.com/common",
	clientId: "",
	postLogoutRedirectUri: window.location.origin
}
export const msalCacheConfig = {
	storeAuthStateInCookie: true,
	CacheLocation: 'localStorage'
};
export const msalConfig = {
	auth: msalAuthConfig,
	cache: msalCacheConfig
};
export const msalInstance = new UserAgentApplication(msalConfig);

export class PnPFetchClient extends BearerTokenFetchClient {
  constructor(private authContext: UserAgentApplication) {
    super(null);
  
  }
  public async fetch(url: string, options: FetchOptions = {}): Promise<Response> {
    if (!isUrlAbsolute(url)) {
      throw new Error('You must supply absolute urls to PnPFetchClient.fetch.');
    }
    let token="";
console.log(token);
    token= await this.getToken(this.getResource(url));
    this.token = token;
    return super.fetch(url, options);
  }

  private async getToken(resource: string): Promise<string>  {
    const request: AuthenticationParameters = {
    };
    request.scopes = [process.env.REACT_APP_MSALCLIENTID];    
    if (resource.indexOf('graph') !== -1) {
      request.scopes = ["User.Read.All"];
    }
    try {
      const response = await this.authContext.acquireTokenSilent(request);
      Providers.globalProvider.setState(ProviderState.SignedIn);
      return response.accessToken;
    } catch (error) {
      if (this.requiresInteraction(error.errorCode)) {
        this.authContext.loginRedirect(request);
      } else {
        throw error;
      }
    }
  }
 

  private requiresInteraction(errorCode: string) {
    if (!errorCode || !errorCode.length) {
      return false;
    }
    return errorCode === "consent_required" ||
      errorCode === "interaction_required" ||
      errorCode === "login_required";
  }

  private getResource(url: string): string {
    const parser = document.createElement('a');
    parser.href = url;
    return `${parser.protocol}//${parser.hostname}`;
  }

  

}