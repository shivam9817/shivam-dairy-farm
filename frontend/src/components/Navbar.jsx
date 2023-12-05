import React from "react";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import logo from "../asset/logoAlicia.png"
import person from "../asset/person.png"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, setstate] = useState(false);
  const [mobilestate, setmobilestate] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

 useEffect(() => {
    const storedAccessToken = localStorage.getItem("access_token");
    if (storedAccessToken) {
      setIsLoggedIn(true);
      setAccessToken(storedAccessToken);
    }
  }, []);

 
  const handleLogout = () => {
    localStorage.removeItem("access_token");

    // Make a request to your backend to logout (optional)
    // axios.post("http://localhost:8080/user/logout", {
    //   headers: {
    //     Authorization: refreshToken, 
    //   },
    // });

    setIsLoggedIn(false);
    setAccessToken("");

    alert("User Logged out!")

    navigate("/login"); 
  };




  return (
    // <>
    <div class="min-h-full">
      <nav class="fixed bg-opacity-30 bg-blue-100 top-0 left-0 w-full z-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div
                class="flex-shrink-0 hover:cursor-pointer"
              >
                <img class="h-14 w-28" src={logo} alt="Your Company" />
              </div>
              <div class="hidden md:block text-right">
                <div class="mr-4 font-bold ml-24 space-x-4">
                  <Link
                    to="/home"
                    class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 rounded-md px-3 py-2 text-xl"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    to="/products"
                    class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 rounded-md px-3 py-2 text-xl"
                  >
                    Products
                  </Link>
                  <Link
                    to="/about"
                    class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 rounded-md px-3 py-2 text-xl"
                  >
                    About
                  </Link>
                  <Link
                    to="/offer"
                    class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 rounded-md px-3 py-2 text-xl"
                  >
                    Offers
                  </Link>
                  <Link
                    to="/cart"
                    class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 rounded-md px-3 py-2 text-xl"
                  >
                    Cart
                  </Link>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  class="rounded-full bg-blue-500 p-1 text-blue-200 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
                >
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div class="relative ml-3">
                  <div>
                    <button
                      type="button"
                      class="flex max-w-xs bg-blue-100 items-center rounded-full text-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setstate(!state)}
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src={person}
                        alt=""
                      />
                    </button>
                  </div>

                  <div
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                    style={{
                      display: state ? "flex" : "none",
                      flexDirection: "column",
                    }}
                  >
                    {isLoggedIn ? (
                      <>
                        <Link
                          to="/profile"
                          class="block px-4 py-2 text-xl text-blue-900"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                        >
                          <span class="flex items-center">
                            <IoPersonOutline class="mr-2" /> Your Profile
                          </span>
                        </Link>
                        <hr />
                        <Link
                          to="/wallet"
                          class="block px-4 py-2 text-xl text-blue-900"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-1"
                        >
                          <span class="flex items-center">
                            <IoWalletOutline class="mr-2" /> Wallet
                          </span>
                        </Link>
                        <hr />
                        <Link
                          to="/
                          "
                          onClick={handleLogout}
                          class="block px-4 py-2 text-xl text-blue-900"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-2"
                        >
                          <span class="flex items-center">
                            <IoMdLogIn class="mr-2" /> Log out
                          </span>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          class="block px-4 py-2 text-xl text-blue-900"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-2"
                        >
                          <span class="flex items-center">
                            <IoMdLogIn class="mr-2" /> Log in
                          </span>
                        </Link>
                      </>
                    )}
                  </div>

                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-blue-800 p-2 text-blue-400 hover:bg-blue-700 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setmobilestate(!mobilestate)}
              >
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          class="md:hidden"
          id="mobile-menu"
          style={{
            display: mobilestate ? "flex" : "none",
            flexDirection: "column",
          }}
        >
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              to="/Home"
              class=" text-blue-900 hover:bg-blue-700 hover:text-blue-100 block rounded-md px-3 py-2 text-xl"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/products"
              class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 block rounded-md px-3 py-2 text-xl"
            >
              Products
            </Link>
            <Link
              to="/about"
              class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 block rounded-md px-3 py-2 text-xl"
            >
              About
            </Link>
            <Link
              to="/offer"
              class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 block rounded-md px-3 py-2 text-xl"
            >
              Offers
            </Link>
            <Link
              to="/cart"
              class="text-blue-900 font-semibold hover:bg-blue-700 hover:text-blue-100 block rounded-md px-3 py-2 text-xl"
            >
              Cart
            </Link>
          </div>
          <div class="border-t border-blue-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <button
                type="button"
                class="ml-auto flex-shrink-0 rounded-full bg-blue-800 p-1 text-blue-400 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <Link
                to="/profile"
                class="block rounded-md px-3 py-2 text-xl text-blue-400 hover:bg-blue-700 hover:text-blue-100"
              >
                <span class="flex items-center justify-center text-blue-900">
                  <IoPersonOutline class="mr-2" /> Your Profile
                </span>
              </Link>
              <Link
                to="/wallet"
                class="block rounded-md px-3 py-2 text-xl text-blue-400 hover:bg-blue-700 hover:text-blue-100"
              >
                <span class="flex items-center justify-center text-blue-900">
                  <IoWalletOutline class="mr-2" />Wallet
                </span>
              </Link>
              <Link
                to="/login"
                class="block rounded-md px-3 py-2 text-xl text-blue-400 hover:bg-blue-700 hover:text-blue-100"
              >
                <span class="flex items-center justify-center text-blue-900">
                  <IoMdLogIn class="mr-2" /> Log in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
       
      </div>
    </main> */}
    </div>
  );
};

export default Navbar;
