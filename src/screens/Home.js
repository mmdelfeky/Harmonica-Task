import React from 'react';
import {AppImage, AppScrollView, AppText} from '../common';
import BasicInfo from '../components/home/BasicInfo';
import FavBtn from '../components/home/FavBtn';
import Header from '../components/home/Header';
import InfoContainer from '../components/home/InfoContainer';
import Tags from '../components/home/Tags';
const imgSrc = require('../assets/imgs/Rectangle.png');

const Home = () => {
  return (
    <AppScrollView backgroundColor="lightgrey" centerX flex stretch>
      <Header />
      <AppImage marginVertical={5} equalSize={90} source={imgSrc}>
        <FavBtn />
      </AppImage>
      <BasicInfo />
      <InfoContainer centerX>
        <AppText center marginBottom={25} size={7} color="black">
          I love reading, my fav tv show is friends and I like jazz music,
          English teacher, traveling around the world.
        </AppText>
        <FavBtn />
      </InfoContainer>
      <Tags />
    </AppScrollView>
  );
};

export default Home;
