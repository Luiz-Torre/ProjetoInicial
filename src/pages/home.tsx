import React, {useEffect, useState} from 'react';
import {View , Text, StyleSheet, TextInput,FlatList} from 'react-native';
import Button from '../components/button';
import SkillCard from '../components/SkillCard';

interface SkillData{
    id: string;
    name: string;

}


export default function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [gretting, setGretting] = useState('')


    function handleAddNewSkill(){
        const data ={
            id : String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id : string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if(currentHour < 12){
            setGretting('Bom dia');
        }
        else if(currentHour>=12 && currentHour<18 ){
            setGretting('Bom Tarde');

        }
        else{
            setGretting('Bom Noite');

        }
    },[gretting])
    return(
      <View style={styles.container}>
        <Text style = {styles.title}>Olá, Luiz. Seja bem Vindo!! :)</Text>
        
        <Text style = {styles.greetings}>{gretting}</Text>

        <TextInput 
            style = {styles.input}
            placeholder = "Novo elemento da lista"
            placeholderTextColor = "#555"
            onChangeText = {setNewSkill}
        />
       
        <Button
            onPress = {handleAddNewSkill}
            title = 'Adicionar'
        />


        <Text style = {[styles.title,{marginTop: 30}]}>Minha lista:</Text>

        <FlatList 
            data = {mySkills}
            keyExtractor = {item => item.id}
            
            renderItem = {({item}) => ( 
                <SkillCard 
                    onPress = {() => handleRemoveSkill(item.id)} 
                    skill = {item.name} 
                />) }
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
    },
    greetings:{
        color: '#fff'
    }
});