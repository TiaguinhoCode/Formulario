import React from 'react'
import 'tailwindcss/tailwind.css';
import './css/FormHeader.css'
import FormContent from '../FormContent/FormContent';

const FormHeader = () => {
    return (
        <>
            <div className='container_header'>
                <h2 className='title'>Produtos</h2>
                <div className='container_pesquisa relative'>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <input type="search" id="default-search" className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Search Mockups, Logos..." required />
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Limpa Formulário</button>
                    <button className='btn_excluir text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Adicionar Produto</button>
                </div>
            </div>
            <div>
            <FormContent />
            </div>
        </>
    )
}

export default FormHeader