import React from "react";
import { View, TouchableOpacity } from "react-native";

import { LOGO } from "@/assets/svg";

import styles from "./styles";
import { ms } from "@/utils/scalling";

interface IconProps {
  icon: React.ReactNode;
  onPress: () => void;
}

export type Props = {
  icons: IconProps[];
  touchableStyle?: object;
};

const AppHeader: React.FC<Props> = ({ icons, touchableStyle }) => {
  return (
    <View style={styles.container}>

        
      <View style={styles.logoStyle}>
        <LOGO height={ms(40)} />
      </View>

      <View style={styles.rightViewStyle}>
        {icons?.map((iconProps, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.touchableStyle, touchableStyle]}
            onPress={iconProps.onPress}
          >
            {iconProps.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AppHeader;
