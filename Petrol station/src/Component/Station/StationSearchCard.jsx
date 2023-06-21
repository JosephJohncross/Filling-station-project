import React from 'react'

// image import
import ratingIcon from "../../assets/images/rating.svg"
import Button from '../Common/Button'
import PriceCard from './PriceCard'

const StationSearchCard = ({distance, openingTime, name, address, rating, petrolPrice, dieselPrice, kerosinePrice}) => {
  return (
    <div className='w-full p-6 flex bg-white font-open shadow-rounded-xl rounded-lg hover:bg-gray-100/80 transition-colors duration-200'>
        {/* Left side */}
        <div className='w-full mini:w-2/3 flex flex-col space-y-3'>
            {/* Direction and opening hour */}
            <div className='flex divide-x items-center space-x-2 text-xs'>
                <p className=''>{distance} away</p>
                <p className='text-[#0B8826] pl-2'>Open from {openingTime}</p>
            </div>
            {/* Name */}
            <p className='text-xl font-semibold font-pt'>{name}</p>
            {/* Address */}
            <p className='text-sm'>{address}</p>
            {/* Rating */}
            <div className='flex items-center text-xs space-x-5 font-open'>
                <span className='flex space-x-2 items-center'>
                    <img src={ratingIcon} alt='' className='w-4'/>
                    <p className=''>{rating} rating</p>
                </span>
                <p className='text-[#D20000]'>Log in to see Customer’s reviews</p>
            </div>
            <Button
                shade={"blueBig"}
                content={"Go to"}
                icon={true}
            />
        </div>
        {/* Right side */}
        <div className=' w-full mini:w-1/3 flex justify-end items-center'>
            <PriceCard
                diesel={dieselPrice}
                kerosene={kerosinePrice}
                petrol={petrolPrice}
            />
        </div>
    </div>
  )
}

export default StationSearchCard