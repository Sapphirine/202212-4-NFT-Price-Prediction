import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const onSuccess = (response) => {
    console.log('Logged in successfully');
    console.log(response);
    console.log('ID: ' + response.profileObj.googleId);
    console.log('Name: ' + response.profileObj.name);
    console.log('Email: ' + response.profileObj.email);
    console.log('Access Token: ' + response.accessToken);
  };

  const onFailure = (error) => {
    console.log('Failed to log in');
    console.error(error);
  };

  return (
    <GoogleLogin
      clientId="942606144781-d1nlf55298ld772qd9d4h093qnebplpd.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;