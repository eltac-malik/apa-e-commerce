import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
        <ul className='foot-ul'>
            <li className="foot-li active-li">Biz kimiz?</li>
            <li className="foot-li">Hakkımızda</li>
            <li className="foot-li">Kariyer</li>
            <li className="foot-li"> İletişim</li>
            <li className="foot-li">Bizde Satış</li>
            <li className="foot-li">Yap</li>
        </ul>
            <ul className='foot-ul'>
                <li className="foot-li active-li">Yardım</li>
                <li className="foot-li">Sıkça Sorulan Sorular</li>
                <li className="foot-li">Canlı Yardım </li>
                <li className="foot-li"> Naslk İade Ederim </li>
                <li className="foot-li">Nasıl Sipariş Verilir</li>
            </ul>
            <ul className='foot-ul'>
                <li className="foot-li active-li">Kampanyalar</li>
                <li className="foot-li">Özel kampanyalar</li>
                <li className="foot-li">Bayram kampanyaları </li>
                <li className="foot-li"> Aktif Kampanyalar</li>
                <li className="foot-li">VIP Üyelik</li>
            </ul>
        </div>
    )
}

export default Footer
