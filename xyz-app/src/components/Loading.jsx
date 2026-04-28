export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#0a0a14] to-[#0f0f1a]">
            <div className="w-12 h-12 border-4 border-blue-800/30 border-t-blue-500 rounded-full animate-spin mb-4"></div>
            <p className="text-blue-400 text-lg font-medium">Loading...</p>
        </div>
    );
}