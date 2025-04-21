import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { LogtoProvider, LogtoConfig } from '@logto/rn';
import React from 'react';

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'Outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  const config: LogtoConfig = {
    endpoint: '<your-logto-endpoint>',
    appId: '<your-application-id>',
  };

  if (!loaded) return null; // Ensure fonts are loaded before rendering

  return (
    <LogtoProvider config={config}>
    <Stack>
      <Stack.Screen
        name="Landing"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    </LogtoProvider>
  );
}
