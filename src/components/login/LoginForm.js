import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  AppView,
  AppButton,
  AppInput,
  AppText,
  AppGradientView,
  TouchableView,
} from '../../common';
import {push} from '../../common/Navigation';
import CountryPicker from './CountryPicker';

const LoginForm = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const onChangeText = (text) => {
    setPhone(text);
  };
  const countryPickerRef = useRef();
  const ButtonContainer = useMemo(
    () =>
      phone === ''
        ? {
            View: AppView,
            props: {
              backgroundColor: 'lightgrey',
            },
            text: {color: 'grey'},
          }
        : {
            View: AppGradientView,

            props: {
              colors: ['#00DEEB', '#00EAAC'],
            },
            text: {
              color: 'white',
            },
          },
    [phone],
  );
  const onSubmit = useCallback(() => {
    if (phone === '') {
      return;
    }
    push(navigation, 'OTPScreen', {
      phone,
      code: countryPickerRef.current.getCountryCode(),
    });
  }, [phone, navigation]);
  return (
    <AppView stretch>
      <AppView row stretch center marginHorizontal={16} marginVertical={5}>
        <CountryPicker ref={countryPickerRef} />
        <AppInput
          phone
          value={phone}
          onChange={onChangeText}
          placeholderColor="#000"
          borderWidth={0}
          borderBottomWidth={0.5}
          borderBottomColor="#C2C2C2"
          center
          stretch
          flex={2}
          marginHorizontal={1}
        />
      </AppView>

      <ButtonContainer.View
        height={7.5}
        {...ButtonContainer.props}
        stretch
        overflow="hidden"
        borderRadius={50}
        marginHorizontal={10}
        marginTop={60}>
        <TouchableView onPress={onSubmit} flex stretch center>
          <AppText {...ButtonContainer.text} size={8}>
            Send Code
          </AppText>
        </TouchableView>
      </ButtonContainer.View>
    </AppView>
  );
};

export default LoginForm;
