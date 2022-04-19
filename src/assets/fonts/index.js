import React from 'react';
import {PixelRatio, Text} from 'react-native';
import Colors from '../colors';

export const fontNames = {
  BOLD: 'Montserrat-Bold',
  LIGHT: 'Montserrat-Light',
  MEDIUM: 'Montserrat-Medium',
  THIN: 'Montserrat-Thin',
  REGULAR: 'Montserrat-Regular',
  SEMIBOLD: 'Montserrat-SemiBold',
  BLACK: 'Montserrat-Black',
};

export default ({
  type = fontNames.REGULAR,
  textStyles,
  children,
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
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
