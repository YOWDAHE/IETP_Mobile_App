import {View, Text, StyleSheet, ScrollView} from 'react-native'

const Nuitrient = ({name, paragraph, types}) => {
    return <ScrollView><View style = {styles.container}>
        <Text style = {styles.text}>Crop Name: {name}</Text>
        <Text style = {styles.text}>Description:{'\n'}{'\t\t'} {paragraph}</Text>        
        <Text style={styles.text}>
            Type of Fertilizers for {name}:{'\n'}{'\t\t'}
            {types.map((crop, index) => {
                return <Text style={styles.textType} key={index}>{index + 1}. {crop}{'\n'}{'\t\t'}</Text>;
            })}
            </Text>    
    </View></ScrollView>
}

export default Nuitrient

const styles = StyleSheet.create({
    container : {
        padding : 10,
        borderWidth : 1,
        flex : 1,
        backgroundColor : '#004346'
       
    },
    text : {
        fontSize : 18,
        padding : 5,
        color : 'white'
    }, 
    textType : {
        borderWidth : 1,
        borderColor : 'green',
        padding : 10, 
    }
})