import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function Pressablern() {
  return (
    <View style={styles.main}>
      <Pressable
        // onPress={() => console.warn('Normal pres')}
        // onLongPress={() => console.warn('Normal long predss')}
        onPressIn={() => console.warn('Pres in')}
        onPressOut={() => console.warn('On press Out')}>
        <Text style={styles.pressablebtn}>App</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressablebtn: {
    backgroundColor: 'blue',
    color: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: 'black',
    elevation: 5,
  },
});
