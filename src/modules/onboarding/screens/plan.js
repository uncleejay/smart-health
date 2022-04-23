import React from 'react';
import {View, ScrollView} from 'react-native';
import Text, {fontNames} from '../../../assets/fonts';
import Styles from '../style';
import Button from '../../../components/button';
import OnboardingHeader from '../../../components/onboardingHeader';
import {routesNames} from '../../../navigation/stacks';
import PLANJSON from '../datum/plan.json';
import Colors from '../../../assets/colors';

const PlanList = ({title, percentage}) => {
  return (
    <View style={{width: '100%', marginBottom: 36}}>
      <View
        style={{
          width: '100%',
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text type={fontNames.MEDIUM} textStyles={{fontSize: 14}}>
          {title}
        </Text>
        <Text type={fontNames.MEDIUM} textStyles={{fontSize: 14}}>
          {percentage}%
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 8,
          borderRadius: 6,
          borderWidth: 1,
          borderColor: 'rgba(72,72,72,0.22)',
          overflow: 'hidden',
        }}>
        <View
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: Colors.secondary,
          }}
        />
      </View>
    </View>
  );
};

const Plan = ({navigation}) => {
  return (
    <View style={Styles.container2}>
      <OnboardingHeader currentStep={4} onExit={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 36,
            width: '100%',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Text type={fontNames.SEMIBOLD} textStyles={Styles.pageTitle}>
            Sam your
          </Text>
          <Text
            type={fontNames.SEMIBOLD}
            textStyles={[
              Styles.pageTitle,
              Styles.subColorText,
              {marginRight: 5},
            ]}>
            personalized plan
          </Text>
          <Text type={fontNames.SEMIBOLD} textStyles={Styles.pageTitle}>
            is ready
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            type={fontNames.MEDIUM}
            textStyles={{fontSize: 14, marginBottom: 46}}>
            Daily nutritional recommendations
          </Text>
          {PLANJSON.map((plan, i) => {
            return <PlanList {...plan} key={i} />;
          })}
        </View>
      </ScrollView>
      <View style={{alignSelf: 'flex-end', width: '100%', paddingBottom: 40}}>
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
      </View>
    </View>
  );
};

export default Plan;
