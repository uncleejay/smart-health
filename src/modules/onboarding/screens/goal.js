import React from 'react';
import {View, ScrollView} from 'react-native';
import Text, {fontNames} from '../../../assets/fonts';
import Styles from '../style';
import Button from '../../../components/button';
import OnboardingHeader from '../../../components/onboardingHeader';
import GOALSJSON from '../datum/goals.json';
import ListBox from '../components/listBox';
import {routesNames} from '../../../navigation/stacks';

const Goal = ({navigation}) => {
  return (
    <View style={Styles.container2}>
      <OnboardingHeader currentStep={1} onExit={() => navigation.goBack()} />
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
            goal?
          </Text>
        </View>
        <View style={{marginBottom: 78}}>
          {GOALSJSON.map((goal, i) => {
            return <ListBox key={i} {...goal} />;
          })}
        </View>
        <Button
          type="outline"
          buttonText="NEXT STEP"
          onPress={() => navigation.navigate(routesNames.ONBOARDING_SCREEN3)}
        />
      </ScrollView>
    </View>
  );
};

export default Goal;
