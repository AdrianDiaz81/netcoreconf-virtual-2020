import * as React from 'react';
import { LoginError } from '../login/loginError';
import { LoginInProgress } from '../login/loginInProgress';
import { UserAgentApplication, AuthError } from 'msal';
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

interface IState {
  authenticated: boolean;
  renewIframe: boolean;
  errorMessage: string;
  hasError: boolean;
}

export function withAuth<TOriginalProps>(
  WrappedComponent: React.ComponentClass<TOriginalProps> | React.FunctionComponent<TOriginalProps>
): React.ComponentClass<TOriginalProps> {
  return class Auth extends React.Component<TOriginalProps, IState> {
    constructor(props: TOriginalProps) {
      super(props);

      this.state = {
        authenticated: false,
        renewIframe: false,
        hasError: false,
        errorMessage: ''
      };
    }

    public componentWillMount(): void {
      msalInstance.handleRedirectCallback(() => { // on success
        this.setState({
          authenticated: true
        });
       
      }, (authErr: AuthError, accountState: string) => {  // on fail
    
        this.setState({
          hasError: true,
          errorMessage: authErr.errorMessage
        });
      });

      if (msalInstance.isCallback(window.location.hash)) {
        this.setState({
          renewIframe: true
        });
        return;
      }
      if (!msalInstance.getAccount()) {
        msalInstance.loginRedirect({});
        return;
      } else {
        
        this.setState({
          authenticated: true
        });
      }
    }

    public render(): JSX.Element {
      if (this.state.renewIframe) {
        return <div>hidden renew iframe - not visible</div>;
      }

      if (this.state.authenticated) {
        return <WrappedComponent {...this.props} />;
      }

      if (this.state.hasError) {
        return <LoginError message={this.state.errorMessage} />;
      }

      return <LoginInProgress />;
    }
  };
}
