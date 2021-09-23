import React, {useState} from 'react';
import {View , Text, StyleSheet, TextInput, Platform, TouchableOpacity} from 'react-native';

export default function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([])


    function handleAddNewSkill(){
        
    }


    return(
      <View style={styles.container}>
        <Text style = {styles.title}>Olá, Luiz. Seja bem Vindo!! :)</Text>
        <TextInput 
            style = {styles.input}
            placeholder = "Novo elemento da lista"
            placeholderTextColor = "#555"
            onChangeText = {setNewSkill}
        />
        <TouchableOpacity 
            style ={styles.button}
            activeOpacity = {.65}
        >
            <Text style = {styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>


        <Text style = {[styles.title,{marginTop: 30}]}>Minha lista:</Text>

        <TouchableOpacity
            style ={styles.buttonSkill}
        >
        <Text style = {styles.skill}> teste{newSkill}</Text>
        </TouchableOpacity>

      </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical:50,
        paddingHorizontal:35
    },
    title:{
        color:'#fafafa',
        fontSize:24,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#1F1E25',
        color:'#fafafa',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 8
    },
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

    },
    buttonSkill:{
        backgroundColor: '#1F1E25',
        padding: 15,
        marginTop : 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    skill:{
        color: '#fafafa',
        fontSize: 18,
        fontWeight: 'bold'

    }
});