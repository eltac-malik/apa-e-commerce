import React,{useState} from "react";
import Hoverable from './HoverableDrop/index'
import Clickable from './ClickableDrop/index'
import "./Categories.css";

function Categories() {

  const [hide,setHide ] = useState('closed')

  return (
    <div className="categories">
      <div className="menu-icon" >
      <svg
        onClick={()=> hide==='closed'?setHide("opened"):setHide('closed')}
        cursor="pointer"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_604_8063)">
          <rect x="7" y="4" width="36" height="36" rx="4" fill="white" />
          <rect
            x="7.5"
            y="4.5"
            width="35"
            height="35"
            rx="3.5"
            stroke="white"
            stroke-opacity="0.1"
          />
        </g>
        <path
          d="M32.201 15.5967H17.799C17.3596 15.5967 17 15.2374 17 14.7983C17 14.3593 17.3596 14 17.799 14H32.201C32.6405 14 33 14.3593 33 14.7983C33 15.2374 32.6405 15.5967 32.201 15.5967Z"
          fill="#FF0000"
        />
        <path
          d="M32.201 22.8018H17.799C17.3596 22.8018 17 22.4425 17 22.0034C17 21.5643 17.3596 21.2051 17.799 21.2051H32.201C32.6405 21.2051 33 21.5643 33 22.0034C33 22.4425 32.6405 22.8018 32.201 22.8018Z"
          fill="#FF0000"
        />
        <path
          d="M32.201 30H17.799C17.3596 30 17 29.6407 17 29.2017C17 28.7626 17.3596 28.4033 17.799 28.4033H32.201C32.6405 28.4033 33 28.7626 33 29.2017C33 29.6407 32.6405 30 32.201 30Z"
          fill="#FF0000"
        />
        <defs>
          <filter
            id="filter0_d_604_8063"
            x="0"
            y="0"
            width="50"
            height="50"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.85098 0 0 0 0 0.027451 0 0 0 0 0.0352942 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_604_8063"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_604_8063"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <Clickable hide={hide}/>
      </div>

      <ul className="category-ul">
        <div className="dropdown">
          <li className="dropbtn">Kadın</li>
          <Hoverable hide={hide}/>
        </div>
        <li>Erkek</li>
        <li>Çocuk</li>
        <li>Ayakkabi & Çanta</li>
        <li>Saat & Aksesuar</li>
        <li>Kozmetik Ev & Yaşam</li>
        <li>Spor & Outdoor</li>
        <li>Kitap & Hobi</li>
        <li>Oto & Bahçe</li>
      </ul>
      <p> </p>
    </div>
  );
}

export default Categories;
