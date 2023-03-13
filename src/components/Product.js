import React from 'react'

function Product(props) {
  const{product}=props
    return (
    <div>
        <img className='small' src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
    <div>
    <button>Add to</button>
    </div>
    </div>
  )
}

export default Product