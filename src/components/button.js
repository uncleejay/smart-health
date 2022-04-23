import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../assets/colors';
import Text, {fontNames} from '../assets/fonts';

export default ({
  onPress = () => {},
  buttonText = 'Press Me',
  buttonStyle = {},
  fontName = fontNames.SEMIBOLD,
  disabled = false,
  type = 'default',
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[buttonType(type).bg, buttonStyle]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text type={fontName} textStyles={buttonType(type).text}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

function buttonType(type) {
  if (type === 'default') {
    return {bg: style.defaultStyle, text: style.defaultTextStyle};
  } else if (type === 'outline') {
    return {bg: style.outlineStyle, text: style.outlineTextStyle};
  } else if (type === 'empty') {
    return {bg: style.emptyStyle, text: style.outlineTextStyle};
  }
}

const style = StyleSheet.create({
  defaultStyle: {
    backgroundColor: Colors.buttonBg,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 53,
  },
  defaultTextStyle: {
    color: Colors.white,
    fontSize: 18,
    lineHeight: 22,
  },
  outlineStyle: {
    backgroundColor: 'transparent',
    borderColor: Colors.buttonBg,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 53,
  },
  outlineTextStyle: {
    color: Colors.buttonBg,
    fontSize: 18,
    lineHeight: 22,
  },
  emptyStyle: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height: 53,
  },
});
