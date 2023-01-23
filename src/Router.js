import {BrowserRouter, Routes, Route} from "react-router-dom"
import ContactPage from "./Pages/ContactPage"
import Home from "./Pages/Home"
import { HashRouter, Link } from 'react-router-dom'
import ProductsPage from "./Pages/ProductsPage"


const Router = ()=>{
    return(
        <HashRouter basename='/'>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<ProductsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Router