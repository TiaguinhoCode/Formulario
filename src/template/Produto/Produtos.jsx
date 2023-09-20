import React, { useState } from 'react'

import './css/EditProduto.css'

import Header from "./../../components/Menu/Header";
import FormHeader from '../../components/FormHeader/FormHeader'
import FormContent from '../../components/FormContent/FormContent'
import { Formulario } from '../../components/forms/formulario'


const EditProduto = () => {

    // Fechar e abrir modal
    const [openModal, setOpenModal] = useState(false)

    console.log(openModal)
    return (
        <div id="root">
            <Header />

            <main className="main">
                <FormHeader setOpenModal={() => setOpenModal(true)} />
                <div className="conteudo">
                    <Formulario  openModal={openModal} setOpenModal={() => setOpenModal(false)} />
                    <FormContent setOpenModal={() => setOpenModal(true)} />
                </div>
            </main>

            {/* <FormHeader setOpenModal={() => setOpenModal(true)} />
            <div className="conteudo">
                <Formulario openModal={openModal} setOpenModal={() => setOpenModal(false)} />
                <FormContent setOpenModal={() => setOpenModal(true)}/>
            </div> */}
            {/* <div className="conteudo"> */}
            {/* <div className="Background_modal "> */}
            {/* <div id="authentication-modal" aria-hidden="false" className="Conteudo_modal overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-1 right-5 md:inset-0 z-50 justify-center items-center"> */}

            {/* </div> */}
            {/* </div> */}
            {/* <FormContent /> */}

        </div>

        // </div>
    )
}

export default EditProduto