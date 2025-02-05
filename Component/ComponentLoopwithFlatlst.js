import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

function ComponentLoopwithFlatlst() {
  const users = [
    {
      id: 1,
      name: 'Dishant',
      email: 'dishant27@gmail.com',
    },
    {
      id: 2,
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: 3,
      name: 'Peter',
      email: 'Peter@gmail.com',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 27}}>ComponentLoopwithFlatlst</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Userdata item={item} />}
      />
    </View>
  );
}

const Userdata = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderBlockColor: 'orange',
    marginBottom: 10,
  },
});

export default ComponentLoopwithFlatlst;
