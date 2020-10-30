import React, {useState, useCallback} from 'react';
import {AppView} from '../../common';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {push, replace} from '../../common/Navigation';

const OTPForm = ({navigation}) => {
  const onCodeChanged = useCallback((confirmationCode) => {
    setCode(confirmationCode);
  }, []);

  const [code, setCode] = useState('');

  return (
    <AppView flex stretch centerX paddingHorizontal={10} color="white">
      <AppView width={60}>
        <OTPInputView
          pinCount={4}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={onCodeChanged}
          autoFocusOnLoad
          codeInputFieldStyle={styles.codeInputFieldStyle}
          onCodeFilled={async (confirmationCode) => {
            push(navigation, 'Home');
          }}
        />
      </AppView>
    </AppView>
  );
};

export default OTPForm;
