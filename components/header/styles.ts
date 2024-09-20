import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";
import { ms } from "@/utils/scalling";

interface styles {
  container: ViewStyle;
  logoStyle: ViewStyle;
  rightViewStyle: ViewStyle;
  touchableStyle: ViewStyle;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    height: ms(60),
    flexDirection: "row",
    alignItems: "center",
  },
  logoStyle: { justifyContent: "center", flex: 1.7 },
  rightViewStyle: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: ms(6),
  },
  touchableStyle: { flex: 1, alignItems: "flex-end" },

  
  
});
export default styles;
