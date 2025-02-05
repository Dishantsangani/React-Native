import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

function Modalinrn() {
  const [show, setshow] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={show} animationType="fade">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modaltext}>Hello Dishant Sangani</Text>
            <Button title="close" onPress={() => setshow(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonview}>
        <Button title="Open" onPress={() => setshow(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modaltext: {
    fontSize: 30,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Modalinrn;
