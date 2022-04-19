import {StyleSheet, Platform} from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  headingText: {
    fontSize: 30,
    marginBottom: 5,
    lineHeight: 37,
    color: Colors.black,
  },
  subText: {
    fontSize: 16,
    marginBottom: 26,
    lineHeight: 19,
    color: Colors.black,
  },
  listText: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 16,
    color: Colors.black,
  },
});
