'use client'
import BtnForm from '@/components/BtnForm'
import ImageForm from '@/components/ImageForm'
import InputDatos from '@/components/InputDatos'
import Links from '@/components/Links'
import PrincipalFontForm from '@/components/PrincipalFontForm'
import Link from 'next/link'
import axios from 'axios'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { tokenState } from "@/atoms/tokenState"
import { loginState } from '@/atoms/loginState'

const CambiarContrasena = () => {
    // const [email, setEmail] = useState("");
 const [contraseña, setContraseña] = useState("");
const [nuevaContraseña, setNuevaContraseña] = useState("");
const [token, setToken] = useRecoilState(tokenState)

    const handleClick = (event: any) => {
        event.preventDefault();
        console.log(token);
        console.log(contraseña);
        console.log(nuevaContraseña);
        
        axios
          .post("https://ecommerce-api-backend-nlld.onrender.com/cambiar-contrasena", {
            password: contraseña,
            nuevaPassword: nuevaContraseña
          },{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(function (response) {
            console.log(response);
            if (response.status === 200) {
              console.log("El mensaje fue enviado con exito");
              alert("La contraseña fue actualizada correctamente")
            }
          })
          .catch(function (error) {
            console.log(error, "error");
            alert("Error al actualizar la contraseña")
          });
      };
    
    return (
            <div className='w-full h-full flex flex-col lg:flex-row p-2 justify-center my-24'>
                <div className='hidden lg:block rounded-l-xl shadow-2xl lg:w-[40vw] relative hover:brightness-90 ease-in-out duration-300'>
                    <div className='flex h-full w-full'>
                        <h1 className="relative glow-effect text-4xl font-bold tracking-tight text-white sm:text-6xl z-10 my-auto mx-auto">
                            Tech Store
                        </h1>
                        <img
                            src={"/imagenes/technology_1280.jpg"}
                            alt="Cambiar contraseña"
                            className="absolute inset-0 -z-10 h-full w-full object-cover fade-in rounded-l-xl"
                        />
                    </div>
                </div>
                <div className=' flex flex-col bg-[#fff] text-center py-5 rounded-r-lg shadow-2xl'>
                    <PrincipalFontForm contenido={'Cambiar Contraseña'} color={'#50C2D8'}></PrincipalFontForm>
                    <form className='w-[90vw] sm:w-[42vw] m-auto p-4 md:p-10 py-8 flex flex-col rounded-xl'>
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Contraseña Actual</label>
                        <input onChange={(e) => setContraseña(e.target.value)} className='border-[1px] border-[#50C2D8] rounded-md shadow-lg ' placeholder="" type="password" />
                    </section>
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Nueva Contraseña</label>
                        <input onChange={(e) => setNuevaContraseña(e.target.value)} className='border-[1px] border-[#50C2D8] rounded-md shadow-lg ' placeholder="" type="password" />
                    </section>
                       
                        <Link href={"/"}>
                <button onClick={handleClick} className='relative rounded-3xl border-2 mx-auto p-[1vh] pl-[4vw] pr-[4vw] md:pl-[2vw] my-4 md:pr-[2vw] bg-[#2C5364] font-light text-white hover:scale-105 ease-in-out duration-300 hover:bg-white hover:text-[#50C2D8] hover:font-semibold hover:border-[#50C2D8] lg:my-6'>
                   <p>Finalizar</p> 
                    {/* <a href='/' className='absolute z-20 top-0 left-0 h-full w-full'></a>  */}
                </button>
                </Link>
                    </form>
                </div>
            </div>
    )
}

export default CambiarContrasena