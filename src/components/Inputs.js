import {View, TextInput, Text, TouchableOpacity} from 'react-native'

import style from '../styles'

function Inputs({text, placeholder, value, onChange, children}){
    return <View style = {style.textForm} >
                <View style = {style.formText}>
                    {children}
                    <Text style = {style.thresholdText}> {text} </Text>

                </View>
                    
                <TextInput 
                    style = {style.input}
                    placeholder = {placeholder}
                    value = {value}
                    onChangeText={onChange}
                    keyboardType='numeric'
                />
            </View>
}

export default Inputs