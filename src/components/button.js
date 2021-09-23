import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({onPress}){
return(
    
    <TouchableOpacity
        style ={styles.button}
        onPress = {onPress}
        activeOpacity = {.65}
    >
        <Text style = {styles.buttonText}>Adicionar</Text>
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