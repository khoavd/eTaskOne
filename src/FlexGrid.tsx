import {StatusBar, View} from 'react-native';
import styles from './styles';
import {Box} from './Box';

export const FlexGrid = () => {
  const boxes = new Array(20).fill(null).map((v, i) => i + 1);

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {boxes.map(i => (
        <Box key={i}>#{i}</Box>
      ))}
    </View>
  );
};
