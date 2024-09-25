import { useContext, useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { AuthContext } from "../context/AuthProvider";

export default () => {
  const [state, setState] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const navigation = [
    { title: "Kitaplarımız", path: "/" },
    { title: "Hakkımızda", path: "/about" },
    { title: "İletişim", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex  items-center justify-between py-3 md:py-5 md:block">
          <NavLink
            to="/"
            className="flex align-items-center justify-content-center"
          >
            <IoBookOutline className="mt-2 sm:mt-0 text-5xl" />
            <p className="ml-3 mt-0 sm:mt-2" style={{ fontSize: "2rem" }}>
              Kitap Çarşısı
            </p>
          </NavLink>

          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-indigo-600">
                  <NavLink to={item.path} className="block">
                    {item.title}
                  </NavLink>
                </li>
              );
            })}

            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              {user ? (
                <>
                  <li onClick={logout} className="cursor-pointer">
                    Çıkış Yap
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink
                      to="/register"
                      href="javascript:void(0)"
                      className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                    >
                      Kayıt Ol
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                    >
                      Giriş Yap
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <Basket />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
