import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function ItemsScreen({ route }) {
  const navigate = useNavigation();
  const { imageSrc, title, address } = route.params;

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);
  console.log({ location: address, title: title, imageUrl: imageSrc });
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
            <View className="px-2 py-2 rounded-md bg-teal-100">
              {title === "Example-One" ? (
                <Text>Closed</Text>
              ) : (
                <Text>Open</Text>
              )}
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">{title}</Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {address}
            </Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <FontAwesome size={24} name="star" color="#D58574" />
            </View>
            <View>
              <Text className="text-[#515151]">5.0</Text>
              <Text className="text-[#515151]">Doomie Rating</Text>
            </View>
          </View>
          <View className="flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <MaterialIcons size={24} name="attach-money" color="black" />
            </View>
            <View>
              <Text className="text-[#515151]">$$$$</Text>
              <Text className="text-[#515151]">Doomie Price</Text>
            </View>
          </View>
        </View>
        <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97a6af]">
          Join us for a wild and wacky dining experience! Our chefs serve up
          hilarious culinary creations and our quirky wait staff ensures a good
          time. #FoodieFun #DoomieText
        </Text>
        <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
            <Text>FoodieParadise</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
            <Text>#FoodieParadise</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
            <Text>#EateryEscape</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
            <Text>#DineAndDelight</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
            <Text>#GastroGoals</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
            <Text>#BiteIntoBliss</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
            <Text>#FeastfulFusion</Text>
          </TouchableOpacity>
        </View>
        <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl mb-20 px-4 py-2">
          <View className="items-center flex-row space-x-6">
            <FontAwesome name="phone" size={24} color="#428288" />
            {title === "Example-One" ? (
              <Text className="text-lg">724-477-5739</Text>
            ) : title === "Example-Two" ? (
              <Text className="text-lg">909-881-2355</Text>
            ) : (
              <Text className="text-lg">703-291-9030</Text>
            )}
          </View>
          <View className="items-center flex-row space-x-6">
            <FontAwesome name="envelope" size={24} color="#428288" />
            {title === "Example-One" ? (
              <Text className="text-lg">wilton.smitham2@hotmail.com</Text>
            ) : title === "Example-Two" ? (
              <Text className="text-lg">hilario26@gmail.com</Text>
            ) : title === "Example-Three" ? (
              <Text className="text-lg">nia.abshire@hotmail.com</Text>
            ) : (
              <Text className="text-lg">angel_leannon57@gmail.com</Text>
            )}
          </View>
          <View className="items-center flex-row space-x-6">
            <FontAwesome name="map-pin" size={24} color="#428288" />
            <Text className="text-lg">{address}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
