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
        <Routes.Screen
          name={routesNames.ONBOARDING_SCREEN2}
          component={ONBOARDING.Goal}
          options={{headerShown: false}}
        />
        <Routes.Screen
          name={routesNames.ONBOARDING_SCREEN3}
          component={ONBOARDING.Diet}
          options={{headerShown: false}}
        />
        <Routes.Screen
          name={routesNames.ONBOARDING_SCREEN4}
          component={ONBOARDING.Height}
          options={{headerShown: false}}
        />
        <Routes.Screen
          name={routesNames.ONBOARDING_SCREEN5}
          component={ONBOARDING.Plan}
          options={{headerShown: false}}
        />
      </Routes.Navigator>
    </NavigationContainer>
  );
};

export const routesNames = {
  ONBOARDING_SCREEN1: 'Onboarding/GetStarted',
  ONBOARDING_SCREEN2: 'Onboarding/Goal',
  ONBOARDING_SCREEN3: 'Onboarding/Diet',
  ONBOARDING_SCREEN4: 'Onboarding/Height',
  ONBOARDING_SCREEN5: 'Onboarding/Plan',
};
