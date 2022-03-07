import React from 'react';
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
import {Post} from '../../../axios/AxiosInterceptorFunction';
import {URL} from '../../../config/apiUrl';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function SignupScreen(props) {
  const {navigation} = props;
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const signUrl = URL('users/signup');
  // const Header = {
  //   headers: {
  //     ...form.getHeaders(),
  //   },
  //   // headers: {
  //   //   // 'Content-Type': 'application/json',
  //   //   "Content-Type": "multipart/form-data",
  //   // },
  // };

  const formData = () => {
    var formData = new FormData();

    formData.append('role', 'trainee');
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('fcmToken', '8hjasd74');
    formData.append('password', password);
    formData.append('passwordConfirm', password);
    return formData;
  };

  const onSubmit = async () => {
    // navigation.navigate('Login');
    let userData = formData();
    // let userData = {
    //   'role': 'trainee',
    //   'firstName': firstName,
    //   'lastName': lastName,
    //   'email': email,
    //   'fcmToken': '8hjasd74',
    //   'password': password,
    //   'passwordConfirm': password
    // };
    console.log('heelo', userData._boundary);
    const response = await Post(signUrl, userData,  {
      headers: {
        'content-type': `multipart/form-data; boundary=${userData._boundary}`
      },

    });
    console.log(response)
  };

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
                  Create an account
                </CustomText>
                <CustomText
                  variant={'h6'}
                  font={'light'}
                  gutterTop={20}
                  gutterBottom={30}
                  color={'#707070'}
                  align={'left'}
                  transform={'capitalize'}>
                  Sign up to Continue
                </CustomText>

                <CustomText
                  variant={'body2'}
                  font={'bold'}
                  gutterTop={1}
                  gutterBottom={2}
                  color={'black'}
                  align={'left'}
                  transform={'capitalize'}>
                  First Name
                </CustomText>

                <TextInputWithTitle
                  titleText={'Email'}
                  secureText={false}
                  placeholder={'Enter FirstName'}
                  onChangeText={text => {
                    setFirstName(text);
                  }}
                  value={firstName}
                  height={50}
                  width={0.9}
                  gutterTop={0}
                  gutterBottom={20}
                  borderColor={'#707070'}
                  borderWidth={2}
                  borderBottomWidth={2}
                />
                <CustomText
                  variant={'body2'}
                  font={'bold'}
                  gutterTop={1}
                  gutterBottom={2}
                  color={'black'}
                  align={'left'}
                  transform={'capitalize'}>
                  Last Name
                </CustomText>

                <TextInputWithTitle
                  titleText={'Email'}
                  secureText={false}
                  placeholder={'Enter LastName'}
                  onChangeText={text => {
                    setLastName(text);
                  }}
                  value={lastName}
                  height={50}
                  width={0.9}
                  gutterTop={0}
                  gutterBottom={20}
                  borderColor={'#707070'}
                  borderWidth={2}
                  borderBottomWidth={2}
                />
                <CustomText
                  variant={'body2'}
                  font={'bold'}
                  gutterTop={1}
                  gutterBottom={2}
                  color={'black'}
                  align={'left'}
                  transform={'capitalize'}>
                  Email
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
                <CustomText
                  variant={'body2'}
                  font={'bold'}
                  gutterTop={1}
                  gutterBottom={2}
                  color={'black'}
                  align={'left'}
                  transform={'capitalize'}>
                  Password
                </CustomText>
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
                <CustomButton
                  value="Register"
                  bgColor={'#888888'}
                  width={'100%'}
                  size={'xmd'}
                  height={50}
                  color={'white'}
                  borderRadius={100}
                  onPress={onSubmit}
                />
                <CustomText
                  variant={'body2'}
                  font={'light'}
                  gutterTop={20}
                  gutterBottom={50}
                  color={'#707070'}
                  align={'center'}
                  transform={'capitalize'}>
                  Already Have an account?
                  <Text
                    style={{textDecorationLine: 'underline'}}
                    onPress={() => {
                      navigation.navigate('Login');
                    }}>
                    Sign in
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
export default SignupScreen;

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
    height: '70%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    // paddingVertical: 10,
  },
});
