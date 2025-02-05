import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function DynamicButton() {
  const skills = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'JavaScript',
    },
    {
      id: 3,
      name: 'Node js',
    },
    {
      id: 4,
      name: 'Sql',
    },
    {
      id: 5,
      name: 'Python',
    },
  ];
  const [selectedradio, setselectedradio] = useState(1);
  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setselectedradio(item.id)}>
          <View style={styles.radiowrapper}>
            <View style={styles.radio}>
              {selectedradio === item.id ? (
                <View style={styles.radioBg}> </View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name} </Text>
          </View>
        </TouchableOpacity>
      ))}
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
export default DynamicButton;
