import React from 'react';
import {AppIcon, AppText, AppView} from '../../common';

const InfoItem = ({name, type, value}) => {
  return (
    <AppView marginVertical={1} stretch row>
      <AppIcon {...{name}} {...{type}} />
      <AppText size={6.5} marginHorizontal={3} color="black">
        {value}
      </AppText>
    </AppView>
  );
};
InfoItem.defaultProps = {
  type: 'custom',
};

export default InfoItem;
