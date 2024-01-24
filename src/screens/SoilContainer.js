import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Temputature from './Temputature';
import Home from './Home';
import SoilTypes from '../components/SoilTypes';
import SoilManual from './SoilManual';

const Clay = () => {
    return <SoilTypes type = "Clay Soil" 
    particle_size={"<0.002mm"}
    moisture={"24%"}
    nutrient={"Rich"}
    crop_types={["Carrot", "Pea","Teff", "Cabbage", "Lettuce", "Bean", "Pumpkin"]}
    description={"Heavy , high in nutrients, wet and cold in winter and baked dry in summer"}
    />
}

const Slit = () => {
    return <SoilTypes type = "Slit Soil" 
    particle_size={"0.002-0.5mm"}
    moisture={"> sandy , hold more water"}
    nutrient={"> sandy"}
    crop_types={["Cereals", "Fruits","Wheat", "Oats"]}
    description={"Fertile, light but moisture-retentive, and easily compacted"}
    />
}

const Sandy = () => {
    return <SoilTypes type = "Sandy Soil" 
    particle_size={"0.05-2mm"}
    moisture={"3-10% in dry 20-40% in wet"}
    nutrient={"Low"}
    crop_types={["Beetroot", "Cucumber","Tomatoes", "Watermelon"]}
    description={"Light , dry, warm, low in nutrients and often acidic"}
    />
}

const Loam = () => {
    return <SoilTypes type = "Loam Soil" 
    particle_size={"Clay<loam<sand"}
    moisture={"30-40% sandy 22-31% clayey"}
    nutrient={"Balanced"}
    crop_types={["Sugarcane", "Oilseed","Pepper", "Cotton", "Melon", "Strawberry"]}
    description={"Mixtures  of clay, sand and silt that avoid the of each type"}
    />
}

const Chalky = () => {
    return <SoilTypes type = "Chalky Soil" 
    particle_size={"large"}
    moisture={"Good"}
    nutrient={"Poor"}
    crop_types={["Grapes"]}
    description={"Very alkaline and maybe light or heavy."}
    />
}


export default function SoilContainer() {
    const Stack = createNativeStackNavigator();
  return (
          <Stack.Navigator>
              <Stack.Screen name="Soil Manual" component={SoilManual} options={{
                  animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              <Stack.Screen name="clay" component={Clay} options={{
                  animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              <Stack.Screen name="slit" component={Slit} options={{
                  animation: "slide_from_left", headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerBackTitleStyle: {
                      color: 'white'
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              <Stack.Screen name="sandy" component={Sandy} options={{
                  animation: "slide_from_left", headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerBackTitleStyle: {
                      color: 'white'
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              <Stack.Screen name="loam" component={Loam} options={{
                  animation: "slide_from_left", headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerBackTitleStyle: {
                      color: 'white'
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              <Stack.Screen name="chalky" component={Chalky} options={{
                  animation: "slide_from_left", headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerBackTitleStyle: {
                      color: 'white'
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              {/* <Stack.Screen name="Home" component={AppContainer} options={{
                  animation: "slide_from_left",
                  headerShown: false,
              }} /> */}
          </Stack.Navigator>
  )
}

