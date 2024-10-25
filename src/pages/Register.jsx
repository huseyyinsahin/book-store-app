import { IoBookOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  
  return (
    <main className="w-full h-[90vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-2">
          <div className="md:ml-4 ml-2 text-black flex align-items-center justify-content-center">
            <IoBookOutline className="md:mb-0 sm:mt-0 text-5xl" />
            <p className="ml-3 mt-0 sm:mt-2 leading-10 md:leading-[0.8] text-3xl">
              Kitap Çarşısına Kayıt
            </p>
          </div>
        </div>
        <form className="space-y-5">
          <div>
            <label className="font-medium">Adınız</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Soyadınız</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Şifre</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Kayıt Ol
          </button>
        </form>
        <p className="text-center">
          Hesabınız var mı?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
          >
            Giriş Yap
          </span>
        </p>
      </div>
    </main>
  );
}

export default Register;
