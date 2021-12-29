import React,{useEffect,useState} from 'react';
import analytics from "@react-native-firebase/analytics"
import { Alert, BackHandler, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { frontBigFontColor, frontdappa, frontFontColor, frontPageBackGroundColor, primaryColorBackgroundColor } from '../Components/Colors';
 export let userdetails=[];
export default function EntryPage({navigation}) {
  
  analytics().logScreenView({
    screen_class:"EntryPage",
    screen_name:"EntryPage"
  })
    GoogleSignin.configure({
      scopes: [], 
      webClientId: '354893042307-3fp7esrmrld4f0t58sdeqg78n8voo6jg.apps.googleusercontent.com', 
      offlineAccess: true,
      forceCodeForRefreshToken: true, 
      profileImageSize: 200, 
    });

   
   const [changer,setChanger]=useState(false)
   const [userName,setUserName]=useState('')
   const [userEmail,setUserEmail]=useState("")

   const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      userdetails=userInfo.user
      // console.log(userdetails)
      const isSignedIn = await GoogleSignin.isSignedIn();
      console.log(isSignedIn)
      setUserEmail(userInfo.user.email);
      setChanger(isSignedIn);
      setUserName(userInfo.user.name); 
      console.log(userInfo.user);
      analytics().logLogin({
        method:"gmail.com"
      })
    } 
    catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }

  };
    
    const startGame = ()=>{
      !changer ? 
      alert("Sign In and Continue !")
      :
      navigation.navigate("FirstPage");
      analytics().logLevelStart({
        level:1
      })
      }

      
      const profile = ()=>{
        navigation.navigate("Profile");
      }
      const Payment=()=>{
        navigation.navigate('Payment')
      }
    const exit=()=>{
        Alert.alert(
            "Are you sure want to exit ?",
            "",
            [
              { text: "Cancel",style: "cancel" },
              {text:"YES",onPress: () => BackHandler.exitApp(),style:"cancel"}
            ]
          );
      }
      
      const image = require("../Images/gradient_2.png")
    return (
      <>        
              {!changer
              ? 
                <SafeAreaView style={style.mainContainer}>
                  <View style={style.insideBox}>
                  <Text  style={style.gameuserName}>WORD GAME</Text>
                    <GoogleSigninButton
                    style={{ width: 300, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                    />
                  </View>
                </SafeAreaView>
              :
                <SafeAreaView style={style.mainContainer}>
                <Text  style={style.gameName}>WORD GAME</Text>
                <View style={style.insideuserNameBox}>

                <TouchableOpacity style={style.buttonContainer} onPress={startGame}>
                <Text  style={style.buttonSubmit}>START GAME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonContainer} onPress={profile}>
                <Text  style={style.buttonSubmit}>PROFILE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonContainer} onPress={Payment}>
                <Text  style={style.buttonSubmit}>PAYMENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonContainer}>
                <Text  style={style.buttonSubmit} onPress={exit}>EXIT</Text>
                </TouchableOpacity>
                </View>
                </SafeAreaView>
              }
        </>
    )
} 
const style = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:primaryColorBackgroundColor,
        justifyContent:'center',
        alignItems:'center'
    },
    insideBox:{
        width:'90%',
        height:'20%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    insideuserNameBox:{
        width:'100%',
        height:'30%',
        justifyContent:'space-evenly',
        alignItems:'center',
        // backgroundColor:"red"
    },
    welcome:{
      fontSize:30,
      fontWeight:'bold',
      color:frontPageBackGroundColor
    },
    useuserNameHeading:{
      fontSize:20,
      fontWeight:'bold',
      color:frontPageBackGroundColor
    },
    gameuserName:{
        fontSize:50,
        fontFamily: 'Moo Lah Lah',
        color:frontPageBackGroundColor,
        fontWeight:'bold',
        fontStyle:'italic',
    },
    gameName:{
      position:"absolute",
      top:30,
        fontSize:50,
        fontFamily: 'Moo Lah Lah',
        color:frontPageBackGroundColor,
        fontWeight:'bold',
        fontStyle:'italic',
    },
    buttonContainer:{
        width:'50%',
      },
      buttonSubmit:{
        
        color:frontFontColor,
        height: 40, 
        borderRadius:10,
        backgroundColor:frontdappa,

        padding:8,
        fontSize:19,
        fontWeight:'500',
        textAlign:'center',
      }
})

