import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import { VideoRef } from "react-native-video";
import { useNavigation } from "@react-navigation/native";

import AppHeader from "../../components/header/_layout";

import TitleCard from "@/components/titleCard";
import {
  ARROW_RIGHT,
  ARROW_RIGHT_BLACK,
  HEART,
  MESSAGE,
  NOTIFICATION,
  SEARCH,
} from "@/assets/svg";

import { fonts, FontSize } from "@/assets/fonts";
import { Colors } from "@/constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { requestFetchVideo } from "@/reducer/videoReducer";
import CustomBtn from "@/components/customButton/_layout";
import strings from "@/constants/Strings";
import { ms } from "@/utils/scalling";

export default function HomeScreen() {
  const { videoList, error, isLoading } = useSelector(
    (state: any) => state.videoReducer
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const videoRef = useRef<VideoRef>(null);

  useEffect(() => {
   dispatch(requestFetchVideo());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.subContainerStyle}>
          {/* header style */}
          <AppHeader
            icons={[
              {
                icon: <SEARCH />,
                onPress: () => console.log("Icon 1 Pressed"),
              },
              {
                icon: <MESSAGE />,
                onPress: () => console.log("Icon 2 Pressed"),
              },
              {
                icon: <NOTIFICATION />,
                onPress: () => console.log("Icon 3 Pressed"),
              },
            ]}
          />

          <View style={styles.lineStyle}></View>
          <Text style={styles.userNameStyle}>{"Hello John,"}</Text>
          <Text style={styles.subHeaderStyle}>{strings.please_tap_below}</Text>

          {/* large font title card */}

         
          <TitleCard
            title={strings.large_font_title}
            subTitle={strings.sub_title}
            leftIcon={<HEART />}
            rightIcon={<ARROW_RIGHT width={ms(16)} height={ms(16)} />}
            onTouchablePress={() => console.log("click")}
          />
   
          <View style={styles.lineStyle} />

          {/* Media lable View */}

          <View style={styles.mediaLableViewStyle}>
            <ARROW_RIGHT_BLACK />
            <Text style={styles.mediaLableStyle}>{strings.media}</Text>
          </View>

          {/* showed Video Vide  */}
          <View style={styles.flatListViewStyle}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={videoList}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("media", { indexData: index,id:item.id })
                    }
                    key={item.id}
                    activeOpacity={0.7}
                    style={styles.videoTouchableStyle}
                  >
                    <View pointerEvents="none" style={styles.videoViewStyle}>
                      <VideoPlayer
                        style={styles.videoPlayerStyle}
                        icon={{
                          size: ms(30),
                        }}
                        slider={{ visible: false }}
                        timeVisible={false}
                        fullscreen={{ visible: false }}
                        textStyle={{ fontSize: ms(10) }}
                        videoProps={{
                          shouldPlay: false,
                          resizeMode: ResizeMode.COVER,
                          source: {
                            uri: `${item.urls.mp4}`,
                          },
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* Button view */}
          <CustomBtn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingTop: Platform.OS === "android" ? ms(40) : 0,
  },
  userNameStyle: {
    textAlign: "center",
    fontSize: FontSize.F22,
    color: Colors.JET_BLACK,
    fontFamily: fonts.SemiBold,
    marginVertical: ms(12),
  },

  subHeaderStyle: {
    textAlign: "left",
    fontSize: FontSize.F20,
    fontWeight: "500",
    color: Colors.JET_BLACK,
    marginTop: ms(16),
    fontFamily: fonts.SemiBold,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: ms(8),
  },

  lineStyle: {
    backgroundColor: Colors.GRAY,
    width: "100%",
    height: ms(0.5),
    marginTop: ms(20),
  },

  subContainerStyle: { marginHorizontal: ms(16) },

  mediaLableStyle: {
    color: Colors.JET_BLACK,
    fontWeight: "600",
    marginHorizontal: ms(10),
    fontSize: FontSize.F20,
    fontFamily: fonts.SemiBold,
  },
  videoTouchableStyle: {
    borderRadius: ms(12),
    marginHorizontal: ms(4),
    marginVertical: ms(16),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  flatListViewStyle: { alignItems: "center" },
  videoPlayerStyle: {
    width: ms(170),
    height: ms(200),
  },
  videoViewStyle: {
    borderRadius: ms(12),
    overflow: "hidden",
  },
  scrollViewStyle: { flex: 1 },

  mediaLableViewStyle: {
    flexDirection: "row",
    marginVertical: ms(14),
    alignItems: "center",
  },

  shadowEfect:{
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4, // Increased height for better shadow visibility
        },
        shadowOpacity: 0.3, // Increased opacity for better visibility
        shadowRadius: 6, // Increased radius for a softer shadow
      },
      android: {
        elevation: 8, // Increased elevation for better visibility
      }
  })}
});
