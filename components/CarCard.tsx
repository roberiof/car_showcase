"use client" 
import React , { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'

import CustomButton from './CustomButton'
import CarDetails from './CarDetails'
import { calculateCarRent, generateCarImageUrl } from '@/utils'

interface CardCarProps {
    car: CarProps
}

const CarCard = ({ car }: CardCarProps) => {
    const { city_mpg, drive, make, model, transmission, year } = car
    const carRent = calculateCarRent(city_mpg, year)
    const [isOpen , setIsOpen] = useState(false)
    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                    {carRent}
                <span className='self-end text-[14px] font-medium'>
                    /day
                </span>
            </p>
            
            <div className='relative w-full h-40 object-contain my-3'>
                <Image src={generateCarImageUrl(car , 'angle')} fill alt="Car Model" />
             </div>    

             <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/steering-wheel.svg" width={20} height={20} alt="Steering Wheel" />
                        <p className='text-[14px] leading-[17px]'> {transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                    </div>
                    <div className='car-card__icon'>
                        <Image src="/tire.svg" width={20} height={20} alt="Tire" />
                        <p className='car-card__icon-text'> {drive.toUpperCase()}</p>
                    </div>
                    <div className='car-card__icon'>
                        <Image src="/gas.svg" width={20} height={20} alt="Steering Wheel" />
                        <p className='car-card__icon-text'> {city_mpg} MPG</p>
                    </div>
                </div>
                <div className='car-card__btn-container'>
                    <CustomButton 
                        title='View more'
                        containerStyles='w-full py-[16px] rounded-full  bg-primary-blue'
                        textStyles='text-white text-[14px]  leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
             </div>

             <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard