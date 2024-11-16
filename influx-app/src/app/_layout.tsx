// app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack>
      {/* Wrap the Tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Add PatientDetails as a separate screen */}
      <Stack.Screen name="PatientDetails" options={{ title: 'Patient Details' }} />
    </Stack>
  );
}
