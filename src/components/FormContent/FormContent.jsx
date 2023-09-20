// Bibliotecas
import React, { useState } from 'react'

// Componetes
import { LoadProdutos } from './../utils/loadProdutos';

// Styles
import './css/FormContent.css'
import axios from 'axios';

const FormContent = ({ setOpenModal }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const produtos = LoadProdutos();

  const deletePost = async (productId) => {
    try {
      await axios.delete(`https://api.catalogo.website/v1/api/products/${productId}`);
      console.log("Produto removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover o produto", error);
    }
  };

  console.log(produtos)

  return (
    <div className='tabela_produto relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='tabela_container w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='tabela_cabecalho text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className="px-4 py-2 lg:py-3 lg:px-6">
              <span className="sr-only">
                Image
              </span>
            </th>
            <th className="px-4 py-2 lg:py-3 lg:px-6">
              Descrição
            </th>
            <th className="px-4 py-2 lg:py-3 lg:px-6">
              Unidade
            </th>
            <th className="px-4 py-2 lg:py-3 lg:px-6">
              Referencia
            </th>
            <th className="px-4 py-2 lg:py-3 lg:px-6">
              Marca
            </th>
            <th className="px-4 py-2 lg:py-3 lg:px-6">
              stock
            </th>
            <th className="px-4 py-2 lg:py-3 lg:px-6">
              Valor
            </th>
            <th className="px-4 py-2 lg:py-3 lg:px-6">
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="produtos">
                <img className='produtoImage w-full' src={produto.urlImage} alt="Apple Watch" />
              </td>
              <td className="px-4 py-2 lg:py-4 lg:px-6 font-semibold text-gray-900 dark:text-white">
                {produto.description}
              </td>
              <td className="px-4 py-2 lg:py-4 lg:px-6">
                <div className="flex items-center space-x-3">
                  <div>
                    {produto.cx_und}
                  </div>
                </div>
              </td>
              <td className="px-4 py-2 lg:py-4 lg:px-6 font-semibold text-gray-900 dark:text-white">
                {produto.ref}
              </td>
              <td className="px-4 py-2 lg:py-4 lg:px-6 font-semibold text-gray-900 dark:text-white">
                {produto.brand}
              </td>
              <td className="px-4 py-2 lg:py-4 lg:px-6 font-semibold text-gray-900 dark:text-white">
                {produto.stock}
              </td>
              <td className="px-4 py-2 lg:py-4 lg:px-6 font-semibold text-gray-900 dark:text-white">
                ${produto.value}
              </td>
              <td className="button_acao px-4 py-2 lg:py-4 lg:px-6">
                <button onClick={() => { deletePost(produto.id) }} className="button_remove bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-base px-5 py-2.5 lg:px-6 lg:py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Remove</button>
                <button onClick={() => { setOpenModal(); setSelectedProduct(produto) }} className='bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-base px-5 py-2.5 lg:px-6 lg:py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FormContent;
