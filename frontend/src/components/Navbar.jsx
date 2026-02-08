import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
    ecoPoints
  } = useContext(ShopContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }

  const activeClass =
    'text-green-700 font-semibold border-b-2 border-green-700'

  const normalClass =
    'flex flex-col items-center gap-1 text-gray-700 hover:text-green-700'

  return (
    <div className="flex items-center justify-between py-5 font-medium relative z-50">
      {/* LOGO */}
      <Link to="/">
        <img src={assets.logo} className="w-52 sm:w-60 scale-125" alt="Logo" />
      </Link>

      {/* DESKTOP LINKS */}
      <ul className="hidden sm:flex gap-5 text-sm">
        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>HOME</NavLink>
        <NavLink to="/collection" className={({ isActive }) => isActive ? activeClass : normalClass}>COLLECTION</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>ABOUT</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>CONTACT</NavLink>
      </ul>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-6">
        {/* ECO WALLET */}
        <button
          onClick={() => token ? navigate('/eco-wallet') : navigate('/login')}
          className="hidden sm:flex items-center gap-2 px-4 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-50"
        >
          🪙 <span className="text-sm font-semibold">{token ? ecoPoints : 0}</span>
        </button>

        {/* SEARCH */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/*PROFILE HOVER DROPDOWN */}
        <div className="relative group">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile"
          />

          {/* DROPDOWN */}
          <div
            className="
              absolute right-0 mt-3 w-48 bg-white rounded shadow-lg
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200 z-50
            "
          >
            <div className="flex flex-col py-2 text-sm text-gray-700">
              {!token && (
                <p
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 cursor-pointer hover:bg-green-50"
                >
                  Login / Sign Up
                </p>
              )}

              {token && (
                <>
                  <p
                    onClick={() => navigate('/profile')}
                    className="px-4 py-2 cursor-pointer hover:bg-green-50"
                  >
                    My Profile
                  </p>

                  <p
                    onClick={() => navigate('/orders')}
                    className="px-4 py-2 cursor-pointer hover:bg-green-50"
                  >
                    Orders
                  </p>

                  <p
                    onClick={() => navigate('/return-packaging')}
                    className="px-4 py-2 cursor-pointer hover:bg-green-50 text-green-700"
                  >
                    ♻️ Return Packaging
                  </p>

                  <p
                    onClick={logout}
                    className="px-4 py-2 cursor-pointer hover:bg-red-50 text-red-600"
                  >
                    Logout
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CART */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-green-700 text-white rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* MOBILE MENU ICON */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-0 right-0 bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'
          } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          {['/', '/collection', '/about', '/contact'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
            >
              {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar









