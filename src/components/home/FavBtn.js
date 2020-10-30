import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {AppIcon, TouchableView} from '../../common';

const FavBtn = () => {
  const [isFav, setIsFav] = useState(false);
  const toggle = useCallback(() => {
    setIsFav(!isFav);
  }, [isFav]);
  return (
    <TouchableView
      onPress={toggle}
      margin={5}
      style={styles.container}
      circleRadius={11}
      backgroundColor={!isFav ? 'white' : '#E6656D'}
      elevation={3}
      center>
      <AppIcon
        name="hearto"
        type="ant"
        size={11}
        color={isFav ? 'white' : '#E6656D'}
      />
    </TouchableView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
export default FavBtn;
