import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";

interface styles {
  container: ViewStyle;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
