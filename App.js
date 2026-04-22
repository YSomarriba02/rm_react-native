import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import fetchPersonajes from './api/fetchData';
import { FlatList } from 'react-native';
import Card from './components/Card';

export default function App() {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetchPersonajes().then(r => setPersonajes(r))
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Rick&Morty</Text>
        <StatusBar style="dark" />
        <FlatList
          style={{ width: '100%' }}
          data={personajes}
          renderItem={
            ({ item }) => (<Card url={item.image} name={item.name} species={item.species} status={item.status} />)
          }
          keyExtractor={p => p.id}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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

  button: {
    width: 300,
    padding: 20,
    backgroundColor: '#4143a8',
    borderRadius: 10
  }
});
