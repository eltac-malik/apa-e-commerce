import React from "react";
import Basket from "components/Basket/Basket";
import Wish from 'components/Wish/Wish'
import "./Navbar.css";
import LangPop from 'components/LangPopOver/LangPop'
import {setInputValue} from 'redux/searchSlice'
import {useDispatch} from 'react-redux'


function Navbar() {
  const [side, setSide] = React.useState(false);
  const [side2, setSide2] = React.useState(false);
  const dispatch = useDispatch()
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSide({ ...side, [anchor]: open });
  }

      
  const toggleDrawerWish = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSide2({ ...side2, [anchor]: open });
  };


  return (
    <div className="navbar">
      <div className="logo-img">
        <svg
          width="119"
          height="27"
          viewBox="0 0 119 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.82434 26C1.35575 26 0.961711 25.8403 0.642218 25.5208C0.344025 25.2013 0.194928 24.8072 0.194928 24.3386V2.70898C0.194928 2.24039 0.354674 1.84634 0.674167 1.52685C0.99366 1.20736 1.37705 1.04761 1.82434 1.04761C2.29293 1.04761 2.68697 1.20736 3.00646 1.52685C3.32596 1.84634 3.4857 2.24039 3.4857 2.70898V22.6773H15.0513C15.5199 22.6773 15.914 22.837 16.2335 23.1565C16.553 23.476 16.7127 23.87 16.7127 24.3386C16.7127 24.8072 16.553 25.2013 16.2335 25.5208C15.914 25.8403 15.5199 26 15.0513 26H1.82434ZM37.3292 26.3195C34.8585 26.3195 32.654 25.7764 30.7157 24.6901C28.7988 23.6038 27.3078 22.0915 26.2428 20.1533C25.1778 18.1937 24.6454 15.9786 24.6454 13.5078C24.6454 11.0371 25.1778 8.83259 26.2428 6.89433C27.3078 4.95607 28.7988 3.44381 30.7157 2.35753C32.654 1.27126 34.8585 0.728121 37.3292 0.728121C39.7787 0.728121 41.9619 1.27126 43.8788 2.35753C45.8171 3.44381 47.3187 4.95607 48.3837 6.89433C49.47 8.83259 50.0131 11.0371 50.0131 13.5078C50.0131 15.9786 49.47 18.1937 48.3837 20.1533C47.3187 22.0915 45.8277 23.6038 43.9108 24.6901C41.9938 25.7764 39.8 26.3195 37.3292 26.3195ZM37.3292 23.3163C39.1397 23.3163 40.7691 22.8903 42.2175 22.0383C43.6658 21.165 44.7947 19.9829 45.6041 18.4919C46.4135 17.001 46.8182 15.3396 46.8182 13.5078C46.8182 11.6761 46.4135 10.0147 45.6041 8.52374C44.7947 7.03278 43.6658 5.8613 42.2175 5.00932C40.7904 4.15734 39.161 3.73135 37.3292 3.73135C35.4975 3.73135 33.8574 4.15734 32.409 5.00932C30.982 5.8613 29.8637 7.03278 29.0544 8.52374C28.245 10.0147 27.8403 11.6761 27.8403 13.5078C27.8403 15.3396 28.245 17.001 29.0544 18.4919C29.8637 19.9829 30.9926 21.165 32.441 22.0383C33.8894 22.8903 35.5188 23.3163 37.3292 23.3163ZM79.8335 13.0605C80.3021 13.0605 80.6855 13.2203 80.9837 13.5398C81.3032 13.838 81.4629 14.232 81.4629 14.7219V22.3578C81.4629 22.869 81.2925 23.263 80.9517 23.5399C78.7153 25.393 76.1061 26.3195 73.1241 26.3195C70.8451 26.3195 68.7577 25.7551 66.8621 24.6262C64.9877 23.4973 63.5074 21.9531 62.4211 19.9935C61.3349 18.034 60.7917 15.8721 60.7917 13.5078C60.7917 11.1649 61.3349 9.02428 62.4211 7.08603C63.5074 5.12647 64.9877 3.58226 66.8621 2.45338C68.7577 1.30321 70.8451 0.728121 73.1241 0.728121C74.7429 0.728121 76.138 0.941116 77.3095 1.36711C78.5023 1.7931 79.7057 2.49598 80.9198 3.47576C81.1754 3.66745 81.3458 3.8698 81.431 4.08279C81.5162 4.27449 81.5588 4.50878 81.5588 4.78568C81.5588 5.21167 81.399 5.56311 81.0795 5.84C80.7813 6.1169 80.4192 6.25535 79.9932 6.25535C79.6099 6.25535 79.2478 6.1169 78.907 5.84C78.0337 5.09452 77.1817 4.56203 76.351 4.24254C75.5203 3.90175 74.4447 3.73135 73.1241 3.73135C71.4628 3.73135 69.9292 4.16799 68.5235 5.04127C67.139 5.91455 66.0314 7.10733 65.2007 8.61959C64.3913 10.1106 63.9867 11.74 63.9867 13.5078C63.9867 15.297 64.3913 16.9371 65.2007 18.428C66.0314 19.919 67.139 21.1011 68.5235 21.9744C69.9292 22.8477 71.4628 23.2843 73.1241 23.2843C74.9133 23.2843 76.6279 22.7518 78.268 21.6868V15.9999H73.859C73.3691 15.9999 72.9644 15.8614 72.6449 15.5845C72.3467 15.3076 72.1976 14.9562 72.1976 14.5302C72.1976 14.1042 72.3467 13.7528 72.6449 13.4759C72.9644 13.199 73.3691 13.0605 73.859 13.0605H79.8335ZM105.659 26.3195C103.189 26.3195 100.984 25.7764 99.046 24.6901C97.129 23.6038 95.6381 22.0915 94.5731 20.1533C93.5081 18.1937 92.9756 15.9786 92.9756 13.5078C92.9756 11.0371 93.5081 8.83259 94.5731 6.89433C95.6381 4.95607 97.129 3.44381 99.046 2.35753C100.984 1.27126 103.189 0.728121 105.659 0.728121C108.109 0.728121 110.292 1.27126 112.209 2.35753C114.147 3.44381 115.649 4.95607 116.714 6.89433C117.8 8.83259 118.343 11.0371 118.343 13.5078C118.343 15.9786 117.8 18.1937 116.714 20.1533C115.649 22.0915 114.158 23.6038 112.241 24.6901C110.324 25.7764 108.13 26.3195 105.659 26.3195ZM105.659 23.3163C107.47 23.3163 109.099 22.8903 110.548 22.0383C111.996 21.165 113.125 19.9829 113.934 18.4919C114.744 17.001 115.148 15.3396 115.148 13.5078C115.148 11.6761 114.744 10.0147 113.934 8.52374C113.125 7.03278 111.996 5.8613 110.548 5.00932C109.121 4.15734 107.491 3.73135 105.659 3.73135C103.828 3.73135 102.188 4.15734 100.739 5.00932C99.3122 5.8613 98.194 7.03278 97.3846 8.52374C96.5753 10.0147 96.1706 11.6761 96.1706 13.5078C96.1706 15.3396 96.5753 17.001 97.3846 18.4919C98.194 19.9829 99.3229 21.165 100.771 22.0383C102.22 22.8903 103.849 23.3163 105.659 23.3163Z"
            fill="#FF0000"
          />
          <path
            d="M0.642218 25.5208L-0.819892 26.8854L-0.796371 26.9106L-0.771996 26.935L0.642218 25.5208ZM0.674167 1.52685L-0.740046 0.112638L-0.740046 0.112638L0.674167 1.52685ZM3.4857 22.6773H1.4857V24.6773H3.4857V22.6773ZM16.2335 23.1565L17.6477 21.7423L17.6477 21.7423L16.2335 23.1565ZM16.2335 25.5208L17.6477 26.935L17.6477 26.935L16.2335 25.5208ZM1.82434 24C1.82127 24 1.86384 24.0004 1.92878 24.0267C1.99517 24.0536 2.0389 24.089 2.05643 24.1065L-0.771996 26.935C-0.0621781 27.6448 0.847285 28 1.82434 28V24ZM2.10433 24.1561C2.12607 24.1794 2.15632 24.2223 2.17732 24.2778C2.19742 24.3309 2.19493 24.3582 2.19493 24.3386H-1.80507C-1.80507 25.2738 -1.49013 26.1673 -0.819892 26.8854L2.10433 24.1561ZM2.19493 24.3386V2.70898H-1.80507V24.3386H2.19493ZM2.19493 2.70898C2.19493 2.7059 2.19454 2.74847 2.16822 2.81341C2.1413 2.8798 2.10591 2.92354 2.08838 2.94107L-0.740046 0.112638C-1.44986 0.822456 -1.80507 1.73192 -1.80507 2.70898H2.19493ZM2.08838 2.94107C2.07974 2.9497 2.04045 2.98446 1.97056 3.01358C1.90027 3.04287 1.84423 3.04761 1.82434 3.04761V-0.952387C0.840596 -0.952387 -0.0497603 -0.577647 -0.740046 0.112638L2.08838 2.94107ZM1.82434 3.04761C1.82742 3.04761 1.78484 3.04723 1.7199 3.0209C1.65352 2.99399 1.60978 2.95859 1.59225 2.94107L4.42068 0.112638C3.71086 -0.597179 2.8014 -0.952387 1.82434 -0.952387V3.04761ZM1.59225 2.94107C1.57472 2.92354 1.53933 2.8798 1.51242 2.81341C1.48609 2.74847 1.4857 2.7059 1.4857 2.70898H5.4857C5.4857 1.73192 5.1305 0.822456 4.42068 0.112638L1.59225 2.94107ZM1.4857 2.70898V22.6773H5.4857V2.70898H1.4857ZM3.4857 24.6773H15.0513V20.6773H3.4857V24.6773ZM15.0513 24.6773C15.0544 24.6773 15.0118 24.6769 14.9469 24.6506C14.8805 24.6236 14.8368 24.5883 14.8193 24.5707L17.6477 21.7423C16.9379 21.0325 16.0284 20.6773 15.0513 20.6773V24.6773ZM14.8193 24.5707C14.8017 24.5532 14.7663 24.5095 14.7394 24.4431C14.7131 24.3781 14.7127 24.3356 14.7127 24.3386H18.7127C18.7127 23.3616 18.3575 22.4521 17.6477 21.7423L14.8193 24.5707ZM14.7127 24.3386C14.7127 24.3417 14.7131 24.2991 14.7394 24.2342C14.7663 24.1678 14.8017 24.1241 14.8193 24.1065L17.6477 26.935C18.3575 26.2252 18.7127 25.3157 18.7127 24.3386H14.7127ZM14.8193 24.1065C14.8368 24.089 14.8805 24.0536 14.9469 24.0267C15.0118 24.0004 15.0544 24 15.0513 24V28C16.0284 28 16.9379 27.6448 17.6477 26.935L14.8193 24.1065ZM15.0513 24H1.82434V28H15.0513V24ZM30.7157 24.6901L29.7297 26.4301L29.7379 26.4348L30.7157 24.6901ZM26.2428 20.1533L24.4856 21.1083L24.49 21.1164L26.2428 20.1533ZM26.2428 6.89433L24.49 5.93123V5.93123L26.2428 6.89433ZM30.7157 2.35753L29.7379 0.612829L29.7297 0.61749L30.7157 2.35753ZM43.8788 2.35753L42.8928 4.0976L42.901 4.10222L43.8788 2.35753ZM48.3837 6.89433L46.6308 7.85743L46.6349 7.86479L46.639 7.87212L48.3837 6.89433ZM48.3837 20.1533L46.6345 19.1836L46.6308 19.1902L48.3837 20.1533ZM43.9108 24.6901L44.8968 26.4301L43.9108 24.6901ZM42.2175 22.0383L43.2315 23.7622L43.2409 23.7567L43.2502 23.751L42.2175 22.0383ZM45.6041 18.4919L43.8464 17.5377L45.6041 18.4919ZM45.6041 8.52374L47.3618 7.56956L45.6041 8.52374ZM42.2175 5.00932L41.1922 6.7266L41.2034 6.73319L42.2175 5.00932ZM32.409 5.00932L31.395 3.28542L31.3838 3.29208L32.409 5.00932ZM29.0544 8.52374L27.2967 7.56956V7.56956L29.0544 8.52374ZM29.0544 18.4919L30.8121 17.5377L29.0544 18.4919ZM32.441 22.0383L31.4083 23.751L31.4176 23.7567L31.4269 23.7622L32.441 22.0383ZM37.3292 24.3195C35.1617 24.3195 33.3007 23.8461 31.6935 22.9454L29.7379 26.4348C32.0073 27.7066 34.5552 28.3195 37.3292 28.3195V24.3195ZM31.7017 22.95C30.1088 22.0473 28.8827 20.8046 27.9957 19.1902L24.49 21.1164C25.7329 23.3784 27.4888 25.1603 29.7297 26.4301L31.7017 22.95ZM28.0001 19.1983C27.111 17.5624 26.6454 15.6817 26.6454 13.5078H22.6454C22.6454 16.2755 23.2447 18.825 24.4856 21.1083L28.0001 19.1983ZM26.6454 13.5078C26.6454 11.3336 27.1111 9.46725 27.9957 7.85743L24.49 5.93123C23.2446 8.19792 22.6454 10.7406 22.6454 13.5078H26.6454ZM27.9957 7.85743C28.8827 6.24297 30.1088 5.00027 31.7017 4.09758L29.7297 0.61749C27.4888 1.88735 25.7329 3.66918 24.49 5.93123L27.9957 7.85743ZM31.6935 4.10222C33.3007 3.20151 35.1617 2.72812 37.3292 2.72812V-1.27188C34.5552 -1.27188 32.0073 -0.658991 29.7379 0.612849L31.6935 4.10222ZM37.3292 2.72812C39.4725 2.72812 41.3091 3.20015 42.8928 4.09758L44.8649 0.61749C42.6146 -0.657635 40.0848 -1.27188 37.3292 -1.27188V2.72812ZM42.901 4.10222C44.5145 5.00649 45.7469 6.24869 46.6308 7.85743L50.1365 5.93123C48.8905 3.66346 47.1196 1.88113 44.8566 0.612849L42.901 4.10222ZM46.639 7.87212C47.5397 9.47927 48.0131 11.3403 48.0131 13.5078H52.0131C52.0131 10.7338 51.4002 8.1859 50.1284 5.91654L46.639 7.87212ZM48.0131 13.5078C48.0131 15.675 47.5398 17.5505 46.6345 19.1836L50.1329 21.123C51.4001 18.837 52.0131 16.2822 52.0131 13.5078H48.0131ZM46.6308 19.1902C45.7438 20.8046 44.5177 22.0473 42.9248 22.95L44.8968 26.4301C47.1377 25.1603 48.8936 23.3784 50.1365 21.1164L46.6308 19.1902ZM42.9248 22.95C41.3436 23.846 39.4971 24.3195 37.3292 24.3195V28.3195C40.1028 28.3195 42.644 27.7067 44.8968 26.4301L42.9248 22.95ZM37.3292 25.3163C39.4677 25.3163 41.4521 24.8089 43.2315 23.7622L41.2034 20.3144C40.0861 20.9717 38.8117 21.3163 37.3292 21.3163V25.3163ZM43.2502 23.751C45.0044 22.6933 46.3831 21.2489 47.3618 19.4461L43.8464 17.5377C43.2063 18.7168 42.3273 19.6367 41.1848 20.3255L43.2502 23.751ZM47.3618 19.4461C48.3427 17.6391 48.8182 15.6456 48.8182 13.5078H44.8182C44.8182 15.0336 44.4842 16.3628 43.8464 17.5377L47.3618 19.4461ZM48.8182 13.5078C48.8182 11.3701 48.3427 9.37652 47.3618 7.56956L43.8464 9.47793C44.4842 10.6529 44.8182 11.9821 44.8182 13.5078H48.8182ZM47.3618 7.56956C46.3808 5.76247 44.9962 4.32353 43.2315 3.28546L41.2034 6.73319C42.3354 7.39908 43.2086 8.30308 43.8464 9.47793L47.3618 7.56956ZM43.2427 3.29208C41.4746 2.23652 39.484 1.73135 37.3292 1.73135V5.73135C38.8379 5.73135 40.1062 6.07817 41.1922 6.72657L43.2427 3.29208ZM37.3292 1.73135C35.174 1.73135 33.1781 2.23659 31.395 3.28546L33.4231 6.73319C34.5367 6.0781 35.8209 5.73135 37.3292 5.73135V1.73135ZM31.3838 3.29208C29.6419 4.33204 28.2736 5.76998 27.2967 7.56956L30.8121 9.47793C31.4539 8.29557 32.322 7.39057 33.4343 6.72657L31.3838 3.29208ZM27.2967 7.56956C26.3157 9.37652 25.8403 11.3701 25.8403 13.5078H29.8403C29.8403 11.9821 30.1742 10.6529 30.8121 9.47793L27.2967 7.56956ZM25.8403 13.5078C25.8403 15.6456 26.3157 17.6391 27.2967 19.4461L30.8121 17.5377C30.1742 16.3628 29.8403 15.0336 29.8403 13.5078H25.8403ZM27.2967 19.4461C28.2753 21.2489 29.6541 22.6933 31.4083 23.751L33.4737 20.3255C32.3312 19.6367 31.4522 18.7168 30.8121 17.5377L27.2967 19.4461ZM31.4269 23.7622C33.2064 24.8089 35.1907 25.3163 37.3292 25.3163V21.3163C35.8468 21.3163 34.5723 20.9717 33.455 20.3144L31.4269 23.7622ZM80.9837 13.5398L79.5216 14.9044L79.5686 14.9548L79.619 15.0019L80.9837 13.5398ZM80.9517 23.5399L79.6905 21.9877L79.6831 21.9937L79.6757 21.9999L80.9517 23.5399ZM66.8621 24.6262L65.8302 26.3395L65.8388 26.3446L66.8621 24.6262ZM62.4211 19.9935L64.1703 19.0239L62.4211 19.9935ZM62.4211 7.08603L64.1658 8.06383L64.1703 8.0557L62.4211 7.08603ZM66.8621 2.45338L67.8939 4.16666L67.8995 4.16326L66.8621 2.45338ZM77.3095 1.36711L76.626 3.24672L76.6368 3.25059L77.3095 1.36711ZM80.9198 3.47576L79.6637 5.03215L79.6914 5.05445L79.7198 5.07576L80.9198 3.47576ZM81.431 4.08279L79.574 4.82558L79.588 4.8606L79.6033 4.89507L81.431 4.08279ZM81.0795 5.84L79.7697 4.32863L79.7437 4.35109L79.7186 4.37442L81.0795 5.84ZM78.907 5.84L77.6084 7.36113L77.6269 7.37691L77.6458 7.39223L78.907 5.84ZM76.351 4.24254L75.5919 6.09288L75.6124 6.10128L75.6331 6.10923L76.351 4.24254ZM68.5235 5.04127L67.4681 3.34235L67.4564 3.34968L68.5235 5.04127ZM65.2007 8.61959L63.4478 7.65669L63.443 7.66541L65.2007 8.61959ZM65.2007 18.428L63.443 19.3822L63.4482 19.3918L63.4536 19.4014L65.2007 18.428ZM68.5235 21.9744L67.4564 23.666L67.4681 23.6733L68.5235 21.9744ZM78.268 21.6868L79.3572 23.3642L80.268 22.7728V21.6868H78.268ZM78.268 15.9999H80.268V13.9999H78.268V15.9999ZM72.6449 15.5845L71.284 17.0501L71.3091 17.0735L71.335 17.0959L72.6449 15.5845ZM72.6449 13.4759L71.335 11.9645L71.3091 11.987L71.284 12.0103L72.6449 13.4759ZM79.8335 15.0605C79.8375 15.0605 79.7846 15.0604 79.7032 15.0265C79.6187 14.9913 79.5562 14.9415 79.5216 14.9044L82.4458 12.1751C81.7398 11.4188 80.8117 11.0605 79.8335 11.0605V15.0605ZM79.619 15.0019C79.5722 14.9582 79.5221 14.8906 79.4896 14.8104C79.4592 14.7352 79.4629 14.6958 79.4629 14.7219H83.4629C83.4629 13.7517 83.1242 12.8019 82.3483 12.0777L79.619 15.0019ZM79.4629 14.7219V22.3578H83.4629V14.7219H79.4629ZM79.4629 22.3578C79.4629 22.3915 79.4576 22.3396 79.4994 22.2429C79.5449 22.1376 79.6171 22.0473 79.6905 21.9877L82.2129 25.0921C83.1007 24.3708 83.4629 23.3606 83.4629 22.3578H79.4629ZM79.6757 21.9999C77.8083 23.5471 75.6537 24.3195 73.1241 24.3195V28.3195C76.5585 28.3195 79.6222 27.2388 82.2278 25.0799L79.6757 21.9999ZM73.1241 24.3195C71.1929 24.3195 69.461 23.8461 67.8854 22.9078L65.8388 26.3446C68.0545 27.664 70.4973 28.3195 73.1241 28.3195V24.3195ZM67.8939 22.9129C66.3271 21.9693 65.091 20.6847 64.1703 19.0239L60.6719 20.9632C61.9238 23.2215 63.6483 25.0253 65.8302 26.3394L67.8939 22.9129ZM64.1703 19.0239C63.2577 17.3775 62.7917 15.5522 62.7917 13.5078H58.7917C58.7917 16.1919 59.412 18.6904 60.6719 20.9632L64.1703 19.0239ZM62.7917 13.5078C62.7917 11.488 63.2562 9.68695 64.1658 8.06382L60.6765 6.10824C59.4136 8.36162 58.7917 10.8418 58.7917 13.5078H62.7917ZM64.1703 8.0557C65.091 6.39487 66.3271 5.11028 67.8939 4.16665L65.8302 0.740115C63.6483 2.05423 61.9238 3.85807 60.6719 6.11636L64.1703 8.0557ZM67.8995 4.16326C69.4734 3.20834 71.2002 2.72812 73.1241 2.72812V-1.27188C70.49 -1.27188 68.0421 -0.601924 65.8246 0.743501L67.8995 4.16326ZM73.1241 2.72812C74.5758 2.72812 75.7281 2.92016 76.626 3.24669L77.993 -0.512481C76.548 -1.03793 74.91 -1.27188 73.1241 -1.27188V2.72812ZM76.6368 3.25059C77.5756 3.58588 78.5854 4.16191 79.6637 5.03215L82.1758 1.91936C80.826 0.830048 79.4289 0.000311852 77.9822 -0.516378L76.6368 3.25059ZM79.7198 5.07576C79.7503 5.09867 79.7397 5.0955 79.7094 5.05956C79.6778 5.02203 79.6217 4.9449 79.574 4.82558L83.2879 3.34001C83.0231 2.67791 82.5586 2.20487 82.1198 1.87576L79.7198 5.07576ZM79.6033 4.89507C79.5733 4.82751 79.5625 4.77878 79.5591 4.76006C79.5558 4.74196 79.5588 4.74836 79.5588 4.78568H83.5588C83.5588 4.31419 83.4876 3.78578 83.2586 3.27052L79.6033 4.89507ZM79.5588 4.78568C79.5588 4.74296 79.5682 4.65115 79.6182 4.54115C79.6684 4.43075 79.7328 4.36055 79.7697 4.32863L82.3894 7.35138C83.151 6.6913 83.5588 5.78663 83.5588 4.78568H79.5588ZM79.7186 4.37442C79.7478 4.34731 79.7999 4.3102 79.87 4.28341C79.9385 4.25721 79.9862 4.25535 79.9932 4.25535V8.25535C80.898 8.25535 81.7536 7.94331 82.4404 7.30559L79.7186 4.37442ZM79.9932 4.25535C80.0485 4.25535 80.104 4.26643 80.1484 4.28341C80.1896 4.29914 80.1956 4.3101 80.1682 4.28778L77.6458 7.39223C78.2885 7.91443 79.0848 8.25535 79.9932 8.25535V4.25535ZM80.2055 4.31887C79.2072 3.46665 78.1627 2.79652 77.069 2.37585L75.6331 6.10923C76.2007 6.32755 76.8602 6.72239 77.6084 7.36113L80.2055 4.31887ZM77.1101 2.3922C75.9532 1.91755 74.5933 1.73135 73.1241 1.73135V5.73135C74.2961 5.73135 75.0875 5.88595 75.5919 6.09288L77.1101 2.3922ZM73.1241 1.73135C71.0913 1.73135 69.192 2.27148 67.4681 3.34239L69.5788 6.74016C70.6665 6.0645 71.8342 5.73135 73.1241 5.73135V1.73135ZM67.4564 3.34968C65.7696 4.41367 64.4325 5.86397 63.4478 7.6567L66.9537 9.58248C67.6303 8.35069 68.5083 7.41544 69.5905 6.73287L67.4564 3.34968ZM63.443 7.66541C62.4678 9.4618 61.9867 11.4212 61.9867 13.5078H65.9867C65.9867 12.0587 66.3148 10.7593 66.9584 9.57378L63.443 7.66541ZM61.9867 13.5078C61.9867 15.6115 62.4659 17.5822 63.443 19.3822L66.9584 17.4738C66.3168 16.2919 65.9867 14.9825 65.9867 13.5078H61.9867ZM63.4536 19.4014C64.4401 21.172 65.7764 22.6063 67.4564 23.666L69.5905 20.2828C68.5015 19.5959 67.6228 18.666 66.9479 17.4546L63.4536 19.4014ZM67.4681 23.6733C69.192 24.7442 71.0913 25.2843 73.1241 25.2843V21.2843C71.8342 21.2843 70.6665 20.9512 69.5788 20.2755L67.4681 23.6733ZM73.1241 25.2843C75.3357 25.2843 77.4242 24.6194 79.3572 23.3642L77.1788 20.0095C75.8316 20.8843 74.4909 21.2843 73.1241 21.2843V25.2843ZM80.268 21.6868V15.9999H76.268V21.6868H80.268ZM78.268 13.9999H73.859V17.9999H78.268V13.9999ZM73.859 13.9999C73.8028 13.9999 73.8015 13.9921 73.8354 14.0037C73.8519 14.0094 73.8727 14.0183 73.8955 14.0313C73.9184 14.0444 73.9384 14.059 73.9548 14.0732L71.335 17.0959C72.075 17.7372 72.9688 17.9999 73.859 17.9999V13.9999ZM74.0058 14.1189C74.0494 14.1594 74.1079 14.2316 74.1506 14.3322C74.1924 14.4307 74.1976 14.5059 74.1976 14.5302H70.1976C70.1976 15.483 70.5572 16.3753 71.284 17.0501L74.0058 14.1189ZM74.1976 14.5302C74.1976 14.5545 74.1924 14.6298 74.1506 14.7282C74.1079 14.8288 74.0494 14.901 74.0058 14.9415L71.284 12.0103C70.5572 12.6851 70.1976 13.5774 70.1976 14.5302H74.1976ZM73.9548 14.9873C73.9384 15.0014 73.9184 15.016 73.8955 15.0291C73.8727 15.0421 73.8519 15.0511 73.8354 15.0567C73.8015 15.0683 73.8028 15.0605 73.859 15.0605V11.0605C72.9688 11.0605 72.075 11.3232 71.335 11.9645L73.9548 14.9873ZM73.859 15.0605H79.8335V11.0605H73.859V15.0605ZM99.046 24.6901L98.06 26.4301L98.0682 26.4348L99.046 24.6901ZM94.5731 20.1533L92.8158 21.1083L92.8203 21.1164L94.5731 20.1533ZM94.5731 6.89433L92.8203 5.93123V5.93123L94.5731 6.89433ZM99.046 2.35753L98.0682 0.612829L98.06 0.61749L99.046 2.35753ZM112.209 2.35753L111.223 4.0976L111.231 4.10222L112.209 2.35753ZM116.714 6.89433L114.961 7.85743L114.965 7.86479L114.969 7.87212L116.714 6.89433ZM116.714 20.1533L114.965 19.1836L114.961 19.1902L116.714 20.1533ZM112.241 24.6901L113.227 26.4301L112.241 24.6901ZM110.548 22.0383L111.562 23.7622L111.571 23.7567L111.58 23.751L110.548 22.0383ZM113.934 18.4919L112.177 17.5377L113.934 18.4919ZM113.934 8.52374L115.692 7.56956L113.934 8.52374ZM110.548 5.00932L109.522 6.7266L109.534 6.73319L110.548 5.00932ZM100.739 5.00932L99.7252 3.28542L99.7141 3.29208L100.739 5.00932ZM97.3846 8.52374L95.6269 7.56956V7.56956L97.3846 8.52374ZM97.3846 18.4919L99.1423 17.5377L97.3846 18.4919ZM100.771 22.0383L99.7386 23.751L99.7479 23.7567L99.7572 23.7622L100.771 22.0383ZM105.659 24.3195C103.492 24.3195 101.631 23.8461 100.024 22.9454L98.0682 26.4348C100.338 27.7066 102.886 28.3195 105.659 28.3195V24.3195ZM100.032 22.95C98.439 22.0473 97.213 20.8046 96.3259 19.1902L92.8203 21.1164C94.0631 23.3784 95.819 25.1603 98.06 26.4301L100.032 22.95ZM96.3303 19.1983C95.4413 17.5624 94.9756 15.6817 94.9756 13.5078H90.9756C90.9756 16.2755 91.5749 18.825 92.8158 21.1083L96.3303 19.1983ZM94.9756 13.5078C94.9756 11.3336 95.4414 9.46725 96.3259 7.85743L92.8203 5.93123C91.5748 8.19792 90.9756 10.7406 90.9756 13.5078H94.9756ZM96.3259 7.85743C97.213 6.24297 98.439 5.00027 100.032 4.09758L98.06 0.61749C95.819 1.88735 94.0631 3.66918 92.8203 5.93123L96.3259 7.85743ZM100.024 4.10222C101.631 3.20151 103.492 2.72812 105.659 2.72812V-1.27188C102.886 -1.27188 100.338 -0.658991 98.0682 0.612849L100.024 4.10222ZM105.659 2.72812C107.803 2.72812 109.639 3.20015 111.223 4.09758L113.195 0.61749C110.945 -0.657635 108.415 -1.27188 105.659 -1.27188V2.72812ZM111.231 4.10222C112.845 5.00649 114.077 6.24869 114.961 7.85743L118.467 5.93123C117.221 3.66346 115.45 1.88113 113.187 0.612849L111.231 4.10222ZM114.969 7.87212C115.87 9.47927 116.343 11.3403 116.343 13.5078H120.343C120.343 10.7338 119.73 8.1859 118.459 5.91654L114.969 7.87212ZM116.343 13.5078C116.343 15.675 115.87 17.5505 114.965 19.1836L118.463 21.123C119.73 18.837 120.343 16.2822 120.343 13.5078H116.343ZM114.961 19.1902C114.074 20.8046 112.848 22.0473 111.255 22.95L113.227 26.4301C115.468 25.1603 117.224 23.3784 118.467 21.1164L114.961 19.1902ZM111.255 22.95C109.674 23.846 107.827 24.3195 105.659 24.3195V28.3195C108.433 28.3195 110.974 27.7067 113.227 26.4301L111.255 22.95ZM105.659 25.3163C107.798 25.3163 109.782 24.8089 111.562 23.7622L109.534 20.3144C108.416 20.9717 107.142 21.3163 105.659 21.3163V25.3163ZM111.58 23.751C113.335 22.6933 114.713 21.2489 115.692 19.4461L112.177 17.5377C111.537 18.7168 110.658 19.6367 109.515 20.3255L111.58 23.751ZM115.692 19.4461C116.673 17.6391 117.148 15.6456 117.148 13.5078H113.148C113.148 15.0336 112.814 16.3628 112.177 17.5377L115.692 19.4461ZM117.148 13.5078C117.148 11.3701 116.673 9.37652 115.692 7.56956L112.177 9.47793C112.814 10.6529 113.148 11.9821 113.148 13.5078H117.148ZM115.692 7.56956C114.711 5.76247 113.327 4.32353 111.562 3.28546L109.534 6.73319C110.666 7.39908 111.539 8.30308 112.177 9.47793L115.692 7.56956ZM111.573 3.29208C109.805 2.23652 107.814 1.73135 105.659 1.73135V5.73135C107.168 5.73135 108.436 6.07817 109.523 6.72657L111.573 3.29208ZM105.659 1.73135C103.504 1.73135 101.508 2.23659 99.7253 3.28546L101.753 6.73319C102.867 6.0781 104.151 5.73135 105.659 5.73135V1.73135ZM99.7141 3.29208C97.9722 4.33204 96.6038 5.76998 95.6269 7.56956L99.1423 9.47793C99.7842 8.29557 100.652 7.39057 101.765 6.72657L99.7141 3.29208ZM95.6269 7.56956C94.646 9.37652 94.1706 11.3701 94.1706 13.5078H98.1706C98.1706 11.9821 98.5045 10.6529 99.1423 9.47793L95.6269 7.56956ZM94.1706 13.5078C94.1706 15.6456 94.646 17.6391 95.6269 19.4461L99.1423 17.5377C98.5045 16.3628 98.1706 15.0336 98.1706 13.5078H94.1706ZM95.6269 19.4461C96.6056 21.2489 97.9843 22.6933 99.7386 23.751L101.804 20.3255C100.661 19.6367 99.7824 18.7168 99.1423 17.5377L95.6269 19.4461ZM99.7572 23.7622C101.537 24.8089 103.521 25.3163 105.659 25.3163V21.3163C104.177 21.3163 102.903 20.9717 101.785 20.3144L99.7572 23.7622Z"
            fill="#FF0000"
          />
        </svg>
      </div>

      <div className="langs">
          <p className='go-shop lang-p'>Mağazanı yarat</p>
          <p className='help lang-p'>Yardım </p>
          <LangPop/>
      </div>

      <div className="search-box">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.07892 0.120144H8.17892C9.74909 0.116194 11.2889 0.552938 12.6231 1.38071C13.9574 2.20848 15.0325 3.39405 15.7264 4.80259C16.4203 6.21114 16.7049 7.78612 16.548 9.34844C16.3911 10.9107 15.799 12.3977 14.8389 13.6401L19.4689 18.1701C19.5628 18.2621 19.6377 18.3716 19.6893 18.4924C19.7408 18.6133 19.7681 18.7431 19.7695 18.8745C19.7709 19.0059 19.7464 19.1363 19.6974 19.2582C19.6484 19.3802 19.5758 19.4912 19.4839 19.5851C19.392 19.679 19.2825 19.7539 19.1616 19.8055C19.0408 19.857 18.9109 19.8843 18.7795 19.8857C18.6481 19.8871 18.5177 19.8626 18.3958 19.8136C18.2739 19.7646 18.1628 19.6921 18.0689 19.6001L13.4389 15.0701C11.9744 16.2549 10.1526 16.9103 8.26892 16.9301H8.16892C5.98895 16.8675 3.91854 15.9605 2.39454 14.4005C0.87055 12.8405 0.0121574 10.7495 0.000480652 8.56863C-0.0111942 6.38779 0.82476 4.28769 2.33196 2.71145C3.83917 1.13521 5.89974 0.206092 8.07892 0.120144ZM8.24892 14.9301C9.51701 14.9162 10.7525 14.5264 11.799 13.8101C12.8455 13.0938 13.656 12.0832 14.128 10.9061C14.5999 9.72907 14.7122 8.43845 14.4504 7.19759C14.1887 5.95673 13.5648 4.82138 12.6576 3.93521C11.7504 3.04905 10.6008 2.45188 9.35414 2.21928C8.10749 1.98667 6.81985 2.12908 5.65416 2.62849C4.48846 3.12789 3.4971 3.96185 2.80551 5.02484C2.11392 6.08783 1.75317 7.33207 1.76892 8.60014C1.79002 10.2985 2.48428 11.919 3.69925 13.1058C4.91422 14.2927 6.55056 14.9488 8.24892 14.9301Z"
            fill="#929292"
          />
        </svg>

        <input onChange={(e)=> dispatch(setInputValue(e.target.value))} type="text" />
        <button></button>
      </div>

      <div className="operations">
        <div className="operation">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_604_8024)">
              <path
                d="M3.91276 0C3.26505 0 2.66336 0.321621 2.30393 0.861051L0.541562 3.50466C0.466281 3.61741 0.430145 3.74722 0.370117 3.86723H10.3557V0H3.91276Z"
                fill="#BDBDBD"
              />
              <path
                d="M21.4587 3.50462L19.6963 0.861051C19.3369 0.321621 18.6922 0 18.0445 0H11.6445V3.86719H21.6301C21.5701 3.74722 21.534 3.61741 21.4587 3.50462Z"
                fill="#BDBDBD"
              />
              <path
                d="M21.9799 5.15625H0.0200664C0.0180898 5.20253 0 5.24571 0 5.2922V20.0664C0 21.1326 0.867367 22 1.93359 22H20.0664C21.1326 22 22 21.1326 22 20.0664V5.2922C22 5.24571 21.9819 5.20253 21.9799 5.15625ZM13.5781 11.6016H8.42188C7.35565 11.6016 6.48828 10.7342 6.48828 9.66797C6.48828 8.60174 7.35565 7.73438 8.42188 7.73438H13.5781C14.6444 7.73438 15.5117 8.60174 15.5117 9.66797C15.5117 10.7342 14.6444 11.6016 13.5781 11.6016Z"
                fill="#BDBDBD"
              />
            </g>
            <defs>
              <clipPath id="clip0_604_8024">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="operation" onClick={toggleDrawerWish("right", true)}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9972 20L10.7352 19.8652C10.627 19.809 8.03572 18.4775 5.40461 16.1742C3.84986 14.809 2.60834 13.3933 1.71421 11.9551C0.575201 10.1236 0 8.25843 0 6.41573C0 4.80899 0.649236 3.18539 1.78255 1.97191C2.96712 0.702247 4.51618 0 6.14497 0C8.0585 0 9.84675 0.882022 11.0028 2.34831C12.1532 0.882022 13.9415 0 15.855 0C17.4838 0 19.0329 0.702247 20.2174 1.97191C21.3508 3.19101 22 4.80899 22 6.41573C22 8.25843 21.4248 10.1236 20.2858 11.9494C19.3917 13.3876 18.1501 14.809 16.5954 16.1685C13.9643 18.4719 11.373 19.809 11.2648 19.8596L10.9972 20Z"
              fill="#BDBDBD"
            />
          </svg>
        </div>

        <div className="operation" onClick={toggleDrawer("right", true)}>
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 17.2877L15.7793 4.39411C15.7552 4.10532 15.4966 3.89015 15.196 3.89015H12.6944C12.6643 1.73839 10.7941 0 8.50301 0C6.21188 0 4.3417 1.73839 4.30562 3.89015H1.80403C1.49735 3.89015 1.2508 4.10532 1.22073 4.39411L0.00601344 17.2877C0.00601344 17.3046 0 17.3216 0 17.3386C0 18.8052 1.4312 20 3.18712 20H13.8129C15.5748 20 17 18.8052 17 17.3386C17 17.3216 17 17.3046 17 17.2877ZM8.50301 1.10419C10.1507 1.10419 11.4917 2.34994 11.5278 3.89015H5.47825C5.51433 2.34994 6.85532 1.10419 8.50301 1.10419Z"
              fill="#BDBDBD"
            />
          </svg>
        </div>
        <Basket side={side} setSide={setSide} />
        <Wish side2={side2} setSide2={setSide2} />
      </div>

    </div>
  )
}

export default Navbar;