import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
} from 'react-native';
import CustomText from '../../../components/common/CustomText';
import CustomButton from '../../../components/common/CustomButton';
import TextInputWithTitle from '../../../components/common/TextInputWithTitle';
import Logo from '../../../assets/Images/Svgs/Logo.svg';
import {URL} from '../../../config/apiUrl';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function LoginScreen(props) {
  const loginURL = URL('users/login');

  const {navigation} = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = async () => {};

  return (
    <View>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        resetScrollToCoords={{x: 0, y: 0}}
        keyboardShouldPersistTaps={'handled'}
        scrollEnabled={true}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../../assets/Images/onBoardImage.png')}
            style={styles.backgroundImage}>
            <View style={styles.mainLayout}>
              <View style={styles.textLayout}>
                <View style={styles.imageLayout}>
                  <Logo />
                </View>
              </View>
              <View style={styles.buttonLayout}>
                <CustomText
                  variant={'h2'}
                  font={'bold'}
                  fontFamily={'Montserrat'}
                  gutterTop={40}
                  color={'black'}
                  align={'left'}
                  transform={'capitalize'}>
                  Sign In Account
                </CustomText>
                <CustomText
                  variant={'h6'}
                  font={'light'}
                  gutterTop={20}
                  gutterBottom={50}
                  color={'#707070'}
                  align={'left'}
                  transform={'capitalize'}>
                  Sign in To Continue
                </CustomText>

                <TextInputWithTitle
                  titleText={'Email'}
                  secureText={false}
                  placeholder={'Enter Email'}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                  value={email}
                  height={50}
                  width={0.9}
                  gutterTop={0}
                  gutterBottom={20}
                  borderColor={'#707070'}
                  borderWidth={2}
                  borderBottomWidth={2}
                />
                {emailError && (
                  <CustomText
                    variant={'body4'}
                    font={'italic'}
                    gutterTop={-15}
                    gutterBottom={10}
                    color={'red'}
                    align={'left'}
                    transform={'none'}>
                    Kindly enter valid email
                  </CustomText>
                )}
                <TextInputWithTitle
                  titleText={'Password'}
                  secureText={true}
                  placeholder={'Enter Password'}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                  value={password}
                  width={0.9}
                  gutterTop={0}
                  gutterBottom={20}
                  borderColor={'#707070'}
                  borderWidth={2}
                  borderBottomWidth={2}
                />
                {passwordError && (
                  <CustomText
                    variant={'body4'}
                    font={'italic'}
                    gutterTop={-15}
                    gutterBottom={10}
                    color={'red'}
                    align={'left'}
                    transform={'none'}>
                    Password is less than 8 characters
                  </CustomText>
                )}
                <CustomButton
                  value="Login"
                  bgColor={'white'}
                  width={'100%'}
                  size={'xmd'}
                  height={50}
                  color={'black'}
                  borderRadius={100}
                  borderColor={'black'}
                  loader={isLoading}
                  loaderColor={'black'}
                  onPress={onSubmit}
                  borderWidth={1.2}
                />
                <CustomText
                  variant={'body2'}
                  font={'light'}
                  gutterTop={20}
                  gutterBottom={50}
                  color={'#707070'}
                  align={'center'}
                  transform={'capitalize'}>
                  Don't Have an account?
                  <Text
                    style={{textDecorationLine: 'underline'}}
                    onPress={() => {
                      navigation.navigate('Signup');
                    }}>
                    {' '}
                    Sign up
                  </Text>
                </CustomText>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  mainLayout: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  imageLayout: {
    marginTop: 80,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 80,
    marginLeft: 15,
  },
  textLayout: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
    alignItems: 'center',
    width: '100%',
  },
  buttonLayout: {
    width: '100%',
    height: '50%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
