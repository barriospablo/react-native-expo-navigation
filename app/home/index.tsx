import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="mt-5">
      <Text>HomeScreen</Text>
      <Link className="mb-5" href="/products">
        Productos
      </Link>
      <Link className="mb-5" href="/profile">
        Profile
      </Link>
      <Link className="mb-5" href="/settings">
        Settings
      </Link>
    </View>
  );
};

export default HomeScreen;
