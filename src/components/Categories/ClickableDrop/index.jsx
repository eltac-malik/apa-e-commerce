import React from "react";
import "./ClickableDrop.css";
import Hover from './Hover/Hover'

function index({ hide }) {
  return (
    <div class={`dropdowns ${hide}`}>
      <ul className="cate-ul">
        <div className="dropdown">
        <li className="cate-li">
          <i class="fa-regular fa-shirt dropbtn"></i>
          <span>Moda</span>
          <i class="fa-solid fa-arrow-right"></i>
        <Hover/>
        </li>
        </div>

        <li className="cate-li">
          <i class="bi bi-person-bounding-box"></i>
          <span>Kozmetik</span>
          <i class="fa-solid fa-arrow-right"></i>
        </li>

        <li className="cate-li">
        <i class="fa-solid fa-broom-ball"></i>
          <span>Spor ve Outdoor</span>
          <i class="fa-solid fa-arrow-right"></i>
        </li>

        <li className="cate-li">
        <i class="fa-solid fa-cake-candles"></i>
          <span>Kişisel bakım</span>
          <i class="fa-solid fa-arrow-right"></i>
        </li>

        <li className="cate-li">
        <i class="fa-solid fa-kitchen-set"></i>
          <span>Mutfak</span>
          <i class="fa-solid fa-arrow-right"></i>
        </li>

        <li className="cate-li">
        <i class="fa-solid fa-teddy-bear"></i>
          <span>Oyuncak</span>
          <i class="fa-solid fa-arrow-right"></i>
        </li>

        <li className="cate-li">
        <i class="fa-solid fa-book"></i>
          <span>Kitap</span>
          <i class="fa-solid fa-arrow-right"></i>
        </li>

        <li className="cate-li">
        <i class="fa-solid fa-house-user"></i>
          <span>Ev ve Yaşam</span>
          <i class="fa-solid fa-arrow-right"></i>
        </li>

        <li className="cate-li">
        <i class="fa-solid fa-plug"></i>
          <span>Elektronik</span>
          <i class="fa-solid fa-arrow-right"></i>
        </li>


      </ul>
    </div>
  );
}

export default index;
