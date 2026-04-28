import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-white mb-2 text-center">
                Create Your Account ✨
            </h2>
            <p className="text-blue-300/60 text-sm text-center mb-6">
                Join us and start managing your restaurant
            </p>

            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-blue-300/80 mb-1">
                        Full Name
                    </label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/50 text-sm" />
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-2 bg-[#0f0f1a] border border-blue-800/30 rounded-lg 
                                text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500/50 
                                focus:ring-1 focus:ring-blue-500/50 transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-blue-300/80 mb-1">
                        Email Address
                    </label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/50 text-sm" />
                        <input
                            type="email"
                            className="w-full pl-10 pr-4 py-2 bg-[#0f0f1a] border border-blue-800/30 rounded-lg 
                                text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500/50 
                                focus:ring-1 focus:ring-blue-500/50 transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-blue-300/80 mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/50 text-sm" />
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full pl-10 pr-10 py-2 bg-[#0f0f1a] border border-blue-800/30 rounded-lg 
                                text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500/50 
                                focus:ring-1 focus:ring-blue-500/50 transition-all"
                            placeholder="********"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400/50 hover:text-blue-400"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-blue-300/80 mb-1">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/50 text-sm" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full pl-10 pr-10 py-2 bg-[#0f0f1a] border border-blue-800/30 rounded-lg 
                                text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500/50 
                                focus:ring-1 focus:ring-blue-500/50 transition-all"
                            placeholder="********"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400/50 hover:text-blue-400"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 
                        hover:to-blue-900 text-white font-semibold py-2 px-4 rounded-lg transition-all 
                        duration-300 shadow-lg shadow-blue-500/30 transform hover:scale-[1.02]"
                >
                    Register
                </button>
            </form>

            <p className="text-center text-sm text-blue-300/50 mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400 hover:text-blue-300 transition">
                    Sign In
                </Link>
            </p>
        </div>
    );
}