import MaskedView from '@react-native-community/masked-view';
import React, {useCallback} from 'react';
import {
  AppIcon,
  AppText,
  AppView,
  responsiveHeight,
  responsiveWidth,
} from '../../common';
import GradientView from '../../common/GradientView';
import InfoItem from './InfoItem';

const BasicInfo = () => {
  const renderName = useCallback(
    () => (
      <AppView row>
        <AppText marginRight={2} bold size={10}>
          Suzanne
        </AppText>

        <MaskedView
          style={{width: responsiveWidth(5), marginTop: responsiveHeight(1.5)}}
          maskElement={
            <AppIcon name="verified" type="material" color="#00EAAC" />
          }>
          <GradientView flex colors={['#00EAAE', '#00DEEB']} />
        </MaskedView>
      </AppView>
    ),
    [],
  );
  return (
    <AppView stretch marginHorizontal={3}>
      {renderName()}
      <AppView stretch marginHorizontal={5}>
        <InfoItem name="cake" type="entypo" value="26 years old" />
        <InfoItem
          name="Primitives-Icons-Icon-Location2"
          value="Visual Artist"
        />
        <InfoItem
          name="Primitives-Icons-Icon-Location3"
          value="Lives in Garden City, Cairo"
        />
        <InfoItem
          name="Primitives-Icons-Icon-Location4"
          value="From Paris, France"
        />
      </AppView>
    </AppView>
  );
};

export default BasicInfo;
