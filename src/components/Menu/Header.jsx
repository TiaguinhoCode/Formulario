import React from 'react'
import 'tailwindcss/tailwind.css';
import './css/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {/* <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button> */}

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0" aria-label="Sidebar">
                <header className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <a className="user_icon items-center pl-2.5 mb-5">
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <span className="user self-center text-xl font-semibold whitespace-nowrap dark:text-white">Usuário</span>
                    </a>
                    <nav>
                        <ul id='container_nav' className='space-y-2 font-medium'>
                            <li>
                                <Link to="/">
                                    <button href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <ion-icon name="home-outline"></ion-icon>
                                        <span className="ml-3">Home</span>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <button href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <ion-icon name="cart-outline"></ion-icon>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Pedidos</span>
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to="/produto">
                                    <button href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <ion-icon name="pricetags-outline"></ion-icon>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Produtos</span>
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to="/">
                                    <button href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <ion-icon name="person-outline"></ion-icon>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <button href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <ion-icon name="enter-outline"></ion-icon>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <button href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <ion-icon name="documents-outline"></ion-icon>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </aside>
        </>
    )
}

export default Header