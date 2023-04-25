import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";
import { useEffect, useState } from "react";
import imgAvatar from "../../assets/images/imgEditarCamp.svg"
import side from "../../assets/images/side.svg"
import { Plus } from "phosphor-react";


export function EditarCampeonato(this: any){

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
        <section>
            <Menur ativo1="ativo" />
			<SubMenu titulo="Editar Campeonato" btnEditarAtivo={false}/>
           <main className="bg-verde-claro absolute h-screen w-full">
                <div className="relative flex flex-row justify-center gap-x-96">
                    <div className="absolute -mr-96 pl-96">
                        <img className="h-screen pl-96" src={side} alt="" />
                    </div>
                    <div className="absolute 
                        w-[43.063rem] h-[29.875rem] 
                        bg-white rounded-md
                         mt-40 mr-20
                         p-7">
                
                        <h2 className="text-xl font-bold">
                            Editar Perfil
                        </h2>

                        <form action="" className=" flex flex-row gap-5 ">
                            <div>
                                <img className="scale-[0.4] mt-[-5rem] rounded-full w-[19.9rem] h-[19.1rem]" src={preview} alt="" />
                                
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
                                                Nome do Campeonato
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input 
                                            type="text" 
                                            name="floating_premiacao" 
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                        <label 
                                            htmlFor="floating_premiacao" 
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Premiação
                                        </label>
                                    </div>

                                    <div className="relative z-0 w-full mb-6 group">
                                        <input 
                                            type="text" 
                                            name="floating_descricao" 
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                        <label 
                                            htmlFor="floating_descricao" 
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Descrição
                                        </label>
                                    </div>

                                </div>

                            </div>

                            <div className="flex flex-col justify-center items-center border-l border-l-borderDireitaTimes w-1/2 pl-3">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input 
                                        type="date" 
                                        name="floating_data_inicio" 
                                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                    <label 
                                        htmlFor="floating_data_inicio" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Data de Inicio
                                    </label>    
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input 
                                        type="date" 
                                        name="floating_data_terminio" 
                                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" " required />
                                    <label 
                                        htmlFor="floating_data_terminio" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Data de Terminio
                                    </label>    
                                </div>
                                
                                <button
                                    className="w-4/5 bg-black text-white text-xl font-bold py-1 rounded-md"
                                    type="submit"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
           </main>
        </section>
    )
}