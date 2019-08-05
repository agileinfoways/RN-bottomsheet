import React, { Component } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { Header } from "react-navigation";
import BottomSheet from "reanimated-bottom-sheet";
import { CONST } from "../global/constants.global";
import { GM } from "../global/methods.global";
import UsersData from "../store/UsersData.js";
import styles from "../style/home.style.js";

export default class HomeComponent extends Component {
  constructor() {
    super();
  }

  renderRowForAndroid = item => {
    return (
      <RectButton
        style={styles.mainItemClick}
        onPress={() => {
          alert(JSON.stringify(item));
        }}
      >
        <View style={styles.mainWrapper}>
          <Image
            style={styles.image}
            resizeMode={"contain"}
            source={{
              uri: item.picture.medium
            }}
          />
          <View style={styles.detailWrapper}>
            <Text style={styles.name}>
              {item.name.first + " " + item.name.last}
            </Text>
            <RectButton onPress={() => alert(item.email)}>
              <Text style={styles.email}>{item.email}</Text>
            </RectButton>
          </View>
        </View>
      </RectButton>
    );
  };

  renderRowForIOS = item => {
    return (
      <TouchableOpacity
        style={styles.mainItemClick}
        onPress={() => {
          alert(JSON.stringify(item));
        }}
      >
        <View style={styles.mainWrapper}>
          <Image
            style={styles.image}
            resizeMode={"contain"}
            source={{
              uri: item.picture.medium
            }}
          />
          <View style={styles.detailWrapper}>
            <Text style={styles.name}>
              {item.name.first + " " + item.name.last}
            </Text>
            <Text style={styles.email} onPress={() => alert(item.email)}>
              {item.email}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderInner = () => (
    <FlatList
      style={styles.flatList}
      data={UsersData.results}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      renderItem={({ item }) => {
        return CONST.DEVICE_OS == "ios"
          ? this.renderRowForIOS(item)
          : this.renderRowForAndroid(item);
      }}
    />
  );

  renderHeader = () => (
    <View
      style={styles.sheetHandleWrapper}
      ref={ref => {
        this.bottomSheetHeader = ref;
      }}
      onLayout={({ nativeEvent }) => {
        if (this.bottomSheetHeader) {
          this.bottomSheetHeader.measure(
            (x, y, width, height, pageX, pageY) => {
              GM.showLog("handle height view ==> " + height);
            }
          );
        }
      }}
    >
      <View style={styles.sheetHandle} />
    </View>
  );

  render() {
    let calculatedHeight = CONST.DEVICE_HEIGHT;
    GM.showLog("screen height ==> " + calculatedHeight);

    calculatedHeight = calculatedHeight - Header.HEIGHT;
    GM.showLog("header height ==> " + Header.HEIGHT);

    let statusbarHeight = GM.getStatusBarHeight();
    GM.showLog("statusbar height ==> " + statusbarHeight);
    calculatedHeight = calculatedHeight - statusbarHeight;

    // calculatedHeight = calculatedHeight - 34; // Subtracting 34 from
    // GM.showLog('final calculated height ==> ' + calculatedHeight);

    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              GM.showAlertWithButtonCallback("Test Message", () => {
                alert("Button pressed");
              });
            }}
          >
            <Text>{CONST.TITLE_HOME} </Text>
          </TouchableOpacity>
          <BottomSheet
            snapPoints={["20%", calculatedHeight]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={0}
          />
        </View>
      </SafeAreaView>
    );
  }
}