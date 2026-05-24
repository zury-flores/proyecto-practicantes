import {getProducts} from '../api/products'
import { useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {deleteProduct} from '../api/products'
import {toast} from 'react-hot-toast'

export default function ProductList(){

    const[products, setProducts] = useState([])

    const navigate = useNavigate()

    const handleDelete = async (id) => {
        await deleteProduct(id)
        toast.success('Producto eliminado correctamente')
        setProducts(products.filter(product => product.id !== id))
    }

useEffect(() => {
    const loadProducts = async () => {
        const response = await getProducts()
        setProducts(response.data)
    }

    loadProducts()
}, [])

    return (
        <div className= "mt-8">
            <h1 className= "text-3xl font-bold text-sky-900">Productos Disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
                {products.map(product => (
                    <div key ={product.id} className= "bg-sky-600 p-4 rounded-b-lg shadow text-white">
                        <p>{product.nombre}</p>
                        <p><span className="font-bold">Precio:</span> $ {product.precio}</p>
                        <p><span className="font-bold">Descripción:</span>{product.descripcion}</p>
                        
                        <div className="mt-2">

                            <button className="bg-green-400 text-white font-bold px-2 py-1 rounded-lg"

                            onClick={() => navigate(`/editar-producto/${product.id}`)}>Editar
                            
                            </button>

                            <button className="bg-red-400 text-white font-bold px-2 py-1 rounded-lg ml-2"
                            onClick={() => handleDelete(product.id)}
                            
                            >Eliminar</button>
                        </div>
                    </div>

                       

                ))}
            
            </div>
            
        </div>
    )


}