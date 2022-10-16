import React, { useEffect, useState } from "react";
import Cards from "components/Card/Card";
import axios from "axios";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "redux/productSlice";
import Loader from 'components/Loader/Loader'

function Product() {
  const dispatch = useDispatch();
  const [faster, setFaster] = useState(0);
  const [perPage, setPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [totalLength, setTotalLength] = useState(0);
  const prods = useSelector((state) => state.products.product);
  const inputData = useSelector((state) => state.search.inpValue);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const { height, top } = document.body.getBoundingClientRect();
      if (height + top === window.innerHeight && totalLength >= perPage&& !loading) {
        setLoading(true)
        setTimeout(() => {
          setPerPage(perPage + 12);
          setLoading(false)
        }, 3000);
      }
    });
  }, [perPage, totalLength]);

  useEffect(() => {
    console.log(perPage);
    let bs = JSON.parse(localStorage.getItem("products"));
    if (bs.length == 0) {
      axios.get("./api/product.json").then((resp) => {
        localStorage.setItem("products", JSON.stringify(resp.data));
        let x = JSON.parse(localStorage.getItem("products"));
        dispatch(setProducts(x.slice(0, perPage)));
        setTotalLength(x.length);
      });
    } else {
      let x = JSON.parse(localStorage.getItem("products"));
      dispatch(setProducts(x.slice(0, perPage)));
      setTotalLength(x.length);
    }
  }, [faster, perPage]);

  return (
    <div className="products">
      {prods &&
        prods
          .filter((e) => {
            if (inputData === "") {
              return e;
            } else if (e.name.toLowerCase().includes(inputData)) {
              return e;
            }
          })
          .map((e) => {
            return <Cards prod={e} faster={faster} setFaster={setFaster} />;
          })}
          {loading&&<Loader/>}
    </div>
  );
}

export default Product;
