import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: JSON.parse(localStorage.getItem("basket")),
  },
  reducers: {
    setBasket: (state, action) => {
      let basket = JSON.parse(localStorage.getItem("basket"));

      if (basket.find((e) => e.id == action.payload)) {
        let newArr = basket.map((e) =>
          e.id == action.payload ? { ...e, count: e.count + 1 } : e
        );
        localStorage.setItem("basket", JSON.stringify(newArr));

        let basketx = JSON.parse(localStorage.getItem("basket"));
        state.basket = basketx
      } else {
        let basket = JSON.parse(localStorage.getItem("basket"));
        let prods = JSON.parse(localStorage.getItem("products"));
        let addProd = prods.find(e=> e.id == action.payload)
        localStorage.setItem("basket", JSON.stringify([...basket,addProd]));
        let basketx = JSON.parse(localStorage.getItem("basket"));
        state.basket = basketx
      }

     
    },
    mapBasket:(state,action)=>
    {
        state.basket = action.payload
    },
    removeBasket:(state,action)=>
    {
    let bs = JSON.parse(localStorage.getItem("basket"))
    let delFilter = bs.filter(z=> z.id !== action.payload.id)
    localStorage.setItem("basket",JSON.stringify(delFilter))
    let newBs = JSON.parse(localStorage.getItem("basket"))
    state.basket = newBs
    },
    decreaseBasket:(state,action)=>
    {
        let bs = JSON.parse(localStorage.getItem("basket"))
        if(action.payload.count==1)
        {
        let bs = JSON.parse(localStorage.getItem("basket"))
        let delFilter = bs.filter(z=> z.id !== action.payload.id)
        localStorage.setItem("basket",JSON.stringify(delFilter))
        state.basket = delFilter
        }
        else
        {
          let newBasket = bs.map(z=>
            {
              if(z.id==action.payload.id)
              {
                return {...z,count:z.count>1?z.count-1:1}
              }
              return z
            })
            localStorage.setItem("basket",JSON.stringify(newBasket))
            state.basket = newBasket
        }
    },
    increaseBasket:(state,action)=>
    {
        let bs = JSON.parse(localStorage.getItem("basket"))
        let newBasket = bs.map(z=>
          {
            if (z.id==action.payload.id)
            {
              return {...z,count:z.count+1}  
            }
            return z
          })
          localStorage.setItem("basket",JSON.stringify(newBasket))
          state.basket = newBasket
    }
  },
});

export default basketSlice.reducer;
export const { setBasket,mapBasket,removeBasket,decreaseBasket,increaseBasket} = basketSlice.actions;
