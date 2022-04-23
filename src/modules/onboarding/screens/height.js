import React from 'react';
import {View, ScrollView} from 'react-native';
import Text, {fontNames} from '../../../assets/fonts';
import Styles from '../style';
import Button from '../../../components/button';
import OnboardingHeader from '../../../components/onboardingHeader';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import {routesNames} from '../../../navigation/stacks';

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
        <View>
          <ScrollPicker
            dataSource={['150cm', '151cm', '152cm', '153cm', '154cm', '155cm']}
            selectedIndex={3}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperColor="#FFFFFF"
            itemHeight={60}
            highlightColor="#d8d8d8"
            highlightBorderWidth={2}
          />
        </View>
      </ScrollView>
      <View style={{alignSelf: 'flex-end', width: '100%', paddingBottom: 40}}>
        <Button
          type="outline"
          buttonText="NEXT STEP"
          buttonStyle={{marginBottom: 10}}
          onPress={() => navigation.navigate(routesNames.ONBOARDING_SCREEN5)}
        />
        <Button
          type="empty"
          buttonText="PREVIOUS STEP"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default Height;
