import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <nav className="bg-gray-800 text-white py-4 mb-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Productos App</Link>
                <Link to="/nuevo/producto" className="bg-sky-500 text-white font-bold px-2 py-1 rounded-lg">Nuevo Producto</Link>
                

                
            </div>

        </nav>
    )
}