import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    appContainer : {
        flex : 1,
        padding : 10

    },
    container : {
        backgroundColor : '#1a7045', // sea green
        flex : 1, 
        padding : 10,
        justifyContent : 'center',
        gap : 100
        
    },
    title : {
        color : 'white',
        textAlign : 'center' ,
        fontFamily : 'Roboto',
        fontSize : 20
    },
    img : {
        width : 250,
        height : 250,
    },
    imgcontainer : {        
        paddingHorizontal : 50
    },
    button : {
        backgroundColor : 'white',
        padding : 10,
        margin : 10,
        borderRadius : 20,
        borderWidth : 1,
        borderColor : 'lightgreen',
        backgroundColor : '#2E8B57',        
        
    },

    inside : {
        color : 'black',
        // paddingBottom : 20
    },
    modalContainer : {
      width: '100vw',
      height: 300,
      marginTop: 'auto', // Push the modal to the bottom
      backgroundColor: 'white',
      borderRadius: 20,
      display : 'flex',
      gap : 10,
      alignContent : 'center',
      padding : 30
    },

    input : {
        borderWidth : 0.5,
        borderColor : "#74c69d",
        backgroundColor : "#e2eafc",
        borderRadius : 10,
        paddingHorizontal : 10,
        width : 285,
        // fontFamily : "Robot",
    },
    closeButton : {
        color : 'black',
        alignSelf : 'flex-end',
        // backgroundColor : 'pink',
        width : 20,
        paddingHorizontal : 5
    },
    textForm : {
        display : 'flex',
        justifyContent : 'space-between',
        padding : 5,
        marginVertical : 5,
        borderWidth : 0.5,
        borderRadius : 5,
        borderColor : '#527853',
        backgroundColor : '#304D30'
       
    },
    thresholdInterface : {
        flex : 1,
        display : 'flex',
        // paddingVertical : 100,
        paddingHorizontal : 20,
        justifyContent : 'flex-start',
        backgroundColor : '#527853'
    },
    thresholdText : {
        color : 'white',
        fontSize : 18
    },
    submitButton : {
        backgroundColor : '#304D30',
        // alignSelf : 'center',
        paddingHorizontal : 20,
        paddingVertical : 10,
        borderRadius : 10,
        width : 100
    },
    submitText : {
        // color : 'lightgreen',
        color : 'white',
        fontSize : 20,
    },
    formText : {
        display : 'flex', 
        flexDirection : 'row', 
        margin : 5
    }

})


export default style