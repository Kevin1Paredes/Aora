import { StatusBar } from "expo-status-bar" ;
import { StyleSheet, Text, View } from "react-native" ;
import { Slot, Stack } from "expo-router"

const RootLayaut = () => { 
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}}/>
    </Stack>
  )
 }

export default RootLayaut;
