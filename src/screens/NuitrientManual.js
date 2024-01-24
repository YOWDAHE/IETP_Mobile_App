import {View, Text, StyleSheet, ScrollView,ImageBackground, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'


const PlantNuitrientManual = () => {
    const navigation = useNavigation()
    return <ScrollView><View style = {styles.container}>
        <Text style = {{color : 'white', fontSize : 18, fontStyle : 'italic'}}>"Plant nutrient manuals are like compasses guiding gardeners and farmers towards the path of optimal plant nutrition. They illuminate the intricate dance between plants and nutrients, helping us provide the nourishment plants crave. With nutrient manuals in hand, we become stewards of the soil, orchestrating a symphony of essential elements to unlock the full potential of our crops. These manuals are the keys to unlocking bountiful harvests and cultivating a greener future."</Text>
        <TouchableOpacity onPress={() => navigation.navigate('teff')}>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/teff.png')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 32, marginLeft: 2, marginTop: -7}}>Teff</Text>
                    
                  </View>
                  <View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style = {styles.text}>•	Teff is a low input crop, requiring minimal fertilization. Both manure and artifical fertilizer can be applied. Applying the balanced nutrients with proper proportion of N and P could give the highest marginal rate.</Text>

          <TouchableOpacity onPress={() => navigation.navigate('wheat')}>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/wheat.png')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 32 , marginLeft: 2, marginTop: -7 }}>Wheat</Text>
                    
                  </View>
                  <View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style = {styles.text}>•	Remember, Wheat cultivation may vary depending on specific soil conditions and regional factors. Consulting with local agricultural extension services or experts can provide tailored recommendations for fertilization practices in your area. By providing the right nutrients in the proper proportions, wheat farmers can optimize yields and promote sustainable agriculture.
</Text>
          

    </View></ScrollView>
}

export default PlantNuitrientManual

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