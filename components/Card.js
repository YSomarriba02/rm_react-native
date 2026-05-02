import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Card({ name, status, species, url, id }) {

    const router = useRouter()
    return (
        <View style={styles.view}>
            <Pressable style={styles.view} onPress={() => {
                router.push(`/personaje/${id}`)
            }}>
                <Image source={{ uri: url }} style={styles.image} />
                <Text style={styles.text}>{name}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    view: {
        marginBottom: 12, backgroundColor: '#272727', width: '100%', padding: 10, borderRadius: 26,
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 18
    },

    text: {
        fontSize: 20,
        color: '#ffff',
        width: '60%'
    }
}
)