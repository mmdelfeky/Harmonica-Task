/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {I18nManager} from 'react-native';
import 'react-native-gesture-handler';
import {registerCustomIconType} from './src/common';

import icoMoonConfig from './src/common/utils/selection.json';

I18nManager.allowRTL(false);
registerCustomIconType('custom', icoMoonConfig);

AppRegistry.registerComponent(appName, () => App);
