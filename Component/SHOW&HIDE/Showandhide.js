import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function Showandhide() {
  const [show, setshow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30}}>Showandhide</Text>
      <Button title="Toggle" onPress={() => setshow(!show)} />
      {show == true ? <User /> : null}
    </View>
  );
}

const User = () => {
  return (
    <View>
      <Text>User Component</Text>
    </View>
  );
};

export default Showandhide;
