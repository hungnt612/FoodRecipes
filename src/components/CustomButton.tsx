import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, FONTS} from '../constants';

type CustomBunttonProperties = {
  buttonText: string;
  onPress: (val: string) => void;
  buttonContainerStyle: any;
  color: [''];
};

const CustomButton: React.FC<CustomBunttonProperties> = ({
  buttonText,
  buttonContainerStyle,
  color,
  onPress,
}) => {
  if (color.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={color}
          style={buttonContainerStyle}>
          <Text style={{textAlign: 'center', color: COLORS.white, ...FONTS.h3}}>
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
        <Text
          style={{textAlign: 'center', color: COLORS.lightGreen, ...FONTS.h3}}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
