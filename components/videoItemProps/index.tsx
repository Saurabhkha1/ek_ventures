import React, { useEffect, useState } from "react";
import { ResizeMode } from "react-native-video";
import { View, Text, TouchableOpacity } from "react-native";
import VideoPlayer from "expo-video-player";

import { LIKE, COMMENTS, MORE, VIDEOICON } from "@/assets/svg";

import { useIsFocused } from "@react-navigation/native";
import strings from "@/constants/Strings";
import styles from "./styles";
import { ms } from "@/utils/scalling";

interface VideoItemProps {
  item: {
    id?: number;
    urls?: {
      mp4: string;
    };
  };
  index?: number;
  currentIndex?: number;
}

const VideoItem: React.FC<VideoItemProps> = ({ item, index, currentIndex }) => {
  const isFocused = useIsFocused();
  const [shouldPlay, setShouldPlay] = useState<boolean>(true);



  useEffect(() => {
    if (!isFocused) {
      setShouldPlay(false);
    } else {
    
      setShouldPlay(true);
    }
  }, [isFocused]);

  return (
    <View style={[styles.container]}>
      <View style={styles.mediaHeaderStyle}>
        <Text style={styles.mediaLableStyle}>{strings.media}</Text>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <VIDEOICON />
        </TouchableOpacity>
      </View>

      <VideoPlayer
        slider={{ visible: false }}
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
