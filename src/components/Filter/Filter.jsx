import React,{useState} from "react";
import "./Filter.css";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useDispatch,useSelector} from 'react-redux'
import {setProducts} from 'redux/productSlice'


function Filter() {

    const [category,setCategory] = useState('')
    const [gender,setGender] = useState('')
    const [price,setPrice] = useState('')
    const [color,setColor] = useState('') 
    const dispatch = useDispatch()  
    const allProducts = useSelector(state => state.products.product)

    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
      });
        
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,  
        });
        setGender(event.target.name);
      };
      const { erkek, kadin, cocuk } = state;  


      const handleChangePrice = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,  
        });
        setPrice(event.target.name);
      };
      const { p20, p30, p50, p100 } = state;


  return (
    <div className='filters'>
      <div class="accordion" id="accordionExample">

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              İlgili Kategoriler
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul className="acc-ul w-full">
                  <li onClick={()=> setCategory("kazak")} className="acc-li flex items-center justify-between mt-3 cursor-pointer"><span>Kazak</span><span>3</span></li>
                  <li onClick={()=> setCategory("pantolon")} className="acc-li flex items-center justify-between mt-3 cursor-pointer"><span>Pantolon</span><span>10</span></li>
                  <li onClick={()=> setCategory("jean")} className="acc-li flex items-center justify-between mt-3 cursor-pointer"><span>Jean</span><span>1</span></li>
                  <li onClick={()=> setCategory("kaban")} className="acc-li flex items-center justify-between mt-3 cursor-pointer"><span>Kaban</span><span>7</span></li>
                  <li onClick={()=> setCategory("t-shirt")} className="acc-li flex items-center justify-between mt-3 cursor-pointer"><span>T-shirt</span><span>4</span></li>
                  <li onClick={()=> setCategory("elbise")} className="acc-li flex items-center justify-between mt-3 cursor-pointer"><span>Elbise</span><span>23</span></li>
              </ul>
            </div>
          </div>
        </div>
 
 
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
             Cinsiyet
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
        <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={erkek} onChange={handleChange} name="erkek" />
            }
            label="Erkek"
          />
          <FormControlLabel
            control={
              <Checkbox checked={kadin} onChange={handleChange} name="kadin" />
            }
            label="Kadin"
          />
          <FormControlLabel
            control={
              <Checkbox checked={cocuk} onChange={handleChange} name="cocuk" />
            }
            label="Çocuk"
          />
        </FormGroup>
      </FormControl>
    </Box>
            </div>
          </div>
        </div>
  
  
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading5">
            <button
              class="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapse5"
            >
              Renk
            </button>
          </h2>
          <div
            id="collapse5"
            class="accordion-collapse collapse show"
            aria-labelledby="heading5"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <ul className="acc-ul w-full">
                  <li onClick={()=> setColor("beyaz")} className="acc-li flex items-center justify-start mt-3 cursor-pointer"><span className='color bg-white'></span><span>Beyaz</span></li>
                  <li onClick={()=> setColor("kirmizi")} className="acc-li flex items-center justify-start mt-3 cursor-pointer"><span className='color bg-red-500'></span><span>Kirmizi</span></li>
                  <li onClick={()=> setColor("yesil")} className="acc-li flex items-center justify-start mt-3 cursor-pointer"><span className='color bg-green-600'></span><span>Yesil</span></li>
                  <li onClick={()=> setColor("deniz")} className="acc-li flex items-center justify-start mt-3 cursor-pointer"><span className='color bg-sky-500'></span><span>Deniz</span></li>
                  <li onClick={()=> setColor("mor")} className="acc-li flex items-center justify-start mt-3 cursor-pointer"><span className='color bg-violet-600'></span><span>Mor</span></li>
                  <li onClick={()=> setColor("siyah")} className="acc-li flex items-center justify-start mt-3 cursor-pointer"><span className='color bg-dark'></span><span>Siyah</span></li>
              </ul>
            </div>
          </div>
        </div>
     
  
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading6">
            <button
              class="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse6"
              aria-expanded="false"
              aria-controls="collapse6"
            >
              Fiyat Aralığı
            </button>
          </h2>
          <div
            id="collapse6"
            class="accordion-collapse collapse show"
            aria-labelledby="heading6"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={p20} onChange={handleChangePrice} name="20" />
            }
            label="20"
          />
          <FormControlLabel
            control={
              <Checkbox checked={p30} onChange={handleChangePrice} name="30" />
            }
            label="30"
          />
          <FormControlLabel
            control={
              <Checkbox checked={p50} onChange={handleChangePrice} name="50" />
            }
            label="50"
          />
          <FormControlLabel
            control={
              <Checkbox checked={p100} onChange={handleChangePrice} name="100" />
            }
            label="100"
          />
        </FormGroup>
      </FormControl>
    </Box>
           
            </div>
          </div>
        </div>
     
     
     
      </div>
    </div>
  );
}

export default Filter;
