import React from 'react';
import {Image, View, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../../../assets/colors';
import Text, {fontNames} from '../../../assets/fonts';
import Styles from '../style';
import Button from '../../../components/button';
import {routesNames} from '../../../navigation/stacks';
import {logo} from '../../../assets/images/png';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Image
        source={logo}
        style={{
          width: 187,
          height: 187,
          position: 'absolute',
          top: 88,
          alignSelf: 'center',
        }}
      />
      <View>
        <Text
          type={fontNames.SEMIBOLD}
          textStyles={[Styles.headingText, {marginBottom: 49}]}>
          Forgot Password
        </Text>
        <Text textStyles={Styles.inputLabel}>New Password</Text>
        <TextInput placeholder="**********" style={Styles.inputBox} />
        <Text textStyles={Styles.inputLabel}>Confirm Password</Text>
        <TextInput placeholder="**********" style={Styles.inputBox} />
        <Button
          onPress={() => navigation.navigate(routesNames.ONBOARDING_SCREEN1)}
          buttonText="RESET PASSWORD"
          buttonStyle={{marginBottom: 36}}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
