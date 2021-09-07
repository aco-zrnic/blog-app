import React, { useReducer, useState } from 'react'



const BlogContext = React.createContext();


const noteReducer = function(state,action){

    let temp=[...state]
    if(action.type==='add_note'){

        return [...temp,{title:'Note nb.' + (temp.length+1)}]
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

    return (
        <BlogContext.Provider value={{data:notePost,actionNotePost}}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContext;