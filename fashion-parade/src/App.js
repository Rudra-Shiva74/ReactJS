import React from 'react'
import products from './products.json'
import Product from './component/Product'
import Card from './component/Card'
export default function App() {
  return (
    <div className='container'>
      <Card />
      <div className="row g-3">
        {products.map((e, index) => {
          return (
            <Product {...e} key={index} />
          )
        })}
      </div>
    </div>
  )
}
