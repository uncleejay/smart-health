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
  container2: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'ios' ? 76 : 50,
    paddingHorizontal: 16,
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
  pageTitle: {
    fontSize: 25,
    lineHeight: 29,
    color: Colors.black,
  },
  subColorText: {
    color: Colors.secondary,
    marginLeft: 5,
  },
  listBox: {
    width: '100%',
    height: 83,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.stepColor,
    marginBottom: 33,
    borderRadius: 6,
  },
  listBoxTitle: {
    fontSize: 20,
    lineHeight: 23,
    color: Colors.black,
    marginBottom: 8,
  },
  listBoxDescription: {
    fontSize: 14,
    lineHeight: 16,
    color: '#808080',
  },
});
