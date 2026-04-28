import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a14] to-[#0f0f1a]">
            <div className="bg-[#1a1a2e]/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl shadow-blue-500/20 border border-blue-800/30 w-full max-w-md">
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-4xl font-poppins font-extrabold">
                        <span className="text-white">Sedap</span>
                        <span className="text-blue-400">.</span>
                    </h1>
                </div>

                <Outlet />

                <p className="text-center text-xs text-blue-300/50 mt-6">
                    © 2025 Sedap Restaurant Admin Dashboard. All rights reserved.
                </p>
            </div>
        </div>
    );
}