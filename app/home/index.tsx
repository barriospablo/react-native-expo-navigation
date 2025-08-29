import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="mt-5">
      <Link href={"./products"} asChild>
        <CustomButton onPress={() => router.push("./products")} color="primary">
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
