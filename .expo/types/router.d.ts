/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(splash)` | `/(splash)/styles` | `/(tabs)` | `/(tabs)/` | `/(tabs)/account` | `/(tabs)/account/styles` | `/(tabs)/games` | `/(tabs)/games/styles` | `/(tabs)/media` | `/(tabs)/media/VerticalSlider` | `/(tabs)/media/styles` | `/(tabs)/report` | `/(tabs)/report/styles` | `/_sitemap` | `/account` | `/account/styles` | `/games` | `/games/styles` | `/media` | `/media/VerticalSlider` | `/media/styles` | `/report` | `/report/styles` | `/styles`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
