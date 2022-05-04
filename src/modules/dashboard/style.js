import {StyleSheet, Platform} from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  actionBox: {
    width: '100%',
    height: 75,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  actionText: {
    fontSize: 18,
    lineHeight: 22,
  },
});
