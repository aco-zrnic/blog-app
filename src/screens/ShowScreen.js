import React,{ useContext } from 'react'
import {Text,View, TextInput, StyleSheet} from 'react-native'
import BlogContext from '../context/BlogContext'

const ShowScreen = function(){
    const value = useContext(BlogContext)
    console.log(value)
    return(
        <View style={styles.viewStyle}> 
            <TextInput
            style={styles.textInputTitleStyle} 
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Title'/>
            <TextInput
            style={styles.textInputBodyStyle} 
            autoCorrect={false}
            autoCapitalize='none'
            multiline={true}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'column',
        flex:1
    },
    textInputTitleStyle:{
        marginTop:30,
        marginLeft:15,
        fontSize:45,
        color:'black'
    },
    textInputBodyStyle:{
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        padding:5,
        color:'black',
        borderWidth:3,
        flex:1,
        borderColor:'black',
    }
})
export default ShowScreen;