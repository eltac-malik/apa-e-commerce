import * as React from 'react';
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {mapWish} from 'redux/wishSlice'
import {setProducts} from 'redux/productSlice'
import './Wish.css'
import Drawer from '@mui/material/Drawer';

export default function Wish({side2,setSide2}) {

  const dispatch = useDispatch()

  const toggleDrawerWish = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSide2({ ...side2, [anchor]: open });
  };


  const wishs = useSelector(state => state.wishList.wish)
  useEffect(()=>
  {
    let bs = JSON.parse(localStorage.getItem("wish"))
    dispatch(mapWish(bs))
  },[])

  const handleDelete = (x)=>
  {
    let bs = JSON.parse(localStorage.getItem("wish"))
    let delFilter = bs.filter(z=> z.id !== x.id)
    localStorage.setItem("wish",JSON.stringify(delFilter))
    dispatch(mapWish(delFilter))

    let products = JSON.parse(localStorage.getItem("products"))
    let newArr = products.map(e=>
      {
        if(e.id==x.id)
        {
          return {...e,isFav:e.isFav==true?e.isFav=false:e.isFav=true}
        }
        return e
      })
       localStorage.setItem("products",JSON.stringify(newArr))
       
       let newProd = JSON.parse(localStorage.getItem("products"))
       dispatch(setProducts(newProd))
  }
  return (
    <div>
      {['right'].map(() => (
        <React.Fragment >
          <Drawer
            anchor={'right'}
            open={side2['right']}
            onClose={toggleDrawerWish('right', false)}
          >
            <div className="basket-content w-full flex justify-start align-center">
            
            {
              wishs&&wishs.map(e=>
                {
                  return(
                    <div className="cart-item flex justify-between align-center">
                    <div onClick={()=> handleDelete(e)} className="cart-del flex justify-center align-center">X</div>
                    <div className="cart-image">
                      <img src={e.img} alt=""/>
                    </div>
                    <div className="cart-content flex justify-start align-center flex-column">
                      <p className='cart-title'>{e.name}</p>
                      <p className='cart-subtitle'>{e.subtitle}</p>
                      <p className='cart-price'>{e.disPrice} AZN</p>
                    </div>
                  </div>
                  )
                })
            }



            
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
