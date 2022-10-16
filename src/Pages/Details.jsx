import React,{useEffect,useState} from 'react'
import 'assets/css/Detail.css'
import cargo from 'assets/img/cargo.png'
import dsc from 'assets/img/discount.png'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch} from 'react-redux'
import {setBasket} from 'redux/basketSlice'

function Details() {
    const {id} = useParams()
    const [size, setSize] = React.useState('');
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setSize(event.target.value);
    };
  

    let products = JSON.parse(localStorage.getItem('products'))
  
    let current = products.find(e=> e.id==id)
    const [imager,setImager] = useState(current?current.img:"")

    return (
        <div className='home about'>
            <div className="route">
                <p className='brand-name'>KOTON</p>
                <p className='route-page'>Ana sayfa > Tüm Butikler > Koton</p>
            </div>
            {
                current&&
                <div className="details w-full flex justify-center align-center">
                <div className="detail flex justify-center align-center">

                    <div className="product-details-img w-full">
                        <div className="roles">
                        {
                                    current.imgs.map(e=>
                                        {
                                            return(
                                                <div className="sl-img" onClick={()=> setImager(e)}>
                                                    <img src={e} alt=""/>
                                                </div>
                                            )
                                        })
                        }
                        </div>
                        <div className="main-img">
                            <img src={imager} alt=""/>
                        </div>
                    </div>
                    <div className="product-details-content w-full">
                        <h1 className='product-title w-full flex justify-start align-start'>{current.name}</h1>
                        <p className='product-customer w-full flex justify-start align-start'>Satıcı: <b>{current.customer}</b>    <span className='flex justify-center align-center'>9.5</span></p>
                        <p className='product-details mt-1 w-full flex justify-start align-start'>
                            <span className='default-price pt-3'>{current.price}AZN</span>
                            <span className='discount-price pt-2'>{current.disPrice}AZN</span>
                        </p>
                        <div className="all-images mt-2 w-full flex justify-between align-start ">
                            <div className="product-imgs w-full">
                               {
                                   current.imgs.map(e=>
                                    {
                                        return(
                                            <div className="pr-img" onClick={()=> setImager(e)}>
                                              <img src={e} alt=""/>
                                            </div>)
                                    })
                               }
                            </div>
                            <div className="car-disc flex ">
                                <div className="crdd flex justify-center align-center cargos">
                                <img src={cargo} className='w-full'/>
                                </div>
                                <div className="crdd flex justify-center align-center discs">
                                <img src={dsc} className='w-full'/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="selected-box-order">

                        <Box className='select-box-order' >
              <FormControl fullWidth>
                <Select
                className='sell'
                  id="demo-simple-select"
                  value={size}
                  onChange={handleChange}
                  sx={{ boxShadow: 'none'}}
                >
                    {
                        current.size.map(e=>  <MenuItem value={e}>{e.toUpperCase()}</MenuItem>)
                    }
                </Select>
              </FormControl>
            </Box>

                        <Box className='select-box-order counter-section' >
                        <p className='change-count flex justify-center align-center pt-2 bg-white'>-</p>
                        <p>1</p>
                        <p className='change-count flex justify-center align-center pt-2 bg-white'>+</p>
                       </Box>

                        <div className="alertible">
                            <p className='alrt'><i class="fa-solid fa-bell"></i></p>
                            <p className='alrt'><i class="fa-solid fa-heart"></i></p>
                        </div>
                        </div>
                        
                        <div className="operationsx w-full flex justify-center align-center mt-5">
                            <p className='oper quick'>HEMEN AL</p>
                            <p className='oper added' onClick={()=> dispatch(setBasket(current.id))}>SEBETE EKLE</p>
                        </div>
                    </div>
               
                </div>
                </div>
       
            }
       </div>
    )
}

export default Details
