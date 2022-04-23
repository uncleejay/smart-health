import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Colors from '../assets/colors';
import Text, {fontNames} from '../assets/fonts';
import Icon from 'react-native-vector-icons/AntDesign';

const TOTAL_STEPS = [1, 2, 3, 4];

export default ({onExit = () => {}, currentStep}) => {
  return (
    <View style={style.container}>
      <View style={{flexDirection: 'row'}}>
        {TOTAL_STEPS.map((step, i) => {
          return (
            <View
              style={[
                style.stepBox,
                step < 4 ? {marginRight: 13} : null,
                step <= currentStep ? style.activeBox : null,
              ]}
              key={i}
            />
          );
        })}
      </View>
      <TouchableOpacity onPress={onExit} style={style.icon}>
        <Icon name="close" size={29} color={Colors.iconExit} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 47,
  },
  stepBox: {
    width: 45,
    height: 8,
    backgroundColor: Colors.stepColor,
    borderRadius: 10,
  },
  activeBox: {
    backgroundColor: Colors.primary,
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
});
