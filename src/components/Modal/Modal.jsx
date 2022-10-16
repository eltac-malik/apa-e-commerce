import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import cargo from 'assets/img/cargo.png'
import dsc from 'assets/img/discount.png'
import Modal from '@mui/material/Modal';
import {useDispatch} from 'react-redux'
import {setBasket} from 'redux/basketSlice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  outline:"none",
  p: 4,
};

export default function BasicModal({setOpen,open,prod}) {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const [image,setImage] = useState(prod.img)
  
  return (
    <div>
      <Modal
        className='modales'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        <div className="details w-full flex justify-center align-center">
                <div className="detail flex justify-center align-center">

                    <div className="product-details-img w-full">
                        <img src={image} alt=""/>
                    </div>
                    <div className="product-details-content w-full">
                        <h1 className='product-title w-full flex justify-start align-start'>{prod.name}</h1>
                        <p className='product-customer w-full flex justify-start align-start'>Satıcı: <b>{prod.customer}</b>    <span className='flex justify-center align-center'>9.5</span></p>
                        <p className='product-details mt-1 w-full flex justify-start align-start'>
                            <span className='default-price pt-3'>{prod.price}AZN</span>
                            <span className='discount-price pt-2'>{prod.disPrice}AZN</span>
                        </p>
                        <div className="all-images mt-2 w-full flex justify-between align-start ">
                            <div className="product-imgs w-full">
                              {
                                prod.imgs.map(e=>
                                  {
                                    return(
                                      <div className="pr-img" onClick={()=> setImage(e)}>
                                        <img src={e} alt=""/>
                                      </div>
                                    )
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
                        

                        <div className="operationsx w-full flex justify-center align-center mt-5">
                            <p className='oper quick'>HEMEN AL</p>
                            <p className='oper added' onClick={()=> dispatch(setBasket(prod.id))}>SEBETE EKLE</p>
                        </div>
                        
                    </div>
                </div>
            </div>
     
        </Box>
      </Modal>
    </div>
  );
}
