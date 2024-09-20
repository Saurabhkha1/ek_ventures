import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, Dimensions } from "react-native";
import { useSelector } from "react-redux";

import styles from "./styles";
import { VerticalSlider } from "./VerticalSlider";

// Define types for video item
interface VideoItem {
  id: number;
  urls: {
    mp4: string,
  };
}

// Define types for route params
interface RouteParams {
  indexData?: number;
}
const { height } = Dimensions.get('window');

const VideoDetail: React.FC = () => {
  const route = useRoute();
 const {indexData}=route?.params||0
  
  const { videoList } = useSelector((state: any) => state.videoReducer);




  return (
    <SafeAreaView style={[styles.safeArea, { height: height }]}>
      <VerticalSlider
        items={videoList}
        currentIdx={indexData}
      />
    </SafeAreaView>

  );
}

export default VideoDetail;
