import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter , createRoutesFromElements ,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Login,Register,Home} from './pages'
import { Provider } from 'react-redux'
import store from './store'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>} >
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
