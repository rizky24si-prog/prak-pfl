import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
  FaEye,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import products from "../data/products.json";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Products() {
  const stats = products;

  const handleConfirmAction = () => {
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah Anda ingin mengekspor data?",
      icon: "question",
      background: "#1a1a2e",
      color: "#fff",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Ya, Ekspor!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          text: "Data berhasil diekspor",
          icon: "success",
          background: "#1a1a2e",
          color: "#fff",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-[#0a0a14] to-[#0f0f1a]">
      <PageHeader onExport={handleConfirmAction} title="Products Dashboard" />

      {/* Tabel Products */}
      <div className="mt-5 rounded-2xl border border-blue-800/30 bg-blue-900/10 backdrop-blur-sm overflow-hidden animate-fadeInUp">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-b border-blue-800/30">
                <th className="px-4 py-3 text-left text-xs font-bold text-blue-300 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Product Title
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-4 py-3 text-right text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-center text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-4 py-3 text-center text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map((product, index) => (
                <tr
                  key={product.id}
                  className={`
                                border-b border-blue-800/20 hover:bg-blue-800/20 
                                transition-all duration-300 cursor-pointer
                                ${index % 2 === 0 ? "bg-blue-900/5" : "bg-transparent"}
                            `}
                  
                >
                  <td className="px-4 py-3 text-sm text-blue-200/80 font-mono">
                    {product.id}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                     <Link to={`/products/${product.id}`}>
                        <div className="text-white font-medium hover:text-blue-400 transition-colors cursor-pointer">
                          {product.title}
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-blue-300/70 font-mono">
                    {product.code}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`
                                    px-2 py-1 rounded-full text-xs font-medium
                                    ${
                                      product.category === "Electronics"
                                        ? "bg-purple-500/20 text-purple-300"
                                        : product.category === "Accessories"
                                          ? "bg-blue-500/20 text-blue-300"
                                          : product.category === "Audio"
                                            ? "bg-green-500/20 text-green-300"
                                            : product.category === "Wearables"
                                              ? "bg-yellow-500/20 text-yellow-300"
                                              : "bg-gray-500/20 text-gray-300"
                                    }
                                `}
                    >
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-blue-200/80">
                    {product.brand}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-green-400 font-bold">
                      Rp.{product.price.toLocaleString("id-ID")}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className={`
                                        font-bold text-sm
                                        ${
                                          product.stock > 100
                                            ? "text-green-400"
                                            : product.stock > 50
                                              ? "text-yellow-400"
                                              : product.stock > 10
                                                ? "text-orange-400"
                                                : "text-red-400"
                                        }
                                    `}
                      >
                        {product.stock}
                      </span>
                      <div className="w-20 bg-blue-900/50 rounded-full h-1">
                        <div
                          className={`
                                                h-1 rounded-full transition-all duration-500
                                                ${
                                                  product.stock > 100
                                                    ? "bg-green-500"
                                                    : product.stock > 50
                                                      ? "bg-yellow-500"
                                                      : product.stock > 10
                                                        ? "bg-orange-500"
                                                        : "bg-red-500"
                                                }
                                            `}
                          style={{
                            width: `${Math.min((product.stock / 300) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`
                                    px-2 py-1 rounded-full text-xs font-semibold
                                    ${
                                      product.stock > 50
                                        ? "bg-green-500/20 text-green-400"
                                        : product.stock > 10
                                          ? "bg-yellow-500/20 text-yellow-400"
                                          : "bg-red-500/20 text-red-400"
                                    }
                                `}
                    >
                      {product.stock > 50
                        ? "In Stock"
                        : product.stock > 10
                          ? "Limited"
                          : "Low Stock"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-blue-800/30 bg-blue-900/20 flex justify-between items-center">
          <span className="text-xs text-blue-300/60">
            Showing {products.length} products
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs rounded-lg bg-blue-800/30 text-blue-300 hover:bg-blue-700/50 transition-all">
              Previous
            </button>
            <button className="px-3 py-1 text-xs rounded-lg bg-blue-600/50 text-white hover:bg-blue-500/70 transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
