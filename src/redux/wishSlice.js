import {createSlice} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import {setProducts} from 'redux/productSlice'


const wishSlice = createSlice({
    name:"wish",
    initialState:
    {
        wish:JSON.parse(localStorage.getItem("wish"))
    },
    reducers:
    {
       setWish:(state,action)=>
       {
        let products = JSON.parse(localStorage.getItem("products"))
        let wish = JSON.parse(localStorage.getItem("wish"))
        if (action.payload.isFav === false)
        {
          localStorage.setItem("wish",JSON.stringify([...wish,action.payload]))
          let newWish = JSON.parse(localStorage.getItem("wish"))
          state.wish = newWish
        }
        else
        {
          let wish = JSON.parse(localStorage.getItem("wish"))
          let delWishProd = wish.filter(e=> e.id !==action.payload.id)
          localStorage.setItem("wish",JSON.stringify(delWishProd))
          let newWish = JSON.parse(localStorage.getItem("wish"))
          state.wish = newWish
        }
        let newArr = products.map(e=>
          {
            if(e.id==action.payload.id)
            {
              return {...e,isFav:e.isFav==true?e.isFav=false:e.isFav=true}
            }
            return e
          })
           localStorage.setItem("products",JSON.stringify(newArr))
           
           let newProd = JSON.parse(localStorage.getItem("products"))
       },
       mapWish:(state,action)=>
       {
         state.wish = action.payload
       }
    }
})

export default wishSlice.reducer
export const {setWish,mapWish} = wishSlice.actions