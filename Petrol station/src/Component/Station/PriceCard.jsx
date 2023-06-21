import React from 'react'

const PriceCard = ({diesel, petrol, kerosene}) => {
  return (
    <div className=''>
        <div className='h-max w-max p-7 rounded-md relative bg-secColor shadow-rounded-xl'>
            <span className='w-2 h-2 rounded-full bg-white absolute top-2 right-2'></span>
            <span className='w-2 h-2 rounded-full bg-white absolute top-2 left-2'></span>
            <span className='w-2 h-2 rounded-full bg-white absolute bottom-2 right-2'></span>
            <span className='w-2 h-2 rounded-full bg-white absolute bottom-2 left-2'></span>
            <div className='flex flex-col space-y-3'>
                {/* Petrol */}
                <div className='flex justify-between space-x-4 items-center'>
                    <p className='text-sm font-semibold font-pt'>Petrol</p>
                    <div className='bg-white flex items-center divide-x divide-slate-500 font-open text-slate-600'>
                        <p className='px-2'>3</p>
                        <p className='px-2'>8</p>
                        <p className='px-2'>5</p>
                    </div>
                </div>
                {/* Diesel */}
                <div className='flex justify-between space-x-4 items-center'>
                    <p className='text-sm font-semibold font-pt'>Diesel</p>
                    <div className='bg-white flex items-center divide-x divide-slate-500 font-open text-slate-600'>
                        <p className='px-2'>3</p>
                        <p className='px-2'>8</p>
                        <p className='px-2'>5</p>
                    </div>
                </div>
                {/* Kerosene */}
                <div className='flex justify-between space-x-4 items-center'>
                    <p className='text-sm font-semibold font-pt'>Kerosene</p>
                    <div className='bg-white flex items-center divide-x divide-slate-500 font-open text-slate-600'>
                        <p className='px-2'>3</p>
                        <p className='px-2'>8</p>
                        <p className='px-2'>5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PriceCard