import React, { useContext } from 'react'
import { Text,View,StyleSheet } from 'react-native'
import BlogContext from '../context/BlogContext'

const ShowNoteScreen = function(props){
    
    const note = useContext(BlogContext)
    return (<View>
        <Text>Text</Text>
    </View>)

}

export default ShowNoteScreen;