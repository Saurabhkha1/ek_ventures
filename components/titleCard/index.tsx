import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import styles from "./styles";
import { DIAMOND } from "@/assets/svg";
import { ms } from "@/utils/scalling";


export type props = {
  title?: string;
  subTitle?: string;
  containerStyle?: ViewStyle;
  titleViewStyle?: ViewStyle;
  subTitleTxtStyle?: TextStyle;
  righViewStyle?: ViewStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftViewStyle?: ViewStyle;
  onTouchablePress?: () => void;
  subTitleViewStyle?: ViewStyle;
  subTitleIconStyle?: ViewStyle;
};

const TitleCard: React.FC<props> = ({
  title,
  subTitle,
  containerStyle,
  titleViewStyle,
  subTitleTxtStyle,
  righViewStyle,
  leftIcon,
  rightIcon,
  leftViewStyle,
  subTitleViewStyle,
  onTouchablePress,
  subTitleIconStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onTouchablePress}
      style={[styles.container, { ...containerStyle }]}
    >
      <View style={[styles.leftViewCss, { ...leftViewStyle }]}>{leftIcon}</View>

      <View style={[styles.txtViewStyle, { ...titleViewStyle }]}>
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={[styles.subTitleViewStyle, { ...subTitleViewStyle }]}>
          <Text style={[styles.subTitleStyle, { ...subTitleTxtStyle }]}>
            {subTitle}
          </Text>
          <View style={[styles.subTitleIconStyle, { ...subTitleIconStyle }]}>
            <DIAMOND width={ms(20)} height={ms(13)} />
            <DIAMOND width={ms(20)} height={ms(13)} />
            <DIAMOND width={ms(20)} height={ms(13)} />
          </View>
        </View>
      </View>

      <View style={[styles.rightViewStyle, { ...righViewStyle }]}>
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
};

export default TitleCard;
