import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.username,
        password: dataForm.password,
      })
      .then((response) => {
        // Jika status bukan 200, tampilkan pesan error
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        // Redirect ke dashboard jika login sukses
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="animate-fadeInUp">
      <h2 className="text-2xl font-semibold text-white mb-2 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}
      {loadingInfo}

      <p className="text-blue-300/60 text-sm text-center mb-6">
        Sign in to continue to your dashboard
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-blue-300/80 mb-1">
            Username
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/50 text-sm" />
            <input name="username"
              className="w-full pl-10 pr-4 py-2 bg-[#0f0f1a] border border-blue-800/30 rounded-lg 
                                text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500/50 
                                focus:ring-1 focus:ring-blue-500/50 transition-all"
              placeholder="your_username"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-300/80 mb-1">
            Password
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/50 text-sm" />
            <input name="password"
              type={showPassword ? "text" : "password"}
              className="w-full pl-10 pr-10 py-2 bg-[#0f0f1a] border border-blue-800/30 rounded-lg 
                                text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500/50 
                                focus:ring-1 focus:ring-blue-500/50 transition-all"
              placeholder="********"
              onChange={handleChange}
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

        <div className="flex justify-end mb-6">
          <Link
            to="/forgot"
            className="text-sm text-blue-400/70 hover:text-blue-400 transition"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 
                        hover:to-blue-900 text-white font-semibold py-2 px-4 rounded-lg transition-all 
                        duration-300 shadow-lg shadow-blue-500/30 transform hover:scale-[1.02]"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm text-blue-300/50 mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
}
