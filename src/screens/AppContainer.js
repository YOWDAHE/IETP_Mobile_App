import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import Login from './Login';
import Home from './Home';
import Functions from './Functions';
import HomeContainer from './HomeContainer';
import NuitrientContainer from './NuitrientContainer';
import SoilContainer from './SoilContainer';

const Tab = createBottomTabNavigator();
export default function AppContainer() {
    const HomeIcon = <Ionicons name="md-home-outline" size={24} color="black" />;
    return (
        <NavigationContainer independent >
            <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#172A3A', borderTopWidth: 0 },  }}>
                <Tab.Screen name="Home" component={HomeContainer}
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
                        },
                        headerShown: false,
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

            <Tab.Screen name="Soil Container" component={SoilContainer}
                    options={{
                        
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => focused ?<Fontisto name="island" size={24} color="white" />  : <Fontisto name="island" size={24} color="gray" />,
                        animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                            backgroundColor: '#172A3A',
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '200',
                        },
                        headerShown: false,
                }} />

        <Tab.Screen name="Nuitrient Container" component={NuitrientContainer}
                    options={{                        
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => focused ?<FontAwesome name="leaf" size={24} color="white" />  : <FontAwesome name="leaf" size={24} color="gray" />,
                        animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                            backgroundColor: '#172A3A',
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '200',
                        },
                        headerShown: false,
                }} />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})