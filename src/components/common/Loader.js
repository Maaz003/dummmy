import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Color from '../Assets/Utilities/Color';

const Loader = props => {
  return (
    <View
      style={[
        styles.container,
        props?.bgColor && {
          backgroundColor: props?.bgColor,
        },
      ]}>
      <ActivityIndicator size="large" color={Color.iconRed} />
      <Text
        style={[
          styles.text,
          props?.bgColor && {
            color: Color.black,
          },
        ]}>
        Please Wait
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Color.white,
  },
});

export default Loader;
