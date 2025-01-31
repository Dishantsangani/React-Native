import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

function FlatLists() {
    
  const users = [
    {id: 1, name: 'Anil'},
    {id: 2, name: 'Sam'},
    {id: 3, name: 'Dishant'},
    {id: 4, name: 'Bruce'},
  ];

  return (
    <View>
      <Text style={{fontSize: 31}}>FlatLists</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
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

export default FlatLists;
