import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Temputature from './Temputature';
import Home from './Home';
import SoilTypes from '../components/SoilTypes';
import PlantNuitrientManual from './NuitrientManual';
import Nuitrient from '../components/NuitrientType';

const Teff = () => {
    return <Nuitrient 
        name={"Teff"}
        paragraph={"For indoor teff cultivation, a balanced fertilizer with a ratio like 10-10-10 or 14-14-14, providing nitrogen, phosphorus, and potassium, is suitable. Choose a water-soluble fertilizer for efficient nutrient absorption. Outdoors, similar fertilizer options apply, but adjust quantities based on soil test results to ensure optimal nutrient levels. Organic alternatives such as compost or well-rotted manure can enhance soil fertility for teff cultivation. "}
        types={[" Complete Fertilizers: Look for formulations like 10-10-10 or 14-14-14. These provide a balanced mix of         essential nutrients.", " Nitrogen Sources: Ammonium sulphate or urea are good nitrogen sources. Teff generally benefits from adequate nitrogen for healthy growth.", " Phosphorus and Potassium Sources: Phosphorus is crucial for root development, and potassium supports overall plant health.Fertilizers like triple superphosphate (for phosphorus) and muriate of potash (for potassium) can be used. ", " Organic Fertilizers: Consider incorporating well-rotted manure or compost into the soil. Organic options contribute nutrients and improve soil structure. "]}
    />
}

const Wheat = () => {
    return <Nuitrient 
        name={"Wheat"}
        paragraph={"Fertilizers for wheat cultivation play a vital role in supporting healthy growth and maximizing yields.  "}
        types={["Balanced Fertilizers: Opt for balanced formulations that provide a mix of nitrogen (N), phosphorus (P), and potassium (K). Ratios such as 10-10-10 or 14-14-14 can provide a well-rounded nutrient profile.", " Nitrogen Sources: Wheat typically benefits from sufficient nitrogen for robust growth. Common nitrogen sources include ammonium sulfate or urea. These fertilizers help promote vigorous foliage development.", "Phosphorus and Potassium Sources: Phosphorus is crucial for root development, while potassium supports overall plant health and disease resistance. Consider using fertilizers like triple superphosphate (phosphorus) and muriate of potash (potassium) to meet these needs.", " Organic Alternatives: Incorporating organic fertilizers, such as well-rotted manure or compost, can enhance soil fertility and contribute essential nutrients. Organic options provide long-term benefits by improving soil structure and nutrient retention.", "Soil Test-Based Adjustments: It's important to analyze soil nutrient levels through testing and adjust fertilizer quantities accordingly. Soil tests provide valuable insights into the specific nutrient requirements of your wheat crop, ensuring optimal nutrient application."]}
    />
}





export default function NuitrientContainer() {
    const Stack = createNativeStackNavigator();
  return (
          <Stack.Navigator>
              <Stack.Screen name="Plant Nuitrient Manual" component={PlantNuitrientManual} options={{
                  animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              <Stack.Screen name="teff" component={Teff} options={{
                  animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              <Stack.Screen name="wheat" component={Wheat} options={{
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
              
          </Stack.Navigator>
  )
}

