import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Text, {fontNames} from '../../../assets/fonts';
import Styles from '../style';

export default ({icon, title, description}) => {
  return (
    <TouchableOpacity style={Styles.listBox}>
      <Text textStyles={{fontSize: 30, marginRight: 15}}>{icon}</Text>
      <View style={{flex: 1}}>
        <Text type={fontNames.SEMIBOLD} textStyles={Styles.listBoxTitle}>
          {title}
        </Text>
        <Text textStyles={Styles.listBoxDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
