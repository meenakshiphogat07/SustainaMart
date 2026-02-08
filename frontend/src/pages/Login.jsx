import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      let response

      if (currentState === 'Sign Up') {
        response = await axios.post(
          backendUrl + '/api/user/register',
          { name, email, password }
        )
      } else {
        response = await axios.post(
          backendUrl + '/api/user/login',
          { email, password }
        )
      }

      if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        toast.success(currentState === 'Login' ? 'Logged in' : 'Account created')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === 'Sign Up' && (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border"
          placeholder="Name"
          required
        />
      )}

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="w-full px-3 py-2 border"
        placeholder="Email"
        required
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="w-full px-3 py-2 border"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm">
        <p className="cursor-pointer">Forgot password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
            Login here
          </p>
        )}
      </div>

      <button className="bg-green-700 text-white px-8 py-2 mt-4">
        {currentState === 'Login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login







