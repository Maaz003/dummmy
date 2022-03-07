import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CustomText from '../../../components/common/CustomText';
import ScreenBoiler from '../../../components/layout/header/ScreenBoiler';
import Carousel from 'react-native-snap-carousel';
import TimeCard from '../../../components/common/TimeCard';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const slideShow = [
  {
    id: '1',
    image: require('../../../assets/Images/swipeImage.png'),
    text: 'Yoga',
    desc: 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit, sed do ',
  },
  {
    id: '2',
    image: require('../../../assets/Images/swipeImage.png'),
    text: 'Training',
    desc: 'Lorem ipsum dolor sit amet,  \n consectetur adipiscing elit, sed do ',
  },
  {
    id: '3',
    image: require('../../../assets/Images/swipeImage.png'),
    text: 'Gym',
    desc: 'Lorem ipsum dolor sit amet,  \n consectetur adipiscing elit, sed do ',
  },
];

export default function App(props) {
  const [indexItem, setIndexItem] = useState();

  const headerProps = {
    isHeader: true,
    isSubHeader: false,
  };
  const viewAll = () => {
    // console.log('VIEW ALL');
  };

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
        <TimeCard item={item} />
      </View>
    );
  };

  return (
    <ScreenBoiler headerProps={headerProps} {...props}>
      <View style={styles.container}>
        <CustomText
          variant={'body2'}
          font={'bold'}
          gutterTop={20}
          color={'#888888'}
          align={'left'}
          transform={'capitalize'}>
          Good Morning
        </CustomText>
        <CustomText
          variant={'h4'}
          font={'bold'}
          gutterTop={10}
          color={'#FFFFFF'}
          align={'left'}
          transform={'capitalize'}>
          {/* {auth?.user?.displayName} */}
          User
        </CustomText>

        <View style={styles.headingLayout}>
          <CustomText
            variant={'body1'}
            font={'bold'}
            color={'#FFFFFF'}
            align={'left'}
            transform={'capitalize'}>
            Popular
          </CustomText>

          <TouchableOpacity onPress={viewAll}>
            <CustomText
              variant={'body4'}
              font={'bold'}
              fontFamily={'Montserrat'}
              color={'#888888'}
              align={'left'}
              style={{padding: 5}}
              transform={'capitalize'}>
              View All
            </CustomText>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}>
          <Carousel
            layout={'default'}
            data={slideShow}
            sliderWidth={370}
            itemWidth={180}
            renderItem={_renderItem}
            removeClippedSubviews={false}
            onSnapToItem={index => setIndexItem(index)}
          />
        </View>

        <View style={styles.headingLayout}>
          <CustomText
            variant={'body1'}
            font={'bold'}
            color={'white'}
            align={'left'}
            transform={'capitalize'}>
            Categories
          </CustomText>

          <TouchableOpacity onPress={viewAll}>
            <CustomText
              variant={'body4'}
              font={'bold'}
              fontFamily={'Montserrat'}
              color={'#888888'}
              align={'left'}
              style={{padding: 5}}
              transform={'capitalize'}>
              View All
            </CustomText>
          </TouchableOpacity>
        </View>

        
      </View>
    </ScreenBoiler>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  headingLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  swiperView: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  swipeImage: {
    width: 250,
    height: 150,
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'brown',
    // borderRadius:20
  },
});
