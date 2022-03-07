import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  I18nManager,
  ActivityIndicator,
} from 'react-native';
import {Icon, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import CustomText from './CustomText';

const CustomButton = props => {

  const sizes = {sm: 28, md: 32, xmd: 42, lg: 56};
  
  const {
    size,
    btnWrapperStyles,
    color = 'white',
    gutterTop = 0,
    gutterBottom = 0,
    loader=false,
    loaderColor='white',
    borderColor='black',
    bgColor="white",
    borderWidth=0,
    fontSize=15
  } = props;



  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity ? props.activeOpacity : 0.9}
      onPress={props.onPress}
      style={[
        styles.mainBtn,
        {
          width: props.width,
          height: sizes[size],
          backgroundColor: bgColor,
          borderColor:borderColor,
          marginTop: gutterTop,
          marginBottom: gutterBottom,
          borderWidth:borderWidth
        },
        btnWrapperStyles,
        props.justifyContent && {
          justifyContent: props.justifyContent,
        },
        props.borderRadius && {
          borderRadius: props.borderRadius,
        },
      ]}>
      <CustomText
        style={{
          fontSize: fontSize,
          color: color,
        }}>
        {props.value}
      </CustomText>
      {loader && (
        <ActivityIndicator
          style={styles.indicatorStyle}
          size="small"
          color={loaderColor}
        />
      )}

      {props.iconName && (
        <Icon
          name={props.iconName}
          type={props.iconType}
          style={[styles.iconCustom, props.iconStyle && props.iconStyle]}
        />
      )}
      <CustomText
        style={[
          styles.text,
          {color: props.textColor, fontSize: scale(15)},
          props.textTransform && {
            textTransform: props.textTransform,
          },
        ]}>
        {props.text}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainBtn: {
    // marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // overflow: 'hidden',
    // borderWidth: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  indicatorStyle: {
    paddingRight: 5,
    paddingLeft: I18nManager.isRTL ? 5 : 0,
  },
  iconCustom: {
    color: '#C0C0C0',
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: I18nManager.isRTL ? 20 : 0,
  },
});

export default CustomButton;
