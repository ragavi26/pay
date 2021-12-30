import React from 'react'
import { View,Image } from 'react-native'

function WalletIcon({image,value,active}) {
    return (
        <View  opacity={value} style={{width: 50,
            height: 50, borderRadius: 50,margin:10}} disabled> 
            <Image style={{width:60,height:60,borderRadius:50,borderColor:'#ddd',borderWidth:4}}source={{
          uri: image,
        }}/>
        </View>
    )
}

export default WalletIcon
