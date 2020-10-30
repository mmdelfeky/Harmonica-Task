import {StackActions} from '@react-navigation/native';

export const push = (navigation, name, props) =>
  navigation.navigate(name, props);

export const replace = (navigation, name, props) =>
  navigation.dispatch(StackActions.replace(name, props));

const popAction = StackActions.pop(1);

export const pop = (navigation) => navigation.dispatch(popAction);
