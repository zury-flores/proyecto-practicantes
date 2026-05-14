import { useEffect, useState } from "react";
import { createProduct, getProduct, updateProduct } from "../api/products";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function ProductForm() {

    const [product, setProduct] = useState({
        nombre: '',
        precio: 0,
        descripcion: ''
    })

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
    const loadProduct = async () => {
        if (params.id) {
            const response = await getProduct(params.id)
            setProduct(response.data)
        }
    }

    loadProduct()
}, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(params.id) {
            await updateProduct(params.id, product)
            toast.success('Producto actualizado correctamente')
            navigate('/')
            return
        }else{
            await createProduct(product)
            toast.success('Producto creado correctamente')
            navigate('/')
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                    <input 
                    value={product.nombre}
                    type="text"
                    onChange={(e) => setProduct({...product, nombre: e.target.value})}
                    id="nombre" className="border border-gray-400 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="precio" className="block text-gray-700 font-bold mb-2">Precio:</label>
                    <input 
                    value={product.precio}
                    type="number"
                    onChange={(e) => setProduct({...product, precio: Number(e.target.value)}) } 
                    id="precio" className="border border-gray-400 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="descripcion" className="block text-gray-700 font-bold mb-2">Descripcion:</label>
                    <input 
                    value={product.descripcion}
                    type="text" 
                    onChange={(e) => setProduct({...product, descripcion: e.target.value})}
                    id="descripcion" className="border border-gray-400 p-2 w-full" />
                </div>
                <button type="submit" className="bg-sky-500 text-white font-bold px-2 py-1 rounded-lg">Guardar</button>
                <button type="button"onClick={() => navigate('/')} className="bg-red-500 text-white font-bold px-2 py-1 rounded-lg ml-2">Cancelar</button>
            </form>
        </div>
    )
}