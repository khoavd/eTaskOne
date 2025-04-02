import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './router';
import styles from './styles';
import {Button, StatusBar, Text, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: Props) {
  return (
    <View style={styles.navContainer}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
      <Button
        color={'red'}
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        color={'blue'}
        title="Details"
        onPress={() =>
          navigation.navigate('Details', {
            name: 'John Doe',
            stock: 0,
            title: 'Goodbye',
          })
        }
      />
      <Button
        color={'yellow'}
        title="Detail 2"
        onPress={() =>
          navigation.navigate('Details', {
            name: 'Jane Doe',
            stock: 5,
            title: 'Hello',
          })
        }
      />
    </View>
  );
}
