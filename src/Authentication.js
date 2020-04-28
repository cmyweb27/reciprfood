import React from "react";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";

const Auth = () => (
  <AmplifyAuthenticator>
    <AmplifySignIn
      headerText="My Custom Sign In Text"
      slot="sign-in"
    ></AmplifySignIn>

    <div>
      My App
      <AmplifySignOut></AmplifySignOut>
    </div>
  </AmplifyAuthenticator>
);

export default Auth;
