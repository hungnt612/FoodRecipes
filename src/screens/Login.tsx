/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {images, FONTS, SIZES, COLORS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';

const Login = ({navigation}) => {
  const headerSection = () => {
    return (
      <View style={{height: SIZES.height > 700 ? '65%' : '60%'}}>
        <ImageBackground
          source={images.sucsinhhuyde}
          style={{flex: 1, justifyContent: 'flex-end'}}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              //   backgroundColor:'red',
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                color: COLORS.white,
                lineHeight: 45,
                width: '80%',
                ...FONTS.largeTitle,
              }}>
              Coocking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const detailSection = () => {
    return (
      <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
        <Text
          style={{
            marginTop: SIZES.radius,
            width: '70%',
            color: COLORS.gray,
            ...FONTS.body3,
          }}>
          Discover more than 1200 food recipes in your hands and cooking it
          easily!
        </Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <CustomButton
            buttonText="Login"
            color={[COLORS.darkGreen, COLORS.darkLime]}
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            onPress={() => {
              navigation.replace('Home');
            }}
          />
          <CustomButton
            buttonText="Sign Up"
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            color={[]}
            onPress={() => {
              navigation.replace('Home');
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      <StatusBar barStyle="light-content" />
      {headerSection()}
      {detailSection()}
    </View>
  );
};

export default Login;
