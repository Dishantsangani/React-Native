import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function Daynamicgrid() {
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
  ];
  return (
    <View>
      <Text style={{fontSize: 31}}>Daynamicgrid</Text>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {users.map(item => (
            <Text style={styles.item}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default Daynamicgrid;
