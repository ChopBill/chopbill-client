import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TabBar } from "@/app/components/navigation/TabBar";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="bills" options={{ title: "Bills" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default TabLayout;
