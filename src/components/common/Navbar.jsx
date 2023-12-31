"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import SearchButton from "../SearchButton";
import CartContextProvider from "../../context/cartContext";
import { usePathname } from "next/navigation";

const NavbarMain = ({ params }) => {
  const currentPath = usePathname();
  const { cart } = useContext(CartContextProvider);
  const [cartItem, setCartItem] = cart;
  const [toggleNav, setToggleNav] = useState(false);

  // ? Navbar Toggle Functionality...
  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };
  const toggleMobNav = () => {
    setToggleNav(true);
  };

  return (
    <div className="fixed left-0 top-0 z-[999] w-full bg-baseClr1 md:relative md:bg-transparent">
      <div className="container py-4">
        <nav className="md:flex md:items-center md:justify-between w-full gap-2 max-w-7xl hidden">
          <div>
            <Link href="/" className="flex items-center justify-center">
              <span className="text-4xl text-primary">
                <RiShoppingBagFill />
              </span>
              <h2 className="text-3xl font-bold uppercase text-primary">
                valley
              </h2>
            </Link>
          </div>
          <div className="gap-2 flexRow">
            <Link
              className={
                currentPath === "/"
                  ? "navList navLink text-primary"
                  : "navLink navList"
              }
              href="/"
            >
              Home
            </Link>
            <Link
              className={
                currentPath === "/product"
                  ? "navLink navList text-primary"
                  : "navLink navList"
              }
              href="/product"
            >
              Product
            </Link>
            <Link
              className={
                currentPath === "/dashboard"
                  ? "navLink navList text-primary"
                  : "navLink navList"
              }
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
          {currentPath === "/product" && (
            <div className="gap-4 flexRow">
              <li>
                <SearchButton />
              </li>
            </div>
          )}
          <div className="gap-4 flexRow">
            <li className="flex items-center gap-2">
              <Link
                className={
                  currentPath === "/register"
                    ? "navLink text-primary"
                    : "navLink"
                }
                href="/register"
              >
                {" "}
                <span>
                  <span>
                    <VscAccount className="pr-2 text-3xl" />
                  </span>
                </span>
                Sign Up
              </Link>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="countCart"></span>
              <Link
                className={
                  currentPath === "/cart" ? "navLink text-primary" : "navLink"
                }
                href="/cart"
              >
                <span className="relative">
                  <BsCartPlus className="pr-2 text-3xl" />
                  <span>
                    <p
                      className={
                        currentPath === "/cart"
                          ? "absolute -top-2 left-1 mb-1 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-nutral2 text-base  font-semibold text-nutral3"
                          : "absolute -top-2 left-1 mb-1 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-nutral2 text-base  font-semibold text-nutral3"
                      }
                    >
                      {cartItem.length}
                    </p>
                  </span>
                </span>
                Cart{" "}
              </Link>
            </li>
          </div>
        </nav>
        <nav className="z-[999] flex items-center justify-between md:hidden">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-primary">
              <span className="text-primary">
                <RiShoppingBagFill />
              </span>
              valley
            </h2>
          </div>
          <div
            className="z-[110] cursor-pointer font-bold text-nutral2 md:hidden"
            onClick={handleToggle}
          >
            {toggleNav ? <FaBars /> : <RxCross1 />}
          </div>
          <div
            className={
              !toggleNav
                ? "fixed inset-y-0 right-0 w-full bg-nutral3 px-6 py-28 backdrop-blur-md transition-all duration-500 ease-in-out md:static md:px-4 md:py-4"
                : "fixed inset-y-0 -right-full w-full bg-nutral3 px-6 py-28 backdrop-blur-md transition-all delay-100 duration-500 ease-in-out md:bg-transparent md:px-4 md:py-0"
            }
          >
            <div className="">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <Link
                  onClick={toggleMobNav}
                  className={
                    currentPath === "/"
                      ? "navLink navList text-primary"
                      : "navLink navList  text-nutral2"
                  }
                  href="/"
                >
                  Home
                </Link>
                <Link
                  onClick={toggleMobNav}
                  className={
                    currentPath === "/product"
                      ? "navLink navList text-primary"
                      : "navLink navList text-nutral2"
                  }
                  href="/product"
                >
                  Product
                </Link>
                <Link
                  onClick={toggleMobNav}
                  className={
                    currentPath === "/dashboard"
                      ? "navLink navList text-primary"
                      : "navLink navList text-nutral2"
                  }
                  href="/dashboard"
                >
                  Dashboard
                </Link>
                <li className="flex items-center justify-start gap-2 py-2 navList">
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/register"
                        ? "flex items-center font-bold hover:text-nutral3 transition-all ease-in-out duration-200 text-primary"
                        : "flex items-center font-bold text-nutral2 hover:text-nutral3 transition-all ease-in-out duration-200"
                    }
                    href="/register"
                  >
                    {" "}
                    <span>
                      <VscAccount className="pr-2 text-2xl" />{" "}
                    </span>{" "}
                    Sign Up
                  </Link>
                </li>{" "}
                <li className="flex items-center justify-start gap-2 py-2 font-bold navList">
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/cart"
                        ? "flex items-center font-bold hover:text-nutral3 transition-all ease-in-out duration-200 text-primary"
                        : "flex items-center font-bold text-nutral2 hover:text-nutral3 transition-all ease-in-out duration-200"
                    }
                    href="/cart"
                  >
                    {" "}
                    <span className="relative">
                      <BsCartPlus className="pr-2 text-2xl font-bold" />
                      <span>
                        <p
                          className={
                            currentPath === "/cart"
                              ? "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-nutral2 text-small font-bold text-nutral3"
                              : "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-nutral2 text-small font-bold text-nutral3"
                          }
                        >
                          {cartItem.length}
                        </p>
                      </span>
                    </span>{" "}
                    Cart{" "}
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarMain;
