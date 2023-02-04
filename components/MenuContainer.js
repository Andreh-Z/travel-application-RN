import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function MenuContainer({ key, title, imageSc, type, setType }) {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
    >
      <View
        className={`w-24 h-24 shadow-sm p-2 rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-800" : ""
        }`}
      >
        <Image source={imageSc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00bcc9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
