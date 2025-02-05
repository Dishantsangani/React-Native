import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

function Response() {
  return (
    <View style={style.main}>
      <View style={style.box1}>
        <View style={style.innerbox1}></View>
        <View style={style.innerbox2}></View>
        <View style={style.innerbox3}></View>
      </View>
      <View style={style.box2}></View>
      <View style={style.box3}></View>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  box2: {
    flex: 1,
    backgroundColor: 'white',
  },
  box3: {
    flex: 1,
    backgroundColor: 'red',
  },
  box4: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerbox1: {
    flex: 1,
    margin: 10,
    backgroundColor: 'orange',
  },
  innerbox2: {
    flex: 1,
    margin: 10,
    backgroundColor: 'skyblue',
  },
  innerbox3: {
    flex: 1,
    margin: 10,
    backgroundColor: 'green',
  },
});
export default Response;
