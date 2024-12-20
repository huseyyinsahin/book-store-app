import { useContext, useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useAlertContext } from "../context/AlertProvider";

export default () => {
  const { showToast } = useAlertContext();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { login, googleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@admin.com" && pass === "admin") {
      login({ email, pass });
    } else {
      showToast("Kullanıcı bilgileri yanlış!", "error");
    }
  };

  return (
    <main className="w-full h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <div className="md:ml-4 ml-2 text-black flex align-items-center justify-content-center">
            <IoBookOutline className="md:mb-0 sm:mt-0 text-5xl" />
            <p className="ml-3 mt-0 sm:mt-2 leading-10 md:leading-[0.8] text-3xl">
              Kitap Çarşısına Giriş
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium">
              Email <span className="text-gray-400">admin@admin.com</span>{" "}
            </label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium">
              Şifre <span className="text-gray-400">admin</span>{" "}
            </label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <a className="text-center text-indigo-600 hover:text-indigo-500">
              Şifremi Unuttum
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Giriş Yap
          </button>
        </form>
        <button
          onClick={googleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_17_40)">
              <path
                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                fill="#4285F4"
              />
              <path
                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                fill="#34A853"
              />
              <path
                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                fill="#FBBC04"
              />
              <path
                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Google ile Giriş Yap
        </button>
        <p className="text-center">
          Hesabınız yok mu?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
          >
            Kayıt Ol
          </span>
        </p>
      </div>
    </main>
  );
};
