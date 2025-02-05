import React, {useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, View} from 'react-native';

function Loader() {
  const [show, setshow] = useState(false);
  const displayloader = () => {
    setshow(true);
    setTimeout(() => {
      setshow(false);
    }, 3000);
  };
  return (
    <View style={styles.main}>
      {show ? <ActivityIndicator size={40} color={'green'} /> : null}
      <Button title="Show" onPress={displayloader} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
