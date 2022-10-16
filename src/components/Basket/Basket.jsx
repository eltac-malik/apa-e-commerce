import * as React from "react";
import { useEffect } from "react";
import "./Basket.css";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import {
  mapBasket,
  removeBasket,
  decreaseBasket,
  increaseBasket,
} from "redux/basketSlice";
import {setHistory} from 'redux/historySlice'

export default function Basket({ side, setSide }) {
  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSide({ ...side, [anchor]: open });
  };

  useEffect(() => {
    let bs = JSON.parse(localStorage.getItem("basket"));
    dispatch(mapBasket(bs));
  }, []);

  const basket = useSelector((state) => state.basketStore.basket);
  let sum = 0;
  basket.forEach((element) => {
    let totalOne = element.disPrice*element.count;
    sum += totalOne;
  });

  const handleHistory = ()=>
  {
    if(basket.length != 0)
    {
      let currentBasket = JSON.parse(localStorage.getItem("basket"))
      let histories = JSON.parse(localStorage.getItem("history"))
      localStorage.setItem("history",JSON.stringify([...histories,currentBasket]))
      let currentHistory = JSON.parse(localStorage.getItem("history"))
      dispatch(setHistory(currentHistory))
      localStorage.setItem("basket",JSON.stringify([]))
      let emptyBasket = JSON.parse(localStorage.getItem("basket"))
      dispatch(mapBasket(emptyBasket))
    }
  }

  return (
    <div>
      {["right"].map(() => (
        <React.Fragment>
          <Drawer
            anchor={"right"}
            open={side["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <div className="fragment">
              <div className="basket-content w-full flex justify-start align-center">
                {basket &&
                  basket.map((e) => {
                    return (
                      <div className="cart-item flex justify-between align-center">
                        <div
                          onClick={() => dispatch(removeBasket(e))}
                          className="cart-del flex justify-center align-center"
                        >
                          X
                        </div>
                        <div className="cart-image">
                          <img src={e.img} alt="" />
                        </div>
                        <div className="cart-content flex justify-start align-center flex-column">
                          <p className="cart-title">{e.name}</p>
                          <p className="cart-subtitle">{e.subtitle}</p>
                          <p className="cart-price">{e.disPrice} AZN</p>
                          <div className="cart-operation">
                            <p
                              className="cart-oper flex justify-center align-center pt-1"
                              onClick={() => dispatch(decreaseBasket(e))}
                            >
                              -
                            </p>
                            <p>{e.count}</p>
                            <p
                              className="cart-oper flex justify-center align-center pt-1"
                              onClick={() => dispatch(increaseBasket(e))}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="submit-basket">
                <p className="total">
                  <span>TOPLAM:</span>
                  <span className="total-price">{sum} AZN</span>
                </p>
                <p className="add-history">
                  SEPETE GİT
                </p>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
