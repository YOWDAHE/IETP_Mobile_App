import {View, Text, StyleSheet, ScrollView,ImageBackground, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { teal } from '@mui/material/colors'

const SoilManual = () => {
    const navigation = useNavigation()
    return <ScrollView><View style = {styles.container}>
        <Text style = {{color : 'white', fontSize : 18, fontStyle : 'italic'}}>"The best way to tell what type of soil you have is by touching it and rolling it in your hands."</Text>
        <TouchableOpacity onPress={() => navigation.navigate('clay')}>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/clay.jpeg')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 32, marginLeft: 2, marginTop: -7}}>Clay</Text>
                    
                  </View>
                  <View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style = {styles.text}>•	Clay soil:  has a smearing quality, and is sticky when wet. It is easily rolled into a long thin sausage and can be smoothed to a shiny finish by rubbing with a finger. If is it not a heavy clay it won’t get quite as shiny and be as easy to make a sausage</Text>

          <TouchableOpacity onPress={() => navigation.navigate('slit')}>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/slit.png')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 32 , marginLeft: 2, marginTop: -7 }}>Slit</Text>
                    
                  </View>
                  <View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style = {styles.text}>•	Silt soils: These soils are made up of fine particles that can be easily compacted by treading and use of garden machinery. They are prone to washing away and wind erosion if left exposed to the elements without plant cover. However, they contain more nutrients than sandy soils and hold more water, so tend to be quite fertile. You can bind the silt particles into more stable crumbs by the addition of organic matter.
</Text>
          <TouchableOpacity onPress={() => navigation.navigate('sandy')}>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/sandy.png')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 32,  marginLeft: 2, marginTop: -7 }}>Sandy</Text>
                    
                  </View>
                  <View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style = {styles.text}>
          •	Sandy soil:  has a gritty element – you can feel sand grains within it, and it falls through your fingers. It cannot be rolled to make a sausage shape. If it is not a coarse sand and perhaps a sandy loam it may stick together better
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('loam')}>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/loam.png')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 20,  marginLeft: 2, marginTop: -7 }}>Loam</Text>
                    
                  </View>
                  <View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        <Text style = {styles.text}>• Loams: These soils are the gardener’s best friend, being a ‘perfect’ balance of all soil particle types. But even though they are very good soils, it is important to regularly add organic matter, especially if you are digging or cultivating these soils every year.
        </Text>
          <TouchableOpacity onPress={() => navigation.navigate('chalky')}>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/chalky.png')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 20,  marginLeft: 2, marginTop: -7 }}>Chalky</Text>
                  </View>
                  <View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style = {styles.text}>• Chalky soils: Chalky soils are alkaline, so will not support ericaceous plants that need acid soil conditions. Very chalky soils may contain lumps of visible chalky white stone. Such soils cannot be acidified, and it is better to choose plants that will thrive in alkaline conditions. Many chalky soils are shallow, free-draining and low in fertility, but variations exist, and where there is clay present, nutrient levels may be higher and the water holding capacity greater. 
          </Text>

    </View></ScrollView>
}

export default SoilManual

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        backgroundColor: '#004346',
        padding : 20,
    },
    text : {
        // color : 'white',
        fontSize : 18,
        padding : 15, 
        backgroundColor : '#DFF6FF',
        borderRadius : 10
    }
})