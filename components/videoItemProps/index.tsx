import React from "react";
import { ResizeMode } from "react-native-video";
import { View, Text, TouchableOpacity, ColorValue } from "react-native";
import VideoPlayer from "expo-video-player";
import { LIKE, COMMENTS, MORE, VIDEOICON } from "@/assets/svg";
import strings from "@/constants/Strings";
import styles from "./styles";
import { ms } from "@/utils/scalling";
import { Colors } from "@/constants/Colors";

interface VideoItemProps {
  item: {
    id?: number;
    urls?: {
      mp4: string;
    };
  };
  index?: number;
  currentIndex?: number;
  shouldPlay:boolean,
  backgroundColor: ColorValue; // Using ColorValue type

}

const VideoItem: React.FC<VideoItemProps> = ({ item, index, currentIndex,shouldPlay,backgroundColor }) => { 
  return (
    <View style={[styles.container]}>
      <View style={styles.mediaHeaderStyle}>
        <Text style={styles.mediaLableStyle}>{strings.media}</Text>
        <TouchableOpacity style={{ justifyContent: "center",}}>
          <VIDEOICON />
        </TouchableOpacity>
      </View>

      <VideoPlayer
          style={styles.videoPlayerStyle}
        slider={{ visible: false }}
        icon={{
          size: ms(30),
          color: Colors.WHITE,
        }}
        timeVisible={false}
        fullscreen={{ visible: false }}
        textStyle={{ fontSize: ms(10) }}
        videoProps={{
          shouldPlay: index === currentIndex && shouldPlay,
          resizeMode: ResizeMode.COVER,
          source: {
            uri: item?.urls?.mp4 || "",
            },
        }}
      />

      <View style={styles.overlayContainer}>
        <View style={styles.iconContainer}>
          <LIKE />
          <Text style={styles.iconText}>123</Text>
        </View>
        <View style={styles.iconContainer}>
          <COMMENTS />
          <Text style={styles.iconText}>123</Text>
        </View>
        <View style={styles.iconContainer}>
          <MORE />
        </View>
      </View>
    </View>
  );
};

export default VideoItem;
