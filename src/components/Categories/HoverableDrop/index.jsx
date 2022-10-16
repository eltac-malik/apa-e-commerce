import React from 'react'
import './HoverableDrop.css'
import hm from 'assets/img/H&M.png'

function index({hide}) {
    return (
        <div class="dropdown-content">
            <div className="big-title">             
                <p className='active-p'>Kadın</p>
                <p>Erkek</p>
                <p>Çocuk</p>
            </div>
            <div className="sub-category">
                <ul className='categorys-ul'>
                    <li className="category-li active-li">Giyim</li>
                    <li className="category-li">Elbise</li>
                    <li className="category-li">T-shirt</li>
                    <li className="category-li">Bluz</li>
                    <li className="category-li">Gomlet</li>
                    <li className="category-li active-li">Kazak & Hirka</li>
                    <li className="category-li">Ceket & Yelek </li>
                    <li className="category-li"> Sweatshirt</li>
                    <li className="category-li">Pantolon </li>
                    <li className="category-li">Jean </li>
                    <li className="category-li">Büyük Beden</li>
                    <li className="category-li">Tesettür</li>
                </ul>
           
                <ul className='categorys-ul'>
                    <li className="category-li active-li">Kozmetik & Kişisel</li>
                    <li className="category-li">Bakım </li>
                    <li className="category-li">Parfüm & Deodorant</li>
                    <li className="category-li">Göz Makyajı </li>
                    <li className="category-li">Güneş Ürünleri</li>
                    <li className="category-li">Cilt Bakım</li>
                    <li className="category-li">Ten Makyajı</li>
                    <li className="category-li">Dudak Makyajı</li>
                    <li className="category-li">Saç Bakım  </li>
                    <li className="category-li">Jean </li>
                </ul>
           
                <ul className='categorys-ul'>
                    <li className="category-li active-li">İç Giyim</li>
                    <li className="category-li">Pijama Takımı </li>
                    <li className="category-li">Sütyen</li>
                    <li className="category-li">İç Çamaşırı Takımları </li>
                    <li className="category-li">Fantezi Giyim Gecelik Çorap </li>
                </ul>
           
                <ul className='categorys-ul'>
                    <li className="category-li active-li">Ayakkabı</li>
                    <li className="category-li">Topuklu Ayakkabı </li>
                    <li className="category-li">Sneaker</li>
                    <li className="category-li">Bot & Çizme</li>
                    <li className="category-li">Günlük Ayakkabı</li>
                    <li className="category-li">Babet</li>
                    <li className="category-li"> Ev Terliği & Botu</li>
                </ul>
           
                <ul className='categorys-ul'>
                    <li className="category-li active-li">Aksesuar & Çanta</li>
                    <li className="category-li">Çanta</li>
                    <li className="category-li">Güneş Gözlüğü</li>
                    <li className="category-li">Saat</li>
                    <li className="category-li">Takı</li>
                    <li className="category-li"> Atkı & Bere</li>
                    <li className="category-li">Eldiven</li>
                </ul>
           
                <img className='hm' src={hm}/>
           
           
            </div>
      </div>
    )
}

export default index
