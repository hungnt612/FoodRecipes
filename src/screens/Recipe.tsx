import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  Animated,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';
import {BlurView} from '@react-native-community/blur';
import RecipeCreatorCard from '../components/RecipeCreatorCard';
import Viewers from '../components/ViewersCard';

const HEADER_HEIGHT = 350;
const Recipe = ({navigation, route}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  useEffect(() => {
    var {recipe} = route.params;
    setSelectedRecipe(recipe);
  }, []);

  const headerSection = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: 1000, // trick giữ cho ảnh kéo giãn cố định tại vị trí khi scroll
          marginTop: -1000,
        }}>
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <RecipeCreatorCard
            selectedRecipe={selectedRecipe}></RecipeCreatorCard>
        </Animated.View>
      </View>
    );
  };
  const headerBarSection = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
          marginTop: 20,
        }}>
        <Animated.View // Phần này làm cho headerSection khi croll max sẽ overlay thành background màu đen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.black,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />

        <Animated.View // Hiểm thị header Bar Title
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              //Phần này giúp hiểm thị header Bar Title khi croll max lên top
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              // Phần này làm cho header Bar Title có hiệu ứng scroll up khi hiểm thị
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
            Recipe by:
          </Text>
          <Text style={{color: COLORS.white2, ...FONTS.body3}}>
            {selectedRecipe?.author?.name}
          </Text>
        </Animated.View>

        <TouchableOpacity // Button back
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={icons.back}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGray2,
            }}></Image>
        </TouchableOpacity>

        <TouchableOpacity // Button Bookmard
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.darkGreen,
            }}></Image>
        </TouchableOpacity>
      </View>
    );
  };

  const recipeInforSection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: 'center',
        }}>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
          <Text style={{...FONTS.h2}}>{selectedRecipe?.name}</Text>
          <Text
            style={{color: COLORS.lightGray2, ...FONTS.body4, marginTop: 5}}>
            {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Viewers viewersList={selectedRecipe?.viewers}></Viewers>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {headerSection()}
            {recipeInforSection()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}>
              <Image source={item.icon} style={{height: 40, width: 40}} />
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.body3}}>{item.description}</Text>
            </View>

            <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
              <Text style={{...FONTS.body3}}>{item.quantity}</Text>
            </View>
          </View>
        )}
      />
      {headerBarSection()}
    </View>
  );
};

export default Recipe;
