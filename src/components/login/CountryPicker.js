import React, {forwardRef, useCallback, useEffect, useState} from 'react';
import {AppIcon, AppText, TouchableView} from '../../common';

import CountryCodePicker from 'react-native-country-picker-modal';
const CountryPicker = forwardRef((props, ref) => {
  const [countryCode, setCountryCode] = useState({
    code: 'EG',
    callingCode: '+20',
  });
  useEffect(() => {
    ref.current = {getCountryCode};
  });
  const getCountryCode = useCallback(() => {
    return countryCode.callingCode;
  }, [countryCode.callingCode]);
  const [isVisible, setIsVisible] = useState(false);
  const showModal = useCallback(() => {
    setIsVisible(true);
  }, []);
  const hideModal = useCallback(() => {
    setIsVisible(false);
  }, []);
  const onSelect = useCallback((c) => {
    setCountryCode({
      code: c.cca2,
      callingCode: '+' + c.callingCode[0],
    });
  }, []);
  return (
    <TouchableView
      touchableOpacity
      width={20}
      onPress={showModal}
      stretch
      borderBottomWidth={0.5}
      borderBottomColor="#C2C2C2"
      center
      marginHorizontal={1}
      row
      flex
      spaceBetween
      paddingHorizontal={5}>
      <CountryCodePicker
        flatListProps
        onClose={hideModal}
        visible={isVisible}
        withFilter
        countryCode={countryCode.code}
        withAlphaFilter
        onSelect={onSelect}
        placeholder={`+ ${countryCode.callingCode}`}
      />
      <AppText bold size={7}>
        {countryCode.callingCode}{' '}
      </AppText>
      <AppIcon name="sort-down" type="font-awesome" color="#000" />
    </TouchableView>
  );
});

export default CountryPicker;
