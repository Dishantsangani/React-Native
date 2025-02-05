import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function RadioButtons() {
  const [selectedradio, setselectedradio] = useState(2);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setselectedradio(1)}>
        <View style={styles.radiowrapper}>
          <View style={styles.radio}>
            {selectedradio === 1 ? <View style={styles.radioBg}> </View> : null}
          </View>
          <Text style={styles.radioText}>Radio </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setselectedradio(2)}>
        <View style={styles.radiowrapper}>
          <View style={styles.radio}>
            {selectedradio === 2 ? <View style={styles.radioBg}> </View> : null}
          </View>
          <Text style={styles.radioText}>Radio2 </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radiowrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    margin: 4,
    borderRadius: 20,
  },
});
export default RadioButtons;
