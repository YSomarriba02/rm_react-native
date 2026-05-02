import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import fetchPersonaje from "../../api/fetchPersonaje"
import { Image, StyleSheet, Text } from "react-native"
import { View } from "react-native"
import BodyLayout from "../../components/BodyLayout"

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ItemInfo from "../../components/ItemInfo"
import Entypo from '@expo/vector-icons/Entypo';

export default function Personaje() {
  const [personaje, setPersonaje] = useState(null)
  const { id } = useLocalSearchParams()

  useEffect(() => {
    async function getData() {
      const data = await fetchPersonaje({ id });
      setPersonaje(data)
    }
    getData()
  }, [id])



  if (!personaje) {
    return (
      <BodyLayout>
        <Text>Cargando...</Text>
      </BodyLayout>)
  }
  return (
    <BodyLayout>
      <View style={{ gap: 14 }}>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>{personaje.name}</Text>
          <Image source={{ uri: personaje.image }} style={{ height: 230, width: 230, borderRadius: 500 }} />
        </View>

        <View style={{ gap: 10, backgroundColor: "#2c2b2b", borderRadius: 18, paddingHorizontal: 12, paddingVertical: 10 }}>
          <ItemInfo TypeIcon1={AntDesign} nameIcon1={"heart"} TypeIcon2={MaterialCommunityIcons} nameIcon2={"emoticon-dead"} personaje={personaje} condicion={personaje.status === "Alive"} textTrue={"Esta vivo"} textFalse={"No esta vivo"} delay={1} />

          <ItemInfo TypeIcon1={FontAwesome5} nameIcon1={"male"} TypeIcon2={FontAwesome5} nameIcon2={"female"} personaje={personaje} condicion={personaje.gender === "Male"} textTrue={"Masculino"} textFalse={"Femenino"} delay={2} />

          <ItemInfo TypeIcon1={MaterialCommunityIcons} nameIcon1={"alien"} textTrue={personaje.species} delay={3} />

          <ItemInfo TypeIcon1={Entypo} nameIcon1={"location-pin"} textTrue={personaje.location.name} delay={4} />
        </View>
      </View>
    </BodyLayout>
  )
}


const styles = StyleSheet.create({
  title: {
    color: "#ffffffa9", fontSize: 22
    , fontWeight: "200",
    padding: 8
  },

  text: {
    color: "#ffffffa9",
    fontSize: 14

  },

  view2: {
    paddingTop: 20
  },

  tarjetInfo: { flexDirection: "row", alignItems: "center", gap: "6" }
})