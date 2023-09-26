import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import formatRupees from "../utils/function";
import Close from "../assets/png/close.png";

const DetailModal = (props) => {
  console.log("props.modalData", props.modalData);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onBackdropPress={() => {
        props.setModalVisible(false);
      }}
      style={styles.modal}
    >
      <View style={styles.mainView}>
        <View style={styles.innerView}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => {
                props.setModalVisible(false);
              }}
              style={styles.cross}
            >
              <Image source={Close} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.details}>
              <View style={styles.itemLine}>
                <View style={{ flexDirection: "row", marginRight: 10 }}>
                  <Image
                    source={{ uri: props?.modalData?.image }}
                    style={styles.icon}
                  />
                  <Text style={styles.titleText}>{props.modalData.name}</Text>
                </View>
                <Text
                  style={[
                    styles.grayBoldText,
                    { color: "green", fontSize: 20 },
                  ]}
                >
                  {"\u20B9"}
                  {props.modalData.current_price}
                </Text>
              </View>

              <View style={styles.itemLine}>
                <Text style={styles.grayBoldText}>Market Rank</Text>
                <Text style={styles.blackText}>
                  #{props.modalData.market_cap_rank}
                </Text>
              </View>
              <View style={styles.itemLine}>
                <Text style={styles.grayBoldText}>Circulating Supply</Text>
                <Text style={styles.blackText}>
                  {formatRupees(props.modalData.circulating_supply)}{" "}
                  {props.modalData.symbol}
                </Text>
              </View>
              <View style={styles.itemLine}>
                <Text style={styles.grayBoldText}>Lowest Today </Text>
                <Text style={styles.blackText}>
                  {"\u20B9"}
                  {props.modalData.low_24h}
                </Text>
              </View>
              <View style={styles.itemLine}>
                <Text style={styles.grayBoldText}>Highest Today </Text>
                <Text style={styles.blackText}>
                  {"\u20B9"}
                  {props.modalData.high_24h}
                </Text>
              </View>
              <View style={styles.itemLine}>
                <Text style={styles.grayBoldText}>All Time Highest </Text>
                <Text style={styles.blackText}>
                  {"\u20B9"}
                  {props.modalData.ath.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  mainView: {
    justifyContent: "flex-end",
    flex: 1,
  },
  innerView: {
    backgroundColor: "white",
    paddingTop: 18,
    paddingBottom: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    maxHeight: "75%",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#eee",
  },

  cross: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginBottom: 20,
    marginRight: 10,
  },
  details: {
    backgroundColor: "#dcf2f0",
    padding: 10,
    borderRadius: 10,
  },
  itemLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
    borderRadius: 15,
  },
  blackText: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
  },
  grayBoldText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "700",
  },
  crossText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  titleText: {
    alignSelf: "center",
    fontSize: 18,
    color: "black",
    fontWeight: "700",
  },
});

export default DetailModal;
