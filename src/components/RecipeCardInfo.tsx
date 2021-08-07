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
  recipeItem: any;
};

const RecipeCardDetail = ({recipeItem}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            width: '70%',
            color: COLORS.white,
            ...FONTS.h3,
            fontSize: 18,
          }}>
          {recipeItem.name}
        </Text>
        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            width: 20,
            height: 20,
            marginRight: SIZES.base,
            tintColor: COLORS.darkGreen,
          }}></Image>
      </View>
      <Text style={{color: COLORS.lightGray, ...FONTS.body4}}>
        {recipeItem.duration} | {recipeItem.serving} Serving
      </Text>
    </View>
  );
};

const RecipeCardInfo: React.FC<CardProperties> = ({recipeItem}) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        blurType="dark"
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          height: 100,
          paddingHorizontal: SIZES.radius,
          paddingVertical: SIZES.radius,
          borderRadius: SIZES.radius,
        }}>
        <RecipeCardDetail recipeItem={recipeItem}></RecipeCardDetail>
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          height: 100,
          paddingHorizontal: SIZES.radius,
          paddingVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparentDarkGray,
        }}>
        <RecipeCardDetail recipeItem={recipeItem}></RecipeCardDetail>
      </View>
    );
  }
};

export default RecipeCardInfo;
