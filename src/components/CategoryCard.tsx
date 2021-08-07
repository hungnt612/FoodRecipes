/* eslint-disable react-native/no-inline-styles */
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
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

type CardProperties = {
  categoryItem: any;
  onPress: (val: string) => void;
  containerStyle: any;
};

const CategoryCard: React.FC<CardProperties> = ({
  categoryItem,
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={{width: 100, height: 100, borderRadius: SIZES.radius}}
      />
      <View style={{width: '65%', paddingHorizontal: 20}}>
        <Text style={{flex: 1, ...FONTS.h3}}>{categoryItem.name}</Text>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
