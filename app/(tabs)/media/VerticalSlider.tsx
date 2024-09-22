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
  const translateY = useRef(new Animated.Value(0)).current;
  const [shouldPlay, setShouldPlay] = useState<boolean>(true);
  const isFocused = useIsFocused();

  const currentIndexRef = useRef(0); // Ref to store the actual index

  let currentIdxRef = useRef(currentIdx || 0);
  let currentIndex = currentIdxRef.current;

  // Reset the index to 0 when the screen loses focus
  useEffect(() => {
    if (!isFocused) {
      currentIndexRef.current = 0;
      currentIdx = 0;
      setShouldPlay(false);
      // setCurrentIndex(0);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      setShouldPlay(true);
    }
  }, [isFocused]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 50, // Start gesture detection if swipe distance is more than 20
      onPanResponderMove: (_, gestureState) => {
        // Adjust translation based on gesture movement
        translateY.setValue(gestureState.dy - currentIndex * ITEM_HEIGHT);
      },

      onPanResponderRelease: (_, gestureState) => {
        const { dy } = gestureState;
        // Swiping up (next view
        if (dy < -100 && currentIndex < items.length - 1) {
          const nextIndex = currentIndex + 1;
          currentIndex = nextIndex;

          // Animate to the next view
          Animated.timing(translateY, {
            toValue: -nextIndex * ITEM_HEIGHT,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
        // Swiping down (previous view)
        else if (dy > 100 && currentIndex > 0) {
          const prevIndex = currentIndex - 1;

          currentIndex = prevIndex;

          // Animate to the previous view
          Animated.timing(translateY, {
            toValue: -prevIndex * ITEM_HEIGHT,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          // If the swipe isn't far enough, snap back to the current view
          Animated.timing(translateY, {
            toValue: -currentIndex * ITEM_HEIGHT,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;
  // Update the Y translation when the currentIndex changes
  useEffect(() => {
    translateY.setValue(-currentIndex * ITEM_HEIGHT);
  }, [translateY]);

  const renderItem = useCallback(
    (item: any, index: number) => (
      <View key={index} style={[styles.item, { backgroundColor: item?.color }]}>
        <VideoItem
          item={item}
          index={index}
          currentIndex={currentIndex}
          shouldPlay={shouldPlay}
        />
      </View>
    ),
    [currentIndex]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[{ transform: [{ translateY }] }, styles.content]} // Apply the animated Y translation
        {...panResponder.panHandlers} // Attach pan responder handlers to this view
      >
        {items?.map((item: any, index: number) => renderItem(item, index))}
      </Animated.View>
    </SafeAreaView>
  );
};
