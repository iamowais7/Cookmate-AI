import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  
  const [loaded, error] = useFonts({
    'Outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),

  });
  return(
    <Stack>
      <Stack.Screen name="Landing"
        options={{
          headerShown:false
        }} />
    </Stack>
  )

  
}
