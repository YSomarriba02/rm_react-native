import { useEffect, useState } from 'react';
import fetchPersonajes from '../api/fetchData';
import { FlatList } from 'react-native';
import Card from '../components/Card';
import BodyLayout from '../components/BodyLayout';

export default function Index() {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetchPersonajes().then(r => setPersonajes(r))
  }, [])

  return (
    <BodyLayout>
      <FlatList
        style={{ width: '100%' }}
        data={personajes}
        renderItem={
          ({ item }) => (<Card url={item.image} name={item.name} species={item.species} status={item.status} id={item.id} />)
        }
        keyExtractor={p => String(p.id)}
      ></FlatList>
    </BodyLayout>

  );
}

