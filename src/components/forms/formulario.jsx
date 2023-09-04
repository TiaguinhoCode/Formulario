import './css/styles.css'
import background_registro from './../../assets/background_registro.jpg'
import { useEffect, useState } from 'react'

export const Formulario = () => {
    return (
        <>
          
            <div class="form-img">
                <div className="fundo mb-4">
                    
                </div>
            </div>

            <div className="formulario">
                <form className='grid gap-6 mb-6 md:grid-cols-2' action="#">
                    <div className="form_title">
                        <div className="titulo">
                            <h1>Insira um Produto</h1>
                            <div className="form_envio"></div>
                        </div>
                    </div>

                    <div className="container_label">
                        <div className="container_input">
                            <label htmlFor="website-admin" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">ID:</label>
                            <div className="icon_descricao">
                                <ion-icon name="key"></ion-icon>
                            </div>
                            <input type="text" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>

                        <div className="container_input">
                            <label for="last_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição:</label>
                            <div className="icon_descricao">
                                <ion-icon name="clipboard"></ion-icon>
                            </div>
                            <input type="text" name="Descrição" id="descricao" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required'/>
                        </div>

                        <div>
                            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referência:</label>
                            <input type="text" name="Referência" id="referencia" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required'/>
                        </div>

                        <div>
                            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor:</label>
                            <div className="icon_descricao">
                                <ion-icon name="calculator"></ion-icon>
                            </div>
                            <input type="number" name="valor" id="valor" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required'/>
                        </div>
                        
                        <div>
                            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estoque:</label>
                            <div className="icon_descricao">
                                <ion-icon name="storefront"></ion-icon>
                            </div>
                            <input type="text" name="" id="estoque" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required'/>
                        </div>

                        <div>
                            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>
                            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                        </div>

                        
                    </div>

                    <div className="container_button">
                        <button type="button" class="button_envia text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envia</button>
                        <button type="button" class="button_cancela text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Limpa</button>
                    </div>

                </form>
            </div>
        </>
    )
}