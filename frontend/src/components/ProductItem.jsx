import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>

      <div className="w-full h-60 sm:h-64 md:h-72 overflow-hidden rounded-xl bg-gray-100">
        <img
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
          src={image[0]}
          alt={name}
        />
      </div>

      <div className="pt-3 text-center">
        <p className="text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}{price}
        </p>
      </div>

    </Link>
  )
}

export default ProductItem
