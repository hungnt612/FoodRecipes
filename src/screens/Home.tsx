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
import CategoryCard from '../components/CategoryCard';
import TrendingCard from '../components/TrendingCard';

const Home = ({navigation}) => {
  const headerSection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: COLORS.darkGreen, ...FONTS.h2}}>
            Hello Guest,
          </Text>
          <Text style={{marginTop: 3, color: COLORS.gray, ...FONTS.body3}}>
            May muon nau gi hom nay
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log('hihi')}>
          <Image
            source={images.profile}
            style={{width: 40, height: 40, borderRadius: 20}}></Image>
        </TouchableOpacity>
      </View>
    );
  };

  const searchBarSection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <Image
          source={icons.search}
          style={{width: 20, height: 20, tintColor: COLORS.gray}}
        />
        <TextInput
          style={{marginLeft: SIZES.radius, ...FONTS.body3}}
          placeholder="Search"
          placeholderTextColor={COLORS.gray}></TextInput>
      </View>
    );
  };
  const recipeCardSection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}>
        <View
          style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={images.recipe} style={{width: 80, height: 80}}></Image>
        </View>
        <View style={{flex: 1, paddingVertical: SIZES.radius}}>
          <Text style={{width: '70%', ...FONTS.body4}}>
            You have xx recipes that you havent tried yet
          </Text>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              console.log('see');
            }}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const trendingSection = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{marginHorizontal: SIZES.padding, ...FONTS.h2}}>
          Trending recipes
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <TrendingCard
                trendingItem={item}
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0,
                }}
                onPress={() =>
                  navigation.navigate('Recipe', {recipe: item})
                }></TrendingCard>
            );
          }}></FlatList>
      </View>
    );
  };

  const categorySection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}>
        <Text style={{flex: 1, ...FONTS.h2}}>Categories</Text>
        <TouchableOpacity style={{}}>
          <Text style={{color: COLORS.gray, ...FONTS.h4}}>View all</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {headerSection()}
            {searchBarSection()}
            {recipeCardSection()}
            {trendingSection()}
            {categorySection()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              containerStyle={{marginHorizontal: SIZES.padding2}}
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />
    </SafeAreaView>
  );
};

export default Home;
