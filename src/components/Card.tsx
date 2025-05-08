import React from 'react'
interface CardDataElementsType {
    name: string,
    price: string,
    model: string,
    image: string
}
export default function Card(params: CardDataElementsType) {
    const { name, price, model, image } = params
    return (
        <div className='w-full flex justify-center mt-10'>
            <div className='w-10/12'>
                <div className='bg-background w-full flex justify-center'>
                    <img src={image} alt="" />
                </div>
                <div className='mt-4'>
                    <h1 className='text-[16px] font-Archivo'>{model}</h1>
                    <h1 className='text-[16px] font-Archivo  font-semibold text-brand mt-2'>{name}</h1>
                    <h1 className='text-[20px] font-semibold mt-4 font-Archivo'>{price}</h1>
                </div>
            </div>
        </div>
    )
}
