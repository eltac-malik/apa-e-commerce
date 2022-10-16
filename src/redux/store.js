import {configureStore,combineReducers} from '@reduxjs/toolkit'
import productSlice from 'redux/productSlice'
import basketSlice from 'redux/basketSlice'
import wishSlice from 'redux/wishSlice'
import historySlice from 'redux/historySlice'
import searchSlice from 'redux/searchSlice'

const rootReducer = combineReducers(
    {
        products:productSlice,
        basketStore:basketSlice,
        wishList:wishSlice,
        history:historySlice,
        search:searchSlice
    }
)

export const store = configureStore({reducer:rootReducer})