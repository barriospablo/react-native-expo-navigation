import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="mt-5">
      <CustomButton
        className="mb-10"
        onPress={() => router.push("./tabs/(stack)/products")}
        color="primary"
      >
        Productos
      </CustomButton>
      <CustomButton
        className="mb-10"
        onPress={() => router.push("./tabs/(stack)/profile")}
        color="secondary"
      >
        Profile
      </CustomButton>
      <CustomButton
        className="mb-10"
        onPress={() => router.push("./tabs/(stack)/settings")}
        color="secondary"
      >
        Ajustes
      </CustomButton>
      <Link href={"./products"} asChild>
        <CustomButton
          className="mb-10"
          onPress={() => router.push("./tabs/(stack)/products")}
          color="tertiary"
        >
          Productos
        </CustomButton>
      </Link>

      {/* <Text>HomeScreen</Text> */}
      {/* <Link className="mb-5" href="/products">
        Productos
      </Link>
      <Link className="mb-5" href="/profile">
        Profile
      </Link>
      <Link className="mb-5" href="/settings">
        Settings
      </Link> */}
    </View>
  );
};

export default HomeScreen;
