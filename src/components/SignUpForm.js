import {View, Text, Modal, TextInput, TouchableOpacity, Alert} from "react-native"
import { useState, useEffect } from "react"

import CustomButton from '../components/CustomButton'


export default function SignUpForm({style, isVisible, setVisible}){    
  
  const [isValid, setValid] = useState(false)
  const [data, setData] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [confirm_password, setConfirmPassWord] = useState('')

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailPattern.test(email)){
      Alert.alert('valid email')
      setValid(true)
    } else {
      Alert.alert("invalid email")
    }

  }

  useEffect(() => {
    console.log(data)
  },[data])
  
  return <View>
        <Modal 
          visible={isVisible}
          onRequestClose={() => setVisible(false)}
          transparent={true}
        >
          <View style={style.modalContainer}>
            <View style = {{display : 'flex'}}>
              <TouchableOpacity style = {style.closeButton} 
                onPress={() => setVisible(false)}
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            
            <Text style = {[style.title,style.inside ]}>Sign Up</Text>
            
                <TextInput  
                    placeholder="Email" 
                    style = {style.input}
                    onChangeText={(text) => {
                      isValid ? setEmail(text) : setEmail('')
                    }}

                    
                  />
                <TextInput 
                    placeholder = "Password" 
                    secureTextEntry = {true} 
                    style = {style.input}
                    onChangeText={(text) => {
                      {text !== "" ? setPassWord(text) : console.log("required")}
                    }}
                    
                  />
                <TextInput 
                    placeholder = "Confirm Password" 
                    secureTextEntry = {true} 
                    style = {style.input}
                    onChangeText={(text) => {
                      {text !== "" ? setConfirmPassWord(text) : console.log("required")}
                    }}
                    
                  />

            <CustomButton
              children="Sign Up"
              style = {style.button}
              onPress={() => {
                    validateEmail()
                    setData({email, password,confirm_password})             
                }}
                
            />
          </View>
        </Modal>
      </View>
}
