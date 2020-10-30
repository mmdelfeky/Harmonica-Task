import React from 'react';
import {AppIcon, AppView, TouchableView} from '../../common';

const Header = () => {
  return (
    <AppView stretch row spaceBetween height={7}>
      <TouchableView padding={5}>
        <AppIcon name="Primitives-Icons-iconPreferences" type="custom" />
      </TouchableView>

      <TouchableView padding={5}>
        <AppIcon name="dots-horizontal" type="material-community" size={12} />
      </TouchableView>
    </AppView>
  );
};

export default Header;
