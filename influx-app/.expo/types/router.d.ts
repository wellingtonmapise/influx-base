/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/auth` | `/auth/sign-in` | `/auth/sign-up` | `/doctorView` | `/doctorView/` | `/doctorView/Profile` | `/patientView` | `/patientView/` | `/patientView/Profile`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
