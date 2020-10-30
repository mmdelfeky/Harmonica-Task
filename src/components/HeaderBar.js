import React from 'react';
import {AppGradientView, AppView} from '../common';

const HeaderBar = () => {
  return (
    <AppView stretch height={1.3} backgroundColor="lightgrey" marginTop={3}>
      <AppGradientView stretch backgroundColor="primary" width={20} flex />
    </AppView>
  );
};

export default HeaderBar;
