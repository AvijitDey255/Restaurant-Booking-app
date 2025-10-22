import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../assets/Colors'
import { Ionicons } from '@expo/vector-icons'

const TabLayout = () => {
  return (
  <Tabs screenOptions={{
    headerShown:false,
      tabActiveTintColor: Colors.PRIMARY,
        tabInActiveTintColor: Colors.dark.text,
        tabBarStyle: {
          backgroundColor: Colors.SECONDARY,
          paddingBottom: 14,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
        },
      
  }} >
    <Tabs.Screen name='home' options={{title:"Home" , tabBarIcon:({color})=>(
      <Ionicons name='home'size={24} color={color} />
    ) 
    }} />
    <Tabs.Screen name='history' options={{title:"History"}} />
    <Tabs.Screen name='profile' options={{title:"Profile"}} />

  </Tabs>
  )
}

export default TabLayout