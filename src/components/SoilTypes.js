import {View, Text, ScrollView, StyleSheet} from 'react-native'

const SoilTypes = ({type, particle_size, moisture, nutrient, crop_types, description}) => {
    return <View style = {styles.container} >
        <Text style = {styles.text}>Soil Type:{'\n'}{'\t\t'} {type}</Text>
        <Text style = {styles.text}>Particle Size:{'\n'}{'\t\t'} {particle_size}</Text>
        <Text style = {styles.text}>Moisture:{'\n'}{'\t\t'} {moisture}</Text>
        <Text style = {styles.text}>Nutrient:{'\n'}{'\t\t'} {nutrient}</Text>        
        <Text style={styles.text}>
            Type of Crops:{'\n'}{'\t\t'}
            {crop_types.map((crop, index) => {
                return <Text style={styles.text} key={index}>{crop}{'\n'}{'\t\t'}</Text>;
            })}
            </Text>        
        <Text style = {styles.text}>Description:{'\n'}{'\t'} {description}</Text>
    </View>
    {/* </ScrollView> */}
}

export default SoilTypes

const styles = StyleSheet.create({
    container : {
        padding : 10,
        borderWidth : 1,
        flex : 1,
        backgroundColor : '#004346'
       
    },
    text : {
        fontSize : 24,
        padding : 5,
        color : 'white'


    }
})