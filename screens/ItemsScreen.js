import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function ItemsScreen({ route }) {
  const navigate = useNavigation();
  const { imageSrc, title } = route.params;

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg ">
          <Image
            source={{ uri: imageSrc }}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigate.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[12px] font-bold text-gray-100">$$$$</Text>
              <Text className="text-[32px] font-bold text-gray-100">
                0 - 1,250
              </Text>
            </View>
            <View className="px-2 py-1 rounded-md bg-teal-100">
              {title === "Example-One" ? (
                <Text>Closed</Text>
              ) : (
                <Text>Open</Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
