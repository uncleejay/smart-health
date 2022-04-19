import React from 'react';
import {SafeAreaView, ImageBackground, View} from 'react-native';
import Colors from '../../../assets/colors';
import Text, {fontNames} from '../../../assets/fonts';
import {onboardingBg} from '../../../assets/images/png';
import Styles from '../style';
import Button from '../../../components/button';

const GetStarted = () => {
  return (
    <ImageBackground style={Styles.container} source={onboardingBg}>
      <View>
        <Text type={fontNames.SEMIBOLD} textStyles={Styles.headingText}>
          Hello 👋{' '}
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text
            type={fontNames.SEMIBOLD}
            textStyles={[Styles.headingText, {marginRight: 10}]}>
            new
          </Text>
          <Text
            type={fontNames.SEMIBOLD}
            textStyles={[Styles.headingText, {color: Colors.secondary}]}>
            dieter!
          </Text>
        </View>
        <Text type={fontNames.SEMIBOLD} textStyles={Styles.subText}>
          Reach your goals in 4 steps
        </Text>
        <View style={{marginBottom: 62}}>
          <Text type={fontNames.MEDIUM} textStyles={Styles.listText}>
            🎯 Select a goal
          </Text>
          <Text type={fontNames.MEDIUM} textStyles={Styles.listText}>
            🙂 Create an account
          </Text>
          <Text type={fontNames.MEDIUM} textStyles={Styles.listText}>
            📊 Create your customized plan
          </Text>
          <Text type={fontNames.MEDIUM} textStyles={Styles.listText}>
            📈 Follow your plan and experience the resullts
          </Text>
        </View>
        <Button buttonText="GET STARTED" buttonStyle={{marginBottom: 36}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 27,
          }}>
          <Text type={fontNames.MEDIUM} textStyles={{marginRight: 10}}>
            Already have an account?
          </Text>
          <Text type={fontNames.MEDIUM} textStyles={{color: Colors.secondary}}>
            Login
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;
