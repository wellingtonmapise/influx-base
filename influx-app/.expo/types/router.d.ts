/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(doctorView)` | `/(doctorView)/` | `/(doctorView)/Profile` | `/(patientView)` | `/(patientView)/` | `/(patientView)/Profile` | `/Profile` | `/_sitemap` | `/patientView/Profile` | `/sign-in` | `/sign-up`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
