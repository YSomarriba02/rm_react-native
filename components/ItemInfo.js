import { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Animated } from "react-native";

export default function ItemInfo({ personaje, TypeIcon1, TypeIcon2, nameIcon1, nameIcon2, condicion, textTrue, textFalse, delay }) {

  const opacity = useRef(new Animated.Value(0)).current


  useEffect(() => {
    Animated.timing(opacity, {
      delay: delay * 90,
      duration: 700,
      toValue: 1,
      useNativeDriver: true
    }).start()
  }, [opacity])

  return (
    <Animated.View style={[styles.tarjetInfo, { opacity }]}>
      <View style={{ alignItems: "center", width: "15%" }}>

        {
          !TypeIcon2 || !nameIcon2
            ?
            <TypeIcon1 name={nameIcon1} color={"#fff"} size={24} /> :

            (condicion ?
              <TypeIcon1 name={nameIcon1} color={"#fff"} size={24} /> :
              <TypeIcon2 name={nameIcon2} color={"#fff"} size={24} />
            )
        }
      </View>
      <Text style={styles.text}>{
        condicion === undefined ? textTrue :
          (condicion ? textTrue : textFalse)}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({

  text: {
    color: "#ffffffa9",
    fontSize: 14

  },

  tarjetInfo: { flexDirection: "row", alignItems: "center", gap: "6" }
})