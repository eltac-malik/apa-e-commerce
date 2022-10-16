import React from 'react'
import 'assets/css/Home.css'
import Filter from 'components/Filter/Filter'
import Product from 'components/Products/Product'

function Home() {
    return (
        <div className='home'>
            <div className="route">
                <p className='brand-name'>KOTON</p>
                <p className='route-page'>Ana sayfa > Tüm Butikler > Koton</p>
            </div>

        <div className="main">

            <Filter/>
            <Product/>
        </div>



        </div>
    )
}

export default Home
