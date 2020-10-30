import React from 'react';
import {AppText, AppView, AppScrollView} from '../common';
import {HeaderBar} from '../components';
import LoginForm from '../components/login/LoginForm';

const Login = ({navigation}) => {
  return (
    <AppScrollView flex stretch center>
      <HeaderBar />
      <AppView stretch left marginHorizontal={10} marginVertical={30}>
        <AppText bold size={12}>
          What's your phone number?
        </AppText>
      </AppView>
      <LoginForm {...{navigation}} />
    </AppScrollView>
  );
};

export default Login;
