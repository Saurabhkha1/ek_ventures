import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { Colors } from "@/constants/Colors";
import { fonts, FontSize } from "@/assets/fonts";
import { ms } from "@/utils/scalling";
const { height } = Dimensions.get("window");

interface styles {
  safeArea: ViewStyle;
  overlayContainer: ViewStyle;
  videoContainer: ViewStyle;
  iconContainer: ViewStyle;
  iconText: TextStyle;
}
const styles = StyleSheet.create({
  overlayContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: ms(80),
    zIndex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: ms(20),
  },
  iconContainer: {
    alignItems: "center",
    paddingVertical: ms(10),
  },
  iconText: {
    marginTop: ms(6),
    color: Colors.WHITE,
  },
  container: {
    height: height,
   // justifyContent: "center",
  },

  mediaHeaderStyle: {
    position: "absolute",
    top: ms(70),
    zIndex: 1,
    flexDirection: "row",
    marginHorizontal: ms(20),
  },
  mediaLableStyle: {
    flex: 1,
    color:Colors.WHITE,
    fontSize: FontSize.F23,
    fontFamily: fonts.SemiBold,
  },
});
export default styles;
