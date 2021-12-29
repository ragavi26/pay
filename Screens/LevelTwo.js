import React from 'react'
import {View,StyleSheet, ScrollView} from 'react-native'
import {useDispatch} from 'react-redux'
import { primaryColorBackgroundColor } from '../Components/Colors';
import Header from '../Components/Header';
import analytics from "@react-native-firebase/analytics"
import { levelNameAction } from '../redux/action';


function LevelTwo({route}) {
  const dispatch = useDispatch();
  dispatch(levelNameAction(route.params.name));

  analytics().logScreenView({
    screen_class:"LevelTwo",
    screen_name:"LevelTwo"
  })

    return (
        <>
        <ScrollView style={style.wholePage}>
        <View style={style.mainContainer}>
        <View style={style.container}>
            <Header/>
        </View>
        </View>
        </ScrollView>
        </>
        
    )
}

export default LevelTwo;

const style = StyleSheet.create({
  wholePage:{
    backgroundColor:primaryColorBackgroundColor,
    paddingTop:15
  },
    mainContainer:{
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
      color:'#548CA8'
    },
    container:{
      width:'80%',
    }
  })
  