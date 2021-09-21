import React, { useContext, useState } from 'react'
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import BlogContext from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const IndexScreen = function () {
    const value = useContext(BlogContext);
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>

            <FlatList data={value.data}
                keyExtractor={(key) => key.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.noteStyle}>
                            <TouchableOpacity style={{flex: 1}} onPress={()=>{
                                navigation.navigate('ShowNote',{data: item})
                            }}>
                                <Text style={styles.noteTitleStyle}>{item.title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                value.deleteActionNotePost('delete_note', item.id)
                            }}>
                                <FontAwesome name="trash" size={30} color="black" style={{ paddingRight: 5 }} />
                            </TouchableOpacity>
                        </View>)
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    noteStyle: {
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 10,
        borderColor: '#000000',
        borderWidth: 3,
        height: 50,
        alignItems: 'center'
    },
    noteTitleStyle: {
        fontSize: 18,
        paddingLeft:15
    }
})
export default IndexScreen;