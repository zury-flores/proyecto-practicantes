import { Link } from "react-router-dom";
import { PackagePlus, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-extrabold text-sky-700 hover:text-sky-500 transition"
        >
          <ShoppingBag size={32} /> //Icono
          Productos App
        </Link>

        {/* Botón */}
        <Link
          to="/nuevo/producto"
          className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded-xl shadow transition duration-300"
        >
          <PackagePlus size={20} /> //Icono
          Nuevo Producto
        </Link>
      </nav>
    </header>
  );
}