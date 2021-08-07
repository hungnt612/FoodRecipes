import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import RecipeCardInfo from './RecipeCardInfo';
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

type CardProperties = {
  trendingItem: any;
  onPress: (val: string) => void;
  containerStyle: any;
};
const TrendingCard: React.FC<CardProperties> = ({
  trendingItem,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 300,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={trendingItem.image}
        resizeMode="cover"
        style={{width: 250, height: 300, borderRadius: SIZES.radius}}
      />
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h4}}>
          {trendingItem.category}
        </Text>
      </View>
      <RecipeCardInfo recipeItem={trendingItem}></RecipeCardInfo>
    </TouchableOpacity>
  );
};

export default TrendingCard;
