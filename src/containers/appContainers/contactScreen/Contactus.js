import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import TextInputWithTitle from '../../../components/common/TextInputWithTitle';
import ScreenBoiler from '../../../components/layout/header/ScreenBoiler';
import CustomButton from '../../../components/common/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import CustomText from '../../../components/common/CustomText';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Contact(props) {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [numberError, setNumberError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const headerProps = {
    isHeader: true,
    isSubHeader: true,
    mainHeading: 'How can we help you?',
    subHeading: 'Contact Us',
  };

  const onSubmit = async () => {
  };

  return (
    <ScreenBoiler headerProps={headerProps} {...props}>
      <ScrollView style={styles.container}>
        <View style={styles.formLayout}>
          <TextInputWithTitle
            secureText={false}
            placeholder={'Name'}
            placeholdercolor={'#707070'}
            onChangeText={text => {
              setName(text);
            }}
            value={name}
            height={50}
            width={0.9}
            gutterTop={0}
            gutterBottom={10}
            borderColor={'#707070'}
            backgroundColor={'black'}
            color={'white'}
            // borderWidth={2}
            borderBottomWidth={2}
          />
          {nameError && (
            <CustomText
              variant={'body4'}
              font={'italic'}
              gutterTop={5}
              gutterBottom={10}
              color={'red'}
              align={'left'}
              transform={'none'}>
              Empty field
            </CustomText>
          )}
          <TextInputWithTitle
            secureText={false}
            placeholder={'Phone Number'}
            placeholdercolor={'#707070'}
            onChangeText={text => {
              setNumber(text);
            }}
            value={number}
            height={50}
            width={0.9}
            gutterTop={5}
            gutterBottom={10}
            borderColor={'#707070'}
            backgroundColor={'black'}
            // borderWidth={2}
            color={'white'}
            borderBottomWidth={2}
          />
          {numberError && (
            <CustomText
              variant={'body4'}
              font={'italic'}
              gutterTop={5}
              gutterBottom={10}
              color={'red'}
              align={'left'}
              transform={'none'}>
              Empty field
            </CustomText>
          )}
          <TextInputWithTitle
            secureText={false}
            placeholder={'Email Address'}
            placeholdercolor={'#707070'}
            onChangeText={text => {
              setEmail(text);
            }}
            value={email}
            height={50}
            width={0.9}
            gutterTop={5}
            gutterBottom={5}
            borderColor={'#707070'}
            backgroundColor={'black'}
            // borderWidth={2}
            color={'white'}
            borderBottomWidth={2}
          />
          {emailError && (
            <CustomText
              variant={'body4'}
              font={'italic'}
              gutterTop={5}
              gutterBottom={10}
              color={'red'}
              align={'left'}
              transform={'none'}>
              Empty field
            </CustomText>
          )}
          <TextInputWithTitle
            secureText={false}
            placeholder={'Message'}
            multiline={true}
            placeholdercolor={'#707070'}
            onChangeText={text => {
              setMessage(text);
            }}
            value={message}
            height={120}
            width={0.9}
            gutterTop={5}
            gutterBottom={messageError ? 1 : 70}
            viewHeight={20}
            inputHeight={90}
            borderColor={'#707070'}
            color={'white'}
            backgroundColor={'black'}
            numberOfLines={10}
            maxLength={250}
            style={{maxWidth: 20}}
            borderWidth={0}
            borderBottomWidth={2}
          />
          {messageError && (
            <CustomText
              variant={'body4'}
              font={'italic'}
              gutterTop={5}
              gutterBottom={70}
              color={'red'}
              align={'left'}
              transform={'none'}>
              Empty field
            </CustomText>
          )}
          <CustomButton
            value="Send Message"
            bgColor={'#888888'}
            width={'100%'}
            size={'xmd'}
            height={50}
            color={'white'}
            borderRadius={100}
            borderColor={'#000000'}
            loader={isLoading}
            loaderColor={'black'}
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </ScreenBoiler>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  formLayout: {
    marginTop: 120,
  },
});
