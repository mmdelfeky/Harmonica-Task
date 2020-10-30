import React, {useMemo} from 'react';

import useCommonStyles from './utils/useCommonStyles';
import useViewStyles from './utils/useViewStyles';
import LinearGradient from 'react-native-linear-gradient';
import {color} from 'react-native-reanimated';
const gradientConfig = {
  start: {x: 0, y: 0.5},
  end: {x: 1, y: 1},
  locations: [0, 0.5],
};
const GradientView = ({
  onLayout,
  colors,
  style,
  children,
  linearBackgroundGradient,
  ...rest
}) => {
  const commonStyles = useCommonStyles(rest);
  const viewStyles = useViewStyles(rest);
  return useMemo(() => {
    return (
      <LinearGradient
        {...{...linearBackgroundGradient, colors}}
        {...{onLayout}}
        style={[commonStyles, viewStyles, style]}>
        {children}
      </LinearGradient>
    );
  }, [
    onLayout,
    commonStyles,
    viewStyles,
    colors,
    style,
    children,
    linearBackgroundGradient,
  ]);
};

GradientView.defaultProps = {
  colors: ['#B1FBFF', '#00DEEB'],
  linearBackgroundGradient: gradientConfig,
};
export default GradientView;
