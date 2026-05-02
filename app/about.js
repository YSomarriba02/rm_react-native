import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BodyLayout from "../components/BodyLayout";

export default function About() {
  return (
    <BodyLayout>
      <View style={{ backgroundColor: '#000', flex: 1, padding: 10, alignItems: "center" }}>
        <Text style={{ color: '#ffffff', fontSize: 20 }}>Probando otra ruta</Text>
      </View>
    </BodyLayout>

  )
}