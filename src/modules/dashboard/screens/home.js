import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Text, {fontNames} from '../../../assets/fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Styles from '../style';
import {
  breakfast,
  dinner,
  lunch,
  snacks,
  water,
} from '../../../assets/images/png';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginTop: 22,
          }}>
          <Text type={fontNames.SEMIBOLD} textStyles={{fontSize: 18}}>
            Hi, Sam
          </Text>
          <Icon name="user-circle-o" size={30} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginTop: 10,
          }}>
          <View
            style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{marginBottom: 3, fontSize: 20, lineHeight: 24}}>
              0
            </Text>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{fontSize: 10, lineHeight: 12}}>
              EATEN
            </Text>
          </View>
          <View
            style={{
              width: 187,
              height: 187,
              borderRadius: 187 / 2,
              borderColor: '#000',
              borderWidth: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{marginBottom: 3, fontSize: 28, lineHeight: 34}}>
              1000
            </Text>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{fontSize: 12, lineHeight: 15}}>
              KCAL LEFT
            </Text>
          </View>
          <View
            style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{marginBottom: 3, fontSize: 20, lineHeight: 24}}>
              0
            </Text>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{fontSize: 10, lineHeight: 12}}>
              BURNED
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginTop: 10,
            marginBottom: 30,
          }}>
          <View
            style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{marginBottom: 3, fontSize: 20, lineHeight: 24}}>
              0
            </Text>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{fontSize: 10, lineHeight: 12}}>
              CARBS
            </Text>
          </View>
          <View
            style={{
              width: 187,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{marginBottom: 3, fontSize: 20, lineHeight: 24}}>
              0
            </Text>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{fontSize: 10, lineHeight: 12}}>
              PROTEIN
            </Text>
          </View>
          <View
            style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{marginBottom: 3, fontSize: 20, lineHeight: 24}}>
              0
            </Text>
            <Text
              type={fontNames.SEMIBOLD}
              textStyles={{fontSize: 10, lineHeight: 12}}>
              FAT
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: 16,
          }}>
          <Icon name="calendar-o" size={20} style={{marginRight: 5}} />
          <Text
            type={fontNames.SEMIBOLD}
            textStyles={{fontSize: 14, lineHeight: 17}}>
            Today, 22 Apr
          </Text>
        </View>
        <View style={{paddingHorizontal: 16}}>
          <TouchableOpacity style={Styles.actionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={breakfast} style={{width: 73, height: 53}} />
              <Text type={fontNames.SEMIBOLD} textStyles={Styles.actionText}>
                Add breakfast
              </Text>
            </View>
            <ADIcon name="pluscircleo" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.actionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={lunch}
                style={{width: 54, height: 29, marginRight: 23}}
              />
              <Text type={fontNames.SEMIBOLD} textStyles={Styles.actionText}>
                Add lunch
              </Text>
            </View>
            <ADIcon name="pluscircleo" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.actionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={dinner} style={{width: 73, height: 53}} />
              <Text type={fontNames.SEMIBOLD} textStyles={Styles.actionText}>
                Add dinner
              </Text>
            </View>
            <ADIcon name="pluscircleo" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.actionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={snacks}
                style={{width: 37, height: 39, marginRight: 23}}
              />
              <Text type={fontNames.SEMIBOLD} textStyles={Styles.actionText}>
                Add snacks
              </Text>
            </View>
            <ADIcon name="pluscircleo" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.actionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={water}
                style={{width: 31, height: 43, marginRight: 23}}
              />
              <Text type={fontNames.SEMIBOLD} textStyles={Styles.actionText}>
                Add water
              </Text>
            </View>
            <ADIcon name="pluscircleo" size={30} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
