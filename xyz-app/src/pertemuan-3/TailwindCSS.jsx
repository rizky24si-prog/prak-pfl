export default function TailwindCSS() {
    return(
        <div>
            <FlexboxGrid/>
            <h1 class="border m-4">Belajar Tailwind CSS</h1>
            <button className="bg-red-500 text-white
                                px-4 py-2 mx-4 
                                rounded shadow-lg">Click Me</button>
            <Spacing tittle="Judul Card" content="Ini Merupakan Isi Dari Card Spacing"/>
            <Spacing tittle="Judul Card" content="Ini Merupakan Isi Dari Card Spacing"/>
            <Typography/>
            <BorderRadius/>
            <BackgroundColors/>
            <ShadowEffects/>
            <TailwindSC/>
            <AnimasiHoverSC/>
        </div>
    )
}

function Spacing(props){
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.tittle}</h2>
            <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="ml-4">
            <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <div className="m-4">
            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg-"> Klik Saya </button>
        </div>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg m-4 hover:bg-blue-700">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg font-bold">Login</h1>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition m-4">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function TailwindSC() {
  return (
    <div className="bg-slate-50 min-h-screen pb-10 font-sans">
      {/* 1. FLEXBOX GRID (NAVBAR) - Sticky & Glassmorphism */}
      <nav className="sticky top-0 z-50 flex justify-between items-center bg-slate-900/90 backdrop-blur-md p-5 text-white shadow-lg">
        <h1 className="text-2xl font-black tracking-widest text-blue-400">
          MY<span className="text-white font-light">WEBSITE</span>
        </h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
        <button className="bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-500 shadow-lg shadow-blue-900/50 active:scale-95 transition-all">
          Login
        </button>
      </nav>

      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <h1 className="text-4xl md:text-6xl font-black m-6 p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 border-l-8 border-indigo-600">
          Belajar Tailwind CSS
        </h1>

        {/* INTERACTIVE BUTTON */}
        <button className="bg-red-500 text-white px-8 py-3 mx-6 
                           rounded-xl shadow-xl shadow-red-200 
                           hover:bg-red-600 hover:-translate-y-1 
                           active:scale-95 transition-all focus:ring-4 focus:ring-red-300">
          Click Me
        </button>

        {/* 2. SPACING (GRID CARDS) */}
        <div className="grid md:grid-cols-2 gap-2 mt-4">
          <div className="bg-white border-2 border-transparent hover:border-indigo-500 shadow-xl p-8 m-6 rounded-2xl transition-all duration-300 group">
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors italic">🚀 Margin & Padding</h2>
            <p className="mt-3 text-slate-500 leading-relaxed">"Memahami jarak antar elemen adalah kunci desain yang rapi dan profesional."</p>
          </div>
          <div className="bg-white border-2 border-transparent hover:border-indigo-500 shadow-xl p-8 m-6 rounded-2xl transition-all duration-300 group">
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors italic">📱 Responsivitas</h2>
            <p className="mt-3 text-slate-500 leading-relaxed">"Gunakan prefix seperti md: atau lg: untuk mengatur tampilan di berbagai device."</p>
          </div>
        </div>

        {/* 3. TYPOGRAPHY */}
        <div className="mx-6 p-8 bg-white rounded-2xl shadow-sm border border-slate-100 max-w-3xl mb-10">
          <h1 className="text-5xl font-extrabold tracking-tighter text-blue-600 drop-shadow-sm">
            Tailwind <span className="text-slate-900 underline decoration-sky-400 decoration-4">Typography</span>
          </h1>
          <p className="text-slate-500 text-xl mt-4 font-light leading-relaxed">
            Belajar Tailwind sangat <span className="font-bold text-slate-800">menyenangkan</span> dan <span className="bg-yellow-200 px-2 text-slate-900 rounded">cepat!</span>
          </p>
        </div>

        {/* 4. BORDER RADIUS (ANIMATED BUTTON) */}
        <div className="m-6 mb-12">
          <button className="group relative border-4 border-blue-500 text-blue-600 px-10 py-4 rounded-full font-black text-lg overflow-hidden hover:text-white transition-colors duration-300 shadow-lg">
            <span className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative">Klik Saya</span>
          </button>
        </div>

        {/* 5. BACKGROUND COLORS (GRADIENT CARD) */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-200 m-6 transform hover:rotate-1 transition-transform duration-500">
          <h3 className="text-4xl font-black tracking-tight mb-4">Tailwind Colors</h3>
          <p className="text-blue-50 text-xl opacity-90 leading-relaxed">
            Belajar Tailwind itu seru dan fleksibel dengan sistem palet warna yang sangat luas!
          </p>
        </div>

        {/* 6. SHADOW EFFECTS */}
        <div className="bg-white shadow-md p-10 rounded-[3rem] hover:shadow-[0_30px_60px_rgba(30,64,175,0.15)] border border-slate-100 transition-all duration-700 m-6 cursor-pointer group">
          <h3 className="text-3xl font-bold text-slate-800 italic group-hover:scale-105 transition-transform origin-left">Hover me!</h3>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            Lihat bagaimana efek bayangan berubah menjadi lebih lembut, dalam, dan lebar saat kursor menyentuh area ini.
          </p>
        </div>
      </div>
    </div>
  );
}

function AnimasiHoverSC() {
  return (
    <div className="min-h-screen bg-slate-50 p-10 font-sans text-slate-900">
      <h1 className="text-4xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
        Variasi Animasi Hover Tailwind
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* 1. SCALE (Memperbesar/Mengecil) */}
        {/* Gunakan: hover:scale-105 atau hover:scale-95 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transform transition-transform duration-300 hover:scale-105 cursor-pointer group">
          <div className="text-5xl mb-4 group-hover:animate-pulse">🔍</div>
          <h3 className="text-2xl font-bold text-slate-800">Efek Scale</h3>
          <p className="mt-2 text-slate-600">
            Arahkan kursor untuk memperbesar kartu ini secara halus. Sangat cocok untuk elemen yang ingin ditonjolkan.
          </p>
          <span className="inline-block mt-4 text-sm font-semibold text-pink-600">Class: hover:scale-105</span>
        </div>

        {/* 2. TRANSLATE (Bergeser ke Atas/Samping) */}
        {/* Gunakan: hover:-translate-y-2 atau hover:translate-x-2 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer group hover:shadow-2xl hover:shadow-indigo-100">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-slate-800">Efek Translate</h3>
          <p className="mt-2 text-slate-600">
            Kartu ini akan bergeser ke atas saat di-hover, memberikan kesan "mengambang".
          </p>
          <span className="inline-block mt-4 text-sm font-semibold text-indigo-600">Class: hover:-translate-y-3</span>
        </div>

        {/* 3. SKEW (Memiringkan) */}
        {/* Gunakan: hover:skew-y-3 atau hover:-skew-x-6 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transform transition-transform duration-300 hover:skew-y-3 cursor-pointer group">
          <div className="text-5xl mb-4 group-hover:animate-bounce">🤪</div>
          <h3 className="text-2xl font-bold text-slate-800">Efek Skew</h3>
          <p className="mt-2 text-slate-600">
            Efek memiringkan elemen untuk memberikan kesan desain yang fun dan tidak kaku.
          </p>
          <span className="inline-block mt-4 text-sm font-semibold text-amber-600">Class: hover:skew-y-3</span>
        </div>

        {/* 4. OPACITY & BLUR (Transparansi & Buram) */}
        {/* Gunakan: hover:opacity-50 atau hover:blur-sm */}
        <div className="relative overflow-hidden rounded-3xl cursor-pointer group">
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop" 
            alt="Landscape"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            <h3 className="text-2xl font-bold text-white">Opacity & Blur</h3>
            <p className="mt-2 text-slate-200 text-sm">Overlay muncul dan gambar menjadi blur saat di-hover.</p>
          </div>
        </div>

        {/* 5. COLOR & BORDER TRANSITION (Perubahan Warna & Border) */}
        {/* Gunakan: hover:bg-slate-900, hover:text-white, hover:border-emerald-500 */}
        <button className="bg-white p-8 rounded-3xl shadow-lg border-4 border-dashed border-slate-200 text-left transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-emerald-500 hover:border-solid w-full h-full group">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
          <h3 className="text-2xl font-bold transition-colors">Color & Border</h3>
          <p className="mt-2 text-slate-600 group-hover:text-slate-300 transition-colors">
            Mengubah warna background, teks, dan gaya border secara bersamaan.
          </p>
        </button>

        {/* 6. TEXT WAVING (Efek Gelombang Teks) - Rumit */}
        {/* Kombinasi animation, delay, dan group-hover */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-center items-center cursor-pointer group h-full">
          <div className="flex space-x-1 text-5xl font-black text-violet-600 mb-4">
            {/* Setiap huruf diberi animasi dan delay berbeda */}
            <span className="group-hover:animate-[wave_1s_ease-in-out_infinite] [animation-delay:0ms]">W</span>
            <span className="group-hover:animate-[wave_1s_ease-in-out_infinite] [animation-delay:100ms]">A</span>
            <span className="group-hover:animate-[wave_1s_ease-in-out_infinite] [animation-delay:200ms]">V</span>
            <span className="group-hover:animate-[wave_1s_ease-in-out_infinite] [animation-delay:300ms]">E</span>
          </div>
          <p className="text-center text-slate-600 text-sm mt-2">Arahkan kursor untuk melihat teks bergelombang.</p>
        </div>

      </div>

      {/* Menambahkan Keyframes Khusus untuk Animasi Wave */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}