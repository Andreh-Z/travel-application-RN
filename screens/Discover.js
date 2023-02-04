import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotel, Restaurant } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemsContainer from "../components/ItemsContainer";

export default function Discover() {
  const [type, setType] = useState("restaurants");
  const [text, setText] = useState();

  const handlePress = () => {
    Alert.alert(
      "Problems here!",
      "In order to use this service, you must pay Google Places. Test information",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK") },
      ]
    );
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md justify-center items-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      {/* View for input search */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl shadow-xl shadow-slate-700 py-1 px-4 mt-4">
        <TextInput
          value={text}
          placeholder="You have to pay to use this 😔"
          onPressIn={handlePress}
        />
      </View>
      {/* Menus containers */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key="hotel"
            title="Hotels"
            imageSc={Hotel}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key="attractions"
            title="Attractions"
            imageSc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key="restaurants"
            title="Restaurants"
            imageSc={Restaurant}
            type={type}
            setType={setType}
          />
        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[28px] font-bold">
              Top tips
            </Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#A0C4C7] text-[20px] font-bold">
                Explore
              </Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>
          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
            <ItemsContainer
              key={"101"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg"
              }
              title="Example-One"
              location="Colombia"
              address="255 Midway Road"
            />
            <ItemsContainer
              key={"102"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_960_720.jpg"
              }
              title="Example-Two"
              location="Argentina"
              address="989 Buck Drive"
            />
            <ItemsContainer
              key={"103"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2016/11/21/16/02/outdoor-dining-1846137_960_720.jpg"
              }
              title="Example-Three"
              location="Uruguay"
            />
            <ItemsContainer
              key={"104"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_960_720.jpg"
              }
              title="Example-Four"
              location="Italy"
              address="2121 Coulter Lane"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
