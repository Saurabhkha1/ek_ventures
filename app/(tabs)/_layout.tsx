import React, { useRef } from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import {
  AVATAR,
  FILL_MEDIA,
  GAME_ICON,
  HOME,
  HOME_FILL,
  MEDIA,
  STATS,
} from "@/assets/svg";
import { StyleSheet, View, Text } from "react-native";
import { fonts, FontSize } from "@/assets/fonts";
import strings from "@/constants/Strings";
import { ms } from "@/utils/scalling";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeTabRef = useRef();

  const getTabIconColor = (routeName: string, focused: boolean) => {
    if (routeName === "media") {
      return focused ? Colors.WHITE : Colors.PITCH_BLACK; // Media tab color
    }
    return focused
      ? Colors.ROYAL_BLUE
      : activeTabRef.current === 1
      ? Colors.WHITE
      : Colors.PITCH_BLACK; // Other tabs default color
  };

  return (
    <Tabs
      screenOptions={({ route, navigation }) => {
        activeTabRef.current = navigation.getState().index;
        return {
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: [
            styles.tabsStyle,
            route.name == "media" && styles.tabBarBagStyle,
          ],
        };
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabBarIconStyle}>
              {focused && <View style={styles.focusedStyle} />}

              {focused ? (
                <HOME_FILL
                  height={ms(26)}
                  width={ms(30)}
                  name={focused ? "home" : "home-outline"}
                  color={getTabIconColor("Home", focused)}
                />
              ) : (
                <HOME
                  height={ms(26)}
                  width={ms(30)}
                  name={focused ? "home" : "home-outline"}
                  color={getTabIconColor("home", focused)}
                />
              )}
              <Text
                style={[
                  styles.labelStyle,
                  activeTabRef.current === 1 && styles.labelColorStyle,
                ]}
              >
                {strings.home}
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="media"
        options={{
          title: "Media",

          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabBarIconStyle}>
              {focused && (
                <View
                  style={[
                    styles.focusedStyle,
                    { backgroundColor: Colors.WHITE },
                  ]}
                />
              )}
              {focused ? (
                <FILL_MEDIA
                  height={ms(26)}
                  width={ms(30)}
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={getTabIconColor("media", focused)}
                />
              ) : (
                <MEDIA
                  height={ms(26)}
                  width={ms(30)}
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={getTabIconColor("media", focused)}
                />
              )}

              <Text
                style={[
                  styles.labelStyle,
                  activeTabRef.current === 1 && styles.labelColorStyle,
                ]}
              >
                {strings.media}
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="games"
        options={() => ({
          title: "Games",
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconStyle}>
              {focused && <View style={styles.focusedStyle} />}

              <GAME_ICON
                height={ms(26)}
                width={ms(50)}
                name={focused ? "code-slash" : "code-slash-outline"}
                color={getTabIconColor("Games", focused)}
              />

              <Text
                style={[
                  styles.labelStyle,
                  activeTabRef.current === 1 && styles.labelColorStyle,
                ]}
              >
                {strings.games}
              </Text>
            </View>
          ),
        })}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Reports",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabBarIconStyle}>
              {focused && <View style={styles.focusedStyle} />}
              <STATS
                height={ms(26)}
                width={ms(30)}
                name={focused ? "code-slash" : "code-slash-outline"}
                color={getTabIconColor("Reports", focused)}
              />

              <Text
                style={[
                  styles.labelStyle,
                  activeTabRef.current === 1 && styles.labelColorStyle,
                ]}
              >
                {strings.reports}
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Accont",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabBarIconStyle}>
              {focused && <View style={styles.focusedStyle} />}
              <AVATAR
                height={ms(26)}
                width={ms(30)}
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
              <Text
                style={[
                  styles.labelStyle,
                  activeTabRef.current === 1 && styles.labelColorStyle,
                ]}
              >
                {strings.account}
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabsStyle: {
    height: ms(60),
    width: "100%",
    borderTopColor: "#ccc",
  },
  tabBarIconStyle: {
    alignItems: "center",
  },

  tabBarBagStyle: {
    backgroundColor: Colors.SLATE_GRAY,
  },
  labelColorStyle: { color: Colors.WHITE },
  labelStyle: {
    marginTop: ms(2),
    fontSize: FontSize.F10,
    fontFamily: fonts.SproRegular,
  },
  focusedStyle: {
    position: "absolute",
    top: ms(-6),
    height: ms(3),
    width: ms(50),
    backgroundColor: Colors.ROYAL_BLUE,
  },
});
