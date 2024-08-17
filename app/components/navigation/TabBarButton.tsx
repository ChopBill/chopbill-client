import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome6 } from "@expo/vector-icons";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const icons = {
    home: (props: any) => (
      <Feather name="home" size={24} color={"#222"} className="self-center" {...props} />
    ),
    bills: (props: any) => (
      <FontAwesome6
        name="money-bill-1"
        className="self-center"
        size={24}
        color={"#222"}
        {...props}
      />
    ),
    profile: (props: any) => (
      <Feather name="user" className="self-center" size={24} color={"#222"} {...props} />
    ),
  };
  return (
    <View className="absolute bottom-10 left-0 right-0">
      <View className="flex-row justify-between items-center bg-white w-[200px] self-center rounded-full py-2 px-6">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              className="flex-1 gap-5"
            >
              {icons[route.name as keyof typeof icons]({
                color: isFocused ? "#673ab7" : "#222",
              })}
              <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{label as string}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
