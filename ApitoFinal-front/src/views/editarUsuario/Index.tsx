import React, { useEffect, useState } from "react";
import { Menur } from "../../components/TelasHome/menu";
import imgAvatar from "../../assets/images/imgGitLet.svg"
import { Plus } from "phosphor-react";

export const PaginaEditarUsuario = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState('')

    useEffect(() => {
        if (!selectedFile) {
            setPreview(imgAvatar)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }

    function uploadFile(){
        document.getElementById('selectedFile')?.click()
    }

    return(
        <div>
            <Menur ativo="ativo" />
            <section
                className="py-[7.938rem]
                flex flex-row
                pl-[19.438rem]
                gap-6"
            >
                <div 
                    className="
                    h-[28.813rem] w-[26.188rem]
                    border-2
                    border-inherit
                    rounded-xl
                    shadow-lg
                    font-padrao
                    p-10
                    flex flex-col"
                >
                    <h2
                        className="text-xl
                        font-bold"
                    >
                        Editar Perfil
                    </h2>

                    <form 
                        action=""
                        className="
                        flex
                        flex-col
                        gap-2
                        
                        "
                    >

                        <img className="scale-50 mt-[-5rem] rounded-full w-[19.9rem] h-[19.1rem]" src={preview} alt="" />
                        
                        <div className="ml-52 mt-[-7.7rem] z-10">
                            <button
                                className="
                                w-11 h-11
                                bg-verde-claro
                                rounded-full
                                pl-2"
                                onClick={uploadFile.bind(this)}
                            >
                                <Plus size={28} color="#fcfcfc" />
                            </button>
                            <input id="selectedFile" name="image" type="file" style={{display:"none"}} accept="image/png, image/jpg"
                                onChange={onSelectFile}
                            />

                        </div>

                        

                        <div className="flex flex-col gap-0">

                            <div className="relative z-0 w-full mb-6 group">
                                <input 
                                    type="text" 
                                    name="floating_name" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                <label 
                                    htmlFor="floating_name" 
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Nome Completo
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input 
                                    type="text" 
                                    name="floating_email" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                <label 
                                    htmlFor="floating_email" 
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Email
                                </label>
                            </div>

                        </div>

                        <button
                            className="w-full bg-verde-claro text-white text-xl font-bold py-1 rounded-md"
                            type="submit"
                        >
                            Editar
                        </button>
                    </form>
                </div>

                <div 
                    className="
                    h-[23.438rem] w-[24.5rem]
                    border-2
                    border-inherit
                    rounded-xl
                    shadow-lg
                    font-padrao
                    p-10
                    flex flex-col"
                >

                    <h2
                        className="text-xl
                        font-bold"
                    >
                        Alterar Senha
                    </h2>

                    <div className="mt-4 group">
                        
                        <div className="relative z-0 w-full mb-6 group">
                                    <input 
                                        type="password" 
                                        name="floating_currentPass" 
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                    <label 
                                        htmlFor="floating_currentPass" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Digite sua senha atual
                                    </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                                    <input 
                                        type="text" 
                                        name="floating_email" 
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                    <label 
                                        htmlFor="floating_email" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Digite sua nova senha
                                    </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                                    <input 
                                        type="text" 
                                        name="floating_email" 
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                    <label 
                                        htmlFor="floating_email" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Confirme sua nova senha
                                    </label>
                        </div>

                        <button
                            className="w-full bg-verde-claro text-white text-xl font-bold py-1 rounded-md"
                            type="submit"
                        >
                            Alterar
                        </button>
                    </div>

                </div>
            </section>
        </div>
    )
}