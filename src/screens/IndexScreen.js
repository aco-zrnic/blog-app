import React, { useContext, useState } from 'react'
import { View, Text, Button,FlatList  } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = function () {
    const value = useContext(BlogContext);
    console.log(value)
    return (
        <View>
            <Text>Index</Text>
            <Button title='Add Note' onPress={()=>{value.actionNotePost('add_note')}}/>
            <FlatList data={value.data}
                keyExtractor={(key) => key.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

export default IndexScreen;