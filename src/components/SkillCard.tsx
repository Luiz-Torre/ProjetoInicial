import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface SkillCardsProps extends TouchableOpacityProps{
    skill: string;
}
export default function SkillCard({skill,...rest} : SkillCardsProps){
return(
    
   
    <TouchableOpacity
        style ={styles.buttonSkill}
        {...rest}
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