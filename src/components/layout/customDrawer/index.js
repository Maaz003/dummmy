import React from 'react';
import {View, StyleSheet, Dimensions, Image, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomText from '../../common/CustomText';
import CustomButton from '../../common/CustomButton';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomDrawer = props => {
  const {navigation} = props;

  const toggleDrawer = () => {
    navigation?.toggleDrawer();
  };

  const switchScreen = route => {
    navigation.navigate(route);
  };

  const logOutFunction = () => {};
  const navigationObject = [
    {name: 'Home', route: 'Home'},
    {name: 'Packages', route: 'Package'},
    {name: 'Contact Us', route: 'Contact'},
    {name: 'History', route: 'Home'},
    {name: 'Account Settings', route: 'Home'},
  ];

  return (
    <View style={styles.container}>
      <CustomText
        variant={'body4'}
        font={'bold'}
        color={'#888888'}
        align={'left'}
        fontFamily={'Montserrat'}
        transform={'capitalize'}>
        View Profile
      </CustomText>
    </View>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#3B3C40',
    borderTopLeftRadius: 30,
  },
  navigationLayout: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  bioView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pictureView: {
    height: 70,
    width: 70,
  },
  profileImage: {width: '100%', height: '100%'},
  nameView: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
  },
  itemNormal: {
    backgroundColor: 'white',
    width: '100%',
  },
  itemPress: {
    backgroundColor: '#888888',
    width: '100%',
    color: 'red',
  },
});
