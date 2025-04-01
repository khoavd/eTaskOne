import {Text, View} from 'react-native';
import styles from './styles';

export const ThreeBoxes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Box 3</Text>
      </View>
    </View>
  );
};
