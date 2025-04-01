import {Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

type Props = {
  children: React.ReactNode;
};

export const Box = ({children}: Props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
