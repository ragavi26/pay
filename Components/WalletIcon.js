import React from 'react'
import { View,Image } from 'react-native'

function WalletIcon({image}) {
    return (
        <View style={{width: 50,
            height: 50, borderRadius: 50,margin:10}}> 
            <Image style={{width:50,height:50,borderRadius:50}}source={{
          uri: image,
        }}/>
        </View>
    )
}

export default WalletIcon
