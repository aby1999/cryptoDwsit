import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const DetailModal = props => {
  console.log('props.modalData', props.modalData);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => {
                props.setModalVisible(false);
              }}
              style={styles.cross}>
              <Text> X</Text>
            </TouchableOpacity>
            <View style={styles.details}>
              <Text>{props.modalData.name}</Text>
              <Text>{props.modalData.ath}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#edf5f4',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cross: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#dcf2f0',
    padding: 10,
    borderRadius: 10,
  },
});

export default DetailModal;
