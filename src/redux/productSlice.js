import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name:"product",
    initialState:
    {
        product:JSON.parse(localStorage.getItem("product"))
    },
    reducers:
    {
        setProducts:(state,action)=>
        {
            state.product = action.payload
        }
    }
})

export default productSlice.reducer
export const {setProducts} = productSlice.actions