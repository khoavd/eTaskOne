import {node} from 'prop-types';
import {Platform, StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: 'ghostwhite',
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight},
    }),
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    margin: 10,
  },
  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold',
  },
  navContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cleanButton: {
    backgroundColor: 'none',
  },
});
