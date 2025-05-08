import React from 'react'
import imageBanner from "./../../../assets/image-michael-jordan (2).png"
import Logo from "./../../../assets/Vector (3).png"
export default function BannerImobile() {
    return (
        <div className='h-full'>
            <div className='w-full relative'>
                <img
                    src={imageBanner}
                    className='w-full md:'
                    alt=""
                />
            </div>
            <div className='absolute top-40 left-5 text-white'>
                <div className='flex flex-row '>
                    <img
                        src={Logo}
                        className='w-7 h-7'
                    />
                    <h1 className=' text-xl font-Archivo ml-3 '>JordanShoes </h1>
                </div>
                <div className='mt-7 '>
                    <h1 className=' text-[24px] font-Archivo'>A melhor loja de Jordan</h1>
                    <p className="text-[16px] font-Archivo mt-2">
                        O tênis Jordan
                        é fruto de uma velha e
                        forte parceria
                        entre a Nike e o jogador
                        Michael Jordan.</p>
                </div>
            </div>
        </div>
    )
}
