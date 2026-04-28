import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function Forgot() {
    return (
        <div className="animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-white mb-2 text-center">
                Forgot Password?
            </h2>

            <p className="text-blue-300/60 text-sm mb-6 text-center">
                Enter your email address and we'll send you a link to reset your password.
            </p>

            <form>
                <div className="mb-6">
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

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 
                        hover:to-blue-900 text-white font-semibold py-2 px-4 rounded-lg transition-all 
                        duration-300 shadow-lg shadow-blue-500/30 transform hover:scale-[1.02]"
                >
                    Send Reset Link
                </button>
            </form>

            <div className="text-center mt-6">
                <Link to="/login" className="text-sm text-blue-400/70 hover:text-blue-400 transition inline-flex items-center gap-2">
                    <FaArrowLeft className="text-xs" /> Back to Login
                </Link>
            </div>
        </div>
    );
}