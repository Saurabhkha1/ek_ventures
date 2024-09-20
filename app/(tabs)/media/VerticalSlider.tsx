import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Dimensions,
  PanResponder,
  Animated,
  SafeAreaView,
} from "react-native";
import VideoItem from "../../../components/videoItemProps";

import { useIsFocused } from "@react-navigation/native";
import styles from "./styles";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height;

interface VerticalSliderProps {
  items?: Array<any>;
  currentIdx?: number;
}

export const VerticalSlider: React.FC<VerticalSliderProps> = ({
  items,
  currentIdx,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(currentIdx || 0);
  const translateY = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();

  useEffect(() => {
    setCurrentIndex(currentIdx ?? 0);
  }, [currentIdx]);

  useEffect(() => {
    if (!isFocused) {
      setCurrentIndex(0);
    }
  }, [isFocused]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 20,
      onPanResponderMove: (_, gestureState) => {
        // Set the translation based on the gesture
        translateY.setValue(gestureState.dy - currentIndex * ITEM_HEIGHT);
      },
      onPanResponderRelease: (_, gestureState) => {
        const { dy } = gestureState;

        if (dy < -100 && currentIndex < items?.length - 1) {
          setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, items?.length || 0 - 1)
          );
        } else {
          setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }

        // Animate back to the correct position
        Animated.timing(translateY, {
          toValue: -currentIndex * ITEM_HEIGHT,
          duration: 300,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  // Update translateY based on currentIndex
  const animatedStyle = {
    transform: [
      {
        translateY: Animated.add(
          translateY,
          new Animated.Value(-currentIndex * ITEM_HEIGHT)
        ),
      },
    ],
  };

  const renderItem = useCallback(
    (item: any, index: number) => (
      <View key={index} style={[styles.item, { backgroundColor: item?.color }]}>
        <VideoItem item={item} index={index} currentIndex={currentIndex} />
      </View>
    ),
    [currentIndex]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[animatedStyle, styles.content]}
        {...panResponder.panHandlers}
      >
        {items?.map((item: any, index: number) => renderItem(item, index))}
      </Animated.View>
    </SafeAreaView>
  );
};

