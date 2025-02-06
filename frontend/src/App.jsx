import { BrowserRouter , Routes , Route} from "react-router-dom";
import { LoginPage , SignupPage , Home , CreateProduct } from "./Routers.jsx";

import './App.css' ;
// import Home from "./Pages/Home.jsx";
// import CreateProduct from "./Pages/createProduct.jsx";
function App (){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/createProduct" element={<CreateProduct/>} />
      
      <Route path="/" element={<Home/>} />

    
    </Routes>
    </BrowserRouter>
  )
}
export default App;