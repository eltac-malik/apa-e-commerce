import * as React from "react";
import Popover from "@mui/material/Popover";
import turkey from "assets/img/try.png";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function PopoverPopupState() {

  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [lang, setLang] = React.useState('');
  const [money, setMoney] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeLang = (event) => {
    setLang(event.target.value);
  };
  const handleChangeMoney = (event) => {
    setMoney(event.target.value);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <p
            className="langs-area"
            variant="contained"
            {...bindTrigger(popupState)}
          >
            <img className="try-img" src={turkey} /> | TR | TRY
          </p>

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="popovers">
            <Box className='select-box' >
              <label htmlFor="">Ülke</label>
              <FormControl fullWidth>
                <Select
                className='sell'
                  id="demo-simple-select"
                  value={country}
                  onChange={handleChange}
                  sx={{ boxShadow: 'none'}}
                >
                  <MenuItem value={1}>Turkiye</MenuItem>
                  <MenuItem value={2}>Azerbaycan</MenuItem>
                  <MenuItem value={3}>Ingiltere</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className='select-box' >
              <label htmlFor="">İl-Şehir</label>
              <FormControl fullWidth>
                <Select
                className='sell'
                  id="demo-simple-select"
                  value={city}
                  onChange={handleChangeCity}
                  sx={{ boxShadow: 'none'}}
                >
                  <MenuItem value={10}>Istanbul</MenuItem>
                  <MenuItem value={20}>Baku</MenuItem>
                  <MenuItem value={30}>London</MenuItem>
                  <MenuItem value={40}>messi</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className='select-box' >
              <label htmlFor="">Dil</label>
              <FormControl fullWidth>
                <Select
                className='sell'
                  id="demo-simple-select"
                  value={lang}
                  onChange={handleChangeLang}
                  sx={{ boxShadow: 'none'}}
                >
                  <MenuItem value={10}>Turkish</MenuItem>
                  <MenuItem value={20}>Azerbaijani</MenuItem>
                  <MenuItem value={30}>English</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className='select-box' >
              <label htmlFor="">Para birimi</label>
              <FormControl fullWidth>
                <Select
                className='sell'
                  id="demo-simple-select"
                  value={money}
                  onChange={handleChangeMoney}
                  sx={{ boxShadow: 'none'}}
                >
                  <MenuItem value={10}>TRY</MenuItem>
                  <MenuItem value={20}>AZN</MenuItem>
                  <MenuItem value={30}>USD</MenuItem>
                  <MenuItem value={40}>EUR</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <p>Kaydet</p>
          

            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
