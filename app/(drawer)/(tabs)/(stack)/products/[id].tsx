import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product, navigation]);

  if (!product) {
    return <Redirect href={"/"} />;
  }

  return (
    <View className="px-5 mt-10">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black text-2xl">${product.price}</Text>
    </View>
  );
};

export default ProductScreen;
