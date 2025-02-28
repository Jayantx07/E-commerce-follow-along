import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./App.css";
import {LoginPage,SignupPage,Home,CreateProduct, MyProducts, Cart, ProductDetails, Profile, CreateAddress, SelectAddress, OrderConfirmation} from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/createProduct/:id" element={<CreateProduct />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path= "/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/create-address' element={<CreateAddress />} />
        <Route path="/select-address" element={<SelectAddress />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App