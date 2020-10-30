import React from 'react';
import {AppIcon, AppText, AppView} from '../../common';

const TagItem = ({name, type, value}) => {
  return (
    <AppView
      margin={2}
      row
      padding={3}
      borderWidth={1}
      borderColor="#D4D4D4"
      borderRadius={20}>
      <AppIcon {...{name}} {...{type}} />
      <AppText size={6.5} marginHorizontal={3} color="black">
        {value}
      </AppText>
    </AppView>
  );
};
TagItem.defaultProps = {
  type: 'custom',
};

export default TagItem;
