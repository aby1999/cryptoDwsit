import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SText = ({
  text,
  color = "#000000",
  weight = 500,
  size = 20,
  containerStyle,
  lineHeight,
}) => {
  return (
    <Text
      style={[
        {
          color,
          lineHeight,
          fontWeight: weight,
          fontSize: size,
        },
        containerStyle,
      ]}
    >
      {text}
    </Text>
  );
};

export default SText;
