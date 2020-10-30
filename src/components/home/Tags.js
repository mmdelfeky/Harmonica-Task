import React from 'react';
import {AppText, AppView} from '../../common';
import FavBtn from './FavBtn';
import InfoContainer from './InfoContainer';
import TagItem from './TagItem';

const Tags = () => {
  return (
    <InfoContainer centerX paddingBottom={20}>
      <AppText marginVertical={5} size={7} color="black">
        About me
      </AppText>
      <AppView center stretch row wrap>
        <TagItem name="hearto" type="ant" value="Never Married" />
        <TagItem name="Primitives-Icons-iconHeart4" value="Muslim Sunni" />
        <TagItem name="Primitives-Icons-iconHeart" value="Prays occasionally" />
        <TagItem name="Shape5" value="176 cm" />

        <TagItem name="Primitives-Icons-iconHeart2" value="Doesn't smoke" />
        <TagItem name="Shape3" value="Doesn't have kids" />
      </AppView>
      <FavBtn />
    </InfoContainer>
  );
};

export default Tags;
