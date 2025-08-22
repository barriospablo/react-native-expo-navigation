import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-5">
        <Text className="text-3xl" style={{ fontFamily: "WorkSans-Black" }}>
          Hola mundo
        </Text>
        <Text className="text-2xl font-work-medium">Hola mundo</Text>
        <Text className="text-xl font-work-light">Hola mundo</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
