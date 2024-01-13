import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Ionicons } from '@expo/vector-icons';
import Login from './login';
import Home from './Home';
import Functions from './Functions';

const Tab = createBottomTabNavigator();
export default function AppContainer() {
    const HomeIcon = <Ionicons name="md-home-outline" size={24} color="black" />;
    return (
        <NavigationContainer independent >
            <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#172A3A', borderTopWidth: 0 },  }}>
               <Tab.Screen name="Home" component={Home}
                    options={{
                        
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => focused ? <Ionicons name="md-home" size={24} color="white" /> : <Ionicons name="md-home-outline" size={24} color="gray" />,
                        animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                            backgroundColor: '#172A3A',
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '200',
                        }
                }} />
                <Tab.Screen name="Functions" component={Functions}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => focused ? <Ionicons name="settings-sharp" size={24} color="white" /> : <Ionicons name="settings-outline" size={24} color="gray" />,
                        animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                            backgroundColor: '#172A3A',
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '200'
                        }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})