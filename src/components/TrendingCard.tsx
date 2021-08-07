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
    <TouchableOpacity>
      <Text>{trendingItem.name}</Text>
    </TouchableOpacity>
  );
};

export default TrendingCard;
