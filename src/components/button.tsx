import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface ButtonProps extends TouchableOpacityProps{
    title: string
}



export default function Button({title,...rest} : ButtonProps){
return(
    
    <TouchableOpacity
        style ={styles.button}
        activeOpacity = {.65}
        {...rest}
    >
        <Text style = {styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button:{
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius:7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText:{
        color: '#fafafa',
        fontSize: 18,
        fontWeight: 'bold'

    }
});