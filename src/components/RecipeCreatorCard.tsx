import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';
import {BlurView} from '@react-native-community/blur';

type CardProperties = {
  selectedRecipe: any;
};

const RecipeCreatorCardDetail = ({selectedRecipe}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width: 40, height: 40, marginLeft: 20}}>
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{width: 40, height: 40, borderRadius: 20}}></Image>
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Text style={{color: COLORS.lightGray2, ...FONTS.h4}}>Recipe by:</Text>
        <Text style={{color: COLORS.white2, ...FONTS.h3}}>
          {selectedRecipe?.author?.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGreen1,
        }}
        onPress={() => console.log('go to profile')}>
        <Image
          source={icons.rightArrow}
          style={{width: 15, height: 15, tintColor: COLORS.lightGreen}}></Image>
      </TouchableOpacity>
    </View>
  );
};

const RecipeCreatorCard: React.FC<CardProperties> = ({selectedRecipe}) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        blurType="dark"
        style={{
          //   position: 'absolute',
          //   bottom: 10,
          //   left: 10,
          //   right: 10,
          //   height: 80,
          //   paddingHorizontal: SIZES.radius,
          //   paddingVertical: SIZES.radius,
          flex: 1,
          borderRadius: SIZES.radius,
        }}>
        <RecipeCreatorCardDetail
          selectedRecipe={selectedRecipe}></RecipeCreatorCardDetail>
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          //   position: 'absolute',
          //   bottom: 10,
          //   left: 10,
          //   right: 10,
          //   height: 100,
          //   paddingHorizontal: SIZES.radius,
          //   paddingVertical: SIZES.radius,
          flex: 1,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparentBlack9,
        }}>
        <RecipeCreatorCardDetail
          selectedRecipe={selectedRecipe}></RecipeCreatorCardDetail>
      </View>
    );
  }
};

export default RecipeCreatorCard;
