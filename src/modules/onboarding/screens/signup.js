import React from 'react';
import {Image, View, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../../../assets/colors';
import Text, {fontNames} from '../../../assets/fonts';
import Styles from '../style';
import Button from '../../../components/button';
import {routesNames} from '../../../navigation/stacks';
import {logo} from '../../../assets/images/png';

const SignUp = ({navigation}) => {
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
          Sign Up
        </Text>
        <Text textStyles={Styles.inputLabel}>Username</Text>
        <TextInput placeholder="Dave" style={Styles.inputBox} />
        <Text textStyles={Styles.inputLabel}>Password</Text>
        <TextInput placeholder="**********" style={Styles.inputBox} />
        <TouchableOpacity
          onPress={() => navigation.navigate(routesNames.ONBOARDING_SCREEN7)}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 27,
          }}>
          <Text
            type={fontNames.MEDIUM}
            textStyles={{marginRight: 5, fontSize: 14}}>
            Already have an account?
          </Text>
          <Text
            type={fontNames.MEDIUM}
            textStyles={{color: Colors.secondary, fontSize: 14}}>
            Login
          </Text>
        </TouchableOpacity>
        <Button
          onPress={() => navigation.navigate(routesNames.ONBOARDING_SCREEN2)}
          buttonText="SIGN UP"
          buttonStyle={{marginBottom: 36}}
        />
      </View>
    </View>
  );
};

export default SignUp;
