import { Link } from "expo-router";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function BodyLayout({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", alignItems: "center", backgroundColor: "#111111", borderRadius: 20, paddingBottom: 10 }}>
        <Text style={styles.text}>Rick&Morty</Text>
        <View style={styles.nav}>
          <Link href="/about" style={styles.link}>About</Link>
          <Link href="/about" style={styles.link}>Config</Link>
        </View>
        <StatusBar style="dark" />
      </View>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    color: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6
  },

  text: {
    color: '#ffff',
    fontSize: 40,
    fontWeight: '800',
    padding: 10
  },

  nav: {
    flexDirection: "row",
    gap: 10,
    width: "90%",
    justifyContent: "center",
  },

  link: {
    fontSize: 16,
    padding: 6,
    paddingHorizontal: 10,
    color: "#ffff",
    backgroundColor: '#551b97',
    borderRadius: 4
  }
});
