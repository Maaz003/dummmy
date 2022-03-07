import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TimeCard = props => {
  
  return (
    <View style={styles.container}>
      <CustomText
        variant={'body4'}
        font={'bold'}
        gutterTop={5}
        gutterBottom={0}
        color={'white'}
        align={'left'}
        transform={'none'}>
        Today,Morning
      </CustomText>
      <CustomText
        variant={'body1'}
        font={'bold'}
        gutterTop={5}
        gutterBottom={20}
        color={'white'}
        align={'left'}
        letterSpacing={2}
        transform={'none'}>
        YOGA CLASS
      </CustomText>

      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <CustomText
          variant={'body4'}
          font={'bold'}
          gutterTop={1}
          gutterBottom={25}
          color={'white'}
          align={'left'}
          transform={'none'}>
          AM
        </CustomText>
        <CustomText
          font={'bold'}
          fontFamily={'Montserrat'}
          gutterTop={5}
          gutterBottom={15}
          color={'white'}
          align={'left'}
          letterSpacing={7}
          style={{fontSize: 60, marginLeft: 2}}
          transform={'none'}>
          7:30
        </CustomText>
      </View>

      <CustomButton
        value="Reserve Now"
        bgColor={'#888888'}
        width={'80%'}
        style={{padding:10}}
        size={'sm'}
        color={'black'}
        fontSize={12}
        borderRadius={100}
        borderColor={'#000000'}
        loaderColor={'black'}
        borderWidth={1}
      />
      <View style={styles.instructorLayout}>
        <View style={styles.pictureView}>
          <Image
            resizeMode="contain"
            style={styles.profileImage}
            source={require('../../assets/Images/profile.png')}
          />
        </View>
        <View>
          <CustomText
            font={'bold'}
            variant={'body5'}
            gutterBottom={0}
            color={'white'}
            align={'left'}
            style={{marginLeft: 5}}
            transform={'none'}>
            By Ashley Stokes
          </CustomText>
          <CustomText
            variant={'small'}
            font={'bold'}
            fontFamily={'Montserrat'}
            gutterTop={2}
            gutterBottom={0}
            color={'white'}
            align={'left'}
            style={{marginLeft: 5}}
            transform={'none'}>
            Yoga Expert
          </CustomText>
        </View>
      </View>
    </View>
  );
};
export default TimeCard;
const styles = StyleSheet.create({
  container: {
    width: 180,
    paddingHorizontal: 20,
    backgroundColor: '#888888',
    borderRadius: 34,
    paddingVertical: 20,
    elevation: 99999,
  },
  cardLayout: {
    marginTop: 120,
  },
  pictureView: {
    height: 28,
    width: 28,
    // marginTop:10
  },
  profileImage: {width: '100%', height: '100%'},
  instructorLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
