import React from 'react';
import {PixelRatio, Text} from 'react-native';
import Colors from '../colors';

export const fontNames = {
  BOLD: 'Montserrat-Bold',
  LIGHT: 'Montserrat-Light',
  MEDIUM: 'Montserrat-Medium',
  THIN: 'Montserrat-Thin',
  REGULAR: 'Montserrat-Regular',
  BLACK: 'Montserrat-Black',
};

export default ({
  type = fontNames.REGULAR,
  textStyles,
  children,
  numberOfLines,
  onPress = null,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress ? onPress : () => {}}
      style={[
        {
          fontFamily: type,
          color: Colors.black,
          fontSize: PixelRatio.getFontScale() * 16,
        },
        textStyles,
      ]}>
      {children}
    </Text>
  );
};
