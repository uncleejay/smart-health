import React from 'react';
import {View, ScrollView} from 'react-native';
import Text, {fontNames} from '../../../assets/fonts';
import Styles from '../style';
import Button from '../../../components/button';
import OnboardingHeader from '../../../components/onboardingHeader';

const Height = ({navigation}) => {
  return (
    <View style={Styles.container2}>
      <OnboardingHeader currentStep={3} onExit={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 79,
            width: '100%',
            justifyContent: 'center',
          }}>
          <Text type={fontNames.SEMIBOLD} textStyles={Styles.pageTitle}>
            What is your
          </Text>
          <Text
            type={fontNames.SEMIBOLD}
            textStyles={[Styles.pageTitle, Styles.subColorText]}>
            height?
          </Text>
        </View>
        <Button
          type="outline"
          buttonText="NEXT STEP"
          buttonStyle={{marginBottom: 10}}
        />
        <Button type="empty" buttonText="PREVIOUS STEP" />
      </ScrollView>
    </View>
  );
};

export default Height;
