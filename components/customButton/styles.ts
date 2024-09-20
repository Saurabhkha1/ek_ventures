import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { Colors } from "@/constants/Colors";
import { fonts, FontSize } from "@/assets/fonts";
import { ms } from "@/utils/scalling";
const { height } = Dimensions.get("window");

interface styles {
  tochableStyle: ViewStyle;
  lableStyle: TextStyle;
}
const styles = StyleSheet.create({
  tochableStyle: {
    borderRadius: ms(6),
    marginVertical: ms(14),
    backgroundColor: Colors.ROYAL_BLUE,
    height: ms(41),
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lableStyle: {
    color: Colors.WHITE,
    marginHorizontal: ms(10),
    fontSize: FontSize.F16,
    fontFamily: fonts.SemiBold,
  },
});
export default styles;
