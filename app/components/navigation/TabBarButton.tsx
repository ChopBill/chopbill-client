import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect } from "react";
import { TabIcons } from "@/app/constants/TabIcons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface TabBarButtonProps {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  label: string;
}

const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, label }: TabBarButtonProps) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused, {
      duration: 300,
    });
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      {TabIcons[routeName as keyof typeof TabIcons]({
        color: isFocused ? "#673ab7" : "#222",
      })}
      <Animated.Text
        style={[{ color: isFocused ? "#673ab7" : "#222", fontSize: 12 }, animatedTextStyle]}
      >
        {label as string}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;
