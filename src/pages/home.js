import React, {useState} from 'react';
import {View , Text, StyleSheet, TextInput, Platform,FlatList} from 'react-native';
import Button from '../components/button';
import SkillCard from '../components/SkillCard';

export default function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([])


    function handleAddNewSkill(){
        setMySkills(oldState => [...oldState, newSkill]);
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
       
        <Button onPress = {handleAddNewSkill}/>


        <Text style = {[styles.title,{marginTop: 30}]}>Minha lista:</Text>

        <FlatList 
            data = {mySkills}
            keyExtractor = {item => item}
            renderItem = {({item}) => ( 
                <SkillCard skill = {item}/>) }
        />


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
    }
});