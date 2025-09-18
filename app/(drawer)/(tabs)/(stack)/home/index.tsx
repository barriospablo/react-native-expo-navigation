import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <View className="mt-5">
      <CustomButton
        className="mb-10"
        onPress={() => router.push("/products")}
        color="primary"
      >
        Productos
      </CustomButton>
      <CustomButton
        className="mb-10"
        onPress={() => router.push("/profile")}
        color="secondary"
      >
        Profile
      </CustomButton>
      <CustomButton
        className="mb-10"
        onPress={() => router.push("/settings")}
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
      <CustomButton onPress={onToggleDrawer}>Abrir menu</CustomButton>

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
