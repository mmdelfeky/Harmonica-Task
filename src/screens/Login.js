import React, {useCallback} from 'react';
import {AppText, AppView, AppForm} from '../../common';
import {ScrollableContainer} from '../../components';
import LoginForm from '../../components/login/LoginForm';

const Login = () => {
  const renderForm = useCallback((props) => {
    return <LoginForm {...props} />;
  }, []);

  const onSubmit = useCallback(async (values, {setSubmitting}) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 200);
  }, []);

  return (
    <ScrollableContainer header={false} flex stretch center>
      <AppView stretch height={1.3} backgroundColor="#F4F4F4" marginTop={3}>
        <AppView stretch backgroundColor="primary" width={20} flex />
      </AppView>
      <AppView stretch left marginHorizontal={10} marginVertical={30}>
        <AppText bold color="#000" size={13}>
          What's your phone number?
        </AppText>
      </AppView>
      <AppForm
        schema={{
          phone: '',
          code: '',
        }}
        render={renderForm}
        {...{onSubmit}}
      />
    </ScrollableContainer>
  );
};

export default Login;
