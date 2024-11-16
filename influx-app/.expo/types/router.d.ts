/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/Profile` | `/Profile` | `/_sitemap` | `/doctorView` | `/doctorView/` | `/patientView` | `/patientView/` | `/patientView/Profile` | `/verification/LoginScreen` | `/verification/SignUpScreen`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
