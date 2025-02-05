import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

function StyleButton() {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>BUTTON</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>success</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#bbb',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 0.5,
  },
  success: {
    backgroundColor: 'green',
  },
});

export default StyleButton;
