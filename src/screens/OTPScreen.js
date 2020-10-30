import React from 'react';
import {AppText, AppView, AppScrollView, TouchableView} from '../common';
import {HeaderBar} from '../components';
import OTPForm from '../components/OTPScreen/OTPForm';

const OTPScreen = ({
  navigation,
  route: {
    params: {phone, code},
  },
}) => {
  return (
    <AppScrollView flex stretch center>
      <HeaderBar />
      <AppView stretch left marginHorizontal={10} marginVertical={30}>
        <AppText bold size={12}>
          What’s the verification code
        </AppText>
        <AppText marginVertical={3} size={7} color="grey">
          Code sent to {` ${code}  ${phone}`}
        </AppText>
        <TouchableView>
          <AppText size={7} color="#00DEEB">
            Resend code
          </AppText>
        </TouchableView>
      </AppView>
      <OTPForm {...{navigation}} />
    </AppScrollView>
  );
};

export default OTPScreen;
