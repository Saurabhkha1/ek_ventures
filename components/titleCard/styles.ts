import { StyleSheet, ViewStyle } from "react-native";

import { Colors } from "@/constants/Colors";
import { fonts, FontSize } from "@/assets/fonts";
import { ms } from "@/utils/scalling";

interface styles {
  container: ViewStyle;
  leftViewCss: ViewStyle;
  txtViewStyle: ViewStyle;
  rightViewStyle: ViewStyle;
  subTitileStyle: ViewStyle;
  subTitleViewStyle: ViewStyle;
  subTitleIconStyle: ViewStyle;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_YELLOW,
    height: ms(64),
    flexDirection: "row",
    borderRadius: ms(12),
    marginTop: ms(20),
  },
  leftViewCss: {
    backgroundColor: Colors.MINT_GREEN,
    width: ms(56),
    borderTopLeftRadius: ms(12),
    borderBottomLeftRadius: ms(12),
    justifyContent: "center",
    alignItems: "center",
  },

  txtViewStyle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    color: Colors.JET_BLACK,
    fontSize: FontSize.F17,
  },

  titleStyle: {
    fontSize: FontSize.F17,
    color: Colors.JET_BLACK,
    fontFamily: fonts.SemiBold,
  },

  subTitleStyle: {
    fontSize: FontSize.F14,
    color: Colors.JET_BLACK,
    marginHorizontal: ms(2),
    fontFamily: fonts.SproRegular,
  },

  rightViewStyle: {
    justifyContent: "center",
    paddingHorizontal: ms(10),
  },

  subTitleViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  subTitleIconStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: ms(4),
  },
});
export default styles;
