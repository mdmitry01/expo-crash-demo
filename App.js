import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as TaskManager from 'expo-task-manager'
import { startLocationUpdatesAsync, LocationAccuracy } from 'expo-location'

const LOCATION_UPDATES_TASK_NAME = 'location-updates'

TaskManager.defineTask(LOCATION_UPDATES_TASK_NAME, ({ data: { locations }, error }) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('Received new locations', locations)
})

startLocationUpdatesAsync(LOCATION_UPDATES_TASK_NAME, {
  accuracy: LocationAccuracy.High,
  foregroundService: {
    notificationTitle: 'foo',
    notificationBody: 'bar',
  },
}).catch(console.error)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
