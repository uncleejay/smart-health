import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routesNames} from './stacks';
import * as DASHBOARD from '../modules/dashboard';
import Text, {fontNames} from '../assets/fonts';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../assets/colors';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName={routesNames.HOME}
      backBehavior={'initialRoute'}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const {name} = route;
          if (name === routesNames.HOME) {
            return <ADIcon name="home" size={16} color={color} />;
          }
          if (name === routesNames.DISCOVER) {
            return <FIcon name="navigation" size={16} color={color} />;
          }
          if (name === routesNames.ADD) {
            return <ADIcon name="pluscircle" size={40} color={color} />;
          }
          if (name === routesNames.RECIPES) {
            return <MCIcon name="chef-hat" size={16} color={color} />;
          }
          if (name === routesNames.DIETS) {
            return <MCIcon name="food-apple-outline" size={16} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.secondary,
        inactiveTintColor: '#000',
        allowFontScaling: false,
        adaptive: false,
        style: {
          backgroundColor: '#FFF',
        },
      }}>
      <Tab.Screen name={routesNames.HOME} component={DASHBOARD.Home} />
      <Tab.Screen name={routesNames.DISCOVER} component={DASHBOARD.Home} />
      <Tab.Screen name={routesNames.ADD} component={DASHBOARD.Home} />
      <Tab.Screen name={routesNames.RECIPES} component={DASHBOARD.AllRecipes} />
      <Tab.Screen name={routesNames.DIETS} component={DASHBOARD.Home} />
    </Tab.Navigator>
  );
};
