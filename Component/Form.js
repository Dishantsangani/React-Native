import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function Form() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [display, setDisplay] = useState(false);
  const restdata = () => {
    setDisplay(false);
    setemail('');
    setname('');
    setpassword('');
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>React Form</Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.textInput}
        onChangeText={text => setname(text)}
        value={name}
      />
      <TextInput
        placeholder="Enter Your Email"
        onChangeText={text => setemail(text)}
        secureTextEntry={true}
        style={styles.textInput}
        value={email}
      />
      <TextInput
        placeholder="Enter Your Password"
        onChangeText={text => setpassword(text)}
        style={styles.textInput}
        value={password}
      />

      <View style={{marginBottom: 10}}>
        <Button
          color={'green'}
          title="Print Value"
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="clear Value" onPress={() => restdata()} />

      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 20}}>UserName:{name}</Text>
            <Text style={{fontSize: 20}}>UserEmail:{email}</Text>
            <Text style={{fontSize: 20}}>UserPassword:{password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

export default Form;
