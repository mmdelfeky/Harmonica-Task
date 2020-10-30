import React from 'react';
import {AppView, responsiveHeight} from '../../common';

const InfoContainer = ({children, ...rest}) => {
  return (
    <AppView
      style={{minHeight: responsiveHeight(20)}}
      stretch
      backgroundColor="white"
      elevation={1}
      borderRadius={20}
      margin={5}
      padding={5}
      {...rest}>
      {children}
    </AppView>
  );
};

export default InfoContainer;
