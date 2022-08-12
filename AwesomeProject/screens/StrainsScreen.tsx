import { useQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { LogBox } from 'react-native';


export default function StrainsScreen() {

  console.log("hola")
  const { status, data } = useQuery(["strains"], () => fetch('http://localhost:3002/strains')
    .then((response) => response.json())
    .then((json) => {
      return json.movies;
    }));

  console.log(data)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
