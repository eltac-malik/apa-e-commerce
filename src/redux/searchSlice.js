import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name:"search",
    initialState:
    {
        inpValue:""
    },
    reducers:
    {
        setInputValue:(state,action)=>
        {
            state.inpValue = action.payload
        }
    }
})

export default searchSlice.reducer
export const {setInputValue} = searchSlice.actions