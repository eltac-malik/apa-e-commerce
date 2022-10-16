import {createSlice} from '@reduxjs/toolkit'

const historySlice = createSlice({
    name:"history",
    initialState:
    {
        history:JSON.parse(localStorage.getItem("history"))
    },
    reducers:
    {
        setHistory:(state,action)=>
        {
            state.history = action.payload
        }
    }
})

export default historySlice.reducer
export const {setHistory} = historySlice.actions