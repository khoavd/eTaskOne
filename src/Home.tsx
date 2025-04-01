import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './router';
import styles from './styles';
import {Button, StatusBar, Text, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList>;

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
    </View>
  );
}
