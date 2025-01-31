import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function Listwithmap() {
  const users = [
    {
      id: 1,
      name: 'Dishant',
    },
    {
      id: 2,
      name: 'Dev',
    },
    {
      id: 3,
      name: 'Anil',
    },
    {
      id: 4,
      name: 'Sem',
    },
    {
      id: 5,
      name: 'Tony',
    },
    {
      id: 6,
      name: 'Payback',
    },
    {
      id: 6,
      name: 'Payback',
    },
    {
      id: 6,
      name: 'kiiihbv',
    },
    {
      id: 6,
      name: 'ghgghj',
    },
    {
      id: 6,
      name: ' vbbn',
    },
    {
      id: 6,
      name: 'kjvjh',
    },
    {
      id: 6,
      name: ' vbbn',
    },
    {
      id: 6,
      name: 'kjvjh',
    },
    {
      id: 6,
      name: ' vbbn',
    },
    {
      id: 6,
      name: 'kjvjh',
    },
  ];
  return (
    <View>
      <Text>List With Map</Text>
      <ScrollView style={{marginBottom: 50}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export default Listwithmap;
