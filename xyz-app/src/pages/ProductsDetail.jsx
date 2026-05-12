import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaBox, FaTag, FaBuilding, FaMoneyBillWave, FaStar, FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductsDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.message);
                    return;
                }
                setProduct(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (error) return (
        <div className="p-4 min-h-screen bg-gradient-to-br from-[#0a0a14] to-[#0f0f1a] flex items-center justify-center">
            <div className="bg-red-900/30 border border-red-800/30 rounded-2xl p-6 text-center">
                <p className="text-red-400 font-semibold">{error}</p>
                <button 
                    onClick={() => navigate(-1)}
                    className="mt-4 px-4 py-2 bg-blue-600/30 rounded-lg text-blue-300 hover:bg-blue-600/50 transition-all"
                >
                    Go Back
                </button>
            </div>
        </div>
    );

    if (loading) return (
        <div className="p-4 min-h-screen bg-gradient-to-br from-[#0a0a14] to-[#0f0f1a] flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-blue-300/70">Loading product details...</p>
            </div>
        </div>
    );

    return (
        <div className="p-4 min-h-screen bg-gradient-to-br from-[#0a0a14] to-[#0f0f1a]">
            {/* Back Button */}
            <button 
                onClick={() => navigate(-1)}
                className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900/30 border border-blue-800/30 text-blue-300 hover:bg-blue-800/50 hover:scale-105 transition-all duration-300 group"
            >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Products</span>
            </button>

            <div className="max-w-4xl mx-auto">
                <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl border border-blue-800/30 overflow-hidden animate-fadeInUp">
                    <div className="grid md:grid-cols-2 gap-6 p-6">
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-2">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="rounded-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            {product.images && product.images.length > 0 && (
                                <div className="grid grid-cols-4 gap-2">
                                    {product.images.slice(0, 4).map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${product.title} ${idx + 1}`}
                                            className="rounded-lg w-full h-16 object-cover cursor-pointer hover:opacity-80 transition-all border border-blue-800/30"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h1 className="text-3xl font-black bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-2">
                                    {product.title}
                                </h1>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        <FaStar />
                                        <span className="text-white font-semibold">{product.rating}</span>
                                    </div>
                                    <span className="text-blue-300/50 text-sm">|</span>
                                    <span className="text-blue-300/70 text-sm">{product.availabilityStatus}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/20 border border-blue-800/30">
                                    <FaTag className="text-blue-400 text-xl" />
                                    <div>
                                        <p className="text-blue-300/60 text-xs uppercase">Category</p>
                                        <p className="text-white font-medium">{product.category}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/20 border border-blue-800/30">
                                    <FaBuilding className="text-blue-400 text-xl" />
                                    <div>
                                        <p className="text-blue-300/60 text-xs uppercase">Brand</p>
                                        <p className="text-white font-medium">{product.brand}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/20 border border-blue-800/30">
                                    <FaBox className="text-blue-400 text-xl" />
                                    <div>
                                        <p className="text-blue-300/60 text-xs uppercase">Stock</p>
                                        <p className={`font-bold ${product.stock > 50 ? 'text-green-400' : product.stock > 10 ? 'text-yellow-400' : 'text-red-400'}`}>
                                            {product.stock} units available
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/20 border border-blue-800/30">
                                    <FaMoneyBillWave className="text-blue-400 text-xl" />
                                    <div>
                                        <p className="text-blue-300/60 text-xs uppercase">Price</p>
                                        <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                            Rp {(product.price * 15000).toLocaleString('id-ID')}
                                        </p>
                                        <p className="text-blue-300/50 text-xs line-through">
                                            Rp {((product.price * 15000) * 1.2).toLocaleString('id-ID')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/20 border border-blue-800/30">
                                    <FaTruck className="text-blue-400 text-xl" />
                                    <div>
                                        <p className="text-blue-300/60 text-xs uppercase">Shipping</p>
                                        <p className="text-white font-medium">Free Delivery • Ships in 2-3 days</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 rounded-xl bg-blue-900/20 border border-blue-800/30">
                                <p className="text-blue-300/60 text-xs uppercase mb-1">Description</p>
                                <p className="text-blue-200/80 text-sm leading-relaxed">
                                    {product.description || "No description available for this product."}
                                </p>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                                    Tambah Ke Keranjang
                                </button>
                                <button className="flex-1 px-4 py-2 rounded-xl border border-blue-600/50 text-blue-300 font-semibold hover:bg-blue-600/20 transition-all duration-300">
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}