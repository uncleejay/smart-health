import React from 'react';
import {View, ScrollView} from 'react-native';
import Text, {fontNames} from '../../../assets/fonts';
import Styles from '../style';
import Button from '../../../components/button';
import OnboardingHeader from '../../../components/onboardingHeader';
import DIETJSON from '../datum/diet.json';
import ListBox from '../components/listBox';
import {routesNames} from '../../../navigation/stacks';

const Diet = ({navigation}) => {
  return (
    <View style={Styles.container2}>
      <OnboardingHeader currentStep={2} onExit={() => navigation.goBack()} />
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
            diet?
          </Text>
        </View>
        <View style={{marginBottom: 78}}>
          {DIETJSON.map((diet, i) => {
            return <ListBox key={i} {...diet} />;
          })}
        </View>
        <Button
          type="outline"
          buttonText="NEXT STEP"
          buttonStyle={{marginBottom: 10}}
          onPress={() => navigation.navigate(routesNames.ONBOARDING_SCREEN4)}
        />
        <Button
          type="empty"
          buttonText="PREVIOUS STEP"
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
};

export default Diet;
