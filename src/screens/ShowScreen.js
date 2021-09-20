import React, { useContext, useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const ShowScreen = function ({navigation}) {
    
    const value = useContext(BlogContext)
    const [titleOfNote,setTitle]=useState('')
    const [imputNote,setImput]=useState('')
    console.log(value)
    return (
        <View style={styles.viewStyle}>
            <TextInput
                style={styles.textInputTitleStyle}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Title' 
                value={titleOfNote}
                onChangeText={(newValue)=>{setTitle(newValue)}}
                />
            <TextInput
                style={styles.textInputBodyStyle}
                autoCorrect={false}
                autoCapitalize='none'
                multiline={true}
                onChangeText={(newValue)=>setImput(newValue)}
            />
            <View style={styles.buttonStyle}>
                <Button title='Save' color='#EE82EE' onPress={()=>{
                        value.actionNotePost('add_note',{
                            id:Math.floor(Math.random()*99999),
                            title:titleOfNote,
                            body:imputNote
                        });
                        navigation.navigate('Index')
                }}/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'column',
        flex: 1
    },
    textInputTitleStyle: {
        marginTop: 30,
        marginLeft: 15,
        fontSize: 45,
        color: 'black'
    },
    textInputBodyStyle: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        padding: 5,
        color: 'black',
        borderWidth: 3,
        flex:1,
        borderColor: 'black',
    },
    buttonStyle: {
        marginVertical: 30,
        marginHorizontal:15
    }
})
export default ShowScreen;