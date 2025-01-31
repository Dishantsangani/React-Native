import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Userdata from './Component/Userdata';
import esstyles from './style';
let email = 'Dishant27@gmail.com';
function App() {
  const [name, setname] = useState('');

  let data = 'dishant';
  // const age = 22;
  // var name = 'Dishant';
  // const Fruit = val => {
  //   data = 20;
  //   console.error(data);
  // };
  const upbname = () => {
    setname('dev');
  };

  return (
    <View>
      {/* <Text style={{fontSize: 40}}>{data} </Text>
      <Button
        title="On Preess"
        onPress={() => Fruit('Dishant')}
        color={'green'}
      />
      <Button title="On Preess 2" onPress={Fruit} color={'red'} />
      <Userdata /> */}
      <Text style={{fontSize: 40, color: 'red'}}>{name}</Text>
      {/* <Text style={esstyles.textBox}>{name}</Text> */}
      <Text style={esstyles.textBox}>dishant</Text>
      <Button title="Update name" onPress={upbname} />
      <Childuser name={data} />
      <TextInput
        style={style.textInput}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => setname(text)}
      />
      <Button title="clear" onPress={() => setname('')} />
    </View>
  );
}
const style = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'red',
    borderWidth: 2,
    borderColor: 'red',
    margin: 10,
  },
});

const Childuser = props => {
  return (
    <View style={{backgroundColor: 'green', padding: 5}}>
      <Text>{props.name}</Text>
    </View>
  );
};
export default App;
