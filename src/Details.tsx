import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import styles from './styles';
import {RootStackParamList} from './router';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route, navigation}: Props) {
  const {name, title} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <View style={styles.navContainer}>
      <Text>Details Screen</Text>
      <Text>{`Name: ${name}`}</Text>
    </View>
  );
}
