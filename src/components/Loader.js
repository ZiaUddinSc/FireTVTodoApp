import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator,StatusBar} from 'react-native';

const Loader = props => {
  const {loading, ...attributes} = props;

  return (
    <Modal
      transparent={true}
      visible={loading}
      backdropColor="transparent"
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.centeredView}>
      <StatusBar barStyle="dark-content" backgroundColor={'#4A4B4D'} />  
        <View style={styles.modalView}>
          <ActivityIndicator size="large" color="#FFF" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: '#009688',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 1,
  },
});
