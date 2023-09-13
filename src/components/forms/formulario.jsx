// Biblioteca
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import axios from 'axios';

// Css
import './css/styles.css'

// Validação do Formulario
const validationPost = yup.object().shape({
    id: yup.number().required().typeError("Por favor preencha o campo id").min(0),
    descricao: yup.string().required("Por favor preencha o campo descrição").max(100, "O campo descrição precisar ter menos de 100 caracteres"),
    estoque: yup.number().required().typeError("Por favor preencha o campo estoque").min(0, "Por favor insira valor maior que 0"),
    referencia: yup.string().required("Por favor preencha o campo referencia").max(100, "O campo descrição precisar ter menos de 100 caracteres"),
    valor: yup.number().required().typeError("Por favor preencha o campo valor").min(0, "Por favor insira valor maior que 0"),
    imagem: yup.string().required("Por favor insira um link"),
    marca: yup.string().required("Por favor preencha o campo marca")
})

export const Formulario = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    // const addPost = data => console.log(data)
    const addPost = data => axios.post("http://localhost:3004/profile", data)
        .then(() => {
            console.log("Foi enviado com sucesso os dados!")
        })
        .catch(() => {
            console.log("Erro no envio")
        })



    return (
        <>
            <div className="form-img">
                <div className="fundo mb-4">
                </div>
            </div>

            <div className="formulario">
                <form className='form_container' onSubmit={handleSubmit(addPost)}>
                    <div className="form_title">
                        <div className="titulo">
                            <h1>Insira um Produto</h1>
                            <div className="form_envio"></div>
                        </div>
                    </div>

                    <div className="container_form">
                        <div className="container_label">
                            <div className="container_input">
                                <label htmlFor="website-admin" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">ID:</label>
                                <div className="icon_descricao">
                                    <ion-icon name="key"></ion-icon>
                                </div>
                                <input {...register("id")} type="number" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
                                <p className='erro_menssage'>{errors.id?.message}</p>
                            </div>

                            <div className="container_input">
                                <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição:</label>
                                <div className="icon_descricao">
                                    <ion-icon name="clipboard"></ion-icon>
                                </div>
                                <input {...register("descricao")} type="text" name="descricao" id="descricao" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" ' />
                                <p className='erro_menssage'>{errors.descricao?.message}</p>
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referência:</label>
                                <input {...register("referencia")} type="text" name="referencia" id="referencia" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" ' />
                                <p className='erro_menssage'>{errors.referencia?.message}</p>
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor:</label>
                                <div className="icon_descricao">
                                    <ion-icon name="calculator"></ion-icon>
                                </div>
                                <input {...register("valor")} type="number" name="valor" id="valor" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" ' />
                                <p className='erro_menssage'>{errors.valor?.message}</p>
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estoque:</label>
                                <div className="icon_descricao">
                                    <ion-icon name="storefront"></ion-icon>
                                </div>
                                <input {...register("estoque")} type="text" name="estoque" id="estoque" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" ' />
                                <p className='erro_menssage'>{errors.estoque?.message}</p>
                            </div>

                            <div>
                                <label htmlFor="marca" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escolha marca</label>
                                <select {...register("marca")} name='marca' id="marca" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>kimaster</option>
                                </select>
                                <p className='erro_menssage'>{errors.marca?.message}</p>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
                                <input name='imagem' {...register("imagem")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="url"></input>
                                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                            </div>
                        </div>

                    </div>

                    <div className="container_button">
                        <button type="submit" className="button_envia text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envia</button>
                        <button type="button" className="button_cancela text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Limpa</button>
                    </div>

                </form>
            </div>
        </>
    )
}