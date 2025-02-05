import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function NeUseeffect() {
  const [Count, setCount] = useState(0);
  const [data, setdata] = useState(200);
  //   useEffect(() => {
  //     console.warn('Hello');
  //   }, [Count]);
  return (
    <View>
      <Text>
        {data} UseEffect Hooks {Count}
      </Text>
      <Button title="UpdateCount" onPress={() => setCount(Count + 1)} />
      <Users info={{data, Count}} />
    </View>
  );
}

const Users = props => {
  console.warn(props.info);
  useEffect(() => {
    console.warn('child prorps info ');
  }, [props.info.data]);
  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>User Component</Text>
    </View>
  );
};

export default NeUseeffect;
