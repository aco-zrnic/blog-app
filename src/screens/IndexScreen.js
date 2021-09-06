import React, {useContext, useState} from 'react'
import { View, Text } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = function(){
    const value = useContext(BlogContext);
    return(
        <View>
            <Text>Hello {value}</Text>
        </View>
    )
}

export default IndexScreen;