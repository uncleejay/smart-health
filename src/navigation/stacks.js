import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {_navigator} from './service';
import * as ONBOARDING from '../modules/onboarding';

const Routes = createStackNavigator();

export default () => {
  return (
    <NavigationContainer ref={_navigator}>
      <Routes.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Routes.Screen
          name={routesNames.ONBOARDING_SCREEN1}
          component={ONBOARDING.GetStarted}
          options={{headerShown: false}}
        />
      </Routes.Navigator>
    </NavigationContainer>
  );
};

export const routesNames = {
  ONBOARDING_SCREEN1: 'Onboarding/GetStarted',
};
