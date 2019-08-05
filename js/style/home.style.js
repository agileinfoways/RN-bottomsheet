import { StyleSheet } from "react-native";
import { COLORS, CONST, FONTS } from "../global/constants.global";

export default  styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.WHITE
  },
  safeAreaStyle: {
    backgroundColor: COLORS.SCREEN_BG,
    flex: 1
  },
  mainItemClick: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white"
  },
  mainWrapper: {
    flexDirection: "row"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  detailWrapper: {
    paddingHorizontal: 15
  },
  name: {
    fontSize: 24,
    fontWeight: "200",
    color: COLORS.BLACK
  },
  email: {
    fontSize: 20,
    fontWeight: "100",
    color: COLORS.HEADER_BG,
    paddingVertical: 10
  },
  sheetHandle: {
    height: 4,
    borderRadius: 2,
    width: 25,
    backgroundColor: COLORS.BLACK,
    alignSelf: "center"
  },
  sheetHandleWrapper: {
    backgroundColor: COLORS.GRAYBLACK,
    paddingVertical: 15
  },
  flatList: {
    height: "100%",
    backgroundColor: COLORS.WHITE
  }
});