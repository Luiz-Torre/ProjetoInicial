import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SkillCard({skill}){
return(
    
   
    <TouchableOpacity
        style ={styles.buttonSkill}

    >
        <Text style = {styles.skill}> {skill}</Text>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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