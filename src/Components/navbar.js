import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./login";
import Swal from 'sweetalert2'
import logo from './imges/logo.png'

function Navbar() {

  const [flag, setFlag] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):"light");

const[mode,setMode] = useState(false)

const auth = localStorage.getItem('user')
const navigate = useNavigate()

//**********  Log In Function *************

function LogOut()
{
  localStorage.clear('user')
  navigate('/')

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Log Out successfully"
  });

}

  function changeTheme() {
    let element = document.documentElement;
    if (theme === "light") {
      setTheme("dark");
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem('theme',"dark")
    } else {
      setTheme("light");
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.clear('theme')
    }
  }

  const menuList = (
    <>
      <li>
        <Link to={"/"}>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to={"/courses"}>
          <a>Courses</a>
        </Link>
      </li>
      <li>
        <Link>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link to={'/contact'}>
          <a>Contact</a>
        </Link>
      </li>
    </>
  );

  const changeColor = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    });
  };

  useEffect(()=>{

    changeColor();

  },[])

  useEffect(() => {
    

    if(theme === 'dark')
      {
        setMode(true)
      }
      else
      {
        setMode(false)
      }

  }, [theme]);

  return (
    <div
      className={`${
        flag
          ? "container bg-base-200 dark:bg-slate-800 max-w-screen-2xl duration-200 ease-out z-50  md:px-10 shadow-md px-4 fixed top-0 right-0 left-0"
          : `container  max-w-screen-2xl ${mode ?"dark:bg-slate-950 ":"" } md:px-10 px-4 fixed top-0 right-0 left-0 duration-200 ease-in`
      }`}
    >
      <div className={`navbar `}>
        <div className="navbar md:flex md:justify-start">
          <div className="drawer md:w-0 w-16 ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-white "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay "
              ></label>
              <ul className="menu p-4 pt-6 w-44 min-h-full bg-base-200  text-base-content menu-sm btn-ghostx dark:bg-slate-800 dark:text-white">
      
                {menuList}
              </ul>
            </div>
          </div>

          <a className="text-xl dark:text-white">
          <img src={logo} className="md:h-[80px] h-[70px] w-[70px] md:w-[80px] object-cover  rounded-full" alt="..." />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg dark:text-white">
            {menuList}
          </ul>
        </div>

        <div className="gap-3">
          <div className="hidden md:block">
            <label className="border px-2 py-1.5 rounded-lg flex items-center gap-4 ">
              <input
                type="text"
                className={`outline-0 ${
                  flag
                    ? "bg-base-200 duration-200 ease-out dark:bg-slate-800"
                    : "bg-white duration-200 ease-in  dark:bg-slate-950"
                }  `}
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-7 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="hidden md:block">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onChange={changeTheme}
              />

              {/* sun icon */}
              
              <svg
                className="swap-off fill-current w-8 h-8 mt-1 me-2 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* moon icon */}
              <svg
                className="swap-on fill-current w-6 h-6 mt-2 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
              
            </label>
          </div>
          <div className="w-20">
            {
             !auth ? <>
                <button
              className={`cursor-pointer px-3 py-2 dark:hover:bg-red-500  dark:text-white border rounded-md hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out`}
              onClick={()=>document.getElementById('my_modal_3').showModal()}
            >
              Log In
            </button>
          
              </>:
              <>
               <button
              className={`cursor-pointer px-2 py-2 dark:hover:bg-red-500  dark:text-white border rounded-md hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out`}

              onClick={LogOut}

            >
              Log Out
            </button>

              </>
            }
            <Login/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
