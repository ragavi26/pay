import React,{useState} from 'react'
import { SafeAreaView,StyleSheet, Button, Alert, TouchableOpacity, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BelowContent from './BelowContent';
import DisplayWord from './DisplayWord';
import LettersLists from './LettersLists';
import {reduxAction} from '../redux/action';
import { BelowContentColor, frontBigFontColor, submitButtonBackgroundColor, submitButtonColor } from './Colors';
import { Level1, Level2 } from './TotalData';



function Middleware({setwordArray,wordArray}) {
  const data= useSelector((state)=>state.wordArray);
  const dispatch =useDispatch();

  const nameOfLevelData = useSelector(state=>state.nameOfLevel);
    let checker;
    nameOfLevelData == "LevelTwo" ? checker=Level2: checker=Level1 ;
     
  const [word,setWord]=useState("");
  
  
  //Print the letters which are clicked
  const getText = (data)=>{
    setWord(prevItems=>{
      return [...prevItems ,data]
    });
  }

  //Delete the letters which are clicked
  const deleteLetter=()=>{
    let newWord = word.slice(0,-1);
    setWord(newWord);
  }

  //Button For Submit
  const shotItButton =()=>{
    if(word==""){
      Alert.alert(
        "",
        "Kid ! No Word Found",
        [
          {
            text: "Try Again",
            style: "cancel",
          }
        ])
    }else{
      setWord("");      
      checker.CorrectWords.map(letter=>letter===word.join('') ? dispatch(reduxAction({visible:true, wordName : word.join(''),length :word.length,id:Math.floor(Math.random() * 100 + 1)})):null);
      
    }
  }


    return ( 
      <>

      <SafeAreaView style={styles.se}>
        <LettersLists getText={getText}/>
      </SafeAreaView>
        <DisplayWord word={word} deleteLetter={deleteLetter}/>
        <TouchableOpacity onPress={shotItButton} style={styles.buttonContainer}>
            <Text  style={styles.buttonSubmit}>SUBMIT WORD</Text>
        </TouchableOpacity>
        <BelowContent />    
            
      </>
    )
}

export default Middleware;
const styles = StyleSheet.create({
    se:{
      flex:-1,
      paddingTop:15,
      flexDirection:'column',
      height:150
    },
    text:{
      fontSize:25,
      textAlign:'center',
    },
    buttonContainer:{
      justifyContent:'center',
      alignItems:'center',
    },
    buttonSubmit:{
      height: 45, 
      borderRadius:50,
      backgroundColor:BelowContentColor,
      color:frontBigFontColor,
      

      width:'70%',
      padding:13,
      fontSize:15,
      fontWeight:'800',
      textAlign:'center',
    }
});