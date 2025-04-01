import {Text, View} from 'react-native';
import styles from './styles';

export const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>I'm a bad Box</Text>
      </View>
    </View>
  );
};
