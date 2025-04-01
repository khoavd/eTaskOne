import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './router';
import styles from './styles';
import {Button, StatusBar, Text, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Settings({navigation}: Props) {
  return (
    <View style={styles.navContainer}>
      <StatusBar barStyle="dark-content" />
      <Text>Setting Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
