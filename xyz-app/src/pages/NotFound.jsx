import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaSearch, FaExclamationTriangle } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a14] via-[#0f0f1a] to-[#1a1a2e] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
                    style={{ 
                        left: `${mousePosition.x}%`, 
                        top: `${mousePosition.y}%`,
                        transform: "translate(-50%, -50%)",
                        transition: "all 0.3s ease-out"
                    }}
                />
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700" />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Floating Numbers */}
            <div className="absolute inset-0 pointer-events-none">
                {[4, 0, 4].map((num, idx) => (
                    <div
                        key={idx}
                        className="absolute text-9xl font-black text-blue-500/5 animate-float"
                        style={{
                            top: `${20 + idx * 30}%`,
                            left: `${10 + idx * 40}%`,
                            animationDelay: `${idx * 0.5}s`,
                            transform: `rotate(${idx * 15}deg)`
                        }}
                    >
                        {num}
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-2xl w-full text-center animate-fadeInUp">
                {/* 404 Glitch Effect */}
                <div className="relative mb-8">
                    <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="text-8xl md:text-9xl font-black text-red-500/20 blur-sm select-none">
                            404
                        </div>
                    </div>
                </div>

                {/* Icon with Animation */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-ping" />
                        <div className="relative bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-full p-6 backdrop-blur-sm border border-yellow-500/30 animate-bounce">
                            <FaExclamationTriangle className="text-6xl text-yellow-500" />
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Oops! Halaman Tidak Ditemukan
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                    Maaf, halaman yang Anda cari tidak tersedia. Mungkin URL salah atau halaman sudah dipindahkan.
                </p>

                {/* Search Suggestions */}
                <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-500/20 max-w-md mx-auto">
                    <p className="text-blue-300 text-sm mb-3 flex items-center justify-center gap-2">
                        <FaSearch className="text-xs" />
                        Mungkin Anda mencari:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {["Dashboard", "Orders", "Products", "Settings"].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="px-3 py-1 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 rounded-full text-sm transition-all duration-300 hover:scale-105"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => window.history.back()}
                        className="group px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Kembali
                    </button>
                    <Link
                        to="/dashboard"
                        className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                    >
                        <FaHome className="group-hover:-translate-y-0.5 transition-transform" />
                        Kembali ke Dashboard
                    </Link>
                </div>

                {/* Help Text */}
                <p className="text-gray-500 text-sm mt-8">
                    Error Code: 404_NOT_FOUND • {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}