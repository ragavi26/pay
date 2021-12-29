import React from 'react'
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import RoundBtn from './RoundBtn';
import {Level1, Level2} from "./TotalData";

export default function LettersLists({getText}) {

    
    const data = useSelector(state=>state.nameOfLevel);
    let levelName;
    data == "LevelTwo" ? levelName=Level2 : levelName=Level1 ;


    return (
    <>
        <View style={styles.middleware}>
            { levelName.TopLetters.map((text,index)=>
            <RoundBtn fun={getText} key={index} text={text}/>
            )}
        </View>
        <View style={styles.middleware}>
            { levelName.BottomLetters.map((text,index)=>
            <RoundBtn fun={getText} key={index} text={text}/>
            )}
        </View>
    </>
    )
}
const styles = StyleSheet.create({
    middleware:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
      },
})