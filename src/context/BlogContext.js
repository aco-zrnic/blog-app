import React, { useReducer, useState } from 'react'



const BlogContext = React.createContext();


const noteReducer = function(state,action){

    let temp=[...state]
    if(action.type==='add_note'){

        return [...temp,
            {
                id:Math.floor(Math.random()*99999),
                title:'Note nb.' + (temp.length+1)
            }]
    }
    else if(action.type==='delete_note'){

        console.log('Delete button pressed!')
        return temp.filter((element)=>{
            return element.id !== action.id
        })

    }
    else{
        return temp
    }

}

export const BlogProvider = ({children})=>{

    const [notePost,dispatch] = useReducer(noteReducer,[])

    function actionNotePost(action){
        dispatch({type:action})
    }
    function deleteActionNotePost(action,idPost){
        dispatch({type:action,id:idPost})
    }

    return (
        <BlogContext.Provider value={{data:notePost,actionNotePost,deleteActionNotePost}}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContext;