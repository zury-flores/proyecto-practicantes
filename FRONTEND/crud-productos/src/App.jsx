import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Header from "./components/Header";
import {Toaster} from 'react-hot-toast'
export default App

function App() {
    return (
        <BrowserRouter>
        <div className="container mx-auto">
            <Header />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/nuevo/producto" element={<ProductForm />} />
                <Route path="/editar-producto/:id" element={<ProductForm />} />
            </Routes>
            <Toaster/>
        </div>
        </BrowserRouter>
    );
}