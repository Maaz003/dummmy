import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {moderateScale} from 'react-native-size-matters';
import LogoHeader from '../../../assets/Images/Svgs/LogoHeader.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function HeaderComponent(props) {
  const {navigation} = props;

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <LogoHeader />
      <TouchableOpacity onPress={toggleDrawer} style={styles.rightView}>
        <Image
          resizeMode="contain"
          style={styles.profileImage}
          source={require('../../../assets/Images/profile.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
export default HeaderComponent;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    width: width * 0.9,
    marginTop: 20,
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.18,
    height: height * 0.035,
  },
  profileImage: {width: 55, height: 55, marginLeft: 10},
});
