import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RoundBtn from './RoundBtn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAction, undoAction ,nextLevelAction} from '../redux/action';
import { BelowContentColor, frontBigFontColor } from './Colors';

export default function BelowContent({ wordArray, setwordArray }) {
    const data = useSelector((state) => state.wordArray);
    const dispatch = useDispatch();
    return (
        <>

            <TouchableOpacity onPress={() => dispatch(undoAction())} style={style.undoContainer} >
                <FontAwesome5 name={'history'} style={style.undo} size={20} color={BelowContentColor} />
            </TouchableOpacity>
            {data.map((word, index) =>
                <ScrollView key={index} style={style.container}>
                    {word.visible ?
                        <View style={style.row}>

                            <Text style={style.word}>{word.wordName}</Text>
                            <RoundBtn style={[style.number]} text={word.length} />

                            <TouchableOpacity onPress={() => dispatch(deleteAction(word.id))}>
                                <Text style={style.delete}>
                                    <FontAwesome5 name={'trash'} size={20} color={'#334257'} color={BelowContentColor} />
                                </Text>
                            </TouchableOpacity>
                        </View> : <View />}
                </ScrollView>
            )}
            {data.length > 0 ? 
            
                <TouchableOpacity onPress={()=>dispatch(nextLevelAction())} style={style.buttonContainer}>
                <Text  style={style.nextLevel}>RESTART</Text>
                </TouchableOpacity>
            : <View/>
            }
        </>
    )
}
const style = StyleSheet.create({
    undoContainer: {
        flex: 1,
        paddingTop: 20,

        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        
    }, row: {
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        color: '#334257',
    }, word: {
        fontSize: 30,
        textTransform: "capitalize",
        borderBottomWidth: 2,
        borderBottomColor: BelowContentColor,

        borderStyle: 'solid',
        paddingBottom: 10,
        width: '50%',
        color: BelowContentColor
    }, numberDelete: {
        flexDirection: 'row',
        width: "30%",
        justifyContent: 'space-around'
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'20%',
        paddingBottom:"20%"
      },
      nextLevel:{
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

})